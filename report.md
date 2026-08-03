# Report: fixing strict-TS errors in runtime `test()` bodies (category A)

## Task

`source/intersperse.spec.ts:5` failed strict TypeScript checking. A full strict `tsc`
pass over all 136 spec files surfaced **53 files with 189 type errors**, split into:

- **A) Errors in runtime `test()` bodies** — 49 files (fixed in this session)
- **B) `expectTypeOf` assertion failures** — 8 files (out of scope; 4 fixed as a side effect)

## Why CI never caught these

- `yarn lint:typings` (`tsc`) — the root `tsconfig.json` **excludes `source/`**
- `yarn test:typings` — vitest uses esbuild, which **strips types without checking**;
  `expectTypeOf` assertions are never validated by the compiler

The repo pins `typescript: 7.0.1-rc` (the Go port), whose inference differs from TS 5/6:

- **Literal narrowing**: `eqBy(Math.abs, 5)` infers `T = 5` instead of `number`
- **Unbound-generic overloads**: overloads whose object type is only inferable at the
  *second* call (`path('a.b.c')`, `sortByPath('a.b')`, `pluck('a')`, `indexBy('id')`,
  `map(double)`, …) fail to resolve when the first call has no inference site for `S`

## Verification

| Check | Result |
|---|---|
| Strict tsc over all spec files (this session's check) | 49/49 category A files clean; only 4 category B errors remain |
| `yarn test:ci` | 135 files / 502 tests pass |
| `yarn test:typings` | 502 tests pass |
| `yarn lint:typings` (`tsc`) | passes |
| `files/index.d.ts` standalone `tsc --noEmit --strict` | clean |

## Typing changes — `files/index.d.ts` (10 methods)

### Path-family catch-all overloads

TS7 cannot resolve the deep template-literal / tuple overloads when the object type `S`
is unbound at the first call. Appended catch-all overloads at the end of each section
(preserving precise inference where the specific overloads still work, e.g. `path(['a','b'])`):

```ts
// path (2 overloads appended)
export function path(path: string): <S>(obj: S) => unknown;
export function path(path: readonly (string | number)[]): <S>(obj: S) => unknown;

// modifyPath (1 overload appended)
export function modifyPath<U, T>(path: string, fn: (value: any) => T): (obj: U) => U;

// sortByPath / sortByPathDescending (2 overloads each)
export function sortByPath(path: string): <S>(list: S[]) => S[];
export function sortByPath(path: readonly (string | number)[]): <S>(list: S[]) => S[];

// pathSatisfies (2 overloads appended)
export function pathSatisfies<T>(predicate: (x: any) => boolean, path: string): (obj: T) => boolean;
export function pathSatisfies<T>(predicate: (x: any) => boolean, path: readonly (string | number)[]): (obj: T) => boolean;
```

### switcher

Rewrote `Switchem` so each `.is()` carries its own result type forward and numeric
literals widen to `number` while function results stay callable:

```ts
interface Switchem<T, R> {
  is: (<R2>(fn: (x: T) => boolean, result: R2) => Switchem<T, R2>) &
      (<R2>(value: any, result: R2) => Switchem<T, R2>);
  default: (x: any) => R extends number ? number : R;
}
```

Removed the dead `isfn2`/`Switchem2` types and the second `switcher<T, U>` overload.

### evolve

The old `evolve<T>(rules: { [K in keyof T]?: (x: T[K]) => T[K] })` inferred `T` from the
rules only, collapsing the result to `{ foo: number }` and losing untouched input keys.
Now the input type flows through and the result preserves the full shape:

```ts
export function evolve<R>(rules: R): <T extends { [K in keyof R]: any }>(obj: T) => T;
```

### assertType

Added a plain-boolean-predicate overload (the guard overload still wins for real guards):

```ts
export function assertType<T, U extends T>(fn: (x: T) => x is U) : (x: T) => U;
export function assertType<T>(fn: (x: T) => boolean): (x: T) => T;
```

### tryCatch

Added a 0-argument callback overload (runtime tests call `tryCatch(fn, fallback)()`):

```ts
export function tryCatch<U>(fn: () => U, fallback: U): () => U;
export function tryCatch<T, U>(fn: (input: T) => U, fallback: U): (input: T) => U;
```

### mapParallelAsync

Added the missing `(value, index)` callback overload (runtime passes the index):

```ts
export function mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
  batchSize?: number,
): (data: T) => Promise<Mapped<T, U>>;
```

### match

The runtime forwards the pattern to `String.prototype.match`, which accepts strings.
Widened the signature:

```ts
export function match(regExpression: RegExp | string): (str: string) => string[];
```

## Test file changes (~35 files)

### Explicit type args / generics (TS7 literal narrowing)

- `eqBy<number>(Math.abs, 5)(-5)` — all five runtime calls
- `maxBy<number>`, `minBy<number>`
- `map<number[], number>(double)`, `mapAsync<number[], number>(fn)`,
  `mapChain<number[], number, number, number>(…)`, `filterMap<number[], number | null>(double)`,
  `mapParallelAsync<number[], number>(fn)`, `mapParallelAsync<number[], string>(fn, 2)`
- `modifyProp<typeof person, 'age'>('age', …)`, `modifyProp<number[], 1>(1, …)`
- `createObjectFromKeys<['a', 'b'], string>(…)`
- `indexBy<{ id: string; title: string }, 'id'>('id')`

### Typed callbacks (unbound-`unknown` inference)

- `takeWhile((x: number) => …)`, `takeLastWhile((x: number) => …)`
- `propSatisfies((x: number) => …)`
- `unless((x: number) => x > 10, …)`
- `sortBy((x: { a: number }) => x.a)`
- `zipWith((x: number, y: number) => …)`
- `uniqWith((x: { a: number }, y: { a: number }) => …)`, `(x: string, y: string)`,
  `(errorA: { id?: number; reason: string }, errorB: { id?: number; reason: string })`
- `switcher` result functions annotated `(x: number) => x + 1`
- `sortWith` — replaced `ascend(prop('title'))` with `ascend((x: Album) => x.title)`
  (added `type Album = (typeof albums)[number]`)
- `tryCatch((x: string) => …)` in the pipe type test (avoids a TS7 overload-selection quirk)
- `when` — predicate is now a type guard
  `(x: number | string): x is number => typeof x === 'number'`; the branch fn narrows:
  `(x: number | string) => (typeof x === 'number' ? x + 1 : x)`

### Deliberate wrong-input tests (casts)

- `complement` → `fn([1, 2, 3] as any)`
- `includes` → `includes([1])(/foo/g as never)`
- `propEq` / `propOr` → `(obj as any)`, `(null as any)`, `(undefined as any)`
- `pick` / `omit` → `(obj as any)` for missing-prop cases
- `objectIncludes` → `condition as Record<string, number>` and `(null as any)`
- `indexOf` / `lastIndexOf` → `{ c: 4 } as any`, `[] as number[]`
- `reduce` → `reduce(concat as any, [])(null as any)`
- `anyPass([] as ((x: number) => boolean)[])`
- `pluck(undefined as never)`, `pluck('a')([…] as Array<Record<string, number>>)`
- `sortByDescending(path('a.b') as (x: (typeof list)[number]) => number)`
- `eqProps('c' as 'a' | 'b', obj1)`
- `eqBy((x: number[]) => x.length, [42])([42])` (was `Math.abs` on arrays)

### Behavior-equivalent fixes

- `dropWhile` / `takeWhile` — `() => 0` / `x => 0` → `x => false` (0 is falsy at runtime;
  assertion outcome unchanged)
- `type.spec` — `new Buffer.from('foo')` → `Buffer.from('foo')`, `(ms: number)`,
  `import { type, RambdaTypes } from './type'`
- `compact.spec` type-test input — `c: Record<string, any>` → precise object shape so the
  `expectTypeOf(result.c).toEqualTypeOf<{…}>()` assertion is satisfiable
- `groupBy` — `result.sufficient![0]`

### Removed / added files

- **Deleted** `source/createObjectFromKeys.ts` — stale dtslint-style file that shadowed
  `createObjectFromKeys.d.ts` (caused TS2459); nothing references it
- **`source/type.d.ts`** — now re-exports `RambdaTypes`
- **`source/type.spec.ts`** — `// @ts-expect-error` on the `ramda` import (ramba ships
  without bundled types; an inline `declare module 'ramba'` cannot augment an untyped
  module — TS2665)
- `intersperse.spec.ts` was already fixed and committed by the user; left untouched

## Remaining out-of-scope errors (category B)

Strict tsc still reports 4 files with `expectTypeOf` assertion failures (the actual
inferred type does not match the asserted type):

```
filter.spec.ts:108      rejectObject.spec.ts:15
take.spec.ts:24         takeLast.spec.ts:23
```

4 of the original 8 category B errors (`sortByDescending:13`, `sortByPathDescending:16`,
`takeWhile:21`, `takeLastWhile:21`) were fixed as a side effect of the path-family and
callback-annotation changes.

Also not addressed (not spec files / comparison suites): `combinations.d.ts`,
`isValid.d.ts`, `remove.d.ts`, `splitEveryStrict.d.ts` (stubs re-exporting members
missing from `files/index.d.ts`) and `radashi-comparison-spec.ts` / `remeda-comparison-spec.ts`.

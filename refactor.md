# Spec file migration: `*.spec.js` + `*-spec.ts` → `*.spec.ts`

## ORIGINAL PROMPT

Goal: migrate runtime source/*.spec.js tests and source/*-spec.ts to source/*.spec.ts form
1. Write refactor.md at repo root listing every method that has either *.spec.js or *-spec.ts file(or both), grouped into 10 batches of ~10% each, in dependency order.
2. Each dev next completes one batch: create foo.spec.ts using foo-spec.ts(if exists) and foo.spec.js(if exists)
2.1 Extend TS tests to assert also final result(which is missing in -spec.ts files)
2.2 Keep relative imports: `import { foo } from './foo'`, `import { pipe } from './pipe'` — do NOT import from 'rambda' (that resolves to the build dir, bad for dev)
2.3 For every method imported via a relative specifier, create `source/<name>.d.ts` containing `export { <name> } from '../files/index'` so TS resolves types from the type-of-record while vitest still loads the `.js` at runtime
2.4 don't delete the old files.
3. While running the batch, work file by file because you need to verify new file is correct with "node node_modules/vitest/
dist/cli.js run --config vitest.typings.config.js source/foo.spec.ts" and "yarn lint:typings"

## Current state

| Category | Count |
|---|---|
| Methods with both `*.spec.js` and `*-spec.ts` | 100 |
| Methods with only `*.spec.js` | 26 |
| Methods with only `*-spec.ts` | 5 |
| **Total methods to migrate** | **131** |

## Goal per method

Create `source/foo.spec.ts` that combines:
1. **Runtime tests** from `source/foo.spec.js` — `test(...)` / `expect(...)` calls
2. **Type tests** from `source/foo-spec.ts` — `expectTypeOf(...)` calls
3. **Extend** type tests to assert the **final runtime result value** (current `-spec.ts` files only check types, not values)
4. Use **relative imports** (`from './foo'`), not `from 'rambda'`
5. For each relative import, ensure a `source/<name>.d.ts` exists re-exporting from `../files/index` — create it if missing
6. **Do NOT delete** old `*.spec.js` or `*-spec.ts` files
7. If TypeScript complains about types from the JS runtime test code, use `any` to make it happy


## Verification per file

```bash
node node_modules/vitest/dist/cli.js run --config vitest.typings.config.js source/foo.spec.ts
yarn lint:typings
```

## EXAMPLE TARGET

```
import { addProp } from './addProp'
import { pipe } from './pipe'

test('happy', () => {
  const result = addProp('a', 1)({ b: 2 })
  const expected = { a: 1, b: 2 }

  expect(result).toEqual(expected)
})

test('happy', () => {
  const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<string>()
  expectTypeOf(result.c).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 1, b: 'foo', c: 3 })
})
```

PLEASE NOTE: imports are relative (`from './addProp'`), NOT `from 'rambda'`. `test`/`expect`/`expectTypeOf` are globals (provided by `source/vitest-globals.d.ts`) — no `from 'vitest'` import needed.

## Per-method .d.ts (REQUIRED for relative imports)

`source/tsconfig.json` has `allowJs: false`, so `import { foo } from './foo'` resolves to `foo.js` which has no types → TS infers `any` → `expectTypeOf<any>().toEqualTypeOf<X>()` fails with `Type 'X' does not satisfy the constraint 'never'` (expect-type's anti-vacuous-assertion guard).

Fix: create `source/foo.d.ts` containing:

```ts
export { foo } from '../files/index'
```

TS resolves `./foo` → `foo.d.ts` (types from the barrel of record in `files/index.d.ts`), while vitest/vite still loads `foo.js` at runtime. No `allowJs`, no build-dir resolution, relative imports preserved.

If a spec imports multiple methods (e.g. `./pipe`), create a `.d.ts` for each that doesn't already exist. Check `source/` for an existing `.d.ts` before creating.

---

## Batches (~13 files each, alphabetical)

### Batch 1 (13)
addProp, addPropToObjects, all, allPass, any, anyPass, append, ascend, assertType, checkObjectWithSpec, combinations, compact, complement

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| addProp | ✓ | ✓ |
| addPropToObjects | ✓ | ✓ |
| all | ✓ | ✓ |
| allPass | ✓ | ✓ |
| any | ✓ | ✓ |
| anyPass | ✓ | ✓ |
| append | ✓ | ✓ |
| ascend | ✓ | ✓ |
| assertType | ✓ | ✓ |
| checkObjectWithSpec | ✓ | — |
| combinations | ✓ | — |
| compact | ✓ | ✓ |
| complement | ✓ | ✓ |

### Batch 2 (13)
concat, count, countBy, createObjectFromKeys, defaultTo, difference, drop, dropLast, dropLastWhile, dropWhile, duplicateBy, eqBy, eqProps

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| concat | — | ✓ |
| count | ✓ | ✓ |
| countBy | ✓ | ✓ |
| createObjectFromKeys | ✓ | — |
| defaultTo | ✓ | ✓ |
| difference | ✓ | ✓ |
| drop | ✓ | ✓ |
| dropLast | ✓ | — |
| dropLastWhile | ✓ | — |
| dropWhile | ✓ | ✓ |
| duplicateBy | ✓ | — |
| eqBy | ✓ | — |
| eqProps | ✓ | ✓ |

### Batch 3 (13)
equals, evolve, excludes, exists, filter, filterAsync, filterMap, filterObject, find, findIndex, findLastIndex, findNth, flatMap

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| equals | ✓ | ✓ |
| evolve | ✓ | ✓ |
| excludes | ✓ | ✓ |
| exists | ✓ | ✓ |
| filter | ✓ | ✓ |
| filterAsync | ✓ | ✓ |
| filterMap | ✓ | ✓ |
| filterObject | ✓ | ✓ |
| find | ✓ | ✓ |
| findIndex | ✓ | ✓ |
| findLastIndex | ✓ | ✓ |
| findNth | ✓ | — |
| flatMap | ✓ | ✓ |

### Batch 4 (13)
flatten, flattenObject, groupBy, head, includes, indexBy, indexOf, init, interpolate, intersection, intersectionWith, intersperse, isValid

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| flatten | ✓ | ✓ |
| flattenObject | ✓ | ✓ |
| groupBy | ✓ | ✓ |
| head | ✓ | ✓ |
| includes | ✓ | ✓ |
| indexBy | ✓ | ✓ |
| indexOf | ✓ | ✓ |
| init | ✓ | ✓ |
| interpolate | ✓ | ✓ |
| intersection | ✓ | ✓ |
| intersectionWith | ✓ | ✓ |
| intersperse | ✓ | ✓ |
| isValid | ✓ | — |

### Batch 5 (13)
join, last, lastIndexOf, map, mapAsync, mapChain, mapKeys, mapObject, mapObjectAsync, mapParallelAsync, mapPropObject, match, maxBy

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| join | — | ✓ |
| last | ✓ | — |
| lastIndexOf | ✓ | ✓ |
| map | ✓ | ✓ |
| mapAsync | ✓ | ✓ |
| mapChain | ✓ | ✓ |
| mapKeys | ✓ | ✓ |
| mapObject | ✓ | ✓ |
| mapObjectAsync | ✓ | ✓ |
| mapParallelAsync | ✓ | — |
| mapPropObject | ✓ | ✓ |
| match | ✓ | ✓ |
| maxBy | ✓ | ✓ |

### Batch 6 (13)
merge, mergeDeep, middle, minBy, modifyItemAtIndex, modifyPath, modifyProp, none, objOf, objectIncludes, omit, partition, partitionObject

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| merge | ✓ | ✓ |
| mergeDeep | ✓ | — |
| middle | ✓ | ✓ |
| minBy | ✓ | — |
| modifyItemAtIndex | ✓ | — |
| modifyPath | ✓ | ✓ |
| modifyProp | ✓ | ✓ |
| none | ✓ | ✓ |
| objOf | ✓ | ✓ |
| objectIncludes | ✓ | ✓ |
| omit | ✓ | ✓ |
| partition | ✓ | ✓ |
| partitionObject | ✓ | ✓ |

### Batch 7 (13)
path, pathSatisfies, pick, pipe, pipeAsync, pluck, prepend, prop, propEq, propOr, propSatisfies, random, range

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| path | ✓ | ✓ |
| pathSatisfies | ✓ | ✓ |
| pick | ✓ | ✓ |
| pipe | ✓ | ✓ |
| pipeAsync | ✓ | ✓ |
| pluck | ✓ | ✓ |
| prepend | ✓ | — |
| prop | — | ✓ |
| propEq | ✓ | ✓ |
| propOr | ✓ | ✓ |
| propSatisfies | ✓ | ✓ |
| random | ✓ | — |
| range | ✓ | ✓ |

### Batch 8 (13)
rangeDescending, reduce, reject, rejectObject, remove, replace, replaceAll, shuffle, sort, sortBy, sortByDescending, sortByPath, sortByPathDescending

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| rangeDescending | ✓ | — |
| reduce | ✓ | ✓ |
| reject | ✓ | ✓ |
| rejectObject | ✓ | ✓ |
| remove | ✓ | — |
| replace | ✓ | ✓ |
| replaceAll | ✓ | ✓ |
| shuffle | — | ✓ |
| sort | ✓ | ✓ |
| sortBy | ✓ | ✓ |
| sortByDescending | ✓ | — |
| sortByPath | ✓ | ✓ |
| sortByPathDescending | ✓ | — |

### Batch 9 (13)
sortByProps, sortObject, sortWith, splitEvery, splitEveryStrict, sum, switcher, symmetricDifference, tail, take, takeLast, takeLastWhile, takeWhile

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| sortByProps | — | ✓ |
| sortObject | ✓ | ✓ |
| sortWith | ✓ | — |
| splitEvery | ✓ | ✓ |
| splitEveryStrict | ✓ | — |
| sum | ✓ | — |
| switcher | ✓ | ✓ |
| symmetricDifference | ✓ | ✓ |
| tail | ✓ | ✓ |
| take | ✓ | — |
| takeLast | ✓ | — |
| takeLastWhile | ✓ | — |
| takeWhile | ✓ | ✓ |

### Batch 10 (14)
test, tryCatch, type, union, unionWith, uniq, uniqBy, uniqWith, unless, unwind, update, when, zip, zipWith

| Method | `.spec.js` | `-spec.ts` |
|---|---|---|
| test | ✓ | ✓ |
| tryCatch | ✓ | ✓ |
| type | ✓ | ✓ |
| union | ✓ | ✓ |
| unionWith | ✓ | ✓ |
| uniq | ✓ | ✓ |
| uniqBy | ✓ | ✓ |
| uniqWith | ✓ | ✓ |
| unless | ✓ | ✓ |
| unwind | ✓ | ✓ |
| update | ✓ | — |
| when | ✓ | ✓ |
| zip | ✓ | ✓ |
| zipWith | ✓ | ✓ |

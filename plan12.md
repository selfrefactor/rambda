# plan12.md — What an AI agent needs from Rambda (methods, variants, typings)

**Repo:** `selfrefactor/rambda` (v11.3.0)
**Date:** 2025-09-10
**Status:** proposal — no code changed yet

---

## 0. Context

Rambda is now increasingly written *with and by* AI coding agents, and Rambda's
API is the toolbelt those agents reach for inside `R.pipe` chains. This plan
audits the library from the agent's perspective and answers three questions:

1. **What new methods** does an agent need that Rambda does not have?
2. **What variants** of existing methods (more specific forms) are needed?
3. **Where are current TS definitions** too weak for agent code?

Everything is filtered through Rambda's own curation philosophy (README §"Keep
only the most useful methods", "One way to use each method", "All methods
should be useful to work inside `R.pipe`"). Methods the maintainer has
**already deliberately rejected** for core — `R.move`, `R.toLower`, `R.length`,
`R.identical`, `R.cond`, `R.ifElse` (README lines ~108, ~12401, ~12405) — are
listed in Tier D and are *not* proposed for core.

---

## 1. Constraints every candidate must satisfy

| Constraint | Source | Guard against |
|---|---|---|
| Fully curried: `fn(a)(b)`, never `fn(a, b)` | AGENTS.md | breaking the "all curried" rule |
| ≤ 2 parameters (after currying) | ESLint `max-params: 2` | 3-arg methods |
| ≤ 12 statements per function | ESLint `max-statements: 12` | big `extractJson` bloating |
| Useful inside `R.pipe` / `R.pipeAsync` | README revamp rule | combinators without pipe use |
| Behavior obvious from the name | README | gears-only methods |
| 100% coverage (incl. all branches of new code) | AGENTS.md | one happy-path test |
| Docs + typings live in one place: `files/index.d.ts` doc block (`Method/Explanation/Example/Categories/Notes` + `// @SINGLE_MARKER`); implementation in `source/<name>.js`; tests in `source/<name>.spec.ts` (runtime `test()` **+** `expectTypeOf`) | CONTRIBUTING.md, `addProp.spec.ts` | doc drift, missing type tests |
| Final step is `yarn out` (re-generates `src/`, `rambda.js`, README, dist) | CONTRIBUTING.md | editing generated files by hand |

Not all candidates survive this filter — the plan says explicitly where a
candidate fails and belongs in **rambdax** instead.

---

## 2. Current inventory (as of 11.3.0)

139 runtime methods in `source/`. Categories that matter for agents:

- **Object**: `addProp, addPropToObjects, createObjectFromKeys, dropProp*, evolve,
  flattenObject, merge, mergeDeep, mapKeys, mapPropObject, mergeTypes, modifyPath,
  modifyProp, objectIncludes, objOf, omit, partitionObject, path, pick, prop, propEq,
  propOr, propSatisfies, sortObject, rejectObject, filterObject, unwind`
- **List**: `all, any, none, allPass, anyPass, append, combinations, compact,
  concat, count, countBy, difference, drop*, duplicateBy, eqBy, filter, filterMap,
  find, findIndex, findLast, findLastIndex, findNth, flatMap, flatten, groupBy,
  head, includes, indexBy, indexOf, init, interperse, intersection(With), join,
  last, lastIndexOf, map, mapChain, mapKeys, middle, partition, permutations,
  pluck, prepend, range, reduce, reject, remove, shuffle, sort*, split, splitEvery,
  splitEveryStrict, sum, symmetricDifference, tail, take*, uniq*, update, zip,
  zipWith`
- **Logic/function**: `and/or as` — none; `complement, curry, defaultTo, eqBy,
  switch (switcher), tap, test, tryCatch, unless, when, type, convertToType,
  assertType, equals, isEmpty*`
- **Async**: `delay, filterAsync, mapAsync, mapObjectAsync, mapParallelAsync,
  pipeAsync, tryCatch`
- **String**: `interpolate, match, replace, replaceAll, split, test, trim*`

> `trim`, `toLower`, `toUpper` were **dropped from core on purpose** (README ll.108).
> They are the *only* string transforms core has rejected so far — `replaceAll` went
> the opposite direction. Any new string method must earn its place.

---

## 3. Tier A — New agent-native methods (propose for core)

These exist in **neither** Rambda **nor** Rambdax. Each is a recurring pattern in
agent code (LLM-output parsing, batch tool calls, evals, payload hygiene).

### A1. `R.extractJson` — new, highest priority

**Why an agent needs it:** every agent eventually parses model output that is
prose + fences + trailing reasoning around a JSON object/array. The current
paths require regex + `JSON.parse` + `try/catch`, three hand-rolled steps that
every agent re-derives and gets subtly wrong.

**Design:**
```ts
// files/index.d.ts
export function extractJson(input: string): unknown | null
```
- Not curried-second (takes the blob directly) — still pipe-usable as a terminal
  transform inside `R.pipe(text, ...cleaners, R.extractJson)`.
- Strategy (ordered): try `JSON.parse(input)` on trimmed text → scan for first
  balanced `{...}` / `[...]` block (brace counting, respecting string
  literals/escapes) → return `null` if no valid JSON found. **Never throws.**
- Statement budget: split the brace-scanner into `source/_internals/` (e.g.
  `extractJsonBlock.js`) so `extractJson.js` stays ≤12 statements.
- Tests in `source/extractJson.spec.ts`: plain JSON, JSON in ``` ```json fences,
  prose before/after, nested strings with `{}` inside, invalid input → `null`,
  empty string → `null`.

### A2. `R.retry` — new

**Why:** flaky tool calls, rate-limit retries, transient network errors are the
single most repeated async pattern in agent code. `radashi` already ships `retry`;
Rambda has `delay` + `tryCatch` but no composition-friendly retry.

**Design:**
```ts
export function retry<T>(policy: { times?: number; delayMs?: number }): (fn: () => Promise<T>) => Promise<T>
```
- Curried two-arg shape fits `max-params: 2`; the policy object keeps it to one
  argument.
- `times` defaults to 3, `delayMs` to 0. Throws the last error after exhaustion.
- Doubles as a **sync** retry if `fn` returns a plain value (branch both).
- Trade-off to flag: `retry` is a combinator, not a pipe *step* in itself — but
  it composes *inside* `R.pipeAsync(..., fn` wrapped by an inner lambda)`. That
  meets the "useful in pipe" bar loosely; if rejected for core, goes to rambdax.

### A3. `R.sumBy` / `R.meanBy` — new

**Why:** evals, cost tracking, latency summaries. Core already has `R.sum` and
`R.countBy` but every agent ends up handwriting `R.sum(x.map(f))`, which loses
the curried pipe shape. `remeda` has both.

```ts
export function sumBy<T>(fn: (x: T) => number): (list: readonly T[]) => number
export function meanBy<T>(fn: (x: T) => number): (list: readonly T[]) => number
```
- `meanBy` = `sumBy` ÷ `list.length`; guard empty list → `NaN` (document it).
- Both are one-liners over `_internals`, trivially 100%-coverable.

### A4. `R.truncate` — new

**Why:** agents summarize/truncate logs, tool payloads, file contents for
context windows *constantly*. `remeda` has `truncate`; core has nothing.

```ts
export function truncate(
  options: { length: number; suffix?: string }
): (input: string) => string
```
- Default `suffix = '…'`. If `length <= suffix.length` return suffix-truncated;
  if input fits, return as-is. Keep `'…'`-aware (don't clip mid-char for astral
  code points — optional, note it).

### A5. `R.compactObject` — new (mirrors existing `R.compact` for lists)

**Why:** agents strip `null/undefined`/empty payload keys before serializing
tool calls to APIs. Core has `R.compact` (lists) — a string-listed sibling
`compactObject` is the obvious name and the behavior is self-explanatory.
Reference: `radashi` `sift`.

```ts
export function compactObject<T extends object>(obj: T): Partial<T>
```
- Removes entries whose value is `null` or `undefined`. **Shallow** by default
  (deep variant = rambdax) — keeps statement count and name simple.

### A6. `R.toSnakeCase` / `R.toCamelCase` — new, *decision flagged*

**Why:** agents map between API fields, DB columns, env vars, file names —
camel↔snake is the dominant pair. `remeda` ships both; `radashi` ships `snake`/`camel`.

```ts
export function toCamelCase(input: string): string
export function toSnakeCase(input: string): string
```
- Accept `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, spaced input;
  normalize separators first, then re-join (`toUpper`/`toLower` live in
  `_internals` closed over by these two, **not** as public methods).
- **Flag:** README ll.108 rejected `toLower`/`toUpper` as "little value".
  `toCamelCase/toSnakeCase` are compound transforms with real agent payload —
  but the maintainer may still want only one of the two, or none for core.
  Fallback: both go to rambdax.

### A7. Type-guard predicates — `R.isString`, `R.isNumber`, `R.isPlainObject` — new

**Why:** agents narrow unknown data (`unknown` from `extractJson`, tool results,
env vars). Type-guard predicates give free TS narrowing inside `R.filter`.
Core has `R.type` (string return) but that doesn't narrow. `rambdax` has
`isNil/isNotNil/is`; `radashi` has the whole family.

```ts
export function isString(x: unknown): x is string
export function isNumber(x: unknown): x is number
export function isPlainObject(x: unknown): x is { [key: string]: unknown }
```
- `isPlainObject` = prototype is `Object.prototype` or `null` (reject `Date`,
  `RegExp`, class instances, arrays).
- **Family size flag:** keep these three + promote `isNil/isNotNil` (Tier B)
  for core; the long tail (`isArrayChunked…`, `isBoolean`, `isDate`, …) stays in
  rambdax so core doesn't become a guard zoo.

---

## 4. Tier B — Promote from Rambdax (proven, battle-tested, low-risk)

These already ship in rambdax (v11.3.1, same author), have passes, and meet the
pipe-obviousness bar. Copy implementation, adapt to core style, write fresh
`spec.ts` (rambdax specs use a different runner).

| Method | Signature (core-adapted, curried) | Why agents need it | Notes |
|---|---|---|---|
| `R.pathOr` | `pathOr<T>(defaultValue: T, pathInput: Path)` → `(obj) => T` | Safe deep read — the #1 agent pattern for LLM/tool payloads | Core has `path`+`propOr` but no composition of both; this is the missing composition |
| `R.assocPath` | `assocPath<T>(pathInput, value: T)` → `(obj) => T` | Deep set by value. Core's `modifyPath` takes a *fn* only | DeepMutate types exist in `files/index.d.ts` (used by `modifyPath`) — reuse |
| `R.has` / `R.hasPath` | `has(prop)` → `(obj) => boolean`; `hasPath(path)` → `(obj) => boolean` | Existence guard before read (`propOr` can't tell "missing" from "undefined") | Mind naming overlap with `R.exists`/`R.includes` — docs must disambiguate |
| `R.isNil` / `R.isNotNil` | `(x: unknown) => x is null \| undefined` / negation | The most common filter predicate in agent data cleaning | Nil-check on `Object.is`, not `==` |
| `R.identity` / `R.always` | `identity<T>(x) => T`; `always<T>(x) => () => T` | Fill holes in pipelines; `R.always([])` as initial value for `reduce` | Trivial, philosophically safe |
| `R.renameKeys` | `renameKeys(map: Record<string, string>)` → `(obj) => T` | Remap API/DB field names per provider (OpenAI↔Anthropic payloads alike) | rambdax calls it `renameProps` — pick one name; `renameKeys` is clearer |
| `R.insert` | `insert(index, value)` → `(list) => T[]` | Insert tool results / decorations at position | NOT `adjust`: core already has `modifyItemAtIndex` which *is* `adjust` — skip that one |
| `R.mean` / `R.median` | `(list: readonly number[]) => number` | Eval metrics | `median` on unsorted input; edges documented (even-length median = mean of two middles) |
| `R.slice` | `slice(startIndex, endIndex)` → `(list \| string) => …` | General negative-index slice; complements `take*`/`drop*` | String + list overloads, like `R.take`/`R.drop` |
| `R.mapParallelAsyncWithLimit` | `(fn, limit: number)` → `(list: Promise[]–yielding) => Promise<(… )[]>` | Batched concurrent calls (rate-limited API fan-out) — classic agent batch job | Variant of existing `R.mapParallelAsync`; note limit semantics in docs |

**Not proposed for core** (already in rambdax, fail one or more constraints):
`swap`, `move`, `adjust`, `toLower`, `toUpper`, `length`, `transpose`,
`aperture`, `groupWith`, `fromPairs`, `toPairs`, `times`, `repeat`,
`waitFor`, `add/subtract/multiply/divide` → Tier D.

---

## 5. Tier C — TypeScript definition engineering (no runtime change)

The strongest *agent-facing* wins. `files/index.d.ts` is the single source; each
item gets a regression test in `source/<method>-spec.ts` (type-only,
`describe/it` + `expectTypeOf`).

### C1. Readonly / tuple-preserving audit (biggest systematic win)

Agent code feeds frozen data (`as const`, `ReadonlyArray`) into rambda's
`T[]` signatures and gets type errors. `map`/`filter`/`filterMap` already use
`IterableContainer` + `Mapped`; the rest still use `T[]`:

| Method | Current (line in `files/index.d.ts`) | Proposed |
|---|---|---|
| `all, any, none` | `(list: T[]) => boolean` (186, 208, 1425) | `(list: IterableContainer<T>) => boolean` (readonly allowed; no tuple preservation needed) |
| `join` | `(list: T[]) => string` (942) | `(list: IterableContainer<T>) => string` |
| `reduce` | `(list: T[]) => TResult` (2439) | `(list: IterableContainer<T>) => TResult` |
| `sort` / `sortBy` et al. | `(list: T[]) => T[]` (2577 …) | `(list: IterableContainer<T>) => T[]` (input readonly is fine; output is a fresh mutable copy) |
| `uniq`, `uniqBy`, `uniqWith` | `(list: T[]) => T[]` (3465 …) | same as `sort` |
| `groupBy`, `countBy`, `indexBy` | `T[]` (729, 3863; indexBy already has a `readonly T[]` overload) | `IterableContainer` + drop the duplicate mutable overload |
| `find*`, `take*`, `drop*`, `splitEvery`, `head/tail/init/last/middle` | mixed | `IterableContainer` + tuple-preserving overloads where cheap (C2) |

### C2. Non-empty tuple overloads for `head` / `last` / `init` / `tail` / `middle`

Today `head<T>(list: T[]) => T | undefined`. Agents wide-narrow to
`list[0]` because of the `| undefined`. Add overloads:
```ts
export function head<T, L extends readonly [T, ...any[]]>(list: L): T   // at-least-one tuple
export function head<T>(list: IterableContainer<T>): T | undefined     // general case
```
- **Relationships preserved:** `R.pipe([1,2,3] as const, R.last)` should yield
  `3` (currently `1 | 2 | 3 | undefined`). Same trick for `init`/`tail` via
  tuple split types; `middle` = both.

### C3. `R.propOr` narrowing

`propOr` should narrow on the default: if default is `null` and value is
`string | undefined`, result is `string | null` (readability for agents doing
`??` chains). Align with the existing `prop`/`path` narrowing added in 11.2.0.

### C4. `R.pipe` / `R.pipeAsync` / `R.compose` — finally variadic

CONTRIBUTING.md itself admits these are "far from perfect". Concrete asks:
- Variadic tuple typing (`...fns`) with inferred intermediate types — no hard
  arity cap (declare up to ~12 like `modifyPath`'s K0..K6 depth pattern, or
  variadic tuples if the TS constraint budget allows).
- **Async lifting** in `R.pipe`: if any step returns a `Promise`, result type is
  a `Promise` — today agents must remember `pipeAsync` or cast.
- Keep `mergeTypes` support (already last-step in docs examples).

### C5. New exported helper types (agent-facing, zero cost)

```ts
export type NonEmptyArray<T> = [T, ...T[]]
export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }
export type Path<T> = readonly (keyof T)[]
```
- `NonEmptyArray` complements the existing `IterableContainer`/`Mapped`/`Merge`
  exports — agents import these types directly (they already do with remeda).

### C6. Small narrowing fixes walking-priority

- `groupBy`: allow `fn` returning any `PropertyKey` (`K extends PropertyKey = string`),
  keep `Partial<Record<K, T[]>>`.
- `findIndex/findLastIndex`: return `number` (not `number | undefined`) — change
  may be breaking; flag for minor-version gate.
- `evolve`: keywise narrowing per rule (rules keys ⊆ object keys) if not already
  constrained at 3702 — verify during implementation.
- `switcher`, `tap`, `tryCatch` (error param typing `unknown` vs `Error`) —
  audit and tighten; each gets a `-spec.ts` regression.

---

## 6. Tier D — The rambdax bucket (rejected-for-core, keep out)

Explicitly **not** proposed for core, with reason, so nobody re-litigates:

| Method | Reason (per README philosophy) |
|---|---|
| `move`, `swap`, `adjust`, `insertAll`, `updateItem*` | readme ll.108 precedent ("R.move is removed"); core already has `modifyItemAtIndex`, `update` |
| `toLower`, `toUpper`, `length`, `repeat`, `times` | "little value" precedent (ll.108); `R.repeat`/`R.times` → rambdax for test-data generation |
| `add, subtract, multiply, divide` | same phpilosophy — arithmetic in a pipe is one lambda, not a method |
| `transpose`, `aperture`, `groupWith`, `fromPairs`, `toPairs` | niche for core; agents get them from rambdax without bloat |
| `waitFor`, `tapAsync`, `mapToObject`, `produce`, `cond`, `ifElse` | combinator-heavy / not pipe-obvious (ll.12401–12405 precedent) |
| `compose`, `composeAsync`, `pipeWith`, `piped` | core deliberately replaces with `R.pipe` |

Tier D is where all Tier A/B overflow goes if the maintainer says "too many
methods" — the emplacement list in rambdax is: `retry, truncate, toCamelCase,
toSnakeCase, compactObject, sumBy, meanBy, isString, isNumber, isPlainObject,
extractJson`.

---

## 7. Per-method implementation spec (for an agent to execute)

For each method in Tier A and Tier B, the following deliverables are produced:

1. **`source/<name>.js`** — curried, ≤2 params, ≤12 statements, no semicolons
   (format via `yarn format` / oxfmt). Shared logic goes to `source/_internals/`
   (e.g. `buildPath.js` already exists as `createPath.js`; add `jsonExtractor.js`,
   `caseNormalizer.js`).
2. **`source/<name>.spec.ts`** — one file, vitest globals `test()` for runtime
   **and** `expectTypeOf()` for types (mirror `addProp.spec.ts`). Include:
   happy path, empty/null inputs, edge branches (fence-less, invalid, negative
   index, empty list mean).
3. **`files/index.d.ts`** — doc block `Method / Explanation / Example /
   Categories / Notes` + `// @SINGLE_MARKER` before `export function`.
4. **Barrel** — `rambda.js` and `src/` are generated by `yarn out`; never edit
   them by hand. `yarn out` requires `../rambda-scripts` sibling clone.
5. **CI order (must match)** — `yarn lint:typings` → `yarn test:ci` →
   `yarn test:typings`; plus `yarn lint` locally. 100% coverage gate is on.

Suggested execution order (each step is an independent, reviewable PR):

```
PR 1  Tier C3 (propOr) + C1 (readonly audit)   — zero runtime risk, pure TS
PR 2  Tier C2 + C4 + C5 (head/last, pipe, types)
PR 3  Tier A1 extractJson + A7 guards           — new infra (_internals)
PR 4  Tier A3 sumBy/meanBy + B (pathOr, assocPath, has/hasPath, isNil)
PR 5  Tier A2 retry + A5 compactObject + A4 truncate
PR 6  Tier B remainder + A6 case converters     — biggest API-surface PR
```

---

## 8. Acceptance checklist (definition of done)

- [ ] `yarn lint:typings` clean (tsc on `files/index.d.ts` + consumers)
- [ ] `yarn test:ci` green, coverage 100% for every new/changed file
- [ ] `yarn test:typings` green (each new method has `expectTypeOf` assertions,
      each TS change has a `-spec.ts` regression)
- [ ] `yarn lint` clean (oxlint, biome, prettier, eslints: max-params 2,
      max-statements 12, semicolonless)
- [ ] `yarn out` runs against `../rambda-scripts`; README/`src/`/dist regenerate;
      new methods appear in README §API with working REPL links
- [ ] CHANGELOG entry in rambda's format (`11.x.0 - Add R.…` bullet style)

---

## 9. Open decisions for the maintainer (decision record)

Each flagged decision below is executable either way — every row has a
**recommendation** and a **default** that takes effect if the maintainer does
not answer before the gated PR. Decisions are marked `BLOCKING` when the answer
changes the tier composition of an upcoming PR, `DEFERRABLE` otherwise.

| # | Decision | Options | Recommendation | Default if unanswered | Affects | Status |
|---|---|---|---|---|---|---|
| 1 | **`R.retry` in core or rambdax?** | (a) rambda core, (b) rambdax only | Core — it is the single most repeated async pattern in agent code, and `delay` + `tryCatch` already carry core's async weight. Its weak pipe fit is acceptable: it composes *inside* `pipeAsync` steps. | → Core (option a) | PR 5 | `BLOCKING` (tier membership) |
| 2 | **Case converters `toCamelCase`/`toSnakeCase`?** | (a) both in core, (b) one in core, (c) rambdax only | One in core — `toSnakeCase` (dominant DB/env/API convention); `toCamelCase` follows in rambdax. Acknowledges the `toLower`-rejection precedent (ll.108) but treats compound case transforms as higher-value than bare `toLower`. | → One in core: `toSnakeCase` | PR 6 | `BLOCKING` (API surface) |
| 3 | **`R.renameKeys` vs rambdax's `renameProps`?** | (a) rename in core, renameProps in rambdax (diverge), (b) rename in both (align), (c) skip | Align on `renameKeys` in both libs — one concept, one name; `renameProps` becomes deprecated alias in rambdax only. | → Same name `renameKeys` in both | PR 6 | `DEFERRABLE` |
| 4 | **`R.extractJson` contract** | naming: (a) `extractJson`, (b) `parseJsonSafe`. scope: object-only vs object+array+primitive | `extractJson` (intent, not contract) and **object + array** scope — arrays are as common as objects in tool results; primitives excluded to keep the scanner honest. | → `extractJson`, object+array | PR 3 | `BLOCKING` (name = public API) |
| 5 | **`compactObject` depth** | (a) shallow, (b) recursive by default | Shallow — matches `R.compact`, keeps name/statement-count honest; deep variant lives as `compactDeep` in rambdax. | → Shallow | PR 5 | `DEFERRABLE` |
| 6 | **`findIndex`/`findLastIndex` return typing** | (a) `number` (breaking, minor gate), (b) keep `number \| undefined` | Keep `number \| undefined` in 11.x; ship `number` as part of the next minor (12.x) so the change is gated and documented. | → Defer to 12.x | PR 2 (typing), 12.x release | `DEFERRABLE` |
| 7 | **Tier A size — ship all, or top 5?** | (a) all 12 Tier A+B methods, (b) top 5 by agent rationale, rest → rambdax | Ship in two waves: **wave 1** = top-5 (`extractJson, pathOr, sumBy, retry, isNil/isNotNil` family), **wave 2** = the rest in rambdax first, promote only those that earn real usage data. Keeps core small and the philosophy intact. | → Two waves, wave 1 = top-5 | All PRs | `BLOCKING` (scope) |

### Consequence map (what each answer changes)

- **Decisions 1, 2, 7** decide tier membership — answered `(b)`/`(c)` moves the
  method to Tier D (rambdax bucket); answered `(a)` keeps it in Tier A/B scope.
- **Decision 3** is cosmetic (naming) and does not change scope, but must be
  settled before the rambdax promotion PR to avoid a rename later.
- **Decision 4** freezes a public function name — effective immediately once
  the first implementation lands; flip cost rises after PR 3.
- **Decision 5** is an implementation detail that must be locked before PR 5
  (tests and README example document the behavior).
- **Decision 6** is the only one affecting shipped types *today*; plan
  documents it in CHANGELOG under a minor-version gate.

All `BLOCKING` decisions are pre-decided by their defaults, so the PR sequence
in §7 can start without waiting. The maintainer can override any row and only
the affected PR scope changes.
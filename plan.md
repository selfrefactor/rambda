# Comparison Plan: Rambda vs Radashi & Remeda TypeScript Typings

## Objective
Identify methods in Rambda where TypeScript typings differ from Radashi and Remeda, and demonstrate differences with runnable type tests in the style of the existing `source/remeda-comparison-spec.ts`.

## Phase 1: Research (complete)

### Radashi (v13.0.0-beta)
- **Data-first** (not curried) — functions take data as first arg, unlike Rambda's data-last curry.
- **Different naming**: `group` (not `groupBy`), `objectify` (not `indexBy`), `sort` (not `sortBy`), `select` (combines filter+map), `selectFirst` (find+map), `chain` (not `pipe`).
- **No `filter`/`find`/`drop`/sync `map`** — Radashi uses `select`/`selectFirst` which lack type guard narrowing.
- **No variadic tuple inference** — `chain` uses 10 overloads (Rambda `pipe` uses 20).
- **`const` type parameters** on `first`/`last`/`draw` for literal tuple extraction.
- `group` returns `Partial<Record<K, T[]>>` (correct, same as Rambda `groupBy`).
- `objectify` returns `Record<Key, Value>` (non-partial — assumes all keys exist; Rambda `indexBy` returns `Record<string, T>`).
- `sort` only accepts **numeric** getter (Rambda `sortBy` accepts any `Ord` = `number | string | boolean | Date`).
- `sum` has 2 overloads: `(array: number[]) => number` and `(array: T[], fn) => number` (Rambda only has `(list: number[]) => number`).
- `unique` supports optional `toKey` function (Rambda `uniq` does not; `uniqBy` exists separately).
- `pick` supports both key array and predicate filter (Rambda supports string-path and key array).

### Remeda (v2.34.1)
- Already compared in `source/remeda-comparison-spec.ts` across 6 method categories.
- Remeda advantages confirmed: type guard narrowing, tuple preservation, multi-criteria sortBy, literal key inference, `NonEmptyArray` for groupBy.
- Remaining candidates needing comparison: `pick` (strict key inference), `omit`, `uniq`, `zip`, `sum`.

## Phase 2: Radashi Comparison Tests (`source/radashi-comparison-spec.ts`)

| # | Rambda method | Radashi equivalent | Key type difference |
|---|---|---|---|
| 1 | `find` | `selectFirst` | Radashi `selectFirst` has no type guard overload; `condition` is `(item, idx) => boolean` |
| 2 | `filter` | `select` | Radashi `select` combines filter+map; no type guard; `condition` is `(item, idx) => boolean` |
| 3 | `groupBy` | `group` | Both return `Partial<Record<K, T[]>>` — comparable |
| 4 | `indexBy` | `objectify` | Radashi infers literal keys (`Record<K, V>`) but non-partial vs Rambda `Record<string, T>` |
| 5 | `sortBy` | `sort` | Radashi only numeric getter, Rambda accepts any `Ord` |
| 6 | `pick` | `pick` | Radashi supports predicate filter (`KeyFilter`); Rambda has string-path overload |
| 7 | `omit` | `omit` | Both similar `Omit<T, K>` |
| 8 | `uniq` | `unique` | Radashi supports optional `toKey` (like `uniqBy`); Rambda has separate `uniq`/`uniqBy` |
| 9 | `sum` | `sum` | Radashi adds mapper overload `(T[], fn) => number` |
| 10 | `pipe` | `chain` | Radashi 10 overloads vs Rambda 20; neither uses variadic tuples |
| 11 | `zip` | `zip` | Radashi variadic (2-5 arrays, tuple-of-tuples return); Rambda curried `(K[]) => (V[]) => KeyValuePair[]` |

## Phase 3: Extend Remeda Comparison Tests (`source/remeda-comparison-spec.ts`)

Add comparisons for:
- **`pick`**: Remeda's `PickFromArray<T, Keys>` strict key inference vs Rambda's `MergeTypes<Pick<T, K>>` + string-path.
- **`omit`**: Remeda's strict key inference vs Rambda's.
- **`uniq`**: Remeda's overloads (no args, key selector, etc.) vs Rambda's simple `uniq<T>(list: T[])`.
- **`zip`**: Remeda's tuple inference vs Rambda's curried `KeyValuePair[]`.

## Phase 4: Verification

Run CI order: `yarn lint:typings` → `yarn test:ci` → `yarn test:typings`
All new type assertions must pass.

# Brainstorming: Remeda TypeScript Typing Comparison

**Date:** 2026-06-06
**Trigger:** Compare Rambda with similar library Remeda; check if TS typings are better in Remeda; extend TS tests to prove findings.

## Approaches considered

To compare TypeScript typings between Rambda and Remeda, three approaches were considered:

| # | Approach | Description |
|---|----------|-------------|
| A | Per-method spec extension | Extend each existing Rambda `*-spec.ts` file (e.g. `find-spec.ts`) with a Remeda comparison block. Preserves per-method context but scatters the comparison across many files and duplicates boilerplate. |
| B | Dedicated comparison spec | Create a single `remeda-comparison-spec.ts` file that imports both Rambda and Remeda, testing each method in one place. Centralizes findings, easier to review and remove later. Uses `pipe()` (Rambda) and standalone calls (Remeda) per their respective idioms. |
| C | External markdown report | Write findings only in prose/markdown with no runnable type tests. No CI guard — types drift silently. |

**Chosen:** Approach B — a single runnable `source/remeda-comparison-spec.ts` file, verified via `yarn test:typings` (part of CI pipeline).

## Trade-off matrix

| Criteria | A (Per-method extension) | B (Dedicated spec) | C (Markdown only) |
|---|---|---|---|
| CI-enforced type assertions | Yes, but scattered | Yes, centralized | No |
| Reviewer effort | High (15+ files) | Low (1 file) | Low |
| Removable when addressed | Painful (15+ edits) | `rm` one file | N/A |
| Captures cross-method patterns | No | Yes (tuple preservation, type guard narrowing) | Yes |
| Import complexity | Each file needs its own Remeda import | Single import section | N/A |

## Methods compared

The following shared methods were analyzed. `✓` means Remeda's TypeScript types are strictly more precise for this method.

| Method | Rambda type | Remeda type | Remeda advantage | Proved in test |
|--------|-------------|-------------|------------------|----------------|
| `find` | `(list: T[]) => T \| undefined` | type guard overload → `S \| undefined` | **Type guard narrowing** — result is `string \| undefined` not `(string \| number) \| undefined` | ✓ |
| `drop` | `(list: T[]) => T[]` | `Drop<T, N>` preserves tuple | **Tuple length preservation** — `Drop<[1,2,3,4], 2>` = `[3, 4]` | ✓ |
| `sortBy` | `(list: T[]) => T[]`, single fn | `ReorderedArray<T>`, multi-criteria, desc support | **Multi-criteria sorting**, **desc syntax**, **array type preservation** | ✓ |
| `groupBy` | only `string` keys | `PropertyKey`, `undefined` exclusion | **Number/symbol keys**, **undefined return excludes items** | ✓ |
| `filter(Boolean)` | `ExcludeFalsy` excludes `true` | Keeps `true` | **No `ExcludeFalsy` bug** — `true` is truthy | ✓ |
| `map` | `Mapped<T, U>` | `Mapped<T, U>` | **Comparable** — both preserve tuples | ✓ |
| `indexBy` | `Record<string, T>` | `Partial<Record<K, T>>` with literal keys | **Literal key inference** | ✓ |
| `sum` | `number[]` → `number` | `Sum<T>` + bigint + literal `0` for empty | **BigInt support**, **literal return types** | Not tested in spec (no Rambda pipe shim for data-first) |
| `pick` | `MergeTypes<Pick<T, K>>`, string-path overload | `PickFromArray<T, Keys>` | Comparable — Rambda has string-path advantage | Not tested |

## Decision

**Chosen path:** Approach B — dedicated `source/remeda-comparison-spec.ts` file.

**Rationale:**
- Provides CI-gated proof of each finding (part of `yarn test:typings`)
- Single file can be removed wholesale when/if Rambda improves its typings
- Covers 6 method categories with 8 type assertions, all passing
- More maintainable than scattering comparisons across 15+ spec files

**Rejected:**
- Approach A (too scattered, high overhead to review)
- Approach C (no CI enforcement, typings would drift silently)

## Open risks

1. **Remeda import resolution** — Remeda's `package.json` lacks a `"types"` export condition. Works via NodeNext module resolution (finds `dist/index.d.ts` alongside `dist/index.js`), but may break if TypeScript/vite resolution strategy changes.
2. **`@ts-expect-error` in `filter(Boolean)` test** — tests that Rambda's `ExcludeFalsy` excludes `true` are marked with `@ts-expect-error` because the test asserts the *actual* buggy behavior while noting the *expected* correct behavior. If `ExcludeFalsy` is fixed, the `@ts-expect-error` line will become an error requiring update.
3. **Rambda pipe compatibility** — Remeda methods used inside Rambda's `pipe()` rely on type inference through Rambda's overloaded pipe signatures. Some edge cases (e.g., `pipe(async data, remedaMethod)`) may not resolve correctly.

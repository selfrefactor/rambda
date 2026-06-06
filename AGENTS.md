# Rambda — Agent instructions

## Repository structure

- **`source/`** — development directory. Contains both implementations (`.js`) and tests (`.spec.js`, `-spec.ts`).
- **`src/`** — generated artifact. Rebuilt from `source/` via `yarn populatereadme` (delegates to sibling `rambda-scripts` repo). Only `.js` files for registered methods are copied; spec files are excluded.
- **`rambda.js`** — barrel entrypoint, re-exports from `./src/`. Also regenerated during `populatereadme`.
- **`files/index.d.ts`** (5090 lines) — the true TypeScript definition source. `source/index.d.ts` is a stub.
- **`dist/`** — rollup output (CJS, ESM, UMD).

## Commands

| Command | Action |
|---|---|
| `yarn test` | Run all runtime tests (`vitest run --watch -u`) |
| `yarn test:ci` | Run runtime tests in CI mode |
| `yarn test:typings` / `yarn ts` | Run type-level tests only |
| `yarn test:file <path>` | Run a single test file |
| `yarn lint:typings` | `tsc` type check |
| `yarn lint` | Run ESLint + oxlint + Biome + Prettier on `source/` |
| `yarn build` | Bundle `dist/` via rollup (CJS + ESM + UMD) |
| `yarn out` | Full pipeline: populate docs → sync `src/` → build → docsify |

## CI order (must match)

`yarn lint:typings` → `yarn test:ci` → `yarn test:typings`

## Testing quirks

- Two vitest configs: `vitest.config.js` (runtime `*.spec.js` + `*-spec.ts`) and `vitest.typings.config.js` (type-only `*-spec.ts`).
- Runtime tests use `test(...)` (globals from vitest). Type tests use `describe/it` + `expectTypeOf`.
- Coverage threshold: **100%** enforced.
- `source/_internals/` and `source/*.ts` excluded from coverage.

## Method conventions

- **All methods are curried**: `filter(fn)(list)`, **never** `filter(fn, list)`.
- Designed for `pipe(input, ...fns)` usage — type inference works best inside `R.pipe`.
- `max-params: 2` enforced (ESLint).
- `max-statements: 12` enforced (ESLint).
- File naming: `.ts` files must be `kebab-case`, `.tsx` must be `CAMEL_CASE`.
- Semicolons are disabled (Prettier). Single quotes preferred.

## Type definition workflow

1. Edit `files/index.d.ts`.
2. Add type test in `source/*-spec.ts`.
3. Verify with `yarn test:typings`.
4. Use `// @ts-expect-error` for tests expected to fail.

## Build note

`yarn out` requires `rambda-scripts` cloned as a sibling directory (`../rambda-scripts`). Without it, `populatedocs`, `populatereadme`, and `create-docsify` will fail.

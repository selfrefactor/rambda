import { defineConfig } from 'vitest/config'

/** TS-only typings tests (`expectTypeOf`). Used by `yarn test:typings` / `yarn ts`. */
export default defineConfig({
  test: {
    globals: true,
    include: ['source/**/*-spec.ts', 'source/**/*.spec.ts'],
    exclude: ['source/_internals/**'],
  },
})
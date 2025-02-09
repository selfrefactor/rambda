import { defineConfig } from 'vitest/config'

// const resolve = (specifier) =>
//   new URL(import.meta.resolve(specifier)).pathname

export default defineConfig(env => ({
  test: {
    globals: true,
    include: ['source/**/*.spec.js'],
    coverage: {
      thresholds: { 100: true },
      include: ['source/**.js'],
      exclude: ['source/*.ts'],
    },
    // typecheck: {
    //   include: ['tests/**/*.test-d.ts'],
    //   enabled: true,
    //   tsconfig: 'tests/tsconfig.json',
    // },
  },
  // resolve: {
  //   alias: {
  //     radashi: resolve('./src/mod.js'),
  //   },
  // },
}))

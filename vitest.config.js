import { defineConfig } from 'vitest/config'

export default defineConfig(env => ({
  test: {
    globals: true,
    include: ['source/**/*.spec.js', 'source/**/*-spec.ts'],
    exclude: ['source/_internals/**'],
    coverage: {
      thresholds: { 100: true },
      include: ['source/**.js'],
      exclude: ['source/*.ts'],
    },
  },
}))

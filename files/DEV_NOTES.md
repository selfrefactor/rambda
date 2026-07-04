your task is big so 1. build a plan with todo in refactor.md 2. each "next" from dev will perform 10% of the task. 3. task is to move tests from foo.spec.js to foo-spec.ts 3.1 include test testing if foo-spec.ts exists 4. verify that it works with running node node_modules/vitest/
dist/cli.js run --config vitest.typings.config.js source/foo.spec.ts

Goal: migrate runtime source/*.spec.js tests and source/*-spec.ts to source/*.spec.ts form
1. Write refactor.md at repo root listing every method that has either *.spec.js or *-spec.ts file(or both), grouped into 10 batches of ~10% each, in dependency order.
2. Each dev next completes one batch: create foo.spec.js using foo-spec.ts(if exists) and foo.spec.js(if exists)
2.1 Extend TS tests to assert also final result(which is missing in -spec.ts files)
2.2 If there is error on TS types after moving *.spec.js file, use `any` to make TS happy
2.3 don't delete the old files.
3. While running the batch, work file by file because you need to verify new file is correct with "node node_modules/vitest/
dist/cli.js run --config vitest.typings.config.js source/foo.spec.ts" and "bun lint:typings"
===
https://github.com/radashi-org/radashi/pull/425/changes


- Change several functions to be used directly without currying. It relates when there is confusion which is the input that is coming from the pipe:

- R.difference(new method)
===
https:bundlejs.com
===

export function splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
---
Suggested new methods for Rambda library:


15. `sortByMultiple` - Sort by multiple criteria:
```typescript
export function sortByMultiple<T>(
  criteria: Array<(a: T, b: T) => number>
): (list: T[]) => T[];
```

These suggestions are based on:
1. Common use cases in TypeScript projects
2. Working well within `R.pipe` chains
3. Having clear, single-purpose functionality
4. Being type-safe
5. Following the library's focus on object manipulation and array operations
6. Complementing existing methods

The suggestions avoid methods that:
1. Have confusing or ambiguous behavior
2. Don't work well in pipe chains
3. Have multiple ways to be used
4. Are better suited as part of application code
5. Have complex TypeScript definitions that would be hard to maintain 
---
check wrong import

from './[a-zA-Z]+'
---
https:arethetypeswrong.github.io
---
stats
![Alt](https:repobeats.axiom.co/api/embed/6f9f2aa57a6f1ed67156cea07e8cff86a94ef7b8.svg "Repobeats analytics image")

https://emanuelef.github.io/daily-stars-explorer/#/selfrefactor/rambda
---

npx publint > files/report

https:publint.dev/rambda@9.2.1

---

---
faster isobject
const _isObject = x => {
  if (x != null && typeof x === 'object') {
    return Object.prototype.toString.call(x) === '[object Object]'
  }
  return false
}
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

export type IsAny<T> = 0 extends (1 & T) ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

export type Debug<T> = { [K in keyof T]: T[K] }
export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
export type ExpectValidArgs<FUNC extends (...args: any[]) => any, ARGS extends any[]> = ARGS extends Parameters<FUNC>
  ? true
  : false

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
===
export type IsNotNever<T> = [T] extends [never] ? false : true;
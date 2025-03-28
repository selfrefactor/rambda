===
https:bundlejs.com
===

export function splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
---
check wrong import

from './[a-zA-Z]+'
---
https:arethetypeswrong.github.io
---
stats
![Alt](https:repobeats.axiom.co/api/embed/6f9f2aa57a6f1ed67156cea07e8cff86a94ef7b8.svg "Repobeats analytics image")

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
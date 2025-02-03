REFs

Simplify typing for non-curried methods. The goal is to make typings more readable and easier to understand and maintain. The main goal of Rambda methods is to be used inside `R.piped` chain. 
===
import {filter} from 'rambda'

function dropEmpty<T>(input: T[] | Dictionary<T>) {
  if (input instanceof Array) {
    // <-- this check is necessary to calm down the TS compiler ... @_@
    return filter<T>(Boolean, input) // <-- notice the same
  } else {
    return filter<T>(Boolean, input) // <-- code...
  }
  // return filter<T>(Boolean, input)
}

describe('R.dropEmpty', () => {
  it('happy', () => {
    const list = [1, 2, 3, '']
    const result: any = dropEmpty(list)

    result // $ExpectType any
  })
})

===

export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
export type IsTrue<T extends true> = T
export type IsFalse<T extends false> = T

export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
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

===
export function append<T>(xToAppend: T): (iterable: T[]) => T[]; is added for consistency and as a fallback just in case as there is no spec to cover this case
===
// cannot be tested with `let list = []` because of implicit any
===
===
    "moduleResolution":"node",

import {createPipe, filter as filterRemeda} from 'remeda'

test('remeda test', () => {
  interface MyTestType{value:string}
  const list: MyTestType[] = [{ value: 'aaaa' }, { value: 'bbb' }]
  
  let result = createPipe<MyTestType[], MyTestType[]>(filterRemeda((x) => x.value.includes('a')))(list)
  result // $ExpectType MyTestType[]
})

===
still issue with order of rambda.js
===
https://emanuelef.github.io/daily-stars-explorer/#/selfrefactor/rambda
===
https://gitdiagram.com/selfrefactor/rambda
https://typehero.dev/explore/medium - ref
===

===
https:bundlejs.com
===

export function splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
---
---
REF

check wrong import

from './[a-zA-Z]+'

export type FlattenObject<T extends object> = object extends T
  ? object
  : {
        [K in keyof T]-?: (
          x: NonNullable<T[K]> extends infer V
            ? V extends object
              ? V extends readonly any[]
                ? never 
                : Flatten<V> extends infer FV
                  ? {
                      [P in keyof FV as `${Extract<K, string>}.${Extract<P, string>}`]: FV[P]
                    }
                  : never 
              : Pick<T, K>
            : never 
        ) => void
      } extends Record<keyof T, (y: infer O) => void>
    ? O 
    : never;




---


---
https:arethetypeswrong.github.io
https:badgen.net/npm
---
stats
![Alt](https:repobeats.axiom.co/api/embed/6f9f2aa57a6f1ed67156cea07e8cff86a94ef7b8.svg "Repobeats analytics image")
---
## ABOVE IS IN PROGRESS

npx publint > files/report


## ABOVE SHOULD BE DONE

https:publint.dev/rambda@9.2.1
https:arethetypeswrong.github.io/?p=ramda%400.30.1

---

---
---

===
REFS:

https:github.com/ramda/ramda/pull/3430/files
https:github.com/thi-ng/umbrella/blob/develop/packages/arrays/src/ends-with.ts
https:docs.retool.com/workflows/guides/blocks/javascript
https:snyk.io/advisor/npm-package/ramda
https:github.com/rogerfar/curray/blob/master/src/index.ts
https:radash-docs.vercel.app/docs/typed/is-symbol
https:radash-docs.vercel.app/docs/async/defer
https:radash-docs.vercel.app/docs/array/counting
https:www.matthewtao.com/blog/post/ramda-curry-by-source-code

can wait:

https:github.com/DefinitelyTyped/DefinitelyTyped/pull/59219/files
https:github.com/ramda/ramda/pull/3270
https:tutorial.docusaurus.io/docs/tutorial-basics/create-a-page
https:www.reddit.com/r/typescript/comments/10cw9ju/ramda_and_typescript_issues/
https:ramdajs.com/docs/#ascend
https:vitepress.dev/
https:vitepress.dev/guide/getting-started
https:github.com/unional/type-plus/blob/main/type-plus/ts/functional/compose.spec.ts
https:github.com/MathisBullinger/froebel/blob/main/pipe.test.ts
https:github.com/tinylibs/tinybench
https:github.com/gustavoguichard/string-ts/blob/main/src/primitives.ts
https:github.com/ramda/ramda/pull/3376/files

frozen:

https:devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/#package-json-exports-imports-and-self-referencing
https:github.com/flybondi/ramda-land/blob/master/src/rename-keys.js
https:ramdajs.com/docs/#collectBy
https:ramdajs.com/docs/#thunkify
https:github.com/ts-essentials/ts-essentials/blob/master/lib/any-array/index.ts


- remove .nojekyll in project root


=== ABOVE from TODO list
REFs

Simplify typing for non-curried methods. The goal is to make typings more readable and easier to understand and maintain. The main goal of Rambda methods is to be used inside `R.piped` chain. 
===
import {filter} from 'rambda'

function dropEmpty<T>(input: T[] | Dictionary<T>) {
  if (input instanceof Array) {
     <-- this check is necessary to calm down the TS compiler ... @_@
    return filter<T>(Boolean, input)  <-- notice the same
  } else {
    return filter<T>(Boolean, input)  <-- code...
  }
   return filter<T>(Boolean, input)
}

describe('R.dropEmpty', () => {
  it('happy', () => {
    const list = [1, 2, 3, '']
    const result: any = dropEmpty(list)

    result  $ExpectType any
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

 https:stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
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
 cannot be tested with `let list = []` because of implicit any
===
===
    "moduleResolution":"node",

import {createPipe, filter as filterRemeda} from 'remeda'

test('remeda test', () => {
  interface MyTestType{value:string}
  const list: MyTestType[] = [{ value: 'aaaa' }, { value: 'bbb' }]
  
  let result = createPipe<MyTestType[], MyTestType[]>(filterRemeda((x) => x.value.includes('a')))(list)
  result  $ExpectType MyTestType[]
})

===
still issue with order of rambda.js
===
https:emanuelef.github.io/daily-stars-explorer/#/selfrefactor/rambda
===
https:gitdiagram.com/selfrefactor/rambda
https:typehero.dev/explore/medium - ref
===
# Explanation of scripts
![Visualization of the codebase](./diagram.svg)

## benchmark

yarn build:step && METHOD=flatten yarn benchmark

> Require build command first, i.e. `yarn build`

## publish

> Require release build command first, i.e. `yarn out`

It streamlines the process of publishing

## d

> Expects `run-fn` to be installed

It lints and commits. Useful for faster deploy.

## github

https:github.com/cli/cli#installation

It makes a Github release. It expects user to be logged with Github.

> Part of `rambda-scripts/README.md`'s `## Release steps` section

## run specific Rambda method agains Ramda test

yarn build:step && WITH_INITIAL_STEP=ON METHOD=modify yarn run:ramda:test

build output and run ramda test agains rambda method
===

type IsTupleRestOnly<T> = T extends readonly []
  ? true
  : T extends readonly [unknown?, ...infer Tail]
    ? EqualTypes<Readonly<T>, Readonly<Tail>>
    : false;

type TupleParts<
  T,
  PrefixRequired extends Array<unknown> = [],
  PrefixOptionals extends Array<unknown> = [],
  Suffix extends Array<unknown> = [],
> = T extends readonly [infer Head, ...infer Tail]
  ? TupleParts<Tail, [...PrefixRequired, Head], PrefixOptionals, Suffix>
  : T extends readonly [...infer Head, infer Tail]
    ? TupleParts<Head, PrefixRequired, PrefixOptionals, [Tail, ...Suffix]>
    : 
      IsTupleRestOnly<T> extends true
      ? 
        T extends ReadonlyArray<infer Item>
        ? {
            prefix: [...PrefixRequired, ...Partial<PrefixOptionals>];
            required: PrefixRequired;
            optional: PrefixOptionals;
            item: Item;
            suffix: Suffix;
          }
        : never
      : 
        T extends readonly [(infer OptionalHead)?, ...infer Tail]
        ? TupleParts<
            Tail,
            PrefixRequired,
            [...PrefixOptionals, OptionalHead],
            Suffix
          >
        : never;
type PickFromArray<T, Keys extends ReadonlyArray<keyof T>> = MergeTypes<
  Pick<
    T,
    TupleParts<Keys>["required"][number] | TupleParts<Keys>["suffix"][number]
  > &
    Partial<
      Pick<T, TupleParts<Keys>["optional"][number] | TupleParts<Keys>["item"]>
    >
>;

 export function pick<
   T extends object,
   Keys extends ReadonlyArray<keyof T>,
 	S extends string,
 	U extends PickStringToPickPath<S>,
 >(keys: S): (data: T) => MergeTypes<OptionalToRequired<PickFromArray<T, Keys>>>;

 export function pick<
   T extends object,
   const Keys extends ReadonlyArray<keyof T>,
 	const S extends string,
 	const U extends PickStringToPickPath<S>,
 >(keys: Keys): (data: T) => PickFromArray<T, Keys>;

===
export type MergeInsertions<T> =
T extends object
	? { [K in keyof T]: MergeInsertions<T[K]> }
	: T		

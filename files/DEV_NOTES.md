
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
===
curryN 
===
https://rubyapi.org/3.4/o/hash#method-i-invert suggest that namespace with list/obj can help with naming 
===

https://github.com/selfrefactor/rambda/discussions/758

export function splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
---
https://github.com/radashi-org/radashi/pull/357/files
isEmptyObject
---
let recipes = await readJson(resolve(__dirname, '../assets/recipes.json'))
	let instructions = pluck('Instructions' as any, recipes)
---
https://github.com/radashi-org/radashi/blob/main/package.json - to look for `exports` field
---
---
---
  const filesContent = await mapAsync(async (x) => readJson(x), ALL_WORDS_PATHS.inputs)
instead of
  const filesContent = await mapAsync(readJson, ALL_WORDS_PATHS.inputs)

  

https://github.com/ramda/types/pull/127/files

cneck
  // expect(withNumber).toEqual(withNumberExpected)

https://github.com/ramda/ramda/pull/3441/files
https://github.com/ramda/types/pull/122/files

https://github.com/ramda/types/pull/129/files#diff-d9fac8353ad9864266cabb1f64898d7290f9c71bac877858f72feeaef3c55351

https://github.com/selfrefactor/rambda/pull/744

https://github.com/ramda/types/pull/127/files
https://github.com/ramda/types/pull/122/files
---
https://github.com/remeda/remeda/pull/1002/files

https://remedajs.com/docs/#fromKeys
https://remedajs.com/docs/#omitBy

	https://github.com/ramda/types/pull/110/files
---
https://arethetypeswrong.github.io
https://badgen.net/npm
---
stats
![Alt](https://repobeats.axiom.co/api/embed/6f9f2aa57a6f1ed67156cea07e8cff86a94ef7b8.svg "Repobeats analytics image")
---
## ABOVE IS IN PROGRESS

npx publint > files/report

https://github.com/selfrefactor/rambda/pull/737

## ABOVE SHOULD BE DONE

## deepUpdate

R.middle
https://github.com/ramda/types/pull/73/files
https://github.com/ramda/types/pull/72/files
https://github.com/ramda/types/pull/129/files
https://publint.dev/rambda@9.2.1
https://arethetypeswrong.github.io/?p=ramda%400.30.1

https://github.com/denoland/std/blob/main/collections/associate_by_test.ts
https://github.com/denoland/std/blob/main/collections/reduce_groups_test.ts
https://github.com/denoland/std/blob/main/collections/permutations_test.ts
https://github.com/denoland/std/blob/main/collections/partition_entries_test.ts
https://github.com/denoland/std/blob/main/collections/map_values_test.ts
https://github.com/denoland/std/blob/main/collections/map_keys_test.ts
https://github.com/denoland/std/blob/main/collections/join_to_string_test.ts
https://github.com/denoland/std/blob/main/collections/sum_of_test.ts
---

https://rubyapi.org/3.4/o/array#method-i-one-3F
---
https://zuplo.com/blog/2024/10/10/unlocking-the-power-of-json-patch
---
bench against https://romgrk.com/posts/optimizing-javascript#3-avoid-arrayobject-methods
---

---

export const getTestData = <K extends keyof TestData>(key: K) => {
if (!TEST_DATA) return null
const value = TEST_DATA[key]
if (!value) return null

return value
}

export function findNth <T extends unknown>(
predicate: (input: T) => boolean
list: T[]
nth: number
): {value: T, index: number} | null {
let counter = 0
let result: {value: T, index: number} | null = null
input.list.forEach((value, index) => {
if(result) return
if (input.predicate(value)){
counter++
}
if (counter === input.nth){
result = {value, index}
}
})
return result
}

---
fix pluck and others where Record is used wrong
// import { pipe, pluck, prop } from "ramda"
import { pipe, pluck, prop } from "rambdax"

export const parseDatabase = pipe( pluck('doc'), pluck('dePart') )

but this works
export const parseDatabase: (input: DbOrigin[]) => string[] = pipe( pluck('doc'), pluck('dePart') )

---

https://github.com/toss/es-toolkit/issues/91

## const pickedObject = pickDeep(object, [


## https://github.com/ramda/ramda/issues/3390

## https://tokens2css.nanools.com/

---
https://codescene.io/projects/61343/jobs/3120520/results/code/hotspots/biomarkers?name=rambda-scripts%2Fsrc%2Fpopulate-readme-data%2Fcreate-method-data.ts

https://github.com/marketplace/actions/todo-to-issue

https://app.deepsource.com/gh/selfrefactor
---

## https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

R.partition ts

namespace partition {
declare function partition(
list: Item[],
predicate: (value: Item) => value is Narrowed
): [Narrowed[], Exclude[]];

---
R.cycle
https://www.pythoncheatsheet.org/modules/itertools-module

R.Flatten
orama/packages/orama/src/types.ts

## import { invert } from 'lodash'

R.range(start,end+1) should support desc

but range is one example that this is not FP

to keep it simply - R.rangeDescending

splitWith
R.pickWith
R.pickAllWith - maybe

## R.findInObject

RA.template: compound strings with tagged template literals

## https://github.com/char0n/ramda-adjunct/issues/975

Fix compact type for objects

## https://github.com/char0n/ramda-adjunct/pull/1611/files

---

## https://github.com/smartprocure/futil-js?tab=readme-ov-file#cascadepropkey

apply to allPass
https://github.com/selfrefactor/rambda/pull/695/files

- Revert changes in `R.anyPass` introduced in `8.4.0` release. The reason is that the change was breaking the library older than `5.2.0` TypeScript.

## in other words, this should be done once there is significant amount of users on `5.2.0` and above

## try omitPath as method instead of multiple paths

handling errors out of the box:

## const [err, result] = R.safePipe
===
REFS:

https://github.com/selfrefactor/rambda/issues/638
https://github.com/ramda/ramda/pull/3430/files
https://github.com/thi-ng/umbrella/blob/develop/packages/arrays/src/ends-with.ts
https://docs.retool.com/workflows/guides/blocks/javascript
https://snyk.io/advisor/npm-package/ramda
https://github.com/rogerfar/curray/blob/master/src/index.ts
https://radash-docs.vercel.app/docs/typed/is-symbol
https://radash-docs.vercel.app/docs/async/defer
https://radash-docs.vercel.app/docs/array/counting
https://www.matthewtao.com/blog/post/ramda-curry-by-source-code

can wait:

https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59219/files
https://github.com/ramda/ramda/pull/3270
https://tutorial.docusaurus.io/docs/tutorial-basics/create-a-page
https://www.reddit.com/r/typescript/comments/10cw9ju/ramda_and_typescript_issues/
https://ramdajs.com/docs/#ascend
https://vitepress.dev/
https://vitepress.dev/guide/getting-started
https://github.com/unional/type-plus/blob/main/type-plus/ts/functional/compose.spec.ts
https://github.com/MathisBullinger/froebel/blob/main/pipe.test.ts
https://github.com/tinylibs/tinybench
https://github.com/gustavoguichard/string-ts/blob/main/src/primitives.ts
https://github.com/ramda/ramda/pull/3376/files

frozen:

https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/#package-json-exports-imports-and-self-referencing
https://github.com/flybondi/ramda-land/blob/master/src/rename-keys.js
https://ramdajs.com/docs/#collectBy
https://ramdajs.com/docs/#thunkify
https://github.com/ts-essentials/ts-essentials/blob/master/lib/any-array/index.ts


- remove .nojekyll in project root


=== ABOVE from TODO list
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

https://github.com/cli/cli#installation

It makes a Github release. It expects user to be logged with Github.

> Part of `rambda-scripts/README.md`'s `## Release steps` section

## run specific Rambda method agains Ramda test

yarn build:step && WITH_INITIAL_STEP=ON METHOD=modify yarn run:ramda:test

build output and run ramda test agains rambda method


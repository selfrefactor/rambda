
- Optimize many methods to better work in TypeScript context with `R.pipe/R.compose`. The focus was passing objects through the `pipe/compose` chain.

- Add `R.piped` method from `Rambdax` since it works better with TypeScript than `R.pipe` and `R.compose`. It supports up to 20 function inputs.

Here is one example why `R.piped` is better than `R.pipe`:

```ts
const list = [1, 2, 3];

it('within piped', () => {
	const result = piped(
		list,
		filter((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
	);
	result; // $ExpectType number[]
});
it('within pipe requires explicit type', () => {
	pipe(
		(x) => x,
		filter<number>((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
		filter((x: number) => {
			x; // $ExpectType number
			return x > 1;
		}),
	)(list);
});
```

- Remove following methods:
-- addIndex
-- addIndexRight

_ Regarding using object as input with TypeScript in methods such as `R.map/filter` - this feature is no longer supported in TypeScript as it has multiple issues when using inside pipes. In JS, it still works as before. Following methods are affected:

-- R.map
-- R.mapIndexed
-- R.filter
-- R.reject

- Regarding using string as path input in `R.omit`, `R.pick` and `R.path` with TypeScript - now it require explicit definition of expected return type.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

- Remove use of `Dictionary` custom interface and use more appropriate `Record<PropertyType, ...>`

- Remove use of `Record<string, ...>` in favour of `Record<PropertyType, ...>`

- Add TypeScript definition to handle common case of `R.filter(Boolean)` that will turn `Array<T | undefined>` to `Array<T>`.

- Regarding using object with `R.forEach` in TypeScript - this is no longer supported. Again, JS version still works with objects.

- head/last - empty array as input will return `undefined`, but `never`
- assocPath - stop supporting curring of type `(x)(y)(z)`

- Require explicit output type(s) as it is very hard to pick up the correct type in many cases.

-- assocPath
-- dissocPath 

- Sync with typing of `@types/ramda`:

-- allPass
-- anyPass
-- append
-- both
-- countBy
-- drop
-- dropLast
-- dropRepeatsBy
-- either
-- filter
-- forEach
-- keys
-- map
-- mapObjIndexed
-- mergeAll
-- modify
-- modifyPath
-- omit
-- partition
-- pluck
-- prepend
-- propEq
-- where
-- whereAny

- Sync with typing of `remeda`:

-- filter
-- reject
-- map
-- mapIndexed
-- toPairs

- Publish to JSR registry - https://jsr.io/@rambda/rambda

- Replace Record<string> with Record<PropertyKey>

- Improve TypeScript definitions of:

-- objOf
-- pluck
-- mergeWith

- R.assoc doesn't support curring of type `(x)(y)(z)`

- Remove TypeScript tests for `R.pipe` and `R.compose`. From now on, `R.piped` is the recommended method for TypeScript chaining. Also, `R.piped` can be easily made to work just like `R.pipe`.

- remove .nojekyll in project root

- vitest

- Renamed methods: 

-- `evolve` to `changeObjectValuesWith`
-- `chain` to `flatMap`
-- `mapObjIndexed` to `mapObject`
-- `collectBy` to `groupBy`
===
R.path with string path

check naming in fp-ts, as evolve looks like magic. also why radashi uses remove not reject
https://github.com/toss/es-toolkit - another FP library
===
ABOVE IS DONE

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
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

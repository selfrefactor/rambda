- Optimize many methods to better work in TS context with R.pipe/R.compose. The focus was passing objects through the pipe/compose chain.

ABOVE IS DONE
===

need further check:

- chain
===

https://github.com/selfrefactor/rambda/discussions/758

export function splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
---
no example usage
sortWith

Try this R.sortWith example in Rambda REPL
---
Need to install the following packages:
docsify-cli@4.4.4
Ok to proceed? (y) 
---
let recipes = await readJson(resolve(__dirname, '../assets/recipes.json'))
	let instructions = pluck('Instructions' as any, recipes)
---
  console.log
    Size - 0.454681MB
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

update Rambdax and release to now 
https://github.com/selfrefactor/rambda/pull/744

rambdax export file should include js extension

https://github.com/ramda/types/pull/127/files
https://github.com/ramda/types/pull/122/files
release string.fn
---
  "exports": {
    ".": {
      "require": {
        "types": "./lib/index.d.cts",
        "default": "./lib/index.cjs"
      },
      "import": {
        "types": "./lib/index.d.ts",
        "default": "./lib/index.mjs"
      },
      "default": {
        "types": "./lib/index.d.ts",
        "default": "./lib/index.mjs"
      }
    }
  },


	https://github.com/ramda/types/pull/110/files
---

## ABOVE IS IN PROGRESS

npx publint > files/report

https://github.com/selfrefactor/rambda/pull/737

https://deno.land/x/rambda@9.3.0?source - release with `v9.3.0` tag

release X on deno

deno can install with package.json
https://deno.com/blog/v2.0

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

chech in to read for examples
"exports": {
".": {
"development": {
"require": "./dist/cjs/development/index.cjs",
"import": "./dist/esm/development/index.mjs"
},
"require": "./dist/cjs/production/index.cjs",
"import": "./dist/esm/production/index.mjs",
"types": "./dist/types/index.d.ts"
}
},

---
https://zuplo.com/blog/2024/10/10/unlocking-the-power-of-json-patch
---
test('bug 524', () => {
  /*
    https://github.com/selfrefactor/rambda/issues/524
  */
  const state = {}

  const withDateLike = assocPathFn(
    [ 'outerProp', '2020-03-10' ],
    { prop : 2 },
    state
  )
  const withNumber = assocPathFn(
    [ 'outerProp,5' ], { prop : 2 }, state
  )

  const withDateLikeExpected = { outerProp : { '2020-03-10' : { prop : 2 } } }
  const withNumberExpected = { outerProp : { 5 : { prop : 2 } } }
  expect(withDateLike).toEqual(withDateLikeExpected)
  // expect(withNumber).toEqual(withNumberExpected)
})

assocpath
---
bench against https://romgrk.com/posts/optimizing-javascript#3-avoid-arrayobject-methods
---
R.path with string path - check typehero notes
---
let result = piped(
		input,
		split(`\n`),
		map(trim),
		filter(x => Boolean(x)),

why cannot filter(boolean) be used		
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

FP is generally slower

add pipe example with large data set - with FP and declarative

## run benchmark in Node, but also in dedicated Playwright browser

REFS

- prev assoc

interface AssocPartialOne<K extends keyof any> {
<T>(val: T): <U>(obj: U) => Record<K, T> & U;
<T, U>(val: T, obj: U): Record<K, T> & U;
}

export function assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>;
export function assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & Omit<U, K>;
export function assoc<K extends string>(prop: K): AssocPartialOne<K>;

export function dissoc<T extends object, K extends keyof T>(prop: K, obj: T): Omit<T, K>;
export function dissoc<K extends string | number>(prop: K): <T extends object>(obj: T) => Omit<T, K>;

---
const nestedObject = {
 *   a: {
 *     b: {
 *       c: 1
 *     }
 *   },
 *   d: [2, 3]
 * };
 * 
 * const flattened = flattenObject(nestedObject);
 * console.log(flattened); 
 * // Output:
 * // {
 * //   'a.b.c': 1,
 * //   'd.0': 2,
 * //   'd.1': 3
 * // }
---

## https://github.com/ramda/ramda/issues/3390

## https://tokens2css.nanools.com/

https://github.com/selfrefactor/rambda/issues/657#issuecomment-2235866164

Hi I know this is a closed issue right now, but just to let you know for a possible solution that also includes the "exports" statement:

According to the documentation:

    Within the "exports" object, key order is significant. During condition matching, earlier entries have higher priority and take precedence over later entries. The general rule is that conditions should be from most specific to least specific in object order.

## So, if you want webpack to pick up a different export than node you should, add a "webpack" condition as the first item the exports map.

cancel even in debounce

https://github.com/toss/es-toolkit/blob/main/src/function/debounce.ts

## check TS output of library to compare

/\*\*

- Check whether a given key is in an object
- @internal
  \*/
  function has<T, K extends PropertyKey>(value: T, key: K): value is T & { [Key in K]: unknown } {
  return typeof value === 'object' && value !== null && key in value;
  }

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

R.maybe

// case for maybe in Ramdba
const isWord = word => {
if(!word) return false
if(!word.trim()) return false
if(!word.includes('('))return false
if(!word.includes(')'))return false
if(word.includes('NULL'))return false
return !!getCyrillicWord(word)
}

---

R.path with string path

---

R.cycle
https://www.pythoncheatsheet.org/modules/itertools-module

---

R.Flatten
orama/packages/orama/src/types.ts

---

## import { invert } from 'lodash'

R.range(start,end+1) should support desc

but range is one example that this is not FP

to keep it simply - R.rangeDescending

---

splitWith
R.pickWith
R.pickAllWith - maybe

---

## R.findInObject

RA.template: compound strings with tagged template literals

## https://github.com/char0n/ramda-adjunct/issues/975

Fix compact type for objects

## https://github.com/char0n/ramda-adjunct/pull/1611/files

restore maptoobject rambdax@2.1.0

## why mapObject is not same

Double check

it('mixed', () => {
const result = head(mixedList)
result // $ExpectType string | number
})

## and typing of `R.head` suggest that this issue could be on many more places

> Idea of this file is to store CHANGELOG changes until MR is ready to be opened.

differenceWith

---

## https://github.com/smartprocure/futil-js?tab=readme-ov-file#cascadepropkey

apply to allPass
https://github.com/selfrefactor/rambda/pull/695/files

- Revert changes in `R.anyPass` introduced in `8.4.0` release. The reason is that the change was breaking the library older than `5.2.0` TypeScript.

## in other words, this should be done once there is significant amount of users on `5.2.0` and above

## try omitPath as method instead of multiple paths

handling errors out of the box:

## const [err, result] = R.safePipe

export default function deepqual(foo, bar) {
var ctor, len;
if (foo === bar) return true;
if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
if (ctor === Date) return foo.getTime() === bar.getTime();
if (ctor === RegExp) return foo.toString() === bar.toString();
if (ctor === Array && (len=foo.length) === bar.length) {
while (len-- && dequal(foo[len], bar[len]));
return len === -1;
}
if (ctor === Object) {
if (Object.keys(foo).length !== Object.keys(bar).length) return false;
for (len in foo) if (!(len in bar) || !dequal(foo[len], bar[len])) return false;
return true;
}
}
return foo !== foo && bar !== bar;
}
===
REFS:

# run immutable script

https://github.com/ramda/types/pull/101/files

export function last<T>(list: readonly [...any[], T]): T;
export function last<T>(list: ReadonlyNonEmptyArray<T>): T;
export function last<T>(list: readonly T[]): T | undefined;
===
export function isFunction(value) {
return !!(value && {}.toString.call(value) === '[object Function]')
}
===
MAJOR bump suggestions

[BUG]assocPath interprets string path element as integer, creating arrays instead of objects.

WONT DO:

R.equalsProps(a,b,properties)
R.sum - as python
R.contains({a:1}, {a:1, b:2}) => true
R.resolve https://github.com/verydanny/vcslack/blob/master/src/api.ts
deprecate R.renameProps in favour of https://jmlweb.github.io/ramdu/global.html#evolveKeys
R.renamePropsWith
https://github.com/Maggi64/moderndash/blob/main/package/src/object/flatKeys.ts

from bookmarks:

https://arethetypeswrong.github.io/?p=ramda%400.29.1
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

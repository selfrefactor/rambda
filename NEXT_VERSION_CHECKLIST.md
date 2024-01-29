- insert
- insertAll
- lt
- lte
- isNotNil
- pickBy

- pathSatisfies
- swap
- mergeDeepLeft

run immutable script

---
transform this mocha test to jest(also remove describe block as I dont need it)
---
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
---

---
simplify lint
---
such types as `SortObjectPredicate` need to be exported
---
in js project like niketa theme, go to source lead to readable code, is ramda the same?

what about ts react
---
add motivation

optimize above the fold
---
include new methods to method to skip list
---
issue with gh release
---
throttle should accept 0 arguments, i.e. no need to force unary function
---
splitWith
R.pickWith
R.pickAllWith - maybe
---
wont do
include standut x methods to rambda

such as

sortObject
---
R.findInObject
---
restore maptoobject x@2.1.0

why mapObject is not same
---
REFS:

- forEachObjIndexed should not contain source file nor test file
---




---
in js project like niketa theme, go to source lead to readable code, is ramda the same?

what about ts react
---

fix https://github.com/selfrefactor/rambdax/issues/93

---
group TS test for similar methods

---
- construct - it is class helper and classes are not very functional oriented
- constructN
- into - no support for transducer as it is overly complex to implement, understand and read.
- invert - overly complicated and limited use case
- invertObj
- invoker
- keysIn - we shouldn't encourage extending object with `.prototype` 
- lift
- liftN
- mapAccum - `Ramda` example doesn't looks convincing
- mapAccumRight
- memoizeWith - hard to imagine its usage in context of `R.pipe`/`R.compose`
- mergeDeepWith - limited use case
- mergeDeepWithKey
- mergeWithKey
- nAry - hard to argument about and hard to create meaningful TypeScript definitions
- nthArg - limited use case
- o - enough TypeScript issues with `R.pipe`/`R.compose` to add more composition methods
- otherwise - naming is confusing
- pair - `left-pad` types of debacles happens partially because of such methods that should not be hidden, bur rather part of your code base even if they need to exist.
- partialRight - I dislike `R.partial`, so I don't want to add more methods that are based on it
- pipeWith
- project - naming is confusing, but also limited use case
- promap
- reduceRight - I find `right/left` methods confusing so I added them only where it makes sense.
- reduceWhile - functions with 4 inputs - I think that even 3 is too much
- reduced
- remove - nice name but it is too generic. Also, `Rambdax` has such method and there it works very differently
- scan - hard to explain
- sequence
- splitWhenever
- symmetricDifferenceWith
- andThen
- toPairsIn
- transduce
- traverse
- unary
- uncurryN
- unfold - similar to `R.scan` and I find that it doesn't help with readability
- unionWith - why it has its usage, I want to limit number of methods that accept more than 2 arguments
- until
- useWith - hard to explain
- valuesIn
- xprod - limited use case
- thunkify
---
Double check

it('mixed', () => {
    const result = head(mixedList)
    result // $ExpectType string | number
  })
  
  and typing of `R.head` suggest that this issue could be on many more places
---
> Idea of this file is to store CHANGELOG changes until MR is ready to be opened.

differenceWith

---
apply to allPass
https://github.com/selfrefactor/rambda/pull/695/files
---
use todos and clear todos when this file is smaller
check again deno as dissocpath doesn't add js extension to imports
---
try omitPath as method instead of multiple paths
---
replace missing ramda methods with text that argument is missing
===
publish after march 2024

export function anyPass<T, U extends T[]>(predicates: { [K in keyof U]: (x: T) => x is U[K]; }): (input: T) => input is U[number];
===
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

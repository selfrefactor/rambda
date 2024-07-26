throttle should accept 0 arguments, i.e. no need to force unary function

---
ABOVE IS DONE
---
https://github.com/ramda/types/pull/37/files

https://github.com/ramda/types/pull/37/files#diff-60589fd0fcb0f4ced0a8957986e06e1fce8b9193dce547b2fee7f9446cb41c48
---
ABOVE IS IN PROGRESS
---
https://github.com/ramda/types/pull/127/files
---
ABOVE SHOULD BE DONE
---
https://publint.dev/rambda@9.2.1
https://arethetypeswrong.github.io/?p=ramda%400.30.1
---
fix pluck and others where Record is used wrong
// import { pipe, pluck, prop } from "ramda"
import { pipe, pluck, prop } from "rambdax"

export const parseDatabase = pipe( pluck('doc'), pluck('dePart') )

but this works 
export const parseDatabase: (input: DbOrigin[]) => string[] = pipe( pluck('doc'), pluck('dePart') )
---
https://github.com/toss/es-toolkit/issues/91

const pickedObject = pickDeep(object, [
---
FP is generally slower

add pipe example with large data set - with FP and declarative

run benchmark in Node, but also in dedicated Playwright browser
---
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
https://github.com/ramda/ramda/issues/3390
---
https://github.com/selfrefactor/rambda/issues/657#issuecomment-2235866164

Hi I know this is a closed issue right now, but just to let you know for a possible solution that also includes the "exports" statement:

According to the documentation:

    Within the "exports" object, key order is significant. During condition matching, earlier entries have higher priority and take precedence over later entries. The general rule is that conditions should be from most specific to least specific in object order.

So, if you want webpack to pick up a different export than node you should, add a "webpack" condition as the first item the exports map.
---
cancel even in debounce

https://github.com/toss/es-toolkit/blob/main/src/function/debounce.ts

check TS output of library to compare 
---
/**
 * Check whether a given key is in an object
 * @internal
 */
function has<T, K extends PropertyKey>(value: T, key: K): value is T & { [Key in K]: unknown } {
  return typeof value === 'object' && value !== null && key in value;
}
---
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
---
---
splitWith
R.pickWith
R.pickAllWith - maybe
---
R.findInObject
---
restore maptoobject rambdax@2.1.0

why mapObject is not same
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


- Revert changes in `R.anyPass` introduced in `8.4.0` release. The reason is that the change was breaking the library older than `5.2.0` TypeScript.

in other words, this should be done once there is significant amount of users on `5.2.0` and above
---
try omitPath as method instead of multiple paths
---
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

run immutable script
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

10.3.1

- Fix issue with wrong order of inputs in `R.createObjectFromKeys` - [Issue #779](https://github.com/selfrefactor/rambda/issues/779)

10.3.1

- Fix issue with wrong order of inputs in `R.propEq` - [Issue #779](https://github.com/selfrefactor/rambda/issues/779)

- Fix issue with TypeScript definitions for `R.includes`- [Issue #781](https://github.com/selfrefactor/rambda/issues/781)

10.3.0

- Add `R.mapPropObject`

- Add `R.duplicateBy`

- Add `R.filterAsync`

- Add `R.indexBy`

- Restore `R.replaceAll`

- Remove option for `R.mapAsync` to be called outside of `R.pipeAsync`. This is done for consistency as all other methods follow this rule, i.e. they are all curried.

- Fix `R.pluck` to work without `R.pipe`
- Remove option for `R.mapAsync` to be called outside of `R.pipeAsync`. This is done for consistency as all other methods follow this rule, i.e. they are all curried.

- Fix `R.pluck` to work without `R.pipe`

10.2.0

Add `R.modifyPath`

10.1.0

- Add `R.assertType` and `R.convertToType` methods

- Fix issue with exports in old Node.js versions - [Discussion #768](https://github.com/selfrefactor/rambda/discussions/768)

- Fix `deno` release as it was not possible for users to import version `10.0.0`

10.0.1

- Fix issue with `R.unwind`/`R.pick` typings - [Issue #766](https://github.com/selfrefactor/rambda/issues/766)

10.0.0

This is major revamp of `Rambda` library:

- `R.pipe` is the recommended method for TypeScript chaining.

- All methods should be useful to work inside `R.pipe` chain. If method doesn't have clear use case inside `R.pipe`, it is removed as part of this revamp.

- There will be only one way to use each method. For example, `R.add` can be used only with `R.add(1)(2)`, i.e. it doesn't support `R.add(1, 2)`. This helps with testing and also with TypeScript definitions. This aligns with TypeScript focused approach of this library.

- Confusing methods are removed. For example, `R.cond` and `R.ifElse` are removed as their usage inside `R.piped` makes the whole chain less readable. Such logic should be part of your codebase, not part of external library.

- All methods that expect more than 1 input, will have to be called with `R.methodName(input1)(input2)` or `R.methodName(input1, input2)(input3)`. This is to make TypeScript definitions easier to maintain.

- Optimize many methods to better work in TypeScript context with `R.pipe`. The focus was passing objects through the `R.pipe` chain.

- Add `R.pipe` supports up to 20 functions, i.e. chain can be 20 functions long.

- `R.chain` is renamed to `R.flatMap`
- `R.comparator` is renamed to `R.sortingFn`

- Remove following methods:

-- Lenses - `R.lens`, `R.lensProp`, `R.lensPath`, `R.view`, `R.set`, `R.over`

-- T, F

-- add

-- addIndex, addIndexRight

-- always

-- ap

-- applySpec

-- applyTo

-- assoc, assocPath, dissoc, dissocPath

-- binary

-- bind

-- call

-- collectBy

-- compose

-- composeWith

-- cond

-- converge

-- curry

-- difference, differenceWith

-- divide, multiply, subtract

-- endsWith/startsWith

-- flip

-- forEachObjIndexed

-- fromPairs

-- gte, lte, lt, gt

-- identical

-- ifElse

-- insert

-- juxt

-- length

-- mapObjIndexed

-- mergeAll, mergeLeft, mergeDeepLeft, mergeDeepRight

-- move

-- partitionIndexed

-- pickAll

-- pickBy

-- repeat

-- splitWhen

-- toLower/toUpper

-- unapply

-- unnest

-- update

-- without

- Add following methods:

-- R.pipeAsync

-- R.addProp

-- R.createObjectFromKeys

-- R.mapAsync

-- R.mapParallelAsync

-- R.ascend/R.descend

-- R.shuffle

-- R.permutations

-- R.compact

-- R.rejectObject

-- R.findNth

-- R.combinations

-- R.sortByPath

-- R.sortByPathDescending

-- R.sortByDescending

-- R.flattenObject

-- R.addPropToObjects

- Rename following methods:

-- modifyItemAtIndex -> adjust

-- checkObjectWithSpec -> where

-- objectIncludes -> whereEq

-- modify -> modifyProp

-- chain -> flatMap

-- mapObjIndexed -> mapObject

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

- Stop support string inputs for some methods, since it was hard to correctly type them in TypeScript.

-- append/prepend

- Change `R.range` to work with descending order.

- Remove `rambda/immutable` as import option as it is hard to support in the new context.

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

-- mapObject

-- toPairs

-- partition

- Publish to JSR registry - https://jsr.io/@rambda/rambda

- Replace Record<string> with Record<PropertyKey>

- Improve TypeScript definitions of:

-- objOf

-- pluck

-- mergeWith

- Change `Jest` with `Vitest`.

- Remove `Babel` dependency in `Rollup` build setup.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

9.4.2

- Fix TS issue when `R.take` is used as part of `R.pipe`.

Moving away from `Ramda` types which are problematic in this case:

```typescript
const data = ['foo', 'bar', 'baz', 'qux']
const result = piped(
	data,
	filter(
		x => x.length >= 2
	),
	takeLast(2),
)
```

9.4.1

- Fix bug with `R.differenceWith` when two arrays has same length - [Issue #757](https://github.com/selfrefactor/rambda/issues/757)

- Allow path input to not be transformed when string numbers are there - [Issue #750](https://github.com/selfrefactor/rambda/issues/750)

9.4.0

- Fix `deno` release

- Fix too strict `true` condition in `R.ifElse` - [Issue #750](https://github.com/selfrefactor/rambda/issues/750)

- Change `R.groupBy` typings to match `@types/ramda` typings

9.3.0

- Breaking change in relation to TS typings of `R.assoc`, `R.dissoc` and `R.modify` - https://github.com/ramda/types/pull/37

- Add `R.isNotEmpty` as it is new method in `Ramda`

- Fix `R.head`/`R.last` TS definition - It returns `undefined` if array has length of 0. Before

9.2.1

- Broken `Deno` build - [Issue #731](https://github.com/selfrefactor/rambda/issues/731)

9.2.0

- `R.once` TS type definition miss to context argument and its type - [Issue #728](https://github.com/selfrefactor/rambda/issues/728)

- Fix implementation of `R.unless` function - https://github.com/selfrefactor/rambda/pull/726

9.1.1

- Faster R.equals with Object.is short circuit - https://github.com/selfrefactor/rambda/pull/725

- Fix R.cond transform is unary - https://github.com/selfrefactor/rambda/issues/720

9.1.0

Add these methods

- insert
- insertAll
- lt
- lte
- isNotNil
- pickBy
- pathSatisfies
- swap
- mergeDeepLeft

9.0.1

- Fix bad TS typings, due to missing declaration - [Issue #716](https://github.com/selfrefactor/rambda/issues/716)

9.0.0

Breaking change in TS definitions of `lenses` as now they are synced to `Ramda` types.

- Add `R.sortWith` - [Issue #707](https://github.com/selfrefactor/rambda/issues/707)

- Add `R.innerJoin`, `R.gt`, `R.gte`, `R.reduceBy`, `R.hasIn`

8.6.0

- Wrong typing for `R.dissocPath` - [Issue #709](https://github.com/selfrefactor/rambda/issues/709)

- Update build dependencies

8.5.0

- Revert changes in `R.anyPass` introduced in `8.4.0` release. The reason is that the change was breaking the library older than `5.2.0` TypeScript.

- Wrong `R.partial` TS definition  - [Issue #705](https://github.com/selfrefactor/rambda/issues/705)

- Add `R.dropRepeatsBy`

- Add `R.empty`

- Add `R.eqBy`

- Add `R.forEachObjIndexed`

8.4.0

- Add `R.dissocPath`

- Fix TS definitions of `R.head/R.last` and add missing handle of empty string

- Add `R.removeIndex` - method was before only in `Rambdax`, but now since `R.dissocPath` is using it, it is added to main library.

- Allow `R.omit` to pass numbers as part of properties to omit, i.e. `R.omit(['a', 1], {a: {1: 1, 2: 2}})`

- R.keys always returns strings - [MR #700](https://github.com/selfrefactor/rambda/pull/700)

- Improve `R.prepend/R.append` type interference - [MR #699](https://github.com/selfrefactor/rambda/pull/699)

- Change `R.reduce` TS definitions so index is always received - [MR #696](https://github.com/selfrefactor/rambda/pull/696)

- Functions as a type guard in `R.anyPass` TS definitions - [MR #695](https://github.com/selfrefactor/rambda/pull/695)

- Fix R.append's curried type - [MR #694](https://github.com/selfrefactor/rambda/pull/694)

- Fix cannot compare errors in `Deno` with `R.equals` - [Issue #704](https://github.com/selfrefactor/rambda/issues/704).

- Fix cannot compare `BigInt` with `R.equals`

8.3.0

Add the following methods:

- binary
- call
- collectBy
- comparator
- composeWith

8.2.0

Add the following methods:

- addIndex
- addIndexRight
- ap
- aperture
- applyTo
- ascend
- descend

8.1.0

- Fix input order of TS definitions for `R.propEq` method  - [Issue #688](https://github.com/selfrefactor/rambda/issues/688). The issue was due to 8.0.0 was shipped with TS definitions of `7.5.0` release.

- Add `R.differenceWith` method  - [Issue #91](https://github.com/selfrefactor/rambdax/issues/91)

8.0.0

- handle falsy values in merge methods - https://github.com/ramda/ramda/pull/3222

- `R.head`/`R.last` don't return `undefined` for non-empty arrays

- `R.type` supports dates in TS definition - `Rambda` already did support dates in JS.

- Improve typings of `R.endsWith/startsWith` with regard to `string` input. - [PR #622](https://github.com/selfrefactor/rambda/pull/622)

- Handle list as falsy value in `R.reduce` - [Ramda MR](https://github.com/ramda/ramda/pull/2997/files)

- `R.nop` is removed - it will be moved to `Rambdax` as `R.noop`

- `R.includes` is no longer using string literal in TypeScript definitions

> Reason for breaking change - synchronize with Ramda `0.29.0` release:

- change order of `R.propEq` - [Ramda MR](https://github.com/ramda/ramda/pull/2938/files)
7.1.0

- Add `R.tryCatchAsync`

- Add `R.xnor`

- `R.equals` supports equality of functions.

- Close [Issue #559](https://github.com/selfrefactor/rambda/issues/559) - improve `R.propOr` typings

- Close [Issue #560](https://github.com/selfrefactor/rambda/issues/560) - apply immutable lint to Typescript definitions

- Close [Issue #553](https://github.com/selfrefactor/rambda/issues/553) - fix problem with curried typings of `R.prop`

- Fix wrong `R.last` typing

- Upgrade all `rollup` related dependencies

- `R.type` supports `Symbol` just like *Ramda*.

- Remove file extension in `main` property in `package.json` in order to allow `experimental-modules`. See also this Ramda's PR - https://github.com/ramda/ramda/pull/2678/files

- Import `R.indexBy`/`R.when`/`R.zipObj`/`R.propEq`/`R.complement` changes from recent `@types/ramda` release.

- `R.tryCatch` stop supporting asynchronous functions; the previous behaviour is exported to *Rambdax* as `R.tryCatchAsync`

7.0.1

- Fix missing `Evolved` declaration in Typescript definition

7.0.0

- Rename `R.produce` to `R.produceAsync`

- Add `R.produce` which is synchronous version of `R.produceAsync`

- Stop supporting expression inside template's props. Also, spaces are no longer allowed between `{{` and `}}`, i.e. `R.interpolate('{{ foo }}', x)` should be `R.interpolate('{{foo}}', x)`.

- Add typings for `R.takeWhile` when iterable is a string

- Add `R.takeLastWhile`

- Add `R.dropWhile`

- Add `R.eqProps`

- Add `R.dropLastWhile`

- Add `R.dropRepeats`

- Add `R.dropRepeatsWith`

- Add `R.evolve`

6.2.0

- `R.switcher` accepts `undefined` as valid input

- Add `R.props`

- Add `R.zipWith`

- Add `R.splitAt`

- Add `R.splitWhen`

- Close [Issue #547](https://github.com/selfrefactor/rambda/issues/547) - restore `readonly` declaration in Rambda Typescript definitions.

- `R.append`/`R.prepend` now work only with arrays just like Ramda. Previous behaviour was for them to work with both arrays and strings.

- Sync `R.pluck` typings with `@types/ramda` as there was a tiny difference.

6.1.0 

- Add `R.mapIndexed`

- Add `R.filterIndexed`

- Add `R.forEachIndexed`

- Fix `R.and` wrong definition, because the function doesn't convert the result to boolean. This introduce another difference with `@types/ramda`.

- Add `R.once`

- Add `R.or`
 
6.0.0

- Breaking change - `R.map`/`R.filter`/`R.reject`/`R.forEach`/`R.partition` doesn't pass index as second argument to the predicate, when looping over arrays. The old behaviour of *map*, *filter* and *forEach* can be found in Rambdax methods *R.mapIndexed*, *R.filterIndexed* and *R.forEachIndexed*(introduced in version `6.1.0`).

- Breaking change - `R.all`/`R.none`/`R.any`/`R.find`/`R.findLast`/`R.findIndex`/`R.findLastIndex` doesn't pass index as second argument to the predicate.

- Add `R.applyDiff` method

- Change `R.assocPath` typings so the user can explicitly sets type of the new object

- Typings of `R.assoc` match its `@types/ramda` counterpart.

- Simplify `R.forEach` typings

- Remove `ReadonlyArray<T>` pattern from Typescript definitions - not enough value for the noise  it adds.

- Fix typing of `R.reject` as it wrongly declares that with object, it pass property to predicate.

5.1.0

- Add `R.takeUntil` method

- Fix wrong `R.takeWhile`

5.0.0

- Deprecate `R.change` method - it does too much; partially replaced with `R.updateObject`.

- Deprecate `R.compact` method - vague use case; `R.filter` does the same job.

- `R.produce` always returns a promise

- Add `R.updateObject` method

- Add `R.takeWhile` method

- Add `R.viewOr` method

- Add `R.pipeAsync` method

- Add `R.removeIndex` method

- Add `R.excludes` method

- `R.includes` throws on wrong input, i.e. `R.includes(1, null)`

- Close [Issue #524](https://github.com/selfrefactor/rambda/issues/524) - `R.assocPath` wrong logic when number is used in array path input.

- `R.mapToObjectAsync` supports currying

- `R.mapAsyncLimit` supports currying

- Fix `R.mapAsync` to pass property to iterator, when input is an object.

- Fix currying for several async methods - `R.tapAsync`, `R.produce`, `R.filterAsync` *(extend typings)

4.2.0

- Add `R.move` method

- Add `R.union` method

- Add `R.lensSatisfies` method

- Add `R.mapKeys` method

- Add `R.sortByPath` method

- Add `R.sortByProps` method

- Close [Issue #519](https://github.com/selfrefactor/rambda/issues/519) -
`ts-toolbelt` needs other type of export with `--isolatedModules` flag

4.1.0

- `R.template` is renamed to `R.interpolate`

- `R.equals` now supports negative zero just like `Ramda.equals`

- Add `R.replaceAll` method

- Add `R.lensEq` method

4.0.1

Forgot to export `R.of` because of wrong marker in `files/index.d.ts`

4.0.0

Deprecate the following methods:

- `R.promiseAllObject` - because `R.produce` serves the same purpose
- `R.composed` - because `R.piped` makes more sense, when we want to pass the input at the start of the function
- `R.defaultToStrict` - confusing logic
- `R.findInObject` - overestimated importance
- `R.headObject` - overestimated importance
- `R.includesType` - overestimated importance
- `R.inject` - confusing logic
- `R.isAttach` - confusing logic
- `R.mergeRight` - overestimated importance
- `R.opposite` - overestimated importance
- `R.otherwise` - overestimated importance
- `R.pushUniq` - overestimated importance
- `R.resolve` - overestimated importance
- `R.s` - overestimated importance
- `R.toggle` - overestimated importance
- `R.uuid` - not suitable
- `R.whenAsync` - overestimated importance

Move the following methods to `Rambda` and change their logic to match `Ramda` implementation:

- `R.hasPath`
- `R.unless`
- `R.pathEq`
- `R.tryCatch`
- `R.where`
- `R.whereEq`

Also these changes:

- `R.flatMap` - renamed to `R.chain` and moved to `Rambda`

- `R.ifElseAsync` - accept any number of arguments for the returned function

- `R.produce`, `R.filterAsync`, `R.debounce`, `R.throttle` - fix typings

- `R.mapAsyncLimit` - drop support for curring and therefore for usage with `R.composeAsync`

- Improve `R.ok` throwed error message

- `R.ok` returns `undefined` instead of `true` when validation passes.

- `R.mergeDeep` is renamed to `R.mergeDeepLeft`

- Add `R.pipeAsync`

- Take `R.partialCurry` from `Rambda` as it is deprecated there

3.7.0

> Sync with Rambda

Add `R.lens`

Add `R.lensIndex`

Add `R.lensPath`

Add `R.lensProp`

Add `R.over`

Add `R.set`

Add `R.view`

Add `R.paths`

Add `R.xor`

Add `R.cond`

3.6.0

- Add `R.mapAsyncLimit`

- Add `R.toggle`, match Ramda upcoming method specification

- Add `R.isValidAsync`

- Extend `R.template` without introducing breaking change

3.5.0 Sync with `Rambda` - add methods descriptions to Typescript definitions

3.4.0 Sync with `Rambda` and close [Issue #42](https://github.com/selfrefactor/rambdax/pull/42)

3.3.0 Fix `R.sortObject` typing

3.3.0 Add `R.filterAsync` and `R.sortObject` methods

3.2.0 `R.uuid` accept second argument in order to return string only uuid

3.1.0 Dynamic set of exports lead to adding previously ommited Rambda exports such as `R.identical`

3.0.3 Sync with Rambda - new functionality of `R.isEmpty`

3.0.2 Add typings for `R.mapToObject`

3.0.1 Fix typings

3.0.0 Breaking change as `Rambda` also has breaking changes

Read more about it in `Rambda` changelog

Also with this versions, typings tests are provided and several definitions are changed.

- R.anyTrue, R.anyFalse, R.allTrue, R.allFalse use internal `isTruthy` and `isFalsy` methods. Empty array and object with zero length are considered falsy.

- Deprecate `R.contains`

- Deprecate `R.defaultToWhen`

- Moved `R.runTests` to `helpers` repo

2.17.0 Change in `R.runTests` logic. It will be removed from Rambdax to `helpers` repo.

2.16.0 Restore `R.runTests` but without documentation

- export `getEvaluations`, `getPositiveEvaluation`, `getNegativeEvaluation` in the context of `R.runTests`

2.15.0 Several changes

- Typescript definitions have been updated and typings tests are introduced

- `R.mapAsync` and `R.mapFastAsync` pass index as second argument


2.14.1 Restore `R.contains`

2.14.0 Several changes:

- `R.inject` accept before flag as fourth argument

- Remove `R.includesAny`

- Improve typing of `R.partition`

- `R.nextIndex` and `R.prevIndex` work also with number as second argument

2.13.1 Deprecate `R.log` and `R.runTests`

2.12.3 Add 'dist' directory to `files`

2.12.2 Add `R.mapToObject` typings

2.12.0 Sync with Rambda

2.11.1 Fix `R.waitFor`

2.11.0 Add `R.toDecimal`

2.10.2 Fix [issue 32](https://github.com/selfrefactor/rambdax/issues/32)

2.10.0 deprecate `R._`

2.9.1 R.fromPairs/toPairs typing

2.9.0 npm doesn't update version on their site

2.8.2 R.map typing

2.8.0 Sync with Rambda | no need for create types script

2.7.0 Add `R.prevIndex`

2.6.2 Sync with Rambda

2.6.0 `R.log` depends on `RAMBDAX_LOG`

2.5.0 Rambda's `partial`

2.4.0 Add `R.uuid`

2.3.0 `R._` parse to constant case

> This introduce breaking change for ie11 as noted in [issue 31](https://github.com/selfrefactor/rambdax/issues/31) which is fixed with `2.10.0` which deprecates this method

2.2.1 Add `R.log`, `R.logInit` and `R.logHolder`

2.1.0 Add `R._`

2.0.0 Add `R.toggle`

1.9.0 Add `R.pushUniq`

1.8.2 No need for sourcemaps

1.8.1 Fix building with `regeneratorRuntime`

1.8.0 Upgrade to new major Rollup release

- Restore `R.headObject`

- Add `R.hasPath` method

1.7.2 `R.memoize` contains dev console.logs

1.7.1 Forgot to build types

1.7.0 Rename `R.then` to `R.resolve` because of Ramda issue with `R.then`(they rename it to `R.andThen`)

- Add `R.isFalsy`, `R.nextIndex` and `R.mergeDeep`

1.6.3 Forgot to export `R.unless`(credit to @mobily for the PR)

1.6.0 Restore `R.compact` method

1.5.6 `R.maybe` accepts also anonymous functions as second and third argument

1.5.5 Add `R.maybe` method

- Fix errors caugth by `DeepScan` service
- Fix Typescript definitions for `R.then` and `R.otherwise`
- `R.change` increase nesting level to 4

1.4.1 `R.isValid` didn't work with `Number` prototype

1.4.0 Add multiple methods

- Add `R.defaultToStrict`
- Add `R.defaultToWhen`
- Add `R.whereEq`
- Add `R.partition`
- Add `R.negate` is renamed to `R.opposite`
- Add `R.then`
- Add `R.otherwise`
- `R.isValid` accepts prototypes as rules, i.e. `schema = {a: String}`
- The prevoious point leads to the same change applied to the methods depending on `R.isValid`, i.e. `R.ok`, `R.pass` and `R.isAttach`

  1.3.0 Add `R.unless`

- `R.when` accepts both function and value for `whenTrue` argument. The same is valid for `R.unless`

- export `R.negate` which is the same as `R.complement`

  1.2.0 Export `src` folder

  1.1.0 Restore `promiseAllObject` and `flatMap`

  1.0.1 Fix typings

  1.0.0 Deprecate the following methods:

- compact
- evolve
- flatMap
- greater
- intersection
- less
- omitBy
- pickBy
- promiseAllObject
- promiseAllSecure
- rangeBy

> Also pass deprecation of `addIndex` from `Rambda@2.0.0`

0.24.0 add `R.pipedAsync`, replace `R.multiline` with `R.glue`, remove `R.validate`

0.23.0 Add `R.count`

0.22.0 Add `R.includesAny`

0.21.0 Add `R.includesType`

0.20.1 `R.pass` and `R.ok` work with single schema.

0.20.0 Add `R.pathEq`

0.19.0 Add `R.wait`, expose already complete `R.waitFor`

0.18.0 Add`R.anyType` and `R.allType`

0.17.0 Rename `R.is` to `R.pass` and restore `R.is` original functionality.

0.16.0 getter, setter, reset methods

0.15.3 No more `prepublish` script

0.15.2 curry in `remove`

> Last version with `lib` folder exposed

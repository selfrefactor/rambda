# Rambda

`Rambda` is faster and smaller alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambda/status.svg)](https://david-dm.org/selfrefactor/rambda)
![Normal size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js)
![Gzip size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js?compression=gzip)

## Example use

```javascript
import { compose, map, filter } from 'rambda'

const result = compose(
  map(x => x * 2),
  filter(x => x > 2)
)([1, 2, 3, 4])
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Install](#install)
* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#changelog)

## Rambda's advantages

- Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda**

- Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#benchmarks) can prove that.

- dot notation for `R.path` and `R.paths`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

- comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })

// No space allowed between properties
```

- Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.


- More generic methods

`Ramda` has an overwhelming list of methods, as one could get lost putting all these methods in one's head. `Rambda` has smaller method counts and that could be seen as advantage.

<details>
<summary>
  Click to see the full list of Ramda methods not implemented in Rambda 
</summary>

- __
- addIndex
- ap
- aperture
- apply
- applyTo
- ascend
- binary
- bind
- call
- chain
- comparator
- composeK
- composeP
- composeWith
- construct
- constructN
- contains
- converge
- countBy
- curryN
- descend
- differenceWith
- dissocPath
- dropLastWhile
- dropRepeats
- dropRepeatsWith
- dropWhile
- empty
- eqBy
- eqProps
- evolve
- findLast
- findLastIndex
- forEachObjIndexed
- gt
- gte
- hasIn
- hasPath
- innerJoin
- insert
- insertAll
- into
- invert
- invertObj
- invoker
- juxt
- keysIn
- lift
- liftN
- lt
- lte
- mapAccum
- mapAccumRight
- mapObjIndexed
- memoizeWith
- mergeAll
- mergeDeepLeft
- mergeDeepRight
- mergeDeepWith
- mergeDeepWithKey
- mergeLeft
- mergeRight
- mergeWith
- mergeWithKey
- move
- nAry
- nthArg
- o
- objOf
- of
- once
- or
- otherwise
- pair
- partialRight
- partition
- pathEq
- pathSatisfies
- pickBy
- pipeK
- pipeP
- pipeWith
- project
- propSatisfies
- props
- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- sortWith
- splitAt
- splitWhen
- symmetricDifferenceWith
- takeLastWhile
- takeWhile
- andThen
- toPairsIn
- transduce
- traverse
- tryCatch
- unapply
- unary
- uncurryN
- unfold
- union
- unionWith
- uniqBy
- unless
- unnest
- until
- useWith
- valuesIn
- when
- where
- whereEq
- xprod
- zipWith
- thunkify
- default

</details>
  
## Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or following CDN link:

```
https://unpkg.com/rambda@CURRENT_VERSION/dist/rambda.umd.js
```

## Differences between Rambda and Ramda

- Rambda's **type** detect async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handle `NaN` input, in which case it returns `"NaN"`.

- Rambda's **path** and **paths** accepts dot notation(`'x.y' same as ['x','y']`)

- Rambda's **pick** and **omit** accept comma notation(`'x,y' same as ['x','y']`)

- Rambda's **map**, **reject** and **forEach** can iterate over objects not only arrays.

- Rambda's **map** and **filter** pass array index as second argument when mapping over arrays.

- Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

- Rambda's **adjust**, **all**, **allPass**, **any**, **anyPass**, **findIndex** , **findLastIndex** and **reject** are passing index as second argument to the predicate function.

- Rambda's **startsWith/endsWith** work only with strings, instead with array and strings.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does.

- Rambda's **flip** works only for functions expecting two arguments.

- Rambda's **partial** doesn't need the input arguments to be wrapped as array.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **includes** will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

- Ramda's **clamp** work for letters, while Rambda's method work only for numbers.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

## Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 96.71% slower | 96.74% slower | 🚀 Fastest
 *adjust* | 🚀 Fastest | 4.57% slower | 🔳
 *all* | 🚀 Fastest | 95.2% slower | 🔳
 *allPass* | 🚀 Fastest | 99.24% slower | 🔳
 *any* | 🚀 Fastest | 98.77% slower | 16.04% slower
 *anyPass* | 🚀 Fastest | 99.06% slower | 🔳
 *append* | 🚀 Fastest | 82.5% slower | 🔳
 *applySpec* | 🚀 Fastest | 67.65% slower | 🔳
 *assoc* | 91.68% slower | 67.07% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 83.23% slower | 57.63% slower
 *compose* | 🚀 Fastest | 95.55% slower | 76.43% slower
 *converge* | 52.86% slower | 🚀 Fastest | 🔳
 *curry* | 🚀 Fastest | 54.29% slower | 🔳
 *curryN* | 53.6% slower | 🚀 Fastest | 🔳
 *defaultTo* | 🚀 Fastest | 73.18% slower | 🔳
 *drop* | 🚀 Fastest | 97.91% slower | 🔳
 *dropLast* | 🚀 Fastest | 97.64% slower | 🔳
 *equals* | 79.8% slower | 82.41% slower | 🚀 Fastest
 *filter* | 85.25% slower | 93.45% slower | 🚀 Fastest
 *find* | 🚀 Fastest | 92.33% slower | 39.13% slower
 *findIndex* | 🚀 Fastest | 98.67% slower | 82.94% slower
 *flatten* | 96.51% slower | 95.67% slower | 🚀 Fastest
 *ifElse* | 🚀 Fastest | 66.96% slower | 🔳
 *includes* | 🚀 Fastest | 73.35% slower | 🔳
 *indexOf* | 🚀 Fastest | 86.49% slower | 0.52% slower
 *init* | 94.77% slower | 97.85% slower | 🚀 Fastest
 *is* | 🚀 Fastest | 11.92% slower | 🔳
 *isEmpty* | 65.35% slower | 94.04% slower | 🚀 Fastest
 *last* | 🚀 Fastest | 99.76% slower | 2.57% slower
 *lastIndexOf* | 🚀 Fastest | 48.6% slower | 🔳
 *map* | 50.45% slower | 75.05% slower | 🚀 Fastest
 *match* | 🚀 Fastest | 47.13% slower | 🔳
 *merge* | 62.61% slower | 🚀 Fastest | 46.89% slower
 *none* | 🚀 Fastest | 89.88% slower | 🔳
 *omit* | 🚀 Fastest | 73.66% slower | 98.13% slower
 *over* | 🚀 Fastest | 46.97% slower | 🔳
 *path* | 5.49% slower | 78.37% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 24.75% slower | 88.3% slower
 *prop* | 🚀 Fastest | 89.61% slower | 🔳
 *propEq* | 🚀 Fastest | 93.1% slower | 🔳
 *range* | 95.75% slower | 92.61% slower | 🚀 Fastest
 *reduce* | 70.51% slower | 82.97% slower | 🚀 Fastest
 *repeat* | 82.83% slower | 94.99% slower | 🚀 Fastest
 *replace* | 🚀 Fastest | 31.81% slower | 1.04% slower
 *set* | 🚀 Fastest | 33.95% slower | 🔳
 *sort* | 🚀 Fastest | 56.02% slower | 🔳
 *sortBy* | 🚀 Fastest | 55.12% slower | 86.04% slower
 *split* | 🚀 Fastest | 85.43% slower | 29.34% slower
 *splitEvery* | 🚀 Fastest | 90.33% slower | 🔳
 *take* | 92.07% slower | 97.97% slower | 🚀 Fastest
 *takeLast* | 92.69% slower | 98.86% slower | 🚀 Fastest
 *test* | 🚀 Fastest | 95.29% slower | 🔳
 *type* | 35.33% slower | 🚀 Fastest | 🔳
 *uniq* | 99.13% slower | 96.24% slower | 🚀 Fastest
 *update* | 🚀 Fastest | 85.13% slower | 🔳
 *view* | 🚀 Fastest | 72.31% slower | 🔳

</details>

## Used by

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk)

- [VSCode Slack intergration](https://github.com/verydanny/vcslack)

- [Webpack PostCSS](https://github.com/sectsect/webpack-postcss)

- [MobX-State-Tree decorators](https://github.com/farwayer/mst-decorators)

- [Mobx decorators](https://github.com/farwayer/mobx-decorators)


## API

### add




`add(a: number, b: number): number`


It adds `a` and `b`.



### adjust




`adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[]`


It replaces `index` in array `list` with the result of `replaceFn(list[i])`.



### all




`all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean`


It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.



### allPass




`allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean`


It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.



### always




`always<T>(x: T): () => T`


It returns function that always returns `x`.



### and




`and<T extends { and?: ((...a: readonly any[]) => any)`


Returns `true` if both arguments are `true`. Otherwise, it returns `false`.



### any




`any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean`


It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.



### anyPass




`anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>`


It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.



### append




`append<T>(x: T, listOrString: ReadonlyArray<T>): T[]`


It adds element `x` at the end of `listOrString`.



### applySpec




`applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
    ...args: Parameters<ValueOfRecord<Spec>>
  ) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }`


It returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.



### assoc




`assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U`


It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.



### assocPath




`assocPath<T, U>(path: Path, newValue: T, obj: U): U`


It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.



### both




`both(pred1: Pred, pred2: Pred): Pred`


It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.



### clamp




`clamp(min: number, max: number, input: number): number`


Restrict a number `input` to be withing `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.



### clone




`clone<T>(input: T): T`



### complement




`complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean`


It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.



### compose




`compose<T1>(fn0: () => T1): () => T1`


It performs right-to-left function composition.



### concat




`concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]`


It returns a new string or array, which is the result of merging `x` and `y`.



### cond




`cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any`


It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.



### curry




`curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>`


It expects a function as input and returns its curried version.



### dec




`dec(x: number): number`


It decrements a number.



### defaultTo




`defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T`


It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).



### difference




`difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[]`


It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.



### dissoc




`dissoc<T>(prop: string, obj: any): T`


It returns a new object that does not contain property `prop`.



### divide




`divide(a: number, b: number): number`



### drop




`drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]`


It returns `listOrString` with `howManyToDrop` items dropped from its beginning.



### dropLast




`dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]`


It returns `listOrString` with `howManyToDrop` items dropped from its end.



### either




`either(firstPredicate: Pred, secondPredicate: Pred): Pred`



### endsWith




`endsWith(target: string, str: string): boolean`


Curried version of `String.prototype.endsWith`



### equals




`equals<T>(a: T, b: T): boolean`


It deeply compares `a` and `b` and returns `true` if they are equal.



### F




`F(): boolean`



### filter




`filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]`


It filters list or object `input` with `predicate`.



### find




`find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined`


It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.



### findIndex




`findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number`


It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.



### flatten




`flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[]`


It deeply flattens an array.



### flip




`flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult`


It returns function which calls `fn` with exchanged first and second argument.



### forEach




`forEach<T>(fn: (x: T) => void, list: T[]): T[]`


It applies `iterable` function over all members of `list` and returns `list`.



### fromPairs




`fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V }`


It transforms a `listOfPairs` to an object.



### groupBy




`groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }`


It splits `list` according to a provided `groupFn` function and returns an object.



### groupWith




`groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]`


It returns separated version of `list`, where separation is done with equality `compareFn` function.



### has




`has<T>(prop: string, obj: T): boolean`


It returns `true` if `obj` has property `prop`.



### head




`head<T>(listOrString: T[]): T | undefined`



### identical




`identical<T>(a: T, b: T): boolean`


It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.



### identity




`identity<T>(input: T): T`


It just passes back the supplied `input` argument.



### ifElse




`ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn`


It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.



### inc




`inc(x: number): number`


It increments a number.



### includes




`includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean`



### indexBy




`indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T }`


It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.



### indexOf




`indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number`


It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.



### init




`init<T>(listOrString: ReadonlyArray<T>): T[]`


It returns all but the last element of `listOrString`.



### intersection




`intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[]`


It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.



### intersperse




`intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]`


It adds a `separator` between members of `list`.



### is




`is(targetPrototype: any, x: any): boolean`


It returns `true` is `x` is instance of `targetPrototype`.



### isEmpty




`isEmpty<T>(x: T): boolean`


It returns `true` is `x` is `empty`.



### isNil




`isNil(x: any): x is null | undefined`


It returns `true` is `x` is either `null` or `undefined`.



### join




`join(x: string, xs: ReadonlyArray<any>): string`


It returns a string representing `list` instances joined with `glue`.



### keys




`keys<T extends object>(x: T): (keyof T)[]`


It applies `Object.keys` over `x` and returns its keys.



### last




`last<T>(listOrString: T[]): T | undefined`


It returns the last element of `listOrString`.



### lastIndexOf




`lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number`


It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.



### length




`length<T>(listOrString: ReadonlyArray<T>): number`


It returns the `length` property of `listOrString`.



### lens




`lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens`


It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.



### lensIndex




`lensIndex(index: number): Lens`


It returns a lens that focuses on specified `index`.



### lensPath




`lensPath(path: RamdaPath): Lens`


It returns a lens that focuses on specified `path`.



### lensProp




`lensProp(prop: string): {
  <T, U>(obj: T): U`


It returns a lens that focuses on specified property `prop`.



### map




`map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>`


It returns the result of looping through `list` with `fn`.

It works with both array and object.



### match




`match(regExpression: RegExp, str: string): any[]`


Curried version of `String.prototype.match` which returns empty array, when there is no match.



### max




`max<T extends Ord>(x: T, y: T): T`


It returns the greater value between `x` and `y`.



### maxBy




`maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T`


It returns the greater value between `x` and `y` according to `compareFn` function.



### mean




`mean(list: ReadonlyArray<number>): number`


It returns the mean value of `list` input.



### median




`median(list: ReadonlyArray<number>): number`


It returns the median value of `list` input.



### merge




`merge<T1, T2>(target: T1, newProps: T2): Merge<T2, T1>`


It creates a copy of `target` object with overidden `newProps` properties.



### min




`min<T extends Ord>(x: T, y: T): T`


It returns the lesser value between `x` and `y`.



### minBy




`minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T`


It returns the lesser value between `x` and `y` according to `compareFn` function.



### modulo




`modulo(x: number, y: number): number`


Curried version of `x%y`.



### multiply




`multiply(x: number, y: number): number`


Curried version of `x*y`.



### negate




`negate(x: number): number`



### none




`none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean`


It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.



### not




`not(input: any): boolean`


It returns a boolean negated version of `input`.



### nth




`nth<T>(index: number, list: ReadonlyArray<T>): T | undefined`


Curried version of `list[index]`.



### omit




`omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>`


It returns a partial copy of an `obj` without `propsToOmit` properties.



### over




`over<T>(lens: Lens, fn: Arity1Fn, value: T): T`


It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.



### partial




`partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T`


It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.



### path




`path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined`


If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.



### pathOr




`pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T`


It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.



### paths




`paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[]`


It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.

Because it calls `R.path`, then `singlePath` can be either string or a list.



### pick




`pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>`


It returns a partial copy of an `obj`  containing only `propsToPick` properties.



### pickAll




`pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U`


Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.



### pipe




`pipe<T1>(fn0: () => T1): () => T1`


It performs left-to-right function composition.



### pluck




`pluck<T>(property: number, list: ReadonlyArray<T>): T`


It returns list of the values of `property` taken from the all objects inside `list`.



### prepend




`prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[]`


It adds element `x` at the beginning of `listOrString`.



### product




`product(list: ReadonlyArray<number>): number`



### prop




`prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]`



### propEq




`propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean`


It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.



### propIs




`propIs<P extends keyof T, T>(target: any, property: P, obj: T): boolean`


It returns `true` if `property` of `obj` is from `target` type.



### propOr




`propOr<T, U, V>(defaultValue: T, property: string, obj: U): V`


It returns either `defaultValue` or the value of `property` in `obj`.



### range




`range(start: number, end: number): number[]`


It returns list of numbers between `start`(inclusive) to `end`(exclusive) numbers.



### reduce




`reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult`



### reject




`reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]`


It has the opposite effect of `R.filter`.

It will return those members of `list` that return `false` when applied to `predicate` function.



### repeat




`repeat<T>(x: T, timesToRepeat: number): T[]`


It returns a list of `x` input repeated `timesToRepeat` input.



### replace




`replace(strOrRegex: RegExp | string, replacer: string, str: string): string`


It replaces `strOrRegex` found in `str` with `replacer`.



### reverse




`reverse<T>(listOrString: ReadonlyArray<T>): T[]`



### set




`set<T, U>(lens: Lens, replacer: U, obj: T): T`


It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.



### slice




`slice(from: number, to: number, list: string): string`


It returns `listOrString` between `from` and `to` indexes.



### sort




`sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[]`


It returns copy of `list` sorted by `sortFn` function.



### sortBy




`sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[]`


It returns copy of `list` sorted by `sortFn` function.



### split




`split(separator: string | RegExp): (str: string) => string[]`


Curried version of `String.prototype.split`



### splitEvery




`splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][]`



### startsWith




`startsWith(target: string, str: string): boolean`


Curried version of `String.prototype.startsWith`



### subtract




`subtract(x: number, y: number): number`



### sum




`sum(list: ReadonlyArray<number>): number`



### symmetricDifference




`symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]`


It returns a merged list of `x` and `y` with all equal elements removed.



### T




`T(): boolean`



### tail




`tail<T>(listOrString: ReadonlyArray<T>): T[]`


It returns all but the first element of `listOrString`.



### take




`take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]`


It returns the first `howMany` elements of `listOrString`.



### takeLast




`takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]`


It returns the last `howMany` elements of `listOrString`.



### tap




`tap<T>(fn: (a: T) => any, x: T): T`


It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.



### test




`test(regExpression: RegExp): (str: string) => boolean`


It determines whether `str` matches `regExpression`.



### times




`times<T>(fn: (i: number) => T, howMany: number): T[]`


It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).



### toLower




`toLower(str: string): string`



### toPairs




`toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]`


It transforms an object to a list.



### toString




`toString<T>(x: T): string`



### toUpper




`toUpper(str: string): string`



### transpose




`transpose<T>(list: T[][]): T[][]`



### trim




`trim(str: string): string`



### type




`type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"`



### uniq




`uniq<T>(list: ReadonlyArray<T>): T[]`


It returns a new array containing only one copy of each element of `list`.



### uniqWith




`uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[]`


It returns a new array containing only one copy of each element in `list` according to boolean returning function `uniqFn`.



### update




`update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[]`


It returns a copy of `list` with updated element at `index` with `newValue`.



### values




`values<T extends object, K extends keyof T>(obj: T): T[K][]`


With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.



### view




`view<T, U>(lens: Lens): (target: T) => U`


It returns the value of `lens` focus over `target` object.



### without




`without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[]`



### xor




`xor(x: boolean, y: boolean): boolean`



### zip




`zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[]`


It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.



### zipObj




`zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T }`




## CHANGELOG

- 5.1.1

Release new documentation site

- 5.1.0

Add `R.converge` and `R.curryN` from [PR #412](https://github.com/selfrefactor/rambda/pull/412)

> Close [Issue #410](https://github.com/selfrefactor/rambda/issues/410) - wrong implementation of `R.groupWith`

> Close [Issue #411](https://github.com/selfrefactor/rambda/issues/411) - change the order of declared `R.map` typings rules

- 5.0.0

Move `R.partialCurry` to Rambdax(reason for major bump).

Use new type of export in Typescript definitions.

Approve [PR #381](https://github.com/selfrefactor/rambda/pull/381) - add `R.applySpec`

- 4.6.0

Approve [PR #375](https://github.com/selfrefactor/rambda/pull/375) - add lenses(Thank you [@synthet1c](https://github.com/synthet1c))

Add `R.lens`

Add `R.lensIndex`

Add `R.lensPath`

Add `R.lensProp`

Add `R.over`

Add `R.set`

Add `R.view`

> Sync with Ramda 0.27

Add `R.paths`

Add `R.xor`

> Close [Issue #373](https://github.com/selfrefactor/rambda/issues/373)

Add `R.cond`

- 4.5.0 Add `R.clamp`

- 4.4.2 Improve `R.propOr` typings

- 4.4.1 Make `R.reject` has the same typing as `R.filter`

- 4.4.0 Several changes:

Close [Issue #317](https://github.com/selfrefactor/rambda/issues/317) - add `R.transpose`

Close [Issue #325](https://github.com/selfrefactor/rambda/issues/325) - `R.filter` should return equal values for bad inputs `null` and `undefined`

Approve suggestion for `R.indexBy` to accept string not only function as first argument.

Edit of `R.path` typings

- 4.2.0 Approve [PR #314](https://github.com/selfrefactor/rambda/pull/314) - add `R.and`

- 4.1.1 Add missing typings for `R.slice`

- 4.1.0 Add `R.findLast` and `R.findLastIndex`

- 4.0.2 Fix `R.isEmpty` wrong behaviour compared to the Ramda method

- 4.0.1 Approve [PR #289](https://github.com/selfrefactor/rambda/pull/289) - remove console.log in `R.values` method

- 4.0.0 Multiple breaking changes as Rambda methods are changed in order to increase the similarity between with Ramda

Add to `Differences`:

```text
R.type can return 'NaN'

R.compose doesn't pass `this` context

R.clone doesn't work with number, booleans and strings as input
```

All breaking changes:

-- R.add works only with numbers

-- Fix R.adjust which had wrong order of arguments

-- R.adjust works when index is out of bounds

-- R.complement support function with multiple arguments

-- R.compose/pipe throws when called with no argument

-- R.clone works with `Date` value as input

-- R.drop/dropLast/take/takeLast always return new copy of the list/string

-- R.take/takeLast return original list/string with negative index

-- R.equals handles `NaN` and `RegExp` types

-- R.type/R.equals supports `new Boolean/new Number/new Date/new String` expressions

-- R.has works with non-object

-- R.ifElse pass all arguments

-- R.length works with bad input

-- R.propEq work with bad input for object argument

-- R.range work with bad inputs

-- R.times work with bad inputs

-- R.reverse works with strings

-- R.splitEvery throws on non-positive integer index

-- R.test throws just like Ramda when first argument is not regex

-- R.values works with bad inputs

-- R.zipObj ignores extra keys

- 3.3.0

This is pre `4.0.0` release and it contains all of the above changes

Close [issue #287](https://github.com/selfrefactor/rambda/issues/287) - `ts-toolbelt` directory was changed but not reflected in `files` property in `package.json`

- 3.2.5

Close [issue #273](https://github.com/selfrefactor/rambda/issues/273) - ts-toolbelt needs other type of export when `isolatedModules` TypeScript property

Close [issue #245](https://github.com/selfrefactor/rambda/issues/245) - complete typings tests for methods that have more specific Typescript definitions

- 3.2.1 Fast fix for [issue #273](https://github.com/selfrefactor/rambda/issues/273) - messed up typings

- 3.2.0 There are several changes:

Close [issue #263](https://github.com/selfrefactor/rambda/issues/263) - broken curry typing solved by `ts-toolbelt` local dependency.

Add `R.partialCurry` typings.

Approve [PR #266](https://github.com/selfrefactor/rambda/pull/266) that adds `R.slice` method.

- 3.1.0 This might be breaking change for Typescript users, as very different definitions are introduced. With the previous state of the definitions, it was not possible to pass `dtslint` typings tests.

- `R.either` and `R.both` supports multiple arguments as they should.

- Several methods added by  [@squidfunk](https://github.com/squidfunk) - `R.assocPath`, `R.symmetricDifference`, `R.intersperse`, `R.intersection` and `R.difference`

- 3.0.1 Close [issue #234](https://github.com/selfrefactor/rambda/issues/234) - wrong curry typing

- 3.0.0 Deprecate `R.contains`, while `R.includes` is now following Ramda API(it uses `R.equals` for comparision)

- 2.14.5 `R.without` needs currying

- 2.14.4 Close [issue #227](https://github.com/selfrefactor/rambda/issues/227) - add index as third argument of `R.reduce` typings

- 2.14.2 Use `R.curry` with `R.reduce` as manual curry there didn't work as expected.

- 2.14.1 Fix wrong typescript with `R.head` - [PR #228](https://github.com/selfrefactor/rambda/pull/228) pushed by [@tonivj5](https://github.com/tonivj5)

- 2.14.0 Add `R.groupWith` by @selfrefactor | Add `R.propOr`, `R.mathMod`, `R.mean`, `R.median`, `R.negate`, `R.product` by [@ku8ar](https://github.com/ku8ar)

- 2.13.0 Add `R.identical` - [PR #217](https://github.com/selfrefactor/rambda/pull/217) pushed by [@ku8ar](https://github.com/ku8ar)

- 2.12.0 Add `R.propIs` - [PR #213](https://github.com/selfrefactor/rambda/pull/213) and add `R.sum` - [issue #207](https://github.com/selfrefactor/rambda/issues/207)

- 2.11.2 Close Rambdax [issue #32](https://github.com/selfrefactor/rambdax/issues/32) - wrong `R.type` when function is input

- 2.11.1 Approve [PR #182](https://github.com/selfrefactor/rambda/pull/182) - Changed typings to allow object as input to `R.forEach` and `R.map`

- 2.11.0 Approve [PR #179](https://github.com/selfrefactor/rambda/pull/179) - `R.adjust` handles negative index; `R.all` doesn't need `R.filter`

- 2.10.2 Close [issue #175](https://github.com/selfrefactor/rambda/issues/175) - missing typescript file

- 2.10.0 Approve huge and important [PR #171](https://github.com/selfrefactor/rambda/pull/171) submitted by [@helmuthdu](https://github.com/helmuthdu) - Add comments to each method, improve Typescript support

- 2.9.0 `R.toPairs` and `R.fromPairs`

- 2.8.0 Approve [PR #165](https://github.com/selfrefactor/rambda/pull/165) `R.clone`

- 2.7.1 expose `src` | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.7.0 Approve [PR #161](https://github.com/selfrefactor/rambda/pull/161) `R.isEmpty`

- 2.6.0 `R.map`, `R.filter` and `R.forEach` pass original object to iterator as third argument | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.5.0 Close [issue #149](https://github.com/selfrefactor/rambda/issues/149) Add `R.partial` | `R.type` handles `NaN`

- 2.4.0 Major bump of `Rollup`; Stop building for ES5

- 2.3.1 Close [issue #90](https://github.com/selfrefactor/rambda/issues/90) | Add string type of path in `R.pathOr`

- 2.3.0 Close [issue #89](https://github.com/selfrefactor/rambda/issues/89) | Fix missing `Number` TS definition in `R.type`

- 2.2.0 `R.defaultTo` accepts indefinite number of input arguments. So the following is valid expression: `const x = defaultTo('foo',null, null, 'bar')`

- 2.1.0 Restore `R.zip` using [WatermelonDB](https://github.com/Nozbe/WatermelonDB/) implementation.

- 2.0.0 Major version caused by removing of `R.zip` and `R.addIndex`. [Issue #85](https://github.com/selfrefactor/rambda/issues/85) rightfully finds that the implementation of `R.addIndex` is not correct. This led to removing this method and also of `R.zip` as it had depended on it. The second change is that `R.map`, `R.filter` are passing array index as second argument when looping over arrays. The third change is that `R.includes` will return `false` if input is neigher `string` nor `array`. The previous behaviour was to throw an error. The last change is to increase the number of methods that are passing index as second argument to the predicate function.

- 1.2.6 Use `src` folder instead of `modules`
- 1.2.5 Fix `omit` typing
- 1.2.4 Add missing Typescript definitions - [PR#82](https://github.com/selfrefactor/rambda/pull/82)
- 1.2.2 Change curry method used across most of library methods
- 1.2.1 Add `R.assoc` | fix passing `undefined` to `R.map` and `R.merge` [issue #77](https://github.com/selfrefactor/rambda/issues/77)
- 1.2.0 Add `R.min`, `R.minBy`, `R.max`, `R.maxBy`, `R.nth` and `R.keys`
- 1.1.5 Close [issue #74](https://github.com/selfrefactor/rambda/issues/74) `R.zipObj`
- 1.1.4 Close [issue #71](https://github.com/selfrefactor/rambda/issues/71) CRA fail to build `rambda`
- 1.1.3 Approve [PR #70](https://github.com/selfrefactor/rambda/pull/67) implement `R.groupBy` | Close [issue #69](https://github.com/selfrefactor/rambda/issues/69)
- 1.1.2 Approve [PR #67](https://github.com/selfrefactor/rambda/pull/67) use `babel-plugin-annotate-pure-calls`
- 1.1.1 Approve [PR #66](https://github.com/selfrefactor/rambda/pull/66) `R.zip`
- 1.1.0 `R.compose` accepts more than one input argument [issue #65](https://github.com/selfrefactor/rambda/issues/65)
- 1.0.13 Approve [PR #64](https://github.com/selfrefactor/rambda/pull/64) `R.indexOf`
- 1.0.12 Close [issue #61](https://github.com/selfrefactor/rambda/issues/61) make all functions modules
- 1.0.11 Close [issue #60](https://github.com/selfrefactor/rambda/issues/60) problem with babelrc
- 1.0.10 Close [issue #59](https://github.com/selfrefactor/rambda/issues/59) add R.dissoc
- 1.0.9 Close [issue #58](https://github.com/selfrefactor/rambda/issues/58) - Incorrect `R.equals`
- 1.0.8 `R.map` and `R.filter` pass object properties when mapping over objects
- 1.0.7 Add `R.uniqWith`
- 1.0.6 Close [issue #52](https://github.com/selfrefactor/rambda/issues/52) - ES5 compatible code
- 1.0.5 Close [issue #51](https://github.com/selfrefactor/rambda/issues/51)
- 1.0.4 Close [issue #50](https://github.com/selfrefactor/rambda/issues/50) - add `R.pipe` typings
- 1.0.3 `R.ifElse` accept also boolean as condition argument
- 1.0.2 Remove `typedDefaultTo` and `typedPathOr` | Add `R.pickAll` and `R.none`
- 1.0.0 Major change as build is now ES6 not ES5 compatible (Related to [issue #46](https://github.com/selfrefactor/rambda/issues/46))| Making `Rambda` fully tree-shakeable| Edit Typescript definition
- 0.9.8 Revert to ES5 compatible build - [issue #46](https://github.com/selfrefactor/rambda/issues/46)
- 0.9.7 Refactor for `Rollup` tree-shake | Remove `R.padEnd` and `R.padStart`
- 0.9.6 Close [issue #44](https://github.com/selfrefactor/rambda/issues/44) - `R.reverse` mutates the array
- 0.9.5 Close [issue #45](https://github.com/selfrefactor/rambda/issues/45) - invalid Typescript typings
- 0.9.4 Add `R.reject` and `R.without` ([PR#41](https://github.com/selfrefactor/rambda/pull/41) [PR#42](https://github.com/selfrefactor/rambda/pull/42)) | Remove 'browser' field in `package.json` due to Webpack bug [4674](https://github.com/webpack/webpack/issues/4674)
- 0.9.3 Add `R.forEach` and `R.times`
- 0.9.2 Add `Typescript` definitions
- 0.9.1 Close [issue #36](https://github.com/selfrefactor/rambda/issues/36) - move current behaviour of `defaultTo` to a new method `typedDefaultTo`; make `defaultTo` follow Ramda spec; add `pathOr`; add `typedPathOr`.
- 0.9.0 Add `R.pipe` [PR#35](https://github.com/selfrefactor/rambda/pull/35)
- 0.8.9 Add `R.isNil`
- 0.8.8 Migrate to ES modules [PR33](https://github.com/selfrefactor/rambda/pull/33) | Add R.flip to the API | R.map/filter works with objects
- 0.8.7 Change `Webpack` with `Rollup` - [PR29](https://github.com/selfrefactor/rambda/pull/29)
- 0.8.6 Add `R.tap` and `R.identity`
- 0.8.5 Add `R.all`, `R.allPass`, `R.both`, `R.either` and `R.complement`
- 0.8.4 Learning to run `yarn test` before `yarn publish` the hard way
- 0.8.3 Add `R.always`, `R.T` and `R.F`
- 0.8.2 Add `concat`, `padStart`, `padEnd`, `lastIndexOf`, `toString`, `reverse`, `endsWith` and `startsWith` methods
- 0.8.1 Add `R.ifElse`
- 0.8.0 Add `R.not`, `R.includes` | Take string as condition for `R.pick` and `R.omit`
- 0.7.6 Fix incorrect implementation of `R.values`
- 0.7.5 Fix incorrect implementation of `R.omit`
- 0.7.4 [issue #13](https://github.com/selfrefactor/rambda/issues/13) - Fix `R.curry`, which used to return incorrectly `function` when called with more arguments
- 0.7.3 Close [issue #9](https://github.com/selfrefactor/rambda/issues/9) - Compile to `es2015`; Approve [PR #10](https://github.com/selfrefactor/rambda/pull/10) - add `R.addIndex` to the API
- 0.7.2 Add `Promise` support for `R.type`
- 0.7.1 Close [issue #7](https://github.com/selfrefactor/rambda/issues/7) - add `R.reduce` to the API
- 0.7.0 Close [issue #5](https://github.com/selfrefactor/rambda/issues/5) - change name of `curry` to `partialCurry`; add new method `curry`, which works just like Ramda's `curry`
- 0.6.2 Add separate documentation site via `docsify`

## Additional info

> Running benchmarks

TODO

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]
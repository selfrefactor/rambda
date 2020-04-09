

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambda/status.svg)](https://david-dm.org/selfrefactor/rambda)
![Normal size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js)
![Gzip size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js?compression=gzip)

# Rambda

Faster alternative to **Ramda** - [Documentation](https://selfrefactor.github.io/rambda/#/)

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
* [Use with ES5](#use-with-es5)
* [Changelog](#changelog)
* [Additional info](#additional-info)

## Rambda's advantages

- Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda**

---

- Speed

**Rambda** is generally more performant than `Ramda` as the benchmarks can prove that.

<details>

<summary>
Click to expand all benchmark results

Note that some methods benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`), are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 🚀 Fastest | 28.16% slower | 76.17% slower
 *adjust* | 🚀 Fastest | 2.8% slower | 🔳
 *all* | 🚀 Fastest | 89.64% slower | 🔳
 *allPass* | 🚀 Fastest | 98.48% slower | 🔳
 *any* | 🚀 Fastest | 92.1% slower | 29.4% slower
 *anyPass* | 🚀 Fastest | 98.67% slower | 🔳
 *append* | 🚀 Fastest | 85.14% slower | 🔳
 *applySpec* | 🚀 Fastest | 82.9% slower | 🔳
 *assoc* | 76.71% slower | 63.5% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 93.55% slower | 88.95% slower
 *compose* | 🚀 Fastest | 95.09% slower | 79.91% slower
 *curry* | 🚀 Fastest | 42.95% slower | 🔳
 *defaultTo* | 🚀 Fastest | 41.61% slower | 🔳
 *drop* | 🚀 Fastest | 89.2% slower | 🔳
 *dropLast* | 🚀 Fastest | 91.53% slower | 🔳
 *equals* | 🚀 Fastest | 84.87% slower | 59.82% slower
 *filter* | 🚀 Fastest | 72.63% slower | 11.78% slower
 *find* | 🚀 Fastest | 47.89% slower | 60.19% slower
 *findIndex* | 🚀 Fastest | 90.6% slower | 84.75% slower
 *flatten* | 10.31% slower | 96.42% slower | 🚀 Fastest
 *ifElse* | 🚀 Fastest | 23.16% slower | 🔳
 *includes* | 🚀 Fastest | 66.8% slower | 🔳
 *indexOf* | 🚀 Fastest | 69.38% slower | 0.64% slower
 *init* | 🚀 Fastest | 94.17% slower | 2.63% slower
 *is* | 🚀 Fastest | 44.05% slower | 🔳
 *isEmpty* | 37.68% slower | 92.85% slower | 🚀 Fastest
 *last* | 🚀 Fastest | 99.02% slower | 3.5% slower
 *lastIndexOf* | 🚀 Fastest | 45.56% slower | 🔳
 *map* | 🚀 Fastest | 87.72% slower | 23.59% slower
 *match* | 🚀 Fastest | 52.01% slower | 🔳
 *merge* | 🚀 Fastest | 29.34% slower | 67.66% slower
 *none* | 🚀 Fastest | 66.57% slower | 🔳
 *omit* | 🚀 Fastest | 72.93% slower | 97.97% slower
 *over* | 🚀 Fastest | 56.26% slower | 🔳
 *path* | 0.34% slower | 52.76% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 24.06% slower | 88.13% slower
 *prop* | 🚀 Fastest | 94.38% slower | 🔳
 *propEq* | 🚀 Fastest | 90.34% slower | 🔳
 *range* | 🚀 Fastest | 63.45% slower | 50.56% slower
 *reduce* | 71.84% slower | 84.24% slower | 🚀 Fastest
 *repeat* | 55.51% slower | 83.45% slower | 🚀 Fastest
 *replace* | 🚀 Fastest | 35.85% slower | 4.98% slower
 *set* | 🚀 Fastest | 57.61% slower | 🔳
 *sort* | 🚀 Fastest | 28.43% slower | 🔳
 *sortBy* | 🚀 Fastest | 16.52% slower | 72.48% slower
 *split* | 🚀 Fastest | 56.27% slower | 28.78% slower
 *splitEvery* | 🚀 Fastest | 74.75% slower | 🔳
 *take* | 🚀 Fastest | 96% slower | 26.07% slower
 *takeLast* | 🚀 Fastest | 96.37% slower | 28.53% slower
 *test* | 🚀 Fastest | 86.86% slower | 🔳
 *type* | 19.76% slower | 🚀 Fastest | 🔳
 *uniq* | 99.56% slower | 96.54% slower | 🚀 Fastest
 *update* | 🚀 Fastest | 87.94% slower | 🔳
 *view* | 🚀 Fastest | 69.35% slower | 🔳

</details>

---

- dot notation for `R.path` and `R.paths`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

---

- comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })

// No space allowed between properties
```

---

- Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

- More generic methods

`Ramda` has an overwhelming list of methods, as one could get lost putting all the methods in one's head. `Rambda`'s much smaller number of total methods(124) I see as advantage compared to the 255 of `Ramda`.

Ramda methods has plenty of really deep FP Methods, which are in fact quite useful, but they come at the price of added complexity. Such complex logics are in practice rarely needed.

You can [check the list with missing  Ramda methods in Rambda](https://github.com/selfrefactor/rambda/blob/master/files/ramdaMissing.md)  list to assure that `Rambda` doesn't have any important misses.

## Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or following CDN link:

```
https://unpkg.com/rambda@4.3.0/dist/rambda.umd.js
```

## Differences between Rambda and Ramda

- Rambda's **type** detect async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handle `NaN` input, in which case it returns `"NaN"`.

- Rambda's **path** and **paths** accepts dot notation(`'x.y' same as ['x','y']`)

- Rambda's **pick** and **omit** accept comma notation(`'x,y' same as ['x','y']`)

- Rambda's **map**, **filter**, **reject** and **forEach** can iterate over objects not only arrays.

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

---


<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

 *add* | 🚀 Fastest | 28.16% slower | 76.17% slower
 *adjust* | 🚀 Fastest | 2.8% slower | 🔳
 *all* | 🚀 Fastest | 89.64% slower | 🔳
 *allPass* | 🚀 Fastest | 98.48% slower | 🔳
 *any* | 🚀 Fastest | 92.1% slower | 29.4% slower
 *anyPass* | 🚀 Fastest | 98.67% slower | 🔳
 *append* | 🚀 Fastest | 85.14% slower | 🔳
 *applySpec* | 🚀 Fastest | 82.9% slower | 🔳
 *assoc* | 76.71% slower | 63.5% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 93.55% slower | 88.95% slower
 *compose* | 🚀 Fastest | 95.09% slower | 79.91% slower
 *converge* | 72.48% slower | 🚀 Fastest | 🔳
 *curry* | 🚀 Fastest | 42.95% slower | 🔳
 *curryN* | 🚀 Fastest | 22.07% slower | 🔳
 *defaultTo* | 🚀 Fastest | 41.61% slower | 🔳
 *drop* | 🚀 Fastest | 89.2% slower | 🔳
 *dropLast* | 🚀 Fastest | 91.53% slower | 🔳
 *equals* | 🚀 Fastest | 84.87% slower | 59.82% slower
 *filter* | 🚀 Fastest | 72.63% slower | 11.78% slower
 *find* | 🚀 Fastest | 47.89% slower | 60.19% slower
 *findIndex* | 🚀 Fastest | 90.6% slower | 84.75% slower
 *flatten* | 10.31% slower | 96.42% slower | 🚀 Fastest
 *ifElse* | 🚀 Fastest | 23.16% slower | 🔳
 *includes* | 🚀 Fastest | 66.8% slower | 🔳
 *indexOf* | 🚀 Fastest | 69.38% slower | 0.64% slower
 *init* | 🚀 Fastest | 94.17% slower | 2.63% slower
 *is* | 🚀 Fastest | 44.05% slower | 🔳
 *isEmpty* | 37.68% slower | 92.85% slower | 🚀 Fastest
 *last* | 🚀 Fastest | 99.02% slower | 3.5% slower
 *lastIndexOf* | 🚀 Fastest | 45.56% slower | 🔳
 *map* | 🚀 Fastest | 87.72% slower | 23.59% slower
 *match* | 🚀 Fastest | 52.01% slower | 🔳
 *merge* | 🚀 Fastest | 29.34% slower | 67.66% slower
 *none* | 🚀 Fastest | 66.57% slower | 🔳
 *omit* | 🚀 Fastest | 72.93% slower | 97.97% slower
 *over* | 🚀 Fastest | 56.26% slower | 🔳
 *path* | 0.34% slower | 52.76% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 24.06% slower | 88.13% slower
 *prop* | 🚀 Fastest | 94.38% slower | 🔳
 *propEq* | 🚀 Fastest | 90.34% slower | 🔳
 *range* | 🚀 Fastest | 63.45% slower | 50.56% slower
 *reduce* | 71.84% slower | 84.24% slower | 🚀 Fastest
 *repeat* | 55.51% slower | 83.45% slower | 🚀 Fastest
 *replace* | 🚀 Fastest | 35.85% slower | 4.98% slower
 *set* | 🚀 Fastest | 57.61% slower | 🔳
 *sort* | 🚀 Fastest | 28.43% slower | 🔳
 *sortBy* | 🚀 Fastest | 16.52% slower | 72.48% slower
 *split* | 🚀 Fastest | 56.27% slower | 28.78% slower
 *splitEvery* | 🚀 Fastest | 74.75% slower | 🔳
 *take* | 🚀 Fastest | 96% slower | 26.07% slower
 *takeLast* | 🚀 Fastest | 96.37% slower | 28.53% slower
 *test* | 🚀 Fastest | 86.86% slower | 🔳
 *type* | 19.76% slower | 🚀 Fastest | 🔳
 *uniq* | 99.56% slower | 96.54% slower | 🚀 Fastest
 *update* | 🚀 Fastest | 87.94% slower | 🔳
 *view* | 🚀 Fastest | 69.35% slower | 🔳

<details>


## API

### add

> add(a: number, b: number): number

It adds `a` and `b`. It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
R.add(2, 3) // =>  5
```

> Note
It doesn't work with strings

### adjust

> adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[]

It replaces `index` in array `list` with the result of `replaceFn(arr[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```


<details>

<summary>

Rambda.adjust failed spec against **Ramda.adjust** 

> Reason for the failure: ramda accepts an array-like object

</summary>

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('adjust', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.adjust(2, R.add(1), args(0, 1, 2, 3)), [0, 1, 3, 3]);
  });
});

<details>


### all

> all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(fn, arr)
// => true
```

### allPass

> allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean

### always

> always<T>(x: T): () => T

### and

> and<T extends { and?: ((...a: readonly any[]) => any)

### any

> any<T>(fn: (x: T, i: number) => boolean, arr: ReadonlyArray<T>): boolean

### anyPass

> anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>

### append

> append<T>(el: T, list: ReadonlyArray<T>): T[]

### applySpec

> applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
  obj: Obj
): (
    ...args: Parameters<ValueOfRecord<Obj>>
  ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> }

### assoc

> assoc<T, U, K extends string>(prop: K, value: T, obj: U): Record<K, T> & U

### assocPath

> assocPath<T, U>(path: Path, val: T, obj: U): U

### both

> both(pred1: Pred, pred2: Pred): Pred

### clamp

> clamp(min: number, max: number, input: number): number

### clone

> clone<T>(value: T): T

### complement

> complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean

### compose

> compose<T1>(fn0: () => T1): () => T1

### concat

> concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]

### cond

> cond(fns: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any

### curry

> curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>

### dec

> dec(n: number): number

### defaultTo

> defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T

### difference

> difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### dissoc

> dissoc<T>(prop: string, obj: any): T

### divide

> divide(a: number, b: number): number

### drop

> drop<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[]

### dropLast

> dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[]

### either

> either(pred1: Pred, pred2: Pred): Pred

### endsWith

> endsWith(a: string, list: string): boolean

### equals

> equals<T>(a: T, b: T): boolean

### F

> F(): boolean

### filter

> filter<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[]

### find

> find<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined

### findIndex

> findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number

### flatten

> flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[]

### flip

> flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult

### forEach

> forEach<T>(fn: (x: T) => void, list: T[]): T[]

### fromPairs

> fromPairs<V>(pairs: KeyValuePair<string, V>[]): { [index: string]: V }

### groupBy

> groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }

### groupWith

> groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]

### has

> has<T>(prop: string, obj: T): boolean

### head

> head<T>(arrOrStr: T[]): T | undefined

### identical

> identical<T>(a: T, b: T): boolean

### identity

> identity<T>(x: T): T

### ifElse

> ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn

### inc

> inc(n: number): number

### includes

> includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean

### indexBy

> indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T }

### indexOf

> indexOf<T>(target: T, arr: ReadonlyArray<T>): number

### init

> init<T>(arrOrStr: ReadonlyArray<T>): T[]

### intersection

> intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### intersperse

> intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]

### is

> is(xPrototype: any, x: any): boolean

### isEmpty

> isEmpty<T>(input: T): boolean

### isNil

> isNil(x: any): x is null | undefined

### join

> join(x: string, xs: ReadonlyArray<any>): string

### keys

> keys<T extends object>(x: T): (keyof T)[]

### last

> last<T>(arrOrStr: T[]): T | undefined

### lastIndexOf

> lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number

### length

> length<T>(list: ReadonlyArray<T>): number

### lens

> lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens

### lensIndex

> lensIndex(n: number): Lens

### lensProp

> lensProp(str: string): {
  <T, U>(obj: T): U

### map

> map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>

### match

> match(regexp: RegExp, str: string): any[]

### max

> max<T extends Ord>(a: T, b: T): T

### maxBy

> maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T

### mean

> mean(list: ReadonlyArray<number>): number

### median

> median(list: ReadonlyArray<number>): number

### merge

> merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>

### min

> min<T extends Ord>(a: T, b: T): T

### minBy

> minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T

### modulo

> modulo(a: number, b: number): number

### multiply

> multiply(a: number, b: number): number

### negate

> negate(a: number): number

### none

> none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean

### not

> not(x: any): boolean

### nth

> nth<T>(n: number, list: ReadonlyArray<T>): T | undefined

### omit

> omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>

### over

> over<T>(lens: Lens, fn: Arity1Fn, value: T): T

### partial

> partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T

### path

> path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined

### pathOr

> pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T

### paths

> paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[]

### pick

> pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>

### pickAll

> pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U

### pipe

> pipe<T1>(fn0: () => T1): () => T1

### pluck

> pluck<T>(property: number, arr: ReadonlyArray<T>): T

### prepend

> prepend<T>(x: T, arr: ReadonlyArray<T>): T[]

### product

> product(list: ReadonlyArray<number>): number

### prop

> prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]

### propEq

> propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean

### propIs

> propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean

### propOr

> propOr<T, U, V>(val: T, p: string, obj: U): V

### range

> range(start: number, end: number): number[]

### reduce

> reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult

### reject

> reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[]

### repeat

> repeat<T>(a: T, n: number): T[]

### replace

> replace(strOrRegex: RegExp | string, replacer: string, str: string): string

### reverse

> reverse<T>(list: ReadonlyArray<T>): T[]

### set

> set<T, U>(lens: Lens, a: U, obj: T): T

### slice

> slice(a: number, b: number, list: string): string

### sort

> sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[]

### sortBy

> sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[]

### split

> split(sep: string | RegExp): (str: string) => string[]

### splitEvery

> splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][]

### startsWith

> startsWith(a: string, list: string): boolean

### subtract

> subtract(a: number, b: number): number

### sum

> sum(list: ReadonlyArray<number>): number

### symmetricDifference

> symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### T

> T(): boolean

### tail

> tail<T>(arrOrStr: ReadonlyArray<T>): T[]

### take

> take<T>(num: number, arrOrStr: ReadonlyArray<T>): T[]

### takeLast

> takeLast<T>(num: number, arrOrStr: ReadonlyArray<T>): T[]

### tap

> tap<T>(fn: (a: T) => any, value: T): T

### test

> test(regExpression: RegExp): (str: string) => boolean

### times

> times<T>(fn: (i: number) => T, n: number): T[]

### toLower

> toLower(str: string): string

### toPairs

> toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]

### toString

> toString<T>(val: T): string

### toUpper

> toUpper(str: string): string

### transpose

> transpose<T>(list: T[][]): T[][]

### trim

> trim(str: string): string

### type

> type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"

### uniq

> uniq<T>(arr: ReadonlyArray<T>): T[]

### uniqWith

> uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[]

### update

> update<T>(index: number, value: T, list: ReadonlyArray<T>): T[]

### values

> values<T extends object, K extends keyof T>(obj: T): T[K][]

### view

> view<T, U>(lens: Lens): (obj: T) => U

### without

> without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### xor

> xor(a: boolean, b: boolean): boolean

### zip

> zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[]

### zipObj

> zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T }


# Rambdax

Extended version of Rambda(utility library) - [Documentation](https://selfrefactor.github.io/rambdax/#/)

`Rambda` is smaller and faster  alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![install size](https://packagephobia.com/badge?p=rambdax)](https://packagephobia.com/result?p=rambdax)
[![GitHub contributors](https://img.shields.io/github/contributors/selfrefactor/rambdax.svg)](https://github.com/selfrefactor/rambdax/graphs/contributors)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambdax)

## ❯ Differences between Rambda and Rambdax

Rambdax passthrough all [Rambda](https://github.com/selfrefactor/rambda) methods and introduce some new functions.

The idea of **Rambdax** is to extend **Rambda** without worring for **Ramda** compatibility.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-rambdax)

## ❯ Example use

```javascript
import { composeAsync, filter, delay, mapAsync } from 'rambdax'

const result = await composeAsync(
  mapAsync(async x => {
    await delay(100)
    return x + 1
  }),
  filter(x => x > 1)
)([1, 2, 3])
// => [3, 4]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20await%20R.composeAsync(%0A%20%20R.mapAsync(async%20x%20%3D%3E%20%7B%0A%20%20%20%20await%20R.delay(100)%0A%20%20%20%20return%20x%20%2B%201%0A%20%20%7D)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Rambda's REPL</a>

* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ❯ Rambdax's advantages

### TypeScript included

TypeScript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `TypeScript` are in development, which means that using **R.compose/R.pipe** can be problematic.

Important - Rambdax version `9.0.0`(or higher) requires TypeScript version `4.3.3`(or higher).

### Dot notation for `R.path`, `R.paths`, `R.assocPath` and `R.lensPath`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

### Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

### Extendable with Ramda community projects

`Rambdax` implements some methods from `Ramda` community projects, such as `R.lensSatisfies`, `R.lensEq` and `R.viewOr`.

### Understandable source code due to little usage of internals

`Ramda` uses a lot of internals, which hides a lot of logic. Reading the full source code of a method can be challenging.

### Better VSCode experience

If the project is written in Javascript, then `go to source definition` action will lead you to actual implementation of the method.

### Deno support

```
import * as R from "https://deno.land/x/rambdax/mod.ts";
```

### Alternative TS definitions

Alternative TS definitions are available as `rambdax/immutable`. These are Rambdax definitions linted with ESLint `functional/prefer-readonly-type` plugin.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdaxs-advantages)

## ❯ Missing Ramda methods

<details>
<summary>
  Click to see the full list of 46 Ramda methods not implemented in Rambda and their status.
</summary>

- construct - Using classes is not very functional programming oriented.
- constructN - same as above
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
- transduce - currently is out of focus
- traverse - same as above
- unary
- uncurryN
- unfold - similar to `R.scan` and I find that it doesn't help with readability
- unionWith - why it has its usage, I want to limit number of methods that accept more than 2 arguments
- until
- useWith - hard to explain
- valuesIn
- xprod - limited use case
- thunkify
- __ - placeholder method allows user to further customize the method call. While, it seems useful initially, the price is too high in terms of complexity for TypeScript definitions. If it is not easy exressable in TypeScript, it is not worth it as **Rambda** is a TypeScript first library.

The following methods are not going to be added(reason for exclusion is provided as a comment):
</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-missing-ramda-methods)
  
## ❯ Install

- **yarn add rambdax**

- For UMD usage either use `./dist/rambdax.umd.js` or the following CDN link:

```
https://unpkg.com/rambdax@CURRENT_VERSION/dist/rambdax.umd.js
```

- with deno

```
import {add} from "https://deno.land/x/rambda/mod.ts";
```

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-install)

## Differences between Rambda and Ramda

- Rambda's **type** detects async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handles *NaN* input, in which case it returns `NaN`.

- Rambda's **forEach** can iterate over objects not only arrays.

- Rambda's **map**, **filter**, **partition** when they iterate over objects, they pass property and input object as predicate's argument.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **clamp** work with strings, while Rambda's method work only with numbers.

- Ramda's **indexOf/lastIndexOf** work with strings and lists, while Rambda's method work only with lists as iterable input.

- Error handling, when wrong inputs are provided, may not be the same. This difference will be better documented once all brute force tests are completed.

- TypeScript definitions between `rambda` and `@types/ramda` may vary.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-ramda)

## ❯ Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*(4.17.21) and *Ramda*(0.30.1).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 🚀 Fastest | 21.52% slower | 82.15% slower
 *adjust* | 8.48% slower | 🚀 Fastest | 🔳
 *all* | 🚀 Fastest | 7.18% slower | 🔳
 *allPass* | 🚀 Fastest | 88.25% slower | 🔳
 *allPass* | 🚀 Fastest | 98.56% slower | 🔳
 *and* | 🚀 Fastest | 89.09% slower | 🔳
 *any* | 🚀 Fastest | 92.87% slower | 45.82% slower
 *anyPass* | 🚀 Fastest | 98.25% slower | 🔳
 *append* | 🚀 Fastest | 2.07% slower | 🔳
 *applySpec* | 🚀 Fastest | 80.43% slower | 🔳
 *assoc* | 72.32% slower | 60.08% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 91.86% slower | 86.48% slower
 *compose* | 6.07% slower | 16.89% slower | 🚀 Fastest
 *converge* | 78.63% slower | 🚀 Fastest | 🔳
 *curry* | 🚀 Fastest | 28.86% slower | 🔳
 *curryN* | 🚀 Fastest | 41.05% slower | 🔳
 *defaultTo* | 🚀 Fastest | 48.91% slower | 🔳
 *drop* | 🚀 Fastest | 82.35% slower | 🔳
 *dropLast* | 🚀 Fastest | 86.74% slower | 🔳
 *equals* | 58.37% slower | 96.73% slower | 🚀 Fastest
 *filter* | 6.7% slower | 72.03% slower | 🚀 Fastest
 *find* | 🚀 Fastest | 85.14% slower | 42.65% slower
 *findIndex* | 🚀 Fastest | 86.48% slower | 72.27% slower
 *flatten* | 🚀 Fastest | 85.68% slower | 3.57% slower
 *ifElse* | 🚀 Fastest | 58.56% slower | 🔳
 *includes* | 🚀 Fastest | 81.64% slower | 🔳
 *indexOf* | 🚀 Fastest | 80.17% slower | 🔳
 *indexOf* | 🚀 Fastest | 82.2% slower | 🔳
 *init* | 🚀 Fastest | 92.24% slower | 13.3% slower
 *is* | 🚀 Fastest | 57.69% slower | 🔳
 *isEmpty* | 🚀 Fastest | 97.14% slower | 54.99% slower
 *last* | 🚀 Fastest | 93.43% slower | 5.28% slower
 *lastIndexOf* | 🚀 Fastest | 85.19% slower | 🔳
 *map* | 🚀 Fastest | 86.6% slower | 11.73% slower
 *match* | 🚀 Fastest | 44.83% slower | 🔳
 *merge* | 🚀 Fastest | 12.21% slower | 55.76% slower
 *none* | 🚀 Fastest | 96.48% slower | 🔳
 *objOf* | 🚀 Fastest | 38.05% slower | 🔳
 *omit* | 🚀 Fastest | 69.95% slower | 97.34% slower
 *over* | 🚀 Fastest | 56.23% slower | 🔳
 *path* | 37.81% slower | 77.81% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 19.07% slower | 80.2% slower
 *pipe* | 🚀 Fastest | 0.11% slower | 🔳
 *prop* | 🚀 Fastest | 87.95% slower | 🔳
 *propEq* | 🚀 Fastest | 91.92% slower | 🔳
 *range* | 🚀 Fastest | 61.8% slower | 57.44% slower
 *reduce* | 60.48% slower | 77.1% slower | 🚀 Fastest
 *repeat* | 48.57% slower | 68.98% slower | 🚀 Fastest
 *replace* | 33.45% slower | 33.99% slower | 🚀 Fastest
 *set* | 🚀 Fastest | 50.35% slower | 🔳
 *sort* | 🚀 Fastest | 40.23% slower | 🔳
 *sortBy* | 🚀 Fastest | 25.29% slower | 56.88% slower
 *split* | 🚀 Fastest | 55.37% slower | 17.64% slower
 *splitEvery* | 🚀 Fastest | 71.98% slower | 🔳
 *take* | 🚀 Fastest | 91.96% slower | 4.72% slower
 *takeLast* | 🚀 Fastest | 93.39% slower | 19.22% slower
 *test* | 🚀 Fastest | 82.34% slower | 🔳
 *type* | 🚀 Fastest | 48.6% slower | 🔳
 *uniq* | 🚀 Fastest | 84.9% slower | 🔳
 *uniqBy* | 51.93% slower | 🚀 Fastest | 🔳
 *uniqWith* | 8.29% slower | 🚀 Fastest | 🔳
 *uniqWith* | 14.23% slower | 🚀 Fastest | 🔳
 *update* | 🚀 Fastest | 52.35% slower | 🔳
 *view* | 🚀 Fastest | 76.15% slower | 🔳

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-benchmarks)

## ❯ Used by

- [ESLint plugin Mocha](https://www.npmjs.com/package/eslint-plugin-mocha)

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [Walmart Canada](https://www.walmart.ca) reported by [w-b-dev](https://github.com/w-b-dev) 

- [VSCode Slack integration](https://github.com/verydanny/vcslack)

- [Webpack PostCSS](https://github.com/sectsect/webpack-postcss)

- [MobX-State-Tree decorators](https://github.com/farwayer/mst-decorators)

- [Rewrite of the Betaflight configurator](https://github.com/freshollie/fresh-configurator)

- [MineFlayer plugin](https://github.com/G07cha/MineflayerArmorManager)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-used-by)

## API

### add

```typescript

add(a: number, b: number): number
```

It adds `a` and `b`.

> :boom: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
R.add(2, 3) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try this <strong>R.add</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.add</strong> source</summary>

```javascript
export function add(a, b){
  if (arguments.length === 1) return _b => add(a, _b)

  return Number(a) + Number(b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add as addRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { add } from './add.js'

test('with number', () => {
  expect(add(2, 3)).toBe(5)
  expect(add(7)(10)).toBe(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toBe(3)
  expect(add(1, '2')).toBe(3)
  expect(add(true, false)).toBe(1)
  expect(add(null, null)).toBe(0)
  expect(add(undefined, undefined)).toBeNaN()
  expect(add(new Date(1), new Date(2))).toBe(3)
})

const possibleInputs = [
  /foo/,
  'foo',
  true,
  3,
  NaN,
  4,
  [],
  Promise.resolve(1),
]

describe('brute force', () => {
  compareCombinations({
    fn          : add,
    fnRamda     : addRamda,
    firstInput  : possibleInputs,
    secondInput : possibleInputs,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 64,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### addIndex

```typescript

addIndex(originalFn: any): (fn: any) => (list: any[]) => any[]
```

```javascript
const result = R.addIndex(R.map)((val, idx) => val + idx + 1, [1, 2, 3])
// => [2, 4, 6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.addIndex(R.map)((val%2C%20idx)%20%3D%3E%20val%20%2B%20idx%20%2B%201%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D">Try this <strong>R.addIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
addIndex(originalFn: any): (fn: any) => (list: any[]) => any[];
addIndex(originalFn: any): (fn: any, list: any[]) => any[];
```

</details>

<details>

<summary><strong>R.addIndex</strong> source</summary>

```javascript
import { _concat } from './_internals/utils.js'
import { curryN } from './curryN.js'

export function addIndex(
  originalFunction,
  initialIndexFn = () => 0,
  loopIndexChange = x => x + 1
){
  return curryN(originalFunction.length, function (){
    const origFn = arguments[ 0 ]
    const list = arguments[ arguments.length - 1 ]
    let idx = initialIndexFn(list.length)
    const args = Array.prototype.slice.call(arguments, 0)
    args[ 0 ] = function (){
      const result = origFn.apply(this, _concat(arguments, [ idx, list ]))
      idx = loopIndexChange(idx)

      return result
    }

    return originalFunction.apply(this, args)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import * as R from 'ramda'

import { addIndex } from './addIndex.js'
import { map } from './map.js'

test('with R.pipe', () => {
  const result = R.pipe(R.addIndex(R.map)((x, i) => x + i))([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3, 5 ])
})

test('happy', () => {
  function mapFn(fn, list){
    const willReturn = []
    list.forEach(item => {
      willReturn.push(fn(item))
    })

    return willReturn
  }
  const mapIndexed = addIndex(mapFn)
  const fn2 = (val, idx) => val + idx + 5
  const result = mapIndexed(fn2, [ 1, 2, 3 ])
  expect(result).toEqual([ 6, 8, 10 ])
})

describe('unary functions like `map`', () => {
  const times2 = function (x){
    return x * 2
  }
  const addIndexParam = function (x, idx){
    return x + idx
  }
  const squareEnds = function (
    x, idx, list
  ){
    return idx === 0 || idx === list.length - 1 ? x * x : x
  }
  const mapIndexed = addIndex(map)

  it('works just like a normal map', () => {
    expect(mapIndexed(times2, [ 1, 2, 3, 4 ])).toEqual([ 2, 4, 6, 8 ])
  })

  it('passes the index as a second parameter to the callback', () => {
    expect(mapIndexed(addIndexParam, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      8, 7, 9, 8, 7, 5, 15,
    ])
  })

  it('passes the entire list as a third parameter to the callback', () => {
    expect(mapIndexed(squareEnds, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })

  it('acts as a curried function', () => {
    const makeSquareEnds = mapIndexed(squareEnds)
    expect(makeSquareEnds([ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#addIndex)

### addIndexRight

```typescript

addIndexRight(originalFn: any): (fn: any) => (list: any[]) => any[]
```

Same as `R.addIndex`, but it will passed indexes are decreasing, instead of increasing.

<details>

<summary>All TypeScript definitions</summary>

```typescript
addIndexRight(originalFn: any): (fn: any) => (list: any[]) => any[];
addIndexRight(originalFn: any): (fn: any, list: any[]) => any[];
```

</details>

<details>

<summary><strong>R.addIndexRight</strong> source</summary>

```javascript
import { addIndex } from './addIndex.js'

export function addIndexRight(originalFunction){
  return addIndex(
    originalFunction,
    listLength => listLength - 1,
    x => x - 1
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { addIndexRight } from './addIndexRight.js'
import { map } from './map.js'

test('happy', () => {
  function mapFn(fn, list){
    const willReturn = []
    list.forEach(item => {
      willReturn.push(fn(item))
    })

    return willReturn
  }
  const mapIndexed = addIndexRight(mapFn)
  const fn2 = (val, idx) => val + idx + 5
  expect(mapIndexed(fn2, [ 1, 2, 3 ])).toEqual([ 8, 8, 8 ])
  const revmap = (fn, ary) => map(fn, ary)
  const revmapIndexed = addIndexRight(revmap)
  const result = revmapIndexed((val, idx) => idx + '-' + val,
    [ 'f', 'o', 'o', 'b', 'a', 'r' ])

  expect(result).toEqual([ '5-f', '4-o', '3-o', '2-b', '1-a', '0-r' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#addIndexRight)

### adjust

```typescript

adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
const result = R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try this <strong>R.adjust</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[];
adjust<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.adjust</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { curry } from './curry.js'

function adjustFn(
  index, replaceFn, list
){
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = cloneList(list)
  clone[ actualIndex ] = replaceFn(clone[ actualIndex ])

  return clone
}

export const adjust = curry(adjustFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { adjust } from './adjust.js'
import { pipe } from './pipe.js'

const list = [ 0, 1, 2 ]
const expected = [ 0, 11, 2 ]

test('happy', () => {})

test('happy', () => {
  expect(adjust(
    1, add(10), list
  )).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))(list)).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), list)).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(
    -2, add(10), list
  )).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [ 0, 1, 2, 3 ]
  expect(adjust(
    4, add(1), list
  )).toEqual(list)
  expect(adjust(
    -5, add(1), list
  )).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#adjust)

### all

```typescript

all<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(predicate, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.all</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: T[]): boolean;
all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.all</strong> source</summary>

```javascript
export function all(predicate, list){
  if (arguments.length === 1) return _list => all(predicate, _list)

  for (let i = 0; i < list.length; i++){
    if (!predicate(list[ i ])) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { all } from './all.js'

const list = [ 0, 1, 2, 3, 4 ]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(list)).toBeTrue()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, list)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#all)

### allFalse

```typescript

allFalse(...inputs: any[]): boolean
```

It returns `true` if all `inputs` arguments are falsy(empty objects and empty arrays are considered falsy).

Functions are valid inputs, but these functions cannot have their own arguments.

This method is very similar to `R.anyFalse`, `R.anyTrue` and `R.allTrue`

```javascript
R.allFalse(0, null, [], {}, '', () => false)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.allFalse(0%2C%20null%2C%20%5B%5D%2C%20%7B%7D%2C%20''%2C%20()%20%3D%3E%20false)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.allFalse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
allFalse(...inputs: any[]): boolean;
```

</details>

<details>

<summary><strong>R.allFalse</strong> source</summary>

```javascript
import { isTruthy } from './_internals/isTruthy.js'
import { type } from './type.js'

export function allFalse(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isTruthy(x())){
        return false
      }
    } else if (isTruthy(x)){
      return false
    }

    counter++
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { runTests } from 'helpers-fn'

import { allFalse } from './allFalse.js'

const happy = { ok : [ () => false, () => [], () => {}, null, false, [] ] }
const withArray = { fail : [ ...happy.ok, [ 1 ] ] }
const withObject = { fail : [ ...happy.ok, { a : 1 } ] }
const withFunction = { fail : [ ...happy.ok, () => ({ a : 1 }) ] }
const withBoolean = { fail : [ ...happy.ok, true ] }

const testData = {
  label : 'R.allFalse',
  data  : [ happy, withArray, withObject, withFunction, withBoolean ],
  fn    : input => allFalse(...input),
}
runTests(testData)
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allFalse)

### allPass

```typescript

allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean
```

It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

```javascript
const input = {
  a : 1,
  b : 2,
}
const predicates = [
  x => x.a === 1,
  x => x.b === 2,
]
const result = R.allPass(predicates)(input) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20predicates%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(predicates)(input)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.allPass</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
allPass<T>(predicates: ((...inputs: T[]) => boolean)[]): (...inputs: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.allPass</strong> source</summary>

```javascript
export function allPass(predicates){
  return (...input) => {
    let counter = 0
    while (counter < predicates.length){
      if (!predicates[ counter ](...input)){
        return false
      }
      counter++
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allPass } from './allPass.js'

test('happy', () => {
  const rules = [ x => typeof x === 'number', x => x > 10, x => x * 7 < 100 ]

  expect(allPass(rules)(11)).toBeTrue()

  expect(allPass(rules)(undefined)).toBeFalse()
})

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 2 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeTrue()
})

test('when returns false', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 3 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeFalse()
})

test('works with multiple inputs', () => {
  const fn = function (
    w, x, y, z
  ){
    return w + x === y + z
  }
  expect(allPass([ fn ])(
    3, 3, 3, 3
  )).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allPass)

### allTrue

```typescript

allTrue(...input: any[]): boolean
```

It returns `true` if all `inputs` arguments are truthy(empty objects and empty arrays are considered falsy).

```javascript
R.allTrue(1, true, {a: 1}, [1], 'foo', () => true)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.allTrue(1%2C%20true%2C%20%7Ba%3A%201%7D%2C%20%5B1%5D%2C%20'foo'%2C%20()%20%3D%3E%20true)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.allTrue</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
allTrue(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.allTrue</strong> source</summary>

```javascript
import { isFalsy } from './_internals/isFalsy.js'
import { type } from './type.js'

export function allTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isFalsy(x())){
        return false
      }
    } else if (isFalsy(x)){
      return false
    }

    counter++
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allTrue } from './allTrue.js'

test('with functions', () => {
  const foo = () => 1
  const bar = () => false
  const baz = () => JSON.parse('{sda')
  const result = allTrue(
    foo, bar, baz
  )
  expect(result).toBeFalse()
})

test('usage with non boolean', () => {
  const foo = { a : 1 }
  const baz = [ 1, 2, 3 ]

  const result = allTrue(
    foo, foo, baz
  )
  expect(result).toBeTrue()
})

test('usage with boolean', () => {
  const foo = 4
  const baz = [ 1, 2, 3 ]

  const result = allTrue(foo > 2, baz.length === 3)
  expect(result).toBeTrue()
})

test('escapes early - case 0', () => {
  const foo = undefined
  const result = allTrue(foo, () => foo.a)
  expect(result).toBeFalse()
})

test('escapes early - case 1', () => {
  const foo = null
  const result = allTrue(foo, () => foo.a)
  expect(result).toBeFalse()
})

test('escapes early - case 2', () => {
  const foo = { a : 'bar' }
  const result = allTrue(
    foo, foo.a, foo.a.b
  )
  expect(result).toBeFalse()
})

test('escapes early - case 3', () => {
  const foo = { a : { b : 'foo' } }
  const result = allTrue(
    foo,
    () => foo.a,
    () => foo.a.b
  )
  expect(result).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allTrue)

### allType

```typescript

allType(targetType: RambdaTypes): (...input: any[]) => boolean
```

It returns a function which will return `true` if all of its `inputs` arguments belong to `targetType`.

> :boom: `targetType` is one of the possible returns of `R.type`

```javascript
const targetType = 'String'

const result = R.allType(
  targetType
)('foo', 'bar', 'baz')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20targetType%20%3D%20'String'%0A%0Aconst%20result%20%3D%20R.allType(%0A%20%20targetType%0A)('foo'%2C%20'bar'%2C%20'baz')%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.allType</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
allType(targetType: RambdaTypes): (...input: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.allType</strong> source</summary>

```javascript
import { type } from './type.js'

export function allType(targetType){
  return (...inputs) => {
    let counter = 0

    while (counter < inputs.length){
      if (type(inputs[ counter ]) !== targetType){
        return false
      }
      counter++
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { allType } from './allType.js'

test('when true', () => {
  const result = allType('Array')(
    [ 1, 2, 3 ], [], [ null ]
  )

  expect(result).toBeTrue()
})

test('when false', () => {
  const result = allType('String')(
    1, undefined, null, []
  )

  expect(result).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allType)

### always

```typescript

always<T>(x: T): (...args: unknown[]) => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

const result = fn()
// => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconst%20result%20%3D%20fn()%0A%2F%2F%20%3D%3E%207">Try this <strong>R.always</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
always<T>(x: T): (...args: unknown[]) => T;
```

</details>

<details>

<summary><strong>R.always</strong> source</summary>

```javascript
export function always(x){
  return _ => x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always.js'
import { applySpec } from './applySpec.js'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toBe(7)
  expect(fn()).toBe(7)
})

test('compatibility with applySpec', () => {
  const spec = applySpec({ x : always('foo') })
  expect(spec({})).toEqual({ x : 'foo' })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#always)

### and

```typescript

and<T, U>(x: T, y: U): T | U
```

Logical AND

```javascript
R.and(true, true); // => true
R.and(false, true); // => false
R.and(true, 'foo'); // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.and(true%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.and(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.and(true%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.and</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
and<T, U>(x: T, y: U): T | U;
and<T>(x: T): <U>(y: U) => T | U;
```

</details>

<details>

<summary><strong>R.and</strong> source</summary>

```javascript
export function and(a, b){
  if (arguments.length === 1) return _b => and(a, _b)

  return a && b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { and } from './and.js'

test('happy', () => {
  expect(and(1, 'foo')).toBe('foo')
  expect(and(true, true)).toBeTrue()
  expect(and(true)(true)).toBeTrue()
  expect(and(true, false)).toBeFalse()
  expect(and(false, true)).toBeFalse()
  expect(and(false, false)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#and)

### any

```typescript

any<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.

```javascript
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0Aconst%20result%20%3D%20R.any(fn%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.any</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
any<T>(predicate: (x: T) => boolean, list: T[]): boolean;
any<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.any</strong> source</summary>

```javascript
export function any(predicate, list){
  if (arguments.length === 1) return _list => any(predicate, _list)

  let counter = 0
  while (counter < list.length){
    if (predicate(list[ counter ], counter)){
      return true
    }
    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { any } from './any.js'

const list = [ 1, 2, 3 ]

test('happy', () => {
  expect(any(x => x < 0, list)).toBeFalse()
})

test('with curry', () => {
  expect(any(x => x > 2)(list)).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#any)

### anyFalse

```typescript

anyFalse(...input: any[]): boolean
```

It returns `true` if any of `inputs` is falsy(empty objects and empty arrays are considered falsy).

```javascript
R.anyFalse(1, {a: 1}, [1], () => false)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.anyFalse(1%2C%20%7Ba%3A%201%7D%2C%20%5B1%5D%2C%20()%20%3D%3E%20false)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.anyFalse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
anyFalse(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.anyFalse</strong> source</summary>

```javascript
import { isFalsy } from './_internals/isFalsy.js'
import { type } from './type.js'

export function anyFalse(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isFalsy(x())){
        return true
      }
    } else if (isFalsy(x)){
      return true
    }

    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyFalse } from './anyFalse.js'

test('when true', () => {
  expect(anyFalse(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyFalse(true, true)).toBeFalsy()
})

test('supports function', () => {
  expect(anyFalse(
    true,
    () => true,
    () => false
  )).toBeTruthy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyFalse)

### anyPass

```typescript

anyPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

```javascript
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20isBig%20%3D%20x%20%3D%3E%20x%20%3E%2020%0Aconst%20isOdd%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0Aconst%20input%20%3D%2011%0A%0Aconst%20fn%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)%0A%0Aconst%20result%20%3D%20fn(input)%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.anyPass</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
anyPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
anyPass<T>(predicates: ((...inputs: T[]) => boolean)[]): (...inputs: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.anyPass</strong> source</summary>

```javascript
export function anyPass(predicates){
  return (...input) => {
    let counter = 0
    while (counter < predicates.length){
      if (predicates[ counter ](...input)){
        return true
      }
      counter++
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyPass } from './anyPass.js'

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTrue()
  expect(predicate(6)).toBeFalse()
})

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]

  expect(anyPass(rules)(11)).toBeTrue()
  expect(anyPass(rules)(undefined)).toBeFalse()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.a === 2 ]

  expect(anyPass(conditionArr)(obj)).toBeTrue()
})

test('when returns false + curry', () => {
  const conditionArr = [ val => val.a === 2, val => val.b === 3 ]

  expect(anyPass(conditionArr)(obj)).toBeFalse()
})

test('with empty predicates list', () => {
  expect(anyPass([])(3)).toBeFalse()
})

test('works with multiple inputs', () => {
  const fn = function (
    w, x, y, z
  ){
    console.log(
      w, x, y, z
    )

    return w + x === y + z
  }
  expect(anyPass([ fn ])(
    3, 3, 3, 3
  )).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyPass)

### anyTrue

```typescript

anyTrue(...input: any[]): boolean
```

It returns `true` if any of `inputs` arguments are truthy(empty objects and empty arrays are considered falsy).

```javascript
R.anyTrue(0, null, [], {}, '', () => true)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.anyTrue(0%2C%20null%2C%20%5B%5D%2C%20%7B%7D%2C%20''%2C%20()%20%3D%3E%20true)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.anyTrue</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
anyTrue(...input: any[]): boolean;
```

</details>

<details>

<summary><strong>R.anyTrue</strong> source</summary>

```javascript
import { isTruthy } from './_internals/isTruthy.js'
import { type } from './type.js'

export function anyTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isTruthy(x())){
        return true
      }
    } else if (isTruthy(x)){
      return true
    }

    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyTrue } from './anyTrue.js'

test('when true', () => {
  expect(anyTrue(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyTrue(
    false, false, false
  )).toBeFalsy()
})

test('supports function', () => {
  expect(anyTrue(
    false,
    false,
    false,
    () => false,
    () => true
  )).toBeTruthy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyTrue)

### anyType

```typescript

anyType(targetType: RambdaTypes): (...input: any[]) => boolean
```

It returns a function which will return `true` if at least one of its `inputs` arguments belongs to `targetType`.

`targetType` is one of the possible returns of `R.type`

> :boom: `targetType` is one of the possible returns of `R.type`

```javascript
const targetType = 'String'

const result = R.anyType(
  targetType
)(1, {}, 'foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20targetType%20%3D%20'String'%0A%0Aconst%20result%20%3D%20R.anyType(%0A%20%20targetType%0A)(1%2C%20%7B%7D%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.anyType</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
anyType(targetType: RambdaTypes): (...input: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.anyType</strong> source</summary>

```javascript
import { type } from './type.js'

export function anyType(targetType){
  return (...inputs) => {
    let counter = 0

    while (counter < inputs.length){
      if (type(inputs[ counter ]) === targetType){
        return true
      }
      counter++
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { anyType } from './anyType.js'

test('when true', () => {
  const result = anyType('Array')(
    1, undefined, null, []
  )

  expect(result).toBeTrue()
})

test('when false', () => {
  const result = anyType('String')(
    1, undefined, null, []
  )

  expect(result).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyType)

### ap

```typescript

ap<T, U>(fns: Array<(a: T) => U>[], vs: T[]): U[]
```

It takes a list of functions and a list of values. Then it returns a list of values obtained by applying each function to each value.

```javascript
const result = R.ap(
  [
    x => x + 1,
    x => x + 2,
  ],
  [1, 2, 3]
)
// => [2, 3, 4, 3, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.ap(%0A%20%20%5B%0A%20%20%20%20x%20%3D%3E%20x%20%2B%201%2C%0A%20%20%20%20x%20%3D%3E%20x%20%2B%202%2C%0A%20%20%5D%2C%0A%20%20%5B1%2C%202%2C%203%5D%0A)%0A%2F%2F%20%3D%3E%20%5B2%2C%203%2C%204%2C%203%2C%204%2C%205%5D">Try this <strong>R.ap</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ap<T, U>(fns: Array<(a: T) => U>[], vs: T[]): U[];
ap<T, U>(fns: Array<(a: T) => U>): (vs: T[]) => U[];
ap<R, A, B>(fn: (r: R, a: A) => B, fn1: (r: R) => A): (r: R) => B;
```

</details>

<details>

<summary><strong>R.ap</strong> source</summary>

```javascript
export function ap(functions, input){
  if (arguments.length === 1){
    return _inputs => ap(functions, _inputs)
  }

  return functions.reduce((acc, fn) => [ ...acc, ...input.map(fn) ], [])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ap } from './ap.js'

function mult2(x){
  return x * 2
}
function plus3(x){
  return x + 3
}

test('happy', () => {
  expect(ap([ mult2, plus3 ], [ 1, 2, 3 ])).toEqual([ 2, 4, 6, 4, 5, 6 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ap)

### aperture

```typescript

aperture<N extends number, T>(n: N, list: T[]): Array<Tuple<T, N>> | []
```

It returns a new list, composed of consecutive `n`-tuples from a `list`.

```javascript
const result = R.aperture(2, [1, 2, 3, 4])
// => [[1, 2], [2, 3], [3, 4]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.aperture(2%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B2%2C%203%5D%2C%20%5B3%2C%204%5D%5D">Try this <strong>R.aperture</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
aperture<N extends number, T>(n: N, list: T[]): Array<Tuple<T, N>> | [];
aperture<N extends number>(n: N): <T>(list: T[]) => Array<Tuple<T, N>> | [];
```

</details>

<details>

<summary><strong>R.aperture</strong> source</summary>

```javascript
export function aperture(step, list){
  if (arguments.length === 1){
    return _list => aperture(step, _list)
  }
  if (step > list.length) return []
  let idx = 0
  const limit = list.length - (step - 1)
  const acc = new Array(limit)
  while (idx < limit){
    acc[ idx ] = list.slice(idx, idx + step)
    idx += 1
  }

  return acc
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { aperture } from './aperture.js'

const list = [ 1, 2, 3, 4, 5, 6, 7 ]

test('happy', () => {
  expect(aperture(1, list)).toEqual([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ])
  expect(aperture(2, list)).toEqual([
    [ 1, 2 ],
    [ 2, 3 ],
    [ 3, 4 ],
    [ 4, 5 ],
    [ 5, 6 ],
    [ 6, 7 ],
  ])
  expect(aperture(3, list)).toEqual([
    [ 1, 2, 3 ],
    [ 2, 3, 4 ],
    [ 3, 4, 5 ],
    [ 4, 5, 6 ],
    [ 5, 6, 7 ],
  ])
  expect(aperture(8, list)).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#aperture)

### append

```typescript

append<T>(xToAppend: T, iterable: T[]): T[]
```

It adds element `x` at the end of `iterable`.

```javascript
const x = 'foo'

const result = R.append(x, ['bar', 'baz'])
// => ['bar', 'baz', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20R.append(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try this <strong>R.append</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
append<T>(xToAppend: T, iterable: T[]): T[];
append<T, U>(xToAppend: T, iterable: IsFirstSubtypeOfSecond<T, U>[]) : U[];
append<T>(xToAppend: T): <U>(iterable: IsFirstSubtypeOfSecond<T, U>[]) => U[];
append<T>(xToAppend: T): (iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function append(x, input){
  if (arguments.length === 1) return _input => append(x, _input)

  if (typeof input === 'string') return input.split('').concat(x)

  const clone = cloneList(input)
  clone.push(x)

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { append } from './append.js'

test('happy', () => {
  expect(append('tests', [ 'write', 'more' ])).toEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual([ 'tests' ])
})

test('with strings', () => {
  expect(append('o', 'fo')).toEqual([ 'f', 'o', 'o' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### apply

```typescript

apply<T = any>(fn: (...args: any[]) => T, args: any[]): T
```

It applies function `fn` to the list of arguments. 

This is useful for creating a fixed-arity function from a variadic function. `fn` should be a bound function if context is significant.

```javascript
const result = R.apply(Math.max, [42, -Infinity, 1337])
// => 1337
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.apply(Math.max%2C%20%5B42%2C%20-Infinity%2C%201337%5D)%0A%2F%2F%20%3D%3E%201337">Try this <strong>R.apply</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
apply<T = any>(fn: (...args: any[]) => T, args: any[]): T;
apply<T = any>(fn: (...args: any[]) => T): (args: any[]) => T;
```

</details>

<details>

<summary><strong>R.apply</strong> source</summary>

```javascript
export function apply(fn, args){
  if (arguments.length === 1){
    return _args => apply(fn, _args)
  }

  return fn.apply(this, args)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { apply } from './apply.js'
import { bind } from './bind.js'
import { identity } from './identity.js'

test('happy', () => {
  expect(apply(identity, [ 1, 2, 3 ])).toBe(1)
})

test('applies function to argument list', () => {
  expect(apply(Math.max, [ 1, 2, 3, -99, 42, 6, 7 ])).toBe(42)
})

test('provides no way to specify context', () => {
  const obj = {
    method (){
      return this === obj
    },
  }
  expect(apply(obj.method, [])).toBeFalse()
  expect(apply(bind(obj.method, obj), [])).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#apply)

### applyDiff

```typescript

applyDiff<Output>(rules: ApplyDiffRule[], obj: object): Output
```

It changes paths in an object according to a list of operations. Valid operations are `add`, `update` and `delete`. Its use-case is while writing tests and you need to change the test data.

Note, that you cannot use `update` operation, if the object path is missing in the input object.
Also, you cannot use `add` operation, if the object path has a value.

```javascript
const obj = {a: {b:1, c:2}}
const rules = [
  {op: 'remove', path: 'a.c'},
  {op: 'add', path: 'a.d', value: 4},
  {op: 'update', path: 'a.b', value: 2},
]
const result = R.applyDiff(rules, Record<string, unknown>)
const expected = {a: {b: 2, d: 4}}

// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A1%2C%20c%3A2%7D%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20%7Bop%3A%20'remove'%2C%20path%3A%20'a.c'%7D%2C%0A%20%20%7Bop%3A%20'add'%2C%20path%3A%20'a.d'%2C%20value%3A%204%7D%2C%0A%20%20%7Bop%3A%20'update'%2C%20path%3A%20'a.b'%2C%20value%3A%202%7D%2C%0A%5D%0Aconst%20result%20%3D%20R.applyDiff(rules%2C%20Record%3Cstring%2C%20unknown%3E)%0Aconst%20expected%20%3D%20%7Ba%3A%20%7Bb%3A%202%2C%20d%3A%204%7D%7D%0A%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.applyDiff</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
applyDiff<Output>(rules: ApplyDiffRule[], obj: object): Output;
applyDiff<Output>(rules: ApplyDiffRule[]): ( obj: object) => Output;
```

</details>

<details>

<summary><strong>R.applyDiff</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { assocPathFn } from './assocPath.js'
import { path as pathModule } from './path.js'
const ALLOWED_OPERATIONS = [ 'remove', 'add', 'update' ]

export function removeAtPath(path, obj){
  const p = createPath(path)

  const len = p.length
  if (len === 0) return
  if (len === 1) return delete obj[ p[ 0 ] ]
  if (len === 2) return delete obj[ p[ 0 ] ][ p[ 1 ] ]
  if (len === 3) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ]
  if (len === 4) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ]
  if (len === 5) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ]
  if (len === 6)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ]

  if (len === 7)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ]

  if (len === 8)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ]

  if (len === 9)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ][ p[ 8 ] ]

  if (len === 10)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ][ p[ 8 ] ][
      p[ 9 ]
    ]

}

export function applyDiff(rules, obj){
  if (arguments.length === 1) return _obj => applyDiff(rules, _obj)

  let clone = { ...obj }

  rules.forEach(({ op, path, value }) => {
    if (!ALLOWED_OPERATIONS.includes(op)) return
    if (op === 'add' && path && value !== undefined){
      if (pathModule(path, obj)) return

      clone = assocPathFn(
        path, value, clone
      )

      return
    }

    if (op === 'remove'){
      if (pathModule(path, obj) === undefined) return

      removeAtPath(path, clone)

      return
    }
    if (op === 'update' && path && value !== undefined){
      if (pathModule(path, obj) === undefined) return

      clone = assocPathFn(
        path, value, clone
      )

    }
  })

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { applyDiff } from './applyDiff.js'

test('remove operation', () => {
  const rules = [
    {
      op   : 'remove',
      path : 'a.b',
    },
  ]
  const result = applyDiff(rules, {
    a : {
      b : 1,
      c : 2,
    },
  })
  expect(result).toEqual({ a : { c : 2 } })
})

test('update operation', () => {
  const rules = [
    {
      op    : 'update',
      path  : 'a.b',
      value : 3,
    },
    {
      op    : 'update',
      path  : 'a.c.1',
      value : 3,
    },
    {
      op    : 'update',
      path  : 'a.d',
      value : 3,
    },
  ]
  expect(applyDiff(rules, {
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  })).toEqual({
    a : {
      b : 3,
      c : [ 1, 3 ],
    },
  })
})

test('add operation', () => {
  const rules = [
    {
      op    : 'add',
      path  : 'a.b',
      value : 3,
    },
    {
      op    : 'add',
      path  : 'a.d',
      value : 3,
    },
  ]
  const result = applyDiff(rules, {
    a : {
      b : 1,
      c : 2,
    },
  })

  expect(result).toEqual({
    a : {
      b : 1,
      c : 2,
      d : 3,
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applyDiff)

### applySpec

```typescript

applySpec<Spec extends Record<string, AnyFunction>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

> :boom: The currying in this function works best with functions with 4 arguments or less. (arity of 4)

```javascript
const fn = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
})
const result = fn(2, 4) 
// => { sum: 6, nested: { mul: 8 } }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.applySpec(%7B%0A%20%20sum%3A%20R.add%2C%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0A%7D)%0Aconst%20result%20%3D%20fn(2%2C%204)%20%0A%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D">Try this <strong>R.applySpec</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
applySpec<Spec extends Record<string, AnyFunction>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
applySpec<T>(spec: any): (...args: unknown[]) => T;
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

// recursively traverse the given spec object to find the highest arity function
export function __findHighestArity(spec, max = 0){
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    if (typeof spec[ key ] === 'object'){
      max = Math.max(max, __findHighestArity(spec[ key ]))
    }

    if (typeof spec[ key ] === 'function'){
      max = Math.max(max, spec[ key ].length)
    }
  }

  return max
}

function __filterUndefined(){
  const defined = []
  let i = 0
  const l = arguments.length
  while (i < l){
    if (typeof arguments[ i ] === 'undefined') break
    defined[ i ] = arguments[ i ]
    i++
  }

  return defined
}

function __applySpecWithArity(
  spec, arity, cache
){
  const remaining = arity - cache.length

  if (remaining === 1)
    return x =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(...cache, x)
      )
  if (remaining === 2)
    return (x, y) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(
          ...cache, x, y
        )
      )
  if (remaining === 3)
    return (
      x, y, z
    ) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(
          ...cache, x, y, z
        )
      )
  if (remaining === 4)
    return (
      x, y, z, a
    ) =>
      __applySpecWithArity(
        spec,
        arity,
        __filterUndefined(
          ...cache, x, y, z, a
        )
      )
  if (remaining > 4)
    return (...args) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(...cache, ...args)
      )

  // handle spec as Array
  if (isArray(spec)){
    const ret = []
    let i = 0
    const l = spec.length
    for (; i < l; i++){
      // handle recursive spec inside array
      if (typeof spec[ i ] === 'object' || isArray(spec[ i ])){
        ret[ i ] = __applySpecWithArity(
          spec[ i ], arity, cache
        )
      }
      // apply spec to the key
      if (typeof spec[ i ] === 'function'){
        ret[ i ] = spec[ i ](...cache)
      }
    }

    return ret
  }

  // handle spec as Object
  const ret = {}
  // apply callbacks to each property in the spec object
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    // apply the spec recursively
    if (typeof spec[ key ] === 'object'){
      ret[ key ] = __applySpecWithArity(
        spec[ key ], arity, cache
      )
      continue
    }

    // apply spec to the key
    if (typeof spec[ key ] === 'function'){
      ret[ key ] = spec[ key ](...cache)
    }
  }

  return ret
}

export function applySpec(spec, ...args){
  // get the highest arity spec function, cache the result and pass to __applySpecWithArity
  const arity = __findHighestArity(spec)

  if (arity === 0){
    return () => ({})
  }
  const toReturn = __applySpecWithArity(
    spec, arity, args
  )

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { applySpec as applySpecRamda, nAry } from 'ramda'

import {
  add,
  always,
  compose,
  dec,
  inc,
  map,
  path,
  prop,
  T,
} from '../rambda.js'
import { applySpec } from './applySpec.js'

test('different than Ramda when bad spec', () => {
  const result = applySpec({ sum : { a : 1 } })(1, 2)
  const ramdaResult = applySpecRamda({ sum : { a : 1 } })(1, 2)
  expect(result).toEqual({})
  expect(ramdaResult).toEqual({ sum : { a : {} } })
})

test('works with empty spec', () => {
  expect(applySpec({})()).toEqual({})
  expect(applySpec([])(1, 2)).toEqual({})
  expect(applySpec(null)(1, 2)).toEqual({})
})

test('works with unary functions', () => {
  const result = applySpec({
    v : inc,
    u : dec,
  })(1)
  const expected = {
    v : 2,
    u : 0,
  }
  expect(result).toEqual(expected)
})

test('works with binary functions', () => {
  const result = applySpec({ sum : add })(1, 2)
  expect(result).toEqual({ sum : 3 })
})

test('works with nested specs', () => {
  const result = applySpec({
    unnested : always(0),
    nested   : { sum : add },
  })(1, 2)
  const expected = {
    unnested : 0,
    nested   : { sum : 3 },
  }
  expect(result).toEqual(expected)
})

test('works with arrays of nested specs', () => {
  const result = applySpec({
    unnested : always(0),
    nested   : [ { sum : add } ],
  })(1, 2)

  expect(result).toEqual({
    unnested : 0,
    nested   : [ { sum : 3 } ],
  })
})

test('works with arrays of spec objects', () => {
  const result = applySpec([ { sum : add } ])(1, 2)

  expect(result).toEqual([ { sum : 3 } ])
})

test('works with arrays of functions', () => {
  const result = applySpec([ map(prop('a')), map(prop('b')) ])([
    {
      a : 'a1',
      b : 'b1',
    },
    {
      a : 'a2',
      b : 'b2',
    },
  ])
  const expected = [
    [ 'a1', 'a2' ],
    [ 'b1', 'b2' ],
  ]
  expect(result).toEqual(expected)
})

test('works with a spec defining a map key', () => {
  expect(applySpec({ map : prop('a') })({ a : 1 })).toEqual({ map : 1 })
})

test('cannot retains the highest arity', () => {
  const f = applySpec({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  const fRamda = applySpecRamda({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  expect(f).toHaveLength(0)
  expect(fRamda).toHaveLength(5)
})

test('returns a curried function', () => {
  expect(applySpec({ sum : add })(1)(2)).toEqual({ sum : 3 })
})

// Additional tests
// ============================================
test('arity', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
  }
  expect(applySpec(
    spec, 1, 2, 3
  )).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
  })
})

test('arity over 5 arguments', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(
    spec, 1, 2, 3, 4, 5
  )).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
    four  : 10,
    five  : 15,
  })
})

test('curried', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
  }
  expect(applySpec(spec)(1)(2)(3)).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
  })
})

test('curried over 5 arguments', () => {
  const spec = {
    one   : x1 => x1,
    two   : (x1, x2) => x1 + x2,
    three : (
      x1, x2, x3
    ) => x1 + x2 + x3,
    four : (
      x1, x2, x3, x4
    ) => x1 + x2 + x3 + x4,
    five : (
      x1, x2, x3, x4, x5
    ) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec)(1)(2)(3)(4)(5)).toEqual({
    one   : 1,
    two   : 3,
    three : 6,
    four  : 10,
    five  : 15,
  })
})

test('undefined property', () => {
  const spec = { prop : path([ 'property', 'doesnt', 'exist' ]) }
  expect(applySpec(spec, {})).toEqual({ prop : undefined })
})

test('restructure json object', () => {
  const spec = {
    id          : path('user.id'),
    name        : path('user.firstname'),
    profile     : path('user.profile'),
    doesntExist : path('user.profile.doesntExist'),
    info        : { views : compose(inc, prop('views')) },
    type        : always('playa'),
  }

  const data = {
    user : {
      id        : 1337,
      firstname : 'john',
      lastname  : 'shaft',
      profile   : 'shaft69',
    },
    views : 42,
  }

  expect(applySpec(spec, data)).toEqual({
    id          : 1337,
    name        : 'john',
    profile     : 'shaft69',
    doesntExist : undefined,
    info        : { views : 43 },
    type        : 'playa',
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applySpec)

### applyTo

```typescript

applyTo<T, U>(el: T, fn: (t: T) => U): U
```

```javascript
const result = R.applyTo(
  1,
  x => x + 1
)
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.applyTo(%0A%20%201%2C%0A%20%20x%20%3D%3E%20x%20%2B%201%0A)%0A%2F%2F%20%3D%3E%202">Try this <strong>R.applyTo</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
applyTo<T, U>(el: T, fn: (t: T) => U): U;
applyTo<T>(el: T): <U>(fn: (t: T) => U) => U;
```

</details>

<details>

<summary><strong>R.applyTo</strong> source</summary>

```javascript
export function applyTo(input, fn){
  if (arguments.length === 1){
    return _fn => applyTo(input, _fn)
  }

  return fn(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { applyTo } from './applyTo.js'
import { multiply } from './multiply.js'

test('happy', () => {
  expect(applyTo(21, multiply(2))).toBe(42)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applyTo)

### ascend

```typescript

ascend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering
```

```javascript
const result = R.sort(R.descend(x => x), [2, 1])
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sort(R.descend(x%20%3D%3E%20x)%2C%20%5B2%2C%201%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.ascend</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ascend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;
ascend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;
```

</details>

<details>

<summary><strong>R.ascend</strong> source</summary>

```javascript
export function createCompareFunction(
  a, b, winner, loser
){
  if (a === b) return 0

  return a < b ? winner : loser
}

export function ascend(
  getFunction, a, b
){
  if (arguments.length === 1){
    return (_a, _b) => ascend(
      getFunction, _a, _b
    )
  }
  const aValue = getFunction(a)
  const bValue = getFunction(b)

  return createCompareFunction(
    aValue, bValue, -1, 1
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'

const people = [
  {
    name : 'Emma',
    age  : 70,
  },
  {
    name : 'Peter',
    age  : 78,
  },
  {
    name : 'Mikhail',
    age  : 62,
  },
]

test('ascend', () => {
  const result = sort(ascend(x => x?.age),
    people)
  const expected = [
    {
      name : 'Mikhail',
      age  : 62,
    },
    {
      name : 'Emma',
      age  : 70,
    },
    {
      name : 'Peter',
      age  : 78,
    },
  ]
  expect(result).toEqual(expected)
})

test('descend', () => {
  const result = sort(descend(x => x?.age),
    people)
  const expected = [
    {
      name : 'Peter',
      age  : 78,
    },
    {
      name : 'Emma',
      age  : 70,
    },
    {
      name : 'Mikhail',
      age  : 62,
    },
  ]

  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ascend)

### assoc

```typescript

assoc<K extends PropertyKey>(prop: K): {
  <T>(val: T): <U extends Record<K, T>>(obj: U) => U
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

> :boom: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try this <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
assoc<K extends PropertyKey>(prop: K): {
  <T>(val: T): <U extends Record<K, T>>(obj: U) => U;
  <U extends Record<K, T>, T>(val: T, obj: U): U;
};
assoc<T, K extends PropertyKey>(prop: K, val: T): {
  <U>(obj: U): U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
};
assoc<U, K extends keyof U, T extends U[K]>(prop: K, val: T, obj: U): U;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
import { curry } from './curry.js'

export function assocFn(
  prop, newValue, obj
){
  return Object.assign(
    {}, obj, { [ prop ] : newValue }
  )
}

export const assoc = curry(assocFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc.js'

test('adds a key to an empty object', () => {
  expect(assoc(
    'a', 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assoc(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assoc(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assoc(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assoc(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assoc(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assoc)

### assocPath

```typescript

assocPath<Output>(path: Path, newValue: any, obj: object): Output
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

```javascript
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

const result = R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'b.c'%0Aconst%20newValue%20%3D%202%0Aconst%20obj%20%3D%20%7B%20a%3A%201%20%7D%0A%0Aconst%20result%20%3D%20R.assocPath(path%2C%20newValue%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20a%20%3A%201%2C%20b%20%3A%20%7B%20c%20%3A%202%20%7D%7D">Try this <strong>R.assocPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
assocPath<Output>(path: Path, newValue: any, obj: object): Output;
assocPath<Output>(path: Path, newValue: any): (obj: object) => Output;
assocPath<Output>(path: Path): (newValue: any) => (obj: object) => Output;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { createPath } from './_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { isIndexInteger } from './_internals/isInteger.js'
import { assocFn } from './assoc.js'
import { curry } from './curry.js'

export function assocPathFn(
  path, newValue, input
){
  const pathArrValue = createPath(path)
  if (pathArrValue.length === 0) return newValue

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition =
      typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextInput = condition ?
      isIndexInteger(pathArrValue[ 1 ]) ?
        [] :
        {} :
      input[ index ]

    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextInput
    )
  }

  if (isIndexInteger(index) && isArray(input)){
    const arr = cloneList(input)
    arr[ index ] = newValue

    return arr
  }

  return assocFn(
    index, newValue, input
  )
}

export const assocPath = curry(assocPathFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assocPathFn } from './assocPath.js'

test('happy', () => {
  const path = 'a.c.1'
  const input = {
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  }
  assocPathFn(
    path, 3, input
  )
  expect(input).toEqual({
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  })
})

test('string can be used as path input', () => {
  const testObj = {
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
  }
  const result1 = assocPathFn(
    [ 'a', 0, 'b' ], 10, testObj
  )
  const result2 = assocPathFn(
    'a.0.b', 10, testObj
  )

  const expected = {
    a : [ { b : 10 }, { b : 2 } ],
    d : 3,
  }
  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
})

test('difference with ramda - doesn\'t overwrite primitive values with keys in the path', () => {
  const obj = { a : 'str' }
  const result = assocPathFn(
    [ 'a', 'b' ], 42, obj
  )

  expect(result).toEqual({
    a : {
      0 : 's',
      1 : 't',
      2 : 'r',
      b : 42,
    },
  })
})

test('adds a key to an empty object', () => {
  expect(assocPathFn(
    [ 'a' ], 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPathFn(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPathFn(
    'b.c', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested key to a nested non-empty object', () => {
  expect(assocPathFn('b.d',
    3,{
    a : 1,
    b : { c : 2 },
  })).toEqual({
    a : 1,
    b : {
      c : 2,
      d : 3,
    },
  })
})

test('adds a key to a non-empty object', () => {
  expect(assocPathFn('b', 2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPathFn('b.c', 2, { a : 1 })).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('changes an existing key', () => {
  expect(assocPathFn(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPathFn(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assocPathFn(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assocPathFn(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assocPathFn(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assocPathFn(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

test('empty array as path', () => {
  const result = assocPathFn(
    [], 3, {
      a : 1,
      b : 2,
    }
  )
  expect(result).toBe(3)
})

test('happy', () => {
  const expected = { foo : { bar : { baz : 42 } } }
  const result = assocPathFn(
    [ 'foo', 'bar', 'baz' ], 42, { foo : null }
  )
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assocPath)

### binary

```typescript

binary<T extends (...arg: any[]) => any>(fn: T): (...args: any[]) => ReturnType<T>
```

```javascript
const result = R.binary(
  (a, b, c) => a + b + c,
)(1, 2, 3, 4)
// => 3
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.binary(%0A%20%20(a%2C%20b%2C%20c)%20%3D%3E%20a%20%2B%20b%20%2B%20c%2C%0A)(1%2C%202%2C%203%2C%204)%0A%2F%2F%20%3D%3E%203">Try this <strong>R.binary</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
binary<T extends (...arg: any[]) => any>(fn: T): (...args: any[]) => ReturnType<T>;
```

</details>

<details>

<summary><strong>R.binary</strong> source</summary>

```javascript
export function binary(fn){
  if (fn.length <= 2) return fn

  return (a, b) => fn(a, b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { binary } from './binary.js'

test('happy', () => {
  const result = binary(function (
    x, y, z
  ){
    expect(arguments).toHaveLength(2)
    expect(z).toBeUndefined()
    expect(x).toBe(10)
    expect(y).toBe(20)

    return x + y
  })(
    10, 20, 30
  )
  expect(result).toBe(30)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#binary)

### bind

```typescript

bind<F extends AnyFunction, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>
```

Creates a function that is bound to a context.

> :boom: R.bind does not provide the additional argument-binding capabilities of `Function.prototype.bind`.

```javascript
const log = R.bind(console.log, console)
const result = R.pipe(
  R.assoc('a', 2), 
  R.tap(log), 
  R.assoc('a', 3)
)({a: 1}); 
// => result - `{a: 3}`
// => console log - `{a: 2}`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20log%20%3D%20R.bind(console.log%2C%20console)%0Aconst%20result%20%3D%20R.pipe(%0A%20%20R.assoc('a'%2C%202)%2C%20%0A%20%20R.tap(log)%2C%20%0A%20%20R.assoc('a'%2C%203)%0A)(%7Ba%3A%201%7D)%3B%20%0A%2F%2F%20%3D%3E%20result%20-%20%60%7Ba%3A%203%7D%60%0A%2F%2F%20%3D%3E%20console%20log%20-%20%60%7Ba%3A%202%7D%60">Try this <strong>R.bind</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
bind<F extends AnyFunction, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>;
bind<F extends AnyFunction, T>(fn: F): (thisObj: T) => (...args: Parameters<F>) => ReturnType<F>;
```

</details>

<details>

<summary><strong>R.bind</strong> source</summary>

```javascript
import { curryN } from './curryN.js'

export function bind(fn, thisObj){
  if (arguments.length === 1){
    return _thisObj => bind(fn, _thisObj)
  }

  return curryN(fn.length, (...args) => fn.apply(thisObj, args))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { bind } from './bind.js'

function Foo(x){
  this.x = x
}
function add(x){
  return this.x + x
}
function Bar(x, y){
  this.x = x
  this.y = y
}
Bar.prototype = new Foo()
Bar.prototype.getX = function (){
  return 'prototype getX'
}

test('returns a function', () => {
  expect(typeof bind(add)(Foo)).toBe('function')
})

test('returns a function bound to the specified context object', () => {
  const f = new Foo(12)
  function isFoo(){
    return this instanceof Foo
  }
  const isFooBound = bind(isFoo, f)
  expect(isFoo()).toBeFalse()
  expect(isFooBound()).toBeTrue()
})

test('works with built-in types', () => {
  const abc = bind(String.prototype.toLowerCase, 'ABCDEFG')
  expect(typeof abc).toBe('function')
  expect(abc()).toBe('abcdefg')
})

test('works with user-defined types', () => {
  const f = new Foo(12)
  function getX(){
    return this.x
  }
  const getXFooBound = bind(getX, f)
  expect(getXFooBound()).toBe(12)
})

test('works with plain objects', () => {
  const pojso = { x : 100 }
  function incThis(){
    return this.x + 1
  }
  const incPojso = bind(incThis, pojso)
  expect(typeof incPojso).toBe('function')
  expect(incPojso()).toBe(101)
})

test('does not interfere with existing object methods', () => {
  const b = new Bar('a', 'b')
  function getX(){
    return this.x
  }
  const getXBarBound = bind(getX, b)
  expect(b.getX()).toBe('prototype getX')
  expect(getXBarBound()).toBe('a')
})

test('preserves arity', () => {
  const f0 = function (){
    return 0
  }
  const f1 = function (a){
    return a
  }
  const f2 = function (a, b){
    return a + b
  }
  const f3 = function (
    a, b, c
  ){
    return a + b + c
  }

  expect(bind(f0, {})).toHaveLength(0)
  expect(bind(f1, {})).toHaveLength(1)
  expect(bind(f2, {})).toHaveLength(2)
  expect(bind(f3, {})).toHaveLength(3)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#bind)

### both

```typescript

both(pred1: Pred, pred2: Pred): Pred
```

It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(firstCondition, secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstCondition%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondCondition%20%3D%20x%20%3D%3E%20x%20%3C%2020%0Aconst%20fn%20%3D%20R.both(firstCondition%2C%20secondCondition)%0A%0Aconst%20result%20%3D%20%5Bfn(15)%2C%20fn(30)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.both</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
both(pred1: Pred, pred2: Pred): Pred;
both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
both(pred1: Pred): (pred2: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.both</strong> source</summary>

```javascript
export function both(f, g){
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { both } from './both.js'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalse()
})

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTrue()
})

test('with multiple inputs', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const total20 = function (
    a, b, c
  ){
    return a + b + c === 20
  }
  const fn = both(between, total20)
  expect(fn(
    5, 7, 8
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function (){
    return false
  }
  const Z = function (){
    effect = 'Z got evaluated'
  }
  both(F, Z)()

  expect(effect).toBe('not evaluated')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#both)

### call

```typescript

call<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>
```

```javascript
const result = R.call(
  (a, b) => a + b,
  1,
  2
)
// => 3
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.call(%0A%20%20(a%2C%20b)%20%3D%3E%20a%20%2B%20b%2C%0A%20%201%2C%0A%20%202%0A)%0A%2F%2F%20%3D%3E%203">Try this <strong>R.call</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
call<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>;
```

</details>

<details>

<summary><strong>R.call</strong> source</summary>

```javascript
export const call = (fn, ...inputs) => fn(...inputs)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { bind } from './bind.js'
import { call } from './call.js'

test('happy', () => {
  expect(call(
    Math.max, 1, 2, 3, -99, 42, 6, 7
  )).toBe(42)
})

test('accepts one or more arguments', () => {
  const fn = function (){
    return arguments.length
  }
  expect(call(fn)).toBe(0)
  expect(call(fn, 'x')).toBe(1)
  expect(call(
    fn, 'x', 'y'
  )).toBe(2)
  expect(call(
    fn, 'x', 'y', 'z'
  )).toBe(3)
})

test('provides no way to specify context', () => {
  var obj = {
    method (){
      return this === obj
    },
  }
  expect(call(obj.method)).toBe(false)
  expect(call(bind(obj.method, obj))).toBe(true)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#call)

### chain

```typescript

chain<T, U>(fn: (n: T) => U[], list: T[]): U[]
```

The method is also known as `flatMap`.

```javascript
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = chain(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20duplicate%20%3D%20n%20%3D%3E%20%5B%20n%2C%20n%20%5D%0Aconst%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0A%0Aconst%20result%20%3D%20chain(duplicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%201%2C%201%2C%202%2C%202%2C%203%2C%203%20%5D">Try this <strong>R.chain</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
chain<T, U>(fn: (n: T) => U[], list: T[]): U[];
chain<T, U>(fn: (n: T) => U[]): (list: T[]) => U[];
```

</details>

<details>

<summary><strong>R.chain</strong> source</summary>

```javascript
export function chain(fn, list){
  if (arguments.length === 1){
    return _list => chain(fn, _list)
  }

  return [].concat(...list.map(fn))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { chain as chainRamda } from 'ramda'

import { chain } from './chain.js'

const duplicate = n => [ n, n ]

test('happy', () => {
  const fn = x => [ x * 2 ]
  const list = [ 1, 2, 3 ]

  const result = chain(fn, list)

  expect(result).toEqual([ 2, 4, 6 ])
})

test('maps then flattens one level', () => {
  expect(chain(duplicate, [ 1, 2, 3 ])).toEqual([ 1, 1, 2, 2, 3, 3 ])
})

test('maps then flattens one level - curry', () => {
  expect(chain(duplicate)([ 1, 2, 3 ])).toEqual([ 1, 1, 2, 2, 3, 3 ])
})

test('flattens only one level', () => {
  const nest = n => [ [ n ] ]
  expect(chain(nest, [ 1, 2, 3 ])).toEqual([ [ 1 ], [ 2 ], [ 3 ] ])
})

test('can compose', () => {
  function dec(x){
    return [ x - 1 ]
  }
  function times2(x){
    return [ x * 2 ]
  }

  const mdouble = chain(times2)
  const mdec = chain(dec)
  expect(mdec(mdouble([ 10, 20, 30 ]))).toEqual([ 19, 39, 59 ])
})

test('@types/ramda broken test', () => {
  const score = {
    maths   : 90,
    physics : 80,
  }

  const calculateTotal = score => {
    const { maths, physics } = score

    return maths + physics
  }

  const assocTotalToScore = (total, score) => ({
    ...score,
    total,
  })

  const calculateAndAssocTotalToScore = chainRamda(assocTotalToScore,
    calculateTotal)
  expect(() =>
    calculateAndAssocTotalToScore(score)).toThrowErrorMatchingInlineSnapshot('"fn(...) is not a function"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#chain)

### clamp

```typescript

clamp(min: number, max: number, input: number): number
```

Restrict a number `input` to be within `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

```javascript
const result = [
  R.clamp(0, 10, 5), 
  R.clamp(0, 10, -1),
  R.clamp(0, 10, 11)
]
// => [5, 0, 10]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.clamp(0%2C%2010%2C%205)%2C%20%0A%20%20R.clamp(0%2C%2010%2C%20-1)%2C%0A%20%20R.clamp(0%2C%2010%2C%2011)%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%200%2C%2010%5D">Try this <strong>R.clamp</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
clamp(min: number, max: number, input: number): number;
clamp(min: number, max: number): (input: number) => number;
```

</details>

<details>

<summary><strong>R.clamp</strong> source</summary>

```javascript
import { curry } from './curry.js'

function clampFn(
  min, max, input
){
  if (min > max){
    throw new Error('min must not be greater than max in clamp(min, max, value)')
  }
  if (input >= min && input <= max) return input

  if (input > max) return max
  if (input < min) return min
}

export const clamp = curry(clampFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { clamp } from './clamp.js'

test('when min is greater than max', () => {
  expect(() => clamp(
    -5, -10, 5
  )).toThrowErrorMatchingInlineSnapshot('"min must not be greater than max in clamp(min, max, value)"')
})

test('rambda specs', () => {
  expect(clamp(
    1, 10, 0
  )).toBe(1)
  expect(clamp(
    3, 12, 1
  )).toBe(3)
  expect(clamp(
    -15, 3, -100
  )).toBe(-15)
  expect(clamp(
    1, 10, 20
  )).toBe(10)
  expect(clamp(
    3, 12, 23
  )).toBe(12)
  expect(clamp(
    -15, 3, 16
  )).toBe(3)
  expect(clamp(
    1, 10, 4
  )).toBe(4)
  expect(clamp(
    3, 12, 6
  )).toBe(6)
  expect(clamp(
    -15, 3, 0
  )).toBe(0)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clamp)

### clone

```typescript

clone<T>(input: T): T
```

It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

> :boom: It doesn't work with very specific types, such as MongoDB's ObjectId.

```javascript
const objects = [{a: 1}, {b: 2}];
const objectsClone = R.clone(objects);

const result = [
  R.equals(objects, objectsClone),
  R.equals(objects[0], objectsClone[0]),
] // => [ true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20objects%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Bb%3A%202%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.equals(objects%2C%20objectsClone)%2C%0A%20%20R.equals(objects%5B0%5D%2C%20objectsClone%5B0%5D)%2C%0A%5D%20%2F%2F%20%3D%3E%20%5B%20true%2C%20true%20%5D">Try this <strong>R.clone</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
clone<T>(input: T): T;
clone<T>(input: T[]): T[];
```

</details>

<details>

<summary><strong>R.clone</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function clone(input){
  const out = isArray(input) ? Array(input.length) : {}
  if (input && input.getTime) return new Date(input.getTime())

  for (const key in input){
    const v = input[ key ]
    out[ key ] =
      typeof v === 'object' && v !== null ?
        v.getTime ?
          new Date(v.getTime()) :
          clone(v) :
        v
  }

  return out
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'
import { clone as cloneRamda } from 'ramda'

import {
  compareCombinations,
  EXTRA_BUILD_IN_OBJECTS,
  FALSY_VALUES,
} from './_internals/testUtils.js'
import { clone } from './clone.js'
import { equals } from './equals.js'

test('with array', () => {
  const arr = [
    {
      b : 2,
      c : 'foo',
      d : [ 1, 2, 3 ],
    },
    1,
    new Date(),
    null,
  ]
  expect(clone(arr)).toEqual(arr)
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(obj)).toEqual(obj)
})

test('with date', () => {
  const date = new Date(
    2014, 10, 14, 23, 59, 59, 999
  )

  const cloned = clone(date)
  assert.notStrictEqual(date, cloned)
  expect(cloned).toEqual(new Date(
    2014, 10, 14, 23, 59, 59, 999
  ))

  expect(cloned.getDay()).toBe(5)
})

test('with R.equals', () => {
  const objects = [ { a : 1 }, { b : 2 } ]

  const objectsClone = clone(objects)

  const result = [
    equals(objects, objectsClone),
    equals(objects[ 0 ], objectsClone[ 0 ]),
  ]
  expect(result).toEqual([ true, true ])
})

describe('brute force', () => {
  const possibleInputs = [ ...FALSY_VALUES, ...EXTRA_BUILD_IN_OBJECTS ]
  compareCombinations({
    fn         : clone,
    fnRamda    : cloneRamda,
    firstInput : possibleInputs,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 15,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 15,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clone)

### collectBy

```typescript

collectBy<T, K extends PropertyKey>(keyFn: (value: T) => K, list: T[]): T[][]
```

```javascript
const result = R.collectBy(
  x => x % 2,
  [1, 2, 3, 4]
)
// => [[2, 4], [1, 3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.collectBy(%0A%20%20x%20%3D%3E%20x%20%25%202%2C%0A%20%20%5B1%2C%202%2C%203%2C%204%5D%0A)%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%204%5D%2C%20%5B1%2C%203%5D%5D">Try this <strong>R.collectBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
collectBy<T, K extends PropertyKey>(keyFn: (value: T) => K, list: T[]): T[][];
collectBy<T, K extends PropertyKey>(keyFn: (value: T) => K): (list: T[]) => T[][];
```

</details>

<details>

<summary><strong>R.collectBy</strong> source</summary>

```javascript
import { reduce } from './reduce.js'

export function collectBy(fn, list){
  if (arguments.length === 1){
    return _list => collectBy(fn, _list)
  }

  const group = reduce(
    (o, x) => {
      const tag = fn(x)
      if (o[ tag ] === undefined){
        o[ tag ] = []
      }
      o[ tag ].push(x)

      return o
    },
    {},
    list
  )
  const newList = []
  for (const tag in group){
    newList.push(group[ tag ])
  }

  return newList
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import fc from 'fast-check'
import {
  all,
  compose,
  difference,
  equals,
  head,
  identity,
  is,
  isEmpty,
  length,
  uniq,
  unnest,
} from 'rambdax'

import { collectBy } from './collectBy.js'

test('returns a list of lists', () => {
  fc.assert(fc.property(fc.array(fc.nat()), xs => {
    const check = all(is(Array))
    const ys = collectBy(identity)(xs)

    return check(ys)
  }))
})

test('groups items but neither adds new ones nor removes any', () => {
  fc.assert(fc.property(fc.array(fc.nat()), xs => {
    const check = compose(
      isEmpty, difference(xs), unnest
    )
    const ys = collectBy(identity)(xs)

    return check(ys)
  }))
})

test('groups related items together', () => {
  fc.assert(fc.property(fc.array(fc.boolean()), xs => {
    const ys = collectBy(identity)(xs)
    const check = all(compose(
      equals(1), length, uniq
    ))

    return check(ys)
  }))
})

test('invokes the tag function for each item in the list', () => {
  fc.assert(fc.property(fc.array(fc.nat()), xs => {
    const id = jest.fn(x => 42)
    collectBy(id)(xs)
    const check = compose(isEmpty, difference(xs))

    return check(id.mock.calls.map(call => call[ 0 ]))
  }))
})

test('groups items according to the tag value', () => {
  fc.assert(fc.property(fc.array(fc.nat()), xs => {
    const ys = collectBy(x => 42)(xs)
    const check = compose(
      isEmpty, difference(xs), head
    )

    return isEmpty(xs) && isEmpty(ys) ? true : check(ys)
  }))
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#collectBy)

### comparator

```typescript

comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => Ordering
```

It returns a comparator function that can be used in `sort` method.

```javascript
const result = R.sort(
  R.comparator((a, b) => a.x < b.x),
  [{x: 2}, {x: 1}]
)
// => [{x: 1}, {x: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sort(%0A%20%20R.comparator((a%2C%20b)%20%3D%3E%20a.x%20%3C%20b.x)%2C%0A%20%20%5B%7Bx%3A%202%7D%2C%20%7Bx%3A%201%7D%5D%0A)%0A%2F%2F%20%3D%3E%20%5B%7Bx%3A%201%7D%2C%20%7Bx%3A%202%7D%5D">Try this <strong>R.comparator</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => Ordering;
```

</details>

<details>

<summary><strong>R.comparator</strong> source</summary>

```javascript
export function comparator(fn){
  return function (a, b){
    return fn(a, b) ? -1 : fn(b, a) ? 1 : 0
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { comparator } from './comparator.js'

test('happy', () => {
  expect([ 3, 1, 8, 1, 2, 5 ].sort(comparator((a, b) => a < b))).toEqual([
    1, 1, 2, 3, 5, 8,
  ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#comparator)

### complement

```typescript

complement<T extends any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean
```

It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

```javascript
const origin = x => x > 5
const inverted = complement(origin)

const result = [
  origin(7),
  inverted(7)
] => [ true, false ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20origin%20%3D%20x%20%3D%3E%20x%20%3E%205%0Aconst%20inverted%20%3D%20complement(origin)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20origin(7)%2C%0A%20%20inverted(7)%0A%5D%20%3D%3E%20%5B%20true%2C%20false%20%5D">Try this <strong>R.complement</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
complement<T extends any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean;
```

</details>

<details>

<summary><strong>R.complement</strong> source</summary>

```javascript
export function complement(fn){
  return (...input) => !fn(...input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { complement } from './complement.js'

test('happy', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTrue()
})

test('with multiple parameters', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const f = complement(between)
  expect(f(
    4, 5, 11
  )).toBeFalse()
  expect(f(
    12, 2, 6
  )).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### compose

```typescript

compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...func: [
      fnLast: (a: any) => TResult,
      ...func: Array<(a: any) => any>,
      f7: (a: R6) => R7,
      f6: (a: R5) => R6,
      f5: (a: R4) => R5,
      f4: (a: R3) => R4,
      f3: (a: R2) => R3,
      f2: (a: R1) => R2,
      f1: (...args: TArgs) => R1
  ]
): (...args: TArgs) => TResult
```

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.compose</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...func: [
      fnLast: (a: any) => TResult,
      ...func: Array<(a: any) => any>,
      f7: (a: R6) => R7,
      f6: (a: R5) => R6,
      f5: (a: R4) => R5,
      f4: (a: R3) => R4,
      f3: (a: R2) => R3,
      f2: (a: R1) => R2,
      f1: (...args: TArgs) => R1
  ]
): (...args: TArgs) => TResult;
compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R7;
compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R7;
compose<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R6;
compose<TArgs extends any[], R1, R2, R3, R4, R5>(
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R5;
compose<TArgs extends any[], R1, R2, R3, R4>(
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R4;
compose<TArgs extends any[], R1, R2, R3>(
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R3;
compose<TArgs extends any[], R1, R2>(
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2;
compose<TArgs extends any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;
```

</details>

<details>

<summary><strong>R.compose</strong> source</summary>

```javascript
import { pipe } from './pipe.js'

export function compose(){
  if (arguments.length === 0){
    throw new Error('compose requires at least one argument')
  }

  return pipe.apply(this, Array.prototype.slice.call(arguments, 0).reverse())
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose as composeRamda } from 'ramda'

import { add } from './add.js'
import { compose } from './compose.js'
import { filter } from './filter.js'
import { last } from './last.js'
import { map } from './map.js'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toBe(14)
})

test('can accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (list, limit) => filter(x => x > limit, list))([ 1, 2, 3, 4, false ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrowErrorMatchingInlineSnapshot('"compose requires at least one argument"')
})

test('ramda spec', () => {
  const f = function (
    a, b, c
  ){
    return [ a, b, c ]
  }
  const g = compose(f)

  expect(g(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
})

test('does return correct length of composed function', () => {
  expect(compose(
    map, map, map
  )).toHaveLength(2)
  expect(composeRamda(
    map, map, map
  )).toHaveLength(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compose)

### composeAsync

```typescript

composeAsync<TArg, R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...func: [
      fnLast: (a: any) => TResult,
      ...func: Array<(a: any) => any>,
      f7: (a: Awaited<R6>) => R7,
      f6: (a: Awaited<R5>) => R6,
      f5: (a: Awaited<R4>) => R5,
      f4: (a: Awaited<R3>) => R4,
      f3: (a: Awaited<R2>) => R3,
      f2: (a: Awaited<R1>) => R2,
      f1: (a: Awaited<TArg>) => R1
  ]
): (a: TArg | Promise<TArg>) => TResult
```

Asynchronous version of `R.compose`. `await`s the result of each function before passing it to the next. Returns a `Promise` of the result.

```javascript
const add = async x => {
  await R.delay(100)
  return x + 1
}
const multiply = async x => {
  await R.delay(100)
  return x * 2 
}

const result = await R.composeAsync(
  add,
  multiply
)(1)
// `result` resolves to `3`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20add%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%2B%201%0A%7D%0Aconst%20multiply%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20*%202%20%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.composeAsync(%0A%20%20add%2C%0A%20%20multiply%0A)(1)%0A%2F%2F%20%60result%60%20resolves%20to%20%603%60">Try this <strong>R.composeAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
composeAsync<TArg, R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...func: [
      fnLast: (a: any) => TResult,
      ...func: Array<(a: any) => any>,
      f7: (a: Awaited<R6>) => R7,
      f6: (a: Awaited<R5>) => R6,
      f5: (a: Awaited<R4>) => R5,
      f4: (a: Awaited<R3>) => R4,
      f3: (a: Awaited<R2>) => R3,
      f2: (a: Awaited<R1>) => R2,
      f1: (a: Awaited<TArg>) => R1
  ]
): (a: TArg | Promise<TArg>) => TResult;
composeAsync<TArg, R1, R2, R3, R4, R5, R6, R7, TResult>(
  f7: (a: Awaited<R6>) => R7,
  f6: (a: Awaited<R5>) => R6,
  f5: (a: Awaited<R4>) => R5,
  f4: (a: Awaited<R3>) => R4,
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R7;
composeAsync<TArg, R1, R2, R3, R4, R5, R6, R7>(
  f7: (a: Awaited<R6>) => R7,
  f6: (a: Awaited<R5>) => R6,
  f5: (a: Awaited<R4>) => R5,
  f4: (a: Awaited<R3>) => R4,
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R7;
composeAsync<TArg, R1, R2, R3, R4, R5, R6>(
  f6: (a: Awaited<R5>) => R6,
  f5: (a: Awaited<R4>) => R5,
  f4: (a: Awaited<R3>) => R4,
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R6;
composeAsync<TArg, R1, R2, R3, R4, R5>(
  f5: (a: Awaited<R4>) => R5,
  f4: (a: Awaited<R3>) => R4,
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R5;
composeAsync<TArg, R1, R2, R3, R4>(
  f4: (a: Awaited<R3>) => R4,
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R4;
composeAsync<TArg, R1, R2, R3>(
  f3: (a: Awaited<R2>) => R3,
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R3;
composeAsync<TArg, R1, R2>(
  f2: (a: Awaited<R1>) => R2,
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R2;
composeAsync<TArg, R1>(
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R1;
```

</details>

<details>

<summary><strong>R.composeAsync</strong> source</summary>

```javascript
import { pipeAsync } from './pipeAsync.js'

export function composeAsync(...fnList){
  return pipeAsync(...fnList.reverse())
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'

async function identity(x){
  await delay(100)

  return x
}

test('happy', async () => {
  const fn1 = async x => {
    await delay(100)

    return x.map(xx => xx + 1)
  }
  const fn2 = async x => {
    await delay(100)

    return x.map(xx => xx * 2)
  }
  const result = await composeAsync(fn1,
    fn2)(await Promise.all([ identity(1), identity(2), identity(3) ]))

  expect(result).toEqual([ 3, 5, 7 ])
})

const delayFn = ms =>
  new Promise(resolve => {
    resolve(ms + 1)
  })

test('with function returning promise', async () => {
  const result = await composeAsync(
    x => x,
    x => x + 1,
    delayFn,
    x => x
  )(1)

  expect(result).toBe(3)
})

test('throw error', async () => {
  const fn = async () => {
    await delay(1)
    JSON.parse('{foo')
  }

  let didThrow = false
  try {
    await composeAsync(fn, x => x + 1)(20)
  } catch (e){
    didThrow = true
  }

  expect(didThrow).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#composeAsync)

### composeWith

```typescript

composeWith<TArgs extends any[], TResult>(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
  fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>,
): (...args: TArgs) => TResult
```

```javascript
const result = R.composeWith(
  (fn, intermediateResult) => fn(intermediateResult),
  [
    R.map(x => x + 1),
    R.map(x => x * 2),
  ]
)([1, 2, 3])
// => [3, 5, 7]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.composeWith(%0A%20%20(fn%2C%20intermediateResult)%20%3D%3E%20fn(intermediateResult)%2C%0A%20%20%5B%0A%20%20%20%20R.map(x%20%3D%3E%20x%20%2B%201)%2C%0A%20%20%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20%5D%0A)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%205%2C%207%5D">Try this <strong>R.composeWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
composeWith<TArgs extends any[], TResult>(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
  fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>,
): (...args: TArgs) => TResult;
composeWith(
  transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any,
): <TArgs extends any[], TResult>(
  fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>,
) => (...args: TArgs) => TResult;
```

</details>

<details>

<summary><strong>R.composeWith</strong> source</summary>

```javascript
import { _arity } from './_internals/_arity.js'
import { head } from './head.js'
import { identity } from './identity.js'
import { reduce } from './reduce.js'
import { reverse } from './reverse.js'
import { tail } from './tail.js'

export function pipeWith(xf, list){
  if (list.length <= 0){
    return identity
  }

  const headList = head(list)
  const tailList = tail(list)

  return _arity(headList.length, function (){
    return reduce(
      function (result, f){
        return xf.call(
          this, f, result
        )
      },
      headList.apply(this, arguments),
      tailList
    )
  })
}

export function composeWith(xf, list){
  if (arguments.length === 1) return _list => composeWith(xf, _list)

  return pipeWith.apply(this, [ xf, reverse(list) ])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always, identity, inc, isNil, map, modulo, multiply } from 'rambdax'
import { composeWith as composeWithRamda, concat, flip, ifElse } from 'ramda'

import { composeWith } from './composeWith.js'

test('performs right-to-left function composition with function applying', () => {
  const f = composeWith((f, res) => f(res))([ map, multiply, parseInt ])

  expect(f).toHaveLength(2)
  expect(f('10')([ 1, 2, 3 ])).toEqual([ 10, 20, 30 ])
  expect(f('10', 2)([ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
})

test('performs right-to-left function while not nil result', () => {
  const isOdd = flip(modulo)(2)
  const composeWhenNotNil = composeWithRamda((f, res) =>
    isNil(res) ? null : f(res))

  const f = composeWhenNotNil([
    inc,
    ifElse(
      isOdd, identity, always(null)
    ),
    parseInt,
  ])
  expect(f).toHaveLength(2)
  expect(f('1')).toBe(2)
  expect(f('2')).toBeNull()
})

test('performs right-to-left function using promise chaining', () => {
  const then = function (f, p){
    return p.then(f)
  }
  const composeP = composeWithRamda(then)
  const toListPromise = function (a){
    return new Promise(res => {
      res([ a ])
    })
  }
  const doubleListPromise = function (a){
    return new Promise(res => {
      res(concat(a, a))
    })
  }
  const f = composeP([ doubleListPromise, toListPromise ])

  return f(1).then(res => {
    expect(res).toEqual([ 1, 1 ])
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#composeWith)

### concat

```typescript

concat<T>(x: T[], y: T[]): T[]
```

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20result%20%3D%20R.concat('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'foobar'">Try this <strong>R.concat</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
concat<T>(x: T[], y: T[]): T[];
concat<T>(x: T[]): (y: T[]) => T[];
concat(x: string, y: string): string;
concat(x: string): (y: string) => string;
```

</details>

<details>

<summary><strong>R.concat</strong> source</summary>

```javascript
export function concat(x, y){
  if (arguments.length === 1) return _y => concat(x, _y)

  return typeof x === 'string' ? `${ x }${ y }` : [ ...x, ...y ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { concat } from './concat.js'

test('happy', () => {
  const arr1 = [ 'a', 'b', 'c' ]
  const arr2 = [ 'd', 'e', 'f' ]

  const a = concat(arr1, arr2)
  const b = concat(arr1)(arr2)
  const expectedResult = [ 'a', 'b', 'c', 'd', 'e', 'f' ]

  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('with strings', () => {
  expect(concat('ABC', 'DEF')).toBe('ABCDEF')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### cond

```typescript

cond<T extends any[], R>(conditions: Array<CondPair<T, R>>): (...args: T) => R
```

It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.

```javascript
const fn = R.cond([
  [ x => x > 25, R.always('more than 25') ],
  [ x => x > 15, R.always('more than 15') ],
  [ R.T, x => `${x} is nothing special` ],
])

const result = [
  fn(30),
  fn(20),
  fn(10),
] 
// => ['more than 25', 'more than 15', '10 is nothing special']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.cond(%5B%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2025%2C%20R.always('more%20than%2025')%20%5D%2C%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2015%2C%20R.always('more%20than%2015')%20%5D%2C%0A%20%20%5B%20R.T%2C%20x%20%3D%3E%20%60%24%7Bx%7D%20is%20nothing%20special%60%20%5D%2C%0A%5D)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(30)%2C%0A%20%20fn(20)%2C%0A%20%20fn(10)%2C%0A%5D%20%0A%2F%2F%20%3D%3E%20%5B'more%20than%2025'%2C%20'more%20than%2015'%2C%20'10%20is%20nothing%20special'%5D">Try this <strong>R.cond</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
cond<T extends any[], R>(conditions: Array<CondPair<T, R>>): (...args: T) => R;
```

</details>

<details>

<summary><strong>R.cond</strong> source</summary>

```javascript
export function cond(conditions){
  return (...input) => {
    let done = false
    let toReturn
    conditions.forEach(([ predicate, getResult ]) => {
      if (!done && predicate(...input)){
        done = true
        toReturn = getResult(...input)
      }
    })

    return toReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always.js'
import { cond } from './cond.js'
import { equals } from './equals.js'
import { T } from './T.js'

test('returns a function', () => {
  expect(typeof cond([])).toBe('function')
})

test('returns a conditional function', () => {
  const fn = cond([
    [ equals(0), always('water freezes at 0°C') ],
    [ equals(100), always('water boils at 100°C') ],
    [
      T,
      function (temp){
        return 'nothing special happens at ' + temp + '°C'
      },
    ],
  ])
  expect(fn(0)).toBe('water freezes at 0°C')
  expect(fn(50)).toBe('nothing special happens at 50°C')
  expect(fn(100)).toBe('water boils at 100°C')
})

test('no winner', () => {
  const fn = cond([
    [ equals('foo'), always(1) ],
    [ equals('bar'), always(2) ],
  ])
  expect(fn('quux')).toBeUndefined()
})

test('predicates are tested in order', () => {
  const fn = cond([
    [ T, always('foo') ],
    [ T, always('bar') ],
    [ T, always('baz') ],
  ])
  expect(fn()).toBe('foo')
})

test('pass all inputs',() => {
  cond([ [()=> true, (...x) => {
    expect(x).toEqual([1,2,3])
  }] ])(1,2,3)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#cond)

### contains

```typescript

contains<T, U>(target: T, compareTo: U): boolean
```

It returns `true` if all of `target` object properties are `R.equal` to `compareTo` object.

```javascript
const result = R.contains({a:1}, {a:1, b:2})
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.contains(%7Ba%3A1%7D%2C%20%7Ba%3A1%2C%20b%3A2%7D)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.contains</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
contains<T, U>(target: T, compareTo: U): boolean;
contains<T, U>(target: T): (compareTo: U) => boolean;
```

</details>

<details>

<summary><strong>R.contains</strong> source</summary>

```javascript
import { equals } from './equals.js'

export function contains(target, toCompare){
  if (arguments.length === 1){
    return _toCompare => contains(target, _toCompare)
  }
  let willReturn = true

  Object.keys(target).forEach(prop => {
    if (!willReturn) return
    if (
      toCompare[ prop ] === undefined ||
      !equals(target[ prop ], toCompare[ prop ])
    ){
      willReturn = false
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { contains } from './contains.js'

const target = { a : 1 }
const compareTo = {
  a : 1,
  b : 2,
}

test('happy', () => {
  expect(contains(target, compareTo)).toBeTrue()
})

test('curried', () => {
  expect(contains({
    ...target,
    c : 3,
  },
  compareTo)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#contains)

### converge

```typescript

converge(after: ((...a: any[]) => any), fns: ((...x: any[]) => any)[]): (...y: any[]) => any
```

Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

> :boom: Explanation is taken from `Ramda` documentation

```javascript
const result = R.converge(R.multiply)([ R.add(1), R.add(3) ])(2)
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.converge(R.multiply)(%5B%20R.add(1)%2C%20R.add(3)%20%5D)(2)%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.converge</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
converge(after: ((...a: any[]) => any), fns: ((...x: any[]) => any)[]): (...y: any[]) => any;
```

</details>

<details>

<summary><strong>R.converge</strong> source</summary>

```javascript
import { curryN } from './curryN.js'
import { map } from './map.js'
import { max } from './max.js'
import { reduce } from './reduce.js'

export function converge(fn, transformers){
  if (arguments.length === 1)
    return _transformers => converge(fn, _transformers)

  const highestArity = reduce(
    (a, b) => max(a, b.length), 0, transformers
  )

  return curryN(highestArity, function (){
    return fn.apply(this,
      map(g => g.apply(this, arguments), transformers))
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { converge } from './converge.js'
import { multiply } from './multiply.js'

const f1 = converge(multiply, [ a => a + 1, a => a + 10 ])
const f2 = converge(multiply, [ a => a + 1, (a, b) => a + b + 10 ])
const f3 = converge(multiply, [ a => a + 1, (
  a, b, c
) => a + b + c + 10 ])

test('happy', () => {
  expect(f2(6, 7)).toBe(161)
})

test('passes the results of applying the arguments individually', () => {
  const result = converge(multiply)([ add(1), add(3) ])(2)
  expect(result).toBe(15)
})

test('returns a function with the length of the longest argument', () => {
  expect(f1).toHaveLength(1)
  expect(f2).toHaveLength(2)
  expect(f3).toHaveLength(3)
})

test('passes context to its functions', () => {
  const a = function (x){
    return this.f1(x)
  }
  const b = function (x){
    return this.f2(x)
  }
  const c = function (x, y){
    return this.f3(x, y)
  }
  const d = converge(c, [ a, b ])
  const context = {
    f1 : add(1),
    f2 : add(2),
    f3 : add,
  }
  expect(a.call(context, 1)).toBe(2)
  expect(b.call(context, 1)).toBe(3)
  expect(d.call(context, 1)).toBe(5)
})

test('works with empty functions list', () => {
  const fn = converge(function (){
    return arguments.length
  }, [])
  expect(fn).toHaveLength(0)
  expect(fn()).toBe(0)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#converge)

### count

```typescript

count<T>(predicate: (x: T) => boolean, list: T[]): number
```

It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.

```javascript
const list = [{a: 1}, 1, {a:2}]
const result = R.count(x => x.a !== undefined, list)
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%201%2C%20%7Ba%3A2%7D%5D%0Aconst%20result%20%3D%20R.count(x%20%3D%3E%20x.a%20!%3D%3D%20undefined%2C%20list)%0A%2F%2F%20%3D%3E%202">Try this <strong>R.count</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
count<T>(predicate: (x: T) => boolean, list: T[]): number;
count<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.count</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function count(predicate, list){
  if (arguments.length === 1){
    return _list => count(predicate, _list)
  }
  if (!isArray(list)) return 0

  return list.filter(x => predicate(x)).length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { count as countRamda } from 'ramda'

import { count } from './count.js'

const predicate = x => x.a !== undefined

test('with empty list', () => {
  expect(count(predicate, [])).toBe(0)
})

test('happy', () => {
  const list = [ 1, 2, { a : 1 }, 3, { a : 1 } ]

  expect(count(predicate)(list)).toBe(2)
})

test('rambdax/issues/86', () => {
  const arr = [ true, false, true, false ]
  expect(count(Boolean, arr)).toBe(countRamda(Boolean, arr))
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#count)

### countBy

```typescript

countBy<T extends unknown>(transformFn: (x: T) => any, list: T[]): Record<string, number>
```

It counts elements in a list after each instance of the input list is passed through `transformFn` function.

```javascript
const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

const result = countBy(R.toLower, list)
const expected = { a: 2, b: 2, c: 2 }
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'A'%2C%20'b'%2C%20'B'%2C%20'c'%2C%20'C'%20%5D%0A%0Aconst%20result%20%3D%20countBy(R.toLower%2C%20list)%0Aconst%20expected%20%3D%20%7B%20a%3A%202%2C%20b%3A%202%2C%20c%3A%202%20%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.countBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
countBy<T extends unknown>(transformFn: (x: T) => any, list: T[]): Record<string, number>;
countBy<T extends unknown>(transformFn: (x: T) => any): (list: T[]) => Record<string, number>;
```

</details>

<details>

<summary><strong>R.countBy</strong> source</summary>

```javascript
export function countBy(fn, list){
  if (arguments.length === 1){
    return _list => countBy(fn, _list)
  }
  const willReturn = {}

  list.forEach(item => {
    const key = fn(item)
    if (!willReturn[ key ]){
      willReturn[ key ] = 1
    } else {
      willReturn[ key ]++
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { countBy } from './countBy.js'

const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

test('happy', () => {
  const result = countBy(x => x.toLowerCase(), list)
  expect(result).toEqual({
    a : 2,
    b : 2,
    c : 2,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#countBy)

### curry

```typescript

curry(fn: AnyFunction): (...a: any[]) => any
```

It expects a function as input and returns its curried version.

```javascript
const fn = (a, b, c) => a + b + c
const curried = R.curry(fn)
const sum = curried(1,2)

const result = sum(3) // => 6
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(a%2C%20b%2C%20c)%20%3D%3E%20a%20%2B%20b%20%2B%20c%0Aconst%20curried%20%3D%20R.curry(fn)%0Aconst%20sum%20%3D%20curried(1%2C2)%0A%0Aconst%20result%20%3D%20sum(3)%20%2F%2F%20%3D%3E%206">Try this <strong>R.curry</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
curry(fn: AnyFunction): (...a: any[]) => any;
```

</details>

<details>

<summary><strong>R.curry</strong> source</summary>

```javascript
export function curry(fn, args = []){
  return (..._args) =>
    (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([
      ...args,
      ..._args,
    ])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { curry } from './curry.js'

test('happy', () => {
  const addFourNumbers = (
    a, b, c, d
  ) => a + b + c + d
  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)

  expect(g(4)).toBe(10)
})

test('when called with more arguments', () => {
  const add = curry((n, n2) => n + n2)

  expect(add(
    1, 2, 3
  )).toBe(3)
})

test('when called with zero arguments', () => {
  const sub = curry((a, b) => a - b)
  const s0 = sub()

  expect(s0(5, 2)).toBe(3)
})

test('when called via multiple curry stages', () => {
  const join = curry((
    a, b, c, d
  ) => [ a, b, c, d ].join('-'))

  const stage1 = join('A')
  const stage2 = stage1('B', 'C')

  expect(stage2('D')).toBe('A-B-C-D')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curry)

### curryN

```typescript

curryN(length: number, fn: AnyFunction): (...a: any[]) => any
```

It returns a curried equivalent of the provided function, with the specified arity.

<details>

<summary>All TypeScript definitions</summary>

```typescript
curryN(length: number, fn: AnyFunction): (...a: any[]) => any;
```

</details>

<details>

<summary><strong>R.curryN</strong> source</summary>

```javascript
import { _arity } from './_internals/_arity.js'

function _curryN(
  n, cache, fn
){
  return function (){
    let ci = 0
    let ai = 0
    const cl = cache.length
    const al = arguments.length
    const args = new Array(cl + al)
    while (ci < cl){
      args[ ci ] = cache[ ci ]
      ci++
    }
    while (ai < al){
      args[ cl + ai ] = arguments[ ai ]
      ai++
    }
    const remaining = n - args.length

    return args.length >= n ?
      fn.apply(this, args) :
      _arity(remaining, _curryN(
        n, args, fn
      ))
  }
}

export function curryN(n, fn){
  if (arguments.length === 1) return _fn => curryN(n, _fn)

  if (n > 10){
    throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  }

  return _arity(n, _curryN(
    n, [], fn
  ))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { curryN } from './curryN.js'

function multiply(
  a, b, c, d, e, f, g, h, i, j, k, l
){
  if (l){
    return a * b * c * d * e * f * g * h * i * j * k * l
  }
  if (k){
    return a * b * c * d * e * f * g * h * i * j * k
  }
  if (j){
    return a * b * c * d * e * f * g * h * i * j
  }
  if (i){
    return a * b * c * d * e * f * g * h * i
  }
  if (h){
    return a * b * c * d * e * f * g * h
  }
  if (g){
    return a * b * c * d * e * f * g
  }
  if (f){
    return a * b * c * d * e * f
  }
  if (e){
    return a * b * c * d * e
  }

  return a * b * c
}

test('accepts an arity', () => {
  const curried = curryN(3, multiply)
  expect(curried(1)(2)(3)).toBe(6)
  expect(curried(1, 2)(3)).toBe(6)
  expect(curried(1)(2, 3)).toBe(6)
  expect(curried(
    1, 2, 3
  )).toBe(6)
})

test('can be partially applied', () => {
  const curry3 = curryN(3)
  const curried = curry3(multiply)
  expect(curried).toHaveLength(3)
  expect(curried(1)(2)(3)).toBe(6)
  expect(curried(1, 2)(3)).toBe(6)
  expect(curried(1)(2, 3)).toBe(6)
  expect(curried(
    1, 2, 3
  )).toBe(6)
})

test('preserves context', () => {
  const ctx = { x : 10 }
  const f = function (a, b){
    return a + b * this.x
  }
  const g = curryN(2, f)

  expect(g.call(
    ctx, 2, 4
  )).toBe(42)
  expect(g.call(ctx, 2).call(ctx, 4)).toBe(42)
})

test('number of arguments is 4', () => {
  const fn = curryN(4, multiply)
  expect(fn(
    1, 2, 3, 4
  )).toBe(6)
})

test('number of arguments is 5', () => {
  const fn = curryN(5, multiply)
  expect(fn(
    1, 2, 3, 4, 5
  )).toBe(120)
})

test('number of arguments is 6', () => {
  const fn = curryN(6, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6
  )).toBe(720)
})

test('number of arguments is 7', () => {
  const fn = curryN(7, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7
  )).toBe(5040)
})

test('number of arguments is 8', () => {
  const fn = curryN(8, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8
  )).toBe(40320)
})

test('number of arguments is 9', () => {
  const fn = curryN(9, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8, 9
  )).toBe(362880)
})

test('number of arguments is 10', () => {
  const fn = curryN(10, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  )).toBe(3628800)
})

test('number of arguments is 11', () => {
  expect(() => {
    const fn = curryN(11, multiply)
    fn(
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    )
  }).toThrowWithMessage(Error,
    'First argument to _arity must be a non-negative integer no greater than ten')
})

test('forwards extra arguments', () => {
  const createArray = function (){
    return Array.prototype.slice.call(arguments)
  }
  const fn = curryN(3, createArray)

  expect(fn(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
  expect(fn(
    1, 2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1, 2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1)(
    2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1)(2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curryN)

### debounce

```typescript

debounce<T, U>(fn: (input: T) => U, ms: number, immediate?: boolean): (input: T) => void
```

```javascript
let counter = 0
const increment = () => {
  counter++
}

const debounced = R.debounce(increment, 1000)

async function fn(){
  debounced()
  await R.delay(500)
  debounced()
  await R.delay(800)
  console.log(counter) // => 0

  await R.delay(1200)
  console.log(counter) // => 1

  return counter
}
const result = await fn()
// `result` resolves to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20increment%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20debounced%20%3D%20R.debounce(increment%2C%201000)%0A%0Aasync%20function%20fn()%7B%0A%20%20debounced()%0A%20%20await%20R.delay(500)%0A%20%20debounced()%0A%20%20await%20R.delay(800)%0A%20%20console.log(counter)%20%2F%2F%20%3D%3E%200%0A%0A%20%20await%20R.delay(1200)%0A%20%20console.log(counter)%20%2F%2F%20%3D%3E%201%0A%0A%20%20return%20counter%0A%7D%0Aconst%20result%20%3D%20await%20fn()%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try this <strong>R.debounce</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
debounce<T, U>(fn: (input: T) => U, ms: number, immediate?: boolean): (input: T) => void;
debounce<T, Q, U>(fn: (input1: T, input2: Q) => U, ms: number, immediate?: boolean): (input1: T, input2: Q) => void;
debounce<T, Q, Z, U>(fn: (input1: T, input2: Q, input3: Z) => U, ms: number, immediate?: boolean): (input1: T, input2: Q, input3: Z) => void;
```

</details>

<details>

<summary><strong>R.debounce</strong> source</summary>

```javascript
export function debounce(
  func, ms, immediate = false
){
  let timeout

  return function (...input){
    const later = function (){
      timeout = null
      if (!immediate){
        return func.apply(null, input)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, ms)
    if (callNow){
      return func.apply(null, input)
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { debounce } from './debounce.js'
import { delay } from './delay.js'

test('happy', async () => {
  let counter = 0
  let aHolder

  const inc = a => {
    aHolder = a
    counter++
  }
  const incWrapped = debounce(inc, 500)

  incWrapped(1)
  expect(counter).toBe(0)

  await delay(200)

  incWrapped(2)
  expect(counter).toBe(0)

  await delay(700)
  expect(counter).toBe(1)
  expect(aHolder).toBe(2)
})

test('immediate debounce', async () => {
  let counter = 0
  const inc = () => {
    counter++
  }

  const incWrapped = debounce(
    inc, 500, true
  )
  incWrapped()
  expect(counter).toBe(1)
  await delay(200)
  incWrapped()
  expect(counter).toBe(1)
  await delay(700)
  incWrapped()
  expect(counter).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#debounce)

### dec

```typescript

dec(x: number): number
```

It decrements a number.

```javascript
const result = R.dec(2) // => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dec(2)%20%2F%2F%20%3D%3E%201">Try this <strong>R.dec</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dec(x: number): number;
```

</details>

<details>

<summary><strong>R.dec</strong> source</summary>

```javascript
export const dec = x => x - 1
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dec } from './dec.js'

test('happy', () => {
  expect(dec(2)).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dec)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T, input: T | null | undefined): T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

> :boom: Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

```javascript
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// Important - emtpy string is not falsy value(same as Ramda)
R.defaultTo('foo', '') // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20Important%20-%20emtpy%20string%20is%20not%20falsy%20value(same%20as%20Ramda)%0Aconst%20result%20%3D%20R.defaultTo('foo'%2C%20'')%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.defaultTo</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T, input: T | null | undefined): T;
defaultTo<T>(defaultValue: T): (input: T | null | undefined) => T;
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function isFalsy(input){
  return (
    input === undefined || input === null || Number.isNaN(input) === true
  )
}

export function defaultTo(defaultArgument, input){
  if (arguments.length === 1){
    return _input => defaultTo(defaultArgument, _input)
  }

  return isFalsy(input) ? defaultArgument : input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { defaultTo } from './defaultTo.js'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toBe('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toBe('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toBe('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toBe('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toBeFalse()
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toBe('bar')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

### delay

```typescript

delay(ms: number): Promise<'RAMBDAX_DELAY'>
```

`setTimeout` as a promise that resolves to `R.DELAY` variable after `ms` milliseconds.

```javascript
const result = R.delay(1000)
// `result` resolves to `RAMBDAX_DELAY`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.delay(1000)%0A%2F%2F%20%60result%60%20resolves%20to%20%60RAMBDAX_DELAY%60">Try this <strong>R.delay</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
delay(ms: number): Promise<'RAMBDAX_DELAY'>;
```

</details>

<details>

<summary><strong>R.delay</strong> source</summary>

```javascript
export const DELAY = 'RAMBDAX_DELAY'

export function delay(ms){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DELAY)
    }, ms)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { DELAY, delay } from './delay.js'

test('usage with variables', async () => {
  await expect(delay(500)).resolves.toBe(DELAY)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#delay)

### descend

```typescript

descend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering
```

```javascript
const result = R.sort(R.descend(x => x), [1, 2])
// => [2, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sort(R.descend(x%20%3D%3E%20x)%2C%20%5B1%2C%202%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try this <strong>R.descend</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
descend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;
descend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;
```

</details>

<details>

<summary><strong>R.descend</strong> source</summary>

```javascript
import { createCompareFunction } from './ascend.js'

export function descend(
  getFunction, a, b
){
  if (arguments.length === 1){
    return (_a, _b) => descend(
      getFunction, _a, _b
    )
  }
  const aValue = getFunction(a)
  const bValue = getFunction(b)

  return createCompareFunction(
    aValue, bValue, 1, -1
  )
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#descend)

### difference

```typescript

difference<T>(a: T[], b: T[]): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

`R.equals` is used to determine equality.

```javascript
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = R.difference(a, b)
// => [ 1, 2 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20a%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20b%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20R.difference(a%2C%20b)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%20%5D">Try this <strong>R.difference</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
difference<T>(a: T[], b: T[]): T[];
difference<T>(a: T[]): (b: T[]) => T[];
```

</details>

<details>

<summary><strong>R.difference</strong> source</summary>

```javascript
import { includes } from './includes.js'
import { uniq } from './uniq.js'

export function difference(a, b){
  if (arguments.length === 1) return _b => difference(a, _b)

  return uniq(a).filter(aInstance => !includes(aInstance, b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { difference as differenceRamda } from 'ramda'

import { difference } from './difference.js'

test('difference', () => {
  const a = [ 1, 2, 3, 4 ]
  const b = [ 3, 4, 5, 6 ]
  expect(difference(a)(b)).toEqual([ 1, 2 ])

  expect(difference([], [])).toEqual([])
})

test('difference with objects', () => {
  const a = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const b = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(difference(a, b)).toEqual([ { id : 1 }, { id : 2 } ])
})

test('no duplicates in first list', () => {
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  expect(difference(M2, N2)).toEqual([ 1, 2 ])
})

test('should use R.equals', () => {
  expect(difference([ 1 ], [ 1 ])).toHaveLength(0)
  expect(differenceRamda([ NaN ], [ NaN ])).toHaveLength(0)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#difference)

### differenceWith

```typescript

differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
  list2: T2[],
): T1[]
```

```javascript
const result = R.differenceWith(
  (a, b) => a.x === b.x,
  [{x: 1}, {x: 2}],
  [{x: 1}, {x: 3}]
)
// => [{x: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.differenceWith(%0A%20%20(a%2C%20b)%20%3D%3E%20a.x%20%3D%3D%3D%20b.x%2C%0A%20%20%5B%7Bx%3A%201%7D%2C%20%7Bx%3A%202%7D%5D%2C%0A%20%20%5B%7Bx%3A%201%7D%2C%20%7Bx%3A%203%7D%5D%0A)%0A%2F%2F%20%3D%3E%20%5B%7Bx%3A%202%7D%5D">Try this <strong>R.differenceWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
  list2: T2[],
): T1[];
differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: T1[], list2: T2[]) => T1[];
differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];
```

</details>

<details>

<summary><strong>R.differenceWith</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { _indexOf } from './equals.js'

export function differenceWithFn(
  fn, a, b
){
  const willReturn = []
  const [ first, second ] = a.length >= b.length ? [ a, b ] : [ b, a ]

  first.forEach(item => {
    const hasItem = second.some(secondItem => fn(item, secondItem))
    if (!hasItem && _indexOf(item, willReturn) === -1){
      willReturn.push(item)
    }
  })

  return willReturn
}

export const differenceWith = curry(differenceWithFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { differenceWith } from './differenceWith.js';

const fn = (a, b) => a.x === b.x;

test('same length of list', () => {
	const result = differenceWith(fn, [{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }]);
	expect(result).toEqual([{ x: 2 }]);
});

test('different length of list', () => {
	const foo = [{ x: 1 }, { x: 2 }, { x: 3 }];
	const bar = [{ x: 3 }, { x: 4 }];
	const result = differenceWith(fn, foo, bar);
	expect(result).toEqual([{ x: 1 }, { x: 2 }]);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#differenceWith)

### dissoc

```typescript

dissoc<K extends PropertyKey>(prop: K): <U extends { [P in K]?: any}>(obj: string extends keyof U ? U : undefined extends U[K] ? U : never) => U
```

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
// => {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try this <strong>R.dissoc</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dissoc<K extends PropertyKey>(prop: K): <U extends { [P in K]?: any}>(obj: string extends keyof U ? U : undefined extends U[K] ? U : never) => U;
dissoc<U, K extends keyof U>(prop: string extends keyof U ? K : undefined extends U[K] ? K : never, obj: U): U;
```

</details>

<details>

<summary><strong>R.dissoc</strong> source</summary>

```javascript
export function dissoc(prop, obj){
  if (arguments.length === 1) return _obj => dissoc(prop, _obj)

  if (obj === null || obj === undefined) return {}

  const willReturn = {}
  for (const p in obj){
    willReturn[ p ] = obj[ p ]
  }
  delete willReturn[ prop ]

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dissoc } from './dissoc.js'

test('input is null or undefined', () => {
  expect(dissoc('b', null)).toEqual({})
  expect(dissoc('b', undefined)).toEqual({})
})

test('property exists curried', () => {
  expect(dissoc('b')({
    a : 1,
    b : 2,
  })).toEqual({ a : 1 })
})

test('property doesn\'t exists', () => {
  expect(dissoc('c', {
    a : 1,
    b : 2,
  })).toEqual({
    a : 1,
    b : 2,
  })
})

test('works with non-string property', () => {
  expect(dissoc(42, {
    a  : 1,
    42 : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(null, {
    a    : 1,
    null : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(undefined, {
    a         : 1,
    undefined : 2,
  })).toEqual({ a : 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height){
    this.width = width
    this.height = height
  }
  const area = Rectangle.prototype.area = function (){
    return this.width * this.height
  }
  const rect = new Rectangle(7, 6)

  expect(dissoc('area', rect)).toEqual({
    width  : 7,
    height : 6,
  })

  expect(dissoc('width', rect)).toEqual({
    height : 6,
    area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width  : 7,
    height : 6,
    area,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### dissocPath

```typescript

dissocPath<T>(path: Path, obj: any): T
```

```javascript
const result = R.dissocPath(['a', 'b'], {a: {b: 1, c: 2}})
// => {a: {c: 2}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissocPath(%5B'a'%2C%20'b'%5D%2C%20%7Ba%3A%20%7Bb%3A%201%2C%20c%3A%202%7D%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20%7Bc%3A%202%7D%7D">Try this <strong>R.dissocPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dissocPath<T>(path: Path, obj: any): T;
dissocPath<T>(path: Path): (obj: any) => T;
```

</details>

<details>

<summary><strong>R.dissocPath</strong> source</summary>

```javascript
import { createPath } from '../src/_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { isIndexInteger } from './_internals/isInteger.js'
import { omit } from './omit.js'
import { path } from './path.js'
import { removeIndex } from './removeIndex.js'
import { update } from './update.js'

export function dissocPath(pathInput, input){
  if (arguments.length === 1) return _obj => dissocPath(pathInput, _obj)

  const pathArrValue = createPath(pathInput)
  // this {...input} spread could be done to satisfy ramda specs, but this is done on so many places
  // TODO: add warning that Rambda simply returns input if path is empty
  if (pathArrValue.length === 0) return input

  const pathResult = path(pathArrValue, input)
  if (pathResult === undefined) return input

  const index = pathArrValue[ 0 ]
  const condition =
    typeof input !== 'object' ||
    input === null ||
    !input.hasOwnProperty(index)
  if (pathArrValue.length > 1){
    const nextInput = condition ?
      isIndexInteger(pathArrValue[ 1 ]) ?
        [] :
        {} :
      input[ index ]
    const nextPathInput = Array.prototype.slice.call(pathArrValue, 1)
    const intermediateResult = dissocPath(
      nextPathInput, nextInput, input
    )
    if (isArray(input)) return update(
      index, intermediateResult, input
    )

    return {
      ...input,
      [ index ] : intermediateResult,
    }
  }
  if (isArray(input)) return removeIndex(index, input)

  return omit([ index ], input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
const assert = require('assert')
import { eq } from './_internals/testUtils.js'
import { dissocPath } from './dissocPath.js'

const testInput = {
  a : {
    b : 1,
    c : 2,
    d : { e : 3 },
  },
  f : [
    { g : 4 },
    {
      h : 5,
      i : 6,
      j : {
        k : 7,
        l : 8,
      },
    },
  ],
  m : 9,
}

test('update array', () => {
  const expected = {
    a : {
      b : 1,
      c : 2,
      d : { e : 3 },
    },
    f : [
      { g : 4 },
      {
        h : 5,
        j : {
          k : 7,
          l : 8,
        },
      },
    ],
    m : 9,
  }
  const result = dissocPath('f.1.i', testInput)
  expect(result).toEqual(expected)
})

test('update object', () => {
  const result = dissocPath('a.b', testInput)
  const expected = {
    a : {
      c : 2,
      d : { e : 3 },
    },
    f : [
      { g : 4 },
      {
        h : 5,
        i : 6,
        j : {
          k : 7,
          l : 8,
        },
      },
    ],
    m : 9,
  }
  expect(result).toEqual(expected)
})

test('does not try to omit inner properties that do not exist', () => {
  const obj1 = {
    a : 1,
    b : {
      c : 2,
      d : 3,
    },
    e : 4,
    f : 5,
  }
  const obj2 = dissocPath([ 'x', 0, 'z' ], obj1)
  eq(obj2, {
    a : 1,
    b : {
      c : 2,
      d : 3,
    },
    e : 4,
    f : 5,
  })
  // Note: reference equality below!
  assert.strictEqual(obj2.a, obj1.a)
  assert.strictEqual(obj2.b, obj1.b)
  assert.strictEqual(obj2.f, obj1.f)
})

test('leaves an empty object when all properties omitted', () => {
  const obj1 = {
    a : 1,
    b : { c : 2 },
    d : 3,
  }
  const obj2 = dissocPath([ 'b', 'c' ], obj1)
  eq(obj2, {
    a : 1,
    b : {},
    d : 3,
  })
})

test('leaves an empty array when all indexes are omitted', () => {
  const obj1 = {
    a : 1,
    b : [ 2 ],
    d : 3,
  }
  const obj2 = dissocPath([ 'b', 0 ], obj1)
  eq(obj2, {
    a : 1,
    b : [],
    d : 3,
  })
})

test('accepts empty path', () => {
  eq(dissocPath([], {
    a : 1,
    b : 2,
  }),
  {
    a : 1,
    b : 2,
  })
})

test('allow integer to be used as key for object', () => {
  eq(dissocPath([ 42 ], {
    42 : 3,
    a  : 1,
    b  : 2,
  }),
  {
    a : 1,
    b : 2,
  })
})

test('support remove null/undefined value path', () => {
  eq(dissocPath([ 'c', 'd' ], {
    a : 1,
    b : 2,
    c : null,
  }),
  {
    a : 1,
    b : 2,
    c : null,
  })
  eq(dissocPath([ 'c', 'd' ], {
    a : 1,
    b : 2,
    c : undefined,
  }),
  {
    a : 1,
    b : 2,
    c : undefined,
  })

  const obj1 = {
    a : 1,
    b : 2,
  }
  const obj2 = dissocPath([ 'c', 'd' ], obj1)

  eq(obj2, obj1)

  // NOTE: commented out on purpose
  // assert.notStrictEqual(obj2, obj1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissocPath)

### divide

```typescript

divide(x: number, y: number): number
```

```javascript
R.divide(71, 100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71%2C%20100)%20%2F%2F%20%3D%3E%200.71">Try this <strong>R.divide</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
divide(x: number, y: number): number;
divide(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.divide</strong> source</summary>

```javascript
export function divide(a, b){
  if (arguments.length === 1) return _b => divide(a, _b)

  return a / b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { divide } from './divide.js'

test('happy', () => {
  expect(divide(71, 100)).toBe(0.71)
  expect(divide(71)(100)).toBe(0.71)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#divide)

### drop

```typescript

drop<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from beginning of list or string `input`.

```javascript
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.drop(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D%0Aconst%20result%20%3D%20R.drop(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'obar'">Try this <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
drop<T>(howMany: number, input: T[]): T[];
drop(howMany: number, input: string): string;
drop<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.drop</strong> source</summary>

```javascript
export function drop(howManyToDrop, listOrString){
  if (arguments.length === 1) return _list => drop(howManyToDrop, _list)

  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { drop } from './drop.js'

test('with array', () => {
  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])
  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toBe('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(drop(0, xs), xs)
  assert.notStrictEqual(drop(-1, xs), xs)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from the end of list or string `input`.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0Aconst%20result%20%3D%20R.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try this <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropLast<T>(howMany: number, input: T[]): T[];
dropLast(howMany: number, input: string): string;
dropLast<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.dropLast</strong> source</summary>

```javascript
export function dropLast(howManyToDrop, listOrString){
  if (arguments.length === 1){
    return _listOrString => dropLast(howManyToDrop, _listOrString)
  }

  return howManyToDrop > 0 ?
    listOrString.slice(0, -howManyToDrop) :
    listOrString.slice()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { dropLast } from './dropLast.js'

test('with array', () => {
  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])
  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(dropLast(3, 'rambda')).toBe('ram')
})

test('with non-positive count', () => {
  expect(dropLast(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(dropLast(0, xs), xs)
  assert.notStrictEqual(dropLast(-1, xs), xs)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLast)

### dropLastWhile

```typescript

dropLastWhile(predicate: (x: string) => boolean, iterable: string): string
```

```javascript
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate, list);
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%3D%203%0A%0Aconst%20result%20%3D%20dropLastWhile(predicate%2C%20list)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.dropLastWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropLastWhile(predicate: (x: string) => boolean, iterable: string): string;
dropLastWhile(predicate: (x: string) => boolean): (iterable: string) => string;
dropLastWhile<T>(predicate: (x: T) => boolean, iterable: T[]): T[];
dropLastWhile<T>(predicate: (x: T) => boolean): <T>(iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropLastWhile</strong> source</summary>

```javascript
import { isArray as isArrayMethod } from './_internals/isArray.js'

export function dropLastWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropLastWhile(predicate, _iterable)
  }
  if (iterable.length === 0) return iterable
  const isArray = isArrayMethod(iterable)

  if (typeof predicate !== 'function'){
    throw new Error(`'predicate' is from wrong type ${ typeof predicate }`)
  }
  if (!isArray && typeof iterable !== 'string'){
    throw new Error(`'iterable' is from wrong type ${ typeof iterable }`)
  }

  const toReturn = []
  let counter = iterable.length

  while (counter){
    const item = iterable[ --counter ]
    if (!predicate(item)){
      toReturn.push(item)
      break
    }
  }

  while (counter){
    toReturn.push(iterable[ --counter ])
  }

  return isArray ? toReturn.reverse() : toReturn.reverse().join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropLastWhile as dropLastWhileRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { dropLastWhile } from './dropLastWhile.js'

const list = [ 1, 2, 3, 4, 5 ]
const str = 'foobar'

test('with list', () => {
  const result = dropLastWhile(x => x >= 3, list)
  expect(result).toEqual([ 1, 2 ])
})

test('with string', () => {
  const result = dropLastWhile(x => x !== 'b')(str)
  expect(result).toBe('foob')
})

test('with empty list', () => {
  expect(dropLastWhile(() => true, [])).toEqual([])
  expect(dropLastWhile(() => false, [])).toEqual([])
})

const possiblePredicates = [
  x => x > 2,
  x => x < 2,
  x => x < -2,
  x => x > 10,
  '',
  [],
  [ 1 ],
]

const possibleIterables = [
  list,
  [ {}, '1', 2 ],
  str,
  `${ str }${ str }`,
  /foo/g,
  Promise.resolve('foo'),
  2,
]

describe('brute force', () => {
  compareCombinations({
    fn          : dropLastWhile,
    fnRamda     : dropLastWhileRamda,
    firstInput  : possiblePredicates,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 12,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 21,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 49,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeats

```typescript

dropRepeats<T>(list: T[]): T[]
```

It removes any successive duplicates according to `R.equals`.

```javascript
const result = R.dropRepeats([
  1, 
  1, 
  {a: 1}, 
  {a:1}, 
  1
])
// => [1, {a: 1}, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropRepeats(%5B%0A%20%201%2C%20%0A%20%201%2C%20%0A%20%20%7Ba%3A%201%7D%2C%20%0A%20%20%7Ba%3A1%7D%2C%20%0A%20%201%0A%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%201%5D">Try this <strong>R.dropRepeats</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropRepeats<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.dropRepeats</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { equals } from './equals.js'

export function dropRepeats(list){
  if (!isArray(list)){
    throw new Error(`${ list } is not a list`)
  }

  const toReturn = []

  list.reduce((prev, current) => {
    if (!equals(prev, current)){
      toReturn.push(current)
    }

    return current
  }, undefined)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropRepeats as dropRepeatsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { add } from './add.js'
import { dropRepeats } from './dropRepeats.js'

const list = [ 1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2, { a : 1 }, { a : 1 } ]
const listClean = [ 1, 2, 3, 4, 5, 3, 2, { a : 1 } ]

test('happy', () => {
  const result = dropRepeats(list)
  expect(result).toEqual(listClean)
})

const possibleLists = [
  [ add(1), async () => {}, [ 1 ], [ 1 ], [ 2 ], [ 2 ] ],
  [ add(1), add(1), add(2) ],
  [],
  1,
  /foo/g,
  Promise.resolve(1),
]

describe('brute force', () => {
  compareCombinations({
    firstInput : possibleLists,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 1,
          "SHOULD_NOT_THROW": 3,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 6,
        }
      `)
    },
    fn      : dropRepeats,
    fnRamda : dropRepeatsRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeats)

### dropRepeatsBy

```typescript

dropRepeatsBy<T, U>(fn: (a: T) => U, list: T[]): T[]
```

```javascript
const result = R.dropRepeatsBy(
  Math.abs,
  [1, -1, 2, 3, -3]
)
// => [1, 2, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropRepeatsBy(%0A%20%20Math.abs%2C%0A%20%20%5B1%2C%20-1%2C%202%2C%203%2C%20-3%5D%0A)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try this <strong>R.dropRepeatsBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropRepeatsBy<T, U>(fn: (a: T) => U, list: T[]): T[];
dropRepeatsBy<T, U>(
  fn: (a: T) => U
): (list: T[]) => T[];
dropRepeatsBy(fn: any): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropRepeatsBy</strong> source</summary>

```javascript
import { equals } from './equals.js'

export function dropRepeatsBy(fn, list){
  if (arguments.length === 1) return _list => dropRepeatsBy(fn, _list)

  let lastEvaluated = null

  return list.slice().filter(item => {
    if (lastEvaluated === null){
      lastEvaluated = fn(item)

      return true
    }
    const evaluatedResult = fn(item)
    if (equals(lastEvaluated, evaluatedResult)) return false

    lastEvaluated = evaluatedResult

    return true
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropRepeatsBy } from './dropRepeatsBy.js'

test('happy', () => {
  const fn = ({ i }) => ({ i : Math.abs(i) })
  const objs = [ { i : 1 }, { i : 2 }, { i : 3 }, { i : -4 }, { i : 5 }, { i : 3 } ]
  const objs2 = [
    { i : 1 },
    { i : -1 },
    { i : 1 },
    { i : 2 },
    { i : 3 },
    { i : 3 },
    { i : -4 },
    { i : 4 },
    { i : 5 },
    { i : 3 },
  ]
  expect(dropRepeatsBy(fn, objs2)).toEqual(objs)
  expect(dropRepeatsBy(fn, objs)).toEqual(objs)
})

test('keeps elements from the left', () => {
  expect(dropRepeatsBy(({ n, ...rest }) => ({ ...rest }),
    [
      {
        i : 1,
        n : 1,
      },
      {
        i : 1,
        n : 2,
      },
      {
        i : 1,
        n : 3,
      },
      {
        i : 4,
        n : 1,
      },
      {
        i : 4,
        n : 2,
      },
    ])).toEqual([
    {
      i : 1,
      n : 1,
    },
    {
      i : 4,
      n : 1,
    },
  ])
})

test('returns an empty array for an empty array', () => {
  expect(dropRepeatsBy(() => {}, [])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsBy)

### dropRepeatsWith

```typescript

dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean, list: T[]): T[]
```

```javascript
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'), list)

// => [{a:1,b:2}, {a:2, b:4}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A1%2Cb%3A3%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D%0Aconst%20result%20%3D%20R.dropRepeatsWith(R.prop('a')%2C%20list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D">Try this <strong>R.dropRepeatsWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean, list: T[]): T[];
dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropRepeatsWith</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function dropRepeatsWith(predicate, list){
  if (arguments.length === 1){
    return _iterable => dropRepeatsWith(predicate, _iterable)
  }

  if (!isArray(list)){
    throw new Error(`${ list } is not a list`)
  }

  const toReturn = []

  list.reduce((prev, current) => {
    if (prev === undefined){
      toReturn.push(current)

      return current
    }
    if (!predicate(prev, current)){
      toReturn.push(current)
    }

    return current
  }, undefined)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropRepeatsWith as dropRepeatsWithRamda, eqProps } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { dropRepeatsWith } from './dropRepeatsWith.js'
import { path } from './path.js'
import { prop } from './prop.js'

const eqI = eqProps('i')

test('happy', () => {
  const list = [ { i : 1 }, { i : 2 }, { i : 2 }, { i : 3 } ]
  const expected = [ { i : 1 }, { i : 2 }, { i : 3 } ]
  const result = dropRepeatsWith(eqI, list)
  expect(result).toEqual(expected)
})

test('readme example', () => {
  const list = [
    {
      a : 1,
      b : 2,
    },
    {
      a : 1,
      b : 3,
    },
    {
      a : 2,
      b : 4,
    },
  ]
  const result = dropRepeatsWith(prop('a'), list)
  expect(result).toEqual([
    {
      a : 1,
      b : 2,
    },
  ])
})

test('keeps elements from the left predicate input', () => {
  const list = [
    {
      i : 1,
      n : 1,
    },
    {
      i : 1,
      n : 2,
    },
    {
      i : 1,
      n : 3,
    },
    {
      i : 4,
      n : 1,
    },
    {
      i : 4,
      n : 2,
    },
  ]
  const expected = [
    {
      i : 1,
      n : 1,
    },
    {
      i : 4,
      n : 1,
    },
  ]
  const result = dropRepeatsWith(eqI)(list)
  expect(result).toEqual(expected)
})

const possiblePredicates = [
  null,
  undefined,
  x => x + 1,
  x => true,
  x => false,
  x => '',
  path([ 'a', 'b' ]),
]
const possibleLists = [
  null,
  undefined,
  [],
  [ 1 ],
  [ { a : { b : 1 } }, { a : { b : 1 } } ],
  [ /foo/g, /foo/g ],
]

describe('brute force', () => {
  compareCombinations({
    firstInput  : possiblePredicates,
    secondInput : possibleLists,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 4,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 42,
        }
      `)
    },
    fn      : dropRepeatsWith,
    fnRamda : dropRepeatsWithRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsWith)

### dropWhile

```typescript

dropWhile(fn: Predicate<string>, iterable: string): string
```

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate, list)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0Aconst%20result%20%3D%20R.dropWhile(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.dropWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropWhile(fn: Predicate<string>, iterable: string): string;
dropWhile(fn: Predicate<string>): (iterable: string) => string;
dropWhile<T>(fn: Predicate<T>, iterable: T[]): T[];
dropWhile<T>(fn: Predicate<T>): (iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropWhile</strong> source</summary>

```javascript
import { isArray as isArrayMethod } from './_internals/isArray.js'

export function dropWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropWhile(predicate, _iterable)
  }
  const isArray = isArrayMethod(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }

  const toReturn = []
  let counter = 0

  while (counter < iterable.length){
    const item = iterable[ counter++ ]
    if (!predicate(item)){
      toReturn.push(item)
      break
    }
  }

  while (counter < iterable.length){
    toReturn.push(iterable[ counter++ ])
  }

  return isArray ? toReturn : toReturn.join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropWhile as dropWhileRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { dropWhile } from './dropWhile.js'

const list = [ 1, 2, 3, 4 ]

test('happy', () => {
  const predicate = x => x < 3
  const result = dropWhile(predicate, list)
  expect(result).toEqual([ 3, 4 ])
})

test('always true', () => {
  const predicate = () => true
  const result = dropWhileRamda(predicate, list)
  expect(result).toEqual([])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('works with string as iterable', () => {
  const iterable = 'foobar'
  const predicate = x => x !== 'b'
  const result = dropWhile(predicate, iterable)
  expect(result).toBe('bar')
})

const possiblePredicates = [
  null,
  undefined,
  () => 0,
  () => true,
  /foo/g,
  {},
  [],
]

const possibleIterables = [
  null,
  undefined,
  [],
  {},
  1,
  '',
  'foobar',
  [ '' ],
  [ 1, 2, 3, 4, 5 ],
]

describe('brute force', () => {
  compareCombinations({
    firstInput : possiblePredicates,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 14,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 63,
        }
      `)
    },
    secondInput : possibleIterables,
    fn          : dropWhile,
    fnRamda     : dropWhileRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropWhile)

### either

```typescript

either(firstPredicate: Pred, secondPredicate: Pred): Pred
```

It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.

This `predicate` function will return `true`, if any of the two input predicates return `true`.

```javascript
const firstPredicate = x => x > 10
const secondPredicate = x => x % 2 === 0
const predicate = R.either(firstPredicate, secondPredicate)

const result = [
  predicate(15),
  predicate(8),
  predicate(7),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstPredicate%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondPredicate%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%200%0Aconst%20predicate%20%3D%20R.either(firstPredicate%2C%20secondPredicate)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20predicate(15)%2C%0A%20%20predicate(8)%2C%0A%20%20predicate(7)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.either</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred;
either<T>(firstPredicate: Predicate<T>, secondPredicate: Predicate<T>): Predicate<T>;
either<T>(firstPredicate: Predicate<T>): (secondPredicate: Predicate<T>) => Predicate<T>;
either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.either</strong> source</summary>

```javascript
export function either(firstPredicate, secondPredicate){
  if (arguments.length === 1){
    return _secondPredicate => either(firstPredicate, _secondPredicate)
  }

  return (...input) =>
    Boolean(firstPredicate(...input) || secondPredicate(...input))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { either } from './either.js'

test('with multiple inputs', () => {
  const between = function (
    a, b, c
  ){
    return a < b && b < c
  }
  const total20 = function (
    a, b, c
  ){
    return a + b + c === 20
  }
  const fn = either(between, total20)
  expect(fn(
    7, 8, 5
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function (){
    return true
  }
  const Z = function (){
    effect = 'Z got evaluated'
  }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('case 1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTrue()
})

test('case 2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#either)

### empty

```typescript

empty<T>(x: T): T
```

```javascript
const result = [R.empty([1,2,3]), R.empty('foo'), R.empty({x: 1, y: 2})]
// => [[], '', {}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.empty(%5B1%2C2%2C3%5D)%2C%20R.empty('foo')%2C%20R.empty(%7Bx%3A%201%2C%20y%3A%202%7D)%5D%0A%2F%2F%20%3D%3E%20%5B%5B%5D%2C%20''%2C%20%7B%7D%5D">Try this <strong>R.empty</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
empty<T>(x: T): T;
```

</details>

<details>

<summary><strong>R.empty</strong> source</summary>

```javascript
import { type } from './type.js'

export function empty(list){
  if (typeof list === 'string') return ''

  if (Array.isArray(list)){
    const { name } = list.constructor
    if (name === 'Uint8Array') return Uint8Array.from('')

    if (name === 'Float32Array') return new Float32Array([])

    return []
  }
  if (type(list) === 'Object') return {}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { empty } from 'ramda'

test('returns empty array given array', () => {
  expect(empty([ 1, 2, 3 ])).toEqual([])
})

test('returns empty array of equivalent type given typed array', () => {
  expect(empty(Uint8Array.from('123'))).toEqual(Uint8Array.from(''))
  expect(empty(Uint8Array.from('123')).constructor.name).toBe('Uint8Array')
  expect(empty(new Float32Array([ 1, 2, 3 ]))).toEqual(new Float32Array([]))
  expect(empty(new Float32Array([ 1, 2, 3 ])).constructor.name).toBe('Float32Array')
})

test('returns empty string given string', () => {
  expect(empty('abc')).toBe('')
  expect(empty(new String('abc'))).toBe('')
})

test('other types', () => {
  expect(empty({ a : 1 })).toEqual({})
  expect(empty(/foo/g)).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#empty)

### endsWith

```typescript

endsWith<T extends string>(question: T, str: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.endsWith`.
When iterable is a list, then it uses R.equals to determine if the target list ends in the same way as the given target.

```javascript
const str = 'foo-bar'
const list = [{a:1}, {a:2}, {a:3}]

const result = [
  R.endsWith('bar', str),
  R.endsWith([{a:1}, {a:2}], list)
]
// => [true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A3%7D%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.endsWith('bar'%2C%20str)%2C%0A%20%20R.endsWith(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%5D">Try this <strong>R.endsWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
endsWith<T extends string>(question: T, str: string): boolean;
endsWith<T extends string>(question: T): (str: string) => boolean;
endsWith<T>(question: T[], list: T[]): boolean;
endsWith<T>(question: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { equals } from './equals.js'

export function endsWith(target, iterable){
  if (arguments.length === 1) return _iterable => endsWith(target, _iterable)

  if (typeof iterable === 'string'){
    return iterable.endsWith(target)
  }
  if (!isArray(target)) return false

  const diff = iterable.length - target.length
  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[ index + diff ])
    if (!result) correct = false

    return result
  })

  return filtered.length === target.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { endsWith as endsWithRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { endsWith } from './endsWith.js'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]
  expect(endsWith({ a : 3 }, list)).toBeFalse(),
  expect(endsWith([ { a : 3 } ], list)).toBeTrue()
  expect(endsWith([ { a : 2 }, { a : 3 } ], list)).toBeTrue()
  expect(endsWith(list, list)).toBeTrue()
  expect(endsWith([ { a : 1 } ], list)).toBeFalse()
})

export const possibleTargets = [
  NaN,
  [ NaN ],
  /foo/,
  [ /foo/ ],
  Promise.resolve(1),
  [ Promise.resolve(1) ],
  Error('foo'),
  [ Error('foo') ],
]

export const possibleIterables = [
  [ Promise.resolve(1), Promise.resolve(2) ],
  [ /foo/, /bar/ ],
  [ NaN ],
  [ Error('foo'), Error('bar') ],
]

describe('brute force', () => {
  compareCombinations({
    fn          : endsWith,
    fnRamda     : endsWithRamda,
    firstInput  : possibleTargets,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 32,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#endsWith)

### eqBy

```typescript

eqBy<T>(fn: (a: T) => unknown, a: T, b: T): boolean
```

```javascript
const result = R.eqBy(Math.abs, 5, -5)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.eqBy(Math.abs%2C%205%2C%20-5)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
eqBy<T>(fn: (a: T) => unknown, a: T, b: T): boolean;
eqBy<T>(fn: (a: T) => unknown, a: T): (b: T) => boolean;
eqBy<T>(fn: (a: T) => unknown): {
  (a: T, b: T): boolean;
  (a: T): (b: T) => boolean;
};
```

</details>

<details>

<summary><strong>R.eqBy</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { equals } from './equals.js'

export function eqByFn(
  fn, a, b
){
  return equals(fn(a), fn(b))
}

export const eqBy = curry(eqByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqByFn } from './eqBy.js'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqByFn(
    Math.abs, 5, 5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, 5, -5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, -5, 5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, -5, -5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, 42, 99
  )).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqByFn(
    Math.abs, NaN, NaN
  )).toBe(true)
  expect(eqByFn(
    Math.abs, [ 42 ], [ 42 ]
  )).toBe(true)
  expect(eqByFn(
    x => x, { a : 1 }, { a : 1 }
  )).toBe(true)
  expect(eqByFn(
    x => x, { a : 1 }, { a : 2 }
  )).toBe(false)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqBy)

### eqProps

```typescript

eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean
```

It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

```javascript
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1, obj2)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj1%20%3D%20%7Ba%3A%201%2C%20b%3A2%7D%0Aconst%20obj2%20%3D%20%7Ba%3A%201%2C%20b%3A3%7D%0Aconst%20result%20%3D%20R.eqProps('a'%2C%20obj1%2C%20obj2)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqProps</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;
```

</details>

<details>

<summary><strong>R.eqProps</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { equals } from './equals.js'
import { prop } from './prop.js'

function eqPropsFn(
  property, objA, objB
){
  return equals(prop(property, objA), prop(property, objB))
}

export const eqProps = curry(eqPropsFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqProps as eqPropsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { eqProps } from './eqProps.js'

const obj1 = {
  a : 1,
  b : 2,
}
const obj2 = {
  a : 1,
  b : 3,
}

test('props are equal', () => {
  const result = eqProps(
    'a', obj1, obj2
  )
  expect(result).toBeTrue()
})

test('props are not equal', () => {
  const result = eqProps(
    'b', obj1, obj2
  )
  expect(result).toBeFalse()
})

test('prop does not exist', () => {
  const result = eqProps(
    'c', obj1, obj2
  )
  expect(result).toBeTrue()
})

test('can handle null or undefined object', () => {
  expect(eqProps(
    'value', { value : 0 }, null
  )).toBeFalse()
  expect(eqProps(
    'value', { value : 0 }, undefined
  )).toBeFalse()
  expect(eqProps(
    'value', null, { value : 0 }
  )).toBeFalse()
  expect(eqProps(
    'value', undefined, { value : 0 }
  )).toBeFalse()
  expect(eqProps(
    'value', undefined, { value : undefined }
  )).toBeTrue()
  expect(eqProps(
    'value', null, { value : undefined }
  )).toBeTrue()
  expect(eqProps(
    'value', { value : undefined }, undefined
  )).toBeTrue()
  expect(eqProps(
    'value', { value : undefined }, null
  )).toBeTrue()
  expect(eqProps(
    'value', {}, null
  )).toBeTrue()
  expect(eqProps(
    'value', {}, undefined
  )).toBeTrue()
  expect(eqProps(
    'value', null, {}
  )).toBeTrue()
  expect(eqProps(
    'value', undefined, {}
  )).toBeTrue()
})

const possibleProps = [ 'a', 'a.b', null, false, 0, 1, {}, [] ]

const possibleObjects = [
  { a : 1 },
  {
    a : 1,
    b : 2,
  },
  {},
  [],
  null,
  {
    a : { b : 1 },
    c : 2,
  },
  {
    a : { b : 1 },
    c : 3,
  },
  { a : { b : 2 } },
]

describe('brute force', () => {
  let totalTestsCounter = 0

  compareCombinations({
    firstInput : possibleProps,
    setCounter : () => totalTestsCounter++,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 120,
          "TOTAL_TESTS": 512,
        }
      `)
    },
    secondInput : possibleObjects,
    thirdInput  : possibleObjects,
    fn          : eqProps,
    fnRamda     : eqPropsRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqProps)

### equals

```typescript

equals<T>(x: T, y: T): boolean
```

It deeply compares `x` and `y` and returns `true` if they are equal.

> :boom: It doesn't handle cyclical data structures and functions

```javascript
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%0Aconst%20result%20%3D%20)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.equals</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
equals<T>(x: T, y: T): boolean;
equals<T>(x: T): (y: T) => boolean;
```

</details>

<details>

<summary><strong>R.equals</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { type } from './type.js'

export function _lastIndexOf(valueToFind, list){
  if (!isArray(list))
    throw new Error(`Cannot read property 'indexOf' of ${ list }`)

  const typeOfValue = type(valueToFind)
  if (![ 'Array', 'NaN', 'Object', 'RegExp' ].includes(typeOfValue))
    return list.lastIndexOf(valueToFind)

  const { length } = list
  let index = length
  let foundIndex = -1

  while (--index > -1 && foundIndex === -1)
    if (equals(list[ index ], valueToFind))
      foundIndex = index

  return foundIndex
}

export function _indexOf(valueToFind, list){
  if (!isArray(list))
    throw new Error(`Cannot read property 'indexOf' of ${ list }`)

  const typeOfValue = type(valueToFind)
  if (![ 'Array', 'NaN', 'Object', 'RegExp' ].includes(typeOfValue))
    return list.indexOf(valueToFind)

  let index = -1
  let foundIndex = -1
  const { length } = list

  while (++index < length && foundIndex === -1)
    if (equals(list[ index ], valueToFind))
      foundIndex = index

  return foundIndex
}

function _arrayFromIterator(iter){
  const list = []
  let next
  while (!(next = iter.next()).done)
    list.push(next.value)

  return list
}

function _compareSets(a, b){
  if (a.size !== b.size)
    return false

  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1)

  return filtered.length === 0
}

function compareErrors(a, b){
  if (a.message !== b.message) return false
  if (a.toString !== b.toString) return false

  return a.toString() === b.toString()
}

function parseDate(maybeDate){
  if (!maybeDate.toDateString) return [ false ]

  return [ true, maybeDate.getTime() ]
}

function parseRegex(maybeRegex){
  if (maybeRegex.constructor !== RegExp) return [ false ]

  return [ true, maybeRegex.toString() ]
}

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  if (Object.is(a, b)) return true

  const aType = type(a)

  if (aType !== type(b)) return false
  if (aType === 'Function')
    return a.name === undefined ? false : a.name === b.name

  if ([ 'NaN', 'Null', 'Undefined' ].includes(aType)) return true

  if ([ 'BigInt', 'Number' ].includes(aType)){
    if (Object.is(-0, a) !== Object.is(-0, b)) return false

    return a.toString() === b.toString()
  }

  if ([ 'Boolean', 'String' ].includes(aType))
    return a.toString() === b.toString()

  if (aType === 'Array'){
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString())
      return false

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag)
        if (
          aCloneInstance !== bClone[ aCloneIndex ] &&
          !equals(aCloneInstance, bClone[ aCloneIndex ])
        )
          loopArrayFlag = false

    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[ 0 ])
    return bRegex[ 0 ] ? aRegex[ 1 ] === bRegex[ 1 ] : false
  else if (bRegex[ 0 ]) return false

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[ 0 ])
    return bDate[ 0 ] ? aDate[ 1 ] === bDate[ 1 ] : false
  else if (bDate[ 0 ]) return false

  if (a instanceof Error){
    if (!(b instanceof Error)) return false

    return compareErrors(a, b)
  }

  if (aType === 'Set')
    return _compareSets(a, b)

  if (aType === 'Object'){
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length)
      return false

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag){
        const aValue = a[ aKeyInstance ]
        const bValue = b[ aKeyInstance ]

        if (aValue !== bValue && !equals(aValue, bValue))
          loopObjectFlag = false

      }
    })

    return loopObjectFlag
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals as equalsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { variousTypes } from './benchmarks/_utils.js'
import { equals } from './equals.js'

test('compare functions', () => {
  function foo(){}
  function bar(){}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTrue()
  expect(expectFalseFirst).toBeFalse()
  expect(expectFalseSecond).toBeFalse()
})

test('with array of objects', () => {
  const list1 = [ { a : 1 }, [ { b : 2 } ] ]
  const list2 = [ { a : 1 }, [ { b : 2 } ] ]
  const list3 = [ { a : 1 }, [ { b : 3 } ] ]

  expect(equals(list1, list2)).toBeTrue()
  expect(equals(list1, list3)).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toBeTrue()
  expect(equals(/s/, /d/)).toBeFalse()
  expect(equals(/a/gi, /a/gi)).toBeTrue()
  expect(equals(/a/gim, /a/gim)).toBeTrue()
  expect(equals(/a/gi, /a/i)).toBeFalse()
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBeTrue()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toBeTrue()
  expect(equals(new Number(0), new Number(1))).toBeFalse()
  expect(equals(new Number(1), new Number(0))).toBeFalse()
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toBeTrue()
  expect(equals(new String(''), new String('x'))).toBeFalse()
  expect(equals(new String('x'), new String(''))).toBeFalse()
  expect(equals(new String('foo'), new String('foo'))).toBeTrue()
  expect(equals(new String('foo'), new String('bar'))).toBeFalse()
  expect(equals(new String('bar'), new String('foo'))).toBeFalse()
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toBeTrue()
  expect(equals(new Boolean(false), new Boolean(false))).toBeTrue()
  expect(equals(new Boolean(true), new Boolean(false))).toBeFalse()
  expect(equals(new Boolean(false), new Boolean(true))).toBeFalse()
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toBeFalse()
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toBeFalse()
  expect(equals(new Error('XXX'), new Error('YYY'))).toBeFalse()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTrue()
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toBeFalse()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTrue()
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toBeTrue()
  expect(equals(new Date(1), new Date(1))).toBeTrue()
  expect(equals(new Date(0), new Date(1))).toBeFalse()
  expect(equals(new Date(1), new Date(0))).toBeFalse()
  expect(equals(new Date(0), {})).toBeFalse()
  expect(equals({}, new Date(0))).toBeFalse()
})

test('ramda spec', () => {
  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toBeTrue()

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 2,
    b : 3,
  })).toBeTrue()

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 3,
    b : 3,
  })).toBeFalse()

  expect(equals({
    a : 2,
    b : 3,
    c : 1,
  },
  {
    a : 2,
    b : 3,
  })).toBeFalse()
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTrue()
  expect(equals([ true, false ], [ true, true ])).toBeFalse()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }
  const objSecond = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([ { a : 1 }, { a : 2 } ])
  const toCompareSame = new Set([ { a : 1 }, { a : 2 }, { a : 1 } ])
  const testSet = new Set([ { a : 1 }, { a : 2 }, { a : 1 } ])
  expect(equals(toCompareSame, testSet)).toBeTruthy()
  expect(equals(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set([ '2', '3', '3', '2', '1' ])
  expect(equals(new Set([ '3', '2', '1' ]), testSet)).toBeTruthy()
  expect(equals(new Set([ '3', '2', '0' ]), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTrue()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : false,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
    c : 3,
  })).toBeFalse()

  expect(equals({
    x : {
      a : 1,
      b : 2,
    },
  },
  {
    x : {
      a : 1,
      b : 2,
      c : 3,
    },
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 3,
  })).toBeFalse()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })).toBeTrue()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })).toBeFalse()

  expect(equals({ a : {} }, { a : {} })).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})

test('with custom functions', () => {
  function foo(){
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with classes', () => {
  class Foo{}
  const foo = new Foo()
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with negative zero', () => {
  expect(equals(-0, -0)).toBeTrue()
  expect(equals(-0, 0)).toBeFalse()
  expect(equals(0, 0)).toBeTrue()
  expect(equals(-0, 1)).toBeFalse()
})

test('with big int', () => {
  const a = BigInt(9007199254740991)
  const b = BigInt(9007199254740991)
  const c = BigInt(7007199254740991)
  expect(equals(a, b)).toBeTrue()
  expect(equals(a, c)).toBeFalse()
})

describe('brute force', () => {
  compareCombinations({
    callback : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
{
  "ERRORS_MESSAGE_MISMATCH": 0,
  "ERRORS_TYPE_MISMATCH": 0,
  "RESULTS_MISMATCH": 0,
  "SHOULD_NOT_THROW": 0,
  "SHOULD_THROW": 0,
  "TOTAL_TESTS": 289,
}
`)
    },
    firstInput  : variousTypes,
    fn          : equals,
    fnRamda     : equalsRamda,
    secondInput : variousTypes,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#equals)

### evolve

```typescript

evolve<T, U>(rules: ((x: T) => U)[], list: T[]): U[]
```

It takes object or array of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

> :boom: Error handling of this method differs between Ramda and Rambda. Ramda for some wrong inputs returns result and for other - it returns one of the inputs. Rambda simply throws when inputs are not correct. Full details for this mismatch are listed in `source/_snapshots/evolve.spec.js.snap` file.

```javascript
const rules = {
  foo : add(1),
  bar : add(-1),
}
const input = {
  a   : 1,
  foo : 2,
  bar : 3,
}
const result = evolve(rules, input)
const expected = {
  a   : 1,
  foo : 3,
  bar : 2,
})
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%20%3A%20add(1)%2C%0A%20%20bar%20%3A%20add(-1)%2C%0A%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%202%2C%0A%20%20bar%20%3A%203%2C%0A%7D%0Aconst%20result%20%3D%20evolve(rules%2C%20input)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%203%2C%0A%20%20bar%20%3A%202%2C%0A%7D)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.evolve</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
evolve<T, U>(rules: ((x: T) => U)[], list: T[]): U[];
evolve<T, U>(rules: ((x: T) => U)[]) : (list: T[]) => U[];
evolve<E extends Evolver, V extends Evolvable<E>>(rules: E, obj: V): Evolve<V, E>;
evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;
```

</details>

<details>

<summary><strong>R.evolve</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { mapArray, mapObject } from './map.js'
import { type } from './type.js'

export function evolveArray(rules, list){
  return mapArray(
    (x, i) => {
      if (type(rules[ i ]) === 'Function'){
        return rules[ i ](x)
      }

      return x
    },
    list,
    true
  )
}

export function evolveObject(rules, iterable){
  return mapObject((x, prop) => {
    if (type(x) === 'Object'){
      const typeRule = type(rules[ prop ])
      if (typeRule === 'Function'){
        return rules[ prop ](x)
      }
      if (typeRule === 'Object'){
        return evolve(rules[ prop ], x)
      }

      return x
    }
    if (type(rules[ prop ]) === 'Function'){
      return rules[ prop ](x)
    }

    return x
  }, iterable)
}

export function evolve(rules, iterable){
  if (arguments.length === 1){
    return _iterable => evolve(rules, _iterable)
  }
  const rulesType = type(rules)
  const iterableType = type(iterable)

  if (iterableType !== rulesType){
    throw new Error('iterableType !== rulesType')
  }

  if (![ 'Object', 'Array' ].includes(rulesType)){
    throw new Error(`'iterable' and 'rules' are from wrong type ${ rulesType }`)
  }

  if (iterableType === 'Object'){
    return evolveObject(rules, iterable)
  }

  return evolveArray(rules, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { evolve as evolveRamda } from 'ramda'

import { add } from '../rambda.js'
import { compareCombinations, compareToRamda } from './_internals/testUtils.js'
import { evolve } from './evolve.js'

test('happy', () => {
  const rules = {
    foo    : add(1),
    nested : { bar : x => Object.keys(x).length },
  }
  const input = {
    a      : 1,
    foo    : 2,
    nested : { bar : { z : 3 } },
  }
  const result = evolve(rules, input)
  expect(result).toEqual({
    a      : 1,
    foo    : 3,
    nested : { bar : 1 },
  })
})

test('nested rule is wrong', () => {
  const rules = {
    foo    : add(1),
    nested : { bar : 10 },
  }
  const input = {
    a      : 1,
    foo    : 2,
    nested : { bar : { z : 3 } },
  }
  const result = evolve(rules)(input)
  expect(result).toEqual({
    a      : 1,
    foo    : 3,
    nested : { bar : { z : 3 } },
  })
})

test('is recursive', () => {
  const rules = {
    nested : {
      second : add(-1),
      third  : add(1),
    },
  }
  const object = {
    first  : 1,
    nested : {
      second : 2,
      third  : 3,
    },
  }
  const expected = {
    first  : 1,
    nested : {
      second : 1,
      third  : 4,
    },
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('ignores primitive values', () => {
  const rules = {
    n : 2,
    m : 'foo',
  }
  const object = {
    n : 0,
    m : 1,
  }
  const expected = {
    n : 0,
    m : 1,
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('with array', () => {
  const rules = [ add(1), add(-1) ]
  const list = [ 100, 1400 ]
  const expected = [ 101, 1399 ]
  const result = evolve(rules, list)
  expect(result).toEqual(expected)
})

const rulesObject = { a : add(1) }
const rulesList = [ add(1) ]
const possibleIterables = [ null, undefined, '', 42, [], [ 1 ], { a : 1 } ]
const possibleRules = [ ...possibleIterables, rulesList, rulesObject ]

describe('brute force', () => {
  compareCombinations({
    firstInput : possibleRules,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 4,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 63,
        }
      `)
    },
    secondInput : possibleIterables,
    fn          : evolve,
    fnRamda     : evolveRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#evolve)

### excludes

```typescript

excludes(valueToFind: string, input: string[] | string): boolean
```

Opposite of `R.includes`

`R.equals` is used to determine equality.

```javascript
const result = [
  R.excludes('ar', 'foo'),
  R.excludes({a: 2}, [{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.excludes('ar'%2C%20'foo')%2C%0A%20%20R.excludes(%7Ba%3A%202%7D%2C%20%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try this <strong>R.excludes</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
excludes(valueToFind: string, input: string[] | string): boolean;
excludes(valueToFind: string): (input: string[] | string) => boolean;
excludes<T>(valueToFind: T, input: T[]): boolean;
excludes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.excludes</strong> source</summary>

```javascript
import { includes } from './includes.js'

export function excludes(valueToFind, input){
  if (arguments.length === 1) return _input => excludes(valueToFind, _input)

  return includes(valueToFind, input) === false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { excludes } from './excludes.js'

test('excludes with string', () => {
  const str = 'more is less'

  expect(excludes('less')(str)).toBeFalse()
  expect(excludes('never', str)).toBeTrue()
})

test('excludes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(excludes(2)(arr)).toBeFalse()
  expect(excludes(4, arr)).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#excludes)

### F

```typescript

F(): boolean
```

```javascript
F() // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20F()%20%2F%2F%20%3D%3E%20false">Try this <strong>R.F</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
F(): boolean;
```

</details>

<details>

<summary><strong>R.F</strong> source</summary>

```javascript
export function F(){
  return false
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#F)

### filter

```typescript

filter<T>(predicate: Predicate<T>): (input: T[]) => T[]
```

It filters list or object `input` using a `predicate` function.

```javascript
const list = [3, 4, 3, 2]
const listPredicate = x => x > 2

const object = {abc: 'fo', xyz: 'bar', baz: 'foo'}
const objectPredicate = (x, prop) => x.length + prop.length > 5

const result = [
  R.filter(listPredicate, list),
  R.filter(objectPredicate, object)
]
// => [ [3, 4], { xyz: 'bar', baz: 'foo'} ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B3%2C%204%2C%203%2C%202%5D%0Aconst%20listPredicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20object%20%3D%20%7Babc%3A%20'fo'%2C%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%0Aconst%20objectPredicate%20%3D%20(x%2C%20prop)%20%3D%3E%20x.length%20%2B%20prop.length%20%3E%205%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.filter(listPredicate%2C%20list)%2C%0A%20%20R.filter(objectPredicate%2C%20object)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B3%2C%204%5D%2C%20%7B%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%20%5D">Try this <strong>R.filter</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filter<T>(predicate: Predicate<T>): (input: T[]) => T[];
filter<T>(predicate: Predicate<T>, input: T[]): T[];
filter<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
filter<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function filterObject(predicate, obj){
  const willReturn = {}

  for (const prop in obj){
    if (predicate(
      obj[ prop ], prop, obj
    )){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filterArray(
  predicate, list, indexed = false
){
  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len){
    const predicateResult = indexed ?
      predicate(list[ index ], index) :
      predicate(list[ index ])
    if (predicateResult){
      willReturn.push(list[ index ])
    }

    index++
  }

  return willReturn
}

export function filter(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => filter(predicate, _iterable)
  if (!iterable){
    throw new Error('Incorrect iterable input')
  }

  if (isArray(iterable)) return filterArray(
    predicate, iterable, false
  )

  return filterObject(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { filter as filterRamda } from 'ramda'

import { filter } from './filter.js'
import { T } from './T.js'

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
  expect(filter(isEven, {
    a : 1,
    b : 2,
    d : 3,
  })).toEqual({ b : 2 })
})

test('predicate when input is object', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const predicate = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toBe('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a : 1 })
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b : 2,
    d : 4,
  }

  expect(result).toEqual(expectedResult)
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => filter(T, null)).toThrowWithMessage(Error,
    'Incorrect iterable input')
  expect(() => filter(T)(undefined)).toThrowWithMessage(Error,
    'Incorrect iterable input')
  expect(() => filterRamda(T, null)).toThrowWithMessage(TypeError,
    'Cannot read properties of null (reading \'fantasy-land/filter\')')
  expect(() => filterRamda(T, undefined)).toThrowWithMessage(TypeError,
    'Cannot read properties of undefined (reading \'fantasy-land/filter\')')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

### filterArray

```typescript

filterArray<T>(predicate: Predicate<T>): (input: T[]) => T[]
```

```javascript
const result = R.filterArray(
  x => x > 1,
  [1, 2, 3]
)
// => [1, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.filterArray(%0A%20%20x%20%3D%3E%20x%20%3E%201%2C%0A%20%20%5B1%2C%202%2C%203%5D%0A)%0A%2F%2F%20%3D%3E%20%5B1%2C%203%5D">Try this <strong>R.filterArray</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filterArray<T>(predicate: Predicate<T>): (input: T[]) => T[];
filterArray<T>(predicate: Predicate<T>, input: T[]): T[];
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filterArray)

### filterAsync

```typescript

filterAsync<T>(fn: AsyncPredicate<T>, list: T[]): Promise<T[]>
```

Asynchronous version of `R.filter`

```javascript
const predicate = async x => {
  await R.delay(100)
  return x % 2 === 1
}
const result = await R.filterAsync(predicate, [ 1, 2, 3 ])
// => [ 1, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%25%202%20%3D%3D%3D%201%0A%7D%0Aconst%20result%20%3D%20await%20R.filterAsync(predicate%2C%20%5B%201%2C%202%2C%203%20%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%203%20%5D">Try this <strong>R.filterAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filterAsync<T>(fn: AsyncPredicate<T>, list: T[]): Promise<T[]>;
filterAsync<T>(fn: AsyncPredicateIndexed<T>, list: T[]): Promise<T[]>;
filterAsync<T>(fn: AsyncPredicate<T>) : ( list: T[]) => Promise<T[]>;
filterAsync<T>(fn: AsyncPredicateIndexed<T>) : ( list: T[]) => Promise<T[]>;
```

</details>

<details>

<summary><strong>R.filterAsync</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { filter } from './filter.js'
import { mapAsync } from './mapAsync.js'

export function filterAsyncFn(predicate, listOrObject){
  return new Promise((resolve, reject) => {
    mapAsync(predicate, listOrObject)
      .then(predicateResult => {
        if (isArray(predicateResult)){
          const filtered = listOrObject.filter((_, i) => predicateResult[ i ])

          return resolve(filtered)
        }
        const filtered = filter((_, prop) => predicateResult[ prop ],
          listOrObject)

        return resolve(filtered)
      })
      .catch(reject)
  })
}

export function filterAsync(predicate, listOrObject){
  if (arguments.length === 1){
    return async _listOrObject => filterAsyncFn(predicate, _listOrObject)
  }

  return new Promise((resolve, reject) => {
    filterAsyncFn(predicate, listOrObject).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { filterAsync } from './filterAsync.js'

test('happy', async () => {
  const predicate = async (x, i) => {
    expect(i).toBeNumber()
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate)([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3 ])
})

test('with object', async () => {
  const predicate = async (x, prop) => {
    expect(prop).toBeString()
    await delay(100)

    return x % 2 === 1
  }
  const result = await filterAsync(predicate, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
  })

  expect(result).toEqual({
    a : 1,
    c : 3,
    e : 5,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filterAsync)

### filterIndexed

```typescript

filterIndexed<T>(predicate: IndexedPredicate<T>): (x: T[]) => T[]
```

Same as `R.filter`, but it passes index/property as second argument to the predicate, when looping over arrays/objects.

<details>

<summary>All TypeScript definitions</summary>

```typescript
filterIndexed<T>(predicate: IndexedPredicate<T>): (x: T[]) => T[];
filterIndexed<T>(predicate: IndexedPredicate<T>, x: T[]): T[];
filterIndexed<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
filterIndexed<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filterIndexed</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { filterArray, filterObject } from './filter.js'

export function filterIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => filterIndexed(predicate, _iterable)
  if (!iterable) return []
  if (isArray(iterable)) return filterArray(
    predicate, iterable, true
  )

  return filterObject(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { filter } from './filter.js'
import { filterIndexed } from './filterIndexed.js'

const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const list = [ 1, 2, 3 ]
  filterIndexed(iterator, list)
  filterIndexed(iterator)(list)
})

test('with object', () => {
  const iterator = x => x + 1
  const obj = { a : 1 }
  expect(filterIndexed(iterator, obj)).toEqual(filter(iterator, obj))
})

test('with bad input', () => {
  expect(filterIndexed(iterator, undefined)).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filterIndexed)

### filterObject

```typescript

filterObject<T>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>
```

```javascript
const obj = {a: 1, b:2}
const result = R.filterObject(
  x => x > 1,
  obj
)
// => {b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A2%7D%0Aconst%20result%20%3D%20R.filterObject(%0A%20%20x%20%3D%3E%20x%20%3E%201%2C%0A%20%20obj%0A)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try this <strong>R.filterObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filterObject<T>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
filterObject<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filterObject)

### find

```typescript

find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.find</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined;
find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.find</strong> source</summary>

```javascript
export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)

  let index = 0
  const len = list.length

  while (index < len){
    const x = list[ index ]
    if (predicate(x)){
      return x
    }

    index++
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { find } from './find.js'
import { propEq } from './propEq.js'

const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]

test('happy', () => {
  const fn = propEq(2, 'a')
  expect(find(fn, list)).toEqual({ a : 2 })
})

test('with curry', () => {
  const fn = propEq(4, 'a')
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true, [])).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#find)

### findAsync

```typescript

findAsync<T>(predicate: (x: T) => Promise<boolean>, list: T[]): T | undefined
```

Asynchronous version of `R.find`.

```javascript
const predicate = x => {
  await R.delay(100)
  return R.type(x.foo) === 'Number'
}

const list = [{foo: 'bar'}, {foo: 1}]

const result = await R.findAsync(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0A%7D%0A%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20await%20R.findAsync(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.findAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findAsync<T>(predicate: (x: T) => Promise<boolean>, list: T[]): T | undefined;
findAsync<T>(predicate: (x: T) => Promise<boolean>): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findAsync</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { mapAsync } from './mapAsync.js'

export function findAsyncFn(predicate, list){
  return new Promise((resolve, reject) => {
    let canContinue = true
    let found

    const predicateFn = async (x, i) => {
      if (!canContinue) return false
      try {
        const result = await predicate(x, i)
        if (result){
          canContinue = false
          found = x
        }
      } catch (error){
        reject(error)
      }
    }

    mapAsync(predicateFn, list)
      .then(() => resolve(found))
      .catch(reject)
  })
}

export function findAsync(predicate, list){
  if (arguments.length === 1){
    return async _list => findAsync(predicate, _list)
  }

  return new Promise((resolve, reject) => {
    findAsyncFn(predicate, list).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findAsync } from './findAsync.js'
import { propEq } from './propEq.js'

const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]

test('happy', async () => {
  const fn = async (x, i) => {
    expect(typeof i).toBe('number')

    return propEq(
      2, 'a', x
    )
  }
  await expect(findAsync(fn, list)).resolves.toEqual({ a : 2 })
  await expect(findAsync(fn)(list)).resolves.toEqual({ a : 2 })
  await expect(findAsync(fn)([])).resolves.toBeUndefined()
})

test('with error', async () => {
  const fn = async x => x.a.b.c === 1

  try {
    await findAsync(fn, list)
  } catch (error){
    expect(error.message).toBe('Cannot read properties of undefined (reading \'c\')')
  }
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findAsync)

### findIndex

```typescript

findIndex<T>(predicate: (x: T) => boolean, list: T[]): number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findIndex</strong> source</summary>

```javascript
export function findIndex(predicate, list){
  if (arguments.length === 1) return _list => findIndex(predicate, _list)

  const len = list.length
  let index = -1

  while (++index < len){
    if (predicate(list[ index ])){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findIndex } from './findIndex.js'
import { propEq } from './propEq.js'

const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]

test('happy', () => {
  expect(findIndex(propEq(2, 'a'), list)).toBe(1)
  expect(findIndex(propEq(1, 'a'))(list)).toBe(0)
  expect(findIndex(propEq(4, 'a'))(list)).toBe(-1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findIndex)

### findLast

```typescript

findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined
```

It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.findLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined;
findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findLast</strong> source</summary>

```javascript
export function findLast(predicate, list){
  if (arguments.length === 1) return _list => findLast(predicate, _list)

  let index = list.length

  while (--index >= 0){
    if (predicate(list[ index ])){
      return list[ index ]
    }
  }

  return undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findLast } from './findLast.js'

test('happy', () => {
  const result = findLast(x => x > 1, [ 1, 1, 1, 2, 3, 4, 1 ])
  expect(result).toBe(4)

  expect(findLast(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toBe(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toBe(4)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function (x){
  return x % 2 === 0
}
const gt100 = function (x){
  return x > 100
}
const isStr = function (x){
  return typeof x === 'string'
}
const xGt100 = function (o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLast(even, a)).toBe(0)
  expect(findLast(gt100, a)).toBe(300)
  expect(findLast(isStr, a)).toBe('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, [ 'zing' ])).toBeUndefined()
})

test('ramda 3', () => {
  expect(findLast(even, [ 2, 3, 5 ])).toBe(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLast)

### findLastIndex

```typescript

findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number
```

It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findLastIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findLastIndex</strong> source</summary>

```javascript
export function findLastIndex(fn, list){
  if (arguments.length === 1) return _list => findLastIndex(fn, _list)

  let index = list.length

  while (--index >= 0){
    if (fn(list[ index ])){
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findLastIndex } from './findLastIndex.js'

test('happy', () => {
  const result = findLastIndex(x => x > 1, [ 1, 1, 1, 2, 3, 4, 1 ])

  expect(result).toBe(5)

  expect(findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toBe(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toBe(5)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function (x){
  return x % 2 === 0
}
const gt100 = function (x){
  return x > 100
}
const isStr = function (x){
  return typeof x === 'string'
}
const xGt100 = function (o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toBe(15)
  expect(findLastIndex(gt100, a)).toBe(9)
  expect(findLastIndex(isStr, a)).toBe(3)
  expect(findLastIndex(xGt100, a)).toBe(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, [ 'zing' ])).toBe(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [ 2, 3, 5 ])).toBe(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toBe(-1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLastIndex)

### flatten

```typescript

flatten<T>(list: any[]): T[]
```

It deeply flattens an array.

```javascript
const result = R.flatten([
  1, 
  2, 
  [3, 30, [300]], 
  [4]
])
// => [ 1, 2, 3, 30, 300, 4 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%0A%20%201%2C%20%0A%20%202%2C%20%0A%20%20%5B3%2C%2030%2C%20%5B300%5D%5D%2C%20%0A%20%20%5B4%5D%0A%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%2C%2030%2C%20300%2C%204%20%5D">Try this <strong>R.flatten</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
flatten<T>(list: any[]): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function flatten(list, input){
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++){
    if (isArray(list[ i ])){
      flatten(list[ i ], willReturn)
    } else {
      willReturn.push(list[ i ])
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flatten } from './flatten.js'

test('happy', () => {
  expect(flatten([ 1, 2, 3, [ [ [ [ [ 4 ] ] ] ] ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ])
})

test('readme example', () => {
  const result = flatten([ 1, 2, [ 3, 30, [ 300 ] ], [ 4 ] ])
  expect(result).toEqual([ 1, 2, 3, 30, 300, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatten)

### flip

```typescript

flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult
```

It returns function which calls `fn` with exchanged first and second argument.

> :boom: Rambda's **flip** will throw if the arity of the input function is greater or equal to 5.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.subtract(1, 6)
]  
// => [6, -6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20subtractFlip(1%2C7)%2C%0A%20%20R.subtract(1%2C%206)%0A%5D%20%20%0A%2F%2F%20%3D%3E%20%5B6%2C%20-6%5D">Try this <strong>R.flip</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
```

</details>

<details>

<summary><strong>R.flip</strong> source</summary>

```javascript
function flipFn(fn){
  return (...input) => {
    if (input.length === 1){
      return holder => fn(holder, input[ 0 ])
    } else if (input.length === 2){
      return fn(input[ 1 ], input[ 0 ])
    } else if (input.length === 3){
      return fn(
        input[ 1 ], input[ 0 ], input[ 2 ]
      )
    } else if (input.length === 4){
      return fn(
        input[ 1 ], input[ 0 ], input[ 2 ], input[ 3 ]
      )
    }

    throw new Error('R.flip doesn\'t work with arity > 4')
  }
}

export function flip(fn){
  return flipFn(fn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flip } from './flip.js'
import { subtract } from './subtract.js'
import { update } from './update.js'

test('function with arity of 2', () => {
  const subtractFlipped = flip(subtract)

  expect(subtractFlipped(1)(7)).toBe(6)
  expect(subtractFlipped(1, 7)).toBe(6)
  expect(subtractFlipped(
    1, 7, 9
  )).toBe(6)
})

test('function with arity of 3', () => {
  const updateFlipped = flip(update)

  const result = updateFlipped(
    88, 0, [ 1, 2, 3 ]
  )
  const curriedResult = updateFlipped(88, 0)([ 1, 2, 3 ])
  const tripleCurriedResult = updateFlipped(88)(0)([ 1, 2, 3 ])
  expect(result).toEqual([ 88, 2, 3 ])
  expect(curriedResult).toEqual([ 88, 2, 3 ])
  expect(tripleCurriedResult).toEqual([ 88, 2, 3 ])
})

test('function with arity of 4', () => {
  const testFunction = (
    a, b, c, d
  ) => `${ a - b }==${ c - d }`
  const testFunctionFlipped = flip(testFunction)

  const result = testFunction(
    1, 2, 3, 4
  )
  const flippedResult = testFunctionFlipped(
    2, 1, 3, 4
  )
  expect(result).toEqual(flippedResult)
  expect(result).toBe('-1==-1')
})

test('function with arity of 5', () => {
  const testFunction = (
    a, b, c, d, e
  ) => `${ a - b }==${ c - d - e }`
  const testFunctionFlipped = flip(testFunction)

  expect(() =>
    testFunctionFlipped(
      1, 2, 3, 4, 5
    )).toThrowErrorMatchingInlineSnapshot('"R.flip doesn\'t work with arity > 4"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flip)

### forEach

```typescript

forEach<T>(fn: Iterator<T, void>, list: T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

> :boom: It works with objects, unlike `Ramda`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect // => {foo1: 1, foo2: 2}
result // => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0AsideEffect%20%2F%2F%20%3D%3E%20%7Bfoo1%3A%201%2C%20foo2%3A%202%7D%0Aresult%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.forEach</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
forEach<T>(fn: Iterator<T, void>, list: T[]): T[];
forEach<T>(fn: Iterator<T, void>): (list: T[]) => T[];
forEach<T>(fn: ObjectIterator<T, void>, list: Dictionary<T>): Dictionary<T>;
forEach<T, U>(fn: ObjectIterator<T, void>): (list: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.forEach</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { forEachObjIndexedFn } from './forEachObjIndexed.js'

export function forEach(fn, iterable){
  if (arguments.length === 1) return _list => forEach(fn, _list)
  if (iterable === undefined) return

  if (isArray(iterable)){
    let index = 0
    const len = iterable.length

    while (index < len){
      fn(iterable[ index ])
      index++
    }
  } else return forEachObjIndexedFn(fn, iterable)

  return iterable
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { forEach } from './forEach.js'
import { type } from './type.js'

test('happy', () => {
  const sideEffect = {}
  forEach(x => sideEffect[ `foo${ x }` ] = x + 10)([ 1, 2 ])

  expect(sideEffect).toEqual({
    foo1 : 11,
    foo2 : 12,
  })
})

test('iterate over object', () => {
  const obj = {
    a : 1,
    b : [ 1, 2 ],
    c : { d : 7 },
    f : 'foo',
  }
  const result = {}
  const returned = forEach((
    val, prop, inputObj
  ) => {
    expect(type(inputObj)).toBe('Object')
    result[ prop ] = `${ prop }-${ type(val) }`
  })(obj)

  const expected = {
    a : 'a-Number',
    b : 'b-Array',
    c : 'c-Object',
    f : 'f-String',
  }

  expect(result).toEqual(expected)
  expect(returned).toEqual(obj)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('with wrong input', () => {
  const list = undefined
  const result = forEach(x => x * x)(list)

  expect(result).toBeUndefined()
})

test('returns the input', () => {
  const list = [ 1, 2, 3 ]
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEach)

### forEachIndexed

```typescript

forEachIndexed<T>(fn: IndexedIterator<T, void>, list: T[]): T[]
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
forEachIndexed<T>(fn: IndexedIterator<T, void>, list: T[]): T[];
forEachIndexed<T>(fn: IndexedIterator<T, void>): (list: T[]) => T[];
forEachIndexed<T>(fn: ObjectIterator<T, void>, list: Dictionary<T>): Dictionary<T>;
forEachIndexed<T, U>(fn: ObjectIterator<T, void>): (list: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.forEachIndexed</strong> source</summary>

```javascript
import { mapIndexed } from './mapIndexed.js'

export function forEachIndexed(fn, iterable){
  if (arguments.length === 1){
    return _iterable => forEachIndexed(fn, _iterable)
  }

  mapIndexed(fn, iterable)

  return iterable
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { forEachIndexed } from './forEachIndexed.js'

const list = [ 1, 2, 3 ]
const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const result = forEachIndexed(iterator, list)

  expect(result).toEqual(list)
})

test('curried', () => {
  const result = forEachIndexed(iterator)(list)

  expect(result).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEachIndexed)

### forEachObjIndexed

```typescript

forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;
```

</details>

<details>

<summary><strong>R.forEachObjIndexed</strong> source</summary>

```javascript
import { keys } from './_internals/keys.js'

export function forEachObjIndexedFn(fn, obj){
  let index = 0
  const listKeys = keys(obj)
  const len = listKeys.length

  while (index < len){
    const key = listKeys[ index ]
    fn(
      obj[ key ], key, obj
    )
    index++
  }

  return obj
}

export function forEachObjIndexed(fn, list){
  if (arguments.length === 1) return _list => forEachObjIndexed(fn, _list)
  if (list === undefined) return

  return forEachObjIndexedFn(fn, list)
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEachObjIndexed)

### fromPairs

```typescript

fromPairs<V>(listOfPairs: ([number, V])[]): { [index: number]: V }
```

It transforms a `listOfPairs` to an object.

```javascript
const listOfPairs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(listOfPairs)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listOfPairs%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(listOfPairs)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.fromPairs</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
fromPairs<V>(listOfPairs: ([number, V])[]): { [index: number]: V };
fromPairs<V>(listOfPairs: ([string, V])[]): { [index: string]: V };
```

</details>

<details>

<summary><strong>R.fromPairs</strong> source</summary>

```javascript
export function fromPairs(listOfPairs){
  const toReturn = {}
  listOfPairs.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { fromPairs } from './fromPairs.js'

const list = [
  [ 'a', 1 ],
  [ 'b', 2 ],
  [ 'c', [ 3, 4 ] ],
]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

test('happy', () => {
  expect(fromPairs(list)).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#fromPairs)

### getter

```typescript

getter<T>(keyOrKeys: string | string[] | undefined): T
```

The set of methods `R.setter`, `R.getter` and `R.reset` allow different parts of your logic to access communicate indirectly via shared cache object. 

Usually these methods show that you might need to refactor to classes. Still, they can be helpful meanwhile.

`R.getter`: It provides access to the cache object. If `undefined` is used as a key, this method will return the whole cache object. If `string` is passed, then it will return cache value for this key. If array of `string` is passed, then it assume that this is array of keys and it will return the corresponding cache values for these keys.

`R.setter`: It allows cache object's keys to be changed. You can either set individual key-value pairs with `R.setter(key, value)` or you pass directly object, which will be merged with the cache object.

`R.reset`: It resets the cache object.

```javascript
R.setter('foo','bar')
R.setter('a', 1)
R.getter(['foo','a']) // => {foo: 'bar', a: 1}

R.setter('a', 2)
R.getter('a') // => 2
R.reset()
R.getter('a') // => undefined
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.setter('foo'%2C'bar')%0AR.setter('a'%2C%201)%0AR.getter(%5B'foo'%2C'a'%5D)%20%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%2C%20a%3A%201%7D%0A%0AR.setter('a'%2C%202)%0AR.getter('a')%20%2F%2F%20%3D%3E%202%0AR.reset()%0Aconst%20result%20%3D%20R.getter('a')%20%2F%2F%20%3D%3E%20undefined">Try this <strong>R.getter</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
getter<T>(keyOrKeys: string | string[] | undefined): T;
```

</details>

<details>

<summary><strong>R.getter</strong> source</summary>

```javascript
import { mergeRight } from './mergeRight.js'
import { pick } from './pick.js'
import { type } from './type.js'

let holder = {}

/**
 * Pass string to get value
 * Pass array to get object of values
 * Pass undefined to get all data
 */
export function getter(key){
  const typeKey = type(key)

  if (typeKey === 'String') return holder[ key ]

  if (typeKey === 'Array') return pick(key, holder)

  return holder
}

export function setter(maybeKey, maybeValue){
  const typeKey = type(maybeKey)
  const typeValue = type(maybeValue)

  if (typeKey === 'String'){
    if (typeValue === 'Function'){
      return holder[ maybeKey ] = maybeValue(holder[ maybeKey ])
    }

    return holder[ maybeKey ] = maybeValue
  }

  if (typeKey !== 'Object') return

  holder = mergeRight(holder, maybeKey)
}

export function reset(){
  holder = {}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { getter, reset, setter } from './getter.js'

afterEach(() => {
  reset()
})

test('happy', () => {
  const key = 'foo'
  setter(key, 1)

  expect(getter(key)).toBe(1)
})

test('docs example', () => {
  setter('foo', 'bar')
  setter('a', 1)
  expect(getter([ 'foo', 'a' ])).toEqual({
    foo : 'bar',
    a   : 1,
  })

  setter('a', 2)
  expect(getter('a')).toBe(2)
  reset()
  expect(getter('a')).toBeUndefined()
})

test('when array is key in getter', () => {
  setter({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(getter([ 'a', 'b' ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('getter with undefined as key returns all', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)

  expect(getter()).toEqual(data)
})

test('function as setter value', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)
  setter('a', add(10))

  expect(getter()).toEqual({
    a : 11,
    b : 2,
    c : 3,
  })
})

test('setter fallbacks to undefined', () => {
  expect(setter()).toBeUndefined
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#getter)

### glue

```typescript

glue(input: string, glueString?: string): string
```

It transforms multiline string to single line by gluing together the separate lines with the `glueString` and removing the empty spaces. By default `glueString` is equal to single space, so if that is what you need, then you can just pass a single argument.

```javascript
const result = R.glue(`
  foo
  bar
  baz
`)
// => 'foo bar baz'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.glue(%60%0A%20%20foo%0A%20%20bar%0A%20%20baz%0A%60)%0A%2F%2F%20%3D%3E%20'foo%20bar%20baz'">Try this <strong>R.glue</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
glue(input: string, glueString?: string): string;
```

</details>

<details>

<summary><strong>R.glue</strong> source</summary>

```javascript
export function glue(input, glueChar){
  return input
    .split('\n')
    .filter(x => x.trim().length > 0)
    .map(x => x.trim())
    .join(glueChar === undefined ? ' ' : glueChar)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { glue } from './glue.js'

test('empty string as a glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '')

  const expectedResult = 'foobarbaz'

  expect(result).toBe(expectedResult)
})

test('case 0', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = false
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 1', () => {
  const zero = 'node node_modules/jest'
  const first = '--runInBand'
  const last = '-- src/a.spec.js'
  const flag = true
  const result = glue(`
    ${ zero }
    ${ first }
    ${ flag ? '--env=node' : '' }
    ${ last }
  `)

  const expectedResult = `${ zero } ${ first } --env=node ${ last }`

  expect(result).toBe(expectedResult)
})

test('case 2', () => {
  const first = '--runInBand'
  const result = glue(`
    zero
    ${ first }
    last
  `)
  const expectedResult = `zero ${ first } last`

  expect(result).toBe(expectedResult)
})

test('case 3', () => {
  const result = glue(`
    foo
    bar
    baz
  `)

  const expectedResult = 'foo bar baz'

  expect(result).toBe(expectedResult)
})

test('with glue', () => {
  const result = glue(`
    foo
    bar
    baz
  `,
  '==')

  const expectedResult = 'foo==bar==baz'

  expect(result).toBe(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#glue)

### groupBy

```typescript

groupBy<T, K extends string = string>(fn: (a: T) => K): (list: T[]) => Partial<Record<K, T[]>>
```

It splits `list` according to a provided `groupFn` function and returns an object.

```javascript
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'b'%2C%20'aa'%2C%20'bb'%20%5D%0Aconst%20groupFn%20%3D%20x%20%3D%3E%20x.length%0A%0Aconst%20result%20%3D%20R.groupBy(groupFn%2C%20list)%0A%2F%2F%20%3D%3E%20%7B%20'1'%3A%20%5B'a'%2C%20'b'%5D%2C%20'2'%3A%20%5B'aa'%2C%20'bb'%5D%20%7D">Try this <strong>R.groupBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
groupBy<T, K extends string = string>(fn: (a: T) => K): (list: T[]) => Partial<Record<K, T[]>>;
groupBy<T, K extends string = string>(fn: (a: T) => K, list: T[]): Partial<Record<K, T[]>>;
```

</details>

<details>

<summary><strong>R.groupBy</strong> source</summary>

```javascript
export function groupBy(groupFn, list){
  if (arguments.length === 1) return _list => groupBy(groupFn, _list)

  const result = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    const key = groupFn(item)

    if (!result[ key ]){
      result[ key ] = []
    }

    result[ key ].push(item)
  }

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { groupBy } from './groupBy.js'
import { prop } from './prop.js'

test('groupBy', () => {
  const list = [
    {
      age  : 12,
      name : 'john',
    },
    {
      age  : 12,
      name : 'jack',
    },
    {
      age  : 24,
      name : 'mary',
    },
    {
      age  : 24,
      name : 'steve',
    },
  ]
  const expectedResult = {
    12 : [
      {
        age  : 12,
        name : 'john',
      },
      {
        age  : 12,
        name : 'jack',
      },
    ],
    24 : [
      {
        age  : 24,
        name : 'mary',
      },
      {
        age  : 24,
        name : 'steve',
      },
    ],
  }

  expect(groupBy(prop('age'))(list)).toEqual(expectedResult)
  expect(groupBy(prop('age'), list)).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupBy)

### groupWith

```typescript

groupWith<T>(compareFn: (x: T, y: T) => boolean): (input: T[]) => (T[])[]
```

It returns separated version of list or string `input`, where separation is done with equality `compareFn` function.

```javascript
const isConsecutive = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20isConsecutive%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try this <strong>R.groupWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (input: T[]) => (T[])[];
groupWith<T>(compareFn: (x: T, y: T) => boolean, input: T[]): (T[])[];
groupWith<T>(compareFn: (x: T, y: T) => boolean, input: string): string[];
```

</details>

<details>

<summary><strong>R.groupWith</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { isArray } from './_internals/isArray.js'

export function groupWith(compareFn, list){
  if (!isArray(list)) throw new TypeError('list.reduce is not a function')

  const clone = cloneList(list)

  if (list.length === 1) return [ clone ]

  const toReturn = []
  let holder = []

  clone.reduce((
    prev, current, i
  ) => {
    if (i === 0) return current

    const okCompare = compareFn(prev, current)
    const holderIsEmpty = holder.length === 0
    const lastCall = i === list.length - 1

    if (okCompare){
      if (holderIsEmpty) holder.push(prev)
      holder.push(current)
      if (lastCall) toReturn.push(holder)

      return current
    }

    if (holderIsEmpty){
      toReturn.push([ prev ])
      if (lastCall) toReturn.push([ current ])

      return current
    }

    toReturn.push(holder)
    if (lastCall) toReturn.push([ current ])
    holder = []

    return current
  }, undefined)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals.js'
import { groupWith } from './groupWith.js'

test('issue is fixed', () => {
  const result = groupWith(equals, [ 1, 2, 2, 3 ])
  const expected = [ [ 1 ], [ 2, 2 ], [ 3 ] ]
  expect(result).toEqual(expected)
})

test('long list', () => {
  const result = groupWith(equals,
    [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 21, 21, 1, 2 ])

  const expected = [
    [ 0 ],
    [ 1, 1 ],
    [ 2 ],
    [ 3 ],
    [ 5 ],
    [ 8 ],
    [ 13 ],
    [ 21, 21, 21 ],
    [ 1 ],
    [ 2 ],
  ]
  expect(result).toEqual(expected)
})

test('readme example', () => {
  const list = [ 4, 3, 6, 2, 2, 1 ]

  const result = groupWith((a, b) => a - b === 1, list)
  const expected = [ [ 4, 3 ], [ 6 ], [ 2 ], [ 2, 1 ] ]
  expect(result).toEqual(expected)
})

test('throw with string as input', () => {
  expect(() =>
    groupWith(equals, 'Mississippi')).toThrowErrorMatchingInlineSnapshot('"list.reduce is not a function"')
})

const isConsecutive = function (a, b){
  return a + 1 === b
}

test('fix coverage', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 3, 0 ])).toEqual([ [ 1, 2, 3 ], [ 0 ] ])
})

test('from ramda 0', () => {
  expect(groupWith(equals, [])).toEqual([])
  expect(groupWith(isConsecutive, [])).toEqual([])
})

test('from ramda 1', () => {
  expect(groupWith(isConsecutive, [ 4, 3, 2, 1 ])).toEqual([
    [ 4 ],
    [ 3 ],
    [ 2 ],
    [ 1 ],
  ])
})

test('from ramda 2', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 3, 4 ])).toEqual([ [ 1, 2, 3, 4 ] ])
})

test('from ramda 3', () => {
  expect(groupWith(isConsecutive, [ 1, 2, 2, 3 ])).toEqual([
    [ 1, 2 ],
    [ 2, 3 ],
  ])
  expect(groupWith(isConsecutive, [ 1, 2, 9, 3, 4 ])).toEqual([
    [ 1, 2 ],
    [ 9 ],
    [ 3, 4 ],
  ])
})

test('list with single item', () => {
  const result = groupWith(equals, [ 0 ])

  const expected = [ [ 0 ] ]
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupWith)

### gt

```typescript

gt<T, U>(x: T, y: U): boolean
```

```javascript
const result = [R.gt(2, 1), R.gt(2, 3)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.gt(2%2C%201)%2C%20R.gt(2%2C%203)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.gt</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
gt<T, U>(x: T, y: U): boolean;
gt<T, U>(x: T): (y: U) => boolean;
```

</details>

<details>

<summary><strong>R.gt</strong> source</summary>

```javascript
export function gt(a, b){
  if (arguments.length === 1)
    return _b => gt(a, _b)

  return a > b
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#gt)

### gte

```typescript

gte<T, U>(x: T, y: U): boolean
```

```javascript
const result = [R.gte(2, 1), R.gte(2, 2), R.gte(2, 3)]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.gte(2%2C%201)%2C%20R.gte(2%2C%202)%2C%20R.gte(2%2C%203)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.gte</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
gte<T, U>(x: T, y: U): boolean;
gte<T, U>(x: T): (y: U) => boolean;
```

</details>

<details>

<summary><strong>R.gte</strong> source</summary>

```javascript
export function gte(a, b){
  if (arguments.length === 1)
    return _b => gte(a, _b)

  return a >= b
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#gte)

### has

```typescript

has<T>(prop: string, obj: T): boolean
```

It returns `true` if `obj` has property `prop`.

```javascript
const obj = {a: 1}

const result = [
  R.has('a', Record<string, unknown>),
  R.has('b', Record<string, unknown>)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.has('a'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.has('b'%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.has</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
```

</details>

<details>

<summary><strong>R.has</strong> source</summary>

```javascript
export function has(prop, obj){
  if (arguments.length === 1) return _obj => has(prop, _obj)

  if (!obj) return false

  return obj.hasOwnProperty(prop)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { has } from './has.js'

test('happy', () => {
  expect(has('a')({ a : 1 })).toBeTrue()
  expect(has('b', { a : 1 })).toBeFalse()
})

test('with non-object', () => {
  expect(has('a', undefined)).toBeFalse()
  expect(has('a', null)).toBeFalse()
  expect(has('a', true)).toBeFalse()
  expect(has('a', '')).toBeFalse()
  expect(has('a', /a/)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#has)

### hasIn

```typescript

hasIn(searchProperty: string): <T>(obj: T) => boolean
```

```javascript
const result = R.hasIn('a', {a: 1})
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.hasIn('a'%2C%20%7Ba%3A%201%7D)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.hasIn</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
hasIn(searchProperty: string): <T>(obj: T) => boolean;
hasIn<T>(searchProperty: string, obj: T): boolean;
```

</details>

<details>

<summary><strong>R.hasIn</strong> source</summary>

```javascript
import { propFn } from './prop.js';

export function hasIn(searchProperty, obj) {
	if (arguments.length === 1) {
		return (_obj) => hasIn(searchProperty, _obj);
	}

	return propFn(searchProperty, obj) !== undefined;
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { hasIn as hasInRamda } from 'ramda'

import { hasIn } from './hasIn.js'

const fred = {
  age  : 23,
  name : 'Fred',
}
const anon = { age : 99 }

test('returns a function that checks the appropriate property', () => {
  const nm = hasIn('name')
  expect(typeof nm).toBe('function')
  expect(nm(fred)).toBe(true)
  expect(nm(anon)).toBe(false)
})

test('checks properties from the prototype chain', () => {
  function Person(){}
  Person.prototype.age = function (){}

  const bob = new Person()
  expect(hasIn('age', bob)).toBe(true)
})

test('works properly when called with two arguments', () => {
  expect(hasIn('name', fred)).toBe(true)
  expect(hasIn('name', anon)).toBe(false)
})

test('returns false when non-existent object', () => {
  expect(hasIn('name', null)).toBe(false)
  expect(hasIn('name', undefined)).toBe(false)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#hasIn)

### hasPath

```typescript

hasPath<T>(
  path: string | string[],
  input: object
): boolean
```

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

```javascript
const path = 'a.b'
const pathAsArray = ['a', 'b']
const obj = {a: {b: []}}

const result = [
  R.hasPath(path, Record<string, unknown>),
  R.hasPath(pathAsArray, Record<string, unknown>),
  R.hasPath('a.c', Record<string, unknown>),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20pathAsArray%20%3D%20%5B'a'%2C%20'b'%5D%0Aconst%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%20%5B%5D%7D%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.hasPath(path%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.hasPath(pathAsArray%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.hasPath('a.c'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.hasPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
hasPath<T>(
  path: string | string[],
  input: object
): boolean;
hasPath<T>(
  path: string | string[]
): (input: object) => boolean;
```

</details>

<details>

<summary><strong>R.hasPath</strong> source</summary>

```javascript
import { path } from './path.js'

export function hasPath(pathInput, obj){
  if (arguments.length === 1){
    return objHolder => hasPath(pathInput, objHolder)
  }

  return path(pathInput, obj) !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { hasPath } from './hasPath.js'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : [] } }

  const result = hasPath(path)(obj)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const path = 'a.b'
  const obj = {}

  const result = hasPath(path, obj)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#hasPath)

### head

```typescript

head(str: string): string
```

It returns the first element of list or string `input`. It returns `undefined` if array has length of 0.

```javascript
const result = [
  R.head([1, 2, 3]),
  R.head('foo') 
]
// => [1, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.head(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.head('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'f'%5D">Try this <strong>R.head</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
head(str: string): string;
head(str: ''): undefined;
head(list: readonly[]): undefined;
head<T>(list: never[]): undefined;
head<T extends unknown[]>(array: T): FirstArrayElement<T>
head<T extends readonly unknown[]>(array: T): FirstArrayElement<T>
```

</details>

<details>

<summary><strong>R.head</strong> source</summary>

```javascript
export function head(listOrString){
  if (typeof listOrString === 'string') return listOrString[ 0 ] || ''

  return listOrString[ 0 ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { head } from './head.js'

test('head', () => {
  expect(head([ 'fi', 'fo', 'fum' ])).toBe('fi')
  expect(head([])).toBeUndefined()
  expect(head('foo')).toBe('f')
  expect(head('')).toBe('')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#head)

### identical

```typescript

identical<T>(x: T, y: T): boolean
```

It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.

> :boom: Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.

```javascript
const objA = {a: 1};
const objB = {a: 1};
R.identical(objA, objA); // => true
R.identical(objA, objB); // => false
R.identical(1, 1); // => true
R.identical(1, '1'); // => false
R.identical([], []); // => false
R.identical(0, -0); // => false
R.identical(NaN, NaN); // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20objA%20%3D%20%7Ba%3A%201%7D%3B%0Aconst%20objB%20%3D%20%7Ba%3A%201%7D%3B%0AR.identical(objA%2C%20objA)%3B%20%2F%2F%20%3D%3E%20true%0AR.identical(objA%2C%20objB)%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(1%2C%201)%3B%20%2F%2F%20%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.identical(NaN%2C%20NaN)%3B%20%2F%2F%20%3D%3E%20true">Try this <strong>R.identical</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
identical<T>(x: T, y: T): boolean;
identical<T>(x: T): (y: T) => boolean;
```

</details>

<details>

<summary><strong>R.identical</strong> source</summary>

```javascript
import { objectIs } from './_internals/objectIs.js'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return objectIs(a, b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { F, T } from '../rambda.js'
import { identical } from './identical.js'

test('r.F and R.T', () => {
  expect(F()).toBeFalse()
  expect(T()).toBeTrue()
})

test('identical', () => {
  const a = { a : 1 }
  const b = { a : 1 }
  const c = {
    a : 1,
    b : 2,
  }

  expect(identical(100)(100)).toBeTrue()
  expect(identical(100, '100')).toBeFalse()
  expect(identical('string', 'string')).toBeTrue()
  expect(identical([], [])).toBeFalse()
  expect(identical(a, a)).toBeTrue()
  expect(identical(a, b)).toBeFalse()
  expect(identical(a, c)).toBeFalse()
  expect(identical(undefined, undefined)).toBeTrue()
  expect(identical(null, undefined)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identical)

### identity

```typescript

identity<T>(input: T): T
```

It just passes back the supplied `input` argument.

> :boom: Logic

```javascript
R.identity(7) // => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try this <strong>R.identity</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
identity<T>(input: T): T;
```

</details>

<details>

<summary><strong>R.identity</strong> source</summary>

```javascript
export function identity(x){
  return x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { identity } from './identity.js'

test('happy', () => {
  expect(identity(7)).toBe(7)
  expect(identity(true)).toBeTrue()
  expect(identity({ a : 1 })).toEqual({ a : 1 })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identity)

### ifElse

```typescript

ifElse<T, TFiltered extends T, TOnTrueResult, TOnFalseResult>(
  pred: (a: T) => a is TFiltered,
  onTrue: (a: TFiltered) => TOnTrueResult,
  onFalse: (a: Exclude<T, TFiltered>) => TOnFalseResult,
): (a: T) => TOnTrueResult | TOnFalseResult
```

It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.

```javascript
const fn = R.ifElse(
 x => x>10,
 x => x*2,
 x => x*10
)

const result = [ fn(8), fn(18) ]
// => [80, 36]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%3E10%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20%5B%20fn(8)%2C%20fn(18)%20%5D%0A%2F%2F%20%3D%3E%20%5B80%2C%2036%5D">Try this <strong>R.ifElse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ifElse<T, TFiltered extends T, TOnTrueResult, TOnFalseResult>(
  pred: (a: T) => a is TFiltered,
  onTrue: (a: TFiltered) => TOnTrueResult,
  onFalse: (a: Exclude<T, TFiltered>) => TOnFalseResult,
): (a: T) => TOnTrueResult | TOnFalseResult;
ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult;
```

</details>

<details>

<summary><strong>R.ifElse</strong> source</summary>

```javascript
import { curry } from './curry.js'

function ifElseFn(
  condition, onTrue, onFalse
){
  return (...input) => {
		const conditionResult =
      typeof condition === 'boolean' ? condition : condition(...input)
    if (Boolean(conditionResult) ){
      return onTrue(...input)
    }

    return onFalse(...input)
  }
}

export const ifElse = curry(ifElseFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always.js'
import { has } from './has.js'
import { identity } from './identity.js'
import { ifElse } from './ifElse.js'
import { prop } from './prop.js'
import * as R from 'ramda'

const condition = has('foo')
const v = function (a){
  return typeof a === 'number'
}
const t = function (a){
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toBe(3)
  expect(fn({ fo : 'bar' })).toBeFalse()
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toBe(16)
  expect(ifIsNumber(t, identity)('hello')).toBe('hello')
})

test('pass all arguments', () => {
  const identity = function (a){
    return a
  }
  const v = function (){
    return true
  }
  const onTrue = function (a, b){
    expect(a).toBe(123)
    expect(b).toBe('abc')
  }
  ifElse(
    v, onTrue, identity
  )(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toBeTrue()
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(
    false, always(true), always(false)
  )

  expect(fn()).toBeFalse()
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toBe(3)
  expect(fn({ fo : 'bar' })).toBeFalse()
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toBe(3)
  expect(fn({ fo : 'bar' })).toBeFalse()
})

test('simple arity of 1', () => {
  const condition = x => x > 5
  const onTrue = x => x + 1
  const onFalse = x => x + 10
  const result = ifElse(
    condition, onTrue, onFalse
  )(1)
  expect(result).toBe(11)
})

test('simple arity of 2', () => {
  const condition = (x, y) => x + y > 5
  const onTrue = (x, y) => x + y + 1
  const onFalse = (x, y) => x + y + 10
  const result = ifElse(
    condition, onTrue, onFalse
  )(1, 10)
  expect(result).toBe(12)
})

test('bug 750', () => {
	const value = 34;

	let result = ifElse(
	R.identity,
	R.always('true'),
	R.always('false')
	)(value)
	expect(result).toBe('true')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElse)

### ifElseAsync

```typescript

ifElseAsync<T, U>(
  condition: (x: T) => Promise<boolean>, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
  ): (x: T) => Promise<U>
```

Asynchronous version of `R.ifElse`. Any of `condition`, `ifFn` and `elseFn` can be either asynchronous or synchronous function.

```javascript
const condition = async x => {
  await R.delay(100)
  return x > 1
}
const ifFn = async x => {
  await R.delay(100)
  return x + 1
}
const elseFn = async x => {
  await R.delay(100)
  return x - 1
}

const result = await R.ifElseAsync(
  condition,
  ifFn,
  elseFn  
)(1)
// => 0
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%3E%201%0A%7D%0Aconst%20ifFn%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%2B%201%0A%7D%0Aconst%20elseFn%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20-%201%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.ifElseAsync(%0A%20%20condition%2C%0A%20%20ifFn%2C%0A%20%20elseFn%20%20%0A)(1)%0A%2F%2F%20%3D%3E%200">Try this <strong>R.ifElseAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ifElseAsync<T, U>(
  condition: (x: T) => Promise<boolean>, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
  ): (x: T) => Promise<U>;
ifElseAsync<T, U>(
  condition: (x: T) => boolean, 
  onTrue: (x: T) => Promise<U>, 
  onFalse: (x: T) => Promise<U>, 
): (x: T) => Promise<U>;
ifElseAsync<T, U>(
  condition: (x: T) => Promise<boolean>, 
  onTrue: (x: T) => Promise<U>, 
  onFalse: (x: T) => Promise<U>, 
): (x: T) => Promise<U>;
ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => Promise<boolean>, 
  onTrue: (x: T, y: K) => U, 
  onFalse: (x: T, y: K) => U, 
): (x: T, y: K) => Promise<U>;
ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => boolean, 
  onTrue: (x: T, y: K) => Promise<U>, 
  onFalse: (x: T, y: K) => Promise<U>, 
): (x: T, y: K) => Promise<U>;
ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => Promise<boolean>, 
  onTrue: (x: T, y: K) => Promise<U>, 
  onFalse: (x: T, y: K) => Promise<U>, 
): (x: T, y: K) => Promise<U>;
```

</details>

<details>

<summary><strong>R.ifElseAsync</strong> source</summary>

```javascript
function createThenable(fn){
  return async function (...input){
    return fn(...input)
  }
}

export function ifElseAsync(
  condition, ifFn, elseFn
){
  return (...inputs) =>
    new Promise((resolve, reject) => {
      const conditionPromise = createThenable(condition)
      const ifFnPromise = createThenable(ifFn)
      const elseFnPromise = createThenable(elseFn)

      conditionPromise(...inputs)
        .then(conditionResult => {
          const promised =
            conditionResult === true ? ifFnPromise : elseFnPromise

          promised(...inputs)
            .then(resolve)
            .catch(reject)
        })
        .catch(reject)
    })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { ifElseAsync } from './ifElseAsync.js'

test('arity of 1 - condition is async', async () => {
  const condition = async x => {
    await delay(100)

    return x > 4
  }
  const whenTrue = x => x + 1
  const whenFalse = x => x + 10
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(5), fn(1) ])
  expect(result).toEqual([ 6, 11 ])
})

test('arity of 1 - condition is sync', async () => {
  const condition = x => x > 4
  const whenTrue = async x => {
    await delay(100)

    return x + 1
  }
  const whenFalse = async x => {
    await delay(100)

    return x + 10
  }
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(5), fn(1) ])
  expect(result).toEqual([ 6, 11 ])
})

test('arity of 1 - all inputs are async', async () => {
  const condition = async x => {
    await delay(100)

    return x > 4
  }
  const whenTrue = async x => {
    await delay(100)

    return x + 1
  }
  const whenFalse = async x => {
    await delay(100)

    return x + 10
  }
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(5), fn(1) ])
  expect(result).toEqual([ 6, 11 ])
})

test('arity of 2 - condition is async', async () => {
  const condition = async (x, y) => {
    await delay(100)

    return x + y > 4
  }
  const whenTrue = (x, y) => x + y + 1
  const whenFalse = (x, y) => x + y + 10
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(14, 20), fn(1, 3) ])
  expect(result).toEqual([ 35, 14 ])
})

test('arity of 2 - condition is sync', async () => {
  const condition = (x, y) => x + y > 4
  const whenTrue = async (x, y) => {
    await delay(100)

    return x + y + 1
  }
  const whenFalse = async (x, y) => {
    await delay(100)

    return x + y + 10
  }
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(14, 20), fn(1, 3) ])
  expect(result).toEqual([ 35, 14 ])
})

test('arity of 2 - all inputs are async', async () => {
  const condition = async (x, y) => {
    await delay(100)

    return x + y > 4
  }
  const whenTrue = async (x, y) => {
    await delay(100)

    return x + y + 1
  }
  const whenFalse = async (x, y) => {
    await delay(100)

    return x + y + 10
  }
  const fn = ifElseAsync(
    condition, whenTrue, whenFalse
  )
  const result = await Promise.all([ fn(14, 20), fn(1, 3) ])
  expect(result).toEqual([ 35, 14 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElseAsync)

### inc

```typescript

inc(x: number): number
```

It increments a number.

```javascript
R.inc(1) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try this <strong>R.inc</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
inc(x: number): number;
```

</details>

<details>

<summary><strong>R.inc</strong> source</summary>

```javascript
export const inc = x => x + 1
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { inc } from './inc.js'

test('happy', () => {
  expect(inc(1)).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#inc)

### includes

```typescript

includes<T extends string>(valueToFind: T, input: string): boolean
```

If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
const result = [
  R.includes('oo', 'foo'),
  R.includes({a: 1}, [{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.includes('oo'%2C%20'foo')%2C%0A%20%20R.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try this <strong>R.includes</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
includes<T extends string>(valueToFind: T, input: string): boolean;
includes<T extends string>(valueToFind: T): (input: string) => boolean;
includes<T>(valueToFind: T, input: T[]): boolean;
includes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { _indexOf } from './equals.js'

export function includes(valueToFind, iterable){
  if (arguments.length === 1)
    return _iterable => includes(valueToFind, _iterable)
  if (typeof iterable === 'string'){
    return iterable.includes(valueToFind)
  }
  if (!iterable){
    throw new TypeError(`Cannot read property \'indexOf\' of ${ iterable }`)
  }
  if (!isArray(iterable)) return false

  return _indexOf(valueToFind, iterable) > -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { includes as includesRamda } from 'ramda'

import { includes } from './includes.js'

test('with string as iterable', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTrue()
  expect(includesRamda('bar')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(includesRamda('never', str)).toBeFalse()
})

test('with array as iterable', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTrue()
  expect(includesRamda(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(includesRamda(4, arr)).toBeFalse()
})

test('with list of objects as iterable', () => {
  const arr = [ { a : 1 }, { b : 2 }, { c : 3 } ]

  expect(includes({ c : 3 }, arr)).toBeTrue()
  expect(includesRamda({ c : 3 }, arr)).toBeTrue()
})

test('with NaN', () => {
  const result = includes(NaN, [ NaN ])
  const ramdaResult = includesRamda(NaN, [ NaN ])
  expect(result).toBeTrue()
  expect(ramdaResult).toBeTrue()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = includesRamda(1, /foo/g)
  expect(result).toBeFalse()
  expect(ramdaResult).toBeFalse()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(() => includesRamda(2, null)).toThrowWithMessage(TypeError,
    'Cannot read properties of null (reading \'indexOf\')')
  expect(() => includes(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
  expect(() => includesRamda(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read properties of undefined (reading \'indexOf\')')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#includes)

### indexBy

```typescript

indexBy<T, K extends string | number = string>(condition: (key: T) => K, list: T[]): { [key in K]: T }
```

It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.

```javascript
const list = [ {id: 10}, {id: 20} ]

const withFunction = R.indexBy(
  x => x.id,
  list
)
const withString = R.indexBy(
  'id',
  list
)
const result = [
  withFunction, 
  R.equals(withFunction, withString)
]
// => [ { 10: {id: 10}, 20: {id: 20} }, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%7Bid%3A%2010%7D%2C%20%7Bid%3A%2020%7D%20%5D%0A%0Aconst%20withFunction%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20list%0A)%0Aconst%20withString%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20list%0A)%0Aconst%20result%20%3D%20%5B%0A%20%20withFunction%2C%20%0A%20%20R.equals(withFunction%2C%20withString)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%7B%2010%3A%20%7Bid%3A%2010%7D%2C%2020%3A%20%7Bid%3A%2020%7D%20%7D%2C%20true%20%5D">Try this <strong>R.indexBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
indexBy<T, K extends string | number = string>(condition: (key: T) => K, list: T[]): { [key in K]: T };
indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K, list: T[]): { [key in NonNullable<K>]?: T };
indexBy<T, K extends string | number = string>(condition: (key: T) => K): (list: T[]) => { [key in K]: T };
indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K | undefined): (list: T[]) => { [key in NonNullable<K>]?: T };
indexBy<T>(condition: string, list: T[]): { [key: string]: T };
indexBy<T>(condition: string): (list: T[]) => { [key: string]: T };
```

</details>

<details>

<summary><strong>R.indexBy</strong> source</summary>

```javascript
import { path } from './path.js'

function indexByPath(pathInput, list){
  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ path(pathInput, item) ] = item
  }

  return toReturn
}

export function indexBy(condition, list){
  if (arguments.length === 1){
    return _list => indexBy(condition, _list)
  }

  if (typeof condition === 'string'){
    return indexByPath(condition, list)
  }

  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ condition(item) ] = item
  }

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexBy } from './indexBy.js'
import { prop } from './prop.js'

test('happy', () => {
  const list = [
    { id : 1 },
    {
      id : 1,
      a  : 2,
    },
    { id : 2 },
    { id : 10 },
    { id : 'a' },
  ]

  expect(indexBy(prop('id'))(list)).toEqual({
    1 : {
      id : 1,
      a  : 2,
    },
    2  : { id : 2 },
    10 : { id : 10 },
    a  : { id : 'a' },
  })
})

test('with string as condition', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]
  const standardResult = indexBy(obj => obj.id, list)
  const suggestionResult = indexBy('id', list)

  expect(standardResult).toEqual(suggestionResult)
})

test('with string - bad path', () => {
  const list = [
    {
      a : {
        b : 1,
        c : 2,
      },
    },
    { a : { c : 4 } },
    {},
    {
      a : {
        b : 10,
        c : 20,
      },
    },
  ]

  const result = indexBy('a.b', list)
  const expected = {
    1 : {
      a : {
        b : 1,
        c : 2,
      },
    },
    10 : {
      a : {
        b : 10,
        c : 20,
      },
    },
    undefined : {},
  }

  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexBy)

### indexOf

```typescript

indexOf<T>(valueToFind: T, list: T[]): number
```

It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

> :boom: It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.

```javascript
const list = [0, 1, 2, 3]

const result = [
  R.indexOf(2, list),
  R.indexOf(0, list)
]
// => [2, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.indexOf(2%2C%20list)%2C%0A%20%20R.indexOf(0%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%20-1%5D">Try this <strong>R.indexOf</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
indexOf<T>(valueToFind: T, list: T[]): number;
indexOf<T>(valueToFind: T): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.indexOf</strong> source</summary>

```javascript
import { _indexOf } from './equals.js'

export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexOf as indexOfRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { indexOf } from './indexOf.js'

test('with NaN', () => {
  expect(indexOf(NaN, [ NaN ])).toBe(0)
})

test('will throw with bad input', () => {
  expect(indexOfRamda([], true)).toBe(-1)
  expect(() => indexOf([], true)).toThrow()
})

test('without list of objects - no R.equals', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toBe(2)
  expect(indexOf(10)([ 1, 2, 3, 4 ])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [ { a : 1 }, { b : 2 }, { c : 3 } ]
  expect(indexOf({ c : 4 }, listOfObjects)).toBe(-1)
  expect(indexOf({ c : 3 }, listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [ [ 1 ], [ 2, 3 ], [ 2, 3, 4 ], [ 2, 3 ], [ 1 ], [] ]
  expect(indexOf([], listOfLists)).toBe(5)
  expect(indexOf([ 1 ], listOfLists)).toBe(0)
  expect(indexOf([ 2, 3, 4 ], listOfLists)).toBe(2)
  expect(indexOf([ 2, 3, 5 ], listOfLists)).toBe(-1)
})

test('with string as iterable', () => {
  expect(() => indexOf('a', 'abc')).toThrowWithMessage(Error,
    'Cannot read property \'indexOf\' of abc')
  expect(indexOfRamda('a', 'abc')).toBe(0)
})

export const possibleTargets = [
  x => x > 2,
  /foo/,
  'foo',
  { a : 1 },
  true,
  3,
  null,
  /bar/g,
  NaN,
  undefined,
  4,
  [],
  [ [] ],
  [ [ 1 ], [ 2 ] ],
  { a : 1 },
  { a : 2 },
  Promise.resolve(1),
]

export const possibleIterables = [
  [
    1,
    2,
    new Boolean(true),
    false,
    true,
    new String('foo'),
    new Number(3),
    null,
    undefined,
  ],
  [ /foo/g, /bar/, /bar/g, NaN ],
  [ 1, 2, 3 ],
  [ 1, [ [], [] ] ],
  [ { a : 3 }, { a : 2 }, { a : 1 } ],
  {},
  null,
  undefined,
  true,
  'foo',
]

describe('brute force', () => {
  compareCombinations({
    fn          : indexOf,
    fnRamda     : indexOfRamda,
    firstInput  : possibleTargets,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 34,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 170,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexOf)

### init

```typescript

init<T extends unknown[]>(input: T): T extends readonly [...infer U, any] ? U : [...T]
```

It returns all but the last element of list or string `input`.

```javascript
const result = [
  R.init([1, 2, 3]) , 
  R.init('foo')  // => 'fo'
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.init(%5B1%2C%202%2C%203%5D)%20%2C%20%0A%20%20R.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try this <strong>R.init</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
init<T extends unknown[]>(input: T): T extends readonly [...infer U, any] ? U : [...T];
init(input: string): string;
```

</details>

<details>

<summary><strong>R.init</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice.js'

export function init(listOrString){
  if (typeof listOrString === 'string') return listOrString.slice(0, -1)

  return listOrString.length ?
    baseSlice(
      listOrString, 0, -1
    ) :
    []
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { init } from './init.js'

test('with array', () => {
  expect(init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toEqual([ 1 ])
  expect(init([ 1 ])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([ 1 ])).toEqual([])
})

test('with string', () => {
  expect(init('foo')).toBe('fo')
  expect(init('f')).toBe('')
  expect(init('')).toBe('')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#init)

### innerJoin

```typescript

innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: T1[], list2: T2[]) => T1[]
```

It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.

```javascript
const list1 = [1, 2, 3, 4, 5]
const list2 = [4, 5, 6]
const predicate = (x, y) => x >= y
const result = R.innerJoin(predicate, list1, list2)
// => [4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20list2%20%3D%20%5B4%2C%205%2C%206%5D%0Aconst%20predicate%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3E%3D%20y%0Aconst%20result%20%3D%20R.innerJoin(predicate%2C%20list1%2C%20list2)%0A%2F%2F%20%3D%3E%20%5B4%2C%205%5D">Try this <strong>R.innerJoin</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: T1[], list2: T2[]) => T1[];
innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];
innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: T1[], list2: T2[]): T1[];
```

</details>

<details>

<summary><strong>R.innerJoin</strong> source</summary>

```javascript
import { curry } from './curry.js'

function _includesWith(
  pred, x, list
){
  let idx = 0
  const len = list.length

  while (idx < len){
    if (pred(x, list[ idx ]))
      return true

    idx += 1
  }

  return false
}
function _filter(fn, list){
  let idx = 0
  const len = list.length
  const result = []

  while (idx < len){
    if (fn(list[ idx ]))
      result[ result.length ] = list[ idx ]

    idx += 1
  }

  return result
}

export function innerJoinFn(
  pred, xs, ys
){
  return _filter(x => _includesWith(
    pred, x, ys
  ), xs)
}

export const innerJoin = curry(innerJoinFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { innerJoin } from './innerJoin.js'

const a = {
  id: 1,
  name: 'a',
}
const b = {
  id: 2,
  name: 'b',
}
const c = {
  id: 3,
  name: 'c',
}
const f = innerJoin((r, id) => r.id === id)

test('only returns elements from the first list', () => {
  expect(f([a, b, c], [])).toEqual([])
  expect(f([a, b, c], [1])).toEqual([a])
  expect(f([a, b, c], [1, 2])).toEqual([a, b])
  expect(f([a, b, c], [1, 2, 3])).toEqual([a, b, c])
  expect(f([a, b, c], [1, 2, 3, 4])).toEqual([a, b, c])
})

test('does not remove duplicates', () => {
  expect(f([a, a, a], [1, 2, 3])).toEqual([a, a, a])
  expect(f([a, b, c], [1, 1, 1])).toEqual([a])
})

test('readme example', () => {
  const list1 = [1, 2, 3, 4, 5]
  const list2 = [4, 5, 6]
  const predicate = (x, y) => x >= y
  const result = innerJoin(predicate, list1, list2)
  expect(result).toEqual([4, 5])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#innerJoin)

### insert

```typescript

insert(index: number): <T>(itemToInsert: T, list: T[]) => T[]
```

```javascript
const list = ['a', 'b', 'c', 'd', 'e'];
const result = R.insert(2, 'x', list);
// => ['a', 'b', 'x', 'c', 'd', 'e']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%2C%20'd'%2C%20'e'%5D%3B%0Aconst%20result%20%3D%20R.insert(2%2C%20'x'%2C%20list)%3B%0A%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'x'%2C%20'c'%2C%20'd'%2C%20'e'%5D">Try this <strong>R.insert</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
insert(index: number): <T>(itemToInsert: T, list: T[]) => T[];
insert<T>(index: number, itemToInsert: T): (list: T[]) => T[];
insert<T>(index: number, itemToInsert: T, list: T[]): T[];
```

</details>

<details>

<summary><strong>R.insert</strong> source</summary>

```javascript
import { curry } from './curry.js'

export function insertFn(indexToInsert, valueToInsert, array) {
  return [
    ...array.slice(0, indexToInsert),
    valueToInsert,
    ...array.slice(indexToInsert),
  ]
}

export const insert = curry(insertFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { insert } from './insert';

it('inserts an element into the given list', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insert(2, 'x', list)).toEqual(['a', 'b', 'x', 'c', 'd', 'e']);
});

it('inserts another list as an element', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insert(2, ['s', 't'], list)).toEqual([
		'a',
		'b',
		['s', 't'],
		'c',
		'd',
		'e',
	]);
});

it('appends to the end of the list if the index is too large', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insert(8, 'z', list)).toEqual(['a', 'b', 'c', 'd', 'e', 'z']);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#insert)

### insertAll

```typescript

insertAll(index: number): <T>(itemsToInsert: T[], list: T[]) => T[]
```

```javascript
const list = ['a', 'b', 'c', 'd', 'e'];
const result = R.insertAll(2, ['x', 'y', 'z'], list);
// => ['a', 'b', 'x', 'y', 'z', 'c', 'd', 'e']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%2C%20'd'%2C%20'e'%5D%3B%0Aconst%20result%20%3D%20R.insertAll(2%2C%20%5B'x'%2C%20'y'%2C%20'z'%5D%2C%20list)%3B%0A%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'x'%2C%20'y'%2C%20'z'%2C%20'c'%2C%20'd'%2C%20'e'%5D">Try this <strong>R.insertAll</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
insertAll(index: number): <T>(itemsToInsert: T[], list: T[]) => T[];
insertAll<T>(index: number, itemsToInsert: T[]): (list: T[]) => T[];
insertAll<T>(index: number, itemsToInsert: T[], list: T[]): T[];
```

</details>

<details>

<summary><strong>R.insertAll</strong> source</summary>

```javascript
import { curry } from './curry.js';

export function insertAllFn(index, listToInsert, list) {
	return [...list.slice(0, index), ...listToInsert, ...list.slice(index)];
}

export const insertAll = curry(insertAllFn);
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { insertAll } from './insertAll';

it('inserts a list of elements into the given list', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insertAll(2, ['x', 'y', 'z'], list)).toEqual([
		'a',
		'b',
		'x',
		'y',
		'z',
		'c',
		'd',
		'e',
	]);
});

it('appends to the end of the list if the index is too large', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insertAll(8, ['p', 'q', 'r'], list)).toEqual([
		'a',
		'b',
		'c',
		'd',
		'e',
		'p',
		'q',
		'r',
	]);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#insertAll)

### interpolate

```typescript

interpolate(inputWithTags: string, templateArguments: object): string
```

It generates a new string from `inputWithTags` by replacing all `{{x}}` occurrences with values provided by `templateArguments`.

```javascript
const inputWithTags = 'foo is {{bar}} even {{a}} more'
const templateArguments = {"bar":"BAR", a: 1}

const result = R.interpolate(inputWithTags, templateArguments)
const expected = 'foo is BAR even 1 more'
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20inputWithTags%20%3D%20'foo%20is%20%7B%7Bbar%7D%7D%20even%20%7B%7Ba%7D%7D%20more'%0Aconst%20templateArguments%20%3D%20%7B%22bar%22%3A%22BAR%22%2C%20a%3A%201%7D%0A%0Aconst%20result%20%3D%20R.interpolate(inputWithTags%2C%20templateArguments)%0Aconst%20expected%20%3D%20'foo%20is%20BAR%20even%201%20more'%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.interpolate</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
interpolate(inputWithTags: string, templateArguments: object): string;
interpolate(inputWithTags: string): (templateArguments: object) => string;
```

</details>

<details>

<summary><strong>R.interpolate</strong> source</summary>

```javascript
const getOccurrences = input => input.match(/{{\s*.+?\s*}}/g)

const getOccurrenceProp = occurrence =>
  occurrence.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) => {
  const regexBase = `{{${ prop }}}`
  const regex = new RegExp(regexBase, 'g')

  return inputHolder.replace(regex, replacer)
}

export function interpolate(input, templateInput){
  if (arguments.length === 1){
    return _templateInput => interpolate(input, _templateInput)
  }

  const occurrences = getOccurrences(input)
  if (occurrences === null) return input
  let inputHolder = input

  for (const occurrence of occurrences){
    const prop = getOccurrenceProp(occurrence)

    inputHolder = replace({
      inputHolder,
      prop,
      replacer : templateInput[ prop ],
    })
  }

  return inputHolder
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { interpolate } from './interpolate.js'

test('within bracets', () => {
  const input = 'foo is { {{bar}} } even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is { BAR } even 1 more'

  expect(result).toEqual(expectedResult)
})

test('happy', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is BAR even 1 more'

  expect(result).toEqual(expectedResult)
})

test('no interpolation + curry', () => {
  const input = 'foo is bar even more'
  const templateInput = { bar : 'BAR' }

  const result = interpolate(input)(templateInput)
  const expectedResult = 'foo is bar even more'

  expect(result).toEqual(expectedResult)
})

test('with missing template input', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    baz : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is undefined even 1 more'

  expect(result).toEqual(expectedResult)
})

test('with arbitrary expression', () => {
  const input = '1 + 2 = {{ 1 + 2 }}'
  const templateInput = {}

  const result = interpolate(input, templateInput)

  expect(result).toEqual(input)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#interpolate)

### intersection

```typescript

intersection<T>(listA: T[], listB: T[]): T[]
```

It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.

> :boom: There is slight difference between Rambda and Ramda implementation. Ramda.intersection(['a', 'b', 'c'], ['c', 'b']) result is "[ 'c', 'b' ]", but Rambda result is "[ 'b', 'c' ]".

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = R.intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20R.intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try this <strong>R.intersection</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
intersection<T>(listA: T[], listB: T[]): T[];
intersection<T>(listA: T[]): (listB: T[]) => T[];
```

</details>

<details>

<summary><strong>R.intersection</strong> source</summary>

```javascript
import { filter } from './filter.js'
import { includes } from './includes.js'

export function intersection(listA, listB){
  if (arguments.length === 1) return _list => intersection(listA, _list)

  return filter(x => includes(x, listA), listB)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersection as intersectionRamda } from 'ramda'

import { intersection } from './intersection.js'

test('intersection', () => {
  const list1 = [ 1, 2, 3, 4 ]
  const list2 = [ 3, 4, 5, 6 ]
  expect(intersection(list1)(list2)).toEqual([ 3, 4 ])

  expect(intersection([], [])).toEqual([])
})

test('intersection with objects', () => {
  const list1 = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const list2 = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(intersection(list1)(list2)).toEqual([ { id : 3 }, { id : 4 } ])
})

test('order is the same as in Ramda', () => {
  const list = [ 'a', 'b', 'c', 'd' ]

  expect(intersectionRamda(list, [ 'b', 'c' ])).toEqual([ 'b', 'c' ])
  expect(intersection(list, [ 'b', 'c' ])).toEqual([ 'b', 'c' ])

  expect(intersection(list, [ 'c', 'b' ])).toEqual([ 'c', 'b' ])
  expect(intersectionRamda(list, [ 'c', 'b' ])).toEqual([ 'c', 'b' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

```typescript

intersperse<T>(separator: T, list: T[]): T[]
```

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = '|'
const result = intersperse(separator, list)
// => [0, '|', 1, '|', 2, '|', 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%20'%7C'%2C%201%2C%20'%7C'%2C%202%2C%20'%7C'%2C%203%5D">Try this <strong>R.intersperse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
intersperse<T>(separator: T, list: T[]): T[];
intersperse<T>(separator: T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.intersperse</strong> source</summary>

```javascript
export function intersperse(separator, list){
  if (arguments.length === 1) return _list => intersperse(separator, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    if (index === len - 1){
      willReturn.push(list[ index ])
    } else {
      willReturn.push(list[ index ], separator)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersperse } from './intersperse.js'

test('intersperse', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]
  expect(intersperse('!', list)).toEqual([
    { id : 1 },
    '!',
    { id : 2 },
    '!',
    { id : 10 },
    '!',
    { id : 'a' },
  ])

  expect(intersperse('!')([])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersperse)

### is

```typescript

is<C extends () => any>(targetPrototype: C, val: any): val is ReturnType<C>
```

It returns `true` if `x` is instance of `targetPrototype`.

```javascript
const result = [
  R.is(String, 'foo'),  
  R.is(Array, 1)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.is(String%2C%20'foo')%2C%20%20%0A%20%20R.is(Array%2C%201)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.is</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
is<C extends () => any>(targetPrototype: C, val: any): val is ReturnType<C>;
is<C extends new () => any>(targetPrototype: C, val: any): val is InstanceType<C>;
is<C extends () => any>(targetPrototype: C): (val: any) => val is ReturnType<C>;
is<C extends new () => any>(targetPrototype: C): (val: any) => val is InstanceType<C>;
```

</details>

<details>

<summary><strong>R.is</strong> source</summary>

```javascript
export function is(targetPrototype, x){
  if (arguments.length === 1) return _x => is(targetPrototype, _x)

  return (
    x != null && x.constructor === targetPrototype ||
    x instanceof targetPrototype
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { is } from './is.js'

test('works with built-in types', () => {
  expect(is(Array, undefined)).toBeFalse()
  expect(is(Array)([])).toBeTrue()
  expect(is(Boolean, new Boolean(false))).toBeTrue()
  expect(is(Date, new Date())).toBeTrue()
  expect(is(Function, () => {})).toBeTrue()
  expect(is(Number, new Number(0))).toBeTrue()
  expect(is(Object, {})).toBeTrue()
  expect(is(RegExp, /(?:)/)).toBeTrue()
  expect(is(String, new String(''))).toBeTrue()
})

test('works with user-defined types', () => {
  function Foo(){}
  function Bar(){}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(is(Foo, foo)).toBeTrue()
  expect(is(Bar, bar)).toBeTrue()
  expect(is(Foo, bar)).toBeTrue()
  expect(is(Bar, foo)).toBeFalse()
})

test('does not coerce', () => {
  expect(is(Boolean, 1)).toBeFalse()
  expect(is(Number, '1')).toBeFalse()
  expect(is(Number, false)).toBeFalse()
})

test('recognizes primitives as their object equivalents', () => {
  expect(is(Boolean, false)).toBeTrue()
  expect(is(Number, 0)).toBeTrue()
  expect(is(String, '')).toBeTrue()
})

test('does not consider primitives to be instances of Object', () => {
  expect(is(Object, false)).toBeFalse()
  expect(is(Object, 0)).toBeFalse()
  expect(is(Object, '')).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#is)

### isEmpty

```typescript

isEmpty<T>(x: T): boolean
```

It returns `true` if `x` is `empty`.

```javascript
const result = [
  R.isEmpty(''),
  R.isEmpty({ x : 0 })
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isEmpty('')%2C%0A%20%20R.isEmpty(%7B%20x%20%3A%200%20%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isEmpty</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
```

</details>

<details>

<summary><strong>R.isEmpty</strong> source</summary>

```javascript
import { type } from './type.js'

export function isEmpty(input){
  const inputType = type(input)
  if ([ 'Undefined', 'NaN', 'Number', 'Null' ].includes(inputType))
    return false
  if (!input) return true

  if (inputType === 'Object'){
    return Object.keys(input).length === 0
  }

  if (inputType === 'Array'){
    return input.length === 0
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isEmpty } from './isEmpty.js'

test('happy', () => {
  expect(isEmpty(undefined)).toBeFalse()
  expect(isEmpty('')).toBeTrue()
  expect(isEmpty(null)).toBeFalse()
  expect(isEmpty(' ')).toBeFalse()
  expect(isEmpty(new RegExp(''))).toBeFalse()
  expect(isEmpty([])).toBeTrue()
  expect(isEmpty([ [] ])).toBeFalse()
  expect(isEmpty({})).toBeTrue()
  expect(isEmpty({ x : 0 })).toBeFalse()
  expect(isEmpty(0)).toBeFalse()
  expect(isEmpty(NaN)).toBeFalse()
  expect(isEmpty([ '' ])).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isEmpty)

### isNil

```typescript

isNil(x: any): x is null | undefined
```

It returns `true` if `x` is either `null` or `undefined`.

```javascript
const result = [
  R.isNil(null),
  R.isNil(1),
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isNil(null)%2C%0A%20%20R.isNil(1)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isNil</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
```

</details>

<details>

<summary><strong>R.isNil</strong> source</summary>

```javascript
export function isNil(x){
  return x === undefined || x === null
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isNil } from './isNil.js'

test('happy', () => {
  expect(isNil(null)).toBeTrue()

  expect(isNil(undefined)).toBeTrue()

  expect(isNil([])).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isNil)

### isNotEmpty

```typescript

isNotEmpty<T>(value: T[]): value is NonEmptyArray<T>
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
isNotEmpty<T>(value: T[]): value is NonEmptyArray<T>;
isNotEmpty<T>(value: readonly T[]): value is ReadonlyNonEmptyArray<T>;
isNotEmpty(value: any): boolean;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isNotEmpty)

### isNotNil

```typescript

isNotNil<T>(value: T): value is NonNullable<T>
```

```javascript
const result = [
  R.isNotNil(null),
  R.isNotNil(undefined),
  R.isNotNil([]),
]
// => [false, false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isNotNil(null)%2C%0A%20%20R.isNotNil(undefined)%2C%0A%20%20R.isNotNil(%5B%5D)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%5D">Try this <strong>R.isNotNil</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isNotNil<T>(value: T): value is NonNullable<T>;
```

</details>

<details>

<summary><strong>R.isNotNil</strong> source</summary>

```javascript
export function isNotNil(input) {
  return input != null
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { isNotNil } from './isNotNil'

test('tests a value for `null` or `undefined`', () => {
  expect(isNotNil(void 0)).toBe(false)
  expect(isNotNil(undefined)).toBe(false)
  expect(isNotNil(null)).toBe(false)
  expect(isNotNil([])).toBe(true)
  expect(isNotNil({})).toBe(true)
  expect(isNotNil(0)).toBe(true)
  expect(isNotNil('')).toBe(true)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isNotNil)

### isPromise

```typescript

isPromise(input: any): boolean
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
isPromise(input: any): boolean;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isPromise)

### isType

```typescript

isType(targetType: RambdaTypes, input: any): boolean
```

It returns true if `targetType` is equal to type of `input` according to `R.type`.

```javascript
R.isType('Async',R.delay(1000))
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.isType('Async'%2CR.delay(1000))%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.isType</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isType(targetType: RambdaTypes, input: any): boolean;
isType(targetType: RambdaTypes): (input: any) => boolean;
```

</details>

<details>

<summary><strong>R.isType</strong> source</summary>

```javascript
import { type } from './type.js'

export function isType(xType, x){
  if (arguments.length === 1){
    return xHolder => isType(xType, xHolder)
  }

  return type(x) === xType
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { isType } from './isType.js'

const list = [ 1, 2, 3 ]

test('array', () => {
  expect(isType('Array', list)).toBeTruthy()
  expect(isType('Array')([])).toBeTruthy()
})

test('promise', () => {
  expect(isType('Promise', Promise.resolve(1))).toBeTruthy()
})

test('async', () => {
  async function fn(){}

  expect(isType('Promise', fn)).toBeTruthy()
})

test('with R.delay', () => {
  expect(isType('Function', delay)).toBeTruthy()
  expect(isType('Promise', delay(100))).toBeTruthy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isType)

### isValid

```typescript

isValid({input: object, schema: Schema}: IsValid): boolean
```

It checks if `input` is following `schema` specifications.

If validation fails, it returns `false`.

Please [check the detailed explanation](https://github.com/selfrefactor/rambdax/blob/master/files/isValid.md) as it is hard to write a short description for this method.

> :boom: Independently, somebody else came with very similar idea called [superstruct](https://github.com/ianstormtaylor/superstruct)

```javascript
const input = {a: ['foo', 'bar']}
const invalidInput = {a: ['foo', 'bar', 1]}
const schema = {a: [String]}
const result = [
  R.isValid({schema, input}),
  R.isValid({schema, input: invalidInput})
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7Ba%3A%20%5B'foo'%2C%20'bar'%5D%7D%0Aconst%20invalidInput%20%3D%20%7Ba%3A%20%5B'foo'%2C%20'bar'%2C%201%5D%7D%0Aconst%20schema%20%3D%20%7Ba%3A%20%5BString%5D%7D%0Aconst%20result%20%3D%20%5B%0A%20%20R.isValid(%7Bschema%2C%20input%7D)%2C%0A%20%20R.isValid(%7Bschema%2C%20input%3A%20invalidInput%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isValid</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isValid({input: object, schema: Schema}: IsValid): boolean;
```

</details>

<details>

<summary><strong>R.isValid</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { all } from './all.js'
import { any } from './any.js'
import { includes } from './includes.js'
import { init } from './init.js'
import { test } from './test.js'
import { toLower } from './toLower.js'
import { type } from './type.js'

export function isPrototype(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  let toReturn = false
  let counter = -1
  while (++counter < list.length && !toReturn){
    if (currentPrototype === list[ counter ].prototype) toReturn = true
  }

  return toReturn
}

export function prototypeToString(input){
  const currentPrototype = input.prototype
  const list = [ Number, String, Boolean, Promise ]
  const translatedList = [ 'Number', 'String', 'Boolean', 'Promise' ]
  let found
  let counter = -1

  while (++counter < list.length){
    if (currentPrototype === list[ counter ].prototype) found = counter
  }

  return translatedList[ found ]
}

const typesWithoutPrototype = [ 'any', 'promise', 'async', 'function' ]

export function fromPrototypeToString(rule){
  if (
    isArray(rule) ||
    rule === undefined ||
    rule === null ||
    rule.prototype === undefined ||
    typesWithoutPrototype.includes(rule)
  ){
    return {
      rule,
      parsed : false,
    }
  }
  if (String.prototype === rule.prototype){
    return {
      rule   : 'string',
      parsed : true,
    }
  }
  if (Boolean.prototype === rule.prototype){
    return {
      rule   : 'boolean',
      parsed : true,
    }
  }
  if (Number.prototype === rule.prototype){
    return {
      rule   : 'number',
      parsed : true,
    }
  }

  return {
    rule   : type(rule.prototype).toLowerCase(),
    parsed : true,
  }
}

function getRuleAndType(schema, requirementRaw){
  const ruleRaw = schema[ requirementRaw ]
  const typeIs = type(ruleRaw)
  const { rule, parsed } = fromPrototypeToString(ruleRaw)

  return {
    rule,
    ruleType : parsed ? 'String' : typeIs,
  }
}

export function isValid({ input, schema }){
  if (input === undefined || schema === undefined) return false

  let flag = true
  const boom = boomFlag => {
    if (!boomFlag){
      flag = false
    }
  }

  for (const requirementRaw in schema){
    if (flag){
      const isOptional = requirementRaw.endsWith('?')
      const requirement = isOptional ? init(requirementRaw) : requirementRaw

      const { rule, ruleType } = getRuleAndType(schema, requirementRaw)
      const inputProp = input[ requirement ]
      const inputPropType = type(input[ requirement ])

      const ok = isOptional && inputProp !== undefined || !isOptional

      if (!ok || rule === 'any' && inputProp != null || rule === inputProp)
        continue

      if (ruleType === 'Object'){
        /**
         * This rule is standalone schema, so we recursevly call `isValid`
         */
        const isValidResult = isValid({
          input  : inputProp,
          schema : rule,
        })
        boom(isValidResult)
      } else if (ruleType === 'String'){
        /**
         * Rule is actual rule such as 'number', so the two types are compared
         */
        boom(toLower(inputPropType) === rule)
      } else if (typeof rule === 'function'){
        /**
         * Rule is function so we pass to it the input
         */
        boom(rule(inputProp))
      } else if (ruleType === 'Array' && inputPropType === 'String'){
        /**
         * Enum case | rule is like a: ['foo', 'bar']
         */
        boom(includes(inputProp, rule))
      } else if (
        ruleType === 'Array' &&
        rule.length === 1 &&
        inputPropType === 'Array'
      ){
        /**
         * 1. array of type | rule is like a: ['number']
         * 2. rule is like a: [{foo: 'string', bar: 'number'}]
         */
        const [ currentRule ] = rule
        const currentRuleType = type(currentRule)

        //Check if rule is invalid
        boom(currentRuleType === 'String' ||
            currentRuleType === 'Object' ||
            isPrototype(currentRule))

        if (currentRuleType === 'Object' && flag){
          /**
           * 2. rule is like a: [{from: 'string'}]
           */
          const isValidResult = all(inputPropInstance =>
            isValid({
              input  : inputPropInstance,
              schema : currentRule,
            }),
          inputProp)
          boom(isValidResult)
        } else if (flag){
          /**
           * 1. array of type
           */

          const actualRule =
            currentRuleType === 'String' ?
              currentRule :
              prototypeToString(currentRule)
          const isInvalidResult = any(inputPropInstance =>
            type(inputPropInstance).toLowerCase() !==
              actualRule.toLowerCase(),
          inputProp)
          boom(!isInvalidResult)
        }
      } else if (ruleType === 'RegExp' && inputPropType === 'String'){
        boom(test(rule, inputProp))
      } else {
        boom(false)
      }
    }
  }

  return flag
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { isPrototype, isValid } from './isValid.js'

test('is prototype', () => {
  expect(isPrototype(Promise)).toBeTrue()
  expect(isPrototype(Number)).toBeTrue()
  expect(isPrototype(Boolean)).toBeTrue()
  expect(isPrototype(String)).toBeTrue()
  expect(isPrototype(0)).toBeFalse()
})

test('prototype inside array', () => {
  const input = { a : [ 1, 2, 3, 4 ] }
  const schema = { a : [ Number ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('with Promise prototype', () => {
  const input = { a : [ delay(1), delay(2) ] }
  const schema = { a : [ Promise ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('object prototype as rule - true', () => {
  const input = { a : {} }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('list of functions', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ 'function' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function schema type can be only string', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ Function ] }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('object prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('number prototype as rule - true', () => {
  const input = { a : 1 }
  const schema = { a : Number }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - true', () => {
  const input = { a : [ 1, 2, 3 ] }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('string prototype as rule - true', () => {
  const input = { a : 'foo' }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('string prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('boolean prototype as rule - true', () => {
  const input = { a : true }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('boolean prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex prototype cannot be rule - true', () => {
  const input = { a : /foo/g }
  const schema = { a : new RegExp('foo') }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('undefined as a rule - true', () => {
  const input = { a : undefined }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('undefined as a rule - false', () => {
  const input = { a : null }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('null as a rule - true', () => {
  const input = { a : null }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('null as a rule - false', () => {
  const input = { a : undefined }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `null`', () => {
  const input = { a : null }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `undefined`', () => {
  const input = { a : undefined }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('type can be `"any"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `"function"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'function' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise`', () => {
  const input = {
    a : delay(1999),
    b : async () => {},
  }
  const schema = {
    a : 'promise',
    b : 'promise',
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise` list', () => {
  const input = { a : [ delay(1999) ] }
  const schema = { a : [ 'promise' ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function as schema - false', () => {
  const input = {
    a : {
      ab : () => true,
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('regex !ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /ba/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props is missing', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is missing - nested', () => {
  const input = {
    a : { ab : 'foo' },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 'bar',
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('nested schema', () => {
  const input = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 'foo',
  }
  const schema = {
    a : {
      b : 'string',
      c : 'number',
      d : 'string',
    },
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInputFirst = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()

  const invalidInputSecond = {
    a : {
      b : 'str',
      c : 'str',
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()

  const invalidInputThird = {
    a : { b : 'str' },
    b : 5,
  }

  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('array of type', () => {
  const input = {
    a : [ 1, 2 ],
    b : 'foo',
  }
  const schema = {
    a : [ 'number' ],
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInput = {
    a : [ 1, '1' ],
    b : 'foo',
  }

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('function as rule', () => {
  const input = {
    a : [ 1, 2, 3, 4 ],
    b : 'foo',
  }
  const invalidInput = {
    a : [ 4 ],
    b : 'foo',
  }

  const schema = {
    a : x => x.length > 2,
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('input prop is undefined', () => {
  const input = { b : 3 }
  const schema = { a : 'number' }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('enum', () => {
  const input = { a : 'foo' }
  const invalidInput = { a : '' }

  const schema = { a : [ 'foo', 'bar', 'baz' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('readme example', () => {
  const basicSchema = { a : [ 'string' ] }
  const schema = {
    b : [ basicSchema ],
    c : {
      d : { e : 'boolean' },
      f : 'array',
    },
    g : [ 'foo', 'bar', 'baz' ],
  }
  const input = {
    b : [ { a : [ 'led', 'zeppelin' ] } ],
    c : {
      d : { e : true },
      f : [ 'any', 1, null, 'value' ],
    },
    g : 'foo',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('should allow additional properties', () => {
  const input = {
    title : 'You shook me',
    year  : 1969,
  }

  expect(isValid({
    input,
    schema : { title : 'string' },
  })).toBeTruthy()
})

test('accepts values as schemas', () => {
  const input = {
    title : 'You shook me',
    genre : 'Blues',
    year  : 1969,
  }
  const schema = {
    title : 'You shook me',
    year  : 1969,
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('compatible schemas with nested object', () => {
  const input = {
    foo : 'bar',
    baz : { a : { b : 'c' } },
  }
  const invalidInputFirst = {
    foo : 'bar',
    baz : { a : { b : 1 } },
  }
  const invalidInputSecond = {
    foo : 'bar',
    baz : { a : { b : [] } },
  }
  const invalidInputThird = {
    foo : 'bar',
    baz : { a : { b : null } },
  }
  const schema = {
    foo : 'string',
    baz : { a : { b : 'string' } },
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('should return true when schema is empty object', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : {},
  })).toBeTruthy()
})

test('when schema is undefined', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : undefined,
  })).toBeFalsy()
})

test('should return false with invalid schema rule', () => {
  const input = {
    foo : 'bar',
    a   : {},
  }
  const inputSecond = { foo : 'bar' }

  const schema = {
    foo : 'string',
    baz : { a : {} },
  }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()

  expect(isValid({
    input : inputSecond,
    schema,
  })).toBeFalsy()
})

test('array of schemas', () => {
  const input = {
    b : [
      {
        a : 'led',
        b : 1,
      },
      {
        a : 'dancing',
        b : 1,
      },
    ],
  }
  const basicSchema = {
    a : String,
    b : Number,
  }
  const schema = { b : [ basicSchema ] }
  const result = isValid({
    input,
    schema,
  })

  expect(result).toBeTruthy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isValid)

### isValidAsync

```typescript

isValidAsync(x: IsValidAsync): Promise<boolean>
```

Asynchronous version of `R.isValid`

```javascript
const input = {a: 1, b: 2}
const invalidInput = {a: 1, b: 'foo'}
const schema = {a: Number, b: async x => {
  await R.delay(100)
  return typeof x === 'number'
}}

const result = await Promise.all([
  R.isValidAsync({schema, input}),
  R.isValidAsync({schema, input: invalidInput})
])
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20invalidInput%20%3D%20%7Ba%3A%201%2C%20b%3A%20'foo'%7D%0Aconst%20schema%20%3D%20%7Ba%3A%20Number%2C%20b%3A%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20typeof%20x%20%3D%3D%3D%20'number'%0A%7D%7D%0A%0Aconst%20result%20%3D%20await%20Promise.all(%5B%0A%20%20R.isValidAsync(%7Bschema%2C%20input%7D)%2C%0A%20%20R.isValidAsync(%7Bschema%2C%20input%3A%20invalidInput%7D)%0A%5D)%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isValidAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
isValidAsync(x: IsValidAsync): Promise<boolean>;
```

</details>

<details>

<summary><strong>R.isValidAsync</strong> source</summary>

```javascript
import { forEach } from './forEach.js'
import { isPromise } from './isPromise.js'
import { isValid } from './isValid.js'

export async function isValidAsync({ schema, input }){
  const asyncSchema = {}
  const simpleSchema = {}
  forEach((rule, prop) => {
    if (isPromise(rule)){
      asyncSchema[ prop ] = rule
    } else {
      simpleSchema[ prop ] = rule
    }
  }, schema)

  if (Object.keys(asyncSchema).length === 0)
    return isValid({
      input,
      schema,
    })

  if (
    !isValid({
      input,
      schema : simpleSchema,
    })
  )
    return false

  let toReturn = true

  for (const singleRuleProp in asyncSchema){
    if (toReturn){
      const validated = await asyncSchema[ singleRuleProp ](input[ singleRuleProp ])
      if (!validated) toReturn = false
    }
  }

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { result } from 'lodash'

import { delay } from './delay.js'
import { isValidAsync } from './isValidAsync.js'

const simplePredicate = async x => {
  await delay(100)

  return x > 5
}

test('happy', async () => {
  const input = {
    a          : 1,
    b          : 7,
    c          : 9,
    additional : 'foo',
  }
  const invalidInput = {
    a : 1,
    b : 2,
    c : 9,
  }
  const schema = {
    a : Number,
    b : simplePredicate,
    c : simplePredicate,
  }
  const invalidSchema = {
    a : Boolean,
    b : simplePredicate,
    c : simplePredicate,
  }
  const result = await isValidAsync({
    input,
    schema,
  })
  const invalidResult = await isValidAsync({
    input,
    schema : invalidSchema,
  })
  const withInvalidInput = await isValidAsync({
    input : invalidInput,
    schema,
  })
  expect(result).toBeTruthy()
  expect(invalidResult).toBeFalsy()
  expect(withInvalidInput).toBeFalsy()
})

test('without async rules', async () => {
  const input = {
    a : 1,
    b : 7,
  }
  const schema = {
    a : Number,
    b : x => x > 2,
  }
  const invalidSchema = {
    a : Number,
    b : Boolean,
  }
  const result = await isValidAsync({
    input,
    schema,
  })
  const invalidResult = await isValidAsync({
    input,
    schema : invalidSchema,
  })

  expect(result).toBeTruthy()
  expect(invalidResult).toBeFalsy()
})

test('readme example', async () => {
  const input = {
    a : 1,
    b : 2,
  }
  const invalidInput = {
    a : 1,
    b : 'foo',
  }
  const schema = {
    a : Number,
    b : async x => {
      await delay(100)

      return typeof x === 'number'
    },
  }
  const result = await Promise.all([
    isValidAsync({
      schema,
      input,
    }),
    isValidAsync({
      schema,
      input : invalidInput,
    }),
  ])
  expect(result).toEqual([ true, false ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isValidAsync)

### join

```typescript

join<T>(glue: string, list: T[]): string
```

It returns a string of all `list` instances joined with a `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try this <strong>R.join</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
join<T>(glue: string, list: T[]): string;
join<T>(glue: string): (list: T[]) => string;
```

</details>

<details>

<summary><strong>R.join</strong> source</summary>

```javascript
export function join(glue, list){
  if (arguments.length === 1) return _list => join(glue, _list)

  return list.join(glue)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { join } from './join.js'

test('curry', () => {
  expect(join('|')([ 'foo', 'bar', 'baz' ])).toBe('foo|bar|baz')

  expect(join('|', [ 1, 2, 3 ])).toBe('1|2|3')

  const spacer = join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toBe('a 2 3.4')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#join)

### juxt

```typescript

juxt<A extends any[], R1>(fns: [(...a: A) => R1]): (...a: A) => [R1]
```

It applies list of function to a list of inputs.

```javascript
const getRange = juxt([ Math.min, Math.max, Math.min ])
const result = getRange(
  3, 4, 9, -3
)
// => [-3, 9, -3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20getRange%20%3D%20juxt(%5B%20Math.min%2C%20Math.max%2C%20Math.min%20%5D)%0Aconst%20result%20%3D%20getRange(%0A%20%203%2C%204%2C%209%2C%20-3%0A)%0A%2F%2F%20%3D%3E%20%5B-3%2C%209%2C%20-3%5D">Try this <strong>R.juxt</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
juxt<A extends any[], R1>(fns: [(...a: A) => R1]): (...a: A) => [R1];
juxt<A extends any[], R1, R2>(fns: [(...a: A) => R1, (...a: A) => R2]): (...a: A) => [R1, R2];
juxt<A extends any[], R1, R2, R3>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3]): (...a: A) => [R1, R2, R3];
juxt<A extends any[], R1, R2, R3, R4>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4]): (...a: A) => [R1, R2, R3, R4];
juxt<A extends any[], R1, R2, R3, R4, R5>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4, (...a: A) => R5]): (...a: A) => [R1, R2, R3, R4, R5];
juxt<A extends any[], U>(fns: Array<(...args: A) => U>): (...args: A) => U[];
```

</details>

<details>

<summary><strong>R.juxt</strong> source</summary>

```javascript
export function juxt(listOfFunctions){
  return (...args) => listOfFunctions.map(fn => fn(...args))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { juxt } from './juxt.js'

test('happy', () => {
  const fn = juxt([ Math.min, Math.max, Math.min ])
  const result = fn(
    3, 4, 9, -3
  )
  expect(result).toEqual([ -3, 9, -3 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#juxt)

### keys

```typescript

keys<T extends object>(x: T): (keyof T & string)[]
```

It applies `Object.keys` over `x` and returns its keys.

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try this <strong>R.keys</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T & string)[];
keys<T>(x: T): string[];
```

</details>

<details>

<summary><strong>R.keys</strong> source</summary>

```javascript
export function keys(x){
  return Object.keys(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { keys } from './keys.js'

test('happy', () => {
  expect(keys({ a : 1 })).toEqual([ 'a' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#keys)

### last

```typescript

last(str: ''): undefined
```

It returns the last element of `input`, as the `input` can be either a string or an array. It returns `undefined` if array has length of 0.

```javascript
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.last(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.last('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20'o'%5D">Try this <strong>R.last</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
last(str: ''): undefined;
last(str: string): string;
last(list: readonly[]): undefined;
last(list: never[]): undefined;
last<T extends unknown[]>(array: T): LastArrayElement<T>;
last<T extends readonly unknown[]>(array: T): LastArrayElement<T>;
last(str: string): string | undefined;
```

</details>

<details>

<summary><strong>R.last</strong> source</summary>

```javascript
export function last(listOrString){
  if (typeof listOrString === 'string'){
    return listOrString[ listOrString.length - 1 ] || ''
  }

  return listOrString[ listOrString.length - 1 ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { last } from './last.js'

test('with list', () => {
  expect(last([ 1, 2, 3 ])).toBe(3)
  expect(last([])).toBeUndefined()
})

test('with string', () => {
  expect(last('abc')).toBe('c')
  expect(last('')).toBe('')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#last)

### lastIndexOf

```typescript

lastIndexOf<T>(target: T, list: T[]): number
```

It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.

```javascript
const list = [1, 2, 3, 1, 2, 3]
const result = [
  R.lastIndexOf(2, list),
  R.lastIndexOf(4, list),
]
// => [4, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%0Aconst%20result%20%3D%20%5B%0A%20%20R.lastIndexOf(2%2C%20list)%2C%0A%20%20R.lastIndexOf(4%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%20-1%5D">Try this <strong>R.lastIndexOf</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: T[]): number;
lastIndexOf<T>(target: T): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.lastIndexOf</strong> source</summary>

```javascript
import { _lastIndexOf } from './equals.js'

export function lastIndexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => _lastIndexOf(valueToFind, _list)
  }

  return _lastIndexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lastIndexOf as lastIndexOfRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { possibleIterables, possibleTargets } from './indexOf.spec.js'
import { lastIndexOf } from './lastIndexOf.js'

test('with NaN', () => {
  expect(lastIndexOf(NaN, [ NaN ])).toBe(0)
})

test('will throw with bad input', () => {
  expect(lastIndexOfRamda([], true)).toBe(-1)
  expect(() => indexOf([], true)).toThrowErrorMatchingInlineSnapshot('"indexOf is not defined"')
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3, [ 1, 2, 3, 4 ])).toBe(2)
  expect(lastIndexOf(10)([ 1, 2, 3, 4 ])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [ { a : 1 }, { b : 2 }, { c : 3 } ]
  expect(lastIndexOf({ c : 4 }, listOfObjects)).toBe(-1)
  expect(lastIndexOf({ c : 3 }, listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [ [ 1 ], [ 2, 3 ], [ 2, 3, 4 ], [ 2, 3 ], [ 1 ], [] ]
  expect(lastIndexOf([], listOfLists)).toBe(5)
  expect(lastIndexOf([ 1 ], listOfLists)).toBe(4)
  expect(lastIndexOf([ 2, 3, 4 ], listOfLists)).toBe(2)
  expect(lastIndexOf([ 2, 3, 5 ], listOfLists)).toBe(-1)
})

test('with string as iterable', () => {
  expect(() => lastIndexOf('a', 'abc')).toThrowErrorMatchingInlineSnapshot('"Cannot read property \'indexOf\' of abc"')
  expect(lastIndexOfRamda('a', 'abc')).toBe(0)
})

describe('brute force', () => {
  compareCombinations({
    fn          : lastIndexOf,
    fnRamda     : lastIndexOfRamda,
    firstInput  : possibleTargets,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 34,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 170,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lastIndexOf)

### length

```typescript

length<T>(input: T[]): number
```

It returns the `length` property of list or string `input`.

```javascript
const result = [
  R.length([1, 2, 3, 4]),
  R.length('foo'),
]
// => [4, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.length(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20R.length('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%203%5D">Try this <strong>R.length</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
length<T>(input: T[]): number;
```

</details>

<details>

<summary><strong>R.length</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function length(x){
  if (isArray(x)) return x.length
  if (typeof x === 'string') return x.length

  return NaN
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { length as lengthRamda } from 'ramda'

import { length } from './length.js'

test('happy', () => {
  expect(length('foo')).toBe(3)
  expect(length([ 1, 2, 3 ])).toBe(3)
  expect(length([])).toBe(0)
})

test('with empty string', () => {
  expect(length('')).toBe(0)
})

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})

test('with length as property', () => {
  const input1 = { length : '123' }
  const input2 = { length : null }
  const input3 = { length : '' }

  expect(length(input1)).toBeNaN()
  expect(lengthRamda(input1)).toBeNaN()
  expect(length(input2)).toBeNaN()
  expect(lengthRamda(input2)).toBeNaN()
  expect(length(input3)).toBeNaN()
  expect(lengthRamda(input3)).toBeNaN()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#length)

### lens

```typescript

lens<S, A>(getter: (s: S) => A, setter: (a: A, s: S) => S): Lens<S, A>
```

It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.

```javascript
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) // => 1
R.set(xLens, 4, {x: 1, y: 2}) // => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) // => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20xLens%20%3D%20R.lens(R.prop('x')%2C%20R.assoc('x'))%3B%0A%0AR.view(xLens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0AR.set(xLens%2C%204%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0Aconst%20result%20%3D%20R.over(xLens%2C%20R.negate%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lens</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lens<S, A>(getter: (s: S) => A, setter: (a: A, s: S) => S): Lens<S, A>;
```

</details>

<details>

<summary><strong>R.lens</strong> source</summary>

```javascript
export function lens(getter, setter){
  return function (functor){
    return function (target){
      return functor(getter(target)).map(focus => setter(focus, target))
    }
  }
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lens)

### lensEq

```typescript

lensEq(lens: Function, value: any, data: any): boolean
```

It returns `true` if data structure focused by the given lens equals to the `target` value.

`R.equals` is used to determine equality.

> :boom: Idea for this method comes from `ramda-adjunct` library

```javascript
const list = [ 1, 2, 3 ]
const lens = R.lensIndex(0)
const result = R.lensEq(
  lens, 1, list
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0Aconst%20lens%20%3D%20R.lensIndex(0)%0Aconst%20result%20%3D%20R.lensEq(%0A%20%20lens%2C%201%2C%20list%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.lensEq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lensEq(lens: Function, value: any, data: any): boolean;
lensEq(lens: Function, value: any): (data: any) => boolean;
lensEq(lens: Function): (value: any) => (data: any) => boolean;
```

</details>

<details>

<summary><strong>R.lensEq</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { equals } from './equals.js'
import { view } from './view.js'

function lensEqFn(
  lens, target, input
){
  return equals(view(lens, input), target)
}

export const lensEq = curry(lensEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lensEq } from './lensEq.js'
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'

test('with list', () => {
  const list = [ 1, 2, 3 ]
  const lens = lensIndex(0)
  expect(lensEq(
    lens, 1, list
  )).toBeTrue()
  expect(lensEq(lens, 2)(list)).toBeFalse()
})

test('with R.lensPath', () => {
  const input = { a : { b : { c : 1 } } }
  const target = { c : 1 }
  const lens = lensPath('a.b')

  expect(lensEq(lens)(target)(input)).toBeTrue()
  expect(lensEq(
    lens, target, { c : 2 }
  )).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensEq)

### lensIndex

```typescript

lensIndex<A>(n: number): Lens<A[], A>
```

It returns a lens that focuses on specified `index`.

```javascript
const list = ['a', 'b', 'c']
const headLens = R.lensIndex(0)

R.view(headLens, list) // => 'a'
R.set(headLens, 'x', list) // => ['x', 'b', 'c']
R.over(headLens, R.toUpper, list) // => ['A', 'b', 'c']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0Aconst%20headLens%20%3D%20R.lensIndex(0)%0A%0AR.view(headLens%2C%20list)%20%2F%2F%20%3D%3E%20'a'%0AR.set(headLens%2C%20'x'%2C%20list)%20%2F%2F%20%3D%3E%20%5B'x'%2C%20'b'%2C%20'c'%5D%0Aconst%20result%20%3D%20R.over(headLens%2C%20R.toUpper%2C%20list)%20%2F%2F%20%3D%3E%20%5B'A'%2C%20'b'%2C%20'c'%5D">Try this <strong>R.lensIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lensIndex<A>(n: number): Lens<A[], A>;
lensIndex<A extends any[], N extends number>(n: N): Lens<A, A[N]>;
```

</details>

<details>

<summary><strong>R.lensIndex</strong> source</summary>

```javascript
import { lens } from './lens.js'
import { nth } from './nth.js'
import { update } from './update.js'

export function lensIndex(index){
  return lens(nth(index), update(index))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose.js'
import { keys } from './keys.js'
import { lensIndex } from './lensIndex.js'
import { over } from './over.js'
import { set } from './set.js'
import { view } from './view.js'

const testList = [ { a : 1 }, { b : 2 }, { c : 3 } ]

test('focuses list element at the specified index', () => {
  expect(view(lensIndex(0), testList)).toEqual({ a : 1 })
})

test('returns undefined if the specified index does not exist', () => {
  expect(view(lensIndex(10), testList)).toBeUndefined()
})

test('sets the list value at the specified index', () => {
  expect(set(
    lensIndex(0), 0, testList
  )).toEqual([ 0, { b : 2 }, { c : 3 } ])
})

test('applies function to the value at the specified list index', () => {
  expect(over(
    lensIndex(2), keys, testList
  )).toEqual([ { a : 1 }, { b : 2 }, [ 'c' ] ])
})

test('can be composed', () => {
  const nestedList = [ 0, [ 10, 11, 12 ], 1, 2 ]
  const composedLens = compose(lensIndex(1), lensIndex(0))

  expect(view(composedLens, nestedList)).toBe(10)
})

test('set s (get s) === s', () => {
  expect(set(
    lensIndex(0), view(lensIndex(0), testList), testList
  )).toEqual(testList)
})

test('get (set s v) === v', () => {
  expect(view(lensIndex(0), set(
    lensIndex(0), 0, testList
  ))).toBe(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensIndex(0),
    set(
      lensIndex(0), 11, set(
        lensIndex(0), 10, testList
      )
    ))).toBe(11)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensIndex)

### lensPath

```typescript

lensPath<S, K0 extends keyof S = keyof S>(path: [K0]): Lens<S, S[K0]>
```

It returns a lens that focuses on specified `path`.

```javascript
const lensPath = R.lensPath(['x', 0, 'y'])
const input = {x: [{y: 2, z: 3}, {y: 4, z: 5}]}

R.view(lensPath, input) // => 2

R.set(lensPath, 1, input) 
// => {x: [{y: 1, z: 3}, {y: 4, z: 5}]}

R.over(xHeadYLens, R.negate, input) 
// => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20lensPath%20%3D%20R.lensPath(%5B'x'%2C%200%2C%20'y'%5D)%0Aconst%20input%20%3D%20%7Bx%3A%20%5B%7By%3A%202%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.view(lensPath%2C%20input)%20%2F%2F%20%3D%3E%202%0A%0AR.set(lensPath%2C%201%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20%5B%7By%3A%201%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0Aconst%20result%20%3D%20R.over(xHeadYLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20%5B%7By%3A%20-2%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D">Try this <strong>R.lensPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lensPath<S, K0 extends keyof S = keyof S>(path: [K0]): Lens<S, S[K0]>;
lensPath<S, K0 extends keyof S = keyof S, K1 extends keyof S[K0] = keyof S[K0]>(
  path: [K0, K1],
): Lens<S, S[K0][K1]>;
lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1]
>(path: [K0, K1, K2]): Lens<S, S[K0][K1][K2]>;
lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3]): Lens<S, S[K0][K1][K2][K3]>;
lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4]): Lens<S, S[K0][K1][K2][K3][K4]>;
lensPath<
  S,
  K0 extends keyof S = keyof S,
  K1 extends keyof S[K0] = keyof S[K0],
  K2 extends keyof S[K0][K1] = keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4] = keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5]): Lens<S, S[K0][K1][K2][K3][K4][K5]>;
lensPath<S = any, A = any>(path: Path): Lens<S, A>;
```

</details>

<details>

<summary><strong>R.lensPath</strong> source</summary>

```javascript
import { assocPath } from './assocPath.js'
import { lens } from './lens.js'
import { path } from './path.js'

export function lensPath(key){
  return lens(path(key), assocPath(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose.js'
import { identity } from './identity.js'
import { inc } from './inc.js'
import { lensPath } from './lensPath.js'
import { lensProp } from './lensProp.js'
import { over } from './over.js'
import { set } from './set.js'
import { view } from './view.js'

const testObj = {
  a : [ { b : 1 }, { b : 2 } ],
  d : 3,
}

test('view', () => {
  expect(view(lensPath('d'), testObj)).toBe(3)
  expect(view(lensPath('a.0.b'), testObj)).toBe(1)
  // this is different to ramda, as ramda will return a clone of the input object
  expect(view(lensPath(''), testObj)).toBeUndefined()
})

test('set', () => {
  expect(set(
    lensProp('d'), 0, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 0,
  })
  expect(set(
    lensPath('a.0.b'), 0, testObj
  )).toEqual({
    a : [ { b : 0 }, { b : 2 } ],
    d : 3,
  })
  expect(set(
    lensPath('a.0.X'), 0, testObj
  )).toEqual({
    a : [
      {
        b : 1,
        X : 0,
      },
      { b : 2 },
    ],
    d : 3,
  })
  expect(set(
    lensPath([]), 0, testObj
  )).toBe(0)
})

test('over', () => {
  expect(over(
    lensPath('d'), inc, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 4,
  })
  expect(over(
    lensPath('a.1.b'), inc, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 3 } ],
    d : 3,
  })
  expect(over(
    lensProp('X'), identity, testObj
  )).toEqual({
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
    X : undefined,
  })
  expect(over(
    lensPath('a.0.X'), identity, testObj
  )).toEqual({
    a : [
      {
        b : 1,
        X : undefined,
      },
      { b : 2 },
    ],
    d : 3,
  })
})

test('compose', () => {
  const composedLens = compose(lensPath('a'), lensPath('1.b'))
  expect(view(composedLens, testObj)).toBe(2)
})

test('set s (get s) === s', () => {
  expect(set(
    lensPath([ 'd' ]), view(lensPath([ 'd' ]), testObj), testObj
  )).toEqual(testObj)
  expect(set(
    lensPath([ 'a', 0, 'b' ]),
    view(lensPath([ 'a', 0, 'b' ]), testObj),
    testObj
  )).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensPath([ 'd' ]), set(
    lensPath([ 'd' ]), 0, testObj
  ))).toBe(0)
  expect(view(lensPath([ 'a', 0, 'b' ]), set(
    lensPath([ 'a', 0, 'b' ]), 0, testObj
  ))).toBe(0)
})

test('get (set(set s v1) v2) === v2', () => {
  const p = [ 'd' ]
  const q = [ 'a', 0, 'b' ]
  expect(view(lensPath(p), set(
    lensPath(p), 11, set(
      lensPath(p), 10, testObj
    )
  ))).toBe(11)
  expect(view(lensPath(q), set(
    lensPath(q), 11, set(
      lensPath(q), 10, testObj
    )
  ))).toBe(11)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensPath)

### lensProp

```typescript

lensProp<S, K extends keyof S = keyof S>(prop: K): Lens<S, S[K]>
```

It returns a lens that focuses on specified property `prop`.

```javascript
const xLens = R.lensProp('x');
const input = {x: 1, y: 2}

R.view(xLens, input) // => 1

R.set(xLens, 4, input) 
// => {x: 4, y: 2}

R.over(xLens, R.negate, input) 
// => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20xLens%20%3D%20R.lensProp('x')%3B%0Aconst%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0A%0AR.view(xLens%2C%20input)%20%2F%2F%20%3D%3E%201%0A%0AR.set(xLens%2C%204%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0A%0Aconst%20result%20%3D%20R.over(xLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lensProp</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lensProp<S, K extends keyof S = keyof S>(prop: K): Lens<S, S[K]>;
```

</details>

<details>

<summary><strong>R.lensProp</strong> source</summary>

```javascript
import { assoc } from './assoc.js'
import { lens } from './lens.js'
import { prop } from './prop.js'

export function lensProp(key){
  return lens(prop(key), assoc(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose.js'
import { identity } from './identity.js'
import { inc } from './inc.js'
import { lensProp } from './lensProp.js'
import { over } from './over.js'
import { set } from './set.js'
import { view } from './view.js'

const testObj = {
  a : 1,
  b : 2,
  c : 3,
}

test('focuses object the specified object property', () => {
  expect(view(lensProp('a'), testObj)).toBe(1)
})

test('returns undefined if the specified property does not exist', () => {
  expect(view(lensProp('X'), testObj)).toBeUndefined()
})

test('sets the value of the object property specified', () => {
  expect(set(
    lensProp('a'), 0, testObj
  )).toEqual({
    a : 0,
    b : 2,
    c : 3,
  })
})

test('adds the property to the object if it doesn\'t exist', () => {
  expect(set(
    lensProp('d'), 4, testObj
  )).toEqual({
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })
})

test('applies function to the value of the specified object property', () => {
  expect(over(
    lensProp('a'), inc, testObj
  )).toEqual({
    a : 2,
    b : 2,
    c : 3,
  })
})

test('applies function to undefined and adds the property if it doesn\'t exist', () => {
  expect(over(
    lensProp('X'), identity, testObj
  )).toEqual({
    a : 1,
    b : 2,
    c : 3,
    X : undefined,
  })
})

test('can be composed', () => {
  const nestedObj = {
    a : { b : 1 },
    c : 2,
  }
  const composedLens = compose(lensProp('a'), lensProp('b'))

  expect(view(composedLens, nestedObj)).toBe(1)
})

test('set s (get s) === s', () => {
  expect(set(
    lensProp('a'), view(lensProp('a'), testObj), testObj
  )).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensProp('a'), set(
    lensProp('a'), 0, testObj
  ))).toBe(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensProp('a'),
    set(
      lensProp('a'), 11, set(
        lensProp('a'), 10, testObj
      )
    ))).toBe(11)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensProp)

### lensSatisfies

```typescript

lensSatisfies<PredicateInput, Input>(predicate: (x: PredicateInput) => boolean, lens: Lens<PredicateInput, Input>, input: Input): boolean
```

It returns `true` if data structure focused by the given lens satisfies the predicate.

> :boom: Idea for this method comes from `ramda-adjunct` library

```javascript
const fn = R.lensSatisfies(x => x > 5, R.lensIndex(0))
const result = [
  fn([10, 20, 30]),
  fn([1, 2, 3]),
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.lensSatisfies(x%20%3D%3E%20x%20%3E%205%2C%20R.lensIndex(0))%0Aconst%20result%20%3D%20%5B%0A%20%20fn(%5B10%2C%2020%2C%2030%5D)%2C%0A%20%20fn(%5B1%2C%202%2C%203%5D)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.lensSatisfies</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lensSatisfies<PredicateInput, Input>(predicate: (x: PredicateInput) => boolean, lens: Lens<PredicateInput, Input>, input: Input): boolean;
lensSatisfies<PredicateInput, Input>(predicate: (x: PredicateInput) => boolean, lens: Lens<PredicateInput, Input>): (input: Input) => boolean;
lensSatisfies<T>(predicate: (x: T) => boolean, lens: Lens<T[], T>, input: T[]): boolean;
lensSatisfies<T>(predicate: (x: T) => boolean, lens: Lens<T[], T>): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.lensSatisfies</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { view } from './view.js'

function lensSatisfiesFn(
  predicate, lens, input
){
  return Boolean(predicate(view(lens, input)))
}

export const lensSatisfies = curry(lensSatisfiesFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'
import { lensSatisfies } from './lensSatisfies.js'

const predicate = x => x > 1

test('with list', () => {
  const lens = lensIndex(0)
  const fn = lensSatisfies(predicate, lens)
  expect(fn([ 10, 20, 30 ])).toBeTrue()
  expect(fn([ 1, 2, 3 ])).toBeFalse()
})

test('with R.lensPath', () => {
  const input1 = { a : { b : 10 } }
  const input2 = { a : { b : 1 } }
  const lens = lensPath('a.b')
  const fn = lensSatisfies(predicate, lens)

  expect(fn(input1)).toBeTrue()
  expect(fn(input2)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensSatisfies)

### lt

```typescript

lt<T, U>(x: T, y: U): boolean
```

```javascript
const result = [R.lt(2, 1), R.lt(2, 3)]
// => [false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.lt(2%2C%201)%2C%20R.lt(2%2C%203)%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20true%5D">Try this <strong>R.lt</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lt<T, U>(x: T, y: U): boolean;
lt<T, U>(x: T): (y: U) => boolean;
```

</details>

<details>

<summary><strong>R.lt</strong> source</summary>

```javascript
export function lt(a, b){
  if (arguments.length === 1)
    return _b => lt(a, _b)

  return a < b
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lt)

### lte

```typescript

lte<T, U>(x: T, y: U): boolean
```

```javascript
const result = [R.lte(2, 1), R.lte(2, 2), R.lte(2, 3)]
// => [false, true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.lte(2%2C%201)%2C%20R.lte(2%2C%202)%2C%20R.lte(2%2C%203)%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20true%2C%20true%5D">Try this <strong>R.lte</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lte<T, U>(x: T, y: U): boolean;
lte<T, U>(x: T): (y: U) => boolean;
```

</details>

<details>

<summary><strong>R.lte</strong> source</summary>

```javascript
export function lte(a, b){
  if (arguments.length === 1)
    return _b => lte(a, _b)

  return a <= b
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lte)

### map

```typescript

map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>
```

It returns the result of looping through `iterable` with `fn`.

It works with both array and object.

> :boom: Unlike Ramda's `map`, here property and input object are passed as arguments to `fn`, when `iterable` is an object.

```javascript
const fn = x => x * 2
const fnWhenObject = (val, prop)=>{
  return `${prop}-${val}`
}

const iterable = [1, 2]
const obj = {a: 1, b: 2}

const result = [ 
  R.map(fn, iterable),
  R.map(fnWhenObject, obj)
]
// => [ [2, 4], {a: 'a-1', b: 'b-2'}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20fnWhenObject%20%3D%20(val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20iterable%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%20%0A%20%20R.map(fn%2C%20iterable)%2C%0A%20%20R.map(fnWhenObject%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B2%2C%204%5D%2C%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D%5D">Try this <strong>R.map</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
map<T, U>(fn: Iterator<T, U>, iterable: T[]): U[];
map<T, U>(fn: Iterator<T, U>): (iterable: T[]) => U[];
map<T, U, S>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
map<T>(fn: Iterator<T, T>): (iterable: T[]) => T[];
map<T>(fn: Iterator<T, T>, iterable: T[]): T[];
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
import { INCORRECT_ITERABLE_INPUT } from './_internals/constants.js'
import { isArray } from './_internals/isArray.js'
import { keys } from './_internals/keys.js'

export function mapArray(
  fn, list, isIndexed = false
){
  let index = 0
  const willReturn = Array(list.length)

  while (index < list.length){
    willReturn[ index ] = isIndexed ? fn(list[ index ], index) : fn(list[ index ])

    index++
  }

  return willReturn
}

export function mapObject(fn, obj){
  if (arguments.length === 1){
    return _obj => mapObject(fn, _obj)
  }
  let index = 0
  const objKeys = keys(obj)
  const len = objKeys.length
  const willReturn = {}

  while (index < len){
    const key = objKeys[ index ]
    willReturn[ key ] = fn(
      obj[ key ], key, obj
    )
    index++
  }

  return willReturn
}

export const mapObjIndexed = mapObject

export function map(fn, iterable){
  if (arguments.length === 1) return _iterable => map(fn, _iterable)
  if (!iterable){
    throw new Error(INCORRECT_ITERABLE_INPUT)
  }

  if (isArray(iterable)) return mapArray(fn, iterable)

  return mapObject(fn, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { map as mapRamda } from 'ramda'

import { map } from './map.js'

const double = x => x * 2

describe('with array', () => {
  it('happy', () => {
    expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
  })

  it('curried', () => {
    expect(map(double)([ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
  })
})

describe('with object', () => {
  const obj = {
    a : 1,
    b : 2,
  }

  it('happy', () => {
    expect(map(double, obj)).toEqual({
      a : 2,
      b : 4,
    })
  })

  it('property as second and input object as third argument', () => {
    const obj = {
      a : 1,
      b : 2,
    }
    const iterator = (
      val, prop, inputObject
    ) => {
      expect(prop).toBeString()
      expect(inputObject).toEqual(obj)

      return val * 2
    }

    expect(map(iterator)(obj)).toEqual({
      a : 2,
      b : 4,
    })
  })
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => map(double, null)).toThrowErrorMatchingInlineSnapshot('"Incorrect iterable input"')
  expect(() => map(double)(undefined)).toThrowErrorMatchingInlineSnapshot('"Incorrect iterable input"')
  expect(() => mapRamda(double, null)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of null (reading \'fantasy-land/map\')"')
  expect(() =>
    mapRamda(double, undefined)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of undefined (reading \'fantasy-land/map\')"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

### mapArray

```typescript

mapArray<T>(fn: Iterator<T, T>, iterable: T[]): T[]
```

```javascript
const result = R.mapArray(x => x + 1, [1, 2])
// => [2, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mapArray(x%20%3D%3E%20x%20%2B%201%2C%20%5B1%2C%202%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%203%5D">Try this <strong>R.mapArray</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapArray<T>(fn: Iterator<T, T>, iterable: T[]): T[];
mapArray<T, U>(fn: Iterator<T, U>, iterable: T[]): U[];
mapArray<T, U>(fn: Iterator<T, U>): (iterable: T[]) => U[];
mapArray<T>(fn: Iterator<T, T>): (iterable: T[]) => T[];
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapArray)

### mapAsync

```typescript

mapAsync<T, K>(fn: AsyncIterable<T, K>, list: T[]): Promise<K[]>
```

Sequential asynchronous mapping with `fn` over members of `list`.

```javascript
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = await R.mapAsync(fn, [1, 2, 3])
// `result` resolves after 3 seconds to `[2, 3, 4]`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.mapAsync(fn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%60result%60%20resolves%20after%203%20seconds%20to%20%60%5B2%2C%203%2C%204%5D%60">Try this <strong>R.mapAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapAsync<T, K>(fn: AsyncIterable<T, K>, list: T[]): Promise<K[]>;
mapAsync<T, K>(fn: AsyncIterableIndexed<T, K>, list: T[]): Promise<K[]>;
mapAsync<T, K>(fn: AsyncIterable<T, K>) : ( list: T[]) => Promise<K[]>;
mapAsync<T, K>(fn: AsyncIterableIndexed<T, K>) : ( list: T[]) => Promise<K[]>;
```

</details>

<details>

<summary><strong>R.mapAsync</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

async function mapAsyncFn(fn, listOrObject){
  if (isArray(listOrObject)){
    const willReturn = []
    let i = 0
    for (const a of listOrObject){
      willReturn.push(await fn(a, i++))
    }

    return willReturn
  }

  const willReturn = {}
  for (const prop in listOrObject){
    willReturn[ prop ] = await fn(listOrObject[ prop ], prop)
  }

  return willReturn
}

export function mapAsync(fn, listOrObject){
  if (arguments.length === 1){
    return async _listOrObject => mapAsyncFn(fn, _listOrObject)
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, listOrObject).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'
import { map } from './map.js'
import { mapAsync } from './mapAsync.js'

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy', async () => {
  const fn = async (x, prop) => {
    await delay(100)
    expect(prop).toBeNumber()

    return x + 1
  }
  const result = await mapAsync(fn, [ 1, 2, 3 ])
  expect(result).toEqual([ 2, 3, 4 ])
})

test('with object', async () => {
  const fn = async (x, prop) => {
    expect(prop).toBeString()

    return x + 1
  }
  const result = await mapAsync(fn, {
    a : 1,
    b : 2,
  })
  expect(result).toEqual({
    a : 2,
    b : 3,
  })
})

test('with R.composeAsync', async () => {
  const result = await composeAsync(
    map(x => x + 1),
    mapAsync(async x => {
      delay(x)

      return x
    }),
    map(x => x * 10)
  )([ 1, 2, 3 ])
  expect(result).toEqual([ 11, 21, 31 ])
})

test('error', async () => {
  try {
    await mapAsync(rejectDelay)([ 1, 2, 3 ])
  } catch (err){
    expect(err).toBe(21)
  }
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapAsync)

### mapcat

```typescript

mapcat<T>(x: T): T
```

```javascript
const result = R.mapcat()
// =>
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mapcat()%0A%2F%2F%20%3D%3E">Try this <strong>R.mapcat</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapcat<T>(x: T): T;
```

</details>

<details>

<summary><strong>R.mapcat</strong> source</summary>

```javascript
export function mapcat(tranformFn, listOfLists){
  if (arguments.length === 1){
    return _listOfLists => mapcat(tranformFn, _listOfLists)
  }

  let willReturn = []
  const intermediateResult = listOfLists.map(list =>
    list.map(x => tranformFn(x)))

  intermediateResult.forEach(transformedList => {
    willReturn = [ ...willReturn, ...transformedList ]
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapcat } from './mapcat.js'

test('happy', () => {
  const result = mapcat(x => x.toUpperCase(),
    [
      [ 'a', 'b' ],
      [ 'c', 'd' ],
      [ 'e', 'f' ],
    ])
  console.log(result)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapcat)

### mapIndexed

```typescript

mapIndexed<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>
```

Same as `R.map`, but it passes index as second argument to the iterator, when looping over arrays.

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapIndexed<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
mapIndexed<T, U>(fn: IndexedIterator<T, U>, iterable: T[]): U[];
mapIndexed<T, U>(fn: IndexedIterator<T, U>): (iterable: T[]) => U[];
mapIndexed<T, U, S>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
mapIndexed<T>(fn: IndexedIterator<T, T>): (iterable: T[]) => T[];
mapIndexed<T>(fn: IndexedIterator<T, T>, iterable: T[]): T[];
```

</details>

<details>

<summary><strong>R.mapIndexed</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { mapArray, mapObject } from './map.js'

export function mapIndexed(fn, iterable){
  if (arguments.length === 1){
    return _iterable => mapIndexed(fn, _iterable)
  }
  if (iterable === undefined) return []
  if (isArray(iterable)) return mapArray(
    fn, iterable, true
  )

  return mapObject(fn, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { map } from './map.js'
import { mapIndexed } from './mapIndexed.js'

const iterator = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()
}

test('happy', () => {
  const list = [ 1, 2, 3 ]
  mapIndexed(iterator, list)
  mapIndexed(iterator)(list)
})

test('with object', () => {
  const iterator = x => x + 1
  const obj = { a : 1 }
  expect(mapIndexed(iterator, obj)).toEqual(map(iterator, obj))
})

test('with bad input', () => {
  expect(mapIndexed(iterator, undefined)).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapIndexed)

### mapKeys

```typescript

mapKeys<T, U>(changeKeyFn: (x: string) => string, obj: { [key: string]: T}): U
```

It takes an object and returns a new object with changed keys according to `changeKeyFn` function.

```javascript
const obj = {a: 1, b: 2}
const changeKeyFn = prop => `{prop}_foo`
const result = R.mapKeys(changeKeyFn, Record<string, unknown>)
// => {a_foo: 1, b_foo: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20changeKeyFn%20%3D%20prop%20%3D%3E%20%60%7Bprop%7D_foo%60%0Aconst%20result%20%3D%20R.mapKeys(changeKeyFn%2C%20Record%3Cstring%2C%20unknown%3E)%0A%2F%2F%20%3D%3E%20%7Ba_foo%3A%201%2C%20b_foo%3A%202%7D">Try this <strong>R.mapKeys</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapKeys<T, U>(changeKeyFn: (x: string) => string, obj: { [key: string]: T}): U;
mapKeys<T, U>(changeKeyFn: (x: string) => string): (obj: { [key: string]: T}) => U;
```

</details>

<details>

<summary><strong>R.mapKeys</strong> source</summary>

```javascript
export function mapKeys(changeKeyFn, obj){
  if (arguments.length === 1) return _obj => mapKeys(changeKeyFn, _obj)
  const toReturn = {}

  Object.keys(obj).forEach(prop => toReturn[ changeKeyFn(prop) ] = obj[ prop ])

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapKeys } from './mapKeys.js'

const obj = {
  a : 1,
  b : 2,
}
const changeKeyFn = prop => `${ prop }_foo`
const expected = {
  a_foo : 1,
  b_foo : 2,
}

test('happy', () => {
  const result = mapKeys(changeKeyFn, obj)

  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = mapKeys(changeKeyFn)(obj)

  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapKeys)

### mapObject

```typescript

mapObject<T>(fn: ObjectIterator<T, T>, iterable: Dictionary<T>): Dictionary<T>
```

```javascript
const result = R.mapObject(x => x + 1, {a:1, b:2})
// => {a:2, b:3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mapObject(x%20%3D%3E%20x%20%2B%201%2C%20%7Ba%3A1%2C%20b%3A2%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A2%2C%20b%3A3%7D">Try this <strong>R.mapObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapObject<T>(fn: ObjectIterator<T, T>, iterable: Dictionary<T>): Dictionary<T>;
mapObject<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
mapObject<T>(fn: ObjectIterator<T, T>): (iterable: Dictionary<T>) => Dictionary<T>;
mapObject<T, U>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObject)

### mapObjIndexed

```typescript

mapObjIndexed<T>(fn: ObjectIterator<T, T>, iterable: Dictionary<T>): Dictionary<T>
```

It works the same way as `R.map` does for objects. It is added as Ramda also has this method.

```javascript
const fn = (val, prop) => {
  return `${prop}-${val}`
}

const obj = {a: 1, b: 2}

const result = R.mapObjIndexed(fn, obj)
// => {a: 'a-1', b: 'b-2'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(val%2C%20prop)%20%3D%3E%20%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20R.mapObjIndexed(fn%2C%20obj)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try this <strong>R.mapObjIndexed</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapObjIndexed<T>(fn: ObjectIterator<T, T>, iterable: Dictionary<T>): Dictionary<T>;
mapObjIndexed<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
mapObjIndexed<T>(fn: ObjectIterator<T, T>): (iterable: Dictionary<T>) => Dictionary<T>;
mapObjIndexed<T, U>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObjIndexed)

### mapParallelAsync

```typescript

mapParallelAsync<T, K>(fn: AsyncIterable<T, K>, list: T[]): Promise<K[]>
```

Parallel asynchronous mapping with `fn` over members of `list`.

```javascript
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = await R.mapParallelAsync(fn, [1, 2, 3])
// `result` resolves after 1 second to `[2, 3, 4]`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.mapParallelAsync(fn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%60result%60%20resolves%20after%201%20second%20to%20%60%5B2%2C%203%2C%204%5D%60">Try this <strong>R.mapParallelAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapParallelAsync<T, K>(fn: AsyncIterable<T, K>, list: T[]): Promise<K[]>;
mapParallelAsync<T, K>(fn: AsyncIterableIndexed<T, K>, list: T[]): Promise<K[]>;
mapParallelAsync<T, K>(fn: AsyncIterable<T, K>) : ( list: T[]) => Promise<K[]>;
mapParallelAsync<T, K>(fn: AsyncIterableIndexed<T, K>) : ( list: T[]) => Promise<K[]>;
```

</details>

<details>

<summary><strong>R.mapParallelAsync</strong> source</summary>

```javascript
export async function mapParallelAsyncFn(fn, arr){
  const promised = arr.map((a, i) => fn(a, i))

  return Promise.all(promised)
}

export function mapParallelAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => mapParallelAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapParallelAsyncFn(fn, arr).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { willFailAssertion } from './_internals/testUtils.js'
import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'
import { map } from './map.js'
import { mapParallelAsync } from './mapParallelAsync.js'

test('happy', async () => {
  const fn = async x => {
    await delay(100)

    return x + 10
  }
  const result = await mapParallelAsync(fn, [ 1, 2, 3 ])
  expect(result).toEqual([ 11, 12, 13 ])
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapParallelAsync(async x => {
      await delay(100)

      return x + 1
    }),
    mapParallelAsync(async x => {
      await delay(100)

      return x + 10
    }),
    map(x => x * 10)
  )([ 1, 2, 3 ])
  expect(result).toEqual([ 21, 31, 41 ])
})

test('error', async () => {
  try {
    const fn = async () => {
      JSON.parse('{:')
    }
    await mapParallelAsync(fn, [ 1, 2, 3 ])
    willFailAssertion()
  } catch (err){
    expect(err.message).toBeTruthy()
  }
})

test('pass index as second argument', async () => {
  await mapParallelAsync((x, i) => {
    expect(x % 10).toBe(0)
    expect(typeof i).toBe('number')
  },
  [ 10, 20, 30 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapParallelAsync)

### mapParallelAsyncWithLimit

```typescript

mapParallelAsyncWithLimit<T, K>(fn: AsyncIterable<T, K>, limit: number, list: T[]): Promise<K[]>
```

It is similar to `R.mapParallelAsync` in that it uses `Promise.all`, but not over the whole list, rather than with only slice from `list` with length `limit`.

> :boom: For example usage, please check `R.mapAsyncLimit` tests.

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapParallelAsyncWithLimit<T, K>(fn: AsyncIterable<T, K>, limit: number, list: T[]): Promise<K[]>;
mapParallelAsyncWithLimit<T, K>(fn: AsyncIterable<T, K>, limit: number): (list: T[]) => Promise<K[]>;
mapParallelAsyncWithLimit<T, K>(fn: AsyncIterableIndexed<T, K>, limit: number, list: T[]): Promise<K[]>;
mapParallelAsyncWithLimit<T, K>(fn: AsyncIterableIndexed<T, K>, limit: number): (list: T[]) => Promise<K[]>;
```

</details>

<details>

<summary><strong>R.mapParallelAsyncWithLimit</strong> source</summary>

```javascript
import { mapParallelAsync, mapParallelAsyncFn } from './mapParallelAsync.js'
import { splitEvery } from './splitEvery.js'

async function mapParallelAsyncWithLimitFn(
  iterable, limit, list
){
  if (list.length < limit) return mapParallelAsync(iterable, list)

  const slices = splitEvery(limit, list)

  let toReturn = []
  for (const slice of slices){
    const iterableResult = await mapParallelAsyncFn(iterable, slice)
    toReturn = [ ...toReturn, ...iterableResult ]
  }

  return toReturn
}

export function mapParallelAsyncWithLimit(
  iterable, limit, list
){
  if (arguments.length === 2){
    return async _list => mapParallelAsyncWithLimitFn(
      iterable, limit, _list
    )
  }

  return new Promise((resolve, reject) => {
    mapParallelAsyncWithLimitFn(
      iterable, limit, list
    )
      .then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import isCI from 'is-ci'

import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'
import { mapAsync } from './mapAsync.js'
import { mapParallelAsyncWithLimit } from './mapParallelAsyncWithLimit.js'
import { toDecimal } from './toDecimal.js'

jest.setTimeout(30000)

test('happy', async () => {
  const limit = 3
  const startTime = new Date().getTime()
  const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  const iterable = async x => {
    await delay(500)

    return x + 1
  }
  const result = await mapParallelAsyncWithLimit(
    iterable, limit, list
  )
  const endTime = new Date().getTime()
  const diffTime = endTime - startTime

  const startTime2 = new Date().getTime()
  await mapAsync(iterable, list)
  const endTime2 = new Date().getTime()
  const diffTime2 = endTime2 - startTime2

  const methodScale = toDecimal((diffTime2 - diffTime) / 1000, 0)
  expect(result).toEqual([ 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  if (!isCI) expect(methodScale).toBe(limit)
})

const fn = async x => {
  await delay(100)

  return x + 1
}

test('with R.composeAsync', async () => {
  const result = await composeAsync(mapParallelAsyncWithLimit(fn, 2), x =>
    x.map(xx => xx + 1))([ 1, 2, 3, 4, 5, 6 ])
  expect(result).toEqual([ 3, 4, 5, 6, 7, 8 ])
})

test('fallback to R.mapFastAsync', async () => {
  const result = await mapParallelAsyncWithLimit(
    fn, 4, [ 1, 2, 3 ]
  )
  expect(result).toEqual([ 2, 3, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapParallelAsyncWithLimit)

### mapToObject

```typescript

mapToObject<T, U extends object>(fn: (input: T) => U|false, list: readonly T[]): U
```

This method allows to generate an object from a list using input function `fn`.

This function must return either an object or `false` for every member of `list` input. 

If `false` is returned, then this element of `list` will be skipped in the calculation of the result.

All of returned objects will be merged to generate the final result.

```javascript
const list = [1, 2, 3, 12]
const fn = x => {
  if(x > 10) return false
  return x % 2 ? {[x]: x + 1}: {[x]: x + 10}
}

const result = mapToObject(fn, list)
const expected = {'1': 2, '2': 12, '3': 4}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%2012%5D%0Aconst%20fn%20%3D%20x%20%3D%3E%20%7B%0A%20%20if(x%20%3E%2010)%20return%20false%0A%20%20return%20x%20%25%202%20%3F%20%7B%5Bx%5D%3A%20x%20%2B%201%7D%3A%20%7B%5Bx%5D%3A%20x%20%2B%2010%7D%0A%7D%0A%0Aconst%20result%20%3D%20mapToObject(fn%2C%20list)%0Aconst%20expected%20%3D%20%7B'1'%3A%202%2C%20'2'%3A%2012%2C%20'3'%3A%204%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.mapToObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapToObject<T, U extends object>(fn: (input: T) => U|false, list: readonly T[]): U;
mapToObject<T, U extends object>(fn: (input: T) => U|false): (list: readonly T[]) => U;
mapToObject<T, U>(fn: (input: T) => object|false, list: T[]): U;
mapToObject<T, U>(fn: (input: T) => object|false): (list: T[]) => U;
```

</details>

<details>

<summary><strong>R.mapToObject</strong> source</summary>

```javascript
import { map } from './map.js'
import { mergeAll } from './mergeAll.js'
import { ok } from './ok.js'
import { type } from './type.js'

export function mapToObject(fn, list){
  if (arguments.length === 1){
    return listHolder => mapToObject(fn, listHolder)
  }
  ok(type(fn), type(list))('Function', 'Array')

  return mergeAll(map(fn, list))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapToObject } from './mapToObject.js'

const list = [ 1, 2, 3 ]
const fn = x => x % 2 ? { [ x ] : x + 1 } : { [ x ] : x + 10 }
const expected = {
  1 : 2,
  2 : 12,
  3 : 4,
}

test('happy', () => {
  const result = mapToObject(fn, list)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = mapToObject(fn)(list)
  expect(result).toEqual(expected)
})

test('string.fn test', () => {
  const list = [ 'auto', 'bar=false', 'foo', 'baz=1.5', 's=more', 'k=2' ]
  const fn = x => {
    const [ key, value ] = x.split('=')
    if (value === undefined || value === 'true'){
      return { [ key ] : true }
    }
    if (value === 'false'){
      return { [ key ] : false }
    }

    if (Number.isNaN(Number(value))){
      return { [ key ] : value }
    }

    return { [ key ] : Number(value) }
  }

  const expectedResult = {
    auto : true,
    foo  : true,
    bar  : false,
    baz  : 1.5,
    s    : 'more',
    k    : 2,
  }
  const result = mapToObject(fn, list)

  expect(result).toEqual(expectedResult)
})

test('bad path', () => {
  expect(() => mapToObject(1, null)).toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":"Number","schema":"Function"}
    all inputs: ["Number","Null"]
    all schemas: ["Function","Array"]"
  `)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapToObject)

### mapToObjectAsync

```typescript

mapToObjectAsync<T, U extends object>(fn: (input: T) => Promise<U|false>, list: readonly T[]): Promise<U>
```

Asynchronous version of `R.mapToObject`

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapToObjectAsync<T, U extends object>(fn: (input: T) => Promise<U|false>, list: readonly T[]): Promise<U>;
mapToObjectAsync<T, U extends object>(fn: (input: T) => Promise<U|false>): (list: readonly T[]) => Promise<U>;
mapToObjectAsync<T, U>(fn: (input: T) => object|false, list: T[]): U;
mapToObjectAsync<T, U>(fn: (input: T) => object|false): (list: T[]) => U;
```

</details>

<details>

<summary><strong>R.mapToObjectAsync</strong> source</summary>

```javascript
import { mapAsync } from './mapAsync.js'

export async function mapToObjectAsyncFn(fn, list){
  let toReturn = {}

  const innerIterable = async x => {
    const intermediateResult = await fn(x)
    if (intermediateResult === false) return
    toReturn = {
      ...toReturn,
      ...intermediateResult,
    }
  }

  await mapAsync(innerIterable, list)

  return toReturn
}

export function mapToObjectAsync(fn, list){
  if (arguments.length === 1){
    return async _list => mapToObjectAsyncFn(fn, _list)
  }

  return new Promise((resolve, reject) => {
    mapToObjectAsyncFn(fn, list).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'
import { mapToObjectAsync } from './mapToObjectAsync.js'

const list = [ 1, 2, 3, 12 ]
const fn = async x => {
  await delay(100)
  if (x > 10) return false

  return x % 2 ? { [ `key${ x }` ] : x + 1 } : { [ `key${ x }` ] : x + 10 }
}

const expected = {
  key1 : 2,
  key2 : 12,
  key3 : 4,
}

test('happy', async () => {
  const result = await mapToObjectAsync(fn, list)
  expect(result).toEqual(expected)
})

test('with R.composeAsync', async () => {
  const result = await composeAsync(mapToObjectAsync(fn), x =>
    x.filter(xx => xx > 1))(list)

  expect(result).toEqual({
    key2 : 12,
    key3 : 4,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapToObjectAsync)

### match

```typescript

match(regExpression: RegExp, str: string): string[]
```

Curried version of `String.prototype.match` which returns empty array, when there is no match.

```javascript
const result = [
  R.match('a', 'foo'),
  R.match(/([a-z]a)/g, 'bananas')
]
// => [[], ['ba', 'na', 'na']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.match('a'%2C%20'foo')%2C%0A%20%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B%5D%2C%20%5B'ba'%2C%20'na'%2C%20'na'%5D%5D">Try this <strong>R.match</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
match(regExpression: RegExp, str: string): string[];
match(regExpression: RegExp): (str: string) => string[];
```

</details>

<details>

<summary><strong>R.match</strong> source</summary>

```javascript
export function match(pattern, input){
  if (arguments.length === 1) return _input => match(pattern, _input)

  const willReturn = input.match(pattern)

  return willReturn === null ? [] : willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals.js'
import { match } from './match.js'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a', 'foo')).toEqual([])
  expect(equals(match('o', 'foo'), [ 'o' ])).toBeTrue()
})

test('throwing', () => {
  expect(() => {
    match(/a./g, null)
  }).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of null (reading \'match\')"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#match)

### mathMod

```typescript

mathMod(x: number, y: number): number
```

`R.mathMod` behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.

> :boom: Explanation is taken from `Ramda` documentation site.

```javascript
const result = [
  R.mathMod(-17, 5),
  R.mathMod(17, 5),
  R.mathMod(17, -5),  
  R.mathMod(17, 0)   
]
// => [3, 2, NaN, NaN]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.mathMod(-17%2C%205)%2C%0A%20%20R.mathMod(17%2C%205)%2C%0A%20%20R.mathMod(17%2C%20-5)%2C%20%20%0A%20%20R.mathMod(17%2C%200)%20%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%202%2C%20NaN%2C%20NaN%5D">Try this <strong>R.mathMod</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mathMod(x: number, y: number): number;
mathMod(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.mathMod</strong> source</summary>

```javascript
import { isInteger } from './_internals/isInteger.js'

export function mathMod(x, y){
  if (arguments.length === 1) return _y => mathMod(x, _y)
  if (!isInteger(x) || !isInteger(y) || y < 1) return NaN

  return (x % y + y) % y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mathMod } from './mathMod.js'

test('happy', () => {
  expect(mathMod(-17)(5)).toBe(3)
  expect(mathMod(17, 5)).toBe(2)
  expect(mathMod(17, -5)).toBeNaN()
  expect(mathMod(17, 0)).toBeNaN()
  expect(mathMod('17', 5)).toBeNaN()
  expect(mathMod({}, 2)).toBeNaN()
  expect(mathMod([], 2)).toBeNaN()
  expect(mathMod(Symbol(), 2)).toBeNaN()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mathMod)

### max

```typescript

max<T extends Ord>(x: T, y: T): T
```

It returns the greater value between `x` and `y`.

```javascript
const result = [
  R.max(5, 7),  
  R.max('bar', 'foo'),  
]
// => [7, 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.max(5%2C%207)%2C%20%20%0A%20%20R.max('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B7%2C%20'foo'%5D">Try this <strong>R.max</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
max<T extends Ord>(x: T, y: T): T;
max<T extends Ord>(x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>R.max</strong> source</summary>

```javascript
export function max(x, y){
  if (arguments.length === 1) return _y => max(x, _y)

  return y > x ? y : x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { max } from './max.js'

test('with number', () => {
  expect(max(2, 1)).toBe(2)
})

test('with string', () => {
  expect(max('foo')('bar')).toBe('foo')
  expect(max('bar')('baz')).toBe('baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#max)

### maxBy

```typescript

maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the greater value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try this <strong>R.maxBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
maxBy<T>(compareFn: (input: T) => Ord): (x: T) => (y: T) => T;
```

</details>

<details>

<summary><strong>R.maxBy</strong> source</summary>

```javascript
import { curry } from './curry.js'

export function maxByFn(
  compareFn, x, y
){
  return compareFn(y) > compareFn(x) ? y : x
}

export const maxBy = curry(maxByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { maxBy } from './maxBy.js'

test('happy', () => {
  expect(maxBy(
    Math.abs, -5, 2
  )).toBe(-5)
})

test('curried', () => {
  expect(maxBy(Math.abs)(2, -5)).toBe(-5)
  expect(maxBy(Math.abs)(2)(-5)).toBe(-5)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

### maybe

```typescript

maybe<T>(ifRule: boolean, whenIf: T | Func<T>, whenElse: T | Func<T>): T
```

It acts as ternary operator and it is helpful when we have nested ternaries. 

All of the inputs can be either direct values or anonymous functions. This is helpful if we don't want to evaluate certain paths as we can wrap this logic in a function.

```javascript
const x = 4
const y = 8

const ifRule = x > 2
const whenIf = y > 10 ? 3 : 7
const whenElse = () => {
  // just to show that it won't be evaluated
  return JSON.parse('{a:')
}

const result = R.maybe(
  ifRule,
  whenIf,
  whenElse,
)
// `result` is `7`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%204%0Aconst%20y%20%3D%208%0A%0Aconst%20ifRule%20%3D%20x%20%3E%202%0Aconst%20whenIf%20%3D%20y%20%3E%2010%20%3F%203%20%3A%207%0Aconst%20whenElse%20%3D%20()%20%3D%3E%20%7B%0A%20%20%2F%2F%20just%20to%20show%20that%20it%20won't%20be%20evaluated%0A%20%20return%20JSON.parse('%7Ba%3A')%0A%7D%0A%0Aconst%20result%20%3D%20R.maybe(%0A%20%20ifRule%2C%0A%20%20whenIf%2C%0A%20%20whenElse%2C%0A)%0A%2F%2F%20%60result%60%20is%20%607%60">Try this <strong>R.maybe</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
maybe<T>(ifRule: boolean, whenIf: T | Func<T>, whenElse: T | Func<T>): T;
maybe<T>(ifRule: VoidInputFunc<boolean>, whenIf: T | Func<T>, whenElse: T | Func<T>): T;
```

</details>

<details>

<summary><strong>R.maybe</strong> source</summary>

```javascript
import { type } from './type.js'

export function maybe(
  ifRule, whenIf, whenElse
){
  const whenIfInput =
    ifRule && type(whenIf) === 'Function' ? whenIf() : whenIf

  const whenElseInput =
    !ifRule && type(whenElse) === 'Function' ? whenElse() : whenElse

  return ifRule ? whenIfInput : whenElseInput
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { maybe } from './maybe.js'

const WHEN_IF = 'WHEN_IF'
const WHEN_ELSE = 'WHEN_ELSE'

test('prevent type error', () => {
  const x = 5
  const y = null
  const ifRule = x > 3

  const result = maybe(
    ifRule, WHEN_IF, () => y.a === 'foo'
  )

  expect(result).toBe(WHEN_IF)
})

test('whenElse is a function', () => {
  const x = 2
  const y = { a : 1 }
  const ifRule = x > 3

  const result = maybe(
    ifRule, WHEN_IF, () => y.a === 'foo'
  )

  expect(result).toBeFalse()
})

test('whenIf', () => {
  const x = 5
  const ifRule = x > 3

  const result = maybe(
    ifRule, WHEN_IF, WHEN_ELSE
  )

  expect(result).toBe(WHEN_IF)
})

test('whenIf is a function', () => {
  const x = 5
  const ifRule = () => x > 3

  const result = maybe(
    ifRule, () => WHEN_IF, WHEN_ELSE
  )

  expect(result).toBe(WHEN_IF)
})

test('whenElse', () => {
  const x = 1
  const ifRule = x > 3

  const result = maybe(
    ifRule, WHEN_IF, WHEN_ELSE
  )

  expect(result).toBe(WHEN_ELSE)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maybe)

### mean

```typescript

mean(list: number[]): number
```

It returns the mean value of `list` input.

```javascript
R.mean([ 2, 7 ])
// => 4.5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mean(%5B%202%2C%207%20%5D)%0A%2F%2F%20%3D%3E%204.5">Try this <strong>R.mean</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mean(list: number[]): number;
```

</details>

<details>

<summary><strong>R.mean</strong> source</summary>

```javascript
import { sum } from './sum.js'

export function mean(list){
  return sum(list) / list.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mean } from './mean.js'

test('happy', () => {
  expect(mean([ 2, 7 ])).toBe(4.5)
})

test('with NaN', () => {
  expect(mean([])).toBeNaN()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mean)

### median

```typescript

median(list: number[]): number
```

It returns the median value of `list` input.

```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.median(%5B%207%2C%202%2C%2010%2C%209%20%5D)%20%2F%2F%20%3D%3E%208">Try this <strong>R.median</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
median(list: number[]): number;
```

</details>

<details>

<summary><strong>R.median</strong> source</summary>

```javascript
import { mean } from './mean.js'

export function median(list){
  const len = list.length
  if (len === 0) return NaN
  const width = 2 - len % 2
  const idx = (len - width) / 2

  return mean(Array.prototype.slice
    .call(list, 0)
    .sort((a, b) => {
      if (a === b) return 0

      return a < b ? -1 : 1
    })
    .slice(idx, idx + width))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { median } from './median.js'

test('happy', () => {
  expect(median([ 2 ])).toBe(2)
  expect(median([ 7, 2, 10, 2, 9 ])).toBe(7)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#median)

### memoize

```typescript

memoize<T, K extends any[]>(fn: (...inputs: K) => T): (...inputs: K) => T
```

When `fn` is called for a second time with the same input, then the cache result is returned instead of calling again `fn`.

```javascript
let result = 0
const fn = (a,b) =>{
  result++

  return a + b
}
const memoized = R.memoize(fn)
memoized(1, 2)
memoized(1, 2)

// => `result` is equal to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20result%20%3D%200%0Aconst%20fn%20%3D%20(a%2Cb)%20%3D%3E%7B%0A%20%20result%2B%2B%0A%0A%20%20return%20a%20%2B%20b%0A%7D%0Aconst%20memoized%20%3D%20R.memoize(fn)%0Amemoized(1%2C%202)%0Amemoized(1%2C%202)%0Aconst%20result%20%3D%20%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%601%60">Try this <strong>R.memoize</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
memoize<T, K extends any[]>(fn: (...inputs: K) => T): (...inputs: K) => T;
```

</details>

<details>

<summary><strong>R.memoize</strong> source</summary>

```javascript
import { compose } from './compose.js'
import { map } from './map.js'
import { replace } from './replace.js'
import { sort } from './sort.js'
import { take } from './take.js'
import { type } from './type.js'

const cache = {}

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1
  const willReturn = {}
  compose(map(prop => willReturn[ prop ] = obj[ prop ]),
    sort(sortFn))(Object.keys(obj))

  return willReturn
}

const stringify = a => {
  const aType = type(a)
  if (aType === 'String'){
    return a
  } else if ([ 'Function', 'Promise' ].includes(aType)){
    const compacted = replace(
      /\s{1,}/g, ' ', a.toString()
    )

    return replace(
      /\s/g, '_', take(15, compacted)
    )
  } else if (aType === 'Object'){
    return JSON.stringify(normalizeObject(a))
  }

  return JSON.stringify(a)
}

const generateProp = (fn, ...inputArguments) => {
  let propString = ''
  inputArguments.forEach(inputArgument => {
    propString += `${ stringify(inputArgument) }_`
  })

  return `${ propString }${ stringify(fn) }`
}
// with weakmaps
export function memoize(fn, ...inputArguments){
  if (arguments.length === 1){
    return (...inputArgumentsHolder) => memoize(fn, ...inputArgumentsHolder)
  }

  const prop = generateProp(fn, ...inputArguments)
  if (prop in cache) return cache[ prop ]

  if (type(fn) === 'Async'){
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[ prop ] = result
        resolve(result)
      })
    })
  }

  const result = fn(...inputArguments)
  cache[ prop ] = result

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { memoize } from './memoize.js'

test('memoize function without input arguments', () => {
  const fn = () => 4
  const memoized = memoize(fn)
  expect(typeof memoized()).toBe('function')
})

test('happy', () => {
  let counter = 0

  const fn = ({ a, b, c }) => {
    counter++

    return a + b - c
  }
  const memoized = memoize(fn)
  expect(memoized({
    a : 1,
    c : 3,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
  expect(memoized({
    c : 3,
    a : 1,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
})

test('normal function', () => {
  let counter = 0
  const fn = (a, b) => {
    counter++

    return a + b
  }
  const memoized = memoize(fn)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(1)
  expect(memoized(2, 2)).toBe(4)
  expect(counter).toBe(2)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(2)
})

test('async function', async () => {
  let counter = 0
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  const fn = async (
    ms, a, b
  ) => {
    await delay(ms)
    counter++

    return a + b
  }

  const memoized = memoize(fn)
  await expect(memoized(
    100, 1, 2
  )).resolves.toBe(3)
  await expect(memoized(
    100, 1, 2
  )).resolves.toBe(3)
  await expect(memoized(
    100, 1, 2
  )).resolves.toBe(3)
  expect(counter).toBe(1)
  await expect(memoized(
    100, 2, 2
  )).resolves.toBe(4)
  expect(counter).toBe(2)
  await expect(memoized(
    100, 1, 2
  )).resolves.toBe(3)
  expect(counter).toBe(2)
})

test('string as argument', () => {
  let count = 0
  const foo = 'foo'
  const tester = memoize(n => {
    count++

    return `${ n }bar`
  })
  tester(foo)
  tester(foo)
  tester(foo)

  expect(tester(foo)).toBe('foobar')

  expect(count).toBe(1)

  tester('baz')

  expect(tester('baz')).toBe('bazbar')

  expect(count).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#memoize)

### memoizeWith

```typescript

memoizeWith<T, K extends any[]>(keyGen: any, fn: (...inputs: K) => T): (...inputs: K) => T
```

Creates a new function that, when invoked, caches the result of calling fn for a given argument set and returns the result.

```javascript
const keyGen = (a,b) => a + b
let result = 0
const fn = (a,b) =>{
  result++

  return a + b
}
const memoized = R.memoizeWith(keyGen, fn)
memoized(1, 2)
memoized(1, 2)

// => `result` is equal to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20keyGen%20%3D%20(a%2Cb)%20%3D%3E%20a%20%2B%20b%0Alet%20result%20%3D%200%0Aconst%20fn%20%3D%20(a%2Cb)%20%3D%3E%7B%0A%20%20result%2B%2B%0A%0A%20%20return%20a%20%2B%20b%0A%7D%0Aconst%20memoized%20%3D%20R.memoizeWith(keyGen%2C%20fn)%0Amemoized(1%2C%202)%0Amemoized(1%2C%202)%0Aconst%20result%20%3D%20%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%601%60">Try this <strong>R.memoizeWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
memoizeWith<T, K extends any[]>(keyGen: any, fn: (...inputs: K) => T): (...inputs: K) => T;
```

</details>

<details>

<summary><strong>R.memoizeWith</strong> source</summary>

```javascript
export function memoizeWith(keyGen, fn){
  if (arguments.length === 1){
    return _fn => memoizeWith(keyGen, _fn)
  }
  const cache = new Map()

  return function (){
    const key = keyGen.apply(this, arguments)
    if (!cache.has(key)){
      cache.set(key, fn.apply(this, arguments))
    }

    return cache.get(key)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { memoizeWith } from './memoizeWith.js'

test('calculates the value for a given input only once', () => {
  let ctr = 0
  const fib = memoizeWith(x => x,
    n => {
      ctr += 1

      return n < 2 ? n : fib(n - 2) + fib(n - 1)
    })
  const result = fib(10)
  expect(result).toBe(55)
  expect(ctr).toBe(11)
})

test('handles multiple parameters', () => {
  const f = memoizeWith((
    a, b, c
  ) => a + b + c,
  (
    a, b, c
  ) => a + ', ' + b + c)

  expect(f(
    'Hello', 'World', '!'
  )).toBe('Hello, World!')
  expect(f(
    'Goodbye', 'Cruel World', '!!!'
  )).toBe('Goodbye, Cruel World!!!')
  expect(f(
    'Hello', 'how are you', '?'
  )).toBe('Hello, how are you?')
  expect(f(
    'Hello', 'World', '!'
  )).toBe('Hello, World!')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#memoizeWith)

### merge

```typescript

merge<A, B>(target: A, newProps: B): A & B
export function merge<Output>(target: any): (newProps: any) => Output
```

Same as `R.mergeRight`.

<details>

<summary>All TypeScript definitions</summary>

```typescript
merge<A, B>(target: A, newProps: B): A & B
merge<Output>(target: any): (newProps: any) => Output;
```

</details>

<details>

<summary><strong>R.merge</strong> source</summary>

```javascript
export { mergeRight as merge } from './mergeRight.js'
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#merge)

### mergeAll

```typescript

mergeAll<T>(list: object[]): T
```

It merges all objects of `list` array sequentially and returns the result.

```javascript
const list = [
  {a: 1},
  {b: 2},
  {c: 3}
]
const result = R.mergeAll(list)
const expected = {
  a: 1,
  b: 2,
  c: 3
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Bb%3A%202%7D%2C%0A%20%20%7Bc%3A%203%7D%0A%5D%0Aconst%20result%20%3D%20R.mergeAll(list)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%202%2C%0A%20%20c%3A%203%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.mergeAll</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeAll<T>(list: object[]): T;
mergeAll(list: object[]): object;
```

</details>

<details>

<summary><strong>R.mergeAll</strong> source</summary>

```javascript
import { map } from './map.js'
import { mergeRight } from './mergeRight.js'

export function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = mergeRight(willReturn, val)
  }, arr)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeAll } from './mergeAll.js'

test('case 1', () => {
  const arr = [ { a : 1 }, { b : 2 }, { c : 3 } ]
  const expectedResult = {
    a : 1,
    b : 2,
    c : 3,
  }
  expect(mergeAll(arr)).toEqual(expectedResult)
})

test('case 2', () => {
  expect(mergeAll([ { foo : 1 }, { bar : 2 }, { baz : 3 } ])).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})

describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil', () => {
    expect(mergeAll([ null, { foo : 1 }, { foo : 2 }, { bar : 2 } ])).toEqual({
      foo : 2,
      bar : 2,
    })
  })

  it('if the last object is nil', () => {
    expect(mergeAll([ { foo : 1 }, { foo : 2 }, { bar : 2 }, undefined ])).toEqual({
      foo : 2,
      bar : 2,
    })
  })

  it('if an intermediate object is nil', () => {
    expect(mergeAll([ { foo : 1 }, { foo : 2 }, null, { bar : 2 } ])).toEqual({
      foo : 2,
      bar : 2,
    })
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeAll)

### mergeDeepLeft

```typescript

mergeDeepLeft<Output>(newProps: object, target: object): Output
```

```javascript
const result = R.mergeDeepLeft(
  {a: {b: 1}},
  {a: {b: 2, c: 3}}
)
// => {a: {b: 1, c: 3}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mergeDeepLeft(%0A%20%20%7Ba%3A%20%7Bb%3A%201%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%202%2C%20c%3A%203%7D%7D%0A)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20%7Bb%3A%201%2C%20c%3A%203%7D%7D">Try this <strong>R.mergeDeepLeft</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeDeepLeft<Output>(newProps: object, target: object): Output;
mergeDeepLeft<Output>(newProps: object): (target: object) => Output;

// RAMBDAX_MARKER_START
```

</details>

<details>

<summary><strong>R.mergeDeepLeft</strong> source</summary>

```javascript
import { mergeDeepRight } from './mergeDeepRight.js';

export function mergeDeepLeft(newProps, target) {
	return mergeDeepRight(target, newProps);
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeDeepLeft } from './mergeDeepLeft';

it('takes two objects, recursively merges their own properties and returns a new object', () => {
	const a = { w: 1, x: 2, y: { z: 3 } };
	const b = { a: 4, b: 5, c: { d: 6 } };
	expect(mergeDeepLeft(a, b)).toEqual({
		w: 1,
		x: 2,
		y: { z: 3 },
		a: 4,
		b: 5,
		c: { d: 6 },
	});
});

it('overrides properties in the second object with properties in the first object', () => {
	const a = { a: { b: 1, c: 2 }, y: 0 };
	const b = { a: { b: 3, d: 4 }, z: 0 };
	expect(mergeDeepLeft(a, b)).toEqual({ a: { b: 1, c: 2, d: 4 }, y: 0, z: 0 });
});

it('is not destructive', () => {
	const a = { w: 1, x: { y: 2 } };
	const res = mergeDeepLeft(a, { x: { y: 3 } });
	expect(a).not.toBe(res);
	expect(a.x).not.toBe(res.x);
	expect(res).toEqual({ w: 1, x: { y: 2 } });
});

it('reports only own properties', () => {
	const a = { w: 1, x: { y: 2 } };
	function Cla() {}
	Cla.prototype.y = 5;
	expect(mergeDeepLeft({ x: new Cla() }, a)).toEqual({ w: 1, x: { y: 2 } });
	expect(mergeDeepLeft(a, { x: new Cla() })).toEqual({ w: 1, x: { y: 2 } });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeDeepLeft)

### mergeDeepRight

```typescript

mergeDeepRight<Output>(target: object, newProps: object): Output
```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeDeepRight<Output>(target: object, newProps: object): Output;
mergeDeepRight<Output>(target: object): (newProps: object) => Output;
```

</details>

<details>

<summary><strong>R.mergeDeepRight</strong> source</summary>

```javascript
import { clone } from './clone.js'
import { type } from './type.js'

export function mergeDeepRight(target, source){
  if (arguments.length === 1){
    return sourceHolder => mergeDeepRight(target, sourceHolder)
  }

  const willReturn = clone(target)

  Object.keys(source).forEach(key => {
    if (type(source[ key ]) === 'Object'){
      if (type(target[ key ]) === 'Object'){
        willReturn[ key ] = mergeDeepRight(target[ key ], source[ key ])
      } else {
        willReturn[ key ] = source[ key ]
      }
    } else {
      willReturn[ key ] = source[ key ]
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeDeepRight } from './mergeDeepRight.js'

const student = {
  name    : 'foo',
  age     : 10,
  contact : {
    a     : 1,
    email : 'foo@example.com',
  },
}
const teacher = {
  age     : 40,
  contact : { email : 'baz@example.com' },
  songs   : { title : 'Remains the same' },
}

test('when merging object with lists inside them', () => {
  const a = {
    a : [ 1, 2, 3 ],
    b : [ 4, 5, 6 ],
  }
  const b = {
    a : [ 7, 8, 9 ],
    b : [ 10, 11, 12 ],
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a : [ 7, 8, 9 ],
    b : [ 10, 11, 12 ],
  }
  expect(result).toEqual(expected)
})

test('happy', () => {
  const result = mergeDeepRight(student, teacher)
  const curryResult = mergeDeepRight(student)(teacher)
  const expected = {
    age     : 40,
    name    : 'foo',
    contact : {
      a     : 1,
      email : 'baz@example.com',
    },
    songs : { title : 'Remains the same' },
  }

  expect(result).toEqual(expected)
  expect(curryResult).toEqual(expected)
})

test('issue 650', () => {
  expect(Object.keys(mergeDeepRight({ a : () => {} }, { b : () => {} }))).toEqual([
    'a',
    'b',
  ])
})

test('ramda compatible test 1', () => {
  const a = {
    w : 1,
    x : 2,
    y : { z : 3 },
  }
  const b = {
    a : 4,
    b : 5,
    c : { d : 6 },
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    w : 1,
    x : 2,
    y : { z : 3 },
    a : 4,
    b : 5,
    c : { d : 6 },
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 2', () => {
  const a = {
    a : {
      b : 1,
      c : 2,
    },
    y : 0,
  }
  const b = {
    a : {
      b : 3,
      d : 4,
    },
    z : 0,
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a : {
      b : 3,
      c : 2,
      d : 4,
    },
    y : 0,
    z : 0,
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 3', () => {
  const a = {
    w : 1,
    x : { y : 2 },
  }
  const result = mergeDeepRight(a, { x : { y : 3 } })
  const expected = {
    w : 1,
    x : { y : 3 },
  }
  expect(result).toEqual(expected)
})

test('functions are not discarded', () => {
  const obj = { foo : () => {} }
  expect(typeof mergeDeepRight(obj, {}).foo).toBe('function')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeDeepRight)

### mergeLeft

```typescript

mergeLeft<Output>(newProps: object, target: object): Output
```

Same as `R.merge`, but in opposite direction.

```javascript
const result = R.mergeLeft(
  {a: 10},
  {a: 1, b: 2}
)
// => {a:10, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mergeLeft(%0A%20%20%7Ba%3A%2010%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%0A)%0A%2F%2F%20%3D%3E%20%7Ba%3A10%2C%20b%3A%202%7D">Try this <strong>R.mergeLeft</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeLeft<Output>(newProps: object, target: object): Output;
mergeLeft<Output>(newProps: object): (target: object) => Output;
```

</details>

<details>

<summary><strong>R.mergeLeft</strong> source</summary>

```javascript
import { mergeRight } from './mergeRight.js'

export function mergeLeft(x, y){
  if (arguments.length === 1) return _y => mergeLeft(x, _y)

  return mergeRight(y, x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeLeft } from './mergeLeft.js'

const obj = {
  foo : 1,
  bar : 2,
}

test('happy', () => {
  expect(mergeLeft({ bar : 20 }, obj)).toEqual({
    foo : 1,
    bar : 20,
  })
})

test('curry', () => {
  expect(mergeLeft({ baz : 3 })(obj)).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})

test('when undefined or null instead of object', () => {
  expect(mergeLeft(null, undefined)).toEqual({})
  expect(mergeLeft(obj, null)).toEqual(obj)
  expect(mergeLeft(obj, undefined)).toEqual(obj)
  expect(mergeLeft(undefined, obj)).toEqual(obj)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeLeft)

### mergeRight

```typescript

mergeRight<A, B>(target: A, newProps: B): A & B
export function mergeRight<Output>(target: any): (newProps: any) => Output
```

It creates a copy of `target` object with overwritten `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.mergeRight(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.mergeRight(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try this <strong>R.mergeRight</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeRight<A, B>(target: A, newProps: B): A & B
mergeRight<Output>(target: any): (newProps: any) => Output;
```

</details>

<details>

<summary><strong>R.mergeRight</strong> source</summary>

```javascript
export function mergeRight(target, newProps){
  if (arguments.length === 1)
    return _newProps => mergeRight(target, _newProps)

  return Object.assign(
    {}, target || {}, newProps || {}
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeRight } from './mergeRight.js'

const obj = {
  foo : 1,
  bar : 2,
}

test('happy', () => {
  expect(mergeRight(obj, { bar : 20 })).toEqual({
    foo : 1,
    bar : 20,
  })
})

test('curry', () => {
  expect(mergeRight(obj)({ baz : 3 })).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(mergeRight(null, undefined)).toEqual({})
  expect(mergeRight(obj, null)).toEqual(obj)
  expect(mergeRight(obj, undefined)).toEqual(obj)
  expect(mergeRight(undefined, obj)).toEqual(obj)
})

test('with function inside object', () => {
  const result = mergeRight({ a : 1 }, { b : () => 1 })
  expect(typeof result.b).toBe('function')
})

describe('acts as if nil values are simply empty objects', () => {
  const a = {
    w : 1,
    x : 2,
  }
  const b = {
    w : 100,
    y : 3,
    z : 4,
  }

  it('if the first object is nil', () => {
    expect(mergeRight(null, b)).toEqual(b)
  })

  it('if the second object is nil', () => {
    expect(mergeRight(a, undefined)).toEqual(a)
  })

  it('if both objects are nil', () => {
    expect(mergeRight(null, undefined)).toEqual({})
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeRight)

### mergeWith

```typescript

mergeWith(fn: (x: any, z: any) => any, a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown>
```

It takes two objects and a function, which will be used when there is an overlap between the keys.

```javascript
const result = R.mergeWith(
  R.concat,
  {values : [ 10, 20 ]},
  {values : [ 15, 35 ]}
)
// => [ 10, 20, 15, 35 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mergeWith(%0A%20%20R.concat%2C%0A%20%20%7Bvalues%20%3A%20%5B%2010%2C%2020%20%5D%7D%2C%0A%20%20%7Bvalues%20%3A%20%5B%2015%2C%2035%20%5D%7D%0A)%0A%2F%2F%20%3D%3E%20%5B%2010%2C%2020%2C%2015%2C%2035%20%5D">Try this <strong>R.mergeWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeWith(fn: (x: any, z: any) => any, a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown>;
mergeWith<Output>(fn: (x: any, z: any) => any, a: Record<string, unknown>, b: Record<string, unknown>): Output;
mergeWith(fn: (x: any, z: any) => any, a: Record<string, unknown>): (b: Record<string, unknown>) => Record<string, unknown>;
mergeWith<Output>(fn: (x: any, z: any) => any, a: Record<string, unknown>): (b: Record<string, unknown>) => Output;
mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => Record<string, unknown>;
mergeWith<Output>(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => Output;
```

</details>

<details>

<summary><strong>R.mergeWith</strong> source</summary>

```javascript
import { curry } from './curry.js'

export function mergeWithFn(
  mergeFn, aInput, bInput
){
  const a = aInput ?? {}
  const b = bInput ?? {}
  const willReturn = {}

  Object.keys(a).forEach(key => {
    if (b[ key ] === undefined) willReturn[ key ] = a[ key ]
    else willReturn[ key ] = mergeFn(a[ key ], b[ key ])
  })

  Object.keys(b).forEach(key => {
    if (willReturn[ key ] !== undefined) return

    if (a[ key ] === undefined) willReturn[ key ] = b[ key ]
    else willReturn[ key ] = mergeFn(a[ key ], b[ key ])
  })

  return willReturn
}

export const mergeWith = curry(mergeWithFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { concat } from './concat.js'
import { mergeWithFn } from './mergeWith.js'

test('happy', () => {
  const result = mergeWithFn(
    concat,
    {
      a      : true,
      values : [ 10, 20 ],
    },
    {
      b      : true,
      values : [ 15, 35 ],
    }
  )
  const expected = {
    a      : true,
    b      : true,
    values : [ 10, 20, 15, 35 ],
  }
  expect(result).toEqual(expected)
})

// https://github.com/ramda/ramda/pull/3222/files#diff-d925d9188b478d2f1d4b26012c6dddac374f9e9d7a336604d654b9a113bfc857
describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil and the second empty', () => {
    expect(mergeWithFn(
      concat, undefined, {}
    )).toEqual({})
  })

  it('if the first object is empty and the second nil', () => {
    expect(mergeWithFn(
      concat, {}, null
    )).toEqual({})
  })

  it('if both objects are nil', () => {
    expect(mergeWithFn(
      concat, undefined, null
    )).toEqual({})
  })

  it('if the first object is not empty and the second is nil', () => {
    expect(mergeWithFn(
      concat, { a : 'a' }, null
    )).toEqual({ a : 'a' })
  })

  it('if the first object is nil and the second is not empty', () => {
    expect(mergeWithFn(
      concat, undefined, { a : 'a' }
    )).toEqual({ a : 'a' })
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeWith)

### min

```typescript

min<T extends Ord>(x: T, y: T): T
```

It returns the lesser value between `x` and `y`.

```javascript
const result = [
  R.min(5, 7),  
  R.min('bar', 'foo'),  
]
// => [5, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.min(5%2C%207)%2C%20%20%0A%20%20R.min('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%20'bar'%5D">Try this <strong>R.min</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
min<T extends Ord>(x: T, y: T): T;
min<T extends Ord>(x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>R.min</strong> source</summary>

```javascript
export function min(x, y){
  if (arguments.length === 1) return _y => min(x, _y)

  return y < x ? y : x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { min } from './min.js'

test('happy', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(1)(2)).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#min)

### minBy

```typescript

minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the lesser value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try this <strong>R.minBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
minBy<T>(compareFn: (input: T) => Ord): (x: T) => (y: T) => T;
```

</details>

<details>

<summary><strong>R.minBy</strong> source</summary>

```javascript
import { curry } from './curry.js'

export function minByFn(
  compareFn, x, y
){
  return compareFn(y) < compareFn(x) ? y : x
}

export const minBy = curry(minByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { minBy } from './minBy.js'

test('happy', () => {
  expect(minBy(
    Math.abs, -5, 2
  )).toBe(2)
})

test('curried', () => {
  expect(minBy(Math.abs)(2, -5)).toBe(2)
  expect(minBy(Math.abs)(2)(-5)).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

### modify

```typescript

modify<K extends PropertyKey, T>(prop: K, fn: (value: T) => T): <U extends Record<K, T>>(object: U) => U
```

```javascript
const result = R.modify()
// =>
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modify()%0A%2F%2F%20%3D%3E">Try this <strong>R.modify</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modify<K extends PropertyKey, T>(prop: K, fn: (value: T) => T): <U extends Record<K, T>>(object: U) => U;
modify<U, K extends keyof U>(prop: K, fn: (value: U[K]) => U[K], object: U): U;
modify<K extends PropertyKey>(prop: K): {
  <T>(fn: (value: T) => T): <U extends Record<K, T>>(object: U) => U;
  <T, U extends Record<K, T>>(fn: (value: T) => T, object: U): U;
};
```

</details>

<details>

<summary><strong>R.modify</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { isIterable } from './_internals/isIterable.js'
import { curry } from './curry.js'
import { updateFn } from './update.js'

function modifyFn(
  property, fn, iterable
){
  if (!isIterable(iterable)) return iterable
  if (iterable[ property ] === undefined) return iterable
  if (isArray(iterable)){
    return updateFn(
      property, fn(iterable[ property ]), iterable
    )
  }

  return {
    ...iterable,
    [ property ] : fn(iterable[ property ]),
  }
}

export const modify = curry(modifyFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modify as modifyRamda } from 'ramda'

import { compareCombinations, FALSY_VALUES } from './_internals/testUtils.js'
import { add } from './add.js'
import { compose } from './compose.js'
import { modify } from './modify.js'

const person = {
  name : 'foo',
  age  : 20,
}

test('happy', () => {
  expect(modify(
    'age', x => x + 1, person
  )).toEqual({
    name : 'foo',
    age  : 21,
  })
})

test('property is missing', () => {
  expect(modify(
    'foo', x => x + 1, person
  )).toEqual(person)
})

test('adjust if `array` at the given key with the `transformation` function', () => {
  expect(modify(
    1, add(1), [ 100, 1400 ]
  )).toEqual([ 100, 1401 ])
})

describe('ignores transformations if the input value is not Array and Object', () => {
  ;[ 42, undefined, null, '' ].forEach(value => {
    it(`${ value }`, () => {
      expect(modify(
        'a', add(1), value
      )).toEqual(value)
    })
  })
})

const possibleProperties = [ ...FALSY_VALUES, 'foo', 0 ]
const possibleTransformers = [
  ...FALSY_VALUES,
  add(1),
  add('foo'),
  compose,
  String,
]
const possibleObjects = [
  ...FALSY_VALUES,
  {},
  [ 1, 2, 3 ],
  {
    a   : 1,
    foo : 2,
  },
  {
    a   : 1,
    foo : [ 1 ],
  },
  {
    a   : 1,
    foo : 'bar',
  },
]

describe('brute force', () => {
  compareCombinations({
    fn          : modify,
    fnRamda     : modifyRamda,
    firstInput  : possibleProperties,
    secondInput : possibleTransformers,
    thirdInput  : possibleObjects,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 630,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modify)

### modifyPath

```typescript

modifyPath<T extends Record<string, unknown>>(path: Path, fn: (x: any) => unknown, object: Record<string, unknown>): T
```

It changes a property of object on the base of provided path and transformer function.

```javascript
const result = R.modifyPath('a.b.c', x=> x+1, {a:{b: {c:1}}})
// => {a:{b: {c:2}}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modifyPath('a.b.c'%2C%20x%3D%3E%20x%2B1%2C%20%7Ba%3A%7Bb%3A%20%7Bc%3A1%7D%7D%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%7Bb%3A%20%7Bc%3A2%7D%7D%7D">Try this <strong>R.modifyPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modifyPath<T extends Record<string, unknown>>(path: Path, fn: (x: any) => unknown, object: Record<string, unknown>): T;
modifyPath<T extends Record<string, unknown>>(path: Path, fn: (x: any) => unknown): (object: Record<string, unknown>) => T;
modifyPath<T extends Record<string, unknown>>(path: Path): (fn: (x: any) => unknown) => (object: Record<string, unknown>) => T;
```

</details>

<details>

<summary><strong>R.modifyPath</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { assoc } from './assoc.js'
import { curry } from './curry.js'
import { path as pathModule } from './path.js'

export function modifyPathFn(
  pathInput, fn, object
){
  const path = createPath(pathInput)
  if (path.length === 1){
    return {
      ...object,
      [ path[ 0 ] ] : fn(object[ path[ 0 ] ]),
    }
  }
  if (pathModule(path, object) === undefined) return object

  const val = modifyPath(
    Array.prototype.slice.call(path, 1),
    fn,
    object[ path[ 0 ] ]
  )
  if (val === object[ path[ 0 ] ]){
    return object
  }

  return assoc(
    path[ 0 ], val, object
  )
}

export const modifyPath = curry(modifyPathFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modifyPath } from './modifyPath.js'

test('happy', () => {
  const result = modifyPath(
    'a.b.c', x => x + 1, { a : { b : { c : 1 } } }
  )
  expect(result).toEqual({ a : { b : { c : 2 } } })
})

test('with array', () => {
  const input = { foo : [ { bar : '123' } ] }
  const result = modifyPath(
    'foo.0.bar', x => x + 'foo', input
  )
  expect(result).toEqual({ foo : { 0 : { bar : '123foo' } } })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modifyPath)

### modulo

```typescript

modulo(x: number, y: number): number
```

Curried version of `x%y`.

```javascript
R.modulo(17, 3) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modulo(17%2C%203)%20%2F%2F%20%3D%3E%202">Try this <strong>R.modulo</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modulo(x: number, y: number): number;
modulo(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.modulo</strong> source</summary>

```javascript
export function modulo(x, y){
  if (arguments.length === 1) return _y => modulo(x, _y)

  return x % y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modulo } from './modulo.js'

test('happy', () => {
  expect(modulo(17, 3)).toBe(2)
  expect(modulo(15)(6)).toBe(3)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modulo)

### move

```typescript

move<T>(fromIndex: number, toIndex: number, list: T[]): T[]
```

It returns a copy of `list` with exchanged `fromIndex` and `toIndex` elements.

> :boom: Rambda.move doesn't support negative indexes - it throws an error.

```javascript
const list = [1, 2, 3]
const result = R.move(0, 1, list)
// => [2, 1, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20result%20%3D%20R.move(0%2C%201%2C%20list)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%2C%203%5D">Try this <strong>R.move</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
move<T>(fromIndex: number, toIndex: number, list: T[]): T[];
move(fromIndex: number, toIndex: number): <T>(list: T[]) => T[];
move(fromIndex: number): {
    <T>(toIndex: number, list: T[]): T[];
    (toIndex: number): <T>(list: T[]) => T[];
};
```

</details>

<details>

<summary><strong>R.move</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { curry } from './curry.js'

function moveFn(
  fromIndex, toIndex, list
){
  if (fromIndex < 0 || toIndex < 0){
    throw new Error('Rambda.move does not support negative indexes')
  }
  if (fromIndex > list.length - 1 || toIndex > list.length - 1) return list

  const clone = cloneList(list)
  clone[ fromIndex ] = list[ toIndex ]
  clone[ toIndex ] = list[ fromIndex ]

  return clone
}

export const move = curry(moveFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { move } from './move.js'
const list = [ 1, 2, 3, 4 ]

test('happy', () => {
  const result = move(
    0, 1, list
  )

  expect(result).toEqual([ 2, 1, 3, 4 ])
})

test('with negative index', () => {
  const errorMessage = 'Rambda.move does not support negative indexes'
  expect(() => move(
    0, -1, list
  )).toThrowErrorMatchingInlineSnapshot('"Rambda.move does not support negative indexes"')
  expect(() => move(
    -1, 0, list
  )).toThrowErrorMatchingInlineSnapshot('"Rambda.move does not support negative indexes"')
})

test('when indexes are outside the list outbounds', () => {
  const result1 = move(
    10, 1, list
  )
  const result2 = move(
    1, 10, list
  )

  expect(result1).toEqual(list)
  expect(result2).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#move)

### multiply

```typescript

multiply(x: number, y: number): number
```

Curried version of `x*y`.

```javascript
R.multiply(2, 4) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(2%2C%204)%20%2F%2F%20%3D%3E%208">Try this <strong>R.multiply</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
multiply(x: number, y: number): number;
multiply(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.multiply</strong> source</summary>

```javascript
export function multiply(x, y){
  if (arguments.length === 1) return _y => multiply(x, _y)

  return x * y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { multiply } from './multiply.js'

test('happy', () => {
  expect(multiply(2, 4)).toBe(8)
  expect(multiply(2)(4)).toBe(8)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#multiply)

### negate

```typescript

negate(x: number): number
```

```javascript
R.negate(420)// => -420
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.negate(420)%2F%2F%20%3D%3E%20-420">Try this <strong>R.negate</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
negate(x: number): number;
```

</details>

<details>

<summary><strong>R.negate</strong> source</summary>

```javascript
export function negate(x){
  return -x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { negate } from './negate.js'

test('negate', () => {
  expect(negate(420)).toBe(-420)
  expect(negate(-13)).toBe(13)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#negate)

### nextIndex

```typescript

nextIndex(index: number, list: any[]): number
```

It returns the next index of the list.

If we have reached the end of the list, then it will return `0`.

```javascript
const list = [1, 2, 3]

const result = [
  R.nextIndex(0, list),
  R.nextIndex(1, list),
  R.nextIndex(2, list),
  R.nextIndex(10, list)
]
// => [1, 2, 0, 0]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nextIndex(0%2C%20list)%2C%0A%20%20R.nextIndex(1%2C%20list)%2C%0A%20%20R.nextIndex(2%2C%20list)%2C%0A%20%20R.nextIndex(10%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%200%2C%200%5D">Try this <strong>R.nextIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
nextIndex(index: number, list: any[]): number;
```

</details>

<details>

<summary><strong>R.nextIndex</strong> source</summary>

```javascript
export function nextIndex(index, list){
  return index >= list.length - 1 ? 0 : index + 1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { nextIndex } from './nextIndex.js'

const list = [ 1, 2, 3, 4 ]

test('happy path', () => {
  expect(nextIndex(2, list)).toBe(3)
})

test('go back to the start', () => {
  expect(nextIndex(3, list)).toBe(0)
})

test('current index is too big', () => {
  expect(nextIndex(32, list)).toBe(0)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#nextIndex)

### none

```typescript

none<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate, arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%206%0A%0Aconst%20result%20%3D%20R.none(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.none</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: T[]): boolean;
none<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.none</strong> source</summary>

```javascript
export function none(predicate, list){
  if (arguments.length === 1) return _list => none(predicate, _list)

  for (let i = 0; i < list.length; i++){
    if (predicate(list[ i ])) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { none } from './none.js'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [ 1, 3, 5, 7 ])).toBeTrue()
})

test('when false curried', () => {
  expect(none(input => input > 1, [ 1, 2, 3 ])).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#none)

### noop

```typescript

noop(): void
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
noop(): void;

// RAMBDAX_MARKER_END
// ============================================

export as namespace R
```

</details>

<details>

<summary><strong>R.noop</strong> source</summary>

```javascript
export function noop(){}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#noop)

### not

```typescript

not(input: any): boolean
```

It returns a boolean negated version of `input`.

```javascript
R.not(false) // true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.not(false)%20%2F%2F%20true">Try this <strong>R.not</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
not(input: any): boolean;
```

</details>

<details>

<summary><strong>R.not</strong> source</summary>

```javascript
export function not(input){
  return !input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { not } from './not.js'

test('not', () => {
  expect(not(false)).toBeTrue()
  expect(not(true)).toBeFalse()
  expect(not(0)).toBeTrue()
  expect(not(1)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#not)

### nth

```typescript

nth(index: number, input: string): string
```

Curried version of `input[index]`.

```javascript
const list = [1, 2, 3]
const str = 'foo'

const result = [
  R.nth(2, list),
  R.nth(6, list),
  R.nth(0, str),
]
// => [3, undefined, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20str%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nth(2%2C%20list)%2C%0A%20%20R.nth(6%2C%20list)%2C%0A%20%20R.nth(0%2C%20str)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20undefined%2C%20'f'%5D">Try this <strong>R.nth</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
nth(index: number, input: string): string;	
nth<T>(index: number, input: T[]): T | undefined;	
nth(n: number): {
  <T>(input: T[]): T | undefined;
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.nth</strong> source</summary>

```javascript
export function nth(index, input){
  if (arguments.length === 1) return _input => nth(index, _input)

  const idx = index < 0 ? input.length + index : index

  return Object.prototype.toString.call(input) === '[object String]' ?
    input.charAt(idx) :
    input[ idx ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { nth } from './nth.js'

test('happy', () => {
  expect(nth(2, [ 1, 2, 3, 4 ])).toBe(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toBe(3)
})

test('with string and correct index', () => {
  expect(nth(2)('foo')).toBe('o')
})

test('with string and invalid index', () => {
  expect(nth(20)('foo')).toBe('')
})

test('with negative index', () => {
  expect(nth(-3)([ 1, 2, 3, 4 ])).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#nth)

### objOf

```typescript

objOf<T, K extends string>(key: K, value: T): Record<K, T>
```

It creates an object with a single key-value pair.

```javascript
const result = R.objOf('foo', 'bar')
// => {foo: 'bar'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.objOf('foo'%2C%20'bar')%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%7D">Try this <strong>R.objOf</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
objOf<T, K extends string>(key: K, value: T): Record<K, T>;
objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;
```

</details>

<details>

<summary><strong>R.objOf</strong> source</summary>

```javascript
export function objOf(key, value){
  if (arguments.length === 1){
    return _value => objOf(key, _value)
  }

  return { [ key ] : value }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { objOf as objOfRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { objOf } from './objOf.js'

test('happy', () => {
  expect(objOf('foo', 42)).toEqual({ foo : 42 })
})

test('with bad inputs', () => {
  expect(objOf(null, undefined)).toEqual({ null : undefined })
})

test('curried', () => {
  expect(objOf('foo')(42)).toEqual({ foo : 42 })
})

describe('brute force', () => {
  const possibleInputs = [ 0, 1, null, undefined, [], {} ]

  compareCombinations({
    firstInput  : possibleInputs,
    secondInput : possibleInputs,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 36,
        }
      `)
    },
    fn      : objOf,
    fnRamda : objOfRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objOf)

### of

```typescript

of<T>(x: T): T[]
```

```javascript
R.of(null); // => [null]
R.of([42]); // => [[42]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.of(null)%3B%20%2F%2F%20%3D%3E%20%5Bnull%5D%0Aconst%20result%20%3D%20R.of(%5B42%5D)%3B%20%2F%2F%20%3D%3E%20%5B%5B42%5D%5D">Try this <strong>R.of</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
of<T>(x: T): T[];
```

</details>

<details>

<summary><strong>R.of</strong> source</summary>

```javascript
export function of(value){
  return [ value ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { of } from './of.js'

test('happy', () => {
  expect(of(3)).toEqual([ 3 ])

  expect(of(null)).toEqual([ null ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#of)

### ok

```typescript

ok(...inputs: any[]): (...schemas: any[]) => void | never
```

It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

If validation fails, it throws.

> :boom: It is same as `R.pass` but instead of returning `false`, it throws an error.

```javascript
const result = R.ok(
  1,
  ['foo', 'bar']
)(
  Number,
  [String]
)
// => undefined
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.ok(%0A%20%201%2C%0A%20%20%5B'foo'%2C%20'bar'%5D%0A)(%0A%20%20Number%2C%0A%20%20%5BString%5D%0A)%0A%2F%2F%20%3D%3E%20undefined">Try this <strong>R.ok</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ok(...inputs: any[]): (...schemas: any[]) => void | never;
```

</details>

<details>

<summary><strong>R.ok</strong> source</summary>

```javascript
import { any } from './any.js'
import { glue } from './glue.js'
import { fromPrototypeToString, isValid } from './isValid.js'
import { map } from './map.js'
import { type } from './type.js'

export function schemaToString(schema){
  if (type(schema) !== 'Object'){
    return fromPrototypeToString(schema).rule
  }

  return map(x => {
    const { rule, parsed } = fromPrototypeToString(x)
    const xType = type(x)

    if (xType === 'Function' && !parsed) return 'Function'

    return parsed ? rule : xType
  }, schema)
}

export function check(singleInput, schema){
  return isValid({
    input  : { singleInput },
    schema : { singleInput : schema },
  })
}

export function ok(...inputs){
  return (...schemas) => {
    let failedSchema

    const anyError = any((singleInput, i) => {
      const schema = schemas[ i ] === undefined ? schemas[ 0 ] : schemas[ i ]

      const checked = check(singleInput, schema)
      if (!checked){
        failedSchema = JSON.stringify({
          input  : singleInput,
          schema : schemaToString(schema),
        })
      }

      return !checked
    }, inputs)

    if (anyError){
      const errorMessage =
        inputs.length > 1 ?
          glue(`
        Failed R.ok -
        reason: ${ failedSchema }
        all inputs: ${ JSON.stringify(inputs) }
        all schemas: ${ JSON.stringify(schemas.map(schemaToString)) }
      `,
          '\n') :
          `Failed R.ok - ${ failedSchema }`

      throw new Error(errorMessage)
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ok, schemaToString } from './ok.js'

test('happy', () => {
  expect(() => {
    ok(
      1, 'foo', {}
    )(
      'number', 'string', 'object'
    )
  }).not.toThrow()
})

test('when validation fails', () => {
  expect(() => ok(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  ))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":{},"schema":"string"}
    all inputs: [1,"foo",{}]
    all schemas: ["number","string","string"]"
  `)
})

test('schema in error message', () => {
  const result = schemaToString({
    _a : [ Number ],
    a  : Number,
    b  : x => x > 2,
    c  : [ 'foo', 'bar' ],
    d  : [ { a : String } ],
    e  : 'boolean',
    f  : Array,
    h  : Object,
  })

  expect(result).toMatchInlineSnapshot(`
    {
      "_a": "Array",
      "a": "number",
      "b": "Function",
      "c": "Array",
      "d": "Array",
      "e": "String",
      "f": "array",
      "h": "object",
    }
  `)
})

test('error contains schema', () => {
  try {
    ok(
      1, 'foo', {}
    )(
      { a : Number }, String, String
    )
    expect(false).toBeTrue()
  } catch (e){
    expect(e.message.startsWith('Failed R.ok -')).toBeTruthy()
    expect(e).toBeInstanceOf(Error)
  }
})

test('when not throws with single schema', () => {
  expect(() => ok(
    1, 2, 3
  )('number')).not.toThrow()
})

test('when throws with single schema', () => {
  expect(() => ok(
    1, 2, '3'
  )('number')).toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":"3","schema":"number"}
    all inputs: [1,2,"3"]
    all schemas: ["number"]"
  `)
})

test('when throws with single input', () => {
  expect(() => ok('3')('number')).toThrowErrorMatchingInlineSnapshot('"Failed R.ok - {"input":"3","schema":"number"}"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ok)

### omit

```typescript

omit<T, K extends string>(propsToOmit: K[], obj: T): Omit<T, K>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToOmit` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {a: 1, b: 2, c: 3}
const propsToOmit = 'a,c,d'
const propsToOmitList = ['a', 'c', 'd']

const result = [
  R.omit(propsToOmit, Record<string, unknown>), 
  R.omit(propsToOmitList, Record<string, unknown>) 
]
// => [{b: 2}, {b: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20Record%3Cstring%2C%20unknown%3E)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20Record%3Cstring%2C%20unknown%3E)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try this <strong>R.omit</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
omit<T, K extends string>(propsToOmit: K[], obj: T): Omit<T, K>;
omit<K extends string>(propsToOmit: K[]): <T>(obj: T) => Omit<T, K>;
omit<T, U>(propsToOmit: string, obj: T): U;
omit<T, U>(propsToOmit: string): (obj: T) => U;
omit<T>(propsToOmit: string, obj: object): T;
omit<T>(propsToOmit: string): (obj: object) => T;
```

</details>

<details>

<summary><strong>R.omit</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { includes } from './_internals/includes.js'

export function omit(propsToOmit, obj){
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj)

  if (obj === null || obj === undefined)
    return undefined

  const propsToOmitValue = createPath(propsToOmit, ',')
  const willReturn = {}

  for (const key in obj)
    if (!includes(key, propsToOmitValue))
      willReturn[ key ] = obj[ key ]

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { omit } from './omit.js'

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = { b : 2 }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test.only('with number as property to omit', () => {
  const obj = {
    1 : 1,
    b : 2,
  }
  const result = omit([ 1 ], obj)
  expect(result).toEqual({ b : 2 })
})

test('with null', () => {
  expect(omit('a,b', null)).toBeUndefined()
})

test('happy', () => {
  expect(omit([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ b : 'bar' })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### on

```typescript

on<T, U, R>(binaryFn: (a: U, b: U) => R, unaryFn: (value: T) => U, a: T, b: T): R
```

It passes the two inputs through `unaryFn` and then the results are passed as inputs the the `binaryFn` to receive the final result(`binaryFn(unaryFn(FIRST_INPUT), unaryFn(SECOND_INPUT))`). 

This method is also known as P combinator.

```javascript
const result = R.on((a, b) => a + b, R.prop('a'), {b:0, a:1}, {a:2})
// => 3
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.on((a%2C%20b)%20%3D%3E%20a%20%2B%20b%2C%20R.prop('a')%2C%20%7Bb%3A0%2C%20a%3A1%7D%2C%20%7Ba%3A2%7D)%0A%2F%2F%20%3D%3E%203">Try this <strong>R.on</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
on<T, U, R>(binaryFn: (a: U, b: U) => R, unaryFn: (value: T) => U, a: T, b: T): R;
on<T, U, R>(binaryFn: (a: U, b: U) => R, unaryFn: (value: T) => U, a: T): (b: T) => R;
on<T, U, R>(binaryFn: (a: U, b: U) => R, unaryFn: (value: T) => U): {
    (a: T, b: T): R;
    (a: T): (b: T) => R;
};
```

</details>

<details>

<summary><strong>R.on</strong> source</summary>

```javascript
export function on(
  binaryFn, unaryFn, a, b
){
  if (arguments.length === 3){
    return _b => on(
      binaryFn, unaryFn, a, _b
    )
  }
  if (arguments.length === 2){
    return (_a, _b) => on(
      binaryFn, unaryFn, _a, _b
    )
  }

  return binaryFn(unaryFn(a), unaryFn(b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { on } from './on.js'

const binaryFn = (a, b) => a === b
const unaryFn = x => x.a
const a = {
  b : 0,
  a : 1,
}
const b = { a : 1 }

test('happy', () => {
  expect(on(
    binaryFn, unaryFn, a, b
  )).toBeTrue()
})

test('return type is not limited to boolean', () => {
  expect(on(
    binaryFn, unaryFn, a, b
  )).toBeTrue()
})

test('curried - last input', () => {
  expect(on(
    binaryFn, unaryFn, a
  )(b)).toBeTrue()
})

test('curried - last two inputs', () => {
  expect(on(binaryFn, unaryFn)(a, b)).toBeTrue()
})

test('not supported curried case', () => {
  expect(() =>
    on(binaryFn, unaryFn)(a)(b)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of undefined (reading \'a\')"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#on)

### once

```typescript

once<T extends AnyFunction, C = unknown>(fn: T, context?: C): T
```

It returns a function, which invokes only once `fn` function.

```javascript
let result = 0
const addOnce = R.once((x) => result = result + x)

addOnce(1)
addOnce(1)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20result%20%3D%200%0Aconst%20addOnce%20%3D%20R.once((x)%20%3D%3E%20result%20%3D%20result%20%2B%20x)%0A%0AaddOnce(1)%0Aconst%20result%20%3D%20addOnce(1)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.once</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
once<T extends AnyFunction, C = unknown>(fn: T, context?: C): T;
```

</details>

<details>

<summary><strong>R.once</strong> source</summary>

```javascript
import { curry } from './curry.js'

function onceFn(fn, context){
  let result

  return function (){
    if (fn){
      result = fn.apply(context || this, arguments)
      fn = null
    }

    return result
  }
}

export function once(fn, context){
  if (arguments.length === 1){
    const wrap = onceFn(fn, context)

    return curry(wrap)
  }

  return onceFn(fn, context)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { once } from './once.js'

test('with counter', () => {
  let counter = 0
  const runOnce = once(x => {
    counter++

    return x + 2
  })
  expect(runOnce(1)).toBe(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toBe(1)
})

test('happy path', () => {
  const addOneOnce = once((
    a, b, c
  ) => a + b + c, 1)

  expect(addOneOnce(
    10, 20, 30
  )).toBe(60)
  expect(addOneOnce(40)).toBe(60)
})

test('with context', () => {
  const context = { name: 'fris' }
  const getNameOnce = once(function (){
    return this.name
  }, context)

  expect(getNameOnce()).toBe('fris')
  expect(getNameOnce()).toBe('fris')
  expect(getNameOnce()).toBe('fris')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#once)

### or

```typescript

or<T, U>(a: T, b: U): T | U
```

Logical OR

```javascript
R.or(false, true); // => true
R.or(false, false); // => false
R.or(false, 'foo'); // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.or(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.or(false%2C%20false)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.or(false%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.or</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
or<T, U>(a: T, b: U): T | U;
or<T>(a: T): <U>(b: U) => T | U;
```

</details>

<details>

<summary><strong>R.or</strong> source</summary>

```javascript
export function or(a, b){
  if (arguments.length === 1) return _b => or(a, _b)

  return a || b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { or } from './or.js'

test('happy', () => {
  expect(or(0, 'foo')).toBe('foo')
  expect(or(true, true)).toBeTrue()
  expect(or(false)(true)).toBeTrue()
  expect(or(false, false)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#or)

### over

```typescript

over<S, A>(lens: Lens<S, A>): {
  (fn: (a: A) => A): (value: S) => S
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) // => ['FOO', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20headLens%20%3D%20R.lensIndex(0)%0A%20%0Aconst%20result%20%3D%20R.over(headLens%2C%20R.toUpper%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'FOO'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.over</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
over<S, A>(lens: Lens<S, A>): {
  (fn: (a: A) => A): (value: S) => S;
  (fn: (a: A) => A, value: S): S;
};
over<S, A>(lens: Lens<S, A>, fn: (a: A) => A): (value: S) => S;
over<S, A>(lens: Lens<S, A>, fn: (a: A) => A, value: S): S;
```

</details>

<details>

<summary><strong>R.over</strong> source</summary>

```javascript
import { curry } from './curry.js'

const Identity = x => ({
  x,
  map : fn => Identity(fn(x)),
})

function overFn(
  lens, fn, object
){
  return lens(x => Identity(fn(x)))(object).x
}

export const over = curry(overFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc.js'
import { lens } from './lens.js'
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'
import { over } from './over.js'
import { prop } from './prop.js'
import { toUpper } from './toUpper.js'

const testObject = {
  foo : 'bar',
  baz : {
    a : 'x',
    b : 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = over(
    assocLens, toUpper, testObject
  )
  const expected = {
    ...testObject,
    foo : 'BAR',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = over(
    pathLens, toUpper, testObject
  )
  const expected = {
    ...testObject,
    baz : {
      a : 'X',
      b : 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)
  const result = over(indexLens, toUpper)([ 'foo', 'bar' ])
  expect(result).toEqual([ 'FOO', 'bar' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#over)

### partial

```typescript

partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T
```

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

> :boom: Rambda's partial doesn't need the input arguments to be wrapped as array.

```javascript
const fn = (title, firstName, lastName) => {
  return title + ' ' + firstName + ' ' + lastName + '!'
}

const canPassAnyNumberOfArguments = R.partial(fn, 'Hello')
const ramdaStyle = R.partial(fn, ['Hello'])

const finalFn = canPassAnyNumberOfArguments('Foo')

finalFn('Bar') // =>  'Hello, Foo Bar!'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(title%2C%20firstName%2C%20lastName)%20%3D%3E%20%7B%0A%20%20return%20title%20%2B%20'%20'%20%2B%20firstName%20%2B%20'%20'%20%2B%20lastName%20%2B%20'!'%0A%7D%0A%0Aconst%20canPassAnyNumberOfArguments%20%3D%20R.partial(fn%2C%20'Hello')%0Aconst%20ramdaStyle%20%3D%20R.partial(fn%2C%20%5B'Hello'%5D)%0A%0Aconst%20finalFn%20%3D%20canPassAnyNumberOfArguments('Foo')%0A%0Aconst%20result%20%3D%20finalFn('Bar')%20%2F%2F%20%3D%3E%20%20'Hello%2C%20Foo%20Bar!'">Try this <strong>R.partial</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;
partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0, V1, V2],
): (x2: V3) => T;
partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0, V1],
): (x2: V2, x3: V3) => T;
partial<V0, V1, V2, V3, T>(
  fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T,
  args: [V0],
): (x1: V1, x2: V2, x3: V3) => T;
partial<T>(fn: (...a: any[]) => T, args: any[]): (...a: any[]) => T;
```

</details>

<details>

<summary><strong>R.partial</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function partial(fn, ...args){
  const len = fn.length

  // If a single array argument is given, those are the args (a la Ramda).
  // Otherwise, the variadic arguments are the args.
  const argList = args.length === 1 && isArray(args[0]) ? args[0] : args

  return (...rest) => {
    if (argList.length + rest.length >= len){
      return fn(...argList, ...rest)
    }

    return partial(fn, ...[ ...argList, ...rest ])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partial } from './partial.js'
import { type } from './type.js'

const greet = (
  salutation, title, firstName, lastName
) =>
  [salutation, title, firstName, lastName]

test('happy', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')
  const sayHello = partial(greet, [ 'Hello' ])
  const sayHelloRamda = partial(sayHello, [ 'Ms.' ])

  expect(type(fn)).toBe('Function')

  expect(fn('bar')).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar'])
  expect(sayHelloRamda('foo', 'bar')).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar'])
})

test('extra arguments are ignored', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')

  expect(type(fn)).toBe('Function')

  expect(fn(
    'bar', 1, 2
  )).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar'])
})

test('when array is input', () => {
  const fooFn = (
    a, b, c, d
  ) => ({
    a,
    b,
    c,
    d,
  })
  const barFn = partial(
    fooFn, [ 1, 2 ], []
  )

  expect(barFn(1, 2)).toEqual({
    a : [ 1, 2 ],
    b : [],
    c : 1,
    d : 2,
  })
})

test('ramda spec', () => {
  const sayHello = partial(greet, 'Hello')
  const sayHelloToMs = partial(sayHello, 'Ms.')

  expect(sayHelloToMs('Jane', 'Jones')).toStrictEqual(['Hello', 'Ms.', 'Jane', 'Jones'])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partial)

### partialCurry

```typescript

partialCurry<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output
```

Same as `R.partialObject`. 

When `Ramda` introduced `R.partialObject`, `Rambdax` already had such method, i.e. `R.partialCurry`. So this method is kept for backward compatibility.

> :boom: Function input can be asynchronous

<details>

<summary>All TypeScript definitions</summary>

```typescript
partialCurry<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output;
```

</details>

<details>

<summary><strong>R.partialCurry</strong> source</summary>

```javascript
export { partialObject as partialCurry } from './partialObject.js'
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partialCurry)

### partialObject

```typescript

partialObject<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output
```

`R.partialObject` is a curry helper designed specifically for functions accepting object as a single argument.

Initially the function knows only a part from the whole input object and then `R.partialObject` helps in preparing the function for the second part, when it receives the rest of the input.

> :boom: Function input can be asynchronous

```javascript
const fn = ({ a, b, c }) => a + b + c
const curried = R.partialObject(fn, { a : 1 })
const result = curried({
  b : 2,
  c : 3,
})
// => 6
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(%7B%20a%2C%20b%2C%20c%20%7D)%20%3D%3E%20a%20%2B%20b%20%2B%20c%0Aconst%20curried%20%3D%20R.partialObject(fn%2C%20%7B%20a%20%3A%201%20%7D)%0Aconst%20result%20%3D%20curried(%7B%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%203%2C%0A%7D)%0A%2F%2F%20%3D%3E%206">Try this <strong>R.partialObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
partialObject<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output;
```

</details>

<details>

<summary><strong>R.partialObject</strong> source</summary>

```javascript
import { mergeDeepRight } from './mergeDeepRight.js'

export function partialObject(fn, input){
  return nextInput => fn(mergeDeepRight(nextInput, input))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { partialObject } from './partialObject.js'
import { type } from './type.js'

test('with plain function', () => {
  const fn = ({ a, b, c }) => a + b + c
  const curried = partialObject(fn, { a : 1 })

  expect(type(curried)).toBe('Function')
  expect(curried({
    b : 2,
    c : 3,
  })).toBe(6)
})

test('with function that throws an error', () => {
  const fn = ({ a, b, c }) => {
    throw new Error('foo')
  }
  const curried = partialObject(fn, { a : 1 })

  expect(type(curried)).toBe('Function')
  expect(() =>
    curried({
      b : 2,
      c : 3,
    })).toThrowErrorMatchingInlineSnapshot('"foo"')
})

test('with async', async () => {
  const fn = async ({ a, b, c }) => {
    await delay(100)

    return a + b + c
  }

  const curried = partialObject(fn, { a : 1 })

  const result = await curried({
    b : 2,
    c : 3,
  })

  expect(result).toBe(6)
})

test('async function throwing an error', async () => {
  const fn = async ({ a, b, c }) => {
    await delay(100)
    throw new Error('foo')
  }

  const curried = partialObject(fn, { a : 1 })

  try {
    await curried({
      b : 2,
      c : 3,
    })
    expect(true).toBeFalsy()
  } catch (e){
    expect(e.message).toBe('foo')
  }
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partialObject)

### partition

```typescript

partition<T>(
  predicate: Predicate<T>,
  input: T[]
): [T[], T[]]
```

It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

```javascript
const list = [1, 2, 3]
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = [
  R.partition(predicate, list),
  R.partition(predicate, Record<string, unknown>)
]
const expected = [
  [[3], [1, 2]],
  [{c: 3},  {a: 1, b: 2}],
]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.partition(predicate%2C%20list)%2C%0A%20%20R.partition(predicate%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B3%5D%2C%20%5B1%2C%202%5D%5D%2C%0A%20%20%5B%7Bc%3A%203%7D%2C%20%20%7Ba%3A%201%2C%20b%3A%202%7D%5D%2C%0A%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.partition</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
partition<T>(
  predicate: Predicate<T>,
  input: T[]
): [T[], T[]];
partition<T>(
  predicate: Predicate<T>
): (input: T[]) => [T[], T[]];
partition<T>(
  predicate: (x: T, prop?: string) => boolean,
  input: { [key: string]: T}
): [{ [key: string]: T}, { [key: string]: T}];
partition<T>(
  predicate: (x: T, prop?: string) => boolean
): (input: { [key: string]: T}) => [{ [key: string]: T}, { [key: string]: T}];
```

</details>

<details>

<summary><strong>R.partition</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function partitionObject(predicate, iterable){
  const yes = {}
  const no = {}
  Object.entries(iterable).forEach(([ prop, value ]) => {
    if (predicate(value, prop)){
      yes[ prop ] = value
    } else {
      no[ prop ] = value
    }
  })

  return [ yes, no ]
}

export function partitionArray(
  predicate, list, indexed = false
){
  const yes = []
  const no = []
  let counter = -1

  while (counter++ < list.length - 1){
    if (
      indexed ? predicate(list[ counter ], counter) : predicate(list[ counter ])
    ){
      yes.push(list[ counter ])
    } else {
      no.push(list[ counter ])
    }
  }

  return [ yes, no ]
}

export function partition(predicate, iterable){
  if (arguments.length === 1){
    return listHolder => partition(predicate, listHolder)
  }
  if (!isArray(iterable)) return partitionObject(predicate, iterable)

  return partitionArray(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partition } from './partition.js'

test('with array', () => {
  const predicate = x => x > 2
  const list = [ 1, 2, 3, 4 ]

  const result = partition(predicate, list)
  const expectedResult = [
    [ 3, 4 ],
    [ 1, 2 ],
  ]

  expect(result).toEqual(expectedResult)
})

test('with object', () => {
  const predicate = (value, prop) => {
    expect(typeof prop).toBe('string')

    return value > 2
  }
  const hash = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }

  const result = partition(predicate)(hash)
  const expectedResult = [
    {
      c : 3,
      d : 4,
    },
    {
      a : 1,
      b : 2,
    },
  ]

  expect(result).toEqual(expectedResult)
})

test('readme example', () => {
  const list = [ 1, 2, 3 ]
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const predicate = x => x > 2

  const result = [ partition(predicate, list), partition(predicate, obj) ]
  const expected = [
    [ [ 3 ], [ 1, 2 ] ],
    [
      { c : 3 },
      {
        a : 1,
        b : 2,
      },
    ],
  ]
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### partitionIndexed

```typescript

partitionIndexed<T>(
  predicate: IndexedPredicate<T>,
  input: T[]
): [T[], T[]]
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
partitionIndexed<T>(
  predicate: IndexedPredicate<T>,
  input: T[]
): [T[], T[]];
partitionIndexed<T>(
  predicate: IndexedPredicate<T>
): (input: T[]) => [T[], T[]];
partitionIndexed<T>(
  predicate: (x: T, prop?: string) => boolean,
  input: { [key: string]: T}
): [{ [key: string]: T}, { [key: string]: T}];
partitionIndexed<T>(
  predicate: (x: T, prop?: string) => boolean
): (input: { [key: string]: T}) => [{ [key: string]: T}, { [key: string]: T}];
```

</details>

<details>

<summary><strong>R.partitionIndexed</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { partitionArray, partitionObject } from './partition.js'

export function partitionIndexed(predicate, iterable){
  if (arguments.length === 1){
    return listHolder => partitionIndexed(predicate, listHolder)
  }
  if (!isArray(iterable)) return partitionObject(predicate, iterable)

  return partitionArray(
    predicate, iterable, true
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partitionIndexed } from './partitionIndexed.js'

test('with array', () => {
  const predicate = (x, i) => {
    expect(x).toBeNumber()

    return x > 2
  }
  const list = [ 1, 2, 3, 4 ]

  const result = partitionIndexed(predicate, list)
  const curried = partitionIndexed(predicate)(list)
  const expectedResult = [
    [ 3, 4 ],
    [ 1, 2 ],
  ]

  expect(result).toEqual(expectedResult)
  expect(curried).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partitionIndexed)

### pass

```typescript

pass(...inputs: any[]): (...rules: any[]) => boolean
```

It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

```javascript
const result = R.pass(
  1,
  ['foo','bar']
)(
  Number,
  [String]
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pass(%0A%20%201%2C%0A%20%20%5B'foo'%2C'bar'%5D%0A)(%0A%20%20Number%2C%0A%20%20%5BString%5D%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.pass</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pass(...inputs: any[]): (...rules: any[]) => boolean;
```

</details>

<details>

<summary><strong>R.pass</strong> source</summary>

```javascript
import { any } from './any.js'
import { check } from './ok.js'

export function pass(...inputs){
  return (...schemas) =>
    any((x, i) => {
      const schema = schemas[ i ] === undefined ? schemas[ 0 ] : schemas[ i ]

      return !check(x, schema)
    }, inputs) === false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pass } from './pass.js'

test('true on success', () => {
  const result = pass(
    1, 'foo', {}
  )(
    'number', 'string', 'object'
  )

  expect(result).toBeTrue()
})

test('false on failure', () => {
  expect(pass(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  )).toBeFalse()
})

test('true when single schema', () => {
  expect(pass(
    1, 2, 3
  )('number')).toBeTrue()
})

test('false when single schema', () => {
  expect(pass(
    1, 'foo', {}
  )('number')).toBeFalse()
})

test('array of schemas', () => {
  const result = pass([ { a : 1 }, { a : 2 }, { a : 3 } ])([ { a : Number } ])
  expect(result).toBeTruthy()
})

test('reame example', () => {
  const result = pass(1, [ 'foo', 'bar' ])(Number, [ String ])
  expect(result).toBeTruthy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pass)

### path

```typescript

path<S, K0 extends keyof S = keyof S>(path: [K0], obj: S): S[K0]
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

> :boom: String annotation of `pathToSearch` is one of the differences between `Rambda` and `Ramda`.

```javascript
const obj = {a: {b: 1}}
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const result = [
  R.path(pathToSearch, obj),
  R.path(pathToSearchList, obj),
  R.path('a.b.c.d', obj)
]
// => [1, 1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%201%7D%7D%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.path(pathToSearch%2C%20obj)%2C%0A%20%20R.path(pathToSearchList%2C%20obj)%2C%0A%20%20R.path('a.b.c.d'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20undefined%5D">Try this <strong>R.path</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
path<S, K0 extends keyof S = keyof S>(path: [K0], obj: S): S[K0];
path<S, K0 extends keyof S = keyof S, K1 extends keyof S[K0] = keyof S[K0]>(path: [K0, K1], obj: S): S[K0][K1];
path<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1]
>(path: [K0, K1, K2], obj: S): S[K0][K1][K2];
path<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
>(path: [K0, K1, K2, K3], obj: S): S[K0][K1][K2][K3];
path<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
>(path: [K0, K1, K2, K3, K4], obj: S): S[K0][K1][K2][K3][K4];
path<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4] = keyof S[K0][K1][K2][K3][K4],
>(path: [K0, K1, K2, K3, K4, K5], obj: S): S[K0][K1][K2][K3][K4][K5];
path<T>(pathToSearch: string, obj: any): T | undefined;
path<T>(pathToSearch: string): (obj: any) => T | undefined;
path<T>(pathToSearch: RamdaPath): (obj: any) => T | undefined;
path<T>(pathToSearch: RamdaPath, obj: any): T | undefined;
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function pathFn(pathInput, obj){
  let willReturn = obj
  let counter = 0

  const pathArrValue = createPath(pathInput)

  while (counter < pathArrValue.length){
    if (willReturn === null || willReturn === undefined){
      return undefined
    }
    if (willReturn[ pathArrValue[ counter ] ] === null) return undefined

    willReturn = willReturn[ pathArrValue[ counter ] ]
    counter++
  }

  return willReturn
}

export function path(pathInput, obj){
  if (arguments.length === 1) return _obj => path(pathInput, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  return pathFn(pathInput, obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { path } from './path.js'

test('with array inside object', () => {
  const obj = { a : { b : [ 1, { c : 1 } ] } }

  expect(path('a.b.1.c', obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(path('a.b.c.d.f', obj)).toBeUndefined()
  expect(path('foo.babaz', undefined)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })).toBe('yes')
})

test('path', () => {
  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })).toBe('yes')
  expect(path([ 'foo', 'bar', 'baz' ])(null)).toBeUndefined()
  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })).toBeUndefined()
})

test('with number string in between', () => {
	expect(path(['a','1','b'], {a: [{b: 1}, {b: 2}]})).toBe(2)
})

test('null is not a valid path', () => {
  expect(path('audio_tracks', {
    a            : 1,
    audio_tracks : null,
  })).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#path)

### pathEq

```typescript

pathEq(pathToSearch: Path, target: any, input: any): boolean
```

It returns `true` if `pathToSearch` of `input` object is equal to `target` value.

`pathToSearch` is passed to `R.path`, which means that it can be either a string or an array. Also equality between `target` and the found value is determined by `R.equals`.

```javascript
const path = 'a.b'
const target = {c: 1}
const input = {a: {b: {c: 1}}}

const result = R.pathEq(
  path,
  target,
  input
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20target%20%3D%20%7Bc%3A%201%7D%0Aconst%20input%20%3D%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%201%7D%7D%7D%0A%0Aconst%20result%20%3D%20R.pathEq(%0A%20%20path%2C%0A%20%20target%2C%0A%20%20input%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.pathEq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pathEq(pathToSearch: Path, target: any, input: any): boolean;
pathEq(pathToSearch: Path, target: any): (input: any) => boolean;
pathEq(pathToSearch: Path): (target: any) => (input: any) => boolean;
```

</details>

<details>

<summary><strong>R.pathEq</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { equals } from './equals.js'
import { path } from './path.js'

function pathEqFn(
  pathToSearch, target, input
){
  return equals(path(pathToSearch, input), target)
}

export const pathEq = curry(pathEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathEq } from './pathEq.js'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : { c : 1 } } }
  const target = { c : 1 }

  expect(pathEq(
    path, target, obj
  )).toBeTrue()
})

test('when false', () => {
  const path = 'a.b'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(path, target)(obj)).toBeFalse()
})

test('when wrong path', () => {
  const path = 'foo.bar'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(
    path, target, obj
  )).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathEq)

### pathOr

```typescript

pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```

It reads `obj` input and returns either `R.path(pathToSearch, Record<string, unknown>)` result or `defaultValue` input.

```javascript
const defaultValue = 'DEFAULT_VALUE'
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const obj = {
  a : {
    b : 1
  }
}

const result = [
  R.pathOr(DEFAULT_VALUE, pathToSearch, Record<string, unknown>),
  R.pathOr(DEFAULT_VALUE, pathToSearchList, Record<string, unknown>), 
  R.pathOr(DEFAULT_VALUE, 'a.b.c', Record<string, unknown>)
]
// => [1, 1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%201%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearch%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearchList%2C%20Record%3Cstring%2C%20unknown%3E)%2C%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20'a.b.c'%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.pathOr</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): (pathToSearch: Path) => (obj: any) => T;
```

</details>

<details>

<summary><strong>R.pathOr</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { defaultTo } from './defaultTo.js'
import { path } from './path.js'

function pathOrFn(
  defaultValue, pathInput, obj
){
  return defaultTo(defaultValue, path(pathInput, obj))
}

export const pathOr = curry(pathOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathOr } from './pathOr.js'

test('with undefined', () => {
  const result = pathOr(
    'foo', 'x.y', { x : { y : 1 } }
  )

  expect(result).toBe(1)
})

test('with null', () => {
  const result = pathOr(
    'foo', 'x.y', null
  )

  expect(result).toBe('foo')
})

test('with NaN', () => {
  const result = pathOr(
    'foo', 'x.y', NaN
  )

  expect(result).toBe('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toBe('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toBe('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x : { y : { a : 1 } } })

  expect(result).toBe('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathOr)

### paths

```typescript

paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[]
```

It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, Record<string, unknown>)`.

Because it calls `R.path`, then `singlePath` can be either string or a list.

```javascript
const obj = {
  a : {
    b : {
      c : 1,
      d : 2
    }
  }
}

const result = R.paths([
  'a.b.c',
  'a.b.d',
  'a.b.c.d.e',
], Record<string, unknown>)
// => [1, 2, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%20%7B%0A%20%20%20%20%20%20c%20%3A%201%2C%0A%20%20%20%20%20%20d%20%3A%202%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.paths(%5B%0A%20%20'a.b.c'%2C%0A%20%20'a.b.d'%2C%0A%20%20'a.b.c.d.e'%2C%0A%5D%2C%20Record%3Cstring%2C%20unknown%3E)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20undefined%5D">Try this <strong>R.paths</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];
```

</details>

<details>

<summary><strong>R.paths</strong> source</summary>

```javascript
import { path } from './path.js'

export function paths(pathsToSearch, obj){
  if (arguments.length === 1){
    return _obj => paths(pathsToSearch, _obj)
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { paths } from './paths.js'

const obj = {
  a : {
    b : {
      c : 1,
      d : 2,
    },
  },
  p : [ { q : 3 } ],
  x : {
    y : 'FOO',
    z : [ [ {} ] ],
  },
}

test('with string path + curry', () => {
  const pathsInput = [ 'a.b.d', 'p.q' ]
  const expected = [ 2, undefined ]
  const result = paths(pathsInput, obj)
  const curriedResult = paths(pathsInput)(obj)

  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
})

test('with array path', () => {
  const result = paths([
    [ 'a', 'b', 'c' ],
    [ 'x', 'y' ],
  ],
  obj)

  expect(result).toEqual([ 1, 'FOO' ])
})

test('takes a paths that contains indices into arrays', () => {
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 0, 0 ],
  ],
  obj)).toEqual([ 3, {} ])
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 2, 1 ],
  ],
  obj)).toEqual([ 3, undefined ])
})

test('gets a deep property\'s value from objects', () => {
  expect(paths([ [ 'a', 'b' ] ], obj)).toEqual([ obj.a.b ])
  expect(paths([ [ 'p', 0 ] ], obj)).toEqual([ obj.p[ 0 ] ])
})

test('returns undefined for items not found', () => {
  expect(paths([ [ 'a', 'x', 'y' ] ], obj)).toEqual([ undefined ])
  expect(paths([ [ 'p', 2 ] ], obj)).toEqual([ undefined ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#paths)

### pathSatisfies

```typescript

pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean
```

```javascript
const result = R.pathSatisfies(
  x => x > 0,
  ['a', 'b', 'c'],
  {a: {b: {c: 1}}}
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pathSatisfies(%0A%20%20x%20%3D%3E%20x%20%3E%200%2C%0A%20%20%5B'a'%2C%20'b'%2C%20'c'%5D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%201%7D%7D%7D%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.pathSatisfies</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;
```

</details>

<details>

<summary><strong>R.pathSatisfies</strong> source</summary>

```javascript
import { path } from "./path.js";
import { curry } from "./curry.js";

export function pathSatisfiesFn(fn, pathInput, obj) {
  if(pathInput.length === 0) throw new Error("R.pathSatisfies received an empty path")
  return Boolean(fn(path(pathInput, obj))) 
}

export const pathSatisfies = curry(pathSatisfiesFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathSatisfies } from './pathSatisfies';

const isPositive = (n) => n > 0;

it('returns true if the specified object path satisfies the given predicate', () => {
	expect(
		pathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] }),
	).toBe(true);
	expect(
		pathSatisfies(isPositive, 'x.1.y', { x: [{ y: -1 }, { y: 1 }] }),
	).toBe(true);
});

it('returns false if the specified path does not exist', () => {
	expect(pathSatisfies(isPositive, ['x', 'y'], { x: { z: 42 } })).toBe(false);
	expect(pathSatisfies(isPositive, 'x.y', { x: { z: 42 } })).toBe(false);
});

it('throws on empty paths', () => {
	expect(() => pathSatisfies(Object.is, [], { x: { z: 42 } })).toThrow();
});

it('returns false otherwise', () => {
	expect(pathSatisfies(isPositive, ['x', 'y'], { x: { y: 0 } })).toBe(false);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathSatisfies)

### pick

```typescript

pick<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const list = [1, 2, 3, 4]
const propsToPick = 'a,foo'
const propsToPickList = ['a', 'foo']

const result = [
  R.pick(propsToPick, Record<string, unknown>),
  R.pick(propsToPickList, Record<string, unknown>),
  R.pick('a,bar', Record<string, unknown>),
  R.pick('bar', Record<string, unknown>),
  R.pick([0, 3, 5], list),
  R.pick('0,3,5', list),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
  {0: 1, 3: 4},
  {0: 1, 3: 4},
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pick(propsToPickList%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pick('a%2Cbar'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pick('bar'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pick(%5B0%2C%203%2C%205%5D%2C%20list)%2C%0A%20%20R.pick('0%2C3%2C5'%2C%20list)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%20%20%7B0%3A%201%2C%203%3A%204%7D%2C%0A%20%20%7B0%3A%201%2C%203%3A%204%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pick<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<K extends string | number | symbol>(propsToPick: K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<T, U>(propsToPick: string, input: T): U;
pick<T, U>(propsToPick: string): (input: T) => U;
pick<T>(propsToPick: string, input: object): T;
pick<T>(propsToPick: string): (input: object) => T;
```

</details>

<details>

<summary><strong>R.pick</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function pick(propsToPick, input){
  if (arguments.length === 1) return _input => pick(propsToPick, _input)

  if (input === null || input === undefined){
    return undefined
  }
  const keys = createPath(propsToPick, ',')
  const willReturn = {}
  let counter = 0

  while (counter < keys.length){
    if (keys[ counter ] in input){
      willReturn[ keys[ counter ] ] = input[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pick } from './pick.js'

const obj = {
  a : 1,
  b : 2,
  c : 3,
}

test('props to pick is a string', () => {
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('when prop is missing', () => {
  const result = pick('a,d,f', obj)
  expect(result).toEqual({ a : 1 })
})

test('with list indexes as props', () => {
  const list = [ 1, 2, 3 ]
  const expected = {
    0 : 1,
    2 : 3,
  }
  expect(pick([ 0, 2, 3 ], list)).toEqual(expected)
  expect(pick('0,2,3', list)).toEqual(expected)
})

test('props to pick is an array', () => {
  expect(pick([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(pick([ 'a', 'd', 'e', 'f' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toBeUndefined()
})

test('works with list as input and number as props - props to pick is an array', () => {
  const result = pick([ 1, 2 ], [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('works with list as input and number as props - props to pick is a string', () => {
  const result = pick('1,2', [ 'a', 'b', 'c', 'd' ])
  expect(result).toEqual({
    1 : 'b',
    2 : 'c',
  })
})

test('with symbol', () => {
  const symbolProp = Symbol('s')
  expect(pick([ symbolProp ], { [ symbolProp ] : 'a' })).toMatchInlineSnapshot(`
{
  Symbol(s): "a",
}
`)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pick)

### pickAll

```typescript

pickAll<T, K extends keyof T>(propsToPicks: K[], input: T): Pick<T, K>
```

Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const propsToPick = 'a,foo,bar'
const propsToPickList = ['a', 'foo', 'bar']

const result = [
  R.pickAll(propsToPick, Record<string, unknown>),
  R.pickAll(propsToPickList, Record<string, unknown>),
  R.pickAll('a,bar', Record<string, unknown>),
  R.pickAll('bar', Record<string, unknown>),
]
const expected = [
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, bar: undefined},
  {bar: undefined}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo%2Cbar'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%2C%20'bar'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pickAll(propsToPick%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pickAll(propsToPickList%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pickAll('a%2Cbar'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.pickAll('bar'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Bbar%3A%20undefined%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pickAll</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pickAll<T, K extends keyof T>(propsToPicks: K[], input: T): Pick<T, K>;
pickAll<T, U>(propsToPicks: string[], input: T): U;
pickAll(propsToPicks: string[]): <T, U>(input: T) => U;
pickAll<T, U>(propsToPick: string, input: T): U;
pickAll<T, U>(propsToPick: string): (input: T) => U;
```

</details>

<details>

<summary><strong>R.pickAll</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function pickAll(propsToPick, obj){
  if (arguments.length === 1) return _obj => pickAll(propsToPick, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue = createPath(propsToPick, ',')
  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    } else {
      willReturn[ keysValue[ counter ] ] = undefined
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pickAll } from './pickAll.js'

test('when input is undefined or null', () => {
  expect(pickAll('a', null)).toBeUndefined()
  expect(pickAll('a', undefined)).toBeUndefined()
})

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pickAll('a,c', obj)
  const resultCurry = pickAll('a,c')(obj)
  const expectedResult = {
    a : 1,
    b : undefined,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(pickAll([ 'a', 'b', 'c' ], {
    a : 'foo',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    b : undefined,
    c : 'baz',
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pickAll)

### pickBy

```typescript

pickBy<T>(pred: ObjPred<T>): <U, V extends T>(obj: V) => U
```

```javascript
const result = R.pickBy(
  x => x > 1,
  {a: 1, b: 2, c: 3}
)
// => {b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pickBy(%0A%20%20x%20%3D%3E%20x%20%3E%201%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%2C%20c%3A%203%7D">Try this <strong>R.pickBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pickBy<T>(pred: ObjPred<T>): <U, V extends T>(obj: V) => U;
pickBy<T, U>(pred: ObjPred<T>, obj: T): U;
```

</details>

<details>

<summary><strong>R.pickBy</strong> source</summary>

```javascript
export function pickBy(predicate, obj) {
  if (arguments.length === 1){
    return (_obj) => pickBy(predicate, _obj);
  }
  return Object.keys(obj).reduce((accum, key) => {
    if (predicate(obj[ key ], key, obj)){
      accum[ key ] = obj[ key ];
    }
    return accum;
  }, {});
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { T, always } from 'rambdax'
import { pickBy } from './pickBy'

var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

it('creates a copy of the object', () => {
  expect(pickBy(always(true), obj)).not.toBe(obj)
})

it('when returning truthy, keeps the key', () => {
  expect(pickBy(T, obj)).toEqual(obj)
  expect(pickBy(always({}), obj)).toEqual(obj)
  expect(pickBy(always(1), obj)).toEqual(obj)
})

it('when returning falsy, keeps the key', () => {
  expect(pickBy(always(false), obj)).toEqual({})
  expect(pickBy(always(0), obj)).toEqual({})
  expect(pickBy(always(null), obj)).toEqual({})
})

it('is called with (val,key,obj)', () => {
  expect(
    pickBy((val, key, _obj) => {
      expect(_obj).toBe(obj)
      return key === 'd' && val === 4
    }, obj)
  ).toEqual({d: 4})
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pickBy)

### pipe

```typescript

pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...funcs: [
      f1: (...args: TArgs) => R1,
      f2: (a: R1) => R2,
      f3: (a: R2) => R3,
      f4: (a: R3) => R4,
      f5: (a: R4) => R5,
      f6: (a: R5) => R6,
      f7: (a: R6) => R7,
      ...func: Array<(a: any) => any>,
      fnLast: (a: any) => TResult
  ]
): (...args: TArgs) => TResult
```

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.pipe</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...funcs: [
      f1: (...args: TArgs) => R1,
      f2: (a: R1) => R2,
      f3: (a: R2) => R3,
      f4: (a: R3) => R4,
      f5: (a: R4) => R5,
      f6: (a: R5) => R6,
      f7: (a: R6) => R7,
      ...func: Array<(a: any) => any>,
      fnLast: (a: any) => TResult
  ]
): (...args: TArgs) => TResult;  // fallback overload if number of piped functions greater than 7
pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (...args: TArgs) => R7;
pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (...args: TArgs) => R6;
pipe<TArgs extends any[], R1, R2, R3, R4, R5>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (...args: TArgs) => R5;
pipe<TArgs extends any[], R1, R2, R3, R4>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (...args: TArgs) => R4;
pipe<TArgs extends any[], R1, R2, R3>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (...args: TArgs) => R3;
pipe<TArgs extends any[], R1, R2>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2
): (...args: TArgs) => R2;
pipe<TArgs extends any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;
```

</details>

<details>

<summary><strong>R.pipe</strong> source</summary>

```javascript
import { _arity } from './_internals/_arity.js'
import { reduceFn } from './reduce.js'

export function _pipe(f, g){
  return function (){
    return g.call(this, f.apply(this, arguments))
  }
}

export function pipe(){
  if (arguments.length === 0){
    throw new Error('pipe requires at least one argument')
  }

  return _arity(arguments[ 0 ].length,
    reduceFn(
      _pipe,
      arguments[ 0 ],
      Array.prototype.slice.call(
        arguments, 1, Infinity
      )
    ))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add, last, length, map } from '../rambda.js'
import { __findHighestArity } from './applySpec.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const list = [ 1, 2, 3 ]
  const result = pipe(
    map(add(1)), map(add(10)), last
  )(list)

  expect(result).toBe(14)
})

test('issue #627', () => {
  expect(__findHighestArity({ len : pipe(length) })).toBe(1)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowErrorMatchingInlineSnapshot('"pipe requires at least one argument"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pipeAsync

```typescript

pipeAsync<TArg, R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...funcs: [
      f1: (a: Awaited<TArg>) => R1,
      f2: (a: Awaited<R1>) => R2,
      f3: (a: Awaited<R2>) => R3,
      f4: (a: Awaited<R3>) => R4,
      f5: (a: Awaited<R4>) => R5,
      f6: (a: Awaited<R5>) => R6,
      f7: (a: Awaited<R6>) => R7,
      ...func: Array<(a: any) => any>,
      fnLast: (a: any) => TResult
  ]
): (a: TArg | Promise<TArg>) => TResult
```

Asynchronous version of `R.pipe`, but it accepts only one argument as input(instead of multiple as regular `pipe`). It `await`s the result of each function before passing it to the next. Returns a `Promise` of the result.

```javascript
const add = async x => {
  await R.delay(100)
  return x + 1
}
const multiply = async x => {
  await R.delay(100)
  return x * 2 
}

const result = await R.pipeAsync(
  add,
  multiply
)(1)
// `result` resolves to `4`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20add%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20%2B%201%0A%7D%0Aconst%20multiply%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20return%20x%20*%202%20%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.pipeAsync(%0A%20%20add%2C%0A%20%20multiply%0A)(1)%0A%2F%2F%20%60result%60%20resolves%20to%20%604%60">Try this <strong>R.pipeAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pipeAsync<TArg, R1, R2, R3, R4, R5, R6, R7, TResult>(
  ...funcs: [
      f1: (a: Awaited<TArg>) => R1,
      f2: (a: Awaited<R1>) => R2,
      f3: (a: Awaited<R2>) => R3,
      f4: (a: Awaited<R3>) => R4,
      f5: (a: Awaited<R4>) => R5,
      f6: (a: Awaited<R5>) => R6,
      f7: (a: Awaited<R6>) => R7,
      ...func: Array<(a: any) => any>,
      fnLast: (a: any) => TResult
  ]
): (a: TArg | Promise<TArg>) => TResult;  // fallback overload if number of piped functions greater than 7
pipeAsync<TArg, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2,
  f3: (a: Awaited<R2>) => R3,
  f4: (a: Awaited<R3>) => R4,
  f5: (a: Awaited<R4>) => R5,
  f6: (a: Awaited<R5>) => R6,
  f7: (a: Awaited<R6>) => R7
): (a: TArg | Promise<TArg>) => R7;
pipeAsync<TArg, R1, R2, R3, R4, R5, R6>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2,
  f3: (a: Awaited<R2>) => R3,
  f4: (a: Awaited<R3>) => R4,
  f5: (a: Awaited<R4>) => R5,
  f6: (a: Awaited<R5>) => R6
): (a: TArg | Promise<TArg>) => R6;
pipeAsync<TArg, R1, R2, R3, R4, R5>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2,
  f3: (a: Awaited<R2>) => R3,
  f4: (a: Awaited<R3>) => R4,
  f5: (a: Awaited<R4>) => R5
): (a: TArg | Promise<TArg>) => R5;
pipeAsync<TArg, R1, R2, R3, R4>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2,
  f3: (a: Awaited<R2>) => R3,
  f4: (a: Awaited<R3>) => R4
): (a: TArg | Promise<TArg>) => R4;
pipeAsync<TArg, R1, R2, R3>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2,
  f3: (a: Awaited<R2>) => R3
): (a: TArg | Promise<TArg>) => R3;
pipeAsync<TArg, R1, R2>(
  f1: (a: Awaited<TArg>) => R1,
  f2: (a: Awaited<R1>) => R2
): (a: TArg | Promise<TArg>) => R2;
pipeAsync<TArg, R1>(
  f1: (a: Awaited<TArg>) => R1
): (a: TArg | Promise<TArg>) => R1;
```

</details>

<details>

<summary><strong>R.pipeAsync</strong> source</summary>

```javascript
import { reduce } from './reduce.js';

export function pipeAsync(...fnList) {
	return (startArgument) =>
		reduce(async (value, fn) => fn(await value), startArgument, fnList);
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { pipeAsync } from './pipeAsync.js'

async function identity(x){
  await delay(100)

  return x
}

test('happy', async () => {
  const fn1 = async x => {
    await delay(100)

    return x.map(xx => xx + 1)
  }
  const fn2 = async x => {
    await delay(100)

    return x.map(xx => xx * 2)
  }
  const result = await pipeAsync(fn1,
    fn2)(await Promise.all([ identity(1), identity(2), identity(3) ]))

  expect(result).toEqual([ 4, 6, 8 ])
})

const delayFn = ms =>
  new Promise(resolve => {
    resolve(ms + 1)
  })

test.only('with function returning promise', async () => {
  const result = await pipeAsync(
    x => x,
    x => x + 1,
    delayFn,
    x => x
  )(1)

  expect(result).toBe(3)
})

test('throw error', async () => {
  const fn = async () => {
    await delay(1)
    JSON.parse('{foo')
  }

  let didThrow = false
  try {
    await pipeAsync(x => x, fn)(20)
  } catch (e){
    didThrow = true
  }

  expect(didThrow).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipeAsync)

### piped

```typescript

piped<A, B>(input: A, fn0: (x: A) => B) : B
```

It is basically `R.pipe`, but instead of passing `input` argument as `R.pipe(...)(input)`, you pass it as the first argument.

```javascript
const result = R.piped(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.piped(%0A%20%20%5B1%2C%202%2C%203%5D%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%2C%0A%20%20R.map(x%20%3D%3E%20x*10)%2C%0A)%0A%2F%2F%20%3D%3E%20%5B20%2C%2030%5D">Try this <strong>R.piped</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
piped<A, B>(input: A, fn0: (x: A) => B) : B;
piped<A, B, C>(input: A, fn0: (x: A) => B, fn1: (x: B) => C) : C;
piped<A, B, C, D>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D) : D;
piped<A, B, C, D, E>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E) : E;
piped<A, B, C, D, E, F>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F) : F;
piped<A, B, C, D, E, F, G>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G) : G;
piped<A, B, C, D, E, F, G, H>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G, fn6: (x: G) => H) : H;
piped<A, B, C, D, E, F, G, H, I>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G, fn6: (x: G) => H, fn7: (x: H) => I) : I;
```

</details>

<details>

<summary><strong>R.piped</strong> source</summary>

```javascript
import { pipe } from './pipe.js'

export function piped(...inputs){
  const [ input, ...fnList ] = inputs

  return pipe(...fnList)(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { filter } from './filter.js'
import { map } from './map.js'
import { piped } from './piped.js'

test('happy', () => {
  const result = piped(
    [ 1, 2, 3 ],
    filter(x => x > 1),
    map(x => x * 10),
    map(add(1))
  )
  const expectedResult = [ 21, 31 ]

  expect(result).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#piped)

### pipedAsync

```typescript

pipedAsync<A, B>(input: A, fn0: (x: Awaited<A>) => B) : B
```

It accepts input as first argument and series of functions as next arguments. It is same as `R.piped` but with support for asynchronous functions like `R.pipeAsync`.

```javascript
const result = await R.pipedAsync(
  100,
  async x => {
    await R.delay(100)
    return x + 2
  },
  R.add(2),
  async x => {
    const delayed = await R.delay(100)
    return delayed + x
  }
)
// `result` resolves to `RAMBDAX_DELAY104`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20await%20R.pipedAsync(%0A%20%20100%2C%0A%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20await%20R.delay(100)%0A%20%20%20%20return%20x%20%2B%202%0A%20%20%7D%2C%0A%20%20R.add(2)%2C%0A%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20const%20delayed%20%3D%20await%20R.delay(100)%0A%20%20%20%20return%20delayed%20%2B%20x%0A%20%20%7D%0A)%0A%2F%2F%20%60result%60%20resolves%20to%20%60RAMBDAX_DELAY104%60">Try this <strong>R.pipedAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pipedAsync<A, B>(input: A, fn0: (x: Awaited<A>) => B) : B;
pipedAsync<A, B, C>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C) : C;
pipedAsync<A, B, C, D>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D) : D;
pipedAsync<A, B, C, D, E>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E) : E;
pipedAsync<A, B, C, D, E, F>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F) : F;
pipedAsync<A, B, C, D, E, F, G>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G) : G;
pipedAsync<A, B, C, D, E, F, G, H>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G, fn6: (x: Awaited<G>) => H) : H;
pipedAsync<A, B, C, D, E, F, G, H, I>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G, fn6: (x: Awaited<G>) => H, fn7: (x: Awaited<H>) => I) : I;
```

</details>

<details>

<summary><strong>R.pipedAsync</strong> source</summary>

```javascript
import { pipeAsync } from "./pipeAsync.js";

export function pipedAsync(input, ...fnList) {
  return pipeAsync(...fnList)(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { delay } from './delay.js'
import { pipedAsync } from './pipedAsync.js'

const fn1 = x => {
  return new Promise((resolve) => {
    resolve(x + 2)
  })
}
const fn2 = async x => {
  await delay(1)

  return x + 3
}

test('happy', async () => {
  const result = await pipedAsync(
    1, fn1, add(2), fn2
  )

  expect(result).toBe(8)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipedAsync)

### pluck

```typescript

pluck<K extends keyof T, T>(property: K, list: T[]): T[K][]
```

It returns list of the values of `property` taken from the all objects inside `list`.

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

const result = R.pluck(property, list) 
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20R.pluck(property%2C%20list)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.pluck</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pluck<K extends keyof T, T>(property: K, list: T[]): T[K][];
pluck<T>(property: number, list: { [k: number]: T }[]):  T[];
pluck<P extends string>(property: P): <T>(list: Record<P, T>[]) => T[];
pluck(property: number): <T>(list: { [k: number]: T }[]) => T[];
```

</details>

<details>

<summary><strong>R.pluck</strong> source</summary>

```javascript
import { map } from './map.js'

export function pluck(property, list){
  if (arguments.length === 1) return _list => pluck(property, _list)

  const willReturn = []

  map(x => {
    if (x[ property ] !== undefined){
      willReturn.push(x[ property ])
    }
  }, list)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pluck } from './pluck.js'

test('happy', () => {
  expect(pluck('a')([ { a : 1 }, { a : 2 }, { b : 1 } ])).toEqual([ 1, 2 ])
})

test('with undefined', () => {
  expect(pluck(undefined)([ { a : 1 }, { a : 2 }, { b : 1 } ])).toEqual([ ])
})

test('with number', () => {
  const input = [
    [ 1, 2 ],
    [ 3, 4 ],
  ]

  expect(pluck(0, input)).toEqual([ 1, 3 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pluck)

### prepend

```typescript

prepend<T>(xToPrepend: T, iterable: T[]): T[]
```

It adds element `x` at the beginning of `list`.

```javascript
const result = R.prepend('foo', ['bar', 'baz'])
// => ['foo', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.prepend</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
prepend<T>(xToPrepend: T, iterable: T[]): T[];
prepend<T, U>(xToPrepend: T, iterable: IsFirstSubtypeOfSecond<T, U>[]) : U[];
prepend<T>(xToPrepend: T): <U>(iterable: IsFirstSubtypeOfSecond<T, U>[]) => U[];
prepend<T>(xToPrepend: T): (iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.prepend</strong> source</summary>

```javascript
export function prepend(x, input){
  if (arguments.length === 1) return _input => prepend(x, _input)

  if (typeof input === 'string') return [ x ].concat(input.split(''))

  return [ x ].concat(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prepend } from './prepend.js'

test('happy', () => {
  expect(prepend('yes', [ 'foo', 'bar', 'baz' ])).toEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual([ 'foo' ])
})

test('with string instead of array', () => {
  expect(prepend('foo')('bar')).toEqual([ 'foo', 'b', 'a', 'r' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prepend)

### prevIndex

```typescript

prevIndex(index: number, list: any[]): number
```

It returns the next index of the list when the order is descending.

If we have reached the beginning of the list, then it will return the last index of the list.

> :boom: Unlike `R.nextIndex`, which safeguards against index out of bounds, this method does not.

```javascript
const list = [1, 2, 3]

const result = [
  R.prevIndex(0, list),
  R.prevIndex(1, list),
  R.prevIndex(2, list),
]
// => [2, 0, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.prevIndex(0%2C%20list)%2C%0A%20%20R.prevIndex(1%2C%20list)%2C%0A%20%20R.prevIndex(2%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%200%2C%201%5D">Try this <strong>R.prevIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
prevIndex(index: number, list: any[]): number;
```

</details>

<details>

<summary><strong>R.prevIndex</strong> source</summary>

```javascript
export function prevIndex(index, list){
  return index === 0 ? list.length - 1 : index - 1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prevIndex } from './prevIndex.js'

const list = [ 1, 2, 3, 4 ]

test('happy path 1', () => {
  expect(prevIndex(2, list)).toBe(1)
})

test('happy path 2', () => {
  expect(prevIndex(0, list)).toBe(3)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prevIndex)

### produce

```typescript

produce<Input extends any, Output>(
  rules: ProduceRules<Output, keyof Output, Input>,
  input: Input
): Output
```

It returns an object created by applying each value of `rules` to `input` argument.

> :boom: In Typescript context, `rules` functions can be only 1 level deep. In Javascript context, there is no such restriction.

```javascript
const rules = {
  foo: R.pipe(R.add(1), R.add(2)),
  a: {b: R.add(3)}
}
const result = R.produce(rules, 1)

const expected = {
  foo: 4,
  a: {b: 4}
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%3A%20R.pipe(R.add(1)%2C%20R.add(2))%2C%0A%20%20a%3A%20%7Bb%3A%20R.add(3)%7D%0A%7D%0Aconst%20result%20%3D%20R.produce(rules%2C%201)%0A%0Aconst%20expected%20%3D%20%7B%0A%20%20foo%3A%204%2C%0A%20%20a%3A%20%7Bb%3A%204%7D%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.produce</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
produce<Input extends any, Output>(
  rules: ProduceRules<Output, keyof Output, Input>,
  input: Input
): Output;
produce<Input extends any, Output>(
  rules: ProduceRules<Output, keyof Output, Input>
): <Input>(
  input: Input
) => Output;
```

</details>

<details>

<summary><strong>R.produce</strong> source</summary>

```javascript
import { map } from './map.js'
import { type } from './type.js'

export function produce(rules, input){
  if (arguments.length === 1){
    return _input => produce(rules, _input)
  }

  return map(singleRule =>
    type(singleRule) === 'Object' ?
      produce(singleRule, input) :
      singleRule(input),
  rules)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add, pipe } from '../rambda.js'
import { produce } from './produce.js'

const rules = {
  a : pipe(add(2), add(3)),
  b : x => ({ foo : x }),
  c : {
    d : add(2),
    e : add(10),
  },
}

const expected = {
  a : 6,
  b : { foo : 1 },
  c : {
    d : 3,
    e : 11,
  },
}

test('happy', () => {
  const result = produce(rules, 1)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = produce(rules)(1)
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#produce)

### produceAsync

```typescript

produceAsync<Input extends any, Output>(
  rules: ProduceAsyncRules<Output, keyof Output, Input>,
  input: Input
): Promise<Output>
```

It returns an object created by applying each value of `rules` to `input` argument.

`rules` input is an object with synchronous or asynchronous functions as values.

The return value is wrapped in a promise, even if all `rules` are synchronous functions.

```javascript
const rules = {
  foo: async x => {
    await R.delay(100)
    return x > 1
  },
  bar: x => ({baz: x})
}
const input = 2
const result = await R.produceAsync(rules, input)

const expected = {
  foo: true,
  bar: {baz: 2}
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%3A%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20await%20R.delay(100)%0A%20%20%20%20return%20x%20%3E%201%0A%20%20%7D%2C%0A%20%20bar%3A%20x%20%3D%3E%20(%7Bbaz%3A%20x%7D)%0A%7D%0Aconst%20input%20%3D%202%0Aconst%20result%20%3D%20await%20R.produceAsync(rules%2C%20input)%0A%0Aconst%20expected%20%3D%20%7B%0A%20%20foo%3A%20true%2C%0A%20%20bar%3A%20%7Bbaz%3A%202%7D%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.produceAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
produceAsync<Input extends any, Output>(
  rules: ProduceAsyncRules<Output, keyof Output, Input>,
  input: Input
): Promise<Output>;
produceAsync<Input extends any, Output>(
  rules: ProduceAsyncRules<Output, keyof Output, Input>
): <Input>(
  input: Input
) => Promise<Output>;
```

</details>

<details>

<summary><strong>R.produceAsync</strong> source</summary>

```javascript
import { map } from './map.js'
import { type } from './type.js'

function promisify({ condition, input, prop }){
  return new Promise((resolve, reject) => {
    if (type(condition) !== 'Promise'){
      return resolve({
        type    : prop,
        payload : condition(input),
      })
    }

    condition(input)
      .then(result => {
        resolve({
          type    : prop,
          payload : result,
        })
      })
      .catch(err => reject(err))
  })
}

function produceFn(conditions, input){
  let asyncConditionsFlag = false
  for (const prop in conditions){
    if (
      asyncConditionsFlag === false &&
      type(conditions[ prop ]) === 'Promise'
    ){
      asyncConditionsFlag = true
    }
  }

  if (asyncConditionsFlag === false){
    const willReturn = {}
    for (const prop in conditions){
      willReturn[ prop ] = conditions[ prop ](input)
    }

    return Promise.resolve(willReturn)
  }

  const promised = []
  for (const prop in conditions){
    const condition = conditions[ prop ]
    promised.push(promisify({
      input,
      condition,
      prop,
    }))
  }

  return new Promise((resolve, reject) => {
    Promise.all(promised)
      .then(results => {
        const willReturn = {}

        map(result => willReturn[ result.type ] = result.payload, results)

        resolve(willReturn)
      })
      .catch(err => reject(err))
  })
}

export function produceAsync(conditions, input){
  if (arguments.length === 1){
    return async _input => produceFn(conditions, _input)
  }

  return new Promise((resolve, reject) => {
    produceFn(conditions, input).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { produceAsync } from './produceAsync.js'

test('happy', async () => {
  const result = await produceAsync({
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
    bar : x => x.length === 3,
  },
  'LED')
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : true,
  }

  expect(result).toEqual(expected)
})

test('when all rules are synchronous', async () => {
  const result = await produceAsync({
    foo : x => `${ x }_ZEPPELIN`,
    bar : x => x.length === 3,
  },
  'LED')
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : true,
  }

  expect(result).toEqual(expected)
})

test('with error', async () => {
  const fn = produceAsync({
    foo : async x => {
      await delay(100)
      throw new Error(`${ x }_ZEPPELIN`)
    },
    bar : inputArgument => inputArgument === 5,
  })

  await expect(fn('LED')).rejects.toThrow('LED_ZEPPELIN')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#produceAsync)

### product

```typescript

product(list: number[]): number
```

```javascript
R.product([ 2, 3, 4 ])
// => 24)
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.product(%5B%202%2C%203%2C%204%20%5D)%0A%2F%2F%20%3D%3E%2024)">Try this <strong>R.product</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
product(list: number[]): number;
```

</details>

<details>

<summary><strong>R.product</strong> source</summary>

```javascript
import { multiply } from './multiply.js'
import { reduce } from './reduce.js'

export const product = reduce(multiply, 1)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { product } from './product.js'

test('happy', () => {
  expect(product([ 2, 3, 4 ])).toBe(24)
})

test('bad input', () => {
  expect(product([ null ])).toBe(0)
  expect(product([])).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#product)

### prop

```typescript

prop<_, P extends keyof never, T>(p: P, value: T): Prop<T, P>
```

It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

```javascript
const result = [
  R.prop('x', {x: 100}), 
  R.prop('x', {a: 1}) 
]
// => [100, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%2C%20%0A%20%20R.prop('x'%2C%20%7Ba%3A%201%7D)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B100%2C%20undefined%5D">Try this <strong>R.prop</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
prop<_, P extends keyof never, T>(p: P, value: T): Prop<T, P>;
prop<V>(p: keyof never, value: unknown): V;
prop<_, P extends keyof never>(p: P): <T>(value: T) => Prop<T, P>;
prop<V>(p: keyof never): (value: unknown) => V;
```

</details>

<details>

<summary><strong>R.prop</strong> source</summary>

```javascript
export function propFn(searchProperty, obj){
  if (!obj) return undefined

  return obj[ searchProperty ]
}

export function prop(searchProperty, obj){
  if (arguments.length === 1) return _obj => prop(searchProperty, _obj)

  return propFn(searchProperty, obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prop } from './prop.js'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toBe('baz')

  expect(prop('bar')({ foo : 'baz' })).toBeUndefined()

  expect(prop('bar')(null)).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prop)

### propEq

```typescript

propEq<K extends string | number>(valueToMatch: any, propToFind: K, obj: Record<K, any>): boolean
```

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const obj = { foo: 'bar' }
const secondObj = { foo: 1 }

const propToFind = 'foo'
const valueToMatch = 'bar'

const result = [
  R.propEq(propToFind, valueToMatch, Record<string, unknown>),
  R.propEq(propToFind, valueToMatch, secondRecord<string, unknown>)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20secondRecord%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.propEq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propEq<K extends string | number>(valueToMatch: any, propToFind: K, obj: Record<K, any>): boolean;
propEq<K extends string | number>(valueToMatch: any, propToFind: K): (obj: Record<K, any>) => boolean;
propEq(valueToMatch: any): {
  <K extends string | number>(propToFind: K, obj: Record<K, any>): boolean;
  <K extends string | number>(propToFind: K): (obj: Record<K, any>) => boolean;
};
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { equals } from './equals.js'
import { prop } from './prop.js'

function propEqFn(
  valueToMatch, propToFind, obj
){
  if (!obj) return false

  return equals(valueToMatch, prop(propToFind, obj))
}

export const propEq = curry(propEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { BAR, FOO } from './_internals/testUtils.js'
import { propEq } from './propEq.js'

test('happy', () => {
  const obj = { [ FOO ] : BAR }
  expect(propEq(BAR, FOO)(obj)).toBeTrue()
  expect(propEq(1, FOO)(obj)).toBeFalse()
  expect(propEq(1)(FOO)(obj)).toBeFalse()
  expect(propEq(
    1, 1, null
  )).toBeFalse()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq(
    'name', 'Abby', null
  )).toBeFalse()
  expect(propEq(
    'name', 'Abby', undefined
  )).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propIs

```typescript

propIs<C extends AnyFunction, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>
```

It returns `true` if `property` of `obj` is from `target` type.

```javascript
const obj = {a:1, b: 'foo'}

const result = [
  R.propIs(Number, 'a', Record<string, unknown>),
  R.propIs(String, 'b', Record<string, unknown>),
  R.propIs(Number, 'b', Record<string, unknown>),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A%20'foo'%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propIs(Number%2C%20'a'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.propIs(String%2C%20'b'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.propIs(Number%2C%20'b'%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.propIs</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propIs<C extends AnyFunction, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>;
propIs<C extends AnyConstructor, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, InstanceType<C>>;
propIs<C extends AnyFunction, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
propIs<C extends AnyConstructor, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
propIs<C extends AnyFunction>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, ReturnType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
};
```

</details>

<details>

<summary><strong>R.propIs</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { is } from './is.js'

function propIsFn(
  targetPrototype, property, obj
){
  return is(targetPrototype, obj[ property ])
}

export const propIs = curry(propIsFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propIs } from './propIs.js'

const obj = {
  a : 1,
  b : 'foo',
}

test('when true', () => {
  expect(propIs(
    Number, 'a', obj
  )).toBeTrue()
  expect(propIs(
    String, 'b', obj
  )).toBeTrue()
})

test('when false', () => {
  expect(propIs(
    String, 'a', obj
  )).toBeFalse()
  expect(propIs(
    Number, 'b', obj
  )).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propIs)

### propOr

```typescript

propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property, Record<string, unknown>),
  R.propOr(defaultValue, 'foo', Record<string, unknown>)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property%2C%20Record%3Cstring%2C%20unknown%3E)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo'%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.propOr</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T;
propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>> | undefined) => T;
propOr<T>(defaultValue: T): {
  <P extends string>(property: P, obj: Partial<Record<P, T>> | undefined): T;
  <P extends string>(property: P): (obj: Partial<Record<P, T>> | undefined) => T;
}
```

</details>

<details>

<summary><strong>R.propOr</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { defaultTo } from './defaultTo.js'

function propOrFn(
  defaultValue, property, obj
){
  if (!obj) return defaultValue

  return defaultTo(defaultValue, obj[ property ])
}

export const propOr = curry(propOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propOr } from './propOr.js'

test('propOr (result)', () => {
  const obj = { a : 1 }
  expect(propOr(
    'default', 'a', obj
  )).toBe(1)
  expect(propOr(
    'default', 'notExist', obj
  )).toBe('default')
  expect(propOr(
    'default', 'notExist', null
  )).toBe('default')
})

test('propOr (currying)', () => {
  const obj = { a : 1 }
  expect(propOr('default')('a', obj)).toBe(1)
  expect(propOr('default', 'a')(obj)).toBe(1)
  expect(propOr('default')('notExist', obj)).toBe('default')
  expect(propOr('default', 'notExist')(obj)).toBe('default')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propOr)

### props

```typescript

props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[]
```

It takes list with properties `propsToPick` and returns a list with property values in `obj`.

```javascript
const result = R.props(
  ['a', 'b'], 
  {a:1, c:3}
)
// => [1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.props(%0A%20%20%5B'a'%2C%20'b'%5D%2C%20%0A%20%20%7Ba%3A1%2C%20c%3A3%7D%0A)%0A%2F%2F%20%3D%3E%20%5B1%2C%20undefined%5D">Try this <strong>R.props</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[];
props<P extends string>(propsToPick: P[]): <T>(obj: Record<P, T>) => T[];
props<P extends string, T>(propsToPick: P[]): (obj: Record<P, T>) => T[];
```

</details>

<details>

<summary><strong>R.props</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { mapArray } from './map.js'

export function props(propsToPick, obj){
  if (arguments.length === 1){
    return _obj => props(propsToPick, _obj)
  }
  if (!isArray(propsToPick)){
    throw new Error('propsToPick is not a list')
  }

  return mapArray(prop => obj[ prop ], propsToPick)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { props } from './props.js'

const obj = {
  a : 1,
  b : 2,
}
const propsToPick = [ 'a', 'c' ]

test('happy', () => {
  const result = props(propsToPick, obj)
  expect(result).toEqual([ 1, undefined ])
})

test('curried', () => {
  const result = props(propsToPick)(obj)
  expect(result).toEqual([ 1, undefined ])
})

test('wrong input', () => {
  expect(() => props(null)(obj)).toThrowErrorMatchingInlineSnapshot('"propsToPick is not a list"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#props)

### propSatisfies

```typescript

propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<string, T>): boolean
```

It returns `true` if the object property satisfies a given predicate.

```javascript
const obj = {a: {b:1}}
const property = 'a'
const predicate = x => x?.b === 1

const result = R.propSatisfies(predicate, property, Record<string, unknown>)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A1%7D%7D%0Aconst%20property%20%3D%20'a'%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%3F.b%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.propSatisfies(predicate%2C%20property%2C%20Record%3Cstring%2C%20unknown%3E)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.propSatisfies</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<string, T>): boolean;
propSatisfies<T>(predicate: Predicate<T>, property: string): (obj: Record<string, T>) => boolean;
```

</details>

<details>

<summary><strong>R.propSatisfies</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { prop } from './prop.js'

function propSatisfiesFn(
  predicate, property, obj
){
  return predicate(prop(property, obj))
}

export const propSatisfies = curry(propSatisfiesFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propSatisfies } from './propSatisfies.js'

const obj = { a : 1 }

test('when true', () => {
  expect(propSatisfies(
    x => x > 0, 'a', obj
  )).toBeTrue()
})

test('when false', () => {
  expect(propSatisfies(x => x < 0, 'a')(obj)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propSatisfies)

### random

```typescript

random(minInclusive: number, maxInclusive: number): number
```

It returns a random number between `min` inclusive and `max` inclusive.

<details>

<summary>All TypeScript definitions</summary>

```typescript
random(minInclusive: number, maxInclusive: number): number;
```

</details>

<details>

<summary><strong>R.random</strong> source</summary>

```javascript
export function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { random } from './random.js'
import { range } from './range.js'

test('when returns true', () => {
  range(0, 100).map(() => {
    const randomResult = random(1, 10)
    expect(randomResult).toBeLessThanOrEqual(10)
    expect(randomResult).toBeGreaterThanOrEqual(1)
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#random)

### range

```typescript

range(startInclusive: number, endExclusive: number): number[]
```

It returns list of numbers between `startInclusive` to `endExclusive` markers.

```javascript
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%205)%0A%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try this <strong>R.range</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
range(startInclusive: number, endExclusive: number): number[];
range(startInclusive: number): (endExclusive: number) => number[];
```

</details>

<details>

<summary><strong>R.range</strong> source</summary>

```javascript
export function range(start, end){
  if (arguments.length === 1) return _end => range(start, _end)

  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))){
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (end < start) return []

  const len = end - start
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = start + i
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { range } from './range.js'

test('happy', () => {
  expect(range(0, 10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('end range is bigger than start range', () => {
  expect(range(7, 3)).toEqual([])
  expect(range(5, 5)).toEqual([])
})

test('with bad input', () => {
  const throwMessage = 'Both arguments to range must be numbers'
  expect(() => range('a', 6)).toThrowWithMessage(Error, throwMessage)
  expect(() => range(6, 'z')).toThrowWithMessage(Error, throwMessage)
})

test('curry', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#range)

### reduce

```typescript

reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult
```

> :boom: It passes index of the list as third argument to `reducer` function.

```javascript
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20initialValue%20%3D%2010%0Aconst%20reducer%20%3D%20(prev%2C%20current)%20%3D%3E%20prev%20*%20current%0A%0Aconst%20result%20%3D%20R.reduce(reducer%2C%20initialValue%2C%20list)%0A%2F%2F%20%3D%3E%2060">Try this <strong>R.reduce</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult): (initialValue: TResult, list: T[]) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult): (list: T[]) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { curry } from './curry.js'

class ReduceStopper{
  constructor(value){
    this.value = value
  }
}

export function reduceFn(
  reducer, acc, list
){
  if (list == null){
    return acc
  }
  if (!isArray(list)){
    throw new TypeError('reduce: list must be array or iterable')
  }
  let index = 0
  const len = list.length

  while (index < len){
    acc = reducer(
      acc, list[ index ], index, list
    )
    if (acc instanceof ReduceStopper){
      return acc.value
    }
    index++
  }

  return acc
}

export const reduce = curry(reduceFn)
export const reduceStopper = value => new ReduceStopper(value)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { concat } from './concat.js'
import { reduce, reduceStopper } from './reduce.js'

const reducer = (
  prev, current, i
) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [ 1, 2, 3 ]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(
    reducer, initialValue, list
  )).toBe(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(
      reducer, initialValue, {
        a : 1,
        b : 2,
      }
    )).toThrowWithMessage(TypeError, ERROR)
})

test('with undefined as iterable', () => {
  expect(() => reduce(
    reducer, 0, {}
  )).toThrowWithMessage(TypeError, ERROR)
})

test('with reduceStopper', () => {
  let maxIndex
  const reducer = (
    prev, current, i
  ) => {
    maxIndex = i

    return current === 2 ? reduceStopper(current) : prev
  }
  expect(reduce(
    reducer, initialValue, list
  )).toBe(2)
  expect(maxIndex).toBe(1)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(
    add, 0, null
  )).toBe(0)
  expect(reduce(
    concat, [], null
  )).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(
    add, 0, undefined
  )).toBe(0)
  expect(reduce(
    concat, [], undefined
  )).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduce)

### reduceBy

```typescript

reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
): (a: TResult, b: (elem: T) => string, c: T[]) => { [index: string]: TResult }
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
): (a: (elem: T) => string, b: T[]) => { [index: string]: TResult }
export function reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  keyFn: (elem: T) => string,
): (list: T[]) => { [index: string]: TResult }
```

```javascript
const result = R.reduceBy(
  (acc, elem) => acc + elem,
  0,
  x => x > 2 ? 'big' : 'small',
  [1, 2, 3, 4, 5]
)
// => { big: 12, small: 3 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.reduceBy(%0A%20%20(acc%2C%20elem)%20%3D%3E%20acc%20%2B%20elem%2C%0A%20%200%2C%0A%20%20x%20%3D%3E%20x%20%3E%202%20%3F%20'big'%20%3A%20'small'%2C%0A%20%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A)%0A%2F%2F%20%3D%3E%20%7B%20big%3A%2012%2C%20small%3A%203%20%7D">Try this <strong>R.reduceBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
): (a: TResult, b: (elem: T) => string, c: T[]) => { [index: string]: TResult }
reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
): (a: (elem: T) => string, b: T[]) => { [index: string]: TResult }
reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  keyFn: (elem: T) => string,
): (list: T[]) => { [index: string]: TResult };
reduceBy<T, TResult>(
  valueFn: (acc: TResult, elem: T) => TResult,
  acc: TResult,
  keyFn: (elem: T) => string,
  list: T[],
): { [index: string]: TResult };
```

</details>

<details>

<summary><strong>R.reduceBy</strong> source</summary>

```javascript
import { clone } from './clone.js'
import { curry } from './curry.js'
import { has } from './has.js'
import { reduce } from './reduce.js'

function reduceByFunction(
  valueFn, valueAcc, keyFn, acc, elt
){
  const key = keyFn(elt)
  const value = valueFn(has(key, acc) ? acc[ key ] : clone(valueAcc), elt)

  acc[ key ] = value

  return acc
}

export function reduceByFn(
  valueFn, valueAcc, keyFn, list
){
  return reduce(
    (acc, elt) => reduceByFunction(
      valueFn, valueAcc, keyFn, acc, elt
    ),
    {},
    list
  )
}

export const reduceBy = curry(reduceByFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reduceBy } from './reduceBy.js'
import { prop } from './prop.js'

const byType = prop('type')
const sumValues = function (acc, obj){
  return acc + obj.val
}

const grade = function (score){
  return score < 65 ?
    'F' :
    score < 70 ?
      'D' :
      score < 80 ?
        'C' :
        score < 90 ?
          'B' :
          'A'
}

const byGrade = function (student){
  return grade(student.score || 0)
}

test('splits the list into groups according to the grouping function', () => {
  const collectNames = function (acc, student){
    return acc.concat(student.name)
  }
  expect(reduceBy(
    collectNames, [], byGrade, getStudents()
  )).toEqual({
    A : [ 'Dianne', 'Gillian' ],
    B : [ 'Abby', 'Chris', 'Irene' ],
    C : [ 'Brad', 'Hannah' ],
    D : [ 'Fred', 'Jack' ],
    F : [ 'Eddy' ],
  })
})

test('splits the list into mutation-free groups', () => {
  const collectNames = function (acc, student){
    acc.push(student.name)

    return acc
  }
  expect(reduceBy(
    collectNames, [], byGrade, getStudents()
  )).toEqual({
    A : [ 'Dianne', 'Gillian' ],
    B : [ 'Abby', 'Chris', 'Irene' ],
    C : [ 'Brad', 'Hannah' ],
    D : [ 'Fred', 'Jack' ],
    F : [ 'Eddy' ],
  })
})

test('returns an empty object if given an empty array', () => {
  expect(reduceBy(
    sumValues, 0, byType, []
  )).toEqual({})
})

function getStudents(){
  return [
    {
      name  : 'Abby',
      score : 84,
    },
    {
      name  : 'Brad',
      score : 73,
    },
    {
      name  : 'Chris',
      score : 89,
    },
    {
      name  : 'Dianne',
      score : 99,
    },
    {
      name  : 'Eddy',
      score : 58,
    },
    {
      name  : 'Fred',
      score : 67,
    },
    {
      name  : 'Gillian',
      score : 91,
    },
    {
      name  : 'Hannah',
      score : 78,
    },
    {
      name  : 'Irene',
      score : 85,
    },
    {
      name  : 'Jack',
      score : 69,
    },
  ]
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduceBy)

### reject

```typescript

reject<T>(predicate: Predicate<T>, list: T[]): T[]
```

It has the opposite effect of `R.filter`.

```javascript
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list),
  R.reject(predicate, Record<string, unknown>)
]
// => [[1], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%2C%0A%20%20R.reject(predicate%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.reject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
reject<T>(predicate: Predicate<T>, list: T[]): T[];
reject<T>(predicate: Predicate<T>): (list: T[]) => T[];
reject<T>(predicate: Predicate<T>, obj: Dictionary<T>): Dictionary<T>;
reject<T, U>(predicate: Predicate<T>): (obj: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import { filter } from './filter.js'

export function reject(predicate, list){
  if (arguments.length === 1) return _list => reject(predicate, _list)

  return filter(x => !predicate(x), list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reject } from './reject.js'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd)([ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }
  expect(reject(isOdd, obj)).toEqual({
    b : 2,
    d : 4,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reject)

### rejectIndexed

```typescript

rejectIndexed<T>(predicate: IndexedPredicate<T>): (x: T[]) => T[]
```

Same as `R.reject`, but it passes index/property as second argument to the predicate, when looping over arrays/objects.

```javascript
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}

const result = [
  R.reject((x, index) => x > 1, list)
  R.reject((x, property) => x > 1, Record<string, unknown>)
]
// => [[1], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject((x%2C%20index)%20%3D%3E%20x%20%3E%201%2C%20list)%0A%20%20R.reject((x%2C%20property)%20%3D%3E%20x%20%3E%201%2C%20Record%3Cstring%2C%20unknown%3E)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.rejectIndexed</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
rejectIndexed<T>(predicate: IndexedPredicate<T>): (x: T[]) => T[];
rejectIndexed<T>(predicate: IndexedPredicate<T>, x: T[]): T[];
rejectIndexed<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
rejectIndexed<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.rejectIndexed</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { filterArray, filterObject } from './filter.js'

export function rejectIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => rejectIndexed(predicate, _iterable)

  if (!iterable) throw new Error(`"${ iterable }" is not iterable`)
  if (isArray(iterable))
    return filterArray(
      (x, i) => !predicate(x, i), iterable, true
    )

  return filterObject(
    (x, prop) => !predicate(x, prop), iterable, true
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { rejectIndexed } from './rejectIndexed.js'

test('with array', () => {
  expect(rejectIndexed((x, i) => {
    expect(x).toBeNumber()
    expect(i).toBeNumber()

    return x % 2 === 1
  })([ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }
  expect(rejectIndexed((x, prop) => {
    expect(x).toBeNumber()
    expect(prop).toBeString()

    return x % 2 === 1
  }, obj)).toEqual({
    b : 2,
    d : 4,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#rejectIndexed)

### remove

```typescript

remove(
  toRemove: string | RegExp | (string | RegExp)[],
  text: string
): string
```

It will remove all `toRemove` entries from `text` sequentially. 

`toRemove` argument can be either a list of strings/regular expressions or a single string/regular expression.

> :boom: This is the only case where Rambdax exports clashes with Ramda API, as Ramda has `remove` method. If `Rambda.remove` is introduced, then this method will be renamed.

```javascript
const result = R.remove(
  ['foo','bar'],
  'foo bar baz foo'
)
// => 'baz foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.remove(%0A%20%20%5B'foo'%2C'bar'%5D%2C%0A%20%20'foo%20bar%20baz%20foo'%0A)%0A%2F%2F%20%3D%3E%20'baz%20foo'">Try this <strong>R.remove</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
remove(
  toRemove: string | RegExp | (string | RegExp)[],
  text: string
): string;
remove(
  toRemove: string | RegExp | (string | RegExp)[]
): (text: string) => string;
```

</details>

<details>

<summary><strong>R.remove</strong> source</summary>

```javascript
import { replace } from './replace.js'
import { type } from './type.js'

export function remove(inputs, text){
  if (arguments.length === 1){
    return textHolder => remove(inputs, textHolder)
  }

  if (type(text) !== 'String'){
    throw new Error(`R.remove requires string not ${ type(text) }`)
  }

  if (type(inputs) !== 'Array'){
    return replace(
      inputs, '', text
    )
  }

  let textCopy = text

  inputs.forEach(singleInput => {
    textCopy = replace(
      singleInput, '', textCopy
    ).trim()
  })

  return textCopy
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { remove } from './remove.js'

test('happy', () => {
  const inputs = [ /foo/, /not\shere/, /also/, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings + curry', () => {
  const inputs = [ 'foo', 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings and regex', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('text is not string', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = null

  expect(() => remove(inputs, text)).toThrowErrorMatchingInlineSnapshot('"R.remove requires string not Null"')
})

test('with regexes', () => {
  const inputs = [ /foo/g, /bar/ ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = ' bar baz '

  expect(result).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#remove)

### removeIndex

```typescript

removeIndex<T>(index: number, list: T[]): T[]
```

It returns a copy of `list` input with removed `index`.

```javascript
const list = [1, 2, 3, 4]
const result = R.removeIndex(1, list)
// => [1, 3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20result%20%3D%20R.removeIndex(1%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%203%2C%204%5D">Try this <strong>R.removeIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
removeIndex<T>(index: number, list: T[]): T[];
removeIndex(index: number): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.removeIndex</strong> source</summary>

```javascript
export function removeIndex(index, list){
  if (arguments.length === 1) return _list => removeIndex(index, _list)
  if (index <= 0) return list.slice(1)
  if (index >= list.length - 1) return list.slice(0, list.length - 1)

  return [ ...list.slice(0, index), ...list.slice(index + 1) ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { removeIndex } from './removeIndex.js'

const list = [ 1, 2, 3, 4 ]

test('first or before first index', () => {
  expect(removeIndex(-2, list)).toEqual([ 2, 3, 4 ])
  expect(removeIndex(-2)(list)).toEqual([ 2, 3, 4 ])
})

test('last or after last index', () => {
  expect(removeIndex(4, list)).toEqual([ 1, 2, 3 ])
  expect(removeIndex(10, list)).toEqual([ 1, 2, 3 ])
})

test('middle index', () => {
  expect(removeIndex(1, list)).toEqual([ 1, 3, 4 ])
  expect(removeIndex(2, list)).toEqual([ 1, 2, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#removeIndex)

### renameProps

```typescript

renameProps(rules: object, input: object): object
```

If property `prop` of `rules` is also a property in `input`, then rename `input` property to `rules[prop]`.

<details>

<summary>All TypeScript definitions</summary>

```typescript
renameProps(rules: object, input: object): object;
renameProps(rules: object): (input: object) => object;
renameProps<Output>(rules: object, input: object): Output;
renameProps<Output>(rules: object): (input: object) => Output;
```

</details>

<details>

<summary><strong>R.renameProps</strong> source</summary>

```javascript
import { mergeRight } from './mergeRight.js'
import { omit } from './omit.js'

export function renameProps(conditions, inputObject){
  if (arguments.length === 1){
    return inputObjectHolder => renameProps(conditions, inputObjectHolder)
  }
  const renamed = {}
  Object.keys(conditions).forEach(condition => {
    if (Object.keys(inputObject).includes(condition)){
      renamed[ conditions[ condition ] ] = inputObject[ condition ]
    }
  })

  return mergeRight(renamed, omit(Object.keys(conditions), inputObject))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { renameProps } from './renameProps.js'

test('renameProps', () => {
  const rules = {
    f : 'foo',
    b : 'bar',
    q : 'x',
  }
  const input = {
    f : 1,
    b : 2,
    a : 3,
  }
  const result = renameProps(rules, input)
  const expectedResult = {
    foo : 1,
    bar : 2,
    a   : 3,
  }
  expect(result).toEqual(expectedResult)
})

test('curry', () => {
  const rules = {
    f : 'foo',
    b : 'bar',
  }
  const input = {
    f : 1,
    b : 2,
  }
  const result = renameProps(rules)(input)
  const expectedResult = {
    foo : 1,
    bar : 2,
  }
  expect(result).toEqual(expectedResult)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#renameProps)

### repeat

```typescript

repeat<T>(x: T): (timesToRepeat: number) => T[]
```

```javascript
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%203)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%2C%20'foo'%5D">Try this <strong>R.repeat</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
repeat<T>(x: T): (timesToRepeat: number) => T[];
repeat<T>(x: T, timesToRepeat: number): T[];
```

</details>

<details>

<summary><strong>R.repeat</strong> source</summary>

```javascript
export function repeat(x, timesToRepeat){
  if (arguments.length === 1){
    return _timesToRepeat => repeat(x, _timesToRepeat)
  }

  return Array(timesToRepeat).fill(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { repeat } from './repeat.js'

test('repeat', () => {
  expect(repeat('')(3)).toEqual([ '', '', '' ])
  expect(repeat('foo', 3)).toEqual([ 'foo', 'foo', 'foo' ])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([ {}, {}, {} ])

  expect(arr[ 0 ] === arr[ 1 ]).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#repeat)

### replace

```typescript

replace(strOrRegex: RegExp | string, replacer: RegExpReplacer, str: string): string
```

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
const strOrRegex = /o/g

const result = R.replace(strOrRegex, '|0|', 'foo')
// => 'f|0||0|'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20strOrRegex%20%3D%20%2Fo%2Fg%0A%0Aconst%20result%20%3D%20R.replace(strOrRegex%2C%20'%7C0%7C'%2C%20'foo')%0A%2F%2F%20%3D%3E%20'f%7C0%7C%7C0%7C'">Try this <strong>R.replace</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: RegExpReplacer, str: string): string;
replace(strOrRegex: RegExp | string, replacer: RegExpReplacer): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: RegExpReplacer) => (str: string) => string;
```

</details>

<details>

<summary><strong>R.replace</strong> source</summary>

```javascript
import { curry } from './curry.js'

function replaceFn(
  pattern, replacer, str
){
  return str.replace(pattern, replacer)
}

export const replace = curry(replaceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { replace } from './replace.js'

test('happy', () => {
  expect(replace(
    /\s/g, '|', 'foo bar baz'
  )).toBe('foo|bar|baz')
})

test('with function as replacer input', () => {
  expect(replace(
    /\s/g,
    (
      match, offset, str
    ) => {
      expect(match).toBe(' ')
      expect([ 3, 7 ].includes(offset)).toBeTrue()
      expect(str).toBe('foo bar baz')

      return '|'
    },
    'foo bar baz'
  )).toBe('foo|bar|baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replace)

### replaceAll

```typescript

replaceAll(patterns: (RegExp | string)[], replacer: string, input: string): string
```

Same as `R.replace` but it accepts array of string and regular expressions instead of a single value.

```javascript
const replacer = '|'
const patterns = [ /foo/g, 'bar' ]
const input = 'foo bar baz foo bar'

const result = R.replaceAll(patterns, replacer, input)
// => '| | baz | bar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20replacer%20%3D%20'%7C'%0Aconst%20patterns%20%3D%20%5B%20%2Ffoo%2Fg%2C%20'bar'%20%5D%0Aconst%20input%20%3D%20'foo%20bar%20baz%20foo%20bar'%0A%0Aconst%20result%20%3D%20R.replaceAll(patterns%2C%20replacer%2C%20input)%0A%2F%2F%20%3D%3E%20'%7C%20%7C%20baz%20%7C%20bar'">Try this <strong>R.replaceAll</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
replaceAll(patterns: (RegExp | string)[], replacer: string, input: string): string;
replaceAll(patterns: (RegExp | string)[], replacer: string): (input: string) => string;
replaceAll(patterns: (RegExp | string)[]): (replacer: string) => (input: string) => string;
```

</details>

<details>

<summary><strong>R.replaceAll</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { ok } from './ok.js'

function replaceAllFn(
  patterns, replacer, input
){
  ok(
    patterns, replacer, input
  )(
    Array, String, String
  )

  let text = input
  patterns.forEach(singlePattern => {
    text = text.replace(singlePattern, replacer)
  })

  return text
}

export const replaceAll = curry(replaceAllFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {replaceAll} from './replaceAll.js'

const replacer = '|'
const patterns = [/foo/g, 'bar']
const input = 'foo bar baz foo bar'

test('happy', () => {
  const result = replaceAll(patterns, replacer, input)
  const expected = '| | baz | bar'

  expect(result).toEqual(expected)
})

test('throws when wrong patterns', () => {
  expect(() => replaceAll({}, replacer, input))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":{},"schema":"array"}
    all inputs: [{},"|","foo bar baz foo bar"]
    all schemas: ["array","string","string"]"
  `)
})

test('throws when wrong input', () => {
  expect(() => replaceAll(patterns, replacer, []))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":[],"schema":"string"}
    all inputs: [[{},"bar"],"|",[]]
    all schemas: ["array","string","string"]"
  `)
})

test('throws when wrong replacer', () => {
  expect(() => replaceAll(patterns, null, input))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":null,"schema":"string"}
    all inputs: [[{},"bar"],null,"foo bar baz foo bar"]
    all schemas: ["array","string","string"]"
  `)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replaceAll)

### reset

```typescript

reset(): void
```

> :boom: `R.getter` method contains explanations, tests and source information of `R.reset`, `R.setter` and `R.getter` methods.

<details>

<summary>All TypeScript definitions</summary>

```typescript
reset(): void;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reset)

### reverse

```typescript

reverse<T>(input: T[]): T[]
```

It returns a reversed copy of list or string `input`.

```javascript
const result = [
  R.reverse('foo'),
  R.reverse([1, 2, 3])
]
// => ['oof', [3, 2, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.reverse('foo')%2C%0A%20%20R.reverse(%5B1%2C%202%2C%203%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'oof'%2C%20%5B3%2C%202%2C%201%5D">Try this <strong>R.reverse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
reverse<T>(input: T[]): T[];
reverse(input: string): string;
```

</details>

<details>

<summary><strong>R.reverse</strong> source</summary>

```javascript
export function reverse(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString.split('').reverse().join('')
  }

  const clone = listOrString.slice()

  return clone.reverse()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {reverse} from './reverse.js'

test('happy', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

test('with string', () => {
  expect(reverse('baz')).toBe('zab')
})

test("it doesn't mutate", () => {
  const arr = [1, 2, 3]

  expect(reverse(arr)).toEqual([3, 2, 1])

  expect(arr).toEqual([1, 2, 3])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reverse)

### set

```typescript

set<S, A>(lens: Lens<S, A>): {
  (a: A): (obj: S) => S
  (a: A, obj: S): S
}
```

It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.

```javascript
const input = {x: 1, y: 2}
const xLens = R.lensProp('x')

const result = [
  R.set(xLens, 4, input),
  R.set(xLens, 8, input) 
]
// => [{x: 4, y: 2}, {x: 8, y: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0Aconst%20xLens%20%3D%20R.lensProp('x')%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.set(xLens%2C%204%2C%20input)%2C%0A%20%20R.set(xLens%2C%208%2C%20input)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bx%3A%204%2C%20y%3A%202%7D%2C%20%7Bx%3A%208%2C%20y%3A%202%7D%5D">Try this <strong>R.set</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
set<S, A>(lens: Lens<S, A>): {
  (a: A): (obj: S) => S
  (a: A, obj: S): S
};
set<S, A>(lens: Lens<S, A>, a: A): (obj: S) => S;
set<S, A>(lens: Lens<S, A>, a: A, obj: S): S;
```

</details>

<details>

<summary><strong>R.set</strong> source</summary>

```javascript
import {always} from './always.js'
import {curry} from './curry.js'
import {over} from './over.js'

function setFn(lens, replacer, x) {
  return over(lens, always(replacer), x)
}

export const set = curry(setFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assoc} from './assoc.js'
import {lens} from './lens.js'
import {lensIndex} from './lensIndex.js'
import {lensPath} from './lensPath.js'
import {prop} from './prop.js'
import {set} from './set.js'

const testObject = {
  foo: 'bar',
  baz: {
    a: 'x',
    b: 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = set(assocLens, 'FOO', testObject)
  const expected = {
    ...testObject,
    foo: 'FOO',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = set(pathLens, 'z', testObject)
  const expected = {
    ...testObject,
    baz: {
      a: 'z',
      b: 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)

  const result = set(indexLens, 3, [1, 2])
  expect(result).toEqual([3, 2])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#set)

### setter

```typescript

setter(keyOrObject: string | object, value?: any): void
```

> :boom: `R.getter` method contains explanations, tests and source information of `R.reset`, `R.setter` and `R.getter` methods.

<details>

<summary>All TypeScript definitions</summary>

```typescript
setter(keyOrObject: string | object, value?: any): void;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#setter)

### shuffle

```typescript

shuffle<T>(list: T[]): T[]
```

It returns a randomized copy of array.

<details>

<summary>All TypeScript definitions</summary>

```typescript
shuffle<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.shuffle</strong> source</summary>

```javascript
export function shuffle(arrayRaw){
  const array = arrayRaw.concat()
  let counter = array.length
  while (counter > 0){
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = array[ counter ]
    array[ counter ] = array[ index ]
    array[ index ] = temp
  }

  return array
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { range } from './range.js'
import { shuffle } from './shuffle.js'
import { uniq } from './uniq.js'

test('happy', () => {
  const list = range(0, 7)
  const result = range(0, 300).map(() => shuffle(list))
  const allUniq = uniq(result)
  expect(allUniq.length > 150).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#shuffle)

### slice

```typescript

slice(from: number, to: number, input: string): string
```

```javascript
const list = [0, 1, 2, 3, 4, 5]
const str = 'FOO_BAR'
const from = 1
const to = 4

const result = [
  R.slice(from, to, str),
  R.slice(from, to, list)
]
// => ['OO_', [1, 2, 3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20str%20%3D%20'FOO_BAR'%0Aconst%20from%20%3D%201%0Aconst%20to%20%3D%204%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.slice(from%2C%20to%2C%20str)%2C%0A%20%20R.slice(from%2C%20to%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'OO_'%2C%20%5B1%2C%202%2C%203%5D%5D">Try this <strong>R.slice</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
slice(from: number, to: number, input: string): string;
slice<T>(from: number, to: number, input: T[]): T[];
slice(from: number, to: number): {
  (input: string): string;
  <T>(input: T[]): T[];
};
slice(from: number): {
  (to: number, input: string): string;
  <T>(to: number, input: T[]): T[];
};
```

</details>

<details>

<summary><strong>R.slice</strong> source</summary>

```javascript
import { curry } from './curry.js'

function sliceFn(
  from, to, list
){
  return list.slice(from, to)
}

export const slice = curry(sliceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { slice } from './slice.js'

test('slice', () => {
  expect(slice(
    1, 3, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c' ])
  expect(slice(
    1, Infinity, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c', 'd' ])
  expect(slice(
    0, -1, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'a', 'b', 'c' ])
  expect(slice(
    -3, -1, [ 'a', 'b', 'c', 'd' ]
  )).toEqual([ 'b', 'c' ])
  expect(slice(
    0, 3, 'ramda'
  )).toBe('ram')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#slice)

### sort

```typescript

sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` needs to return only `-1`, `0` or `1`.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = (x, y) => {
  return x.a > y.a ? 1 : -1
}

const result = R.sort(sortFn, list)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20(x%2C%20y)%20%3D%3E%20%7B%0A%20%20return%20x.a%20%3E%20y.a%20%3F%201%20%3A%20-1%0A%7D%0A%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sort</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sort</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function sort(sortFn, list){
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  return cloneList(list).sort(sortFn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sort } from './sort.js'

const fn = (a, b) => a > b ? 1 : -1

test('sort', () => {
  expect(sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
})

test('it doesn\'t mutate', () => {
  const list = [ 'foo', 'bar', 'baz' ]

  expect(sort(fn, list)).toEqual([ 'bar', 'baz', 'foo' ])

  expect(list[ 0 ]).toBe('foo')
  expect(list[ 1 ]).toBe('bar')
  expect(list[ 2 ]).toBe('baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sort)

### sortBy

```typescript

sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortBy(sortFn, list)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20x%20%3D%3E%20x.a%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[];
sortBy<T>(sortFn: (a: T) => Ord): (list: T[]) => T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortBy</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function sortBy(sortFn, list){
  if (arguments.length === 1) return _list => sortBy(sortFn, _list)

  const clone = cloneList(list)

  return clone.sort((a, b) => {
    const aSortResult = sortFn(a)
    const bSortResult = sortFn(b)

    if (aSortResult === bSortResult) return 0

    return aSortResult < bSortResult ? -1 : 1
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose.js'
import { prop } from './prop.js'
import { sortBy } from './sortBy.js'
import { toLower } from './toLower.js'

test('happy', () => {
  const input = [ { a : 2 }, { a : 1 }, { a : 1 }, { a : 3 } ]
  const expected = [ { a : 1 }, { a : 1 }, { a : 2 }, { a : 3 } ]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with compose', () => {
  const alice = {
    name : 'ALICE',
    age  : 101,
  }
  const bob = {
    name : 'Bob',
    age  : -10,
  }
  const clara = {
    name : 'clara',
    age  : 314.159,
  }
  const people = [ clara, bob, alice ]
  const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))

  expect(sortByNameCaseInsensitive(people)).toEqual([ alice, bob, clara ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### sortByPath

```typescript

sortByPath<T>(sortPath: Path, list: T[]): T[]
```

It returns copy of `list` sorted by `sortPath` value. 

As `sortPath` is passed to `R.path`, it can be either a string or an array of strings.

```javascript
const list = [
  {a: {b: 2}},
  {a: {b: 1}},
  {a: {b: 3}}
]
const result = R.sortByPath('a.b', list)
const expected = [
  {a: {b: 1}},
  {a: {b: 2}},
  {a: {b: 3}}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%20%7Bb%3A%202%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%201%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%203%7D%7D%0A%5D%0Aconst%20result%20%3D%20R.sortByPath('a.b'%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%20%7Bb%3A%201%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%202%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%203%7D%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortByPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortByPath<T>(sortPath: Path, list: T[]): T[];
sortByPath(sortPath: Path): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortByPath</strong> source</summary>

```javascript
import { path } from './path.js'
import { sortBy } from './sortBy.js'

export function sortByPath(sortPath, list){
  if (arguments.length === 1) return _list => sortByPath(sortPath, _list)

  return sortBy(path(sortPath), list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortByPath } from './sortByPath.js'

const list = [ { a : { b : 3 } }, { a : { b : 1 } }, { a : { b : 2 } } ]
const sorted = [ { a : { b : 1 } }, { a : { b : 2 } }, { a : { b : 3 } } ]

test('with string as path', () => {
  expect(sortByPath('a.b', list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPath([ 'a', 'b' ], list)).toEqual(sorted)
})

test('with string as path - curried', () => {
  expect(sortByPath('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path - curried', () => {
  expect(sortByPath([ 'a', 'b' ])(list)).toEqual(sorted)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortByPath)

### sortByProps

```typescript

sortByProps<T>(sortPaths: string[], list: T[]): T[]
```

It returns sorted copy of `list` of objects.

Sorting is done using a list of strings, each representing a path. Two members `a` and `b` from `list` can be sorted if both return a value for a given path. If the value is equal, then the next member of `sortPaths`(if there is such) will be used in order to find difference between `a` and `b`.

```javascript
const list = [
  {a: {b: 2}},
  {a: {b: 1}},
  {a: {b: 3}}
]
const result = R.sortByProps(['a.b'], list)
const expected = [
  {a: {b: 1}},
  {a: {b: 2}},
  {a: {b: 3}}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%20%7Bb%3A%202%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%201%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%203%7D%7D%0A%5D%0Aconst%20result%20%3D%20R.sortByProps(%5B'a.b'%5D%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%20%7Bb%3A%201%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%202%7D%7D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%203%7D%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortByProps</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortByProps<T>(sortPaths: string[], list: T[]): T[];
sortByProps(sortPaths: string[]): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortByProps</strong> source</summary>

```javascript
import { path } from './path.js'

function singleSort(
  a, b, sortPaths
){
  let toReturn = 0
  sortPaths.forEach(singlePath => {
    if (toReturn !== 0) return
    const aResult = path(singlePath, a)
    const bResult = path(singlePath, b)
    if ([ aResult, bResult ].includes(undefined)) return
    if (aResult === bResult) return

    toReturn = aResult > bResult ? 1 : -1
  })

  return toReturn
}

export function sortByProps(sortPaths, list){
  if (arguments.length === 1) return _list => sortByProps(sortPaths, _list)
  const clone = list.slice()

  clone.sort((a, b) => singleSort(
    a, b, sortPaths
  ))

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortByProps } from './sortByProps.js'

const list = [ { a : { b : 3 } }, { a : { b : 2 } }, { a : { b : 1 } } ]
const sorted = [ { a : { b : 1 } }, { a : { b : 2 } }, { a : { b : 3 } } ]

test('wrong paths are ignored', () => {
  expect(sortByProps([ 'foo.bar', 'a.c', 'a.b', 'a.d' ], list)).toEqual(sorted)
})

test('skip sort when path results are equal', () => {
  const input = [
    {
      a : {
        b : 0,
        c : 2,
      },
    },
    {
      a : {
        b : 0,
        c : 1,
      },
    },
  ]
  expect(sortByProps([ 'a.b', 'a.d' ], input)).toEqual(input)
})

test('when list is already sorted', () => {
  const input = [
    {
      a : {
        b : 0,
        c : 1,
      },
    },
    {
      a : {
        b : 0,
        c : 2,
      },
    },
  ]
  expect(sortByProps([ 'a.b', 'a.c' ])(input)).toEqual(input)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortByProps)

### sortObject

```typescript

sortObject<T>(predicate: SortObjectPredicate<T>, input: { [key: string]: T }): { [keyOutput: string]: T }
```

It returns a sorted version of `input` object.

```javascript
const predicate = (propA, propB, valueA, valueB) => valueA > valueB ? -1 : 1

const result = R.sortObject(predicate, {a:1, b: 4, c: 2})
// => {b: 4, c: 2, a: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20(propA%2C%20propB%2C%20valueA%2C%20valueB)%20%3D%3E%20valueA%20%3E%20valueB%20%3F%20-1%20%3A%201%0A%0Aconst%20result%20%3D%20R.sortObject(predicate%2C%20%7Ba%3A1%2C%20b%3A%204%2C%20c%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Bb%3A%204%2C%20c%3A%202%2C%20a%3A%201%7D">Try this <strong>R.sortObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortObject<T>(predicate: SortObjectPredicate<T>, input: { [key: string]: T }): { [keyOutput: string]: T };
sortObject<T>(predicate: SortObjectPredicate<T>): (input: { [key: string]: T }) => { [keyOutput: string]: T };
```

</details>

<details>

<summary><strong>R.sortObject</strong> source</summary>

```javascript
import { sort } from './sort.js'

export function sortObject(predicate, obj){
  if (arguments.length === 1){
    return _obj => sortObject(predicate, _obj)
  }
  const keys = Object.keys(obj)
  const sortedKeys = sort((a, b) => predicate(
    a, b, obj[ a ], obj[ b ]
  ), keys)

  const toReturn = {}
  sortedKeys.forEach(singleKey => {
    toReturn[ singleKey ] = obj[ singleKey ]
  })

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { runTests } from 'helpers-fn'

import { allTrue } from './allTrue.js'
import { equals } from './equals.js'
import { sortObject } from './sortObject.js'

const obj = {
  c : 1,
  a : 2,
  b : 3,
}

const predicateA = (
  propA, propB, valueA, valueB
) => propA > propB ? -1 : 1

const expectationA = [ 'c', 'b', 'a' ]

const predicateB = (
  propA, propB, valueA, valueB
) => propA < propB ? -1 : 1
const expectationB = [ 'a', 'b', 'c' ]
const predicateC = (
  propA, propB, valueA, valueB
) =>
  valueA > valueB ? -1 : 1
const expectationC = [ 'b', 'a', 'c' ]

const fn = ([ predicate, expectation ]) => {
  const result = sortObject(predicate, obj)
  const curriedResult = sortObject(predicate)(obj)
  const sortedKeys = Object.keys(result)
  const sortedKeysCurried = Object.keys(curriedResult)
  const isSameObject = equals(obj, result)
  const isSameObjectCurried = equals(obj, curriedResult)

  return allTrue(
    isSameObject,
    isSameObjectCurried,
    equals(sortedKeys, expectation),
    equals(sortedKeysCurried, expectation)
  )
}

const testData = {
  label : 'foo',
  data  : [
    { ok : [ predicateA, expectationA ] },
    { ok : [ predicateB, expectationB ] },
    { ok : [ predicateC, expectationC ] },
  ],
  fn,
}

runTests(testData)
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortObject)

### sortWith

```typescript

sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: T[]) => T[]
```

```javascript
const result = R.sortWith([
    (a, b) => a.a === b.a ? 0 : a.a > b.a ? 1 : -1,
    (a, b) => a.b === b.b ? 0 : a.b > b.b ? 1 : -1,
], [
  {a: 1, b: 2},
  {a: 2, b: 1},
  {a: 2, b: 2},
  {a: 1, b: 1},
])
const expected = [
  {a: 1, b: 1},
  {a: 1, b: 2},
  {a: 2, b: 1},
  {a: 2, b: 2},
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sortWith(%5B%0A%20%20%20%20(a%2C%20b)%20%3D%3E%20a.a%20%3D%3D%3D%20b.a%20%3F%200%20%3A%20a.a%20%3E%20b.a%20%3F%201%20%3A%20-1%2C%0A%20%20%20%20(a%2C%20b)%20%3D%3E%20a.b%20%3D%3D%3D%20b.b%20%3F%200%20%3A%20a.b%20%3E%20b.b%20%3F%201%20%3A%20-1%2C%0A%5D%2C%20%5B%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%201%7D%2C%0A%5D)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%202%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: T[]) => T[];
sortWith<T>(fns: Array<(a: T, b: T) => number>, list: T[]): T[];
```

</details>

<details>

<summary><strong>R.sortWith</strong> source</summary>

```javascript
function sortHelper(
  a, b, listOfSortingFns
){
  let result = 0
  let i = 0
  while (result === 0 && i < listOfSortingFns.length){
    result = listOfSortingFns[ i ](a, b)
    i += 1
  }

  return result
}

export function sortWith(listOfSortingFns, list){
  if (arguments.length === 1)
    return _list => sortWith(listOfSortingFns, _list)

  if (Array.isArray(list) === false)
    return []

  const clone = list.slice()
  clone.sort((a, b) => sortHelper(
    a, b, listOfSortingFns
  ))

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ascend, prop } from '../rambda.js'
import { sortWith } from './sortWith.js'

const albums = [
  {
    artist : 'Rush',
    genre  : 'Rock',
    score  : 3,
    title  : 'A Farewell to Kings',
  },
  {
    artist : 'Dave Brubeck Quartet',
    genre  : 'Jazz',
    score  : 3,
    title  : 'Timeout',
  },
  {
    artist : 'Rush',
    genre  : 'Rock',
    score  : 5,
    title  : 'Fly By Night',
  },
  {
    artist : 'Daniel Barenboim',
    genre  : 'Baroque',
    score  : 3,
    title  : 'Goldberg Variations',
  },
  {
    artist : 'Glenn Gould',
    genre  : 'Baroque',
    score  : 3,
    title  : 'Art of the Fugue',
  },
  {
    artist : 'Leonard Bernstein',
    genre  : 'Romantic',
    score  : 4,
    title  : 'New World Symphony',
  },
  {
    artist : 'Don Byron',
    genre  : 'Jazz',
    score  : 5,
    title  : 'Romance with the Unseen',
  },
  {
    artist : 'Iron Maiden',
    genre  : 'Metal',
    score  : 2,
    title  : 'Somewhere In Time',
  },
  {
    artist : 'Danny Holt',
    genre  : 'Modern',
    score  : 1,
    title  : 'In Times of Desparation',
  },
  {
    artist : 'Various',
    genre  : 'Broadway',
    score  : 3,
    title  : 'Evita',
  },
  {
    artist : 'Nick Drake',
    genre  : 'Folk',
    score  : 1,
    title  : 'Five Leaves Left',
  },
  {
    artist : 'John Eliot Gardiner',
    genre  : 'Classical',
    score  : 4,
    title  : 'The Magic Flute',
  },
]

test('sorts by a simple property of the objects', () => {
  const sortedAlbums = sortWith([ ascend(prop('title')) ], albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[ 0 ].title).toBe('A Farewell to Kings')
  expect(sortedAlbums[ 11 ].title).toBe('Timeout')
})

test('sorts by multiple properties of the objects', () => {
  const sortedAlbums = sortWith([ ascend(prop('score')), ascend(prop('title')) ],
    albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[ 0 ].title).toBe('Five Leaves Left')
  expect(sortedAlbums[ 1 ].title).toBe('In Times of Desparation')
  expect(sortedAlbums[ 11 ].title).toBe('Romance with the Unseen')
})

test('sorts by 3 properties of the objects', () => {
  const sortedAlbums = sortWith([ ascend(prop('genre')), ascend(prop('score')), ascend(prop('title')) ],
    albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[ 0 ].title).toBe('Art of the Fugue')
  expect(sortedAlbums[ 1 ].title).toBe('Goldberg Variations')
  expect(sortedAlbums[ 11 ].title).toBe('New World Symphony')
})

test('sorts by multiple properties using ascend and descend', () => {
  const sortedAlbums = sortWith([ ascend(prop('score')), ascend(prop('title')) ],
    albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[ 0 ].title).toBe('Five Leaves Left')
  expect(sortedAlbums[ 1 ].title).toBe('In Times of Desparation')
  expect(sortedAlbums[ 11 ].title).toBe('Romance with the Unseen')
})

test('sorts only arrays not array-like object', () => {
  const args = (function (){
    return arguments
  })(
    'c', 'a', 'b'
  )
  expect(sortWith([ ascend(prop('value')) ], args)).toEqual([])
})

test('sorts only arrays not primitives', () => {
  const result =sortWith([
    (a, b) => a.a === b.a ? 0 : a.a > b.a ? 1 : -1,
    (a, b) => a.b === b.b ? 0 : a.b > b.b ? 1 : -1,
  ], [
    {a: 1, b: 2},
    {a: 2, b: 1},
    {a: 2, b: 2},
    {a: 1, b: 1},
  ])
  const expected = [
    {a: 1, b: 1},
    {a: 1, b: 2},
    {a: 2, b: 1},
    {a: 2, b: 2},
  ]
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortWith)

### split

```typescript

split(separator: string | RegExp): (str: string) => string[]
```

Curried version of `String.prototype.split`

```javascript
const str = 'foo|bar|baz'
const separator = '|'
const result = R.split(separator, str)
// => [ 'foo', 'bar', 'baz' ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo%7Cbar%7Cbaz'%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20R.split(separator%2C%20str)%0A%2F%2F%20%3D%3E%20%5B%20'foo'%2C%20'bar'%2C%20'baz'%20%5D">Try this <strong>R.split</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];
split(separator: string | RegExp, str: string): string[];
```

</details>

<details>

<summary><strong>R.split</strong> source</summary>

```javascript
export function split(separator, str){
  if (arguments.length === 1) return _str => split(separator, _str)

  return str.split(separator)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { split } from './split.js'

const str = 'foo|bar|baz'
const splitChar = '|'
const expected = [ 'foo', 'bar', 'baz' ]

test('happy', () => {
  expect(split(splitChar, str)).toEqual(expected)
})

test('curried', () => {
  expect(split(splitChar)(str)).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#split)

### splitAt

```typescript

splitAt<T>(index: number, input: T[]): [T[], T[]]
```

It splits string or array at a given index.

```javascript
const list = [ 1, 2, 3 ]
const result = R.splitAt(2, list)
// => [[ 1, 2 ], [ 3 ]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0Aconst%20result%20%3D%20R.splitAt(2%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B%201%2C%202%20%5D%2C%20%5B%203%20%5D%5D">Try this <strong>R.splitAt</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
splitAt<T>(index: number, input: T[]): [T[], T[]];
splitAt(index: number, input: string): [string, string];
splitAt(index: number): {
    <T>(input: T[]): [T[], T[]];
    (input: string): [string, string];
};
```

</details>

<details>

<summary><strong>R.splitAt</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { drop } from './drop.js'
import { maybe } from './maybe.js'
import { take } from './take.js'

export function splitAt(index, input){
  if (arguments.length === 1){
    return _list => splitAt(index, _list)
  }
  if (!input) throw new TypeError(`Cannot read property 'slice' of ${ input }`)

  if (!isArray(input) && typeof input !== 'string') return [ [], [] ]

  const correctIndex = maybe(
    index < 0,
    input.length + index < 0 ? 0 : input.length + index,
    index
  )

  return [ take(correctIndex, input), drop(correctIndex, input) ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { splitAt as splitAtRamda } from 'ramda'

import { splitAt } from './splitAt.js'

const list = [ 1, 2, 3 ]
const str = 'foo bar'

test('with array', () => {
  const result = splitAt(2, list)
  expect(result).toEqual([ [ 1, 2 ], [ 3 ] ])
})

test('with array - index is negative number', () => {
  const result = splitAt(-6, list)
  expect(result).toEqual([ [], list ])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4, list)
  expect(result).toEqual([ [ 1, 2, 3 ], [] ])
})

test('with string', () => {
  const result = splitAt(4, str)
  expect(result).toEqual([ 'foo ', 'bar' ])
})

test('with string - index is negative number', () => {
  const result = splitAt(-2, str)
  expect(result).toEqual([ 'foo b', 'ar' ])
})

test('with string - index is out of scope', () => {
  const result = splitAt(10, str)
  expect(result).toEqual([ str, '' ])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4)(list)
  expect(result).toEqual([ [ 1, 2, 3 ], [] ])
})

const badInputs = [ 1, true, /foo/g, {} ]
const throwingBadInputs = [ null, undefined ]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitAt(1, badInput)).toThrowWithMessage(TypeError,
      `Cannot read property 'slice' of ${ badInput }`)
    expect(() => splitAtRamda(1, badInput)).toThrowWithMessage(TypeError,
      `Cannot read properties of ${ badInput } (reading 'slice')`)
  })

  badInputs.forEach(badInput => {
    const result = splitAt(1, badInput)
    const ramdaResult = splitAtRamda(1, badInput)
    expect(result).toEqual(ramdaResult)
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitAt)

### splitEvery

```typescript

splitEvery<T>(sliceLength: number, input: T[]): (T[])[]
```

It splits `input` into slices of `sliceLength`.

```javascript
const result = [
  R.splitEvery(2, [1, 2, 3]), 
  R.splitEvery(3, 'foobar') 
]

const expected = [
  [[1, 2], [3]],
  ['foo', 'bar']
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%2C%20%0A%20%20R.splitEvery(3%2C%20'foobar')%20%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%2C%0A%20%20%5B'foo'%2C%20'bar'%5D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.splitEvery</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
splitEvery<T>(sliceLength: number, input: T[]): (T[])[];
splitEvery(sliceLength: number, input: string): string[];
splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
```

</details>

<details>

<summary><strong>R.splitEvery</strong> source</summary>

```javascript
export function splitEvery(sliceLength, listOrString){
  if (arguments.length === 1){
    return _listOrString => splitEvery(sliceLength, _listOrString)
  }

  if (sliceLength < 1){
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = []
  let counter = 0

  while (counter < listOrString.length){
    willReturn.push(listOrString.slice(counter, counter += sliceLength))
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { splitEvery } from './splitEvery.js'

test('happy', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with bad input', () => {
  expect(() =>
    expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])).toThrowErrorMatchingInlineSnapshot('"First argument to splitEvery must be a positive integer"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

### splitWhen

```typescript

splitWhen<T, U>(predicate: Predicate<T>, list: U[]): (U[])[]
```

It splits `list` to two arrays according to a `predicate` function. 

The first array contains all members of `list` before `predicate` returns `true`.

```javascript
const list = [1, 2, 1, 2]
const result = R.splitWhen(R.equals(2), list)
// => [[1], [2, 1, 2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%201%2C%202%5D%0Aconst%20result%20%3D%20R.splitWhen(R.equals(2)%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C%201%2C%202%5D%5D">Try this <strong>R.splitWhen</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
splitWhen<T, U>(predicate: Predicate<T>, list: U[]): (U[])[];
splitWhen<T>(predicate: Predicate<T>): <U>(list: U[]) => (U[])[];
```

</details>

<details>

<summary><strong>R.splitWhen</strong> source</summary>

```javascript
export function splitWhen(predicate, input){
  if (arguments.length === 1){
    return _input => splitWhen(predicate, _input)
  }
  if (!input)
    throw new TypeError(`Cannot read property 'length' of ${ input }`)

  const preFound = []
  const postFound = []
  let found = false
  let counter = -1

  while (counter++ < input.length - 1){
    if (found){
      postFound.push(input[ counter ])
    } else if (predicate(input[ counter ])){
      postFound.push(input[ counter ])
      found = true
    } else {
      preFound.push(input[ counter ])
    }
  }

  return [ preFound, postFound ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { splitWhen as splitWhenRamda } from 'ramda'

import { equals } from './equals.js'
import { splitWhen } from './splitWhen.js'

const list = [ 1, 2, 1, 2 ]

test('happy', () => {
  const result = splitWhen(equals(2), list)
  expect(result).toEqual([ [ 1 ], [ 2, 1, 2 ] ])
})

test('when predicate returns false', () => {
  const result = splitWhen(equals(3))(list)
  expect(result).toEqual([ list, [] ])
})

const badInputs = [ 1, true, /foo/g, {} ]
const throwingBadInputs = [ null, undefined ]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitWhen(equals(2), badInput)).toThrowWithMessage(TypeError,
      `Cannot read property 'length' of ${ badInput }`)
    expect(() => splitWhenRamda(equals(2), badInput)).toThrowWithMessage(TypeError,
      `Cannot read properties of ${ badInput } (reading 'length')`)
  })

  badInputs.forEach(badInput => {
    const result = splitWhen(equals(2), badInput)
    const ramdaResult = splitWhenRamda(equals(2), badInput)
    expect(result).toEqual(ramdaResult)
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitWhen)

### startsWith

```typescript

startsWith<T extends string>(question: T, input: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.startsWith`.
When iterable is a list, then it uses R.equals to determine if the target list starts in the same way as the given target.

> :boom: It doesn't work with arrays unlike its corresponding **Ramda** method.

```javascript
const str = 'foo-bar'
const list = [{a:1}, {a:2}, {a:3}]

const result = [
  R.startsWith('foo', str),
  R.startsWith([{a:1}, {a:2}], list)
]
// => [true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A3%7D%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.startsWith('foo'%2C%20str)%2C%0A%20%20R.startsWith(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%5D">Try this <strong>R.startsWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
startsWith<T extends string>(question: T, input: string): boolean;
startsWith<T extends string>(question: T): (input: string) => boolean;
startsWith<T>(question: T[], input: T[]): boolean;
startsWith<T>(question: T[]): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.startsWith</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { equals } from './equals.js'

export function startsWith(question, iterable){
  if (arguments.length === 1)
    return _iterable => startsWith(question, _iterable)

  if (typeof iterable === 'string'){
    return iterable.startsWith(question)
  }
  if (!isArray(question)) return false

  let correct = true
  const filtered = question.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[ index ])
    if (!result) correct = false

    return result
  })

  return filtered.length === question.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { startsWith as startsWithRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { possibleIterables, possibleTargets } from './endsWith.spec.js'
import { startsWith } from './startsWith.js'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTrue()
  expect(startsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]
  expect(startsWith({ a : 1 }, list)).toBeFalse()
  expect(startsWith([ { a : 1 } ], list)).toBeTrue()
  expect(startsWith([ { a : 1 }, { a : 2 } ], list)).toBeTrue()
  expect(startsWith(list, list)).toBeTrue()
  expect(startsWith([ { a : 2 } ], list)).toBeFalse()
})

describe('brute force', () => {
  compareCombinations({
    fn          : startsWith,
    fnRamda     : startsWithRamda,
    firstInput  : possibleTargets,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 32,
        }
      `)
    },
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#startsWith)

### subtract

```typescript

subtract(x: number, y: number): number
```

Curried version of `x - y`

```javascript
const x = 3
const y = 1

const result = R.subtract(x, y) 
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%203%0Aconst%20y%20%3D%201%0A%0Aconst%20result%20%3D%20R.subtract(x%2C%20y)%20%0A%2F%2F%20%3D%3E%202">Try this <strong>R.subtract</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
subtract(x: number, y: number): number;
subtract(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.subtract</strong> source</summary>

```javascript
export function subtract(a, b){
  if (arguments.length === 1) return _b => subtract(a, _b)

  return a - b
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { subtract } from './subtract.js'

test('happy', () => {
  expect(subtract(2, 1)).toBe(1)
  expect(subtract(2)(1)).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#subtract)

### sum

```typescript

sum(list: number[]): number
```

```javascript
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sum(%5B1%2C%202%2C%203%2C%204%2C%205%5D)%20%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.sum</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sum(list: number[]): number;
```

</details>

<details>

<summary><strong>R.sum</strong> source</summary>

```javascript
export function sum(list){
  return list.reduce((prev, current) => prev + current, 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sum } from './sum.js'

test('happy', () => {
  expect(sum([ 1, 2, 3, 4, 5 ])).toBe(15)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sum)

### swap

```typescript

swap(indexA: number, indexB: number): <T>(list: T[]) => T[]
```

```javascript
const result = R.swap(1, 2, [1, 2, 3])
// => [1, 3, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.swap(1%2C%202%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%203%2C%202%5D">Try this <strong>R.swap</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
swap(indexA: number, indexB: number): <T>(list: T[]) => T[];
swap<T>(indexA: number, indexB: number, list: T[]): T[];
```

</details>

<details>

<summary><strong>R.swap</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js';
import { curry } from './curry.js';

function swapArrayOrString(indexA, indexB, iterable) {
	const actualIndexA = indexA < 0 ? iterable.length + indexA : indexA;
	const actualIndexB = indexB < 0 ? iterable.length + indexB : indexB;
	if (
		actualIndexA === actualIndexB ||
		Math.min(actualIndexA, actualIndexB) < 0 ||
		Math.max(actualIndexA, actualIndexB) >= iterable.length
	)
		return iterable;
	if (typeof iterable === 'string') {
		return (
			iterable.slice(0, actualIndexA) +
			iterable[actualIndexB] +
			iterable.slice(actualIndexA + 1, actualIndexB) +
			iterable[actualIndexA] +
			iterable.slice(actualIndexB + 1)
		);
	}
	const clone = iterable.slice();
	const temp = clone[actualIndexA];
	clone[actualIndexA] = clone[actualIndexB];
	clone[actualIndexB] = temp;
	return clone;
}
function swapFn(indexA, indexB, iterable) {
	if (isArray(iterable) || typeof iterable === 'string')
		return swapArrayOrString(indexA, indexB, iterable);

	const aVal = iterable[indexA];
	const bVal = iterable[indexB];
	if (aVal === undefined || bVal === undefined) return iterable;
	return {
		...iterable,
		[indexA]: iterable[indexB],
		[indexB]: iterable[indexA],
	};
}

export const swap = curry(swapFn);
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { swap } from './swap';
const list = ['a', 'b', 'c', 'd', 'e', 'f'];

it('swaps an element from one index to the other', () => {
	expect(swap(0, 1, list)).toEqual(['b', 'a', 'c', 'd', 'e', 'f']);
	expect(swap(2, 1, list)).toEqual(['a', 'c', 'b', 'd', 'e', 'f']);
	expect(swap(-1, 0, list)).toEqual(['f', 'b', 'c', 'd', 'e', 'a']);
	expect(swap(4, 1, list)).toEqual(['a', 'e', 'c', 'd', 'b', 'f']);
});

it('does nothing when indexes are outside the list boundaries', () => {
	expect(swap(-20, 2, list)).toEqual(list);
	expect(swap(20, 2, list)).toEqual(list);
	expect(swap(2, 20, list)).toEqual(list);
	expect(swap(2, -20, list)).toEqual(list);
	expect(swap(20, 20, list)).toEqual(list);
	expect(swap(-20, -20, list)).toEqual(list);
});

it('does nothing when indexes are equal', () => {
	expect(swap(0, 0, list)).toEqual(list);
});

it('should be the same when swapping index order', () => {
	expect(swap(0, 1, list)).toEqual(swap(1, 0, list));
});

it('swaps property values from one property to another', () => {
	expect(swap('a', 'b', { a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
	expect(swap('b', 'a', { a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
});

it('does nothing when property names are not defined', () => {
	expect(swap('a', 'b', { a: 1 })).toEqual({ a: 1 });
	expect(swap('a', 'b', { b: 2 })).toEqual({ b: 2 });
});

it('swaps characters in string from one index to another', () => {
	expect(swap(0, 2, 'foo')).toEqual('oof');
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#swap)

### switcher

```typescript

switcher<T>(valueToMatch: any): Switchem<T>
```

Edited fork of [Switchem](https://github.com/planttheidea/switchem) library.

The method return a value if the matched option is a value.

If the matched option is a function, then `R.switcher` returns a function which expects input. Tests of the method explain it better than this short description.

`R.equals` is used to determine equality.

```javascript
const valueToMatch = {foo: 1}

const result = R.switcher(valueToMatch)
  .is('baz', 'is baz')
  .is(x => typeof x === 'boolean', 'is boolean')
  .is({foo: 1}, 'Property foo is 1')
  .default('is bar')

// => 'Property foo is 1'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20valueToMatch%20%3D%20%7Bfoo%3A%201%7D%0A%0Aconst%20result%20%3D%20R.switcher(valueToMatch)%0A%20%20.is('baz'%2C%20'is%20baz')%0A%20%20.is(x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20'boolean'%2C%20'is%20boolean')%0A%20%20.is(%7Bfoo%3A%201%7D%2C%20'Property%20foo%20is%201')%0A%20%20.default('is%20bar')%0A%0A%2F%2F%20%3D%3E%20'Property%20foo%20is%201'">Try this <strong>R.switcher</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
switcher<T>(valueToMatch: any): Switchem<T>;
```

</details>

<details>

<summary><strong>R.switcher</strong> source</summary>

```javascript
import { equals } from './equals.js'

const NO_MATCH_FOUND = Symbol ? Symbol('NO_MATCH_FOUND') : undefined

const getMatchingKeyValuePair = (
  cases, testValue, defaultValue
) => {
  let iterationValue

  for (let index = 0; index < cases.length; index++){
    iterationValue = cases[ index ].test(testValue)

    if (iterationValue !== NO_MATCH_FOUND){
      return iterationValue
    }
  }

  return defaultValue
}

const isEqual = (testValue, matchValue) => {
  const willReturn =
    typeof testValue === 'function' ?
      testValue(matchValue) :
      equals(testValue, matchValue)

  return willReturn
}

const is = (testValue, matchResult = true) => ({
  key  : testValue,
  test : matchValue =>
    isEqual(testValue, matchValue) ? matchResult : NO_MATCH_FOUND,
})

class Switchem{
  constructor(
    defaultValue, cases, willMatch
  ){
    if (cases === undefined && willMatch === undefined){
      this.cases = []
      this.defaultValue = undefined
      this.willMatch = defaultValue
    } else {
      this.cases = cases
      this.defaultValue = defaultValue
      this.willMatch = willMatch
    }

    return this
  }

  default(defaultValue){
    const holder = new Switchem(
      defaultValue, this.cases, this.willMatch
    )

    return holder.match(this.willMatch)
  }

  is(testValue, matchResult){
    return new Switchem(
      this.defaultValue,
      [ ...this.cases, is(testValue, matchResult) ],
      this.willMatch
    )
  }

  match(matchValue){
    return getMatchingKeyValuePair(
      this.cases, matchValue, this.defaultValue
    )
  }
}

export function switcher(input){
  return new Switchem(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { switcher } from './switcher.js'
import { tap } from './tap.js'
import { trim } from './trim.js'

test('with undefined', () => {
  const result = switcher(undefined)
    .is(x => x === 0, '0')
    .is(x => x === undefined, 'UNDEFINED')
    .default('3')

  expect(result).toBe('UNDEFINED')
})

test('happy', () => {
  const a = true
  const b = false
  const result = switcher([ a, b ])
    .is([ false, false ], '0')
    .is([ false, true ], '1')
    .is([ true, true ], '2')
    .default('3')

  expect(result).toBe('3')
})

test('can compare objects', () => {
  const result = switcher({ a : 1 })
    .is({ a : 1 }, 'it is object')
    .is('baz', 'it is baz')
    .default('it is default')

  expect(result).toBe('it is object')
})

test('options are mixture of functions and values - input match function', () => {
  const fn = switcher('foo').is('bar', 1)
    .is('foo', add(1))
    .default(1000)

  expect(fn(2)).toBe(3)
})

test('options are mixture of functions and values - input match value', () => {
  const result = switcher('bar').is('bar', 1)
    .is('foo', add(1))
    .default(1000)

  expect(result).toBe(1)
})

test('return function if all options are functions', () => {
  const fn = switcher('foo').is('bar', tap)
    .is('foo', add(1))
    .default(trim)

  expect(fn(2)).toBe(3)
})

const switchFn = input =>
  switcher(input)
    .is(x => x.length && x.length === 7, 'has length of 7')
    .is('baz', 'it is baz')
    .default('it is default')

test('works with function as condition', () => {
  expect(switchFn([ 0, 1, 2, 3, 4, 5, 6 ])).toBe('has length of 7')
})

test('works with string as condition', () => {
  expect(switchFn('baz')).toBe('it is baz')
})

test('fallback to default input when no matches', () => {
  expect(switchFn(1)).toBe('it is default')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#switcher)

### symmetricDifference

```typescript

symmetricDifference<T>(x: T[], y: T[]): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

```javascript
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = R.symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20y%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20R.symmetricDifference(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%205%2C%206%20%5D">Try this <strong>R.symmetricDifference</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
symmetricDifference<T>(x: T[], y: T[]): T[];
symmetricDifference<T>(x: T[]): <T>(y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.symmetricDifference</strong> source</summary>

```javascript
import { concat } from './concat.js'
import { filter } from './filter.js'
import { includes } from './includes.js'

export function symmetricDifference(x, y){
  if (arguments.length === 1){
    return _y => symmetricDifference(x, _y)
  }

  return concat(filter(value => !includes(value, y), x),
    filter(value => !includes(value, x), y))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { symmetricDifference } from './symmetricDifference.js'

test('symmetricDifference', () => {
  const list1 = [ 1, 2, 3, 4 ]
  const list2 = [ 3, 4, 5, 6 ]
  expect(symmetricDifference(list1)(list2)).toEqual([ 1, 2, 5, 6 ])

  expect(symmetricDifference([], [])).toEqual([])
})

test('symmetricDifference with objects', () => {
  const list1 = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
  const list2 = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]
  expect(symmetricDifference(list1)(list2)).toEqual([
    { id : 1 },
    { id : 2 },
    { id : 5 },
    { id : 6 },
  ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#symmetricDifference)

### T

```typescript

T(): boolean
```

```javascript
R.T() 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.T()%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.T</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
T(): boolean;
```

</details>

<details>

<summary><strong>R.T</strong> source</summary>

```javascript
export function T(){
  return true
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#T)

### tail

```typescript

tail<T extends unknown[]>(input: T): T extends [any, ...infer U] ? U : [...T]
```

It returns all but the first element of `input`.

```javascript
const result = [
  R.tail([1, 2, 3]),  
  R.tail('foo') 
]
// => [[2, 3], 'oo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.tail(%5B1%2C%202%2C%203%5D)%2C%20%20%0A%20%20R.tail('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'oo'%5D">Try this <strong>R.tail</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
tail<T extends unknown[]>(input: T): T extends [any, ...infer U] ? U : [...T];
tail(input: string): string;
```

</details>

<details>

<summary><strong>R.tail</strong> source</summary>

```javascript
import { drop } from './drop.js'

export function tail(listOrString){
  return drop(1, listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tail } from './tail.js'

test('tail', () => {
  expect(tail([ 1, 2, 3 ])).toEqual([ 2, 3 ])
  expect(tail([ 1, 2 ])).toEqual([ 2 ])
  expect(tail([ 1 ])).toEqual([])
  expect(tail([])).toEqual([])

  expect(tail('abc')).toBe('bc')
  expect(tail('ab')).toBe('b')
  expect(tail('a')).toBe('')
  expect(tail('')).toBe('')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tail)

### take

```typescript

take<T>(howMany: number, input: T): T extends string ? string : T
```

It returns the first `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.take(howMany, [1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.take(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.take(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try this <strong>R.take</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
take<T>(howMany: number, input: T): T extends string ? string : T;
take<T>(howMany: number) : (input: T) => T extends string ? string : T;
```

</details>

<details>

<summary><strong>R.take</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice.js'

export function take(howMany, listOrString){
  if (arguments.length === 1)
    return _listOrString => take(howMany, _listOrString)
  if (howMany < 0) return listOrString.slice()
  if (typeof listOrString === 'string') return listOrString.slice(0, howMany)

  return baseSlice(
    listOrString, 0, howMany
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { take } from './take.js'

test('happy', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toEqual([ 'foo' ])

  expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(3)('rambda')).toBe('ram')
})

test('with negative index', () => {
  expect(take(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(take(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('with zero index', () => {
  expect(take(0, [ 1, 2, 3 ])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#take)

### takeLast

```typescript

takeLast<T>(howMany: number, input: T): T extends string ? string : T
```

It returns the last `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.takeLast(howMany, [1, 2, 3]),
  R.takeLast(howMany, 'foobar'),
]
// => [[2, 3], 'ar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.takeLast(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.takeLast(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'ar'%5D">Try this <strong>R.takeLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeLast<T>(howMany: number, input: T): T extends string ? string : T;
takeLast<T>(howMany: number) : (input: T) => T extends string ? string : T;
```

</details>

<details>

<summary><strong>R.takeLast</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice.js'

export function takeLast(howMany, listOrString){
  if (arguments.length === 1)
    return _listOrString => takeLast(howMany, _listOrString)

  const len = listOrString.length
  if (howMany < 0) return listOrString.slice()
  let numValue = howMany > len ? len : howMany

  if (typeof listOrString === 'string')
    return listOrString.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(
    listOrString, numValue, len
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLast } from './takeLast.js'

test('with arrays', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toBe('bda')

  expect(takeLast(7, 'rambda')).toBe('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(takeLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLast)

### takeLastWhile

```typescript

takeLastWhile(predicate: (x: string) => boolean, input: string): string
```

```javascript
const result = R.takeLastWhile(
  x => x > 2,
  [1, 2, 3, 4]
)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.takeLastWhile(%0A%20%20x%20%3D%3E%20x%20%3E%202%2C%0A%20%20%5B1%2C%202%2C%203%2C%204%5D%0A)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.takeLastWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeLastWhile(predicate: (x: string) => boolean, input: string): string;
takeLastWhile(predicate: (x: string) => boolean): (input: string) => string;
takeLastWhile<T>(predicate: (x: T) => boolean, input: T[]): T[];
takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeLastWhile</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function takeLastWhile(predicate, input){
  if (arguments.length === 1){
    return _input => takeLastWhile(predicate, _input)
  }
  if (input.length === 0) return input

  const toReturn = []
  let counter = input.length

  while (counter){
    const item = input[ --counter ]
    if (!predicate(item)){
      break
    }
    toReturn.push(item)
  }

  return isArray(input) ? toReturn.reverse() : toReturn.reverse().join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLastWhile } from './takeLastWhile.js'
const assert = require('assert')

const list = [ 1, 2, 3, 4 ]

test('happy', () => {
  const predicate = x => x > 2
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([ 3, 4 ])
})

test('predicate is always true', () => {
  const predicate = () => true
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('predicate is always false', () => {
  const predicate = () => false
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([])
})

test('with string', () => {
  const result = takeLastWhile(x => x !== 'F', 'FOOBAR')
  expect(result).toBe('OOBAR')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLastWhile)

### takeUntil

```typescript

takeUntil<T>(predicate: (x: T) => boolean, list: T[]): T[]
```

```javascript
const list = [1, 2, 3, 4, 5]
const predicate = x => x > 3
const result = R.takeUntil(predicate, list)

// => [1, 2, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%203%0Aconst%20result%20%3D%20R.takeUntil(predicate%2C%20list)%0A%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try this <strong>R.takeUntil</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeUntil<T>(predicate: (x: T) => boolean, list: T[]): T[];
takeUntil<T>(predicate: (x: T) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeUntil</strong> source</summary>

```javascript
export function takeUntil(predicate, list){
  const toReturn = []
  let stopFlag = false
  let counter = -1

  while (stopFlag === false && counter++ < list.length - 1){
    if (predicate(list[ counter ])){
      stopFlag = true
    } else {
      toReturn.push(list[ counter ])
    }
  }

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeUntil } from './takeUntil.js'

const list = [ 1, 2, 3, 4, 5, 6 ]

test('happy', () => {
  const result = takeUntil(x => x > 3, list)
  expect(result).toEqual([ 1, 2, 3 ])
})

test('predicate always returns true', () => {
  const result = takeUntil(x => x < 10, list)
  expect(result).toEqual([])
})

test('predicate always returns false', () => {
  const result = takeUntil(x => x > 10, list)
  expect(result).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeUntil)

### takeWhile

```typescript

takeWhile(fn: Predicate<string>, iterable: string): string
```

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate, list)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0A%0Aconst%20result%20%3D%20R.takeWhile(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.takeWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeWhile(fn: Predicate<string>, iterable: string): string;
takeWhile(fn: Predicate<string>): (iterable: string) => string;
takeWhile<T>(fn: Predicate<T>, iterable: T[]): T[];
takeWhile<T>(fn: Predicate<T>): (iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeWhile</strong> source</summary>

```javascript
import { isArray as isArrayModule } from './_internals/isArray.js'

export function takeWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => takeWhile(predicate, _iterable)
  }
  const isArray = isArrayModule(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }

  const toReturn = []
  let counter = 0

  while (counter < iterable.length){
    const item = iterable[ counter++ ]
    if (!predicate(item)){
      break
    }
    toReturn.push(item)
  }

  return isArray ? toReturn : toReturn.join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeWhile as takeWhileRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { takeWhile } from './takeWhile.js'

const list = [ 1, 2, 3, 4, 5 ]

test('happy', () => {
  const result = takeWhile(x => x < 3, list)
  expect(result).toEqual([ 1, 2 ])
})

test('always true', () => {
  const result = takeWhile(x => true)(list)
  expect(result).toEqual(list)
})

test('always false', () => {
  const result = takeWhile(x => 0, list)
  expect(result).toEqual([])
})

test('with string', () => {
  const result = takeWhile(x => x !== 'b', 'foobar')
  expect(result).toBe('foo')
})

const possiblePredicates = [
  null,
  undefined,
  () => 0,
  () => true,
  x => x !== 'b',
  /foo/g,
  {},
  [],
]

const possibleIterables = [
  null,
  undefined,
  [],
  {},
  1,
  '',
  'foobar',
  [ '' ],
  [ 1, 2, 3, 4, 5 ],
]

describe('brute force', () => {
  compareCombinations({
    firstInput : possiblePredicates,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 16,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 16,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 72,
        }
      `)
    },
    secondInput : possibleIterables,
    fn          : takeWhile,
    fnRamda     : takeWhileRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debugging in the middle of `R.compose`.

```javascript
const list = [1, 2, 3]

R.compose(
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)(list)
// => `2` and `3` will be logged
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(list)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try this <strong>R.tap</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
tap<T>(fn: (x: T) => void, input: T): T;
tap<T>(fn: (x: T) => void): (input: T) => T;
```

</details>

<details>

<summary><strong>R.tap</strong> source</summary>

```javascript
export function tap(fn, x){
  if (arguments.length === 1) return _x => tap(fn, _x)

  fn(x)

  return x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tap } from './tap.js'

test('tap', () => {
  let a = 1
  const sayX = x => a = x

  expect(tap(sayX, 100)).toBe(100)
  expect(tap(sayX)(100)).toBe(100)
  expect(a).toBe(100)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tap)

### tapAsync

```typescript

tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T
```

Asynchronous version of `R.tap`.

<details>

<summary>All TypeScript definitions</summary>

```typescript
tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T;
tapAsync<T>(fn: Func<any> | Promise<any>): (input: T) => T;
```

</details>

<details>

<summary><strong>R.tapAsync</strong> source</summary>

```javascript
async function tapAsyncFn(fn, input){
  await fn(input)

  return input
}

export function tapAsync(fn, input){
  if (arguments.length === 1){
    return async _input => tapAsyncFn(fn, _input)
  }

  return new Promise((resolve, reject) => {
    tapAsyncFn(fn, input).then(resolve)
      .catch(reject)
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { pipedAsync } from './pipedAsync.js'
import { tapAsync } from './tapAsync.js'

test('happy', async () => {
  const result = await tapAsync(delay, 1)
  expect(result).toBe(1)
})

test('complex', async () => {
  let marker = false
  const fn = () => marker = true
  const result = await pipedAsync(
    1,
    async x => {
      await delay(100)

      return x + 1
    },
    tapAsync(fn),
    x => x + 1
  )
  expect(marker).toBeTrue()
  expect(result).toBe(3)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tapAsync)

### test

```typescript

test(regExpression: RegExp): (str: string) => boolean
```

It determines whether `str` matches `regExpression`.

```javascript
R.test(/^f/, 'foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.test</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>

<details>

<summary><strong>R.test</strong> source</summary>

```javascript
export function test(pattern, str){
  if (arguments.length === 1) return _str => test(pattern, _str)

  if (typeof pattern === 'string'){
    throw new TypeError(`R.test requires a value of type RegExp as its first argument; received "${ pattern }"`)
  }

  return str.search(pattern) !== -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { test as testMethod } from './test.js'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTrue()

  expect(testMethod(/^y/)('xyz')).toBeFalse()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrowErrorMatchingInlineSnapshot('"R.test requires a value of type RegExp as its first argument; received "foo""')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#test)

### throttle

```typescript

throttle<T>(fn: () => T, ms: number): () => T
```

```javascript
let counter = 0
const inc = () => {
  counter++
}

const throttledInc = R.throttle(inc, 800)

const result = async () => {
  throttledInc()
  await R.delay(500)
  throttledInc()

  return counter
}
// `result` resolves to `1`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20inc%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20throttledInc%20%3D%20R.throttle(inc%2C%20800)%0A%0Aconst%20result%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20throttledInc()%0A%20%20await%20R.delay(500)%0A%20%20throttledInc()%0A%0A%20%20return%20counter%0A%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try this <strong>R.throttle</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
throttle<T>(fn: () => T, ms: number): () => T;
throttle<T, U>(fn: (input: T) => U, ms: number): (input: T) => U;
throttle<T, Q, U>(fn: (input1: T, input2: Q) => U, ms: number): (input1: T, input2: Q) => U;
throttle<T, Q, Z, U>(fn: (input1: T, input2: Q, input3: Z) => U, ms: number): (input1: T, input2: Q, input3: Z) => U;
```

</details>

<details>

<summary><strong>R.throttle</strong> source</summary>

```javascript
export function throttle(fn, ms){
  let wait = false
  let result

  return function (...input){
    if (!wait){
      result = fn.apply(null, input)
      wait = true
      setTimeout(() => {
        wait = false
      }, ms)
    }

    return result
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { inc } from './inc.js'
import { throttle } from './throttle.js'

test('with side effect', async () => {
  let counter = 0

  const incFn = a => {
    counter += a

    return counter
  }
  const incWrapped = throttle(incFn, 1000)
  incWrapped(1)
  incWrapped(1)
  await delay(1500)
  incWrapped(1)
  expect(counter).toBe(2)
})

test('return result', async () => {
  const incWrapped = throttle(inc, 1000)
  const results = []
  results.push(incWrapped(1))
  results.push(incWrapped(1))
  await delay(1500)
  results.push(incWrapped(1))
  await delay(500)
  results.push(incWrapped(1))
  expect(results).toEqual([ 2, 2, 2, 2 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#throttle)

### times

```typescript

times<T>(fn: (i: number) => T, howMany: number): T[]
```

It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).

```javascript
const fn = x => x * 2
const howMany = 5

R.times(fn, howMany)
// => [0, 2, 4, 6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20howMany%20%3D%205%0A%0Aconst%20result%20%3D%20R.times(fn%2C%20howMany)%0A%2F%2F%20%3D%3E%20%5B0%2C%202%2C%204%2C%206%2C%208%5D">Try this <strong>R.times</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
```

</details>

<details>

<summary><strong>R.times</strong> source</summary>

```javascript
import { isInteger } from './_internals/isInteger.js'
import { map } from './map.js'
import { range } from './range.js'

export function times(fn, howMany){
  if (arguments.length === 1) return _howMany => times(fn, _howMany)
  if (!isInteger(howMany) || howMany < 0){
    throw new RangeError('n must be an integer')
  }

  return map(fn, range(0, howMany))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import { identity } from './identity.js'
import { times } from './times.js'

test('happy', () => {
  const result = times(identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('with bad input', () => {
  assert.throws(() => {
    times(3)('cheers!')
  }, RangeError)
  assert.throws(() => {
    times(identity, -1)
  }, RangeError)
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#times)

### toDecimal

```typescript

toDecimal(num: number, charsAfterDecimalPoint?: number): number
```

```javascript
R.toDecimal(2.45464,2) // => 2.45
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toDecimal(2.45464%2C2)%20%2F%2F%20%3D%3E%202.45">Try this <strong>R.toDecimal</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
toDecimal(num: number, charsAfterDecimalPoint?: number): number;
```

</details>

<details>

<summary><strong>R.toDecimal</strong> source</summary>

```javascript
export function toDecimal(number, charsAfterDecimalPoint = 2){
  return Number(parseFloat(String(number)).toFixed(charsAfterDecimalPoint))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toDecimal } from './toDecimal.js'

test('happy', () => {
  expect(toDecimal(2.2789, 1)).toBe(2.3)
  expect(toDecimal(2.2789, 3)).toBe(2.279)
  expect(toDecimal(2, 3)).toBe(2)
  expect(toDecimal(2.2789)).toBe(2.28)
  expect(toDecimal(2.45464)).toBe(2.45)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toDecimal)

### toLower

```typescript

toLower<S extends string>(str: S): Lowercase<S>
```

```javascript
R.toLower('FOO')
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.toLower</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
toLower<S extends string>(str: S): Lowercase<S>;
toLower(str: string): string;
```

</details>

<details>

<summary><strong>R.toLower</strong> source</summary>

```javascript
export function toLower(str){
  return str.toLowerCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toLower } from './toLower.js'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toBe('foo|bar|baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toLower)

### toPairs

```typescript

toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>
```

It transforms an object to a list.

```javascript
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.toPairs</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>;
toPairs<S>(obj: Record<string | number, S>): Array<[string, S]>;
```

</details>

<details>

<summary><strong>R.toPairs</strong> source</summary>

```javascript
export function toPairs(obj){
  return Object.entries(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toPairs } from './toPairs.js'

const obj = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [
  [ 'a', 1 ],
  [ 'b', 2 ],
  [ 'c', [ 3, 4 ] ],
]

test('happy', () => {
  expect(toPairs(obj)).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toPairs)

### toString

```typescript

toString(x: unknown): string
```

```javascript
R.toString([1, 2]) 
// => '1,2'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%0A%2F%2F%20%3D%3E%20'1%2C2'">Try this <strong>R.toString</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
toString(x: unknown): string;
```

</details>

<details>

<summary><strong>R.toString</strong> source</summary>

```javascript
export function toString(x){
  return x.toString()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toString } from './toString.js'

test('happy', () => {
  expect(toString([ 1, 2, 3 ])).toBe('1,2,3')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toString)

### toUpper

```typescript

toUpper<S extends string>(str: S): Uppercase<S>
```

```javascript
R.toUpper('foo')
// => 'FOO'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%0A%2F%2F%20%3D%3E%20'FOO'">Try this <strong>R.toUpper</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
toUpper<S extends string>(str: S): Uppercase<S>;
toUpper(str: string): string;
```

</details>

<details>

<summary><strong>R.toUpper</strong> source</summary>

```javascript
export function toUpper(str){
  return str.toUpperCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { toUpper } from './toUpper.js'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toBe('FOO|BAR|BAZ')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toUpper)

### transpose

```typescript

transpose<T>(list: (T[])[]): (T[])[]
```

```javascript
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B10%2C%2011%5D%2C%20%5B20%5D%2C%20%5B%5D%2C%20%5B30%2C%2031%2C%2032%5D%5D%0Aconst%20expected%20%3D%20%5B%5B10%2C%2020%2C%2030%5D%2C%20%5B11%2C%2031%5D%2C%20%5B32%5D%5D%0A%0Aconst%20result%20%3D%20R.transpose(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.transpose</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
transpose<T>(list: (T[])[]): (T[])[];
```

</details>

<details>

<summary><strong>R.transpose</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function transpose(array){
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) =>
      isArray(acc[ i ]) ? acc[ i ].push(nestedEl) : acc.push([ nestedEl ]))

    return acc
  }, [])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { transpose } from './transpose.js'

test('happy', () => {
  const input = [
    [ 'a', 1 ],
    [ 'b', 2 ],
    [ 'c', 3 ],
  ]

  expect(transpose(input)).toEqual([
    [ 'a', 'b', 'c' ],
    [ 1, 2, 3 ],
  ])
})

test('when rows are shorter', () => {
  const actual = transpose([ [ 10, 11 ], [ 20 ], [], [ 30, 31, 32 ] ])
  const expected = [ [ 10, 20, 30 ], [ 11, 31 ], [ 32 ] ]
  expect(actual).toEqual(expected)
})

test('with empty array', () => {
  expect(transpose([])).toEqual([])
})

test('array with falsy values', () => {
  const actual = transpose([
    [ true, false, undefined, null ],
    [ null, undefined, false, true ],
  ])
  const expected = [
    [ true, null ],
    [ false, undefined ],
    [ undefined, false ],
    [ null, true ],
  ]
  expect(actual).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#transpose)

### trim

```typescript

trim(str: string): string
```

```javascript
R.trim('  foo  ') 
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.trim</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
trim(str: string): string;
```

</details>

<details>

<summary><strong>R.trim</strong> source</summary>

```javascript
export function trim(str){
  return str.trim()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { trim } from './trim.js'

test('trim', () => {
  expect(trim(' foo ')).toBe('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#trim)

### tryCatch

```typescript

tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U
```

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).

> :boom: Please check the tests of `R.tryCatch` to fully understand how this method works.

```javascript
const fn = x => x.foo

const result = [
  R.tryCatch(fn, false)(null),
  R.tryCatch(fn, false)({foo: 'bar'})
]
// => [false, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x.foo%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.tryCatch(fn%2C%20false)(null)%2C%0A%20%20R.tryCatch(fn%2C%20false)(%7Bfoo%3A%20'bar'%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20'bar'%5D">Try this <strong>R.tryCatch</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U;
tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: (input: T) => U
): (input: T) => U;
tryCatch<T>(
  fn: (input: any) => Promise<any>,
  fallback: T
): (input: any) => Promise<T>;
tryCatch<T>(
  fn: (input: any) => Promise<any>,
  fallback: (input: any) => Promise<any>,
): (input: any) => Promise<T>;
```

</details>

<details>

<summary><strong>R.tryCatch</strong> source</summary>

```javascript
import { type } from './type.js'

const isFunction = x => [ 'Promise', 'Function' ].includes(type(x))

export function tryCatch(fn, fallback){
  if (!isFunction(fn)){
    throw new Error(`R.tryCatch | fn '${ fn }'`)
  }
  const passFallback = isFunction(fallback)

  return (...inputs) => {
    try {
      return fn(...inputs)
    } catch (e){
      return passFallback ? fallback(e, ...inputs) : fallback
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tryCatch as tryCatchRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { prop } from './prop.js'
import { tryCatch } from './tryCatch.js'

test('happy', () => {
  const fn = () => {
    throw new Error('foo')
  }
  const result = tryCatch(fn, () => true)()
  expect(result).toBeTrue()
})

test('when fallback is used', () => {
  const fn = x => x.x

  expect(tryCatch(fn, false)(null)).toBeFalse()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a : 1 }))
  const bad = () => JSON.parse('a{a')

  expect(tryCatch(good, 1)()).toEqual({ a : 1 })
  expect(tryCatch(bad, 1)()).toBe(1)
})

test('when fallback is function', () => {
  const fn = x => x.x

  expect(tryCatch(fn, () => 1)(null)).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBeUndefined()
  expect(tryCatch(fn, false)({ x : 1 })).toBe(1)
})

test('fallback receives error object and all initial inputs', () => {
  function thrower(
    a, b, c
  ){
    void c
    throw new Error('throwerError')
  }

  function catchFn(
    e, a, b, c
  ){
    return [ e.message, a, b, c ].join('|')
  }

  const willThrow = tryCatch(thrower, catchFn)
  const result = willThrow(
    'A', 'B', 'C'
  )
  expect(result).toBe('throwerError|A|B|C')
})

test('fallback receives error object', () => {
  function throwFn(){
    throw new Error(10)
  }

  function eCatcher(
    e, a, b
  ){
    return e.message
  }

  const willThrow = tryCatch(throwFn, eCatcher)
  expect(willThrow([])).toBe('10')
  expect(willThrow([ {}, {}, {} ])).toBe('10')
})

const possibleFns = [
  null,
  () => 1,
  () => 0,
  () => JSON.parse('{a:1'),
  () => {
    const x = {}

    return x.x
  },
  x => x.foo,
  () => {
    throw new Error('foo')
  },
]

const possibleCatchers = [
  null,
  e => e.message.length,
  (e, ...inputs) => `${ e.message.length } ${ inputs.length }`,
  () => {
    throw new Error('bar')
  },
]

const possibleInputs = [ null, {}, { foo : 1 } ]

describe('brute force', () => {
  compareCombinations({
    returnsFunctionFlag : true,
    firstInput          : possibleFns,
    callback            : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 12,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 7,
          "TOTAL_TESTS": 84,
        }
      `)
    },
    secondInput : possibleCatchers,
    thirdInput  : possibleInputs,
    fn          : tryCatch,
    fnRamda     : tryCatchRamda,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

### tryCatchAsync

```typescript

tryCatchAsync<T>(
  fn: (input: any) => Promise<T>,
  fallback: T
): (input: any) => Promise<T>
```

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result.

```javascript
const x = {foo: 1}
const fnFoo = async () => x.foo
const fnBar = async () => x.bar

const result = await Promise.all([
  R.tryCatchAsync (fnFoo, false)(),
  R.tryCatchAsync(fnBar, false)()
])
// => [1, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%7Bfoo%3A%201%7D%0Aconst%20fnFoo%20%3D%20async%20()%20%3D%3E%20x.foo%0Aconst%20fnBar%20%3D%20async%20()%20%3D%3E%20x.bar%0A%0Aconst%20result%20%3D%20await%20Promise.all(%5B%0A%20%20R.tryCatchAsync%20(fnFoo%2C%20false)()%2C%0A%20%20R.tryCatchAsync(fnBar%2C%20false)()%0A%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%20false%5D">Try this <strong>R.tryCatchAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
tryCatchAsync<T>(
  fn: (input: any) => Promise<T>,
  fallback: T
): (input: any) => Promise<T>;
tryCatchAsync<T>(
  fn: (input: any) => Promise<T>,
  fallback: (input: any) => Promise<T>,
): (input: any) => Promise<T>;

export const DELAY: 'RAMBDAX_DELAY';
```

</details>

<details>

<summary><strong>R.tryCatchAsync</strong> source</summary>

```javascript
import { type } from './type.js'

export function tryCatchAsync(fn, fallback){
  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(err => {
          if (type(fallback) !== 'Function'){
            return resolve(fallback)
          }
          if (type(fallback) !== 'Promise'){
            return resolve(fallback(err, ...inputs))
          }

          fallback(err, ...inputs)
            .then(resolve)
            .catch(resolve)
        })
    })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { tryCatchAsync } from './tryCatchAsync.js'

test('when fallback is function', async () => {
  const fn = async x => x.x

  const result = await tryCatchAsync(fn, () => 1)(null)
  expect(result).toBe(1)
})

test('when fallback throws', async () => {
  const fn = async x => x.x
  const fallback = async (err, xx) => xx.y

  const result = await tryCatchAsync(fn, fallback)(null)
  expect(result.message).toMatchInlineSnapshot('undefined')
})

test('fallback is not used', async () => {
  const fn = async x => x.x

  expect(tryCatchAsync(fn, false)({ x : 1 })).resolves.toBe(1)
})

test('fallback receives error object and all initial inputs', async () => {
  async function thrower(
    a, b, c
  ){
    void c
    throw new Error('throwerError')
  }

  function catchFn(
    e, a, b, c
  ){
    return [ e.message, a, b, c ].join('|')
  }

  const willThrow = tryCatchAsync(thrower, catchFn)
  const result = await willThrow(
    'A', 'B', 'C'
  )
  expect(result).toBe('throwerError|A|B|C')
})

test('when async + value fallback', async () => {
  const fn = async () => {
    await delay(100)

    return JSON.parse('{a:')
  }

  const result = await tryCatchAsync(fn, 'fallback')(100)
  expect(result).toBe('fallback')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatchAsync)

### type

```typescript

type(x: any): RambdaTypes
```

It accepts any input and it returns its type.

> :boom: `NaN`, `Promise` and `Async` are types specific for **Rambda**.

```javascript
const result = R.type(() => {}) // => 'Function'
R.type(async () => {}) // => 'Async'
R.type([]) // => 'Array'
R.type({}) // => 'Object'
R.type('foo') // => 'String'
R.type(1) // => 'Number'
R.type(true) // => 'Boolean'
R.type(null) // => 'Null'
R.type(/[A-z]/) // => 'RegExp'
R.type('foo'*1) // => 'NaN'

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0AR.type('foo'*1)%20%2F%2F%20%3D%3E%20'NaN'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try this <strong>R.type</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
type(x: any): RambdaTypes;
```

</details>

<details>

<summary><strong>R.type</strong> source</summary>

```javascript
export function type(input){
  if (input === null){
    return 'Null'
  } else if (input === undefined){
    return 'Undefined'
  } else if (Number.isNaN(input)){
    return 'NaN'
  }
  const typeResult = Object.prototype.toString.call(input).slice(8, -1)

  return typeResult === 'AsyncFunction' ? 'Promise' : typeResult
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { type as typeRamda } from 'ramda'

import { type } from './type.js'

test('with buffer', () => {
  expect(type(new Buffer.from('foo'))).toBe('Uint8Array')
})

test('with array buffer', () => {
  expect(type(new ArrayBuffer(8))).toBe('ArrayBuffer')
})

test('with big int', () => {
  expect(type(BigInt(9007199254740991))).toBe('BigInt')
})

test('with generators', () => {
  function* generator(){
    yield 1
    yield 2
    yield 3
  }

  const gen = generator()
  expect(type(generator)).toBe('GeneratorFunction')
  expect(type(gen)).toBe('Generator')
})

test('with Date', () => {
  const date = new Date('December 17, 1995 03:24:00')
  expect(type(date)).toBe('Date')
})

test('with infinity', () => {
  expect(type(Infinity)).toBe('Number')
})

test('with weak map', () => {
  expect(type(new WeakMap())).toBe('WeakMap')
})

test('with map', () => {
  expect(type(new Map())).toBe('Map')
})

test('with symbol', () => {
  expect(type(Symbol())).toBe('Symbol')
})

test('with simple promise', () => {
  expect(type(Promise.resolve(1))).toBe('Promise')
})

test('with new Boolean', () => {
  expect(type(new Boolean(true))).toBe('Boolean')
})

test('with new String', () => {
  expect(type(new String('I am a String object'))).toBe('String')
})

test('with new Number', () => {
  expect(type(new Number(1))).toBe('Number')
})

test('with error', () => {
  expect(type(Error('foo'))).toBe('Error')
  expect(typeRamda(Error('foo'))).toBe('Error')
})

test('with error - wrong @types/ramda test', () => {
  // @types/ramda expect the result to be 'Error' but it is not
  class ExtendedError extends Error{}
  expect(type(ExtendedError)).toBe('Function')
  expect(typeRamda(ExtendedError)).toBe('Function')
})

test('with new promise', () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toBe('Promise')
})

test('async function', () => {
  expect(type(async () => {})).toBe('Promise')
})

test('async arrow', () => {
  const asyncArrow = async () => {}
  expect(type(asyncArrow)).toBe('Promise')
})

test('function', () => {
  const fn1 = () => {}
  const fn2 = function (){}

  function fn3(){}

  ;[ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toBe('Function')
  })
})

test('object', () => {
  expect(type({})).toBe('Object')
})

test('number', () => {
  expect(type(1)).toBe('Number')
})

test('boolean', () => {
  expect(type(false)).toBe('Boolean')
})

test('string', () => {
  expect(type('foo')).toBe('String')
})

test('null', () => {
  expect(type(null)).toBe('Null')
})

test('array', () => {
  expect(type([])).toBe('Array')
  expect(type([ 1, 2, 3 ])).toBe('Array')
})

test('regex', () => {
  expect(type(/\s/g)).toBe('RegExp')
})

test('undefined', () => {
  expect(type(undefined)).toBe('Undefined')
})

test('not a number', () => {
  expect(type(Number('s'))).toBe('NaN')
})

test('set', () => {
  const exampleSet = new Set([ 1, 2, 3 ])
  expect(type(exampleSet)).toBe('Set')
  expect(typeRamda(exampleSet)).toBe('Set')
})

test('function inside object 1', () => {
  const obj = {
    f(){
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(typeRamda(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [ name ](){
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(typeRamda(obj.f)).toBe('Function')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#type)

### unapply

```typescript

unapply<T = any>(fn: (args: any[]) => T): (...args: any[]) => T
```

It calls a function `fn` with the list of values of the returned function. 

`R.unapply` is the opposite of `R.apply` method.

```javascript
R.unapply(JSON.stringify)(1, 2, 3)
//=> '[1,2,3]'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.unapply(JSON.stringify)(1%2C%202%2C%203)%0A%2F%2F%3D%3E%20'%5B1%2C2%2C3%5D'">Try this <strong>R.unapply</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
unapply<T = any>(fn: (args: any[]) => T): (...args: any[]) => T;
```

</details>

<details>

<summary><strong>R.unapply</strong> source</summary>

```javascript
export function unapply(fn){
  return function (...args){
    return fn.call(this, args)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { apply } from './apply.js'
import { converge } from './converge.js'
import { identity } from './identity.js'
import { prop } from './prop.js'
import { sum } from './sum.js'
import { unapply } from './unapply.js'

test('happy', () => {
  const fn = unapply(identity)
  expect(fn(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
  expect(fn()).toEqual([])
})

test('returns a function which is always passed one argument', () => {
  const fn = unapply(function (){
    return arguments.length
  })
  expect(fn('x')).toBe(1)
  expect(fn('x', 'y')).toBe(1)
  expect(fn(
    'x', 'y', 'z'
  )).toBe(1)
})

test('forwards arguments to decorated function as an array', () => {
  const fn = unapply(xs => '[' + xs + ']')
  expect(fn(2)).toBe('[2]')
  expect(fn(2, 4)).toBe('[2,4]')
  expect(fn(
    2, 4, 6
  )).toBe('[2,4,6]')
})

test('returns a function with length 0', () => {
  const fn = unapply(identity)
  expect(fn).toHaveLength(0)
})

test('is the inverse of R.apply', () => {
  let a, b, c, d, e, f, g, n
  const rand = function (){
    return Math.floor(200 * Math.random()) - 100
  }

  f = Math.max
  g = unapply(apply(f))
  n = 1
  while (n <= 100){
    a = rand()
    b = rand()
    c = rand()
    d = rand()
    e = rand()
    expect(f(
      a, b, c, d, e
    )).toEqual(g(
      a, b, c, d, e
    ))
    n += 1
  }

  f = function (xs){
    return '[' + xs + ']'
  }
  g = apply(unapply(f))
  n = 1
  while (n <= 100){
    a = rand()
    b = rand()
    c = rand()
    d = rand()
    e = rand()
    expect(f([ a, b, c, d, e ])).toEqual(g([ a, b, c, d, e ]))
    n += 1
  }
})

test('it works with converge', () => {
  const fn = unapply(sum)
  const convergeFn = converge(fn, [ prop('a'), prop('b'), prop('c') ])
  const obj = {
    a : 1337,
    b : 42,
    c : 1,
  }
  const expected = 1337 + 42 + 1
  expect(convergeFn(obj)).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unapply)

### union

```typescript

union<T>(x: T[], y: T[]): T[]
```

It takes two lists and return a new list containing a merger of both list with removed duplicates. 

`R.equals` is used to compare for duplication.

```javascript
const result = R.union([1,2,3], [3,4,5]);
// => [1, 2, 3, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.union(%5B1%2C2%2C3%5D%2C%20%5B3%2C4%2C5%5D)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%2C%205%5D">Try this <strong>R.union</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
union<T>(x: T[], y: T[]): T[];
union<T>(x: T[]): (y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.union</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { includes } from './includes.js'

export function union(x, y){
  if (arguments.length === 1) return _y => union(x, _y)

  const toReturn = cloneList(x)

  y.forEach(yInstance => {
    if (!includes(yInstance, x)) toReturn.push(yInstance)
  })

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { union } from './union.js'

test('happy', () => {
  expect(union([ 1, 2 ], [ 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('with list of objects', () => {
  const list1 = [ { a : 1 }, { a : 2 } ]
  const list2 = [ { a : 2 }, { a : 3 } ]
  const result = union(list1)(list2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#union)

### uniq

```typescript

uniq<T>(list: T[]): T[]
```

It returns a new array containing only one copy of each element of `list`.

`R.equals` is used to determine equality.

```javascript
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%201%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A1%7D%5D%0A%0Aconst%20result%20%3D%20R.uniq(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try this <strong>R.uniq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
uniq<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.uniq</strong> source</summary>

```javascript
import { _Set } from './_internals/set.js'

export function uniq(list){
  const set = new _Set()
  const willReturn = []
  list.forEach(item => {
    if (set.checkUniqueness(item)){
      willReturn.push(item)
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniq } from './uniq.js'

test('happy', () => {
  const list = [ 1, 2, 3, 3, 3, 1, 2, 0 ]
  expect(uniq(list)).toEqual([ 1, 2, 3, 0 ])
})

test('with object', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 1 }, { a : 2 } ]
  expect(uniq(list)).toEqual([ { a : 1 }, { a : 2 } ])
})

test('with nested array', () => {
  expect(uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
})

test('with booleans', () => {
  expect(uniq([ [ false ], [ false ], [ true ] ])).toEqual([ [ false ], [ true ] ])
})

test('with falsy values', () => {
  expect(uniq([ undefined, null ])).toEqual([ undefined, null ])
})

test('can distinct between string and number', () => {
  expect(uniq([ 1, '1' ])).toEqual([ 1, '1' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniq)

### uniqBy

```typescript

uniqBy<T, U>(fn: (a: T) => U, list: T[]): T[]
```

It applies uniqueness to input list based on function that defines what to be used for comparison between elements.

`R.equals` is used to determine equality.

```javascript
const list = [{a:1}, {a:2}, {a:1}]
const result = R.uniqBy(x => x, list)

// => [{a:1}, {a:2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A1%7D%5D%0Aconst%20result%20%3D%20R.uniqBy(x%20%3D%3E%20x%2C%20list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D">Try this <strong>R.uniqBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
uniqBy<T, U>(fn: (a: T) => U, list: T[]): T[];
uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqBy</strong> source</summary>

```javascript
import { _Set } from '../src/_internals/set.js'

export function uniqBy(fn, list){
  if (arguments.length === 1){
    return _list => uniqBy(fn, _list)
  }
  const set = new _Set()

  return list.filter(item => set.checkUniqueness(fn(item)))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniqBy as uniqByRamda } from 'ramda'

import { uniqBy } from './uniqBy.js'

test('happy', () => {
  expect(uniqBy(Math.abs, [ -2, -1, 0, 1, 2 ])).toEqual([ -2, -1, 0 ])
})

test('keeps elements from the left', () => {
  expect(uniqBy(Math.abs, [ -1, 2, 4, 3, 1, 3 ])).toEqual([ -1, 2, 4, 3 ])
})

test('returns an empty array for an empty array', () => {
  expect(uniqBy(Math.abs, [])).toEqual([])
})

test('uses R.uniq', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 1 } ]
  const expected = [ { a : 1 }, { a : 2 } ]
  expect(uniqBy(x => x, list)).toEqual(expected)
  expect(uniqByRamda(x => x, list)).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqBy)

### uniqWith

```typescript

uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: T[]): T[]
```

It returns a new array containing only one copy of each element in `list` according to `predicate` function.

This predicate should return true, if two elements are equal.

```javascript
const list = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
  {id: 3, title:'foo'},
  {id: 4, title:'bar'},
]

const expected = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
]

const predicate = (x,y) => x.title === y.title

const result = R.uniqWith(predicate, list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20predicate%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.uniqWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: T[]): T[];
uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqWith</strong> source</summary>

```javascript
function includesWith(
  predicate, target, list
){
  let willReturn = false
  let index = -1

  while (++index < list.length && !willReturn){
    const value = list[ index ]

    if (predicate(target, value)){
      willReturn = true
    }
  }

  return willReturn
}

export function uniqWith(predicate, list){
  if (arguments.length === 1) return _list => uniqWith(predicate, _list)

  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]

    if (!includesWith(
      predicate, value, willReturn
    )){
      willReturn.push(value)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniqWith as uniqWithRamda } from 'ramda'

import { uniqWith } from './uniqWith.js'

const list = [ { a : 1 }, { a : 1 } ]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn, list)
  expect(result).toEqual([ { a : 1 } ])
})

test('with list of strings', () => {
  const fn = (x, y) => x.length === y.length
  const list = [ '0', '11', '222', '33', '4', '55' ]
  const result = uniqWith(fn)(list)
  const resultRamda = uniqWithRamda(fn, list)
  expect(result).toEqual([ '0', '11', '222' ])
  expect(resultRamda).toEqual([ '0', '11', '222' ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqWith)

### unless

```typescript

unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, x: T): T | U
```

The method returns function that will be called with argument `input`.

If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`.

In the other case, the final output will be the `input` itself.

```javascript
const fn = R.unless(
  x => x > 2,
  x => x + 10
)

const result = [
  fn(1),
  fn(5)
]
// => [11, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.unless(%0A%20%20x%20%3D%3E%20x%20%3E%202%2C%0A%20%20x%20%3D%3E%20x%20%2B%2010%0A)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(1)%2C%0A%20%20fn(5)%0A%5D%0A%2F%2F%20%3D%3E%20%5B11%2C%205%5D">Try this <strong>R.unless</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, x: T): T | U;
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U;
unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T, x: T): T;
unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T): (x: T) => T;
```

</details>

<details>

<summary><strong>R.unless</strong> source</summary>

```javascript
import { curry } from './curry.js'

function unlessFn(
  predicate, whenFalseFn, input
){
  if (predicate(input)) return input

  return whenFalseFn(input)
}

export const unless = curry(unlessFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { inc } from './inc.js'
import { isNil } from './isNil.js'
import { unless } from './unless.js'

test('happy', () => {
  const safeInc = unless(isNil, inc)
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

test('curried', () => {
  const safeIncCurried = unless(isNil)(inc)
  expect(safeIncCurried(null)).toBeNull()
})

test('with 3 inputs', () => {
  let result = unless(x => x.startsWith('/'), x=> x.concat('/'), '/api')
  expect(result).toBe('/api')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### unnest

```typescript

unnest(list: unknown[]): unknown[]
```

```javascript
const result = R.unnest([1, [2], [[3]]])
// => [1, 2, [3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.unnest(%5B1%2C%20%5B2%5D%2C%20%5B%5B3%5D%5D%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20%5B3%5D%5D">Try this <strong>R.unnest</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
unnest(list: unknown[]): unknown[];
unnest<T>(list: unknown[]): T;
```

</details>

<details>

<summary><strong>R.unnest</strong> source</summary>

```javascript
export function unnest(list){
  return list.reduce((acc, item) => {
    if (Array.isArray(item)){
      return [ ...acc, ...item ]
    }

    return [ ...acc, item ]
  }, [])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { unnest } from './unnest.js'

test('happy', () => {
  const result = unnest([ 1, [ 2 ], [ [ 3 ] ] ])
  expect(result).toEqual([ 1, 2, [ 3 ] ])
})

test('has no effect on simple list', () => {
  const list = [ 1, 2 ]
  const result = unnest(list)
  expect(result).toEqual([ 1, 2 ])
})

test('flattens an array of empty arrays', () => {
  const list = [ [], [], [] ]
  const result = unnest(list)
  expect(result).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unnest)

### unwind

```typescript

unwind<T, U>(prop: keyof T, obj: T): U[]
```

```javascript
const obj = {
  a: 1,
  b: [2, 3],
}
const result = R.unwind('b', obj)
const expected = [{a:1, b:2}, {a:1, b:3}]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%20%5B2%2C%203%5D%2C%0A%7D%0Aconst%20result%20%3D%20R.unwind('b'%2C%20obj)%0Aconst%20expected%20%3D%20%5B%7Ba%3A1%2C%20b%3A2%7D%2C%20%7Ba%3A1%2C%20b%3A3%7D%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.unwind</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
unwind<T, U>(prop: keyof T, obj: T): U[];
unwind<T, U>(prop: keyof T): (obj: T) => U[];
```

</details>

<details>

<summary><strong>R.unwind</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { mapArray } from './map.js'

export function unwind(property, obj){
  if (arguments.length === 1){
    return _obj => unwind(property, _obj)
  }

  if (!isArray(obj[ property ])) return [ obj ]

  return mapArray(x => ({
    ...obj,
    [ property ] : x,
  }),
  obj[ property ])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { unwind } from './unwind.js'

test('happy', () => {
  const obj = {
    a : 1,
    b : [ 2, 3 ],
    c : [ 3, 4 ],
  }
  const expected = [
    {
      a : 1,
      b : 2,
      c : [ 3, 4 ],
    },
    {
      a : 1,
      b : 3,
      c : [ 3, 4 ],
    },
  ]
  const result = unwind('b', obj)
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unwind)

### update

```typescript

update<T>(index: number, newValue: T, list: T[]): T[]
```

It returns a copy of `list` with updated element at `index` with `newValue`.

```javascript
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = R.update(index, newValue, list)
// => [1, 2, 88, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20index%20%3D%202%0Aconst%20newValue%20%3D%2088%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A%0Aconst%20result%20%3D%20R.update(index%2C%20newValue%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%2088%2C%204%2C%205%5D">Try this <strong>R.update</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: T[]): T[];
update<T>(index: number, newValue: T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.update</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { curry } from './curry.js'

export function updateFn(
  index, newValue, list
){
  const clone = cloneList(list)
  if (index === -1) return clone.fill(newValue, index)

  return clone.fill(
    newValue, index, index + 1
  )
}

export const update = curry(updateFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { update } from './update.js'

const list = [ 1, 2, 3 ]

test('happy', () => {
  const newValue = 8
  const index = 1
  const result = update(
    index, newValue, list
  )
  const curriedResult = update(index, newValue)(list)
  const tripleCurriedResult = update(index)(newValue)(list)

  const expected = [ 1, 8, 3 ]
  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
  expect(tripleCurriedResult).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(
    index, newValue, list
  )

  expect(result).toEqual(list)
})

test('with negative index', () => {
  expect(update(
    -1, 10, [ 1 ]
  )).toEqual([ 10 ])
  expect(update(
    -1, 10, []
  )).toEqual([])
  expect(update(
    -1, 10, list
  )).toEqual([ 1, 2, 10 ])
  expect(update(
    -2, 10, list
  )).toEqual([ 1, 10, 3 ])
  expect(update(
    -3, 10, list
  )).toEqual([ 10, 2, 3 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### updateObject

```typescript

updateObject<Output>(rules: ([string, any])[], input: object): Output
```

Very similar to `R.assocPath` but it applies list of updates instead of only a single update.

It returns a copy of `obj` input with changed properties according to `rules` input.

Each instance of `rules` is a tuple of object path and the new value for this path. If such object path does not exist, then such object path is created.

As it uses `R.path` underneath, object path can be either string or array of strings(in Typescript object path can be only a string).

```javascript
const obj = {
  a: {b: 1},
  foo: {bar: 10},
}
const rules = [
  ['a.b', 2],
  ['foo.bar', 20],
  ['q.z', 300],
]
const result = R.updateObject(rules, Record<string, unknown>)

const expected = {
  a: {b: 2},
  foo: {bar: 20},
  q: {z: 300},
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%3A%20%7Bb%3A%201%7D%2C%0A%20%20foo%3A%20%7Bbar%3A%2010%7D%2C%0A%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20%5B'a.b'%2C%202%5D%2C%0A%20%20%5B'foo.bar'%2C%2020%5D%2C%0A%20%20%5B'q.z'%2C%20300%5D%2C%0A%5D%0Aconst%20result%20%3D%20R.updateObject(rules%2C%20Record%3Cstring%2C%20unknown%3E)%0A%0Aconst%20expected%20%3D%20%7B%0A%20%20a%3A%20%7Bb%3A%202%7D%2C%0A%20%20foo%3A%20%7Bbar%3A%2020%7D%2C%0A%20%20q%3A%20%7Bz%3A%20300%7D%2C%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.updateObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
updateObject<Output>(rules: ([string, any])[], input: object): Output;
updateObject<Output>(rules: ([string, any])[]): (input: object) => Output;
```

</details>

<details>

<summary><strong>R.updateObject</strong> source</summary>

```javascript
import { assocPath } from './assocPath.js'

export function updateObject(rules, obj){
  if (arguments.length === 1) return _obj => updateObject(rules, _obj)

  let clone = { ...obj } /*?.*/

  rules.forEach(([ objectPath, newValue ]) => {
    clone = assocPath(
      objectPath, newValue, clone
    )
  })

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { updateObject } from './updateObject.js'

const obj = {
  a   : { b : 1 },
  foo : { bar : 10 },
}
const rules = [
  [ 'a.b', 2 ],
  [ 'foo.bar', 20 ],
  [ 'q.z', 300 ],
]
const expected = {
  a   : { b : 2 },
  foo : { bar : 20 },
  q   : { z : 300 },
}

test('happy', () => {
  const result = updateObject(rules, obj)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = updateObject(rules)(obj)
  expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#updateObject)

### values

```typescript

values<T extends object, K extends keyof T>(obj: T): T[K][]
```

With correct input, this is nothing more than `Object.values(Record<string, unknown>)`. If `obj` is not an object, then it returns an empty array.

```javascript
const obj = {a:1, b:2}

R.values(Record<string, unknown>)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A2%7D%0A%0Aconst%20result%20%3D%20R.values(Record%3Cstring%2C%20unknown%3E)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.values</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>

<details>

<summary><strong>R.values</strong> source</summary>

```javascript
import { type } from './type.js'

export function values(obj){
  if (type(obj) !== 'Object') return []
  return Object.values(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { values } from './values.js'

test('happy', () => {
  expect(values({
    a : 1,
    b : 2,
    c : 3,
  })).toEqual([ 1, 2, 3 ])
})

test('with bad input', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
  expect(values(55)).toEqual([])
  expect(values('foo')).toEqual([])
  expect(values(true)).toEqual([])
  expect(values(false)).toEqual([])
  expect(values(NaN)).toEqual([])
  expect(values(Infinity)).toEqual([])
  expect(values([])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#values)

### view

```typescript

view<S, A>(lens: Lens<S, A>): (obj: S) => A
```

It returns the value of `lens` focus over `target` object.

```javascript
const lens = R.lensProp('x')

R.view(lens, {x: 1, y: 2}) // => 1
R.view(lens, {x: 4, y: 2}) // => 4
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20lens%20%3D%20R.lensProp('x')%0A%0AR.view(lens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0Aconst%20result%20%3D%20R.view(lens%2C%20%7Bx%3A%204%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%204">Try this <strong>R.view</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
view<S, A>(lens: Lens<S, A>): (obj: S) => A;
view<S, A>(lens: Lens<S, A>, obj: S): A;
```

</details>

<details>

<summary><strong>R.view</strong> source</summary>

```javascript
const Const = x => ({
  x,
  map : fn => Const(x),
})

export function view(lens, target){
  if (arguments.length === 1) return _target => view(lens, _target)

  return lens(Const)(target).x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc.js'
import { lens } from './lens.js'
import { prop } from './prop.js'
import { view } from './view.js'

const testObject = { foo : 'Led Zeppelin' }
const assocLens = lens(prop('foo'), assoc('foo'))

test('happy', () => {
  expect(view(assocLens, testObject)).toBe('Led Zeppelin')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#view)

### viewOr

```typescript

viewOr<Input, Output>(fallback: Output, lens: Lens<Input, Output>, input: Input): Output
```

A combination between `R.defaultTo` and `R.view.

```javascript
const lens = R.lensProp('a');
const input = {a: 'foo'}
const fallbackInput = {b: 'bar'}
const fallback = 'FALLBACK'

const result = [
  R.viewOr(fallback, lens, input),
  R.viewOr(fallback, lens, fallbackInput)
]
// => ['foo', 'FALLBACK']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20lens%20%3D%20R.lensProp('a')%3B%0Aconst%20input%20%3D%20%7Ba%3A%20'foo'%7D%0Aconst%20fallbackInput%20%3D%20%7Bb%3A%20'bar'%7D%0Aconst%20fallback%20%3D%20'FALLBACK'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.viewOr(fallback%2C%20lens%2C%20input)%2C%0A%20%20R.viewOr(fallback%2C%20lens%2C%20fallbackInput)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'FALLBACK'%5D">Try this <strong>R.viewOr</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
viewOr<Input, Output>(fallback: Output, lens: Lens<Input, Output>, input: Input): Output;
viewOr<Input, Output>(fallback: Output, lens: Lens<Input, Output>): (input: Input) =>  Output;
```

</details>

<details>

<summary><strong>R.viewOr</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { defaultTo } from './defaultTo.js'
import { view } from './view.js'

function viewOrFn(
  fallback, lens, input
){
  return defaultTo(fallback, view(lens, input))
}

export const viewOr = curry(viewOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lensProp } from './lensProp.js'
import { viewOr } from './viewOr.js'

const lens = lensProp('a')
const input = { a : 'foo' }
const fallbackInput = { b : 'bar' }
const fallback = 'FALLBACK'

test('happy', () => {
  const result = viewOr(
    fallback, lens, fallbackInput
  )
  expect(result).toBe(fallback)
})

test('curried', () => {
  const result = viewOr(fallback, lens)(input)
  expect(result).toBe('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#viewOr)

### wait

```typescript

wait<T>(fn: Promise<T>): Promise<[T, Error|undefined]>
```

It provides `Golang`-like interface for handling promises.

```javascript
const [result, err] = await R.wait(R.delay(1000))
// => err is undefined
// => result is `RAMBDAX_DELAY`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20%5Bresult%2C%20err%5D%20%3D%20await%20R.wait(R.delay(1000))%0A%2F%2F%20%3D%3E%20err%20is%20undefined%0A%2F%2F%20%3D%3E%20result%20is%20%60RAMBDAX_DELAY%60">Try this <strong>R.wait</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
wait<T>(fn: Promise<T>): Promise<[T, Error|undefined]>;
wait<T>(fn: (x: any) => Promise<T>): Promise<[T, Error|undefined]>;
```

</details>

<details>

<summary><strong>R.wait</strong> source</summary>

```javascript
export function wait(fn){
  return new Promise(resolve => {
    fn.then(result => resolve([ result, undefined ])).catch(e =>
      resolve([ undefined, e ]))
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { wait } from './wait.js'

test('happy path', async () => {
  const fn = x => Promise.resolve(x + 1)
  const [ result, err ] = await wait(fn(1))

  expect(result).toBe(2)
  expect(err).toBeUndefined()
})

test('when promise is rejected', async () => {
  const fn = x => Promise.reject(Error('foo'))
  const [ result, err ] = await wait(fn(1))

  expect(result).toBeUndefined()
  expect(err).toEqual(Error('foo'))
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#wait)

### waitFor

```typescript

waitFor(
  waitForTrueCondition: () => boolean,
  howLong: number,
  loops?: number
): () => Promise<boolean>
```

It returns `true`, if `condition` returns `true` within `howLong` milliseconds time period.

The method accepts an optional third argument `loops`(default to 10), which is the number of times `waitForTrueCondition` will be evaluated for `howLong` period. Once this function returns a value different from `false`, this value will be the final result. 

Otherwise, `R.waitFor` will return `false`.

```javascript
const howLong = 1000
let counter = 0
const waitForTrueCondition = async x => {
  await R.delay(100)
  counter = counter + x

  return counter > 10
}

const result = await R.waitFor(waitForTrueCondition, howLong)(2)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howLong%20%3D%201000%0Alet%20counter%20%3D%200%0Aconst%20waitForTrueCondition%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(100)%0A%20%20counter%20%3D%20counter%20%2B%20x%0A%0A%20%20return%20counter%20%3E%2010%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.waitFor(waitForTrueCondition%2C%20howLong)(2)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.waitFor</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
waitFor(
  waitForTrueCondition: () => boolean,
  howLong: number,
  loops?: number
): () => Promise<boolean>;
waitFor(
  waitForTrueCondition: () => Promise<boolean>,
  howLong: number,
  loops?: number
): () => Promise<boolean>;
waitFor<T>(
  waitForTrueCondition: (input: T) => Promise<boolean>,
  howLong: number,
  loops?: number
): (input: T) => Promise<boolean>;
waitFor<T>(
  waitForTrueCondition: (input: T) => boolean,
  howLong: number,
  loops?: number
): (input: T) => Promise<boolean>;
```

</details>

<details>

<summary><strong>R.waitFor</strong> source</summary>

```javascript
import { delay } from './delay.js'
import { range } from './range.js'
import { type } from './type.js'

export function waitFor(
  condition, howLong, loops = 10
){
  const typeCondition = type(condition)

  const passPromise = typeCondition === 'Promise'
  const passFunction = typeCondition === 'Function'
  const interval = Math.floor(howLong / loops)

  if (!(passPromise || passFunction)){
    throw new Error('R.waitFor')
  }

  return async (...inputs) => {
    for (const _ of range(0, loops)){
      const resultCondition = await condition(...inputs)

      if (resultCondition === false){
        await delay(interval)
      } else {
        return resultCondition
      }
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { waitFor } from './waitFor.js'

const howLong = 1000

test('true', async () => {
  let counter = 0
  const condition = x => {
    counter++

    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toBeTrue()
})

test('false', async () => {
  let counter = 0
  const condition = x => {
    counter++

    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toBeFalse()
})

test('async condition | true', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    await delay(10)

    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toBeTrue()
})

test('async condition | false', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    await delay(10)

    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toBeFalse()
})

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(() => waitFor(fn, howLong)()).toThrowErrorMatchingInlineSnapshot('"R.waitFor"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#waitFor)

### when

```typescript

when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U
```

It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`. 
If the `predicate` returns `false`, then it will simply return `input`.

```javascript
const predicate = x => typeof x === 'number'
const whenTrueFn = R.add(11)

const fn = when(predicate, whenTrueResult)

const positiveInput = 88
const negativeInput = 'foo'

const result = [
  fn(positiveInput),
  fn(positiveInput),
]

const expected = [
  99,
  'foo',
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20'number'%0Aconst%20whenTrueFn%20%3D%20R.add(11)%0A%0Aconst%20fn%20%3D%20when(predicate%2C%20whenTrueResult)%0A%0Aconst%20positiveInput%20%3D%2088%0Aconst%20negativeInput%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(positiveInput)%2C%0A%20%20fn(positiveInput)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%2099%2C%0A%20%20'foo'%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.when</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U;
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;
when<T, U>(predicate: (x: T) => boolean): ((whenTrueFn: (a: T) => U) => (input: T) => T | U);
```

</details>

<details>

<summary><strong>R.when</strong> source</summary>

```javascript
import { curry } from './curry.js'

function whenFn(
  predicate, whenTrueFn, input
){
  if (!predicate(input)) return input

  return whenTrueFn(input)
}

export const when = curry(whenFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { when } from './when.js'

const predicate = x => typeof x === 'number'

test('happy', () => {
  const fn = when(predicate, add(11))
  expect(fn(11)).toBe(22)
  expect(fn('foo')).toBe('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#when)

### where

```typescript

where<T, U>(conditions: T, input: U): boolean
```

It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

```javascript
const condition = R.where({
  a : x => typeof x === "string",
  b : x => x === 4
})
const input = {
  a : "foo",
  b : 4,
  c : 11,
}

const result = condition(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20R.where(%7B%0A%20%20a%20%3A%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20%22string%22%2C%0A%20%20b%20%3A%20x%20%3D%3E%20x%20%3D%3D%3D%204%0A%7D)%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%22foo%22%2C%0A%20%20b%20%3A%204%2C%0A%20%20c%20%3A%2011%2C%0A%7D%0A%0Aconst%20result%20%3D%20condition(input)%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.where</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
where<T, U>(conditions: T, input: U): boolean;
where<T>(conditions: T): <U>(input: U) => boolean;
where<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
where<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.where</strong> source</summary>

```javascript
export function where(conditions, input){
  if (input === undefined){
    return _input => where(conditions, _input)
  }
  let flag = true
  for (const prop in conditions){
    if (!flag) continue
    const result = conditions[ prop ](input[ prop ])
    if (flag && result === false){
      flag = false
    }
  }

  return flag
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals.js'
import { where } from './where.js'

test('when true', () => {
  const result = where({
    a : equals('foo'),
    b : equals('bar'),
  },
  {
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })

  expect(result).toBeTrue()
})

test('when false | early exit', () => {
  let counter = 0
  const equalsFn = expected => input => {
    console.log(expected, 'expected')
    counter++

    return input === expected
  }
  const predicate = where({
    a : equalsFn('foo'),
    b : equalsFn('baz'),
  })
  expect(predicate({
    a : 'notfoo',
    b : 'notbar',
  })).toBeFalse()
  expect(counter).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#where)

### whereAny

```typescript

whereAny<T, U>(conditions: T, input: U): boolean
```

Same as `R.where`, but it will return `true` if at least one condition check returns `true`.

```javascript
const conditions = {
  a: a => a > 1,
  b: b => b > 2,
}
const result = [
  R.whereAny(conditions, {b:3}),
  R.whereAny(conditions, {c:4})
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20conditions%20%3D%20%7B%0A%20%20a%3A%20a%20%3D%3E%20a%20%3E%201%2C%0A%20%20b%3A%20b%20%3D%3E%20b%20%3E%202%2C%0A%7D%0Aconst%20result%20%3D%20%5B%0A%20%20R.whereAny(conditions%2C%20%7Bb%3A3%7D)%2C%0A%20%20R.whereAny(conditions%2C%20%7Bc%3A4%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.whereAny</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
whereAny<T, U>(conditions: T, input: U): boolean;
whereAny<T>(conditions: T): <U>(input: U) => boolean;
whereAny<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
whereAny<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.whereAny</strong> source</summary>

```javascript
export function whereAny(conditions, input){
  if (input === undefined){
    return _input => whereAny(conditions, _input)
  }
  for (const prop in conditions){
    if (conditions[ prop ](input[ prop ])){
      return true
    }
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals.js'
import { whereAny } from './whereAny.js'

const conditions = {
  a : equals('foo'),
  b : equals('bar'),
}

test('happy', () => {
  expect(whereAny(conditions, {
    a : 1,
    b : 'bar',
  })).toBeTrue()
})

test('curried', () => {
  expect(whereAny(conditions)({ a : 1 })).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#whereAny)

### whereEq

```typescript

whereEq<T, U>(condition: T, input: U): boolean
```

It will return `true` if all of `input` object fully or partially include `rule` object.

`R.equals` is used to determine equality.

```javascript
const condition = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = whereEq(condition, input)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20%7B%20a%20%3A%20%7B%20b%20%3A%201%20%7D%20%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%7B%20b%20%3A%201%20%7D%2C%0A%20%20c%20%3A%202%0A%7D%0A%0Aconst%20result%20%3D%20whereEq(condition%2C%20input)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.whereEq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
whereEq<T, U>(condition: T, input: U): boolean;
whereEq<T>(condition: T): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.whereEq</strong> source</summary>

```javascript
import { equals } from './equals.js'
import { filter } from './filter.js'

export function whereEq(condition, input){
  if (arguments.length === 1){
    return _input => whereEq(condition, _input)
  }

  const result = filter((conditionValue, conditionProp) =>
    equals(conditionValue, input[ conditionProp ]),
  condition)

  return Object.keys(result).length === Object.keys(condition).length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { whereEq } from './whereEq.js'

test('when true', () => {
  const condition = { a : 1 }
  const input = {
    a : 1,
    b : 2,
  }

  const result = whereEq(condition, input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const condition = { a : 1 }
  const input = { b : 2 }

  const result = whereEq(condition, input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const condition = { a : { b : 1 } }
  const input = {
    a : { b : 1 },
    c : 2,
  }

  const result = whereEq(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const condition = { a : { b : 1 } }

  expect(() => whereEq(condition, null)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of null (reading \'a\')"')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#whereEq)

### without

```typescript

without<T>(matchAgainst: T[], source: T[]): T[]
```

It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.

`R.equals` is used to determine equality.

```javascript
const source = [1, 2, 3, 4]
const matchAgainst = [2, 3]

const result = R.without(matchAgainst, source)
// => [1, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20source%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20matchAgainst%20%3D%20%5B2%2C%203%5D%0A%0Aconst%20result%20%3D%20R.without(matchAgainst%2C%20source)%0A%2F%2F%20%3D%3E%20%5B1%2C%204%5D">Try this <strong>R.without</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
without<T>(matchAgainst: T[], source: T[]): T[];
without<T>(matchAgainst: T[]): (source: T[]) => T[];
```

</details>

<details>

<summary><strong>R.without</strong> source</summary>

```javascript
import { _indexOf } from './equals.js'
import { reduce } from './reduce.js'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current),
    [],
    source
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { without as withoutRamda } from 'ramda'

import { without } from './without.js'

test('should return a new list without values in the first argument', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
})

test('with list of objects', () => {
  const itemsToOmit = [ { a : 1 }, { c : 3 } ]
  const collection = [ { a : 1 }, { b : 2 }, { c : 3 }, { d : 4 } ]
  const expected = [ { b : 2 }, { d : 4 } ]

  expect(without(itemsToOmit, collection)).toEqual(expected)
  expect(withoutRamda(itemsToOmit, collection)).toEqual(expected)
})

test('ramda accepts string as target input while rambda throws', () => {
  expect(withoutRamda('0:1', [ '0', '0:1' ])).toEqual([ '0:1' ])
  expect(() =>
    without('0:1', [ '0', '0:1' ])).toThrowErrorMatchingInlineSnapshot('"Cannot read property \'indexOf\' of 0:1"')
  expect(without([ '0:1' ], [ '0', '0:1' ])).toEqual([ '0' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#without)

### xnor

```typescript

xnor(x: boolean, y: boolean): boolean
```

Logical XNOR

```javascript
const result = [
  R.xnor(1, 0),
  R.xnor(0, 1),
  R.xnor(0, 0),
  R.xnor(1, 1),
]
// => [true, false, false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.xnor(1%2C%200)%2C%0A%20%20R.xnor(0%2C%201)%2C%0A%20%20R.xnor(0%2C%200)%2C%0A%20%20R.xnor(1%2C%201)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%2C%20false%2C%20true%5D">Try this <strong>R.xnor</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
xnor(x: boolean, y: boolean): boolean;
xnor(y: boolean): (y: boolean) => boolean;
```

</details>

<details>

<summary><strong>R.xnor</strong> source</summary>

```javascript
export function xnor(x, y){
  if (arguments.length === 1){
    return _y => xnor(x, _y)
  }

  return Boolean(x && y || !x && !y)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { xnor } from './xnor.js'

test('when true', () => {
  expect(xnor(1, 1)).toBeTrue()
  expect(xnor(0)(0)).toBeTrue()
})

test('when false', () => {
  expect(xnor(0, 1)).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#xnor)

### xor

```typescript

xor(x: boolean, y: boolean): boolean
```

Logical XOR

```javascript
const result = [
  xor(true, true),
  xor(false, false),
  xor(false, true),
]
// => [false, false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20xor(true%2C%20true)%2C%0A%20%20xor(false%2C%20false)%2C%0A%20%20xor(false%2C%20true)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%5D">Try this <strong>R.xor</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
xor(x: boolean, y: boolean): boolean;
xor(y: boolean): (y: boolean) => boolean;
```

</details>

<details>

<summary><strong>R.xor</strong> source</summary>

```javascript
export function xor(a, b){
  if (arguments.length === 1) return _b => xor(a, _b)

  return Boolean(a) && !b || Boolean(b) && !a
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { xor } from './xor.js'

test('compares two values with exclusive or', () => {
  expect(xor(true, true)).toBeFalse()
  expect(xor(true, false)).toBeTrue()
  expect(xor(false, true)).toBeTrue()
  expect(xor(false, false)).toBeFalse()
})

test('when both values are truthy, it should return false', () => {
  expect(xor(true, 'foo')).toBeFalse()
  expect(xor(42, true)).toBeFalse()
  expect(xor('foo', 42)).toBeFalse()
  expect(xor({}, true)).toBeFalse()
  expect(xor(true, [])).toBeFalse()
  expect(xor([], {})).toBeFalse()
  expect(xor(new Date(), true)).toBeFalse()
  expect(xor(true, Infinity)).toBeFalse()
  expect(xor(Infinity, new Date())).toBeFalse()
})

test('when both values are falsy, it should return false', () => {
  expect(xor(null, false)).toBeFalse()
  expect(xor(false, undefined)).toBeFalse()
  expect(xor(undefined, null)).toBeFalse()
  expect(xor(0, false)).toBeFalse()
  expect(xor(false, NaN)).toBeFalse()
  expect(xor(NaN, 0)).toBeFalse()
  expect(xor('', false)).toBeFalse()
})

test('when one argument is truthy and the other is falsy, it should return true', () => {
  expect(xor('foo', null)).toBeTrue()
  expect(xor(null, 'foo')).toBeTrue()
  expect(xor(undefined, 42)).toBeTrue()
  expect(xor(42, undefined)).toBeTrue()
  expect(xor(Infinity, NaN)).toBeTrue()
  expect(xor(NaN, Infinity)).toBeTrue()
  expect(xor({}, '')).toBeTrue()
  expect(xor('', {})).toBeTrue()
  expect(xor(new Date(), 0)).toBeTrue()
  expect(xor(0, new Date())).toBeTrue()
  expect(xor([], null)).toBeTrue()
  expect(xor(undefined, [])).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#xor)

### zip

```typescript

zip<K, V>(x: K[], y: V[]): KeyValuePair<K, V>[]
```

It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

```javascript
const x = [1, 2]
const y = ['A', 'B']
R.zip(x, y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0Aconst%20result%20%3D%20R.zip(%5B...x%2C%203%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try this <strong>R.zip</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
zip<K, V>(x: K[], y: V[]): KeyValuePair<K, V>[];
zip<K>(x: K[]): <V>(y: V[]) => KeyValuePair<K, V>[];
```

</details>

<details>

<summary><strong>R.zip</strong> source</summary>

```javascript
export function zip(left, right){
  if (arguments.length === 1) return _right => zip(left, _right)

  const result = []
  const length = Math.min(left.length, right.length)

  for (let i = 0; i < length; i++){
    result[ i ] = [ left[ i ], right[ i ] ]
  }

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { zip } from './zip.js'

const array1 = [ 1, 2, 3 ]
const array2 = [ 'A', 'B', 'C' ]

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [
    [ 1, 'A' ],
    [ 2, 'B' ],
    [ 3, 'C' ],
  ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [
    [ 1, 'A' ],
    [ 2, 'B' ],
  ]
  const actualA = zip([ 1, 2 ], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [
    [ 1, 'A' ],
    [ 2, 'B' ],
  ]
  const actualB = zip(array1, [ 'A', 'B' ])
  expect(actualB).toEqual(expectedB)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zip)

### zipObj

```typescript

zipObj<T, K extends string>(keys: K[], values: T[]): { [P in K]: T }
```

It will return a new object with keys of `keys` array and values of `values` array.

```javascript
const keys = ['a', 'b', 'c']

R.zipObj(keys, [1, 2, 3])
// => {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(keys, [1, 2])
// => {a: 1, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20keys%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0A%0AR.zipObj(keys%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0Aconst%20result%20%3D%20R.zipObj(keys%2C%20%5B1%2C%202%5D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try this <strong>R.zipObj</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
zipObj<T, K extends string>(keys: K[], values: T[]): { [P in K]: T };
zipObj<K extends string>(keys: K[]): <T>(values: T[]) => { [P in K]: T };
zipObj<T, K extends number>(keys: K[], values: T[]): { [P in K]: T };
zipObj<K extends number>(keys: K[]): <T>(values: T[]) => { [P in K]: T };
```

</details>

<details>

<summary><strong>R.zipObj</strong> source</summary>

```javascript
import { take } from './take.js'

export function zipObj(keys, values){
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder)

  return take(values.length, keys).reduce((
    prev, xInstance, i
  ) => {
    prev[ xInstance ] = values[ i ]

    return prev
  }, {})
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equals } from './equals.js'
import { zipObj } from './zipObj.js'

test('zipObj', () => {
  expect(zipObj([ 'a', 'b', 'c' ], [ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
    c : 3,
  })
})

test('0', () => {
  expect(zipObj([ 'a', 'b' ])([ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('1', () => {
  expect(zipObj([ 'a', 'b', 'c' ])([ 1, 2 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('ignore extra keys', () => {
  const result = zipObj([ 'a', 'b', 'c', 'd', 'e', 'f' ], [ 1, 2, 3 ])
  const expected = {
    a : 1,
    b : 2,
    c : 3,
  }

  expect(equals(result, expected)).toBeTrue()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipObj)

### zipWith

```typescript

zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[]
```

```javascript
const list1 = [ 10, 20, 30, 40 ]
const list2 = [ 100, 200 ]

const result = R.zipWith(
  R.add, list1, list2
)
// => [110, 220]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B%2010%2C%2020%2C%2030%2C%2040%20%5D%0Aconst%20list2%20%3D%20%5B%20100%2C%20200%20%5D%0A%0Aconst%20result%20%3D%20R.zipWith(%0A%20%20R.add%2C%20list1%2C%20list2%0A)%0A%2F%2F%20%3D%3E%20%5B110%2C%20220%5D">Try this <strong>R.zipWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: T[], list2: U[]) => TResult[];
```

</details>

<details>

<summary><strong>R.zipWith</strong> source</summary>

```javascript
import { curry } from './curry.js'
import { take } from './take.js'

function zipWithFn(
  fn, x, y
){
  return take(x.length > y.length ? y.length : x.length, x).map((xInstance, i) => fn(xInstance, y[ i ]))
}

export const zipWith = curry(zipWithFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { zipWith } from './zipWith.js'

const list1 = [ 1, 2, 3 ]
const list2 = [ 10, 20, 30, 40 ]
const list3 = [ 100, 200 ]

test('when second list is shorter', () => {
  const result = zipWith(
    add, list1, list3
  )
  expect(result).toEqual([ 101, 202 ])
})

test('when second list is longer', () => {
  const result = zipWith(
    add, list1, list2
  )
  expect(result).toEqual([ 11, 22, 33 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipWith)

## ❯ CHANGELOG

11.3.1

- Sync with `Rambda` version `9.4.2`

11.3.0

- Fix `deno` release

- Sync with `Rambda` version `9.4.1`

11.2.0

- `R.throttle` TS typings now support no argument case for function input.

- Sync with `Rambda` version `9.3.0`

11.1.1

Fix broken build due to changes to TypeScript definitions for lenses.

11.1.0

- Improve `R.mapToObject` types - [Issue #96](https://github.com/selfrefactor/rambdax/issues/96)

- Sync with `Rambda` version `9.2.0`

11.0.0

- Sync with `Rambda` version `9.1.0`

- Change typings of `R.lensEq` to match `Rambda-adjust` typings

10.1.0

- Simplify TypeScript logic of `R.pipeAsync/R.composeAsync/R.pipedAsync` - [MR #698](https://github.com/selfrefactor/rambda/pull/698)

- Sync with `Rambda` version `8.6.0`

10.0.0

- Sync with `Rambda` version `8.0.0`

- Add `R.omitPaths` - [Issue #681](https://github.com/selfrefactor/rambda/issues/681)

- Add `R.noop`

9.1.1

Add missing fix for `type: module` imports.

9.1.0

- Sync with `Rambda` version `7.5.0`

9.0.0

From this release, CHANGELOG will simply refer to the `Rambda` version linked to the release, instead of listing `Rambda` changes here as well. In this case, the version referring to this release is `

> This is only part of the changelog. You can read the full text in [CHANGELOG.md](CHANGELOG.md) file.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-changelog)

## ❯ Additional info

> Most influential contributors(in alphabetical order)

- ![farwayer avatar](https://avatars.githubusercontent.com/farwayer) [@farwayer](https://github.com/farwayer) - improving performance in R.find, R.filter; give the idea how to make benchmarks more reliable;

- ![thejohnfreeman avatar](https://avatars.githubusercontent.com/thejohnfreeman) [@thejohnfreeman](https://github.com/thejohnfreeman) - add R.assoc, R.chain;

- ![peeja avatar](https://avatars.githubusercontent.com/peeja) [@peeja](https://github.com/peeja) - add several methods and fix mutiple issues; provides great MR documentation

- ![helmuthdu avatar](https://avatars.githubusercontent.com/helmuthdu) [@helmuthdu](https://github.com/helmuthdu) - add R.clone; help improve code style;

- ![jpgorman avatar](https://avatars.githubusercontent.com/jpgorman) [@jpgorman](https://github.com/jpgorman) - add R.zip, R.reject, R.without, R.addIndex;

- ![ku8ar avatar](https://avatars.githubusercontent.com/ku8ar) [@ku8ar](https://github.com/ku8ar) - add R.slice, R.propOr, R.identical, R.propIs and several math related methods; introduce the idea to display missing Ramda methods;

- ![romgrk avatar](https://avatars.githubusercontent.com/romgrk) [@romgrk](https://github.com/romgrk) - add R.groupBy, R.indexBy, R.findLast, R.findLastIndex;

- ![squidfunk avatar](https://avatars.githubusercontent.com/squidfunk) [@squidfunk](https://github.com/squidfunk) - add R.assocPath, R.symmetricDifference, R.difference, R.intersperse;

- ![synthet1c avatar](https://avatars.githubusercontent.com/synthet1c) [@synthet1c](https://github.com/synthet1c) - add all lenses methods; add R.applySpec, R.converge;

- ![vlad-zhukov avatar](https://avatars.githubusercontent.com/vlad-zhukov) [@vlad-zhukov](https://github.com/vlad-zhukov) - help with configuring Rollup, Babel; change export file to use ES module exports;

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

- [Overview of Rambda pros/cons](https://mobily.github.io/ts-belt/docs/#rambda-%EF%B8%8F)

> Links to Rambda

- [awesome-fp-js](https://github.com/stoeffel/awesome-fp-js)

- [Web Tools Weekly #280](https://mailchi.mp/webtoolsweekly/web-tools-280)

- [awesome-docsify](https://github.com/docsifyjs/awesome-docsify)

> Deprecated from `Used by` section

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk) - This repo doesn't uses `Rambda` since *October/2020* [commit that removes Rambda](https://github.com/SAP/cloud-sdk/commit/b29b4f915c4e4e9c2441e7b6b67cf83dac1fdac3)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-additional-info)

## My other libraries

<table>
    <tbody>
        <tr valign="top">
            <td width="20%" align="center">
                <h4>Niketa theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.Niketa-theme">Collection of 9 light VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>Niketa dark theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.niketa-dark-theme">Collection of 9 dark VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>String-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/string-fn">String utility library</a>
            </td>
            <td width="20%" align="center">
                <h4>Useful Javascript libraries</h4>
                <a href="https://github.com/selfrefactor/useful-javascript-libraries">Large collection of JavaScript,TypeScript and Angular related repos links</a>
            </td>
            <td width="20%" align="center">
                <h4>Run-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/run-fn">CLI commands for lint JS/TS files, commit git changes and upgrade of dependencies</a>
            </td>
        </tr>
    </tbody>
</table>

## Stargazers over time

[![Stargazers over time](https://starchart.cc/selfrefactor/rambdax.svg)](https://starchart.cc/selfrefactor/rambdax)
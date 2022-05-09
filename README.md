# Rambda

`Rambda` is smaller and faster alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![All contributors](https://img.shields.io/github/contributors/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)

## ❯ Example use

```javascript
import { compose, map, filter } from 'rambda'

const result = compose(
  map(x => x * 2),
  filter(x => x > 2)
)([1, 2, 3, 4])
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ❯ Rambda's advantages

### Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `Typescript` are in development, which means that using **R.compose/R.pipe** can be problematic.

Important - Rambda version `7.1.0`(or higher) requires Typescript version `4.3.3`(or higher).

#### Immutable TS definitions

You can use immutable version of Rambda definitions, which is linted with ESLint `functional/prefer-readonly-type` plugin.

```
import {add} from 'rambda/immutable'
```

### Deno support

While `Ramda` is available for `Deno` users, `Rambda` provides you with included TS definitions:

```
import * as R from "https://x.nest.land/rambda@7.1.0/mod.ts";
import * as Ramda from "https://x.nest.land/ramda@0.28.0/mod.ts";

R.add(1)('foo') // => will trigger warning in VSCode
Ramda.add(1)('foo') // => will not trigger warning in VSCode
```

### Smaller size

The size of a library affects not only the build bundle size but also the dev bundle size and build time. This is important advantage, expecially for big projects.

### Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda** - proven in the following [repo](https://github.com/selfrefactor/rambda-tree-shaking).

The repo holds two `Angular9` applications: one with small example code of *Ramda* and the other - same code but with *Rambda* as import library.

The test shows that **Rambda** bundle size is **2 MB** less than its **Ramda** counterpart.

There is also [Webpack/Rollup/Parcel/Esbuild tree-shaking example including several libraries](https://github.com/mischnic/tree-shaking-example) including `Ramda`, `Rambda` and `Rambdax`. 

> actually tree-shaking is the initial reason for creation of `Rambda`

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

### Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#-benchmarks) can prove that.

### Deno

### Support

As the library is smaller than Ramda, issues are much faster resolved.

Closing the issue is usually accompanied by publishing a new patch version of `Rambda` to NPM.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-advantages)

## ❯ Missing Ramda methods

<details>
<summary>
  Click to see the full list of 80 Ramda methods not implemented in Rambda 
</summary>

- __
- addIndex
- ap
- aperture
- applyTo
- ascend
- binary
- call
- collectBy
- comparator
- composeWith
- construct
- constructN
- descend
- differenceWith
- dissocPath
- empty
- eqBy
- forEachObjIndexed
- gt
- gte
- hasIn
- innerJoin
- insert
- insertAll
- into
- invert
- invertObj
- invoker
- keysIn
- lift
- liftN
- lt
- lte
- mapAccum
- mapAccumRight
- memoizeWith
- mergeDeepLeft
- mergeDeepWith
- mergeDeepWithKey
- mergeWithKey
- modify
- modifyPath
- nAry
- nthArg
- o
- otherwise
- pair
- partialRight
- pathSatisfies
- pickBy
- pipeWith
- project
- promap
- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- sortWith
- splitWhenever
- symmetricDifferenceWith
- andThen
- toPairsIn
- transduce
- traverse
- unary
- uncurryN
- unfold
- unionWith
- uniqBy
- unnest
- until
- useWith
- valuesIn
- xprod
- thunkify
- default

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-missing-ramda-methods)
  
## ❯ Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or the following CDN link:

```
https://unpkg.com/rambda@CURRENT_VERSION/dist/rambda.umd.js
```

- with deno

```
import {compose, add} from 'https://raw.githubusercontent.com/selfrefactor/rambda/master/dist/rambda.esm.js'
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

- Typescript definitions between `rambda` and `@types/ramda` may vary.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-ramda)

## ❯ Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*(4.17.21) and *Ramda*(0.28.0).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 🚀 Fastest | 21.52% slower | 82.15% slower
 *adjust* | 8.48% slower | 🚀 Fastest | 🔳
 *all* | 🚀 Fastest | 3.79% slower | 🔳
 *allPass* | 🚀 Fastest | 87.3% slower | 🔳
 *allPass* | 🚀 Fastest | 98.56% slower | 🔳
 *and* | 🚀 Fastest | 89.09% slower | 🔳
 *any* | 🚀 Fastest | 92.87% slower | 45.82% slower
 *anyPass* | 🚀 Fastest | 98.25% slower | 🔳
 *append* | 🚀 Fastest | 2.07% slower | 🔳
 *applySpec* | 🚀 Fastest | 80.43% slower | 🔳
 *assoc* | 72.32% slower | 60.08% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 91.86% slower | 86.48% slower
 *compose* | 1.91% slower | 21.6% slower | 🚀 Fastest
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
 *flatten* | 🚀 Fastest | 95.26% slower | 10.27% slower
 *ifElse* | 🚀 Fastest | 58.56% slower | 🔳
 *includes* | 🚀 Fastest | 84.68% slower | 🔳
 *indexOf* | 🚀 Fastest | 83.07% slower | 🔳
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
 *pipe* | 0.41% slower | 🚀 Fastest | 🔳
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
 *uniq* | 🚀 Fastest | 86.73% slower | 🔳
 *uniqWith* | 13.67% slower | 🚀 Fastest | 🔳
 *uniqWith* | 14.23% slower | 🚀 Fastest | 🔳
 *update* | 🚀 Fastest | 52.35% slower | 🔳
 *view* | 🚀 Fastest | 76.15% slower | 🔳

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-benchmarks)

## ❯ Used by

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [Walmart Canada](https://www.walmart.ca) reported by [w-b-dev](https://github.com/w-b-dev) 

- [VSCode Slack intergration](https://github.com/verydanny/vcslack)

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

<details>

<summary>All Typescript definitions</summary>

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
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toEqual(3)
  expect(add(1, '2')).toEqual(3)
  expect(add(true, false)).toEqual(1)
  expect(add(null, null)).toEqual(0)
  expect(add(undefined, undefined)).toEqual(NaN)
  expect(add(new Date(1), new Date(2))).toEqual(3)
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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {add} from 'rambda'

describe('R.add', () => {
  it('happy', () => {
    const result = add(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = add(4)(1)

    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 21.52% slower and Lodash is 82.15% slower</summary>

```text
const R = require('../../dist/rambda.js')

const add = [
  {
    label : 'Rambda',
    fn    : () => {
      R.add(1, 1)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.add(1, 1)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.add(1, 1)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### adjust

```typescript

adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary>Rambda is slower than Ramda with 8.48%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 0, 1, 2 ]
const fn = x => x + 1
const index = 1

const adjust = [
  {
    label : 'Rambda',
    fn    : () => {
      R.adjust(
        index, fn, list
      )
      R.adjust(index, fn)(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.adjust(
        index, fn, list
      )
      Ramda.adjust(index, fn)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#adjust)

### all

```typescript

all<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {all} from 'rambda'

describe('all', () => {
  it('happy', () => {
    const result = all(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = all<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 3.79%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfObjects,
  uniqListOfStrings,
  rangeOfNumbers,
  uniqListOfLists,
} = require('./_utils.js')

const limit = 100

const modes = [
  [ uniqListOfObjects(limit), x => Object.keys(x).length > 2 ],
  [ uniqListOfStrings(limit), x => x.length > 0 ],
  [ uniqListOfLists(limit), x => x.length > 0 ],
  [ rangeOfNumbers(limit), x => x > -1 ],
]

const applyBenchmark = (fn, input) => fn(input[ 1 ], input[ 0 ])

const tests = [
  {
    label : 'Rambda',
    fn    : R.all,
  },
  {
    label : 'Ramda',
    fn    : Ramda.all,
  },
]

  tests,
  applyBenchmark,
  modes,
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#all)

### allPass

```typescript

allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean
```

It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

<details>

<summary>All Typescript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {allPass} from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const x = allPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 87.3%</summary>

```text
const R = require('../../dist/rambda.js')

const { random } = require('rambdax')

const limit = 100
const min = 10
const max = 1200
function createListOfFunctions(fn, fnLimit){
  return Array(fnLimit)
    .fill(null)
    .map(() => fn())
}

const modes = [
  [
    { foo : 1500 },
    createListOfFunctions(() => x => Number(x.foo) > random(min, max),
      limit),
  ],
  [
    '1500',
    createListOfFunctions(() => x => Number(x) > random(min, max), limit),
  ],
  [
    [ 1, 2, 1500 ],
    createListOfFunctions(() => x => x[ 2 ] > random(min, max), limit),
  ],
  [ 1500, createListOfFunctions(() => x => x > random(min, max), limit) ],
]

const applyBenchmark = (fn, input) => fn(input[ 1 ])(input[ 0 ])
const tests = [
  {
    label : 'Rambda',
    fn    : R.allPass,
  },
  {
    label : 'Ramda',
    fn    : Ramda.allPass,
  },
]

  tests,
  modes,
  applyBenchmark,
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allPass)

### always

```typescript

always<T>(x: T): (...args: unknown[]) => T
```

It returns function that always returns `x`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {always} from 'rambda'

describe('R.always', () => {
  it('happy', () => {
    const fn = always('foo')
    fn // $ExpectType (...args: unknown[]) => string
    const result = fn()
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#always)

### and

Logical AND

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#and)

### any

```typescript

any<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {any} from 'rambda'

describe('R.any', () => {
  it('happy', () => {
    const result = any(
      x => {
        x // $ExpectType number
        return x > 2
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })

  it('when curried needs a type', () => {
    const result = any<number>(x => {
      x // $ExpectType number
      return x > 2
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 92.87% slower and Lodash is 45.82% slower</summary>

```text
const R = require('../../dist/rambda.js')

const input = [ 1, 2, 3, 4 ]
const fn = val => val > 2

const any = [
  {
    label : 'Rambda',
    fn    : () => {
      R.any(fn, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.any(fn, input)
    },
  },
  {
    label : 'Lodash.some',
    fn    : () => {
      _.some(input, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#any)

### anyPass

```typescript

anyPass<T>(predicates: SafePred<T>[]): SafePred<T>
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: SafePred<T>[]): SafePred<T>;
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
import {anyPass} from './anyPass.js'

test('happy', () => {
  const rules = [x => typeof x === 'string', x => x > 10]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTrue()
  expect(predicate(6)).toBeFalse()
})

test('happy', () => {
  const rules = [x => typeof x === 'string', x => x > 10]

  expect(anyPass(rules)(11)).toBeTrue()

  expect(anyPass(rules)(undefined)).toBeFalse()
})

const obj = {
  a: 1,
  b: 2,
}

test('when returns true', () => {
  const conditionArr = [val => val.a === 1, val => val.a === 2]

  expect(anyPass(conditionArr)(obj)).toBeTrue()
})

test('when returns false + curry', () => {
  const conditionArr = [val => val.a === 2, val => val.b === 3]

  expect(anyPass(conditionArr)(obj)).toBeFalse()
})

test('with empty predicates list', () => {
  expect(anyPass([])(3)).toBeFalse()
})

test('works with multiple inputs', () => {
  const fn = function (w, x, y, z) {
    console.log(w, x, y, z)

    return w + x === y + z
  }
  expect(anyPass([fn])(3, 3, 3, 3)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {anyPass} from 'rambda'

describe('anyPass', () => {
  it('happy', () => {
    const x = anyPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 98.25%</summary>

```text
const R = require('../../dist/rambda.js')

const rules = [ x => typeof x === 'boolean', x => x > 20, x => x * 7 < 100 ]

const anyPass = [
  {
    label : 'Rambda',
    fn    : () => {
      R.anyPass(rules)(11)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.anyPass(rules)(11)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyPass)

### append

```typescript

append<T>(x: T, list: T[]): T[]
```

It adds element `x` at the end of `list`.

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, list: T[]): T[];
append<T>(x: T): <T>(list: T[]) => T[];
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {append} from 'rambda'

const list = [1, 2, 3]

describe('R.append', () => {
  it('happy', () => {
    const result = append(4, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = append(4)(list)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 2.07%</summary>

```text
const R = require('../../dist/rambda.js')

const append = [
  {
    label : 'Rambda',
    fn    : () => {
      R.append(0)([ 1, 2, 3, 4 ])
      R.append('bar')('foo')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.append(0)([ 1, 2, 3, 4 ])
      Ramda.append('bar')('foo')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### apply

```typescript

apply<T = any>(fn: (...args: any[]) => T, args: any[]): T
```

It applies function `fn` to the list of arguments. 

This is useful for creating a fixed-arity function from a variadic function. `fn` should be a bound function if context is significant.

<details>

<summary>All Typescript definitions</summary>

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
import {apply} from './apply.js'
import {bind} from './bind.js'
import {identity} from './identity.js'

test('happy', () => {
  expect(apply(identity, [1, 2, 3])).toEqual(1)
})

test('applies function to argument list', () => {
  expect(apply(Math.max, [1, 2, 3, -99, 42, 6, 7])).toEqual(42)
})

test('provides no way to specify context', () => {
  const obj = {
    method: function () {
      return this === obj
    },
  }
  expect(apply(obj.method, [])).toBeFalse()
  expect(apply(bind(obj.method, obj), [])).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {apply, identity} from 'rambda'

describe('R.apply', () => {
  it('happy', () => {
    const result = apply<number>(identity, [1, 2, 3])

    result // $ExpectType number
  })
  it('curried', () => {
    const fn = apply<number>(identity)
    const result = fn([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#apply)

### applySpec

```typescript

applySpec<Spec extends Record<string, (...args: any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
applySpec<T>(spec: any): (...args: any[]) => T;
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'

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
  if (_isArray(spec)){
    const ret = []
    let i = 0
    const l = spec.length
    for (; i < l; i++){
      // handle recursive spec inside array
      if (typeof spec[ i ] === 'object' || _isArray(spec[ i ])){
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

import { add, always, compose, dec, inc, map, path, prop, T } from '../rambda.js'
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
  expect(f.length).toBe(0)
  expect(fRamda.length).toBe(5)
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {multiply, applySpec, inc, dec, add} from 'rambda'

describe('applySpec', () => {
  it('ramda 1', () => {
    const result = applySpec({
      v: inc,
      u: dec,
    })(1)
    result // $ExpectType { v: number; u: number; }
  })
  it('ramda 1', () => {
    interface Output {
      sum: number
      multiplied: number
    }
    const result = applySpec<Output>({
      sum: add,
      multiplied: multiply,
    })(1, 2)

    result // $ExpectType Output
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 80.43%</summary>

```text
const R = require('../../dist/rambda.js')

const curryN = [
  {
    label : 'Rambda',
    fn    : () => {
      const data = {
        a : {
          b : { c : 1 },
          d : 2,
        },
      }
      const spec = {
        c : R.path([ 'a', 'b', 'c' ]),
        d : R.path([ 'a', 'd' ]),
      }
      R.applySpec(spec, data)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const data = {
        a : {
          b : { c : 1 },
          d : 2,
        },
      }
      const spec = {
        c : Ramda.path([ 'a', 'b', 'c' ]),
        d : Ramda.path([ 'a', 'd' ]),
      }
      Ramda.applySpec(spec, data)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applySpec)

### assoc

```typescript

assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>;
assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & Omit<U, K>;
assoc<K extends string>(prop: K): AssocPartialOne<K>;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
import { curry } from './curry.js'

function assocFn(
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {assoc} from 'rambda'

const obj = {a: 1}
const newValue = 2
const newProp = 'b'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc(newProp, newValue, obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 1', () => {
    const result = assoc(newProp, newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 2', () => {
    const result = assoc(newProp)(newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 72.32% slower and Ramda is 60.08% slower</summary>

```text
const R = require('../../dist/rambda.js')

const input = {
  a : 1,
  b : 2,
}
const key = 'c'
const value = 3

const assoc = [
  {
    label : 'Rambda',
    fn    : () => {
      R.assoc(
        key, value, input
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.assoc(
        key, value, input
      )
    },
  },
  {
    label : 'Lodash.set',
    fn    : () => {
      _.set(
        input, key, value
      )
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assoc)

### assocPath

```typescript

assocPath<Output>(path: Path, newValue: any, obj: object): Output
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<Output>(path: Path, newValue: any, obj: object): Output;
assocPath<Output>(path: Path, newValue: any): (obj: object) => Output;
assocPath<Output>(path: Path): (newValue: any) => (obj: object) => Output;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { _isInteger } from './_internals/_isInteger.js'
import { cloneList } from './_internals/cloneList.js'
import { assoc } from './assoc.js'
import { curry } from './curry.js'

function assocPathFn(
  path, newValue, input
){
  const pathArrValue =
    typeof path === 'string' ?
      path.split('.').map(x => _isInteger(Number(x)) ? Number(x) : x) :
      path
  if (pathArrValue.length === 0){
    return newValue
  }

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition =
      typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextinput = condition ?
      _isInteger(pathArrValue[ 1 ]) ?
        [] :
        {} :
      input[ index ]

    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextinput
    )
  }

  if (_isInteger(index) && _isArray(input)){
    const arr = cloneList(input)
    arr[ index ] = newValue

    return arr
  }

  return assoc(
    index, newValue, input
  )
}

export const assocPath = curry(assocPathFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assocPath } from './assocPath.js'

test('string can be used as path input', () => {
  const testObj = {
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
  }
  const result = assocPath(
    'a.0.b', 10, testObj
  )
  const expected = {
    a : [ { b : 10 }, { b : 2 } ],
    d : 3,
  }
  expect(result).toEqual(expected)
})

test('bug', () => {
  /*
    https://github.com/selfrefactor/rambda/issues/524
  */
  const state = {}

  const withDateLike = assocPath(
    [ 'outerProp', '2020-03-10' ],
    { prop : 2 },
    state
  )
  const withNumber = assocPath(
    [ 'outerProp', '5' ], { prop : 2 }, state
  )

  const withDateLikeExpected = { outerProp : { '2020-03-10' : { prop : 2 } } }
  const withNumberExpected = { outerProp : { 5 : { prop : 2 } } }
  expect(withDateLike).toEqual(withDateLikeExpected)
  expect(withNumber).toEqual(withNumberExpected)
})

test('adds a key to an empty object', () => {
  expect(assocPath(
    [ 'a' ], 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath(
    'b.c', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested key to a nested non-empty object - curry case 1', () => {
  expect(assocPath('b.d',
    3)({
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

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assocPath('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object - curry case 1', () => {
  expect(assocPath('b.c', 2)({ a : 1 })).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assocPath('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assocPath('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assocPath(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPath(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assocPath(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assocPath(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assocPath(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assocPath(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

test('empty array as path', () => {
  const result = assocPath(
    [], 3, {
      a : 1,
      b : 2,
    }
  )
  expect(result).toEqual(3)
})

test('happy', () => {
  const expected = { foo : { bar : { baz : 42 } } }
  const result = assocPath(
    [ 'foo', 'bar', 'baz' ], 42, { foo : null }
  )
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {assocPath} from 'rambda'

interface Output {
  a: number
  foo: {bar: number}
}

describe('R.assocPath - user must explicitly set type of output', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2, {a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2, {a: 1})

    result // $ExpectType Output
  })
})

describe('R.assocPath - curried', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2)({a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2)({a: 1})

    result // $ExpectType Output
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assocPath)

### bind

```typescript

bind<F extends (...args: any[]) => any, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>
```

Creates a function that is bound to a context.

<details>

<summary>All Typescript definitions</summary>

```typescript
bind<F extends (...args: any[]) => any, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>;
bind<F extends (...args: any[]) => any, T>(fn: F): (thisObj: T) => (...args: Parameters<F>) => ReturnType<F>;
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
import {bind} from './bind.js'

function Foo(x) {
  this.x = x
}
function add(x) {
  return this.x + x
}
function Bar(x, y) {
  this.x = x
  this.y = y
}
Bar.prototype = new Foo()
Bar.prototype.getX = function () {
  return 'prototype getX'
}

test('returns a function', () => {
  expect(typeof bind(add)(Foo)).toEqual('function')
})

test('returns a function bound to the specified context object', () => {
  const f = new Foo(12)
  function isFoo() {
    return this instanceof Foo
  }
  const isFooBound = bind(isFoo, f)
  expect(isFoo()).toBeFalse()
  expect(isFooBound()).toBeTrue()
})

test('works with built-in types', () => {
  const abc = bind(String.prototype.toLowerCase, 'ABCDEFG')
  expect(typeof abc).toEqual('function')
  expect(abc()).toEqual('abcdefg')
})

test('works with user-defined types', () => {
  const f = new Foo(12)
  function getX() {
    return this.x
  }
  const getXFooBound = bind(getX, f)
  expect(getXFooBound()).toEqual(12)
})

test('works with plain objects', () => {
  const pojso = {x: 100}
  function incThis() {
    return this.x + 1
  }
  const incPojso = bind(incThis, pojso)
  expect(typeof incPojso).toEqual('function')
  expect(incPojso()).toEqual(101)
})

test('does not interfere with existing object methods', () => {
  const b = new Bar('a', 'b')
  function getX() {
    return this.x
  }
  const getXBarBound = bind(getX, b)
  expect(b.getX()).toEqual('prototype getX')
  expect(getXBarBound()).toEqual('a')
})

test('preserves arity', () => {
  const f0 = function () {
    return 0
  }
  const f1 = function (a) {
    return a
  }
  const f2 = function (a, b) {
    return a + b
  }
  const f3 = function (a, b, c) {
    return a + b + c
  }

  expect(bind(f0, {}).length).toEqual(0)
  expect(bind(f1, {}).length).toEqual(1)
  expect(bind(f2, {}).length).toEqual(2)
  expect(bind(f3, {}).length).toEqual(3)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {bind} from 'rambda'

class Foo {}
function isFoo<T = any>(this: T): boolean {
  return this instanceof Foo
}

describe('R.bind', () => {
  it('happy', () => {
    const foo = new Foo()
    const result = bind(isFoo, foo)()

    result // $ExpectType boolean
  })
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

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {both} from 'rambda'

describe('R.both', () => {
  it('with passed type', () => {
    const fn = both<number>(
      x => x > 1,
      x => x % 2 === 0
    )
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with passed type - curried', () => {
    const fn = both<number>(x => x > 1)(x => x % 2 === 0)
    fn // $ExpectType Predicate<number>
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        x // $ExpectType any
        return x % 2 === 0
      }
    )
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed - curried', () => {
    const fn = both((x: number) => {
      x // $ExpectType number
      return x > 1
    })((x: number) => {
      x // $ExpectType number
      return x % 2 === 0
    })
    const result = fn(2)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#both)

### chain

```typescript

chain<T, U>(fn: (n: T) => U[], list: T[]): U[]
```

The method is also known as `flatMap`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(() => calculateAndAssocTotalToScore(score)).toThrow()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {chain} from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.chain', () => {
  it('without passing type', () => {
    const result = chain(fn, list)
    result // $ExpectType string[]

    const curriedResult = chain(fn)(list)
    curriedResult // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#chain)

### clamp

Restrict a number `input` to be within `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clamp)

### clone

It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clone)

### complement

It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### compose

It performs right-to-left function composition.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compose)

### concat

It returns a new string or array, which is the result of merging `x` and `y`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### cond

It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#cond)

### converge

Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#converge)

### count

It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#count)

### countBy

```typescript

countBy<T extends unknown>(transformFn: (x: T) => any, list: T[]): Record<string, number>
```

It counts elements in a list after each instance of the input list is passed through `transformFn` function.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import { countBy } from 'rambda'

const transformFn = (x: string) => x.toLowerCase()
const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

describe('R.countBy', () => {
  it('happy', () => {
    const result = countBy(transformFn, list)
    
    result // $ExpectType Record<string, number>
  })
  it('curried', () => {
    const result = countBy(transformFn)(list)
    
    result // $ExpectType Record<string, number>
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#countBy)

### curry

It expects a function as input and returns its curried version.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curry)

### curryN

It returns a curried equivalent of the provided function, with the specified arity.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curryN)

### dec

It decrements a number.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dec)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T, input: T | null | undefined): T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

<details>

<summary>All Typescript definitions</summary>

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
import {defaultTo} from './defaultTo.js'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toEqual('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toEqual('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toBeFalse()
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {defaultTo} from 'rambda'

describe('R.defaultTo with Ramda spec', () => {
  it('happy', () => {
    const result = defaultTo('foo', '')
    result // $ExpectType "" | "foo"
  })
  it('with explicit type', () => {
    const result = defaultTo<string>('foo', null)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 48.91%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [ null, undefined, 5 ]

const defaultTo = [
  {
    label : 'Rambda',
    fn    : () => {
      R.defaultTo(3, input[ 0 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.defaultTo(3, input[ 0 ])
    },
  },
  {
    label : 'Rambda with multiple arguments',
    fn    : () => {
      R.defaultTo(3, ...input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

### difference

```typescript

difference<T>(a: T[], b: T[]): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

`R.equals` is used to determine equality.

<details>

<summary>All Typescript definitions</summary>

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
  expect(difference([ 1 ], [ 1 ]).length).toEqual(0)
  expect(differenceRamda([ NaN ], [ NaN ]).length).toEqual(0)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {difference} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 2, 4]

describe('R.difference', () => {
  it('happy', () => {
    const result = difference(list1, list2)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = difference(list1)(list2)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#difference)

### dissoc

It returns a new object that does not contain property `prop`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### divide

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#divide)

### drop

```typescript

drop<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from beginning of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(drop(3, 'rambda')).toEqual('bda')
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {drop} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.drop - array', () => {
  it('happy', () => {
    const result = drop(howMany, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = drop(howMany)(list)
    result // $ExpectType number[]
  })
})

describe('R.drop - string', () => {
  it('happy', () => {
    const result = drop(howMany, str)
    result // $ExpectType string
  })
  it('curried', () => {
    const result = drop(howMany)(str)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 82.35%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [ 1, 2, 3, 4 ]

const drop = [
  {
    label : 'Rambda',
    fn    : () => {
      R.drop(3, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.drop(3, input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from the end of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(dropLast(3, 'rambda')).toEqual('ram')
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropLast} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.dropLast - array', () => {
  it('happy', () => {
    const result = dropLast(howMany, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = dropLast(howMany)(list)
    result // $ExpectType number[]
  })
})

describe('R.dropLast - string', () => {
  it('happy', () => {
    const result = dropLast(howMany, str)
    result // $ExpectType string
  })
  it('curried', () => {
    const result = dropLast(howMany)(str)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 86.74%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [ 1, 2, 3, 4 ]

const dropLast = [
  {
    label : 'Rambda',
    fn    : () => {
      R.dropLast(3, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.dropLast(3, input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLast)

### dropLastWhile

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeats

```typescript

dropRepeats<T>(list: T[]): T[]
```

It removes any successive duplicates according to `R.equals`.

<details>

<summary>All Typescript definitions</summary>

```typescript
dropRepeats<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.dropRepeats</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { equals } from './equals.js'

export function dropRepeats(list){
  if (!_isArray(list)){
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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropRepeats} from 'rambda'

describe('R.dropRepeats', () => {
  it('happy', () => {
    const result = dropRepeats([1, 2, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeats)

### dropRepeatsWith

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsWith)

### dropWhile

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropWhile)

### either

```typescript

either(firstPredicate: Pred, secondPredicate: Pred): Pred
```

It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.

This `predicate` function will return `true`, if any of the two input predicates return `true`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {either} from 'rambda'

describe('R.either', () => {
  it('with passed type', () => {
    const fn = either<number>(
      x => x > 1,
      x => x % 2 === 0
    )
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with passed type - curried', () => {
    const fn = either<number>(x => x > 1)(x => x % 2 === 0)
    fn // $ExpectType Predicate<number>
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = either(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        x // $ExpectType any
        return x % 2 === 0
      }
    )
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed - curried', () => {
    const fn = either((x: number) => {
      x // $ExpectType number
      return x > 1
    })((x: number) => {
      x // $ExpectType number
      return x % 2 === 0
    })
    const result = fn(2)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#either)

### endsWith

```typescript

endsWith(target: string, iterable: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.endsWith`.
When iterable is a list, then it uses R.equals to determine if the target list ends in the same way as the given target.

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, iterable: string): boolean;
endsWith(target: string): (iterable: string) => boolean;
endsWith<T>(target: T[], list: T[]): boolean;
endsWith<T>(target: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { equals } from './equals.js'

export function endsWith(target, iterable){
  if (arguments.length === 1) return _iterable => endsWith(target, _iterable)

  if (typeof iterable === 'string'){
    return iterable.endsWith(target)
  }
  if (!_isArray(target)) return false

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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {endsWith} from 'rambda'

describe('R.endsWith - array as iterable', () => {
  const target = [{a: 2}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = endsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.endsWith - string as iterable', () => {
  const target = 'bar'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = endsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#endsWith)

### eqProps

It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqProps)

### equals

```typescript

equals<T>(x: T, y: T): boolean
```

It deeply compares `x` and `y` and returns `true` if they are equal.

<details>

<summary>All Typescript definitions</summary>

```typescript
equals<T>(x: T, y: T): boolean;
equals<T>(x: T): (y: T) => boolean;
```

</details>

<details>

<summary><strong>R.equals</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { type } from './type.js'

export function _lastIndexOf(valueToFind, list){
  if (!_isArray(list)){
    throw new Error(`Cannot read property 'indexOf' of ${ list }`)
  }
  const typeOfValue = type(valueToFind)
  if (![ 'Object', 'Array', 'NaN', 'RegExp' ].includes(typeOfValue))
    return list.lastIndexOf(valueToFind)

  const { length } = list
  let index = length
  let foundIndex = -1

  while (--index > -1 && foundIndex === -1){
    if (equals(list[ index ], valueToFind)){
      foundIndex = index
    }
  }

  return foundIndex
}

export function _indexOf(valueToFind, list){
  if (!_isArray(list)){
    throw new Error(`Cannot read property 'indexOf' of ${ list }`)
  }
  const typeOfValue = type(valueToFind)
  if (![ 'Object', 'Array', 'NaN', 'RegExp' ].includes(typeOfValue))
    return list.indexOf(valueToFind)

  let index = -1
  let foundIndex = -1
  const { length } = list

  while (++index < length && foundIndex === -1){
    if (equals(list[ index ], valueToFind)){
      foundIndex = index
    }
  }

  return foundIndex
}

function _arrayFromIterator(iter){
  const list = []
  let next
  while (!(next = iter.next()).done){
    list.push(next.value)
  }

  return list
}

function _equalsSets(a, b){
  if (a.size !== b.size){
    return false
  }
  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1)

  return filtered.length === 0
}

function parseError(maybeError){
  const typeofError = maybeError.__proto__.toString()
  if (![ 'Error', 'TypeError' ].includes(typeofError)) return []

  return [ typeofError, maybeError.message ]
}

function parseDate(maybeDate){
  if (!maybeDate.toDateString) return [ false ]

  return [ true, maybeDate.getTime() ]
}

function parseRegex(maybeRegex){
  if (maybeRegex.constructor !== RegExp) return [ false ]

  return [ true, maybeRegex.toString() ]
}

function equalsSets(a, b){
  if (a.size !== b.size){
    return false
  }
  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1)

  return filtered.length === 0
}

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  const aType = type(a)

  if (aType !== type(b)) return false
  if (aType === 'Function'){
    return a.name === undefined ? false : a.name === b.name
  }

  if ([ 'NaN', 'Undefined', 'Null' ].includes(aType)) return true

  if (aType === 'Number'){
    if (Object.is(-0, a) !== Object.is(-0, b)) return false

    return a.toString() === b.toString()
  }

  if ([ 'String', 'Boolean' ].includes(aType)){
    return a.toString() === b.toString()
  }

  if (aType === 'Array'){
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString()){
      return false
    }

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag){
        if (
          aCloneInstance !== bClone[ aCloneIndex ] &&
          !equals(aCloneInstance, bClone[ aCloneIndex ])
        ){
          loopArrayFlag = false
        }
      }
    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[ 0 ]){
    return bRegex[ 0 ] ? aRegex[ 1 ] === bRegex[ 1 ] : false
  } else if (bRegex[ 0 ]) return false

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[ 0 ]){
    return bDate[ 0 ] ? aDate[ 1 ] === bDate[ 1 ] : false
  } else if (bDate[ 0 ]) return false

  const aError = parseError(a)
  const bError = parseError(b)

  if (aError[ 0 ]){
    return bError[ 0 ] ?
      aError[ 0 ] === bError[ 0 ] && aError[ 1 ] === bError[ 1 ] :
      false
  }
  if (aType === 'Set'){
    return _equalsSets(a, b)
  }
  if (aType === 'Object'){
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length){
      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag){
        const aValue = a[ aKeyInstance ]
        const bValue = b[ aKeyInstance ]

        if (aValue !== bValue && !equals(aValue, bValue)){
          loopObjectFlag = false
        }
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
import {equals as equalsRamda} from 'ramda'

import {compareCombinations} from './_internals/testUtils.js'
import {variousTypes} from './benchmarks/_utils.js'
import {equals} from './equals.js'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTrue()
  expect(expectFalseFirst).toBeFalse()
  expect(expectFalseSecond).toBeFalse()
})

test('with array of objects', () => {
  const list1 = [{a: 1}, [{b: 2}]]
  const list2 = [{a: 1}, [{b: 2}]]
  const list3 = [{a: 1}, [{b: 3}]]

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
  expect(equals([NaN], [NaN])).toBeTrue()
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

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      }
    )
  ).toBeTrue()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        b: 3,
        a: 2,
      }
    )
  ).toBeTrue()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 3,
        b: 3,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 2,
        b: 3,
        c: 1,
      },
      {
        a: 2,
        b: 3,
      }
    )
  ).toBeFalse()
})

test('works with boolean tuple', () => {
  expect(equals([true, false], [true, false])).toBeTrue()
  expect(equals([true, false], [true, true])).toBeFalse()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }
  const objSecond = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = {a: {b: 1}}
  const objSecond = {a: {b: 2}}

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{a: 1}, {a: 2}])
  const toCompareSame = new Set([{a: 1}, {a: 2}, {a: 1}])
  const testSet = new Set([{a: 1}, {a: 2}, {a: 1}])
  expect(equals(toCompareSame, testSet)).toBeTruthy()
  expect(equals(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equals(new Set(['3', '2', '1']), testSet)).toBeTruthy()
  expect(equals(new Set(['3', '2', '0']), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTrue()

  expect(equals([1, 2, 3], [1, 2])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 2,
        a: 1,
      }
    )
  ).toBeTrue()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 1,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: false,
      },
      {
        a: 1,
        b: 1,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 2,
        a: 1,
        c: 3,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        x: {
          a: 1,
          b: 2,
        },
      },
      {
        x: {
          b: 2,
          a: 1,
          c: 3,
        },
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 3,
        a: 1,
      }
    )
  ).toBeFalse()

  expect(equals({a: {b: {c: 1}}}, {a: {b: {c: 1}}})).toBeTrue()

  expect(equals({a: {b: {c: 1}}}, {a: {b: {c: 2}}})).toBeFalse()

  expect(equals({a: {}}, {a: {}})).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})

test('with custom functions', () => {
  function foo() {
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with classes', () => {
  class Foo {}
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

const possibleInputs = variousTypes

describe('brute force', () => {
  compareCombinations({
    fn: equals,
    fnRamda: equalsRamda,
    firstInput: possibleInputs,
    secondInput: possibleInputs,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 5,
          "SHOULD_NOT_THROW": 4,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 289,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {equals} from 'rambda'

describe('R.equals', () => {
  it('happy', () => {
    const result = equals(4, 1)
    result // $ExpectType boolean
  })
  it('with object', () => {
    const foo = {a: 1}
    const bar = {a: 2}
    const result = equals(foo, bar)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = equals(4)(1)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 58.37% slower and Ramda is 96.73% slower</summary>

```text
const R = require('../../dist/rambda.js')

const limit = 10000

const strings = Array(limit)
  .fill(null)
  .map(() => Math.floor(Math.random() * 1000))

const equals = [
  {
    label : 'Rambda',
    fn    : () => {
      strings.forEach(x => R.equals(x, 'ss'))
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      strings.forEach(x => Ramda.equals(x, 'ss'))
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      strings.forEach(x => _.isEqual(x, 'ss'))
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#equals)

### evolve

```typescript

evolve<T, U>(rules: ((x: T) => U)[], list: T[]): U[]
```

It takes object or array of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'
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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {evolve, add} from 'rambda'

describe('R.evolve', () => {
  it('happy', () => {
    const input = {
      foo: 2,
      nested: {
        a: 1,
        bar: 3,
      },
    }
    const rules = {
      foo: add(1),
      nested: {
        a: add(-1),
        bar: add(1),
      },
    }
    const result = evolve(rules, input)
    const curriedResult = evolve(rules)(input)

    result.nested.a // $ExpectType number
    curriedResult.nested.a // $ExpectType number
    result.nested.bar // $ExpectType number
    result.foo // $ExpectType number
  })
  it('with array', () => {
    const rules = [String, String]
    const input = [100, 1400]
    const result = evolve(rules, input)
    const curriedResult = evolve(rules)(input)
    result // $ExpectType string[]
    curriedResult // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#evolve)

### F

```typescript

F(): boolean
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'

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

  if (_isArray(iterable)) return filterArray(
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
    expect(typeof prop).toEqual('string')

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {filter} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    })(list)
    result // $ExpectType number[]
  })
})

describe('R.filter with objects', () => {
  it('happy', () => {
    const result = filter<number>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried version requires second dummy type', () => {
    const result = filter<number, any>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    })(obj)
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 6.7% slower and Ramda is 72.03% slower</summary>

```text
const R = require('../../dist/rambda.js')

const arr = [ 1, 2, 3, 4 ]
const fn = x => x > 2
const filter = [
  {
    label : 'Rambda',
    fn    : () => {
      R.filter(fn, arr)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.filter(fn, arr)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.filter(arr, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

### find

```typescript

find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

<details>

<summary>All Typescript definitions</summary>

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
  const fn = propEq('a', 2)
  expect(find(fn, list)).toEqual({ a : 2 })
})

test('with curry', () => {
  const fn = propEq('a', 4)
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true, [])).toBeUndefined()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {find} from 'rambda'

const list = [1, 2, 3]

describe('R.find', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = find(predicate, list)
    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = find(predicate)(list)
    result // $ExpectType number | undefined
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 85.14% slower and Lodash is 42.65% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = x => x > 2
const list = [ 1, 2, 3, 4 ]

const find = [
  {
    label : 'Rambda',
    fn    : () => {
      R.find(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.find(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.find(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#find)

### findIndex

```typescript

findIndex<T>(predicate: (x: T) => boolean, list: T[]): number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

<details>

<summary>All Typescript definitions</summary>

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
  expect(findIndex(propEq('a', 2), list)).toEqual(1)

  expect(findIndex(propEq('a', 1))(list)).toEqual(0)

  expect(findIndex(propEq('a', 4))(list)).toEqual(-1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate)(list)
    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 86.48% slower and Lodash is 72.27% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = x => x > 2
const list = [ 1, 2, 3, 4 ]

const findIndex = [
  {
    label : 'Rambda',
    fn    : () => {
      R.findIndex(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.findIndex(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.findIndex(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findIndex)

### findLast

```typescript

findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined
```

It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

<details>

<summary>All Typescript definitions</summary>

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
  expect(result).toEqual(4)

  expect(findLast(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(4)
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
  expect(findLast(even, a)).toEqual(0)
  expect(findLast(gt100, a)).toEqual(300)
  expect(findLast(isStr, a)).toEqual('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, [ 'zing' ])).toEqual(undefined)
})

test('ramda 3', () => {
  expect(findLast(even, [ 2, 3, 5 ])).toEqual(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toEqual(undefined)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findLast} from 'rambda'

const list = [1, 2, 3]

describe('R.findLast', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate, list)
    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate)(list)
    result // $ExpectType number | undefined
  })
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

<details>

<summary>All Typescript definitions</summary>

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

  expect(result).toEqual(5)

  expect(findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(5)
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
  expect(findLastIndex(even, a)).toEqual(15)
  expect(findLastIndex(gt100, a)).toEqual(9)
  expect(findLastIndex(isStr, a)).toEqual(3)
  expect(findLastIndex(xGt100, a)).toEqual(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, [ 'zing' ])).toEqual(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [ 2, 3, 5 ])).toEqual(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toEqual(-1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findLastIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findLastIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate)(list)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLastIndex)

### flatten

```typescript

flatten<T>(list: any[]): T[]
```

It deeply flattens an array.

<details>

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(list: any[]): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'

export function flatten(list, input){
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++){
    if (_isArray(list[ i ])){
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {flatten} from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = flatten<number>([1, 2, [3, [4]]])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 95.26% slower and Lodash is 10.27% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, [ 2, [ 3, 4, 6 ] ] ]

const flatten = [
  {
    label : 'Rambda',
    fn    : () => {
      R.flatten(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.flatten(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.flatten(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatten)

### flip

It returns function which calls `fn` with exchanged first and second argument.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flip)

### forEach

```typescript

forEach<T>(fn: Iterator<T, void>, list: T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'
import { _keys } from './_internals/_keys.js'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  if (list === undefined){
    return
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length

    while (index < len){
      fn(list[ index ])
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len){
      const key = keys[ index ]
      fn(
        list[ key ], key, list
      )
      index++
    }
  }

  return list
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {forEach} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.forEach with arrays', () => {
  it('happy', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, list)
    result // $ExpectType number[]
  })
  it('curried require an explicit typing', () => {
    const result = forEach<number>(a => {
      a // $ExpectType number
    })(list)
    result // $ExpectType number[]
  })
})

describe('R.forEach with objects', () => {
  it('happy', () => {
    const result = forEach((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried require an input typing and a dummy third typing', () => {
    // Required in order all typings to work
    const result = forEach<number, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
    })(obj)
    result // $ExpectType Dictionary<number>
  })
  it('iterator without property', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, obj)
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEach)

### fromPairs

It transforms a `listOfPairs` to an object.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#fromPairs)

### groupBy

It splits `list` according to a provided `groupFn` function and returns an object.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupBy)

### groupWith

It returns separated version of list or string `input`, where separation is done with equality `compareFn` function.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupWith)

### has

```typescript

has<T>(prop: string, obj: T): boolean
```

It returns `true` if `obj` has property `prop`.

<details>

<summary>All Typescript definitions</summary>

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
import {has} from './has.js'

test('happy', () => {
  expect(has('a')({a: 1})).toBeTrue()
  expect(has('b', {a: 1})).toBeFalse()
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {has} from 'rambda'

describe('R.has', () => {
  it('happy', () => {
    const result = has('foo', {a: 1})
    const curriedResult = has('bar')({a: 1})
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#has)

### hasPath

```typescript

hasPath<T>(
  path: string | string[],
  input: object
): boolean
```

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {hasPath} from 'rambda'

describe('R.hasPath', () => {
  it('string path', () => {
    const obj = {a: {b: 1}}
    const result = hasPath('a.b', obj)
    const curriedResult = hasPath('a.c')(obj)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
  it('array path', () => {
    const obj = {a: {b: 1}}
    const result = hasPath(['a', 'b'], obj)
    const curriedResult = hasPath(['a', 'c'])(obj)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#hasPath)

### head

```typescript

head(input: string): string
```

It returns the first element of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
head(input: string): string;
head(emptyList: []): undefined;
head<T>(input: T[]): T | undefined;
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
  expect(head([ 'fi', 'fo', 'fum' ])).toEqual('fi')
  expect(head([])).toEqual(undefined)
  expect(head('foo')).toEqual('f')
  expect(head('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {head} from 'rambda'

describe('R.head', () => {
  it('string', () => {
    const result = head('foo')
    result // $ExpectType string
  })

  it('array', () => {
    const result = head([1, 2, 3])
    result // $ExpectType number | undefined
  })

  it('empty array - case 1', () => {
    const result = head([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = head(list)
    result // $ExpectType string | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#head)

### identical

It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identical)

### identity

```typescript

identity<T>(input: T): T
```

It just passes back the supplied `input` argument.

<details>

<summary>All Typescript definitions</summary>

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
import {identity} from './identity.js'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toBeTrue()
  expect(identity({a: 1})).toEqual({a: 1})
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {identity} from 'rambda'

describe('R.identity', () => {
  it('happy', () => {
    const result = identity(4)
    result // $ExpectType 4
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identity)

### ifElse

```typescript

ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult
```

It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.

<details>

<summary>All Typescript definitions</summary>

```typescript
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

    if (conditionResult === true){
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
import {always} from './always.js'
import {has} from './has.js'
import {identity} from './identity.js'
import {ifElse} from './ifElse.js'
import {prop} from './prop.js'

const condition = has('foo')
const v = function (a) {
  return typeof a === 'number'
}
const t = function (a) {
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toBeFalse()
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function (a) {
    return a
  }
  const v = function () {
    return true
  }
  const onTrue = function (a, b) {
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(v, onTrue, identity)(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toBeTrue()
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(false, always(true), always(false))

  expect(fn()).toBeFalse()
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toBeFalse()
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toBeFalse()
})

test('simple arity of 1', () => {
  const condition = x => x > 5
  const onTrue = x => x + 1
  const onFalse = x => x + 10
  const result = ifElse(condition, onTrue, onFalse)(1)
  expect(result).toBe(11)
})

test('simple arity of 2', () => {
  const condition = (x, y) => x + y > 5
  const onTrue = (x, y) => x + y + 1
  const onFalse = (x, y) => x + y + 10
  const result = ifElse(condition, onTrue, onFalse)(1, 10)
  expect(result).toBe(12)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {ifElse} from 'rambda'

describe('R.ifElse', () => {
  it('happy', () => {
    const condition = (x: number) => x > 5
    const onTrue = (x: number) => `foo${x}`
    const onFalse = (x: number) => `bar${x}`
    const fn = ifElse(condition, onTrue, onFalse)
    fn // $ExpectType (x: number) => string
    const result = fn(3)
    result // $ExpectType string
  })
  it('arity of 2', () => {
    const condition = (x: number, y: string) => x + y.length > 5
    const onTrue = (x: number, y: string) => `foo${x}-${y}`
    const onFalse = (x: number, y: string) => `bar${x}-${y}`
    const fn = ifElse(condition, onTrue, onFalse)
    fn // $ExpectType (x: number, y: string) => string
    const result = fn(3, 'hello')
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 58.56%</summary>

```text
const R = require('../../dist/rambda.js')

const condition = R.has('foo')
const v = function (a){
  return typeof a === 'number'
}
const t = function (a){
  return a + 1
}
const ifFn = x => R.prop('foo', x).length
const elseFn = () => false

const ifElse = [
  {
    label : 'Rambda',
    fn    : () => {
      const fn = R.ifElse(condition, ifFn)(elseFn)

      fn({ foo : 'bar' })
      fn({ fo : 'bar' })

      const ifIsNumber = R.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const fn = Ramda.ifElse(condition, ifFn)(elseFn)

      fn({ foo : 'bar' })
      fn({ fo : 'bar' })

      const ifIsNumber = Ramda.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElse)

### inc

It increments a number.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#inc)

### includes

```typescript

includes(valueToFind: string, input: string[] | string): boolean
```

If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

<details>

<summary>All Typescript definitions</summary>

```typescript
includes(valueToFind: string, input: string[] | string): boolean;
includes(valueToFind: string): (input: string[] | string) => boolean;
includes<T>(valueToFind: T, input: T[]): boolean;
includes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
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
  if (!_isArray(iterable)) return false

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {includes} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({a: {b: '1'}}, list)
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = includes('oo', 'foo')
    const curriedResult = includes('oo')('foo')

    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 84.68%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfObjects,
  uniqListOfLists,
  listOfVariousTypes,
  rangeOfNumbers,
} = require('./_utils.js')

const limit = 100
const additionalModes = listOfVariousTypes.map(unknownType => [
  unknownType,
  uniqListOfLists(limit),
])

const modes = [
  [ 99, rangeOfNumbers(limit) ],
  [ 200, rangeOfNumbers(limit) ],
  ...additionalModes,
  [ 'zeppelin', uniqListOfStrings(limit) ],
  [ null, uniqListOfBooleans(limit) ],
  [ {
    foo : true,
    bar : true,
  }, uniqListOfObjects(limit) ],
  [ 1, uniqListOfLists(limit) ],
  [ [ 1 ], uniqListOfLists(limit) ],
]

function applyBenchmark(fn, input){
  return fn(input[ 0 ], input[ 1 ])
}

const tests = [
  {
    label : 'Rambda',
    fn    : R.includes,
  },
  {
    label : 'Ramda',
    fn    : Ramda.includes,
  },
]

  tests,
  modes,
  applyBenchmark,
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#includes)

### indexBy

It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexBy)

### indexOf

It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexOf)

### init

```typescript

init<T extends unknown[]>(input: T): T extends readonly [...infer U, any] ? U : [...T]
```

It returns all but the last element of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(init('foo')).toEqual('fo')
  expect(init('f')).toEqual('')
  expect(init('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {init} from 'rambda'

describe('R.init', () => {
  it('with string', () => {
    const result = init('foo')

    result // $ExpectType string
  })
  it('with list - one type', () => {
    const result = init([1, 2, 3])

    result // $ExpectType number[]
  })
  it('with list - mixed types', () => {
    const result = init([1, 2, 3, 'foo', 'bar'])

    result // $ExpectType (string | number)[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 92.24% slower and Lodash is 13.3% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, 2, 3, 4 ]

const init = [
  {
    label : 'Rambda',
    fn    : () => {
      R.init(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.init(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.initial(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#init)

### intersection

It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

It adds a `separator` between members of `list`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersperse)

### is

It returns `true` if `x` is instance of `targetPrototype`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#is)

### isEmpty

```typescript

isEmpty<T>(x: T): boolean
```

It returns `true` if `x` is `empty`.

<details>

<summary>All Typescript definitions</summary>

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
import {isEmpty} from './isEmpty.js'

test('happy', () => {
  expect(isEmpty(undefined)).toBeFalse()
  expect(isEmpty('')).toBeTrue()
  expect(isEmpty(null)).toBeFalse()
  expect(isEmpty(' ')).toBeFalse()
  expect(isEmpty(new RegExp(''))).toBeFalse()
  expect(isEmpty([])).toBeTrue()
  expect(isEmpty([[]])).toBeFalse()
  expect(isEmpty({})).toBeTrue()
  expect(isEmpty({x: 0})).toBeFalse()
  expect(isEmpty(0)).toBeFalse()
  expect(isEmpty(NaN)).toBeFalse()
  expect(isEmpty([''])).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {isEmpty} from 'rambda'

describe('R.isEmpty', () => {
  it('happy', () => {
    const result = isEmpty('foo')
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 97.14% slower and Lodash is 54.99% slower</summary>

```text
const R = require('../../dist/rambda.js')

const isEmpty = [
  {
    label : 'Rambda',
    fn    : () => {
      R.isEmpty(undefined)
      R.isEmpty('')
      R.isEmpty(null)
      R.isEmpty(' ')
      R.isEmpty(new RegExp(''))
      R.isEmpty([])
      R.isEmpty([ [] ])
      R.isEmpty({})
      R.isEmpty({ x : 0 })
      R.isEmpty(0)
      R.isEmpty(NaN)
      R.isEmpty([ '' ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.isEmpty(undefined)
      Ramda.isEmpty('')
      Ramda.isEmpty(null)
      Ramda.isEmpty(' ')
      Ramda.isEmpty(new RegExp(''))
      Ramda.isEmpty([])
      Ramda.isEmpty([ [] ])
      Ramda.isEmpty({})
      Ramda.isEmpty({ x : 0 })
      Ramda.isEmpty(0)
      Ramda.isEmpty(NaN)
      Ramda.isEmpty([ '' ])
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.isEmpty(undefined)
      _.isEmpty('')
      _.isEmpty(null)
      _.isEmpty(' ')
      _.isEmpty(new RegExp(''))
      _.isEmpty([])
      _.isEmpty([ [] ])
      _.isEmpty({})
      _.isEmpty({ x : 0 })
      _.isEmpty(0)
      _.isEmpty(NaN)
      _.isEmpty([ '' ])
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isEmpty)

### isNil

```typescript

isNil(x: any): x is null | undefined
```

It returns `true` if `x` is either `null` or `undefined`.

<details>

<summary>All Typescript definitions</summary>

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

### join

```typescript

join<T>(glue: string, list: T[]): string
```

It returns a string of all `list` instances joined with a `glue`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(join('|')([ 'foo', 'bar', 'baz' ])).toEqual('foo|bar|baz')

  expect(join('|', [ 1, 2, 3 ])).toEqual('1|2|3')

  const spacer = join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toEqual('a 2 3.4')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {join} from 'rambda'

describe('R.join', () => {
  it('happy', () => {
    const result = join('|', [1, 2, 3])
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#join)

### juxt

```typescript

juxt<A extends any[], R1>(fns: [(...a: A) => R1]): (...a: A) => [R1]
```

It applies list of function to a list of inputs.

<details>

<summary>All Typescript definitions</summary>

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
import {juxt} from './juxt.js'

test('happy', () => {
  const fn = juxt([Math.min, Math.max, Math.min])
  const result = fn(3, 4, 9, -3)
  expect(result).toEqual([-3, 9, -3])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {juxt} from 'rambda'

describe('R.juxt', () => {
  it('happy', () => {
    const fn = juxt([Math.min, Math.max])
    const result = fn(3, 4, 9, -3)
    result // $ExpectType [number, number]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#juxt)

### keys

```typescript

keys<T extends object>(x: T): (keyof T)[]
```

It applies `Object.keys` over `x` and returns its keys.

<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {keys} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.keys', () => {
  it('happy', () => {
    const result = keys(obj)
    result // $ExpectType ("b" | "a")[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#keys)

### last

```typescript

last(str: string): string
```

It returns the last element of `input`, as the `input` can be either a string or an array.

<details>

<summary>All Typescript definitions</summary>

```typescript
last(str: string): string;
last(emptyList: []): undefined;
last<T extends any>(list: T[]): T | undefined;
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
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {last} from 'rambda'

describe('R.last', () => {
  it('string', () => {
    const result = last('foo')
    result // $ExpectType string
  })

  it('array', () => {
    const result = last([1, 2, 3])
    result // $ExpectType number | undefined
  })

  it('empty array - case 1', () => {
    const result = last([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = last(list)
    result // $ExpectType string | undefined
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 93.43% slower and Lodash is 5.28% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, 2, 3, 4 ]

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.last(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.last(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.last(list)
    },
  },
]
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

<details>

<summary>All Typescript definitions</summary>

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
  expect(lastIndexOf(NaN, [ NaN ])).toEqual(0)
})

test('will throw with bad input', () => {
  expect(lastIndexOfRamda([], true)).toEqual(-1)
  expect(() => indexOf([], true)).toThrow()
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)
  expect(lastIndexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
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
  expect(() => lastIndexOf('a', 'abc')).toThrowWithMessage(Error,
    'Cannot read property \'indexOf\' of abc')
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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lastIndexOf} from 'rambda'

const list = [1, 2, 3]

describe('R.lastIndexOf', () => {
  it('happy', () => {
    const result = lastIndexOf(2, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const result = lastIndexOf(2)(list)
    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 85.19%</summary>

```text
const R = require('../../dist/rambda.js')

const isEven = n => n % 2 === 0
const arr = [ 1, 3, 5, 7, 9, 11 ]

const lastIndexOf = [
  {
    label : 'Rambda',
    fn    : () => {
      R.lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
      R.lastIndexOf(1)([ 1, 2, 3, 1, 2 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
      Ramda.lastIndexOf(1)([ 1, 2, 3, 1, 2 ])
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lastIndexOf)

### length

```typescript

length<T>(input: T[]): number
```

It returns the `length` property of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(input: T[]): number;
```

</details>

<details>

<summary><strong>R.length</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'

export function length(x){
  if (_isArray(x)) return x.length
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
  expect(length('foo')).toEqual(3)
  expect(length([ 1, 2, 3 ])).toEqual(3)
  expect(length([])).toEqual(0)
})

test('with empty string', () => {
  expect(length('')).toEqual(0)
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

lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens
```

It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.

<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lens, assoc} from 'rambda'

interface Input {
  foo: string
}

describe('R.lens', () => {
  it('happy', () => {
    const fn = lens<Input, string, string>((x: Input) => {
      x.foo // $ExpectType string
      return x.foo
    }, assoc('name'))
    fn // $ExpectType Lens
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lens)

### lensIndex

```typescript

lensIndex(index: number): Lens
```

It returns a lens that focuses on specified `index`.

<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
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
  expect(view(lensIndex(10), testList)).toEqual(undefined)
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

  expect(view(composedLens, nestedList)).toEqual(10)
})

test('set s (get s) === s', () => {
  expect(set(
    lensIndex(0), view(lensIndex(0), testList), testList
  )).toEqual(testList)
})

test('get (set s v) === v', () => {
  expect(view(lensIndex(0), set(
    lensIndex(0), 0, testList
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensIndex(0),
    set(
      lensIndex(0), 11, set(
        lensIndex(0), 10, testList
      )
    ))).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {view, lensIndex} from 'rambda'

interface Input {
  a: number
}
const testList: Input[] = [{a: 1}, {a: 2}, {a: 3}]

describe('R.lensIndex', () => {
  it('happy', () => {
    const result = view<Input[], Input>(lensIndex(0), testList)
    result // $ExpectType Input
    result.a // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensIndex)

### lensPath

```typescript

lensPath(path: RamdaPath): Lens
```

It returns a lens that focuses on specified `path`.

<details>

<summary>All Typescript definitions</summary>

```typescript
lensPath(path: RamdaPath): Lens;
lensPath(path: string): Lens;
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
  expect(view(lensPath('d'), testObj)).toEqual(3)
  expect(view(lensPath('a.0.b'), testObj)).toEqual(1)
  // this is different to ramda, as ramda will return a clone of the input object
  expect(view(lensPath(''), testObj)).toEqual(undefined)
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
  )).toEqual(0)
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
  expect(view(composedLens, testObj)).toEqual(2)
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
  ))).toEqual(0)
  expect(view(lensPath([ 'a', 0, 'b' ]), set(
    lensPath([ 'a', 0, 'b' ]), 0, testObj
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  const p = [ 'd' ]
  const q = [ 'a', 0, 'b' ]
  expect(view(lensPath(p), set(
    lensPath(p), 11, set(
      lensPath(p), 10, testObj
    )
  ))).toEqual(11)
  expect(view(lensPath(q), set(
    lensPath(q), 11, set(
      lensPath(q), 10, testObj
    )
  ))).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lensPath, view} from 'rambda'

interface Input {
  foo: number[]
  bar: {
    a: string
    b: string
  }
}

const testObject: Input = {
  foo: [1, 2],
  bar: {
    a: 'x',
    b: 'y',
  },
}

const path = lensPath(['bar', 'a'])
const pathAsString = lensPath('bar.a')

describe('R.lensPath', () => {
  it('happy', () => {
    const result = view<Input, string>(path, testObject)
    result // $ExpectType string
  })
  it('using string as path input', () => {
    const result = view<Input, string>(pathAsString, testObject)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensPath)

### lensProp

```typescript

lensProp(prop: string): {
  <T, U>(obj: T): U
```

It returns a lens that focuses on specified property `prop`.

<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(prop: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};
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
  expect(view(lensProp('a'), testObj)).toEqual(1)
})

test('returns undefined if the specified property does not exist', () => {
  expect(view(lensProp('X'), testObj)).toEqual(undefined)
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

  expect(view(composedLens, nestedObj)).toEqual(1)
})

test('set s (get s) === s', () => {
  expect(set(
    lensProp('a'), view(lensProp('a'), testObj), testObj
  )).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensProp('a'), set(
    lensProp('a'), 0, testObj
  ))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(view(lensProp('a'),
    set(
      lensProp('a'), 11, set(
        lensProp('a'), 10, testObj
      )
    ))).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lensProp, view} from 'rambda'

interface Input {
  foo: string
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const lens = lensProp('foo')

describe('R.lensProp', () => {
  it('happy', () => {
    const result = view<Input, string>(lens, testObject)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensProp)

### map

```typescript

map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>
```

It returns the result of looping through `iterable` with `fn`.

It works with both array and object.

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'
import { _keys } from './_internals/_keys.js'

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
  let index = 0
  const keys = _keys(obj)
  const len = keys.length
  const willReturn = {}

  while (index < len){
    const key = keys[ index ]
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
    throw new Error('Incorrect iterable input')
  }

  if (_isArray(iterable)) return mapArray(fn, iterable)

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
  expect(() => map(double, null)).toThrowWithMessage(Error,
    'Incorrect iterable input')
  expect(() => map(double)(undefined)).toThrowWithMessage(Error,
    'Incorrect iterable input')
  expect(() => mapRamda(double, null)).toThrowWithMessage(TypeError,
    'Cannot read properties of null (reading \'fantasy-land/map\')')
  expect(() => mapRamda(double, undefined)).toThrowWithMessage(TypeError,
    'Cannot read properties of undefined (reading \'fantasy-land/map\')')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {map} from 'rambda'

describe('R.map with arrays', () => {
  it('iterable returns the same type as the input', () => {
    const result = map<number>(
      (x: number) => {
        x // $ExpectType number
        return x + 2
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('iterable returns the same type as the input - curried', () => {
    const result = map<number>((x: number) => {
      x // $ExpectType number
      return x + 2
    })([1, 2, 3])
    result // $ExpectType number[]
  })
  it('iterable returns different type as the input', () => {
    const result = map<number, string>(
      (x: number) => {
        x // $ExpectType number
        return String(x)
      },
      [1, 2, 3]
    )
    result // $ExpectType string[]
  })
})

describe('R.map with objects', () => {
  it('iterable with all three arguments - curried', () => {
    // It requires dummy third typing argument
    // in order to identify compared to curry typings for arrays
    // ============================================
    const result = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<string>
  })
  it('iterable with all three arguments', () => {
    const result = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with property argument', () => {
    const result = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with no property argument', () => {
    const result = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 86.6% slower and Lodash is 11.73% slower</summary>

```text
const R = require('../../dist/rambda.js')

const arr = [ 1, 2, 3, 4 ]
const fn = x => x * 2
const map = [
  {
    label : 'Rambda',
    fn    : () => {
      R.map(fn, arr)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.map(fn, arr)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.map(arr, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

### mapObjIndexed

It works the same way as `R.map` does for objects. It is added as Ramda also has this method.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObjIndexed)

### match

```typescript

match(regExpression: RegExp, str: string): string[]
```

Curried version of `String.prototype.match` which returns empty array, when there is no match.

<details>

<summary>All Typescript definitions</summary>

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
  }).toThrowWithMessage(TypeError,
    'Cannot read properties of null (reading \'match\')')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {match} from 'rambda'

const str = 'foo bar'

describe('R.match', () => {
  it('happy', () => {
    const result = match(/foo/, str)
    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = match(/foo/)(str)
    result // $ExpectType string[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 44.83%</summary>

```text
const R = require('../../dist/rambda.js')

const match = [
  {
    label : 'Rambda',
    fn    : () => {
      R.match(/a./g)('foo bar baz')
      R.match(/a./g, 'foo bar baz')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.match(/a./g)('foo bar baz')
      Ramda.match(/a./g, 'foo bar baz')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#match)

### mathMod

`R.mathMod` behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mathMod)

### max

It returns the greater value between `x` and `y`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#max)

### maxBy

It returns the greater value between `x` and `y` according to `compareFn` function.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

### mean

```typescript

mean(list: number[]): number
```

It returns the mean value of `list` input.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mean} from 'rambda'

describe('R.mean', () => {
  it('happy', () => {
    const result = mean([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mean)

### median

```typescript

median(list: number[]): number
```

It returns the median value of `list` input.

<details>

<summary>All Typescript definitions</summary>

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
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 2, 9 ])).toEqual(7)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {median} from 'rambda'

describe('R.median', () => {
  it('happy', () => {
    const result = median([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#median)

### merge

Same as `R.mergeRight`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#merge)

### mergeAll

```typescript

mergeAll<T>(list: object[]): T
```

It merges all objects of `list` array sequentially and returns the result.

<details>

<summary>All Typescript definitions</summary>

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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeAll} from 'rambda'

describe('R.mergeAll', () => {
  it('with passing type', () => {
    interface Output {
      foo: number
      bar: number
    }
    const result = mergeAll<Output>([{foo: 1}, {bar: 2}])
    result.foo // $ExpectType number
    result.bar // $ExpectType number
  })

  it('without passing type', () => {
    const result = mergeAll([{foo: 1}, {bar: 2}])
    result // $ExpectType unknown
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeAll)

### mergeDeepRight

```typescript

mergeDeepRight<Output>(target: object, newProps: object): Output
```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeDeepRight<Output>(target: object, newProps: object): Output;
mergeDeepRight<Output>(target: object): (newProps: object) => Output;
```

</details>

<details>

<summary><strong>R.mergeDeepRight</strong> source</summary>

```javascript
import { type } from './type.js'

export function mergeDeepRight(target, source){
  if (arguments.length === 1){
    return sourceHolder => mergeDeepRight(target, sourceHolder)
  }

  const willReturn = JSON.parse(JSON.stringify(target))

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

const slave = {
  name    : 'evilMe',
  age     : 10,
  contact : {
    a     : 1,
    email : 'foo@example.com',
  },
}
const master = {
  age     : 40,
  contact : { email : 'baz@example.com' },
  songs   : { title : 'Remains the same' },
}

test('happy', () => {
  const result = mergeDeepRight(slave, master)
  const curryResult = mergeDeepRight(slave)(master)
  const expected = {
    age     : 40,
    name    : 'evilMe',
    contact : {
      a     : 1,
      email : 'baz@example.com',
    },
    songs : { title : 'Remains the same' },
  }

  expect(result).toEqual(expected)
  expect(curryResult).toEqual(expected)
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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeDeepRight} from 'rambda'

interface Output {
  foo: {
    bar: number
  }
}

describe('R.mergeDeepRight', () => {
  const result = mergeDeepRight<Output>({foo: {bar: 1}}, {foo: {bar: 2}})
  result.foo.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeDeepRight)

### mergeLeft

```typescript

mergeLeft<Output>(newProps: object, target: object): Output
```

Same as `R.merge`, but in opposite direction.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeLeft} from 'rambda'

interface Output {
  foo: number
  bar: number
}

describe('R.mergeLeft', () => {
  const result = mergeLeft<Output>({foo: 1}, {bar: 2})
  const curriedResult = mergeLeft<Output>({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeLeft)

### mergeRight

It creates a copy of `target` object with overidden `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeRight)

### mergeWith

```typescript

mergeWith(fn: (x: any, z: any) => any, a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown>
```

It takes two objects and a function, which will be used when there is an overlap between the keys.

<details>

<summary>All Typescript definitions</summary>

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

function mergeWithFn(
  mergeFn, a, b
){
  const willReturn = {}

  Object.keys(a).forEach(key => {
    if (b[ key ] === undefined){
      willReturn[ key ] = a[ key ]
    } else {
      willReturn[ key ] = mergeFn(a[ key ], b[ key ])
    }
  })

  Object.keys(b).forEach(key => {
    if (willReturn[ key ] !== undefined) return

    if (a[ key ] === undefined){
      willReturn[ key ] = b[ key ]
    } else {
      willReturn[ key ] = mergeFn(a[ key ], b[ key ])
    }
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
import { mergeWith } from './mergeWith.js'

test('happy', () => {
  const result = mergeWith(
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
    values : [ 10, 20, 15, 35 ],
    b      : true,
  }
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {concat, mergeWith} from 'rambda'

interface Output {
  a: boolean,
  b: boolean,
  values: number[],
}
const A = {
  a: true,
  values: [10, 20],
}
const B = {
  b: true,
  values: [15, 35],
}

describe('R.mergeWith', () => {
  test('no curry | without explicit types', () => {
    const result = mergeWith(concat, A, B)
    result // $ExpectType Obj
  })
  test('no curry | with explicit types', () => {
    const result = mergeWith<Output>(concat, A, B)
    result // $ExpectType Output
  })
  test('curry 1 | without explicit types', () => {
    const result = mergeWith(concat, A)(B)
    result // $ExpectType Obj
  })
  test('curry 1 | with explicit types', () => {
    const result = mergeWith<Output>(concat, A)(B)
    result // $ExpectType Output
  })
  test('curry 2 | without explicit types', () => {
    const result = mergeWith(concat)(A, B)
    result // $ExpectType Obj
  })
  test('curry 2 | with explicit types', () => {
    const result = mergeWith<Output>(concat)(A, B)
    result // $ExpectType Output
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeWith)

### min

It returns the lesser value between `x` and `y`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#min)

### minBy

It returns the lesser value between `x` and `y` according to `compareFn` function.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

### modulo

Curried version of `x%y`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modulo)

### move

It returns a copy of `list` with exchanged `fromIndex` and `toIndex` elements.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#move)

### multiply

Curried version of `x*y`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#multiply)

### negate

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#negate)

### none

```typescript

none<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

<details>

<summary>All Typescript definitions</summary>

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
import {none} from './none.js'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [1, 3, 5, 7])).toBeTrue()
})

test('when false curried', () => {
  expect(none(input => input > 1, [1, 2, 3])).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {none} from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = none(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = none<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 96.48%</summary>

```text
const R = require('../../dist/rambda.js')

const isEven = n => n % 2 === 0
const arr = [ 1, 3, 5, 7, 9, 11 ]

const none = [
  {
    label : 'Rambda',
    fn    : () => {
      R.none(isEven, arr)
      R.none(isEven)(arr)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.none(isEven, arr)
      Ramda.none(isEven)(arr)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#none)

### not

```typescript

not(input: any): boolean
```

It returns a boolean negated version of `input`.

<details>

<summary>All Typescript definitions</summary>

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
import {not} from './not.js'

test('not', () => {
  expect(not(false)).toBeTrue()
  expect(not(true)).toBeFalse()
  expect(not(0)).toBeTrue()
  expect(not(1)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {not} from 'rambda'

describe('R.not', () => {
  it('happy', () => {
    const result = not(4)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#not)

### nth

```typescript

nth(index: number, input: string): string
```

Curried version of `input[index]`.

<details>

<summary>All Typescript definitions</summary>

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
  expect(nth(2, [ 1, 2, 3, 4 ])).toEqual(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toEqual(3)
})

test('with string and correct index', () => {
  expect(nth(2)('foo')).toEqual('o')
})

test('with string and invalid index', () => {
  expect(nth(20)('foo')).toEqual('')
})

test('with negative index', () => {
  expect(nth(-3)([ 1, 2, 3, 4 ])).toEqual(2)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {nth} from 'rambda'

const list = [1, 2, 3]

describe('R.nth', () => {
  it('happy', () => {
    const result = nth(4, list)

    result // $ExpectType number | undefined
        })
  it('curried', () => {
    const result = nth(1)(list)

    result // $ExpectType number | undefined
  })
})

describe('R.nth - string', () => {
  const str = 'abc'
  it('happy', () => {
    const result = nth(4, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = nth(1)(str)

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#nth)

### objOf

It creates an object with a single key-value pair.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objOf)

### of

```typescript

of<T>(x: T): T[]
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {of} from 'ramda'

const list = [1, 2, 3]

describe('R.of', () => {
  it('happy', () => {
    const result = of(4)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = of(list)

    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#of)

### omit

```typescript

omit<T, K extends string>(propsToOmit: K[], obj: T): Omit<T, K>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

<details>

<summary>All Typescript definitions</summary>

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

export function omit(propsToOmit, obj){
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const propsToOmitValue = createPath(propsToOmit, ',')
  const willReturn = {}

  for (const key in obj){
    if (!propsToOmitValue.includes(key)){
      willReturn[ key ] = obj[ key ]
    }
  }

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

test('with null', () => {
  expect(omit('a,b', null)).toEqual(undefined)
})

test('doesn\'t work with number as property', () => {
  expect(omit([ 42 ], {
    a  : 1,
    42 : 2,
  })).toEqual({
    42 : 2,
    a  : 1,
  })
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {omit} from 'rambda'

describe('R.omit with array as props input', () => {
  it('allow Typescript to infer object type', () => {
    const input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })

  it('declare type of input object', () => {
    interface Input {
      a: string
      b: number
      c: number
      d: number
    }
    const input: Input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)
    result // $ExpectType Omit<Input, "b,c">

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })
})

describe('R.omit with string as props input', () => {
  interface Output {
    b: number
    d: number
  }

  it('explicitly declare output', () => {
    const result = omit<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.b // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    interface Input {
      a: number
      b: number
      c: number
      d: number
    }
    const result = omit<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Input, Output>('a,c')({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    })

    curriedResult.b // $ExpectType number
  })

  it('without passing type', () => {
    const result = omit('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 69.95% slower and Lodash is 97.34% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const toOmit = [ 'a', 'c' ]
const omit = [
  {
    label : 'Rambda',
    fn    : () => {
      R.omit(toOmit, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.omit(toOmit, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.omit(obj, toOmit)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### on

It passes the two inputs through `unaryFn` and then the results are passed as inputs the the `binaryFn` to receive the final result(`binaryFn(unaryFn(FIRST_INPUT), unaryFn(SECOND_INPUT))`). 

This method is also known as P combinator.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#on)

### once

```typescript

once<T extends (...args: any[]) => any>(func: T): T
```

It returns a function, which invokes only once `fn` function.

<details>

<summary>All Typescript definitions</summary>

```typescript
once<T extends (...args: any[]) => any>(func: T): T;
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
  expect(runOnce(1)).toEqual(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toEqual(1)
})

test('happy path', () => {
  const addOneOnce = once((
    a, b, c
  ) => a + b + c, 1)

  expect(addOneOnce(
    10, 20, 30
  )).toBe(60)
  expect(addOneOnce(40)).toEqual(60)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {once} from 'rambda'

describe('R.once', () => {
  it('happy', () => {
    const runOnce = once((x: number) => {
      return x + 2
    })

    const result = runOnce(1)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#once)

### or

Logical OR

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#or)

### over

```typescript

over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

<details>

<summary>All Typescript definitions</summary>

```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
over<T>(lens: Lens, fn: Arity1Fn, value: T[]): T[];
over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
over(lens: Lens, fn: Arity1Fn): <T>(value: T[]) => T[];
over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
over(lens: Lens): <T>(fn: Arity1Fn, value: T[]) => T[];
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

<details>

<summary>Rambda is faster than Ramda with 56.23%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = { a : 1 }

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.over(
        R.lensProp('a'), R.inc, testObj
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.over(
        Ramda.lensProp('a'), Ramda.inc, testObj
      )
    },
  },
]
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

<details>

<summary>All Typescript definitions</summary>

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1, V2]): (x2: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1]): (x2: V2, x3: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0]): (x1: V1, x2: V2, x3: V3) => T;
partial<T>(fn: (...a: any[]) => T, args: any[]): (...x: any[]) => T;
```

</details>

<details>

<summary><strong>R.partial</strong> source</summary>

```javascript
export function partial(fn, ...args){
  const len = fn.length

  return (...rest) => {
    if (args.length + rest.length >= len){
      return fn(...args, ...rest)
    }

    return partial(fn, ...[ ...args, ...rest ])
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
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

test('happy', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')
  const sayHello = partial(greet, [ 'Hello' ])
  const sayHelloRamda = partial(sayHello, [ 'Ms.' ])

  expect(type(fn)).toBe('Function')

  expect(fn('bar')).toBe('Hello, Ms. foo bar!')
  expect(sayHelloRamda('foo', 'bar')).toBe('Hello, Ms. foo bar!')
})

test('extra arguments are ignored', () => {
  const canPassAnyNumberOfArguments = partial(
    greet, 'Hello', 'Ms.'
  )
  const fn = canPassAnyNumberOfArguments('foo')

  expect(type(fn)).toBe('Function')

  expect(fn(
    'bar', 1, 2
  )).toBe('Hello, Ms. foo bar!')
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

  expect(sayHelloToMs('Jane', 'Jones')).toBe('Hello, Ms. Jane Jones!')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {partial} from 'rambda'

describe('R.partial', () => {
  it('happy', () => {
    function greet(
      salutation: string,
      title: string,
      firstName: string,
      lastName: string
    ) {
      return `${salutation}, ${title} ${firstName} ${lastName}!`
    }

    const sayHello = partial(greet, ['Hello'])
    const sayHelloToMs = partial(sayHello, ['Ms.'])
    const result = sayHelloToMs('Jane', 'Jones')
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partial)

### partialObject

```typescript

partialObject<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output
```

`R.partialObject` is a curry helper designed specifically for functions accepting object as a single argument.

Initially the function knows only a part from the whole input object and then `R.partialObject` helps in preparing the function for the second part, when it receives the rest of the input.

<details>

<summary>All Typescript definitions</summary>

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
import { type } from './type.js'

export function partialObject(fn, input){
  return rest => {
    if (type(fn) === 'Async'){
      return new Promise((resolve, reject) => {
        fn(mergeDeepRight(rest, input)).then(resolve)
          .catch(reject)
      })
    }

    return fn(mergeDeepRight(rest, input))
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {delay} from './delay.js'
import {partialObject} from './partialObject.js'
import {type} from './type.js'

test('with plain function', () => {
  const fn = ({a, b, c}) => a + b + c
  const curried = partialObject(fn, {a: 1})

  expect(type(curried)).toEqual('Function')
  expect(
    curried({
      b: 2,
      c: 3,
    })
  ).toEqual(6)
})

test('with function that throws an error', () => {
  const fn = ({a, b, c}) => {
    throw new Error('foo')
  }
  const curried = partialObject(fn, {a: 1})

  expect(type(curried)).toEqual('Function')
  expect(() =>
    curried({
      b: 2,
      c: 3,
    })
  ).toThrowWithMessage(Error, 'foo')
})

test('with async', async () => {
  const fn = async ({a, b, c}) => {
    await delay(100)

    return a + b + c
  }

  const curried = partialObject(fn, {a: 1})

  const result = await curried({
    b: 2,
    c: 3,
  })

  expect(result).toEqual(6)
})

test('async function throwing an error', async () => {
  const fn = async ({a, b, c}) => {
    await delay(100)
    throw new Error('foo')
  }

  const curried = partialObject(fn, {a: 1})

  try {
    await curried({
      b: 2,
      c: 3,
    })
    expect(true).toBeFalsy()
  } catch (e) {
    expect(e.message).toBe('foo')
  }
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {partialObject, delay} from 'rambda'

describe('R.partialObject', () => {
  it('happy', () => {
    interface Input {
      a: number,
      b: number,
      c: string,
    }
    const fn = ({a, b, c}: Input) => a + b + c
    const curried = partialObject(fn, {a: 1})
    const result = curried({
      b: 2,
      c: 'foo',
    })
    result // $ExpectType string
  })
  it('asynchronous', async() => {
    interface Input {
      a: number,
      b: number,
      c: string,
    }
    const fn = async({a, b, c}: Input) => {
      await delay(100)
      return a + b + c
    }
    const curried = partialObject(fn, {a: 1})
    const result = await curried({
      b: 2,
      c: 'foo',
    })
    result // $ExpectType string
  })
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

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'

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
  if (!_isArray(iterable)) return partitionObject(predicate, iterable)

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {partition} from 'rambda'

describe('R.partition', () => {
  it('with array', () => {
    const predicate = (x: number) => {
      return x > 2
    }
    const list = [1, 2, 3, 4]

    const result = partition(predicate, list)
    const curriedResult = partition(predicate)(list)
    result // $ExpectType [number[], number[]]
    curriedResult // $ExpectType [number[], number[]]
  })

  /*
    TODO
    revert to old version of `dtslint` and `R.partition` typing
    as there is diff between VSCode types(correct) and dtslint(incorrect)
    
    it('with object', () => {
      const predicate = (value: number, prop?: string) => {
        return value > 2
      }
      const hash = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      }
  
      const result = partition(predicate, hash)
      const curriedResult = partition(predicate)(hash)
      result[0] // $xExpectType { [key: string]: number; }
      result[1] // $xExpectType { [key: string]: number; }
      curriedResult[0] // $xExpectType { [key: string]: number; }
      curriedResult[1] // $xExpectType { [key: string]: number; }
    })
    */
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### path

```typescript

path<Input, T>(pathToSearch: Path, obj: Input): T | undefined
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: Path, obj: Input): T | undefined;
path<T>(pathToSearch: Path, obj: any): T | undefined;
path<T>(pathToSearch: Path): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: Path): (obj: Input) => T | undefined;
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function path(pathInput, obj){
  if (arguments.length === 1) return _obj => path(pathInput, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
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
  expect(path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')
})

test('path', () => {
  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toBeUndefined()

  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })).toBeUndefined()
})

test('null is not a valid path', () => {
  expect(path('audio_tracks', {
    a            : 1,
    audio_tracks : null,
  })).toBeUndefined()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {path} from 'rambda'

interface Input {
  a: number
  b: {
    c: boolean
  }
}

describe('R.path', () => {
  it('without specified input type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path<boolean>('a.b.c', input)
    const curriedResult = path<boolean>('a.b.c')(input)
    result // $ExpectType boolean | undefined
    curriedResult // $ExpectType boolean | undefined
  })

  it('without specified output type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path('a.b.c', input)
    result // $ExpectType unknown
  })

  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>('a.b.c', input)
    const resultB = path<boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>(['a', 'b', 'c'], input)
    const resultB = path<boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})

describe('path with specified input', () => {
  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    // const wrongInput = { a: 1, b: true }
    // const resultA = path<Input, boolean>('a.b.c', wrongInput)
    const resultA = path<Input, boolean>('a.b.c', input)
    const resultB = path<Input, boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<Input, boolean>(['a', 'b', 'c'], input)
    const resultB = path<Input, boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 37.81% slower and Ramda is 77.81% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = { a : { b : 2 } }
const pathInput = [ 'a', 'b' ]

const path = [
  {
    label : 'Rambda',
    fn    : () => {
      R.path(pathInput, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.path(pathInput, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.get(obj, pathInput)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#path)

### pathEq

```typescript

pathEq(pathToSearch: Path, target: any, input: any): boolean
```

It returns `true` if `pathToSearch` of `input` object is equal to `target` value.

`pathToSearch` is passed to `R.path`, which means that it can be either a string or an array. Also equality between `target` and the found value is determined by `R.equals`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pathEq} from 'rambda'

describe('R.pathEq', () => {
  it('with string path', () => {
    const pathToSearch = 'a.b.c'
    const input = {a: {b: {c: 1}}}
    const target = {c: 1}

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })

  it('with array path', () => {
    const pathToSearch = ['a', 'b', 'c']
    const input = {a: {b: {c: 1}}}
    const target = {c: 1}

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})

describe('with ramda specs', () => {
  const testPath = ['x', 0, 'y']
  const testObj = {
    x: [
      {y: 2, z: 3},
      {y: 4, z: 5},
    ],
  }

  const result1 = pathEq(testPath, 2, testObj)
  const result2 = pathEq(testPath, 2)(testObj)
  const result3 = pathEq(testPath)(2)(testObj)
  result1 // $ExpectType boolean
  result2 // $ExpectType boolean
  result3 // $ExpectType boolean
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathEq)

### pathOr

```typescript

pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```

It reads `obj` input and returns either `R.path(pathToSearch, Record<string, unknown>)` result or `defaultValue` input.

<details>

<summary>All Typescript definitions</summary>

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

  expect(result).toEqual(1)
})

test('with null', () => {
  const result = pathOr(
    'foo', 'x.y', null
  )

  expect(result).toEqual('foo')
})

test('with NaN', () => {
  const result = pathOr(
    'foo', 'x.y', NaN
  )

  expect(result).toEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pathOr} from 'rambda'

describe('R.pathOr', () => {
  it('with string path', () => {
    const x = pathOr<string>('foo', 'x.y', {x: {y: 'bar'}})
    x // $ExpectType string
  })
  it('with array path', () => {
    const x = pathOr<string>('foo', ['x', 'y'], {x: {y: 'bar'}})
    x // $ExpectType string
  })
  it('without passing type looks bad', () => {
    const x = pathOr('foo', 'x.y', {x: {y: 'bar'}})
    x // $ExpectType "foo"
  })
  it('curried', () => {
    const x = pathOr<string>('foo', 'x.y')({x: {y: 'bar'}})
    x // $ExpectType string
  })
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

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {paths} from 'rambda'

interface Input {
  a: number
  b: number
  c: number
}

const input: Input = {a: 1, b: 2, c: 3}

describe('R.paths', () => {
  it('with dot notation', () => {
    const result = paths<number>(['a.b.c', 'foo.bar'], input)
    result // $ExpectType (number | undefined)[]
  })

  it('without type', () => {
    const result = paths(['a.b.c', 'foo.bar'], input)
    result // $ExpectType unknown[]
  })

  it('with array as path', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']], input)
    result // $ExpectType (number | undefined)[]
  })

  it('curried', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']])(input)
    result // $ExpectType (number | undefined)[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#paths)

### pick

```typescript

pick<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

<details>

<summary>All Typescript definitions</summary>

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

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
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
    Object {
      Symbol(s): "a",
    }
  `)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pick} from 'rambda'

const input = {a: 'foo', b: 2, c: 3, d: 4}

describe('R.pick with array as props input', () => {
  it('without passing type', () => {
    const result = pick(['a', 'c'], input)
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
})

describe('R.pick with string as props input', () => {
  interface Input {
    a: string
    b: number
    c: number
    d: number
  }
  interface Output {
    a: string
    c: number
  }
  it('explicitly declare output', () => {
    const result = pick<Output>('a,c', input)
    result // $ExpectType Output
    result.a // $ExpectType string
    result.c // $ExpectType number

    const curriedResult = pick<Output>('a,c')(input)

    curriedResult.a // $ExpectType string
  })

  it('explicitly declare input and output', () => {
    const result = pick<Input, Output>('a,c', input)
    result // $ExpectType Output
    result.a // $ExpectType string

    const curriedResult = pick<Input, Output>('a,c')(input)

    curriedResult.a // $ExpectType string
  })

  it('without passing type', () => {
    const result = pick('a,c', input)
    result // $ExpectType unknown
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 19.07% slower and Lodash is 80.2% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const pickInput = [ 'a', 'c' ]
const pick = [
  {
    label : 'Rambda',
    fn    : () => {
      R.pick(pickInput, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.pick(pickInput, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.pick(obj, pickInput)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pick)

### pickAll

```typescript

pickAll<T, U>(propsToPick: string[], input: T): U
```

Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.

<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: string[], input: T): U;
pickAll<T, U>(propsToPick: string[]): (input: T) => U;
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
  expect(pickAll('a', null)).toBe(undefined)
  expect(pickAll('a', undefined)).toBe(undefined)
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pickAll} from 'rambda'

interface Input {
  a: string
  b: number
  c: number
  d: number
}
interface Output {
  a?: string
  c?: number
}
const input = {a: 'foo', b: 2, c: 3, d: 4}

describe('R.pickAll with array as props input', () => {
  it('without passing type', () => {
    const result = pickAll(['a', 'c'], input)
    result // $ExpectType unknown
  })
  it('without passing type + curry', () => {
    const result = pickAll(['a', 'c'])(input)
    result // $ExpectType unknown
  })
  it('explicitly passing types', () => {
    const result = pickAll<Input, Output>(['a', 'c'], input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
  it('explicitly passing types + curry', () => {
    const result = pickAll<Input, Output>(['a', 'c'])(input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
})

describe('R.pickAll with string as props input', () => {
  it('without passing type', () => {
    const result = pickAll('a,c', input)
    result // $ExpectType unknown
  })
  it('without passing type + curry', () => {
    const result = pickAll('a,c')(input)
    result // $ExpectType unknown
  })
  it('explicitly passing types', () => {
    const result = pickAll<Input, Output>('a,c', input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
  it('explicitly passing types + curry', () => {
    const result = pickAll<Input, Output>('a,c')(input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pickAll)

### pipe

It performs left-to-right function composition.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pluck

```typescript

pluck<K extends keyof T, T>(property: K, list: T[]): T[K][]
```

It returns list of the values of `property` taken from the all objects inside `list`.

<details>

<summary>All Typescript definitions</summary>

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

test('with number', () => {
  const input = [
    [ 1, 2 ],
    [ 3, 4 ],
  ]

  expect(pluck(0, input)).toEqual([ 1, 3 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pluck} from 'rambda'

describe('R.pluck', () => {
  it('with object', () => {
    interface ListMember {
      a: number
      b: string
    }
    const input: ListMember[] = [
      {a: 1, b: 'foo'},
      {a: 2, b: 'bar'},
    ]
    const resultA = pluck('a', input)
    const resultB = pluck('b')(input)
    resultA // $ExpectType number[]
    resultB // $ExpectType string[]
  })

  it('with array', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const result = pluck(0, input)
    const resultCurry = pluck(0)(input)
    result // $ExpectType number[]
    resultCurry // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pluck)

### prepend

```typescript

prepend<T>(x: T, input: T[]): T[]
```

It adds element `x` at the beginning of `list`.

<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, input: T[]): T[];
prepend<T>(x: T): (input: T[]) => T[];
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {prepend} from 'rambda'

const list = [1, 2, 3]

describe('R.prepend', () => {
  it('happy', () => {
    const result = prepend(4, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = prepend(4)(list)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prepend)

### product

```typescript

product(list: number[]): number
```

<details>

<summary>All Typescript definitions</summary>

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
  expect(product([ 2, 3, 4 ])).toEqual(24)
})

test('bad input', () => {
  expect(product([ null ])).toEqual(0)
  expect(product([])).toEqual(1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {product} from 'rambda'

describe('R.product', () => {
  it('happy', () => {
    const result = product([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#product)

### prop

```typescript

prop<P extends keyof O, O>(propToFind: P, obj: O): O[P]
```

It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

<details>

<summary>All Typescript definitions</summary>

```typescript
prop<P extends keyof O, O>(propToFind: P, obj: O): O[P];
prop<P extends keyof O, O>(propToFind: P): (obj: O) => O[P];
prop<P extends string | number>(propToFind: P): <T>(obj: Record<P, T>) => T;
prop<P extends string | number, T>(propToFind: P): (obj: Record<P, T>) => T;
```

</details>

<details>

<summary><strong>R.prop</strong> source</summary>

```javascript
export function prop(propToFind, obj){
  if (arguments.length === 1) return _obj => prop(propToFind, _obj)

  if (!obj) return undefined

  return obj[ propToFind ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prop } from './prop.js'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toEqual('baz')

  expect(prop('bar')({ foo : 'baz' })).toEqual(undefined)

  expect(prop('bar')(null)).toEqual(undefined)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pipe, prop} from 'rambda'

describe('R.prop', () => {
  const obj = {a: 1, b: 'foo'}
  type Something = {a?: number, b?: string}

  it('issue #553', () => {
    const result = prop('e', {e: 'test1', d: 'test2'})
    const curriedResult = prop<string>('e')({e: 'test1', d: 'test2'})

    result // $ExpectType string
    curriedResult // $ExpectType string
  })
  it('happy', () => {
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

    result // $ExpectType string
  })
  it('curried with explicit object type', () => {
    const result = prop<'a', Something>('a')(obj)

    result // $ExpectType number | undefined
  })
  it('curried with implicit object type', () => {
    const result = pipe((value) => value as Something, prop('b'))(obj)

    result // $ExpectType string | undefined
  })
  it('curried with explicit result type', () => {
    const result = prop<'b', string>('b')(obj)

    result // $ExpectType string
  })
})

describe('with number as prop', () => {
  const list = [1, 2, 3]
  const index = 1
  it('happy', () => {
    const result = prop(index, list)

    result // $ExpectType number
  })
  it('curried require explicit type', () => {
    const result = prop<number>(index)(list)

    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 87.95%</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a : { c : 2 },
  b : 1,
}
const propInput = 'b'

const prop = [
  {
    label : 'Rambda',
    fn    : () => {
      R.prop(propInput, obj)
      R.prop(propInput)(obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.prop(propInput, obj)
      Ramda.prop(propInput)(obj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prop)

### propEq

```typescript

propEq<K extends string | number>(propToFind: K, valueToMatch: any, obj: Record<K, any>): boolean
```

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<K extends string | number>(propToFind: K, valueToMatch: any, obj: Record<K, any>): boolean;
propEq<K extends string | number>(propToFind: K, valueToMatch: any): (obj: Record<K, any>) => boolean;
propEq<K extends string | number>(propToFind: K): {
  (valueToMatch: any, obj: Record<K, any>): boolean;
  (valueToMatch: any): (obj: Record<K, any>) => boolean;
};
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { curry } from './curry.js'

function propEqFn(
  propToFind, valueToMatch, obj
){
  if (!obj) return false

  return obj[ propToFind ] === valueToMatch
}

export const propEq = curry(propEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propEq } from './propEq.js'

test('happy', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTrue()
  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq(
    'foo', 'bar', null
  )).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = {[property]: value}
const objWithNumberIndex = {[numberProperty]: value}

describe('R.propEq', () => {
  it('happy', () => {
    const result = propEq(property, value, obj)
    result // $ExpectType boolean
  })

  it('number is property', () => {
    const result = propEq(1, value, objWithNumberIndex)
    result // $ExpectType boolean
  })

  it('with optional property', () => {
    interface MyType {
      optional?: string | number
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    // $ExpectError
    propEq('optional', valueToFind, myObject)

    // $ExpectError
    propEq('optional', valueToFind, myObject)
  })

  it('imported from @types/ramda', () => {
    interface A {
      foo: string | null
    }
    const obj: A = {
      foo: 'bar',
    }
    const value = ''
    const result = propEq('foo', value)(obj)
    result // $ExpectType boolean

    // $ExpectError
    propEq('bar', value)(obj)
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 91.92%</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a : { c : 2 },
  b : 1,
}
const propInput = 'b'
const expected = { c : 2 }

const propEq = [
  {
    label : 'Rambda',
    fn    : () => {
      R.propEq('a')(expected)(obj)

      R.propEq('a', expected)(obj)

      R.propEq(
        'a', expected, obj
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.propEq('a')(expected)(obj)

      Ramda.propEq('a', expected)(obj)

      Ramda.propEq(
        'a', expected, obj
      )
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propIs

```typescript

propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>
```

It returns `true` if `property` of `obj` is from `target` type.

<details>

<summary>All Typescript definitions</summary>

```typescript
propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>;
propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, InstanceType<C>>;
propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
propIs<C extends (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, ReturnType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
};
propIs<C extends new (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, InstanceType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propIs} from 'rambda'

const property = 'a'
const obj = {a: 1}

describe('R.propIs', () => {
  it('happy', () => {
    const result = propIs(Number, property, obj)
    result // $ExpectType boolean
  })

  it('curried', () => {
    const result = propIs(Number, property)(obj)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propIs)

### propOr

```typescript

propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T
```

It returns either `defaultValue` or the value of `property` in `obj`.

<details>

<summary>All Typescript definitions</summary>

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
  )).toEqual(1)
  expect(propOr(
    'default', 'notExist', obj
  )).toEqual('default')
  expect(propOr(
    'default', 'notExist', null
  )).toEqual('default')
})

test('propOr (currying)', () => {
  const obj = { a : 1 }
  expect(propOr('default')('a', obj)).toEqual(1)
  expect(propOr('default', 'a')(obj)).toEqual(1)
  expect(propOr('default')('notExist', obj)).toEqual('default')
  expect(propOr('default', 'notExist')(obj)).toEqual('default')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propOr} from 'rambda'

const obj = {foo: 'bar'}
const property = 'foo'
const fallback = 'fallback'

describe('R.propOr', () => {
  it('happy', () => {
    const result = propOr(fallback, property, obj)
    result // $ExpectType string
  })
  it('curry 1', () => {
    const result = propOr(fallback)(property, obj)
    result // $ExpectType string
  })
  it('curry 2', () => {
    const result = propOr(fallback, property)(obj)
    result // $ExpectType string
  })
  it('curry 3', () => {
    const result = propOr(fallback)(property)(obj)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propOr)

### props

```typescript

props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[]
```

It takes list with properties `propsToPick` and returns a list with property values in `obj`.

<details>

<summary>All Typescript definitions</summary>

```typescript
props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[];
props<P extends string>(propsToPick: P[]): <T>(obj: Record<P, T>) => T[];
props<P extends string, T>(propsToPick: P[]): (obj: Record<P, T>) => T[];
```

</details>

<details>

<summary><strong>R.props</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { mapArray } from './map.js'

export function props(propsToPick, obj){
  if (arguments.length === 1){
    return _obj => props(propsToPick, _obj)
  }
  if (!_isArray(propsToPick)){
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
  expect(() => props(null)(obj)).toThrow()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {props} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.props', () => {
  it('happy', () => {
    const result = props(['a', 'b'], obj)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = props(['a', 'b'])(obj)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#props)

### propSatisfies

```typescript

propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<string, T>): boolean
```

It returns `true` if the object property satisfies a given predicate.

<details>

<summary>All Typescript definitions</summary>

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
import {propSatisfies} from './propSatisfies'

const obj = {a: 1}

test('when true', () => {
  expect(propSatisfies(x => x > 0, 'a', obj)).toBeTrue()
})

test('when false', () => {
  expect(propSatisfies(x => x < 0, 'a')(obj)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propSatisfies} from 'rambda'

const obj = {a: 1}

describe('R.propSatisfies', () => {
  it('happy', () => {
    const result = propSatisfies(x => x > 0, 'a', obj)

    result // $ExpectType boolean
  })
  it('curried requires explicit type', () => {
    const result = propSatisfies<number>(x => x > 0, 'a')(obj)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propSatisfies)

### range

```typescript

range(startInclusive: number, endExclusive: number): number[]
```

It returns list of numbers between `startInclusive` to `endExclusive` markers.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {range} from 'rambda'

describe('R.range', () => {
  it('happy', () => {
    const result = range(1, 4)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = range(1)(4)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 61.8% slower and Lodash is 57.44% slower</summary>

```text
const R = require('../../dist/rambda.js')

const start = 12
const end = 22
const range = [
  {
    label : 'Rambda',
    fn    : () => {
      R.range(start, end)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.range(start, end)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.range(start, end)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#range)

### reduce

```typescript

reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult
```

<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: T[]) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: T[]) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { _keys } from './_internals/_keys.js'
import { curry } from './curry.js'

export function reduceFn(
  reducer, acc, list
){
  if (!_isArray(list)){
    throw new TypeError('reduce: list must be array or iterable')
  }
  let index = 0
  const len = list.length

  while (index < len){
    acc = reducer(
      acc, list[ index ], index, list
    )
    index++
  }

  return acc
}

export const reduce = curry(reduceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reduce } from './reduce.js'

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
  )).toEqual(7)
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
    reducer, 0, null
  )).toThrowWithMessage(TypeError, ERROR)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reduce} from 'rambda'

describe('R.reduce', () => {
  it('happy', () => {
    const result = reduce<number, number>(
      (acc, elem) => {
        acc // $ExpectType number
        elem // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('with two types', () => {
    const result = reduce<number, string>(
      (acc, elem) => {
        acc // $ExpectType string
        elem // $ExpectType number

        return `${acc}${elem}`
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })

  it('with index', () => {
    const result = reduce<number, number>(
      (acc, elem, i) => {
        acc // $ExpectType number
        elem // $ExpectType number
        i // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with index', () => {
    const result = reduce(
      (acc, val, i) => {
        acc // $ExpectType number
        i // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with two types', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType string
        return acc + val
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 60.48% slower and Ramda is 77.1% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = (acc, value) => acc + value
const holder = [ 1, 2, 3 ]
const acc = ''

const reduce = [
  {
    label : 'Rambda',
    fn    : () => {
      R.reduce(
        fn, acc, holder
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.reduce(
        fn, acc, holder
      )
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.reduce(
        holder, fn, acc
      )
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduce)

### reject

```typescript

reject<T>(predicate: Predicate<T>, list: T[]): T[]
```

It has the opposite effect of `R.filter`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reject} from 'rambda'

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number
        return x > 1
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = reject<number>(x => {
      x // $ExpectType number
      return x > 1
    })([1, 2, 3])
    result // $ExpectType number[]
  })
})

describe('R.reject with objects', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number

        return x > 1
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('curried require dummy type', () => {
    const result = reject<number, any>(x => {
      return x > 1
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reject)

### repeat

```typescript

repeat<T>(x: T): (timesToRepeat: number) => T[]
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {repeat} from 'rambda'

describe('R.repeat', () => {
  it('happy', () => {
    const result = repeat(4, 7)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = repeat(4)(7)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 48.57% slower and Ramda is 68.98% slower</summary>

```text
const R = require('../../dist/rambda.js')

const num = 10
const str = 'foo'

const repeat = [
  {
    label : 'Rambda',
    fn    : () => {
      R.repeat(str, num)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.repeat(str, num)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.repeat(str, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#repeat)

### replace

```typescript

replace(strOrRegex: RegExp | string, replacer: string, str: string): string
```

It replaces `strOrRegex` found in `str` with `replacer`.

<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
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
    'foo', 'yes', 'foo bar baz'
  )).toEqual('yes bar baz')
})

test('1', () => {
  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
})

test('2', () => {
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
})

test('3', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {replace} from 'rambda'

const str = 'foo bar foo'
const replacer = 'bar'

describe('R.replace', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer, str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer, str)

    result // $ExpectType string
  })
})

describe('R.replace - curried', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer)(str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 33.45% slower and Ramda is 33.99% slower</summary>

```text
const R = require('../../dist/rambda.js')

const replace = [
  {
    label : 'Rambda',
    fn    : () => {
      R.replace(
        /\s/g, '|', 'foo bar baz'
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.replace(
        /\s/g, '|', 'foo bar baz'
      )
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.replace(
        'foo bar baz', /\s/g, '|'
      )
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replace)

### reverse

```typescript

reverse<T>(input: T[]): T[]
```

It returns a reversed copy of list or string `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(input: T[]): T[];
reverse(input: string): string;
```

</details>

<details>

<summary><strong>R.reverse</strong> source</summary>

```javascript
export function reverse(listOrString){
  if (typeof listOrString === 'string'){
    return listOrString.split('').reverse()
      .join('')
  }

  const clone = listOrString.slice()

  return clone.reverse()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reverse } from './reverse.js'

test('happy', () => {
  expect(reverse([ 1, 2, 3 ])).toEqual([ 3, 2, 1 ])
})

test('with string', () => {
  expect(reverse('baz')).toEqual('zab')
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(reverse(arr)).toEqual([ 3, 2, 1 ])

  expect(arr).toEqual([ 1, 2, 3 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reverse} from 'rambda'

const list = [1, 2, 3, 4, 5]

describe('R.reverse', () => {
  it('happy', () => {
    const result = reverse(list)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reverse)

### set

```typescript

set<T, U>(lens: Lens, replacer: U, obj: T): T
```

It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.

<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T;
set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(replacer: U, obj: T) => T;
```

</details>

<details>

<summary><strong>R.set</strong> source</summary>

```javascript
import { always } from './always.js'
import { curry } from './curry.js'
import { over } from './over.js'

function setFn(
  lens, replacer, x
){
  return over(
    lens, always(replacer), x
  )
}

export const set = curry(setFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc.js'
import { lens } from './lens.js'
import { lensIndex } from './lensIndex.js'
import { lensPath } from './lensPath.js'
import { prop } from './prop.js'
import { set } from './set.js'

const testObject = {
  foo : 'bar',
  baz : {
    a : 'x',
    b : 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = set(
    assocLens, 'FOO', testObject
  )
  const expected = {
    ...testObject,
    foo : 'FOO',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = set(
    pathLens, 'z', testObject
  )
  const expected = {
    ...testObject,
    baz : {
      a : 'z',
      b : 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)

  const result = set(
    indexLens, 3, [ 1, 2 ]
  )
  expect(result).toEqual([ 3, 2 ])
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 50.35%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = { a : 1 }

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.set(
        R.lensProp('a'), 2, testObj
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.set(
        Ramda.lensProp('a'), 2, testObj
      )
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#set)

### slice

```typescript

slice(from: number, to: number, input: string): string
```

<details>

<summary>All Typescript definitions</summary>

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
  )).toEqual('ram')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {slice} from 'rambda'

const list = [1, 2, 3, 4, 5]

describe('R.slice', () => {
  it('happy', () => {
    const result = slice(1, 3, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = slice(1, 3)(list)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#slice)

### sort

```typescript

sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` needs to return only `-1`, `0` or `1`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {sort} from 'rambda'

const list = [3, 0, 5, 2, 1]

function sortFn(a: number, b: number): number {
  return a > b ? 1 : -1
}

describe('R.sort', () => {
  it('happy', () => {
    const result = sort(sortFn, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = sort(sortFn)(list)
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 40.23%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 'foo', 'bar', 'baz' ]
const fn = (a, b) => a > b ? -1 : 1

const replace = [
  {
    label : 'Rambda',
    fn    : () => {
      R.sort(fn, list)
      R.sort(fn)(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.sort(fn, list)
      Ramda.sort(fn)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sort)

### sortBy

```typescript

sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {sortBy, pipe} from 'rambda'

interface Input {
  a: number
}

describe('R.sortBy', () => {
  it('passing type to sort function', () => {
    function fn(x: any): number {
      return x.a
    }
    function fn2(x: Input): number {
      return x.a
    }

    const input = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)
    const curriedResult = sortBy(fn2)(input)

    result // $ExpectType { a: number; }[]
    curriedResult // $ExpectType Input[]
    result[0].a // $ExpectType number
    curriedResult[0].a // $ExpectType number
  })
  it('passing type to sort function and list', () => {
    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)
    const curriedResult = sortBy(fn)(input)

    result // $ExpectType Input[]
    curriedResult // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
  it('with R.pipe', () => {
    interface Obj {
      value: number
    }
    const fn = pipe(sortBy<Obj>(x => x.value))

    const result = fn([{value: 1}, {value: 2}])
    result // $ExpectType Obj[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 25.29% slower and Lodash is 56.88% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ { a : 2 }, { a : 1 }, { a : 0 } ]
const fn = x => x.a

const replace = [
  {
    label : 'Rambda',
    fn    : () => {
      R.sortBy(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.sortBy(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.sortBy(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### split

```typescript

split(separator: string | RegExp): (str: string) => string[]
```

Curried version of `String.prototype.split`

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {split} from 'rambda'

const str = 'foo|bar|baz'
const splitChar = '|'

describe('R.split', () => {
  it('happy', () => {
    const result = split(splitChar, str)

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = split(splitChar)(str)

    result // $ExpectType string[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 55.37% slower and Lodash is 17.64% slower</summary>

```text
const R = require('../../dist/rambda.js')

const str = 'foo|bar|baz'
const sep = '|'

const split = [
  {
    label : 'Rambda',
    fn    : () => {
      R.split(sep, str)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.split(sep, str)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.split(str, sep)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#split)

### splitAt

```typescript

splitAt<T>(index: number, input: T[]): [T[], T[]]
```

It splits string or array at a given index.

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'
import { drop } from './drop.js'
import { maybe } from './maybe.js'
import { take } from './take.js'

export function splitAt(index, input){
  if (arguments.length === 1){
    return _list => splitAt(index, _list)
  }
  if (!input) throw new TypeError(`Cannot read property 'slice' of ${ input }`)

  if (!_isArray(input) && typeof input !== 'string') return [ [], [] ]

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitAt} from 'ramda'

const index = 1
const str = 'foo'
const list = [1, 2, 3]

describe('R.splitAt with array', () => {
  it('happy', () => {
    const result = splitAt(index, list)

    result // $ExpectType [number[], number[]]
  })
  it('curried', () => {
    const result = splitAt(index)(list)

    result // $ExpectType [number[], number[]]
  })
})

describe('R.splitAt with string', () => {
  it('happy', () => {
    const result = splitAt(index, str)

    result // $ExpectType [string, string]
  })
  it('curried', () => {
    const result = splitAt(index)(str)

    result // $ExpectType [string, string]
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

<details>

<summary>All Typescript definitions</summary>

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
    expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])).toThrowWithMessage(Error,
    'First argument to splitEvery must be a positive integer')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitEvery} from 'rambda'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = splitEvery(3, list)

    result // $ExpectType number[][]
  })
  it('curried', () => {
    const result = splitEvery(3)(list)

    result // $ExpectType number[][]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 71.98%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, 2, 3, 4, 5, 6, 7 ]

const splitEvery = [
  {
    label : 'Rambda',
    fn    : () => {
      R.splitEvery(3, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.splitEvery(3, list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

### splitWhen

```typescript

splitWhen<T, U>(predicate: Predicate<T>, list: U[]): (U[])[]
```

It splits `list` to two arrays according to a `predicate` function. 

The first array contains all members of `list` before `predicate` returns `true`.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitWhen} from 'rambda'

const list = [1, 2, 1, 2]
const predicate = (x: number) => x === 2

describe('R.splitWhen', () => {
  it('happy', () => {
    const result = splitWhen(predicate, list)

    result // $ExpectType number[][]
  })
  it('curried', () => {
    const result = splitWhen(predicate)(list)

    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitWhen)

### startsWith

```typescript

startsWith(target: string, str: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.startsWith`.
When iterable is a list, then it uses R.equals to determine if the target list starts in the same way as the given target.

<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
startsWith<T>(target: T[], list: T[]): boolean;
startsWith<T>(target: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.startsWith</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'
import { equals } from './equals.js'

export function startsWith(target, iterable){
  if (arguments.length === 1)
    return _iterable => startsWith(target, _iterable)

  if (typeof iterable === 'string'){
    return iterable.startsWith(target)
  }
  if (!_isArray(target)) return false

  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[ index ])
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
        Object {
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {startsWith} from 'rambda'

describe('R.startsWith - array as iterable', () => {
  const target = [{a: 1}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.startsWith - string as iterable', () => {
  const target = 'foo'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#startsWith)

### subtract

Curried version of `x - y`

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#subtract)

### sum

```typescript

sum(list: number[]): number
```

<details>

<summary>All Typescript definitions</summary>

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

### symmetricDifference

```typescript

symmetricDifference<T>(x: T[], y: T[]): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {symmetricDifference} from 'rambda'

describe('R.symmetricDifference', () => {
  it('happy', () => {
    const list1 = [1, 2, 3, 4]
    const list2 = [3, 4, 5, 6]
    const result = symmetricDifference(list1, list2)

    result // $ExpectType number[]
  })

  it('curried', () => {
    const list1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    const list2 = [{id: 3}, {id: 4}, {id: 5}, {id: 6}]
    const result = symmetricDifference(list1)(list2)

    result // $ExpectType { id: number; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#symmetricDifference)

### T

```typescript

T(): boolean
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary>All Typescript definitions</summary>

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

  expect(tail('abc')).toEqual('bc')
  expect(tail('ab')).toEqual('b')
  expect(tail('a')).toEqual('')
  expect(tail('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {tail} from 'rambda'

describe('R.tail', () => {
  it('with string', () => {
    const result = tail('foo')

    result // $ExpectType string
  })
  it('with list - one type', () => {
    const result = tail([1, 2, 3])

    result // $ExpectType number[]
  })
  it('with list - mixed types', () => {
    const result = tail(['foo', 'bar', 1, 2, 3])

    result // $ExpectType (string | number)[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tail)

### take

```typescript

take<T>(howMany: number, input: T[]): T[]
```

It returns the first `howMany` elements of `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, input: T[]): T[];
take(howMany: number, input: string): string;
take<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
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
  expect(take(3)('rambda')).toEqual('ram')
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {take} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.take - array', () => {
  it('happy', () => {
    const result = take(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = take(howMany)(list)

    result // $ExpectType number[]
  })
})

describe('R.take - string', () => {
  it('happy', () => {
    const result = take(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = take(howMany)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 91.96% slower and Lodash is 4.72% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, 2, 3, 4 ]
const num = 2

const take = [
  {
    label : 'Rambda',
    fn    : () => {
      R.take(num, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.take(num, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.take(list, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#take)

### takeLast

```typescript

takeLast<T>(howMany: number, input: T[]): T[]
```

It returns the last `howMany` elements of `input`.

<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, input: T[]): T[];
takeLast(howMany: number, input: string): string;
takeLast<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
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
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(takeLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {takeLast} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.takeLast - array', () => {
  it('happy', () => {
    const result = takeLast(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = takeLast(howMany)(list)

    result // $ExpectType number[]
  })
})

describe('R.takeLast - string', () => {
  it('happy', () => {
    const result = takeLast(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = takeLast(howMany)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 93.39% slower and Lodash is 19.22% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 1, 2, 3, 4 ]
const num = 2

const takeLast = [
  {
    label : 'Rambda',
    fn    : () => {
      R.takeLast(num, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.takeLast(num, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.takeRight(list, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLast)

### takeLastWhile

```typescript

takeLastWhile(predicate: (x: string) => boolean, input: string): string
```

<details>

<summary>All Typescript definitions</summary>

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
import { _isArray } from './_internals/_isArray.js'

export function takeLastWhile(predicate, input){
  if (arguments.length === 1){
    return _input => takeLastWhile(predicate, _input)
  }
  if (input.length === 0) return input
  let found = false
  const toReturn = []
  let counter = input.length

  while (!found || counter === 0){
    counter--
    if (predicate(input[ counter ]) === false){
      found = true
    } else if (!found){
      toReturn.push(input[ counter ])
    }
  }

  return _isArray(input) ? toReturn.reverse() : toReturn.reverse().join('')
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
  const predicate = x => x > 0
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('predicate is always false', () => {
  const predicate = x => x < 0
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([])
})

test('with string', () => {
  const result = takeLastWhile(x => x !== 'F', 'FOOBAR')
  expect(result).toEqual('OOBAR')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {takeLastWhile} from 'rambda'

const list = [1, 2, 3]
const str = 'FOO'

describe('R.takeLastWhile', () => {
  it('with array', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with array - curried', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with string', () => {
    const result = takeLastWhile(x => x !== 'F', str)

    result // $ExpectType string
  })
  it('with string - curried', () => {
    const result = takeLastWhile(x => x !== 'F')(str)

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLastWhile)

### takeWhile

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.

<details>

<summary>All Typescript definitions</summary>

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

  expect(tap(sayX, 100)).toEqual(100)
  expect(tap(sayX)(100)).toEqual(100)
  expect(a).toEqual(100)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {tap, pipe} from 'rambda'

describe('R.tap', () => {
  it('happy', () => {
    pipe(
      tap(x => {
        x // $ExpectType number[]
      }),
      (x: number[]) => x.length
    )([1, 2])
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tap)

### test

```typescript

test(regExpression: RegExp): (str: string) => boolean
```

It determines whether `str` matches `regExpression`.

<details>

<summary>All Typescript definitions</summary>

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
    throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received "${ pattern }"`)
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
  expect(() => testMethod('foo', 'bar')).toThrowWithMessage(TypeError,
    '‘test’ requires a value of type RegExp as its first argument; received "foo"')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {test} from 'rambda'

const input = 'foo   '
const regex = /foo/

describe('R.test', () => {
  it('happy', () => {
    const result = test(regex, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = test(regex)(input)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 82.34%</summary>

```text
const R = require('../../dist/rambda.js')

const test = [
  {
    label : 'Rambda',
    fn    : () => {
      R.test(/\s/g, 'x y z')
      R.test(/\s/g)('x y z')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.test(/\s/g, 'x y z')
      Ramda.test(/\s/g)('x y z')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#test)

### times

```typescript

times<T>(fn: (i: number) => T, howMany: number): T[]
```

It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).

<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
```

</details>

<details>

<summary><strong>R.times</strong> source</summary>

```javascript
import { map } from './map.js'
import { range } from './range.js'

export function times(fn, howMany){
  if (arguments.length === 1) return _howMany => times(fn, _howMany)
  if (!Number.isInteger(howMany) || howMany < 0){
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {times, identity} from 'rambda'

describe('R.times', () => {
  it('happy', () => {
    const result = times(identity, 5)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#times)

### toLower

```typescript

toLower<S extends string>(str: S): Lowercase<S>
```

<details>

<summary>All Typescript definitions</summary>

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
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toLower)

### toPairs

```typescript

toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>
```

It transforms an object to a list.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {toPairs} from 'rambda'

const obj = {
  a: 1,
  b: 2,
  c: [3, 4],
}

describe('R.toPairs', () => {
  it('happy', () => {
    const result = toPairs(obj)

    result // $ExpectType (["b", number] | ["a", number] | ["c", number[]])[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toPairs)

### toString

```typescript

toString(x: unknown): string
```

<details>

<summary>All Typescript definitions</summary>

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
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toString)

### toUpper

```typescript

toUpper<S extends string>(str: S): Uppercase<S>
```

<details>

<summary>All Typescript definitions</summary>

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
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toUpper)

### transpose

```typescript

transpose<T>(list: (T[])[]): (T[])[]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: (T[])[]): (T[])[];
```

</details>

<details>

<summary><strong>R.transpose</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'

export function transpose(array){
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) =>
      _isArray(acc[ i ]) ? acc[ i ].push(nestedEl) : acc.push([ nestedEl ]))

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {transpose} from 'rambda'

const input = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]

describe('R.transpose', () => {
  it('happy', () => {
    const result = transpose(input)

    result // $ExpectType (string | number)[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#transpose)

### trim

```typescript

trim(str: string): string
```

<details>

<summary>All Typescript definitions</summary>

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
  expect(trim(' foo ')).toEqual('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#trim)

### tryCatch

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

### type

It accepts any input and it returns its type.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#type)

### unapply

```typescript

unapply<T = any>(fn: (args: any[]) => T): (...args: any[]) => T
```

It calls a function `fn` with the list of values of the returned function. 

`R.unapply` is the opposite of `R.apply` method.

<details>

<summary>All Typescript definitions</summary>

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
  expect(fn('x')).toEqual(1)
  expect(fn('x', 'y')).toEqual(1)
  expect(fn(
    'x', 'y', 'z'
  )).toEqual(1)
})

test('forwards arguments to decorated function as an array', () => {
  const fn = unapply(xs => '[' + xs + ']')
  expect(fn(2)).toEqual('[2]')
  expect(fn(2, 4)).toEqual('[2,4]')
  expect(fn(
    2, 4, 6
  )).toEqual('[2,4,6]')
})

test('returns a function with length 0', () => {
  const fn = unapply(identity)
  expect(fn.length).toEqual(0)
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {join, unapply, sum} from 'rambda'

describe('R.unapply', () => {
  it('happy', () => {
    const fn = unapply(sum)

    fn(1, 2, 3) // $ExpectType number
  })

  it('joins a string', () => {
    const fn = unapply(join(''))

    fn('s', 't', 'r', 'i', 'n', 'g') // $ExpectType string
  })
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

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {union} from 'rambda'

describe('R.union', () => {
  it('happy', () => {
    const result = union([1, 2], [2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{a: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3}]
    const result = union(list1, list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{a: 1, b: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3, b: 3}]
    const result = union(list1, list2)
    result[0].a // $ExpectType number
    result[0].b // $ExpectType number | undefined
  })
})

describe('R.union - curried', () => {
  it('happy', () => {
    const result = union([1, 2])([2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{a: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3}]
    const result = union(list1)(list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{a: 1, b: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3, b: 3}]
    const result = union(list1)(list2)
    result[0].a // $ExpectType number
    result[0].b // $ExpectType number | undefined
  })
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

<details>

<summary>All Typescript definitions</summary>

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
import { uniq as uniqRamda } from 'ramda'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniq} from 'rambda'

describe('R.uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 86.73%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  uniqListOfStrings(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

function applyBenchmark(fn, input){
  fn(input)
}

const tests = [
  {
    label : 'Rambda',
    fn    : R.uniq,
  },
  {
    label : 'Ramda',
    fn    : Ramda.uniq,
  },
]

  tests,
  modes,
  applyBenchmark,
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniq)

### uniqWith

```typescript

uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: T[]): T[]
```

It returns a new array containing only one copy of each element in `list` according to `predicate` function.

This predicate should return true, if two elements are equal.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniqWith} from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
    const list = [{a: 1}, {a: 1}]

    const fn = (x: any, y: any) => x.a === y.a

    const result = uniqWith(fn, list)
    result // $ExpectType { a: number; }[]
  })
})
```

</details>

<details>

<summary>Rambda is slower than Ramda with 13.67%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  [ uniqListOfStrings(limit), (x, y) => x.length === y.length ],
  [ uniqListOfBooleans(limit), (x, y) => x === y ],
  [ uniqListOfNumbers(limit), (x, y) => x > y ],
  [ uniqListOfLists(limit), (x, y) => x.length === y.length ],
  [
    uniqListOfObjects(limit),
    x => (x, y) => Object.keys(x).length === Object.keys(y).length,
  ],
]

function applyBenchmark(fn, input){
  return fn(input[ 1 ], input[ 0 ])
}

const tests = [
  {
    label : 'Rambda',
    fn    : R.uniqWith,
  },
  {
    label : 'Ramda',
    fn    : Ramda.uniqWith,
  },
]

  modes,
  tests,
  applyBenchmark,
}
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

<details>

<summary>All Typescript definitions</summary>

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
export function unless(predicate, whenFalse){
  if (arguments.length === 1){
    return _whenFalse => unless(predicate, _whenFalse)
  }

  return input => predicate(input) ? input : whenFalse(input)
}
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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {unless, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const result = unless(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return x + 1
      },
      1
    )
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const result = unless(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return `${x}-foo`
      },
      1
    )
    result // $ExpectType string | number
  })
})

describe('R.unless - curried', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const fn = unless<number>(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return x + 1
      }
    )
    const result = fn(1)
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const fn = unless<number, string>(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return `${x}-foo`
      }
    )
    const result = fn(1)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### unwind

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unwind)

### update

```typescript

update<T>(index: number, newValue: T, list: T[]): T[]
```

It returns a copy of `list` with updated element at `index` with `newValue`.

<details>

<summary>All Typescript definitions</summary>

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

function updateFn(
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {update} from 'rambda'

describe('R.update', () => {
  it('happy', () => {
    const result = update(1, 0, [1, 2, 3])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 52.35%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [ 0, 1, 2 ]
const index = 1
const replacer = 7

const update = [
  {
    label : 'Rambda',
    fn    : () => {
      R.update(
        replacer, index, list
      )
      R.update(replacer, index)(list)
      R.update(replacer)(index)(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.update(
        replacer, index, list
      )
      Ramda.update(replacer, index)(list)
      Ramda.update(replacer)(index)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### values

```typescript

values<T extends object, K extends keyof T>(obj: T): T[K][]
```

With correct input, this is nothing more than `Object.values(Record<string, unknown>)`. If `obj` is not an object, then it returns an empty array.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {values} from 'rambda'

describe('R.values', () => {
  it('happy', () => {
    const result = values({
      a: 1,
      b: 2,
      c: 3,
    })
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#values)

### view

```typescript

view<T, U>(lens: Lens): (target: T) => U
```

It returns the value of `lens` focus over `target` object.

<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (target: T) => U;
view<T, U>(lens: Lens, target: T): U;
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
  expect(view(assocLens, testObject)).toEqual('Led Zeppelin')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lens, view, assoc} from 'rambda'

interface Input {
  foo: string
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const fooLens = lens<Input, string, string>((x: Input) => {
  return x.foo
}, assoc('foo'))

describe('R.view', () => {
  it('happt', () => {
    const result = view<Input, string>(fooLens, testObject)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 76.15%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = { a : 1 }

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.view(R.lensProp('a'), testObj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.view(Ramda.lensProp('a'), testObj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#view)

### when

```typescript

when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {when} from 'rambda'

const predicate = (x: number) => x > 2
const whenTrueFn = (x: number) => String(x)

describe('R.when', () => {
  it('happy', () => {
    const result = when(predicate, whenTrueFn, 1)
    result // $ExpectType string | 1
  })

  it('curry 1', () => {
    const fn = when(predicate, whenTrueFn)
    const result = fn(1)
    result // $ExpectType string | number
  })

  it('curry 2 require explicit types', () => {
    const fn = when<number, string>(predicate)(whenTrueFn)
    const result = fn(1)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#when)

### where

```typescript

where<T, U>(conditions: T, input: U): boolean
```

It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

<details>

<summary>All Typescript definitions</summary>

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
import {equals} from './equals.js'
import {where} from './where.js'

test('when true', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('bar'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toBeTrue()
})

test('when false', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('baz'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {where, equals} from 'rambda'

describe('R.where', () => {
  it('happy', () => {
    const input = {
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    }
    const conditions = {
      a: equals('foo'),
      b: equals('bar'),
    }
    const result = where(conditions, input)
    const curriedResult = where(conditions)(input)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#where)

### whereAny

Same as `R.where`, but it will return `true` if at least one condition check returns `true`.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#whereAny)

### whereEq

```typescript

whereEq<T, U>(condition: T, input: U): boolean
```

It will return `true` if all of `input` object fully or partially include `rule` object.

`R.equals` is used to determine equality.

<details>

<summary>All Typescript definitions</summary>

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

  expect(() => whereEq(condition, null)).toThrowWithMessage(TypeError,
    'Cannot read properties of null (reading \'a\')')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {whereEq} from 'rambda'

describe('R.whereEq', () => {
  it('happy', () => {
    const result = whereEq({a: {b: 2}}, {b: 2})
    const curriedResult = whereEq({a: {b: 2}})({b: 2})
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
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

<details>

<summary>All Typescript definitions</summary>

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
  expect(withoutRamda('0:1', [ '0', '0:1' ])).toEqual([])
  expect(() => without('0:1', [ '0', '0:1' ])).toThrow()
  expect(without([ '0:1' ], [ '0', '0:1' ])).toEqual([ '0' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {without} from 'rambda'

const itemsToOmit = ['A', 'B', 'C']
const collection = ['A', 'B', 'C', 'D', 'E', 'F']

describe('R.without', () => {
  it('happy', () => {
    const result = without(itemsToOmit, collection)

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = without(itemsToOmit)(collection)

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#without)

### xor

```typescript

xor(x: boolean, y: boolean): boolean
```

Logical XOR

<details>

<summary>All Typescript definitions</summary>

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
import {xor} from './xor.js'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {xor} from 'rambda'

describe('R.xor', () => {
  it('happy', () => {
    xor(true, false) // $ExpectType boolean
  })
  it('curry', () => {
    xor(true)(false) // $ExpectType boolean
  })
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

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zip} from 'rambda'

describe('R.zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']

    const result = zip(array1)(array2)
    result // $ExpectType KeyValuePair<number, string>[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zip)

### zipObj

```typescript

zipObj<T, K extends string>(keys: K[], values: T[]): { [P in K]: T }
```

It will return a new object with keys of `keys` array and values of `values` array.

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zipObj} from 'rambda'

describe('R.zipObj', () => {
  it('happy', () => {
    // this is wrong since 24.10.2020 `@types/ramda` changes
    const result = zipObj(['a', 'b', 'c', 'd'], [1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; d: number; }
  })
  it('imported from @types/ramda', () => {
    const result = zipObj(['a', 'b', 'c'], [1, 2, 3])
    const curriedResult = zipObj(['a', 'b', 'c'])([1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; }
    curriedResult // $ExpectType { b: number; a: number; c: number; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipObj)

### zipWith

```typescript

zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[]
```

<details>

<summary>All Typescript definitions</summary>

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zipWith} from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = zipWith(
      (x, y) => {
        x // $ExpectType number
        y // $ExpectType number
        return `${x}-${y}`
      },
      list1,
      list2
    )

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = zipWith((x, y) => {
      x // $ExpectType unknown
      y // $ExpectType unknown
      return `${x}-${y}`
    })(list1, list2)

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipWith)

## ❯ CHANGELOG

7.1.4

`R.mergeRight` not found on `Deno` import - [Issue #633](https://github.com/selfrefactor/rambda/issues/633)

7.1.0

- Add `R.mergeRight` - introduced by Ramda's latest release. While Ramda renames `R.merge`, Rambda will keep `R.merge`.

- Rambda's `pipe/compose` doesn't return proper length of composed function which leads to issue with `R.applySpec`. It was fixed by using Ramda's `pipe/compose` logic - [Issue #627](https://github.com/selfrefactor/rambda/issues/627)

- Replace `Async` with `Promise` as return type of `R.type`.

- Add new types as Typescript output for `R.type` - "Map", "WeakMap", "Generator", "GeneratorFunction", "BigInt", "ArrayBuffer"

- Add `R.juxt` method

- Add `R.propSatisfies` method

- Add new methods after `Ramda` version upgrade to `0.28.0`:

-- R.count
-- R.modifyPath
-- R.on
-- R.whereAny
-- R.partialObject

7.0.3

Rambda.none has wrong logic introduced in version `7.0.0` - [Issue #625](https://github.com/selfrefactor/rambda/issues/625)

7.0.2

Rambda doesn't work with `pnpm` due to wrong export configuration - [Issue #619](https://github.com/selfrefactor/rambda/issues/619)

7.0.1

- Wrong ESM export configuration in `package.json` - [Issue #614](https://github.com/selfrefactor/rambda/issues/614)

7.0.0

- Braking change - sync `R.compose`/`R.pipe` with `@types/ramda`. That is significant change so as safeguard, it will lead a major bump. Important - this lead to raising required Typescript version to `4.2.2`. In other words, to use `Rambda` you'll need Typescript version `4.2.2` or newer.

Related commit in `@types/ramda` - https://github.com/DefinitelyTyped/DefinitelyTyped/commit/286eff4f76d41eb8f091e7437eabd8a60d97fc1f#diff-4f74803fa83a81e47cb17a7d8a4e46a7e451f4d9e5ce2f1bd7a70a72d91f4bc1

There are several other changes in `@types/ramda` as stated in [this comment](https://github.com/ramda/ramda/issues/2976#issuecomment-990408945). This leads to change of typings for the following methods in **Rambda**:

-- R.unless

-- R.toString

-- R.ifElse

-- R.always

-- R.complement

-- R.cond

-- R.is

-- R.sortBy

-- R.dissoc

-- R.toPairs

-- R.assoc

-- R.toLower

-- R.toUpper

- One more reason for the braking change is changing of export declarations in `package.json` based on [this blog post](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing) and [this merged Ramda's PR](https://github.com/ramda/ramda/pull/2999). This also led to renaming of `babel.config.js` to `babel.config.cjs`. 

- Add `R.apply`, `R.bind` and `R.unapply`

- `R.startsWith/R.endsWith` now support lists as inputs. This way, it matches current Ramda behavior. 

- Remove unused typing for `R.chain`.

- `R.map`/`R.filter` no longer accept bad inputs as iterable. This way, Rambda behaves more like Ramda, which also throws.

- Make `R.lastIndexOf` follow the logic of `R.indexOf`.

- Change `R.type` logic to Ramda logic. This way, `R.type` can return `Error` and `Set` as results.

- Add missing logic in `R.equals` to compare sets - [Issue #599](https://github.com/selfrefactor/rambda/issues/599)

- Improve list cloning - [Issue #595](https://github.com/selfrefactor/rambda/issues/595)

- Handle multiple inputs with `R.allPass` and `R.anyPass` - [Issue #604](https://github.com/selfrefactor/rambda/issues/604)

- Fix `R.length` wrong logic with inputs as `{length: 123}` - [Issue #606](https://github.com/selfrefactor/rambda/issues/606).

- Improve non-curry typings of `R.merge` by using types from [mobily/ts-belt](https://github.com/mobily/ts-belt).

- Improve performance of `R.uniqWith`.

- Wrong `R.update` if index is `-1` - [PR #593](https://github.com/selfrefactor/rambda/pull/593)

- Make `R.eqProps` safe for falsy inputs - based on [this opened Ramda PR](https://github.com/ramda/ramda/pull/2943).

- Incorrect benchmarks for `R.pipe/R.compose` - [Issue #608](https://github.com/selfrefactor/rambda/issues/608)

- Fix `R.last/R.head` typings - [Issue #609](https://github.com/selfrefactor/rambda/issues/609) 

6.9.0

- Fix slow `R.uniq` methods - [Issue #581](https://github.com/selfrefactor/rambda/issues/581)

Fixing `R.uniq` was done by improving `R.indexOf` which has performance implication to all methods importing `R.indexOf`:

- R.includes
- R.intersection
- R.difference
- R.excludes
- R.symmetricDifference
- R.union

- R.without no longer support the following case - `without('0:1', ['0', '0:1']) // => ['0']`. Now it throws as the first argument should be a list, not a string. Ramda, on the other hand, returns an empty list - https://github.com/ramda/ramda/issues/3086. 

6.8.3

- Fix Typescript build process with `rambda/immutable` - [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Add `R.objOf` method

- Add `R.mapObjIndexed` method

- Publish shorter README.md version to NPM

6.8.0

- `R.has` use `Object.prototype.hasOwnProperty`- [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Expose `immutable.ts` typings which are Rambda typings with `readonly` statements - [Issue #565](https://github.com/selfrefactor/rambda/issues/565)

- Fix `R.intersection` wrong order compared to Ramda.

- `R.path` wrong return of `null` instead of `undefined` when path value is `null` - [PR #577](https://github.com/selfrefactor/rambda/pull/577)

6.7.0

- Remove `ts-toolbelt` types from Typescript definitions. Most affected are the following methods, which lose one of its curried definitions:

1. R.maxBy
2. R.minBy
3. R.pathEq
4. R.viewOr
5. R.when
6. R.merge
7. R.mergeDeepRight
8. R.mergeLeft

6.6.0

- Change `R.piped` typings to mimic that of `R.pipe`. Main difference is that `R.pipe` is focused on unary functions.

- Fix wrong logic when `R.without` use `R.includes` while it should use array version of `R.includes`.

- Use uglify plugin for UMD bundle.

- Remove `dist` folder from `.gitignore` in order to fix `Deno` broken package. [Issue #570](https://github.com/selfrefactor/rambda/issues/570)

- Improve `R.fromPairs` typings - [Issue #567](https://github.com/selfrefactor/rambda/issues/567)

6.5.3

- Wrong logic where `R.without` use `R.includes` while it should use the array version of `R.includes`

This is Ramda bug, that Rambda also has before this release - https://github.com/ramda/ramda/issues/3086

6.5.2

- Wrong `R.defaultTo` typings - changes introduced in v6.5.0 are missing their TS equivalent.

- Update dependencies

6.5.1

Fix wrong versions in changelog

6.5.0

- `R.defaultTo` no longer accepts infinite inputs, thus it follows Ramda implementation.

- `R.equals` supports equality of functions.

- `R.pipe` doesn't use `R.compose`.

- Close [Issue #561](https://github.com/selfrefactor/rambda/issues/561) - export several internal TS interfaces and types

- Close [Issue #559](https://github.com/selfrefactor/rambda/issues/559) - improve `R.propOr` typings

- Add `CHANGELOG.md` file in release files list

6.4.0

- Close [Issue #560](https://github.com/selfrefactor/rambda/issues/560) - apply immutable lint to Typescript definitions

- Close [Issue #553](https://github.com/selfrefactor/rambda/issues/553) - fix problem with curried typings of `R.prop`

- Fix wrong `R.last` typing

- Upgrade all `rollup` related dependencies

- `R.type` supports `Symbol` just like *Ramda*.

- Remove file extension in `main` property in `package.json` in order to allow `experimental-modules`. See also this Ramda's PR - https://github.com/ramda/ramda/pull/2678/files

- Import `R.indexBy`/`R.when`/`R.zipObj`/`R.propEq`/`R.complement` changes from recent `@types/ramda` release.

- `R.tryCatch` stop supporting asynchronous functions; the previous behaviour is exported to *Rambdax* as `R.tryCatchAsync`

6.3.1

- Fix missing `Evolved` declaration in Typescript definition

6.3.0

- Add `R.takeLastWhile`

- Add `R.dropWhile`

- Add `R.eqProps`

- Add `R.dropLastWhile`

- Add `R.dropRepeats`

- Add `R.dropRepeatsWith`

- Add `R.evolve`

- Add typings for `R.takeWhile` when iterable is a string

6.2.0

- Add `R.props`

- Add `R.zipWith`

- Add `R.splitAt`

- Add `R.splitWhen`

- Close [Issue #547](https://github.com/selfrefactor/rambda/issues/547) - restore `readonly` declaration in Typescript definitions.

- `R.append`/`R.prepend` now work only with arrays just like Ramda. Previous behaviour was for them to work with both arrays and strings.

- Sync `R.pluck` typings with `@types/ramda` as there was a tiny difference.

6.1.0

- Fix `R.and` wrong definition, because the function doesn't convert the result to boolean. This introduce another difference with `@types/ramda`.

- Add `R.once`

- Add `R.or`

6.0.1

- Fix typing of `R.reject` as it wrongly declares that with object, it pass property to predicate.

6.0.0

- Breaking change - `R.map`/`R.filter`/`R.reject`/`R.forEach`/`R.partition` doesn't pass index as second argument to the predicate, when looping over arrays. The old behaviour of *map*, *filter* and *forEach* can be found in Rambdax methods *R.mapIndexed*, *R.filterIndexed* and *R.forEachIndexed*.

- Breaking change - `R.all`/`R.none`/`R.any`/`R.find`/`R.findLast`/`R.findIndex`/`R.findLastIndex` doesn't pass index as second argument to the predicate.

- Change `R.assocPath` typings so the user can explicitly sets type of the new object

- Typings of `R.assoc` match its `@types/ramda` counterpart.

- Simplify `R.forEach` typings

- Remove `ReadonlyArray<T>` pattern from Typescript definitions - not enough value for the noise  it adds.

5.13.1

- Fix wrong `R.takeWhile`

5.13.0

- Add `R.takeWhile` method

- Fix `R.lensPath` issue when using string as path input. The issue was introduced when fixing [Issue #524](https://github.com/selfrefactor/rambda/issues/524) in the previous release.

5.12.1

- Close [Issue #524](https://github.com/selfrefactor/rambda/issues/524) -
 wrong `R.assocPath` when path includes numbers

- `R.includes` throws on wrong input, i.e. `R.includes(1, null)`

5.12.0

- Add `R.move` method

- Add `R.union` method

- Close [Issue #519](https://github.com/selfrefactor/rambda/issues/519) -
`ts-toolbelt` needs other type of export with `--isolatedModules` flag

- Change `R.when` implementation and typings to match those of `Ramda`

- `R.over` and `R.set` use `R.curry` instead of manual currying

- `R.lensPath` typings support string as path, i.e. `'a.b'` instead of `['a', 'b']`

- `R.equals` now supports negative zero just like `Ramda.equals`

- `R.replace` uses `R.curry`

5.11.0

Forgot to export `R.of` because of wrong marker in `files/index.d.ts`

5.10.0

Close [Issue #514](https://github.com/selfrefactor/rambda/issues/514) -
wrong `R.length` with empty string

Close [Issue #511](https://github.com/selfrefactor/rambda/issues/511) - error in `ts-toolbelt` library

Close [Issue #510](https://github.com/selfrefactor/rambda/issues/510) - `R.clamp` should throw if min argument is greater than max argument

- [PR #508](https://github.com/selfrefactor/rambda/pull/508) - add `R.of`

- Definition of `R.curry` are not same as those of `@types/ramda`

- Definitions of `R.either` is same as that of `R.both`

- Definitions of `R.ifElse` no longer use `any` type

- Definition of `R.flatten` requires passing type for the output

- Fix definition of `R.propOr`, `R.dissoc`

- Fix curried definitions of `R.take`, `R.takeLast`, `R.drop` and `R.dropLast`

- 5.9.0

- `R.pickAll` definition allows passing string as path to search.

- `R.propEq` definition is now similar to that in `@types/ramda`.

- `R.none` matches `R.all` implementation and pass index as second argument to predicate input.

- `R.reduce` - drop support for object as iterable. Now it throws the same error as Ramda. Also instead of returning the initial value when iterable is `undefined`, now it throws.

Add index as additional argument to the Typescript definitions of the following methods:

- R.all
- R.find
- R.findLast
- R.findIndex
- R.findLastIndex

- 5.8.0

Add `R.mergeAll`
Add `R.mergeDeepRight`
Add `R.mergeLeft`
Add `R.partition`
Add `R.pathEq`
Add `R.tryCatch`
Add `R.unless`
Add `R.whereEq`
Add `R.where`

- Add `R.last` typing for empty array

- 5.7.0 Revert [PR #469](https://github.com/selfrefactor/rambda/pull/469) as `R.curry` was slow | Also now `R.flip` throws if arity is greater than or equal to 5

- 5.6.3 Merge several PRs of [@farwayer](https://github.com/farwayer)

- [PR #482](https://github.com/selfrefactor/rambda/pull/482) - improve `R.forEach` performance by not using `R.map`

- [PR #485](https://github.com/selfrefactor/rambda/pull/485) - improve `R.map` performance

- [PR #482](https://github.com/selfrefactor/rambda/pull/486) - improve `R.reduce` performance

- Fix missing high arity typings for `R.compose/pipe`

- `R.merge` definitions match those of `@types/ramda`

- Remove `dist` folder from Rambda repo

- 5.6.2

Close [Issue #476](https://github.com/selfrefactor/rambda/issues/476) - typesafe `R.propEq` definitions

Approve [PR #477](https://github.com/selfrefactor/rambda/pull/477) - fix `R.groupWith` when list length is 1

- 5.6.1

Update `ts-toolbelt` files as now there is update pipeline for it.

Approve [PR #474](https://github.com/selfrefactor/rambda/pull/474) - intruduce internal `isArray` helper

- 5.6.0

Approve [PR #469](https://github.com/selfrefactor/rambda/pull/469) - R.flip supports any arity | implement `R.curry` with `R.curryN` add `R.applySpec`

- 5.5.0

Close [Issue #464](https://github.com/selfrefactor/rambda/issues/464) - `R.flip` should handle functions with arity above 2

Close [Issue #468](https://github.com/selfrefactor/rambda/issues/468) - `fs-extra` should be dev dependency as it was wrongly added as production dependency in `5.2.0`

`R.flip` typings now match `@types/ramda` typings

Add `R.hasPath` method

Add `R.mathMod` typings

- 5.4.3

Fix `R.omit` typings

- 5.4.2

Fix `R.pick` typings

> Close [Issue #460](https://github.com/selfrefactor/rambda/issues/460) - `R.paths` should be curried

- 5.4.1

> Close [Issue #458](https://github.com/selfrefactor/rambda/issues/458) - wrong `R.propIs` typing

- 5.4.0

> Close [Issue #408](https://github.com/selfrefactor/rambda/issues/408) - add `R.chain`

- 5.3.0

> Close [Issue #430](https://github.com/selfrefactor/rambda/issues/430) - add `R.when`

Also restore `R.converge`, `R.findLast`, `R.findLastIndex` and `R.curryN` as I have forgotten to export them when releasing `5.2.0`.

- 5.2.1

Fix Typescript comment for every method

- 5.2.0

Release new documentation site

`Ramda` repo now holds all `Rambdax` methods and tests

- 5.1.1

Add `R.converge` and `R.curryN` from [PR #412](https://github.com/selfrefactor/rambda/pull/412)

Close [Issue #410](https://github.com/selfrefactor/rambda/issues/410) - wrong implementation of `R.groupWith`

Close [Issue #411](https://github.com/selfrefactor/rambda/issues/411) - change the order of declared `R.map` typings rules

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-changelog)

## ❯ Additional info

> Most influential contributors

- [@farwayer](https://github.com/farwayer) - improving performance in R.find, R.filter; give the idea how to make benchmarks more reliable;

- [@thejohnfreeman](https://github.com/thejohnfreeman) - add R.assoc, R.chain;

- [@helmuthdu](https://github.com/helmuthdu) - add R.clone; help improve code style;

- [@jpgorman](https://github.com/jpgorman) - add R.zip, R.reject, R.without, R.addIndex;

- [@ku8ar](https://github.com/ku8ar) - add R.slice, R.propOr, R.identical, R.propIs and several math related methods; introduce the idea to display missing Ramda methods;

- [@romgrk](https://github.com/romgrk) - add R.groupBy, R.indexBy, R.findLast, R.findLastIndex;

- [@squidfunk](https://github.com/squidfunk) - add R.assocPath, R.symmetricDifference, R.difference, R.intersperse;

- [@synthet1c](https://github.com/synthet1c) - add all lenses methods; add R.applySpec, R.converge;

- [@vlad-zhukov](https://github.com/vlad-zhukov) - help with configuring Rollup, Babel; change export file to use ES module exports;

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- [https://mailchi.mp/webtoolsweekly/web-tools-280](Web Tools Weekly)

- [https://github.com/stoeffel/awesome-fp-js](awesome-fp-js)

- [https://github.com/docsifyjs/awesome-docsify](awesome-docsify)

> Deprecated from `Used by` section

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk) - This repo doesn't uses `Rambda` since *October/2020* [commit that removes Rambda](https://github.com/SAP/cloud-sdk/commit/b29b4f915c4e4e9c2441e7b6b67cf83dac1fdac3)

> Releases

[Rambda's releases](https://github.com/selfrefactor/rambda/releases) before **6.4.0** were used mostly for testing purposes.

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
                <a href="https://github.com/selfrefactor/useful-javascript-libraries">Large collection of JavaScript,Typescript and Angular related repos links</a>
            </td>
            <td width="20%" align="center">
                <h4>Run-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/run-fn">CLI commands for lint JS/TS files, commit git changes and upgrade of dependencies</a>
            </td>
        </tr>
    </tbody>
</table>
# Rambda

`Rambda` is smaller and faster alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambda/status.svg)](https://david-dm.org/selfrefactor/rambda)
![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![All contributors](https://img.shields.io/github/contributors/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)

## ➤ Example use

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ➤ Rambda's advantages

### Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `Typescript` are in development, which means that using **R.compose/R.pipe** can be problematic.

### Smaller size

The size of a library affects not only the build bundle size but also the dev bundle size and build time. This is important advantage, expecially for big projects.

### Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda** - proven in the following [repo](https://github.com/selfrefactor/rambda-tree-shaking).

The repo holds two `Angular9` applications: one with small example code of *Ramda* and the other - same code but with *Rambda* as import library.

The test shows that **Rambda** bundle size is **2.03 MB** less than its **Ramda** counterpart.

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

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#benchmarks) can prove that.

### Support

Most of the valid issues are fixed within 2-3 days.

Closing the issue is usually accompanied by publishing a new patch version of `Rambda` to NPM.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-advantages)

## ➤ Missing Ramda methods

<details>
<summary>
  Click to see the full list of 90 Ramda methods not implemented in Rambda 
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
- comparator
- composeK
- composeP
- composeWith
- construct
- constructN
- contains
- countBy
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
- mergeDeepLeft
- mergeDeepWith
- mergeDeepWithKey
- mergeRight
- mergeWith
- mergeWithKey
- nAry
- nthArg
- o
- objOf
- otherwise
- pair
- partialRight
- pathSatisfies
- pickBy
- pipeK
- pipeP
- pipeWith
- project
- propSatisfies
- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- sortWith
- symmetricDifferenceWith
- andThen
- toPairsIn
- transduce
- traverse
- unapply
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
  
## ➤ Install

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

- Error handling, when wrong inputs are provided, may not be the same. This difference will be better documented once all brute force tests are completed.

- Typescript definitions between `rambda` and `@types/ramda` may vary.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-ramda)

## ➤ Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*(4.17.19) and *Ramda*(0.27.0).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 96.25% slower | 96.24% slower | 🚀 Fastest
 *adjust* | 🚀 Fastest | 5.52% slower | 🔳
 *all* | 🚀 Fastest | 94.95% slower | 🔳
 *allPass* | 🚀 Fastest | 98.95% slower | 🔳
 *any* | 🚀 Fastest | 98.18% slower | 6.18% slower
 *anyPass* | 🚀 Fastest | 99.09% slower | 🔳
 *append* | 🚀 Fastest | 84.09% slower | 🔳
 *applySpec* | 🚀 Fastest | 75.73% slower | 🔳
 *assoc* | 87.98% slower | 57.39% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 96.03% slower | 91.75% slower
 *compose* | 🚀 Fastest | 96.45% slower | 77.83% slower
 *converge* | 49.12% slower | 🚀 Fastest | 🔳
 *curry* | 🚀 Fastest | 34.9% slower | 🔳
 *curryN* | 63.32% slower | 🚀 Fastest | 🔳
 *defaultTo* | 🚀 Fastest | 50.3% slower | 🔳
 *drop* | 🚀 Fastest | 97.45% slower | 🔳
 *dropLast* | 🚀 Fastest | 97.07% slower | 🔳
 *equals* | 72.11% slower | 79.48% slower | 🚀 Fastest
 *filter* | 🚀 Fastest | 94.74% slower | 58.18% slower
 *find* | 🚀 Fastest | 98.2% slower | 88.96% slower
 *findIndex* | 🚀 Fastest | 97.97% slower | 79.39% slower
 *flatten* | 6.56% slower | 95.38% slower | 🚀 Fastest
 *ifElse* | 🚀 Fastest | 70.97% slower | 🔳
 *includes* | 🚀 Fastest | 71.7% slower | 🔳
 *indexOf* | 🚀 Fastest | 84.08% slower | 7.86% slower
 *init* | 94.42% slower | 97.55% slower | 🚀 Fastest
 *is* | 🚀 Fastest | 11.72% slower | 🔳
 *isEmpty* | 51.68% slower | 93.82% slower | 🚀 Fastest
 *last* | 🚀 Fastest | 99.64% slower | 1.05% slower
 *lastIndexOf* | 🚀 Fastest | 42.38% slower | 🔳
 *map* | 🚀 Fastest | 69.63% slower | 4.68% slower
 *match* | 🚀 Fastest | 46.75% slower | 🔳
 *merge* | 63.55% slower | 🚀 Fastest | 55.25% slower
 *none* | 🚀 Fastest | 98.22% slower | 🔳
 *omit* | 🚀 Fastest | 70.66% slower | 97.56% slower
 *over* | 🚀 Fastest | 50.77% slower | 🔳
 *path* | 🚀 Fastest | 74.94% slower | 5.72% slower
 *pick* | 🚀 Fastest | 26.29% slower | 86.82% slower
 *prop* | 🚀 Fastest | 89.89% slower | 🔳
 *propEq* | 🚀 Fastest | 95.26% slower | 🔳
 *range* | 95.17% slower | 90.22% slower | 🚀 Fastest
 *reduce* | 52.76% slower | 74.02% slower | 🚀 Fastest
 *repeat* | 85.91% slower | 95.31% slower | 🚀 Fastest
 *replace* | 0.47% slower | 28.13% slower | 🚀 Fastest
 *set* | 🚀 Fastest | 36.26% slower | 🔳
 *sort* | 🚀 Fastest | 63.15% slower | 🔳
 *sortBy* | 🚀 Fastest | 61.57% slower | 88.88% slower
 *split* | 🚀 Fastest | 85.34% slower | 33.69% slower
 *splitEvery* | 🚀 Fastest | 90.18% slower | 🔳
 *take* | 93.44% slower | 98.04% slower | 🚀 Fastest
 *takeLast* | 92.61% slower | 98.83% slower | 🚀 Fastest
 *test* | 🚀 Fastest | 94.42% slower | 🔳
 *type* | 18.91% slower | 🚀 Fastest | 🔳
 *uniq* | 98.98% slower | 96.58% slower | 🚀 Fastest
 *update* | 🚀 Fastest | 38.88% slower | 🔳
 *view* | 🚀 Fastest | 82.21% slower | 🔳

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-benchmarks)

## ➤ Used by

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk)

- [Walmart Canada](https://www.walmart.ca) reported by [w-b-dev](https://github.com/w-b-dev) 

- [VSCode Slack intergration](https://github.com/verydanny/vcslack)

- [Webpack PostCSS](https://github.com/sectsect/webpack-postcss)

- [MobX-State-Tree decorators](https://github.com/farwayer/mst-decorators)

- [Mobx decorators](https://github.com/farwayer/mobx-decorators)

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

<summary>All Typescript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.add</strong> source</summary>

```javascript
export function add(a, b) {
  if (arguments.length === 1)
    return (_b) => add(a, _b);

  return Number(a) + Number(b);
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### adjust

```typescript

adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try this <strong>R.adjust</strong> example in Rambda REPL</a>

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
import { curry } from './curry'

function adjustFn(
  index, replaceFn, list
){
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = list.slice()
  clone[ actualIndex ] = replaceFn(clone[ actualIndex ])

  return clone
}

export const adjust = curry(adjustFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { adjust } from './adjust'
import { pipe } from './pipe'

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

<summary>1 failed <italic>Ramda.adjust</italic> specs

> :boom: Reason for the failure: Ramda method accepts an array-like object
</summary>

```javascript
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
import { all } from './all'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#all)

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

<summary>All Typescript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
```

</details>

<details>

<summary><strong>R.allPass</strong> source</summary>

```javascript
export function allPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (!predicates[ counter ](input)){
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
import { allPass } from './allPass'

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

<summary>1 failed <italic>Ramda.allPass</italic> specs

> :boom: Reason for the failure: Ramda method returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('allPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var lt20 = function(n) { return n < 20; };
  var gt5 = function(n) { return n > 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.allPass([odd, gt5, plusEq]).length, 4);
    eq(R.allPass([odd, gt5, plusEq])(9, 9, 9, 9), true);
    eq(R.allPass([odd, gt5, plusEq])(9)(9)(9)(9), true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allPass)

### always

```typescript

always<T>(x: T): () => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try this <strong>R.always</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
always<T>(x: T): () => T;
```

</details>

<details>

<summary><strong>R.always</strong> source</summary>

```javascript
export function always(x){
  return () => x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always'
import { F } from './F'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

test('f', () => {
  const fn = always(F())

  expect(fn()).toBeFalse()
  expect(fn()).toBeFalse()
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
    fn // $ExpectType () => string
    const result = fn()
    result // $ExpectType string
  })
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.and(true%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.and(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20false%0AR.and(true%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.and</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

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
import { and } from './and'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {and} from 'rambda'

describe('R.and', () => {
  it('happy', () => {
    const result = and(true, false)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = and('foo')(1)
    result // $ExpectType string | 1
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#and)

### any

```typescript

any<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.

```javascript
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0AR.any(fn%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.any</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
any<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean;
any<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;
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
import { any } from './any'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#any)

### anyPass

```typescript

anyPass<T>(predicates: SafePred<T>[]): SafePred<T>
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

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: SafePred<T>[]): SafePred<T>;
```

</details>

<details>

<summary><strong>R.anyPass</strong> source</summary>

```javascript
export function anyPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (predicates[ counter ](input)){
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
import { anyPass } from './anyPass'

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

test('happy', () => {
  expect(anyPass([])(3)).toEqual(false)
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

<summary>1 failed <italic>Ramda.anyPass</italic> specs

> :boom: Reason for the failure: Ramda method returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('anyPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var gt20 = function(n) { return n > 20; };
  var lt5 = function(n) { return n < 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.anyPass([odd, lt5, plusEq]).length, 4);
    eq(R.anyPass([odd, lt5, plusEq])(6, 7, 8, 9), false);
    eq(R.anyPass([odd, lt5, plusEq])(6)(7)(8)(9), false);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyPass)

### append

```typescript

append<T>(x: T, list: readonly T[]): T[]
```

It adds element `x` at the end of `list`.

```javascript
const x = 'foo'

const result = R.append(x, ['bar', 'baz'])
// => ['bar', 'baz', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20R.append(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try this <strong>R.append</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, list: readonly T[]): T[];
append<T>(x: T): <T>(list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
export function append(x, input){
  if (arguments.length === 1) return _input => append(x, _input)

  if (typeof input === 'string') return input.split('').concat(x)

  const clone = input.slice()
  clone.push(x)

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { append } from './append'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### applySpec

```typescript

applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
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

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
applySpec<T>(spec: any): (...args: readonly any[]) => T;
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

// recursively traverse the given spec object to find the highest arity function
function __findHighestArity(spec, max = 0){
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

import { add, always, compose, dec, inc, map, path, prop, T } from '../rambda'
import { applySpec } from './applySpec'

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
      sum: number,
      multiplied: number,
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applySpec)

### assoc

```typescript

assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

> :boom: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try this <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
assoc<K extends string>(prop: K): AssocPartialOne<K>;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { assoc } from './assoc'

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

R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20path%20%3D%20'b.c'%0Aconst%20newValue%20%3D%202%0Aconst%20obj%20%3D%20%7B%20a%3A%201%20%7D%0A%0AR.assocPath(path%2C%20newValue%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20a%20%3A%201%2C%20b%20%3A%20%7B%20c%20%3A%202%20%7D%7D">Try this <strong>R.assocPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<Output>(path: Path, newValue: any, obj: object): Output;
assocPath<Output>(path: Path, newValue: any): (obj: object) => Output;
assocPath<Output>(path: Path): FunctionToolbelt.Curry<(newValue: any, obj: object) => Output>;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _isInteger } from './_internals/_isInteger'
import { assoc } from './assoc'
import { curry } from './curry'

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
    const arr = input.slice()
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
import { assocPath } from './assocPath'

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
  a: number,
  foo: {bar: number},
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

### both

```typescript

both(pred1: Pred, pred2: Pred): Pred
```

It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstCondition%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondCondition%20%3D%20x%20%3D%3E%20x%20%3C%2020%0Aconst%20fn%20%3D%20R.both(secondCondition)%0A%0Aconst%20result%20%3D%20%5Bfn(15)%2C%20fn(30)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.both</strong> example in Rambda REPL</a>

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
import { both } from './both'

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

<details>

<summary>1 failed <italic>Ramda.both</italic> specs

> :boom: Reason for the failure: Ramda library supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('both', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.both(Just(true), Just(true)), Just(true));
    eq(R.both(Just(true), Just(false)), Just(false));
    eq(R.both(Just(true), Nothing()), Nothing());
    eq(R.both(Nothing(), Just(false)), Nothing());
    eq(R.both(Nothing(), Nothing()), Nothing());
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#both)

### chain

```typescript

chain<T, U>(fn: (n: T) => U[], list: readonly T[]): U[]
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

<summary>All Typescript definitions</summary>

```typescript
chain<T, U>(fn: (n: T) => U[], list: readonly T[]): U[];
chain<T, U>(fn: (n: T) => U[]): (list: readonly T[]) => U[];
chain<X0, X1, R>(fn: (x0: X0, x1: X1) => R, fn1: (x1: X1) => X0): (x1: X1) => R;
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
import { chain } from './chain'

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
    const resultCurried = chain(fn)(list)
    resultCurried // $ExpectType string[]
  })
})
```

</details>

*5 failed Ramda.chain specs*

> :boom: Reason for the failure: Ramda method passes to `chain` property if available | Ramda library supports fantasy-land

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#chain)

### clamp

```typescript

clamp(min: number, max: number, input: number): number
```

Restrict a number `input` to be withing `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

```javascript
R.clamp(0, 10, 5) //=> 5
R.clamp(0, 10, -1) //=> 0
R.clamp(0, 10, 11) //=> 10
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.clamp(0%2C%2010%2C%205)%20%2F%2F%3D%3E%205%0AR.clamp(0%2C%2010%2C%20-1)%20%2F%2F%3D%3E%200%0AR.clamp(0%2C%2010%2C%2011)%20%2F%2F%3D%3E%2010">Try this <strong>R.clamp</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
clamp(min: number, max: number, input: number): number;
clamp(min: number, max: number): (input: number) => number;
```

</details>

<details>

<summary><strong>R.clamp</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { clamp } from './clamp'

test('when min is greater than max', () => {
  expect(() => clamp(
    -5, -10, 5
  )).toThrowWithMessage(Error,
    'min must not be greater than max in clamp(min, max, value)')
})

test('rambda specs', () => {
  expect(clamp(
    1, 10, 0
  )).toEqual(1)
  expect(clamp(
    3, 12, 1
  )).toEqual(3)
  expect(clamp(
    -15, 3, -100
  )).toEqual(-15)
  expect(clamp(
    1, 10, 20
  )).toEqual(10)
  expect(clamp(
    3, 12, 23
  )).toEqual(12)
  expect(clamp(
    -15, 3, 16
  )).toEqual(3)
  expect(clamp(
    1, 10, 4
  )).toEqual(4)
  expect(clamp(
    3, 12, 6
  )).toEqual(6)
  expect(clamp(
    -15, 3, 0
  )).toEqual(0)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {clamp} from 'rambda'

describe('R.clamp', () => {
  it('happy', () => {
    const result = clamp(1, 10, 20)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clamp)

### clone

```typescript

clone<T>(input: T): T
```

It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

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

<summary>All Typescript definitions</summary>

```typescript
clone<T>(input: T): T;
clone<T>(input: readonly T[]): T[];
```

</details>

<details>

<summary><strong>R.clone</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function clone(input){
  const out = _isArray(input) ? Array(input.length) : {}
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

import { clone } from './clone'
import { equals } from './equals'

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

  expect(cloned.getDay()).toEqual(5)
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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {clone} from 'rambda'

describe('R.clone', () => {
  it('happy', () => {
    const obj = {a: 1, b: 2}
    const result = clone(obj)
    result // $ExpectType { a: number; b: number; }
  })
})
```

</details>

<details>

<summary>9 failed <italic>Ramda.clone</italic> specs

> :boom: Reason for the failure: Rambda method work only with objects and arrays
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('deep clone integers, strings and booleans', function() {
  it('clones integers', function() {
    eq(R.clone(-4), -4);
    eq(R.clone(9007199254740991), 9007199254740991);
  });
  it('clones floats', function() {
    eq(R.clone(-4.5), -4.5);
    eq(R.clone(0.0), 0.0);
  });
  it('clones strings', function() {
    eq(R.clone('ramda'), 'ramda');
  });
  it('clones booleans', function() {
    eq(R.clone(true), true);
  });
});
describe('deep clone objects', function() {
  it('clones objects with circular references', function() {
    var x = {c: null};
    var y = {a: x};
    var z = {b: y};
    x.c = z;
    var clone = R.clone(x);
    assert.notStrictEqual(x, clone);
    assert.notStrictEqual(x.c, clone.c);
    assert.notStrictEqual(x.c.b, clone.c.b);
    assert.notStrictEqual(x.c.b.a, clone.c.b.a);
    assert.notStrictEqual(x.c.b.a.c, clone.c.b.a.c);
    eq(R.keys(clone), R.keys(x));
    eq(R.keys(clone.c), R.keys(x.c));
    eq(R.keys(clone.c.b), R.keys(x.c.b));
    eq(R.keys(clone.c.b.a), R.keys(x.c.b.a));
    eq(R.keys(clone.c.b.a.c), R.keys(x.c.b.a.c));
    x.c.b = 1;
    assert.notDeepEqual(clone.c.b, x.c.b);
  });
});
describe('deep clone arrays', function() {
});
describe('deep clone functions', function() {
});
describe('built-in types', function() {
  it('clones RegExp object', function() {
    R.forEach(function(pattern) {
      var clone = R.clone(pattern);
      assert.notStrictEqual(clone, pattern);
      eq(clone.constructor, RegExp);
      eq(clone.source, pattern.source);
      eq(clone.global, pattern.global);
      eq(clone.ignoreCase, pattern.ignoreCase);
      eq(clone.multiline, pattern.multiline);
    }, [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]);
  });
});
describe('deep clone deep nested mixed objects', function() {
  it('clones array with mutual ref object', function() {
    var obj = {a: 1};
    var list = [{b: obj}, {b: obj}];
    var clone = R.clone(list);
    assert.strictEqual(list[0].b, list[1].b);
    assert.strictEqual(clone[0].b, clone[1].b);
    assert.notStrictEqual(clone[0].b, list[0].b);
    assert.notStrictEqual(clone[1].b, list[1].b);
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
    obj.a = 2;
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
  });
});
describe('deep clone edge cases', function() {
  it('nulls, undefineds and empty objects and arrays', function() {
    eq(R.clone(null), null);
    eq(R.clone(undefined), undefined);
    assert.notStrictEqual(R.clone(undefined), null);
    var obj = {};
    assert.notStrictEqual(R.clone(obj), obj);
    var list = [];
    assert.notStrictEqual(R.clone(list), list);
  });
});
describe('Let `R.clone` use an arbitrary user defined `clone` method', function() {
  it('dispatches to `clone` method if present', function() {
    function ArbitraryClone(x) { this.value = x; }
    ArbitraryClone.prototype.clone = function() { return new ArbitraryClone(this.value); };
    var obj = new ArbitraryClone(42);
    var arbitraryClonedObj = R.clone(obj);
    eq(arbitraryClonedObj, new ArbitraryClone(42));
    eq(arbitraryClonedObj instanceof ArbitraryClone, true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clone)

### complement

```typescript

complement(pred: (...args: readonly any[]) => boolean): (...args: readonly any[]) => boolean
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

<summary>All Typescript definitions</summary>

```typescript
complement(pred: (...args: readonly any[]) => boolean): (...args: readonly any[]) => boolean;
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
import { complement } from './complement'

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
  )).toEqual(false)
  expect(f(
    12, 2, 6
  )).toEqual(true)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {complement, isNil} from 'rambda'

describe('R.complement', () => {
  it('happy', () => {
    const fn = complement(isNil)
    const result = fn(null)
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.complement</italic> specs

> :boom: Reason for the failure: Ramda library supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('complement', function() {
  it('accepts fantasy-land functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.complement(Just(true)), Just(false));
    eq(R.complement(Just(false)), Just(true));
    eq(R.complement(Nothing()), Nothing());
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### compose

```typescript

compose<T1>(fn0: () => T1): () => T1
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

<summary>All Typescript definitions</summary>

```typescript
compose<T1>(fn0: () => T1): () => T1;
compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2;
compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

compose<T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T3;
compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

compose<T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T4;
compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

compose<T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T5;
compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

compose<T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T6;
compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
compose<V0, V1, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;
```

</details>

<details>

<summary><strong>R.compose</strong> source</summary>

```javascript
export function compose(...fns){
  if (fns.length === 0){
    throw new Error('compose requires at least one argument')
  }

  return (...args) => {
    const list = fns.slice()
    if (list.length > 0){
      const fn = list.pop()
      let result = fn(...args)
      while (list.length > 0){
        result = list.pop()(result)
      }

      return result
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { compose } from './compose'
import { filter } from './filter'
import { last } from './last'
import { map } from './map'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('can accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (list, limit) => filter(x => x > limit, list))([ 1, 2, 3, 4, false ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrow('compose requires at least one argument')
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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {add, subtract, compose} from 'rambda'

describe('R.compose', () => {
  it('happy', () => {
    const result = compose(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })

  it('with void', () => {
    const result = compose(
      () => {},
      () => {}
    )()
    result // $ExpectType void
  })
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.compose</italic> specs

> :boom: Reason for the failure: Ramda method passes context to functions | Rambda composed functions have no length
</summary>

```javascript
var assert = require('assert');
var jsv = require('jsverify');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('compose', function() {
  it('performs right-to-left function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.compose(R.map, R.multiply, parseInt);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.compose(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.compose(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
describe('compose properties', function() {
  jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, function(f, g, x) {
    return R.equals(R.compose(f, g)(x), f(g(x)));
  jsv.property('associative',  jsv.fn(), jsv.fn(), jsv.fn(), jsv.nat, function(f, g, h, x) {
    var result = f(g(h(x)));
    return R.all(R.equals(result), [
      R.compose(f, g, h)(x),
      R.compose(f, R.compose(g, h))(x),
      R.compose(R.compose(f, g), h)(x)
    ]);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compose)

### concat

```typescript

concat<T>(x: readonly T[], y: readonly T[]): T[]
```

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'foobar'">Try this <strong>R.concat</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
concat<T>(x: readonly T[], y: readonly T[]): T[];
concat<T>(x: readonly T[]): (y: readonly T[]) => T[];
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
import { concat } from './concat'

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
  expect(concat('ABC', 'DEF')).toEqual('ABCDEF')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {concat} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

describe('R.concat', () => {
  it('happy', () => {
    const result = concat(list1, list2)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = concat(list1)(list2)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.concat</italic> specs

> :boom: Reason for the failure: Ramda method pass to `concat` property if present
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('concat', function() {
  var z1 = {
    x: 'z1',
    concat: function(that) { return this.x + ' ' + that.x; }
  };
  var z2 = {
    x: 'z2'
  };
  it('delegates to non-String object with a concat method, as second param', function() {
    eq(R.concat(z1, z2), 'z1 z2');
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### cond

```typescript

cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...x: readonly any[]) => any
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

<summary>All Typescript definitions</summary>

```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...x: readonly any[]) => any;
cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...x: readonly A[]) => B;
```

</details>

<details>

<summary><strong>R.cond</strong> source</summary>

```javascript
export function cond(conditions){
  return input => {
    let done = false
    let toReturn
    conditions.forEach(([ predicate, resultClosure ]) => {
      if (!done && predicate(input)){
        done = true
        toReturn = resultClosure(input)
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
import { always } from './always'
import { cond } from './cond'
import { equals } from './equals'
import { T } from './T'

test('returns a function', () => {
  expect(typeof cond([])).toEqual('function')
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
  expect(fn(0)).toEqual('water freezes at 0°C')
  expect(fn(50)).toEqual('nothing special happens at 50°C')
  expect(fn(100)).toEqual('water boils at 100°C')
})

test('no winner', () => {
  const fn = cond([
    [ equals('foo'), always(1) ],
    [ equals('bar'), always(2) ],
  ])
  expect(fn('quux')).toEqual(undefined)
})

test('predicates are tested in order', () => {
  const fn = cond([
    [ T, always('foo') ],
    [ T, always('bar') ],
    [ T, always('baz') ],
  ])
  expect(fn()).toEqual('foo')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {cond, always, equals} from 'rambda'

describe('R.cond', () => {
  it('happy', () => {
    const fn = cond<number, string>([
      [equals(0), always('water freezes at 0°C')],
      [equals(100), always('water boils at 100°C')],
      [
        () => true,
        function(temp) {
          return 'nothing special happens at ' + temp + '°C'
        },
      ],
    ])

    const result = fn(0)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.cond</italic> specs

> :boom: Reason for the failure: pass to transformer is not applied in Rambda method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('cond', function() {
  it('forwards all arguments to predicates and to transformers', function() {
    var fn = R.cond([
      [function(_, x) { return x === 42; }, function() { return arguments.length; }]
    ]);
    eq(fn(21, 42, 84), 3);
  });
  it('retains highest predicate arity', function() {
    var fn = R.cond([
      [R.nAry(2, R.T), R.T],
      [R.nAry(3, R.T), R.T],
      [R.nAry(1, R.T), R.T]
    ]);
    eq(fn.length, 3);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#cond)

### converge

```typescript

converge(after: ((...a: any[]) => any), fns: Array<((...x: any[]) => any)>): (...y: any[]) => any
```

Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

> :boom: Explanation is taken from `Ramda` documentation

```javascript
const result = R.converge(R.multiply)([ R.add(1), R.add(3) ])(2)
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.converge(R.multiply)(%5B%20R.add(1)%2C%20R.add(3)%20%5D)(2)%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.converge</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
converge(after: ((...a: any[]) => any), fns: Array<((...x: any[]) => any)>): (...y: any[]) => any;
```

</details>

<details>

<summary><strong>R.converge</strong> source</summary>

```javascript
import { curryN } from './curryN'
import { map } from './map'
import { max } from './max'
import { reduce } from './reduce'

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
import { add } from './add'
import { converge } from './converge'
import { multiply } from './multiply'

const f1 = converge(multiply, [ a => a + 1, a => a + 10 ])
const f2 = converge(multiply, [ a => a + 1, (a, b) => a + b + 10 ])
const f3 = converge(multiply, [ a => a + 1, (
  a, b, c
) => a + b + c + 10 ])

test('happy', () => {
  expect(f2(6, 7)).toEqual(161)
})

test('passes the results of applying the arguments individually', () => {
  const result = converge(multiply)([ add(1), add(3) ])(2)
  expect(result).toEqual(15)
})

test('returns a function with the length of the longest argument', () => {
  expect(f1.length).toEqual(1)
  expect(f2.length).toEqual(2)
  expect(f3.length).toEqual(3)
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
  expect(a.call(context, 1)).toEqual(2)
  expect(b.call(context, 1)).toEqual(3)
  expect(d.call(context, 1)).toEqual(5)
})

test('works with empty functions list', () => {
  const fn = converge(function (){
    return arguments.length
  }, [])
  expect(fn.length).toEqual(0)
  expect(fn()).toEqual(0)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {converge} from 'ramda'

const mult = (a: number, b: number) => {
  return a * b
}
const fn = converge(mult, [
  (a: number) => {
    return a
  },
  (a: number, b: number) => {
    return b
  },
])

describe('R.converge', () => {
  it('happy', () => {
    const result = fn(2, 3)
    const curriedResult = fn(2)(3)

    result // $ExpectType any
    curriedResult // $ExpectType any
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#converge)

### curry

```typescript

curry(fn: (...args: any[]) => any): (...a: any[]) => any
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

<summary>All Typescript definitions</summary>

```typescript
curry(fn: (...args: any[]) => any): (...a: any[]) => any;
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
import { curry } from './curry'

test('happy', () => {
  const addFourNumbers = (
    a, b, c, d
  ) => a + b + c + d
  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)

  expect(g(4)).toEqual(10)
})

test('when called with more arguments', () => {
  const add = curry((n, n2) => n + n2)

  expect(add(
    1, 2, 3
  )).toEqual(3)
})

test('when called with zero arguments', () => {
  const sub = curry((a, b) => a - b)
  const s0 = sub()

  expect(s0(5, 2)).toEqual(3)
})

test('when called via multiple curry stages', () => {
  const join = curry((
    a, b, c, d
  ) => [ a, b, c, d ].join('-'))

  const stage1 = join('A')
  const stage2 = stage1('B', 'C')

  expect(stage2('D')).toEqual('A-B-C-D')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {curry} from 'rambda'

function source(a: number, b: number, c: number, d: number) {
  void d

  return a * b * c
}

describe('R.curry', () => {
  it('happy', () => {
    const curried = curry(source)

    const result1 = curried(1)(2)(3)
    const result2 = curried(1, 2)(3)
    const result3 = curried(1)(2, 3)
    const result4 = curried(1, 2, 3)

    result1 // $ExpectType any
    result2 // $ExpectType any
    result3 // $ExpectType any
    result4 // $ExpectType any
  })
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.curry</italic> specs

> :boom: Reason for the failure: Ramda library support placeholder(R.__)
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var jsv = require('jsverify');
var funcN = require('./shared/funcN');

describe('curry', function() {
  it('properly reports the length of the curried function', function() {
    var f = R.curry(function(a, b, c, d) {return (a + b * c) / d;});
    eq(f.length, 4);
    var g = f(12);
    eq(g.length, 3);
    var h = g(3);
    eq(h.length, 2);
    eq(g(3, 6).length, 1);
  });
  it('preserves context', function() {
    var ctx = {x: 10};
    var f = function(a, b) { return a + b * this.x; };
    var g = R.curry(f);
    eq(g.call(ctx, 2, 4), 42);
    eq(g.call(ctx, 2).call(ctx, 4), 42);
  });
  it('supports R.__ placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = R.__;
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
  it('supports @@functional/placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
});
describe('curry properties', function() {
  jsv.property('curries multiple values', funcN(4), jsv.json, jsv.json, jsv.json, jsv.json, function(f, a, b, c, d) {
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c, d)), [
      g(a, b, c, d),
      g(a)(b)(c)(d),
      g(a)(b, c, d),
      g(a, b)(c, d),
      g(a, b, c)(d)
    ]);
  jsv.property('curries with placeholder', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c)), [
      g(_, _, c)(a, b),
      g(a, _, c)(b),
      g(_, b, c)(a),
      g(a, _, _)(_, c)(b),
      g(a, b, _)(c)
    ]);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curry)

### curryN

```typescript

curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any
```

It returns a curried equivalent of the provided function, with the specified arity.

<details>

<summary>All Typescript definitions</summary>

```typescript
curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;
```

</details>

<details>

<summary><strong>R.curryN</strong> source</summary>

```javascript
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

function _arity(n, fn){
  switch (n){
  case 0:
    return function (){
      return fn.apply(this, arguments)
    }
  case 1:
    return function (_1){
      return fn.apply(this, arguments)
    }
  case 2:
    return function (_1, _2){
      return fn.apply(this, arguments)
    }
  case 3:
    return function (
      _1, _2, _3
    ){
      return fn.apply(this, arguments)
    }
  case 4:
    return function (
      _1, _2, _3, _4
    ){
      return fn.apply(this, arguments)
    }
  case 5:
    return function (
      _1, _2, _3, _4, _5
    ){
      return fn.apply(this, arguments)
    }
  case 6:
    return function (
      _1, _2, _3, _4, _5, _6
    ){
      return fn.apply(this, arguments)
    }
  case 7:
    return function (
      _1, _2, _3, _4, _5, _6, _7
    ){
      return fn.apply(this, arguments)
    }
  case 8:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8
    ){
      return fn.apply(this, arguments)
    }
  case 9:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8, _9
    ){
      return fn.apply(this, arguments)
    }
  case 10:
    return function (
      _1, _2, _3, _4, _5, _6, _7, _8, _9, _10
    ){
      return fn.apply(this, arguments)
    }
  default:
    throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  }
}

export function curryN(n, fn){
  if (arguments.length === 1) return _fn => curryN(n, _fn)

  return _arity(n, _curryN(
    n, [], fn
  ))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { curryN } from './curryN'

function source(
  a, b, c, d
){
  void d

  return a * b * c
}

test('accepts an arity', () => {
  const curried = curryN(3, source)
  expect(curried(1)(2)(3)).toEqual(6)
  expect(curried(1, 2)(3)).toEqual(6)
  expect(curried(1)(2, 3)).toEqual(6)
  expect(curried(
    1, 2, 3
  )).toEqual(6)
})

test('can be partially applied', () => {
  const curry3 = curryN(3)
  const curried = curry3(source)
  expect(curried.length).toEqual(3)
  expect(curried(1)(2)(3)).toEqual(6)
  expect(curried(1, 2)(3)).toEqual(6)
  expect(curried(1)(2, 3)).toEqual(6)
  expect(curried(
    1, 2, 3
  )).toEqual(6)
})

test('preserves context', () => {
  const ctx = { x : 10 }
  const f = function (a, b){
    return a + b * this.x
  }
  const g = curryN(2, f)

  expect(g.call(
    ctx, 2, 4
  )).toEqual(42)
  expect(g.call(ctx, 2).call(ctx, 4)).toEqual(42)
})

test('forwards extra arguments', () => {
  const f = function (){
    return Array.prototype.slice.call(arguments)
  }
  const g = curryN(3, f)

  expect(g(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
  expect(g(
    1, 2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(g(1, 2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
  expect(g(1)(
    2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(g(1)(2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {curryN} from 'ramda'

function source(a: number, b: number, c: number, d: number) {
  void d

  return a * b * c
}

describe('R.curryN', () => {
  it('happy', () => {
    const curried = curryN(3, source)

    const result1 = curried(1)(2)(3)
    const result2 = curried(1, 2)(3)
    const result3 = curried(1)(2, 3)
    const result4 = curried(1, 2, 3)

    result1 // $ExpectType any
    result2 // $ExpectType any
    result3 // $ExpectType any
    result4 // $ExpectType any
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curryN)

### dec

```typescript

dec(x: number): number
```

It decrements a number.

<details>

<summary>All Typescript definitions</summary>

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
import { dec } from './dec'

test('happy', () => {
  expect(dec(2)).toBe(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dec)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

> :boom: Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

```javascript
// With single input argument
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// With multiple input arguments
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'qux') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'quz') // => 'qux'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%2F%2F%20With%20single%20input%20argument%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20With%20multiple%20input%20arguments%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'qux')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'quz')%20%2F%2F%20%3D%3E%20'qux'">Try this <strong>R.defaultTo</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function flagIs(inputArguments){
  return (
    inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
  )
}

export function defaultTo(defaultArgument, ...inputArguments){
  if (arguments.length === 1){
    return (..._inputArguments) =>
      defaultTo(defaultArgument, ..._inputArguments)
  }

  const limit = inputArguments.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArguments[ limit - len + 1 ]

    if (len === 0){
      ready = true
    } else if (flagIs(instance)){
      len -= 1
    } else {
      holder = instance
      ready = true
    }
  }

  return holder === undefined ? defaultArgument : holder
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { defaultTo } from './defaultTo'

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
  expect(defaultTo('foo', false)).toEqual(false)
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})

test('default extends to indefinite input arguments - case 1', () => {
  const result = defaultTo(
    'foo', null, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 2', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 3', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 4', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 5', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar', 'baz'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 6', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, null, NaN
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {defaultTo} from 'rambda'

describe('R.defaultTo with Ramda spec', () => {
  it('input is falsy', () => {
    const result = defaultTo('foo', undefined)
    result // $ExpectType "foo"
  })
  it('input is truthy', () => {
    const result = defaultTo('foo', 'bar')
    result // $ExpectType "foo" | "bar"
  })
})

describe('R.defaultTo can have many inputs', () => {
  it('happy', () => {
    const result = defaultTo('foo', undefined, 'bar')
    result // $ExpectType "foo" | "bar"
  })

  it('curried', () => {
    const result = defaultTo('foo')(undefined, 'bar')
    result // $ExpectType string
  })

  it('with two possible types', () => {
    const result = defaultTo<string, number>(
      'foo',
      undefined,
      1,
      null,
      2,
      'bar'
    )
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

### difference

```typescript

difference<T>(a: readonly T[], b: readonly T[]): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

```javascript
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = difference(a, b)
// => [ 1, 2 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20a%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20b%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20difference(a%2C%20b)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%20%5D">Try this <strong>R.difference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
difference<T>(a: readonly T[], b: readonly T[]): T[];
difference<T>(a: readonly T[]): (b: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.difference</strong> source</summary>

```javascript
import { includes } from './includes'
import { uniq } from './uniq'

export function difference(a, b){
  if (arguments.length === 1) return _b => difference(a, _b)

  return uniq(a).filter(aInstance => !includes(aInstance, b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { difference } from './difference'

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
  expect(difference([ NaN ], [ NaN ]).length).toEqual(0)
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

```typescript

dissoc<T>(prop: string, obj: any): T
```

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try this <strong>R.dissoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dissoc<T>(prop: string, obj: any): T;
dissoc<T>(prop: string): (obj: any) => T;
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
import { dissoc } from './dissoc'

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
    area   : area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width  : 7,
    height : 6,
    area   : area,
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dissoc, pipe, identity} from 'rambda'

const obj = {
  a: 1,
  b: 2,
}
interface Output {
  a: string,
}

describe('R.dissoc', () => {
  it('happy', () => {
    const result = dissoc<Output>('b', obj)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = dissoc<Output>('b')(obj)

    result // $ExpectType Output
  })
  it('within R.pipe', () => {
    const result = pipe<object, object, Output>(identity, dissoc('b'))(obj)

    result // $ExpectType Output
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### divide

```typescript

divide(x: number, y: number): number
```

```javascript
R.divide(71, 100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71%2C%20100)%20%2F%2F%20%3D%3E%200.71">Try this <strong>R.divide</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

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
import { divide } from './divide'

test('happy', () => {
  expect(divide(71, 100)).toEqual(0.71)
  expect(divide(71)(100)).toEqual(0.71)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#divide)

### drop

```typescript

drop<T>(howMany: number, input: readonly T[]): T[]
```

It returns `howMany` items dropped from beginning of list or string `input`.

```javascript
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.drop(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D%0AR.drop(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'obar'">Try this <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
drop<T>(howMany: number, input: readonly T[]): T[];
drop(howMany: number, input: string): string;
drop<T>(howMany: number): {
  <T>(input: readonly T[]): T[];
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

import { drop } from './drop'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number, input: readonly T[]): T[]
```

It returns `howMany` items dropped from the end of list or string `input`.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try this <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropLast<T>(howMany: number, input: readonly T[]): T[];
dropLast(howMany: number, input: string): string;
dropLast<T>(howMany: number): {
  <T>(input: readonly T[]): T[];
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

import { dropLast } from './dropLast'

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

<summary>5 failed <italic>Ramda.dropLast</italic> specs

> :boom: Reason for the failure: Ramda method can act as a transducer
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('dropLast', function() {
  it('can act as a transducer', function() {
    var dropLast2 = R.dropLast(2);
    assert.deepEqual(R.into([], dropLast2, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
    assert.deepEqual(R.into([], dropLast2, [1]), []);
  });
});
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

<summary>All Typescript definitions</summary>

```typescript
dropLastWhile(predicate: (x: string) => boolean, iterable: string): string;
dropLastWhile(predicate: (x: string) => boolean): (iterable: string) => string;
dropLastWhile<T>(predicate: (x: T) => boolean, iterable: readonly T[]): T[];
dropLastWhile<T>(predicate: (x: T) => boolean): <T>(iterable: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropLastWhile</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray.js'

export function dropLastWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropLastWhile(predicate, _iterable)
  }
  if (iterable.length === 0) return iterable
  const isArray = _isArray(iterable)

  if (typeof predicate !== 'function'){
    throw new Error(`'predicate' is from wrong type ${ typeof predicate }`)
  }
  if (!isArray && typeof iterable !== 'string'){
    throw new Error(`'iterable' is from wrong type ${ typeof iterable }`)
  }

  let found = false
  const toReturn = []
  let counter = iterable.length

  while (counter > 0){
    counter--
    if (!found && predicate(iterable[ counter ]) === false){
      found = true
      toReturn.push(iterable[ counter ])
    } else if (found){
      toReturn.push(iterable[ counter ])
    }
  }

  return isArray ? toReturn.reverse() : toReturn.reverse().join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropLastWhile as dropLastWhileRamda } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { dropLastWhile } from "./dropLastWhile";

const list = [1, 2, 3, 4, 5];
const str = "foobar";

test("with list", () => {
  const result = dropLastWhile((x) => x >= 3, list);
  expect(result).toEqual([1, 2]);
});

test("with string", () => {
  const result = dropLastWhile((x) => x !== "b")(str);
  expect(result).toBe("foob");
});

test("with empty list", () => {
  expect(dropLastWhile(() => true, [])).toEqual([]);
  expect(dropLastWhile(() => false, [])).toEqual([]);
});

const possiblePredicates = [
  (x) => x > 2,
  (x) => x < 2,
  (x) => x < -2,
  (x) => x > 10,
  "",
  [],
  [1],
];

const possibleIterables = [
  list,
  [{}, "1", 2],
  str,
  `${str}${str}`,
  /foo/g,
  Promise.resolve("foo"),
  2,
];

describe("brute force", () => {
  compareCombinations({
    fn: dropLastWhile,
    fnRamda: dropLastWhileRamda,
    firstInput: possiblePredicates,
    secondInput: possibleIterables,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 12,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 21,
          "SHOULD_THROW": 0,
        }
      `);
    },
  });
});
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropLastWhile} from 'rambda'

const list = [1, 2, 3]
const str = 'FOO'

describe('R.dropLastWhile', () => {
  it('with array', () => {
    const result = dropLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with array - curried', () => {
    const result = dropLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with string', () => {
    const result = dropLastWhile(x => x !== 'F', str)

    result // $ExpectType string
  })
  it('with string - curried', () => {
    const result = dropLastWhile(x => x !== 'F')(str)

    result // $ExpectType string
  })
})
```

</details>

*1 failed Ramda.dropLastWhile specs*

> :boom: Reason for the failure: Ramda method can act as a transducer

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeats

```typescript

dropRepeats<T>(list: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
dropRepeats<T>(list: readonly T[]): T[];
```

</details>

<details>

<summary><strong>R.dropRepeats</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

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
import { dropRepeats as dropRepeatsRamda } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { add } from "./add";
import { dropRepeats } from "./dropRepeats";

const list = [1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2, { a: 1 }, { a: 1 }];
const listClean = [1, 2, 3, 4, 5, 3, 2, { a: 1 }];

test("happy", () => {
  const result = dropRepeats(list);
  expect(result).toEqual(listClean);
});

const possibleLists = [
  [add(1), async () => {}, [1], [1], [2], [2]],
  [add(1), add(1), add(2)],
  [],
  1,
  /foo/g,
  Promise.resolve(1),
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possibleLists,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 3,
          "SHOULD_THROW": 0,
        }
      `);
    },
    fn: dropRepeats,
    fnRamda: dropRepeatsRamda,
  });
});
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

*1 failed Ramda.dropRepeats specs*

> :boom: Reason for the failure: Ramda method can act as a transducer

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeats)

### dropRepeatsWith

```typescript

dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean, list: readonly T[]): T[]
```

```javascript
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'))

// => [{a:1,b:2}, {a:2, b:4}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A1%2Cb%3A3%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D%0Aconst%20result%20%3D%20R.dropRepeatsWith(R.prop('a'))%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D">Try this <strong>R.dropRepeatsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean, list: readonly T[]): T[];
dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropRepeatsWith</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function dropRepeatsWith(predicate, list){
  if (arguments.length === 1){
    return _iterable => dropRepeatsWith(predicate, _iterable)
  }

  if (!_isArray(list)){
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
import { dropRepeatsWith as dropRepeatsWithRamda, eqProps } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { dropRepeatsWith } from "./dropRepeatsWith";
import { path } from "./path";

const eqI = eqProps("i");

test("happy", () => {
  const list = [{ i: 1 }, { i: 2 }, { i: 2 }, { i: 3 }];
  const expected = [{ i: 1 }, { i: 2 }, { i: 3 }];
  const result = dropRepeatsWith(eqI, list);
  expect(result).toEqual(expected);
});

test("keeps elements from the left predicate input", () => {
  const list = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 1,
      n: 2,
    },
    {
      i: 1,
      n: 3,
    },
    {
      i: 4,
      n: 1,
    },
    {
      i: 4,
      n: 2,
    },
  ];
  const expected = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 4,
      n: 1,
    },
  ];
  const result = dropRepeatsWith(eqI, list);
  expect(result).toEqual(expected);
});

const possiblePredicates = [
  null,
  undefined,
  (x) => x + 1,
  (x) => true,
  (x) => false,
  (x) => "",
  path(["a", "b"]),
];
const possibleLists = [
  null,
  undefined,
  [],
  [1],
  [{ a: { b: 1 } }, { a: { b: 1 } }],
  [/foo/g, /foo/g],
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possiblePredicates,
    secondInput: possibleLists,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 4,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
        }
      `);
    },
    fn: dropRepeatsWith,
    fnRamda: dropRepeatsWithRamda,
  });
});
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropRepeatsWith} from 'rambda'

interface Foo {
  a: number,
}

describe('R.dropRepeatsWith', () => {
  it('happy', () => {
    const result = dropRepeatsWith(
      (x: Foo, y: Foo) => {
        return x.a > y.a
      },
      [{a: 2}, {a: 1}]
    )

    result // $ExpectType { a: number; }[]
    result[0].a // $ExpectType number
  })
  it('curried', () => {
    const result = dropRepeatsWith((x: Foo, y: Foo) => {
      return x.a > y.a
    })([{a: 2}, {a: 1}])

    result // $ExpectType Foo[]
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

<summary>All Typescript definitions</summary>

```typescript
dropWhile(fn: Predicate<string>, iterable: string): string;
dropWhile(fn: Predicate<string>): (iterable: string) => string;
dropWhile<T>(fn: Predicate<T>, iterable: readonly T[]): T[];
dropWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropWhile</strong> source</summary>

```javascript
import { _isArray } from '../src/_internals/_isArray'

export function dropWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropWhile(predicate, _iterable)
  }
  const isArray = _isArray(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }
  let flag = false
  const holder = []
  let counter = -1

  while (counter++ < iterable.length - 1){
    if (flag){
      holder.push(iterable[ counter ])
    } else if (!predicate(iterable[ counter ])){
      if (!flag) flag = true

      holder.push(iterable[ counter ])
    }
  }

  return isArray ? holder : holder.join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropWhile as dropWhileRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils'
import { dropWhile } from './dropWhile'

const list = [ 1, 2, 3, 4 ]

test('happy', () => {
  const predicate = x => x < 3
  const result = dropWhile(predicate, list)
  expect(result).toEqual([3,4])
})

test('always true', () => {
  const predicate = () => true
  const result = dropWhileRamda(predicate, list)
  expect(result).toEqual([])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate, list)
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
        Object {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 14,
          "SHOULD_THROW": 0,
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropWhile} from 'rambda'

const list = [1, 2, 3, 4]

describe('R.dropWhile', () => {
  it('happy', () => {
    const result = dropWhile(x => x > 2, list)

    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = dropWhile<number>(x => x > 2)(list)

    result // $ExpectType number[]
  })
})

describe('with string as iterable', () => {
  const str = 'foobar'
  it('happy', () => {
    const result = dropWhile(x => x !== 'b', str)

    result // $ExpectType string
  })
  it('curried require explicit type', () => {
    const result = dropWhile(x => x !== 'b')(str)

    result // $ExpectType string
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
//=> [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstPredicate%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondPredicate%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%200%0Aconst%20predicate%20%3D%20R.either(firstPredicate%2C%20secondPredicate)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20predicate(15)%2C%0A%20%20predicate(8)%2C%0A%20%20predicate(7)%2C%0A%5D%0A%2F%2F%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.either</strong> example in Rambda REPL</a>

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
import { either } from './either'

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

<details>

<summary>1 failed <italic>Ramda.either</italic> specs

> :boom: Reason for the failure: Ramda library supports fantasy-land
</summary>

```javascript
var S = require('sanctuary');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('either', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.either(Just(true), Just(true)), Just(true));
    eq(R.either(Just(true), Just(false)), Just(true));
    eq(R.either(Just(false), Just(false)), Just(false));
    eq(R.either(Just(true), Nothing()), Nothing());
    eq(R.either(Nothing(), Just(false)), Nothing());
    eq(R.either(Nothing(), Nothing()), Nothing());
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#either)

### endsWith

```typescript

endsWith(target: string, str: string): boolean
```

Curried version of `String.prototype.endsWith`

> :boom: It doesn't work with arrays unlike its corresponding **Ramda** method.

```javascript
const str = 'foo-bar'
const target = '-bar'

const result = R.endsWith(target, str)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20target%20%3D%20'-bar'%0A%0Aconst%20result%20%3D%20R.endsWith(target%2C%20str)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.endsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, str: string): boolean;
endsWith(target: string): (str: string) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
export function endsWith(target, str){
  if (arguments.length === 1) return _str => endsWith(target, _str)

  return str.endsWith(target)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { endsWith } from './endsWith'

test('happy', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('does not work with arrays', () => {
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrowWithMessage(Error,
    'str.endsWith is not a function')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {endsWith} from 'rambda'

const target = 'foo'
const input = 'foo bar'

describe('R.endsWith', () => {
  it('happy', () => {
    const result = endsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(input)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.endsWith</italic> specs

> :boom: Reason for the failure: Rambda method doesn't support arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array ends with the provided value', function() {
    eq(R.endsWith(['c'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array ends with the provided values', function() {
    eq(R.endsWith(['b', 'c'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not end with the provided value', function() {
    eq(R.endsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not end with the provided values', function() {
    eq(R.endsWith(['a', 'b'], ['a', 'b', 'c']), false);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#endsWith)

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

<summary>All Typescript definitions</summary>

```typescript
eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;
```

</details>

<details>

<summary><strong>R.eqProps</strong> source</summary>

```javascript
import { curry } from "./curry";
import { equals } from "./equals";

function eqPropsFn(prop, obj1, obj2) {
  if(!obj1 || !obj2){
    throw new Error('wrong object inputs are passed to R.eqProps')
  }

  return equals(obj1[prop], obj2[prop])
}

export const eqProps = curry(eqPropsFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqProps as eqPropsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils'
import { eqProps } from './eqProps'

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

test('prop does not exist ', () => {
  const result = eqProps(
    'c', obj1, obj2
  )
  expect(result).toBeTrue()
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
      // console.log({ totalTestsCounter })

      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 120,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {eqProps} from 'rambda'

const obj1 = {a: {b: 1}, c: 2}
const obj2 = {a: {b: 1}, c: 3}

describe('R.eqProps', () => {
  it('happy', () => {
    const result = eqProps('a', obj1, obj2)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = eqProps('a', obj1)(obj2)

    result // $ExpectType boolean
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.equals</strong> example in Rambda REPL</a>

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
import { type } from './type'

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

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  const aType = type(a)
  if (aType !== type(b)) return false
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
// import { equals } from 'ramda'
import { equals } from './equals'

test('with array of objects', () => {
  const list1 = [ { a : 1 }, [ { b : 2 } ] ]
  const list2 = [ { a : 1 }, [ { b : 2 } ] ]
  const list3 = [ { a : 1 }, [ { b : 3 } ] ]

  expect(equals(list1, list2)).toBeTrue()
  expect(equals(list1, list3)).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toEqual(true)
  expect(equals(/s/, /d/)).toEqual(false)
  expect(equals(/a/gi, /a/gi)).toEqual(true)
  expect(equals(/a/gim, /a/gim)).toEqual(true)
  expect(equals(/a/gi, /a/i)).toEqual(false)
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBeTrue()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toEqual(true)
  expect(equals(new Number(0), new Number(1))).toEqual(false)
  expect(equals(new Number(1), new Number(0))).toEqual(false)
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toEqual(true)
  expect(equals(new String(''), new String('x'))).toEqual(false)
  expect(equals(new String('x'), new String(''))).toEqual(false)
  expect(equals(new String('foo'), new String('foo'))).toEqual(true)
  expect(equals(new String('foo'), new String('bar'))).toEqual(false)
  expect(equals(new String('bar'), new String('foo'))).toEqual(false)
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toEqual(true)
  expect(equals(new Boolean(false), new Boolean(false))).toEqual(true)
  expect(equals(new Boolean(true), new Boolean(false))).toEqual(false)
  expect(equals(new Boolean(false), new Boolean(true))).toEqual(false)
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toEqual(false)
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('YYY'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('XXX'))).toEqual(true)
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toEqual(false)
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toEqual(true)
  expect(equals(new Date(1), new Date(1))).toEqual(true)
  expect(equals(new Date(0), new Date(1))).toEqual(false)
  expect(equals(new Date(1), new Date(0))).toEqual(false)
  expect(equals(new Date(0), {})).toEqual(false)
  expect(equals({}, new Date(0))).toEqual(false)
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    b : 3,
    a : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 3,
    b : 3,
  })).toEqual(false)

  expect(equals({
    a : 2,
    b : 3,
    c : 1,
  },
  {
    a : 2,
    b : 3,
  })).toEqual(false)
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
    b : 2,
    a : 1,
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
    b : 2,
    a : 1,
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
      b : 2,
      a : 1,
      c : 3,
    },
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 3,
    a : 1,
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

  expect(result).toBeFalse()
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

<summary>14 failed <italic>Ramda.equals</italic> specs

> :boom: Reason for the failure: Rambda method doesn't support recursive data structures, objects with same enumerable properties, map/weakmap type of variables | Ramda dispatches to `equals` method recursively | Rambda method doesn't support equality of functions
</summary>

```javascript
/* global Map, Set, WeakMap, WeakSet */

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('equals', function() {
  var a = [];
  var b = a;
  it('never considers Boolean primitive equal to Boolean object', function() {
    eq(R.equals(true, new Boolean(true)), false);
    eq(R.equals(new Boolean(true), true), false);
    eq(R.equals(false, new Boolean(false)), false);
    eq(R.equals(new Boolean(false), false), false);
  });
  it('never considers number primitive equal to Number object', function() {
    eq(R.equals(0, new Number(0)), false);
    eq(R.equals(new Number(0), 0), false);
  });
  it('never considers string primitive equal to String object', function() {
    eq(R.equals('', new String('')), false);
    eq(R.equals(new String(''), ''), false);
    eq(R.equals('x', new String('x')), false);
    eq(R.equals(new String('x'), 'x'), false);
  });
  var supportsSticky = false;
  try { RegExp('', 'y'); supportsSticky = true; } catch (e) {}
  var supportsUnicode = false;
  try { RegExp('', 'u'); supportsUnicode = true; } catch (e) {}
  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  var c = {}; c.v = c;
  var d = {}; d.v = d;
  var e = []; e.push(e);
  var f = []; f.push(f);
  var nestA = {a:[1, 2, {c:1}], b:1};
  var nestB = {a:[1, 2, {c:1}], b:1};
  var nestC = {a:[1, 2, {c:2}], b:1};
  it('handles recursive data structures', function() {
    eq(R.equals(c, d), true);
    eq(R.equals(e, f), true);
    eq(R.equals(nestA, nestB), true);
    eq(R.equals(nestA, nestC), false);
  });
  it('requires that both objects have the same enumerable properties with the same values', function() {
    var a1 = [];
    var a2 = [];
    a2.x = 0;
    var b1 = new Boolean(false);
    var b2 = new Boolean(false);
    b2.x = 0;
    var d1 = new Date(0);
    var d2 = new Date(0);
    d2.x = 0;
    var n1 = new Number(0);
    var n2 = new Number(0);
    n2.x = 0;
    var r1 = /(?:)/;
    var r2 = /(?:)/;
    r2.x = 0;
    var s1 = new String('');
    var s2 = new String('');
    s2.x = 0;
    eq(R.equals(a1, a2), false);
    eq(R.equals(b1, b2), false);
    eq(R.equals(d1, d2), false);
    eq(R.equals(n1, n2), false);
    eq(R.equals(r1, r2), false);
    eq(R.equals(s1, s2), false);
  });
  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    var typArr1 = new ArrayBuffer(10);
    typArr1[0] = 1;
    var typArr2 = new ArrayBuffer(10);
    typArr2[0] = 1;
    var typArr3 = new ArrayBuffer(10);
    var intTypArr = new Int8Array(typArr1);
    typArr3[0] = 0;
    it('handles typed arrays', function() {
      eq(R.equals(typArr1, typArr2), true);
      eq(R.equals(typArr1, typArr3), false);
      eq(R.equals(typArr1, intTypArr), false);
    });
  }
  if (typeof Promise !== 'undefined') {
    it('compares Promise objects by identity', function() {
      var p = Promise.resolve(42);
      var q = Promise.resolve(42);
      eq(R.equals(p, p), true);
      eq(R.equals(p, q), false);
    });
  }
  if (typeof Map !== 'undefined') {
    it('compares Map objects by value', function() {
      eq(R.equals(new Map([]), new Map([])), true);
      eq(R.equals(new Map([]), new Map([[1, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a'], [2, 'b']]), new Map([[2, 'b'], [1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a']]), new Map([[2, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Map();
      var b = new Map();
      a.set(a, a);
      eq(R.equals(a, b), false);
      a.set(b, b);
      b.set(b, b);
      b.set(a, a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof Set !== 'undefined') {
    it('compares Set objects by value', function() {
      eq(R.equals(new Set([]), new Set([])), true);
      eq(R.equals(new Set([]), new Set([1])), false);
      eq(R.equals(new Set([1]), new Set([])), false);
      eq(R.equals(new Set([1, 2]), new Set([2, 1])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Set();
      var b = new Set();
      a.add(a);
      eq(R.equals(a, b), false);
      a.add(b);
      b.add(b);
      b.add(a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof WeakMap !== 'undefined') {
    it('compares WeakMap objects by identity', function() {
      var m = new WeakMap([]);
      eq(R.equals(m, m), true);
      eq(R.equals(m, new WeakMap([])), false);
    });
  }
  if (typeof WeakSet !== 'undefined') {
    it('compares WeakSet objects by identity', function() {
      var s = new WeakSet([]);
      eq(R.equals(s, s), true);
      eq(R.equals(s, new WeakSet([])), false);
    });
  }
  it('dispatches to `equals` method recursively', function() {
    function Left(x) { this.value = x; }
    Left.prototype.equals = function(x) {
      return x instanceof Left && R.equals(x.value, this.value);
    };
    function Right(x) { this.value = x; }
    Right.prototype.equals = function(x) {
      return x instanceof Right && R.equals(x.value, this.value);
    };
    eq(R.equals(new Left([42]), new Left([42])), true);
    eq(R.equals(new Left([42]), new Left([43])), false);
    eq(R.equals(new Left(42), {value: 42}), false);
    eq(R.equals({value: 42}, new Left(42)), false);
    eq(R.equals(new Left(42), new Right(42)), false);
    eq(R.equals(new Right(42), new Left(42)), false);
    eq(R.equals([new Left(42)], [new Left(42)]), true);
    eq(R.equals([new Left(42)], [new Right(42)]), false);
    eq(R.equals([new Right(42)], [new Left(42)]), false);
    eq(R.equals([new Right(42)], [new Right(42)]), true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#equals)

### evolve

```typescript

evolve<T, U>(rules: Array<(x: T) => U>, list: T[]): U[]
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

<summary>All Typescript definitions</summary>

```typescript
evolve<T, U>(rules: Array<(x: T) => U>, list: T[]): U[];
evolve<T, U>(rules: Array<(x: T) => U>) : (list: T[]) => U[];
evolve<E extends Evolver, V extends Evolvable<E>>(rules: E, obj: V): Evolve<V, E>;
evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;
```

</details>

<details>

<summary><strong>R.evolve</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { mapArray, mapObject } from './map'
import { type } from './type'

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
import { evolve as evolveRamda } from "ramda";

import { add } from "../rambda.js";
import { compareCombinations, compareToRamda } from "./_internals/testUtils";
import { evolve } from "./evolve";

test("happy", () => {
  const rules = {
    foo: add(1),
    bar: add(-1),
  };
  const input = {
    a: 1,
    foo: 2,
    bar: 3,
  };
  const result = evolve(rules, input);
  expect(result).toEqual({
    a: 1,
    foo: 3,
    bar: 2,
  });
});

test("is recursive", () => {
  const rules = {
    nested: {
      second: add(-1),
      third: add(1),
    },
  };
  const object = {
    first: 1,
    nested: {
      second: 2,
      third: 3,
    },
  };
  const expected = {
    first: 1,
    nested: {
      second: 1,
      third: 4,
    },
  };
  const result = evolve(rules, object);
  expect(result).toEqual(expected);
});

test("ignores primitive value rulesormations", () => {
  const rules = {
    n: 2,
    m: "foo",
  };
  const object = {
    n: 0,
    m: 1,
  };
  const expected = {
    n: 0,
    m: 1,
  };
  const result = evolve(rules, object);
  expect(result).toEqual(expected);
});

test("with array", () => {
  const rules = [add(1), add(-1)];
  const list = [100, 1400];
  const expected = [101, 1399];
  const result = evolve(rules, list);
  expect(result).toEqual(expected);
});

const rulesObject = { a: add(1) };
const rulesList = [add(1)];
const possibleIterables = [null, undefined, "", 42, [], [1], { a: 1 }];
const possibleRules = [...possibleIterables, rulesList, rulesObject];

describe("brute force", () => {
  compareCombinations({
    firstInput: possibleRules,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 4,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
        }
      `);
    },
    secondInput: possibleIterables,
    fn: evolve,
    fnRamda: evolveRamda,
  });
});
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

*1 failed Ramda.evolve specs*

> :boom: Reason for the failure: Rambda throws if `iterable` input is neither array nor object

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#evolve)

### F

```typescript

F(): boolean
```

```javascript
F() // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20F()%20%2F%2F%20%3D%3E%20false">Try this <strong>R.F</strong> example in Rambda REPL</a>

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

filter<T>(predicate: FilterFunctionArray<T>): (input: readonly T[]) => T[]
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

<summary>All Typescript definitions</summary>

```typescript
filter<T>(predicate: FilterFunctionArray<T>): (input: readonly T[]) => T[];
filter<T>(predicate: FilterFunctionArray<T>, input: readonly T[]): T[];
filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(
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
  if (arguments.length === 1){
    return _iterable => filter(predicate, _iterable)
  }
  if (!iterable) return []
  if (_isArray(iterable)) return filterArray(predicate, iterable)

  return filterObject(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import Ramda from 'ramda'

import { F } from './F'
import { filter } from './filter'
import { T } from './T'

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

test('bad inputs difference between Ramda and Rambda', () => {
  expect(filter(T)(undefined)).toEqual([])
  expect(filter(F, null)).toEqual([])
  expect(() => Ramda.filter(T, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'filter\' of null')
  expect(() => Ramda.filter(T, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'filter\' of undefined')
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

<summary>1 failed <italic>Ramda.filter</italic> specs

> :boom: Reason for the failure: Ramda method dispatches to `filter` method of object
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var Maybe = require('./shared/Maybe');

describe('filter', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to passed-in non-Array object with a `filter` method', function() {
    var f = {filter: function(f) { return f('called f.filter'); }};
    eq(R.filter(function(s) { return s; }, f), 'called f.filter');
  });
  it('correctly uses fantasy-land implementations', function() {
    var m1 = Maybe.Just(-1);
    var m2 = R.filter(function(x) { return x > 0; } , m1);
    eq(m2.isNothing, true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

### find

```typescript

find<T>(predicate: (x: T) => boolean, list: readonly T[]): T | undefined
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

<summary>All Typescript definitions</summary>

```typescript
find<T>(predicate: (x: T) => boolean, list: readonly T[]): T | undefined;
find<T>(predicate: (x: T) => boolean): (list: readonly T[]) => T | undefined;
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
import { find } from './find'
import { propEq } from './propEq'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#find)

### findIndex

```typescript

findIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number
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

<summary>All Typescript definitions</summary>

```typescript
findIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
findIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;
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
import { findIndex } from './findIndex'
import { propEq } from './propEq'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findIndex)

### findLast

```typescript

findLast<T>(fn: (x: T) => boolean, list: readonly T[]): T | undefined
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

<summary>All Typescript definitions</summary>

```typescript
findLast<T>(fn: (x: T) => boolean, list: readonly T[]): T | undefined;
findLast<T>(fn: (x: T) => boolean): (list: readonly T[]) => T | undefined;
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
import { findLast } from './findLast'

test('happy', () => {
  const result = findLast(x => {
    return x > 1
  },
  [ 1, 1, 1, 2, 3, 4, 1 ]
  )
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

findLastIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number
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

<summary>All Typescript definitions</summary>

```typescript
findLastIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
findLastIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;
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
import { findLastIndex } from './findLastIndex'

test('happy', () => {
  const result = findLastIndex((x) => {

    return x > 1
  },
  [ 1, 1, 1, 2, 3, 4, 1 ])

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

flatten<T>(list: readonly any[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(list: readonly any[]): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

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
import { flatten } from './flatten'

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
  R.flip(1, 6)
]  
// => [6, -6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20subtractFlip(1%2C7)%2C%0A%20%20R.flip(1%2C%206)%0A%5D%20%20%0A%2F%2F%20%3D%3E%20%5B6%2C%20-6%5D">Try this <strong>R.flip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
flip<F extends (...args: any) => any, P extends FunctionToolbelt.Parameters<F>>(fn: F): FunctionToolbelt.Curry<(...args: ListToolbelt.Merge<[P[1], P[0]], P>) => FunctionToolbelt.Return<F>>;
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
import { flip } from './flip'
import { subtract } from './subtract'
import { update } from './update'

test('function with arity of 2', () => {
  const subtractFlipped = flip(subtract)

  expect(subtractFlipped(1)(7)).toEqual(6)
  expect(subtractFlipped(1, 7)).toEqual(6)
  expect(subtractFlipped(
    1, 7, 9
  )).toEqual(6)
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
  expect(result).toEqual('-1==-1')
})

test('function with arity of 5', () => {
  const testFunction = (
    a, b, c, d, e
  ) => `${ a - b }==${ c - d - e }`
  const testFunctionFlipped = flip(testFunction)

  expect(() => testFunctionFlipped(
    1, 2, 3, 4, 5
  )).toThrowWithMessage(Error,
    'R.flip doesn\'t work with arity > 4')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import * as R from 'ramda'
import {flip, subtract} from 'rambda'

describe('R.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = flip(subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (y: number) => number
  })

  it('function with arity of 3', () => {
    function testFunction(a: number, b: string, c: number): string {
      return `${b}==${a + c}`
    }
    const flippedTestFunction = flip(testFunction)

    const result = flippedTestFunction('foo', 1, 2)
    result // $ExpectType string
  })
})

describe('Ramda.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = R.flip(R.subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (b: number) => number
  })
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.flip</italic> specs

> :boom: Reason for the failure: Ramda.flip returns a curried function | Rambda.flip work only for functions with arity below 5
</summary>

```javascript
var jsv = require('jsverify');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var funcN = require('./shared/funcN');
describe('flip', function() {
  it('returns a function which inverts the first two arguments to the supplied function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f);
    eq(f('a', 'b', 'c'), 'a b c');
    eq(g('a', 'b', 'c'), 'b a c');
  });
  it('returns a curried function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f)('a');
    eq(g('b', 'c'), 'b a c');
  });
  it('returns a function with the correct arity', function() {
    var f2 = function(a, b) {return a + ' ' + b;};
    var f3 = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    eq(R.flip(f2).length, 2);
    eq(R.flip(f3).length, 3);
  });
});
describe('flip properties', function() {
  jsv.property('inverts first two arguments', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var g = R.flip(f);
    return R.equals(f(a, b, c), g(b, a, c));
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flip)

### forEach

```typescript

forEach<T>(fn: MapFunctionArray<T, void>, list: readonly T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

> :boom: It works with objects, unlike `Ramda`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect //=> {foo1: 1, foo2: 2}
result //=> [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0AsideEffect%20%2F%2F%3D%3E%20%7Bfoo1%3A%201%2C%20foo2%3A%202%7D%0Aresult%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.forEach</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
forEach<T>(fn: MapFunctionArray<T, void>, list: readonly T[]): T[];
forEach<T>(fn: MapFunctionArray<T, void>): (list: readonly T[]) => T[];
forEach<T>(fn: MapFunctionObject<T, void>, list: Dictionary<T>): Dictionary<T>;
forEach<T, U>(fn: MapFunctionObject<T, void>): (list: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.forEach</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

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
import { forEach } from './forEach'
import { type } from './type'

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

test('happy', () => {
  const sideEffect = {}
  forEach(x => sideEffect[ `foo${ x }` ] = x + 10)([ 1, 2 ])

  expect(sideEffect).toEqual({
    foo1 : 11,
    foo2 : 12,
  })
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

<details>

<summary>1 failed <italic>Ramda.forEach</italic> specs

> :boom: Reason for the failure: Ramda method dispatches to `forEach` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('forEach', function() {
  var list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
  it('dispatches to `forEach` method', function() {
    var dispatched = false;
    var fn = function() {};
    function DummyList() {}
    DummyList.prototype.forEach = function(callback) {
      dispatched = true;
      eq(callback, fn);
    };
    R.forEach(fn, new DummyList());
    eq(dispatched, true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEach)

### fromPairs

```typescript

fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V }
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

<summary>All Typescript definitions</summary>

```typescript
fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };
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
import { fromPairs } from './fromPairs'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {fromPairs} from 'rambda'

describe('R.fromPairs - require explicit type for input list', () => {
  it('with string index', () => {
    const list: [string, number][] = [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]
    const result = fromPairs(list)

    result // $ExpectType { [index: string]: number; }
  })
  it('with number index', () => {
    const list: [number, string][] = [
      [10, 'foo'],
      [20, 'bar'],
      [30, 'baz'],
    ]
    const result = fromPairs(list)

    result // $ExpectType { [index: number]: string; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#fromPairs)

### groupBy

```typescript

groupBy<T>(groupFn: (x: T) => string, list: readonly T[]): { [index: string]: T[] }
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

<summary>All Typescript definitions</summary>

```typescript
groupBy<T>(groupFn: (x: T) => string, list: readonly T[]): { [index: string]: T[] };
groupBy<T>(groupFn: (x: T) => string): (list: readonly T[]) => { [index: string]: T[] };
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
import { groupBy } from './groupBy'
import { prop } from './prop'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {groupBy} from 'rambda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'barr', 'bazzz']

    const result = groupBy(groupByFn, list)
    result // $ExpectType { [index: string]: string[]; }

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType { [index: string]: string[]; }
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.groupBy</italic> specs

> :boom: Reason for the failure: Ramda method support transforms
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var _isTransformer = require('rambda/internal/_isTransformer');

describe('groupBy', function() {
  it('dispatches on transformer objects in list position', function() {
    var byType = R.prop('type');
    var xf = {
      '@@transducer/init': function() { return {}; },
      '@@transducer/result': function(x) { return x; },
      '@@transducer/step': R.mergeRight
    };
    eq(_isTransformer(R.groupBy(byType, xf)), true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupBy)

### groupWith

```typescript

groupWith<T>(compareFn: (x: T, y: T) => boolean): (input: readonly T[]) => T[][]
```

It returns separated version of list or string `input`, where separation is done with equality `compareFn` function.

```javascript
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try this <strong>R.groupWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (input: readonly T[]) => T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, input: readonly T[]): T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, input: string): string[];
```

</details>

<details>

<summary><strong>R.groupWith</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function groupWith(compareFn, list){
  if (!_isArray(list)) throw new TypeError('list.reduce is not a function')

  const clone = list.slice()

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
import { equals } from './equals'
import { groupWith } from './groupWith'

test('issue is fixed', () => {
  const result = groupWith(equals, [ 1, 2, 2, 3 ])
  const expected = [ [ 1 ], [ 2, 2 ], [ 3 ] ]
  expect(result).toEqual(expected)
})

test('long list', () => {
  const result = groupWith(equals, [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    21,
    21,
    1,
    2,
  ])

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
  expect(() => groupWith(equals, 'Mississippi')).toThrowWithMessage(TypeError,
    'list.reduce is not a function')
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {groupWith} from 'rambda'

describe('R.groupWith', () => {
  it('happy', () => {
    const groupWithFn = (x: string, y: string) => x.length === y.length
    const list = ['foo', 'bar', 'bazzz']

    const result = groupWith(groupWithFn, list)
    const curriedResult = groupWith(groupWithFn)(list)
    result // $ExpectType string[][]
    curriedResult // $ExpectType string[][]
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.groupWith</italic> specs

> :boom: Reason for the failure: Ramda method support string
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('groupWith', function() {
  it('can be turned into the original list through concatenation', function() {
    var list = [1, 1, 2, 3, 4, 4, 5, 5];
    eq(R.unnest(R.groupWith(R.equals, list)), list);
    eq(R.unnest(R.groupWith(R.complement(R.equals), list)), list);
    eq(R.unnest(R.groupWith(R.T, list)), list);
    eq(R.unnest(R.groupWith(R.F, list)), list);
  });
  it('also works on strings', function() {
    eq(R.groupWith(R.equals)('Mississippi'), ['M','i','ss','i','ss','i','pp','i']);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupWith)

### has

```typescript

has<T>(prop: string, obj: T): boolean
```

It returns `true` if `obj` has property `prop`.

```javascript
const obj = {a: 1}

const result = [
  R.has('a', obj),
  R.has('b', obj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.has('a'%2C%20obj)%2C%0A%20%20R.has('b'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.has</strong> example in Rambda REPL</a>

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

  return obj[ prop ] !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { has } from './has'

test('happy', () => {
  expect(has('a')({ a : 1 })).toBeTrue()
  expect(has('b', { a : 1 })).toBeFalse()
})

test('with non-object', () => {
  expect(has('a', undefined)).toEqual(false)
  expect(has('a', null)).toEqual(false)
  expect(has('a', true)).toEqual(false)
  expect(has('a', '')).toEqual(false)
  expect(has('a', /a/)).toEqual(false)
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

<details>

<summary>1 failed <italic>Ramda.has</italic> specs

> :boom: Reason for the failure: Rambda method does check properties from the prototype chain
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('has', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};
  it('does not check properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};
    var bob = new Person();
    eq(R.has('age', bob), false);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#has)

### hasPath

```typescript

hasPath<T>(
  path: string | readonly string[],
  input: object
): boolean
```

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

```javascript
const path = 'a.b'
const pathAsArray = ['a', 'b']
const obj = {a: {b: []}}

const result = [
  R.hasPath(path, obj),
  R.hasPath(pathAsArray, obj),
  R.hasPath('a.c', obj),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20pathAsArray%20%3D%20%5B'a'%2C%20'b'%5D%0Aconst%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%20%5B%5D%7D%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.hasPath(path%2C%20obj)%2C%0A%20%20R.hasPath(pathAsArray%2C%20obj)%2C%0A%20%20R.hasPath('a.c'%2C%20obj)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.hasPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
hasPath<T>(
  path: string | readonly string[],
  input: object
): boolean;
hasPath<T>(
  path: string | readonly string[]
): (input: object) => boolean;
```

</details>

<details>

<summary><strong>R.hasPath</strong> source</summary>

```javascript
import { path } from './path'

export function hasPath(maybePath, obj){
  if (arguments.length === 1){
    return objHolder => hasPath(maybePath, objHolder)
  }

  return path(maybePath, obj) !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { hasPath } from './hasPath'

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

head<T>(input: readonly T[]): T | undefined
```

It returns the first element of list or string `input`.

```javascript
const result = [
  R.head([1, 2, 3]),
  R.head('foo') 
]
// => [1, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.head(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.head('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'f'%5D">Try this <strong>R.head</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
head<T>(input: readonly T[]): T | undefined;
head(input: string): string;
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
import { head } from './head'

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
const obj = {a: 1};
R.identical(obj, obj); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A%201%7D%3B%0AR.identical(obj%2C%20obj)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try this <strong>R.identical</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
identical<T>(x: T, y: T): boolean;
identical<T>(x: T): (y: T) => boolean;
```

</details>

<details>

<summary><strong>R.identical</strong> source</summary>

```javascript
import _objectIs from './_internals/_objectIs'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return _objectIs(a, b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { F, T } from '../rambda'
import { _isInteger } from './_internals/_isInteger'
import { _objectIs } from './_internals/_objectIs'
import { identical } from './identical'

test('with boolean', () => {
  expect(F()).toBeFalse()
  expect(T()).toBeTrue()
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBeTrue()
  expect(_isInteger(0.3)).toBeFalse()
})

test('internal objectIs', () => {
  expect(_objectIs(1, 1)).toBeTrue()
  expect(_objectIs(NaN, NaN)).toBeTrue()
})

test('identical', () => {
  const a = {}

  expect(identical(100)(100)).toEqual(true)
  expect(identical(100, '100')).toEqual(false)
  expect(identical('string', 'string')).toEqual(true)
  expect(identical([], [])).toEqual(false)
  expect(identical(a, a)).toEqual(true)
  expect(identical(undefined, undefined)).toEqual(true)
  expect(identical(null, undefined)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {identical} from 'rambda'

describe('R.identical', () => {
  it('happy', () => {
    const result = identical(4, 1)
    const curriedResult = identical(4)(1)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
  it('with object', () => {
    const result = identical({a: 1}, {b: 2})
    result // $ExpectType boolean
  })
})

/*
    in curried version Typescript correctly catch errors
    but it doesn't do so in the standart definition
    
    identical({a:1},{b:2})
    identical({a:1})({b:2})
*/
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

<summary>All Typescript definitions</summary>

```typescript
identity<T>(input: T): T;
```

</details>

<details>

<summary><strong>R.identity</strong> source</summary>

```javascript
export function identity(input){
  return input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { identity } from './identity'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toEqual(true)
  expect(identity({ a : 1 })).toEqual({ a : 1 })
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

ifElse<T, U>(
  condition: (x: T) => boolean, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
): (x: T) => U
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

<summary>All Typescript definitions</summary>

```typescript
ifElse<T, U>(
  condition: (x: T) => boolean, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
): (x: T) => U;
ifElse<T, K, U>(
  condition: (x: T, y: K) => boolean, 
  onTrue: (x: T, y: K) => U, 
  onFalse: (x: T, y: K) => U, 
): (x: T, y: K) => U;
```

</details>

<details>

<summary><strong>R.ifElse</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { always } from './always'
import { has } from './has'
import { identity } from './identity'
import { ifElse } from './ifElse'
import { prop } from './prop'

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

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function (a){
    return a
  }
  const v = function (){
    return true
  }
  const onTrue = function (a, b){
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(
    v, onTrue, identity
  )(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(
    false, always(true), always(false)
  )

  expect(fn()).toEqual(false)
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
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

<summary>2 failed <italic>Ramda.ifElse</italic> specs

> :boom: Reason for the failure: Rambda method doesn't return a curried function
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('ifElse', function() {
  var t = function(a) { return a + 1; };
  var identity = function(a) { return a; };
  var isArray = function(a) { return Object.prototype.toString.call(a) === '[object Array]'; };
  it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', function() {
    function a0() { return 0; }
    function a1(x) { return x; }
    function a2(x, y) { return x + y; }
    eq(R.ifElse(a0, a1, a2).length, 2);
    eq(R.ifElse(a0, a2, a1).length, 2);
    eq(R.ifElse(a1, a0, a2).length, 2);
    eq(R.ifElse(a1, a2, a0).length, 2);
    eq(R.ifElse(a2, a0, a1).length, 2);
    eq(R.ifElse(a2, a1, a0).length, 2);
  });
  it('returns a curried function', function() {
    var v = function(a) { return typeof a === 'number'; };
    var ifIsNumber = R.ifElse(v);
    eq(ifIsNumber(t, identity)(15), 16);
    eq(ifIsNumber(t, identity)('hello'), 'hello');
    var fn = R.ifElse(R.gt, R.subtract, R.add);
    eq(fn(2)(7), 9);
    eq(fn(2, 7), 9);
    eq(fn(7)(2), 5);
    eq(fn(7, 2), 5);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElse)

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

<summary>All Typescript definitions</summary>

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
import { inc } from './inc'

test('happy', () => {
  expect(inc(1)).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#inc)

### includes

```typescript

includes(valueToFind: string, input: readonly string[] | string): boolean
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

<summary>All Typescript definitions</summary>

```typescript
includes(valueToFind: string, input: readonly string[] | string): boolean;
includes(valueToFind: string): (input: readonly string[] | string) => boolean;
includes<T>(valueToFind: T, input: readonly T[]): boolean;
includes<T>(valueToFind: T): (input: readonly T[]) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function includes(valueToFind, input){
  if (arguments.length === 1) return _input => includes(valueToFind, _input)
  if (typeof input === 'string'){
    return input.includes(valueToFind)
  }
  if (!input){
    throw new TypeError(`Cannot read property \'indexOf\' of ${ input }`)
  }
  if (!_isArray(input)) return false

  let index = -1

  while (++index < input.length){
    if (equals(input[ index ], valueToFind)){
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
import R from 'ramda'

import { includes } from './includes'

test('includes with string', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTrue()
  expect(R.includes('bar')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(R.includes('never', str)).toBeFalse()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTrue()
  expect(R.includes(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(R.includes(4, arr)).toBeFalse()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = R.includes(1, /foo/g)
  expect(result).toBeFalse()
  expect(ramdaResult).toBeFalse()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(() => R.includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(() => includes(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
  expect(() => R.includes(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {includes} from 'ramda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({a: {b: '1'}}, list)
    /*
      should work:

      const resultCurried = includes({a: {b: '1'}})(list)
    */
    result // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = includes('oo', 'foo')
    const resultCurried = includes('oo')('foo')

    result // $ExpectType boolean
    resultCurried // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.includes</italic> specs

> :boom: Reason for the failure: Ramda method pass to `equals` method if available
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('includes', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.includes(0, [-0]), false);
    eq(R.includes(-0, [0]), false);
    eq(R.includes(NaN, [NaN]), true);
    eq(R.includes(new Just([42]), [new Just([42])]), true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#includes)

### indexBy

```typescript

indexBy<T>(condition: (x: T) => string, list: readonly T[]): { [key: string]: T }
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

<summary>All Typescript definitions</summary>

```typescript
indexBy<T>(condition: (x: T) => string, list: readonly T[]): { [key: string]: T };
indexBy<T>(condition: string, list: readonly T[]): { [key: string]: T };
indexBy<T>(condition: (x: T) => string): (list: readonly T[]) => { [key: string]: T };
indexBy<T>(condition: string): (list: readonly T[]) => { [key: string]: T };
```

</details>

<details>

<summary><strong>R.indexBy</strong> source</summary>

```javascript
import { path } from './path'

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
import { indexBy } from './indexBy'
import { prop } from './prop'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {indexBy} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('indexBy', () => {
  it('happy', () => {
    const result = indexBy<any>(x => x.a.b, list)
    const resultCurried = indexBy<any>(x => x.a.b)(list)
    result // $ExpectType { [key: string]: any; }
    resultCurried // $ExpectType { [key: string]: any; }
  })

  it('with string', () => {
    const result = indexBy<any>('a.b', list)
    const resultCurried = indexBy<any>('a.b')(list)
    result // $ExpectType { [key: string]: any; }
    resultCurried // $ExpectType { [key: string]: any; }
  })

  it('with interface', () => {
    interface Foo {
      a: string,
    }
    const interfaceList = [{a: 'foo'}, {a: 'bar'}]
    const result = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    }, interfaceList)
    const resultCurried = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    })(interfaceList)
    result // $ExpectType { [key: string]: Foo; }
    resultCurried // $ExpectType { [key: string]: Foo; }
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.indexBy</italic> specs

> :boom: Reason for the failure: Ramda method can act as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('indexBy', function() {
  it('can act as a transducer', function() {
    var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    var transducer = R.compose(
      R.indexBy(R.prop('id')),
      R.map(R.pipe(
        R.adjust(0, R.toUpper),
        R.adjust(1, R.omit(['id']))
      )));
    var result = R.into({}, transducer, list);
    eq(result, {ABC: {title: 'B'}, XYZ: {title: 'A'}});
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexBy)

### indexOf

```typescript

indexOf<T>(valueToFind: T, list: readonly T[]): number
```

It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

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

<summary>All Typescript definitions</summary>

```typescript
indexOf<T>(valueToFind: T, list: readonly T[]): number;
indexOf<T>(valueToFind: T): (list: readonly T[]) => number;
```

</details>

<details>

<summary><strong>R.indexOf</strong> source</summary>

```javascript
export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => indexOf(valueToFind, _list)
  }

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === valueToFind){
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
import { indexOf } from './indexOf'

test('happy', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {indexOf} from 'rambda'

describe('R.indexOf', () => {
  it('happy', () => {
    const list = [1, 2, 3]
    const result = indexOf(1, list)
    const curriedResult = indexOf(1)(list)

    result // $ExpectType number
    curriedResult // $ExpectType number
  })
})
```

</details>

<details>

<summary>2 failed <italic>Ramda.indexOf</italic> specs

> :boom: Reason for the failure: Ramda method dispatches to `indexOf` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('indexOf', function() {
  var input = [1, 2, 3, 4, 5];
  var list = [1, 2, 3];
  list[-2] = 4; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.indexOf(0, [-0]), -1);
    eq(R.indexOf(-0, [0]), -1);
    eq(R.indexOf(NaN, [NaN]), 0);
    eq(R.indexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `indexOf` method', function() {
    function Empty() {}
    Empty.prototype.indexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.indexOf = function(x) {
      var idx = this.tail.indexOf(x);
      return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.indexOf('a', 'banana'), 1);
    eq(R.indexOf('x', 'banana'), -1);
    eq(R.indexOf('a', list), 1);
    eq(R.indexOf('x', list), -1);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexOf)

### init

```typescript

init<T>(input: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
init<T>(input: readonly T[]): T[];
init(input: string): string;
```

</details>

<details>

<summary><strong>R.init</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function init(listOrString){
  if (typeof listOrString === 'string') return listOrString.slice(0, -1)

  return listOrString.length ? baseSlice(
    listOrString, 0, -1
  ) : []
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { init } from './init'

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
  it('with list', () => {
    const result = init([1, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#init)

### intersection

```typescript

intersection<T>(listA: readonly T[], listB: readonly T[]): T[]
```

It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try this <strong>R.intersection</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
intersection<T>(listA: readonly T[], listB: readonly T[]): T[];
intersection<T>(listA: readonly T[]): (listB: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.intersection</strong> source</summary>

```javascript
import { filter } from './filter'
import { includes } from './includes'

export function intersection(listA, listB){
  if (arguments.length === 1) return _list => intersection(listA, _list)

  return filter(value => includes(value, listB), listA)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersection } from './intersection'

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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {intersection} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 3, 5]

describe('R.intersection', () => {
  it('happy', () => {
    const result = intersection(list1, list2)
    result // $ExpectType number[]

    const curriedResult = intersection(list1)(list2)
    curriedResult // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

```typescript

intersperse<T>(separator: T, list: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
intersperse<T>(separator: T, list: readonly T[]): T[];
intersperse<T>(separator: T): (list: readonly T[]) => T[];
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
import { intersperse } from './intersperse'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {intersperse} from 'rambda'

describe('R.intersperse', () => {
  it('happy', () => {
    const result = intersperse(1, [1, 2, 3])
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersperse)

### is

```typescript

is(targetPrototype: any, x: any): boolean
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

<summary>All Typescript definitions</summary>

```typescript
is(targetPrototype: any, x: any): boolean;
is(targetPrototype: any): (x: any) => boolean;
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
import { is } from './is'

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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {is} from 'rambda'

describe('R.is', () => {
  it('happy', () => {
    const result = is(String, 'foo')
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = is(Number)(1)
    result // $ExpectType boolean
  })
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

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
```

</details>

<details>

<summary><strong>R.isEmpty</strong> source</summary>

```javascript
import { type } from './type'

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
import { isEmpty } from './isEmpty'

test('happy', () => {
  expect(isEmpty(undefined)).toEqual(false)
  expect(isEmpty('')).toEqual(true)
  expect(isEmpty(null)).toEqual(false)
  expect(isEmpty(' ')).toEqual(false)
  expect(isEmpty(new RegExp(''))).toEqual(false)
  expect(isEmpty([])).toEqual(true)
  expect(isEmpty([ [] ])).toEqual(false)
  expect(isEmpty({})).toEqual(true)
  expect(isEmpty({ x : 0 })).toEqual(false)
  expect(isEmpty(0)).toEqual(false)
  expect(isEmpty(NaN)).toEqual(false)
  expect(isEmpty([ '' ])).toEqual(false)
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

<summary>1 failed <italic>Ramda.isEmpty</italic> specs

> :boom: Reason for the failure: Ramda method supports typed arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('isEmpty', function() {
  it('returns true for empty typed array', function() {
    eq(R.isEmpty(Uint8Array.from('')), true);
    eq(R.isEmpty(Float32Array.from('')), true);
    eq(R.isEmpty(new Float32Array([])), true);
    eq(R.isEmpty(Uint8Array.from('1')), false);
    eq(R.isEmpty(Float32Array.from('1')), false);
    eq(R.isEmpty(new Float32Array([1])), false);
  });
});
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
import { isNil } from './isNil'

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

join<T>(glue: string, list: readonly T[]): string
```

It returns a string of all `list` instances joined with a `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try this <strong>R.join</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
join<T>(glue: string, list: readonly T[]): string;
join<T>(glue: string): (list: readonly T[]) => string;
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
import { join } from './join'

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

### keys

```typescript

keys<T extends object>(x: T): (keyof T)[]
```

It applies `Object.keys` over `x` and returns its keys.

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try this <strong>R.keys</strong> example in Rambda REPL</a>

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
import { keys } from './keys'

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

<details>

<summary>1 failed <italic>Ramda.keys</italic> specs

> :boom: Reason for the failure: Ramda method works for primitives
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('keys', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();
  it('works for primitives', function() {
    eq(R.keys(null), []);
    eq(R.keys(undefined), []);
    eq(R.keys(55), []);
    eq(R.keys('foo'), []);
    eq(R.keys(true), []);
    eq(R.keys(false), []);
    eq(R.keys(NaN), []);
    eq(R.keys(Infinity), []);
    eq(R.keys([]), []);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#keys)

### last

```typescript

last(str: string): string
```

It returns the last element of `input`, as the `input` can be either a string or an array.

```javascript
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.last(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.last('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20'o'%5D">Try this <strong>R.last</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
last(str: string): string;
last(emptyList: []): undefined;
last<T extends any>(list: readonly T[]): T | undefined;
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
import { last } from './last'

test('happy', () => {
  expect(last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
  expect(last([])).toEqual(undefined)
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

  it('empty array', () => {
    const result = last([])
    result // $ExpectType undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#last)

### lastIndexOf

```typescript

lastIndexOf<T>(target: T, list: readonly T[]): number
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

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: readonly T[]): number;
lastIndexOf<T>(target: T): (list: readonly T[]) => number;
```

</details>

<details>

<summary><strong>R.lastIndexOf</strong> source</summary>

```javascript
import { equals } from './equals'

export function lastIndexOf(target, list){
  if (arguments.length === 1) return _list => lastIndexOf(target, _list)

  let index = list.length

  while (--index > 0){
    if (equals(list[ index ], target)){
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
import { lastIndexOf } from './lastIndexOf'

test('happy', () => {
  const a = lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
  const b = lastIndexOf(1)([ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(3)
  expect(b).toEqual(3)
})

test('false', () => {
  const a = lastIndexOf(10, [ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(-1)
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

<summary>3 failed <italic>Ramda.lastIndexOf</italic> specs

> :boom: Reason for the failure: Ramda method dispatches to `lastIndexOf` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('lastIndexOf', function() {
  var input = [1, 2, 3, 4, 5, 1];
  var list = ['a', 1, 'a'];
  list[-2] = 'a'; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.lastIndexOf(0, [-0]), -1);
    eq(R.lastIndexOf(-0, [0]), -1);
    eq(R.lastIndexOf(NaN, [NaN]), 0);
    eq(R.lastIndexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `lastIndexOf` method', function() {
    function Empty() {}
    Empty.prototype.lastIndexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.lastIndexOf = function(x) {
      var idx = this.tail.lastIndexOf(x);
      return idx >= 0 ? 1 + idx : this.head === x ? 0 : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.lastIndexOf('a', 'banana'), 5);
    eq(R.lastIndexOf('x', 'banana'), -1);
    eq(R.lastIndexOf('a', list), 5);
    eq(R.lastIndexOf('x', list), -1);
  });
  it('finds function, compared by identity', function() {
    var f = function() {};
    var g = function() {};
    var list = [g, f, g, f];
    eq(R.lastIndexOf(f, list), 3);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lastIndexOf)

### length

```typescript

length<T>(input: readonly T[]): number
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

<summary>All Typescript definitions</summary>

```typescript
length<T>(input: readonly T[]): number;
```

</details>

<details>

<summary><strong>R.length</strong> source</summary>

```javascript
export function length(x){
  if (!x && x !== '' || x.length === undefined){
    return NaN
  }

  return x.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { length } from './length'

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
```

</details>

<details>

<summary>1 failed <italic>Ramda.length</italic> specs

> :boom: Reason for the failure: Ramda method supports object with `length` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('length', function() {
  it('returns the length of a string', function() {
    eq(R.length(''), 0);
    eq(R.length('xyz'), 3);
  });
  it('returns NaN for length property of unexpected type', function() {
    eq(R.identical(NaN, R.length({length: ''})), true);
    eq(R.identical(NaN, R.length({length: '1.23'})), true);
    eq(R.identical(NaN, R.length({length: null})), true);
    eq(R.identical(NaN, R.length({length: undefined})), true);
    eq(R.identical(NaN, R.length({})), true);
  });
});
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

```javascript
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) // => 1
R.set(xLens, 4, {x: 1, y: 2}) // => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) // => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lens(R.prop('x')%2C%20R.assoc('x'))%3B%0A%0AR.view(xLens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0AR.set(xLens%2C%204%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.over(xLens%2C%20R.negate%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lens</strong> example in Rambda REPL</a>

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
  foo: string,
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

```javascript
const list = ['a', 'b', 'c']
const headLens = R.lensIndex(0)

R.view(headLens, list) // => 'a'
R.set(headLens, 'x', list) // => ['x', 'b', 'c']
R.over(headLens, R.toUpper, list) // => ['A', 'b', 'c']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0Aconst%20headLens%20%3D%20R.lensIndex(0)%0A%0AR.view(headLens%2C%20list)%20%2F%2F%20%3D%3E%20'a'%0AR.set(headLens%2C%20'x'%2C%20list)%20%2F%2F%20%3D%3E%20%5B'x'%2C%20'b'%2C%20'c'%5D%0AR.over(headLens%2C%20R.toUpper%2C%20list)%20%2F%2F%20%3D%3E%20%5B'A'%2C%20'b'%2C%20'c'%5D">Try this <strong>R.lensIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
```

</details>

<details>

<summary><strong>R.lensIndex</strong> source</summary>

```javascript
import { lens } from './lens'
import { nth } from './nth'
import { update } from './update'

export function lensIndex(index){
  return lens(nth(index), update(index))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { keys } from './keys'
import { lensIndex } from './lensIndex'
import { over } from './over'
import { set } from './set'
import { view } from './view'

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
  a: number,
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

```javascript
const lensPath = R.lensPath(['x', 0, 'y'])
const input = {x: [{y: 2, z: 3}, {y: 4, z: 5}]}

R.view(lensPath, input) //=> 2

R.set(lensPath, 1, input) 
//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}

R.over(xHeadYLens, R.negate, input) 
//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lensPath%20%3D%20R.lensPath(%5B'x'%2C%200%2C%20'y'%5D)%0Aconst%20input%20%3D%20%7Bx%3A%20%5B%7By%3A%202%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.view(lensPath%2C%20input)%20%2F%2F%3D%3E%202%0A%0AR.set(lensPath%2C%201%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%201%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.over(xHeadYLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%20-2%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D">Try this <strong>R.lensPath</strong> example in Rambda REPL</a>

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
import { assocPath } from './assocPath'
import { lens } from './lens'
import { path } from './path'

export function lensPath(key){
  return lens(path(key), assocPath(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { identity } from './identity'
import { inc } from './inc'
import { lensPath } from './lensPath'
import { lensProp } from './lensProp'
import { over } from './over'
import { set } from './set'
import { view } from './view'

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
  foo: number[],
  bar: {
    a: string,
    b: string,
  },
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

```javascript
const xLens = R.lensProp('x');
const input = {x: 1, y: 2}

R.view(xLens, input) // => 1

R.set(xLens, 4, input) 
// => {x: 4, y: 2}

R.over(xLens, R.negate, input) 
// => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lensProp('x')%3B%0Aconst%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0A%0AR.view(xLens%2C%20input)%20%2F%2F%20%3D%3E%201%0A%0AR.set(xLens%2C%204%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0A%0AR.over(xLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lensProp</strong> example in Rambda REPL</a>

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
import { assoc } from './assoc'
import { lens } from './lens'
import { prop } from './prop'

export function lensProp(key){
  return lens(prop(key), assoc(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { identity } from './identity'
import { inc } from './inc'
import { lensProp } from './lensProp'
import { over } from './over'
import { set } from './set'
import { view } from './view'

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
  foo: string,
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

map<T, U>(fn: MapFunctionObject<T, U>, iterable: Dictionary<T>): Dictionary<U>
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
  R.map(fn, list),
  R.map(fnWhenObject, obj)
]
// => [ [1, 4], {a: 'a-1', b: 'b-2'}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20fnWhenObject%20%3D%20(val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20iterable%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%20%0A%20%20R.map(fn%2C%20list)%2C%0A%20%20R.map(fnWhenObject%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B1%2C%204%5D%2C%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D%5D">Try this <strong>R.map</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
map<T, U>(fn: MapFunctionObject<T, U>, iterable: Dictionary<T>): Dictionary<U>;
map<T, U>(fn: MapIterator<T, U>, iterable: readonly T[]): U[];
map<T, U>(fn: MapIterator<T, U>): (iterable: readonly T[]) => U[];
map<T, U, S>(fn: MapFunctionObject<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
map<T>(fn: MapIterator<T, T>): (iterable: readonly T[]) => T[];
map<T>(fn: MapIterator<T, T>, iterable: readonly T[]): T[];
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

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

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)
  if (list === undefined) return []
  if (_isArray(list)) return mapArray(fn, list)

  return mapObject(fn, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { map } from './map'

const double = x => x * 2

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with array', () => {
  expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
  }

  expect(map(double, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('pass input object as third argument', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const iterator = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)

    return val * 2
  }

  expect(map(iterator, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('with object passes property as second argument', () => {
  map((_, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined instead of array', () => {
  expect(map(double, undefined)).toEqual([])
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

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
import { equals } from './equals'
import { match } from './match'

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
  }).toThrowWithMessage(TypeError, 'Cannot read property \'match\' of null')
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

<summary>All Typescript definitions</summary>

```typescript
mathMod(x: number, y: number): number;
mathMod(x: number): (y: number) => number;
```

</details>

<details>

<summary><strong>R.mathMod</strong> source</summary>

```javascript
import _isInteger from './_internals/_isInteger'

export function mathMod(x, y){
  if (arguments.length === 1) return _y => mathMod(x, _y)
  if (!_isInteger(x) || !_isInteger(y) || y < 1) return NaN

  return (x % y + y) % y
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mathMod } from './mathMod'

test('happy', () => {
  expect(mathMod(-17)(5)).toEqual(3)
  expect(mathMod(17, 5)).toEqual(2)
  expect(mathMod(17, -5)).toBeNaN()
  expect(mathMod(17, 0)).toBeNaN()
  expect(mathMod('17', 5)).toBeNaN()
  expect(mathMod({}, 2)).toBeNaN()
  expect(mathMod([], 2)).toBeNaN()
  expect(mathMod(Symbol(), 2)).toBeNaN()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mathMod} from 'rambda'

const first = 1
const second = 2

describe('R.mathMod', () => {
  it('happy', () => {
    const result = mathMod(first, second)
    result // $ExpectType number
  })
  it('curried', () => {
    const result = mathMod(first, second)
    result // $ExpectType number
  })
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

<summary>All Typescript definitions</summary>

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
import { max } from './max'

test('with number', () => {
  expect(max(2, 1)).toBe(2)
})

test('with string', () => {
  expect(max('foo')('bar')).toBe('foo')
  expect(max('bar')('baz')).toBe('baz')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {max} from 'rambda'

const first = 1
const second = 2

describe('R.max', () => {
  it('happy', () => {
    const result = max(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried', () => {
    const result = max(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried - cann pass type', () => {
    const result = max<number>(first, second)
    result // $ExpectType number
  })
  it('can pass type', () => {
    const result = max<number>(first, second)
    result // $ExpectType number
  })
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try this <strong>R.maxBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
maxBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

<details>

<summary><strong>R.maxBy</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { maxBy } from './maxBy'

test('happy', () => {
  expect(maxBy(
    Math.abs, -5, 2
  )).toEqual(-5)
})

test('curried', () => {
  expect(maxBy(Math.abs)(2, -5)).toEqual(-5)
  expect(maxBy(Math.abs)(2)(-5)).toEqual(-5)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {maxBy} from 'rambda'

const compareFn = (x: number) => x % 2 === 0 ? 1 : -1
const first = 1
const second = 2

describe('R.maxBy', () => {
  it('happy', () => {
    const result = maxBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
  it('curried 1', () => {
    const result = maxBy(compareFn)(first, second)
    result // $ExpectType number
  })
  it('curried 2', () => {
    const result = maxBy<number>(compareFn, first)(second)
    result // $ExpectType number
  })
  it('curried 3', () => {
    const result = maxBy(compareFn)(first)(second)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

### mean

```typescript

mean(list: readonly number[]): number
```

It returns the mean value of `list` input.

```javascript
R.mean([ 2, 7 ])
// => 4.5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mean(%5B%202%2C%207%20%5D)%0A%2F%2F%20%3D%3E%204.5">Try this <strong>R.mean</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: readonly number[]): number;
```

</details>

<details>

<summary><strong>R.mean</strong> source</summary>

```javascript
import { sum } from './sum'

export function mean(list){
  return sum(list) / list.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mean } from './mean'

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

median(list: readonly number[]): number
```

It returns the median value of `list` input.

```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.median(%5B%207%2C%202%2C%2010%2C%209%20%5D)%20%2F%2F%20%3D%3E%208">Try this <strong>R.median</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: readonly number[]): number;
```

</details>

<details>

<summary><strong>R.median</strong> source</summary>

```javascript
import { mean } from './mean'

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
import { median } from './median'

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

```typescript

merge<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>
```

It creates a copy of `target` object with overidden `newProps` properties.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.merge(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.merge(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try this <strong>R.merge</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
merge<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>;
merge<O1 extends object>(target: O1): <O2 extends object>(newProps: O2) => Merge<O2, O1, 'flat'>;
```

</details>

<details>

<summary><strong>R.merge</strong> source</summary>

```javascript
export function merge(target, newProps){
  if (arguments.length === 1) return _newProps => merge(target, _newProps)

  return Object.assign(
    {}, target || {}, newProps || {}
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { merge } from './merge'

const obj = {
  foo : 1,
  bar : 2,
}

test('happy', () => {
  expect(merge(obj, { bar : 20 })).toEqual({
    foo : 1,
    bar : 20,
  })
})

test('curry', () => {
  expect(merge(obj)({ baz : 3 })).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(obj, null)).toEqual(obj)
  expect(merge(obj, undefined)).toEqual(obj)
  expect(merge(undefined, obj)).toEqual(obj)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {merge} from 'rambda'

describe('R.merge', () => {
  const result = merge({foo: 1}, {bar: 2})
  const curriedResult = merge({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
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

<summary>All Typescript definitions</summary>

```typescript
mergeAll<T>(list: object[]): T;
mergeAll(list: object[]): object;
```

</details>

<details>

<summary><strong>R.mergeAll</strong> source</summary>

```javascript
import { map } from './map'
import { merge } from './merge'

export function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeAll } from './mergeAll'

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
      foo: number,
      bar: number,
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

mergeDeepRight<O1 extends object, O2 extends object>(x: O1, y: O2): Merge<O2, O1, 'deep'>
```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeDeepRight<O1 extends object, O2 extends object>(x: O1, y: O2): Merge<O2, O1, 'deep'>;
mergeDeepRight<O1 extends object>(x: O1): <O2 extends object>(y: O2) => Merge<O2, O1, 'deep'>;
```

</details>

<details>

<summary><strong>R.mergeDeepRight</strong> source</summary>

```javascript
import { type } from './type'

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
// import { mergeDeepRight } from 'ramda'
import { mergeDeepRight } from './mergeDeepRight'

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

describe('R.mergeDeepRight', () => {
  const result = mergeDeepRight({foo: {bar: 1}}, {foo: {bar: 2}})
  result.foo.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeDeepRight)

### mergeLeft

```typescript

mergeLeft<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>
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

<summary>All Typescript definitions</summary>

```typescript
mergeLeft<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>;
mergeLeft<O1 extends object>(target: O1): <O2 extends object>(newProps: O2) => Merge<O2, O1, 'flat'>;
```

</details>

<details>

<summary><strong>R.mergeLeft</strong> source</summary>

```javascript
import { merge } from './merge'

export function mergeLeft(x, y){
  if (arguments.length === 1) return _y => mergeLeft(x, _y)

  return merge(y, x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mergeLeft } from './mergeLeft'

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

describe('R.mergeLeft', () => {
  const result = mergeLeft({foo: 1}, {bar: 2})
  const curriedResult = mergeLeft({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeLeft)

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

<summary>All Typescript definitions</summary>

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
import { min } from './min'

test('happy', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(1)(2)).toBe(1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {min} from 'rambda'

const first = 1
const second = 2

describe('R.min', () => {
  it('happy', () => {
    const result = min(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried', () => {
    const result = min(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried - cann pass type', () => {
    const result = min<number>(first, second)
    result // $ExpectType number
  })
  it('can pass type', () => {
    const result = min<number>(first, second)
    result // $ExpectType number
  })
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try this <strong>R.minBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
minBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

<details>

<summary><strong>R.minBy</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { minBy } from './minBy'

test('happy', () => {
  expect(minBy(
    Math.abs, -5, 2
  )).toEqual(2)
})

test('curried', () => {
  expect(minBy(Math.abs)(2, -5)).toEqual(2)
  expect(minBy(Math.abs)(2)(-5)).toEqual(2)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {minBy} from 'rambda'

const compareFn = (x: number) => x % 2 === 0 ? 1 : -1
const first = 1
const second = 2

describe('R.minBy', () => {
  it('happy', () => {
    const result = minBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
  it('curried 1', () => {
    const result = minBy(compareFn)(first, second)
    result // $ExpectType number
  })
  it('curried 2', () => {
    /*
      Than should be the case, but passing type is required for some reason
    */
    const result = minBy<number>(compareFn, first)(second)
    result // $ExpectType number
  })
  it('curried 3', () => {
    const result = minBy(compareFn)(first)(second)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

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

<summary>All Typescript definitions</summary>

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
import { modulo } from './modulo'

test('happy', () => {
  expect(modulo(17, 3)).toEqual(2)
  expect(modulo(15)(6)).toEqual(3)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {modulo} from 'rambda'

describe('R.modulo', () => {
  it('happy', () => {
    const result = modulo(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = modulo(4)(1)

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modulo)

### move

```typescript

move<T>(fromIndex: number, toIndex: number, list: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
move<T>(fromIndex: number, toIndex: number, list: readonly T[]): T[];
move(fromIndex: number, toIndex: number): <T>(list: readonly T[]) => T[];
move(fromIndex: number): {
    <T>(toIndex: number, list: readonly T[]): T[];
    (toIndex: number): <T>(list: readonly T[]) => T[];
};
```

</details>

<details>

<summary><strong>R.move</strong> source</summary>

```javascript
import { curry } from './curry'

function moveFn(
  fromIndex, toIndex, list
){
  if (fromIndex < 0 || toIndex < 0){
    throw new Error('Rambda.move does not support negative indexes')
  }
  if (fromIndex > list.length - 1 || toIndex > list.length - 1) return list

  const clone = list.slice()
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
import { move } from './move'
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
  )).toThrowWithMessage(Error, errorMessage)
  expect(() => move(
    -1, 0, list
  )).toThrowWithMessage(Error, errorMessage)
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

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {move} from 'rambda'

const list = [1, 2, 3]

describe('R.move', () => {
  it('happy', () => {
    const result = move(0, 1, list)

    result // $ExpectType number[]
  })
  it('curried 1', () => {
    const result = move(0, 1)(list)

    result // $ExpectType number[]
  })
  it('curried 2', () => {
    const result = move(0)(1)(list)

    result // $ExpectType number[]
  })
})
```

</details>

*2 failed Ramda.move specs*

> :boom: Reason for the failure: Ramda method does not support negative indexes

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

<summary>All Typescript definitions</summary>

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
import { multiply } from './multiply'

test('happy', () => {
  expect(multiply(2, 4)).toEqual(8)
  expect(multiply(2)(4)).toEqual(8)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {multiply} from 'rambda'

describe('R.multiply', () => {
  it('happy', () => {
    const result = multiply(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = multiply(4)(1)

    result // $ExpectType number
  })
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

<summary>All Typescript definitions</summary>

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
import { negate } from './negate'

test('negate', () => {
  expect(negate(420)).toEqual(-420)
  expect(negate(-13)).toEqual(13)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#negate)

### none

```typescript

none<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean
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

<summary>All Typescript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean;
none<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;
```

</details>

<details>

<summary><strong>R.none</strong> source</summary>

```javascript
export function none(predicate, list){
  if (arguments.length === 1) return _list => none(predicate, _list)

  for (let i = 0; i < list.length; i++){
    if (!predicate(list[ i ])) return true
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { none } from './none'

const isEven = n => n % 2 === 0
const isOdd = n => n % 2 === 1
const arr = [ 1, 3, 5, 7, 9, 11 ]

test('when true', () => {
  expect(none(isEven, arr)).toBeTrue()
})

test('when false curried', () => {
  expect(none(isOdd)(arr)).toBeFalse()
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#none)

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
import { not } from './not'

test('not', () => {
  expect(not(false)).toEqual(true)
  expect(not(true)).toEqual(false)
  expect(not(0)).toEqual(true)
  expect(not(1)).toEqual(false)
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

nth<T>(index: number, list: readonly T[]): T | undefined
```

Curried version of `list[index]`.

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

<summary>All Typescript definitions</summary>

```typescript
nth<T>(index: number, list: readonly T[]): T | undefined;	
nth(index: number): <T>(list: readonly T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.nth</strong> source</summary>

```javascript
export function nth(index, list){
  if (arguments.length === 1) return _list => nth(index, _list)

  const idx = index < 0 ? list.length + index : index

  return Object.prototype.toString.call(list) === '[object String]' ?
    list.charAt(idx) :
    list[ idx ]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { nth } from './nth'

test('happy', () => {
  expect(nth(2, [ 1, 2, 3, 4 ])).toEqual(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toEqual(3)
})

test('with string', () => {
  expect(nth(2)('foo')).toEqual('o')
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
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#nth)

### of

```typescript

of<T>(x: T): T[]
```

```javascript
R.of(null); //=> [null]
R.of([42]); //=> [[42]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.of(null)%3B%20%2F%2F%3D%3E%20%5Bnull%5D%0AR.of(%5B42%5D)%3B%20%2F%2F%3D%3E%20%5B%5B42%5D%5D">Try this <strong>R.of</strong> example in Rambda REPL</a>

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
import { of } from './of'

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

omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToOmit` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {a: 1, b: 2, c: 3}
const propsToOmit = 'a,c,d'
const propsToOmitList = ['a', 'c', 'd']

const result = [
  R.omit(propsToOmit, obj), 
  R.omit(propsToOmitList, obj) 
]
// => [{b: 2}, {b: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20obj)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try this <strong>R.omit</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>;
omit<K extends string>(propsToOmit: readonly K[]): <T>(obj: T) => Omit<T, K>;
omit<T, U>(propsToOmit: string, obj: T): U;
omit<T, U>(propsToOmit: string): (obj: T) => U;
omit<T>(propsToOmit: string, obj: object): T;
omit<T>(propsToOmit: string): (obj: object) => T;
```

</details>

<details>

<summary><strong>R.omit</strong> source</summary>

```javascript
export function omit(propsToOmit, obj){
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const propsToOmitValue =
    typeof propsToOmit === 'string' ? propsToOmit.split(',') : propsToOmit

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
import { omit } from './omit'

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
      a: string,
      b: number,
      c: number,
      d: number,
    }
    const input: Input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)
    result // $ExpectType Pick<Input, "b" | "a" | "c" | "d">

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })
})

describe('R.omit with string as props input', () => {
  interface Output {
    b: number,
    d: number,
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
      a: number,
      b: number,
      c: number,
      d: number,
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### once

```typescript

once<T extends (...args: any[]) => any>(func: T): T
```

It returns a function, which invokes only once `fn` function.

```javascript
let result = 0
const addOnce = R.once((x) => result = result + x)

addOnce(1)
addOnce(1)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20let%20result%20%3D%200%0Aconst%20addOnce%20%3D%20R.once((x)%20%3D%3E%20result%20%3D%20result%20%2B%20x)%0A%0AaddOnce(1)%0AaddOnce(1)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.once</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
once<T extends (...args: any[]) => any>(func: T): T;
```

</details>

<details>

<summary><strong>R.once</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { once } from './once'

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

*1 failed Ramda.once specs*

> :boom: Reason for the failure: Ramda method retains arity

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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.or(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.or(false%2C%20false)%3B%20%2F%2F%20%3D%3E%20false%0AR.or(false%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.or</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

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
import { or } from './or'

test('happy', () => {
  expect(or(0, 'foo')).toBe('foo')
  expect(or(true, true)).toBeTrue()
  expect(or(false)(true)).toBeTrue()
  expect(or(false, false)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {or} from 'ramda'

describe('R.or', () => {
  it('happy', () => {
    const result = or(true, false)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = or(1)('foo')
    result // $ExpectType number | "foo"
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#or)

### over

```typescript

over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20headLens%20%3D%20R.lensIndex(0)%0A%20%0AR.over(headLens%2C%20R.toUpper%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%3D%3E%20%5B'FOO'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.over</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.over</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { assoc } from './assoc'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { over } from './over'
import { prop } from './prop'
import { toUpper } from './toUpper'

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
  const result = over(indexLens, toUpper)(['foo', 'bar'])
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20(title%2C%20firstName%2C%20lastName)%20%3D%3E%20%7B%0A%20%20return%20title%20%2B%20'%20'%20%2B%20firstName%20%2B%20'%20'%20%2B%20lastName%20%2B%20'!'%0A%7D%0A%0Aconst%20canPassAnyNumberOfArguments%20%3D%20R.partial(fn%2C%20'Hello')%0Aconst%20ramdaStyle%20%3D%20R.partial(fn%2C%20%5B'Hello'%5D)%0A%0Aconst%20finalFn%20%3D%20canPassAnyNumberOfArguments('Foo')%0A%0AfinalFn('Bar')%20%2F%2F%20%3D%3E%20%20'Hello%2C%20Foo%20Bar!'">Try this <strong>R.partial</strong> example in Rambda REPL</a>

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
import { partial } from './partial'
import { type } from './type'

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

### partition

```typescript

partition<T>(
  predicate: Predicate<T>,
  input: readonly T[]
): [T[], T[]]
```

It will return array of two objects/arrays according to `predicate` function. The first member holds all instanses of `input` that pass the `predicate` function, while the second member - those who doesn't.

```javascript
const list = [1, 2, 3]
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = [
  R.partition(predicate, list),
  R.partition(predicate, obj)
]
const expected = [
  [[3], [1, 2]],
  [{c: 3},  {a: 1, b: 2}],
]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.partition(predicate%2C%20list)%2C%0A%20%20R.partition(predicate%2C%20obj)%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B3%5D%2C%20%5B1%2C%202%5D%5D%2C%0A%20%20%5B%7Bc%3A%203%7D%2C%20%20%7Ba%3A%201%2C%20b%3A%202%7D%5D%2C%0A%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.partition</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
partition<T>(
  predicate: Predicate<T>,
  input: readonly T[]
): [T[], T[]];
partition<T>(
  predicate: Predicate<T>
): (input: readonly T[]) => [T[], T[]];
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
import { _isArray } from './_internals/_isArray'

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

export function partitionArray(predicate, list){
  const yes = []
  const no = []
  let counter = -1

  while (counter++ < list.length - 1){
    if (predicate(list[ counter ])){
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
import { partition } from './partition'

test('with array', () => {
  const predicate = (x) => {

    return x > 2
  }
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
    result[0] // $ExpectType { [key: string]: number; }
    result[1] // $ExpectType { [key: string]: number; }
    curriedResult[0] // $ExpectType { [key: string]: number; }
    curriedResult[1] // $ExpectType { [key: string]: number; }
  })
})
```

</details>

*1 failed Ramda.partition specs*

> :boom: Reason for the failure: Ramda library supports fantasy-land

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### path

```typescript

path<Input, T>(pathToSearch: Path, obj: Input): T | undefined
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

> :boom: String anotation of `pathToSearch` is one of the differences between `Rambda` and `Ramda`.

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
export function path(pathInput, obj){
  if (arguments.length === 1) return _obj => path(pathInput, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue =
    typeof pathInput === 'string' ? pathInput.split('.') : pathInput

  while (counter < pathArrValue.length){
    if (willReturn === null || willReturn === undefined){
      return undefined
    }
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
import { path } from './path'

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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {path} from 'rambda'

interface Input {
  a: number,
  b: {
    c: boolean,
  },
}

describe('R.path', () => {
  it('without specified input type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path<boolean>('a.b.c', input)
    const resultCurried = path<boolean>('a.b.c')(input)
    result // $ExpectType boolean | undefined
    resultCurried // $ExpectType boolean | undefined
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

<summary>1 failed <italic>Ramda.path</italic> specs

> :boom: Reason for the failure: Ramda method supports negative indexes
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('path', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.path(['x', -2], {x: ['a', 'b', 'c', 'd']}), 'c');
    eq(R.path([-1, 'y'], [{x: 1, y: 99}, {x: 2, y: 98}, {x: 3, y: 97}]), 97);
  });
});
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

<summary>All Typescript definitions</summary>

```typescript
pathEq(pathToSearch: Path, target: any, input: any): boolean;
pathEq(pathToSearch: Path, target: any): (input: any) => boolean;
pathEq(pathToSearch: Path): FunctionToolbelt.Curry<(a: any, b: any) => boolean>;
```

</details>

<details>

<summary><strong>R.pathEq</strong> source</summary>

```javascript
import { curry } from './curry'
import { equals } from './equals'
import { path } from './path'

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
import { pathEq } from './pathEq'

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
  const result4 = pathEq(testPath)(2, testObj)
  result1 // $ExpectType boolean
  result2 // $ExpectType boolean
  result3 // $ExpectType boolean
  result4 // $ExpectType boolean
})
```

</details>

*1 failed Ramda.pathEq specs*

> :boom: Reason for the failure: Ramda library supports fantasy-land

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathEq)

### pathOr

```typescript

pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```

It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.

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
  R.pathOr(DEFAULT_VALUE, pathToSearch, obj) 
  R.pathOr(DEFAULT_VALUE, pathToSearchList, obj) 
  R.pathOr(DEFAULT_VALUE, 'a.b.c', obj) 
]
// => [1, 1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%201%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearch%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearchList%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20'a.b.c'%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.pathOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): FunctionToolbelt.Curry<(a: Path, b: any) => T>;
```

</details>

<details>

<summary><strong>R.pathOr</strong> source</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

function pathOrFn(
  defaultValue, list, obj
){
  return defaultTo(defaultValue, path(list, obj))
}

export const pathOr = curry(pathOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathOr } from './pathOr'

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

It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.

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
  'a.b.c.d',
  'a.b.c.d.e',
], obj)
// => [1, 2, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%20%7B%0A%20%20%20%20%20%20c%20%3A%201%2C%0A%20%20%20%20%20%20d%20%3A%202%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.paths(%5B%0A%20%20'a.b.c'%2C%0A%20%20'a.b.c.d'%2C%0A%20%20'a.b.c.d.e'%2C%0A%5D%2C%20obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20undefined%5D">Try this <strong>R.paths</strong> example in Rambda REPL</a>

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
import { path } from './path'

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
import { paths } from './paths'

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
  a: number,
  b: number,
  c: number,
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

<details>

<summary>1 failed <italic>Ramda.paths</italic> specs

> :boom: Reason for the failure: Ramda method supports negative indexes
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('paths', function() {
  var obj = {
    a: {
      b: {
        c: 1,
        d: 2
      }
    },
    p: [{q: 3}, 'Hi'],
    x: {
      y: 'Alice',
      z: [[{}]]
    }
  };
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.paths([['p', -2, 'q'], ['p', -1]], obj), [3, 'Hi']);
    eq(R.paths([['p', -4, 'q'], ['x', 'z', -1, 0]], obj), [undefined, {}]);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#paths)

### pick

```typescript

pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

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
  R.pick(propsToPick, obj),
  R.pick(propsToPickList, obj),
  R.pick('a,bar', obj),
  R.pick('bar', obj),
  R.pick([0, 3], list),
  R.pick('0,3', list),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
  [1,4],
  [1,4]
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20obj)%2C%0A%20%20R.pick(propsToPickList%2C%20obj)%2C%0A%20%20R.pick('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pick('bar'%2C%20obj)%2C%0A%20%20R.pick(%5B0%2C%203%5D%2C%20list)%2C%0A%20%20R.pick('0%2C3'%2C%20list)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%20%20%5B1%2C4%5D%2C%0A%20%20%5B1%2C4%5D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<K extends string | number | symbol>(propsToPick: readonly K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<T, U>(propsToPick: string, input: T): U;
pick<T, U>(propsToPick: string): (input: T) => U;
pick<T>(propsToPick: string, input: object): T;
pick<T>(propsToPick: string): (input: object) => T;
```

</details>

<details>

<summary><strong>R.pick</strong> source</summary>

```javascript
export function pick(propsToPick, input){
  if (arguments.length === 1) return _input => pick(propsToPick, _input)

  if (input === null || input === undefined){
    return undefined
  }
  const keys =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

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
import { pick } from './pick'

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
    a: string,
    b: number,
    c: number,
    d: number,
  }
  interface Output {
    a: string,
    c: number,
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pick)

### pickAll

```typescript

pickAll<T, U>(propsToPick: readonly string[], input: T): U
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
  R.pickAll(propsToPick, obj),
  R.pickAll(propsToPickList, obj),
  R.pickAll('a,bar', obj),
  R.pickAll('bar', obj),
]
const expected = [
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, bar: undefined},
  {bar: undefined}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo%2Cbar'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%2C%20'bar'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pickAll(propsToPick%2C%20obj)%2C%0A%20%20R.pickAll(propsToPickList%2C%20obj)%2C%0A%20%20R.pickAll('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pickAll('bar'%2C%20obj)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Bbar%3A%20undefined%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pickAll</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: readonly string[], input: T): U;
pickAll<T, U>(propsToPick: readonly string[]): (input: T) => U;
pickAll<T, U>(propsToPick: string, input: T): U;
pickAll<T, U>(propsToPick: string): (input: T) => U;
```

</details>

<details>

<summary><strong>R.pickAll</strong> source</summary>

```javascript
export function pickAll(propsToPick, obj){
  if (arguments.length === 1) return _obj => pickAll(propsToPick, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

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
import { pickAll } from './pickAll'

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
  a: string,
  b: number,
  c: number,
  d: number,
}
interface Output {
  a?: string,
  c?: number,
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

```typescript

pipe<T1>(fn0: () => T1): () => T1
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

<summary>All Typescript definitions</summary>

```typescript
pipe<T1>(fn0: () => T1): () => T1;
pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

pipe<T1, T2>(fn0: () => T1, fn1: (x: T1) => T2): () => T2;
pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

pipe<T1, T2, T3>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): () => T3;
pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

pipe<T1, T2, T3, T4>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): () => T4;
pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

pipe<T1, T2, T3, T4, T5>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): () => T5;
pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

pipe<T1, T2, T3, T4, T5, T6>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): () => T6;
pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

pipe<T1, T2, T3, T4, T5, T6, T7>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn: (x: T6) => T7): () => T7;
pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn: (x: T6) => T7): (x: V0) => T7;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn: (x: T7) => T8): () => T8;
pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn: (x: T7) => T8): (x: V0) => T8;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): () => T9;
pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0) => T9;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): () => T10;
pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0) => T10;
pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;
```

</details>

<details>

<summary><strong>R.pipe</strong> source</summary>

```javascript
import { compose } from './compose'

export function pipe(...fns){
  if (fns.length === 0)
    throw new Error('pipe requires at least one argument')

  return compose(...fns.reverse())
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add, last, map } from '../rambda'
import { pipe } from './pipe'

test('happy', () => {
  const list = [ 1, 2, 3 ]

  const result = pipe(
    map(add(1)), map(add(10)), last
  )(list)

  expect(result).toEqual(14)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowWithMessage(Error,
    'pipe requires at least one argument')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {add, subtract, pipe} from 'rambda'

describe('R.pipe', () => {
  it('happy', () => {
    const result = pipe(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })

  it('with void', () => {
    const result = pipe(
      () => {},
      () => {}
    )()
    result // $ExpectType void
  })
})
```

</details>

<details>

<summary>3 failed <italic>Ramda.pipe</italic> specs

> :boom: Reason for the failure: Ramda method passes context to functions | Rambda composed functions have no length
</summary>

```javascript
var assert = require('assert');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('pipe', function() {
  it('performs left-to-right function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.pipe(parseInt, R.multiply, R.map);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.pipe(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pluck

```typescript

pluck<K extends keyof T, T>(property: K, list: readonly T[]): Array<T[K]>
```

It returns list of the values of `property` taken from the all objects inside `list`.

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

R.pluck(list, property) 
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0AR.pluck(list%2C%20property)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.pluck</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<K extends keyof T, T>(property: K, list: readonly T[]): Array<T[K]>;
pluck<T>(property: number, list: ReadonlyArray<{ [k: number]: T }>): T[];
pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
pluck(property: number): <T>(list: ReadonlyArray<{ [k: number]: T }>) => T[];
```

</details>

<details>

<summary><strong>R.pluck</strong> source</summary>

```javascript
import { map } from './map'

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
import { pluck } from './pluck'

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
      a: number,
      b: string,
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

<details>

<summary>1 failed <italic>Ramda.pluck</italic> specs

> :boom: Reason for the failure: Ramda method behaves as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('pluck', function() {
  var people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21},
    {name: 'Pebbles', age: 2}
  ];
  it('behaves as a transducer when given a transducer in list position', function() {
    var numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
    var transducer = R.compose(R.pluck('a'), R.map(R.add(1)), R.take(2));
    eq(R.transduce(transducer, R.flip(R.append), [], numbers), [2, 3]);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pluck)

### prepend

```typescript

prepend<T>(x: T, input: T[]): T[]
```

It adds element `x` at the beginning of `list`.

```javascript
const result = R.prepend('foo', ['bar', 'baz'])
// => ['foo', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.prepend</strong> example in Rambda REPL</a>

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
import { prepend } from './prepend'

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

product(list: readonly number[]): number
```

```javascript
R.product([ 2, 3, 4 ])
// => 24)
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.product(%5B%202%2C%203%2C%204%20%5D)%0A%2F%2F%20%3D%3E%2024)">Try this <strong>R.product</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: readonly number[]): number;
```

</details>

<details>

<summary><strong>R.product</strong> source</summary>

```javascript
import { multiply } from './multiply'
import { reduce } from './reduce'

export const product = reduce(multiply, 1)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { product } from './product'

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

prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]
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

<summary>All Typescript definitions</summary>

```typescript
prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;
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
import { prop } from './prop'

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
import {prop} from 'rambda'

const obj = {a: 1, b: 'foo'}

describe('R.prop', () => {
  it('happy', () => {
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prop)

### propEq

```typescript

propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K], obj: T): boolean
```

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const obj = { foo: 'bar' }
const secondObj = { foo: 1 }

const propToFind = 'foo'
const valueToMatch = 'bar'

const result = [
  R.propEq(propToFind, valueToMatch, obj),
  R.propEq(propToFind, valueToMatch, secondObj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20obj)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20secondObj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.propEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K], obj: T): boolean;
propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K]): (obj: T) => boolean;
propEq<T, K extends keyof T>(propToFind: K): {
   (valueToMatch: T[K], obj: T): boolean;
   (valueToMatch: T[K]): (obj: T) => boolean;
};
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { propEq } from './propEq'

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
      optional?: string | number,
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    const optionalValueToFind: string | number | undefined = '1111'
    const result = propEq('optional', valueToFind, myObject)
    const result2 = propEq('optional', optionalValueToFind, myObject)
    result // $ExpectType boolean
    result2 // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.propEq</italic> specs

> :boom: Reason for the failure: Ramda method pass to `equals` method if available
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('propEq', function() {
  var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
  var obj2 = {name: 'Fred', age: 12, hair: 'brown'};
  it('handles number as property', function() {
    var deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth'];
    eq(R.propEq(0, 'Cthulhu', deities), true);
    eq(R.propEq(1, 'Dagon', deities), true);
    eq(R.propEq(2, 'Yog-Sothoth', deities), true);
    eq(R.propEq(-1, 'Yog-Sothoth', deities), true);
    eq(R.propEq(3, undefined, deities), true);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.propEq('value', 0, {value: -0}), false);
    eq(R.propEq('value', -0, {value: 0}), false);
    eq(R.propEq('value', NaN, {value: NaN}), true);
    eq(R.propEq('value', new Just([42]), {value: new Just([42])}), true);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propIs

```typescript

propIs(type: any, name: string, obj: any): boolean
```

It returns `true` if `property` of `obj` is from `target` type.

```javascript
const obj = {a:1, b: 'foo'}
const property = 'foo'

const result = [
  R.propIs(String, property, obj),
  R.propIs(Number, property, obj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A%20'foo'%7D%0Aconst%20property%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propIs(String%2C%20property%2C%20obj)%2C%0A%20%20R.propIs(Number%2C%20property%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.propIs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propIs(type: any, name: string, obj: any): boolean;
propIs(type: any, name: string): (obj: any) => boolean;
propIs(type: any): {
    (name: string, obj: any): boolean;
    (name: string): (obj: any) => boolean;
};
```

</details>

<details>

<summary><strong>R.propIs</strong> source</summary>

```javascript
import { curry } from './curry'
import { is } from './is'

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
import { propIs } from './propIs'

const obj = { value : 1 }
const property = 'value'

test('when true', () => {
  expect(propIs(
    Number, property, obj
  )).toBeTrue()
})

test('when false', () => {
  expect(propIs(
    String, property, obj
  )).toBeFalse()
  expect(propIs(
    String, property, {}
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

propOr<T>(defaultValue: T, property: string, obj: { [key: string]: T}): T
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property, obj),
  R.propOr(defaultValue, 'foo', obj)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property%2C%20obj)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.propOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T>(defaultValue: T, property: string, obj: { [key: string]: T}): T;
propOr<T>(defaultValue: T, property: string): (obj: { [key: string]: T}) => T;
propOr<T>(defaultValue: T): FunctionToolbelt.Curry<(property: string, obj: { [key: string]: T}) => T>;
```

</details>

<details>

<summary><strong>R.propOr</strong> source</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'

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
import { propOr } from './propOr'

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

```javascript
const result = [
  R.props(['a', 'b'], {a:1, c:3})
// => [1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.props(%5B'a'%2C%20'b'%5D%2C%20%7Ba%3A1%2C%20c%3A3%7D)%0A%2F%2F%20%3D%3E%20%5B1%2C%20undefined%5D">Try this <strong>R.props</strong> example in Rambda REPL</a>

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
import { _isArray } from './_internals/_isArray'
import { mapArray } from './map'

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
import { props } from './props'

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
import { range } from './range'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#range)

### reduce

```typescript

reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: readonly T[]): TResult
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

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: readonly T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: readonly T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: readonly T[]) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: readonly T[]) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'
import { curry } from './curry'

function reduceFn(
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
import { reduce } from './reduce'

const reducer = (
  prev, current, i
) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [ 1, 2, 3 ]

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
    )).toThrowWithMessage(TypeError, 'reduce: list must be array or iterable')
})

test('with undefined as iterable', () => {
  expect(() => reduce(
    reducer, initialValue, undefined
  )).toThrowWithMessage(TypeError,
    'reduce: list must be array or iterable')
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

<summary>2 failed <italic>Ramda.reduce</italic> specs

> :boom: Reason for the failure: Rambda library doesn't have `R.reduced` method | Ramda method pass to `reduce` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('reduce', function() {
  var add = function(a, b) {return a + b;};
  var mult = function(a, b) {return a * b;};
  it('Prefers the use of the iterator of an object over reduce (and handles short-circuits)', function() {
    var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
    function Reducible(arr) {
      this.arr = arr;
    }
    Reducible.prototype.reduce = function(f, init) {
      var acc = init;
      for (var i = 0; i < this.arr.length; i += 1) {
        acc = f(acc, this.arr[i]);
      }
      return acc;
    };
    Reducible.prototype[symIterator] = function() {
      var a = this.arr;
      return {
        _pos: 0,
        next: function() {
          if (this._pos < a.length) {
            var v = a[this._pos];
            this._pos += 1;
            return {
              value: v,
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    };
    var xf = R.take(2);
    var apendingT = { };
    apendingT['@@transducer/result'] = R.identity;
    apendingT['@@transducer/step'] = R.flip(R.append);
    var rfn = xf(apendingT);
    var list = new Reducible([1, 2, 3, 4, 5, 6]);
    eq(R.reduce(rfn, [], list), [1, 2]);
  });
  it('short circuits with reduced', function() {
    var addWithMaxOf10 = function(acc, val) {return acc + val > 10 ? R.reduced(acc) : acc + val;};
    eq(R.reduce(addWithMaxOf10, 0, [1, 2, 3, 4]), 10);
    eq(R.reduce(addWithMaxOf10, 0, [2, 4, 6, 8]), 6);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduce)

### reject

```typescript

reject<T>(predicate: FilterFunctionArray<T>, list: readonly T[]): T[]
```

It has the opposite effect of `R.filter`.

```javascript
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list)
  R.reject(predicate, obj)
]
// => [[1, 2], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%0A%20%20R.reject(predicate%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.reject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(predicate: FilterFunctionArray<T>, list: readonly T[]): T[];
reject<T>(predicate: FilterFunctionArray<T>): (list: readonly T[]) => T[];
reject<T>(predicate: FilterFunctionArray<T>, obj: Dictionary<T>): Dictionary<T>;
reject<T, U>(predicate: FilterFunctionArray<T>): (obj: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import { filter } from './filter'

export function reject(predicate, list){
  if (arguments.length === 1) return _list => reject(predicate, _list)

  return filter(x => !predicate(x), list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reject } from './reject'

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

<details>

<summary>1 failed <italic>Ramda.reject</italic> specs

> :boom: Reason for the failure: Ramda method dispatches to `filter` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('reject', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to `filter` method', function() {
    function Nothing() {}
    Nothing.value = new Nothing();
    Nothing.prototype.filter = function() {
      return this;
    };
    function Just(x) { this.value = x; }
    Just.prototype.filter = function(pred) {
      return pred(this.value) ? this : Nothing.value;
    };
    var m = new Just(42);
    eq(R.filter(R.T, m), m);
    eq(R.filter(R.F, m), Nothing.value);
    eq(R.reject(R.T, m), Nothing.value);
    eq(R.reject(R.F, m), m);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reject)

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
import { repeat } from './repeat'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#repeat)

### replace

```typescript

replace(strOrRegex: RegExp | string, replacer: string, str: string): string
```

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
const strOrRegex = /o/g

const result = R.replace(strOrRegex, '|0|', 'foo')
// => 'f|0||0|'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20strOrRegex%20%3D%20%2Fo%2Fg%0A%0Aconst%20result%20%3D%20R.replace(strOrRegex%2C%20'%7C0%7C'%2C%20'foo')%0A%2F%2F%20%3D%3E%20'f%7C0%7C%7C0%7C'">Try this <strong>R.replace</strong> example in Rambda REPL</a>

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
import { curry } from './curry'

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
import { replace } from './replace'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replace)

### reverse

```typescript

reverse<T>(input: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(input: readonly T[]): T[];
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
import { reverse } from './reverse'

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

```javascript
const input = {x: 1, y: 2}
const xLens = R.lensProp('x')

R.set(xLens, 4, input) //=> {x: 4, y: 2}
R.set(xLens, 8, input) //=> {x: 8, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0Aconst%20xLens%20%3D%20R.lensProp('x')%0A%0AR.set(xLens%2C%204%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.set(xLens%2C%208%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%208%2C%20y%3A%202%7D">Try this <strong>R.set</strong> example in Rambda REPL</a>

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
import { always } from './always'
import { curry } from './curry'
import { over } from './over'

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
import { assoc } from './assoc'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { prop } from './prop'
import { set } from './set'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#set)

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
  R.slice(str, to, list),
  R.slice(from, to, list)
]
// => ['OO_', [1, 2, 3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20str%20%3D%20'FOO_BAR'%0Aconst%20from%20%3D%201%0Aconst%20to%20%3D%204%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.slice(str%2C%20to%2C%20list)%2C%0A%20%20R.slice(from%2C%20to%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'OO_'%2C%20%5B1%2C%202%2C%203%5D%5D">Try this <strong>R.slice</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
slice(from: number, to: number, input: string): string;
slice<T>(from: number, to: number, input: readonly T[]): T[];
slice(from: number, to: number): {
  (input: string): string;
  <T>(input: readonly T[]): T[];
};
slice(from: number): {
  (to: number, input: string): string;
  <T>(to: number, input: readonly T[]): T[];
};
```

</details>

<details>

<summary><strong>R.slice</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { slice } from './slice'

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

sort<T>(sortFn: (a: T, b: T) => number, list: readonly T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function.

> :boom: `sortFn` function must return a number.

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

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: readonly T[]): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.sort</strong> source</summary>

```javascript
export function sort(sortFn, list){
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  const clone = list.slice()

  return clone.sort(sortFn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sort } from './sort'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sort)

### sortBy

```typescript

sortBy<T>(sortFn: (a: T) => Ord, list: readonly T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function.

> :boom: `sortFn` function must return a value to compare.

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

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: readonly T[]): T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortBy</strong> source</summary>

```javascript
export function sortBy(sortFn, list){
  if (arguments.length === 1) return _list => sortBy(sortFn, _list)

  const clone = list.slice()

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
import { compose } from './compose'
import { prop } from './prop'
import { sortBy } from './sortBy'
import { toLower } from './toLower'

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
import {sortBy} from 'rambda'

interface Input {
  a: number,
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
    curriedResult // $ExpectType { a: number; }[]
    result[0].a // $ExpectType number
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
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.sortBy</italic> specs

> :boom: Reason for the failure: Ramda method works with array-like objects
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

var albums = [
  {title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque'},
  {title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock'},
  {title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz'},
  {title: 'Fly By Night', artist: 'Rush', genre: 'Rock'},
  {title: 'Goldberg Variations', artist: 'Daniel Barenboim', genre: 'Baroque'},
  {title: 'New World Symphony', artist: 'Leonard Bernstein', genre: 'Romantic'},
  {title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz'},
  {title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal'},
  {title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern'},
  {title: 'Evita', artist: 'Various', genre: 'Broadway'},
  {title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk'},
  {title: 'The Magic Flute', artist: 'John Eliot Gardiner', genre: 'Classical'}
];
describe('sortBy', function() {
  it('sorts array-like object', function() {
    var args = (function() { return arguments; }('c', 'a', 'b'));
    var result = R.sortBy(R.identity, args);
    eq(result[0], 'a');
    eq(result[1], 'b');
    eq(result[2], 'c');
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### split

```typescript

split(separator: string | RegExp): (str: string) => string[]
```

Curried version of `String.prototype.split`

```javascript
const str = 'foo|bar|baz'
const separator = |'
const result = R.split(separator, str))
// => [ 'foo', 'bar', 'baz' ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo%7Cbar%7Cbaz'%0Aconst%20separator%20%3D%20%7C'%0Aconst%20result%20%3D%20R.split(separator%2C%20str))%0A%2F%2F%20%3D%3E%20%5B%20'foo'%2C%20'bar'%2C%20'baz'%20%5D">Try this <strong>R.split</strong> example in Rambda REPL</a>

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
import { split } from './split'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#split)

### splitAt

```typescript

splitAt<T>(index: number, input: T[]): [T[], T[]]
```

It splits string or array at a given index.

```javascript
const list = [ 1, 2, 3 ]
const result = splitAt(2, list)
// => [[ 1, 2 ], [ 3 ]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0Aconst%20result%20%3D%20splitAt(2%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B%201%2C%202%20%5D%2C%20%5B%203%20%5D%5D">Try this <strong>R.splitAt</strong> example in Rambda REPL</a>

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
import { _isArray } from './_internals/_isArray'
import { drop } from './drop'
import { maybe } from './maybe'
import { take } from './take'

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

import { splitAt } from './splitAt'

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
      `Cannot read property 'slice' of ${ badInput }`)
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

splitEvery<T>(sliceLength: number, input: readonly T[]): T[][]
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

<summary>All Typescript definitions</summary>

```typescript
splitEvery<T>(sliceLength: number, input: readonly T[]): T[][];
splitEvery(sliceLength: number, input: string): string[];
splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: readonly T[]): T[][];
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
import { splitEvery } from './splitEvery'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

### splitWhen

```typescript

splitWhen<T, U>(predicate: Predicate<T>, list: U[]): U[][]
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

<summary>All Typescript definitions</summary>

```typescript
splitWhen<T, U>(predicate: Predicate<T>, list: U[]): U[][];
splitWhen<T>(predicate: Predicate<T>): <U>(list: U[]) => U[][];
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

import { equals } from './equals'
import { splitWhen } from './splitWhen'

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
      `Cannot read property 'length' of ${ badInput }`)
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

Curried version of `String.prototype.startsWith`

> :boom: It doesn't work with arrays unlike its corresponding **Ramda** method.

```javascript
const str = 'foo-bar'

const result = [
  R.startsWith('foo', str),
  R.startsWith('bar', str)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.startsWith('foo'%2C%20str)%2C%0A%20%20R.startsWith('bar'%2C%20str)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.startsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
```

</details>

<details>

<summary><strong>R.startsWith</strong> source</summary>

```javascript
export function startsWith(target, str){
  if (arguments.length === 1) return _str => startsWith(target, _str)

  return str.startsWith(target)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { startsWith } from './startsWith'

test('true', () => {
  const result = startsWith('foo', 'foo-bar')

  expect(result).toBeTrue()
})

test('false', () => {
  const result = startsWith('baz')('foo-bar')

  expect(result).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {startsWith} from 'rambda'

const target = 'foo'
const input = 'foo bar'

describe('R.startsWith', () => {
  it('happy', () => {
    const result = startsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(input)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>4 failed <italic>Ramda.startsWith</italic> specs

> :boom: Reason for the failure: Rambda method doesn't support arrays
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array starts with the provided value', function() {
    eq(R.startsWith(['a'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array starts with the provided values', function() {
    eq(R.startsWith(['a', 'b'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not start with the provided value', function() {
    eq(R.startsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not start with the provided values', function() {
    eq(R.startsWith(['b', 'c'], ['a', 'b', 'c']), false);
  });
});
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

R.subtract(x, y) 
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20x%20%3D%203%0Aconst%20y%20%3D%201%0A%0AR.subtract(x%2C%20y)%20%0A%2F%2F%20%3D%3E%202">Try this <strong>R.subtract</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

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
import { subtract } from './subtract'

test('happy', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#subtract)

### sum

```typescript

sum(list: readonly number[]): number
```

```javascript
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sum(%5B1%2C%202%2C%203%2C%204%2C%205%5D)%20%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.sum</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: readonly number[]): number;
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
import { sum } from './sum'

test('happy', () => {
  expect(sum([ 1, 2, 3, 4, 5 ])).toBe(15)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sum)

### symmetricDifference

```typescript

symmetricDifference<T>(x: readonly T[], y: readonly T[]): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

> :boom: `R.equals` is used to determine equality, i.e. it can be safely used with list of objects.

```javascript
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20y%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20symmetricDifference(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%205%2C%206%20%5D">Try this <strong>R.symmetricDifference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(x: readonly T[], y: readonly T[]): T[];
symmetricDifference<T>(x: readonly T[]): <T>(y: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.symmetricDifference</strong> source</summary>

```javascript
import { concat } from './concat'
import { filter } from './filter'
import { includes } from './includes'

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
import { symmetricDifference } from './symmetricDifference'

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

```javascript
R.T() 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.T()%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.T</strong> example in Rambda REPL</a>

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

tail<T>(input: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
tail<T>(input: readonly T[]): T[];
tail(input: string): string;
```

</details>

<details>

<summary><strong>R.tail</strong> source</summary>

```javascript
import { drop } from './drop'

export function tail(listOrString){
  return drop(1, listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tail } from './tail'

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
  it('with list', () => {
    const result = tail([1, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tail)

### take

```typescript

take<T>(howMany: number, input: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, input: readonly T[]): T[];
take(howMany: number, input: string): string;
take<T>(howMany: number): {
  <T>(input: readonly T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.take</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

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
import { take } from './take'

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

<summary>3 failed <italic>Ramda.take</italic> specs

> :boom: Reason for the failure: Rambda library doesn't have 'R.into` method
</summary>

```javascript
var assert = require('assert');
var sinon = require('sinon');

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
describe('take', function() {
  it('handles zero correctly (#1224)', function() {
    eq(R.into([], R.take(0), [1, 2, 3]), []);
  });
  it('steps correct number of times', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(2)), [1, 2, 3]);
    sinon.assert.calledTwice(spy);
  });
  it('transducer called for every member of list if `n` is < 0', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(-1)), [1, 2, 3]);
    sinon.assert.calledThrice(spy);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#take)

### takeLast

```typescript

takeLast<T>(howMany: number, input: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, input: readonly T[]): T[];
takeLast(howMany: number, input: string): string;
takeLast<T>(howMany: number): {
  <T>(input: readonly T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.takeLast</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

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
import { takeLast } from './takeLast'

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

<summary>All Typescript definitions</summary>

```typescript
takeLastWhile(predicate: (x: string) => boolean, input: string): string;
takeLastWhile(predicate: (x: string) => boolean): (input: string) => string;
takeLastWhile<T>(predicate: (x: T) => boolean, input: readonly T[]): T[];
takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: readonly T[]) => T[];
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
import { takeLastWhile } from './takeLastWhile'
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

<summary>All Typescript definitions</summary>

```typescript
takeWhile(fn: Predicate<string>, iterable: string): string;
takeWhile(fn: Predicate<string>): (iterable: string) => string;
takeWhile<T>(fn: Predicate<T>, iterable: readonly T[]): T[];
takeWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeWhile</strong> source</summary>

```javascript
import { _isArray } from '../src/_internals/_isArray'

export function takeWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => takeWhile(predicate, _iterable)
  }
  const isArray = _isArray(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }
  let flag = true
  const holder = []
  let counter = -1

  while (counter++ < iterable.length - 1){
    if (!predicate(iterable[ counter ])){
      if (flag) flag = false
    } else if (flag){
      holder.push(iterable[ counter ])
    }
  }
  holder

  return isArray ? holder : holder.join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeWhile as takeWhileRamda } from "ramda";

import { takeWhile } from "./takeWhile";
import { compareCombinations } from "./_internals/testUtils";

const list = [1, 2, 3, 4, 5];

test("happy", () => {
  const result = takeWhile((x) => x < 3, list);
  expect(result).toEqual([1, 2]);
});

test("always true", () => {
  const result = takeWhile((x) => true, list);
  expect(result).toEqual(list);
});

test("always false", () => {
  const result = takeWhile((x) => 0, list);
  expect(result).toEqual([]);
});

test("with string", () => {
  const result = takeWhile((x) => x !== "b", "foobar");
  console.log(result);
  expect(result).toBe("foo");
});

const possiblePredicates = [
  null,
  undefined,
  () => 0,
  () => true,
  (x) => x !== "b",
  /foo/g,
  {},
  [],
];

const possibleIterables = [
  null,
  undefined,
  [],
  {},
  1,
  "",
  "foobar",
  [""],
  [1, 2, 3, 4, 5],
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possiblePredicates,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 16,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 16,
          "SHOULD_THROW": 0,
        }
      `);
    },
    secondInput: possibleIterables,
    fn: takeWhile,
    fnRamda: takeWhileRamda,
  });
});
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {takeWhile} from 'rambda'

const list = [1, 2, 3, 4]

describe('R.takeWhile', () => {
  it('happy', () => {
    const result = takeWhile(x => x > 2, list)

    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = takeWhile<number>(x => x > 2)(list)

    result // $ExpectType number[]
  })
})

describe('with string as iterable', () => {
  const str = 'foobar'
  it('happy', () => {
    const result = takeWhile(x => x !== 'b', str)

    result // $ExpectType string
  })
  it('curried require explicit type', () => {
    const result = takeWhile(x => x !== 'b')(str)

    result // $ExpectType string
  })
})
```

</details>

*2 failed Ramda.takeWhile specs*

> :boom: Reason for the failure: Ramda method works with strings not only arrays

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.

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
import { tap } from './tap'

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

<details>

<summary>2 failed <italic>Ramda.tap</italic> specs

> :boom: Reason for the failure: Ramda method can act as a transducer
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');
var listXf = require('./helpers/listXf');
var _curry2 = require('rambda/internal/_curry2');

describe('tap', function() {
  var pushToList = _curry2(function(lst, x) { lst.push(x); });
  it('can act as a transducer', function() {
    var sideEffect = [];
    var numbers = [1,2,3,4,5];
    var xf = R.compose(R.map(R.identity), R.tap(pushToList(sideEffect)));
    eq(R.into([], xf, numbers), numbers);
    eq(sideEffect, numbers);
  });
  it('dispatches to transformer objects', function() {
    var sideEffect = [];
    var pushToSideEffect = pushToList(sideEffect);
    eq(R.tap(pushToSideEffect, listXf), {
      f: pushToSideEffect,
      xf: listXf
    });
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tap)

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
import { test as testMethod } from './test'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#test)

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
//=> [0, 2, 4, 6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20howMany%20%3D%205%0A%0AR.times(fn%2C%20howMany)%0A%2F%2F%3D%3E%20%5B0%2C%202%2C%204%2C%206%2C%208%5D">Try this <strong>R.times</strong> example in Rambda REPL</a>

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
import { map } from './map'
import { range } from './range'

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

import { identity } from './identity'
import { times } from './times'

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

toLower(str: string): string
```

```javascript
R.toLower('FOO')
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.toLower</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
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
import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toLower)

### toPairs

```typescript

toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]
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

<summary>All Typescript definitions</summary>

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];
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
import { toPairs } from './toPairs'

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

    result // $ExpectType [string, number | number[]][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toPairs)

### toString

```typescript

toString<T>(x: T): string
```

```javascript
R.toString([1, 2]) 
// => '1,2'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%0A%2F%2F%20%3D%3E%20'1%2C2'">Try this <strong>R.toString</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toString<T>(x: T): string;
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
import { toString } from './toString'

test('happy', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toString)

### toUpper

```typescript

toUpper(str: string): string
```

```javascript
R.toUpper('foo')
// => 'FOO'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%0A%2F%2F%20%3D%3E%20'FOO'">Try this <strong>R.toUpper</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
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
import { toUpper } from './toUpper'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toUpper)

### transpose

```typescript

transpose<T>(list: readonly T[][]): T[][]
```

```javascript
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B10%2C%2011%5D%2C%20%5B20%5D%2C%20%5B%5D%2C%20%5B30%2C%2031%2C%2032%5D%5D%0Aconst%20expected%20%3D%20%5B%5B10%2C%2020%2C%2030%5D%2C%20%5B11%2C%2031%5D%2C%20%5B32%5D%5D%0A%0Aconst%20result%20%3D%20R.transpose(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.transpose</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: readonly T[][]): T[][];
```

</details>

<details>

<summary><strong>R.transpose</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

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
import { transpose } from './transpose'

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

```javascript
R.trim('  foo  ') 
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.trim</strong> example in Rambda REPL</a>

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
import { trim } from './trim'

test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.trim</italic> specs

> :boom: Reason for the failure: Ramda method trims all ES5 whitespace
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('trim', function() {
  var test = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  it('trims all ES5 whitespace', function() {
    eq(R.trim(test), 'Hello, World!');
    eq(R.trim(test).length, 13);
  });
  if (typeof String.prototype.trim !== 'function') {
    it('falls back to a shim if String.prototype.trim is not present', function() {
      eq(R.trim('   xyz  '), 'xyz');
      eq(R.trim(test), 'Hello, World!');
      eq(R.trim(test).length, 13);
      eq(R.trim('\u200b'), '\u200b');
      eq(R.trim('\u200b').length, 1);
    });
  }
});
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

<summary>All Typescript definitions</summary>

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
import { isFunction } from './isFunction'
import { isPromise } from './isPromise'

export function tryCatch(fn, fallback){
  if (!isFunction(fn)){
    throw new Error(`R.tryCatch | fn '${ fn }'`)
  }
  const passFallback = isFunction(fallback)

  if (!isPromise(fn)){
    return (...inputs) => {
      try {
        return fn(...inputs)
      } catch (e){
        return passFallback ? fallback(e, ...inputs) : fallback
      }
    }
  }

  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(() => {
          if (!passFallback){
            return resolve(fallback)
          }

          if (!isPromise(fallback)){
            return resolve(fallback(...inputs))
          }

          fallback(...inputs).then(resolve)
        })
    })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay'
import { prop } from './prop'
import { tryCatch } from './tryCatch'

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(() => tryCatch(fn, false)(null)).toThrowWithMessage(Error,
    'R.tryCatch | fn \'foo\'')
})

test('when fallback is used', () => {
  const fn = x => x.x

  expect(tryCatch(fn, false)(null)).toBeFalse()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a : 1 }))
  const bad = () => JSON.parse('a{a')

  expect(tryCatch(good, 1)(null)).toEqual({ a : 1 })
  expect(tryCatch(bad, 1)(null)).toBe(1)
})

test('when fallback is function', () => {
  const fn = x => x.x

  expect(tryCatch(fn, () => 1)(null)).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBe(undefined)
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

test('when async + fallback', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe('fallback')
  expect(called).toBeTrue()
})

test('when async + fallback is function', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, x => x + 1)(100)).toBe(101)
  expect(called).toBeTrue()
})

test('when async + fallback is async', async () => {
  let called = false
  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }
  const fallback = async input => {
    await delay(10)

    return input + 1
  }

  expect(await tryCatch(fn, fallback)(100)).toBe(101)
  expect(called).toBeTrue()
})

test('when async + fn', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return input + 1
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe(101)
  expect(called).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {tryCatch, delay} from 'rambda'

describe('R.tryCatch', () => {
  it('synchronous', () => {
    const fn = (x: any) => x.x === 1

    const result = tryCatch(fn, false)(null)
    result // $ExpectType boolean
  })
  it('synchronous + fallback is function', () => {
    const fn = (x: any) => typeof x.x
    const fallback = (x: any) => typeof x
    const result = tryCatch<any, string>(fn, fallback)(null)
    result // $ExpectType string
  })

  it('asynchronous', async() => {
    const fn = async(input: any) => {
      return typeof JSON.parse('{a:')
    }
    const result = await tryCatch<string>(fn, 'fallback')(100)
    result // $ExpectType string
  })

  it('asynchronous + fallback is asynchronous', async() => {
    const fn = async(input: any) => {
      await delay(100)
      return JSON.parse(`{a:${input}`)
    }
    const fallback = async(input: any) => {
      await delay(100)
      return 'foo'
    }
    const result = await tryCatch<string>(fn, fallback)(100)
    result // $ExpectType string
  })
})
```

</details>

*1 failed Ramda.tryCatch specs*

> :boom: Reason for the failure: Ramda method returns a function with the same arity

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

### type

```typescript

type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"
```

It accepts any input and it returns its type.

> :boom: `NaN`, `Promise` and `Async` are types specific for **Rambda**.

```javascript
R.type(() => {}) // => 'Function'
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

<summary>All Typescript definitions</summary>

```typescript
type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";
```

</details>

<details>

<summary><strong>R.type</strong> source</summary>

```javascript
import { _isArray } from './_internals/_isArray'

export function type(input){
  const typeOf = typeof input

  if (input === null){
    return 'Null'
  } else if (input === undefined){
    return 'Undefined'
  } else if (typeOf === 'boolean'){
    return 'Boolean'
  } else if (typeOf === 'number'){
    return Number.isNaN(input) ? 'NaN' : 'Number'
  } else if (typeOf === 'string'){
    return 'String'
  } else if (_isArray(input)){
    return 'Array'
  } else if (input instanceof RegExp){
    return 'RegExp'
  }

  const asStr = input && input.toString ? input.toString() : ''

  if ([ 'true', 'false' ].includes(asStr)) return 'Boolean'
  if (!Number.isNaN(Number(asStr))) return 'Number'
  if (asStr.startsWith('async')) return 'Async'
  if (asStr === '[object Promise]') return 'Promise'
  if (typeOf === 'function') return 'Function'
  if (input instanceof String) return 'String'

  return 'Object'
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { type as ramdaType } from 'ramda'

import { type } from './type'

test('with simple promise', () => {
  expect(type(Promise.resolve(1))).toBe('Promise')
})

test('with new Boolean', () => {
  expect(type(new Boolean(true))).toBe('Boolean')
})

test('with new String', () => {
  expect(type(new String('I am a String object'))).toEqual('String')
})

test('with new Number', () => {
  expect(type(new Number(1))).toBe('Number')
})

test('with new promise', () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toEqual('Promise')
})

test('async function', () => {
  expect(type(async () => {})).toEqual('Async')
})

test('async arrow', () => {
  const asyncArrow = async () => {}
  expect(type(asyncArrow)).toBe('Async')
})

test('function', () => {
  const fn1 = () => {}
  const fn2 = function (){}

  function fn3(){}

  ;[ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toEqual('Function')
  })
})

test('object', () => {
  expect(type({})).toEqual('Object')
})

test('number', () => {
  expect(type(1)).toEqual('Number')
})

test('boolean', () => {
  expect(type(false)).toEqual('Boolean')
})

test('string', () => {
  expect(type('foo')).toEqual('String')
})

test('null', () => {
  expect(type(null)).toEqual('Null')
})

test('array', () => {
  expect(type([])).toEqual('Array')
  expect(type([ 1, 2, 3 ])).toEqual('Array')
})

test('regex', () => {
  expect(type(/\s/g)).toEqual('RegExp')
})

test('undefined', () => {
  expect(type(undefined)).toEqual('Undefined')
})

test('not a number', () => {
  expect(type(Number('s'))).toBe('NaN')
})

test('function inside object 1', () => {
  const obj = {
    f(){
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [ name ](){
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {type} from 'rambda'

describe('R.type', () => {
  it('happy', () => {
    const result = type(4)

    result // $ExpectType RambdaTypes
  })
})
```

</details>

<details>

<summary>1 failed <italic>Ramda.type</italic> specs

> :boom: Reason for the failure: Ramda method returns 'Number' type to NaN input, while Rambda method returns 'NaN'
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('type', function() {
  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });
  it('"Number" if given the NaN value', function() {
    eq(R.type(NaN), 'Number');
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#type)

### union

```typescript

union<T>(x: readonly T[], y: readonly T[]): T[]
```

It takes two lists and return a new list containing a merger of both list with removed duplicates. 

`R.equals` is used to compare for duplication, which means that it can be safely used with array of objects.

```javascript
const result = R.union([1,2,3], [3,4,5]);
//=> [1, 2, 3, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.union(%5B1%2C2%2C3%5D%2C%20%5B3%2C4%2C5%5D)%3B%0A%2F%2F%3D%3E%20%5B1%2C%202%2C%203%2C%204%2C%205%5D">Try this <strong>R.union</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
union<T>(x: readonly T[], y: readonly T[]): T[];
union<T>(x: readonly T[]): (y: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.union</strong> source</summary>

```javascript
import { includes } from './includes'

export function union(x, y){
  if (arguments.length === 1) return _y => union(x, _y)

  const toReturn = x.slice()

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
import { union } from './union'

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

*1 failed Ramda.union specs*

> :boom: Reason for the failure: Ramda library supports fantasy-land

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#union)

### uniq

```typescript

uniq<T>(list: readonly T[]): T[]
```

It returns a new array containing only one copy of each element of `list`.

> :boom: `R.equals` is used to determine equality

```javascript
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%201%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A1%7D%5D%0A%0AR.uniq(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try this <strong>R.uniq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(list: readonly T[]): T[];
```

</details>

<details>

<summary><strong>R.uniq</strong> source</summary>

```javascript
import { includes } from './includes'

export function uniq(list){
  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]

    if (!includes(value, willReturn)){
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
import { uniq } from './uniq'

test('uniq', () => {
  expect(uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])).toEqual([ 1, 2, 3, 0 ])
  expect(uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
  expect([ 1, '1' ]).toEqual([ 1, '1' ])
  expect(uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
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

<summary>2 failed <italic>Ramda.uniq</italic> specs

> :boom: Reason for the failure: Ramda method pass to `uniq` method | Ramda method uses reference equality for functions
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('uniq', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.uniq([-0, -0]).length, 1);
    eq(R.uniq([0, -0]).length, 2);
    eq(R.uniq([NaN, NaN]).length, 1);
    eq(R.uniq([[1], [1]]).length, 1);
    eq(R.uniq([new Just([42]), new Just([42])]).length, 1);
  it('handles null and undefined elements', function() {
    eq(R.uniq([void 0, null, void 0, null]), [void 0, null]);
  it('uses reference equality for functions', function() {
    eq(R.uniq([R.add, R.identity, R.add, R.identity, R.add, R.identity]).length, 2);
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniq)

### uniqWith

```typescript

uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: readonly T[]): T[]
```

It returns a new array containing only one copy of each element in `list` according to boolean returning function `uniqFn`.

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

const uniqFn = (x,y) => x.title === y.title

const result = R.uniqWith(uniqFn, list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20uniqFn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(uniqFn%2C%20list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.uniqWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: readonly T[]): T[];
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean): (list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqWith</strong> source</summary>

```javascript
import { any } from './any'

export function uniqWith(fn, list){
  if (arguments.length === 1) return _list => uniqWith(fn, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]
    const flag = any(willReturnInstance => fn(value, willReturnInstance),
      willReturn)

    if (!flag){
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
import { uniqWith } from './uniqWith'

test('happy', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  const curriedResult = uniqWith(fn)(input)

  expect(result).toEqual(expectedResult)

  expect(curriedResult).toEqual(expectedResult)
})

test('uniqWith', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  //const result = uniqWith(Ramda.eqBy(Ramda.prop('title')), input)

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniqWith} from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
    const input = [
      {
        id: 0,
        title: 'foo',
      },
      {
        id: 1,
        title: 'bar',
      },
      {
        id: 2,
        title: 'baz',
      },
      {
        id: 3,
        title: 'foo',
      },
      {
        id: 4,
        title: 'bar',
      },
    ]

    const fn = (x: any, y: any) => x.title === y.title

    const result = uniqWith(fn, input)
    result // $ExpectType { id: number; title: string; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqWith)

### unless

```typescript

unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, obj: T): U
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

<summary>All Typescript definitions</summary>

```typescript
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, obj: T): U;
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (obj: T) => U;
```

</details>

<details>

<summary><strong>R.unless</strong> source</summary>

```javascript
export function unless(predicate, whenFalse){
  if (arguments.length === 1){
    return _whenFalse => unless(predicate, _whenFalse)
  }

  return input => {
    if (predicate(input)) return input

    return whenFalse(input)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { inc } from './inc'
import { isNil } from './isNil'
import { unless } from './unless'

const safeInc = unless(isNil, inc)

test('happy', () => {
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

test('curried', () => {
  const safeIncCurried = unless(isNil)(inc)
  expect(safeIncCurried(null)).toBeNull()
  expect(safeIncCurried(1)).toBe(2)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {unless, isNil, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const safeInc = unless<any, number>(isNil, inc)
    const result = [safeInc(null), safeInc(1)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })

  it('it needs explicitly declared types', () => {
    const safeInc = unless(x => x > 5, inc)
    const result = safeInc(1)
    result // $ExpectType number
  })
})
```

</details>

*4 failed Ramda.unless specs*

> :boom: Reason for the failure: Rambda library doesn't have `R.of`

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### update

```typescript

update<T>(index: number, newValue: T, list: readonly T[]): T[]
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

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: readonly T[]): T[];
update<T>(index: number, newValue: T): (list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.update</strong> source</summary>

```javascript
import { curry } from './curry'

function updateFn(
  index, newValue, list
){
  const arrClone = list.slice()

  return arrClone.fill(
    newValue, index, index + 1
  )
}

export const update = curry(updateFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { update } from './update'

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

<summary>1 failed <italic>Ramda.update</italic> specs

> :boom: Reason for the failure: Ramda method accepts an array-like object
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('update', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.update(2, 4, args(0, 1, 2, 3)), [0, 1, 4, 3]);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### values

```typescript

values<T extends object, K extends keyof T>(obj: T): T[K][]
```

With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.

```javascript
const obj = {a:1, b:2}

R.values(obj)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A2%7D%0A%0AR.values(obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.values</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>

<details>

<summary><strong>R.values</strong> source</summary>

```javascript
import { type } from './type'

export function values(obj){
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { values } from './values'

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

```javascript
const lens = R.lensProp('x')

R.view(lens, {x: 1, y: 2}) //=> 1
R.view(lens, {x: 4, y: 2}) //=> 4
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lens%20%3D%20R.lensProp('x')%0A%0AR.view(lens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%201%0AR.view(lens%2C%20%7Bx%3A%204%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%204">Try this <strong>R.view</strong> example in Rambda REPL</a>

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
import { assoc } from './assoc'
import { lens } from './lens'
import { prop } from './prop'
import { view } from './view'

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
  foo: string,
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#view)

### when

```typescript

when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): U
```

<details>

<summary>All Typescript definitions</summary>

```typescript
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): U;
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => U;
when<T, U>(predicate: (x: T) => boolean): FunctionToolbelt.Curry<(whenTrueFn: (a: T) => U, input: T) => U>;
```

</details>

<details>

<summary><strong>R.when</strong> source</summary>

```javascript
import { curry } from './curry'

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
import { add } from './add'
import { when } from './when'

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
const whenTrueFn = (x: number) => x + 2

describe('R.when', () => {
  it('happy', () => {
    const result = when(predicate, whenTrueFn, 1)
    result // $ExpectType number
  })

  it('curry 1', () => {
    const fn = when(predicate, whenTrueFn)
    const result = fn(1)
    result // $ExpectType number
  })

  it('curry 2 require explicit types', () => {
    const fn = when<number, number>(predicate)(whenTrueFn)
    const result = fn(1)
    result // $ExpectType number
  })

  it('curry 3 require explicit types', () => {
    const result = when<number, number>(predicate)(whenTrueFn, 1)
    result // $ExpectType number
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
import { equals } from './equals'
import { where } from './where'

test('when true', () => {
  const predicate = where({
    a : equals('foo'),
    b : equals('bar'),
  })
  expect(predicate({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(true)
})

test('when false', () => {
  const predicate = where({
    a : equals('foo'),
    b : equals('baz'),
  })
  expect(predicate({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(false)
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

*2 failed Ramda.where specs*

> :boom: Reason for the failure: Ramba method looks inside `prototype` property

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#where)

### whereEq

```typescript

whereEq<T, U>(condition: T, input: U): boolean
```

It will return `true` if all of `input` object fully or partially include `rule` object.

```javascript
const condition = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = whereEq(condition, input)
//=> true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20%7B%20a%20%3A%20%7B%20b%20%3A%201%20%7D%20%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%7B%20b%20%3A%201%20%7D%2C%0A%20%20c%20%3A%202%0A%7D%0A%0Aconst%20result%20%3D%20whereEq(condition%2C%20input)%0A%2F%2F%3D%3E%20true">Try this <strong>R.whereEq</strong> example in Rambda REPL</a>

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
import { equals } from './equals'
import { filter } from './filter'

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
import { whereEq } from './whereEq'

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
    'Cannot read property \'a\' of null')
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

*2 failed Ramda.whereEq specs*

> :boom: Reason for the failure: Ramba method looks inside `prototype` property | Rambda.equals doesn't support equality of functions

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#whereEq)

### without

```typescript

without<T>(matchAgainst: readonly T[], source: readonly T[]): T[]
```

It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.

> :boom: `R.equals` is used to determine equality

```javascript
const source = [1, 2, 3, 4]
const matchAgainst = [2, 3]

const result = R.without(matchAgainst, source)
// => [1, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20source%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20matchAgainst%20%3D%20%5B2%2C%203%5D%0A%0Aconst%20result%20%3D%20R.without(matchAgainst%2C%20source)%0A%2F%2F%20%3D%3E%20%5B1%2C%204%5D">Try this <strong>R.without</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
without<T>(matchAgainst: readonly T[], source: readonly T[]): T[];
without<T>(matchAgainst: readonly T[]): (source: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.without</strong> source</summary>

```javascript
import { includes } from './includes'
import { reduce } from './reduce'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      includes(current, matchAgainst) ? prev : prev.concat(current),
    [],
    source
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { without } from './without'

test('should return a new list without values in the first argument ', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
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

<details>

<summary>2 failed <italic>Ramda.without</italic> specs

> :boom: Reason for the failure: Ramda method act as a transducer | Ramda method pass to `equals` method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('without', function() {
  it('can act as a transducer', function() {
    eq(R.into([], R.without([1]), [1]), []);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.without([0], [-0]).length, 1);
    eq(R.without([-0], [0]).length, 1);
    eq(R.without([NaN], [NaN]).length, 0);
    eq(R.without([[1]], [[1]]).length, 0);
    eq(R.without([new Just([42])], [new Just([42])]).length, 0);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#without)

### xor

```typescript

xor(x: boolean, y: boolean): boolean
```

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
import { xor } from './xor'

test('compares two values with exclusive or', () => {
  expect(xor(true, true)).toEqual(false)
  expect(xor(true, false)).toEqual(true)
  expect(xor(false, true)).toEqual(true)
  expect(xor(false, false)).toEqual(false)
})

test('when both values are truthy, it should return false', () => {
  expect(xor(true, 'foo')).toEqual(false)
  expect(xor(42, true)).toEqual(false)
  expect(xor('foo', 42)).toEqual(false)
  expect(xor({}, true)).toEqual(false)
  expect(xor(true, [])).toEqual(false)
  expect(xor([], {})).toEqual(false)
  expect(xor(new Date(), true)).toEqual(false)
  expect(xor(true, Infinity)).toEqual(false)
  expect(xor(Infinity, new Date())).toEqual(false)
})

test('when both values are falsy, it should return false', () => {
  expect(xor(null, false)).toEqual(false)
  expect(xor(false, undefined)).toEqual(false)
  expect(xor(undefined, null)).toEqual(false)
  expect(xor(0, false)).toEqual(false)
  expect(xor(false, NaN)).toEqual(false)
  expect(xor(NaN, 0)).toEqual(false)
  expect(xor('', false)).toEqual(false)
})

test('when one argument is truthy and the other is falsy, it should return true', () => {
  expect(xor('foo', null)).toEqual(true)
  expect(xor(null, 'foo')).toEqual(true)
  expect(xor(undefined, 42)).toEqual(true)
  expect(xor(42, undefined)).toEqual(true)
  expect(xor(Infinity, NaN)).toEqual(true)
  expect(xor(NaN, Infinity)).toEqual(true)
  expect(xor({}, '')).toEqual(true)
  expect(xor('', {})).toEqual(true)
  expect(xor(new Date(), 0)).toEqual(true)
  expect(xor(0, new Date())).toEqual(true)
  expect(xor([], null)).toEqual(true)
  expect(xor(undefined, [])).toEqual(true)
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

<details>

<summary>1 failed <italic>Ramda.xor</italic> specs

> :boom: Reason for the failure: Ramda method support empty call of method
</summary>

```javascript
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('xor', function() {
  it('returns a curried function', function() {
    eq(R.xor()(true)(true), false);
    eq(R.xor()(true)(false), true);
    eq(R.xor()(false)(true), true);
    eq(R.xor()(false)(false), false);
  });
});
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#xor)

### zip

```typescript

zip<K, V>(x: readonly K[], y: readonly V[]): KeyValuePair<K, V>[]
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B...x%2C%203%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try this <strong>R.zip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(x: readonly K[], y: readonly V[]): KeyValuePair<K, V>[];
zip<K>(x: readonly K[]): <V>(y: readonly V[]) => KeyValuePair<K, V>[];
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
import { zip } from './zip'

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

zipObj<T>(keys: string[], values: T[]): { [index: string]: T }
```

It will return a new object with keys of `keys` array and values of `values` array.

```javascript
const keys = ['a', 'b', 'c']

R.zipObj(keys, [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(keys, [1, 2])
//=> {a: 1, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20keys%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0A%0AR.zipObj(keys%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zipObj(keys%2C%20%5B1%2C%202%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try this <strong>R.zipObj</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zipObj<T>(keys: string[], values: T[]): { [index: string]: T };
zipObj(keys: string[]): <T>(values: T[]) => { [index: string]: T };
```

</details>

<details>

<summary><strong>R.zipObj</strong> source</summary>

```javascript
import { take } from './take'

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
import { equals } from './equals'
import { zipObj } from './zipObj'

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
    const result = zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3])
    result // $ExpectType { [index: string]: number; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipObj)

### zipWith

```typescript

zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[], list2: readonly U[]): TResult[]
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

<summary>All Typescript definitions</summary>

```typescript
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[], list2: readonly U[]): TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: readonly T[], list2: readonly U[]) => TResult[];
```

</details>

<details>

<summary><strong>R.zipWith</strong> source</summary>

```javascript
import { curry } from './curry'
import { take } from './take'

function zipWithFn(
  fn, x, y
){
  return take(x.length > y.length ? y.length : x.length,
    x).map((xInstance, i) => fn(xInstance, y[ i ]))
}

export const zipWith = curry(zipWithFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { zipWith } from './zipWith'

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

## ➤ CHANGELOG

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

## ➤ Additional info

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

> Releases

[Rambda's releases](https://github.com/selfrefactor/rambda/releases) are used mostly for testing purposes, so it is not advisable to be used.

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
# Rambda

Faster alternative to **Ramda** - [Documentation](https://selfrefactor.github.io/rambda/#/)

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


```typescript
add(a: number, b: number): number
```

It adds `a` and `b`.

```javascript
R.add(2, 3) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try the above <strong>R.add</strong> example in Rambda REPL</a>

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

describe('add', () => {
  it('number', () => {
    const resultA = add(4)(1) // $ExpectType number
    resultA // $ExpectType number
    const resultB = add(4, 1) // $ExpectType number
    resultB // $ExpectType number
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 96.71% slower and Ramda is 96.74% slower</summary>

```javascript
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


### adjust


```typescript
adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try the above <strong>R.adjust</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[];
adjust<T>(index: number, replaceFn: (a: T) => T): (list: ReadonlyArray<T>) => T[];
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

const expected = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(
    1, add(10), [ 0, 1, 2 ]
  )).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), [ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(
    -2, add(10), [ 0, 1, 2 ]
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

<summary>Rambda is faster than Ramda with 4.57%</summary>

```javascript
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

<details>

<summary> Failed <italic>Ramda.adjust</italic> specs

> Reason for the failure: ramda accepts an array-like object
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('adjust', () => {
  it('accepts an array-like object', () => {
    function args(){
      return arguments
    }
    eq(R.adjust(
      2, R.add(1), args(
        0, 1, 2, 3
      )
    ), [ 0, 1, 3, 3 ])
  })
})

```


</details>


### all


```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(fn, arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(fn%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.all</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

<details>

<summary><strong>R.all</strong> source</summary>

```javascript
export function all(predicate, list){
  if (arguments.length === 1) return _list => all(predicate, _list)

  for (let i = 0; i < list.length; i++){
    if (!predicate(list[ i ], i)) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { all } from './all'

const numArr = [ 0, 1, 2, 3, 4 ]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(numArr)).toBeTrue()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, numArr)).toBeFalse()
})

test('pass index as second argument', () => {
  const indexes = []
  const fn = (x, i) => {
    indexes.push(i)

    return x > 5
  }
  all(fn, [ 10, 12, 14 ])

  expect(indexes).toEqual([ 0, 1, 2 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {all} from 'rambda'

describe('all', () => {
  it('happy', () => {
    const x = all<number>(y => {
      y // $ExpectType number
      return y > 0
    })([1, 2, 3])
    x // $ExpectType boolean

    const q = all(y => y > 0, [1, 2, 3]) // $ExpectType boolean

    q // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 95.2%</summary>

```javascript
const input = [ 1, 2, 3, 4 ]

const all = [
  {
    label : 'Rambda',
    fn    : () => {
      const fn = x => x > 2

      R.all(fn, input)
      R.all(fn)(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const fn = x => x > 2

      Ramda.all(fn, input)
      Ramda.all(fn)(input)
    },
  },
]
```

</details>


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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20predicates%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(predicates)(input)%20%2F%2F%20%3D%3E%20true">Try the above <strong>R.allPass</strong> example in Rambda REPL</a>

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

<summary>Rambda is faster than Ramda with 99.24%</summary>

```javascript
const rules = [ x => typeof x === 'number', x => x > 10, x => x * 7 < 100 ]

const allPass = [
  {
    label : 'Rambda',
    fn    : () => {
      R.allPass(rules)(11)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.allPass(rules)(11)
    },
  },
]
```

</details>

<details>

<summary> Failed <italic>Ramda.allPass</italic> specs

> Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('allPass', () => {
  const odd = function (n){
    return n % 2 !== 0
  }
  const lt20 = function (n){
    return n < 20
  }
  const gt5 = function (n){
    return n > 5
  }
  const plusEq = function (
    w, x, y, z
  ){
    return w + x === y + z
  }
  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    eq(R.allPass([ odd, gt5, plusEq ]).length, 4)
    eq(R.allPass([ odd, gt5, plusEq ])(
      9, 9, 9, 9
    ), true)
    eq(R.allPass([ odd, gt5, plusEq ])(9)(9)(9)(9), true)
  })
})

```


</details>


### always


```typescript
always<T>(x: T): () => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try the above <strong>R.always</strong> example in Rambda REPL</a>

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

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})
```

</details>


### and


```typescript
and<T extends { and?: ((...a: readonly any[]) => any)
```

Returns `true` if both arguments are `true`. Otherwise, it returns `false`.

```javascript
R.and(true, true); // => true
R.and(false, true); // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.and(true%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.and(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20false">Try the above <strong>R.and</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;
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
  expect(and(true, true)).toBe(true)
  expect(and(true, false)).toBe(false)
  expect(and(false, true)).toBe(false)
  expect(and(false, false)).toBe(false)
})
```

</details>

<details>

<summary></summary>

```javascript
const and = [
  {
    label : 'Rambda',
    fn    : () => {
      R.and(true, true)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.and(true, true)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.and(true, true)
    },
  },
]
```

</details>


### any


```typescript
any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.

```javascript
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0AR.any(fn%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.any</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
any<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
any<T>(predicate: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
any<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
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

const arr = [ 1, 2 ]

test('no curry', () => {
  expect(any(val => val < 0, arr)).toBeFalse()
})

test('with curry', () => {
  expect(any(val => val < 2)(arr)).toBeTrue()
})

test('passes index to predicate', () => {
  any((x, i) => {
    expect(typeof x).toBe('string')
    expect(typeof i).toBe('number')
  })([ 'foo', 'bar' ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {any} from 'rambda'

describe('any', () => {
  it('1', () => {
    const x = any<number>(
      (y, i) => {
        y // $ExpectType number
        i // $ExpectType number
        return y > 2
      },
      [1, 2, 3]
    )
    x // $ExpectType boolean
  })
  it('2', () => {
    const x = any<number>(
      y => {
        y // $ExpectType number
        return y > 2
      },
      [1, 2, 3]
    )
    x // $ExpectType boolean
  })

  it('1 curry', () => {
    const x = any<number>((y, i) => {
      y // $ExpectType number
      i // $ExpectType number
      return y > 2
    })([1, 2, 3])
    x // $ExpectType boolean
  })
  it('2 curry', () => {
    const x = any<number>(y => {
      y // $ExpectType number
      return y > 2
    })([1, 2, 3])
    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 98.77% slower and Lodash is 16.04% slower</summary>

```javascript
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


### anyPass


```typescript
anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

```javascript
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = const result = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20isBig%20%3D%20x%20%3D%3E%20x%20%3E%2020%0Aconst%20isOdd%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0Aconst%20input%20%3D%2011%0A%0Aconst%20fn%20%3D%20const%20result%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)%0A%0Aconst%20result%20%3D%20fn(input)%20%2F%2F%20%3D%3E%20true">Try the above <strong>R.anyPass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;
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

<summary>Rambda is faster than Ramda with 99.06%</summary>

```javascript
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

<details>

<summary> Failed <italic>Ramda.anyPass</italic> specs

> Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('anyPass', () => {
  const odd = function (n){
    return n % 2 !== 0
  }
  const gt20 = function (n){
    return n > 20
  }
  const lt5 = function (n){
    return n < 5
  }
  const plusEq = function (
    w, x, y, z
  ){
    return w + x === y + z
  }
  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    eq(R.anyPass([ odd, lt5, plusEq ]).length, 4)
    eq(R.anyPass([ odd, lt5, plusEq ])(
      6, 7, 8, 9
    ), false)
    eq(R.anyPass([ odd, lt5, plusEq ])(6)(7)(8)(9), false)
  })
})

```


</details>


### append


```typescript
append<T>(el: T, list: ReadonlyArray<T>): T[]
```

It appends element `el` to a `list` array.

```javascript
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.append(%0A%20%20'foo'%2C%0A%20%20%5B'bar'%2C%20'baz'%5D%0A)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try the above <strong>R.append</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(el: T, list: ReadonlyArray<T>): T[];
append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
export function append(el, list){
  if (arguments.length === 1) return _list => append(el, _list)

  if (typeof list === 'string') return `${ list }${ el }`

  const clone = list.slice()
  clone.push(el)

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose, flatten, map } from '../rambda'
import { append } from './append'

test('with strings', () => {
  expect(append('o', 'fo')).toEqual('foo')
})

test('with arrays', () => {
  expect(append('tests', [ 'write', 'more' ])).toEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests', [])).toEqual([ 'tests' ])
})

test('happy', () => {
  const result = compose(flatten, map(append(0)))([ [ 1 ], [ 2 ], [ 3 ] ])
  expect(result).toEqual([ 1, 0, 2, 0, 3, 0 ])
})

test('should not modify arguments', () => {
  const a = [ 1, 2, 3 ]
  const b = append(4, a)

  expect(a).toEqual([ 1, 2, 3 ])
  expect(b).toEqual([ 1, 2, 3, 4 ])
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 82.5%</summary>

```javascript
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


### applySpec


```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
    ...args: Parameters<ValueOfRecord<Spec>>
  ) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

Returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.

```javascript
const spec = {
  name: R.path('deeply.nested.firstname')
}
const json = {
  deeply: {
   nested: {
      firstname: 'barry'
    }
  }
}
const result = R.applySpec(spec, json) // => { name: 'barry' }

// Second example
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
});
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20spec%20%3D%20%7B%0A%20%20name%3A%20R.path('deeply.nested.firstname')%0A%7D%0Aconst%20json%20%3D%20%7B%0A%20%20deeply%3A%20%7B%0A%20%20%20nested%3A%20%7B%0A%20%20%20%20%20%20firstname%3A%20'barry'%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Aconst%20result%20%3D%20R.applySpec(spec%2C%20json)%20%2F%2F%20%3D%3E%20%7B%20name%3A%20'barry'%20%7D%0A%0A%2F%2F%20Second%20example%0Aconst%20getMetrics%20%3D%20R.applySpec(%7B%0A%20%20sum%3A%20R.add%2C%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0A%7D)%3B%0AgetMetrics(2%2C%204)%3B%20%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D">Try the above <strong>R.applySpec</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
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
  if (Array.isArray(spec)){
    const ret = []
    let i = 0
    const l = spec.length
    for (; i < l; i++){
      // handle recursive spec inside array
      if (typeof spec[ i ] === 'object' || Array.isArray(spec[ i ])){
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

test.skip('retains the highest arity', () => {
  const f = applySpec({
    f1 : nAry(2, T),
    f2 : nAry(5, T),
  })
  expect(f.length).toBe(5)
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

<details>

<summary>Rambda is faster than Ramda with 67.65%</summary>

```javascript
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


### assoc


```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try the above <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;
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

<summary>Lodash is fastest. Rambda is 91.68% slower and Ramda is 67.07% slower</summary>

```javascript
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


### assocPath


```typescript
assocPath<T, U>(path: Path, newValue: T, obj: U): U
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

```javascript
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20path%20%3D%20'b.c'%0Aconst%20newValue%20%3D%202%0Aconst%20obj%20%3D%20%7B%20a%3A%201%20%7D%0A%0AR.assocPath(path%2C%20newValue%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20a%20%3A%201%2C%20b%20%3A%20%7B%20c%20%3A%202%20%7D%7D">Try the above <strong>R.assocPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<T, U>(path: Path, newValue: T, obj: U): U;
assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
assocPath<T, U>(path: Path): FToolbelt.Curry<(a: T, b: U) => U>;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { _isInteger } from './_internals/_isInteger'
import { assoc } from './assoc'
import { curry } from './curry'

function assocPathFn(
  list, newValue, input
){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
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
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ?
        [] :
        {} :
      input[ index ]
    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextinput
    )
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)){
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

test('adds a key to an empty object', () => {
  expect(assocPath(
    'a', 1, {}
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

test('adds a nested array to a non-empty object - curry case 1', () => {
  expect(assocPath('b.0', 2)({ a : 1 })).toEqual({
    a : 1,
    b : [ 2 ],
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

test('happy', () => {
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


### both


```typescript
both(pred1: Pred, pred2: Pred): Pred
```

It returns a function with `input` argument. 

This funciton will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstCondition%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondCondition%20%3D%20x%20%3D%3E%20x%20%3C%2020%0Aconst%20fn%20%3D%20R.both(secondCondition)%0A%0Aconst%20result%20%3D%20%5Bfn(15)%2C%20fn(30)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.both</strong> example in Rambda REPL</a>

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

describe('both', () => {
  it('with passed type', () => {
    const fn = both<number>( // $ExpectType Predicate<number>
      x => {
        return x > 1
      },
      x => {
        return x % 2 === 0
      }
    )
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        return x % 2 === 0
      }
    )
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
})

describe('both + curry', () => {
  it('with passed type', () => {
    const fn = both<number>(x => {
      return x > 1
    })(x => {
      return x % 2 === 0
    })
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(x => {
      x // $ExpectType unknown
      return (x as number) > 1
    })(x => {
      return (x as number) % 2 === 0
    })
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.both</italic> specs

> Reason for the failure: ramda supports fantasy-land
</summary>

```javascript
const S = require('sanctuary')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('both', () => {
  it('accepts fantasy-land applicative functors', () => {
    const { Just } = S
    const { Nothing } = S
    eq(R.both(Just(true), Just(true)), Just(true))
    eq(R.both(Just(true), Just(false)), Just(false))
    eq(R.both(Just(true), Nothing()), Nothing())
    eq(R.both(Nothing(), Just(false)), Nothing())
    eq(R.both(Nothing(), Nothing()), Nothing())
  })
})

```


</details>


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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.clamp(0%2C%2010%2C%205)%20%2F%2F%3D%3E%205%0AR.clamp(0%2C%2010%2C%20-1)%20%2F%2F%3D%3E%200%0AR.clamp(0%2C%2010%2C%2011)%20%2F%2F%3D%3E%2010">Try the above <strong>R.clamp</strong> example in Rambda REPL</a>

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


### clone


```typescript
clone<T>(input: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
clone<T>(input: T): T;
clone<T>(input: ReadonlyArray<T>): T[];
```

</details>


### complement


```typescript
complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20origin%20%3D%20x%20%3D%3E%20x%20%3E%205%0Aconst%20inverted%20%3D%20complement(origin)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20origin(7)%2C%0A%20%20inverted(7)%0A%5D%20%3D%3E%20%5B%20true%2C%20false%20%5D">Try the above <strong>R.complement</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;
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

<summary> Failed <italic>Ramda.complement</italic> specs

> Reason for the failure: ramda supports fantasy-land
</summary>

```javascript
const S = require('sanctuary')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('complement', () => {
  it('accepts fantasy-land functors', () => {
    const { Just } = S
    const { Nothing } = S
    eq(R.complement(Just(true)), Just(false))
    eq(R.complement(Just(false)), Just(true))
    eq(R.complement(Nothing()), Nothing())
  })
})

```


</details>


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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try the above <strong>R.compose</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
compose<T1>(fn0: () => T1): () => T1;
compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
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
import { add, filter, last, map } from '../rambda'
import { compose } from './compose'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (a, y) => filter(x => x > y, a))([ 1, 2, 3, 4 ], 2)

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

<summary>Rambda is fastest. Ramda is 95.55% slower and Lodash is 76.43% slower</summary>

```javascript
const input = [ 1, 2, 3, 4 ]
const fns = [ val => val + 1, val => val.length ]

const compose = [
  {
    label : 'Rambda',
    fn    : () => {
      R.compose(...fns)(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.compose(...fns)(input)
    },
  },
  {
    label : 'Lodash.flowRight',
    fn    : () => {
      _.flowRight(...fns)(input)
    },
  },
]
```

</details>

<details>

<summary> Failed <italic>Ramda.compose</italic> specs

> Reason for the failure: ramda passes context to functions | rambda composed functions have no length
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


### concat


```typescript
concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]
```

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'foobar'">Try the above <strong>R.concat</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
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

<summary> Failed <italic>Ramda.concat</italic> specs

> Reason for the failure: ramda pass to concat method if present
</summary>

```javascript
const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('concat', () => {
  const z1 = {
    x      : 'z1',
    concat : function (that){
      return this.x + ' ' + that.x
    },
  }
  const z2 = { x : 'z2' }
  it('delegates to non-String object with a concat method, as second param', () => {
    eq(R.concat(z1, z2), 'z1 z2')
  })
})

```


</details>


### cond


```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.cond(%5B%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2025%2C%20R.always('more%20than%2025')%20%5D%2C%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2015%2C%20R.always('more%20than%2015')%20%5D%2C%0A%20%20%5B%20R.T%2C%20x%20%3D%3E%20%60%24%7Bx%7D%20is%20nothing%20special%60%20%5D%2C%0A%5D)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(30)%2C%0A%20%20fn(20)%2C%0A%20%20fn(10)%2C%0A%5D%20%0A%2F%2F%20%3D%3E%20%5B'more%20than%2025'%2C%20'more%20than%2015'%2C%20'10%20is%20nothing%20special'%5D">Try the above <strong>R.cond</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;
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
import { always, equals, T } from '../rambda.js'
import { cond } from './cond'

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

describe('cond', () => {
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

    const a = fn(0)
    a // $ExpectType string
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.cond</italic> specs

> Reason for the failure: pass to transformer is not applied in rambda
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('cond', () => {
  it('forwards all arguments to predicates and to transformers', () => {
    const fn = R.cond([
      [
        function (_, x){
          return x === 42
        },
        function (){
          return arguments.length
        },
      ],
    ])
    eq(fn(
      21, 42, 84
    ), 3)
  })
  it('retains highest predicate arity', () => {
    const fn = R.cond([
      [ R.nAry(2, R.T), R.T ],
      [ R.nAry(3, R.T), R.T ],
      [ R.nAry(1, R.T), R.T ],
    ])
    eq(fn.length, 3)
  })
})

```


</details>


### curry


```typescript
curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>
```

It expects a function as input and returns its curried version.

```javascript
const fn = (a, b, c) => a + b + c
const curried = R.curry(fn)
const sum = curried(1,2)

const result = sum(3) // => 6
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(a%2C%20b%2C%20c)%20%3D%3E%20a%20%2B%20b%20%2B%20c%0Aconst%20curried%20%3D%20R.curry(fn)%0Aconst%20sum%20%3D%20curried(1%2C2)%0A%0Aconst%20result%20%3D%20sum(3)%20%2F%2F%20%3D%3E%206">Try the above <strong>R.curry</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>;
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

<summary>Rambda is faster than Ramda with 54.29%</summary>

```javascript
const addFourNumbers = (
  a, b, c, d
) => a + b + c + d

const curry = [
  {
    label : 'Rambda',
    fn    : () => {
      const curriedAddFourNumbers = R.curry(addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const curriedAddFourNumbers = Ramda.curry(addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
  },
]
```

</details>

<details>

<summary> Failed <italic>Ramda.curry</italic> specs

> Reason for the failure: ramda passes context to functions
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


### defaultTo


```typescript
defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

```javascript
// With single input argument
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// With multiple input arguments
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'qux') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'quz') // => 'qux'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%2F%2F%20With%20single%20input%20argument%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20With%20multiple%20input%20arguments%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'qux')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'quz')%20%2F%2F%20%3D%3E%20'qux'">Try the above <strong>R.defaultTo</strong> example in Rambda REPL</a>

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
    return _inputArguments => defaultTo(defaultArgument, _inputArguments)
  } else if (arguments.length === 2){
    return flagIs(inputArguments[ 0 ]) ? defaultArgument : inputArguments[ 0 ]
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

describe('defaultTo with Ramda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo', undefined) // $ExpectType string
    x // $ExpectType string
  })
  it('fallback', () => {
    const x = defaultTo('foo', undefined) // $ExpectType "foo"
    x // $ExpectType "foo"
    const y = defaultTo('foo', 'bar') // $ExpectType "foo" | "bar"
    y // $ExpectType "foo" | "bar"
  })
  it('with one type', () => {
    const x = defaultTo<string>('foo', 'bar') // $ExpectType string
    x // $ExpectType string
  })
  it('with two types', () => {
    const x = defaultTo<string, number>('foo', 1) // $ExpectType string | number
    x // $ExpectType string | number
  })
})

describe('defaultTo with Rambda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo', undefined, 'bar') // $ExpectType string
    x // $ExpectType string
  })

  it('happy with curry', () => {
    const fn = defaultTo<string>('foo')
    const x = fn(undefined, 'bar', null) // $ExpectType string
    x // $ExpectType string
    const y = fn(undefined) // $ExpectType string
    y // $ExpectType string
  })

  it('with two types', () => {
    const x = defaultTo<string, number>('foo', undefined, 1, null, 2, 'bar') // $ExpectType string | number
    x // $ExpectType string | number
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 73.18%</summary>

```javascript
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


### difference


```typescript
difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

```javascript
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = difference(a, b)
// => [ 1, 2 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20a%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20b%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20difference(a%2C%20b)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%20%5D">Try the above <strong>R.difference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];
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

<summary> Failed <italic>Ramda.difference</italic> specs

> Reason for the failure: ramda supports negative zero
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('difference', () => {
  const M = [ 1, 2, 3, 4 ]
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N = [ 3, 4, 5, 6 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  const Z = [ 3, 4, 5, 6, 10 ]
  const Z2 = [ 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8 ]
  it('has R.equals semantics', () => {
    function Just(x){
      this.value = x
    }
    Just.prototype.equals = function (x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.difference([ 0 ], [ -0 ]).length, 1)
    eq(R.difference([ -0 ], [ 0 ]).length, 1)
    eq(R.difference([ NaN ], [ NaN ]).length, 0)
    eq(R.difference([ new Just([ 42 ]) ], [ new Just([ 42 ]) ]).length, 0)
  })
})

```


</details>


### dissoc


```typescript
dissoc<T>(prop: string, obj: any): T
```

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try the above <strong>R.dissoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dissoc<T>(prop: string, obj: any): T;
dissoc(prop: string): <U>(obj: any) => U;
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


### divide


```typescript
divide(a: number, b: number): number
```


```javascript
R.divide(71, 100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71%2C%20100)%20%2F%2F%20%3D%3E%200.71">Try the above <strong>R.divide</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
divide(a: number, b: number): number;
divide(a: number): (b: number) => number;
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


### drop


```typescript
drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]
```

It returns `listOrString` with `howManyToDrop` items dropped from its beginning.

```javascript
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.drop(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D%0AR.drop(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'obar'">Try the above <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
drop(howManyToDrop: number, listOrString: string): string;
drop<T>(howManyToDrop: number): {
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

describe('drop', () => {
  it('happy', () => {
    const x = drop(2, 'foo') // $ExpectType string
    x // $ExpectType string
    const xx = drop(2)('foo') // $ExpectType string
    xx // $ExpectType string
    const y = drop(2, [1, 2, 3]) // $ExpectType number[]
    y // $ExpectType number[]
    const yy = drop<number>(2)([1, 2, 3]) // $ExpectType number[]
    yy // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 97.91%</summary>

```javascript
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


### dropLast


```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]
```

It returns `listOrString` with `howManyToDrop` items dropped from its end.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try the above <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
dropLast(howManyToDrop: number, listOrString: string): string;
dropLast<T>(howManyToDrop: number): {
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

<summary>Rambda is faster than Ramda with 97.64%</summary>

```javascript
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

<details>

<summary> Failed <italic>Ramda.dropLast</italic> specs

> Reason for the failure: ramda method can act as a transducer
</summary>

```javascript
const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('dropLast', () => {
  it('can act as a transducer', () => {
    const dropLast2 = R.dropLast(2)
    assert.deepEqual(R.into(
      [], dropLast2, [ 1, 3, 5, 7, 9, 1, 2 ]
    ), [
      1,
      3,
      5,
      7,
      9,
    ])
    assert.deepEqual(R.into(
      [], dropLast2, [ 1 ]
    ), [])
  })
})

```


</details>


### either


```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred
```


<details>

<summary>All Typescript definitions</summary>

```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred;
either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;
```

</details>


### endsWith


```typescript
endsWith(a: string, list: string): boolean
```

It returns `true` if `input` string ends with `suffix`.

```javascript
const input = 'foo-bar'
const suffix = '-bar'

const result = R.endsWith(suffix, input)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20'foo-bar'%0Aconst%20suffix%20%3D%20'-bar'%0A%0Aconst%20result%20%3D%20R.endsWith(suffix%2C%20input)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.endsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(a: string, list: string): boolean;
endsWith(a: string): (list: string) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
export function endsWith(suffix, input){
  if (arguments.length === 1) return _list => endsWith(suffix, _input)

  return input.endsWith(suffix)
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
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('list.endsWith is not a function')
})
```

</details>

<details>

<summary> Failed <italic>Ramda.endsWith</italic> specs

> Reason for the failure: rambda doesn't support arrays
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('startsWith', () => {
  it('should return true when an array ends with the provided value', () => {
    eq(R.endsWith([ 'c' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return true when an array ends with the provided values', () => {
    eq(R.endsWith([ 'b', 'c' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return false when an array does not end with the provided value', () => {
    eq(R.endsWith([ 'b' ], [ 'a', 'b', 'c' ]), false)
  })
  it('should return false when an array does not end with the provided values', () => {
    eq(R.endsWith([ 'a', 'b' ], [ 'a', 'b', 'c' ]), false)
  })
})

```


</details>


### equals


```typescript
equals<T>(a: T, b: T): boolean
```

It deeply compares `a` and `b` and returns `true` if they are equal.

```javascript
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try the above <strong>R.equals</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
equals<T>(a: T, b: T): boolean;
equals<T>(a: T): (b: T) => boolean;
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
  if ([ 'Boolean', 'Number', 'String' ].includes(aType))
    return a.toString() === b.toString()

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
import { equals } from './equals'

test('happy', () => {
  const result = equals([ 1, { a : 1 }, [ { b : 3 } ] ], [ 1, { a : 2 }, [ { b : 3 } ] ])

  expect(result).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toEqual(true)
  expect(equals(/s/, /d/)).toEqual(false)
  expect(equals(/a/gi, /a/gi)).toEqual(true)
  expect(equals(/a/gim, /a/gim)).toEqual(true)
  expect(equals(/a/gi, /a/i)).toEqual(false)
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBe(true)
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
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 79.8% slower and Ramda is 82.41% slower</summary>

```javascript
const a = { a : { b : { c : 1 } } }
const b = { a : { b : { c : 1 } } }

const equals = [
  {
    label : 'Rambda',
    fn    : () => {
      R.equals(a, b)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.equals(a, b)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.isEqual(a, b)
    },
  },
]
```

</details>

<details>

<summary> Failed <italic>Ramda.equals</italic> specs

> Reason for the failure: rambda doesn't support recursive data structures, objects with same enumerable properties, map/weakmap type of variables | ramda dispatches to `equals` method recursively
</summary>

```javascript
/* global Map, Set, WeakMap, WeakSet */

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('equals', () => {
  const a = []
  const b = a
  it('never considers Boolean primitive equal to Boolean object', () => {
    eq(R.equals(true, new Boolean(true)), false)
    eq(R.equals(new Boolean(true), true), false)
    eq(R.equals(false, new Boolean(false)), false)
    eq(R.equals(new Boolean(false), false), false)
  })
  it('never considers number primitive equal to Number object', () => {
    eq(R.equals(0, new Number(0)), false)
    eq(R.equals(new Number(0), 0), false)
  })
  it('never considers string primitive equal to String object', () => {
    eq(R.equals('', new String('')), false)
    eq(R.equals(new String(''), ''), false)
    eq(R.equals('x', new String('x')), false)
    eq(R.equals(new String('x'), 'x'), false)
  })
  let supportsSticky = false
  try {
    RegExp('', 'y')
    supportsSticky = true
  } catch (e){}
  let supportsUnicode = false
  try {
    RegExp('', 'u')
    supportsUnicode = true
  } catch (e){}
  const listA = [ 1, 2, 3 ]
  const listB = [ 1, 3, 2 ]
  const c = {}
  c.v = c
  const d = {}
  d.v = d
  const e = []
  e.push(e)
  const f = []
  f.push(f)
  const nestA = {
    a : [ 1, 2, { c : 1 } ],
    b : 1,
  }
  const nestB = {
    a : [ 1, 2, { c : 1 } ],
    b : 1,
  }
  const nestC = {
    a : [ 1, 2, { c : 2 } ],
    b : 1,
  }
  it('handles recursive data structures', () => {
    eq(R.equals(c, d), true)
    eq(R.equals(e, f), true)
    eq(R.equals(nestA, nestB), true)
    eq(R.equals(nestA, nestC), false)
  })
  it('requires that both objects have the same enumerable properties with the same values', () => {
    const a1 = []
    const a2 = []
    a2.x = 0
    const b1 = new Boolean(false)
    const b2 = new Boolean(false)
    b2.x = 0
    const d1 = new Date(0)
    const d2 = new Date(0)
    d2.x = 0
    const n1 = new Number(0)
    const n2 = new Number(0)
    n2.x = 0
    const r1 = /(?:)/
    const r2 = /(?:)/
    r2.x = 0
    const s1 = new String('')
    const s2 = new String('')
    s2.x = 0
    eq(R.equals(a1, a2), false)
    eq(R.equals(b1, b2), false)
    eq(R.equals(d1, d2), false)
    eq(R.equals(n1, n2), false)
    eq(R.equals(r1, r2), false)
    eq(R.equals(s1, s2), false)
  })
  if (
    typeof ArrayBuffer !== 'undefined' &&
    typeof Int8Array !== 'undefined'
  ){
    const typArr1 = new ArrayBuffer(10)
    typArr1[ 0 ] = 1
    const typArr2 = new ArrayBuffer(10)
    typArr2[ 0 ] = 1
    const typArr3 = new ArrayBuffer(10)
    const intTypArr = new Int8Array(typArr1)
    typArr3[ 0 ] = 0
    it('handles typed arrays', () => {
      eq(R.equals(typArr1, typArr2), true)
      eq(R.equals(typArr1, typArr3), false)
      eq(R.equals(typArr1, intTypArr), false)
    })
  }
  if (typeof Promise !== 'undefined'){
    it('compares Promise objects by identity', () => {
      const p = Promise.resolve(42)
      const q = Promise.resolve(42)
      eq(R.equals(p, p), true)
      eq(R.equals(p, q), false)
    })
  }
  if (typeof Map !== 'undefined'){
    it('compares Map objects by value', () => {
      eq(R.equals(new Map([]), new Map([])), true)
      eq(R.equals(new Map([]), new Map([ [ 1, 'a' ] ])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 1, 'a' ] ])), true)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, 'b' ],
      ]),
      new Map([
        [ 2, 'b' ],
        [ 1, 'a' ],
      ])),
      true)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 2, 'a' ] ])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 1, 'b' ] ])), false)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ]),
      new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ])),
      true)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ]),
      new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'd' ] ]) ],
      ])),
      false)
      eq(R.equals(new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ]),
      new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ])),
      true)
      eq(R.equals(new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ]),
      new Map([
        [
          [ 1, 2, 3 ],
          [ 7, 8, 9 ],
        ],
      ])),
      false)
    })
    it('dispatches to `equals` method recursively in Set', () => {
      const a = new Map()
      const b = new Map()
      a.set(a, a)
      eq(R.equals(a, b), false)
      a.set(b, b)
      b.set(b, b)
      b.set(a, a)
      eq(R.equals(a, b), true)
    })
  }
  if (typeof Set !== 'undefined'){
    it('compares Set objects by value', () => {
      eq(R.equals(new Set([]), new Set([])), true)
      eq(R.equals(new Set([]), new Set([ 1 ])), false)
      eq(R.equals(new Set([ 1 ]), new Set([])), false)
      eq(R.equals(new Set([ 1, 2 ]), new Set([ 2, 1 ])), true)
      eq(R.equals(new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ]),
        new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ])),
      true)
      eq(R.equals(new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ]),
        new Set([ 1, new Set([ 2, new Set([ 4 ]) ]) ])),
      false)
      eq(R.equals(new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ]),
      new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ])),
      true)
      eq(R.equals(new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ]),
      new Set([
        [ 1, 2, 3 ],
        [ 7, 8, 9 ],
      ])),
      false)
    })
    it('dispatches to `equals` method recursively in Set', () => {
      const a = new Set()
      const b = new Set()
      a.add(a)
      eq(R.equals(a, b), false)
      a.add(b)
      b.add(b)
      b.add(a)
      eq(R.equals(a, b), true)
    })
  }
  if (typeof WeakMap !== 'undefined'){
    it('compares WeakMap objects by identity', () => {
      const m = new WeakMap([])
      eq(R.equals(m, m), true)
      eq(R.equals(m, new WeakMap([])), false)
    })
  }
  if (typeof WeakSet !== 'undefined'){
    it('compares WeakSet objects by identity', () => {
      const s = new WeakSet([])
      eq(R.equals(s, s), true)
      eq(R.equals(s, new WeakSet([])), false)
    })
  }
  it('dispatches to `equals` method recursively', () => {
    function Left(x){
      this.value = x
    }
    Left.prototype.equals = function (x){
      return x instanceof Left && R.equals(x.value, this.value)
    }
    function Right(x){
      this.value = x
    }
    Right.prototype.equals = function (x){
      return x instanceof Right && R.equals(x.value, this.value)
    }
    eq(R.equals(new Left([ 42 ]), new Left([ 42 ])), true)
    eq(R.equals(new Left([ 42 ]), new Left([ 43 ])), false)
    eq(R.equals(new Left(42), { value : 42 }), false)
    eq(R.equals({ value : 42 }, new Left(42)), false)
    eq(R.equals(new Left(42), new Right(42)), false)
    eq(R.equals(new Right(42), new Left(42)), false)
    eq(R.equals([ new Left(42) ], [ new Left(42) ]), true)
    eq(R.equals([ new Left(42) ], [ new Right(42) ]), false)
    eq(R.equals([ new Right(42) ], [ new Left(42) ]), false)
    eq(R.equals([ new Right(42) ], [ new Right(42) ]), true)
  })
})

```


</details>


### F


```typescript
F(): boolean
```


```javascript
F() // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20F()%20%2F%2F%20%3D%3E%20false">Try the above <strong>R.F</strong> example in Rambda REPL</a>

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


### filter


```typescript
filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]
```

It filters list or object `input` with `predicate`.

```javascript
const list = [3, 4, 3, 2]
const listPredicate = (x, index) => x - index > 2

const object = {abc: 'fo', xyz: 'bar', baz: 'foo'}
const objectPredicate = (x, prop) => x.length + prop.length > 5

const result = [
  R.filter(listPredicate, list),
  R.filter(objectPredicate, object)
]
// => [ [3, 4], { xyz: 'bar', baz: 'foo'} ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B3%2C%204%2C%203%2C%202%5D%0Aconst%20listPredicate%20%3D%20(x%2C%20index)%20%3D%3E%20x%20-%20index%20%3E%202%0A%0Aconst%20object%20%3D%20%7Babc%3A%20'fo'%2C%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%0Aconst%20objectPredicate%20%3D%20(x%2C%20prop)%20%3D%3E%20x.length%20%2B%20prop.length%20%3E%205%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.filter(listPredicate%2C%20list)%2C%0A%20%20R.filter(objectPredicate%2C%20object)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B3%2C%204%5D%2C%20%7B%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%20%5D">Try the above <strong>R.filter</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
filter<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
function filterObject(fn, obj){
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

export function filter(predicate, list){
  if (arguments.length === 1) return _list => filter(predicate, _list)

  if (!list) return []

  if (!Array.isArray(list)){
    return filterObject(predicate, list)
  }

  let index = -1
  let resIndex = 0
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]

    if (predicate(value, index)){
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import Ramda from 'ramda'

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

test('bad inputs', () => {
  expect(filter(T)(undefined)).toEqual([])
  expect(filter(T, null)).toEqual([])
  expect(() => Ramda.filter(T, null)).toThrow()
  expect(() => Ramda.filter(T, undefined)).toThrow()
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

test('pass index as second argument', () => {
  let counter = 0
  filter((x, i) => {
    expect(i).toBe(counter)
    counter++
  },
  [ 10, 20, 30 ])
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

describe('filter with array', () => {
  it('1 curry', () => {
    const x = filter<number>(a => {
      a // $ExpectType number
      return a > 1
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('1', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('2', () => {
    const x = filter<number>(
      (a, b) => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
})

describe('filter with objects', () => {
  it('curry', () => {
    const x = filter<number, number>((a, b, c) => {
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<number>
  })

  it('object with three arguments predicate', () => {
    const x = filter<number>(
      (a, b, c) => {
        b // $ExpectType string
        c // $ExpectType Dictionary<number>

        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })

  it('object with two arguments predicate', () => {
    const x = filter<number>(
      (a, b) => {
        b // $ExpectType string
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
  it('object with one argument predicate', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 85.25% slower and Ramda is 93.45% slower</summary>

```javascript
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

<details>

<summary> Failed <italic>Ramda.filter</italic> specs

> Reason for the failure: ramda dispatches to `filter` method of object
</summary>

```javascript
const eq = require('./shared/eq')
const Maybe = require('./shared/Maybe')
const R = require('../../../../dist/rambda.js')

describe('filter', () => {
  const even = function (x){
    return x % 2 === 0
  }
  it('dispatches to passed-in non-Array object with a `filter` method', () => {
    const f = {
      filter : function (f){
        return f('called f.filter')
      },
    }
    eq(R.filter(s => s, f),
      'called f.filter')
  })
  it('correctly uses fantasy-land implementations', () => {
    const m1 = Maybe.Just(-1)
    const m2 = R.filter(x => x > 0, m1)
    eq(m2.isNothing, true)
  })
})

```


</details>


### find


```typescript
find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try the above <strong>R.find</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
find<T>(predicate: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;
```

</details>

<details>

<summary><strong>R.find</strong> source</summary>

```javascript
export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)

  return list.find(predicate)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { find } from './find'
import { propEq } from './propEq'

test('happy', () => {
  expect(find(propEq('a', 2), [ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual({ a : 2 })
})

test('with curry', () => {
  expect(find(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(undefined)
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 92.33% slower and Lodash is 39.13% slower</summary>

```javascript
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


### findIndex


```typescript
findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try the above <strong>R.findIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;
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
    if (predicate(list[ index ], index)){
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

test('happy', () => {
  expect(findIndex(propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(1)

  expect(findIndex(propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(0)

  expect(findIndex(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(-1)
})

test('pass index as second argument', () => {
  findIndex((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 10, 12, 15 ])
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 98.67% slower and Lodash is 82.94% slower</summary>

```javascript
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


### flatten


```typescript
flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[]
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%0A%20%201%2C%20%0A%20%202%2C%20%0A%20%20%5B3%2C%2030%2C%20%5B300%5D%5D%2C%20%0A%20%20%5B4%5D%0A%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%2C%2030%2C%20300%2C%204%20%5D">Try the above <strong>R.flatten</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
export function flatten(list, input){
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++){
    if (Array.isArray(list[ i ])){
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

<summary>Lodash is fastest. Rambda is 96.51% slower and Ramda is 95.67% slower</summary>

```javascript
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


### flip


```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult
```

It returns function which calls `fn` with exchanged first and second argument.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.flip(1,6)
]  
// => [6, -6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20subtractFlip(1%2C7)%2C%0A%20%20R.flip(1%2C6)%0A%5D%20%20%0A%2F%2F%20%3D%3E%20%5B6%2C%20-6%5D">Try the above <strong>R.flip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
```

</details>

<details>

<summary><strong>R.flip</strong> source</summary>

```javascript
function flipExport(fn){
  return (...input) => {
    if (input.length === 1){
      return holder => fn(holder, input[ 0 ])
    } else if (input.length === 2){
      return fn(input[ 1 ], input[ 0 ])
    }

    return undefined
  }
}

export function flip(fn){
  return flipExport(fn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flip } from './flip'
import { subtract } from './subtract'

test('flip', () => {
  const fn = flip(subtract)

  expect(fn(1)(7)).toEqual(6)
  expect(fn(1, 7)).toEqual(6)
  expect(fn(
    1, 7, 9
  )).toEqual(undefined)
})
```

</details>

<details>

<summary> Failed <italic>Ramda.flip</italic> specs

> Reason for the failure: rambda flip work only for functions with two arguments
</summary>

```javascript
const jsv = require('jsverify')

const eq = require('./shared/eq')
const funcN = require('./shared/funcN')
const R = require('../../../../dist/rambda.js')
describe('flip', () => {
  it('returns a function which inverts the first two arguments to the supplied function', () => {
    const f = function (
      a, b, c
    ){
      return a + ' ' + b + ' ' + c
    }
    const g = R.flip(f)
    eq(f(
      'a', 'b', 'c'
    ), 'a b c')
    eq(g(
      'a', 'b', 'c'
    ), 'b a c')
  })
  it('returns a curried function', () => {
    const f = function (
      a, b, c
    ){
      return a + ' ' + b + ' ' + c
    }
    const g = R.flip(f)('a')
    eq(g('b', 'c'), 'b a c')
  })
  it('returns a function with the correct arity', () => {
    const f2 = function (a, b){
      return a + ' ' + b
    }
    const f3 = function (
      a, b, c
    ){
      return a + ' ' + b + ' ' + c
    }
    eq(R.flip(f2).length, 2)
    eq(R.flip(f3).length, 3)
  })
})
describe('flip properties', () => {
  jsv.property(
    'inverts first two arguments',
    funcN(3),
    jsv.json,
    jsv.json,
    jsv.json,
    (
      f, a, b, c
    ) => {
      const g = R.flip(f)

      return R.equals(f(
        a, b, c
      ), g(
        b, a, c
      ))
    }
  )
})

```


</details>


### forEach


```typescript
forEach<T>(fn: (x: T) => void, list: T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect //=> {foo1: 1, foo2: 2}
result //=> [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0AsideEffect%20%2F%2F%3D%3E%20%7Bfoo1%3A%201%2C%20foo2%3A%202%7D%0Aresult%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.forEach</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
forEach<T>(fn: (x: T) => void, list: T[]): T[];
forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;
```

</details>

<details>

<summary><strong>R.forEach</strong> source</summary>

```javascript
import { map } from './map'

export function forEach(predicate, list){
  if (arguments.length === 1) return _list => forEach(predicate, _list)

  map(predicate, list)

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

test('happy 2', () => {
  const list = [
    {
      x : 1,
      y : 2,
    },
    {
      x : 100,
      y : 200,
    },
    {
      x : 300,
      y : 400,
    },
    {
      x : 234,
      y : 345,
    },
  ]
  const sideEffect = {}
  const result = forEach(elem => {
    sideEffect[ elem.x ] = elem.y
  }, list)
  const expectedSideEffect = {
    1   : 2,
    100 : 200,
    300 : 400,
    234 : 345,
  }

  expect(sideEffect).toEqual(expectedSideEffect)
  expect(result).toEqual(list)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('returns the input', () => {
  const list = [ 1, 2, 3 ]
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('pass index as second argument', () => {
  const list = [ 11, 21, 31 ]
  const indexes = []
  const result = forEach((x, i) => indexes.push(i))(list)

  expect(indexes).toEqual([ 0, 1, 2 ])
})
```

</details>

<details>

<summary> Failed <italic>Ramda.forEach</italic> specs

> Reason for the failure: ramda method dispatches to `forEach` method
</summary>

```javascript
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('forEach', () => {
  const list = [
    {
      x : 1,
      y : 2,
    },
    {
      x : 100,
      y : 200,
    },
    {
      x : 300,
      y : 400,
    },
    {
      x : 234,
      y : 345,
    },
  ]
  it('dispatches to `forEach` method', () => {
    let dispatched = false
    const fn = function (){}
    function DummyList(){}
    DummyList.prototype.forEach = function (callback){
      dispatched = true
      eq(callback, fn)
    }
    R.forEach(fn, new DummyList())
    eq(dispatched, true)
  })
})

```


</details>


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
// expected === result
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listOfPairs%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(listOfPairs)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try the above <strong>R.fromPairs</strong> example in Rambda REPL</a>

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


### groupBy


```typescript
groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }
```

It splits `list` according to a provided `groupFn` function and returns an object.

```javascript
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'b'%2C%20'aa'%2C%20'bb'%20%5D%0Aconst%20groupFn%20%3D%20x%20%3D%3E%20x.length%0A%0Aconst%20result%20%3D%20R.groupBy(groupFn%2C%20list)%0A%2F%2F%20%3D%3E%20%7B%20'1'%3A%20%5B'a'%2C%20'b'%5D%2C%20'2'%3A%20%5B'aa'%2C%20'bb'%5D%20%7D">Try the above <strong>R.groupBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
groupBy<T>(groupFn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };
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

<summary> Failed <italic>Ramda.groupBy</italic> specs

> Reason for the failure: ramda support transforms
</summary>

```javascript
const _isTransformer = require('rambda/internal/_isTransformer')
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('groupBy', () => {
  it('dispatches on transformer objects in list position', () => {
    const byType = R.prop('type')
    const xf = {
      '@@transducer/init' : function (){
        return {}
      },
      '@@transducer/result' : function (x){
        return x
      },
      '@@transducer/step' : R.mergeRight,
    }
    eq(_isTransformer(R.groupBy(byType, xf)), true)
  })
})

```


</details>


### groupWith


```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]
```

It returns splitted version of `list`, where separation is done with equality `compareFn` function.

```javascript
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try the above <strong>R.groupWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];
```

</details>

<details>

<summary><strong>R.groupWith</strong> source</summary>

```javascript
export function groupWith(compareFn, list){
  if (!Array.isArray(list))
    throw new TypeError('list.reduce is not a function')

  const clone = list.slice()
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
```

</details>


### has


```typescript
has<T>(prop: string, obj: T): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
```

</details>


### head


```typescript
head<T>(listOrString: T[]): T | undefined
```


<details>

<summary>All Typescript definitions</summary>

```typescript
head<T>(listOrString: T[]): T | undefined;
head(listOrString: string): string;
```

</details>


### identical


```typescript
identical<T>(a: T, b: T): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
identical<T>(a: T, b: T): boolean;
identical<T>(a: T): (b: T) => boolean;
```

</details>


### identity


```typescript
identity<T>(x: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
identity<T>(x: T): T;
```

</details>


### ifElse


```typescript
ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn
```


<details>

<summary>All Typescript definitions</summary>

```typescript
ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;
```

</details>


### inc


```typescript
inc(n: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
inc(n: number): number;
```

</details>


### includes


```typescript
includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;
```

</details>


### indexBy


```typescript
indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T }
```


<details>

<summary>All Typescript definitions</summary>

```typescript
indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: string, arr: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: (a: T) => string): (arr: ReadonlyArray<T>) => { [key: string]: T };
indexBy<T>(condition: string): (arr: ReadonlyArray<T>) => { [key: string]: T };
```

</details>


### indexOf


```typescript
indexOf<T>(target: T, arr: ReadonlyArray<T>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
indexOf<T>(target: T, arr: ReadonlyArray<T>): number;
indexOf<T>(target: T): (arr: ReadonlyArray<T>) => number;
```

</details>


### init


```typescript
init<T>(listOrString: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
init<T>(listOrString: ReadonlyArray<T>): T[];
init(listOrString: string): string;
```

</details>


### intersection


```typescript
intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
```

</details>


### intersperse


```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];
```

</details>


### is


```typescript
is(xPrototype: any, x: any): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
is(xPrototype: any, x: any): boolean;
is(xPrototype: any): (x: any) => boolean;
```

</details>


### isEmpty


```typescript
isEmpty<T>(input: T): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(input: T): boolean;
```

</details>


### isNil


```typescript
isNil(x: any): x is null | undefined
```


<details>

<summary>All Typescript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
```

</details>


### join


```typescript
join(x: string, xs: ReadonlyArray<any>): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
join(x: string, xs: ReadonlyArray<any>): string;
join(x: string): (xs: ReadonlyArray<any>) => string;
```

</details>


### keys


```typescript
keys<T extends object>(x: T): (keyof T)[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
keys<T>(x: T): string[];
```

</details>


### last


```typescript
last<T>(listOrString: T[]): T | undefined
```


<details>

<summary>All Typescript definitions</summary>

```typescript
last<T>(listOrString: T[]): T | undefined;
last(listOrString: string): string;
```

</details>


### lastIndexOf


```typescript
lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number;
```

</details>


### length


```typescript
length<T>(list: ReadonlyArray<T>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(list: ReadonlyArray<T>): number;
```

</details>


### lens


```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens
```


<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
```

</details>


### lensIndex


```typescript
lensIndex(n: number): Lens
```


<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(n: number): Lens;
lensPath(path: RamdaPath): Lens;
```

</details>


### lensProp


```typescript
lensProp(str: string): {
  <T, U>(obj: T): U
```


<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(str: string): {
```

</details>


### map


```typescript
map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>
```


<details>

<summary>All Typescript definitions</summary>

```typescript
map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>;
map<T, U>(mapFn: MapFunctionArray<T, U>, x: T[]): U[];
map<T, U>(mapFn: MapFunctionArray<T, U>): (x: T[]) => U[];
map<T, U, S>(mapFn: MapFunctionObject<T, U>): (x: Dictionary<T>) => Dictionary<U>;
map<T>(mapFn: MapFunctionArray<T, T>): (x: T[]) => T[];
map<T>(mapFn: MapFunctionArray<T, T>, x: ReadonlyArray<T>): T[];
```

</details>


### match


```typescript
match(regexp: RegExp, str: string): any[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
match(regexp: RegExp, str: string): any[];
match(regexp: RegExp): (str: string) => any[];
```

</details>


### max


```typescript
max<T extends Ord>(a: T, b: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
max<T extends Ord>(a: T, b: T): T;
max<T extends Ord>(a: T): (b: T) => T;
```

</details>


### maxBy


```typescript
maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
maxBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;
```

</details>


### mean


```typescript
mean(list: ReadonlyArray<number>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: ReadonlyArray<number>): number;
```

</details>


### median


```typescript
median(list: ReadonlyArray<number>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: ReadonlyArray<number>): number;
```

</details>


### merge


```typescript
merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>
```


<details>

<summary>All Typescript definitions</summary>

```typescript
merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;
```

</details>


### min


```typescript
min<T extends Ord>(a: T, b: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
min<T extends Ord>(a: T, b: T): T;
min<T extends Ord>(a: T): (b: T) => T;
```

</details>


### minBy


```typescript
minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
minBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;
```

</details>


### modulo


```typescript
modulo(a: number, b: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
modulo(a: number, b: number): number;
modulo(a: number): (b: number) => number;
```

</details>


### multiply


```typescript
multiply(a: number, b: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
multiply(a: number, b: number): number;
multiply(a: number): (b: number) => number;
```

</details>


### negate


```typescript
negate(a: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
negate(a: number): number;
```

</details>


### none


```typescript
none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>


### not


```typescript
not(x: any): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
not(x: any): boolean;
```

</details>


### nth


```typescript
nth<T>(n: number, list: ReadonlyArray<T>): T | undefined
```


<details>

<summary>All Typescript definitions</summary>

```typescript
nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;
```

</details>


### omit


```typescript
omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>
```


<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;
```

</details>


### over


```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```


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


### partial


```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;
partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;
```

</details>


### path


```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined
```


<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
path<T>(pathToSearch: string | string[], obj: any): T | undefined;
path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
```

</details>


### pathOr


```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): FToolbelt.Curry<(a: Path, b: any) => T>;
```

</details>


### paths


```typescript
paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[];
paths<T>(pathsToSearch: (string | string[])[], obj: any): (T | undefined)[];
paths<T>(pathsToSearch: (string | string[])[]): (obj: any) => (T | undefined)[];
paths<Input, T>(pathsToSearch: (string | string[])[]): (obj: Input) => (T | undefined)[];
```

</details>


### pick


```typescript
pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>
```


<details>

<summary>All Typescript definitions</summary>

```typescript
pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;
```

</details>


### pickAll


```typescript
pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U
```


<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;
```

</details>


### pipe


```typescript
pipe<T1>(fn0: () => T1): () => T1
```


<details>

<summary>All Typescript definitions</summary>

```typescript
pipe<T1>(fn0: () => T1): () => T1;
pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
```

</details>


### pluck


```typescript
pluck<T>(property: number, arr: ReadonlyArray<T>): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<T>(property: number, arr: ReadonlyArray<T>): T;
pluck<K extends keyof T, T>(property: K, arr: ReadonlyArray<T>): T[K][];
pluck(property: number): <T>(arr: ReadonlyArray<T>) => T;
pluck<P extends string>(property: P): <T>(arr: ReadonlyArray<Record<P, T>>) => T[];
```

</details>


### prepend


```typescript
prepend<T>(x: T, arr: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, arr: ReadonlyArray<T>): T[];
prepend<T>(x: T): (arr: ReadonlyArray<T>) => T[];
```

</details>


### product


```typescript
product(list: ReadonlyArray<number>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: ReadonlyArray<number>): number;
```

</details>


### prop


```typescript
prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;
```

</details>


### propEq


```typescript
propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
propEq(propToFind: string | number): {
```

</details>


### propIs


```typescript
propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;
```

</details>


### propOr


```typescript
propOr<T, U, V>(val: T, p: string, obj: U): V
```


<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T, U, V>(val: T, p: string, obj: U): V;
propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
propOr<T>(val: T): <U, V>(p: string, obj: U) => V;
```

</details>


### range


```typescript
range(start: number, end: number): number[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
range(start: number, end: number): number[];
range(start: number): (end: number) => number[];
```

</details>


### reduce


```typescript
reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult
```


<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;
```

</details>


### reject


```typescript
reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
reject<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
reject<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
reject<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>


### repeat


```typescript
repeat<T>(a: T, n: number): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
repeat<T>(a: T, n: number): T[];
repeat<T>(a: T): (n: number) => T[];
```

</details>


### replace


```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
```

</details>


### reverse


```typescript
reverse<T>(list: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(list: ReadonlyArray<T>): T[];
reverse(str: string): string;
```

</details>


### set


```typescript
set<T, U>(lens: Lens, a: U, obj: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, a: U, obj: T): T;
set<U>(lens: Lens, a: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(a: U, obj: T) => T;
```

</details>


### slice


```typescript
slice(a: number, b: number, list: string): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
slice(a: number, b: number, list: string): string;
slice<T>(a: number, b: number, list: T[]): T[];
slice(a: number, b: number): {
```

</details>


### sort


```typescript
sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[];
sort<T>(sortFn: (a: T, b: T) => number): (arr: ReadonlyArray<T>) => T[];
```

</details>


### sortBy


```typescript
sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[];
sortBy(sortFn: (a: any) => Ord): <T>(arr: ReadonlyArray<T>) => T[];
```

</details>


### split


```typescript
split(sep: string | RegExp): (str: string) => string[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
split(sep: string | RegExp): (str: string) => string[];
split(sep: string | RegExp, str: string): string[];
```

</details>


### splitEvery


```typescript
splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
splitEvery(a: number, list: string): string[];
splitEvery(a: number): {
```

</details>


### startsWith


```typescript
startsWith(a: string, list: string): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(a: string, list: string): boolean;
startsWith(a: string): (list: string) => boolean;
startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;
```

</details>


### subtract


```typescript
subtract(a: number, b: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
subtract(a: number, b: number): number;
subtract(a: number): (b: number) => number;
```

</details>


### sum


```typescript
sum(list: ReadonlyArray<number>): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: ReadonlyArray<number>): number;
```

</details>


### symmetricDifference


```typescript
symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];
```

</details>


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


### tail


```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[];
tail(listOrString: string): string;
```

</details>


### take


```typescript
take<T>(num: number, listOrString: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(num: number, listOrString: ReadonlyArray<T>): T[];
take(num: number, listOrString: string): string;
take<T>(num: number): {
```

</details>


### takeLast


```typescript
takeLast<T>(num: number, listOrString: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(num: number, listOrString: ReadonlyArray<T>): T[];
takeLast(num: number, listOrString: string): string;
takeLast(num: number): {
```

</details>


### tap


```typescript
tap<T>(fn: (a: T) => any, value: T): T
```


<details>

<summary>All Typescript definitions</summary>

```typescript
tap<T>(fn: (a: T) => any, value: T): T;
tap<T>(fn: (a: T) => any): (value: T) => T;
```

</details>


### test


```typescript
test(regExpression: RegExp): (str: string) => boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>


### times


```typescript
times<T>(fn: (i: number) => T, n: number): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, n: number): T[];
times<T>(fn: (i: number) => T): (n: number) => T[];
```

</details>


### toLower


```typescript
toLower(str: string): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
toLower(str: string): string;
```

</details>


### toPairs


```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];
```

</details>


### toString


```typescript
toString<T>(val: T): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
toString<T>(val: T): string;
```

</details>


### toUpper


```typescript
toUpper(str: string): string
```


<details>

<summary>All Typescript definitions</summary>

```typescript
toUpper(str: string): string;
```

</details>


### transpose


```typescript
transpose<T>(list: T[][]): T[][]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: T[][]): T[][];
```

</details>


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


### type


```typescript
type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"
```


<details>

<summary>All Typescript definitions</summary>

```typescript
type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";
```

</details>


### uniq


```typescript
uniq<T>(arr: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(arr: ReadonlyArray<T>): T[];
```

</details>


### uniqWith


```typescript
uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[];
uniqWith<T, U>(fn: (x: T, y: T) => boolean): (arr: ReadonlyArray<T>) => T[];
```

</details>


### update


```typescript
update<T>(index: number, value: T, list: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];
```

</details>


### values


```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>


### view


```typescript
view<T, U>(lens: Lens): (obj: T) => U
```


<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (obj: T) => U;
view<T, U>(lens: Lens, obj: T): U;
```

</details>


### without


```typescript
without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
```

</details>


### xor


```typescript
xor(a: boolean, b: boolean): boolean
```


<details>

<summary>All Typescript definitions</summary>

```typescript
xor(a: boolean, b: boolean): boolean;
xor(a: boolean): (b: boolean) => boolean;
```

</details>


### zip


```typescript
zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[];
zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => KeyValuePair<K, V>[];
```

</details>


### zipObj


```typescript
zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T }
```


<details>

<summary>All Typescript definitions</summary>

```typescript
zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
```

</details>



## CHANGELOG

- 5.1.1

Release new documentation site

Deprecate docsify

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
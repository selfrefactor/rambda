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


```typescript
add(a: number, b: number): number
```

It adds `a` and `b`.

```javascript
R.add(2, 3) // =>  5
```

<details>

<summary>All Typescript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[];
adjust<T>(index: number, replaceFn: (a: T) => T): (list: ReadonlyArray<T>) => T[];
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

<summary> Failed <italic>Ramda.adjust</italic> specs

> Reason for the failure: ramda accepts an array-like object
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


### all


```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(predicate, arr)
// => true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
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

<summary> Failed <italic>Ramda.allPass</italic> specs

> Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
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


### always


```typescript
always<T>(x: T): () => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<details>

<summary>All Typescript definitions</summary>

```typescript
always<T>(x: T): () => T;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;
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

<summary> Failed <italic>Ramda.anyPass</italic> specs

> Reason for the failure: ramda returns a curried function whose arity matches that of the highest-arity predicate
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


### append


```typescript
append<T>(x: T, listOrString: ReadonlyArray<T>): T[]
```

It adds element `x` at the end of `listOrString`.

```javascript
const x = 'foo'

const result = [
  R.append(x, 'cherry_'),
  R.append(x, ['bar', 'baz'])
]
// => ['cherry_foo', ['bar', 'baz', 'foo']]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, listOrString: ReadonlyArray<T>): T[];
append<T>(x: T): <T>(listOrString: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { append } from './append'
import { compose } from './compose.js'
import { flatten } from './flatten.js'
import { map } from './map'

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


### applySpec


```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
    ...args: Parameters<ValueOfRecord<Spec>>
  ) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

It returns a curried function with the same arity as the longest function in the spec object.
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

<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
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


### assoc


```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<T, U>(path: Path, newValue: T, obj: U): U;
assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
assocPath<T, U>(path: Path): FToolbelt.Curry<(a: T, b: U) => U>;
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

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

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

<details>

<summary>All Typescript definitions</summary>

```typescript
clamp(min: number, max: number, input: number): number;
clamp(min: number, max: number): (input: number) => number;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;
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

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add'
import { compose } from './compose'
import { filter } from './filter.js'
import { last } from './last'
import { map } from './map'

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

<details>

<summary>All Typescript definitions</summary>

```typescript
cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always.js'
import { cond } from './cond'
import { equals } from './equals.js'
import { T } from './T.js'

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

<details>

<summary>All Typescript definitions</summary>

```typescript
curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];
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
var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('difference', function() {
  var M = [1, 2, 3, 4];
  var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
  var Z = [3, 4, 5, 6, 10];
  var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.difference([0], [-0]).length, 1);
    eq(R.difference([-0], [0]).length, 1);
    eq(R.difference([NaN], [NaN]).length, 0);
    eq(R.difference([new Just([42])], [new Just([42])]).length, 0);
  });
});
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

<details>

<summary>All Typescript definitions</summary>

```typescript
dissoc<T>(prop: string, obj: any): T;
dissoc(prop: string): <U>(obj: any) => U;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
divide(a: number, b: number): number;
divide(a: number): (b: number) => number;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
drop(howManyToDrop: number, listOrString: string): string;
drop<T>(howManyToDrop: number): {
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


### dropLast


```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[]
```

It returns `listOrString` with `howManyToDrop` items dropped from its end.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
dropLast(howManyToDrop: number, listOrString: string): string;
dropLast<T>(howManyToDrop: number): {
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

<summary> Failed <italic>Ramda.dropLast</italic> specs

> Reason for the failure: ramda method can act as a transducer
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
endsWith(target: string, str: string): boolean
```

Curried version of `String.prototype.endsWith`

```javascript
const str = 'foo-bar'
const target = '-bar'

const result = R.endsWith(target, str)
// => true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, str: string): boolean;
endsWith(target: string): (str: string) => boolean;
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
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('input.endsWith is not a function')
})
```

</details>

<details>

<summary> Failed <italic>Ramda.endsWith</italic> specs

> Reason for the failure: rambda doesn't support arrays
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

<details>

<summary>All Typescript definitions</summary>

```typescript
equals<T>(a: T, b: T): boolean;
equals<T>(a: T): (b: T) => boolean;
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

<summary> Failed <italic>Ramda.equals</italic> specs

> Reason for the failure: rambda doesn't support recursive data structures, objects with same enumerable properties, map/weakmap type of variables | ramda dispatches to `equals` method recursively
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


### F


```typescript
F(): boolean
```


```javascript
F() // => false
```

<details>

<summary>All Typescript definitions</summary>

```typescript
F(): boolean;
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

<summary> Failed <italic>Ramda.filter</italic> specs

> Reason for the failure: ramda dispatches to `filter` method of object
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

<details>

<summary>All Typescript definitions</summary>

```typescript
find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
find<T>(predicate: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];
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

<details>

<summary>All Typescript definitions</summary>

```typescript
flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };
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

<details>

<summary>All Typescript definitions</summary>

```typescript
groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
groupBy<T>(groupFn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };
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


### groupWith


```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]
```

It returns separated version of `list`, where separation is done with equality `compareFn` function.

```javascript
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];
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

It returns `true` if `obj` has property `prop`.

```javascript
const obj = {a: 1}

const result = [
  R.has('a', obj),
  R.has('b', obj)
]
// => [true, false]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
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

<summary> Failed <italic>Ramda.has</italic> specs

> Reason for the failure: rambda does check properties from the prototype chain
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

It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.

```javascript
const obj = {a: 1};
R.identical(obj, obj); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
identical<T>(a: T, b: T): boolean;
identical<T>(a: T): (b: T) => boolean;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { F, T } from '../rambda.js'
import { _isInteger } from './_internals/_isInteger'
import { _objectIs } from './_internals/_objectIs'
import { identical } from './identical'

test('with boolean', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('internal objectIs', () => {
  expect(_objectIs(1, 1)).toBe(true)
  expect(_objectIs(NaN, NaN)).toBe(true)
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


### identity


```typescript
identity<T>(input: T): T
```

It just passes back the supplied `input` argument.

```javascript
R.identity(7) // => 7
```

<details>

<summary>All Typescript definitions</summary>

```typescript
identity<T>(input: T): T;
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


### ifElse


```typescript
ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn
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

<details>

<summary>All Typescript definitions</summary>

```typescript
ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
ifElse(condition: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { always } from './always.js'
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
```

</details>

<details>

<summary> Failed <italic>Ramda.ifElse</italic> specs

> Reason for the failure: rambda doesn't return a curried function
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


### inc


```typescript
inc(x: number): number
```

It increments a number.

```javascript
R.inc(1) // => 2
```

<details>

<summary>All Typescript definitions</summary>

```typescript
inc(x: number): number;
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
indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T }
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

<details>

<summary>All Typescript definitions</summary>

```typescript
indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: (x: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
indexBy<T>(condition: string): (list: ReadonlyArray<T>) => { [key: string]: T };
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

<summary> Failed <italic>Ramda.indexBy</italic> specs

> Reason for the failure: ramda method can act as a transducer
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


### indexOf


```typescript
indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number
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

<details>

<summary>All Typescript definitions</summary>

```typescript
indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number;
indexOf<T>(valueToFind: T): (list: ReadonlyArray<T>) => number;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexOf } from './indexOf'

test('indexOf', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})
```

</details>

<details>

<summary> Failed <italic>Ramda.indexOf</italic> specs

> Reason for the failure: ramda method dispatches to `indexOf` method
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


### init


```typescript
init<T>(listOrString: ReadonlyArray<T>): T[]
```

It returns all but the last element of `listOrString`.

```javascript
const result = [
  R.init([1, 2, 3]) , 
  R.init('foo')  // => 'fo'
]
// => [[1, 2], 'fo']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
init<T>(listOrString: ReadonlyArray<T>): T[];
init(listOrString: string): string;
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


### intersection


```typescript
intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[]
```

It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[];
intersection<T>(listA: ReadonlyArray<T>): (listB: ReadonlyArray<T>) => T[];
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


### intersperse


```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]
```

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = '|'
const result = intersperse(separator, list)
// => [0, '|', 1, '|', 2, '|', 3]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];
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


### is


```typescript
is(targetPrototype: any, x: any): boolean
```

It returns `true` is `x` is instance of `targetPrototype`.

```javascript
const result = [
  R.is(String, 'foo'),  
  R.is(Array, 1)
]
// => [true, false]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
is(targetPrototype: any, x: any): boolean;
is(targetPrototype: any): (x: any) => boolean;
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


### isEmpty


```typescript
isEmpty<T>(x: T): boolean
```

It returns `true` is `x` is `empty`.

```javascript
const result = [
  R.isEmpty(''),
  R.isEmpty({ x : 0 })
]
// => [true, false]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
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

<summary> Failed <italic>Ramda.isEmpty</italic> specs

> Reason for the failure: ramda supports typed arrays
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


### isNil


```typescript
isNil(x: any): x is null | undefined
```

It returns `true` is `x` is either `null` or `undefined`.

```javascript
const result = [
  R.isNil(null),
  R.isNil(1),
]
// => [true, false]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
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


### join


```typescript
join(x: string, xs: ReadonlyArray<any>): string
```

It returns a string representing `list` instances joined with `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
join(x: string, xs: ReadonlyArray<any>): string;
join(x: string): (xs: ReadonlyArray<any>) => string;
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


### keys


```typescript
keys<T extends object>(x: T): (keyof T)[]
```

It applies `Object.keys` over `x` and returns its keys.

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
keys<T>(x: T): string[];
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

<summary> Failed <italic>Ramda.keys</italic> specs

> Reason for the failure: ramda method works for primitives
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


### last


```typescript
last<T>(listOrString: T[]): T | undefined
```

It returns the last element of `listOrString`.

```javascript
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
last<T>(listOrString: T[]): T | undefined;
last(listOrString: string): string;
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


### lastIndexOf


```typescript
lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number
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

<details>

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;
lastIndexOf<T>(target: T): (list: ReadonlyArray<T>) => number;
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

<summary> Failed <italic>Ramda.lastIndexOf</italic> specs

> Reason for the failure: ramda method dispatches to `lastIndexOf` method
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


### length


```typescript
length<T>(listOrString: ReadonlyArray<T>): number
```

It returns the `length` property of `listOrString`.

```javascript
const result = [
  R.length([1, 2, 3, 4]),
  R.length('foo'),
]
// => [4, 3]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(listOrString: ReadonlyArray<T>): number;
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

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})
```

</details>

<details>

<summary> Failed <italic>Ramda.length</italic> specs

> Reason for the failure: ramda method supports object with `length` method
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

<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
```

</details>


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

<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
lensPath(path: RamdaPath): Lens;
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
  // this is different to ramda, ramda will return a clone of the input object
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

<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(prop: string): {
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


### map


```typescript
map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>
```

It returns the result of looping through `list` with `fn`.

It works with both array and object.

```javascript
const fn = (x, i) => (x * 2) + i
const fnWhenObject = (val, prop)=>{
  return `${prop}-${val}`
}

const list = [1, 2]
const obj = {a: 1, b: 2}

const result = [ 
  R.map(fn, list),
  R.map(fnWhenObject, obj)
]
// => [ [2, 5], {a: 'a-1', b: 'b-2'}]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>;
map<T, U>(fn: MapFunctionArray<T, U>, list: T[]): U[];
map<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => U[];
map<T, U, S>(fn: MapFunctionObject<T, U>): (list: Dictionary<T>) => Dictionary<U>;
map<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
map<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];
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

test('pass index as second argument', () => {
  map((x, i) => {
    expect(i).toBeNumber()
  },
  [ 10, 20, 30 ])
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

describe('map with arrays', () => {
  it('only one type', () => {
    const x = map<number>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return a + 2
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('only one type + curry', () => {
    const x = map<number>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return a + 2
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('2 types', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return `${a}`
      },
      [1, 2, 3]
    )
    x // $ExpectType string[]
  })
  it('2 types + curry', () => {
    const x = map<number, string>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return `${a}`
    })([1, 2, 3])
    x // $ExpectType string[]
  })
})

describe('map with objects', () => {
  it('curry', () => {
    // It requires dummy third typing argument
    // in order to distinguish compared to curry typings for arrays
    // ============================================
    const x = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<string>
  })
  it('1', () => {
    const x = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('2', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('3', () => {
    const x = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
})
```

</details>


### match


```typescript
match(regExpression: RegExp, str: string): any[]
```

Curried version of `String.prototype.match` which returns empty array, when there is no match.

```javascript
const result = [
  R.match('a', 'foo'),
  R.match(/([a-z]a)/g, 'bananas')
]
// => [[], ['ba', 'na', 'na']]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
match(regExpression: RegExp, str: string): any[];
match(regExpression: RegExp): (str: string) => any[];
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

<details>

<summary>All Typescript definitions</summary>

```typescript
max<T extends Ord>(x: T, y: T): T;
max<T extends Ord>(x: T): (y: T) => T;
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


### maxBy


```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the greater value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

<details>

<summary>All Typescript definitions</summary>

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
maxBy<T>(compareFn: (input: T) => Ord): FToolbelt.Curry<(x: T, y: T) => T>;
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


### mean


```typescript
mean(list: ReadonlyArray<number>): number
```

It returns the mean value of `list` input.

```javascript
R.mean([ 2, 7 ])
// => 4.5
```

<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: ReadonlyArray<number>): number;
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


### median


```typescript
median(list: ReadonlyArray<number>): number
```

It returns the median value of `list` input.

```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```

<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: ReadonlyArray<number>): number;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { identical } from './identical'
import { median } from './median'

test('median', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 9 ])).toEqual(8)
  expect(identical(NaN, median([]))).toBeTrue()
})
```

</details>


### merge


```typescript
merge<T1, T2>(target: T1, newProps: T2): Merge<T2, T1>
```

It creates a copy of `target` object with overidden `newProps` properties.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.merge(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<details>

<summary>All Typescript definitions</summary>

```typescript
merge<T1, T2>(target: T1, newProps: T2): Merge<T2, T1>;
merge<T1>(target: T1): <T2>(newProps: T2) => Merge<T2, T1>;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { merge } from './merge'

const sample = {
  foo : 'bar',
  bar : 'bar',
}

test('merge', () => {
  expect(merge(sample)({ bar : 'baz' })).toEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(sample, null)).toEqual(sample)
  expect(merge(sample, undefined)).toEqual(sample)
  expect(merge(undefined, sample)).toEqual(sample)
})
```

</details>


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

<details>

<summary>All Typescript definitions</summary>

```typescript
min<T extends Ord>(x: T, y: T): T;
min<T extends Ord>(x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { min } from './min'

test('happy', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(2)(1)).toBe(1)
})
```

</details>


### minBy


```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```

It returns the lesser value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

<details>

<summary>All Typescript definitions</summary>

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
minBy<T>(compareFn: (input: T) => Ord): FToolbelt.Curry<(x: T, y: T) => T>;
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


### modulo


```typescript
modulo(x: number, y: number): number
```

Curried version of `x%y`.

```javascript
R.modulo(17, 3) // => 2
```

<details>

<summary>All Typescript definitions</summary>

```typescript
modulo(x: number, y: number): number;
modulo(x: number): (y: number) => number;
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


### multiply


```typescript
multiply(x: number, y: number): number
```

Curried version of `x*y`.

```javascript
R.multiply(2, 4) // => 8
```

<details>

<summary>All Typescript definitions</summary>

```typescript
multiply(x: number, y: number): number;
multiply(x: number): (y: number) => number;
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


### negate


```typescript
negate(x: number): number
```


```javascript
R.negate(420)// => -420
```

<details>

<summary>All Typescript definitions</summary>

```typescript
negate(x: number): number;
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


### none


```typescript
none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate, arr)
// => true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
none<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
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

test('passes index to predicate', () => {
  none((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 1, 2, 3 ])
})
```

</details>


### not


```typescript
not(input: any): boolean
```

It returns a boolean negated version of `input`.

```javascript
R.not(false) // true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
not(input: any): boolean;
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


### nth


```typescript
nth<T>(index: number, list: ReadonlyArray<T>): T | undefined
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

<details>

<summary>All Typescript definitions</summary>

```typescript
nth<T>(index: number, list: ReadonlyArray<T>): T | undefined;
nth(index: number): <T>(list: ReadonlyArray<T>) => T | undefined;
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


### omit


```typescript
omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

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

<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;
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

describe('omit with string as props input', () => {
  it('one type', () => {
    const x = omit<number>('a,c', {a: 1, b: 2, c: 3, d: 4}) // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit<number>('a,c')({a: 1, b: 2, c: 3, d: 4}) // $ExpectType Dictionary<number>
    y // $ExpectType Dictionary<number>
  })
  it('two types', () => {
    interface Output {
      b: string,
      d: number,
    }

    const x = omit<string | number, Output>('a,c', {
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    x // $ExpectType Output
    x.b // $ExpectType string
    const y = omit<string | number, Output>('a,c')({
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    y // $ExpectType Output
    y.d // $ExpectType number
  })

  it('infered input type', () => {
    const x = omit('a,c', {a: 1, b: 2, c: 3, d: 4}) // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit('a,c', {a: 1, b: '1', c: 3, d: 4}) // $ExpectType Dictionary<string | number>
    y // $ExpectType Dictionary<string | number>
    const q = omit('a,c')({a: 1, b: 1, c: 3, d: 4}) // $ExpectType Dictionary<unknown>
    q // $ExpectType Dictionary<unknown>
  })
})

describe('omit with array as props input', () => {
  it('one type', () => {
    const x = omit<number>(['a,c'], {a: 1, b: 2, c: 3, d: 4}) // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit<number>(['a,c'])({a: 1, b: 2, c: 3, d: 4}) // $ExpectType Dictionary<number>
    y // $ExpectType Dictionary<number>
  })
})
```

</details>


### over


```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
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

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

```javascript
const fn = (title, firstName, lastName) => {
  return title + ' ' + firstName + ' ' + lastName + '!'
}

const canPassAnyNumberOfArguments = partial(fn, 'Hello')
const finalFn = canPassAnyNumberOfArguments('Foo')

finalFn('Bar') // =>  'Hello, Foo Bar!'
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

  expect(type(fn)).toBe('Function')

  expect(fn('bar')).toBe('Hello, Ms. foo bar!')
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


### path


```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

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

<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
path<T>(pathToSearch: string | string[], obj: any): T | undefined;
path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
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

describe('path', () => {
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

<summary> Failed <italic>Ramda.path</italic> specs

> Reason for the failure: ramda method supports negative indices
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

<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): FToolbelt.Curry<(a: Path, b: any) => T>;
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
  p : [ { q : 3 }, 'Hi' ],
  x : {
    y : 'Alice',
    z : [ [ {} ] ],
  },
}

test('with string path', () => {
  const result = paths([ 'a.b.d', 'p.q' ], obj)

  expect(result).toEqual([ 2, undefined ])
})

test('with array path', () => {
  const result = paths([
    [ 'a', 'b', 'c' ],
    [ 'x', 'y' ],
  ],
  obj)

  expect(result).toEqual([ 1, 'Alice' ])
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

describe('paths', () => {
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

  it('with curry', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']])(input)
    result // $ExpectType (number | undefined)[]
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.paths</italic> specs

> Reason for the failure: ramda method supports negative indices
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


### pick


```typescript
pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>
```

It returns a partial copy of an `obj`  containing only `propsToPick` properties.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const propsToPick = 'a,foo'
const propsToPickList = ['a', 'foo']

const result = [
  R.pick(propsToPick, obj),
  R.pick(propsToPickList, obj),
  R.pick('a,bar', obj),
  R.pick('bar', obj),
]
const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {}
]
// => `result` is equal to `expected`
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

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pick } from './pick'

test('pick with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('pick', () => {
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
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pick} from 'rambda'

describe('pick with string as props input', () => {
  it('one type', () => {
    const x = pick<number>('a,c', {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick<number>('a,c')({a: 1, b: 2, c: 3, d: 4})
    y // $ExpectType Dictionary<number>
  })
  it('two types', () => {
    interface Output {
      a: number,
      c: number,
    }

    const x = pick<string | number, Output>('a,c', {
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    x // $ExpectType Output
    x.a // $ExpectType number
    const y = pick<string | number, Output>('a,c')({
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    y // $ExpectType Output
    y.a // $ExpectType number
  })

  it('infered input type', () => {
    const x = pick('a,c', {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick('a,c', {a: 1, b: '1', c: 3, d: 4}) 
    y // $ExpectType Dictionary<string | number>
    const q = pick('a,c')({a: 1, b: 1, c: 3, d: 4}) 
    q // $ExpectType Dictionary<unknown>
  })
})

describe('pick with array as props input', () => {
  it('one type', () => {
    const x = pick<number>(['a,c'], {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick<number>(['a,c'])({a: 1, b: 2, c: 3, d: 4})
    y // $ExpectType Dictionary<number>
  })
})
```

</details>


### pickAll


```typescript
pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U
```

Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.

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

<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U;
pickAll(propsToPick: ReadonlyArray<string>): <T, U>(obj: T) => U;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
pipe<T1>(fn0: () => T1): () => T1;
pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
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
  expect(() => pipe()).toThrow('pipe requires at least one argument')
})
```

</details>

<details>

<summary> Failed <italic>Ramda.pipe</italic> specs

> Reason for the failure: ramda passes context to functions | rambda composed functions have no length
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


### pluck


```typescript
pluck<T>(property: number, list: ReadonlyArray<T>): T
```

It returns list of the values of `property` taken from the all objects inside `list`.

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

R.pluck(list, property) 
// => [1, 2]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<T>(property: number, list: ReadonlyArray<T>): T;
pluck<K extends keyof T, T>(property: K, list: ReadonlyArray<T>): T[K][];
pluck(property: number): <T>(list: ReadonlyArray<T>) => T;
pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
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

describe('pluck', () => {
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

<summary> Failed <italic>Ramda.pluck</italic> specs

> Reason for the failure: ramda method behaves as a transducer
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


### prepend


```typescript
prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[]
```

It adds element `x` at the beginning of `listOrString`.

```javascript
const x = 'foo'

const result = [
  R.prepend(x, '_cherry'),
  R.prepend(x, ['bar', 'baz'])
]
// => ['foo_cherry', ['foo', 'bar', 'baz']]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[];
prepend<T>(x: T): (listOrString: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prepend } from './prepend'

test('happy', () => {
  expect(prepend('f', 'oo')).toEqual('foo')
})

test('prepend', () => {
  expect(prepend('yes', [ 'foo', 'bar', 'baz' ])).toEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])

  expect(prepend('foo')([])).toEqual([ 'foo' ])
})
```

</details>


### product


```typescript
product(list: ReadonlyArray<number>): number
```


```javascript
R.product([ 2, 3, 4 ])
// => 24)
```

<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: ReadonlyArray<number>): number;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
propEq(propToFind: string | number): {
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

<summary> Failed <italic>Ramda.propEq</italic> specs

> Reason for the failure: ramda method pass to `equals` method if available
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


### propIs


```typescript
propIs<P extends keyof T, T>(target: any, property: P, obj: T): boolean
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

<details>

<summary>All Typescript definitions</summary>

```typescript
propIs<P extends keyof T, T>(target: any, property: P, obj: T): boolean;
propIs<P extends string>(target: any, property: P, obj): <T>(obj: Record<P, T>) => boolean;
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


### propOr


```typescript
propOr<T, U, V>(defaultValue: T, property: string, obj: U): V
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

<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T, U, V>(defaultValue: T, property: string, obj: U): V;
propOr<T>(defaultValue: T, property: string): <U, V>(obj: U) => V;
propOr<T>(defaultValue: T): <U, V>(property: string, obj: U) => V;
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


### range


```typescript
range(start: number, end: number): number[]
```

It returns list of numbers between `start`(inclusive) to `end`(exclusive) numbers.

```javascript
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
range(start: number, end: number): number[];
range(start: number): (end: number) => number[];
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
  expect(() => range('a', 6)).toThrow(throwMessage)
  expect(() => range(6, 'z')).toThrow(throwMessage)
})

test('curry', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})
```

</details>


### reduce


```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult
```


```javascript
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: ReadonlyArray<T>) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: ReadonlyArray<T>) => TResult;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reduce } from './reduce'

test('happy', () => {
  const reducer = (
    prev, current, i
  ) => {
    expect(i).toBeNumber()

    return prev + current
  }
  const initialValue = 1
  const list = [ 1, 2, 3 ]

  expect(reduce(
    reducer, initialValue, list
  )).toEqual(7)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reduce} from 'rambda'

describe('reduce', () => {
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

<summary> Failed <italic>Ramda.reduce</italic> specs

> Reason for the failure: rambda doesn't have `R.reduced` method | ramda method pass to `reduce` method
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


### reject


```typescript
reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[]
```

It has the opposite effect of `R.filter`.

It will return those members of `list` that return `false` when applied to `predicate` function.

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x > 2

const result = [
  R.reject(predicate, list)
]
// => [1, 2]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
reject<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
reject<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
reject<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reject } from './reject'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  expect(reject(isOdd, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })).toEqual({
    b : 2,
    d : 4,
  })
})

test('pass index as second argument', () => {
  reject((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  },
  [ 10, 12, 15 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reject} from 'rambda'

describe('reject with array', () => {
  it('1 curry', () => {
    const x = reject<number>(a => {
      a // $ExpectType number
      return a > 1
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('1', () => {
    const x = reject<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('2', () => {
    const x = reject<number>(
      (a, b) => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
})

describe('reject with objects', () => {
  it('curry', () => {
    const x = reject<number, number>((a, b, c) => {
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<number>
  })

  it('object with three arguments predicate', () => {
    const x = reject<number>(
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
    const x = reject<number>(
      (a, b) => {
        b // $ExpectType string
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
  it('object with one argument predicate', () => {
    const x = reject<number>(
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

<summary> Failed <italic>Ramda.reject</italic> specs

> Reason for the failure: ramda method dispatches to `filter` method
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


### repeat


```typescript
repeat<T>(x: T, timesToRepeat: number): T[]
```

It returns a list of `x` input repeated `timesToRepeat` input.

```javascript
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
repeat<T>(x: T, timesToRepeat: number): T[];
repeat<T>(x: T): (timesToRepeat: number) => T[];
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

<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
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


### reverse


```typescript
reverse<T>(listOrString: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(listOrString: ReadonlyArray<T>): T[];
reverse(listOrString: string): string;
```

</details>


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

<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T;
set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(replacer: U, obj: T) => T;
```

</details>


### slice


```typescript
slice(from: number, to: number, list: string): string
```

It returns `listOrString` between `from` and `to` indexes.

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

<details>

<summary>All Typescript definitions</summary>

```typescript
slice(from: number, to: number, list: string): string;
slice<T>(from: number, to: number, list: T[]): T[];
slice(frp,: number, to: number): {
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


### sort


```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[]
```

It returns copy of `list` sorted by `sortFn` function.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = (x, y) => {
  return x.a > y.a ? 1 : -1
}

const result = R.sort(list, sortFn)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<details>

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];
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


### sortBy


```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[]
```

It returns copy of `list` sorted by `sortFn` function.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortBy(list, sortFn)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<details>

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compose } from './compose'
import { prop } from './prop'
import { sortBy } from './sortBy'
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
import {sortBy} from 'rambda'

describe('sortBy', () => {
  it('happy', () => {
    interface Input {
      a: number,
    }

    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)

    result // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.sortBy</italic> specs

> Reason for the failure: ramda works with array-like objects
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

<details>

<summary>All Typescript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];
split(separator: string | RegExp, str: string): string[];
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toEqual([ 'a', 'b', 'c', 'xyz', 'd' ])
})
```

</details>


### splitEvery


```typescript
splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][];
splitEvery(sliceLength: number, listOrString: string): string[];
splitEvery(sliceLength: number): {
```

</details>


### startsWith


```typescript
startsWith(target: string, str: string): boolean
```

Curried version of `String.prototype.startsWith`

```javascript
const str = 'foo-bar'

const result = [
  R.startsWith('foo', str),
  R.startsWith('bar', str)
]
// => [true, false]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
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

<summary> Failed <italic>Ramda.startsWith</italic> specs

> Reason for the failure: rambda doesn't support arrays
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


### subtract


```typescript
subtract(x: number, y: number): number
```


<details>

<summary>All Typescript definitions</summary>

```typescript
subtract(x: number, y: number): number;
subtract(x: number): (y: number) => number;
```

</details>


### sum


```typescript
sum(list: ReadonlyArray<number>): number
```


```javascript
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: ReadonlyArray<number>): number;
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


### symmetricDifference


```typescript
symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

```javascript
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
symmetricDifference<T>(x: ReadonlyArray<T>): <T>(y: ReadonlyArray<T>) => T[];
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


### T


```typescript
T(): boolean
```


```javascript
R.T() 
// => true
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

It returns all but the first element of `listOrString`.

```javascript
const result = [
  R.tail([1, 2, 3]),  
  R.tail('foo') 
]
// => [[2, 3], 'oo']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[];
tail(listOrString: string): string;
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


### take


```typescript
take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]
```

It returns the first `howMany` elements of `listOrString`.

```javascript
const howMany = 2

const result = [
  R.take(howMany, [1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
take(howMany: number, listOrString: string): string;
take<T>(howMany: number): {
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

<summary> Failed <italic>Ramda.take</italic> specs

> Reason for the failure: rambda doesn't have 'R.into` method
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


### takeLast


```typescript
takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[]
```

It returns the last `howMany` elements of `listOrString`.

```javascript
const howMany = 2

const result = [
  R.takeLast(howMany, [1, 2, 3]),
  R.takeLast(howMany, 'foobar'),
]
// => [[2, 3], 'ar']
```

<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
takeLast(howMany: number, listOrString: string): string;
takeLast<T>(howMany: number): {
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


### tap


```typescript
tap<T>(fn: (a: T) => any, x: T): T
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

<details>

<summary>All Typescript definitions</summary>

```typescript
tap<T>(fn: (a: T) => any, x: T): T;
tap<T>(fn: (a: T) => any): (x: T) => T;
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

<summary> Failed <italic>Ramda.tap</italic> specs

> Reason for the failure: ramda can act as a transducer
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


### test


```typescript
test(regExpression: RegExp): (str: string) => boolean
```

It determines whether `str` matches `regExpression`.

```javascript
R.test(/^f/, 'foo')
// => true
```

<details>

<summary>All Typescript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
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
  expect(() => testMethod('foo', 'bar')).toThrow('‘test’ requires a value of type RegExp as its first argument; received "foo"')
})
```

</details>


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

<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
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


### toLower


```typescript
toLower(str: string): string
```


```javascript
R.toLower('FOO')
// => 'foo'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
toLower(str: string): string;
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

<details>

<summary>All Typescript definitions</summary>

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];
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


### toString


```typescript
toString<T>(x: T): string
```


```javascript
R.toString([1, 2]) 
// => '1,2'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
toString<T>(x: T): string;
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


### toUpper


```typescript
toUpper(str: string): string
```


```javascript
R.toUpper('foo')
// => 'FOO'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
toUpper(str: string): string;
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


### transpose


```typescript
transpose<T>(list: T[][]): T[][]
```


```javascript
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: T[][]): T[][];
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


### trim


```typescript
trim(str: string): string
```


```javascript
R.trim('  foo  ') 
// => 'foo'
```

<details>

<summary>All Typescript definitions</summary>

```typescript
trim(str: string): string;
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

<summary> Failed <italic>Ramda.trim</italic> specs

> Reason for the failure: ramda trims all ES5 whitespace
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


### type


```typescript
type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"
```


<details>

<summary>All Typescript definitions</summary>

```typescript
type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";
```

</details>


### uniq


```typescript
uniq<T>(list: ReadonlyArray<T>): T[]
```

It returns a new array containing only one copy of each element of `list`.

```javascript
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(list: ReadonlyArray<T>): T[];
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

describe('uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.uniq</italic> specs

> Reason for the failure: ramda pass to `uniq` method | ramda method uses reference equality for functions
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


### uniqWith


```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[]
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

<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];
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

describe('uniqWith', () => {
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


### update


```typescript
update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[]
```

It returns a copy of `list` with updated element at `index` with `newValue`.

```javascript
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = update(index, newValue, list)
// => [1, 2, 88, 4, 5]
```

<details>

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[];
update<T>(index: number, newValue: T): (list: ReadonlyArray<T>) => T[];
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { update } from './update'

test('update', () => {
  expect(update(1)(0)([ 1, 2, 3 ])).toEqual([ 1, 0, 3 ])
  expect(update(
    1, 11, [ 0, 1, 2 ]
  )).toEqual([ 0, 11, 2 ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {update} from 'rambda'

describe('update', () => {
  it('happy', () => {
    const result = update(1, 0, [1, 2, 3])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary> Failed <italic>Ramda.update</italic> specs

> Reason for the failure: ramda accepts an array-like object
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

<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
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

describe('values', () => {
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

<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (target: T) => U;
view<T, U>(lens: Lens, target: T): U;
```

</details>


### without


```typescript
without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[]
```


<details>

<summary>All Typescript definitions</summary>

```typescript
without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[];
without<T>(matchAgainst: ReadonlyArray<T>): (source: ReadonlyArray<T>) => T[];
```

</details>


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

<details>

<summary>All Typescript definitions</summary>

```typescript
xor(x: boolean, y: boolean): boolean;
xor(y: boolean): (y: boolean) => boolean;
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

test.skip('returns a curried function', () => {
  expect(xor()(true)(true)).toEqual(false)
  expect(xor()(true)(false)).toEqual(true)
  expect(xor()(false)(true)).toEqual(true)
  expect(xor()(false)(false)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {xor} from 'rambda'

describe('xor', () => {
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

<summary> Failed <italic>Ramda.xor</italic> specs

> Reason for the failure: ramda support empty call of method
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


### zip


```typescript
zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[]
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

<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[];
zip<K>(x: ReadonlyArray<K>): <V>(y: ReadonlyArray<V>) => KeyValuePair<K, V>[];
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

describe('zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']

    const result = zip(array1)(array2)
    result // $ExpectType KeyValuePair<number, string>[]
  })
})
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
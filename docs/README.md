[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambda/status.svg)](https://david-dm.org/selfrefactor/rambda)

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
* [Benchmark](#benchmark)
* [Use with ES5](#use-with-es5)
* [Changelog](#changelog)
* [Additional info](#additional-info)
* [Browse by category](#browse-by-category)

## Rambda's advantages

- Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda**

- Speed

**Rambda** is generally more performant than `Ramda` as the benchmarks can prove that.

You can clone this repo and run `yarn run benchmark all` to see for yourself.

- dot notation for `R.path`

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

`Ramda` has an overwhelming list of methods, as one could get lost putting all the methods in one's head. `Rambda`'s much smaller number of total methods(109) I see as advantage compared to the 255 of `Ramda`.

Ramda methods has plenty of really deep FP Methods, which are in fact quite useful, but they come at the price of added complexity. Such complex logics are in practice rarely needed.

You can [check the list with missing  Ramda methods in Rambda](#ramda-methods-missing-in-rambda) list to assure that `Rambda` doesn't have any important misses.

## Install

- Use **yarn add rambda** for `Webpack` and `Node.js` usage

- For UMD usage either use `./dist/rambda.umd.js` or following CDN link:

```
https://unpkg.com/rambda@3.3.0/dist/rambda.umd.js
```

## Differences between Rambda and Ramda

- Rambda's **type** detect async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handle `Not a number` values and it returns `NaN` in this case.

- Rambda's **path** accepts dot notation(`'x.y' same as ['x','y']`)

- Rambda's **pick** and **omit** accept comma notation(`'x,y' same as ['x','y']`)

- Rambda's **map**, **filter**, **reject** and **forEach** can iterate over objects not only arrays.

- Rambda's **map** and **filter** pass array index as second argument when mapping over arrays.

- Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

- Rambda's **adjust**, **all**, **allPass**, **any**, **anyPass**, **findIndex** and **reject** are passing index as second argument to the predicate function.

- Rambda's **startsWith/endsWith** work only with strings, instead with array and strings.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does.

- Rambda's **flip** works only for functions expecting two arguments.

- Rambda's **partial** doesn't need the input arguments to be wrapped as array.

- Rambda's **partialCurry** is not part of Ramda API.

- Ramda's **includes** will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

## API

---
#### add

> add(a: number, b: number): number

```javascript
R.add(2, 3) // =>  5
```

<details>

<summary>
R.add tests
</summary>

```javascript
import { add } from './add'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('with string', () => {
  expect(add('foo', 'bar')).toEqual('foobar')
})

```

</details>

<details>

<summary>
R.add source
</summary>

```javascript
export function add(a, b){
  if (arguments.length === 1) return _b => add(a, _b)

  return a + b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try in REPL</a>

---
#### adjust

> adjust(replaceFn: Function, i: number, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```javascript
R.adjust(
  a => a + 1,
  0,
  [0, 100]
) // => [1, 100]
```

<details>

<summary>
R.adjust tests
</summary>

```javascript
import { add } from './add'
import { adjust } from './adjust'

const expectedResult = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(add(10), 1, [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 1 1', () => {
  expect(adjust(add(10))(1)([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 2', () => {
  expect(adjust(add(10))(1, [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 2 1', () => {
  expect(adjust(add(10), 1)([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with negative index', () => {
  expect(adjust(add(10), -2, [ 0, 1, 2 ])).toEqual(expectedResult)
})

```

</details>

<details>

<summary>
R.adjust source
</summary>

```javascript
import { curry } from './curry'

export const adjust = curry(adjustRaw)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%200%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try in REPL</a>

---
#### all

> all(fn: Function, arr: T[]): boolean

It returns `true`, if all members of array `arr` returns `true`, when applied as argument to function `fn`.

```javascript
const arr = [ 0, 1, 2, 3, 4 ]
const fn = x => x > -1

const result = R.all(fn, arr)
// => true
```

<details>

<summary>
R.all tests
</summary>

```javascript
import { all } from './all'

const numArr = [ 0, 1, 2, 3, 4 ]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(numArr)).toBeTruthy()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, numArr)).toBeFalsy()
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

<summary>
R.all source
</summary>

```javascript
export function all(fn, list){
  if (arguments.length === 1) return _list => all(fn, _list)

  for (let i = 0; i < list.length; i++){
    if (!fn(list[ i ], i))
      return false
  }

  return true
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20fn%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(fn%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### allPass

> allPass(rules: Function[], input: any): boolean

It returns `true`, if all functions of `rules` return `true`, when `input` is their argument.

```javascript
const input = {
  a : 1,
  b : 2,
}
const rules = [
  x => x.a === 1,
  x => x.b === 2,
]
const result = R.allPass(rules, input) // => true
```

<details>

<summary>
R.allPass tests
</summary>

```javascript
import { allPass } from './allPass'

test('', () => {
  const rules = [
    x => typeof x === 'number',
    x => x > 10,
    x => x * 7 < 100,
  ]

  expect(allPass(rules)(11)).toBeTruthy()

  expect(allPass(rules)(undefined)).toBeFalsy()
})

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 2 ]

  expect(
    allPass(conditionArr)({
      a : 1,
      b : 2,
    })
  ).toBeTruthy()
})

test('when returns false', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 3 ]

  expect(
    allPass(conditionArr)({
      a : 1,
      b : 2,
    })
  ).toBeFalsy()
})

```

</details>

<details>

<summary>
R.allPass source
</summary>

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

<a href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(rules%2C%20input)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### always

> always(x: any): Function

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<details>

<summary>
R.always tests
</summary>

```javascript
import { always } from './always'

test('', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

```

</details>

<details>

<summary>
R.always source
</summary>

```javascript
export function always(val){
  return () => val
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### any

> any(condition: Function, arr: T[]): boolean

It returns `true`, if at least one member of `arr` returns true, when passed to the `condition` function.

```javascript
R.any(a => a * a > 8)([1, 2, 3])
// => true
```

<details>

<summary>
R.any tests
</summary>

```javascript
import { any } from './any'

const arr = [ 1, 2 ]

test('no curry', () => {
  expect(any(val => val < 0, arr)).toBeFalsy()
})

test('with curry', () => {
  expect(any(val => val < 2)(arr)).toBeTruthy()
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

<summary>
R.any source
</summary>

```javascript
export function any(fn, list){
  if (arguments.length === 1) return _list => any(fn, _list)

  let counter = 0
  while (counter < list.length){
    if (fn(list[ counter ], counter)){
      return true
    }
    counter++
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.any(a%20%3D%3E%20a%20*%20a%20%3E%208)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### anyPass

> anyPass(conditions: Function[]): Function

```javascript
const isBig = a => a > 20
const isOdd = a => a % 2 === 1

const result = R.anyPass(
  [isBig, isOdd]
)(11)
// => true
```

<details>

<summary>
R.anyPass tests
</summary>

```javascript
import { anyPass } from './anyPass'

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTruthy()
  expect(predicate(6)).toBeFalsy()
})

test('', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]

  expect(anyPass(rules)(11)).toBeTruthy()

  expect(anyPass(rules)(undefined)).toBeFalsy()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.a === 2 ]

  expect(anyPass(conditionArr)(obj)).toBeTruthy()
})

test('when returns false + curry', () => {
  const conditionArr = [ val => val.a === 2, val => val.b === 3 ]

  expect(anyPass(conditionArr)(obj)).toBeFalsy()
})

```

</details>

<details>

<summary>
R.anyPass source
</summary>

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

<a href="https://rambda.now.sh?const%20isBig%20%3D%20a%20%3D%3E%20a%20%3E%2020%0Aconst%20isOdd%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)(11)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### append

> append(valueToAppend: T, arr: T[]): T[]

```javascript
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

<details>

<summary>
R.append tests
</summary>

```javascript
import { append } from './append'
import { compose } from './compose'
import { flatten } from './flatten'
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

test('', () => {
  const result = compose(
    flatten,
    map(append(0))
  )([ [ 1 ], [ 2 ], [ 3 ] ])
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

<summary>
R.append source
</summary>

```javascript
export function append(el, list){
  if (arguments.length === 1) return _list => append(el, _list)

  if (typeof list === 'string') return `${ list }${ el }`

  const clone = list.concat()
  clone.push(el)

  return clone
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.append(%0A%20%20'foo'%2C%0A%20%20%5B'bar'%2C%20'baz'%5D%0A)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try in REPL</a>

---
#### assoc

> assoc(prop: any, value: any, obj: object): object

Makes a shallow clone of `obj`, setting or overriding the property `prop` with
the value `value`. Note that this copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<details>

<summary>
R.assoc tests
</summary>

```javascript
import { assoc } from './assoc'

test('adds a key to an empty object', () => {
  expect(assoc('a', 1, {})).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc('b', 2, { a : 1 })).toEqual({
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
  expect(assoc('a', 2, { a : 1 })).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc('a', 1, undefined)).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assoc('a', 1, null)).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assoc('a', null, null)).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assoc('a', undefined, null)).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assoc('a', { b : 2 }, { a : { c : 3 } })).toEqual({ a : { b : 2 } })
})

```

</details>

<details>

<summary>
R.assoc source
</summary>

```javascript
import { curry } from './curry'

export const assoc = curry(assocFn)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try in REPL</a>

---
#### both

> both(firstCondition: Function, secondCondition: Function, input: any): boolean

It returns `true`, if both function `firstCondition` and function `secondCondition` return `true`, when `input` is their argument.

```javascript
const fn = R.both(
  a => a > 10,
  a => a < 20
)
console.log(fn(15)) //=> true
console.log(fn(30)) //=> false
```

<details>

<summary>
R.both tests
</summary>

```javascript
import { both } from './both'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalsy()
})

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTruthy()
})

test('with multiple inputs', () => {
  const between = function(a, b, c){ return a < b && b < c }
  const total20 = function(a, b, c){ return a + b + c === 20 }
  const fn = both(between, total20)
  expect(fn(5, 7, 8)).toBeTruthy()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function(){ return false }
  const Z = function(){ effect = 'Z got evaluated' }
  both(F, Z)()

  expect(effect).toBe('not evaluated')
})

```

</details>

<details>

<summary>
R.both source
</summary>

```javascript
export function both(f, g){
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.both(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%3C%2020%0A)%0Aconsole.log(fn(15))%20%2F%2F%3D%3E%20true%0Aconsole.log(fn(30))%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### clone

> clone(objOrArr: T|T[]): T|T[]
both
Creates a deep copy of the value which may contain (nested) Arrays and Objects, 
Numbers, Strings, Booleans and Dates. Functions are assigned by reference rather 
than copied

```javascript
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

<details>

<summary>
R.clone tests
</summary>

```javascript
import { clone } from './clone'

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
  const arr = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(arr)).toEqual(arr)
})

```

</details>

<details>

<summary>
R.clone source
</summary>

```javascript
export function clone(val){
  const out = Array.isArray(val) ? Array(val.length) : {}

  for (const key in val){
    const v = val[ key ]
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

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20objects%20%3D%20%5B%7B%7D%2C%20%7B%7D%2C%20%7B%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0Aobjects%20%3D%3D%3D%20objectsClone%3B%20%2F%2F%3D%3E%20false%0Aobjects%5B0%5D%20%3D%3D%3D%20objectsClone%5B0%5D%3B%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### compose

> compose(fn1: Function, ... , fnN: Function): any

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),both
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<details>

<summary>
R.compose tests
</summary>

```javascript
import { add } from './add'
import { map } from './map'
import { filter } from './filter'
import { last } from './last'
import { compose } from './compose'

test('', () => {
  const result = compose(
    last,
    map(add(10)),
    map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('accepts initially two arguments', () => {
  const result = compose(
    map(x => x * 2),
    (a, y) => filter(x => x > y, a)
  )([ 1, 2, 3, 4 ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no functions as input', () => {
  expect(compose()()).toBeUndefined()
})

```

</details>

<details>

<summary>
R.compose source
</summary>

```javascript
export function compose(...fns){
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

    return undefined
  }
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2Cboth%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### complement

> complement(fn: Function): Function

It returns `complemented` function that accept `input` as argument.

The return value of `complemented` is the negative boolean value of `fn(input)`.

```javascript
const fn = R.complement(x => !x)

const result = fn(false) // => false
```

<details>

<summary>
R.complement tests
</summary>

```javascript
import { complement } from './complement'

test('', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTruthy()
})

```

</details>

<details>

<summary>
R.complement source
</summary>

```javascript
export function complement(fn){
  return input => !fn(input)
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.complement(x%20%3D%3E%20!x)%0A%0Aconst%20result%20%3D%20fn(false)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### concat

> concat(x: T[]|string, y: T[]|string): T[]|string

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

<details>

<summary>
R.concat tests
</summary>

```javascript
import { concat } from './concat'

test('', () => {
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

<summary>
R.concat source
</summary>

```javascript
export function concat(left, right){
  if (arguments.length === 1) return _right => concat(left, _right)

  return typeof left === 'string' ? `${ left }${ right }` : [ ...left, ...right ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try in REPL</a>

---
#### curry

> curry(fn: Function): Function

It returns curried version of `fn`.

```javascript
const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)
const result = g(4) // => 10
```

<details>

<summary>
R.curry tests
</summary>

```javascript
import { curry } from './curry'

test('', () => {
  const addFourNumbers = (a, b, c, d) => a + b + c + d
  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)

  expect(g(4)).toEqual(10)
})

test('when called with more arguments', () => {
  const add = curry((n, n2) => n + n2)

  expect(add(1, 2, 3)).toEqual(3)
})

test('when called with zero arguments', () => {
  const sub = curry((a, b) => a - b)
  const s0 = sub()

  expect(s0(5, 2)).toEqual(3)
})

test('when called via multiple curry stages', () => {
  const join = curry((a, b, c, d) => [ a, b, c, d ].join('-'))

  const stage1 = join('A')
  const stage2 = stage1('B', 'C')

  expect(stage2('D')).toEqual('A-B-C-D')
})

```

</details>

<details>

<summary>
R.curry source
</summary>

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

<a href="https://rambda.now.sh?const%20addFourNumbers%20%3D%20(a%2C%20b%2C%20c%2C%20d)%20%3D%3E%20a%20%2B%20b%20%2B%20c%20%2B%20d%0Aconst%20curriedAddFourNumbers%20%3D%20R.curry(addFourNumbers)%0Aconst%20f%20%3D%20curriedAddFourNumbers(1%2C%202)%0Aconst%20g%20%3D%20f(3)%0Aconst%20result%20%3D%20g(4)%20%2F%2F%20%3D%3E%2010">Try in REPL</a>

---
#### dec

> dec(x: number): number

It decrements a number.

```
R.dec(2) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dec(2)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### defaultTo

> defaultTo(defaultValue: T, ...inputArguments: any[]): T

It either returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Or it returns the first truthy `inputArguments` instance(from left to right).

```javascript
R.defaultTo('foo', undefined) // => 'foo'
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'baz') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'baz') // => 'baz'
R.defaultTo('foo', 'bar') // => 'bar'
```

<details>

<summary>
R.defaultTo tests
</summary>

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
  const result = defaultTo('foo', null, 'bar')
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 2', () => {
  const result = defaultTo('foo', null, NaN, 'bar')
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 3', () => {
  const result = defaultTo('foo', null, NaN, undefined)
  const expected = 'foo'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 4', () => {
  const result = defaultTo('foo', null, NaN, undefined, 'bar')
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 5', () => {
  const result = defaultTo('foo', null, NaN, 'bar', 'baz')
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 6', () => {
  const result = defaultTo('foo', null, NaN, undefined, null, NaN)
  const expected = 'foo'

  expect(result).toEqual(expected)
})


```

</details>

<details>

<summary>
R.defaultTo source
</summary>

```javascript
function flagIs(inputArguments){
  return inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
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

  return holder === undefined ?
    defaultArgument :
    holder
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'baz'%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'">Try in REPL</a>

---
#### dissoc

> dissoc(prop: any, obj: object): object

It returns a new object that does not contain a `prop` property.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

<details>

<summary>
R.dissoc tests
</summary>

```javascript
import { dissoc } from './dissoc'

test('input is null or undefined', () => {
  //These tests match Ramda behavior
  //https://ramdajs.com/repl/?v=0.25.0#?R.dissoc%28%27b%27%2C%20null%29
  expect(dissoc('b', null)).toEqual({})
  //https://ramdajs.com/repl/?v=0.25.0#?R.dissoc%28%27b%27%2C%20undefined%29
  expect(dissoc('b', undefined)).toEqual({})
})

test('property exists curried', () => {
  expect(
    dissoc('b')({
      a : 1,
      b : 2,
    })
  ).toEqual({ a : 1 })
})

test('property doesn\'t exists', () => {
  expect(
    dissoc('c', {
      a : 1,
      b : 2,
    })
  ).toEqual({
    a : 1,
    b : 2,
  })
})

test('works with non-string property', () => {
  expect(
    dissoc(42, {
      a  : 1,
      42 : 2,
    })
  ).toEqual({ a : 1 })

  expect(
    dissoc(null, {
      a    : 1,
      null : 2,
    })
  ).toEqual({ a : 1 })

  expect(
    dissoc(undefined, {
      a         : 1,
      undefined : 2,
    })
  ).toEqual({ a : 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height){
    this.width = width
    this.height = height
  }
  const area = Rectangle.prototype.area = function(){
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

<summary>
R.dissoc source
</summary>

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try in REPL</a>

---
#### divide

```
R.divide(71, 100) // => 0.71
```

---
#### drop

> drop(howManyToDrop: number, arrOrStr: T[]|string): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the left.

```javascript
R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']
R.drop(1, 'foo')  // => 'oo'
```

<details>

<summary>
R.drop tests
</summary>

```javascript
import { drop } from './drop'

test('', () => {
  expect(drop(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(drop(3, 'rambda')).toEqual('bda')
})

```

</details>

<details>

<summary>
R.drop source
</summary>

```javascript
export function drop(n, list){
  if (arguments.length === 1) return _list => drop(n, _list)

  return list.slice(n)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.drop(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%5D%0AR.drop(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### dropLast

> dropLast(howManyToDrop: number, arrOrStr: T[]|String): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the right.

```javascript
R.dropLast(1, ['foo', 'bar', 'baz']) // => ['foo', 'bar']
R.dropLast(1, 'foo')  // => 'fo'
```

<details>

<summary>
R.dropLast tests
</summary>

```javascript
import { dropLast } from './dropLast'

test('', () => {
  expect(dropLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
  ])

  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])

  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(dropLast(3, 'rambda')).toEqual('ram')
})

```

</details>

<details>

<summary>
R.dropLast source
</summary>

```javascript
export function dropLast(n, list){
  if (arguments.length === 1) return _list => dropLast(n, _list)

  return list.slice(0, -n)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D%0AR.dropLast(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### endsWith

> endsWith(x: string, str: string): boolean

```javascript
R.endsWith(
  'bar',
  'foo-bar'
) // => true

R.endsWith(
  'foo',
  'foo-bar'
) // => false
```

<details>

<summary>
R.endsWith tests
</summary>

```javascript
import { endsWith } from './endsWith'

test('string ends with suffix', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTruthy()
})

test('currying', () => {
  expect(endsWith('baz')('foo-bar')).toBeFalsy()
})

test('list ends with suffix', () => {
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('list.endsWith is not a function')
})

```

</details>

<details>

<summary>
R.endsWith source
</summary>

```javascript
export function endsWith(suffix, list){
  if (arguments.length === 1) return _list => endsWith(suffix, _list)

  return list.endsWith(suffix)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.endsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.endsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### either

> either(firstCondition: Function, secondCondition: Function): Function

```javascript
R.either(
  a => a > 10,
  a => a % 2 === 0
)(15) //=> true
```

<details>

<summary>
R.either tests
</summary>

```javascript
import { either } from './either'

test('with multiple inputs', () => {
  const between = function(a, b, c){ return a < b && b < c }
  const total20 = function(a, b, c){ return a + b + c === 20 }
  const fn = either(between, total20)
  expect(fn(7, 8, 5)).toBeTruthy()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function(){ return true }
  const Z = function(){ effect = 'Z got evaluated' }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTruthy()
})

test('2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTruthy()
})

```

</details>

<details>

<summary>
R.either source
</summary>

```javascript
export function either(f, g){
  if (arguments.length === 1) return _g => either(f, _g)

  return (...input) => f(...input) || g(...input)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.either(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A)(15)%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### equals

> equals(a: any, b: any): boolean

It returns equality match between `a` and `b`.

It doesn't handle cyclical data structures.

```javascript
R.equals(
  [1, {a:2}, [{b:3}]],
  [1, {a:2}, [{b:3}]]
) // => true
```

<details>

<summary>
R.equals tests
</summary>

```javascript
import { equals } from './equals'

test('', () => {
  const result = equals(
    [ 1, { a : 1 }, [ { b : 3 } ] ],
    [ 1, { a : 2 }, [ { b : 3 } ] ]
  )

  expect(result).toBeFalsy()
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        a : 1,
        b : 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a : 2,
        b : 3,
      },
      {
        b : 3,
        a : 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a : 2,
        b : 3,
      },
      {
        a : 3,
        b : 3,
      }
    )
  ).toEqual(false)

  expect(
    equals(
      {
        a : 2,
        b : 3,
        c : 1,
      },
      {
        a : 2,
        b : 3,
      }
    )
  ).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTruthy()
  expect(equals([ true, false ], [ true, true ])).toBeFalsy()
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
  expect(equals(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalsy()

  expect(equals(undefined, undefined)).toBeTruthy()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTruthy()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalsy()

  expect(equals(1, 1)).toBeTruthy()

  expect(equals(1, '1')).toBeFalsy()

  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 2,
        a : 1,
      }
    )
  ).toBeTruthy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        a : 1,
        b : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : false,
      },
      {
        a : 1,
        b : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 2,
        a : 1,
        c : 3,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
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
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 3,
        a : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })
  ).toBeTruthy()

  expect(
    equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })
  ).toBeFalsy()

  expect(equals({ a : {} }, { a : {} })).toBeTruthy()

  expect(equals('', '')).toBeTruthy()

  expect(equals('foo', 'foo')).toBeTruthy()

  expect(equals('foo', 'bar')).toBeFalsy()

  expect(equals(0, false)).toBeFalsy()

  expect(equals(/\s/g, null)).toBeFalsy()

  expect(equals(null, null)).toBeTruthy()

  expect(equals(false)(null)).toBeFalsy()
})

```

</details>

<details>

<summary>
R.equals source
</summary>

```javascript
import { type } from './type'

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  if (a === b){
    return true
  }

  const aType = type(a)

  if (aType !== type(b)){
    return false
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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### F

`R.F() // => false`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/F.js)

---
#### filter

> filter(filterFn: Function, x: Array|Object): Array|Object

It filters `x` iterable over boolean returning `filterFn`.

```javascript
const filterFn = a => a % 2 === 0

const result = R.filter(filterFn, [1, 2, 3, 4])
// => [2, 4]
```

<details>

<summary>
R.filter tests
</summary>

```javascript
import { filter } from './filter'
import { compose } from './compose'
import { add } from './add'
import { map } from './map'
import { equals } from './equals'
import { T } from './T'

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with compose', () => {
  const result = compose(
    filter(equals(2)),
    map(add(1))
  )(sampleObject)

  expect(result).toEqual({ a : 2 })
})

test('bad case - undefined', () => {
  expect(filter(T)(undefined)).toEqual([])
})

test('with object it passes property as second argument', () => {
  filter((val, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

test('pass input object as third argument', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a : 1 })
})

test('with array', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('pass index as second argument', () => {
  let counter = 0
  filter(
    (x, i) => {
      expect(i).toBe(counter)
      counter++
    },
    [ 10, 20, 30 ]
  )
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

<summary>
R.filter source
</summary>

```javascript
function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(obj[ prop ], prop, obj)){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(fn, list){
  if (arguments.length === 1) return _list => filter(fn, _list)

  if (list === undefined){
    return []
  }

  if (!Array.isArray(list)){
    return filterObject(fn, list)
  }

  let index = -1
  let resIndex = 0
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]

    if (fn(value, index)){
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}

```

</details>

The method works with objects as well.

Note that unlike Ramda's `filter`, here object keys are passed as second argument to `filterFn`.

```
const result = R.filter((val, prop)=>{
  return prop === 'a' || val === 2
}, {a: 1, b: 2, c: 3})

// => {a: 1, b: 2}
```

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A%0Aconst%20result%20%3D%20R.filter(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### find

> find(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the first element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.find(findFn, arr)
// => {foo: 1}
```

<details>

<summary>
R.find tests
</summary>

```javascript
import { find } from './find'
import { propEq } from './propEq'

test('', () => {
  expect(
    find(propEq('a', 2), [ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual({ a : 2 })
})

test('with curry', () => {
  expect(
    find(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.find source
</summary>

```javascript
export function find(fn, list){
  if (arguments.length === 1) return _list => find(fn, _list)

  return list.find(fn)
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findIndex

> findIndex(findFn: Function, arr: T[]): number

It returns `-1` or the index of the first element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(findFn, arr)
// => 1
```

<details>

<summary>
R.findIndex tests
</summary>

```javascript
import { findIndex } from './findIndex'
import { propEq } from './propEq'

test('', () => {
  expect(
    findIndex(propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual(1)

  expect(
    findIndex(propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual(0)

  expect(
    findIndex(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual(-1)
})

test('pass index as second argument', () => {
  findIndex(
    (x, i) => {
      expect(typeof x).toBe('number')
      expect(typeof i).toBe('number')
    }
  )([ 10, 12, 15 ])
})

```

</details>

<details>

<summary>
R.findIndex source
</summary>

```javascript
export function findIndex(fn, list){
  if (arguments.length === 1) return _list => findIndex(fn, _list)

  const len = list.length
  let index = -1

  while (++index < len){
    if (fn(list[ index ], index)){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### flatten

> flatten(arr: any[]): any[]

```javascript
R.flatten([ 1, [ 2, [ 3 ] ] ])
// => [ 1, 2, 3 ]
```

<details>

<summary>
R.flatten tests
</summary>

```javascript
import { flatten } from './flatten'

test('', () => {
  expect(flatten([ 1, 2, 3, [ [ [ [ [ 4 ] ] ] ] ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(
    flatten([ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ])
  ).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ])
})

```

</details>

<details>

<summary>
R.flatten source
</summary>

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%201%2C%20%5B%202%2C%20%5B%203%20%5D%20%5D%20%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%20%5D">Try in REPL</a>

---
#### flip

> flip(fn: Function): Function

It returns function which calls `fn` with exchanged first and second argument.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = subtractFlip(1,7)
// => 6
```

<details>

<summary>
R.flip tests
</summary>

```javascript
import { flip } from './flip'
import { subtract } from './subtract'

test('flip', () => {
  const fn = flip(subtract)

  expect(fn(1)(7)).toEqual(6)
  expect(fn(1, 7)).toEqual(6)
  expect(fn(1, 7, 9)).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.flip source
</summary>

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

<a href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20subtractFlip(1%2C7)%0A%2F%2F%20%3D%3E%206">Try in REPL</a>

---
#### forEach

> forEach(fn: Function, arr: Array): Array

It applies function `fn` over all members of array `arr` and returns `arr`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

console.log(sideEffect) //=> {foo1 : 1, foo2 : 2}
console.log(result) //=> [1, 2]
```

<details>

<summary>
R.forEach tests
</summary>

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
  const getLength = x => Object.keys(x).length
  forEach(
    (val, prop, inputObj) =>
      result[ prop ] = `${ prop }::${ type(val) }::${ getLength(inputObj) }`
  )(obj)

  const expected = {
    a : 'a::Number::4',
    b : 'b::Array::4',
    c : 'c::Object::4',
    f : 'f::String::4',
  }

  expect(result).toEqual(expected)
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

<summary>
R.forEach source
</summary>

```javascript
import { map } from './map'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  map(fn, list)

  return list
}

```

</details>

Note, that unlike `Ramda`'s **forEach**, Rambda's one doesn't dispatch to `forEach` method of `arr` if `arr` has such method.

<a href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0Aconsole.log(sideEffect)%20%2F%2F%3D%3E%20%7Bfoo1%20%3A%201%2C%20foo2%20%3A%202%7D%0Aconsole.log(result)%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### fromPairs

> fromPairs(list: any[]): object

It transforms a list to an object.

```javascript
const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(list)
// expected === result
```

<details>

<summary>
R.fromPairs tests
</summary>

```javascript
import { fromPairs } from './fromPairs'

const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

test('', () => {
  expect(fromPairs(list)).toEqual(expected)
})

```

</details>

<details>

<summary>
R.fromPairs source
</summary>

```javascript
export function fromPairs(list){
  const toReturn = {}
  list.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### groupBy

> groupBy(fn: Function, arr: Array): Object

It groups array `arr` by provided selector function `fn`.

```
R.groupBy(
  x => x.length,
  [ 'a', 'b', 'aa', 'bb' ]
)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

---
#### groupWith

> groupWith(fn: Function, arr: Array): Object

It creates a groups of array members defined by equality function `fn`.

```
const list = [ 4, 3, 6, 2, 2, 1 ]
const result = R.groupWith(
  (a,b) => a - b === 0,
  list
)
const expected = [
  [ 4, 3 ],
  [ 6 ],
  [ 2 ],
  [ 2, 1 ],
]
// result === expected
```

---
#### has

> has(prop: string, obj: Object): boolean

- It returns `true` if `obj` has property `prop`.

```javascript
R.has('a', {a: 1}) // => true
R.has('b', {a: 1}) // => false
```

<details>

<summary>
R.has tests
</summary>

```javascript
import { has } from './has'

test('has', () => {
  expect(has('a')({ a : 1 })).toBeTruthy()
  expect(has('b', { a : 1 })).toBeFalsy()
})

```

</details>

<details>

<summary>
R.has source
</summary>

```javascript
export function has(prop, obj){
  if (arguments.length === 1) return _obj => has(prop, _obj)

  return obj[ prop ] !== undefined
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.has('a'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20true%0AR.has('b'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### head

> head(arrOrStr: T[]|string): T|string

It returns the first element of `arrOrStr`.

```javascript
R.head([1, 2, 3]) // => 1
R.head('foo') // => 'f'
```

<details>

<summary>
R.head tests
</summary>

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

<summary>
R.head source
</summary>

```javascript
export function head(list){
  if (typeof list === 'string') return list[ 0 ] || ''

  return list[ 0 ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.head(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%201%0AR.head('foo')%20%2F%2F%20%3D%3E%20'f'">Try in REPL</a>

---
#### identical

> identical(a: any, b: any): boolean

Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. NaN is identical to NaN; 0 and -0 are not identical.

```javascript
const o = {};
R.identical(o, o); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

<details>

<summary>
R.identical tests
</summary>

```javascript
import { identical } from './identical'
import { _isInteger } from './internal/_isInteger'
import { _objectIs } from './internal/_objectIs'
import { F } from './F'
import { T } from './T'

test('small', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('is integer internal', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('object is internal', () => {
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

<details>

<summary>
R.identical source
</summary>

```javascript
import _objectIs from './internal/_objectIs'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return _objectIs(a, b)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20o%20%3D%20%7B%7D%3B%0AR.identical(o%2C%20o)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### identity

> identity(x: T): T

It just passes back the supplied arguments.

```javascript
R.identity(7) // => 7
```

<details>

<summary>
R.identity tests
</summary>

```javascript
import { identity } from './identity'

test('', () => {
  expect(identity(7)).toEqual(7)
})

```

</details>

<details>

<summary>
R.identity source
</summary>

```javascript
export function identity(x){
  return x
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### ifElse

> ifElse(condition: Function|boolean, ifFn: Function, elseFn: Function): Function

It returns function, which expect `input` as argument and returns `finalResult`.

When this function is called, a value `answer` is generated as a result of `condition(input)`.

If `answer` is `true`, then `finalResult` is equal to `ifFn(input)`.
If `answer` is `false`, then `finalResult` is equal to `elseFn(input)`.

```javascript
const fn = R.ifElse(
 x => x > 10,
 x => x*2,
 x => x*10
)

const result = fn(8)
// => 80
```

<details>

<summary>
R.ifElse tests
</summary>

```javascript
import { has } from './has'
import { prop } from './prop'
import { always } from './always'
import { ifElse } from './ifElse'

const condition = has('foo')
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(false, always(true), always(false))

  expect(fn()).toEqual(false)
})

test('curry (x)(y,z)', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('curry (x)(y)(z)', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

```

</details>

<details>

<summary>
R.ifElse source
</summary>

```javascript
export function ifElse(condition, onTrue, onFalse){
  if (onTrue === undefined){
    return (_onTrue, _onFalse) => ifElse(condition, _onTrue, _onFalse)
  } else if (onFalse === undefined){
    return _onFalse => ifElse(condition, onTrue, _onFalse)
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input)

    if (conditionResult === true){
      return onTrue(input)
    }

    return onFalse(input)
  }
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%20%3E%2010%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20fn(8)%0A%2F%2F%20%3D%3E%2080">Try in REPL</a>

---
#### inc

> inc(x: number): number

It increments a number.

```
R.inc(1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/inc.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### includes

> includes(valueToFind: T|string, input: T[]|string): boolean

If `input` is string, then this method work as native `includes`.
If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
R.includes('oo', 'foo') // => true
R.includes({a: 1}, [{a: 1}]) // => true
```

<details>

<summary>
R.includes tests
</summary>

```javascript
import { includes } from './includes'
import R from 'ramda'

test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTruthy()
  expect(R.includes('less')(str)).toBeTruthy()
  expect(includes('never', str)).toBeFalsy()
  expect(R.includes('never', str)).toBeFalsy()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTruthy()
  expect(R.includes(2)(arr)).toBeTruthy()

  expect(includes(4, arr)).toBeFalsy()
  expect(R.includes(4, arr)).toBeFalsy()
})

test('return false if input is falsy', () => {
  expect(includes(2, null)).toBeFalsy()
  expect(() => R.includes(2, null)).toThrow()
  expect(includes(4, undefined)).toBeFalsy()
  expect(() => R.includes(4, undefined)).toThrow()
})

```

</details>

<details>

<summary>
R.includes source
</summary>

```javascript
import { equals } from './equals'

export function includes(target, list){
  if (arguments.length === 1) return _input => includes(target, _input)

  if (typeof list === 'string'){
    return list.includes(target)
  }
  if (!Array.isArray(list)) return false

  let index = -1

  while (++index < list.length){
    if (equals(list[ index ], target)){
      return true
    }
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.includes('oo'%2C%20'foo')%20%2F%2F%20%3D%3E%20true%0AR.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### indexBy

> indexBy(fn: Function, arr: T[]): Object

It indexes array `arr` as an object with provided selector function `fn`.

```javascript
R.indexBy(
  x => x.id,
  [ {id: 1}, {id: 2} ]
)
// => { 1: {id: 1}, 2: {id: 2} }
```

<details>

<summary>
R.indexBy tests
</summary>

```javascript
import { indexBy } from './indexBy'
import { prop } from './prop'

test('indexBy', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]

  expect(indexBy(prop('id'))(list)).toEqual({
    1  : { id : 1 },
    2  : { id : 2 },
    10 : { id : 10 },
    a  : { id : 'a' },
  })
})

```

</details>

<details>

<summary>
R.indexBy source
</summary>

```javascript
export function indexBy(fn, list){
  if (arguments.length === 1) return _list => indexBy(fn, _list)

  const result = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    result[ fn(item) ] = item
  }

  return result
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20%5B%20%7Bid%3A%201%7D%2C%20%7Bid%3A%202%7D%20%5D%0A)%0A%2F%2F%20%3D%3E%20%7B%201%3A%20%7Bid%3A%201%7D%2C%202%3A%20%7Bid%3A%202%7D%20%7D">Try in REPL</a>

---
#### indexOf

> indexOf(valueToFind: any, arr: T[]): number

It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.

```javascript
R.indexOf(1, [1, 2]) // => 0
R.indexOf(0, [1, 2]) // => -1
```

<details>

<summary>
R.indexOf tests
</summary>

```javascript
import { indexOf } from './indexOf'

test('indexOf', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})

```

</details>

<details>

<summary>
R.indexOf source
</summary>

```javascript
export function indexOf(target, list){
  if (arguments.length === 1) return _list => indexOf(target, _list)

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === target){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexOf(1%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%200%0AR.indexOf(0%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### init

> init(arrOrStr: T[]|string): T[]|string

- It returns all but the last element of `arrOrStr`.

```javascript
R.init([1, 2, 3])  // => [1, 2]
R.init('foo')  // => 'fo'
```

<details>

<summary>
R.init tests
</summary>

```javascript
import { compose } from './compose'
import { tail } from './tail'
import { init } from './init'
import { flatten } from './flatten'

test('init', () => {
  expect(
    compose(
      tail,
      init,
      flatten
    )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])
  ).toEqual([ 2, 3 ])

  expect(init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toEqual([ 1 ])
  expect(init([ 1 ])).toEqual([])
  expect(init([])).toEqual([])

  expect(init([])).toEqual([])

  expect(init([ 1 ])).toEqual([])

  expect(init('foo')).toEqual('fo')

  expect(init('f')).toEqual('')

  expect(init('')).toEqual('')
})

```

</details>

<details>

<summary>
R.init source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function init(list){
  if (typeof list === 'string') return list.slice(0, -1)

  return list.length ? baseSlice(list, 0, -1) : []
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.init(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D%0AR.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### is

> is(xPrototype: any, x: any): boolean

It returns `true` is `x` is instance of `xPrototype`.

```javascript
R.is(String, 'foo')  // => true
R.is(Array, 1)  // => false
```

<details>

<summary>
R.is tests
</summary>

```javascript
import { is } from './is'

test('works with built-in types', () => {
  expect(is(Array, undefined)).toBeFalsy()
  expect(is(Array)([])).toBeTruthy()
  expect(is(Boolean, new Boolean(false))).toBeTruthy()
  expect(is(Date, new Date())).toBeTruthy()
  expect(is(Function, () => {})).toBeTruthy()
  expect(is(Number, new Number(0))).toBeTruthy()
  expect(is(Object, {})).toBeTruthy()
  expect(is(RegExp, /(?:)/)).toBeTruthy()
  expect(is(String, new String(''))).toBeTruthy()
})

test('works with user-defined types', () => {
  function Foo(){}
  function Bar(){}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(is(Foo, foo)).toBeTruthy()
  expect(is(Bar, bar)).toBeTruthy()
  expect(is(Foo, bar)).toBeTruthy()
  expect(is(Bar, foo)).toBeFalsy()
})

test('does not coerce', () => {
  expect(is(Boolean, 1)).toBeFalsy()
  expect(is(Number, '1')).toBeFalsy()
  expect(is(Number, false)).toBeFalsy()
})

test('recognizes primitives as their object equivalents', () => {
  expect(is(Boolean, false)).toBeTruthy()
  expect(is(Number, 0)).toBeTruthy()
  expect(is(String, '')).toBeTruthy()
})

test('does not consider primitives to be instances of Object', () => {
  expect(is(Object, false)).toBeFalsy()
  expect(is(Object, 0)).toBeFalsy()
  expect(is(Object, '')).toBeFalsy()
})

```

</details>

<details>

<summary>
R.is source
</summary>

```javascript
export function is(ctor, val){
  if (arguments.length === 1) return _val => is(ctor, _val)

  return (
    val != null && val.constructor === ctor ||
    val instanceof ctor
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.is(String%2C%20'foo')%20%20%2F%2F%20%3D%3E%20true%0AR.is(Array%2C%201)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isNil

> isNil(x: any): boolean

It returns `true` is `x` is either `null` or `undefined`.

```javascript
R.isNil(null)  // => true
R.isNil(1)  // => false
```

<details>

<summary>
R.isNil tests
</summary>

```javascript
import { isNil } from './isNil'

test('', () => {
  expect(isNil(null)).toBeTruthy()

  expect(isNil(undefined)).toBeTruthy()

  expect(isNil([])).toBeFalsy()
})

```

</details>

<details>

<summary>
R.isNil source
</summary>

```javascript
export function isNil(x){
  return x === undefined || x === null
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isNil(null)%20%20%2F%2F%20%3D%3E%20true%0AR.isNil(1)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isEmpty

> isEmpty(x: any): boolean

It returns `true` is `x` is `empty`.

```
R.isEmpty(null)  // => true
R.isEmpty(undefined)  // => true
R.isEmpty('')  // => true
R.isEmpty([])  // => true
R.isEmpty({})  // => true
```

---
#### join

> join(separator: string, arr: T[]): string

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<details>

<summary>
R.join tests
</summary>

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

<summary>
R.join source
</summary>

```javascript
export function join(separator, list){
  if (arguments.length === 1) return _list => join(separator, _list)

  return list.join(separator)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try in REPL</a>

---
#### keys

> keys(x: Object): string[]

```
R.keys({a:1, b:2})  // => ['a', 'b']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/keys.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try in REPL</a>

---
#### last

> last(arrOrStr: T[]|string): T|string

- It returns the last element of `arrOrStr`.

```javascript
R.last(['foo', 'bar', 'baz']) // => 'baz'
R.last('foo') // => 'o'
```

<details>

<summary>
R.last tests
</summary>

```javascript
import { compose } from './compose'
import { last } from './last'
import { map } from './map'

test('last', () => {
  expect(
    compose(
      last,
      map(last)
    )([ 'foo', 'bar', 'baz' ])
  ).toEqual('z')

  expect(last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
  expect(last([])).toEqual(undefined)
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})

```

</details>

<details>

<summary>
R.last source
</summary>

```javascript
export function last(list){
  if (typeof list === 'string') return list[ list.length - 1 ] || ''

  return list[ list.length - 1 ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.last(%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20'baz'%0AR.last('foo')%20%2F%2F%20%3D%3E%20'o'">Try in REPL</a>

---
#### lastIndexOf

> lastIndexOf(x: any, arr: T[]): number

It returns the last index of `x` in array `arr`.

`R.equals` is used to determine equality between `x` and members of `arr`.

Value `-1` is returned if no `x` is found in `arr`.

```javascript
R.lastIndexOf(1, [1, 2, 3, 1, 2]) // => 3
R.lastIndexOf(10, [1, 2, 3, 1, 2]) // => -1
```

<details>

<summary>
R.lastIndexOf tests
</summary>

```javascript
import { lastIndexOf } from './lastIndexOf'

test('', () => {
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

<summary>
R.lastIndexOf source
</summary>

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.lastIndexOf(1%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%203%0AR.lastIndexOf(10%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### length

> length(arrOrStr: Array|String): Number

```javascript
R.length([1, 2, 3]) // => 3
```

<details>

<summary>
R.length tests
</summary>

```javascript
import { length } from './length'

test('test', () => {
  expect(length('foo')).toEqual(3)
  expect(length([ 1, 2, 3 ])).toEqual(3)
  expect(length([])).toEqual(0)
})

```

</details>

<details>

<summary>
R.length source
</summary>

```javascript
export function length(list){
  return list.length
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.length(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%203">Try in REPL</a>

---
#### map

> map(mapFn: Function, x: Array|Object): Array|Object

It returns the result of looping through iterable `x` with `mapFn`.

The method works with objects as well.

Note that unlike Ramda's `map`, here array keys are passed as second argument to `mapFn`.

```javascript
const mapFn = x => x * 2
const resultWithArray = R.map(mapFn, [1, 2, 3])
// => [2, 4, 6]

const result = R.map((val, prop)=>{
  return `${prop}-${val}`
}, {a: 1, b: 2})
// => {a: 'a-1', b: 'b-2'}
```

<details>

<summary>
R.map tests
</summary>

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
  let counter = 0
  map(
    (x, i) => {
      expect(i).toBe(counter)
      counter++
    },
    [ 10, 20, 30 ]
  )
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
  const iterator = (val, prop, inputObject) => {
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

<summary>
R.map source
</summary>

```javascript
function mapObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    willReturn[ prop ] = fn(obj[ prop ], prop, obj)
  }

  return willReturn
}

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)

  if (list === undefined){
    return []
  }
  if (!Array.isArray(list)){
    return mapObject(fn, list)
  }

  let index = -1
  const len = list.length
  const willReturn = Array(len)

  while (++index < len){
    willReturn[ index ] = fn(list[ index ], index)
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20mapFn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20resultWithArray%20%3D%20R.map(mapFn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D%0A%0Aconst%20result%20%3D%20R.map((val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try in REPL</a>

---
#### match

> match(regExpression: Regex, str: string): string[]

```javascript
R.match(/([a-z]a)/g, 'bananas') // => ['ba', 'na', 'na']
```

<details>

<summary>
R.match tests
</summary>

```javascript
import { match } from './match'

test('', () => {
  expect(match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])

  expect(match(/a./g)('foo')).toEqual([])

  expect(() => {
    match(/a./g, null)
  }).toThrow()
})

```

</details>

<details>

<summary>
R.match source
</summary>

```javascript
export function match(pattern, str){
  if (arguments.length === 1) return _str => match(pattern, _str)

  const willReturn = str.match(pattern)

  return willReturn === null ? [] : willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%20%2F%2F%20%3D%3E%20%5B'ba'%2C%20'na'%2C%20'na'%5D">Try in REPL</a>

---
#### max

> max(x: Number|String, y: Number|String): Number|String

```javascript
R.max(5,7) // => 7
```

<details>

<summary>
R.max tests
</summary>

```javascript
import { max } from './max'

test('max', () => {
  expect(max(2, 1)).toBe(2)
})

```

</details>

<details>

<summary>
R.max source
</summary>

```javascript
export function max(a, b){
  if (arguments.length === 1) return _b => max(a, _b)

  return b > a ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### maxBy

> maxBy(fn: Function, x: Number|String, y: Number|String): Number|String

```javascript
R.maxBy(Math.abs, 5, -7) // => -7
```

<details>

<summary>
R.maxBy tests
</summary>

```javascript
import { maxBy } from './maxBy'

test('1', () => {
  expect(maxBy(Math.round, 0.66, 0.77)).toEqual(0.66)
})

test('2', () => {
  expect(maxBy(Math.round, 0.77, 0.66)).toEqual(0.77)
})

test('3', () => {
  expect(maxBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(maxBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(maxBy(x => x === 1 ? -1 : 1, 1, 0.66)).toEqual(0.66)
})

```

</details>

<details>

<summary>
R.maxBy source
</summary>

```javascript
export function maxBy(fn, a, b){
  if (arguments.length === 2){
    return _b => maxBy(fn, a, _b)
  } else if (arguments.length === 1){
    return (_a, _b) => maxBy(fn, _a, _b)
  }

  return fn(b) > fn(a) ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.maxBy(Math.abs%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try in REPL</a>

---
#### merge

> merge(a: Object, b: Object)

It returns result of `Object.assign({}, a, b)`.

```javascript
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
// => { 'foo': 7, 'bar': 1 }
```

<details>

<summary>
R.merge tests
</summary>

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

<details>

<summary>
R.merge source
</summary>

```javascript
export function merge(obj, props){
  if (arguments.length === 1) return _props => merge(obj, _props)

  return Object.assign({}, obj || {}, props || {})
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%2C%20%7B%20'foo'%3A%207%20%7D)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try in REPL</a>

---
#### min

> min(x: Number|String, y: Number|String): Number|String

```javascript
R.max(5,7) // => 5
```

<details>

<summary>
R.min tests
</summary>

```javascript
import { min } from './min'

test('', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(2)(1)).toBe(1)
})

```

</details>

<details>

<summary>
R.min source
</summary>

```javascript
export function min(a, b){
  if (arguments.length === 1) return _b => min(a, _b)

  return b < a ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%205">Try in REPL</a>

---
#### minBy

> minBy(fn: Function, x: Number|String, y: Number|String): Number|String

```javascript
R.minBy(Math.abs, -5, -7) // => -5
```

<details>

<summary>
R.minBy tests
</summary>

```javascript
import { minBy } from './minBy'

test('1', () => {
  expect(minBy(Math.round, 0.66, 0.77)).toEqual(0.66)
})

test('2', () => {
  expect(minBy(Math.round, 0.77, 0.66)).toEqual(0.77)
})

test('3', () => {
  expect(minBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(minBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(minBy(x => x === 1 ? -1 : 1, 1, 0.66)).toEqual(1)
})

```

</details>

<details>

<summary>
R.minBy source
</summary>

```javascript
export function minBy(fn, a, b){
  if (arguments.length === 2){
    return _b => minBy(fn, a, _b)
  } else if (arguments.length === 1){
    return (_a, _b) => minBy(fn, _a, _b)
  }

  return fn(b) < fn(a) ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.minBy(Math.abs%2C%20-5%2C%20-7)%20%2F%2F%20%3D%3E%20-5">Try in REPL</a>

---
#### modulo

> modulo(a: number, b: number):numberNumber

It returns the remainder of operation `a/b`.

```javascript
R.module(14, 3) // => 2
```

<details>

<summary>
R.modulo tests
</summary>

```javascript
import { modulo } from './modulo'

test('', () => {
  expect(modulo(17, 3)).toEqual(2)
  expect(modulo(15)(6)).toEqual(3)
})

```

</details>

<details>

<summary>
R.modulo source
</summary>

```javascript
export function modulo(a, b){
  if (arguments.length === 1) return _b => modulo(a, _b)

  return a % b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.module(14%2C%203)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### multiply

> multiply(a: number, b: number): number

It returns the result of operation `a*b`.

```javascript
R.multiply(4, 3) // => 12
```

<details>

<summary>
R.multiply tests
</summary>

```javascript
import { multiply } from './multiply'

test('', () => {
  expect(multiply(2, 4)).toEqual(8)
  expect(multiply(2)(4)).toEqual(8)
})

```

</details>

<details>

<summary>
R.multiply source
</summary>

```javascript
export function multiply(a, b){
  if (arguments.length === 1) return _b => multiply(a, _b)

  return a * b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(4%2C%203)%20%2F%2F%20%3D%3E%2012">Try in REPL</a>

---
#### not

> not(x: any): boolean

It returns inverted boolean version of input `x`.

```javascript
R.not(true) //=> false
R.not(false) //=> true
R.not(0) //=> true
R.not(1) //=> false
```

<details>

<summary>
R.not tests
</summary>

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

<summary>
R.not source
</summary>

```javascript
export function not(a){
  return !a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.not(true)%20%2F%2F%3D%3E%20false%0AR.not(false)%20%2F%2F%3D%3E%20true%0AR.not(0)%20%2F%2F%3D%3E%20true%0AR.not(1)%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### omit

> omit(propsToOmit: string[]|string, obj: Object): Object

It returns a partial copy of an `obj` with omitting `propsToOmit`

```javascript
R.omit('a,c,d', {a: 1, b: 2, c: 3}) // => {b: 2}
```

<details>

<summary>
R.omit tests
</summary>

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
  expect(
    omit([ 42 ], {
      a  : 1,
      42 : 2,
    })
  ).toEqual({
    42 : 2,
    a  : 1,
  })
})

test('', () => {
  expect(
    omit([ 'a', 'c' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({ b : 'bar' })
})

```

</details>

<details>

<summary>
R.omit source
</summary>

```javascript
export function omit(keys, obj){
  if (arguments.length === 1) return _obj => omit(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}

  for (const key in obj){
    if (!keysValue.includes(key)){
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.omit('a%2Cc%2Cd'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%20%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### path

> path(pathToSearch: string[]|string, obj: Object): any

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

```javascript
R.path('a.b', {a: {b: 1}}) // => 1
```

<details>

<summary>
R.path tests
</summary>

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
  expect(
    path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })
  ).toEqual('yes')
})

test('path', () => {
  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })
  ).toEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toBeUndefined()

  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })
  ).toBeUndefined()
})

```

</details>

<details>

<summary>
R.path source
</summary>

```javascript
export function path(list, obj){
  if (arguments.length === 1) return _obj => path(list, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue = typeof list === 'string' ? list.split('.') : list

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.path('a.b'%2C%20%7Ba%3A%20%7Bb%3A%201%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### pathOr

> pathOr(defaultValue: any, pathToSearch: string[]|string, obj: Object): any

`pathFound` is the result of calling `R.path(pathToSearch, obj)`.

If `pathFound` is `undefined`, `null` or `NaN`, then `defaultValue` will be returned.

`pathFound` is returned in any other case.

```javascript
R.pathOr(1, 'a.b', {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'b'], {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'c'], {a: {b: 2}}) // => 1
```

<details>

<summary>
R.pathOr tests
</summary>

```javascript
import { pathOr } from './pathOr'

test('with undefined', () => {
  const result = pathOr('foo', 'x.y', { x : { y : 1 } })

  expect(result).toEqual(1)
})

test('with null', () => {
  const result = pathOr('foo', 'x.y', null)

  expect(result).toEqual('foo')
})

test('with NaN', () => {
  const result = pathOr('foo', 'x.y', NaN)

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

<summary>
R.pathOr source
</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

export const pathOr = curry(pathOrRaw)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pathOr(1%2C%20'a.b'%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0AR.pathOr(1%2C%20%5B'a'%2C%20'b'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0AR.pathOr(1%2C%20%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### partial

> partial(fn: Function, ...inputs: any[]): Function | any

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

```
const fn = (salutation, title, firstName, lastName) => salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

const canPassAnyNumberOfArguments = partial(fn, 'Hello', 'Ms.')
const finalFn = canPassAnyNumberOfArguments('foo')

finalFn('bar') // =>  'Hello, Ms. foo bar!'
```

---
#### partialCurry

> partialCurry(fn: Function|Async, a: Object, b: Object): Function|Promise

When called with function `fn` and first set of input `a`, it will return a function.

This function will wait to be called with second set of input `b` and it will invoke `fn` with the merged object of `a` over `b`.

`fn` can be asynchronous function. In that case a `Promise` holding the result of `fn` is returned.

See the example below:

```javascript
const fn = ({a, b, c}) => {
  return (a * b) + c
}
const curried = R.partialCurry(fn, {a: 2})
const result = curried({b: 3, c: 10})
// => 16
```

<details>

<summary>
R.partialCurry tests
</summary>

```javascript
import { type } from './type'
import { partialCurry } from './partialCurry'

test('', () => {
  const fn = ({ a, b, c }) => a + b + c
  const curried = partialCurry(fn, { a : 1 })

  expect(type(curried)).toEqual('Function')
  expect(
    curried({
      b : 2,
      c : 3,
    })
  ).toEqual(6)
  expect(true).toBeTruthy()
})

test('with promise', done => {
  const delay = ({ ms, x }) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2)
      }, ms)
    })

  const curried = partialCurry(delay, { ms : 200 })

  curried({ x : 3 }).then(result => {
    expect(type(curried)).toEqual('Function')
    done()
  })
})

test('with async', async () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, ms)
    })

  const fn = async ({ a, b, c }) => {
    await delay(100)

    return a + b + c
  }

  const curried = partialCurry(fn, { a : 1 })

  const result = await curried({
    b : 2,
    c : 3,
  })

  expect(result).toEqual(6)
})

```

</details>

<details>

<summary>
R.partialCurry source
</summary>

```javascript
import { merge } from './merge'
import { type } from './type'

export function partialCurry(fn, args = {}){
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise'){
      return new Promise((resolve, reject) => {
        fn(merge(rest, args))
          .then(resolve)
          .catch(reject)
      })
    }

    return fn(merge(rest, args))
  }
}

```

</details>

- Note that `partialCurry` is method specific for **Rambda** and the method is not part of **Ramda**'s API

- You can read my argumentation for creating _partialCurry_ [here](https://selfrefactor.gitbooks.io/blog/content/argumenting-rambdas-curry.html)

<a href="https://rambda.now.sh?const%20fn%20%3D%20(%7Ba%2C%20b%2C%20c%7D)%20%3D%3E%20%7B%0A%20%20return%20(a%20*%20b)%20%2B%20c%0A%7D%0Aconst%20curried%20%3D%20R.partialCurry(fn%2C%20%7Ba%3A%202%7D)%0Aconst%20result%20%3D%20curried(%7Bb%3A%203%2C%20c%3A%2010%7D)%0A%2F%2F%20%3D%3E%2016">Try in REPL</a>

---
#### pick

> pick(propsToPick: string[], obj: Object): Object

It returns a partial copy of an `obj` containing only `propsToPick` properties.

```javascript
R.pick(['a', 'c'], {a: 1, b: 2}) // => {a: 1}
```

<details>

<summary>
R.pick tests
</summary>

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
  expect(
    pick([ 'a', 'c' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(
    pick([ 'a', 'd', 'e', 'f' ])({
      a : 'foo',
      b : 'bar',
      c : 'baz',
    })
  ).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.pick source
</summary>

```javascript
export function pick(keys, obj){
  if (arguments.length === 1) return _obj => pick(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    }
    counter++
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pick(%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Ba%3A%201%7D">Try in REPL</a>

---
#### pipe

> pipe(fn1: Function, ... , fnN: Function): any

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<details>

<summary>
R.pipe tests
</summary>

```javascript
import { pipe } from './pipe'
import { map } from './map'
import { add } from './add'
import { last } from './last'

test('pipe', () => {
  const result = pipe(
    map(add(1)),
    map(add(10)),
    last
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

```

</details>

<details>

<summary>
R.pipe source
</summary>

```javascript
import { compose } from './compose'

export function pipe(...fns){
  return compose(...fns.reverse())
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### pluck

> pluck(property: string, arr: Object[]): any[]

It returns list of the values of `property` taken from the objects in array of objects `arr`.

```javascript
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) // => [1, 2]
```

<details>

<summary>
R.pluck tests
</summary>

```javascript
import { pluck } from './pluck'

test('', () => {
  expect(pluck('a')([ { a : 1 }, { a : 2 }, { b : 1 } ])).toEqual([ 1, 2 ])
})

test('with number', () => {
  const input = [ [ 1, 2 ], [ 3, 4 ] ]

  expect(pluck(0, input)).toEqual([ 1, 3 ])
})

```

</details>

<details>

<summary>
R.pluck source
</summary>

```javascript
import { map } from './map'

export function pluck(key, list){
  if (arguments.length === 1) return _list => pluck(key, _list)

  const willReturn = []

  map(val => {
    if (val[ key ] !== undefined){
      willReturn.push(val[ key ])
    }
  }, list)

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pluck('a')(%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### prepend

> prepend(x: T, arr: T[]): T[]

It adds `x` to the start of the array `arr`.

```javascript
R.prepend('foo', ['bar', 'baz']) // => ['foo', 'bar', 'baz']
```

<details>

<summary>
R.prepend tests
</summary>

```javascript
import { prepend } from './prepend'

test('', () => {
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

<details>

<summary>
R.prepend source
</summary>

```javascript
export function prepend(el, list){
  if (arguments.length === 1) return _list => prepend(el, _list)

  if (typeof list === 'string') return `${ el }${ list }`

  const clone = [ el ].concat(list)

  return clone
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try in REPL</a>

---
#### prop

> prop(propToFind: string, obj: Object): any

It returns `undefined` or the value of property `propToFind` in `obj`

```javascript
R.prop('x', {x: 100}) // => 100
R.prop('x', {a: 1}) // => undefined
```

<details>

<summary>
R.prop tests
</summary>

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

<summary>
R.prop source
</summary>

```javascript
export function prop(key, obj){
  if (arguments.length === 1) return _obj => prop(key, _obj)

  if (!obj) return undefined

  return obj[ key ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%20%2F%2F%20%3D%3E%20100%0AR.prop('x'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20undefined">Try in REPL</a>

---
#### propEq

> propEq(propToFind: string, valueToMatch: any, obj: Object): boolean

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const propToFind = 'foo'
const valueToMatch = 0

const result = R.propEq(propToFind, valueToMatch)({foo: 0})
// => true
```

<details>

<summary>
R.propEq tests
</summary>

```javascript
import { propEq } from './propEq'

test('propEq', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTruthy()

  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalsy()

  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalsy()
})

```

</details>

<details>

<summary>
R.propEq source
</summary>

```javascript
export function propEq(key, val, obj){
  if (val === undefined){
    return (_val, _obj) => propEq(key, _val, _obj)
  } else if (obj === undefined){
    return _obj => propEq(key, val, _obj)
  }

  return obj[ key ] === val
}

```

</details>

<a href="https://rambda.now.sh?const%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%200%0A%0Aconst%20result%20%3D%20R.propEq(propToFind%2C%20valueToMatch)(%7Bfoo%3A%200%7D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### propIs

> propIs(type: any, name: string, obj: Object): boolean

It Returns `true` if the specified object property is of the given type.

```javascript
R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
R.propIs(Number, 'x', {x: 'foo'});    //=> false
R.propIs(Number, 'x', {});            //=> false
```

<details>

<summary>
R.propIs tests
</summary>

```javascript
import { propIs } from './propIs'

test('1', () => {
  expect(propIs(Number, 'value', { value : 1 })).toEqual(true)
})

test('2', () => {
  expect(propIs(String, 'value', { value : 1 })).toEqual(false)
})

test('3', () => {
  expect(propIs(String)('value')({})).toEqual(false)
})

```

</details>

<details>

<summary>
R.propIs source
</summary>

```javascript
import { is } from './is'
import { curry } from './curry.js'

export const propIs = curry(propIsFn)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.propIs(Number%2C%20'x'%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%3B%20%20%2F%2F%3D%3E%20true%0AR.propIs(Number%2C%20'x'%2C%20%7Bx%3A%20'foo'%7D)%3B%20%20%20%20%2F%2F%3D%3E%20false%0AR.propIs(Number%2C%20'x'%2C%20%7B%7D)%3B%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### propOr

> propOr(defaultValue: any, param: string, obj: Object): any

If the given, non-null object has an own property with the specified name, returns the value of that property. Otherwise returns the provided default value.

```
const theWall = { mother: 'Waters', comfortablyNumb: 'Gilmour/Waters' }
const authorOfWishYouWereHere = R.prop('wishYouWereHere')
const authorOfAtomHeartMotherWhenDefault = R.propOr('Pink Floyd', 'atomHeartMother')

authorOfWishYouWereHere(theWall)  //=> undefined
authorOfAtomHeartMotherWhenDefault(theWall) //=> 'Pink Floyd'
```

---
#### range

> range(start: number, end: number): number[]

It returns a array of numbers from `start`(inclusive) to `end`(exclusive).

```javascript
R.range(0, 3)   // => [0, 1, 2]
```

<details>

<summary>
R.range tests
</summary>

```javascript
import { range } from './range'

test('1', () => {
  expect(range(0, 10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('2', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

```

</details>

<details>

<summary>
R.range source
</summary>

```javascript
export function range(from, to){
  if (arguments.length === 1) return _to => range(from, _to)

  const len = to - from
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = from + i
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%203)%20%20%20%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%5D">Try in REPL</a>

---
#### reduce

> reduce(iteratorFn: Function, accumulator: any, array: T[]): any

```javascript
const iteratorFn = (acc, val) => acc + val
const result = R.reduce(iteratorFn, 1, [1, 2, 3])
// => 7
```

<details>

<summary>
R.reduce tests
</summary>

```javascript
import { compose } from './compose'
import { reduce } from './reduce'
import { map } from './map'
import { curry } from './curry'

test('happy', () => {
  const result = reduce((acc, val, i) => {
    expect(typeof i).toBe('number')

    return acc + val
  })(1)([ 1, 2, 3 ])

  expect(result).toEqual(7)
})

test('with compose', () => {
  const convertToString = (acc, value) => acc + value

  expect(
    compose(
      reduce(convertToString, ''),
      map(x => x + 1)
    )([ 1, 2, 3 ])
  ).toEqual('234')
})

test('with curry', () => {
  const add = curry((n, n2) => n + n2)

  expect(reduce(add, 0, [ 1, 2, 3 ])).toEqual(6)
})

```

</details>

<details>

<summary>
R.reduce source
</summary>

```javascript
import { curry } from './curry'

export const reduce = curry(reduceFn)

```

</details>

<a href="https://rambda.now.sh?const%20iteratorFn%20%3D%20(acc%2C%20val)%20%3D%3E%20acc%20%2B%20val%0Aconst%20result%20%3D%20R.reduce(iteratorFn%2C%201%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### reject

> reject(fn: Function, arr: T[]): T[]

It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `fn`.

```javascript
const fn = x => x % 2 === 1

const result = R.reject(fn, [1, 2, 3, 4])
// => [2, 4]
```

<details>

<summary>
R.reject tests
</summary>

```javascript
import { reject } from './reject'
import { compose } from './compose'
import { add } from './add'
import { map } from './map'
import { equals } from './equals'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  expect(
    reject(isOdd, {
      a : 1,
      b : 2,
      c : 3,
      d : 4,
    })
  ).toEqual({
    b : 2,
    d : 4,
  })
})

test('should work with currying', () => {
  const result = compose(
    reject(equals(2)),
    map(add(1))
  )({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(result).toEqual({
    b : 3,
    c : 4,
  })
})

test('pass index as second argument', () => {
  reject(
    (x, i) => {
      expect(typeof x).toBe('number')
      expect(typeof i).toBe('number')
    }
  )([ 10, 12, 15 ])
})

```

</details>

<details>

<summary>
R.reject source
</summary>

```javascript
import { filter } from './filter'

export function reject(fn, list){
  if (arguments.length === 1) return _list => reject(fn, _list)

  return filter((x, i) => !fn(x, i), list)
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.reject(fn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### repeat

> repeat(valueToRepeat: T, num: number): T[]

```javascript
R.repeat('foo', 2) // => ['foo', 'foo']
```

<details>

<summary>
R.repeat tests
</summary>

```javascript
import { repeat } from './repeat'

test('repeat', () => {
  expect(repeat('')(3)).toEqual([ '', '', '' ])
  expect(repeat('foo', 3)).toEqual([ 'foo', 'foo', 'foo' ])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([ {}, {}, {} ])

  expect(arr[ 0 ] === arr[ 1 ]).toBeTruthy()
})

```

</details>

<details>

<summary>
R.repeat source
</summary>

```javascript
export function repeat(val, n){
  if (arguments.length === 1) return _n => repeat(val, _n)

  const willReturn = Array(n)

  return willReturn.fill(val)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%202)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%5D">Try in REPL</a>

---
#### replace

> replace(strOrRegex: string|Regex, replacer: string, str: string): string

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
R.replace('foo', 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') // => 'bar bar'
```

<details>

<summary>
R.replace tests
</summary>

```javascript
import { replace } from './replace'

test('', () => {
  expect(replace('foo', 'yes', 'foo bar baz')).toEqual(
    'yes bar baz'
  )

  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})

```

</details>

<details>

<summary>
R.replace source
</summary>

```javascript
export function replace(pattern, replacer, str){
  if (replacer === undefined){
    return (_replacer, _str) => replace(pattern, _replacer, _str)
  } else if (str === undefined){
    return _str => replace(pattern, replacer, _str)
  }

  return str.replace(pattern, replacer)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.replace('foo'%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2F%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2Fg%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20bar'">Try in REPL</a>

---
#### reverse

> reverse(str: T[]): T[]

```javascript
const arr = [1, 2]

const result = R.reverse(arr)
// => [2, 1]
```

<details>

<summary>
R.reverse tests
</summary>

```javascript
import { reverse } from './reverse'

test('', () => {
  expect(reverse([ 1, 2, 3 ])).toEqual([ 3, 2, 1 ])
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(reverse(arr)).toEqual([ 3, 2, 1 ])

  expect(arr).toEqual([ 1, 2, 3 ])
})

```

</details>

<details>

<summary>
R.reverse source
</summary>

```javascript
export function reverse(list){
  const clone = list.concat()

  return clone.reverse()
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B1%2C%202%5D%0A%0Aconst%20result%20%3D%20R.reverse(arr)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try in REPL</a>

---
#### slice

> slice(list: T[], from: Number, to: Number)

Returns the elements of the given list or string (or object with a `slice`
method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
Dispatches to the `slice` method of the third argument, if present.

```
R.slice(1, 3, ['a', 'b', 'c', 'd'])
//=> ['b', 'c']
```

---
#### sort

> sort(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return a number type.

```javascript
const sortFn = (a, b) => a - b

const result = R.sort(sortFn, [3, 1, 2])
// => [1, 2, 3]
```

<details>

<summary>
R.sort tests
</summary>

```javascript
import { sort } from './sort'

const fn = (a, b) => a > b ? 1 : -1

test('sort', () => {
  expect(sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
})

test('it doesn\'t mutate', () => {
  const list = [ 'foo', 'bar', 'baz' ]

  expect(sort(fn, list)).toEqual([
    'bar',
    'baz',
    'foo',
  ])

  expect(list[ 0 ]).toBe('foo')
  expect(list[ 1 ]).toBe('bar')
  expect(list[ 2 ]).toBe('baz')
})

```

</details>

<details>

<summary>
R.sort source
</summary>

```javascript
export function sort(fn, list){
  if (arguments.length === 1) return _list => sort(fn, _list)

  const arrClone = list.concat()

  return arrClone.sort(fn)
}

```

</details>

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20(a%2C%20b)%20%3D%3E%20a%20-%20b%0A%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20%5B3%2C%201%2C%202%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try in REPL</a>

---
#### sortBy

> sortBy(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return value for comparison.

```javascript
const sortFn = obj => obj.foo

const result = R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])

const expectedResult = [ {foo: 0}, {foo: 1} ]
console.log(R.equals(result, expectedResult))
// => true
```

<details>

<summary>
R.sortBy tests
</summary>

```javascript
import { compose } from './compose'
import { toLower } from './toLower'
import { prop } from './prop'
import { sortBy } from './sortBy'

test('sortBy', () => {
  const sortByNameCaseInsensitive = sortBy(
    compose(
      toLower,
      prop('name')
    )
  )
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

  expect(sortByNameCaseInsensitive(people)).toEqual([
    alice,
    bob,
    clara,
  ])

  expect(
    sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])
  ).toEqual([ { a : 0 }, { a : 1 }, { a : 2 } ])

  expect(
    sortBy(val => val.a, [ { a : 1 }, { a : 1 }, { a : 1 } ])
  ).toEqual([ { a : 1 }, { a : 1 }, { a : 1 } ])

  expect(
    sortBy(val => val.a, [ { a : 3 }, { a : 2 }, { a : 1 } ])
  ).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])

  expect(
    sortBy(val => val.a, [ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])
})

```

</details>

<details>

<summary>
R.sortBy source
</summary>

```javascript
export function sortBy(fn, list){
  if (arguments.length === 1) return _list => sortBy(fn, _list)

  const arrClone = list.concat()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    if (fnA === fnB) return 0

    return fnA < fnB ? -1 : 1
  })
}

```

</details>

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20obj%20%3D%3E%20obj.foo%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20%5B%0A%20%20%7Bfoo%3A%201%7D%2C%0A%20%20%7Bfoo%3A%200%7D%0A%5D)%0A%0Aconst%20expectedResult%20%3D%20%5B%20%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%20%5D%0Aconsole.log(R.equals(result%2C%20expectedResult))%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### split

> split(separator: string, str: string): string[]

```javascript
R.split('-', 'a-b-c') // => ['a', 'b', 'c']
```

<details>

<summary>
R.split tests
</summary>

```javascript
import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toEqual([
    'a',
    'b',
    'c',
    'xyz',
    'd',
  ])
})

```

</details>

<details>

<summary>
R.split source
</summary>

```javascript
export function split(separator, str){
  if (arguments.length === 1) return _str => split(separator, _str)

  return str.split(separator)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.split('-'%2C%20'a-b-c')%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'c'%5D">Try in REPL</a>

---
#### splitEvery

> splitEvery(sliceLength: number, arrOrString: T[]|string): T[T[]]|string[]

- It splits `arrOrStr` into slices of `sliceLength`.

```javascript
R.splitEvery(2, [1, 2, 3]) // => [[1, 2], [3]]
R.splitEvery(3, 'foobar') // => ['foo', 'bar']
```

<details>

<summary>
R.splitEvery tests
</summary>

```javascript
import { splitEvery } from './splitEvery'

test('', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])
})

```

</details>

<details>

<summary>
R.splitEvery source
</summary>

```javascript
export function splitEvery(n, list){
  if (arguments.length === 1) return _list => splitEvery(n, _list)

  const numValue = n > 1 ? n : 1

  const willReturn = []
  let counter = 0

  while (counter < list.length){
    willReturn.push(list.slice(counter, counter += numValue))
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%0AR.splitEvery(3%2C%20'foobar')%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D">Try in REPL</a>

---
#### startsWith

> startsWith(x: string, str: string): boolean

```javascript
R.startsWith(
  'foo',
  'foo-bar'
) // => true

R.startsWith(
  'bar',
  'foo-bar'
) // => false
```

<details>

<summary>
R.startsWith tests
</summary>

```javascript
import { startsWith } from './startsWith'

test('true', () => {
  const result = startsWith('foo', 'foo-bar')

  expect(result).toBeTruthy()
})

test('false', () => {
  const result = startsWith('baz')('foo-bar')

  expect(result).toBeFalsy()
})

```

</details>

<details>

<summary>
R.startsWith source
</summary>

```javascript
export function startsWith(prefix, list){
  if (arguments.length === 1) return _list => startsWith(prefix, _list)

  return list.startsWith(prefix)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.startsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.startsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### subtract

> subtract(a: number, b: number): number

```javascript
R.subtract(3, 1) // => 2
```

<details>

<summary>
R.subtract tests
</summary>

```javascript
import { subtract } from './subtract'

test('', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})

```

</details>

<details>

<summary>
R.subtract source
</summary>

```javascript
export function subtract(a, b){
  if (arguments.length === 1) return _b => subtract(a, _b)

  return a - b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.subtract(3%2C%201)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### sum

> sum(listOfNumbers: number[]): number

```
R.sum([1,2,3,4,5]) // => 15
```

---
#### T

`R.T() // => true`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/T.js)

---
#### tail

> tail(arrOrStr: T[]|string): T[]|string

- It returns all but the first element of `arrOrStr`

```javascript
R.tail([1, 2, 3])  // => [2, 3]
R.tail('foo')  // => 'oo'
```

<details>

<summary>
R.tail tests
</summary>

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

<summary>
R.tail source
</summary>

```javascript
import { drop } from './drop'

export function tail(list){
  return drop(1, list)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.tail(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B2%2C%203%5D%0AR.tail('foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### take

> take(num: number, arrOrStr: T[]|string): T[]|string

- It returns the first `num` elements of `arrOrStr`.

```javascript
R.take(1, ['foo', 'bar']) // => ['foo']
R.take(2, 'foo') // => 'fo'
```

<details>

<summary>
R.take tests
</summary>

```javascript
import { take } from './take'

test('take', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toEqual([ 'foo' ])

  expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(3)('rambda')).toEqual('ram')
})

```

</details>

<details>

<summary>
R.take source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function take(n, list){
  if (arguments.length === 1) return _list => take(n, _list)

  if (typeof list === 'string') return list.slice(0, n)

  return baseSlice(list, 0, n)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.take(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.take(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### takeLast

> takeLast(num: number, arrOrStr: T[]|string): T[]|string

- It returns the last `num` elements of `arrOrStr`.

```javascript
R.takeLast(1, ['foo', 'bar']) // => ['bar']
R.takeLast(2, 'foo') // => 'oo'
```

<details>

<summary>
R.takeLast tests
</summary>

```javascript
import { takeLast } from './takeLast'

test('with arrays', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([
    'bar',
    'baz',
  ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})

```

</details>

<details>

<summary>
R.takeLast source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function takeLast(n, list){
  if (arguments.length === 1) return _list => takeLast(n, _list)

  const len = list.length

  let numValue = n > len ? len : n

  if (typeof list === 'string') return list.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(list, numValue, len)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.takeLast(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%5D%0AR.takeLast(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### tap

> tap(fn: Function, input: T): T

- It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.

```javascript
let a = 1
const sayX = x => (a = x)

const result = R.tap(sayX, 100)
// both `a` and `result` are `100`
```

<details>

<summary>
R.tap tests
</summary>

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

<summary>
R.tap source
</summary>

```javascript
export function tap(fn, x){
  if (arguments.length === 1) return _x => tap(fn, _x)

  fn(x)

  return x
}

```

</details>

<a href="https://rambda.now.sh?let%20a%20%3D%201%0Aconst%20sayX%20%3D%20x%20%3D%3E%20(a%20%3D%20x)%0A%0Aconst%20result%20%3D%20R.tap(sayX%2C%20100)%0A%2F%2F%20both%20%60a%60%20and%20%60result%60%20are%20%60100%60">Try in REPL</a>

---
#### test

> test(regExpression: Regex, str: string): boolean

- Determines whether `str` matches `regExpression`

```
R.test(/^f/, 'foo')
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/test.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### times

> times(fn: Function, n: number): T[]

It returns the result of applying function `fn` over members of range array.
The range array includes numbers between `0` and `n`(exclusive).

```javascript
R.times(R.identity, 5)
//=> [0, 1, 2, 3, 4]
```

<details>

<summary>
R.times tests
</summary>

```javascript
import { times } from './times'
import { identity } from './identity'

test('', () => {
  const result = times(identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

```

</details>

<details>

<summary>
R.times source
</summary>

```javascript
import { map } from './map'
import { range } from './range'

export function times(fn, n){
  if (arguments.length === 1) return _n => times(fn, _n)

  return map(fn, range(0, n))
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.times(R.identity%2C%205)%0A%2F%2F%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try in REPL</a>

---
#### toLower

> toLower(str: string): string

```javascript
R.toLower('FOO') // => 'foo'
```

<details>

<summary>
R.toLower tests
</summary>

```javascript
import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})

```

</details>

<details>

<summary>
R.toLower source
</summary>

```javascript
export function toLower(str){
  return str.toLowerCase()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### toPairs

> toPairs(obj: object): any[]

It transforms an object to a list.

```javascript
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// expected === result
```

<details>

<summary>
R.toPairs tests
</summary>

```javascript
import { toPairs } from './toPairs'

const obj = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

test('', () => {
  expect(toPairs(obj)).toEqual(expected)
})

```

</details>

<details>

<summary>
R.toPairs source
</summary>

```javascript
export function toPairs(obj){
  return Object.entries(obj)
}

```

</details>

<a href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### toString

> toString(x: any): string

```javascript
R.toString([1, 2]) // => '1,2'
```

<details>

<summary>
R.toString tests
</summary>

```javascript
import { toString } from './toString'

test('', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})

```

</details>

<details>

<summary>
R.toString source
</summary>

```javascript
export function toString(val){
  return val.toString()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20'1%2C2'">Try in REPL</a>

---
#### toUpper

> toUpper(str: string): string

```javascript
R.toUpper('foo') // => 'FOO'
```

<details>

<summary>
R.toUpper tests
</summary>

```javascript
import { compose } from './compose'
import { join } from './join'
import { map } from './map'
import { split } from './split'
import { toUpper } from './toUpper'

test('toUpper', () => {
  expect(
    compose(
      join(''),
      map(toUpper),
      split('')
    )('foo|bar|baz')
  ).toEqual('FOO|BAR|BAZ')
})

```

</details>

<details>

<summary>
R.toUpper source
</summary>

```javascript
export function toUpper(str){
  return str.toUpperCase()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%20%2F%2F%20%3D%3E%20'FOO'">Try in REPL</a>

---
#### trim

> trim(str: string): string

```javascript
R.trim('  foo  ') // => 'foo'
```

<details>

<summary>
R.trim tests
</summary>

```javascript
import { trim } from './trim'
test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})

```

</details>

<details>

<summary>
R.trim source
</summary>

```javascript
export function trim(str){
  return str.trim()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### type

> type(a: any): string

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

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

<details>

<summary>
R.type tests
</summary>

```javascript
import { type } from './type'
import { type as ramdaType } from 'ramda'

test('with simple promise', () => {
  expect(type(Promise.resolve(1))).toBe('Promise')
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
  const fn2 = function(){}

  function fn3(){}

  [ () => {}, fn1, fn2, fn3 ].map(val => {
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

<summary>
R.type source
</summary>

```javascript
export function type(val){
  const typeOf = typeof val

  if (val === null){
    return 'Null'
  } else if (val === undefined){
    return 'Undefined'
  } else if (typeOf === 'boolean'){
    return 'Boolean'
  } else if (typeOf === 'number'){
    return Number.isNaN(val) ? 'NaN' : 'Number'
  } else if (typeOf === 'string'){
    return 'String'
  } else if (Array.isArray(val)){
    return 'Array'
  } else if (val instanceof RegExp){
    return 'RegExp'
  }

  const asStr = val.toString()

  if (asStr.startsWith('async')){
    return 'Async'
  } else if (asStr === '[object Promise]'){
    return 'Promise'
  } else if (typeOf === 'function'){
    return 'Function'
  }

  return 'Object'
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try in REPL</a>

---
#### uniq

> uniq(arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr`.

```javascript
R.uniq([1, 1, 2, 1])
// => [1, 2]
```

<details>

<summary>
R.uniq tests
</summary>

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

<summary>
R.uniq source
</summary>

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.uniq(%5B1%2C%201%2C%202%2C%201%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### uniqWith

> uniqWith(fn: Function, arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr` according to boolean returning function `fn`.

```javascript
const arr = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
  {id: 3, title:'foo'},
  {id: 4, title:'bar'},
]

const expectedResult = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
]

const fn = (x,y) => x.title === y.title

const result = R.uniqWith(fn, arr)

console.log(R.equals(result, expectedResult)) // => true
```

<details>

<summary>
R.uniqWith tests
</summary>

```javascript
import { uniqWith } from './uniqWith'

test('', () => {
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

<summary>
R.uniqWith source
</summary>

```javascript
import { any } from './any'

export function uniqWith(fn, list){
  if (arguments.length === 1) return _list => uniqWith(fn, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]
    const flag = any(
      willReturnInstance => fn(value, willReturnInstance),
      willReturn
    )

    if (!flag){
      willReturn.push(value)
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expectedResult%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20fn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(fn%2C%20arr)%0A%0Aconsole.log(R.equals(result%2C%20expectedResult))%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### update

> update(i: number, replaceValue: T, arr: T[]): T[]

It returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`.

```javascript
R.update(0, 'foo', ['bar', 'baz'])
// => ['foo', baz]
```

<details>

<summary>
R.update tests
</summary>

```javascript
import { update } from './update'

test('update', () => {
  expect(update(1)(0)([ 1, 2, 3 ])).toEqual([ 1, 0, 3 ])
  expect(update(1, 11, [ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
})

```

</details>

<details>

<summary>
R.update source
</summary>

```javascript
export function update(idx, val, list){
  if (val === undefined){
    return (_val, _list) => update(idx, _val, _list)
  } else if (list === undefined){
    return _list => update(idx, val, _list)
  }

  const arrClone = list.concat()

  return arrClone.fill(val, idx, idx + 1)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.update(0%2C%20'foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20baz%5D">Try in REPL</a>

---
#### values

> values(obj: Object): Array

It returns array with of all values in `obj`.

```javascript
R.values({a: 1, b: 2})
// => [1, 2]
```

<details>

<summary>
R.values tests
</summary>

```javascript
import { values } from './values'

test('values', () => {
  expect(
    values({
      a : 1,
      b : 2,
      c : 3,
    })
  ).toEqual([ 1, 2, 3 ])
})

```

</details>

<details>

<summary>
R.values source
</summary>

```javascript
export function values(obj){
  return Object.values(obj)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.values(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### without

> without(a: T[], b: T[]): T[]

It will return a new array based on `b` array.

This array contains all members of `b` array, that doesn't exist in `a` array.

Method `R.equals` is used to determine the existance of `b` members in `a` array.

```javascript
R.without([1, 2], [1, 2, 3, 4])
// => [3, 4]
```

<details>

<summary>
R.without tests
</summary>

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

<summary>
R.without source
</summary>

```javascript
import { includes } from './includes'
import { reduce } from './reduce'

export function without(left, right){
  if (right === undefined){
    return _right => without(left, _right)
  }

  return reduce(
    (accum, item) =>
      includes(item, left) ? accum : accum.concat(item),
    [],
    right
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.without(%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try in REPL</a>

---
#### zip

> zip(a: K[], b: V[]): Array

It will return a new array containing tuples of equally positions items from both lists. The returned list will be truncated to match the length of the shortest supplied list.

```javascript
R.zip([1, 2], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([1, 2, 3, 4], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<details>

<summary>
R.zip tests
</summary>

```javascript
import { zip } from './zip'

const array1 = [ 1, 2, 3 ]
const array2 = [ 'A', 'B', 'C' ]

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [ [ 1, 'A' ], [ 2, 'B' ], [ 3, 'C' ] ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [ [ 1, 'A' ], [ 2, 'B' ] ]
  const actualA = zip([ 1, 2 ], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [ [ 1, 'A' ], [ 2, 'B' ] ]
  const actualB = zip(array1, [ 'A', 'B' ])
  expect(actualB).toEqual(expectedB)
})

```

</details>

<details>

<summary>
R.zip source
</summary>

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

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zip(%5B1%2C%202%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try in REPL</a>

---
#### zipObj

> zipObj(a: K[], b: V[]): Object

It will return a new object with keys of `a` array and values of `b` array.

```javascript
R.zipObj(['a', 'b', 'c'], [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(['a', 'b', 'c'], [1, 2])
//=> {a: 1, b: 2}
```

<details>

<summary>
R.zipObj tests
</summary>

```javascript
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

```

</details>

<details>

<summary>
R.zipObj source
</summary>

```javascript
export function zipObj(keys, values){
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder)

  return keys.reduce((prev, xInstance, i) => {
    prev[ xInstance ] = values[ i ]

    return prev
  }, {})
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try in REPL</a>

---
#### ---

## Benchmark

Results of running `yarn benchmarks`:

```
> add.js
Rambda.add x 72,564,688 ops/sec ±4.81% (73 runs sampled)
Ramda.add x 56,396,341 ops/sec ±4.23% (82 runs sampled)
Lodash.add x 35,946,727 ops/sec ±1.50% (87 runs sampled)

> adjust.js
Rambda.adjust x 7,035,757 ops/sec ±0.96% (92 runs sampled)
Ramda.adjust x 11,520,117 ops/sec ±1.33% (91 runs sampled)

> any.js
Rambda.any x 57,187,584 ops/sec ±3.01% (85 runs sampled)
Ramda.any x 10,380,996 ops/sec ±3.85% (82 runs sampled)
Lodash.some x 36,716,897 ops/sec ±3.95% (77 runs sampled)

> append.js
Rambda.append x 3,499,777 ops/sec ±3.18% (82 runs sampled)
Ramda.append x 2,964,099 ops/sec ±0.87% (93 runs sampled)

> assoc.js
Rambda.assoc x 4,002,722 ops/sec ±1.03% (91 runs sampled)
Ramda.assoc x 6,014,560 ops/sec ±1.20% (92 runs sampled)
Lodash.set x 14,148,999 ops/sec ±1.23% (88 runs sampled)

> clone.js
Rambda.clone x 495,003 ops/sec ±22.29% (58 runs sampled)
Ramda.clone x 60,313 ops/sec ±14.66% (54 runs sampled)
Lodash.cloneDeep x 370,928 ops/sec ±3.22% (82 runs sampled)

> compose.js
Rambda.compose x 6,565,224 ops/sec ±6.65% (74 runs sampled)
Ramda.compose x 482,147 ops/sec ±7.44% (71 runs sampled)
Lodash.flowRight x 1,907,860 ops/sec ±4.24% (80 runs sampled)

> contains.js
Rambda.contains x 38,642,695 ops/sec ±6.33% (67 runs sampled)
Ramda.contains x 9,979,350 ops/sec ±24.61% (47 runs sampled)
Lodash.includes x 30,027,499 ops/sec ±1.73% (86 runs sampled)

> defaultTo.js
Rambda.defaultTo simple x 51,090,366 ops/sec ±2.84% (81 runs sampled)
Ramda.defaultTo x 29,850,625 ops/sec ±4.67% (74 runs sampled)
Rambda.defaultTo (when several arguments) x 10,753,835 ops/sec ±10.84% (58 runs sampled)

> drop.js
Rambda.drop x 7,355,396 ops/sec ±12.03% (62 runs sampled)
Ramda.drop x 1,278,065 ops/sec ±5.91% (74 runs sampled)

> dropLast.js
Rambda.dropLast x 7,620,630 ops/sec ±8.58% (64 runs sampled)
Ramda.dropLast x 1,131,885 ops/sec ±4.18% (80 runs sampled)

> endsWith.js
Rambda.endsWith x 28,003,665 ops/sec ±5.59% (77 runs sampled)
Ramda.endsWith x 656,403 ops/sec ±6.09% (81 runs sampled)

> equals.js
Rambda.equals x 1,085,925 ops/sec ±5.85% (75 runs sampled)
Ramda.equals x 123,968 ops/sec ±5.05% (80 runs sampled)
Lodash.isEqual x 356,517 ops/sec ±5.28% (81 runs sampled)

> filter.js
Rambda.filter x 15,054,483 ops/sec ±5.32% (74 runs sampled)
Ramda.filter x 4,411,613 ops/sec ±5.60% (76 runs sampled)
Lodash.filter x 12,980,591 ops/sec ±3.44% (77 runs sampled)

> find.js
Rambda.find x 14,086,382 ops/sec ±7.00% (76 runs sampled)
Ramda.find x 6,968,369 ops/sec ±4.86% (76 runs sampled)
Lodash.find x 8,130,806 ops/sec ±13.27% (63 runs sampled)

> findIndex.js
Rambda.findIndex x 48,179,679 ops/sec ±8.31% (71 runs sampled)
Ramda.findIndex x 2,561,304 ops/sec ±17.39% (33 runs sampled)
Lodash.findIndex x 3,636,170 ops/sec ±11.57% (54 runs sampled)

> flatten.js
Rambda.flatten x 3,651,487 ops/sec ±12.96% (57 runs sampled)
Ramda.flatten x 585,856 ops/sec ±0.39% (90 runs sampled)
Lodash.flatten x 12,330,106 ops/sec ±1.48% (93 runs sampled)

> head.js
Rambda.head x 73,327,652 ops/sec ±3.95% (77 runs sampled)
Ramda.head x 4,281,233 ops/sec ±2.27% (87 runs sampled)
Lodash.head x 67,943,467 ops/sec ±3.43% (77 runs sampled)

> headString.js
Rambda.head (when string) x 75,729,481 ops/sec ±3.76% (78 runs sampled)
Ramda.head (when string) x 4,215,626 ops/sec ±2.33% (84 runs sampled)

> identical.js
Rambda.identical x 68,465,698 ops/sec ±4.76% (74 runs sampled)
Ramda.identical x 19,430,040 ops/sec ±2.18% (82 runs sampled)

> indexOf.js
Rambda.indexOf x 52,087,884 ops/sec ±2.80% (78 runs sampled)
Ramda.indexOf x 23,475,389 ops/sec ±2.57% (83 runs sampled)
Lodash.indexOf x 50,416,017 ops/sec ±4.27% (79 runs sampled)

> init.js
Rambda.init x 33,425,823 ops/sec ±3.40% (78 runs sampled)
Ramda.init x 2,732,046 ops/sec ±12.71% (69 runs sampled)
Lodash.initial x 32,728,924 ops/sec ±4.09% (78 runs sampled)

> initString.js
Rambda.init (when string) x 71,090,037 ops/sec ±3.79% (74 runs sampled)
Ramda.init (when string) x 1,849,154 ops/sec ±7.90% (69 runs sampled)

> isEmpty.js
Rambda.isEmpty x 16,658,518 ops/sec ±8.41% (69 runs sampled)
Ramda.isEmpty x 100,014 ops/sec ±6.48% (75 runs sampled)
Lodash.isEmpty x 972,958 ops/sec ±5.22% (79 runs sampled)

> last.js
Rambda.last x 66,518,805 ops/sec ±5.77% (69 runs sampled)
Ramda.last x 4,065,920 ops/sec ±2.83% (84 runs sampled)
Lodash.last x 64,817,997 ops/sec ±6.13% (73 runs sampled)

> map.js
Rambda.map x 29,936,120 ops/sec ±3.21% (76 runs sampled)
Ramda.map x 6,112,792 ops/sec ±2.47% (88 runs sampled)
Lodash.map x 28,685,845 ops/sec ±1.63% (90 runs sampled)

> match.js
Rambda.match x 4,646,951 ops/sec ±1.00% (92 runs sampled)
Ramda.match x 1,990,270 ops/sec ±2.17% (90 runs sampled)

> mathMod.js
Rambda.mathMod x 31,132,727 ops/sec ±1.99% (89 runs sampled)
Ramda.mathMod x 15,986,746 ops/sec ±2.21% (86 runs sampled)

> mean.js
Rambda.mean x 54,726,189 ops/sec ±2.68% (85 runs sampled)
Ramda.mean x 1,167,399 ops/sec ±0.63% (91 runs sampled)

> median.js
Rambda.median x 2,416,103 ops/sec ±1.19% (93 runs sampled)
Ramda.median x 688,465 ops/sec ±1.07% (89 runs sampled)

> merge.js
Rambda.merge x 9,303,698 ops/sec ±2.12% (88 runs sampled)
Ramda.merge x 6,342,019 ops/sec ±2.58% (87 runs sampled)
Lodash.merge x 3,443,832 ops/sec ±1.93% (88 runs sampled)

> negate.js
Rambda.negate x 76,127,966 ops/sec ±4.33% (79 runs sampled)
Ramda.negate x 5,251,317 ops/sec ±2.66% (87 runs sampled)

> omit.js
Rambda.omit x 16,556,936 ops/sec ±1.28% (88 runs sampled)
Ramda.omit x 4,935,868 ops/sec ±2.58% (86 runs sampled)
Lodash.omit x 461,559 ops/sec ±1.06% (82 runs sampled)

> path.js
Rambda.path x 21,030,510 ops/sec ±1.80% (88 runs sampled)
Ramda.path x 12,366,254 ops/sec ±1.88% (89 runs sampled)
Lodash.get x 22,054,744 ops/sec ±1.31% (92 runs sampled)

> pathOr.js
Rambda.pathOr x 5,662,819 ops/sec ±4.74% (79 runs sampled)
Ramda.pathOr x 5,571,989 ops/sec ±1.72% (85 runs sampled)

> pick.js
Rambda.pick x 9,939,191 ops/sec ±1.69% (88 runs sampled)
Ramda.pick x 2,715,845 ops/sec ±2.35% (90 runs sampled)
Lodash.pick x 1,062,961 ops/sec ±2.56% (83 runs sampled)

> pipe.js
Rambda.pipe x 4,508,406 ops/sec ±2.65% (85 runs sampled)
Ramda.pipe x 757,113 ops/sec ±1.62% (86 runs sampled)
Lodash.flow x 2,318,846 ops/sec ±0.98% (91 runs sampled)

> product.js
Rambda.product x 8,924,477 ops/sec ±0.75% (91 runs sampled)
Ramda.product x 1,364,863 ops/sec ±0.39% (89 runs sampled)

> prop.js
Rambda.prop x 23,457,990 ops/sec ±1.24% (90 runs sampled)
Ramda.prop x 2,736,492 ops/sec ±0.62% (90 runs sampled)

> propEq.js
Rambda.propEq x 14,389,769 ops/sec ±1.34% (89 runs sampled)
Ramda.propEq x 2,673,442 ops/sec ±0.59% (89 runs sampled)

> propIs.js
Rambda.propIs x 26,337,209 ops/sec ±2.17% (85 runs sampled)
Ramda.propIs x 8,519,778 ops/sec ±2.74% (86 runs sampled)

> propOr.js
Rambda.propOr x 49,257,830 ops/sec ±3.43% (75 runs sampled)
Ramda.propOr x 3,907,852 ops/sec ±2.01% (88 runs sampled)

> range.js
Rambda.range x 14,450,269 ops/sec ±2.21% (84 runs sampled)
Ramda.range x 7,354,755 ops/sec ±2.44% (85 runs sampled)
Lodash.range x 10,475,753 ops/sec ±1.81% (89 runs sampled)

> reduce.js
Rambda.reduce x 9,262,518 ops/sec ±2.69% (88 runs sampled)
Ramda x 2,524,600 ops/sec ±1.24% (88 runs sampled)
Lodash x 13,553,365 ops/sec ±0.98% (88 runs sampled)
```

## Use with ES5

```
import omit from 'rambda/lib/omit'
```

> Latest version that has this feature is `2.3.1`

## Changelog

- 3.3.0 Close [issue #245](https://github.com/selfrefactor/rambda/issues/245) - complete typings tests for methods that have more specific Typescript definitions

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
- 1.2.3 Doesn't exist because NPM is great at handling errors.
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

- To run all benchmarks

`yarn run benchmark all`

- To run single or number of benchmarks

`yarn run benchmark add compose filter`

> Projects using Rambda

- [string-fn](https://github.com/selfrefactor/string-fn)

- [tachyons-for-js](https://github.com/devilcoders/tachyons-for-js)

- [react-append-to-body](https://github.com/jpgorman/react-append-to-body)

- [docker-voting-app-nodejs](https://github.com/subfuzion/docker-voting-app-nodejs)

- [ig-api](https://www.npmjs.com/package/ig-api)

- [ldap-authenticate](https://www.npmjs.com/package/ldap-authenticate)

- [mat-che](https://github.com/ianagbip1oti/mat-che)

> Projects using Rambdax

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

> Rambda in the wild

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

- [Argumentation of Rambda's curry method](https://ilearnsmarter.wordpress.com/2018/12/20/argumentation-of-rambdas-partialcurry-method/)

- Trending in `Javascripting.com` list:

![Trending in Javascripting.com list](https://github.com/selfrefactor/rambda/blob/master/files/rambda-trending.png?raw=true)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]

## Ramda methods missing in Rambda

### Function
 
 [__](https://raw.githubusercontent.com/ramda/ramda/master/source/__.js)
 
 [addIndex](https://raw.githubusercontent.com/ramda/ramda/master/source/addIndex.js)
 
 [ap](https://raw.githubusercontent.com/ramda/ramda/master/source/ap.js)
 
 [apply](https://raw.githubusercontent.com/ramda/ramda/master/source/apply.js)
 
 [applySpec](https://raw.githubusercontent.com/ramda/ramda/master/source/applySpec.js)
 
 [applyTo](https://raw.githubusercontent.com/ramda/ramda/master/source/applyTo.js)
 
 [ascend](https://raw.githubusercontent.com/ramda/ramda/master/source/ascend.js)
 
 [binary](https://raw.githubusercontent.com/ramda/ramda/master/source/binary.js)
 
 [bind](https://raw.githubusercontent.com/ramda/ramda/master/source/bind.js)
 
 [call](https://raw.githubusercontent.com/ramda/ramda/master/source/call.js)
 
 [comparator](https://raw.githubusercontent.com/ramda/ramda/master/source/comparator.js)
 
 [composeK](https://raw.githubusercontent.com/ramda/ramda/master/source/composeK.js)
 
 [composeP](https://raw.githubusercontent.com/ramda/ramda/master/source/composeP.js)
 
 [composeWith](https://raw.githubusercontent.com/ramda/ramda/master/source/composeWith.js)
 
 [construct](https://raw.githubusercontent.com/ramda/ramda/master/source/construct.js)
 
 [constructN](https://raw.githubusercontent.com/ramda/ramda/master/source/constructN.js)
 
 [converge](https://raw.githubusercontent.com/ramda/ramda/master/source/converge.js)
 
 [curryN](https://raw.githubusercontent.com/ramda/ramda/master/source/curryN.js)
 
 [descend](https://raw.githubusercontent.com/ramda/ramda/master/source/descend.js)
 
 [empty](https://raw.githubusercontent.com/ramda/ramda/master/source/empty.js)
 
 [invoker](https://raw.githubusercontent.com/ramda/ramda/master/source/invoker.js)
 
 [juxt](https://raw.githubusercontent.com/ramda/ramda/master/source/juxt.js)
 
 [lift](https://raw.githubusercontent.com/ramda/ramda/master/source/lift.js)
 
 [liftN](https://raw.githubusercontent.com/ramda/ramda/master/source/liftN.js)
 
 [memoizeWith](https://raw.githubusercontent.com/ramda/ramda/master/source/memoizeWith.js)
 
 [nAry](https://raw.githubusercontent.com/ramda/ramda/master/source/nAry.js)
 
 [nthArg](https://raw.githubusercontent.com/ramda/ramda/master/source/nthArg.js)
 
 [o](https://raw.githubusercontent.com/ramda/ramda/master/source/o.js)
 
 [of](https://raw.githubusercontent.com/ramda/ramda/master/source/of.js)
 
 [once](https://raw.githubusercontent.com/ramda/ramda/master/source/once.js)
 
 [otherwise](https://raw.githubusercontent.com/ramda/ramda/master/source/otherwise.js)
 
 [partialRight](https://raw.githubusercontent.com/ramda/ramda/master/source/partialRight.js)
 
 [pipeK](https://raw.githubusercontent.com/ramda/ramda/master/source/pipeK.js)
 
 [pipeP](https://raw.githubusercontent.com/ramda/ramda/master/source/pipeP.js)
 
 [pipeWith](https://raw.githubusercontent.com/ramda/ramda/master/source/pipeWith.js)
 
 [then](https://raw.githubusercontent.com/ramda/ramda/master/source/then.js)
 
 [thunkify](https://raw.githubusercontent.com/ramda/ramda/master/source/thunkify.js)
 
 [tryCatch](https://raw.githubusercontent.com/ramda/ramda/master/source/tryCatch.js)
 
 [unapply](https://raw.githubusercontent.com/ramda/ramda/master/source/unapply.js)
 
 [unary](https://raw.githubusercontent.com/ramda/ramda/master/source/unary.js)
 
 [uncurryN](https://raw.githubusercontent.com/ramda/ramda/master/source/uncurryN.js)
 
 [useWith](https://raw.githubusercontent.com/ramda/ramda/master/source/useWith.js)
 
          

### Logic
 
 [and](https://raw.githubusercontent.com/ramda/ramda/master/source/and.js)
 
 [cond](https://raw.githubusercontent.com/ramda/ramda/master/source/cond.js)
 
 [or](https://raw.githubusercontent.com/ramda/ramda/master/source/or.js)
 
 [pathSatisfies](https://raw.githubusercontent.com/ramda/ramda/master/source/pathSatisfies.js)
 
 [propSatisfies](https://raw.githubusercontent.com/ramda/ramda/master/source/propSatisfies.js)
 
 [unless](https://raw.githubusercontent.com/ramda/ramda/master/source/unless.js)
 
 [until](https://raw.githubusercontent.com/ramda/ramda/master/source/until.js)
 
 [when](https://raw.githubusercontent.com/ramda/ramda/master/source/when.js)
 
          

### List
 
 [aperture](https://raw.githubusercontent.com/ramda/ramda/master/source/aperture.js)
 
 [chain](https://raw.githubusercontent.com/ramda/ramda/master/source/chain.js)
 
 [dropLastWhile](https://raw.githubusercontent.com/ramda/ramda/master/source/dropLastWhile.js)
 
 [dropRepeats](https://raw.githubusercontent.com/ramda/ramda/master/source/dropRepeats.js)
 
 [dropRepeatsWith](https://raw.githubusercontent.com/ramda/ramda/master/source/dropRepeatsWith.js)
 
 [dropWhile](https://raw.githubusercontent.com/ramda/ramda/master/source/dropWhile.js)
 
 [findLast](https://raw.githubusercontent.com/ramda/ramda/master/source/findLast.js)
 
 [findLastIndex](https://raw.githubusercontent.com/ramda/ramda/master/source/findLastIndex.js)
 
 [insert](https://raw.githubusercontent.com/ramda/ramda/master/source/insert.js)
 
 [insertAll](https://raw.githubusercontent.com/ramda/ramda/master/source/insertAll.js)
 
 [into](https://raw.githubusercontent.com/ramda/ramda/master/source/into.js)
 
 [mapAccum](https://raw.githubusercontent.com/ramda/ramda/master/source/mapAccum.js)
 
 [mapAccumRight](https://raw.githubusercontent.com/ramda/ramda/master/source/mapAccumRight.js)
 
 [mergeAll](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeAll.js)
 
 [move](https://raw.githubusercontent.com/ramda/ramda/master/source/move.js)
 
 [pair](https://raw.githubusercontent.com/ramda/ramda/master/source/pair.js)
 
 [partition](https://raw.githubusercontent.com/ramda/ramda/master/source/partition.js)
 
 [reduceBy](https://raw.githubusercontent.com/ramda/ramda/master/source/reduceBy.js)
 
 [reduced](https://raw.githubusercontent.com/ramda/ramda/master/source/reduced.js)
 
 [reduceRight](https://raw.githubusercontent.com/ramda/ramda/master/source/reduceRight.js)
 
 [reduceWhile](https://raw.githubusercontent.com/ramda/ramda/master/source/reduceWhile.js)
 
 [remove](https://raw.githubusercontent.com/ramda/ramda/master/source/remove.js)
 
 [scan](https://raw.githubusercontent.com/ramda/ramda/master/source/scan.js)
 
 [sequence](https://raw.githubusercontent.com/ramda/ramda/master/source/sequence.js)
 
 [splitAt](https://raw.githubusercontent.com/ramda/ramda/master/source/splitAt.js)
 
 [splitWhen](https://raw.githubusercontent.com/ramda/ramda/master/source/splitWhen.js)
 
 [takeLastWhile](https://raw.githubusercontent.com/ramda/ramda/master/source/takeLastWhile.js)
 
 [takeWhile](https://raw.githubusercontent.com/ramda/ramda/master/source/takeWhile.js)
 
 [transduce](https://raw.githubusercontent.com/ramda/ramda/master/source/transduce.js)
 
 [transpose](https://raw.githubusercontent.com/ramda/ramda/master/source/transpose.js)
 
 [traverse](https://raw.githubusercontent.com/ramda/ramda/master/source/traverse.js)
 
 [unfold](https://raw.githubusercontent.com/ramda/ramda/master/source/unfold.js)
 
 [uniqBy](https://raw.githubusercontent.com/ramda/ramda/master/source/uniqBy.js)
 
 [unnest](https://raw.githubusercontent.com/ramda/ramda/master/source/unnest.js)
 
 [xprod](https://raw.githubusercontent.com/ramda/ramda/master/source/xprod.js)
 
 [zipWith](https://raw.githubusercontent.com/ramda/ramda/master/source/zipWith.js)
 
          

### Object
 
 [dissocPath](https://raw.githubusercontent.com/ramda/ramda/master/source/dissocPath.js)
 
 [eqProps](https://raw.githubusercontent.com/ramda/ramda/master/source/eqProps.js)
 
 [evolve](https://raw.githubusercontent.com/ramda/ramda/master/source/evolve.js)
 
 [forEachObjIndexed](https://raw.githubusercontent.com/ramda/ramda/master/source/forEachObjIndexed.js)
 
 [hasIn](https://raw.githubusercontent.com/ramda/ramda/master/source/hasIn.js)
 
 [hasPath](https://raw.githubusercontent.com/ramda/ramda/master/source/hasPath.js)
 
 [invert](https://raw.githubusercontent.com/ramda/ramda/master/source/invert.js)
 
 [invertObj](https://raw.githubusercontent.com/ramda/ramda/master/source/invertObj.js)
 
 [keysIn](https://raw.githubusercontent.com/ramda/ramda/master/source/keysIn.js)
 
 [lens](https://raw.githubusercontent.com/ramda/ramda/master/source/lens.js)
 
 [lensIndex](https://raw.githubusercontent.com/ramda/ramda/master/source/lensIndex.js)
 
 [lensPath](https://raw.githubusercontent.com/ramda/ramda/master/source/lensPath.js)
 
 [lensProp](https://raw.githubusercontent.com/ramda/ramda/master/source/lensProp.js)
 
 [mapObjIndexed](https://raw.githubusercontent.com/ramda/ramda/master/source/mapObjIndexed.js)
 
 [mergeDeepLeft](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeDeepLeft.js)
 
 [mergeDeepRight](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeDeepRight.js)
 
 [mergeDeepWith](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeDeepWith.js)
 
 [mergeDeepWithKey](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeDeepWithKey.js)
 
 [mergeLeft](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeLeft.js)
 
 [mergeRight](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeRight.js)
 
 [mergeWith](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeWith.js)
 
 [mergeWithKey](https://raw.githubusercontent.com/ramda/ramda/master/source/mergeWithKey.js)
 
 [objOf](https://raw.githubusercontent.com/ramda/ramda/master/source/objOf.js)
 
 [over](https://raw.githubusercontent.com/ramda/ramda/master/source/over.js)
 
 [pickBy](https://raw.githubusercontent.com/ramda/ramda/master/source/pickBy.js)
 
 [project](https://raw.githubusercontent.com/ramda/ramda/master/source/project.js)
 
 [props](https://raw.githubusercontent.com/ramda/ramda/master/source/props.js)
 
 [set](https://raw.githubusercontent.com/ramda/ramda/master/source/set.js)
 
 [toPairsIn](https://raw.githubusercontent.com/ramda/ramda/master/source/toPairsIn.js)
 
 [valuesIn](https://raw.githubusercontent.com/ramda/ramda/master/source/valuesIn.js)
 
 [view](https://raw.githubusercontent.com/ramda/ramda/master/source/view.js)
 
 [where](https://raw.githubusercontent.com/ramda/ramda/master/source/where.js)
 
 [whereEq](https://raw.githubusercontent.com/ramda/ramda/master/source/whereEq.js)
 
          

### Relation
 
 [clamp](https://raw.githubusercontent.com/ramda/ramda/master/source/clamp.js)
 
 [countBy](https://raw.githubusercontent.com/ramda/ramda/master/source/countBy.js)
 
 [differenceWith](https://raw.githubusercontent.com/ramda/ramda/master/source/differenceWith.js)
 
 [eqBy](https://raw.githubusercontent.com/ramda/ramda/master/source/eqBy.js)
 
 [gt](https://raw.githubusercontent.com/ramda/ramda/master/source/gt.js)
 
 [gte](https://raw.githubusercontent.com/ramda/ramda/master/source/gte.js)
 
 [innerJoin](https://raw.githubusercontent.com/ramda/ramda/master/source/innerJoin.js)
 
 [lt](https://raw.githubusercontent.com/ramda/ramda/master/source/lt.js)
 
 [lte](https://raw.githubusercontent.com/ramda/ramda/master/source/lte.js)
 
 [pathEq](https://raw.githubusercontent.com/ramda/ramda/master/source/pathEq.js)
 
 [sortWith](https://raw.githubusercontent.com/ramda/ramda/master/source/sortWith.js)
  
 [symmetricDifferenceWith](https://raw.githubusercontent.com/ramda/ramda/master/source/symmetricDifferenceWith.js)
 
 [union](https://raw.githubusercontent.com/ramda/ramda/master/source/union.js)
 
 [unionWith](https://raw.githubusercontent.com/ramda/ramda/master/source/unionWith.js)
 
          
## Browse by category

### Function

[always](#always)

[compose](#compose)

[curry](#curry)

[F](#f)

[flip](#flip)

[identity](#identity)

[pipe](#pipe)

[T](#t)

[tap](#tap)

### Math

[add](#add)

[dec](#dec)

[divide](#divide)

[inc](#inc)

[modulo](#modulo)

[multiply](#multiply)

[subtract](#subtract)

### List

[adjust](#adjust)

[all](#all)

[any](#any)

[append](#append)

[concat](#concat)

[contains](#contains)

[drop](#drop)

[dropLast](#droplast)

[endsWith](#endswith)

[filter](#filter)

[find](#find)

[findIndex](#findindex)

[flatten](#flatten)

[forEach](#foreach)

[groupBy](#groupby)

[head](#head)

[indexBy](#indexby)

[indexOf](#indexof)

[init](#init)

[join](#join)

[last](#last)

[lastIndexOf](#lastindexof)

[length](#length)

[map](#map)

[none](#none)

[nth](#nth)

[pluck](#pluck)

[prepend](#prepend)

[range](#range)

[reduce](#reduce)

[reject](#reject)

[repeat](#repeat)

[reverse](#reverse)

[sort](#sort)

[splitEvery](#splitevery)

[startsWith](#startswith)

[tail](#tail)

[take](#take)

[takeLast](#takelast)

[times](#times)

[uniq](#uniq)

[uniqWith](#uniqwith)

[update](#update)

[without](#without)

[zipObj](#zipobj)

### Logic

[allPass](#allpass)

[anyPass](#anypass)

[both](#both)

[complement](#complement)

[defaultTo](#defaultto)

[either](#either)

[ifElse](#ifelse)

[not](#not)

### Object

[assoc](#assoc)

[dissoc](#dissoc)

[has](#has)

[keys](#keys)

[merge](#merge)

[omit](#omit)

[path](#path)

[pathOr](#pathor)

[pick](#pick)

[pickAll](#pickall)

[prop](#prop)

[values](#values)

### Relation

[equals](#equals)

[max](#max)

[maxBy](#maxby)

[min](#min)

[minBy](#minby)

[propEq](#propeq)

[sortBy](#sortby)

### Type

[is](#is)

[isNil](#isnil)

[type](#type)

### String

[match](#match)

[replace](#replace)

[split](#split)

[toLower](#tolower)

[toString](#tostring)

[toUpper](#toupper)

[trim](#trim)
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

Ramda methods has plenty of really deep FP Methods, which are in fact really great, but they come at the price of added complexity. Such complex mechanism in practice are rarely needed.

You can [check the list with missing  Ramda methods in Rambda](#ramda-methods-missing-in-rambda) list to assure that `Rambda` doesn't have any important misses.

## Install

- Use **yarn add rambda** for `Webpack` and `Node.js` usage

- For UMD usage either use `./dist/rambda.umd.js` or following CDN link:

```
https://unpkg.com/rambda@2.0.0/dist/rambda.umd.js
```

## Differences between Rambda and Ramda

- Rambda's **type** detect async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handle `Not a number` values and it returns `NaN` in this case.

- Rambda's **path** accepts dot notation(`'x.y' same as ['x','y']`)

- Rambda's **pick** and **omit** accept comma notation(`'x,y' same as ['x','y']`)

- Rambda's **map** and **filter** pass object key as second argument when mapping over objects.

- Rambda's **map** and **filter** pass array index as second argument when mapping over arrays.

- Rambda's **adjust**, **all**, **allPass**, **any**, **anyPass**, **findIndex** and **reject** are passing index as second argument to the predicate function.

- Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

- Rambda's **startsWith/endsWith** work only with strings, instead with array and strings.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does.

- Rambda's **flip** works only for functions expecting two arguments.

- Rambda's **partial** doesn't need the input arguments to be wrapped as array.

- Rambda's **partialCurry** is not part of Ramda API.

- Rambda's **includes** acts as curried Javascript `includes`, while **Ramda** version uses `R.equals` to check if a list contains certain value. Also **Ramda** version will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

## API

---
#### add

> add(a: number, b: number): number

```
R.add(2, 3) // =>  5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/add.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try in REPL</a>

---
#### adjust

> adjust(replaceFn: Function, i: number, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```
R.adjust(
  a => a + 1,
  0,
  [0, 100]
) // => [1, 100]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/adjust.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%200%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try in REPL</a>

---
#### all

> all(fn: Function, arr: T[]): boolean

It returns `true`, if all members of array `arr` returns `true`, when applied as argument to function `fn`.

```
const arr = [ 0, 1, 2, 3, 4 ]
const fn = x => x > -1

const result = R.all(fn, arr)
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/all.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20fn%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(fn%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### allPass

> allPass(rules: Function[], input: any): boolean

It returns `true`, if all functions of `rules` return `true`, when `input` is their argument.

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/allPass.js)

<a href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(rules%2C%20input)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### always

> always(x: any): Function

It returns function that always returns `x`.

```
const fn = R.always(7)

console.log(fn())// => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/always.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### any

> any(condition: Function, arr: T[]): boolean

It returns `true`, if at least one member of `arr` returns true, when passed to the `condition` function.

```
R.any(a => a * a > 8)([1, 2, 3])
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/any.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.any(a%20%3D%3E%20a%20*%20a%20%3E%208)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### anyPass

> anyPass(conditions: Function[]): Function

```
const isBig = a => a > 20
const isOdd = a => a % 2 === 1

const result = R.anyPass(
  [isBig, isOdd]
)(11)
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/anyPass.js)

<a href="https://rambda.now.sh?const%20isBig%20%3D%20a%20%3D%3E%20a%20%3E%2020%0Aconst%20isOdd%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)(11)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### append

> append(valueToAppend: T, arr: T[]): T[]

```
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/append.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.append(%0A%20%20'foo'%2C%0A%20%20%5B'bar'%2C%20'baz'%5D%0A)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try in REPL</a>

---
#### assoc

> assoc(prop: any, value: any, obj: object): object

Makes a shallow clone of `obj`, setting or overriding the property `prop` with
the value `value`. Note that this copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/assoc.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try in REPL</a>

---
#### both

> both(firstCondition: Function, secondCondition: Function, input: any): boolean

It returns `true`, if both function `firstCondition` and function `secondCondition` return `true`, when `input` is their argument.

```
const fn = R.both(
  a => a > 10,
  a => a < 20
)
console.log(fn(15)) //=> true
console.log(fn(30)) //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/both.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.both(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%3C%2020%0A)%0Aconsole.log(fn(15))%20%2F%2F%3D%3E%20true%0Aconsole.log(fn(30))%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### clone

> clone(objOrArr: T|T[]): T|T[]
both
Creates a deep copy of the value which may contain (nested) Arrays and Objects, 
Numbers, Strings, Booleans and Dates. Functions are assigned by reference rather 
than copied

```
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/clone.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20objects%20%3D%20%5B%7B%7D%2C%20%7B%7D%2C%20%7B%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0Aobjects%20%3D%3D%3D%20objectsClone%3B%20%2F%2F%3D%3E%20false%0Aobjects%5B0%5D%20%3D%3D%3D%20objectsClone%5B0%5D%3B%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### compose

> compose(fn1: Function, ... , fnN: Function): any

It performs right-to-left function composition.

```
const result = R.compose(
  R.map(x => x * 2),both
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/compose.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2Cboth%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### complement

> complement(fn: Function): Function

It returns `complemented` function that accept `input` as argument.

The return value of `complemented` is the negative boolean value of `fn(input)`.

```
const fn = R.complement(x => !x)

const result = fn(false) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/complement.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.complement(x%20%3D%3E%20!x)%0A%0Aconst%20result%20%3D%20fn(false)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### concat

> concat(x: T[]|string, y: T[]|string): T[]|string

It returns a new string or array, which is the result of merging `x` and `y`.

```
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/concat.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try in REPL</a>

---
#### contains

> contains(valueToFind: T, arr: T[]): boolean

It returns `true`, if `valueToFind` is part of `arr`.

Note that while new versions of `Ramda` depricate this method, `contains` will remain in this library.

```
R.contains(2, [1, 2]) // => true
R.contains(3, [1, 2]) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/contains.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.contains(2%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20true%0AR.contains(3%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### curry

> curry(fn: Function): Function

It returns curried version of `fn`.

```
const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)
const result = g(4) // => 10
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/curry.js)

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

```
R.defaultTo('foo', undefined) // => 'foo'
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'baz') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'baz') // => 'baz'
R.defaultTo('foo', 'bar') // => 'bar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/defaultTo.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'baz'%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'">Try in REPL</a>

---
#### dissoc

> dissoc(prop: any, obj: object): object

It returns a new object that does not contain a `prop` property.

```
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dissoc.js)

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

```
R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']
R.drop(1, 'foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/drop.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.drop(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%5D%0AR.drop(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### dropLast

> dropLast(howManyToDrop: number, arrOrStr: T[]|String): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the right.

```
R.dropLast(1, ['foo', 'bar', 'baz']) // => ['foo', 'bar']
R.dropLast(1, 'foo')  // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dropLast.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D%0AR.dropLast(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### endsWith

> endsWith(x: string, str: string): boolean

```
R.endsWith(
  'bar',
  'foo-bar'
) // => true

R.endsWith(
  'foo',
  'foo-bar'
) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/endsWith.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.endsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.endsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### either

> either(firstCondition: Function, secondCondition: Function): Function

```
R.either(
  a => a > 10,
  a => a % 2 === 0
)(15) //=> true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/either.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.either(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A)(15)%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### equals

> equals(a: any, b: any): boolean

It returns equality match between `a` and `b`.

It doesn't handle cyclical data structures.

```
R.equals(
  [1, {a:2}, [{b:3}]],
  [1, {a:2}, [{b:3}]]
) // => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/equals.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### F

`R.F() // => false`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/F.js)

---
#### filter

> filter(filterFn: Function, x: Array|Object): Array|Object

It filters `x` iterable over boolean returning `filterFn`.

```
const filterFn = a => a % 2 === 0

const result = R.filter(filterFn, [1, 2, 3, 4])
// => [2, 4]
```

The method works with objects as well.

Note that unlike Ramda's `filter`, here object keys are passed as second argument to `filterFn`.

```
const result = R.filter((val, prop)=>{
  return prop === 'a' || val === 2
}, {a: 1, b: 2, c: 3})

// => {a: 1, b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/filter.js)

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A%0Aconst%20result%20%3D%20R.filter(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### find

> find(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.find(findFn, arr)
// => {foo: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/find.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findIndex

> findIndex(findFn: Function, arr: T[]): number

It returns `-1` or the index of the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(findFn, arr)
// => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/findIndex.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### flatten

> flatten(arr: any[]): any[]

```
R.flatten([ 1, [ 2, [ 3 ] ] ])
// => [ 1, 2, 3 ]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/flatten.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%201%2C%20%5B%202%2C%20%5B%203%20%5D%20%5D%20%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%20%5D">Try in REPL</a>

---
#### flip

> flip(fn: Function): Function

It returns function which calls `fn` with exchanged first and second argument.

```
const subtractFlip = R.flip(R.subtract)

const result = subtractFlip(1,7)
// => 6
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/flip.js)

<a href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20subtractFlip(1%2C7)%0A%2F%2F%20%3D%3E%206">Try in REPL</a>

---
#### forEach

> forEach(fn: Function, arr: Array): Array

It applies function `fn` over all members of array `arr` and returns `arr`.

```
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

console.log(sideEffect) //=> {foo1 : 1, foo2 : 2}
console.log(result) //=> [1, 2]
```

Note, that unlike `Ramda`'s **forEach**, Rambda's one doesn't dispatch to `forEach` method of `arr` if `arr` has such method.

[Source](https://github.com/selfrefactor/rambda/tree/master/src/forEach.js)

<a href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0Aconsole.log(sideEffect)%20%2F%2F%3D%3E%20%7Bfoo1%20%3A%201%2C%20foo2%20%3A%202%7D%0Aconsole.log(result)%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### fromPairs

> fromPairs(list: any[]): object

It transforms a list to an object.

```
const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(list)
// expected === result
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/fromPairs.js)

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

```
R.has('a', {a: 1}) // => true
R.has('b', {a: 1}) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/has.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.has('a'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20true%0AR.has('b'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### head

> head(arrOrStr: T[]|string): T|string

It returns the first element of `arrOrStr`.

```
R.head([1, 2, 3]) // => 1
R.head('foo') // => 'f'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/head.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.head(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%201%0AR.head('foo')%20%2F%2F%20%3D%3E%20'f'">Try in REPL</a>

---
#### identical

> identical(a: any, b: any): boolean

Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. NaN is identical to NaN; 0 and -0 are not identical.

```
const o = {};
R.identical(o, o); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/identical.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20o%20%3D%20%7B%7D%3B%0AR.identical(o%2C%20o)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### identity

> identity(x: T): T

It just passes back the supplied arguments.

```
R.identity(7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/identity.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### ifElse

> ifElse(condition: Function|boolean, ifFn: Function, elseFn: Function): Function

It returns function, which expect `input` as argument and returns `finalResult`.

When this function is called, a value `answer` is generated as a result of `condition(input)`.

If `answer` is `true`, then `finalResult` is equal to `ifFn(input)`.
If `answer` is `false`, then `finalResult` is equal to `elseFn(input)`.

```
const fn = R.ifElse(
 x => x > 10,
 x => x*2,
 x => x*10
)

const result = fn(8)
// => 80
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/ifElse.js)

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

If `input` is neither `string` nor `array`, then this method will return `false`.

> includes(target: any, input: any): boolean

```
R.includes(1, [1, 2]) // => true
R.includes('oo', 'foo') // => true
R.includes('z', 'foo') // => false
R.includes('z', null) // => false
```

!! Note that this method is not part of `Ramda` API.

[Source](https://github.com/selfrefactor/rambda/tree/master/src/includes.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.includes(1%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20true%0AR.includes('oo'%2C%20'foo')%20%2F%2F%20%3D%3E%20true%0AR.includes('z'%2C%20'foo')%20%2F%2F%20%3D%3E%20false%0AR.includes('z'%2C%20null)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### indexBy

> indexBy(fn: Function, arr: T[]): Object

It indexes array `arr` as an object with provided selector function `fn`.

```
R.indexBy(
  x => x.id,
  [ {id: 1}, {id: 2} ]
)
// => { 1: {id: 1}, 2: {id: 2} }
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexBy.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20%5B%20%7Bid%3A%201%7D%2C%20%7Bid%3A%202%7D%20%5D%0A)%0A%2F%2F%20%3D%3E%20%7B%201%3A%20%7Bid%3A%201%7D%2C%202%3A%20%7Bid%3A%202%7D%20%7D">Try in REPL</a>

---
#### indexOf

> indexOf(valueToFind: any, arr: T[]): number

It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.

```
R.indexOf(1, [1, 2]) // => 0
R.indexOf(0, [1, 2]) // => -1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexOf.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexOf(1%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%200%0AR.indexOf(0%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### init

> init(arrOrStr: T[]|string): T[]|string

- It returns all but the last element of `arrOrStr`.

```
R.init([1, 2, 3])  // => [1, 2]
R.init('foo')  // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/init.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.init(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D%0AR.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### is

> is(xPrototype: any, x: any): boolean

It returns `true` is `x` is instance of `xPrototype`.

```
R.is(String, 'foo')  // => true
R.is(Array, 1)  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/is.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.is(String%2C%20'foo')%20%20%2F%2F%20%3D%3E%20true%0AR.is(Array%2C%201)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isNil

> isNil(x: any): boolean

It returns `true` is `x` is either `null` or `undefined`.

```
R.isNil(null)  // => true
R.isNil(1)  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/isNil.js)

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

```
R.join('-', [1, 2, 3])  // => '1-2-3'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/join.js)

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

```
R.last(['foo', 'bar', 'baz']) // => 'baz'
R.last('foo') // => 'o'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/last.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.last(%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20'baz'%0AR.last('foo')%20%2F%2F%20%3D%3E%20'o'">Try in REPL</a>

---
#### lastIndexOf

> lastIndexOf(x: any, arr: T[]): number

It returns the last index of `x` in array `arr`.

`R.equals` is used to determine equality between `x` and members of `arr`.

Value `-1` is returned if no `x` is found in `arr`.

```
R.lastIndexOf(1, [1, 2, 3, 1, 2]) // => 3
R.lastIndexOf(10, [1, 2, 3, 1, 2]) // => -1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/lastIndexOf.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.lastIndexOf(1%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%203%0AR.lastIndexOf(10%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### length

> length(arrOrStr: Array|String): Number

```
R.length([1, 2, 3]) // => 3
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/length.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.length(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%203">Try in REPL</a>

---
#### map

> map(mapFn: Function, x: Array|Object): Array|Object

It returns the result of looping through iterable `x` with `mapFn`.

The method works with objects as well.

Note that unlike Ramda's `map`, here array keys are passed as second argument to `mapFn`.

```
const mapFn = x => x * 2
const resultWithArray = R.map(mapFn, [1, 2, 3])
// => [2, 4, 6]

const result = R.map((val, prop)=>{
  return `${prop}-${val}`
}, {a: 1, b: 2})
// => {a: 'a-1', b: 'b-2'}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/map.js)

<a href="https://rambda.now.sh?const%20mapFn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20resultWithArray%20%3D%20R.map(mapFn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D%0A%0Aconst%20result%20%3D%20R.map((val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try in REPL</a>

---
#### match

> match(regExpression: Regex, str: string): string[]

```
R.match(/([a-z]a)/g, 'bananas') // => ['ba', 'na', 'na']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/match.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%20%2F%2F%20%3D%3E%20%5B'ba'%2C%20'na'%2C%20'na'%5D">Try in REPL</a>

---
#### max

> max(x: Number|String, y: Number|String): Number|String

```
R.max(5,7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/max.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### maxBy

> maxBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.maxBy(Math.abs, 5, -7) // => -7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/maxBy.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.maxBy(Math.abs%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try in REPL</a>

---
#### merge

> merge(a: Object, b: Object)

It returns result of `Object.assign({}, a, b)`.

```
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
// => { 'foo': 7, 'bar': 1 }
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/merge.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%2C%20%7B%20'foo'%3A%207%20%7D)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try in REPL</a>

---
#### min

> min(x: Number|String, y: Number|String): Number|String

```
R.max(5,7) // => 5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/min.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%205">Try in REPL</a>

---
#### minBy

> minBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.minBy(Math.abs, -5, -7) // => -5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/minBy.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.minBy(Math.abs%2C%20-5%2C%20-7)%20%2F%2F%20%3D%3E%20-5">Try in REPL</a>

---
#### modulo

> modulo(a: number, b: number):numberNumber

It returns the remainder of operation `a/b`.

```
R.module(14, 3) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/modulo.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.module(14%2C%203)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### multiply

> multiply(a: number, b: number): number

It returns the result of operation `a*b`.

```
R.multiply(4, 3) // => 12
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/multiply.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(4%2C%203)%20%2F%2F%20%3D%3E%2012">Try in REPL</a>

---
#### not

> not(x: any): boolean

It returns inverted boolean version of input `x`.

```
R.not(true) //=> false
R.not(false) //=> true
R.not(0) //=> true
R.not(1) //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/not.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.not(true)%20%2F%2F%3D%3E%20false%0AR.not(false)%20%2F%2F%3D%3E%20true%0AR.not(0)%20%2F%2F%3D%3E%20true%0AR.not(1)%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### omit

> omit(propsToOmit: string[]|string, obj: Object): Object

It returns a partial copy of an `obj` with omitting `propsToOmit`

```
R.omit('a,c,d', {a: 1, b: 2, c: 3}) // => {b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/omit.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.omit('a%2Cc%2Cd'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%20%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### path

> path(pathToSearch: string[]|string, obj: Object): any

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

```
R.path('a.b', {a: {b: 1}}) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/path.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.path('a.b'%2C%20%7Ba%3A%20%7Bb%3A%201%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### pathOr

> pathOr(defaultValue: any, pathToSearch: string[]|string, obj: Object): any

`pathFound` is the result of calling `R.path(pathToSearch, obj)`.

If `pathFound` is `undefined`, `null` or `NaN`, then `defaultValue` will be returned.

`pathFound` is returned in any other case.

```
R.pathOr(1, 'a.b', {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'b'], {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'c'], {a: {b: 2}}) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pathOr.js)

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

```
const fn = ({a, b, c}) => {
  return (a * b) + c
}
const curried = R.partialCurry(fn, {a: 2})
const result = curried({b: 3, c: 10})
// => 16
```

- Note that `partialCurry` is method specific for **Rambda** and the method is not part of **Ramda**'s API

- You can read my argumentation for creating _partialCurry_ [here](https://selfrefactor.gitbooks.io/blog/content/argumenting-rambdas-curry.html)

[Source](https://github.com/selfrefactor/rambda/tree/master/src/partialCurry.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20(%7Ba%2C%20b%2C%20c%7D)%20%3D%3E%20%7B%0A%20%20return%20(a%20*%20b)%20%2B%20c%0A%7D%0Aconst%20curried%20%3D%20R.partialCurry(fn%2C%20%7Ba%3A%202%7D)%0Aconst%20result%20%3D%20curried(%7Bb%3A%203%2C%20c%3A%2010%7D)%0A%2F%2F%20%3D%3E%2016">Try in REPL</a>

---
#### pick

> pick(propsToPick: string[], obj: Object): Object

It returns a partial copy of an `obj` containing only `propsToPick` properties.

```
R.pick(['a', 'c'], {a: 1, b: 2}) // => {a: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pick.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pick(%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Ba%3A%201%7D">Try in REPL</a>

---
#### pipe

> pipe(fn1: Function, ... , fnN: Function): any

It performs left-to-right function composition.

```
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pipe.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### pluck

> pluck(property: string, arr: Object[]): any[]

It returns list of the values of `property` taken from the objects in array of objects `arr`.

```
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) // => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pluck.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pluck('a')(%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### prepend

> prepend(x: T, arr: T[]): T[]

It adds `x` to the start of the array `arr`.

```
R.prepend('foo', ['bar', 'baz']) // => ['foo', 'bar', 'baz']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/prepend.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try in REPL</a>

---
#### prop

> prop(propToFind: string, obj: Object): any

It returns `undefined` or the value of property `propToFind` in `obj`

```
R.prop('x', {x: 100}) // => 100
R.prop('x', {a: 1}) // => undefined
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/prop.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%20%2F%2F%20%3D%3E%20100%0AR.prop('x'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20undefined">Try in REPL</a>

---
#### propEq

> propEq(propToFind: string, valueToMatch: any, obj: Object): boolean

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```
const propToFind = 'foo'
const valueToMatch = 0

const result = R.propEq(propToFind, valueToMatch)({foo: 0})
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/propEq.js)

<a href="https://rambda.now.sh?const%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%200%0A%0Aconst%20result%20%3D%20R.propEq(propToFind%2C%20valueToMatch)(%7Bfoo%3A%200%7D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### propIs

> propIs(type: any, name: string, obj: Object): boolean

It Returns `true` if the specified object property is of the given type.

```
R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
R.propIs(Number, 'x', {x: 'foo'});    //=> false
R.propIs(Number, 'x', {});            //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/propIs.js)

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

```
R.range(0, 3)   // => [0, 1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/range.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%203)%20%20%20%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%5D">Try in REPL</a>

---
#### reduce

> reduce(iteratorFn: Function, accumulator: any, array: T[]): any

```
const iteratorFn = (acc, val) => acc + val
const result = R.reduce(iteratorFn, 1, [1, 2, 3])
// => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reduce.js)

<a href="https://rambda.now.sh?const%20iteratorFn%20%3D%20(acc%2C%20val)%20%3D%3E%20acc%20%2B%20val%0Aconst%20result%20%3D%20R.reduce(iteratorFn%2C%201%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### reject

> reject(fn: Function, arr: T[]): T[]

It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `fn`.

```
const fn = x => x % 2 === 1

const result = R.reject(fn, [1, 2, 3, 4])
// => [2, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reject.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.reject(fn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### repeat

> repeat(valueToRepeat: T, num: number): T[]

```
R.repeat('foo', 2) // => ['foo', 'foo']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/repeat.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%202)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%5D">Try in REPL</a>

---
#### replace

> replace(strOrRegex: string|Regex, replacer: string, str: string): string

It replaces `strOrRegex` found in `str` with `replacer`.

```
R.replace('foo', 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') // => 'bar bar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/replace.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.replace('foo'%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2F%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2Fg%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20bar'">Try in REPL</a>

---
#### reverse

> reverse(str: T[]): T[]

```
const arr = [1, 2]

const result = R.reverse(arr)
// => [2, 1]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reverse.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B1%2C%202%5D%0A%0Aconst%20result%20%3D%20R.reverse(arr)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try in REPL</a>

---
#### sort

> sort(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return a number type.

```
const sortFn = (a, b) => a - b

const result = R.sort(sortFn, [3, 1, 2])
// => [1, 2, 3]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/sort.js)

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20(a%2C%20b)%20%3D%3E%20a%20-%20b%0A%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20%5B3%2C%201%2C%202%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try in REPL</a>

---
#### sortBy

> sortBy(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return value for comparison.

```
const sortFn = obj => obj.foo

const result = R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])

const expectedResult = [ {foo: 0}, {foo: 1} ]
console.log(R.equals(result, expectedResult))
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/sortBy.js)

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20obj%20%3D%3E%20obj.foo%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20%5B%0A%20%20%7Bfoo%3A%201%7D%2C%0A%20%20%7Bfoo%3A%200%7D%0A%5D)%0A%0Aconst%20expectedResult%20%3D%20%5B%20%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%20%5D%0Aconsole.log(R.equals(result%2C%20expectedResult))%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### split

> split(separator: string, str: string): string[]

```
R.split('-', 'a-b-c') // => ['a', 'b', 'c']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/split.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.split('-'%2C%20'a-b-c')%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'c'%5D">Try in REPL</a>

---
#### splitEvery

> splitEvery(sliceLength: number, arrOrString: T[]|string): T[T[]]|string[]

- It splits `arrOrStr` into slices of `sliceLength`.

```
R.splitEvery(2, [1, 2, 3]) // => [[1, 2], [3]]
R.splitEvery(3, 'foobar') // => ['foo', 'bar']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/splitEvery.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%0AR.splitEvery(3%2C%20'foobar')%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D">Try in REPL</a>

---
#### startsWith

> startsWith(x: string, str: string): boolean

```
R.startsWith(
  'foo',
  'foo-bar'
) // => true

R.startsWith(
  'bar',
  'foo-bar'
) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/startsWith.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.startsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.startsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### subtract

> subtract(a: number, b: number): number

```
R.subtract(3, 1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/subtract.js)

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

```
R.tail([1, 2, 3])  // => [2, 3]
R.tail('foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tail.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.tail(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B2%2C%203%5D%0AR.tail('foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### take

> take(num: number, arrOrStr: T[]|string): T[]|string

- It returns the first `num` elements of `arrOrStr`.

```
R.take(1, ['foo', 'bar']) // => ['foo']
R.take(2, 'foo') // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/take.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.take(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.take(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### takeLast

> takeLast(num: number, arrOrStr: T[]|string): T[]|string

- It returns the last `num` elements of `arrOrStr`.

```
R.takeLast(1, ['foo', 'bar']) // => ['bar']
R.takeLast(2, 'foo') // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/takeLast.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.takeLast(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%5D%0AR.takeLast(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### tap

> tap(fn: Function, input: T): T

- It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.

```
let a = 1
const sayX = x => (a = x)

const result = R.tap(sayX, 100)
// both `a` and `result` are `100`
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tap.js)

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

```
R.times(R.identity, 5)
//=> [0, 1, 2, 3, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/times.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.times(R.identity%2C%205)%0A%2F%2F%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try in REPL</a>

---
#### toLower

> toLower(str: string): string

```
R.toLower('FOO') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toLower.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### toPairs

> toPairs(obj: object): any[]

It transforms an object to a list.

```
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// expected === result
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toPairs.js)

<a href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### toString

> toString(x: any): string

```
R.toString([1, 2]) // => '1,2'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toString.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20'1%2C2'">Try in REPL</a>

---
#### toUpper

> toUpper(str: string): string

```
R.toUpper('foo') // => 'FOO'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toUpper.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%20%2F%2F%20%3D%3E%20'FOO'">Try in REPL</a>

---
#### trim

> trim(str: string): string

```
R.trim('  foo  ') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/trim.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### type

> type(a: any): string

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/type.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try in REPL</a>

---
#### uniq

> uniq(arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr`.

```
R.uniq([1, 1, 2, 1])
// => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/uniq.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.uniq(%5B1%2C%201%2C%202%2C%201%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### uniqWith

> uniqWith(fn: Function, arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr` according to boolean returning function `fn`.

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/uniqWith.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expectedResult%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20fn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(fn%2C%20arr)%0A%0Aconsole.log(R.equals(result%2C%20expectedResult))%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### update

> update(i: number, replaceValue: T, arr: T[]): T[]

It returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`.

```
R.update(0, 'foo', ['bar', 'baz'])
// => ['foo', baz]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/update.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.update(0%2C%20'foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20baz%5D">Try in REPL</a>

---
#### values

> values(obj: Object): Array

It returns array with of all values in `obj`.

```
R.values({a: 1, b: 2})
// => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/values.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.values(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### without

> without(a: T[], b: T[]): T[]

It will return a new array based on `b` array.

This array contains all members of `b` array, that doesn't exist in `a` array.

Method `R.equals` is used to determine the existance of `b` members in `a` array.

```
R.without([1, 2], [1, 2, 3, 4])
// => [3, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/without.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.without(%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try in REPL</a>

---
#### zip

> zip(a: K[], b: V[]): Array

It will return a new array containing tuples of equally positions items from both lists. The returned list will be truncated to match the length of the shortest supplied list.

```
R.zip([1, 2], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([1, 2, 3, 4], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/zip.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zip(%5B1%2C%202%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try in REPL</a>

---
#### zipObj

> zipObj(a: K[], b: V[]): Object

It will return a new object with keys of `a` array and values of `b` array.

```
R.zipObj(['a', 'b', 'c'], [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(['a', 'b', 'c'], [1, 2])
//=> {a: 1, b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/zipObj.js)

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
 
 [intersperse](https://raw.githubusercontent.com/ramda/ramda/master/source/intersperse.js)
 
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
 
 [slice](https://raw.githubusercontent.com/ramda/ramda/master/source/slice.js)
 
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
 
 [assocPath](https://raw.githubusercontent.com/ramda/ramda/master/source/assocPath.js)
 
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
 
 [difference](https://raw.githubusercontent.com/ramda/ramda/master/source/difference.js)
 
 [differenceWith](https://raw.githubusercontent.com/ramda/ramda/master/source/differenceWith.js)
 
 [eqBy](https://raw.githubusercontent.com/ramda/ramda/master/source/eqBy.js)
 
 [gt](https://raw.githubusercontent.com/ramda/ramda/master/source/gt.js)
 
 [gte](https://raw.githubusercontent.com/ramda/ramda/master/source/gte.js)
 
 [innerJoin](https://raw.githubusercontent.com/ramda/ramda/master/source/innerJoin.js)
 
 [intersection](https://raw.githubusercontent.com/ramda/ramda/master/source/intersection.js)
 
 [lt](https://raw.githubusercontent.com/ramda/ramda/master/source/lt.js)
 
 [lte](https://raw.githubusercontent.com/ramda/ramda/master/source/lte.js)
 
 [pathEq](https://raw.githubusercontent.com/ramda/ramda/master/source/pathEq.js)
 
 [sortWith](https://raw.githubusercontent.com/ramda/ramda/master/source/sortWith.js)
 
 [symmetricDifference](https://raw.githubusercontent.com/ramda/ramda/master/source/symmetricDifference.js)
 
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
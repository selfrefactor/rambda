# Rambda

`Rambda` is TypeScript-focused alternative to the popular functional programming library **Ramda** alternative. It also has better speed and smaller size. - [Documentation](https://selfrefactor.github.io/rambda/#/)

![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/selfrefactor/rambda/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/selfrefactor/rambda.svg)](https://github.com/selfrefactor/rambda/graphs/contributors)

## ❯ Example use

```javascript
import { piped, map, filter } from 'rambda'

const result = piped(
	[1, 2, 3, 4],
  filter(x => x > 2),
  map(x => x * 2),
)
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ❯ Rambda's advantages

### TypeScript included

TypeScript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `TypeScript` are in development, which means that using **R.compose/R.pipe** can be problematic.

undefined

### Understandable source code due to little usage of internals

`Ramda` uses a lot of internals, which hides a lot of logic. Reading the full source code of a method can be challenging.

### Better VSCode experience

If the project is written in Javascript, then `go to source definition` action will lead you to actual implementation of the method.

### Immutable TS definitions

You can use immutable version of Rambda definitions, which is linted with ESLint `functional/prefer-readonly-type` plugin.

```
import {add} from 'rambda/immutable'
```

### Deno support

Latest version of **Ramba** available for `Deno` users is 3 years old. This is not the case with **Rambda** as most of recent releases are available for `Deno` users.

Also, `Rambda` provides you with included TS definitions:

```
// Deno extension(https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
// is installed and initialized
import * as R from "https://deno.land/x/rambda/mod.ts";
import * as Ramda from "https://deno.land/x/ramda/mod.ts";

R.add(1)('foo') // => will trigger warning in VSCode as it should
Ramda.add(1)('foo') // => will not trigger warning in VSCode
```

### Dot notation for `R.path`, `R.paths`, `R.assocPath` and `R.lensPath`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

Please note that since path input is turned into array, i.e. if you want `R.path(['a','1', 'b'], {a: {'1': {b: 2}}})` to return `2`, you will have to pass array path, not string path. If you pass `a.1.b`, it will turn path input to `['a', 1, 'b']`.
The other side effect is in `R.assocPath` and `R.dissocPath`, where inputs such as `['a', '1', 'b']` will be turned into `['a', 1, 'b']`.

### Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

### Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#-benchmarks) can prove that.

### Support

One of the main issues with `Ramda` is the slow process of releasing new versions. This is not the case with **Rambda** as releases are made on regular basis.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-advantages)

## ❯ Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or the following CDN link:

```
https://unpkg.com/rambda@CURRENT_VERSION/dist/rambda.umd.js
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

{{suggestPR}}
[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-ramda)

## Benchmarks
TODO

## API

### add

```typescript

add(a: number): (b: number) => number
```

It adds `a` and `b`.

> :boom: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
const result = R.pipe(
	2,
	R.add(3)
) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%092%2C%0A%09R.add(3)%0A)%20%2F%2F%20%3D%3E%20%205">Try this <strong>R.add</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
add(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.add</strong> source</summary>

```javascript
export function add(a) {
  return b => Number(a) + Number(b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'

test('with number', () => {
  expect(add(7)(10)).toBe(17)
})

test('string is bad input', () => {
  expect(add('foo')('bar')).toBeNaN()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { add } from 'rambda'

describe('R.add', () => {
  it('curried', () => {
    const result = add(4)(1)

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### all

```typescript

all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.pipe(
	list,
	R.all(predicate)
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.pipe(%0A%09list%2C%0A%09R.all(predicate)%0A)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.all</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.all</strong> source</summary>

```javascript
export function all(predicate) {
  return list => {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i])) {
        return false
      }
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { all } from './all.js'

const list = [0, 1, 2, 3, 4]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(list)).toBeTruthy()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn)(list)).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import * as R from 'rambda'

describe('all', () => {
  it('happy', () => {
    const result = R.pipe(
      [1, 2, 3],
      R.all(x => {
        x // $ExpectType number
        return x > 0
      }),
    )
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#all)

### allPass

```typescript

allPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F
```

It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

```javascript
const list = [[1, 2, 3, 4], [3, 4, 5]]
const result = R.pipe(
	list,
	R.filter(R.allPass([R.includes(2), R.includes(3)]))
) // => [[1, 2, 3, 4]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B3%2C%204%2C%205%5D%5D%0Aconst%20result%20%3D%20R.pipe(%0A%09list%2C%0A%09R.filter(R.allPass(%5BR.includes(2)%2C%20R.includes(3)%5D))%0A)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%2C%203%2C%204%5D%5D">Try this <strong>R.allPass</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
allPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;
```

</details>

<details>

<summary><strong>R.allPass</strong> source</summary>

```javascript
export function allPass(predicates) {
  return input => {
    let counter = 0
    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
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
import * as R from '../rambda.js'
import { allPass } from './allPass.js'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]
test('happy', () => {
  const result = R.pipe(list, R.filter(R.allPass([R.includes(2), R.includes(3)])))
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = R.pipe(list, R.filter(R.allPass([R.includes(12), R.includes(31)])))
  expect(result).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import * as R from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const list = [
      [1, 2, 3, 4],
      [3, 4, 5],
    ]
    const result = R.pipe(list, R.map(R.allPass([R.includes(3), R.includes(4)])))
    result // $ExpectType boolean[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allPass)

### any

```typescript

any<T>(predicate: (x: T) => boolean): (list: T[]) => boolean
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
any<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.any</strong> source</summary>

```javascript
export function any(predicate) {
  return list => {
    let counter = 0
    while (counter < list.length) {
      if (predicate(list[counter], counter)) {
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
import { any } from './any.js'

const list = [1, 2, 3]

test('happy', () => {
  expect(any(x => x > 2)(list)).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { any } from 'rambda'

describe('R.any', () => {
  it('happy', () => {
    const result = any(
      x => {
        x // $ExpectType number
        return x > 2
      },
      [1, 2, 3],
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

anyPass<T, TF1 extends T, TF2 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2],
): (a: T) => a is TF1 | TF2
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

> :boom: Function accepts only one input, but in Ramda it accepts indefinite number of arguments.

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
anyPass<T, TF1 extends T, TF2 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2],
): (a: T) => a is TF1 | TF2;
anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3, (a: T) => a is TF4],
): (a: T) => a is TF1 | TF2 | TF3 | TF4;
anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5;
anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5,
    (a: T) => a is TF6
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5 | TF6;
anyPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;
```

</details>

<details>

<summary><strong>R.anyPass</strong> source</summary>

```javascript
export function anyPass(predicates) {
  return input => {
    let counter = 0
    while (counter < predicates.length) {
      if (predicates[counter](input)) {
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
  const rules = [x => typeof x === 'string', x => x > 10]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTruthy()
  expect(predicate(6)).toBeFalsy()
})

test('happy', () => {
  const rules = [x => typeof x === 'string', x => x > 10]

  expect(anyPass(rules)(11)).toBeTruthy()
  expect(anyPass(rules)(undefined)).toBeFalsy()
})

const obj = {
  a: 1,
  b: 2,
}

test('when returns true', () => {
  const conditionArr = [val => val.a === 1, val => val.a === 2]

  expect(anyPass(conditionArr)(obj)).toBeTruthy()
})

test('when returns false + curry', () => {
  const conditionArr = [val => val.a === 2, val => val.b === 3]

  expect(anyPass(conditionArr)(obj)).toBeFalsy()
})

test('with empty predicates list', () => {
  expect(anyPass([])(3)).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { anyPass, filter } from 'rambda'

describe('anyPass', () => {
  it('issue #604', () => {
    const plusEq = (w: number, x: number, y: number, z: number) => w + x === y + z
    const result = anyPass([plusEq])(3, 3, 3, 3)

    result // $ExpectType boolean
  })
  it('issue #642', () => {
    const isGreater = (num: number) => num > 5
    const pred = anyPass([isGreater])
    const xs = [0, 1, 2, 3]

    const filtered1 = filter(pred)(xs)
    filtered1 // $ExpectType number[]
    const filtered2 = xs.filter(pred)
    filtered2 // $ExpectType number[]
  })
  it('functions as a type guard', () => {
    const isString = (x: unknown): x is string => typeof x === 'string'
    const isNumber = (x: unknown): x is number => typeof x === 'number'
    const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean'

    const isStringNumberOrBoolean = anyPass([isString, isNumber, isBoolean])

    const aValue: unknown = 1

    if (isStringNumberOrBoolean(aValue)) {
      aValue // $ExpectType string | number | boolean
    }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyPass)

### append

```typescript

append<T>(el: T): (list: T[]) => T[]
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
append<T>(el: T): (list: T[]) => T[];
append<T>(el: T): (list: readonly T[]) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function append(x) {
  return list=> {
		const clone = cloneList(list)
  clone.push(x)

  return clone
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { append } from './append.js'

test('happy', () => {
  expect(append('tests')( ['write', 'more'])).toEqual(['write', 'more', 'tests'])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import {pipe,append, prepend} from 'rambda'

const listOfNumbers = [1, 2, 3]

describe('R.append/R.prepend', () => {
	it('happy', () => {
	const result = pipe(
		listOfNumbers,
		append(4),
		prepend(0)
	)
	result // $ExpectType number[]
	})
	it('with object', () => {
	const result = pipe(
		[{a:1}],
		append({a:10}),
		prepend({a:20})
	)
	result // $ExpectType { a: number; }[]
	})
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### assoc

```typescript

assoc<T, K extends PropertyKey>(prop: K, val: T): <U>(obj: U) => U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

> :boom: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3)({a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203)(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try this <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
assoc<T, K extends PropertyKey>(prop: K, val: T): <U>(obj: U) => U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
export function assoc(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assoc } from './assoc.js'

test('adds a key to an empty object', () => {
  expect(assoc('a', 1, {})).toEqual({ a: 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc('b', 2, { a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({ a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, { a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({ a: 1 })

  expect(result).toEqual({
    a: 1,
    b: 2,
  })
})

test('changes an existing key', () => {
  expect(assoc('a', 2, { a: 1 })).toEqual({ a: 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc('a', 1, undefined)).toEqual({ a: 1 })
})

test('null is considered an empty object', () => {
  expect(assoc('a', 1, null)).toEqual({ a: 1 })
})

test('value can be null', () => {
  expect(assoc('a', null, null)).toEqual({ a: null })
})

test('value can be undefined', () => {
  expect(assoc('a', undefined, null)).toEqual({ a: undefined })
})

test('assignment is shallow', () => {
  expect(assoc('a', { b: 2 }, { a: { c: 3 } })).toEqual({ a: { b: 2 } })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { assoc } from 'rambda'

type Obj = {
  str: string
  num: number
}

const obj: Obj = { str: 'foo', num: 1 }
const newValue = 2
const newProp = 'num'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc(newProp, newValue)(obj)

    result.num // $ExpectType number
    result.str // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assoc)

### assocPath

```typescript

assocPath<T>(path: Path, val: unknown): (obj: unknown) => T
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

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
assocPath<T>(path: Path, val: unknown): (obj: unknown) => T;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { assoc } from './assoc.js'

export function assocPath(path, newValue) {
  return input => {
    const pathArrValue = createPath(path)
    if (pathArrValue.length === 0) {
      return newValue
    }

    const index = pathArrValue[0]
    if (pathArrValue.length > 1) {
      const nextInput =
        typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
          ? {}
          : input[index]

      newValue = assocPath(
        Array.prototype.slice.call(pathArrValue, 1),
        newValue,
      )(nextInput)
    }

    return assoc(index, newValue)(input)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { assocPath } from './assocPath.js'

test('happy', () => {
  const path = 'a.b.d'
  const input = {
    a: {
      b: {
        c: 1,
      },
    },
  }
  console.log(assocPath(path, 2)(input))
  expect(assocPath(path, 2)(input)).toEqual({
    a: {
      b: {
        c: 1,
        d: 2,
      },
    },
  })
})

test("difference with ramda - doesn't overwrite primitive values with keys in the path", () => {
  const obj = { a: 'str' }
  const result = assocPath(['a', 'b'], 42)(obj)
  console.log(result)

  expect(result).toEqual({
    a: {
      0: 's',
      1: 't',
      2: 'r',
      b: 42,
    },
  })
})

test('adds a key to an empty object', () => {
  expect(assocPath(['a'], 1)({})).toEqual({ a: 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath('b', 2, { a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath('b.c', 2)({ a: 1 })).toEqual({
    a: 1,
    b: { c: 2 },
  })
})

test('adds a nested key to a nested non-empty object', () => {
  expect(
    assocPath(
      'b.d',
      3,
    )({
      a: 1,
      b: { c: 2 },
    }),
  ).toEqual({
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
  })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath('b', 2)({ a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath('b.c', 2)({ a: 1 })).toEqual({
    a: 1,
    b: { c: 2 },
  })
})

test('changes an existing key', () => {
  expect(assocPath('a', 2)({ a: 1 })).toEqual({ a: 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPath('a', 1)(undefined)).toEqual({ a: 1 })
})

test('assignment is shallow', () => {
  expect(assocPath('a', { b: 2 })({ a: { c: 3 } })).toEqual({ a: { b: 2 } })
})

test('empty array as path', () => {
  const result = assocPath(
    [],
    3,
  )({
    a: 1,
    b: 2,
  })
  expect(result).toBe(3)
})

test('happy', () => {
  const expected = { foo: { bar: { baz: 42 } } }
  const result = assocPath(['foo', 'bar', 'baz'], 42, { foo: null })
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { assocPath, dissocPath } from 'rambda'

describe('R.assocPath - needs explicit output type', () => {
  interface Output {
    a: number
    foo: { bar: number }
  }
  it('happy', () => {
    const result = assocPath<Output>('foo.bar', 2, { a: 1 })
    result // $ExpectType Output
  })
  it('curried', () => {
    const result = assocPath<Output>('foo.bar', 2)({ a: 1 })
    result // $ExpectType Output
  })
})

describe('R.dissocPath - needs explicit output type', () => {
  interface Output {
    a: number
    foo: { b: number }
  }
  it('happy', () => {
    const result = dissocPath<Output>('foo.bar', {
      a: 1,
      foo: { b: 2, bar: 3 },
    })
    result // $ExpectType Output
  })
  it('curried', () => {
    const result = dissocPath<Output>('foo.bar')({
      a: 1,
      foo: { b: 2, bar: 3 },
    })
    result // $ExpectType Output
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assocPath)

### both

```typescript

both<T, RT1 extends T>(firstPredicate: (a: T) => a is RT1): <RT2 extends T>(secondPredicate: (a: T) => a is RT2) => (a: T) => a is RT1 & RT2
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
both<T, RT1 extends T>(firstPredicate: (a: T) => a is RT1): <RT2 extends T>(secondPredicate: (a: T) => a is RT2) => (a: T) => a is RT1 & RT2;
both<Args extends any[]>(firstPredicate: (...args: Args) => boolean): (secondPredicate: (...args: Args) => boolean) => (...args: Args) => boolean;
both<T, RT1 extends T, RT2 extends T>(firstPredicate: (a: T) => a is RT1, secondPredicate: (a: T) => a is RT2): (a: T) => a is RT1 & RT2;
both<Args extends any[]>(firstPredicate: (...args: Args) => boolean, secondPredicate: (...args: Args) => boolean): (...args: Args) => boolean;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#both)

### checkObjectWithSpec

```typescript

checkObjectWithSpec<T>(spec: T): <U>(testObj: U) => boolean
```

It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

```javascript
const condition = R.checkObjectWithSpec({
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20R.checkObjectWithSpec(%7B%0A%20%20a%20%3A%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20%22string%22%2C%0A%20%20b%20%3A%20x%20%3D%3E%20x%20%3D%3D%3D%204%0A%7D)%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%22foo%22%2C%0A%20%20b%20%3A%204%2C%0A%20%20c%20%3A%2011%2C%0A%7D%0A%0Aconst%20result%20%3D%20condition(input)%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.checkObjectWithSpec</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
checkObjectWithSpec<T>(spec: T): <U>(testObj: U) => boolean;
```

</details>

<details>

<summary><strong>R.checkObjectWithSpec</strong> source</summary>

```javascript
export function checkObjectWithSpec(conditions) {
  return input => {
    let shouldProceed = true
    for (const prop in conditions) {
      if (!shouldProceed) {
        continue
      }
      const result = conditions[prop](input[prop])
      if (shouldProceed && result === false) {
        shouldProceed = false
      }
    }

    return shouldProceed
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { checkObjectWithSpec } from './checkObjectWithSpec.js'
import { equals } from './equals.js'

test('when true', () => {
  const result = checkObjectWithSpec({
    a: equals('foo'),
    b: equals('bar'),
  })({
    a: 'foo',
    b: 'bar',
    x: 11,
    y: 19,
  })

  expect(result).toBeTruthy()
})

test('when false | early exit', () => {
  let counter = 0
  const equalsFn = expected => input => {
    console.log(expected, 'expected')
    counter++

    return input === expected
  }
  const predicate = checkObjectWithSpec({
    a: equalsFn('foo'),
    b: equalsFn('baz'),
  })
  expect(
    predicate({
      a: 'notfoo',
      b: 'notbar',
    }),
  ).toBeFalsy()
  expect(counter).toBe(1)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { checkObjectWithSpec, equals } from 'rambda'

describe('R.checkObjectWithSpec', () => {
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
    const result = checkObjectWithSpec(conditions)(input)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#checkObjectWithSpec)

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
export function complement(fn) {
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

  expect(fn([1, 2, 3])).toBeTruthy()
})

test('with multiple parameters', () => {
  const between = (a, b, c) => a < b && b < c
  const f = complement(between)
  expect(f(4, 5, 11)).toBeFalsy()
  expect(f(12, 2, 6)).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { complement, isNil } from 'rambda'

describe('R.complement', () => {
  it('happy', () => {
    const fn = complement(isNil)
    const result = fn(null)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### concat

```typescript

concat<T>(x: T[]): (y: T[]) => T[]
```

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20result%20%3D%20R.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try this <strong>R.concat</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
concat<T>(x: T[]): (y: T[]) => T[];
concat(x: string): (y: string) => string;
```

</details>

<details>

<summary><strong>R.concat</strong> source</summary>

```javascript
export function concat(x, y) {
  if (arguments.length === 1) {
    return _y => concat(x, _y)
  }

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { concat } from './concat.js'

test('happy', () => {
  const arr1 = ['a', 'b', 'c']
  const arr2 = ['d', 'e', 'f']

  const a = concat(arr1, arr2)
  const b = concat(arr1)(arr2)
  const expectedResult = ['a', 'b', 'c', 'd', 'e', 'f']

  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('with strings', () => {
  expect(concat('ABC', 'DEF')).toBe('ABCDEF')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { concat } from 'rambda'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### count

```typescript

count<T>(predicate: (x: T) => boolean): (list: T[]) => number
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
count<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.count</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function count(predicate, list) {
  if (arguments.length === 1) {
    return _list => count(predicate, _list)
  }
  if (!isArray(list)) {
    return 0
  }

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
  const list = [1, 2, { a: 1 }, 3, { a: 1 }]

  expect(count(predicate)(list)).toBe(2)
})

test('rambdax/issues/86', () => {
  const arr = [true, false, true, false]
  expect(count(Boolean, arr)).toBe(countRamda(Boolean, arr))
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { count } from 'rambda'

const list = [1, 2, 3]
const predicate = (x: number) => x > 1

describe('R.count', () => {
  it('happy', () => {
    const result = count(predicate, list)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = count(predicate)(list)

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#count)

### countBy

```typescript

countBy<T>(fn: (a: T) => string | number, list: T[]): { [index: string]: number }
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
countBy<T>(fn: (a: T) => string | number, list: T[]): { [index: string]: number };
```

</details>

<details>

<summary><strong>R.countBy</strong> source</summary>

```javascript
export function countBy(fn, list) {
  if (arguments.length === 1) {
    return _list => countBy(fn, _list)
  }
  const willReturn = {}

  list.forEach(item => {
    const key = fn(item)
    if (!willReturn[key]) {
      willReturn[key] = 1
    } else {
      willReturn[key]++
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

const list = ['a', 'A', 'b', 'B', 'c', 'C']

test('happy', () => {
  const result = countBy(x => x.toLowerCase(), list)
  expect(result).toEqual({
    a: 2,
    b: 2,
    c: 2,
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { countBy } from 'rambda'

const transformFn = (x: string) => x.toLowerCase()
const list = ['a', 'A', 'b', 'B', 'c', 'C']

describe('R.countBy', () => {
  it('happy', () => {
    const result = countBy(transformFn, list)

    result // $ExpectType { [index: string]: number; }
  })
  it('curried', () => {
    const result = countBy(transformFn)(list)

    result // $ExpectType { [index: string]: number; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#countBy)

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dec)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T, input: T | null | undefined): T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

 Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

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
defaultTo<T>(defaultValue: T): <U>(input: U | null | undefined) => EqualTypes<U, T> extends true ? T : never
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function isFalsy(input) {
  return input === undefined || input === null || Number.isNaN(input) === true
}

export function defaultTo(defaultArgument, input) {
  if (arguments.length === 1) {
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
  expect(defaultTo('foo')(Number.NaN)).toBe('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toBe('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toBeFalsy()
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toBe('bar')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { defaultTo } from 'rambda'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

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
difference<T extends unknown>(a: T[]): <U extends unknown>(b: U[]) => EqualTypes<U, T> extends true ? T[] : never
```

</details>

<details>

<summary><strong>R.difference</strong> source</summary>

```javascript
import { includes } from './includes.js'
import { uniq } from './uniq.js'

export function difference(a, b) {
  if (arguments.length === 1) {
    return _b => difference(a, _b)
  }

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
  const a = [1, 2, 3, 4]
  const b = [3, 4, 5, 6]
  expect(difference(a)(b)).toEqual([1, 2])

  expect(difference([], [])).toEqual([])
})

test('difference with objects', () => {
  const a = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const b = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  expect(difference(a, b)).toEqual([{ id: 1 }, { id: 2 }])
})

test('no duplicates in first list', () => {
  const M2 = [1, 2, 3, 4, 1, 2, 3, 4]
  const N2 = [3, 3, 4, 4, 5, 5, 6, 6]
  expect(difference(M2, N2)).toEqual([1, 2])
})

test('should use R.equals', () => {
  expect(difference([1], [1])).toHaveLength(0)
  expect(differenceRamda([Number.NaN], [Number.NaN])).toHaveLength(0)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { difference } from 'rambda'

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
import { _indexOf } from './equals.js'

export function differenceWithFn(fn, a) {
  return b => {
    const willReturn = []
    const [first, second] = a.length >= b.length ? [a, b] : [b, a]

    first.forEach(item => {
      const hasItem = second.some(secondItem => fn(item, secondItem))
      if (!hasItem && _indexOf(item, willReturn) === -1) {
        willReturn.push(item)
      }
    })

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { differenceWith } from './differenceWith.js'

const fn = (a, b) => a.x === b.x

test('same length of list', () => {
  const result = differenceWith(fn, [{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }])
  expect(result).toEqual([{ x: 2 }])
})

test('different length of list', () => {
  const foo = [{ x: 1 }, { x: 2 }, { x: 3 }]
  const bar = [{ x: 3 }, { x: 4 }]
  const result = differenceWith(fn, foo, bar)
  expect(result).toEqual([{ x: 1 }, { x: 2 }])
})
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
export function dissoc(prop, obj) {
  if (arguments.length === 1) {
    return _obj => dissoc(prop, _obj)
  }

  if (obj === null || obj === undefined) {
    return {}
  }

  const willReturn = {}
  for (const p in obj) {
    willReturn[p] = obj[p]
  }
  delete willReturn[prop]

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
  expect(
    dissoc('b')({
      a: 1,
      b: 2,
    }),
  ).toEqual({ a: 1 })
})

test("property doesn't exists", () => {
  expect(
    dissoc('c', {
      a: 1,
      b: 2,
    }),
  ).toEqual({
    a: 1,
    b: 2,
  })
})

test('works with non-string property', () => {
  expect(
    dissoc(42, {
      a: 1,
      42: 2,
    }),
  ).toEqual({ a: 1 })

  expect(
    dissoc(null, {
      a: 1,
      null: 2,
    }),
  ).toEqual({ a: 1 })

  expect(
    dissoc(undefined, {
      a: 1,
      undefined: 2,
    }),
  ).toEqual({ a: 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height) {
    this.width = width
    this.height = height
  }
  const area = (Rectangle.prototype.area = function () {
    return this.width * this.height
  })
  const rect = new Rectangle(7, 6)

  expect(dissoc('area', rect)).toEqual({
    width: 7,
    height: 6,
  })

  expect(dissoc('width', rect)).toEqual({
    height: 6,
    area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width: 7,
    height: 6,
    area,
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### dissocPath

```typescript

dissocPath<T>(path: Path): (obj: unknown) => T
```

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

```javascript
const result = R.dissocPath(['a', 'b'])({a: {b: 1, c: 2}})
// => {a: {c: 2}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissocPath(%5B'a'%2C%20'b'%5D)(%7Ba%3A%20%7Bb%3A%201%2C%20c%3A%202%7D%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20%7Bc%3A%202%7D%7D">Try this <strong>R.dissocPath</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dissocPath<T>(path: Path): (obj: unknown) => T;
```

</details>

<details>

<summary><strong>R.dissocPath</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { omit } from './omit.js'
import { path } from './path.js'
import { update } from './update.js'

export function removeIndex(index, list) {
  if (index <= 0) {
    return list.slice(1)
  }
  if (index >= list.length - 1) {
    return list.slice(0, list.length - 1)
  }

  return [...list.slice(0, index), ...list.slice(index + 1)]
}

export function dissocPath(pathInput) {
  return input => {
    const pathArrValue = createPath(pathInput)
    if (pathArrValue.length === 0) {
      return input
    }

    const pathResult = path(pathArrValue, input)
    if (pathResult === undefined) {
      return input
    }

    const index = pathArrValue[0]
    const condition =
      typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
    if (pathArrValue.length > 1) {
      const nextInput = condition
        ? Number.isInteger(pathArrValue[1])
          ? []
          : {}
        : input[index]
      const nextPathInput = Array.prototype.slice.call(pathArrValue, 1)
      const intermediateResult = dissocPath(nextPathInput)(nextInput)
      if (isArray(input)) {
        return update(index, intermediateResult)(input)
      }

      return {
        ...input,
        [index]: intermediateResult,
      }
    }
    if (isArray(input)) {
      return removeIndex(index, input)
    }

    return omit([index])(input)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dissocPath } from './dissocPath.js'

test('simple example', () => {
  const result = dissocPath(['foo', 'bar'])({ a: 1, foo: { bar: 2 } })
  expect(result).toEqual({
    a: 1,
    foo: {},
  })
})

const testInput = {
  a: {
    b: 1,
    c: 2,
    d: { e: 3 },
  },
  f: [
    { g: 4 },
    {
      h: 5,
      i: 6,
      j: {
        k: 7,
        l: 8,
      },
    },
  ],
  m: 9,
}

test('update array', () => {
  const expected = {
    a: {
      b: 1,
      c: 2,
      d: { e: 3 },
    },
    f: [
      { g: 4 },
      {
        h: 5,
        j: {
          k: 7,
          l: 8,
        },
      },
    ],
    m: 9,
  }
  const result = dissocPath('f.1.i')(testInput)
  expect(result).toEqual(expected)
})

test('update object', () => {
  const result = dissocPath('a.b')(testInput)
  const expected = {
    a: {
      c: 2,
      d: { e: 3 },
    },
    f: [
      { g: 4 },
      {
        h: 5,
        i: 6,
        j: {
          k: 7,
          l: 8,
        },
      },
    ],
    m: 9,
  }
  expect(result).toEqual(expected)
})

test('does not try to omit inner properties that do not exist', () => {
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
    f: 5,
  }
  const obj2 = dissocPath(['x', 'z'])(obj1)
  expect(obj2).toEqual(obj1)
})

test('leaves an empty object when all properties omitted', () => {
  const obj1 = {
    a: 1,
    b: { c: 2 },
    d: 3,
  }
  const obj2 = dissocPath(['b', 'c'])(obj1)
  expect(obj2).toEqual({
    a: 1,
    b: {},
    d: 3,
  })
})

test('accepts empty path', () => {
  expect(
    dissocPath([])({
      a: 1,
      b: 2,
    }),
  ).toEqual({
    a: 1,
    b: 2,
  })
})

test('allow integer to be used as key for object', () => {
  expect(
    dissocPath([42])({
      42: 3,
      a: 1,
      b: 2,
    }),
  ).toEqual({
    a: 1,
    b: 2,
  })
})

test('support remove null/undefined value path', () => {
  expect(
    dissocPath(['c', 'd'])({
      a: 1,
      b: 2,
      c: null,
    }),
  ).toEqual({
    a: 1,
    b: 2,
    c: null,
  })
  expect(
    dissocPath(['c', 'd'])({
      a: 1,
      b: 2,
      c: undefined,
    }),
  ).toEqual({
    a: 1,
    b: 2,
    c: undefined,
  })

  const obj1 = {
    a: 1,
    b: 2,
  }
  expect(dissocPath(['c', 'd'])(obj1)).toEqual(obj1)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissocPath)

### divide

```typescript

divide(x: number): (y: number) => number
```

```javascript
R.divide(71)(100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71)(100)%20%2F%2F%20%3D%3E%200.71">Try this <strong>R.divide</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
divide(x: number): (y: number) => number;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#divide)

### drop

```typescript

drop<T>(howMany: number): {
  (input: string): string
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
drop<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};
```

</details>

<details>

<summary><strong>R.drop</strong> source</summary>

```javascript
export function drop(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _list => drop(howManyToDrop, _list)
  }

  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'node:assert'

import { drop } from './drop.js'

test('with array', () => {
  expect(drop(2)(['foo', 'bar', 'baz'])).toEqual(['baz'])
  expect(drop(3, ['foo', 'bar', 'baz'])).toEqual([])
  expect(drop(4, ['foo', 'bar', 'baz'])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toBe('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3])
})

test('should return copy', () => {
  const xs = [1, 2, 3]

  assert.notStrictEqual(drop(0, xs), xs)
  assert.notStrictEqual(drop(-1, xs), xs)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { drop } from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.drop - array', () => {
  it('happy', () => {
    drop(howMany, list) // $ExpectType number[]
  })
  it('curried', () => {
    drop(howMany)(list) // $ExpectType unknown[]
  })
})

describe('R.drop - string', () => {
  it('happy', () => {
    drop(howMany, str) // $ExpectType string
  })
  it('curried', () => {
    drop(howMany)(str) // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number): {
  (input: string): string
```

It returns `howMany` items dropped from  the end of list or string `input`.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0Aconst%20result%20%3D%20R.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try this <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropLast<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};
```

</details>

<details>

<summary><strong>R.dropLast</strong> source</summary>

```javascript
export function dropLast(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => dropLast(howManyToDrop, _listOrString)
  }

  return howManyToDrop > 0
    ? listOrString.slice(0, -howManyToDrop)
    : listOrString.slice()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'node:assert'

import { dropLast } from './dropLast.js'

test('with array', () => {
  expect(dropLast(2)(['foo', 'bar', 'baz'])).toEqual(['foo'])
  expect(dropLast(3, ['foo', 'bar', 'baz'])).toEqual([])
  expect(dropLast(4, ['foo', 'bar', 'baz'])).toEqual([])
})

test('with string', () => {
  expect(dropLast(3, 'rambda')).toBe('ram')
})

test('with non-positive count', () => {
  expect(dropLast(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3])
})

test('should return copy', () => {
  const xs = [1, 2, 3]

  assert.notStrictEqual(dropLast(0, xs), xs)
  assert.notStrictEqual(dropLast(-1, xs), xs)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLast)

### dropLastWhile

```typescript

dropLastWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[]
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
dropLastWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropLastWhile</strong> source</summary>

```javascript
export function dropLastWhile(predicate) {
  return list => {
    if (list.length === 0) {
      return list
    }

    const toReturn = []
    let counter = list.length

    while (counter) {
      const item = list[--counter]
      if (!predicate(item)) {
        toReturn.push(item)
        break
      }
    }

    while (counter) {
      toReturn.push(list[--counter])
    }

    return toReturn.reverse()
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropLastWhile } from './dropLastWhile.js'

const list = [1, 2, 3, 4, 5]

test('with list', () => {
  const result = dropLastWhile(x => x >= 3, list)
  expect(result).toEqual([1, 2])
})

test('with empty list', () => {
  expect(dropLastWhile(() => true, [])).toEqual([])
  expect(dropLastWhile(() => false, [])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeatsBy

```typescript

dropRepeatsBy<T, U>(fn: (a: T) => U): (list: T[]) => T[]
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
dropRepeatsBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsBy)

### dropRepeatsWith

```typescript

dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[]
```

```javascript
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'))(list)

// => [{a:1,b:2}, {a:2, b:4}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A1%2Cb%3A3%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D%0Aconst%20result%20%3D%20R.dropRepeatsWith(R.prop('a'))(list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D">Try this <strong>R.dropRepeatsWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsWith)

### dropWhile

```typescript

dropWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[]
```

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate)(list)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0Aconst%20result%20%3D%20R.dropWhile(predicate)(list)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.dropWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropWhile</strong> source</summary>

```javascript
export function dropWhile(predicate) {
  return iterable => {
    const toReturn = []
    let counter = 0

    while (counter < iterable.length) {
      const item = iterable[counter++]
      if (!predicate(item)) {
        toReturn.push(item)
        break
      }
    }

    while (counter < iterable.length) {
      toReturn.push(iterable[counter++])
    }

    return toReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropWhile } from './dropWhile.js'

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = x => x < 3
  const result = dropWhile(predicate, list)
  expect(result).toEqual([3, 4])
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
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { dropWhile, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.dropWhile', () => {
  it('happy', () => {
    const result = pipe(
      list,
      dropWhile(x => x > 1),
    )

    result // $ExpectType number[]
  })
  it('with index', () => {
    const result = pipe(
      list,
      dropWhile((x, i) => {
        i // $ExpectType number
        return x + i > 2
      }),
    )

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropWhile)

### eqBy

```typescript

eqBy<T>(fn: (x: T) => unknown, a: T): (b: T) => boolean
```

```javascript
const result = R.eqBy(Math.abs, 5)(-5)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.eqBy(Math.abs%2C%205)(-5)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
eqBy<T>(fn: (x: T) => unknown, a: T): (b: T) => boolean;
```

</details>

<details>

<summary><strong>R.eqBy</strong> source</summary>

```javascript
import { equals } from './equals.js'

export function eqBy(fn, a) {
  return b => equals(fn(a), fn(b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqByFn } from './eqBy.js'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqByFn(Math.abs, 5, 5)).toBe(true)
  expect(eqByFn(Math.abs, 5, -5)).toBe(true)
  expect(eqByFn(Math.abs, -5, 5)).toBe(true)
  expect(eqByFn(Math.abs, -5, -5)).toBe(true)
  expect(eqByFn(Math.abs, 42, 99)).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqByFn(Math.abs, Number.NaN, Number.NaN)).toBe(true)
  expect(eqByFn(Math.abs, [42], [42])).toBe(true)
  expect(eqByFn(x => x, { a: 1 }, { a: 1 })).toBe(true)
  expect(eqByFn(x => x, { a: 1 }, { a: 2 })).toBe(false)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqBy)

### eqProps

```typescript

eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean
```

It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

```javascript
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1)(obj2)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj1%20%3D%20%7Ba%3A%201%2C%20b%3A2%7D%0Aconst%20obj2%20%3D%20%7Ba%3A%201%2C%20b%3A3%7D%0Aconst%20result%20%3D%20R.eqProps('a'%2C%20obj1)(obj2)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqProps</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;
```

</details>

<details>

<summary><strong>R.eqProps</strong> source</summary>

```javascript
import { equals } from './equals.js'
import { prop } from './prop.js'

export function eqProps(property, objA) {
  return objB => equals(prop(property, objA), prop(property, objB))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqProps } from './eqProps.js'

const obj1 = {
  a: 1,
  b: 2,
}
const obj2 = {
  a: 1,
  b: 3,
}

test('props are equal', () => {
  const result = eqProps('a', obj1, obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1, obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c', obj1, obj2)
  expect(result).toBeTruthy()
})

test('can handle null or undefined object', () => {
  expect(eqProps('value', { value: 0 }, null)).toBeFalsy()
  expect(eqProps('value', { value: 0 }, undefined)).toBeFalsy()
  expect(eqProps('value', null, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: undefined })).toBeTruthy()
  expect(eqProps('value', null, { value: undefined })).toBeTruthy()
  expect(eqProps('value', { value: undefined }, undefined)).toBeTruthy()
  expect(eqProps('value', { value: undefined }, null)).toBeTruthy()
  expect(eqProps('value', {}, null)).toBeTruthy()
  expect(eqProps('value', {}, undefined)).toBeTruthy()
  expect(eqProps('value', null, {})).toBeTruthy()
  expect(eqProps('value', undefined, {})).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { eqProps } from 'rambda'

const obj1 = { a: { b: 1 }, c: 2 }
const obj2 = { a: { b: 1 }, c: 3 }

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

export function _lastIndexOf(valueToFind, list) {
  if (!isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }

  const typeOfValue = type(valueToFind)
  if (!['Array', 'NaN', 'Object', 'RegExp'].includes(typeOfValue)) {
    return list.lastIndexOf(valueToFind)
  }

  const { length } = list
  let index = length
  let foundIndex = -1

  while (--index > -1 && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index
    }
  }

  return foundIndex
}

export function _indexOf(valueToFind, list) {
  if (!isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }

  const typeOfValue = type(valueToFind)
  if (!['Array', 'NaN', 'Object', 'RegExp'].includes(typeOfValue)) {
    return list.indexOf(valueToFind)
  }

  let index = -1
  let foundIndex = -1
  const { length } = list

  while (++index < length && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index
    }
  }

  return foundIndex
}

function _arrayFromIterator(iter) {
  const list = []
  let next
  while (!(next = iter.next()).done) {
    list.push(next.value)
  }

  return list
}

function _compareSets(a, b) {
  if (a.size !== b.size) {
    return false
  }

  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1)

  return filtered.length === 0
}

function compareErrors(a, b) {
  if (a.message !== b.message) {
    return false
  }
  if (a.toString !== b.toString) {
    return false
  }

  return a.toString() === b.toString()
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) {
    return [false]
  }

  return [true, maybeDate.getTime()]
}

function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) {
    return [false]
  }

  return [true, maybeRegex.toString()]
}

export function equals(a, b) {
  if (arguments.length === 1) {
    return _b => equals(a, _b)
  }

  if (Object.is(a, b)) {
    return true
  }

  const aType = type(a)

  if (aType !== type(b)) {
    return false
  }
  if (aType === 'Function') {
    return a.name === undefined ? false : a.name === b.name
  }

  if (['NaN', 'Null', 'Undefined'].includes(aType)) {
    return true
  }

  if (['BigInt', 'Number'].includes(aType)) {
    if (Object.is(-0, a) !== Object.is(-0, b)) {
      return false
    }

    return a.toString() === b.toString()
  }

  if (['Boolean', 'String'].includes(aType)) {
    return a.toString() === b.toString()
  }

  if (aType === 'Array') {
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString()) {
      return false
    }

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (
          aCloneInstance !== bClone[aCloneIndex] &&
          !equals(aCloneInstance, bClone[aCloneIndex])
        ) {
          loopArrayFlag = false
        }
      }
    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false
  }
  if (bRegex[0]) {
    return false
  }

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false
  }
  if (bDate[0]) {
    return false
  }

  if (a instanceof Error) {
    if (!(b instanceof Error)) {
      return false
    }

    return compareErrors(a, b)
  }

  if (aType === 'Set') {
    return _compareSets(a, b)
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length) {
      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance]
        const bValue = b[aKeyInstance]

        if (aValue !== bValue && !equals(aValue, bValue)) {
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
import { equals as equalsRamda } from 'ramda'
import { equals } from './equals.js'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTruthy()
  expect(expectFalseFirst).toBeFalsy()
  expect(expectFalseSecond).toBeFalsy()
})

test('with array of objects', () => {
  const list1 = [{ a: 1 }, [{ b: 2 }]]
  const list2 = [{ a: 1 }, [{ b: 2 }]]
  const list3 = [{ a: 1 }, [{ b: 3 }]]

  expect(equals(list1, list2)).toBeTruthy()
  expect(equals(list1, list3)).toBeFalsy()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toBeTruthy()
  expect(equals(/s/, /d/)).toBeFalsy()
  expect(equals(/a/gi, /a/gi)).toBeTruthy()
  expect(equals(/a/gim, /a/gim)).toBeTruthy()
  expect(equals(/a/gi, /a/i)).toBeFalsy()
})

test('not a number', () => {
  expect(equals([Number.NaN], [Number.NaN])).toBeTruthy()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toBeTruthy()
  expect(equals(new Number(0), new Number(1))).toBeFalsy()
  expect(equals(new Number(1), new Number(0))).toBeFalsy()
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toBeTruthy()
  expect(equals(new String(''), new String('x'))).toBeFalsy()
  expect(equals(new String('x'), new String(''))).toBeFalsy()
  expect(equals(new String('foo'), new String('foo'))).toBeTruthy()
  expect(equals(new String('foo'), new String('bar'))).toBeFalsy()
  expect(equals(new String('bar'), new String('foo'))).toBeFalsy()
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toBeTruthy()
  expect(equals(new Boolean(false), new Boolean(false))).toBeTruthy()
  expect(equals(new Boolean(true), new Boolean(false))).toBeFalsy()
  expect(equals(new Boolean(false), new Boolean(true))).toBeFalsy()
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toBeFalsy()
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('YYY'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTruthy()
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTruthy()
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toBeTruthy()
  expect(equals(new Date(1), new Date(1))).toBeTruthy()
  expect(equals(new Date(0), new Date(1))).toBeFalsy()
  expect(equals(new Date(1), new Date(0))).toBeFalsy()
  expect(equals(new Date(0), {})).toBeFalsy()
  expect(equals({}, new Date(0))).toBeFalsy()
})

test('ramda spec', () => {
  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 2,
        b: 3,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 3,
        b: 3,
      },
    ),
  ).toBeFalsy()

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
      },
    ),
  ).toBeFalsy()
})

test('works with boolean tuple', () => {
  expect(equals([true, false], [true, false])).toBeTruthy()
  expect(equals([true, false], [true, true])).toBeFalsy()
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
  expect(equals(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a: { b: 1 } }
  const objSecond = { a: { b: 2 } }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalsy()

  expect(equals(undefined, undefined)).toBeTruthy()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{ a: 1 }, { a: 2 }])
  const toCompareSame = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  const testSet = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
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
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTruthy()

  expect(equals([1, 2, 3], [1, 2])).toBeFalsy()

  expect(equals(1, 1)).toBeTruthy()

  expect(equals(1, '1')).toBeFalsy()

  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 1,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: false,
      },
      {
        a: 1,
        b: 1,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
        c: 3,
      },
    ),
  ).toBeFalsy()

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
          a: 1,
          b: 2,
          c: 3,
        },
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 3,
      },
    ),
  ).toBeFalsy()

  expect(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })).toBeTruthy()

  expect(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } })).toBeFalsy()

  expect(equals({ a: {} }, { a: {} })).toBeTruthy()

  expect(equals('', '')).toBeTruthy()

  expect(equals('foo', 'foo')).toBeTruthy()

  expect(equals('foo', 'bar')).toBeFalsy()

  expect(equals(0, false)).toBeFalsy()

  expect(equals(/\s/g, null)).toBeFalsy()

  expect(equals(null, null)).toBeTruthy()

  expect(equals(false)(null)).toBeFalsy()
})

test('with custom functions', () => {
  function foo() {
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTruthy()
})

test('with classes', () => {
  class Foo {}
  const foo = new Foo()
  const result = equals(foo, foo)

  expect(result).toBeTruthy()
})

test('with negative zero', () => {
  expect(equals(-0, -0)).toBeTruthy()
  expect(equals(-0, 0)).toBeFalsy()
  expect(equals(0, 0)).toBeTruthy()
  expect(equals(-0, 1)).toBeFalsy()
})

test('with big int', () => {
  const a = BigInt(9007199254740991)
  const b = BigInt(9007199254740991)
  const c = BigInt(7007199254740991)
  expect(equals(a, b)).toBeTruthy()
  expect(equals(a, c)).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { equals } from 'rambda'

describe('R.equals', () => {
  it('happy', () => {
    const result = equals(4, 1)
    result // $ExpectType boolean
  })
  it('with object', () => {
    const foo = { a: 1 }
    const bar = { a: 2 }
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#equals)

### evolve

```typescript

evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>
```

It takes object of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

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
const result = R.evolve(rules)(input)
const expected = {
  a   : 1,
  foo : 3,
  bar : 2,
})
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%20%3A%20add(1)%2C%0A%20%20bar%20%3A%20add(-1)%2C%0A%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%202%2C%0A%20%20bar%20%3A%203%2C%0A%7D%0Aconst%20result%20%3D%20R.evolve(rules)(input)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%203%2C%0A%20%20bar%20%3A%202%2C%0A%7D)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.evolve</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;
```

</details>

<details>

<summary><strong>R.evolve</strong> source</summary>

```javascript
import { mapObject } from './mapObject.js'
import { type } from './type.js'

export function evolve(rules) {
  return obj =>
    mapObject((x, prop) => {
      if (type(x) === 'Object') {
        const typeRule = type(rules[prop])
        if (typeRule === 'Function') {
          return rules[prop](x)
        }
        if (typeRule === 'Object') {
          return evolve(rules[prop], x)
        }

        return x
      }
      if (type(rules[prop]) === 'Function') {
        return rules[prop](x)
      }

      return x
    })(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from '../rambda.js'
import { evolve } from './evolve.js'

test('happy', () => {
  const rules = {
    foo: add(1),
    nested: { bar: x => Object.keys(x).length },
  }
  const input = {
    a: 1,
    foo: 2,
    nested: { bar: { z: 3 } },
  }
  const result = evolve(rules, input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: { bar: 1 },
  })
})

test('nested rule is wrong', () => {
  const rules = {
    foo: add(1),
    nested: { bar: 10 },
  }
  const input = {
    a: 1,
    foo: 2,
    nested: { bar: { z: 3 } },
  }
  const result = evolve(rules)(input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: { bar: { z: 3 } },
  })
})

test('is recursive', () => {
  const rules = {
    nested: {
      second: add(-1),
      third: add(1),
    },
  }
  const object = {
    first: 1,
    nested: {
      second: 2,
      third: 3,
    },
  }
  const expected = {
    first: 1,
    nested: {
      second: 1,
      third: 4,
    },
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('ignores primitive values', () => {
  const rules = {
    n: 2,
    m: 'foo',
  }
  const object = {
    n: 0,
    m: 1,
  }
  const expected = {
    n: 0,
    m: 1,
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { add, evolve } from 'rambda'

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

### filter

```typescript

filter<T, S extends T>(
  predicate: (value: T) => value is S,
): (list: T[]) => S[]
```

It filters list or object `input` using a `predicate` function.

```javascript
const predicate = x => x > 1
const list = [1, 2, 3]
const result = R.filter(predicate)(list)
// => [2, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20result%20%3D%20R.filter(predicate)(list)%0A%2F%2F%20%3D%3E%20%5B2%2C%203%5D">Try this <strong>R.filter</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filter<T, S extends T>(
  predicate: (value: T) => value is S,
): (list: T[]) => S[];
filter<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => NonNullable<T>[];
filter<T>(
	predicate: BooleanConstructor,
): (list: T[]) => NonNullable<T>[];
filter<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function filterObject(predicate, obj) {
  const willReturn = {}

  for (const prop in obj) {
    if (predicate(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop]
    }
  }

  return willReturn
}

export function filterArray(predicate, list, indexed = false) {
  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len) {
    const predicateResult = indexed
      ? predicate(list[index], index)
      : predicate(list[index])
    if (predicateResult) {
      willReturn.push(list[index])
    }

    index++
  }

  return willReturn
}

export function filter(predicate, iterable) {
  if (arguments.length === 1) {
    return _iterable => filter(predicate, _iterable)
  }
  if (!iterable) {
    throw new Error('Incorrect iterable input')
  }

  if (isArray(iterable)) {
    return filterArray(predicate, iterable, false)
  }

  return filterObject(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { filter as filterRamda } from 'ramda'

import { T } from './T.js'
import { filter } from './filter.js'

const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
  expect(
    filter(isEven, {
      a: 1,
      b: 2,
      d: 3,
    }),
  ).toEqual({ b: 2 })
})

test('predicate when input is object', () => {
  const obj = {
    a: 1,
    b: 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toBe('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a: 1 })
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b: 2,
    d: 4,
  }

  expect(result).toEqual(expectedResult)
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => filter(T, null)).toThrowError('Incorrect iterable input')
  expect(() => filter(T)(undefined)).toThrowError('Incorrect iterable input')
  expect(() => filterRamda(T, null)).toThrowError(
    "Cannot read properties of null (reading 'fantasy-land/filter')",
  )
  expect(() => filterRamda(T, undefined)).toThrowError(
    "Cannot read properties of undefined (reading 'fantasy-land/filter')",
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { filter, map, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('within pipe', () => {
    const result = pipe(
      list,
      filter(x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    result // $ExpectType number[]
  })
  it('narrowing type', () => {
    interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }

    const testList = [{ a: 1 }, { a: 2 }, { a: 3 }]
    const filterBar = (x: unknown): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      map((x, i) => {
        return { a: x.a, b: `${i}` }
      }),
      filter(filterBar),
    )
    result // $ExpectType Bar[]
  })
  it('narrowing type - readonly', () => {
    interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }

    const testList = [{ a: 1 }, { a: 2 }, { a: 3 }] as const
    const filterBar = (x: unknown): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      map((x, i) => {
        return { a: x.a, b: `${i}` }
      }),
      filter(filterBar),
    )
    result // $ExpectType Bar[]
  })
  it('filtering NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = pipe(testList, filter(Boolean))
    result // $ExpectType number[]
  })
  it('filtering NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = pipe(testList, filter(Boolean))
    result // $ExpectType NonNullable<1 | 2 | 3 | null | undefined>[]
    // @ts-expect-error
    result.includes(null)
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

### filterObject

```typescript

filterObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U
```

It loops over each property of `obj` and returns a new object with only those properties that satisfy the `predicate`.

```javascript
const result = R.filterObject(
	(val, prop) => prop === 'a' || val > 1
)({a: 1, b: 2, c:3})
// => {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.filterObject(%0A%09(val%2C%20prop)%20%3D%3E%20prop%20%3D%3D%3D%20'a'%20%7C%7C%20val%20%3E%201%0A)(%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A3%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try this <strong>R.filterObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
filterObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;
```

</details>

<details>

<summary><strong>R.filterObject</strong> source</summary>

```javascript
export function filterObject(predicate) {
  return obj => {
    const willReturn = {}

    for (const prop in obj) {
      if (predicate(obj[prop], prop, obj)) {
        willReturn[prop] = obj[prop]
      }
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { filterObject, pipe } from 'rambda'

describe('R.filterObject', () => {
  it('require explicit type', () => {
    const result = pipe(
      { a: 1, b: 2 },
      filterObject<{ b: number }>(a => {
        a // $ExpectType number
        return a > 1
      }),
    )
    result.b // $ExpectType number
  })
})
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
export function find(predicate, list) {
  if (arguments.length === 1) {
    return _list => find(predicate, _list)
  }

  let index = 0
  const len = list.length

  while (index < len) {
    const x = list[index]
    if (predicate(x)) {
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

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  const fn = propEq(2, 'a')
  expect(find(fn, list)).toEqual({ a: 2 })
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

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { find } from 'rambda'

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
export function findIndex(predicate, list) {
  if (arguments.length === 1) {
    return _list => findIndex(predicate, _list)
  }

  const len = list.length
  let index = -1

  while (++index < len) {
    if (predicate(list[index])) {
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

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  expect(findIndex(propEq(2, 'a'), list)).toBe(1)
  expect(findIndex(propEq(1, 'a'))(list)).toBe(0)
  expect(findIndex(propEq(4, 'a'))(list)).toBe(-1)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { findIndex } from 'rambda'

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
export function findLast(predicate, list) {
  if (arguments.length === 1) {
    return _list => findLast(predicate, _list)
  }

  let index = list.length

  while (--index >= 0) {
    if (predicate(list[index])) {
      return list[index]
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
  const result = findLast(x => x > 1, [1, 1, 1, 2, 3, 4, 1])
  expect(result).toBe(4)

  expect(findLast(x => x === 0, [0, 1, 1, 2, 3, 4, 1])).toBe(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([1, 1, 1, 2, 3, 4, 1])).toBe(4)
})

const obj1 = { x: 100 }
const obj2 = { x: 200 }
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = x => x % 2 === 0
const gt100 = x => x > 100
const isStr = x => typeof x === 'string'
const xGt100 = o => o && o.x > 100

test('ramda 1', () => {
  expect(findLast(even, a)).toBe(0)
  expect(findLast(gt100, a)).toBe(300)
  expect(findLast(isStr, a)).toBe('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, ['zing'])).toBeUndefined()
})

test('ramda 3', () => {
  expect(findLast(even, [2, 3, 5])).toBe(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toBeUndefined()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { findLast } from 'rambda'

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
export function findLastIndex(fn, list) {
  if (arguments.length === 1) {
    return _list => findLastIndex(fn, _list)
  }

  let index = list.length

  while (--index >= 0) {
    if (fn(list[index])) {
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
  const result = findLastIndex(x => x > 1, [1, 1, 1, 2, 3, 4, 1])

  expect(result).toBe(5)

  expect(findLastIndex(x => x === 0, [0, 1, 1, 2, 3, 4, 1])).toBe(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([1, 1, 1, 2, 3, 4, 1])).toBe(5)
})

const obj1 = { x: 100 }
const obj2 = { x: 200 }
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = x => x % 2 === 0
const gt100 = x => x > 100
const isStr = x => typeof x === 'string'
const xGt100 = o => o && o.x > 100

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toBe(15)
  expect(findLastIndex(gt100, a)).toBe(9)
  expect(findLastIndex(isStr, a)).toBe(3)
  expect(findLastIndex(xGt100, a)).toBe(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, ['zing'])).toBe(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [2, 3, 5])).toBe(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toBe(-1)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { findLastIndex } from 'rambda'

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

### flatMap

```typescript

flatMap<T, U>(fn: (n: T) => U[]): (list: T[]) => U[]
```

It combines `map` with `flatten` logic.

```javascript
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = flatMap(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20duplicate%20%3D%20n%20%3D%3E%20%5B%20n%2C%20n%20%5D%0Aconst%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0A%0Aconst%20result%20%3D%20flatMap(duplicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%201%2C%201%2C%202%2C%202%2C%203%2C%203%20%5D">Try this <strong>R.flatMap</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
flatMap<T, U>(fn: (n: T) => U[]): (list: T[]) => U[];
```

</details>

<details>

<summary><strong>R.flatMap</strong> source</summary>

```javascript
export function flatMap(fn) {
  return list => [].concat(...list.map(fn))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { flatMap } from './flatMap.js'

const duplicate = n => [n, n]

test('happy', () => {
  const fn = x => [x * 2]
  const list = [1, 2, 3]

  const result = flatMap(fn)(list)

  expect(result).toEqual([2, 4, 6])
})

test('maps then flattens one level', () => {
  expect(flatMap(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('maps then flattens one level - curry', () => {
  expect(flatMap(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(flatMap(nest)([1, 2, 3])).toEqual([[1], [2], [3]])
})

test('can compose', () => {
  function dec(x) {
    return [x - 1]
  }
  function times2(x) {
    return [x * 2]
  }

  const mdouble = flatMap(times2)
  const mdec = flatMap(dec)
  expect(mdec(mdouble([10, 20, 30]))).toEqual([19, 39, 59])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { flatMap } from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.flatMap', () => {
  it('without passing type', () => {
    const curriedResult = flatMap(fn)(list)
    curriedResult // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatMap)

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

export function flatten(list, input) {
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++) {
    if (isArray(list[i])) {
      flatten(list[i], willReturn)
    } else {
      willReturn.push(list[i])
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
  expect(flatten([1, 2, 3, [[[[[4]]]]]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[3]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[[3]]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])
})

test('readme example', () => {
  const result = flatten([1, 2, [3, 30, [300]], [4]])
  expect(result).toEqual([1, 2, 3, 30, 300, 4])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { flatten } from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = flatten<number>([1, 2, [3, [4]]])
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatten)

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
export function fromPairs(listOfPairs) {
  const toReturn = {}
  listOfPairs.forEach(([prop, value]) => (toReturn[prop] = value))

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { fromPairs } from './fromPairs.js'

const list = [
  ['a', 1],
  ['b', 2],
  ['c', [3, 4]],
]
const expected = {
  a: 1,
  b: 2,
  c: [3, 4],
}

test('happy', () => {
  expect(fromPairs(list)).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { fromPairs } from 'rambda'

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

### getPropertyOrDefault

```typescript

getPropertyOrDefault<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.getPropertyOrDefault(defaultValue, property)(obj),
  R.getPropertyOrDefault(defaultValue, 'foo')(obj)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.getPropertyOrDefault(defaultValue%2C%20property)(obj)%2C%0A%20%20R.getPropertyOrDefault(defaultValue%2C%20'foo')(obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.getPropertyOrDefault</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
getPropertyOrDefault<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T;
```

</details>

<details>

<summary><strong>R.getPropertyOrDefault</strong> source</summary>

```javascript
import { defaultTo } from './defaultTo.js'

export function getPropertyOrDefault(defaultValue, property) {
  return obj => {
    if (!obj) {
      return defaultValue
    }

    return defaultTo(defaultValue, obj[property])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { getPropertyOrDefault } from './getPropertyOrDefault.js'

test('getPropertyOrDefault (result)', () => {
  const obj = { a: 1 }
  expect(getPropertyOrDefault('default', 'a')(obj)).toBe(1)
  expect(getPropertyOrDefault('default', 'notExist')(obj)).toBe('default')
  expect(getPropertyOrDefault('default', 'notExist')(null)).toBe('default')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { getPropertyOrDefault } from 'rambda'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

describe('R.getPropertyOrDefault', () => {
  it('happy', () => {
    const result = getPropertyOrDefault(fallback, property)(obj)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#getPropertyOrDefault)

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
```

</details>

<details>

<summary><strong>R.groupBy</strong> source</summary>

```javascript
export function groupBy(groupFn, list) {
  if (arguments.length === 1) {
    return _list => groupBy(groupFn, _list)
  }

  const result = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    const key = groupFn(item)

    if (!result[key]) {
      result[key] = []
    }

    result[key].push(item)
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
      age: 12,
      name: 'john',
    },
    {
      age: 12,
      name: 'jack',
    },
    {
      age: 24,
      name: 'mary',
    },
    {
      age: 24,
      name: 'steve',
    },
  ]
  const expectedResult = {
    12: [
      {
        age: 12,
        name: 'john',
      },
      {
        age: 12,
        name: 'jack',
      },
    ],
    24: [
      {
        age: 24,
        name: 'mary',
      },
      {
        age: 24,
        name: 'steve',
      },
    ],
  }

  expect(groupBy(prop('age'))(list)).toEqual(expectedResult)
  expect(groupBy(prop('age'), list)).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { groupBy, prop } from 'rambda'

interface Thing {
  name: string
  position: string
}

const things = [
  { name: 'one', position: 'left' },
  { name: 'two', position: 'left' },
  { name: 'three', position: 'right' },
  { name: 'four', position: 'right' },
]

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'bar']

    const result = groupBy(groupByFn, list)
    result // $ExpectType Partial<Record<string, string[]>>

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType Partial<Record<string, string[]>>
  })
  it('with one explicit types', () => {
    const groupByPosition = groupBy<Thing>(prop('position'))

    const result = groupByPosition(things)
    result // $ExpectType Partial<Record<string, Thing[]>>
    result[9] // $ExpectType Thing[] | undefined
    result.foo // $ExpectType Thing[] | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupBy)

### head

```typescript

head<T>(listOrString: T): T extends string ? string : 
	T extends [] ? undefined: 
		T extends readonly [infer F, ...infer R] ? F : 
			T extends readonly [infer F] ? F :
				T extends [infer F] ? F :
					T extends [infer F, ...infer R] ? F : 
						T extends unknown[] ? T[number] : 
							undefined
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
head<T>(listOrString: T): T extends string ? string : 
	T extends [] ? undefined: 
		T extends readonly [infer F, ...infer R] ? F : 
			T extends readonly [infer F] ? F :
				T extends [infer F] ? F :
					T extends [infer F, ...infer R] ? F : 
						T extends unknown[] ? T[number] : 
							undefined;
```

</details>

<details>

<summary><strong>R.head</strong> source</summary>

```javascript
export function head(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[0] || ''
  }

  return listOrString[0]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { head } from './head.js'

test('head', () => {
  expect(head(['fi', 'fo', 'fum'])).toBe('fi')
  expect(head([])).toBeUndefined()
  expect(head('foo')).toBe('f')
  expect(head('')).toBe('')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { head, last } from 'rambda'

export const mixedList = [1, 'foo', 3, 'bar']
export const mixedListConst = [1, 'foo', 3, 'bar'] as const
export const numberList = [1, 2, 3]
export const numberListConst = [1, 2, 3] as const
export const emptyList = []
export const emptyString = ''
export const string = 'foo'

describe('R.head', () => {
  it('string', () => {
    head(string) // $ExpectType string
    last(string) // $ExpectType string
  })
  it('empty string', () => {
    head(emptyString) // $ExpectType string
    last(emptyString) // $ExpectType string
  })
  it('array', () => {
    head(numberList) // $ExpectType number
    head(numberListConst) // $ExpectType 1

    last(numberList) // $ExpectType number
    last(numberListConst) // $ExpectType 3
  })
  it('empty array', () => {
    const list = [] as const
    head(emptyList) // $ExpectType never
    head(list) // $ExpectType undefined
    last(emptyList) // $ExpectType never
    last(list) // $ExpectType undefined
  })

  it('mixed', () => {
    head(mixedList) // $ExpectType string | number
    head(mixedListConst) // $ExpectType 1
    last(mixedList) // $ExpectType string | number
    last(mixedListConst) // $ExpectType "bar"
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#head)

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElse)

### includes

```typescript

includes<T extends string>(valueToFind: T): (input: string) => boolean
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
includes<T extends string>(valueToFind: T): (input: string) => boolean;
includes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { _indexOf } from './equals.js'

export function includes(valueToFind, iterable) {
  if (arguments.length === 1) {
    return _iterable => includes(valueToFind, _iterable)
  }
  if (typeof iterable === 'string') {
    return iterable.includes(valueToFind)
  }
  if (!iterable) {
    throw new TypeError(`Cannot read property \'indexOf\' of ${iterable}`)
  }
  if (!isArray(iterable)) {
    return false
  }

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

  expect(includes('bar')(str)).toBeTruthy()
  expect(includesRamda('bar')(str)).toBeTruthy()
  expect(includes('never', str)).toBeFalsy()
  expect(includesRamda('never', str)).toBeFalsy()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTruthy()
  expect(includesRamda(2)(arr)).toBeTruthy()

  expect(includes(4, arr)).toBeFalsy()
  expect(includesRamda(4, arr)).toBeFalsy()
})

test('with list of objects as iterable', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

  expect(includes({ c: 3 }, arr)).toBeTruthy()
  expect(includesRamda({ c: 3 }, arr)).toBeTruthy()
})

test('with NaN', () => {
  const result = includes(Number.NaN, [Number.NaN])
  const ramdaResult = includesRamda(Number.NaN, [Number.NaN])
  expect(result).toBeTruthy()
  expect(ramdaResult).toBeTruthy()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = includesRamda(1, /foo/g)
  expect(result).toBeFalsy()
  expect(ramdaResult).toBeFalsy()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowError(
    "Cannot read property 'indexOf' of null",
  )
  expect(() => includesRamda(2, null)).toThrowError(
    TypeError,
    "Cannot read properties of null (reading 'indexOf')",
  )
  expect(() => includes(2, undefined)).toThrowError(
    TypeError,
    "Cannot read property 'indexOf' of undefined",
  )
  expect(() => includesRamda(2, undefined)).toThrowError(
    TypeError,
    "Cannot read properties of undefined (reading 'indexOf')",
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { includes } from 'rambda'

const list = [{ a: { b: '1' } }, { a: { c: '2' } }, { a: { b: '3' } }]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({ a: { b: '1' } }, list)
    result // $ExpectType boolean
    const result2 = includes('oo', ['f', 'oo'])
    result2 // $ExpectType boolean
  })
  it('with string', () => {
    const str = 'foo' as 'foo' | 'bar'
    const result = includes('oo', str)
    const curriedResult = includes('oo')(str)

    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#includes)

### indexOf

```typescript

indexOf<T>(valueToFind: T): (list: T[]) => number
```

It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.

```javascript
const result = [
  R.indexOf({a:1})([{a:1}, {a:2}]),
  R.indexOf(2)([1, 2, 3]),
]
// => [0, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.indexOf(%7Ba%3A1%7D)(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D)%2C%0A%20%20R.indexOf(2)(%5B1%2C%202%2C%203%5D)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B0%2C%201%5D">Try this <strong>R.indexOf</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
indexOf<T>(valueToFind: T): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.indexOf</strong> source</summary>

```javascript
import { _indexOf } from './equals.js'

export function indexOf(valueToFind) {
  return list => _indexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { indexOf as indexOfRamda } from 'ramda'
import { indexOf } from './indexOf.js'

test('with NaN', () => {
  expect(indexOf(Number.NaN, [Number.NaN])).toBe(0)
})

test('will throw with bad input', () => {
  expect(indexOfRamda([], true)).toBe(-1)
  expect(() => indexOf([], true)).toThrow()
})

test('without list of objects - no R.equals', () => {
  expect(indexOf(3, [1, 2, 3, 4])).toBe(2)
  expect(indexOf(10)([1, 2, 3, 4])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(indexOf({ c: 4 }, listOfObjects)).toBe(-1)
  expect(indexOf({ c: 3 }, listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(indexOf([], listOfLists)).toBe(5)
  expect(indexOf([1], listOfLists)).toBe(0)
  expect(indexOf([2, 3, 4], listOfLists)).toBe(2)
  expect(indexOf([2, 3, 5], listOfLists)).toBe(-1)
})

test('with string as iterable', () => {
  expect(() => indexOf('a', 'abc')).toThrowError(
    "Cannot read property 'indexOf' of abc",
  )
  expect(indexOfRamda('a', 'abc')).toBe(0)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { indexOf } from 'rambda'

describe('R.indexOf', () => {
  it('happy', () => {
    const list = [{ a: 1 }, { a: 2 }]
    const result = indexOf({ a: 1 })(list)
    result // $ExpectType number
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
import { baseSlice } from './_internals/baseSlice.js'

export function init(input) {
  if (typeof input === 'string') {
    return input.slice(0, -1)
  }

  return input.length ? baseSlice(input, 0, -1) : []
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { init } from './init.js'

test('with array', () => {
  expect(init([1, 2, 3])).toEqual([1, 2])
  expect(init([1, 2])).toEqual([1])
  expect(init([1])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([1])).toEqual([])
})

test('with string', () => {
  expect(init('foo')).toBe('fo')
  expect(init('f')).toBe('')
  expect(init('')).toBe('')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { init } from 'rambda'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#init)

### innerJoin

```typescript

innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[]
```

It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.

```javascript
const list1 = [1, 2, 3, 4, 5]
const list2 = [4, 5, 6]
const predicate = (x, y) => x >= y
const result = R.innerJoin(predicate, list1)(list2)
// => [4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20list2%20%3D%20%5B4%2C%205%2C%206%5D%0Aconst%20predicate%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3E%3D%20y%0Aconst%20result%20%3D%20R.innerJoin(predicate%2C%20list1)(list2)%0A%2F%2F%20%3D%3E%20%5B4%2C%205%5D">Try this <strong>R.innerJoin</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];
```

</details>

<details>

<summary><strong>R.innerJoin</strong> source</summary>

```javascript
function _includesWith(pred, x, list) {
  let idx = 0
  const len = list.length

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true
    }

    idx += 1
  }

  return false
}
function _filter(fn, list) {
  let idx = 0
  const len = list.length
  const result = []

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx]
    }

    idx += 1
  }

  return result
}

export function innerJoin(pred, xs) {
  return ys => _filter(x => _includesWith(pred, x, ys), xs)
}
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

export function intersection(listA, listB) {
  if (arguments.length === 1) {
    return _list => intersection(listA, _list)
  }

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
  const list1 = [1, 2, 3, 4]
  const list2 = [3, 4, 5, 6]
  expect(intersection(list1)(list2)).toEqual([3, 4])

  expect(intersection([], [])).toEqual([])
})

test('intersection with objects', () => {
  const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const list2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  expect(intersection(list1)(list2)).toEqual([{ id: 3 }, { id: 4 }])
})

test('order is the same as in Ramda', () => {
  const list = ['a', 'b', 'c', 'd']

  expect(intersectionRamda(list, ['b', 'c'])).toEqual(['b', 'c'])
  expect(intersection(list, ['b', 'c'])).toEqual(['b', 'c'])

  expect(intersection(list, ['c', 'b'])).toEqual(['c', 'b'])
  expect(intersectionRamda(list, ['c', 'b'])).toEqual(['c', 'b'])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { intersection } from 'rambda'

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

intersperse<T>(separator: T, list: T[]): T[]
```

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = 10
const result = intersperse(separator, list)
// => [0, 10, 1, 10, 2, 10, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%2010%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%2010%2C%201%2C%2010%2C%202%2C%2010%2C%203%5D">Try this <strong>R.intersperse</strong> example in Rambda REPL</a>

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
export function intersperse(separator, list) {
  if (arguments.length === 1) {
    return _list => intersperse(separator, _list)
  }

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len) {
    if (index === len - 1) {
      willReturn.push(list[index])
    } else {
      willReturn.push(list[index], separator)
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
  const list = [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 'a' }]
  expect(intersperse('!', list)).toEqual([
    { id: 1 },
    '!',
    { id: 2 },
    '!',
    { id: 10 },
    '!',
    { id: 'a' },
  ])

  expect(intersperse('!')([])).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { intersperse } from 'rambda'

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
export function join(glue, list) {
  if (arguments.length === 1) {
    return _list => join(glue, _list)
  }

  return list.join(glue)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { join } from './join.js'

test('curry', () => {
  expect(join('|')(['foo', 'bar', 'baz'])).toBe('foo|bar|baz')

  expect(join('|', [1, 2, 3])).toBe('1|2|3')

  const spacer = join(' ')

  expect(spacer(['a', 2, 3.4])).toBe('a 2 3.4')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { join } from 'rambda'

describe('R.join', () => {
  it('happy', () => {
    const result = join('|', [1, 2, 3])
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#join)

### last

```typescript

last<T>(listOrString: T): T extends string ? string : 
  T extends [] ? undefined : 
    T extends readonly [...infer R, infer L] ? L : 
      T extends readonly [infer L] ? L :
        T extends [infer L] ? L :
          T extends [...infer R, infer L] ? L : 
            T extends unknown[] ? T[number] : 
              undefined
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
last<T>(listOrString: T): T extends string ? string : 
  T extends [] ? undefined : 
    T extends readonly [...infer R, infer L] ? L : 
      T extends readonly [infer L] ? L :
        T extends [infer L] ? L :
          T extends [...infer R, infer L] ? L : 
            T extends unknown[] ? T[number] : 
              undefined;
```

</details>

<details>

<summary><strong>R.last</strong> source</summary>

```javascript
export function last(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[listOrString.length - 1] || ''
  }

  return listOrString[listOrString.length - 1]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { last } from './last.js'

test('with list', () => {
  expect(last([1, 2, 3])).toBe(3)
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

export function lastIndexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => _lastIndexOf(valueToFind, _list)
  }

  return _lastIndexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lastIndexOf } from './lastIndexOf.js'

test('with NaN', () => {
  expect(lastIndexOf(Number.NaN, [Number.NaN])).toBe(0)
})

test('will throw with bad input', () => {
  expect(() => indexOf([], true)).toThrowError('indexOf is not defined')
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3, [1, 2, 3, 4])).toBe(2)
  expect(lastIndexOf(10)([1, 2, 3, 4])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(lastIndexOf({ c: 4 }, listOfObjects)).toBe(-1)
  expect(lastIndexOf({ c: 3 }, listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(lastIndexOf([], listOfLists)).toBe(5)
  expect(lastIndexOf([1], listOfLists)).toBe(4)
  expect(lastIndexOf([2, 3, 4], listOfLists)).toBe(2)
  expect(lastIndexOf([2, 3, 5], listOfLists)).toBe(-1)
})

test('with string as iterable', () => {
  expect(() => lastIndexOf('a', 'abc')).toThrowError(
    "Cannot read property 'indexOf' of abc",
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { lastIndexOf } from 'rambda'

const list = [1, 2, 3]

describe('R.lastIndexOf', () => {
  it('happy', () => {
    const result = lastIndexOf(2)(list)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lastIndexOf)

### map

```typescript

map<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => U,
): (data: T) => Mapped<T, U>
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
map<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => U,
): (data: T) => Mapped<T, U>;
map<T extends IterableContainer, U>(
  fn: (value: T[number]) => U,
): (data: T) => Mapped<T, U>;
map<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => U,
	data: T
) : Mapped<T, U>;
map<T extends IterableContainer, U>(
  fn: (value: T[number]) => U,
	data: T
) : Mapped<T, U>;
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
export function map(fn) {
  return list => {
    let index = 0
    const willReturn = Array(list.length)
    while (index < list.length) {
      willReturn[index] = fn(list[index], index)
      index++
    }
    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { map } from './map.js'

const double = x => x * 2

it('happy', () => {
  expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { map, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.map with array', () => {
  it('happy', () => {
    const result = map(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType boolean[]
  })
  it('within pipe', () => {
    const result = pipe(
      list,
      x => x,
      map(x => {
        x // $ExpectType number
        return String(x)
      }),
    )
    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

### mapObject

```typescript

mapObject<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Value,
): (data: T) => MappedValues<T, Value>
```

```javascript
const fn = (val, prop) => `${prop}-${val}`
const obj = {a: 1, b: 2}

const result = R.mapObject(fn)(obj)
// => {a: 'a-1', b: 'b-2'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(val%2C%20prop)%20%3D%3E%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20R.mapObject(fn)(obj)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try this <strong>R.mapObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapObject<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Value,
): (data: T) => MappedValues<T, Value>;
```

</details>

<details>

<summary><strong>R.mapObject</strong> source</summary>

```javascript
import { keys } from './_internals/keys.js'

export function mapObject(fn) {
  return obj => {
    let index = 0
    const objKeys = keys(obj)
    const len = objKeys.length
    const willReturn = {}

    while (index < len) {
      const key = objKeys[index]
      willReturn[key] = fn(obj[key], key, obj)
      index++
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapObject } from './mapObject.js'

const double = x => x * 2

it('happy', () => {
  expect(mapObject(double)({ a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 4, c: 6 })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mapObject, pipe } from 'rambda'

describe('R.mapObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: 1 },
      mapObject(a => {
        a // $ExpectType number
        return `${a}`
      }),
    )

    result // $ExpectType {a: string;}
  })
  it('iterable with two three arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b) => {
        a // $ExpectType string | number
        b // $ExpectType 'a' | 'b'
        return `${a}`
      }),
    )

    result // $ExpectType {a: string; b: string;}
  })
  it('iterable with three arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b, c) => {
        a // $ExpectType string | number
        b // $ExpectType 'a' | 'b'
        c // $ExpectType {a: number; b: string;}
        return `${a}`
      }),
    )

    result // $ExpectType {a: string; b: string;}
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObject)

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
export function match(pattern, input) {
  if (arguments.length === 1) {
    return _input => match(pattern, _input)
  }

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
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a', 'foo')).toEqual([])
  expect(equals(match('o', 'foo'), ['o'])).toBeTruthy()
})

test('throwing', () => {
  expect(() => {
    match(/a./g, null)
  }).toThrowError("Cannot read properties of null (reading 'match')")
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { match } from 'rambda'

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

<summary>All TypeScript definitions</summary>

```typescript
mathMod(x: number, y: number): number;
mathMod(x: number): (y: number) => number;
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
export function maxBy(compareFn, x) {
  return y => (compareFn(y) > compareFn(x) ? y : x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { maxBy } from './maxBy.js'

test('happy', () => {
  expect(maxBy(Math.abs, -5, 2)).toBe(-5)
})

test('curried', () => {
  expect(maxBy(Math.abs)(2, -5)).toBe(-5)
  expect(maxBy(Math.abs)(2)(-5)).toBe(-5)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { maxBy } from 'rambda'

const compareFn = (x: number) => (x % 2 === 0 ? 1 : -1)
const first = 1
const second = 2

describe('R.maxBy', () => {
  it('happy', () => {
    const result = maxBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#median)

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
export function merge(target) {
  return objectWithNewProps =>
    Object.assign({}, target || {}, objectWithNewProps || {})
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { merge } from './merge.js'

const obj = {
  foo: 1,
  bar: 2,
}

test('happy', () => {
  expect(merge(obj, { bar: 20 })).toEqual({
    foo: 1,
    bar: 20,
  })
})

test('curry', () => {
  expect(merge(obj)({ baz: 3 })).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
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

test('with function inside object', () => {
  const result = merge({ a: 1 }, { b: () => 1 })
  expect(typeof result.b).toBe('function')
})

describe('acts as if nil values are simply empty objects', () => {
  const a = {
    w: 1,
    x: 2,
  }
  const b = {
    w: 100,
    y: 3,
    z: 4,
  }

  it('if the first object is nil', () => {
    expect(merge(null, b)).toEqual(b)
  })

  it('if the second object is nil', () => {
    expect(merge(a, undefined)).toEqual(a)
  })

  it('if both objects are nil', () => {
    expect(merge(null, undefined)).toEqual({})
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { merge, mergeTypes, pipe } from 'rambda'

it('R.merge', () => {
	const result = pipe(
		{ foo: 1 },
		x => merge(x, { bar: 2 }),
		mergeTypes
	)
	result.foo // $ExpectType number
	result.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#merge)

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeRight)

### mergeTypes

```typescript

mergeTypes<T>(x: T): MergeTypes<T>
```

Helper to merge all calculated TypeScript definitions into one definition.
It returns its input and it is intended to be used as last method inside `R.pipe` chain.

<details>

<summary>All TypeScript definitions</summary>

```typescript
mergeTypes<T>(x: T): MergeTypes<T>;
```

</details>

<details>

<summary><strong>R.mergeTypes</strong> source</summary>

```javascript
export function mergeTypes(x) {
  return x
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeTypes)

### min

```typescript

min<T extends Ord>(x: T): (y: T) => T
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
min<T extends Ord>(x: T): (y: T) => T;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#min)

### minBy

```typescript

minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T
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
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
```

</details>

<details>

<summary><strong>R.minBy</strong> source</summary>

```javascript
export function minBy(compareFn, x) {
  return y => (compareFn(y) < compareFn(x) ? y : x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { minBy } from './minBy.js'

test('happy', () => {
  expect(minBy(Math.abs, -5, 2)).toBe(2)
})

test('curried', () => {
  expect(minBy(Math.abs)(2, -5)).toBe(2)
  expect(minBy(Math.abs)(2)(-5)).toBe(2)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { minBy } from 'rambda'

const compareFn = (x: number) => (x % 2 === 0 ? 1 : -1)
const first = 1
const second = 2

describe('R.minBy', () => {
  it('happy', () => {
    const result = minBy(compareFn, first)(second)
    result // $ExpectType 1 | 2
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

### modify

```typescript

modify<K extends string, A, P>(
  prop: K,
  fn: (a: A) => P,
): <T extends Record<K, A>>(target: T) => Omit<T, K> & Record<K, P>
```

It changes a property with the result of transformer function.

```javascript
const person = {
  name : 'foo',
  age  : 20,
}
const result = R.modify('age', x => x + 1)(person) 
// => {name: 'foo', age: 21}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20person%20%3D%20%7B%0A%20%20name%20%3A%20'foo'%2C%0A%20%20age%20%20%3A%2020%2C%0A%7D%0Aconst%20result%20%3D%20R.modify('age'%2C%20x%20%3D%3E%20x%20%2B%201)(person)%20%0A%2F%2F%20%3D%3E%20%7Bname%3A%20'foo'%2C%20age%3A%2021%7D">Try this <strong>R.modify</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modify<K extends string, A, P>(
  prop: K,
  fn: (a: A) => P,
): <T extends Record<K, A>>(target: T) => Omit<T, K> & Record<K, P>;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modify)

### modifyPath

```typescript

modifyPath<U, T>(path: [], fn: (value: U) => T): (obj: U) => T
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
modifyPath<U, T>(path: [], fn: (value: U) => T): (obj: U) => T;
modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: [K0], fn: (value: U[K0]) => T): (obj: U) => DeepModify<[K0], U, T>;
modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: `${K0}`, fn: (value: U[K0]) => T): (obj: U) => DeepModify<[K0], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: [K0, K1], fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<[K0, K1], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: `${K0}.${K1}`, fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<[K0, K1], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: [K0, K1, K2], fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<[K0, K1, K2], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: `${K0}.${K1}.${K2}`, fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<[K0, K1, K2], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: [K0, K1, K2, K3], fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}`, fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: [K0, K1, K2, K3, K4], fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}`, fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5], fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`, fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  K6 extends keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5, K6], fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;
modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  K6 extends keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`, fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;
modifyPath<B, A = any>(path: Path, fn: (a: any) => any): (obj: A) => B;
```

</details>

<details>

<summary><strong>R.modifyPath</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'
import { assoc } from './assoc.js'
import { path as pathModule } from './path.js'

export function modifyPath(pathInput, fn) {
  return object => {
    const path = createPath(pathInput)
    if (path.length === 1) {
      return {
        ...object,
        [path[0]]: fn(object[path[0]]),
      }
    }
    if (pathModule(path)(object) === undefined) {
      return object
    }

    const val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[path[0]])
    if (val === object[path[0]]) {
      return object
    }

    return assoc(path[0], val)(object)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modifyPath } from './modifyPath.js'

test('happy', () => {
  const result = modifyPath('a.b.c', x => x + 1)({ a: { b: { c: 1 } } })
  expect(result).toEqual({ a: { b: { c: 2 } } })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { modifyPath, pipe } from 'rambda'

const obj = { a: { b: { c: 1 } } }

describe('R.modifyPath', () => {
  it('array path', () => {
    const result = pipe(
      obj,
      modifyPath(['a', 'b', 'c'], (x: number) => String(x)),
    )
    result.a.b.c // $ExpectType string
  })
  it('string path', () => {
    const result = pipe(
      obj,
      modifyPath('a.b.c', (x: number) => String(x)),
    )
    result.a.b.c // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modifyPath)

### none

```typescript

none<T>(predicate: (x: T) => boolean): (list: T[]) => boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate)(arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%206%0A%0Aconst%20result%20%3D%20R.none(predicate)(arr)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.none</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.none</strong> source</summary>

```javascript
export function none(predicate) {
  return list => {
    for (let i = 0; i < list.length; i++) {
      if (predicate(list[i])) {
        return false
      }
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { none } from './none.js'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [1, 3, 5, 7])).toBeTruthy()
})

test('when false curried', () => {
  expect(none(input => input > 1, [1, 2, 3])).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { none, pipe } from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = pipe(
			[1, 2, 3],
			none(x => x > 0),
		)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#none)

### objectIncludes

```typescript

objectIncludes<T>(specification: T): <U>(obj: U) => boolean
```

It will return `true` if `specification` object fully or partially include `obj` object.

`R.equals` is used to determine equality.

```javascript
const specification = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = objectIncludes(specification)(input)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20specification%20%3D%20%7B%20a%20%3A%20%7B%20b%20%3A%201%20%7D%20%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%7B%20b%20%3A%201%20%7D%2C%0A%20%20c%20%3A%202%0A%7D%0A%0Aconst%20result%20%3D%20objectIncludes(specification)(input)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.objectIncludes</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
objectIncludes<T>(specification: T): <U>(obj: U) => boolean;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objectIncludes)

### objOf

```typescript

objOf<T, K extends PropertyKey>(key: K): (value: T) => { [P in K]: T }
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
objOf<T, K extends PropertyKey>(key: K): (value: T) => { [P in K]: T };
```

</details>

<details>

<summary><strong>R.objOf</strong> source</summary>

```javascript
export function objOf(key) {
  return value => ({ [key]: value })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { objOf } from './objOf.js'

test('happy', () => {
  expect(objOf('foo')(42)).toEqual({ foo: 42 })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { objOf, pipe } from 'rambda'

const key = 'foo'
const value = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(key)(value)

    result.foo // $ExpectType number

    // @ts-expect-error
    result.bar
  })
  it('inside pipe', () => {
    const result = pipe(value, objOf(key))
    result.foo // $ExpectType number
    // @ts-expect-error
    result.bar
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objOf)

### omit

```typescript

omit<
	S extends string,
	Keys extends PickStringToPickPath<S>,
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20obj)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try this <strong>R.omit</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
omit<
	S extends string,
	Keys extends PickStringToPickPath<S>,
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
omit<const Keys extends PropertyKey[]>(propsToPick: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
```

</details>

<details>

<summary><strong>R.omit</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function _includes(x, list) {
  let index = -1
  const { length } = list

  while (++index < length) {
    if (String(list[index]) === String(x)) {
      return true
    }
  }

  return false
}

export function omit(propsToOmit) {
  return obj => {
    if (!obj) {
      return undefined
    }

    const propsToOmitValue = createPath(propsToOmit, ',')
    const willReturn = {}

    for (const key in obj) {
      if (!_includes(key, propsToOmitValue)) {
        willReturn[key] = obj[key]
      }
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { omit } from './omit.js'

test('with string as condition', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = { b: 2 }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with number as property to omit', () => {
  const obj = {
    1: 1,
    b: 2,
  }
  const result = omit([1], obj)
  expect(result).toEqual({ b: 2 })
})

test('with null', () => {
  expect(omit('a,b', null)).toBeUndefined()
})

test('happy', () => {
  expect(
    omit(['a', 'c'])({
      a: 'foo',
      b: 'bar',
      c: 'baz',
    }),
  ).toEqual({ b: 'bar' })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { omit, pipe } from 'rambda'

const input = { a: 'foo', b: 2, c: 3 }

describe('R.omit', () => {
  it('with string as input', () => {
    const result = pipe(input, omit('a,b'))
    result.c // $ExpectType number
  })
  it('with array as input', () => {
    const result = pipe(input, omit(['a', 'b']))
    result.c // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### partition

```typescript

partition<T, S extends T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => value is S,
): (data: ReadonlyArray<T>) => [Array<S>, Array<Exclude<T, S>>]
```

It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

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

<summary>All TypeScript definitions</summary>

```typescript
partition<T, S extends T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => value is S,
): (data: ReadonlyArray<T>) => [Array<S>, Array<Exclude<T, S>>];
partition<T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => boolean,
): (data: ReadonlyArray<T>) => [Array<T>, Array<T>];
```

</details>

<details>

<summary><strong>R.partition</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function partitionObject(predicate, iterable) {
  const yes = {}
  const no = {}
  Object.entries(iterable).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value
    } else {
      no[prop] = value
    }
  })

  return [yes, no]
}

export function partitionArray(predicate, list, indexed = false) {
  const yes = []
  const no = []
  let counter = -1

  while (counter++ < list.length - 1) {
    if (indexed ? predicate(list[counter], counter) : predicate(list[counter])) {
      yes.push(list[counter])
    } else {
      no.push(list[counter])
    }
  }

  return [yes, no]
}

export function partition(predicate) {
	return iterable => {
		if (!isArray(iterable)) {
			return partitionObject(predicate, iterable)
		}
	
		return partitionArray(predicate, iterable)
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partition } from './partition.js'

test('with array', () => {
  const predicate = x => x > 2
  const list = [1, 2, 3, 4]

  const result = partition(predicate)(list)
  const expectedResult = [
    [3, 4],
    [1, 2],
  ]

  expect(result).toEqual(expectedResult)
})

test('with object', () => {
  const predicate = (value, prop) => {
    expect(typeof prop).toBe('string')

    return value > 2
  }
  const hash = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }

  const result = partition(predicate)(hash)
  const expectedResult = [
    {
      c: 3,
      d: 4,
    },
    {
      a: 1,
      b: 2,
    },
  ]

  expect(result).toEqual(expectedResult)
})

test('readme example', () => {
  const list = [1, 2, 3]
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const predicate = x => x > 2

  const result = [partition(predicate)(list), partition(predicate)(obj)]
  const expected = [
    [[3], [1, 2]],
    [
      { c: 3 },
      {
        a: 1,
        b: 2,
      },
    ],
  ]
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { partition, pipe } from 'rambda'

describe('R.partition', () => {
	it('happy', () => {
    const predicate = (x: number) => {
      return x > 2
    }
    const list = [1, 2, 3, 4]

    const result = pipe(list, partition(predicate))
    result // $ExpectType [number[], number[]]
	})
	it('with simple object', () => {
		let result = pipe(
			[{a: 1}, {a: 2}, {a: 3}, {a: 4}],
			partition(x => x.a > 2)
		)
		result // $ExpectType [{ a: number; }[], { a: number; }[]]
	})
	it('with complex object', () => {
		interface Foo {
			a: number
		}
		interface Bar {
			b: number
		}
		let list1: (Foo|Bar)[] = [
			{a: 1},
			{b: 2},
			{a: 3},
			{b: 4},
		]
		let filterFoo = (x: Foo|Bar): x is Foo => 'a' in x
		let result = pipe(
			list1,
			partition(filterFoo)
		)
		result // $ExpectType [Foo[], Bar[]]
})
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### path

```typescript

path<S, K0 extends keyof S>(path: [K0]): (obj: S) => S[K0]
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
path<S, K0 extends keyof S>(path: [K0]): (obj: S) => S[K0];
path<S, K0 extends keyof S>(path: `${K0}`): (obj: S) => S[K0];
path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: [K0, K1]): (obj: S) => S[K0][K1];
path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: `${K0}.${K1}`): (obj: S) => S[K0][K1];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1]
>(path: [K0, K1, K2]): (obj: S) => S[K0][K1][K2];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1]
>(path: `${K0}.${K1}.${K2}`): (obj: S) => S[K0][K1][K2];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3]): (obj: S) => S[K0][K1][K2][K3];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2]
>(path: `${K0}.${K1}.${K2}.${K3}`): (obj: S) => S[K0][K1][K2][K3];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4]): (obj: S) => S[K0][K1][K2][K3][K4];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}`): (obj: S) => S[K0][K1][K2][K3][K4];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4], obj: S): S[K0][K1][K2][K3][K4];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5]): (obj: S) => S[K0][K1][K2][K3][K4][K5];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`): (obj: S) => S[K0][K1][K2][K3][K4][K5];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5], obj: S): S[K0][K1][K2][K3][K4][K5];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: [K0, K1, K2, K3, K4, K5, K6]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: [K0, K1, K2, K3, K4, K5, K6], obj: S): S[K0][K1][K2][K3][K4][K5][K6];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
    K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
    K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function path(pathInput, obj) {
  if (arguments.length === 1) {
    return _obj => path(pathInput, _obj)
  }

  if (!obj) {
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue = createPath(pathInput)

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined
    }
    if (willReturn[pathArrValue[counter]] === null) {
      return undefined
    }

    willReturn = willReturn[pathArrValue[counter]]
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
  const obj = { a: { b: [1, { c: 1 }] } }

  expect(path('a.b.1.c', obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a: { b: { c: 1 } } }

  expect(path('a.b.c.d.f', obj)).toBeUndefined()
  expect(path('foo.babaz', undefined)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({ foo: { bar: { baz: 'yes' } } })).toBe('yes')
})

test('path', () => {
  expect(path(['foo', 'bar', 'baz'])({ foo: { bar: { baz: 'yes' } } })).toBe('yes')
  expect(path(['foo', 'bar', 'baz'])(null)).toBeUndefined()
  expect(path(['foo', 'bar', 'baz'])({ foo: { bar: 'baz' } })).toBeUndefined()
})

test('with number string in between', () => {
  expect(path(['a', '1', 'b'], { a: [{ b: 1 }, { b: 2 }] })).toBe(2)
})

test('null is not a valid path', () => {
  expect(
    path('audio_tracks', {
      a: 1,
      audio_tracks: null,
    }),
  ).toBeUndefined()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { path, pipe } from 'rambda'

const input = { a: { b: { c: true } } }

describe('R.path with string as path', () => {
  it('happy', () => {
    const result = pipe(input, path(['a', 'b']))
    const resultStringInput = pipe(input, path('a.b.c'))
    result // $ExpectType boolean
    resultStringInput // $ExpectType boolean
  })
  it('happy', () => {
    const result = pipe([1, 2, 3], path([1]))
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#path)

### pathSatisfies

```typescript

pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: [K0]
): (obj: S) => S[K0]
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
pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: [K0]
): (obj: S) => S[K0];
pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: `${ K0 }`
): (obj: S) => S[K0];
pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: [K0, K1]
): (obj: S) => S[K0][K1];
pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: `${ K0 }.${ K1 }`
): (obj: S) => S[K0][K1];
pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0], K2 extends keyof S[K0][K1]>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: [K0, K1, K2]
): (obj: S) => S[K0][K1][K2];
pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0], K2 extends keyof S[K0][K1]>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: `${K0}.${K1}.${K2}`
): (obj: S) => S[K0][K1][K2];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: [K0, K1, K2, K3]
): (obj: S) => S[K0][K1][K2][K3];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}`
): (obj: S) => S[K0][K1][K2][K3];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: [K0, K1, K2, K3, K4]
): (obj: S) => S[K0][K1][K2][K3][K4];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}`
): (obj: S) => S[K0][K1][K2][K3][K4];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: [K0, K1, K2, K3, K4, K5]
): (obj: S) => S[K0][K1][K2][K3][K4][K5];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
```

</details>

<details>

<summary><strong>R.pathSatisfies</strong> source</summary>

```javascript
import { path } from './path.js'

export function pathSatisfies(fn, pathInput) {
  return obj => Boolean(fn(path(pathInput)(obj)))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pathSatisfies } from './pathSatisfies.js'

const isPositive = n => n > 0

it('returns true if the specified object path satisfies the given predicate', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { y: -1 } })).toBe(true)
})

it('returns false if the specified path does not exist', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { z: 42 } })).toBe(false)
  expect(pathSatisfies(isPositive, 'x.y')({ x: { z: 42 } })).toBe(false)
})

it('returns false otherwise', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { y: 0 } })).toBe(false)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pathSatisfies, pipe } from 'rambda'

const input = { a: { b: { c: 'bar' } } }

describe('R.pathSatisfies', () => {
  it('happy', () => {
    const result = pipe(
      input,
      pathSatisfies(
        x => {
          x // $ExpectType string
          return x !== 'foo'
        },
        ['a', 'b', 'c'],
      ),
    )
    const resultStringInput = pipe(
      input,
      pathSatisfies(x => {
        x // $ExpectType string
        return x !== 'foo'
      }, 'a.b.c'),
    )
    result // $ExpectType boolean
    resultStringInput // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathSatisfies)

### pick

```typescript

pick<K extends PropertyKey>(propsToPick: K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

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
  {},
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20obj)%2C%0A%20%20R.pick(propsToPickList%2C%20obj)%2C%0A%20%20R.pick('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pick('bar'%2C%20obj)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pick<K extends PropertyKey>(propsToPick: K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;
pick<
	S extends string,
	K extends PickStringToPickPath<K>
>(propsToPick: S): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;
```

</details>

<details>

<summary><strong>R.pick</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function pick(propsToPick) {
  return input => {
    if (!input === null) {
      return undefined
    }
    const keys = createPath(propsToPick, ',')
    const willReturn = {}
    let counter = 0

    while (counter < keys.length) {
      if (keys[counter] in input) {
        willReturn[keys[counter]] = input[keys[counter]]
      }
      counter++
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pick } from './pick.js'

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

test('props to pick is a string', () => {
  const result = pick('a,c')(obj)
  const expectedResult = {
    a: 1,
    c: 3,
  }

  expect(result).toEqual(expectedResult)
})

test('when prop is missing', () => {
  const result = pick('a,d,f')(obj)
  expect(result).toEqual({ a: 1 })
})

test('props to pick is an array', () => {
  expect(
    pick(['a', 'c'])({
      a: 'foo',
      b: 'bar',
    }),
  ).toEqual({
    a: 'foo',
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pick, pipe } from 'rambda'

const input = { a: 'foo', c: 3 }

describe('R.pick', () => {
  it('with string as input', () => {
    const result = pipe(input, pick('a,c,b,o'))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
  it('with array as input', () => {
    const result = pipe(input, pick(['a', 'c']))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pick)

### pipe

```typescript

pipe<A, B>(value: A, op1: (input: A) => B): B
```

It performs left-to-right function composition, where first argument is the input for the chain of functions.

This is huge difference from `Ramda.pipe` where input is passed like `R.pipe(...fns)(input)`.
Here we have `R.pipe(input, ...fns)`.

It has much better TypeScript support than `Ramda.pipe` and this is the reason why `Rambda` goes in this direction.

```javascript
const result = R.pipe(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20%5B1%2C%202%2C%203%5D%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%2C%0A%20%20R.map(x%20%3D%3E%20x*10)%2C%0A)%0A%2F%2F%20%3D%3E%20%5B20%2C%2030%5D">Try this <strong>R.pipe</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pipe<A, B>(value: A, op1: (input: A) => B): B;
pipe<A, B, C>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
): C;
pipe<A, B, C, D>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
): D;
pipe<A, B, C, D, E>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
): E;
pipe<A, B, C, D, E, F>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
): F;
pipe<A, B, C, D, E, F, G>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
): G;
pipe<A, B, C, D, E, F, G, H>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
): H;
pipe<A, B, C, D, E, F, G, H, I>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
): I;
pipe<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
  op9: (input: I) => J,
): J;
pipe<A, B, C, D, E, F, G, H, I, J, K>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
): K;
pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
): L;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
): M;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
): N;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
): O;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
): P;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
): Q;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
): R;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
  op18: (input: R) => S,
): S;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
  op18: (input: R) => S,
  op19: (input: S) => T,
): T;
pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
	value: A,
	op01: (input: A) => B,
	op02: (input: B) => C,
	op03: (input: C) => D,
	op04: (input: D) => E,
	op05: (input: E) => F,
	op06: (input: F) => G,
	op07: (input: G) => H,
	op08: (input: H) => I,
	op09: (input: I) => J,
	op10: (input: J) => K,
	op11: (input: K) => L,
	op12: (input: L) => M,
	op13: (input: M) => N,
	op14: (input: N) => O,
	op15: (input: O) => P,
	op16: (input: P) => Q,
	op17: (input: Q) => R,
	op18: (input: R) => S,
	op19: (input: S) => T,
	op20: (input: T) => U,
): U;
```

</details>

<details>

<summary><strong>R.pipe</strong> source</summary>

```javascript
import { reduce } from './reduce.js'

export function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments)
      }
    case 1:
      return function (a0) {
        return fn.apply(this, arguments)
      }
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments)
      }
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments)
      }
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments)
      }
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments)
      }
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments)
      }
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments)
      }
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments)
      }
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments)
      }
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments)
      }
    default:
      throw new Error(
        'First argument to _arity must be a non-negative integer no greater than ten',
      )
  }
}

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments))
  }
}

function pipeFn() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument')
  }

  return _arity(
    arguments[0].length,
    reduce(
      _pipe,
      arguments[0],
    )(Array.prototype.slice.call(arguments, 1, Number.POSITIVE_INFINITY)),
  )
}

export function pipe(...inputs) {
  const [input, ...fnList] = inputs

  return pipeFn(...fnList)(input)
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import {
  path,
  type MergeTypes,
  add,
  allPass,
  anyPass,
  append,
  assoc,
  assocPath,
  both,
  defaultTo,
  difference,
  dissocPath,
  drop,
  dropLast,
  evolve,
  filter,
  find,
  head,
  map,
  mapObject,
  pipe,
  tap,
  union,
	split,
} from 'rambda'
type IsNotNever<T> = [T] extends [never] ? false : true
type Expect<T extends true> = T

interface BaseBook {
  title: string
  year: number
  description?: string
  userRating?: number
}
interface Book extends BaseBook {
  awards: {
    number: number
    years?: number[]
  }
  status?: Status
}
interface MustReadBook extends Book {
  status: 'must-read'
}
interface FamousBook extends Book {
  status: 'famous'
}
interface BookWithBookmarkStatus extends Book {
  bookmarkFlag: boolean
}
interface BookWithReadStatus extends Book {
  readFlag: boolean
}
type BookToRead = BookWithBookmarkStatus & BookWithReadStatus
interface BookWithDescription extends Book {
  description: string
}
interface BookWithUserRating extends Book {
  userRating: number
}
type BookWithDetails = BookWithDescription & BookWithUserRating

const zaratustra: BaseBook = {
  title: 'Zaratustra',
  year: 1956,
}
const brothersKaramazov = {
  title: 'Brothers Karamazov',
  year: 1880,
}

const awardedZaratustra: Book = {
  ...zaratustra,
  awards: {
    number: 1,
    years: [1956],
  },
}
const awardedBrothersKaramazov: Book = {
  ...brothersKaramazov,
  awards: {
    number: 2,
    years: [1869, 1870],
  },
}
const awardedBrothersKaramazovToRead: BookToRead = {
  ...awardedBrothersKaramazov,
  readFlag: true,
  bookmarkFlag: true,
}
const awardedZaratustraToRead: BookToRead = {
  ...awardedZaratustra,
  readFlag: true,
  bookmarkFlag: true,
}
const awardedBaseValue: Book = {
  title: '',
  year: 0,
  awards: {
    number: 0,
    years: [],
  },
}

type Status = 'famous' | 'can be skipped' | 'must-read'

function checkIfMustRead(x: Book): x is MustReadBook {
  return (x as MustReadBook).status === 'must-read'
}
function checkIfFamous(x: Book): x is FamousBook {
  return (x as FamousBook).status === 'famous'
}
function checkReadStatus(x: Book): x is BookWithReadStatus {
  return (x as BookWithReadStatus).readFlag
}
function checkBookmarkStatus(x: Book): x is BookWithBookmarkStatus {
  return (x as BookWithBookmarkStatus).bookmarkFlag
}
function checkBookToRead(x: Book): x is BookToRead {
  return (x as BookToRead).readFlag && (x as BookToRead).bookmarkFlag
}
function checkHasDescription(x: Book): x is BookWithDescription {
  return (x as BookWithDescription).description !== undefined
}
function checkHasUserRating(x: Book): x is BookWithUserRating {
  return (x as BookWithUserRating).userRating !== undefined
}

function assertType<T, U extends T>(fn: (x: T) => x is U) {
  return (x: T) => {
    if (fn(x)) {
      return x
    }
    throw new Error('type assertion failed')
  }
}
function convertToType<T>() {
  return <U>(x: U) => x as unknown as T
}

function tapFn<T, U>(
  transformFn: (x: T) => U,
  fn: (a: T, b: U) => void,
): (x: T) => T {
  return x => {
    const result = transformFn(x)
    fn(x, result)
    return x
  }
}

function simplify<T>(x: T) {
  return x as MergeTypes<T>
}

describe('real use cases - books', () => {
  it('case 1', () => {
    const result = pipe(
      [awardedZaratustra, awardedBrothersKaramazov],
      filter(checkIfFamous),
      drop(1),
      // without converting to `as FamousBook`, endsWith will pick up `Book` as type
      tapFn(union([awardedBrothersKaramazov]), (a, b) => {
        a // $ExpectType Book[]
        b // $ExpectType Book[]
      }),
      find(x => {
        x // $ExpectType Book
        return x.title === 'Brothers Karamazov'
      }),
      x => [x],
      filter(Boolean),
    )
    const final: Expect<IsNotNever<typeof result>> = true
  })
  it('case 2', () => {
    const getResult = (book: BaseBook) =>
      pipe(
        book,
        assocPath<Book>('awards.number', 1),
        defaultTo(awardedBaseValue),
        tap(anyPass([x => x.awards.number > 1, x => x.year > 1900])),
        assertType(checkBookToRead),
        x => [x],
        dropLast(1),
        difference([awardedBrothersKaramazovToRead]),
        append(awardedZaratustraToRead),
        head,
        evolve({
          year: add(1),
          mustRead: allPass([checkHasDescription, checkHasUserRating]),
        }),
        // convertToType<BookWithDescription>(),
        // dissocPath<Book>('description'),
        // convertToType<Record<string, string>>(),
        // mapObject((x) => {
        // 	return x as unknown as number;
        // }),
        simplify,
        // path('awards.number'),
      )
    const result = getResult(zaratustra)
    type Foo = MergeTypes<typeof result>
    const final: Expect<IsNotNever<typeof result>> = true
  })
  it('case 3', () => {
    const tableData = `id,title,year
		1,The First,2001
		2,The Second,2020
		3,The Third,2018`

    const result = pipe(
      tableData,
      split('\n'), // string => string[]
      map(split(',')), // string[] => string[][]
    )
    result // $ExpectType [string[][], string[][]]
  })
})

it('R.pipe', () => {
    const obj = {
      a: 'foo',
      b: 'bar',
    }

    const result = pipe(
			obj,
      x => ({a: x.a.length + x.b.length}),
			x => ({...x,b: x.a + 'foo'}),
			x => ({...x, c: x.b + 'bar'}),
    )

    result // $ExpectType Output
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pluck

```typescript

pluck<T, K extends keyof T>(property: K): (list: T[]) => T[K][]
```

It returns list of the values of `property` taken from the all objects inside `list`.
Basically, this is `R.map(R.prop(property))`.

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

const result = R.pluck(property)(list) 
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20R.pluck(property)(list)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.pluck</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pluck<T, K extends keyof T>(property: K): (list: T[]) => T[K][];
```

</details>

<details>

<summary><strong>R.pluck</strong> source</summary>

```javascript
import { map } from './map.js'

export function pluck(property) {
	return list => {
  const willReturn = []

  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property])
    }
  }, list)

  return willReturn
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pluck } from './pluck.js'

test('happy', () => {
  expect(pluck('a')([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([1, 2])
})

test('with undefined', () => {
  expect(pluck(undefined)([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([])
})

test('with number', () => {
  const input = [
    [1, 2],
    [3, 4],
  ]

  expect(pluck(0)(input)).toEqual([1, 3])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, pluck } from 'rambda'

it('R.pluck', () => {
  const input = [
    { a: 1, b: 'foo' },
    { a: 2, b: 'bar' },
  ]
	const result = pipe(input, pluck('b'))
	result // $ExpectType string[]
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
prepend<T>(xToPrepend: T): (iterable: T[]) => T[];
```

</details>

<details>

<summary><strong>R.prepend</strong> source</summary>

```javascript
export function prepend(x) {
  return list=> [x].concat(list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prepend } from './prepend.js'

test('happy', () => {
  expect(prepend('yes')(['foo', 'bar', 'baz'])).toEqual(['yes', 'foo', 'bar', 'baz'])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual(['foo'])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prepend)

### prop

```typescript

prop<K extends PropertyKey>(prop: K): <U extends { [P in K]?: unknown }>(obj: U) => U[K]
```

It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

```javascript
const result = [
  R.prop('x')({x: 100}), 
  R.prop('x')({a: 1}) 
]
// => [100, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.prop('x')(%7Bx%3A%20100%7D)%2C%20%0A%20%20R.prop('x')(%7Ba%3A%201%7D)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B100%2C%20undefined%5D">Try this <strong>R.prop</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
prop<K extends PropertyKey>(prop: K): <U extends { [P in K]?: unknown }>(obj: U) => U[K];
prop<K extends keyof U, U>(prop: K, obj: U): U[K];
```

</details>

<details>

<summary><strong>R.prop</strong> source</summary>

```javascript
export function prop(searchProperty) {
  return obj => (obj ? obj[searchProperty] : undefined)
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { map, pipe, prop } from 'rambda'

describe('R.prop', () => {
  it('happy', () => {
    const result = pipe({ a: 1 }, prop('a'))

    result // $ExpectType number
  })
  it('alike R.pluck', () => {
    const result = pipe([{ a: 1 }, { a: 2 }], map(prop('a')))

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prop)

### propEq

```typescript

propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean
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

<summary>All TypeScript definitions</summary>

```typescript
propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean;
  <K extends PropertyKey>(name: K, obj: Record<K, T>): boolean;
};
propEq<T, K extends PropertyKey>(val: T, name: K): (obj: Record<K, T>) => boolean;
propEq<K extends keyof U, U>(val: U[K], name: K, obj: U): boolean;
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { equals } from './equals.js'
import { prop } from './prop.js'

export function propEq(valueToMatch, propToFind) {
  return obj => {
    if (!obj) {
      return false
    }

    return equals(valueToMatch, prop(propToFind, obj))
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { BAR, FOO } from './_internals/testUtils.js'
import { propEq } from './propEq.js'

test('happy', () => {
  const obj = { [FOO]: BAR }
  expect(propEq(BAR, FOO)(obj)).toBeTruthy()
  expect(propEq(1, FOO)(obj)).toBeFalsy()
  expect(propEq(1)(FOO)(obj)).toBeFalsy()
  expect(propEq(1, 1, null)).toBeFalsy()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq('name', 'Abby', null)).toBeFalsy()
  expect(propEq('name', 'Abby', undefined)).toBeFalsy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propSatisfies

```typescript

propSatisfies<T>(predicate: (x: T) => boolean, property: string): (obj: Record<PropertyKey, T>) => boolean
```

It returns `true` if the object property satisfies a given predicate.

```javascript
const obj = {a: {b:1}}
const property = 'a'
const predicate = x => x?.b === 1

const result = R.propSatisfies(predicate, property, obj)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A1%7D%7D%0Aconst%20property%20%3D%20'a'%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%3F.b%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.propSatisfies(predicate%2C%20property%2C%20obj)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.propSatisfies</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propSatisfies<T>(predicate: (x: T) => boolean, property: string): (obj: Record<PropertyKey, T>) => boolean;
```

</details>

<details>

<summary><strong>R.propSatisfies</strong> source</summary>

```javascript
import { prop } from './prop.js'

export function propSatisfies(predicate, property) {
  return obj => predicate(prop(property, obj))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propSatisfies } from './propSatisfies.js'

const obj = { a: 1 }

test('when true', () => {
  expect(propSatisfies(x => x > 0, 'a', obj)).toBeTruthy()
})

test('when false', () => {
  expect(propSatisfies(x => x < 0, 'a')(obj)).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, propSatisfies } from 'rambda'

const obj = { a: 1 }

describe('R.propSatisfies', () => {
  it('happy', () => {
    const result = pipe(
      obj,
      propSatisfies(x => {
        x // $ExpectType number
        return x > 0
      }, 'a'),
    )

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propSatisfies)

### reduce

```typescript

reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult): (list: T[]) => TResult
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
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult): (list: T[]) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function reduce(reducer, acc) {
  return list => {
    if (list == null) {
      return acc
    }
    if (!isArray(list)) {
      throw new TypeError('reduce: list must be array or iterable')
    }
    let index = 0
    const len = list.length

    while (index < len) {
      acc = reducer(acc, list[index], index, list)
      index++
    }

    return acc
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { concat } from './concat.js'
import { reduce } from './reduce.js'

const reducer = (prev, current, i) => {
  expect(typeof i).toBe('number')

  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(reducer, initialValue, list)).toBe(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(reducer, initialValue, {
      a: 1,
      b: 2,
    }),
  ).toThrowError(ERROR)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0, {})).toThrowError(ERROR)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(add, 0, null)).toBe(0)
  expect(reduce(concat, [], null)).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(add, 0, undefined)).toBe(0)
  expect(reduce(concat, [], undefined)).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe,reduce } from 'rambda'

it('R.reduce', () => {
	const result = pipe(
		[1,2,3],
		reduce((acc, val) => acc + val, 10)
	)
	result // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduce)

### reject

```typescript

reject<T>(
	predicate: (value: T) => boolean,
  list: T[],
): T[]
```

It has the opposite effect of `R.filter`.

```javascript
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list),
  R.reject(predicate, obj)
]
// => [[1], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%2C%0A%20%20R.reject(predicate%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.reject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
reject<T>(
	predicate: (value: T) => boolean,
  list: T[],
): T[];
reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => ("" | null | undefined | false | 0)[];
reject<T>(
	predicate: BooleanConstructor,
): (list: T[]) => ("" | null | undefined | false | 0)[];
reject<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import { filter } from './filter.js'

export function reject(predicate) {
  return list => filter(x => !predicate(x), list)
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reject)

### rejectObject

```typescript

rejectObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U
```

Same as `R.filterObject` but it returns the object with properties that do not satisfy the predicate function.

```javascript
const result = R.rejectObject(
	(val, prop) => prop === 'a' || val > 1
)({a: 1, b: 2, c:3})
// => {b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.rejectObject(%0A%09(val%2C%20prop)%20%3D%3E%20prop%20%3D%3D%3D%20'a'%20%7C%7C%20val%20%3E%201%0A)(%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A3%7D)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try this <strong>R.rejectObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
rejectObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#rejectObject)

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
```

</details>

<details>

<summary><strong>R.repeat</strong> source</summary>

```javascript
export function repeat(timesToRepeat) {
  return x => Array(timesToRepeat).fill(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { repeat } from './repeat.js'

test('repeat', () => {
  expect(repeat('')(3)).toEqual(['', '', ''])
  expect(repeat('foo', 3)).toEqual(['foo', 'foo', 'foo'])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([{}, {}, {}])

  expect(arr[0] === arr[1]).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { repeat } from 'rambda'

describe('R.repeat', () => {
  it('happy', () => {
		const result = repeat(4)(7)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#repeat)

### replace

```typescript

replace(strOrRegex: RegExp | string, replacer: RegExp | string): (str: string) => string
```

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
const result = [
	R.replace('o', '|1|')('foo'),
	R.replace(/o/g, '|1|')('foo'),
]
// => ['f|1|o', 'f|1||1|']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%09R.replace('o'%2C%20'%7C1%7C')('foo')%2C%0A%09R.replace(%2Fo%2Fg%2C%20'%7C1%7C')('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B'f%7C1%7Co'%2C%20'f%7C1%7C%7C1%7C'%5D">Try this <strong>R.replace</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: RegExp | string): (str: string) => string;
```

</details>

<details>

<summary><strong>R.replace</strong> source</summary>

```javascript
export function replace(pattern, replacer) {
  return str => str.replace(pattern, replacer)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { replace } from './replace.js'

test('happy', () => {
  expect(replace(/\s/g, '|', 'foo bar baz')).toBe('foo|bar|baz')
})

test('with function as replacer input', () => {
  expect(
    replace(
      /\s/g,
      (match, offset, str) => {
        expect(match).toBe(' ')
        expect([3, 7].includes(offset)).toBeTruthy()
        expect(str).toBe('foo bar baz')

        return '|'
      },
      'foo bar baz',
    ),
  ).toBe('foo|bar|baz')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { replace } from 'rambda'

const str = 'foo bar foo'
const replacer = 'bar'

describe('R.replace', () => {
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

### replaceItemAtIndex

```typescript

replaceItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
const result = R.pipe(
	[1, 2, 3],
	R.replaceItemAtIndex(1, R.add(1))
) // => [1, 3, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%5B1%2C%202%2C%203%5D%2C%0A%09R.replaceItemAtIndex(1%2C%20R.add(1))%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%203%2C%203%5D">Try this <strong>R.replaceItemAtIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
replaceItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.replaceItemAtIndex</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function replaceItemAtIndex(index, replaceFn) {
  return list => {
    const actualIndex = index < 0 ? list.length + index : index
    if (index >= list.length || actualIndex < 0) {
      return list
    }

    const clone = cloneList(list)
    clone[actualIndex] = replaceFn(clone[actualIndex])

    return clone
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { add } from './add.js'
import { replaceItemAtIndex } from './replaceItemAtIndex.js'

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {
  expect(replaceItemAtIndex(1, add(10))(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(replaceItemAtIndex(-2, add(10))(list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(replaceItemAtIndex(4, add(1))(list)).toEqual(list)
  expect(replaceItemAtIndex(-5, add(1))(list)).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replaceItemAtIndex)

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

export function sort(sortFn) {
  return list => cloneList(list).sort(sortFn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sort } from './sort.js'

const fn = (a, b) => (a > b ? 1 : -1)

test('sort', () => {
  expect(sort((a, b) => a - b)([2, 3, 1])).toEqual([1, 2, 3])
})

test("it doesn't mutate", () => {
  const list = ['foo', 'bar', 'baz']

  expect(sort(fn, list)).toEqual(['bar', 'baz', 'foo'])

  expect(list[0]).toBe('foo')
  expect(list[1]).toBe('bar')
  expect(list[2]).toBe('baz')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { sort } from 'rambda'

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

export function sortBy(sortFn) {
  return list => {
    const clone = cloneList(list)

    return clone.sort((a, b) => {
      const aSortResult = sortFn(a)
      const bSortResult = sortFn(b)

      if (aSortResult === bSortResult) {
        return 0
      }

      return aSortResult < bSortResult ? -1 : 1
    })
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortBy } from './sortBy.js'

test('happy', () => {
  const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { sortBy } from 'rambda'

interface Input {
  a: number
}

describe('R.sortBy', () => {
  it('passing type to sort function', () => {
    function fn(x: any): number {
      return x.a
    }

    const input = [{ a: 2 }, { a: 1 }, { a: 0 }]
    const result = sortBy(fn, input)

    result // $ExpectType { a: number; }[]
    result[0].a // $ExpectType number
  })
  it('passing type to sort function and list', () => {
    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{ a: 2 }, { a: 1 }, { a: 0 }]
    const result = sortBy(fn)(input)

    result // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### sortWith

```typescript

sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: T[]) => T[]
```

```javascript
const result = R.sortWith([
    (a, b) => a.a === b.a ? 0 : a.a > b.a ? 1 : -1,
    (a, b) => a.b === b.b ? 0 : a.b > b.b ? 1 : -1,
])([
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sortWith(%5B%0A%20%20%20%20(a%2C%20b)%20%3D%3E%20a.a%20%3D%3D%3D%20b.a%20%3F%200%20%3A%20a.a%20%3E%20b.a%20%3F%201%20%3A%20-1%2C%0A%20%20%20%20(a%2C%20b)%20%3D%3E%20a.b%20%3D%3D%3D%20b.b%20%3F%200%20%3A%20a.b%20%3E%20b.b%20%3F%201%20%3A%20-1%2C%0A%5D)(%5B%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%201%7D%2C%0A%5D)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%201%7D%2C%0A%20%20%7Ba%3A%202%2C%20b%3A%202%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortWith</strong> source</summary>

```javascript
function sortHelper(a, b, listOfSortingFns) {
  let result = 0
  let i = 0
  while (result === 0 && i < listOfSortingFns.length) {
    result = listOfSortingFns[i](a, b)
    i += 1
  }

  return result
}

export function sortWith(listOfSortingFns) {
	return list => {
  if (Array.isArray(list) === false) {
    return []
  }

  const clone = list.slice()
  clone.sort((a, b) => sortHelper(a, b, listOfSortingFns))

  return clone
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortWith } from './sortWith.js'
import { ascend } from './ascend.js'
import { prop } from './prop.js'

const albums = [
  {
    artist: 'Rush',
    genre: 'Rock',
    score: 3,
    title: 'A Farewell to Kings',
  },
  {
    artist: 'Dave Brubeck Quartet',
    genre: 'Jazz',
    score: 3,
    title: 'Timeout',
  },
  {
    artist: 'Rush',
    genre: 'Rock',
    score: 5,
    title: 'Fly By Night',
  },
  {
    artist: 'Daniel Barenboim',
    genre: 'Baroque',
    score: 3,
    title: 'Goldberg Variations',
  },
  {
    artist: 'Glenn Gould',
    genre: 'Baroque',
    score: 3,
    title: 'Art of the Fugue',
  },
  {
    artist: 'Leonard Bernstein',
    genre: 'Romantic',
    score: 4,
    title: 'New World Symphony',
  },
  {
    artist: 'Don Byron',
    genre: 'Jazz',
    score: 5,
    title: 'Romance with the Unseen',
  },
  {
    artist: 'Iron Maiden',
    genre: 'Metal',
    score: 2,
    title: 'Somewhere In Time',
  },
  {
    artist: 'Danny Holt',
    genre: 'Modern',
    score: 1,
    title: 'In Times of Desparation',
  },
  {
    artist: 'Various',
    genre: 'Broadway',
    score: 3,
    title: 'Evita',
  },
  {
    artist: 'Nick Drake',
    genre: 'Folk',
    score: 1,
    title: 'Five Leaves Left',
  },
  {
    artist: 'John Eliot Gardiner',
    genre: 'Classical',
    score: 4,
    title: 'The Magic Flute',
  },
]

test('sorts by a simple property of the objects', () => {
  const sortedAlbums = sortWith([ascend(prop('title'))])(albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('A Farewell to Kings')
  expect(sortedAlbums[11].title).toBe('Timeout')
})

test('sorts by multiple properties of the objects', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('score')), ascend(prop('title'))])(
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Five Leaves Left')
  expect(sortedAlbums[1].title).toBe('In Times of Desparation')
  expect(sortedAlbums[11].title).toBe('Romance with the Unseen')
})

test('sorts by 3 properties of the objects', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('genre')), ascend(prop('score')), ascend(prop('title'))])(
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Art of the Fugue')
  expect(sortedAlbums[1].title).toBe('Goldberg Variations')
  expect(sortedAlbums[11].title).toBe('New World Symphony')
})

test('sorts by multiple properties using ascend and descend', () => {
  const sortedAlbums = sortWith(
    [ascend(prop('score')), ascend(prop('title'))])(
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Five Leaves Left')
  expect(sortedAlbums[1].title).toBe('In Times of Desparation')
  expect(sortedAlbums[11].title).toBe('Romance with the Unseen')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortWith)

### split

```typescript

split(separator: string | RegExp): (str: string) => string[]
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];

// API_MARKER_END
// ============================================

export as namespace R
```

</details>

<details>

<summary><strong>R.split</strong> source</summary>

```javascript
export function split(separator){
	return str => str.split(separator)
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#split)

### splitEvery

```typescript

splitEvery<T>(sliceLength: number): (input: T[]) => (T[])[]
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
splitEvery<T>(sliceLength: number): (input: T[]) => (T[])[];
```

</details>

<details>

<summary><strong>R.splitEvery</strong> source</summary>

```javascript
export function splitEvery(sliceLength) {
	return list => {
  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = []
  let counter = 0

  while (counter < list.length) {
    willReturn.push(list.slice(counter, (counter += sliceLength)))
  }

  return willReturn
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { splitEvery } from './splitEvery.js'

test('happy', () => {
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6], [7]])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, splitEvery } from 'rambda'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
		let result = pipe(
			list,
			splitEvery(3)
		)
    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sum)

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

export function symmetricDifference(x) {
	return y =>  concat(
			filter(value => !includes(value)(y), x),
			filter(value => !includes(value)(x), y),
		)
	
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { symmetricDifference } from './symmetricDifference.js'

test('symmetricDifference', () => {
  const list1 = [1, 2, 3, 4]
  const list2 = [3, 4, 5, 6]
  expect(symmetricDifference(list1)(list2)).toEqual([1, 2, 5, 6])

  expect(symmetricDifference([], [])).toEqual([])
})

test('symmetricDifference with objects', () => {
  const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const list2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  expect(symmetricDifference(list1)(list2)).toEqual([
    { id: 1 },
    { id: 2 },
    { id: 5 },
    { id: 6 },
  ])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { symmetricDifference } from 'rambda'

describe('R.symmetricDifference', () => {
  it('happy', () => {
    const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    const list2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
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

<summary>All TypeScript definitions</summary>

```typescript
T(): boolean;
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

export function tail(listOrString) {
  return drop(1)(listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { tail } from './tail.js'

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
  expect(tail([1, 2])).toEqual([2])
  expect(tail([1])).toEqual([])
  expect(tail([])).toEqual([])

  expect(tail('abc')).toBe('bc')
  expect(tail('ab')).toBe('b')
  expect(tail('a')).toBe('')
  expect(tail('')).toBe('')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { tail } from 'rambda'

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

take<T>(howMany: number): {
  (input: string): string
```

It returns the first `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.take(howMany)([1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.take(howMany)(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.take(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try this <strong>R.take</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
take<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};
```

</details>

<details>

<summary><strong>R.take</strong> source</summary>

```javascript
import { baseSlice } from './_internals/baseSlice.js'

export function take(numberOfItems) {
  return input => {
    if (numberOfItems < 0) {
      return input.slice()
    }
    if (typeof input === 'string') {
      return input.slice(0, numberOfItems)
    }

    return baseSlice(input, 0, numberOfItems)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { take } from './take.js'

test('happy', () => {
  const arr = ['foo', 'bar', 'baz']

  expect(take(1, arr)).toEqual(['foo'])

  expect(arr).toEqual(['foo', 'bar', 'baz'])

  expect(take(2)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar'])
  expect(take(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(3)('rambda')).toBe('ram')
})

test('with negative index', () => {
  expect(take(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(take(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3])
})

test('with zero index', () => {
  expect(take(0, [1, 2, 3])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#take)

### takeLast

```typescript

takeLast<T>(howMany: number): {
  (input: string): string
```

It returns the last `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.takeLast(howMany)([1, 2, 3]),
  R.takeLast(howMany)('foobar'),
]
// => [[2, 3], 'ar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.takeLast(howMany)(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.takeLast(howMany)('foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'ar'%5D">Try this <strong>R.takeLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeLast<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};
```

</details>

<details>

<summary><strong>R.takeLast</strong> source</summary>

```javascript
import { baseSlice } from './_internals/baseSlice.js'

export function takeLast(numberOfItems) {
  return input => {
    const len = input.length
    if (numberOfItems < 0) {
      return input.slice()
    }
    let numValue = numberOfItems > len ? len : numberOfItems

    if (typeof input === 'string') {
      return input.slice(len - numValue)
    }

    numValue = len - numValue

    return baseSlice(input, numValue, len)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLast } from './takeLast.js'

test('with arrays', () => {
  expect(takeLast(1, ['foo', 'bar', 'baz'])).toEqual(['baz'])

  expect(takeLast(2)(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz'])

  expect(takeLast(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])

  expect(takeLast(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])

  expect(takeLast(10, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toBe('bda')

  expect(takeLast(7, 'rambda')).toBe('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(takeLast(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLast)

### takeLastWhile

```typescript

takeLastWhile<T>(predicate: (x: T) => boolean): (input: T[]) => T[]
```

```javascript
const result = R.takeLastWhile(x => x > 2)([1, 2, 3, 4])
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.takeLastWhile(x%20%3D%3E%20x%20%3E%202)(%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.takeLastWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeLastWhile<T>(predicate: (x: T) => boolean): (input: T[]) => T[];
takeLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeLastWhile</strong> source</summary>

```javascript
export function takeLastWhile(predicate) {
	return input => {
		if (input.length === 0) {
			return input
		}
	
		const toReturn = []
		let counter = input.length
	
		while (counter) {
			const item = input[--counter]
			if (!predicate(item)) {
				break
			}
			toReturn.push(item)
		}
	
		return toReturn.reverse() 
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLastWhile } from './takeLastWhile.js'

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = x => x > 2
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual([3, 4])
})

test('predicate is always true', () => {
  const predicate = () => true
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('predicate is always false', () => {
  const predicate = () => false
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLastWhile)

### takeWhile

```typescript

takeWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[]
```

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate)(list)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0A%0Aconst%20result%20%3D%20R.takeWhile(predicate)(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.takeWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
takeWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
takeWhile<T>(predicate: (x: T) => boolean): (input: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeWhile</strong> source</summary>

```javascript
export function takeWhile(predicate) {
  return iterable => {
    const toReturn = []
    let counter = 0

    while (counter < iterable.length) {
      const item = iterable[counter++]
      if (!predicate(item)) {
        break
      }
      toReturn.push(item)
    }
    return toReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeWhile } from './takeWhile.js'

const list = [1, 2, 3, 4, 5]

test('happy', () => {
  const result = takeWhile(x => x < 3)(list)
  expect(result).toEqual([1, 2])
})

test('always true', () => {
  const result = takeWhile(x => true)(list)
  expect(result).toEqual(list)
})

test('always false', () => {
  const result = takeWhile(x => 0)(list)
  expect(result).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, takeWhile } from 'rambda'

const list = [1, 2, 3]

it('R.takeWhile', () => {
	const result = pipe(
		list,
		takeWhile(x => x > 1),
		takeWhile((x, i) => i + x > 1)
	)
	result // $ExpectType number[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debugging in the middle of `R.pipe` chain.

```javascript
const list = [1, 2, 3]

R.pipe(
	list,
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)
// => `2` and `3` will be logged
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.pipe(%0A%09list%2C%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try this <strong>R.tap</strong> example in Rambda REPL</a>

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
export function tap(fn) {
	return x => {
  fn(x)

  return x
}
}
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

<summary>All TypeScript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>

<details>

<summary><strong>R.test</strong> source</summary>

```javascript
export function test(pattern) {
	return str => str.search(pattern) !== -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { test as testMethod } from './test.js'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTruthy()

  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrowError(
    'R.test requires a value of type RegExp as its first argument; received "foo"',
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { test } from 'rambda'

const input = 'foo   '
const regex = /foo/

it('R.test', () => {
	const result = test(regex)(input)

	result // $ExpectType boolean
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#times)

### tryCatch

```typescript

tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U
```

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).

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
```

</details>

<details>

<summary><strong>R.tryCatch</strong> source</summary>

```javascript
export function tryCatch(fn, fallback) {
  return input => {
    try {
      return fn(input)
    } catch (e) {
      return fallback
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prop } from './prop.js'
import { tryCatch } from './tryCatch.js'

test('happy', () => {
  const fn = () => {
    throw new Error('foo')
  }
  const result = tryCatch(fn, () => true)()
  expect(result).toBeTruthy()
})

test('when fallback is used', () => {
  const fn = x => x.x

  expect(tryCatch(fn, false)(null)).toBeFalsy()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a: 1 }))
  const bad = () => JSON.parse('a{a')

  expect(tryCatch(good, 1)()).toEqual({ a: 1 })
  expect(tryCatch(bad, 1)()).toBe(1)
})

test('when fallback is function', () => {
  const fn = x => x.x

  expect(tryCatch(fn, () => 1)(null)).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBeUndefined()
  expect(tryCatch(fn, false)({ x: 1 })).toBe(1)
})

test('fallback receives error object and all initial inputs', () => {
  function thrower(a, b, c) {
    void c
    throw new Error('throwerError')
  }

  function catchFn(e, a, b, c) {
    return [e.message, a, b, c].join('|')
  }

  const willThrow = tryCatch(thrower, catchFn)
  const result = willThrow('A', 'B', 'C')
  expect(result).toBe('throwerError|A|B|C')
})

test('fallback receives error object', () => {
  function throwFn() {
    throw new Error(10)
  }

  function eCatcher(e, a, b) {
    return e.message
  }

  const willThrow = tryCatch(throwFn, eCatcher)
  expect(willThrow([])).toBe('10')
  expect(willThrow([{}, {}, {}])).toBe('10')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { map, pipe, tryCatch } from 'rambda'

describe('R.tryCatch', () => {
  it('happy', () => {
    const result = pipe(
      ['{a:1', '{"b": 2}'],
      map(
        tryCatch(x => {
          return JSON.parse(x) as string
        }, null),
      ),
    )

    result // $ExpectType (string | null)[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

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
export function type(input) {
  if (input === null) {
    return 'Null'
  }
  if (input === undefined) {
    return 'Undefined'
  }
  if (Number.isNaN(input)) {
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
  function* generator() {
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
  expect(type(Number.POSITIVE_INFINITY)).toBe('Number')
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
  class ExtendedError extends Error {}
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
  const fn2 = () => {}

  function fn3() {}
  ;[() => {}, fn1, fn2, fn3].map(val => {
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
  expect(type([1, 2, 3])).toBe('Array')
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
  const exampleSet = new Set([1, 2, 3])
  expect(type(exampleSet)).toBe('Set')
  expect(typeRamda(exampleSet)).toBe('Set')
})

test('function inside object 1', () => {
  const obj = {
    f() {
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(typeRamda(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [name]() {
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(typeRamda(obj.f)).toBe('Function')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { type } from 'rambda'

describe('R.type', () => {
  it('happy', () => {
    const result = type(4)

    result // $ExpectType RambdaTypes
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#type)

### union

```typescript

union<T>(x: T[]): (y: T[]) => T[]
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
union<T>(x: T[]): (y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.union</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'
import { includes } from './includes.js'

export function union(x) {
  return y => {
    const toReturn = cloneList(x)

    y.forEach(yInstance => {
      if (!includes(yInstance, x)) {
        toReturn.push(yInstance)
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
import { union } from './union.js'

test('happy', () => {
  expect(union([1, 2], [2, 3])).toEqual([1, 2, 3])
})

test('with list of objects', () => {
  const list1 = [{ a: 1 }, { a: 2 }]
  const list2 = [{ a: 2 }, { a: 3 }]
  const result = union(list1)(list2)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { union } from 'rambda'

describe('R.union', () => {
  it('happy', () => {
    const result = union([1, 2])( [2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{ a: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3 }]
    const result = union(list1)(list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{ a: 1, b: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3, b: 3 }]
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

export function uniq(list) {
  const set = new _Set()
  const willReturn = []
  list.forEach(item => {
    if (set.checkUniqueness(item)) {
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
  const list = [1, 2, 3, 3, 3, 1, 2, 0]
  expect(uniq(list)).toEqual([1, 2, 3, 0])
})

test('with object', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 1 }, { a: 2 }]
  expect(uniq(list)).toEqual([{ a: 1 }, { a: 2 }])
})

test('with nested array', () => {
  expect(uniq([[42], [42]])).toEqual([[42]])
})

test('with booleans', () => {
  expect(uniq([[false], [false], [true]])).toEqual([[false], [true]])
})

test('with falsy values', () => {
  expect(uniq([undefined, null])).toEqual([undefined, null])
})

test('can distinct between string and number', () => {
  expect(uniq([1, '1'])).toEqual([1, '1'])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { uniq } from 'rambda'

describe('R.uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniq)

### uniqBy

```typescript

uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[]
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
uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqBy</strong> source</summary>

```javascript
import { _Set } from '../src/_internals/set.js'

export function uniqBy(fn) {
	return list => {
		const set = new _Set()

		return list.filter(item => set.checkUniqueness(fn(item)))
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniqBy } from './uniqBy.js'

test('happy', () => {
  expect(uniqBy(Math.abs)([-2, -1, 0, 1, 2])).toEqual([-2, -1, 0])
})

test('returns an empty array for an empty array', () => {
  expect(uniqBy(Math.abs)([])).toEqual([])
})

test('uses R.uniq', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 1 }]
  const expected = [{ a: 1 }, { a: 2 }]
  expect(uniqBy(x => x)(list)).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { uniqBy } from 'rambda'

describe('R.uniqBy', () => {
  it('happy', () => {
    const result = uniqBy(Math.abs)([-2, -1, 0])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqBy)

### uniqWith

```typescript

uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[]
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
uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqWith</strong> source</summary>

```javascript
function includesWith(predicate, target, list) {
  let willReturn = false
  let index = -1

  while (++index < list.length && !willReturn) {
    const value = list[index]

    if (predicate(target, value)) {
      willReturn = true
    }
  }

  return willReturn
}

export function uniqWith(predicate) {
	return list => {
  let index = -1
  const willReturn = []

  while (++index < list.length) {
    const value = list[index]

    if (!includesWith(predicate, value, willReturn)) {
      willReturn.push(value)
    }
  }

  return willReturn
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { uniqWith as uniqWithRamda } from 'ramda'

import { uniqWith } from './uniqWith.js'

const list = [{ a: 1 }, { a: 1 }]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn, list)
  expect(result).toEqual([{ a: 1 }])
})

test('with list of strings', () => {
  const fn = (x, y) => x.length === y.length
  const list = ['0', '11', '222', '33', '4', '55']
  const result = uniqWith(fn)(list)
  const resultRamda = uniqWithRamda(fn, list)
  expect(result).toEqual(['0', '11', '222'])
  expect(resultRamda).toEqual(['0', '11', '222'])
})

test('should return items that are not equal to themselves', () => {
  // test case based on https://github.com/remeda/remeda/issues/999
  const data = [
    { id: 1, reason: 'No name' },
    { id: 1, reason: 'No name' },
    { reason: 'No name' },
    { reason: 'No name' },
  ]
  const expectedResult = [
    { id: 1, reason: 'No name' },
    { reason: 'No name' },
    { reason: 'No name' },
  ]

  const result = uniqWith((errorA, errorB) => {
    // the objects with no ids should effectively be ignored from removal of duplicates
    if (errorA.id === undefined || errorB.id === undefined) {
      return false
    }
    return errorA.id === errorB.id
  }, data)

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, uniqWith } from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
		const result = pipe(
			[{ a: 1 }, { a: 1 }],
			uniqWith((x, y) => x.a === y.a)
		)
    result // $ExpectType { a: number; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqWith)

### unless

```typescript

unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U
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
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U;
unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T): (x: T) => T;
```

</details>

<details>

<summary><strong>R.unless</strong> source</summary>

```javascript
export function unless(predicate, whenFalseFn) {
  return input => {
    if (predicate(input)) {
      return input
    }

    return whenFalseFn(input)
  }
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
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, unless } from 'rambda'

let inc = (x: number) => x + 1

describe('R.unless', () => {
  it('happy', () => {
		let result = pipe(
			1,
			unless(x => x > 5, inc)
		)
    result // $ExpectType number
  })
  it('with two different types', () => {
		let result = pipe(
			1,
			unless(
				x => {
					x // $ExpectType number
					return x > 5
				},
				x => {
					x // $ExpectType number
					return `${x}-foo`
				},
			)
		)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### unwind

```typescript

unwind<S extends string>(prop: S): <T>(obj: T) => Omit<T, S> & { [K in S]: T[S][number] }
```

It takes an object and a property name. The method will return a list of objects, where each object is a shallow copy of the input object, but with the property array unwound.

```javascript
const obj = {
  a: 1,
  b: [2, 3],
}
const result = R.unwind('b')(obj)
const expected = [{a:1, b:2}, {a:1, b:3}]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%20%5B2%2C%203%5D%2C%0A%7D%0Aconst%20result%20%3D%20R.unwind('b')(obj)%0Aconst%20expected%20%3D%20%5B%7Ba%3A1%2C%20b%3A2%7D%2C%20%7Ba%3A1%2C%20b%3A3%7D%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.unwind</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
unwind<S extends string>(prop: S): <T>(obj: T) => Omit<T, S> & { [K in S]: T[S][number] };
```

</details>

<details>

<summary><strong>R.unwind</strong> source</summary>

```javascript
export function unwind(property) {
  return obj => {
    return obj[property].map(x => ({
      ...obj,
      [property]: x,
    }))
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { unwind } from './unwind.js'

test('happy', () => {
  const obj = {
    a: 1,
    b: [2, 3],
    c: [3, 4],
  }
  const expected = [
    {
      a: 1,
      b: 2,
      c: [3, 4],
    },
    {
      a: 1,
      b: 3,
      c: [3, 4],
    },
  ]
  const result = unwind('b')(obj)
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, unwind } from 'rambda'

const obj = {
  a: 1,
  b: [2, 3],
}

describe('R.unwind', () => {
  it('happy', () => {
    const result = unwind('b')(obj)
    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('inside pipe', () => {
    const result = pipe(obj, unwind('b'))
    result.a // $ExpectType number
    result.b // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unwind)

### update

```typescript

update<T>(index: number, newValue: T): (list: T[]) => T[]
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
update<T>(index: number, newValue: T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.update</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function update(index, newValue) {
  return list => {
    const clone = cloneList(list)
    if (index === -1) {
      return clone.fill(newValue, index)
    }

    return clone.fill(newValue, index, index + 1)
  }
}
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
    index, newValue)(list
  )

  const expected = [ 1, 8, 3 ]
  expect(result).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(
    index, newValue)(list
  )

  expect(result).toEqual(list)
})

test('with negative index', () => {
  expect(update(
    -1, 10)([ 1 ]
  )).toEqual([ 10 ])
  expect(update(
    -1, 10)([]
  )).toEqual([])
  expect(update(
    -1, 10)(list
  )).toEqual([ 1, 2, 10 ])
  expect(update(
    -2, 10)(list
  )).toEqual([ 1, 10, 3 ])
  expect(update(
    -3, 10)(list
  )).toEqual([ 10, 2, 3 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### when

```typescript

when<T>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => T): (input: T) => T
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
when<T>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => T): (input: T) => T;
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;
```

</details>

<details>

<summary><strong>R.when</strong> source</summary>

```javascript
export function when(predicate, whenTrueFn) {
  return input => {
    if (!predicate(input)) {
      return input
    }

    return whenTrueFn(input)
  }
}
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

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { when } from 'rambda'

const predicate = (x: number) => x > 2
const whenTrueFn = (x: number) => String(x)

describe('R.when', () => {
  it('happy', () => {
    const result = when(predicate, whenTrueFn)(1)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#when)

### zip

```typescript

zip<K>(x: K[]): <V>(y: V[]) => KeyValuePair<K, V>[]
```

It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

```javascript
const x = [1, 2]
const y = ['A', 'B']
R.zip(x)(y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3])(['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x)(y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0Aconst%20result%20%3D%20R.zip(%5B...x%2C%203%5D)(%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try this <strong>R.zip</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
zip<K>(x: K[]): <V>(y: V[]) => KeyValuePair<K, V>[];
```

</details>

<details>

<summary><strong>R.zip</strong> source</summary>

```javascript
export function zip(left) {
  return right => {
    const result = []
    const length = Math.min(left.length, right.length)

    for (let i = 0; i < length; i++) {
      result[i] = [left[i], right[i]]
    }

    return result
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { zip } from './zip.js'

const array1 = [1, 2, 3]
const array2 = ['A', 'B', 'C']

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
  ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualA = zip([1, 2], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualB = zip(array1, ['A', 'B'])
  expect(actualB).toEqual(expectedB)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { zip } from 'rambda'

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

### zipWith

```typescript

zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[]
```

```javascript
const list1 = [ 10, 20, 30, 40 ]
const list2 = [ 100, 200 ]

const result = R.zipWith(R.add, list1)(list2)
// => [110, 220]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B%2010%2C%2020%2C%2030%2C%2040%20%5D%0Aconst%20list2%20%3D%20%5B%20100%2C%20200%20%5D%0A%0Aconst%20result%20%3D%20R.zipWith(R.add%2C%20list1)(list2)%0A%2F%2F%20%3D%3E%20%5B110%2C%20220%5D">Try this <strong>R.zipWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[];
```

</details>

<details>

<summary><strong>R.zipWith</strong> source</summary>

```javascript
import { take } from './take.js'

export function zipWith(fn, x) {
  return y =>
    take(x.length > y.length ? y.length : x.length, x).map((xInstance, i) =>
      fn(xInstance, y[i]),
    )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { zipWith } from './zipWith.js'
const add = (x, y) => x + y
const list1 = [1, 2, 3]
const list2 = [10, 20, 30, 40]
const list3 = [100, 200]

test('when second list is shorter', () => {
  const result = zipWith(add, list1)(list3)
  expect(result).toEqual([101, 202])
})

test('when second list is longer', () => {
  const result = zipWith(add, list1)(list2)
  expect(result).toEqual([11, 22, 33])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { zipWith } from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = zipWith((x, y) => {
      x // $ExpectType number
      y // $ExpectType number
      return `${x}-${y}`
    }, list1)(list2)

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipWith)

## ❯ CHANGELOG

10.0.0

- Optimize many methods to better work in TS context with `R.pipe/R.compose`. The focus was passing objects through the `pipe/compose` chain.

- Add `R.piped` method from `Rambdax` since it works better with TS than `R.pipe` and `R.compose`. It supports up to 20 function inputs.

_ Regarding using object as input `R.map` and `R.filter` in TypeScript - this is no longer supported in TypeScript as it has multiple issues when using inside pipes. Instead `R.mapObject` and `R.filterObject` are taken from `Rambdax` so users can migrate their code.

- Regarding using string as path input in `R.omit`, `R.pick` and `R.path` - now it require explicit definition of expected return type.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

- Take typings of `R.filter/R.map` from `Remeda`.

- Simplify typing for non-curried methods. The goal is to make typings more readable and easier to understand and maintain. The main goal of Rambda methods is to be used inside `R.piped` chain. 

- Remove use of `Dictionary` custom interface and use more appropriate `Record<PropertyType, ...>`

- Remove use of `Record<string, ...>` in favour of `Record<PropertyType, ...>`

- Add TypeScript definition to handle common case of `R.filter(Boolean)` that will turn `Array<T | undefined>` to `Array<T>`.

- Regarding using object with `R.forEach` in TypeScript - this is no longer supported. Again, JS version still works with objects.

- head/last - empty array as input will return `undefined`, but `never`
- assocPath - stop supporting curring of type `(x)(y)(z)`

- Require explicit output type(s) as it is very hard to pick up the correct type in many cases.

-- assocPath
-- dissocPath 

- Sync with typing of `@types/ramda`:

-- allPass
-- anyPass
-- append
-- both
-- countBy
-- drop
-- dropLast
-- dropRepeatsBy
-- either
-- filter
-- forEach
-- keys
-- map
-- mapObjIndexed
-- mergeAll
-- mergeWith
-- modify
-- modifyPath
-- omit
-- partition
-- prepend
-- where
-- whereAny

- Sync with typing of `remeda`:

-- filter
-- map
-- toPairs

- Publish to JSR registry - https://jsr.io/@rambda/rambda

- Replace Record<string> with Record<PropertyKey>

9.4.2

- Fix TS issue when `R.take` is used as part of `R.pipe`.

Moving away from `Ramda` types which are problematic in this case:

```typescript
const data = ['foo', 'bar', 'baz', 'qux']
const result = piped(
	data,
	filter(
		x => x.length >= 2
	),
	takeLast(2),
)
```

9.4.1

- Fix bug with `R.differenceWith` when two arrays has same length - [Issue #750](https://github.com/selfrefactor/rambda/issues/757)

- Allow path input to not be transformed when string numbers are there - [Issue #750](https://github.com/selfrefactor/rambda/issues/750)

9.4.0

- Fix `deno` release

- Fix too strict `true` condition in `R.ifElse` - [Issue #750](https://github.com/selfrefactor/rambda/issues/750)

- Change `R.groupBy` typings to match `@types/ramda` typings

9.3.0

- Breaking change in relation to TS typings of `R.assoc`, `R.dissoc` and `R.modify` - https://github.com/ramda/types/pull/37

- Add `R.isNotEmpty` as it is new method in `Ramda`

- Fix `R.head`/`R.last` TS definition - It returns `undefined` if array has length of 0. Before 

9.2.1

- Broken `Deno` build - [Issue #731](https://github.com/selfrefactor/rambda/issues/731)

9.2.0

- `R.once` TS type definition miss to context argument and its type - [Issue #728](https://github.com/selfrefactor/rambda/issues/728)

- Fix implementation of `R.unless` function - https://github.com/selfrefactor/rambda/pull/726 

9.1.1

- Faster R.equals with Object.is short circuit - https://github.com/selfrefactor/rambda/pull/725

- Fix R.cond transform is unary - https://github.com/selfrefactor/rambda/issues/720

9.1.0

Add these methods

- insert
- insertAll
- lt
- lte
- isNotNil
- pickBy
- pathSatisfies
- swap
- mergeDeepLeft

9.0.1

- Fix bad TS typings, due to missing declaration - [Issue #716](https://github.com/selfrefactor/rambda/issues/716)

9.0.0

Breaking change in TS definitions of `lenses` as now they are synced to `Ramda` types.

- Add `R.sortWith` - [Issue #707](https://github.com/selfrefactor/rambda/issues/707)

- Add `R.innerJoin`, `R.gt`, `R.gte`, `R.reduceBy`, `R.hasIn`

8.6.0

- Wrong typing for `R.dissocPath` - [Issue #709](https://github.com/selfrefactor/rambda/issues/709)

- Update build dependencies

8.5.0

- Revert changes in `R.anyPass` introduced in `8.4.0` release. The reason is that the change was breaking the library older than `5.2.0` TypeScript.

- Wrong `R.partial` TS definition  - [Issue #705](https://github.com/selfrefactor/rambda/issues/705)

- Add `R.dropRepeatsBy`

- Add `R.empty`

- Add `R.eqBy`

- Add `R.forEachObjIndexed`

8.4.0

- Add `R.dissocPath`

- Fix TS definitions of `R.head/R.last` and add missing handle of empty string

- Add `R.removeIndex` - method was before only in `Rambdax`, but now since `R.dissocPath` is using it, it is added to main library.

- Allow `R.omit` to pass numbers as part of properties to omit, i.e. `R.omit(['a', 1], {a: {1: 1, 2: 2}})`

- R.keys always returns strings - [MR #700](https://github.com/selfrefactor/rambda/pull/700)

- Improve `R.prepend/R.append` type interference - [MR #699](https://github.com/selfrefactor/rambda/pull/699)

- Change `R.reduce` TS definitions so index is always received - [MR #696](https://github.com/selfrefactor/rambda/pull/696)

- Functions as a type guard in `R.anyPass` TS definitions - [MR #695](https://github.com/selfrefactor/rambda/pull/695)

- Fix R.append's curried type - [MR #694](https://github.com/selfrefactor/rambda/pull/694)

- Fix cannot compare errors in `Deno` with `R.equals` - [Issue #704](https://github.com/selfrefactor/rambda/issues/704).

- Fix cannot compare `BigInt` with `R.equals` 

8.3.0

Add the following methods:

- binary
- call
- collectBy
- comparator
- composeWith

8.2.0

Add the following methods:

- addIndex
- addIndexRight
- ap
- aperture
- applyTo
- ascend
- descend

8.1.0

- Fix input order of TS definitions for `R.propEq` method  - [Issue #688](https://github.com/selfrefactor/rambda/issues/688). The issue was due to 8.0.0 was shipped with TS definitions of `7.5.0` release.

- Add `R.differenceWith` method  - [Issue #91](https://github.com/selfrefactor/rambdax/issues/91)

8.0.0

- handle falsy values in merge methods - https://github.com/ramda/ramda/pull/3222

- `R.head`/`R.last` don't return `undefined` for non-empty arrays

- `R.type` supports dates in TS definition - `Rambda` already did support dates in JS.

- Improve typings of `R.endsWith/startsWith` with regard to `string` input. - [PR #622](https://github.com/selfrefactor/rambda/pull/622)

- Handle list as falsy value in `R.reduce` - [Ramda MR](https://github.com/ramda/ramda/pull/2997/files)

- `R.nop` is removed - it will be moved to `Rambdax` as `R.noop`

- `R.includes` is no longer using string literal in TypeScript definitions

> Reason for breaking change - synchronize with Ramda `0.29.0` release:

- change order of `R.propEq` - [Ramda MR](https://github.com/ramda/ramda/pull/2938/files)

7.5.0

- IMPORTANT: Remove `export` property in `package.json` in order to allow `Rambda`  support for projects with `"type": "module"` in `package.json` - [Issue #667](https://github.com/selfrefactor/rambda/issues/657)

- Add `R.unnest` - [Rambdax issue 89](https://github.com/selfrefactor/rambdax/issues/89)

- `R.uniq` is not using `R.equals` as Ramda does - [Issue #88](https://github.com/selfrefactor/rambdax/issues/88)

- Fix `R.path(['non','existing','path'], obj)` TS definition as 7.4.0 release caused TS errors - [Issue #668](https://github.com/selfrefactor/rambda/issues/668)

7.4.0

- Synchronize with `@types/ramda` - `R.prop`, `R.path`, `R.pickAll`

- Remove `esm` Rollup output due to tree-shaking issues.

- Upgrade all dev dependencies.

7.3.0

- Important - changing import declaration in `package.json` in order to fix tree-shaking issue - [Issue #647](https://github.com/selfrefactor/rambda/issues/647)

- Add `R.modify`

- Allow multiple inputs in TypeScript versions of `R.anyPass` and `R.allPass` - [Issue #642](https://github.com/selfrefactor/rambda/issues/604)

- Using wrong clone of object in `R.mergeDeepRight` - [Issue #650](https://github.com/selfrefactor/rambda/issues/650)

- Missing early return in `R.where` - [Issue #648](https://github.com/selfrefactor/rambda/issues/648)

- `R.allPass` doesn't accept more than 1 parameters for function predicates- [Issue #604](https://github.com/selfrefactor/rambda/issues/604)

7.2.1

- Remove bad typings of `R.propIs` which caused the library to cannot be build with TypeScript. 

- Drop support for `Wallaby` as per [https://github.com/wallabyjs/public/issues/3037](https://github.com/wallabyjs/public/issues/3037)

7.2.0

- Wrong `R.update` if index is `-1` - [PR #593](https://github.com/selfrefactor/rambda/pull/593)

- Wrong curried typings in `R.anyPass` - [Issue #642](https://github.com/selfrefactor/rambda/issues/642)

- `R.modifyPath` not exported - [Issue #640](https://github.com/selfrefactor/rambda/issues/640)

- Add new method `R.uniqBy`. Implementation is coming from [Ramda MR#2641](https://github.com/ramda/ramda/pull/2641)

- Apply the following changes from `@types/rambda`:

-- [https://github.com/DefinitelyTyped/DefinitelyTyped/commit/bab47272d52fc7bb81e85da36dbe9c905a04d067](add `AnyFunction` and `AnyConstructor`)

-- Improve `R.ifElse` typings - https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59291

-- Make `R.propEq` safe for `null/undefined` arguments - https://github.com/ramda/ramda/pull/2594/files

7.1.4

- `R.mergeRight` not found on `Deno` import - [Issue #633](https://github.com/selfrefactor/rambda/issues/633)

7.1.0

- Add `R.mergeRight` - introduced by Ramda's latest release. While Ramda renames `R.merge`, Rambda will keep `R.merge`.

- Rambda's `pipe/compose` doesn't return proper length of composed function which leads to issue with `R.applySpec`. It was fixed by using Ramda's `pipe/compose` logic - [Issue #627](https://github.com/selfrefactor/rambda/issues/627)

- Replace `Async` with `Promise` as return type of `R.type`.

- Add new types as TypeScript output for `R.type` - "Map", "WeakMap", "Generator", "GeneratorFunction", "BigInt", "ArrayBuffer"

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

- Breaking change - sync `R.compose`/`R.pipe` with `@types/ramda`. That is significant change so as safeguard, it will lead a major bump. Important - this lead to raising required TypeScript version to `4.2.2`. In other words, to use `Rambda` you'll need TypeScript version `4.2.2` or newer.

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

- One more reason for the breaking change is changing of export declarations in `package.json` based on [this blog post](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing) and [this merged Ramda's PR](https://github.com/ramda/ramda/pull/2999). This also led to renaming of `babel.config.js` to `babel.config.cjs`. 

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

- Fix TypeScript build process with `rambda/immutable` - [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Add `R.objOf` method

- Add `R.mapObjIndexed` method

- Publish shorter README.md version to NPM

6.8.0

- `R.has` use `Object.prototype.hasOwnProperty`- [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Expose `immutable.ts` typings which are Rambda typings with `readonly` statements - [Issue #565](https://github.com/selfrefactor/rambda/issues/565)

- Fix `R.intersection` wrong order compared to Ramda.

- `R.path` wrong return of `null` instead of `undefined` when path value is `null` - [PR #577](https://github.com/selfrefactor/rambda/pull/577)

6.7.0

- Remove `ts-toolbelt` types from TypeScript definitions. Most affected are the following methods, which lose one of its curried definitions:

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

[![Stargazers over time](https://starchart.cc/selfrefactor/rambda.svg)](https://starchart.cc/selfrefactor/rambda)
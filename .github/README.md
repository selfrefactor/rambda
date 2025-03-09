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

It adds `a` and `b`.

> :boom: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
const result = R.piped(
	2,
	R.add(3)
) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.piped(%0A%092%2C%0A%09R.add(3)%0A)%20%2F%2F%20%3D%3E%20%205">Try this <strong>R.add</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### all

```typescript

all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.piped(
	list,
	R.all(predicate)
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.piped(%0A%09list%2C%0A%09R.all(predicate)%0A)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.all</strong> example in Rambda REPL</a>

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
    const result = R.piped(
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
const result = R.piped(
	list,
	R.filter(R.allPass([R.includes(2), R.includes(3)]))
) // => [[1, 2, 3, 4]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B3%2C%204%2C%205%5D%5D%0Aconst%20result%20%3D%20R.piped(%0A%09list%2C%0A%09R.filter(R.allPass(%5BR.includes(2)%2C%20R.includes(3)%5D))%0A)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%2C%203%2C%204%5D%5D">Try this <strong>R.allPass</strong> example in Rambda REPL</a>

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
  return (input) => {
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
import { allPass } from './allPass.js'
import * as R from '../rambda.js'

let list = [[1, 2, 3, 4], [3, 4, 5]]
test('happy', () => {
  const result = R.piped(
		list,
		R.filter(R.allPass([R.includes(2), R.includes(3)]))
	)
	expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
	let result = R.piped(
		list,
		R.filter(R.allPass([R.includes(12), R.includes(31)]))
	)
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
		let list = [[1, 2, 3, 4], [3, 4, 5]]
		let result = R.piped(
			list,
			R.map(R.allPass([R.includes(3), R.includes(4)]))
		)
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
  return (input) => {
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

export function append(x, input) {
  if (arguments.length === 1) {
    return _input => append(x, _input)
  }

  if (typeof input === 'string') {
    return input.split('').concat(x)
  }

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
  expect(append('tests', ['write', 'more'])).toEqual(['write', 'more', 'tests'])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})

test('with strings', () => {
  expect(append('o', 'fo')).toEqual(['f', 'o', 'o'])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### assoc

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

> :boom: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3)({a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203)(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try this <strong>R.assoc</strong> example in Rambda REPL</a>

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

export function assocPath(path, newValue){
	return (input) => {
  const pathArrValue = createPath(path)
  if (pathArrValue.length === 0) {
    return newValue
  }

  const index = pathArrValue[0]
  if (pathArrValue.length > 1) {
    const nextInput = typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
      ? {}
      : input[index]

    newValue = assocPath(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue)(
      nextInput,
    )
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
				c: 1
			}
    },
  }
  console.log(assocPath(path, 2)(input)	)
  expect(assocPath(path, 2)(input)).toEqual({
    a: {
      b: {
				c: 1,
				d: 2
			}
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
    assocPath('b.d', 3)({
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
  const result = assocPath([], 3)({
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
	return (input) => {
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
import { equals } from './equals.js'
import { checkObjectWithSpec } from './checkObjectWithSpec.js'

test('when true', () => {
  const result = checkObjectWithSpec(
    {
      a: equals('foo'),
      b: equals('bar'),
    })(
    {
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    },
  )

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
import { equals, checkObjectWithSpec } from 'rambda'

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### compose

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.compose</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compose)

### concat

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20result%20%3D%20R.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try this <strong>R.concat</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### count

It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.

```javascript
const list = [{a: 1}, 1, {a:2}]
const result = R.count(x => x.a !== undefined, list)
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%201%2C%20%7Ba%3A2%7D%5D%0Aconst%20result%20%3D%20R.count(x%20%3D%3E%20x.a%20!%3D%3D%20undefined%2C%20list)%0A%2F%2F%20%3D%3E%202">Try this <strong>R.count</strong> example in Rambda REPL</a>

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

It decrements a number.

```javascript
const result = R.dec(2) // => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dec(2)%20%2F%2F%20%3D%3E%201">Try this <strong>R.dec</strong> example in Rambda REPL</a>

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
	return (b) =>  {
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

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
// => {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try this <strong>R.dissoc</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### dissocPath

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

```javascript
const result = R.dissocPath(['a', 'b'])({a: {b: 1, c: 2}})
// => {a: {c: 2}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissocPath(%5B'a'%2C%20'b'%5D)(%7Ba%3A%20%7Bb%3A%201%2C%20c%3A%202%7D%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20%7Bc%3A%202%7D%7D">Try this <strong>R.dissocPath</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissocPath)

### divide

```javascript
R.divide(71)(100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71)(100)%20%2F%2F%20%3D%3E%200.71">Try this <strong>R.divide</strong> example in Rambda REPL</a>

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

```javascript
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate, list);
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%3D%203%0A%0Aconst%20result%20%3D%20dropLastWhile(predicate%2C%20list)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.dropLastWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeatsBy

```javascript
const result = R.dropRepeatsBy(
  Math.abs,
  [1, -1, 2, 3, -3]
)
// => [1, 2, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropRepeatsBy(%0A%20%20Math.abs%2C%0A%20%20%5B1%2C%20-1%2C%202%2C%203%2C%20-3%5D%0A)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try this <strong>R.dropRepeatsBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsBy)

### dropRepeatsWith

```javascript
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'))(list)

// => [{a:1,b:2}, {a:2, b:4}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A1%2Cb%3A3%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D%0Aconst%20result%20%3D%20R.dropRepeatsWith(R.prop('a'))(list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D">Try this <strong>R.dropRepeatsWith</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsWith)

### dropWhile

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate)(list)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0Aconst%20result%20%3D%20R.dropWhile(predicate)(list)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.dropWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropWhile)

### endsWith

```typescript

endsWith<T extends string>(question: T): (str: string) => boolean
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
endsWith<T extends string>(question: T): (str: string) => boolean;
endsWith<T>(question: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { equals } from './equals.js'

export function endsWith(target, iterable) {
  if (arguments.length === 1) {
    return _iterable => endsWith(target, _iterable)
  }

  if (typeof iterable === 'string') {
    return iterable.endsWith(target)
  }
  if (!isArray(target)) {
    return false
  }

  const diff = iterable.length - target.length
  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) {
      return false
    }
    const result = equals(x, iterable[index + diff])
    if (!result) {
      correct = false
    }

    return result
  })

  return filtered.length === target.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { endsWith } from './endsWith.js'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTruthy()
  expect(endsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(endsWith({ a: 3 }, list)).toBeFalsy(),
    expect(endsWith([{ a: 3 }], list)).toBeTruthy()
  expect(endsWith([{ a: 2 }, { a: 3 }], list)).toBeTruthy()
  expect(endsWith(list, list)).toBeTruthy()
  expect(endsWith([{ a: 1 }], list)).toBeFalsy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#endsWith)

### eqBy

```javascript
const result = R.eqBy(Math.abs, 5)(-5)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.eqBy(Math.abs%2C%205)(-5)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqBy)

### eqProps

It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

```javascript
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1)(obj2)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj1%20%3D%20%7Ba%3A%201%2C%20b%3A2%7D%0Aconst%20obj2%20%3D%20%7Ba%3A%201%2C%20b%3A3%7D%0Aconst%20result%20%3D%20R.eqProps('a'%2C%20obj1)(obj2)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqProps</strong> example in Rambda REPL</a>

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
	return obj => mapObject((x, prop) => {
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
  list: T[],
): S[]
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
filter<T, S extends T>(
	predicate: (value: T) => value is S,
  list: T[],
): S[];
filter<T>(
	predicate: (value: T) => boolean,
  list: T[],
): T[];
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
  expect(() => filter(T)(undefined)).toThrowError(
    'Incorrect iterable input',
  )
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
import { filter, map, pipe, piped } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('within piped', () => {
    const result = piped(
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
    const result = piped(
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
    const result = piped(
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
    const result = piped(testList, filter(Boolean))
    result // $ExpectType number[]
  })
  it('filtering NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = piped(testList, filter(Boolean))
    result // $ExpectType NonNullable<1 | 2 | 3 | null | undefined>[]
    // @ts-expect-error
    result.includes(null)
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

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

It splits `list` according to a provided `groupFn` function and returns an object.

```javascript
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'b'%2C%20'aa'%2C%20'bb'%20%5D%0Aconst%20groupFn%20%3D%20x%20%3D%3E%20x.length%0A%0Aconst%20result%20%3D%20R.groupBy(groupFn%2C%20list)%0A%2F%2F%20%3D%3E%20%7B%20'1'%3A%20%5B'a'%2C%20'b'%5D%2C%20'2'%3A%20%5B'aa'%2C%20'bb'%5D%20%7D">Try this <strong>R.groupBy</strong> example in Rambda REPL</a>

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

It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.

```javascript
const result = [
  R.indexOf({a:1})([{a:1}, {a:2}]),
  R.indexOf(2)([1, 2, 3]),
]
// => [0, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.indexOf(%7Ba%3A1%7D)(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D)%2C%0A%20%20R.indexOf(2)(%5B1%2C%202%2C%203%5D)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B0%2C%201%5D">Try this <strong>R.indexOf</strong> example in Rambda REPL</a>

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
import {baseSlice} from './_internals/baseSlice.js'

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

It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.

```javascript
const list1 = [1, 2, 3, 4, 5]
const list2 = [4, 5, 6]
const predicate = (x, y) => x >= y
const result = R.innerJoin(predicate, list1)(list2)
// => [4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20list2%20%3D%20%5B4%2C%205%2C%206%5D%0Aconst%20predicate%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3E%3D%20y%0Aconst%20result%20%3D%20R.innerJoin(predicate%2C%20list1)(list2)%0A%2F%2F%20%3D%3E%20%5B4%2C%205%5D">Try this <strong>R.innerJoin</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#innerJoin)

### intersection

It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.

> :boom: There is slight difference between Rambda and Ramda implementation. Ramda.intersection(['a', 'b', 'c'], ['c', 'b']) result is "[ 'c', 'b' ]", but Rambda result is "[ 'b', 'c' ]".

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = R.intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20R.intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try this <strong>R.intersection</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = 10
const result = intersperse(separator, list)
// => [0, 10, 1, 10, 2, 10, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%2010%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%2010%2C%201%2C%2010%2C%202%2C%2010%2C%203%5D">Try this <strong>R.intersperse</strong> example in Rambda REPL</a>

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
  expect(() => indexOf([], true)).toThrowError(
    'indexOf is not defined',
  )
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
    'Cannot read property \'indexOf\' of abc',
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
import { map, piped } from 'rambda'

const list = [1, 2, 3]

describe('R.map with array', () => {
  it('happy', () => {
    const result = map(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType boolean[]
  })
  it('within piped', () => {
    const result = piped(
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

mapObject<T, TResult>(
	fn: (
		value: T,
		key: string,
		obj?: {
			[key: string]: T
```

It works the same way as `R.map` does for objects. It is added as Ramda also has this method.

> :boom: ?

```javascript
const fn = (val, prop) => {
  return `${prop}-${val}`
}

const obj = {a: 1, b: 2}

const result = R.mapObject(fn, obj)
// => {a: 'a-1', b: 'b-2'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(val%2C%20prop)%20%3D%3E%20%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20R.mapObject(fn%2C%20obj)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try this <strong>R.mapObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapObject<T, TResult>(
	fn: (
		value: T,
		key: string,
		obj?: {
			[key: string]: T;
		},
	) => TResult,
	obj: {
		[key: string]: T;
	},
): {
	[key: string]: TResult;
};
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
import { mapObject } from 'rambda'

describe('R.mapObject', () => {
  it('iterable with all three arguments', () => {
    const result = mapObject(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Record<PropertyKey, number>
        return `${a}`
      },
      { a: 1, b: 2 },
    )
    result // $ExpectType Record<PropertyKey, string>
  })
  it('iterable with property argument', () => {
    const result = mapObject(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return a + 2
      },
      { a: 1, b: 2 },
    )
    result // $ExpectType Record<PropertyKey, number>
  })
  it('iterable with no property argument', () => {
    const result = mapObject(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      { a: 1, b: 2 },
    )
    result // $ExpectType Record<PropertyKey, string>
  })
  it('curried requires explicit type', () => {
    const result = mapObject<number>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Record<PropertyKey, number>
      return a + 2
    })({ a: 1, b: 2 })
    result // $ExpectType Record<PropertyKey, number>
  })
  it('curried requires explicit types', () => {
    const result = mapObject<number, string>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Record<PropertyKey, number>
      return `${a}`
    })({ a: 1, b: 2 })
    result // $ExpectType Record<PropertyKey, string>
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
  }).toThrowError(
    'Cannot read properties of null (reading \'match\')',
  )
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mathMod)

### max

It returns the greater value between `x` and `y`.

```javascript
const result = [
  R.max(5, 7),  
  R.max('bar', 'foo'),  
]
// => [7, 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.max(5%2C%207)%2C%20%20%0A%20%20R.max('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B7%2C%20'foo'%5D">Try this <strong>R.max</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#max)

### maxBy

It returns the greater value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try this <strong>R.maxBy</strong> example in Rambda REPL</a>

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

Same as `R.mergeRight`.

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
import { merge } from './merge.js'

export function mergeAll(arr) {
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
import { mergeAll } from './mergeAll.js'

test('case 1', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]
  const expectedResult = {
    a: 1,
    b: 2,
    c: 3,
  }
  expect(mergeAll(arr)).toEqual(expectedResult)
})

test('case 2', () => {
  expect(mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }])).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
  })
})

describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil', () => {
    expect(mergeAll([null, { foo: 1 }, { foo: 2 }, { bar: 2 }])).toEqual({
      foo: 2,
      bar: 2,
    })
  })

  it('if the last object is nil', () => {
    expect(mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }, undefined])).toEqual({
      foo: 2,
      bar: 2,
    })
  })

  it('if an intermediate object is nil', () => {
    expect(mergeAll([{ foo: 1 }, { foo: 2 }, null, { bar: 2 }])).toEqual({
      foo: 2,
      bar: 2,
    })
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mergeAll } from 'rambda'

describe('R.mergeAll', () => {
  it('with passing type', () => {
    interface Output {
      foo: number
      bar: number
    }
    const result = mergeAll<Output>([{ foo: 1 }, { bar: 2 }])
    result.foo // $ExpectType number
    result.bar // $ExpectType number
  })

  it('without passing type', () => {
    const result = mergeAll([{ foo: 1 }, { bar: 2 }])
    result // $ExpectType unknown
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeAll)

### mergeRight

It creates a copy of `target` object with overwritten `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.mergeRight(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.mergeRight(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try this <strong>R.mergeRight</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeRight)

### mergeTypes

```typescript

mergeTypes<T>(x: T): MergeTypes<T>
```

Helper to merge all calculated TypeScript definitions into one definition.
It returns its input and it is intended to be used as last method inside `R.piped` chain.

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

It returns the lesser value between `x` and `y`.

```javascript
const result = [
  R.min(5, 7),  
  R.min('bar', 'foo'),  
]
// => [5, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.min(5%2C%207)%2C%20%20%0A%20%20R.min('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%20'bar'%5D">Try this <strong>R.min</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#min)

### minBy

It returns the lesser value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try this <strong>R.minBy</strong> example in Rambda REPL</a>

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

It changes a property of object on the base of provided path and transformer function.

```javascript
const result = R.modifyPath('a.b.c', x=> x+1, {a:{b: {c:1}}})
// => {a:{b: {c:2}}}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modifyPath('a.b.c'%2C%20x%3D%3E%20x%2B1%2C%20%7Ba%3A%7Bb%3A%20%7Bc%3A1%7D%7D%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%7Bb%3A%20%7Bc%3A2%7D%7D%7D">Try this <strong>R.modifyPath</strong> example in Rambda REPL</a>

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
import { none } from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = none(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3],
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

It creates an object with a single key-value pair.

```javascript
const result = R.objOf('foo', 'bar')
// => {foo: 'bar'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.objOf('foo'%2C%20'bar')%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%7D">Try this <strong>R.objOf</strong> example in Rambda REPL</a>

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
    if (String(list[index])=== String(x)) {
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
import { omit, piped } from 'rambda'

const input = { a: 'foo', b: 2, c: 3 }

describe('R.omit', () => {
  it('with string as input', () => {
		let result = piped(
			input,
			omit('a,b')
		)
    result.c // $ExpectType number
  })
  it('with array as input', () => {
		let result = piped(
			input,
			omit(
				['a', 'b']
			)
		)
    result.c // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### partition

```typescript

partition<T, U extends T>(fn: (a: T) => a is U): <L extends T = T>(list: L[]) => [U[], Exclude<L, U>[]]
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
partition<T, U extends T>(fn: (a: T) => a is U): <L extends T = T>(list: L[]) => [U[], Exclude<L, U>[]];
partition<T>(fn: (a: T) => boolean): <L extends T = T>(list: L[]) => [L[], L[]];

partition<T, U extends T>(fn: (a: T) => a is U, list: T[]): [U[], Exclude<T, U>[]];
partition<T>(fn: (a: T) => boolean, list: T[]): [T[], T[]];
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

export function partition(predicate, iterable) {
  if (arguments.length === 1) {
    return listHolder => partition(predicate, listHolder)
  }
  if (!isArray(iterable)) {
    return partitionObject(predicate, iterable)
  }

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
  const list = [1, 2, 3, 4]

  const result = partition(predicate, list)
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

  const result = [partition(predicate, list), partition(predicate, obj)]
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
import { partition } from 'rambda'

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
import { path, piped } from 'rambda'

const input = { a: { b: { c: true } } }

describe('R.path with string as path', () => {
  it('happy', () => {
		let result = piped(
			input,
			path(['a','b',])
		)
		let resultStringInput = piped(
			input,
			path('a.b.c')
		)
		result // $ExpectType boolean
		resultStringInput // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#path)

### pathSatisfies

```javascript
const result = R.pathSatisfies(
  x => x > 0,
  ['a', 'b', 'c'],
  {a: {b: {c: 1}}}
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pathSatisfies(%0A%20%20x%20%3D%3E%20x%20%3E%200%2C%0A%20%20%5B'a'%2C%20'b'%2C%20'c'%5D%2C%0A%20%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%201%7D%7D%7D%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.pathSatisfies</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathSatisfies)

### pick

```typescript

pick<K extends PropertyKey>(propsToPick: K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>
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
import { pick, piped } from 'rambda'

const input = { a: 'foo', c: 3 }

describe('R.pick', () => {
  it('with string as input', () => {
		let result = piped(
			input,
			pick('a,c,b,o')
		)
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
  it('with array as input', () => {
		let result = piped(
			input,
			pick(
				['a', 'c']
			)
		)
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
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

export function pickAll(propsToPick) {
	return obj => {
  if (obj === null || obj === undefined) {
    return undefined
  }
  const keysValue = createPath(propsToPick, ',')
  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]]
    } else {
      willReturn[keysValue[counter]] = undefined
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
import { pickAll } from './pickAll.js'

test('when input is undefined or null', () => {
  expect(pickAll('a', null)).toBeUndefined()
  expect(pickAll('a', undefined)).toBeUndefined()
})

test('with string as condition', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const result = pickAll('a,c', obj)
  const resultCurry = pickAll('a,c')(obj)
  const expectedResult = {
    a: 1,
    b: undefined,
    c: 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(
    pickAll(['a', 'b', 'c'], {
      a: 'foo',
      c: 'baz',
    }),
  ).toEqual({
    a: 'foo',
    b: undefined,
    c: 'baz',
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pickAll } from 'rambda'

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
const input = { a: 'foo', b: 2, c: 3, d: 4 }

describe('R.pickAll with array as props input', () => {
  it('without passing type', () => {
    const result = pickAll(['a', 'c'], input)
    result.a // $ExpectType string
    result.c // $ExpectType number
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

### pickBy

```javascript
const result = R.pickBy(
  x => x > 1,
  {a: 1, b: 2, c: 3}
)
// => {b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pickBy(%0A%20%20x%20%3D%3E%20x%20%3E%201%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%2C%20c%3A%203%7D">Try this <strong>R.pickBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pickBy)

### pipe

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.pipe</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### piped

It is basically `R.pipe`, but instead of passing `input` argument as `R.pipe(...)(input)`, you pass it as the first argument. 

It has much better TypeScript support and it is strongly recomended to use `R.piped` instead of `R.pipe`/`R.compose`.

```javascript
const result = R.piped(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.piped(%0A%20%20%5B1%2C%202%2C%203%5D%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%2C%0A%20%20R.map(x%20%3D%3E%20x*10)%2C%0A)%0A%2F%2F%20%3D%3E%20%5B20%2C%2030%5D">Try this <strong>R.piped</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#piped)

### pluck

```typescript

pluck<T, K extends keyof T>(property: K): (list: T[]) => T[K][]
```

It returns list of the values of `property` taken from the all objects inside `list`.

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

export function pluck(property, list) {
  if (arguments.length === 1) {
    return _list => pluck(property, _list)
  }

  const willReturn = []

  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property])
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

  expect(pluck(0, input)).toEqual([1, 3])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { piped, pluck } from 'rambda'

describe('R.pluck - with property key', () => {
  const input = [
    { a: 1, b: 'foo' },
    { a: 2, b: 'bar' },
  ]
  it('inside piped', () => {
    const result = piped(input, pluck('b'))
    result // $ExpectType string[]
  })
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
export function prepend(x, input) {
  if (arguments.length === 1) {
    return _input => prepend(x, _input)
  }

  if (typeof input === 'string') {
    return [x].concat(input.split(''))
  }

  return [x].concat(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { prepend } from './prepend.js'

test('happy', () => {
  expect(prepend('yes', ['foo', 'bar', 'baz'])).toEqual(['yes', 'foo', 'bar', 'baz'])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual(['foo'])
})

test('with string instead of array', () => {
  expect(prepend('foo')('bar')).toEqual(['foo', 'b', 'a', 'r'])
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
  R.prop('x', {x: 100}), 
  R.prop('x', {a: 1}) 
]
// => [100, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%2C%20%0A%20%20R.prop('x'%2C%20%7Ba%3A%201%7D)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B100%2C%20undefined%5D">Try this <strong>R.prop</strong> example in Rambda REPL</a>

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

  return obj => obj ? obj[searchProperty] : undefined}
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

propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<PropertyKey, T>): boolean
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
propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<PropertyKey, T>): boolean;
propSatisfies<T>(predicate: Predicate<T>, property: string): (obj: Record<PropertyKey, T>) => boolean;
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
import { propSatisfies } from 'rambda'

const obj = { a: 1 }

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

### reduce

> :boom: It passes index of the list as third argument to `reducer` function.

```javascript
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20initialValue%20%3D%2010%0Aconst%20reducer%20%3D%20(prev%2C%20current)%20%3D%3E%20prev%20*%20current%0A%0Aconst%20result%20%3D%20R.reduce(reducer%2C%20initialValue%2C%20list)%0A%2F%2F%20%3D%3E%2060">Try this <strong>R.reduce</strong> example in Rambda REPL</a>

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

export function reject(predicate, list) {
  if (arguments.length === 1) {
    return _list => reject(predicate, _list)
  }

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
  expect(reject(isOdd)([1, 2, 3, 4])).toEqual([2, 4])
})

test('with object', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }
  expect(reject(isOdd, obj)).toEqual({
    b: 2,
    d: 4,
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mapIndexed, pipe, piped, reject } from 'rambda'

const list = [1, 2, 3]

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('within piped', () => {
    const result = piped(
      list,
      reject(x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    result // $ExpectType number[]
  })
  it('rejecting NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = piped(testList, reject(Boolean))
    result // $ExpectType (false | "" | 0 | null | undefined)[]
  })
  it('rejecting NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = piped(testList, reject(Boolean))
    result // $ExpectType (false | "" | 0 | null | undefined)[]
    // @ts-expect-error
    result.includes(1)
  })
  it('within pipe requires explicit type', () => {
    pipe(
      x => x,
      reject<number>(x => {
        x // $ExpectType number
        return x > 1
      }),
      reject((x: number) => {
        x // $ExpectType number
        return x > 1
      }),
    )(list)
  })
})
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

<summary>All TypeScript definitions</summary>

```typescript
repeat<T>(x: T): (timesToRepeat: number) => T[];
repeat<T>(x: T, timesToRepeat: number): T[];
```

</details>

<details>

<summary><strong>R.repeat</strong> source</summary>

```javascript
export function repeat(x, timesToRepeat) {
  if (arguments.length === 1) {
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
  return (str) => str.replace(pattern, replacer)
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
    const result = replace(/foo/g, replacer, str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer, str)

    result // $ExpectType string
  })
  it('with function as replacer', () => {
    const result = replace(
      'f(o)o',
      (m: string, p1: string, offset: number) => {
        m // $ExpectType string
        p1 // $ExpectType string
        offset // $ExpectType number
        return p1
      },
      str,
    )

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
  it('with function as replacer', () => {
    const result = replace('f(o)o')((m: string, p1: string, offset: number) => {
      m // $ExpectType string
      p1 // $ExpectType string
      offset // $ExpectType number
      return p1
    })(str)

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
const result = R.piped(
	[1, 2, 3],
	R.replaceItemAtIndex(1, R.add(1))
) // => [1, 3, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.piped(%0A%09%5B1%2C%202%2C%203%5D%2C%0A%09R.replaceItemAtIndex(1%2C%20R.add(1))%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%203%2C%203%5D">Try this <strong>R.replaceItemAtIndex</strong> example in Rambda REPL</a>

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
import { compose } from './compose.js'
import { prop } from './prop.js'
import { sortBy } from './sortBy.js'
import { toLower } from './toLower.js'

test('happy', () => {
  const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with compose', () => {
  const alice = {
    name: 'ALICE',
    age: 101,
  }
  const bob = {
    name: 'Bob',
    age: -10,
  }
  const clara = {
    name: 'clara',
    age: 314.159,
  }
  const people = [clara, bob, alice]
  const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))

  expect(sortByNameCaseInsensitive(people)).toEqual([alice, bob, clara])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, sortBy } from 'rambda'

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

    const input = [{ a: 2 }, { a: 1 }, { a: 0 }]
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

    const input: Input[] = [{ a: 2 }, { a: 1 }, { a: 0 }]
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

    const result = fn([{ value: 1 }, { value: 2 }])
    result // $ExpectType Obj[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### sortWith

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortWith)

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
export function splitEvery(sliceLength, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => splitEvery(sliceLength, _listOrString)
  }

  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = []
  let counter = 0

  while (counter < listOrString.length) {
    willReturn.push(listOrString.slice(counter, (counter += sliceLength)))
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
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6], [7]])

  expect(splitEvery(3)('foobarbaz')).toEqual(['foo', 'bar', 'baz'])
})

test('with bad input', () => {
  expect(() =>
    expect(splitEvery(0)('foo')).toEqual(['f', 'o', 'o']),
  ).toThrowError(
    'First argument to splitEvery must be a positive integer',
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { splitEvery } from 'rambda'

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

splitWhen<T>(predicate: Predicate<T>): <U>(list: U[]) => (U[])[]
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
splitWhen<T>(predicate: Predicate<T>): <U>(list: U[]) => (U[])[];
```

</details>

<details>

<summary><strong>R.splitWhen</strong> source</summary>

```javascript
export function splitWhen(predicate) {
	return input => {

		const preFound = []
		const postFound = []
		let found = false
		let counter = -1
	
		while (counter++ < input.length - 1) {
			if (found) {
				postFound.push(input[counter])
			} else if (predicate(input[counter])) {
				postFound.push(input[counter])
				found = true
			} else {
				preFound.push(input[counter])
			}
		}
	
		return [preFound, postFound]
	}
}
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

export function startsWith(question, iterable) {
  if (arguments.length === 1) {
    return _iterable => startsWith(question, _iterable)
  }

  if (typeof iterable === 'string') {
    return iterable.startsWith(question)
  }
  if (!isArray(question)) {
    return false
  }

  let correct = true
  const filtered = question.filter((x, index) => {
    if (!correct) {
      return false
    }
    const result = equals(x, iterable[index])
    if (!result) {
      correct = false
    }

    return result
  })

  return filtered.length === question.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { startsWith } from './startsWith.js'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTruthy()
  expect(startsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(startsWith({ a: 1 }, list)).toBeFalsy()
  expect(startsWith([{ a: 1 }], list)).toBeTruthy()
  expect(startsWith([{ a: 1 }, { a: 2 }], list)).toBeTruthy()
  expect(startsWith(list, list)).toBeTruthy()
  expect(startsWith([{ a: 2 }], list)).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { startsWith } from 'rambda'

describe('R.startsWith - array', () => {
  const question = [{ a: 1 }]
  const iterable = [{ a: 1 }, { a: 2 }]
  it('happy', () => {
    const result = startsWith(question, iterable)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(question)(iterable)
    result // $ExpectType boolean
  })
})

describe('R.startsWith - string', () => {
  const question = 'foo'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = startsWith(question, iterable)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(question)(iterable)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#startsWith)

### subtract

Curried version of `x - y`

```javascript
const x = 3
const y = 1

const result = R.subtract(x, y) 
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%203%0Aconst%20y%20%3D%201%0A%0Aconst%20result%20%3D%20R.subtract(x%2C%20y)%20%0A%2F%2F%20%3D%3E%202">Try this <strong>R.subtract</strong> example in Rambda REPL</a>

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

export function symmetricDifference(x, y) {
  if (arguments.length === 1) {
    return _y => symmetricDifference(x, _y)
  }

  return concat(
    filter(value => !includes(value, y), x),
    filter(value => !includes(value, x), y),
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
    const list1 = [1, 2, 3, 4]
    const list2 = [3, 4, 5, 6]
    const result = symmetricDifference(list1, list2)

    result // $ExpectType number[]
  })

  it('curried', () => {
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
  return drop(1, listOrString)
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
import {baseSlice} from './_internals/baseSlice.js'

export function take(numberOfItems){
	return input => {
	if (howMany < 0) return input.slice()
	if (typeof input === 'string') return input.slice(0, howMany)

	return baseSlice(
		input, 0, howMany
	)
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
import {baseSlice} from './_internals/baseSlice.js'

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

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { filter, piped, takeLast } from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.takeLast - array', () => {
  it('happy', () => {
    const result = takeLast(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = takeLast<number[]>(howMany)(list)

    result // $ExpectType number[]
  })
  it('real case', () => {
    const data = ['foo', 'bar', 'baz', 'qux']
    const result = piped(
      data,
      filter(x => x.length >= 100),
      // takeLast(2),
    )
    result // $ExpectType string[]
  })
})

describe('R.takeLast - string', () => {
  it('happy', () => {
    const result = takeLast(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = takeLast<string>(howMany)(str)

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLast)

### takeLastWhile

```typescript

takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: T[]) => T[]
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
takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeLastWhile</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'

export function takeLastWhile(predicate, input) {
  if (arguments.length === 1) {
    return _input => takeLastWhile(predicate, _input)
  }
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

  return isArray(input) ? toReturn.reverse() : toReturn.reverse().join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { takeLastWhile } from './takeLastWhile.js'
const assert = require('node:assert')

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = x => x > 2
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([3, 4])
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

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { takeLastWhile } from 'rambda'

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

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate)(list)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0A%0Aconst%20result%20%3D%20R.takeWhile(predicate)(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.takeWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debugging in the middle of `R.piped` chain.

```javascript
const list = [1, 2, 3]

R.piped(
	list,
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)
// => `2` and `3` will be logged
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.piped(%0A%09list%2C%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try this <strong>R.tap</strong> example in Rambda REPL</a>

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
export function tap(fn, x) {
  if (arguments.length === 1) {
    return _x => tap(fn, _x)
  }

  fn(x)

  return x
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
export function test(pattern, str) {
  if (arguments.length === 1) {
    return _str => test(pattern, _str)
  }

  if (typeof pattern === 'string') {
    throw new TypeError(
      `R.test requires a value of type RegExp as its first argument; received "${pattern}"`,
    )
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

### type

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
    const result = union([1, 2], [2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{ a: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3 }]
    const result = union(list1, list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{ a: 1, b: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3, b: 3 }]
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

It applies uniqueness to input list based on function that defines what to be used for comparison between elements.

`R.equals` is used to determine equality.

```javascript
const list = [{a:1}, {a:2}, {a:1}]
const result = R.uniqBy(x => x, list)

// => [{a:1}, {a:2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A1%7D%5D%0Aconst%20result%20%3D%20R.uniqBy(x%20%3D%3E%20x%2C%20list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D">Try this <strong>R.uniqBy</strong> example in Rambda REPL</a>

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

export function uniqWith(predicate, list) {
  if (arguments.length === 1) {
    return _list => uniqWith(predicate, _list)
  }

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
import { uniqWith } from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
    const list = [{ a: 1 }, { a: 1 }]

    const fn = (x: any, y: any) => x.a === y.a

    const result = uniqWith(fn, list)
    result // $ExpectType { a: number; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqWith)

### unwind

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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unwind)

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
    result // $ExpectType string | 1
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#when)

### without

```typescript

without<T>(matchAgainst: T[]): (source: T[]) => T[]
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
without<T>(matchAgainst: T[]): (source: T[]) => T[];
```

</details>

<details>

<summary><strong>R.without</strong> source</summary>

```javascript
import { _indexOf } from './equals.js'
import { reduce } from './reduce.js'

export function without(matchAgainst, source) {
  if (source === undefined) {
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current),
    [],
    source,
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
  const itemsToOmit = ['A', 'B', 'C']
  const collection = ['A', 'B', 'C', 'D', 'E', 'F']

  expect(without(itemsToOmit, collection)).toEqual(['D', 'E', 'F'])
  expect(without(itemsToOmit)(collection)).toEqual(['D', 'E', 'F'])
})

test('with list of objects', () => {
  const itemsToOmit = [{ a: 1 }, { c: 3 }]
  const collection = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]
  const expected = [{ b: 2 }, { d: 4 }]

  expect(without(itemsToOmit, collection)).toEqual(expected)
  expect(withoutRamda(itemsToOmit, collection)).toEqual(expected)
})

test('ramda accepts string as target input while rambda throws', () => {
  expect(withoutRamda('0:1', ['0', '0:1'])).toEqual(['0:1'])
  expect(() => without('0:1', ['0', '0:1'])).toThrowError(
    'Cannot read property \'indexOf\' of 0:1',
  )
  expect(without(['0:1'], ['0', '0:1'])).toEqual(['0'])
})

test('ramda test', () => {
  expect(without([1, 2])([1, 2, 1, 3, 4])).toEqual([3, 4])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { without } from 'rambda'

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
	return (right) => {
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
	return y => take(x.length > y.length ? y.length : x.length, x).map((xInstance, i) =>
    fn(xInstance, y[i]),
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { zipWith } from './zipWith.js'
let add = (x,y) => x + y
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
    const result = zipWith(
      (x, y) => {
        x // $ExpectType number
        y // $ExpectType number
        return `${x}-${y}`
      },
      list1,
		)(
      list2,
    )

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
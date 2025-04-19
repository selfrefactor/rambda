# Rambda

`Rambda` is TypeScript-focused utility library similar to `Remeda`, `Ramda` and `Radashi`. 

Initially it started as faster alternative to functional programming library `Ramda`, but in order to address many TypeScript issues, now `Rambda` takes a separate path. - [Documentation](https://selfrefactor.github.io/rambda/#/)

![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/selfrefactor/rambda/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/selfrefactor/rambda.svg)](https://github.com/selfrefactor/rambda/graphs/contributors)

## ❯ Example use

```javascript
import { pipe, map, filter } from 'rambda'

const result = pipe(
	[1, 2, 3, 4],
  filter(x => x > 2),
  map(x => x * 2),
)
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ❯ Rambda's features

## ❯ Goals

### Typescript focus

Mixing `Functional Programming` and `TypeScript` is not easy.

One way to solve this is to focus what can be actually achieved and refrain from what is not possible.

### `R.pipe` as the main way to use Rambda

- All methods are meant to be used as part of `R.pipe` chain

- This is the main purpose of functional programming, i.e. to pass data through a chain of functions.

- Having `R.pipe(input, ...fns)` helps TypeScript to infer the types of the input and the output.

Here is one example why `R.pipe` is better than `Ramda.pipe`:

```ts
const list = [1, 2, 3];

it('within pipe', () => {
	const result = pipe(
		list,
		filter((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
	);
	result; // $ExpectType number[]
});
it('within Ramda.pipe requires explicit types', () => {
	Ramda.pipe(
		(x) => x,
		filter<number>((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
		filter((x: number) => {
			x; // $ExpectType number
			return x > 1;
		}),
	)(list);
});
```

### Keep only the most useful methods

The idea is to give `TypeScript` users only the most useful methods and let them implement the rest. No magic logic methods that are hard to remember. You shouldn't need to read the documentation to understand what a method does. Its name and signature should be enough.

- Methods that are simply to remember only by its name. Complex logic shouldn't be part of utility library, but part of your codebase.

- Keep only methods which are both useful and which behaviour is obvious from its name. For example, `R.innerJoin` is kept, but `R.identical`, `R.move` is removed. Methods such as `R.toLower`, `R.length` provide little value. Such method are omitted from Rambda on purpose.

- Some generic methods such as `curry` and `assoc` is not easy to be expressed in TypeScript. For this reason `Rambda` omits such methods.

- No `R.cond` or `R.ifElse` as they make the chain less readable.

- No `R.length` as it adds very little value.

- No `R.difference` as user must remember the order of the inputs, i.e. which is compared to and which is compared against.

### One way to use each method

Because of the focus on `R.pipe`, there is only one way to use each method. This helps with testing and also with TypeScript definitions.

- All methods that 2 inputs, will have to be called with `R.methodName(input1)(input2)`
- All methods that 3 inputs, will have to be called with `R.methodName(input1, input2)(input3)`

### Deno support 

```
import * as R from "https://deno.land/x/rambda/mod.ts";

R.filter(x => x > 1)([1, 2, 3])
```

### Dot notation for `R.path`

Standard usage of `R.path` is `R.path(['a', 'b'])({a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b')({a: {b: 1} })
```

Please note that since path input is turned into array, i.e. if you want `R.path(['a','1', 'b'])({a: {'1': {b: 2}}})` to return `2`, you will have to pass array path, not string path. If you pass `a.1.b`, it will turn path input to `['a', 1, 'b']`.

### Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

### Fast performance compared to Ramda

Since `Rambda` methods doesn't use so many internals, it is faster than `Ramda`.
Prior to version `10`, benchmark summary was included, but now the main selling point is the TypeScript focus, not performance so this is no longer included.

### Differences between Rambda and Ramda

Up until version `9.4.2`, the aim of Rambda was to match as much as possible the Ramda API.

Documentation site of `Rambda` version `9.4.2` is available [here](https://selfrefactor.github.io/rambda-v9/).

From version `10.0.0` onwards, Rambda will start to diverge from Ramda in order to address some of the issues that Ramda has.

Currently, `Rambda` includes 32 methods that differ from `Ramda` and shares 83 methods with it.

<details>
<summary>
	Ramda issues
</summary>

-- Typescript support - this is the main reason for the divergence. Most of design decisions in Rambda are made with Typescript in mind.

-- Methods that imply side-effect, which is not FP oriented, e.g. `R.forEach`.

-- Naming of methods that doesn't match developer's expectation, such as `R.chain`, which should be called `flatMap`.

-- Naming of methods is sometimes too generic to be remembered such as `R.update`, `R.modify`, `R.where`.

-- Methods that are already present in standard JavaScript, such as `R.toLower`, `R.length`.

-- `R.compose` doesn't have the best possible TypeScript support.
</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-features)

## API

### addProp

```typescript

addProp<T extends object, P extends PropertyKey, V extends unknown>(
	prop: P,
	value: V
): (obj: T) => MergeTypes<T & Record<P, V>>
```

It adds new key-value pair to the object.

```javascript
const result = R.pipe(
	{ a: 1, b: 'foo' }, 
	R.addProp('c', 3)
)
// => { a: 1, b: 'foo', c: 3 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%7B%20a%3A%201%2C%20b%3A%20'foo'%20%7D%2C%20%0A%09R.addProp('c'%2C%203)%0A)%0A%2F%2F%20%3D%3E%20%7B%20a%3A%201%2C%20b%3A%20'foo'%2C%20c%3A%203%20%7D">Try this <strong>R.addProp</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
addProp<T extends object, P extends PropertyKey, V extends unknown>(
	prop: P,
	value: V
): (obj: T) => MergeTypes<T & Record<P, V>>;
```

</details>

<details>

<summary><strong>R.addProp</strong> source</summary>

```javascript
export function addProp(key, value) {
  return obj => ({ ...obj, [key]: value })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { addProp } from "./addProp.js"

test('happy', () => {
	const result = addProp('a', 1)({ b: 2 })
	const expected = { a: 1, b: 2 }

	expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { addProp, pipe } from 'rambda'

it('R.addProp', () => {
	const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
	result.a // $ExpectType number
	result.b // $ExpectType string
	result.c // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#addProp)

### addPropToObjects

```typescript

addPropToObjects<
  T extends object,
  K extends string,
  R
>(
	property: K,
  fn: (input: T) => R
): (list: T[]) => MergeTypes<T & { [P in K]: R }>[]
```

It receives list of objects and add new property to each item. 

The value is based on result of `fn` function, which receives the current object as argument.

```javascript
const result = R.pipe(
	[
		{a: 1, b: 2},
		{a: 3, b: 4},
	],
	R.addPropToObjects(
		'c',
		(x) => String(x.a + x.b),
	)
)
// => [{a: 1, b: 2, c: '3'}, {a: 3, b: 4, c: '7'}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%5B%0A%09%09%7Ba%3A%201%2C%20b%3A%202%7D%2C%0A%09%09%7Ba%3A%203%2C%20b%3A%204%7D%2C%0A%09%5D%2C%0A%09R.addPropToObjects(%0A%09%09'c'%2C%0A%09%09(x)%20%3D%3E%20String(x.a%20%2B%20x.b)%2C%0A%09)%0A)%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%20'3'%7D%2C%20%7Ba%3A%203%2C%20b%3A%204%2C%20c%3A%20'7'%7D%5D">Try this <strong>R.addPropToObjects</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
addPropToObjects<
  T extends object,
  K extends string,
  R
>(
	property: K,
  fn: (input: T) => R
): (list: T[]) => MergeTypes<T & { [P in K]: R }>[];
```

</details>

<details>

<summary><strong>R.addPropToObjects</strong> source</summary>

```javascript
import { mapFn } from './map.js'

export function addPropToObjects (
	property, 
	fn
){
	return listOfObjects => mapFn(
		(obj) => ({
			...(obj),
			[property]: fn(obj)
		}), 
		listOfObjects
	)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pipe } from "./pipe.js"
import { addPropToObjects } from "./addPropToObjects.js"

test('R.addPropToObjects', () => {
		let result = pipe(
			[
				{a: 1, b: 2},
				{a: 3, b: 4},
			],
			addPropToObjects(
				'c',
				(x) => String(x.a + x.b),
			)
		)
		expect(result).toEqual([
			{ a: 1, b: 2, c: '3' },
			{ a: 3, b: 4, c: '7' },
		])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { addPropToObjects, pipe } from 'rambda'

it('R.addPropToObjects', () => {
		let result = pipe(
			[
				{a: 1, b: 2},
				{a: 3, b: 4},
			],
			addPropToObjects(
				'c',
				(x) => String(x.a + x.b),
			)
		)
		result // $ExpectType { a: number; b: number; c: string; }[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#addPropToObjects)

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
import { allPass } from './allPass.js'
import { filter } from './filter.js'
import { includes } from './includes.js'
import { pipe } from './pipe.js'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]
test('happy', () => {
  const result = pipe(list, filter(allPass([includes(2), includes(3)])))
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = pipe(list, filter(allPass([includes(12), includes(31)])))
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
R.any(fn)(list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0Aconst%20result%20%3D%20R.any(fn)(list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.any</strong> example in Rambda REPL</a>

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
import { any, pipe } from 'rambda'

it('R.any', () => {
  const result = pipe(
    [1, 2, 3],
    any(x => {
      x // $ExpectType number
      return x > 2
    }),
  )
  result // $ExpectType boolean
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
...
...
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

test('when returns false', () => {
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
  return list => {
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
  expect(append('tests')(['write', 'more'])).toEqual(['write', 'more', 'tests'])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { append, pipe, prepend } from 'rambda'

const listOfNumbers = [1, 2, 3]

describe('R.append/R.prepend', () => {
  it('happy', () => {
    const result = pipe(listOfNumbers, append(4), prepend(0))
    result // $ExpectType number[]
  })
  it('with object', () => {
    const result = pipe([{ a: 1 }], append({ a: 10 }), prepend({ a: 20 }))
    result // $ExpectType { a: number; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### ascend

```typescript

ascend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering
```

Helper function to be used with `R.sort` to sort list in ascending order.

```javascript
const result = R.pipe(
	[{a: 1}, {a: 2}, {a: 0}],
	R.sort(R.ascend(R.prop('a')))
)
// => [{a: 0}, {a: 1}, {a: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A%200%7D%5D%2C%0A%09R.sort(R.ascend(R.prop('a')))%0A)%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A%200%7D%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try this <strong>R.ascend</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
ascend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering;
```

</details>

<details>

<summary><strong>R.ascend</strong> source</summary>

```javascript
export function createCompareFunction(a, b, winner, loser) {
  if (a === b) {
    return 0
  }

  return a < b ? winner : loser
}

export function ascend(getFunction) {
	return (a, b) => {
  const aValue = getFunction(a)
  const bValue = getFunction(b)

  return createCompareFunction(aValue, bValue, -1, 1)
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'

test('ascend', () => {
  const result = sort(
    ascend(x => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:1}, {a:2}, {a:3}])
})

test('descend', () => {
  const result = sort(
    descend(x => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:3}, {a:2}, {a:1}])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, ascend, sort } from 'rambda'

it('R.ascend', () => {
	const result = pipe(
		[{a:1}, {a:2}],
		sort(ascend(x => x.a))
	)
	result // $ExpectType { a: number; }[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ascend)

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

### compact

```typescript

compact<T>(list: T[]): Array<StrictNonNullable<T>>
```

It removes `null` and `undefined` members from list or object input.

```javascript
const result = R.pipe(
	{
		a: [ undefined, '', 'a', 'b', 'c'],
		b: [1,2, null, 0, undefined, 3],
		c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
	},
	x => ({
		a: R.compact(x.a),
		b: R.compact(x.b),
		c: R.compact(x.c)
	})
)
// => { a: ['a', 'b', 'c'], b: [1, 2, 3], c: { a: 1, b: 2, c: 0, f: false } }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%7B%0A%09%09a%3A%20%5B%20undefined%2C%20''%2C%20'a'%2C%20'b'%2C%20'c'%5D%2C%0A%09%09b%3A%20%5B1%2C2%2C%20null%2C%200%2C%20undefined%2C%203%5D%2C%0A%09%09c%3A%20%7B%20a%3A%201%2C%20b%3A%202%2C%20c%3A%200%2C%20d%3A%20undefined%2C%20e%3A%20null%2C%20f%3A%20false%20%7D%2C%0A%09%7D%2C%0A%09x%20%3D%3E%20(%7B%0A%09%09a%3A%20R.compact(x.a)%2C%0A%09%09b%3A%20R.compact(x.b)%2C%0A%09%09c%3A%20R.compact(x.c)%0A%09%7D)%0A)%0A%2F%2F%20%3D%3E%20%7B%20a%3A%20%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20b%3A%20%5B1%2C%202%2C%203%5D%2C%20c%3A%20%7B%20a%3A%201%2C%20b%3A%202%2C%20c%3A%200%2C%20f%3A%20false%20%7D%20%7D">Try this <strong>R.compact</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
compact<T>(list: T[]): Array<StrictNonNullable<T>>;
compact<T extends object>(record: T): {
  [K in keyof T as Exclude<T[K], null | undefined> extends never
    ? never
    : K
  ]: Exclude<T[K], null | undefined>
};
```

</details>

<details>

<summary><strong>R.compact</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { reject } from './reject.js'
import { rejectObject } from './rejectObject.js'

const isNullOrUndefined = x => x === null || x === undefined

export function compact(input){
	if(isArray(input)){
		return reject(isNullOrUndefined)(input)
	}
	return rejectObject(isNullOrUndefined)(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { compact } from './compact.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const result = pipe(
		{
			a: [ undefined, 'a', 'b', 'c'],
			b: [1,2, null, 0, undefined, 3],
			c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
		},
		x => ({
			a: compact(x.a),
			b: compact(x.b),
			c: compact(x.c)
		})
	)
	expect(result.a).toEqual(['a', 'b', 'c'])
	expect(result.b).toEqual([1,2,0,3])
	expect(result.c).toEqual({ a: 1, b: 2,c:0, f: false })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { compact, pipe } from 'rambda'

it('R.compact', () => {
		let result = pipe(
			{
				a: [ undefined, '', 'a', 'b', 'c', null ],
				b: [1,2, null, 0, undefined, 3],
				c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
			},
			x => ({
				a: compact(x.a),
				b: compact(x.b),
				c: compact(x.c)
			})
		)

		result.a // $ExpectType string[]
		result.b // $ExpectType number[]
		result.c // $ExpectType { a: number; b: number; c: number; f: boolean; }
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compact)

### complement

```typescript

complement<T extends any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean
```

It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

```javascript
const fn = x => x > 5
const inverted = complement(fn)

const result = [
  fn(7),
  inverted(7)
] => [ true, false ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20%3E%205%0Aconst%20inverted%20%3D%20complement(fn)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(7)%2C%0A%20%20inverted(7)%0A%5D%20%3D%3E%20%5B%20true%2C%20false%20%5D">Try this <strong>R.complement</strong> example in Rambda REPL</a>

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
import { complement } from 'rambda'

describe('R.complement', () => {
  it('happy', () => {
    const fn = complement((x: number) => x > 10)
    const result = fn(1)
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
export function concat(x) {
  return y => (typeof x === 'string' ? `${x}${y}` : [...x, ...y])
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { concat, pipe } from 'rambda'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

it('R.concat', () => {
  const result = pipe(list1, concat(list2))
  result // $ExpectType number[]
  const resultString = pipe('foo', concat('list2'))
  resultString // $ExpectType string
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
const result = R.count(x => x.a !== undefined)(list)
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%201%2C%20%7Ba%3A2%7D%5D%0Aconst%20result%20%3D%20R.count(x%20%3D%3E%20x.a%20!%3D%3D%20undefined)(list)%0A%2F%2F%20%3D%3E%202">Try this <strong>R.count</strong> example in Rambda REPL</a>

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

export function count(predicate) {
  return list => {
    if (!isArray(list)) {
      return 0
    }

    return list.filter(x => predicate(x)).length
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { count } from './count.js'

const predicate = x => x.a !== undefined

test('with empty list', () => {
  expect(count(predicate)([])).toBe(0)
})

test('happy', () => {
  const list = [1, 2, { a: 1 }, 3, { a: 1 }]

  expect(count(predicate)(list)).toBe(2)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { count, pipe } from 'rambda'

const list = [1, 2, 3]
const predicate = (x: number) => x > 1

it('R.count', () => {
  const result = pipe(list, count(predicate))
  result // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#count)

### countBy

```typescript

countBy<T>(fn: (x: T) => string | number): (list: T[]) => { [index: string]: number }
```

It counts elements in a list after each instance of the input list is passed through `transformFn` function.

```javascript
const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

const result = countBy(x => x.toLowerCase())( list)
const expected = { a: 2, b: 2, c: 2 }
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'A'%2C%20'b'%2C%20'B'%2C%20'c'%2C%20'C'%20%5D%0A%0Aconst%20result%20%3D%20countBy(x%20%3D%3E%20x.toLowerCase())(%20list)%0Aconst%20expected%20%3D%20%7B%20a%3A%202%2C%20b%3A%202%2C%20c%3A%202%20%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.countBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
countBy<T>(fn: (x: T) => string | number): (list: T[]) => { [index: string]: number };
```

</details>

<details>

<summary><strong>R.countBy</strong> source</summary>

```javascript
export function countBy(fn) {
  return list => {
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
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { countBy } from './countBy.js'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

test('happy', () => {
  const result = countBy(x => x.toLowerCase())(list)
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
import { countBy, pipe } from 'rambda'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

it('R.countBy', () => {
  const result = pipe(
    list,
    countBy(x => x.toLowerCase()),
  )
  result.a // $ExpectType number
  result.foo // $ExpectType number
  result // $ExpectType { [index: string]: number; }
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#countBy)

### createObjectFromKeys

```typescript

createObjectFromKeys<const K extends readonly PropertyKey[], V>(
	fn: (key: K[number]) => V
): (keys: K) => { [P in K[number]]: V }
```

```javascript
const result = R.createObjectFromKeys(
	(x, index) => `${x}-${index}`
)(['a', 'b', 'c'])
// => {a: 'a-0', b: 'b-1', c: 'c-2'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.createObjectFromKeys(%0A%09(x%2C%20index)%20%3D%3E%20%60%24%7Bx%7D-%24%7Bindex%7D%60%0A)(%5B'a'%2C%20'b'%2C%20'c'%5D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-0'%2C%20b%3A%20'b-1'%2C%20c%3A%20'c-2'%7D">Try this <strong>R.createObjectFromKeys</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
createObjectFromKeys<const K extends readonly PropertyKey[], V>(
	fn: (key: K[number]) => V
): (keys: K) => { [P in K[number]]: V };
createObjectFromKeys<const K extends readonly PropertyKey[], V>(
	fn: (key: K[number], index: number) => V
): (keys: K) => { [P in K[number]]: V };
```

</details>

<details>

<summary><strong>R.createObjectFromKeys</strong> source</summary>

```javascript
export function createObjectFromKeys(keys) {
	return fn => {
		const result = {}
		keys.forEach((key, index) => {
			result[key] = fn(key, index)
		})

		return result
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { createObjectFromKeys } from './createObjectFromKeys.js'

test('happy', () => {
	const result = createObjectFromKeys(['a', 'b'])((key, index) => key.toUpperCase() + index)
	const expected = { a: 'A0', b: 'B1' }

	expect(result).toEqual(expected)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#createObjectFromKeys)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T): (input: unknown) => T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

> :boom: Typescript Note: Pass explicit type annotation when used with **R.pipe/R.compose** for better type inference

```javascript
R.defaultTo('foo')('bar') // => 'bar'
R.defaultTo('foo'))(undefined) // => 'foo'

// Important - emtpy string is not falsy value
R.defaultTo('foo')('') // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.defaultTo('foo')('bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'))(undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20Important%20-%20emtpy%20string%20is%20not%20falsy%20value%0Aconst%20result%20%3D%20R.defaultTo('foo')('')%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.defaultTo</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T): (input: unknown) => T;
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function isFalsy(input) {
  return input === undefined || input === null || Number.isNaN(input) === true
}

export function defaultTo(defaultArgument) {
  return input => isFalsy(input) ? defaultArgument : input
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
  expect(defaultTo('foo')('')).toBe('')
})

test('with false', () => {
  expect(defaultTo('foo')(false)).toBeFalsy()
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo')('bar')).toBe('bar')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { defaultTo, pipe } from 'rambda'

describe('R.defaultTo', () => {
  it('happy', () => {
    const result = pipe('bar' as unknown, defaultTo('foo'))

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

### descend

```typescript

descend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering
```

Helper function to be used with `R.sort` to sort list in descending order.

```javascript
const result = R.pipe(
	[{a: 1}, {a: 2}, {a: 0}],
	R.sort(R.descend(R.prop('a')))
)
// => [{a: 2}, {a: 1}, {a: 0}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A%200%7D%5D%2C%0A%09R.sort(R.descend(R.prop('a')))%0A)%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A%202%7D%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%200%7D%5D">Try this <strong>R.descend</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
descend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering;
```

</details>

<details>

<summary><strong>R.descend</strong> source</summary>

```javascript
import { createCompareFunction } from './ascend.js'

export function descend(getFunction) {
  return (a, b) => {
    const aValue = getFunction(a)
    const bValue = getFunction(b)

    return createCompareFunction(aValue, bValue, 1, -1)
  }
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#descend)

### drop

```typescript

drop<T>(howMany: number): (list: T[]) => T[]
```

It returns `howMany` items dropped from beginning of list.

```javascript
R.drop(2)(['foo', 'bar', 'baz']) // => ['baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.drop(2)(%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D">Try this <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
drop<T>(howMany: number): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.drop</strong> source</summary>

```javascript
export function drop(howManyToDrop, ) {
  return list => list.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { drop } from './drop.js'

test('with array', () => {
  expect(drop(2)(['foo', 'bar', 'baz'])).toEqual(['baz'])
  expect(drop(3)(['foo', 'bar', 'baz'])).toEqual([])
  expect(drop(4)(['foo', 'bar', 'baz'])).toEqual([])
})

test('with non-positive count', () => {
  expect(drop(0)([1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { drop, pipe } from 'rambda'

it('R.drop', () => {
  const result = pipe([1, 2, 3, 4], drop(2))
  result // $ExpectType number[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number): (list: T[]) => T[]
```

It returns `howMany` items dropped from the end of list.

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropLast<T>(howMany: number): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.dropLast</strong> source</summary>

```javascript
export function dropLast(numberItems) {
  return list => (numberItems > 0 ? list.slice(0, -numberItems) : list.slice())
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { dropLast } from './dropLast.js'

test('with array', () => {
  expect(dropLast(2)(['foo', 'bar', 'baz'])).toEqual(['foo'])
  expect(dropLast(3)(['foo', 'bar', 'baz'])).toEqual([])
  expect(dropLast(4)(['foo', 'bar', 'baz'])).toEqual([])
})

test('with non-positive count', () => {
  expect(dropLast(0)([1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLast)

### dropLastWhile

```typescript

dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[]
```

```javascript
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate)(list);
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%3D%203%0A%0Aconst%20result%20%3D%20dropLastWhile(predicate)(list)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.dropLastWhile</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
dropLastWhile<T>(predicate: (x: T) => boolean): (list: T[]) => T[];
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
      if (!predicate(item, counter)) {
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
  const result = dropLastWhile(x => x >= 3)(list)
  expect(result).toEqual([1, 2])
})

test('with empty list', () => {
  expect(dropLastWhile(() => true)([])).toEqual([])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeatsBy

```typescript

dropRepeatsBy<T, U>(fn: (x: T) => U): (list: T[]) => T[]
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
dropRepeatsBy<T, U>(fn: (x: T) => U): (list: T[]) => T[];
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

dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[]
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
dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
dropWhile<T>(predicate: (x: T) => boolean): (list: T[]) => T[];
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
      if (!predicate(item, counter)) {
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
  const predicate = (x, i) => {
    expect(typeof i).toBe('number')
    return x < 3
  }
  const result = dropWhile(predicate)(list)
  expect(result).toEqual([3, 4])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
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
import { equalsFn } from './equals.js'

export function eqBy(fn, a) {
  return b => equalsFn(fn(a), fn(b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { eqBy } from './eqBy.js'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqBy(Math.abs, 5)(5)).toBe(true)
  expect(eqBy(Math.abs, 5)(-5)).toBe(true)
  expect(eqBy(Math.abs, -5)(5)).toBe(true)
  expect(eqBy(Math.abs, -5)(-5)).toBe(true)
  expect(eqBy(Math.abs, 42)(99)).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqBy(Math.abs, Number.NaN)(Number.NaN)).toBe(true)
  expect(eqBy(Math.abs, [42])([42])).toBe(true)
  expect(eqBy(x => x, { a: 1 })({ a: 1 })).toBe(true)
  expect(eqBy(x => x, { a: 1 })({ a: 2 })).toBe(false)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqBy)

### eqProps

```typescript

eqProps<T, K extends keyof T>(prop: K, obj1: T): (obj2: T) => boolean
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
eqProps<T, K extends keyof T>(prop: K, obj1: T): (obj2: T) => boolean;
```

</details>

<details>

<summary><strong>R.eqProps</strong> source</summary>

```javascript
import { equalsFn } from './equals.js'

export function eqProps(property, objA) {
  return objB => equalsFn( objA[property], objB[property] )
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
  const result = eqProps('a', obj1)(obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1)(obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c', obj1)(obj2)
  expect(result).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { eqProps, pipe } from 'rambda'

const obj1 = { a: { b: 1 }, c: 2 }
const obj2 = { a: { b: 1 }, c: 3 }

it('R.eqProps', () => {
  const result = pipe(obj1, eqProps('a', obj2))

  result // $ExpectType boolean
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
    if (equalsFn(list[index], valueToFind)) {
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
    if (equalsFn(list[index], valueToFind)) {
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

export function equalsFn(a, b) {
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
          !equalsFn(aCloneInstance, bClone[aCloneIndex])
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

        if (aValue !== bValue && !equalsFn(aValue, bValue)) {
          loopObjectFlag = false
        }
      }
    })

    return loopObjectFlag
  }

  return false
}
export function equals(a) {
  return b => equalsFn(a, b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { equalsFn } from './equals.js'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equalsFn(foo, foo)
  const expectFalseFirst = equalsFn(foo, bar)
  const expectFalseSecond = equalsFn(foo, baz)

  expect(expectTrue).toBeTruthy()
  expect(expectFalseFirst).toBeFalsy()
  expect(expectFalseSecond).toBeFalsy()
})

test('with array of objects', () => {
  const list1 = [{ a: 1 }, [{ b: 2 }]]
  const list2 = [{ a: 1 }, [{ b: 2 }]]
  const list3 = [{ a: 1 }, [{ b: 3 }]]

  expect(equalsFn(list1, list2)).toBeTruthy()
  expect(equalsFn(list1, list3)).toBeFalsy()
})

test('with regex', () => {
  expect(equalsFn(/s/, /s/)).toBeTruthy()
  expect(equalsFn(/s/, /d/)).toBeFalsy()
  expect(equalsFn(/a/gi, /a/gi)).toBeTruthy()
  expect(equalsFn(/a/gim, /a/gim)).toBeTruthy()
  expect(equalsFn(/a/gi, /a/i)).toBeFalsy()
})

test('not a number', () => {
  expect(equalsFn([Number.NaN], [Number.NaN])).toBeTruthy()
})

test('new number', () => {
  expect(equalsFn(new Number(0), new Number(0))).toBeTruthy()
  expect(equalsFn(new Number(0), new Number(1))).toBeFalsy()
  expect(equalsFn(new Number(1), new Number(0))).toBeFalsy()
})

test('new string', () => {
  expect(equalsFn(new String(''), new String(''))).toBeTruthy()
  expect(equalsFn(new String(''), new String('x'))).toBeFalsy()
  expect(equalsFn(new String('x'), new String(''))).toBeFalsy()
  expect(equalsFn(new String('foo'), new String('foo'))).toBeTruthy()
  expect(equalsFn(new String('foo'), new String('bar'))).toBeFalsy()
  expect(equalsFn(new String('bar'), new String('foo'))).toBeFalsy()
})

test('new Boolean', () => {
  expect(equalsFn(new Boolean(true), new Boolean(true))).toBeTruthy()
  expect(equalsFn(new Boolean(false), new Boolean(false))).toBeTruthy()
  expect(equalsFn(new Boolean(true), new Boolean(false))).toBeFalsy()
  expect(equalsFn(new Boolean(false), new Boolean(true))).toBeFalsy()
})

test('new Error', () => {
  expect(equalsFn(new Error('XXX'), {})).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new TypeError('XXX'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('YYY'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('XXX'))).toBeTruthy()
  expect(equalsFn(new Error('XXX'), new TypeError('YYY'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('XXX'))).toBeTruthy()
})

test('with dates', () => {
  expect(equalsFn(new Date(0), new Date(0))).toBeTruthy()
  expect(equalsFn(new Date(1), new Date(1))).toBeTruthy()
  expect(equalsFn(new Date(0), new Date(1))).toBeFalsy()
  expect(equalsFn(new Date(1), new Date(0))).toBeFalsy()
  expect(equalsFn(new Date(0), {})).toBeFalsy()
  expect(equalsFn({}, new Date(0))).toBeFalsy()
})

test('ramda spec', () => {
  expect(equalsFn({}, {})).toBeTruthy()

  expect(
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
  expect(equalsFn([true, false], [true, false])).toBeTruthy()
  expect(equalsFn([true, false], [true, true])).toBeFalsy()
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
  expect(equalsFn(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a: { b: 1 } }
  const objSecond = { a: { b: 2 } }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equalsFn(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equalsFn(1, undefined)).toBeFalsy()

  expect(equalsFn(undefined, undefined)).toBeTruthy()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{ a: 1 }, { a: 2 }])
  const toCompareSame = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  const testSet = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  expect(equalsFn(toCompareSame, testSet)).toBeTruthy()
  expect(equalsFn(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equalsFn(new Set(['3', '2', '1']), testSet)).toBeTruthy()
  expect(equalsFn(new Set(['3', '2', '0']), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equalsFn([1, 2, 3], [1, 2, 3])).toBeTruthy()
  expect(equalsFn([1, 2, 3], [1, 2])).toBeFalsy()
  expect(equalsFn({}, {})).toBeTruthy()
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

evolve<T>(rules: {
	[K in keyof T]?: (x: T[K]) => T[K]
}): (obj: T) => T
```

It takes object of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.
It doesn't support nested rules, i.e rules are only one level deep.

```javascript
const input = {
	foo: 2,
	baz: 'baz',
}
const result = R.pipe(
	input, 
	evolve({
		foo: x => x + 1,
	})
)
// => result is { foo: 3, baz: 'baz' }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%09foo%3A%202%2C%0A%09baz%3A%20'baz'%2C%0A%7D%0Aconst%20result%20%3D%20R.pipe(%0A%09input%2C%20%0A%09evolve(%7B%0A%09%09foo%3A%20x%20%3D%3E%20x%20%2B%201%2C%0A%09%7D)%0A)%0A%2F%2F%20%3D%3E%20result%20is%20%7B%20foo%3A%203%2C%20baz%3A%20'baz'%20%7D">Try this <strong>R.evolve</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
evolve<T>(rules: {
	[K in keyof T]?: (x: T[K]) => T[K]
}): (obj: T) => T;
```

</details>

<details>

<summary><strong>R.evolve</strong> source</summary>

```javascript
import { mapObject } from './mapObject.js'
import { type } from './type.js'

export function evolve(rules) {
  return mapObject((x, prop) => type(rules[prop]) === 'Function' ? rules[prop](x): x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { evolve } from './evolve.js'

test('happy', () => {
  const rules = {
    foo: x => x + 1,
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
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import {  evolve, pipe } from 'rambda'

it('R.evolve', () => {
  const input = {
		baz: 1,
    foo: 2,
    nested: {
      a: 1,
      bar: 3,
    },
  }
  const result = pipe(input, 
		evolve({
			foo: x => x + 1,
		})
	)
  result.foo // $ExpectType number
  result.baz // $ExpectType number
  result.nested.a // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#evolve)

### excludes

```typescript

excludes<T extends string>(valueToFind: T): (input: string) => boolean
```

Opposite of `R.includes`

`R.equals` is used to determine equality.

```javascript
const result = [
  R.excludes('ar')('foo'),
  R.excludes({a: 2})([{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.excludes('ar')('foo')%2C%0A%20%20R.excludes(%7Ba%3A%202%7D)(%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try this <strong>R.excludes</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
excludes<T extends string>(valueToFind: T): (input: string) => boolean;
excludes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.excludes</strong> source</summary>

```javascript
import { includes } from './includes.js'

export function excludes(valueToFind) {
  return iterable => !includes(valueToFind)(iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { excludes } from './excludes.js'

test('excludes with string', () => {
  const str = 'more is less'

  expect(excludes('less')(str)).toBeFalsy()
  expect(excludes('never')(str)).toBeTruthy()
})

test('excludes with array', () => {
  const arr = [1, 2, 3]

  expect(excludes(2)(arr)).toBeFalsy()
  expect(excludes(4)(arr)).toBeTruthy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { excludes, pipe } from 'rambda'

describe('R.excludes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe(list, excludes({ a: { b: '1' } }))
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = pipe('foo', excludes('bar'))
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#excludes)

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
): (list: readonly T[]) => StrictNonNullable<T>[];
filter<T>(
	predicate: BooleanConstructor,
): (list: T[]) => StrictNonNullable<T>[];
filter<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];
...
...
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
export function filter(predicate) {
  return list => {
    if (!list) {
      throw new Error('Incorrect iterable input')
    }
    let index = 0
    const len = list.length
    const willReturn = []

    while (index < len) {
      if (predicate(list[index], index)) {
        willReturn.push(list[index])
      }

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
import { filter } from './filter.js'

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven)([1, 2, 3, 4])).toEqual([2, 4])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { filter, mergeTypes, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
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
		type T = Foo | Bar
    const testList: T[]= [{ a: 1 }, { a: 2 }, { a: 3 }] 
    const filterBar = (x: T): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
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
		type T = Foo | Bar
    const testList: T[]= [{ a: 1 }, { a: 2 }, { a: 3 }] as const
    const filterBar = (x: T): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
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
    result.includes(1)
    // @ts-expect-error
    result.includes(4)
    // @ts-expect-error
    result.includes(undefined) 
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

<summary><strong>Tests</strong></summary>

```javascript
import { pipe } from './pipe.js'
import { filterObject } from './filterObject.js'

test('happy', () => {
	let testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
		testInput,
		filterObject((x, prop, obj) => {
			expect(prop).toBeOneOf(['a', 'b', 'c'])
			expect(obj).toBe(testInput)
			return x > 1
		})
	)
	expect(result).toEqual({ b: 2, c: 3 })
})
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

find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate)(list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(predicate)(list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.find</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.find</strong> source</summary>

```javascript
export function find(predicate) {
  return list => {
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
  expect(find(fn)(list)).toEqual({ a: 2 })
})

test('nothing is found', () => {
  const fn = propEq(4, 'a')
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true)([])).toBeUndefined()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { find, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.find', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, find(predicate))
    result // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#find)

### findIndex

```typescript

findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate)(list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(predicate)(list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findIndex</strong> source</summary>

```javascript
export function findIndex(predicate) {
  return list => {
    const len = list.length
    let index = -1

    while (++index < len) {
      if (predicate(list[index])) {
        return index
      }
    }

    return -1
  }
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
  expect(findIndex(propEq(2, 'a'))(list)).toBe(1)
  expect(findIndex(propEq(1, 'a'))(list)).toBe(0)
  expect(findIndex(propEq(4, 'a'))(list)).toBe(-1)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { findIndex, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.findIndex', () => {
  const result = pipe(
    list,
    findIndex(x => x > 2),
  )
  result // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findIndex)

### findLast

```typescript

findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined
```

It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate)(list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(predicate)(list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.findLast</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findLast</strong> source</summary>

```javascript
export function findLast(predicate) {
  return list => {
    let index = list.length

    while (--index >= 0) {
      if (predicate(list[index])) {
        return list[index]
      }
    }

    return undefined
  }
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLast)

### findLastIndex

```typescript

findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number
```

It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate)(list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(predicate)(list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findLastIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findLastIndex</strong> source</summary>

```javascript
export function findLastIndex(fn) {
  return list => {
    let index = list.length

    while (--index >= 0) {
      if (fn(list[index])) {
        return index
      }
    }

    return -1
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findLastIndex } from './findLastIndex.js'

test('happy', () => {
  const result = findLastIndex(x => x > 1)([1, 1, 1, 2, 3, 4, 1])
  expect(result).toBe(5)
  expect(findLastIndex(x => x === 0)([0, 1, 1, 2, 3, 4, 1])).toBe(0)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { findLastIndex, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.findLastIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, findLastIndex(predicate))
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLastIndex)

### findNth

```typescript

findNth<T>(predicate: (x: T) => boolean, nth: number): (list: T[]) => T | undefined
```

It returns the `nth` element of `list` that satisfy the `predicate` function.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}, {foo: 2}, {foo: 3}]

const result = R.findNth(predicate, 2)(list)
// => {foo: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%2C%20%7Bfoo%3A%202%7D%2C%20%7Bfoo%3A%203%7D%5D%0A%0Aconst%20result%20%3D%20R.findNth(predicate%2C%202)(list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%202%7D">Try this <strong>R.findNth</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
findNth<T>(predicate: (x: T) => boolean, nth: number): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findNth</strong> source</summary>

```javascript
export function findNth(predicate, nth) {
  return list => {
    let index = 0
    const len = list.length

    while (index < len) {
      const x = list[index]
      if (predicate(x)) {
				if (nth === 0) return x
				nth--
      }

      index++
    }
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { findNth } from './findNth.js'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]

test('happy', () => {
  const fn = x => x.a > 1
  expect(findNth(fn,1)(list)).toEqual({ a: 3 })
})

test('nothing is found', () => {
	const fn = x => x.a > 4
	expect(findNth(fn,1)(list)).toBeUndefined()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findNth)

### flatMap

```typescript

flatMap<T, U extends unknown>(transformFn: (x: T extends any[] ? T[number]: never) => U): (listOfLists: T[]) => U[]
```

It maps `fn` over `list` and then flatten the result by one-level.

```javascript
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = R.flatMap(duplicate)(list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20duplicate%20%3D%20n%20%3D%3E%20%5B%20n%2C%20n%20%5D%0Aconst%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0A%0Aconst%20result%20%3D%20R.flatMap(duplicate)(list)%0A%2F%2F%20%3D%3E%20%5B%201%2C%201%2C%202%2C%202%2C%203%2C%203%20%5D">Try this <strong>R.flatMap</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
flatMap<T, U extends unknown>(transformFn: (x: T extends any[] ? T[number]: never) => U): (listOfLists: T[]) => U[];
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

test('maps then flattens one level', () => {
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
import { flatMap, pipe } from 'rambda'

describe('R.flatMap', () => {
  it('happy', () => {
    const listOfLists: string[][] = [
      ['f', 'bar'],
      ['baz', 'b'],
    ]
    const result = pipe(
      listOfLists,
      x => x,
      flatMap(x => {
        x // $ExpectType string
        return Number(x) + 1
      }),
    )
    result // $ExpectType number[]
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
You must pass expected output type as a type argument.

```javascript
const result = R.flatten<number>([
  1, 
  2, 
  [3, 30, [300]], 
  [4]
])
// => [ 1, 2, 3, 30, 300, 4 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flatten%3Cnumber%3E(%5B%0A%20%201%2C%20%0A%20%202%2C%20%0A%20%20%5B3%2C%2030%2C%20%5B300%5D%5D%2C%20%0A%20%20%5B4%5D%0A%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%2C%2030%2C%20300%2C%204%20%5D">Try this <strong>R.flatten</strong> example in Rambda REPL</a>

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
import { flatten, pipe } from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = pipe([1, 2, [3, [4]]], flatten<number>)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatten)

### flattenObject

```typescript

flattenObject<T extends object>(obj: T): FlattenObject<T>
```

It transforms object to object where each value is represented with its path.

```javascript
const result = R.flattenObject(
	[1, 2, 3]
)
// => [3, 1, 2] or [2, 3, 1] or ...
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flattenObject(%0A%09%5B1%2C%202%2C%203%5D%0A)%0A%2F%2F%20%3D%3E%20%5B3%2C%201%2C%202%5D%20or%20%5B2%2C%203%2C%201%5D%20or%20...">Try this <strong>R.flattenObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
flattenObject<T extends object>(obj: T): FlattenObject<T>;
```

</details>

<details>

<summary><strong>R.flattenObject</strong> source</summary>

```javascript
import { type } from './type.js'

export function flattenObjectHelper(obj, accumulator = []){
  const willReturn = {}
  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      const [ flatResultValue, flatResultPath ] = flattenObjectHelper(obj[ key ],
        [ ...accumulator, key ])
      willReturn[ flatResultPath.join('.') ] = flatResultValue

      return
    } else if (accumulator.length > 0){
      const finalKey = [ ...accumulator, key ].join('.')
      willReturn[ finalKey ] = obj[ key ]

      return
    }
    willReturn[ key ] = obj[ key ]
  })
  if (accumulator.length > 0) return [ willReturn, accumulator ]

  return willReturn
}

export function transformFlatObject(obj){
  const willReturn = {}

  const transformFlatObjectFn = objLocal => {
    const willReturnLocal = {}
    Object.keys(objLocal).forEach(key => {
      const typeIs = type(objLocal[ key ])
      if (typeIs === 'Object'){
        transformFlatObjectFn(objLocal[ key ])

        return
      }
      willReturnLocal[ key ] = objLocal[ key ]
      willReturn[ key ] = objLocal[ key ]
    })

    return willReturnLocal
  }

  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      transformFlatObjectFn(obj[ key ], key)

      return
    }
    willReturn[ key ] = obj[ key ]
  })

  return willReturn
}

export function flattenObject(obj){
  const willReturn = {}

  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      const flatObject = flattenObjectHelper(obj[ key ])
      const transformed = transformFlatObject(flatObject)

      Object.keys(transformed).forEach(keyTransformed => {
        willReturn[ `${ key }.${ keyTransformed }` ] = transformed[ keyTransformed ]
      })
    } else {
      willReturn[ key ] = obj[ key ]
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {
  flattenObject,
  flattenObjectHelper,
  transformFlatObject,
} from './flattenObject.js'

test('happy', () => {
  const obj = {
    c : 3,
    d : {
      'd.e' : [ 5, 6, 7 ],
      'd.z' : 4,
      'd.f' : { 'd.f.h' : 6 },
    },
  }
  const result = transformFlatObject(obj)
  expect(result).toEqual({
    'c'     : 3,
    'd.e'   : [ 5, 6, 7 ],
    'd.z'   : 4,
    'd.f.h' : 6,
  })
})

test('happy', () => {
  const result = flattenObject({
    a : 1,
    b : {
      c : 3,
      d : {
        e : 5,
        z : 4,
        f : {
          h : 6,
          i : 7,
          j : {
            k : 8,
            l : 9,
          },
        },
      },
    },
  })
    const expected = {
      'a'         : 1,
      'b.c'       : 3,
      'b.d.e'     : 5,
      'b.d.z'     : 4,
      'b.d.f.h'   : 6,
      'b.d.f.i'   : 7,
      'b.d.f.j.k' : 8,
      'b.d.f.j.l' : 9,
    }
    expect(result).toEqual(expected)
})

test('flattenObjectHelper', () => {
  const result = flattenObjectHelper({
    a : 1,
    b : {
      c : 3,
      d : {
        e : 5,
        z : 4,
        f : { h : 6 },
      },
    },
  })
  const expected = {
    a : 1,
    b : {
      'b.c' : 3,
      'b.d' : {
        'b.d.e' : 5,
        'b.d.z' : 4,
        'b.d.f' : { 'b.d.f.h' : 6 },
      },
    },
  }
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { flattenObject, pipe } from 'rambda'

it('R.flattenObject', () => {
  const result = pipe({ a: { b: 1, c: 2 } }, flattenObject)
  result['a.b'] // $ExpectType number
  result['a.c'] // $ExpectType number
  // @ts-expect-error
  result['a.foo']
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flattenObject)

### groupBy

```typescript

groupBy<T, K extends string = string>(fn: (x: T) => K): (list: T[]) => Partial<Record<K, T[]>>
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
groupBy<T, K extends string = string>(fn: (x: T) => K): (list: T[]) => Partial<Record<K, T[]>>;
```

</details>

<details>

<summary><strong>R.groupBy</strong> source</summary>

```javascript
export function groupByFallback(groupFn, list) {
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

export function groupBy(groupFn) {
  return iterable => Object.groupBy ? Object.groupBy(iterable,groupFn) : groupByFallback(groupFn, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { groupBy } from './groupBy.js'

test('with list', () => {
  const inventory = [
		{ name: "asparagus", type: "vegetables", quantity: 9 },
		{ name: "bananas", type: "fruit", quantity: 5 },
		{ name: "goat", type: "meat", quantity: 23 },
		{ name: "cherries", type: "fruit", quantity: 12 },
		{ name: "fish", type: "meat", quantity: 22 },
	];
  const result = groupBy(
		({ quantity }) =>
			quantity < 6 ? "restock" : "sufficient"
	
	)(inventory)
	expect(result.restock).toEqual([
		{ name: "bananas", type: "fruit", quantity: 5 },
	]);
	expect(result.sufficient[0]).toEqual(
		{ name: "asparagus", type: "vegetables", quantity: 9 }
	);
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { groupBy, pipe } from 'rambda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'bar']

    const result = pipe(list, groupBy(groupByFn))
    result // $ExpectType Partial<Record<string, string[]>>
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

### includes

```typescript

includes<T extends string>(valueToFind: T): (input: string) => boolean
```

If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
const result = [
  R.includes('oo')('foo'),
  R.includes({a: 1})([{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.includes('oo')('foo')%2C%0A%20%20R.includes(%7Ba%3A%201%7D)(%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try this <strong>R.includes</strong> example in Rambda REPL</a>

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

export function includes(valueToFind) {
  return iterable => {
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
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { includes } from './includes.js'

test('with string as iterable', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTruthy()
  expect(includes('never')(str)).toBeFalsy()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTruthy()
  expect(includes(4)(arr)).toBeFalsy()
})

test('with list of objects as iterable', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

  expect(includes({ c: 3 })(arr)).toBeTruthy()
})

test('with NaN', () => {
  const result = includes(Number.NaN)([Number.NaN])
  expect(result).toBeTruthy()
})

test('with wrong input that does not throw', () => {
  const result = includes(1)(/foo/g)
  expect(result).toBeFalsy()
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { includes, pipe } from 'rambda'

describe('R.includes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe(list, includes({ a: { b: '1' } }))
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = pipe('foo', includes('bar'))
    result // $ExpectType boolean
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
import { indexOf } from './indexOf.js'

test('with NaN', () => {
  expect(indexOf(Number.NaN)([Number.NaN])).toBe(0)
})

test('will throw with bad input', () => {
  expect(() => indexOf([])(true)).toThrow()
})

test('without list of objects - no R.equals', () => {
  expect(indexOf(3)([1, 2, 3, 4])).toBe(2)
  expect(indexOf(10)([1, 2, 3, 4])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(indexOf({ c: 4 })(listOfObjects)).toBe(-1)
  expect(indexOf({ c: 3 })(listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(indexOf([])(listOfLists)).toBe(5)
  expect(indexOf([1])(listOfLists)).toBe(0)
  expect(indexOf([2, 3, 4])(listOfLists)).toBe(2)
  expect(indexOf([2, 3, 5])(listOfLists)).toBe(-1)
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
const f = (a, b) => innerJoin((r, id) => r.id === id, a)(b)

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
  const result = innerJoin(predicate, list1)(list2)
  expect(result).toEqual([4, 5])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#innerJoin)

### interpolate

```typescript

interpolate(inputWithTags: string): (templateArguments: object) => string
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
interpolate(inputWithTags: string): (templateArguments: object) => string;

// API_MARKER_END
// ===========================================
```

</details>

<details>

<summary><strong>R.interpolate</strong> source</summary>

```javascript
const getOccurrences = input => input.match(/{{\s*.+?\s*}}/g)
const getOccurrenceProp = occurrence => occurrence.replace(/{{\s*|\s*}}/g, '')

const replace = ({ inputHolder, prop, replacer }) => {
  const regexBase = `{{${prop}}}`
  const regex = new RegExp(regexBase, 'g')
  return inputHolder.replace(regex, replacer)
}

export function interpolate(input) {
  return templateInput => {
    const occurrences = getOccurrences(input)
    if (occurrences === null) {
      return input
    }
    let inputHolder = input

    for (const occurrence of occurrences) {
      const prop = getOccurrenceProp(occurrence)
      inputHolder = replace({
        inputHolder,
        prop,
        replacer: templateInput[prop],
      })
    }

    return inputHolder
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { interpolate } from './interpolate.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const result = pipe(
		{ name: 'John', age: 30 },
		interpolate('My name is {{name}} and I am {{age}} years old')
	)
	expect(result).toBe('My name is John and I am 30 years old')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { interpolate } from 'rambda'

const templateInput = 'foo {{x}} baz'
const templateArguments = { x: 'led zeppelin' }

it('R.interpolate', () => {
	const result = interpolate(templateInput)(templateArguments)

	result // $ExpectType string
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#interpolate)

### intersection

```typescript

intersection<T>(listA: T[]): (listB: T[]) => T[]
```

It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.

> :boom: There is slight difference between Rambda and Ramda implementation. Ramda.intersection(['a', 'b', 'c'], ['c', 'b']) result is "[ 'c', 'b' ]", but Rambda result is "[ 'b', 'c' ]".

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = R.intersection(listA)(listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20R.intersection(listA)(listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try this <strong>R.intersection</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
intersection<T>(listA: T[]): (listB: T[]) => T[];
```

</details>

<details>

<summary><strong>R.intersection</strong> source</summary>

```javascript
import { filter } from './filter.js'
import { includes } from './includes.js'

export function intersection(listA) {
  return listB => filter(x => includes(x)(listA))(listB)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersection } from './intersection.js'

test('intersection', () => {
  const list1 = [1, 2, 3, 4]
  const list2 = [3, 4, 5, 6]
  expect(intersection(list1)(list2)).toEqual([3, 4])
  expect(intersection([])([])).toEqual([])
})

test('intersection with objects', () => {
  const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  const list2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  expect(intersection(list1)(list2)).toEqual([{ id: 3 }, { id: 4 }])
})

test('order is the same as in Ramda', () => {
  const list = ['a', 'b', 'c', 'd']

  expect(intersection(list)(['b', 'c'])).toEqual(['b', 'c'])
  expect(intersection(list)(['c', 'b'])).toEqual(['c', 'b'])
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
    const result = intersection(list1)(list2)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

```typescript

intersperse<T>(separator: T): (list: T[]) => T[]
```

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = 10
const result = R.intersperse(separator)(list)
// => [0, 10, 1, 10, 2, 10, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%2010%0Aconst%20result%20%3D%20R.intersperse(separator)(list)%0A%2F%2F%20%3D%3E%20%5B0%2C%2010%2C%201%2C%2010%2C%202%2C%2010%2C%203%5D">Try this <strong>R.intersperse</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
intersperse<T>(separator: T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.intersperse</strong> source</summary>

```javascript
export function intersperse(separator) {
  return list => {
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
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { intersperse } from './intersperse.js'

test('intersperse', () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 'a' }]
  expect(intersperse('!')(list)).toEqual([
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
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersperse)

### join

```typescript

join<T>(glue: string): (list: T[]) => string
```

It returns a string of all `list` instances joined with a `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try this <strong>R.join</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
join<T>(glue: string): (list: T[]) => string;
```

</details>

<details>

<summary><strong>R.join</strong> source</summary>

```javascript
export function join(glue) {
  return list => list.join(glue)
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { join, pipe } from 'rambda'

it('R.join', () => {
  const result = pipe([1, 2, 3], join('|'))
  result // $ExpectType string
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

lastIndexOf<T>(target: T): (list: T[]) => number
```

It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.

```javascript
const list = [1, 2, 3, 1, 2, 3]
const result = [
  R.lastIndexOf(2)(list),
  R.lastIndexOf(4)(list),
]
// => [4, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%0Aconst%20result%20%3D%20%5B%0A%20%20R.lastIndexOf(2)(list)%2C%0A%20%20R.lastIndexOf(4)(list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%20-1%5D">Try this <strong>R.lastIndexOf</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
lastIndexOf<T>(target: T): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.lastIndexOf</strong> source</summary>

```javascript
import { _lastIndexOf } from './equals.js'

export function lastIndexOf(valueToFind) {
  return list => _lastIndexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { lastIndexOf } from './lastIndexOf.js'

test('with NaN', () => {
  expect(lastIndexOf(Number.NaN)([Number.NaN])).toBe(0)
})

test('will throw with bad input', () => {
  expect(() => indexOf([])(true)).toThrowError('indexOf is not defined')
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3)([1, 2, 3, 4])).toBe(2)
  expect(lastIndexOf(10)([1, 2, 3, 4])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(lastIndexOf({ c: 4 })(listOfObjects)).toBe(-1)
  expect(lastIndexOf({ c: 3 })(listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(lastIndexOf([])(listOfLists)).toBe(5)
  expect(lastIndexOf([1])(listOfLists)).toBe(4)
  expect(lastIndexOf([2, 3, 4])(listOfLists)).toBe(2)
  expect(lastIndexOf([2, 3, 5])(listOfLists)).toBe(-1)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { lastIndexOf, pipe } from 'rambda'

describe('R.lastIndexOf', () => {
  const result = pipe([{ a: 1 }, { a: 2 }, { a: 3 }], lastIndexOf({ a: 2 }))
  result // $ExpectType number
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

```javascript
const fn = x => x * 2

const iterable = [1, 2]
const obj = {a: 1, b: 2}

const result = R.map(fn)(iterable),
// => [2, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0A%0Aconst%20iterable%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20R.map(fn)(iterable)%2C%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try this <strong>R.map</strong> example in Rambda REPL</a>

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
...
...
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
export function mapFn(
	fn, list
){
	let index = 0
	const willReturn = Array(list.length)
	while (index < list.length) {
		willReturn[index] = fn(list[index], index)
		index++
	}
	return willReturn
}

export function map(fn) {
  return list => mapFn(fn, list)
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

it('R.map', () => {
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
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

### mapAsync

```typescript

mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>
```

Sequential asynchronous mapping with `fn` over members of `list`.

```javascript
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = await R.mapAsync(fn)([1, 2, 3])
// `result` resolves after 3 seconds to `[2, 3, 4]`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20await%20R.mapAsync(fn)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%60result%60%20resolves%20after%203%20seconds%20to%20%60%5B2%2C%203%2C%204%5D%60">Try this <strong>R.mapAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;
mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;
mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
  data: T
): Promise<Mapped<T, U>>;
mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
  data: T
): Promise<Mapped<T, U>>;
...
...
```

</details>

<details>

<summary><strong>R.mapAsync</strong> source</summary>

```javascript
export function mapAsync(fn) {
  return async list => {
    const willReturn = []
    let i = 0
    for (const a of list) {
      willReturn.push(await fn(a, i++))
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { map } from './map.js'
import { mapAsync } from './mapAsync.js'
import { pipeAsync } from './pipeAsync.js'

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy', async () => {
  const indexes = []
  const fn = async (x, prop) => {
    await delay(100)
    indexes.push(prop)
    return x + 1
  }
  const result = await mapAsync(fn)([1, 2, 3])
  expect(result).toEqual([2, 3, 4])
  expect(indexes).toEqual([0, 1, 2])
})

test('with R.pipeAsync', async () => {
	const fn = async x => x + 1
  const result = await pipeAsync(
    [1, 2, 3],
    map(x => x + 1),
    mapAsync(async x => {
      delay(x)

      return x
    }),
		mapAsync(fn),
    map(x => x * 10),
  )
  expect(result).toEqual([30, 40, 50])
})

test('error', async () => {
  try {
    await mapAsync(rejectDelay)([1, 2, 3])
  } catch (err) {
    expect(err).toBe(21)
  }
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mapAsync, pipeAsync } from 'rambda'
import { delay } from 'rambdax'

const list = ['a', 'bc', 'def']

it('R.mapAsync', async () => {
	const fn = async (x:unknown) => x as number + 1

  const result = await pipeAsync(
    list,
    mapAsync(async x => {
      await delay(100)
      x // $ExpectType string
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
		mapAsync(fn),
    mapAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  result // $ExpectType number[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapAsync)

### mapKeys

```typescript

mapKeys<T>(fn: (prop: string, value: T) => string): (obj: Record<string, T>) => Record<string, T>
```

It returns a copy of `obj` with keys transformed by `fn`.

```javascript
const result = R.mapKeys(
	(key, value) => key.toUpperCase()+value
	)(
	{ a: 1, b: 2 }
)
// => { A1: 1, B2: 2 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mapKeys(%0A%09(key%2C%20value)%20%3D%3E%20key.toUpperCase()%2Bvalue%0A%09)(%0A%09%7B%20a%3A%201%2C%20b%3A%202%20%7D%0A)%0A%2F%2F%20%3D%3E%20%7B%20A1%3A%201%2C%20B2%3A%202%20%7D">Try this <strong>R.mapKeys</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapKeys<T>(fn: (prop: string, value: T) => string): (obj: Record<string, T>) => Record<string, T>;
```

</details>

<details>

<summary><strong>R.mapKeys</strong> source</summary>

```javascript
export function mapKeys(fn) {
  return obj => {
		const willReturn = {}

		Object.keys(obj).forEach(key => {
			willReturn[fn(key, obj[key])] = obj[key]
		})

		return willReturn
	}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { mapKeys } from "./mapKeys.js"

test('happy', () => {
	const result = mapKeys((prop, x) => `${ prop }-${x}`)({a:1, b: 2 })
	const expected = { 'a-1': 1, 'b-2': 2 }

	expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mapKeys, pipe } from 'rambda'

it('R.mapKeys', () => {
  const result = pipe(
    { a: 1, b: 2 },
    mapKeys((prop, x) => `${prop}-${x}`),
    mapKeys(prop => `${prop}-${prop}`),
  )
  result // $ExpectType Record<string, number>
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapKeys)

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

    result // $ExpectType { a: string; }
  })
  it('iterable with two three arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b) => {
        a // $ExpectType string | number
        b // $ExpectType "a" | "b"
        return `${a}`
      }),
    )

    result // $ExpectType { a: string; b: string; }
  })
  it('iterable with three arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b, c) => {
        a // $ExpectType string | number
        b // $ExpectType "a" | "b"
        c // $ExpectType { a: number; b: string; }
        return `${a}`
      }),
    )

    result // $ExpectType { a: string; b: string; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObject)

### mapObjectAsync

```typescript

mapObjectAsync<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Promise<Value>,
): (data: T) => Promise<MappedValues<T, Value>>
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapObjectAsync<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Promise<Value>,
): (data: T) => Promise<MappedValues<T, Value>>;
```

</details>

<details>

<summary><strong>R.mapObjectAsync</strong> source</summary>

```javascript
export function mapObjectAsync(fn) {
  return async obj => {
    const willReturn = {}
    for (const prop in obj) {
      willReturn[prop] = await fn(obj[prop], prop)
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { mapObjectAsync } from './mapObjectAsync.js'
import { pipeAsync } from './pipeAsync.js'

test('happy', async () => {
  const indexes = []
  const result = await pipeAsync(
    { a: 1, b: 2 },
    mapObjectAsync(async (x, i) => {
      await delay(100)
      indexes.push(i)
      return x + 1
    }),
  )
  expect(indexes).toEqual(['a', 'b'])
  expect(result).toEqual({
    a: 2,
    b: 3,
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { mapObjectAsync, pipeAsync } from 'rambda'
import { delay } from 'rambdax'

it('R.mapObjectAsync', async () => {
  const result = await pipeAsync(
    { a: 'foo', b: 'bar' },
    mapObjectAsync(async x => {
      await delay(100)
      x // $ExpectType string
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
    mapObjectAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  result.a // $ExpectType number
  result.b // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObjectAsync)

### mapParallelAsync

```typescript

mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>
```

Wrapper around `Promise.all` for asynchronous mapping with `fn` over members of `list`.

<details>

<summary>All TypeScript definitions</summary>

```typescript
mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;
mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;
mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
  data: T
): Promise<Mapped<T, U>>;
mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
  data: T
): Promise<Mapped<T, U>>;
...
...
```

</details>

<details>

<summary><strong>R.mapParallelAsync</strong> source</summary>

```javascript
export function mapParallelAsync(fn) {
  return async list =>  Promise.all(list.map((x, i) => fn(x, i)))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { pipeAsync } from './pipeAsync.js'
import { delay } from './delay.js'
import { mapParallelAsync } from './mapParallelAsync.js'

test('happy', async () => {
  const fn = async (x, i) => {
    await delay(100)

    return x + i
  }
  const result = await mapParallelAsync(fn)([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3, 5 ])
})

test('pipeAsync', async () => {
  const result = await pipeAsync(
		[1, 2, 3],
    mapParallelAsync(async x => {
      await delay(100)

      return x + 1
    })
	)
  expect(result).toEqual([ 2,3,4 ])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapParallelAsync)

### match

```typescript

match(regExpression: RegExp): (str: string) => string[]
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
match(regExpression: RegExp): (str: string) => string[];
```

</details>

<details>

<summary><strong>R.match</strong> source</summary>

```javascript
export function match(pattern) {
  return input => {
    const willReturn = input.match(pattern)

    return willReturn === null ? [] : willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { match } from './match.js'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a')('foo')).toEqual([])
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
    const result = match(/foo/)(str)
    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#match)

### maxBy

```typescript

maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T
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
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
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
  expect(maxBy(Math.abs, 2)(-5)).toBe(-5)
  expect(maxBy(Math.abs, -5)(2)).toBe(-5)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { maxBy, pipe } from 'rambda'

const first = 1
const second = 2

it('R.maxBy', () => {
  const result = pipe(
    second,
    maxBy(x => (x % 2 === 0 ? 1 : -1), first),
  )
  result // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

### merge

```typescript

merge<Source>(source: Source): <T>(data: T) => Merge<T, Source>
```

It creates a copy of `target` object with overwritten `newProps` properties.

<details>

<summary>All TypeScript definitions</summary>

```typescript
merge<Source>(source: Source): <T>(data: T) => Merge<T, Source>;
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
  expect(merge(obj)({ bar: 20 })).toEqual({
    foo: 1,
    bar: 20,
  })
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { merge, mergeTypes, pipe } from 'rambda'

it('R.merge', () => {
  const result = pipe({ foo: 1 }, merge({ bar: 2 }), mergeTypes)
  result.foo // $ExpectType number
  result.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#merge)

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
  expect(minBy(Math.abs, -5)(2)).toBe(2)
  expect(minBy(Math.abs, 2)(-5)).toBe(2)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

### modifyItemAtIndex

```typescript

modifyItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
const result = R.pipe(
	[1, 2, 3],
	R.modifyItemAtIndex(1, R.add(1))
) // => [1, 3, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%09%5B1%2C%202%2C%203%5D%2C%0A%09R.modifyItemAtIndex(1%2C%20R.add(1))%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%203%2C%203%5D">Try this <strong>R.modifyItemAtIndex</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modifyItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.modifyItemAtIndex</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function modifyItemAtIndex(index, replaceFn) {
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
import { modifyItemAtIndex } from './modifyItemAtIndex.js'

const add10 = x => x + 10

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {
  expect(modifyItemAtIndex(1, add10)(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(modifyItemAtIndex(-2, add10)(list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(modifyItemAtIndex(4, add10)(list)).toEqual(list)
  expect(modifyItemAtIndex(-5, add10)(list)).toEqual(list)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modifyItemAtIndex)

### modifyProp

```typescript

modifyProp<T, K extends keyof T>(
  prop: K,
  fn: (x: T[K]) => T[K],
): (target: T) => T
```

It changes a property with the result of transformer function.

```javascript
const person = {
  name : 'foo',
  age  : 20,
}
const result = R.modifyProp('age', x => x + 1)(person) 
// => {name: 'foo', age: 21}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20person%20%3D%20%7B%0A%20%20name%20%3A%20'foo'%2C%0A%20%20age%20%20%3A%2020%2C%0A%7D%0Aconst%20result%20%3D%20R.modifyProp('age'%2C%20x%20%3D%3E%20x%20%2B%201)(person)%20%0A%2F%2F%20%3D%3E%20%7Bname%3A%20'foo'%2C%20age%3A%2021%7D">Try this <strong>R.modifyProp</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
modifyProp<T, K extends keyof T>(
  prop: K,
  fn: (x: T[K]) => T[K],
): (target: T) => T;
```

</details>

<details>

<summary><strong>R.modifyProp</strong> source</summary>

```javascript
import { isArray } from './_internals/isArray.js'
import { update } from './update.js'

function modifyFn(property, fn, list) {
  if (list[property] === undefined) {
    return list
  }
  if (isArray(list)) {
    return update(property, fn(list[property]))(list)
  }

  return {
    ...list,
    [property]: fn(list[property]),
  }
}

export function modifyProp(property, fn) {
  return obj => modifyFn(property, fn, obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { modifyProp } from './modifyProp.js'

const person = {
  name: 'foo',
  age: 20,
}

test('happy', () => {
  expect(modifyProp('age', x => x + 1)(person)).toEqual({
    name: 'foo',
    age: 21,
  })
})

test('property is missing', () => {
  expect(modifyProp('foo', x => x + 1)(person)).toEqual(person)
})

test('adjust if `array` at the given key with the `transformation` function', () => {
  expect(modifyProp(1, x => x + 1)([100, 1400])).toEqual([100, 1401])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { modifyProp, pipe } from 'rambda'

it('R.modify', () => {
  const result = pipe(
    { a: 1, b: 2, c: { d: 3 } },
    modifyProp('a', val => val + 1),
  )
  result // $ExpectType { a: number; b: number; c: { d: number; }; }

  pipe(
    { a: 1, b: 2, c: { d: 3 } },
    // @ts-expect-error
    modifyProp('ax', val => val + 1),
  )

  pipe(
    { a: 1, b: 2, c: { d: 3 } },
    // @ts-expect-error
    modifyProp('a', val => String(val)),
  )
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modifyProp)

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
  expect(none(isEven)([1, 3, 5, 7])).toBeTruthy()
})

test('when false', () => {
  expect(none(input => input > 1)([1, 2, 3])).toBeFalsy()
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

objectIncludes<T>(specification: T): (obj: Partial<T>) => boolean
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
objectIncludes<T>(specification: T): (obj: Partial<T>) => boolean;
```

</details>

<details>

<summary><strong>R.objectIncludes</strong> source</summary>

```javascript
import { equals } from './equals.js'
import { filterObject } from './filterObject.js'

export function objectIncludes(condition) {
  return obj => {
    const result = filterObject((conditionValue, conditionProp) =>
      equals(conditionValue)(obj[conditionProp]),
    )(condition)

    return Object.keys(result).length === Object.keys(condition).length
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { objectIncludes } from './objectIncludes.js'

test('when true', () => {
  const condition = { a: 1 }
  const input = {
    a: 1,
    b: 2,
  }

  const result = objectIncludes(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const condition = { a: 1 }
  const input = { b: 2 }

  const result = objectIncludes(condition)(input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const condition = { a: { b: 1 } }
  const input = {
    a: { b: 1 },
    c: 2,
  }

  const result = objectIncludes(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const condition = { a: { b: 1 } }

  expect(() => objectIncludes(condition)(null)).toThrowErrorMatchingInlineSnapshot(
    `[TypeError: Cannot read properties of null (reading 'a')]`,
  )
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { objectIncludes, pipe } from 'rambda'

describe('R.objectIncludes', () => {
  it('happy', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ a: 2 }))
    result // $ExpectType boolean
  })
  it('nested', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ c: { d: 3 } }))
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objectIncludes)

### objOf

```typescript

objOf<T, K extends PropertyKey>(key: K): (value: T) => { [P in K]: T }
```

It creates an object with a single key-value pair.

```javascript
const result = R.objOf('foo')('bar')
// => {foo: 'bar'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.objOf('foo')('bar')%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%7D">Try this <strong>R.objOf</strong> example in Rambda REPL</a>

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

it('R.objOf', () => {
  const result = pipe(value, objOf(key))
  result.foo // $ExpectType number
  // @ts-expect-error
  result.bar
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objOf)

### omit

```typescript

omit<
	S extends string,
	Keys extends PickStringToPickPath<S>,
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(
	obj: ElementOf<Keys> extends keyof U ? U : never
) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never
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
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(
	obj: ElementOf<Keys> extends keyof U ? U : never
) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
omit<const Keys extends PropertyKey[]>(propsToPick: Keys): <
	U extends Partial<Record<ElementOf<Keys>, any>>
>(
	obj: ElementOf<Keys> extends keyof U ? U : never
) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
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
  const result = omit('a,c')(obj)
  const expectedResult = { b: 2 }

  expect(result).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(
    omit(['a', 'c', 'd'])({
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

It will return array of two arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

```javascript
const list = [1, 2, 3]
const predicate = x => x > 2

const result = R.partition(predicate)(list)

const expected = [[3], [1, 2]]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20R.partition(predicate)(list)%0A%0Aconst%20expected%20%3D%20%5B%5B3%5D%2C%20%5B1%2C%202%5D%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.partition</strong> example in Rambda REPL</a>

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
export function partition(predicate) {
  return list => {
		const yes = []
		const no = []
		let counter = -1
	
		while (counter++ < list.length - 1) {
			if (predicate(list[counter], counter)) {
				yes.push(list[counter])
			} else {
				no.push(list[counter])
			}
		}
	
		return [yes, no]
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partition } from './partition.js'

test('happy', () => {
  const list = [1, 2, 3]
  const predicate = x => x > 2

  const result = partition(predicate)(list)
  expect(result).toEqual([[3], [1, 2]])
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
    const result = pipe(
      [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
      partition(x => x.a > 2),
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
    const list1: (Foo | Bar)[] = [{ a: 1 }, { b: 2 }, { a: 3 }, { b: 4 }]
    const filterFoo = (x: Foo | Bar): x is Foo => 'a' in x
    const result = pipe(list1, partition(filterFoo))
    result // $ExpectType [Foo[], Bar[]]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### partitionObject

```typescript

partitionObject<T extends unknown, S extends T>(
  predicate: (value: T, prop: string, obj: Record<string, T>) => value is S,
): (obj: Record<string, T>) => [Record<string, S>, Record<string, Exclude<T, S>>]
```

It returns an array containing two objects. The first object holds all properties of the input object for which the predicate returns true, while the second object holds those that do not.

```javascript
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = R.partition(predicate)(obj)

const expected = [{c: 3},  {a: 1, b: 2}]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20R.partition(predicate)(obj)%0A%0Aconst%20expected%20%3D%20%5B%7Bc%3A%203%7D%2C%20%20%7Ba%3A%201%2C%20b%3A%202%7D%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.partitionObject</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
partitionObject<T extends unknown, S extends T>(
  predicate: (value: T, prop: string, obj: Record<string, T>) => value is S,
): (obj: Record<string, T>) => [Record<string, S>, Record<string, Exclude<T, S>>];
partitionObject<T extends unknown>(
  predicate: (value: T, prop: string, obj: Record<string, T>) => boolean,
): (obj: Record<string, T>) => [Record<string, T>, Record<string, T>];
```

</details>

<details>

<summary><strong>R.partitionObject</strong> source</summary>

```javascript
export function partitionObject(predicate) {
	return obj => {
  const yes = {}
  const no = {}
  Object.entries(obj).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value
    } else {
      no[prop] = value
    }
  })

  return [yes, no]
}
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { partitionObject } from './partitionObject.js'

test('happy', () => {
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

  const result = partitionObject(predicate)(hash)
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
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { partitionObject, pipe } from 'rambda'

describe('R.partition', () => {
  it('happy', () => {
		let result = pipe(
			{ a: 1, b: 2 },
			partitionObject((x, prop) => x> 1 || prop === 'c'),
		)
    result // $ExpectType [Record<string, number>, Record<string, number>]
  })
  it('with complex object', () => {
    interface Foo {
      a: number
    }
    interface Bar {
      b: number
    }
    const obj: Record<string, (Foo | Bar)> = {
			a: { a: 1 },
			b: { b: 2 },
			c: { a: 3 },
			d: { b: 4 },
		}
    const filterFoo = (x: Foo | Bar): x is Foo => 'a' in x
    const result = pipe(obj, partitionObject(filterFoo))
    result // $ExpectType [Record<string, Foo>, Record<string, Bar>]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partitionObject)

### path

```typescript

path<S, K0 extends string & keyof S>(path: `${K0}`): (obj: S) => S[K0]
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
path<S, K0 extends string & keyof S>(path: `${K0}`): (obj: S) => S[K0];
path<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(path: `${K0}.${K1}`): (obj: S) => S[K0][K1];
path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1]
>(path: [K0, K1, K2]): (obj: S) => S[K0][K1][K2];
path<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(path: `${K0}.${K1}.${K2}`): (obj: S) => S[K0][K1][K2];
...
...
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
import { createPath } from './_internals/createPath.js'

export function path(pathInput) {
	return (obj)  => {
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
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { path } from './path.js'

test('with array inside object', () => {
  const obj = { a: { b: [1, { c: 1 }] } }

  expect(path('a.b.1.c')(obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a: { b: { c: 1 } } }

  expect(path('a.b.c.d.f')(obj)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
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
  expect(path(['a', '1', 'b'])({ a: [{ b: 1 }, { b: 2 }] })).toBe(2)
})

test('null is not a valid path', () => {
  expect(
    path('audio_tracks')({
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
    result.c // $ExpectType boolean
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

pathSatisfies<S, K0 extends string & keyof S>(
  predicate: (x: S[K0]) => boolean,
  path: [K0]
): (obj: S) => boolean
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
pathSatisfies<S, K0 extends string & keyof S>(
  predicate: (x: S[K0]) => boolean,
  path: [K0]
): (obj: S) => boolean;
pathSatisfies<S, K0 extends string & keyof S>(
  predicate: (x: S[K0]) => boolean,
  path: `${K0}`
): (obj: S) => boolean;
pathSatisfies<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  predicate: (x: S[K0][K1]) => boolean,
  path: [K0, K1]
): (obj: S) => boolean;
pathSatisfies<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  predicate: (x: S[K0][K1]) => boolean,
  path: `${K0}.${K1}`
): (obj: S) => boolean;
...
...
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
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { y: 1 } })).toBe(true)
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

### permutations

```typescript

permutations<T>(list: T[]): T[][]
```

```javascript
const result = R.permutations(
	[1, 2]
)
// => [[1, 2], [2, 1]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.permutations(%0A%09%5B1%2C%202%5D%0A)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B2%2C%201%5D%5D">Try this <strong>R.permutations</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
permutations<T>(list: T[]): T[][];
```

</details>

<details>

<summary><strong>R.permutations</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

/**
 * Source:
 * https://github.com/denoland/std/blob/main/collections/permutations.ts
 */
export function permutations(inputArray) {
  const result = [];
  const array = cloneList(inputArray);
  const k = array.length;
  if (k === 0) {
    return result;
  }

  const c = new Array(k).fill(0);

  result.push([...array]);

  let i = 1;

  while (i < k) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        [array[0], array[i]] = [array[i], array[0]]
      } else {
        [array[c[i]], array[i]] = [array[i], array[c[i]]]
      }

      result.push([...array]);

      c[i] += 1;
      i = 1;
    } else {
      c[i] = 0;
      i += 1;
    }
  }

  return result;
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#permutations)

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
  R.pick(propsToPick)(obj),
  R.pick(propsToPickList)(obj),
  R.pick('a,bar')(obj),
  R.pick('bar')(obj),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick)(obj)%2C%0A%20%20R.pick(propsToPickList)(obj)%2C%0A%20%20R.pick('a%2Cbar')(obj)%2C%0A%20%20R.pick('bar')(obj)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pick<K extends PropertyKey>(propsToPick: K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;
pick<S extends string>(propsToPick: S): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, ElementOf<PickStringToPickPath<S>>>>>>;
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
...
...
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

<summary><strong>Tests</strong></summary>

```javascript
import { filter } from './filter.js'
import { map } from './map.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    filter(x => x > 1),
    map(x => x * 10),
    map(x => x + 1),
  )
  const expectedResult = [21, 31]

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import {
  type MergeTypes,
  allPass,
  append,
  defaultTo,
  drop,
  dropLast,
  evolve,
  filter,
  find,
  head,
  map,
  mapObject,
  path,
  pick,
  pipe,
  split,
  tap,
  union,
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
const convertToType = <T>(x: unknown)=> x as unknown as T

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
        defaultTo(awardedBaseValue),
        assertType(checkBookToRead),
        x => [x],
        dropLast(1),
        append(awardedZaratustraToRead),
        head,
        evolve({
          year: x => x + 1,
        }),
        // convertToType<BookWithDescription>(),
        // dissocPath<Book>('description'),
        // convertToType<Record<string, string>>(),
        // mapObject((x) => {
        // 	return x as unknown as number;
        // }),
        simplify,
        pick('year'),
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

    const result = pipe(tableData, split('\n'), map(split(',')))
    result // $ExpectType string[][]
  })
})

it('R.pipe', () => {
  const obj = {
    a: 'foo',
    b: 'bar',
  }

  const result = pipe(
    obj,
    x => ({ a: x.a.length + x.b.length }),
    x => ({ ...x, b: x.a + 'foo' }),
    x => ({ ...x, c: x.b + 'bar' }),
  )

  result.a // $ExpectType number
  result.b // $ExpectType string
  result.c // $ExpectType string
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pipeAsync

```typescript

pipeAsync<A, B>(input: A, fn0: (x: Awaited<A>) => B) : B
```

It accepts input as first argument and series of functions as next arguments. It is same as `R.pipe` but with support for asynchronous functions.

```javascript
const result = await R.pipeAsync(
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

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20await%20R.pipeAsync(%0A%20%20100%2C%0A%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20await%20R.delay(100)%0A%20%20%20%20return%20x%20%2B%202%0A%20%20%7D%2C%0A%20%20R.add(2)%2C%0A%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20const%20delayed%20%3D%20await%20R.delay(100)%0A%20%20%20%20return%20delayed%20%2B%20x%0A%20%20%7D%0A)%0A%2F%2F%20%60result%60%20resolves%20to%20%60RAMBDAX_DELAY104%60">Try this <strong>R.pipeAsync</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
pipeAsync<A, B>(input: A, fn0: (x: Awaited<A>) => B) : B;
pipeAsync<A, B, C>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C) : C;
pipeAsync<A, B, C, D>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D) : D;
pipeAsync<A, B, C, D, E>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E) : E;
...
...
```

</details>

<details>

<summary><strong>R.pipeAsync</strong> source</summary>

```javascript
import { type } from './type.js'

export async function pipeAsync(input, ...fnList) {
  let willReturn = input
  for (const fn of fnList) {
    const initialResult = fn(willReturn)
    willReturn =
      type(initialResult) === 'Promise' ? await initialResult : initialResult
  }
  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { delay } from './delay.js'
import { pipeAsync } from './pipeAsync.js'

const fn1 = x => {
  return new Promise(resolve => {
    resolve(x + 2)
  })
}
const fn2 = async x => {
  await delay(1)

  return x + 3
}

test('happy', async () => {
  const result = await pipeAsync(1, fn1, x => x + 2, fn2)
  expect(result).toBe(8)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipeAsync } from 'rambda'
import { delay } from 'rambdax'

describe('R.pipeAsync', () => {
  it('happy', async () => {
    const result = await pipeAsync(
      4,
      async x => {
        x // $ExpectType number
        await delay(100)
        return x + 1
      },
      x => {
        x // $ExpectType number
        return Promise.resolve([x])
      },
    )

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipeAsync)

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
export function pluck(property) {
  return list => {
    const willReturn = []

    list.forEach(x => {
      if (x[property] !== undefined) {
        willReturn.push(x[property])
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
import { pluck } from './pluck.js'

test('happy', () => {
  expect(pluck('a')([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([1, 2])
})

test('with undefined', () => {
  expect(pluck(undefined)([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([])
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
  return list => [x].concat(list)
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

    result // $ExpectType number[]
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
  R.propEq(propToFind, valueToMatch)(obj),
  R.propEq(propToFind, valueToMatch)(secondObj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch)(obj)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch)(secondObj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.propEq</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean;
  <K extends PropertyKey>(name: K, obj: Record<K, T>): boolean;
};
propEq<T, K extends PropertyKey>(val: T, name: K): (obj: Record<K, T>) => boolean;
...
...
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import { equalsFn } from './equals.js'

export function propEq(valueToMatch, propToFind) {
  return obj => {
    if (!obj) {
      return false
    }

    return equalsFn(valueToMatch, obj[propToFind])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propEq } from './propEq.js'

const FOO = 'foo'
const BAR = 'bar'

test('happy', () => {
  const obj = { [FOO]: BAR }
  expect(propEq(BAR, FOO)(obj)).toBeTruthy()
  expect(propEq(1, FOO)(obj)).toBeFalsy()
  expect(propEq(1, 1)(null)).toBeFalsy()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq('name', 'Abby')(null)).toBeFalsy()
  expect(propEq('name', 'Abby')(undefined)).toBeFalsy()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propOr

```typescript

propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property)(obj),
  R.propOr(defaultValue, 'foo')(obj)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property)(obj)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo')(obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.propOr</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T;
```

</details>

<details>

<summary><strong>R.propOr</strong> source</summary>

```javascript
import { defaultTo } from './defaultTo.js'

export function propOr(defaultValue, property) {
  return obj => {
    if (!obj) {
      return defaultValue
    }

    return defaultTo(defaultValue)(obj[property])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propOr } from './propOr.js'

test('propOr', () => {
  const obj = { a: 1 }
  expect(propOr('default', 'a')(obj)).toBe(1)
  expect(propOr('default', 'notExist')(obj)).toBe('default')
  expect(propOr('default', 'notExist')(null)).toBe('default')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { propOr } from 'rambda'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

describe('R.propOr', () => {
  it('happy', () => {
    const result = propOr(fallback, property)(obj)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propOr)

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
export function propSatisfies(predicate, property) {
  return obj => predicate(obj[property])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { propSatisfies } from './propSatisfies.js'

const obj = { a: 1 }

test('when true', () => {
  expect(propSatisfies(x => x > 0, 'a')(obj)).toBeTruthy()
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

### range

```typescript

range(startInclusive: number): (endExclusive: number) => number[]
```

It returns list of numbers between `startInclusive` to `endExclusive` markers.
If `start` is greater than `end`, then the result will be in descending order.

```javascript
[R.range(0)(5), R.range(5)(0)]
// => [[0, 1, 2, 3, 4], [5, 4, 3, 2, 1]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5BR.range(0)(5)%2C%20R.range(5)(0)%5D%0A%2F%2F%20%3D%3E%20%5B%5B0%2C%201%2C%202%2C%203%2C%204%5D%2C%20%5B5%2C%204%2C%203%2C%202%2C%201%5D%5D">Try this <strong>R.range</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
range(startInclusive: number): (endExclusive: number) => number[];
```

</details>

<details>

<summary><strong>R.range</strong> source</summary>

```javascript
function rangeDescending(start, end) {
	const len = start - end
	const willReturn = Array(len)

	for (let i = 0; i < len; i++) {
		willReturn[i] = start - i
	}

	return willReturn
}

export function range(start) {
  return end => {
    if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
      throw new TypeError('Both arguments to range must be numbers')
    }

    if (end === start) {
      return []
    }
		if (end < start) return rangeDescending(start,end)

    const len = end - start
    const willReturn = Array(len)

    for (let i = 0; i < len; i++) {
      willReturn[i] = start + i
    }

    return willReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { range } from './range.js'

test('happy', () => {
  expect(range(0)(5)).toEqual([0, 1, 2, 3, 4])
	expect(range(7)(3)).toEqual([7, 6, 5, 4])
	expect(range(5)(5)).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { range } from 'rambda'

describe('R.range', () => {
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
  expect(reduce(reducer, initialValue)(list)).toBe(7)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0)({})).toThrowError(ERROR)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(concat, [])(null)).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(concat, [])(undefined)).toEqual([])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, reduce } from 'rambda'

it('R.reduce', () => {
  const result = pipe(
    [1, 2, 3],
    reduce((acc, val) => acc + val, 10),
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
  R.reject(predicate)(list),
  R.reject(predicate)(obj)
]
// => [[1], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate)(list)%2C%0A%20%20R.reject(predicate)(obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.reject</strong> example in Rambda REPL</a>

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
...
...
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import { filter } from './filter.js'

export function reject(predicate) {
  return list => filter(x => !predicate(x))(list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { reject } from './reject.js'

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(reject(isEven)([1, 2, 3, 4])).toEqual([1, 3])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { reject, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.reject with array', () => {
  it('within pipe', () => {
    const result = pipe(
      list,
      reject(x => {
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
    interface Baz extends Foo {
      c: string
    }

    const testList: (Foo | Bar | Baz)[] = [{ a: 1 }, { a: 2 }, { a: 3 }]
    const rejectBar = (x: Foo | Bar | Baz): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      reject(rejectBar),
    )
    result // $ExpectType (Foo | Baz)[]
  })
  it('narrowing type - readonly', () => {
		interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }
    interface Baz extends Foo {
      c: string
    }

    const testList: (Foo | Bar | Baz)[] = [{ a: 1 }, { a: 2 }, { a: 3 }] as const
    const rejectBar = (x: Foo | Bar | Baz): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      reject(rejectBar),
    )
    result // $ExpectType (Foo | Baz)[]
  })
  it('rejecting NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = pipe(testList, reject(Boolean))
    result // $ExpectType (null | undefined)[]
  })
  it('rejecting NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = pipe(testList, reject(Boolean))
    result // $ExpectType (null | undefined)[]
    // @ts-expect-error
    result.includes(1)
  })
})
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

<details>

<summary><strong>R.rejectObject</strong> source</summary>

```javascript
export function rejectObject(predicate) {
  return obj => {
    const willReturn = {}

    for (const prop in obj) {
      if (!predicate(obj[prop], prop, obj)) {
        willReturn[prop] = obj[prop]
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
import { pipe } from './pipe.js'
import { rejectObject } from './rejectObject.js'

test('happy', () => {
	let testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
		testInput,
		rejectObject((x, prop, obj) => {
			expect(prop).toBeOneOf(['a', 'b', 'c'])
			expect(obj).toBe(testInput)
			return x > 1
		})
	)
	expect(result).toEqual({ a:1 })
})
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

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#rejectObject)

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
  expect(replace(/\s/g, '|')('foo bar baz')).toBe('foo|bar|baz')
  expect(replace('a', '|')('foo bar baz')).toBe('foo b|r baz')
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

### shuffle

```typescript

shuffle<T>(list: T[]): T[]
```

It returns a randomized copy of array.

```javascript
const result = R.shuffle(
	[1, 2, 3]
)
// => [3, 1, 2] or [2, 3, 1] or ...
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.shuffle(%0A%09%5B1%2C%202%2C%203%5D%0A)%0A%2F%2F%20%3D%3E%20%5B3%2C%201%2C%202%5D%20or%20%5B2%2C%203%2C%201%5D%20or%20...">Try this <strong>R.shuffle</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
shuffle<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.shuffle</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function shuffle(listInput) {
  const list = cloneList(listInput)
  let counter = list.length
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = list[counter]
    list[counter] = list[index]
    list[index] = temp
  }

  return list
}
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { shuffle } from 'rambdax'

const list = [1, 2, 3, 4, 5]

describe('R.shuffle', () => {
  it('happy', () => {
    const result = shuffle(list)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#shuffle)

### sort

```typescript

sort<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[]
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

  expect(sort(fn)(list)).toEqual(['bar', 'baz', 'foo'])
  expect(list).toEqual(['foo', 'bar', 'baz'])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, sort } from 'rambda'

const list = [3, 0, 5, 2, 1]

describe('R.sort', () => {
  it('happy', () => {
    const result = sort<number>((a, b) => {
      return a > b ? 1 : -1
    })(list)
    result // $ExpectType number[]
  })
  it('within pipe', () => {
    const result = pipe(
      list,
      sort((a, b) => {
        return a > b ? 1 : -1
      }),
    )
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sort)

### sortBy

```typescript

sortBy<T>(sortFn: (x: T) => Ord): (list: T[]) => T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortBy(sortFn)(list)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20x%20%3D%3E%20x.a%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn)(list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortBy</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortBy<T>(sortFn: (x: T) => Ord): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortBy</strong> source</summary>

```javascript
import { cloneList } from './_internals/cloneList.js'

export function sortByFn (
	sortFn,
	list,
	descending
){
	const clone = cloneList(list)

	return clone.sort((a, b) => {
		const aSortResult = sortFn(a)
		const bSortResult = sortFn(b)

		if (aSortResult === bSortResult) {
			return 0
		}
		if(
			descending
		) return aSortResult > bSortResult ? -1 : 1

		return aSortResult < bSortResult ? -1 : 1
	})
}

export function sortBy(sortFn) {
  return list => sortByFn(sortFn, list, false)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortBy } from './sortBy.js'

const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]

test('happy', () => {
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with non-existing path', () => {
	expect(sortBy(x => x.b)(input)).toEqual(input)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, sortBy } from 'rambda'

describe('R.sortBy', () => {
  it('passing type to sort function and list', () => {
    const result = pipe(
      [{ a: 2 }, { a: 1 }, { a: 0 }],
      sortBy(x => {
        return x.a
      }),
    )

    result[0].a // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### sortByDescending

```typescript

sortByDescending<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[]
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortByDescending<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortByDescending</strong> source</summary>

```javascript
import { sortByFn } from "./sortBy.js";

export function sortByDescending(sortFn) {
  return list => sortByFn(sortFn, list, true)
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortByDescending)

### sortByPath

```typescript

sortByPath<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[]
```

It sorts `list` by the value of `path` property.

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortByPath<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[];
sortByPath<S, K0 extends string & keyof S>(
  path: `${K0}`
): (list: S[]) => S[];
sortByPath<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: [K0, K1]
): (list: S[]) => S[];
sortByPath<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: `${K0}.${K1}`
): (list: S[]) => S[];
...
...
```

</details>

<details>

<summary><strong>R.sortByPath</strong> source</summary>

```javascript
import { path } from './path.js'
import { sortBy } from './sortBy.js'

export function sortByPath(sortPath) {
  return list => sortBy(path(sortPath))(list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortByPath } from './sortByPath.js'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }]

test('with string as path', () => {
  expect(sortByPath('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPath(['a', 'b'])(list)).toEqual(sorted)
})

test('when path is not found in any item', () => {
	const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: {} }]
	expect(sortByPath('a.b.c.d')(list)).toEqual(list)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, sortByPath } from 'rambda'

const input= [{ a: { b: 2 } }, { a: { b: 1 } }]

describe('R.sortByPath', () => {
  it('with string as path', () => {
    const result = pipe(input, sortByPath('a.b'))
		result[0].a.b // $ExpectType number
  })
  it('with list of strings as path', () => {
    const result = pipe(input, sortByPath(['a', 'b']))
		result[0].a.b // $ExpectType number
  })
	it('with non-existent path', () => {
		// @ts-expect-error
		pipe(input, sortByPath(['a', 'c']))
		// @ts-expect-error
		pipe(input, sortByPath('a.c'))
	})
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortByPath)

### sortByPathDescending

```typescript

sortByPathDescending<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[]
```

<details>

<summary>All TypeScript definitions</summary>

```typescript
sortByPathDescending<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[];
sortByPathDescending<S, K0 extends string & keyof S>(
  path: `${K0}`
): (list: S[]) => S[];
sortByPathDescending<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: [K0, K1]
): (list: S[]) => S[];
sortByPathDescending<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: `${K0}.${K1}`
): (list: S[]) => S[];
...
...
```

</details>

<details>

<summary><strong>R.sortByPathDescending</strong> source</summary>

```javascript
import { path } from './path.js'
import { sortByDescending } from './sortByDescending.js'

export function sortByPathDescending(sortPath) {
  return list => sortByDescending(path(sortPath))(list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortByPathDescending } from './sortByPathDescending.js'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('with string as path', () => {
  expect(sortByPathDescending('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPathDescending(['a', 'b'])(list)).toEqual(sorted)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortByPathDescending)

### sortObject

```typescript

sortObject<T, K extends string & keyof T>(predicate: (aProp: string, bProp: string, aValue: T[K], bValue: T[K]) => number): (obj: T) => T
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
sortObject<T, K extends string & keyof T>(predicate: (aProp: string, bProp: string, aValue: T[K], bValue: T[K]) => number): (obj: T) => T;
sortObject<T>(predicate: (aProp: string, bProp: string) => number): (obj: T) => T;
```

</details>

<details>

<summary><strong>R.sortObject</strong> source</summary>

```javascript
import { sort } from './sort.js'

export function sortObject(predicate) {
  return obj => {
    const keys = Object.keys(obj)
    const sortedKeys = sort((a, b) => predicate(a, b, obj[a], obj[b]))(keys)

    const toReturn = {}
    sortedKeys.forEach(singleKey => {
      toReturn[singleKey] = obj[singleKey]
    })

    return toReturn
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import { sortObject } from './sortObject.js'

const obj = {
  c: 7,
  a: 100,
  b: 1,
  d: 4,
}

test('happy', () => {
  const predicate = (a, b, aValue, bValue) => {
    if (a === 'a') {
      return -1
    }
    if (b === 'a') {
      return 1
    }
    return aValue > bValue ? -1 : 1
  }
  const result = sortObject(predicate)(obj)
  const expected = {
    a: 100,
    c: 7,
    d: 4,
    b: 1,
  }
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { sortObject, pipe } from 'rambda'

const obj = {
  c: 1,
  a: 2,
  b: 3,
}

describe('R.sortObject', () => {
  it('predicate with all arguments', () => {
    const result = pipe(
      obj,
      sortObject((propA, propB, valueA, valueB) => {
        propA // $ExpectType string
        propB // $ExpectType string
        valueA // $ExpectType number
        valueB // $ExpectType number
        return propA > propB ? -1 : 1
      }),
    )

    result // $ExpectType { c: number; a: number; b: number; }
  })

  it('predicate with only property arguments', () => {
    const result = pipe(
      obj,
      sortObject((propA, propB) => {
        propA // $ExpectType string
        propB // $ExpectType string
        return propA > propB ? -1 : 1
      }),
    )
    result // $ExpectType { c: number; a: number; b: number; }
  })
})
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
import { ascend } from './ascend.js'
import { prop } from './prop.js'
import { sortWith } from './sortWith.js'

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
  const sortedAlbums = sortWith([ascend(prop('score')), ascend(prop('title'))])(
    albums,
  )
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Five Leaves Left')
  expect(sortedAlbums[1].title).toBe('In Times of Desparation')
  expect(sortedAlbums[11].title).toBe('Romance with the Unseen')
})

test('sorts by 3 properties of the objects', () => {
  const sortedAlbums = sortWith([
    ascend(prop('genre')),
    ascend(prop('score')),
    ascend(prop('title')),
  ])(albums)
  expect(sortedAlbums).toHaveLength(albums.length)
  expect(sortedAlbums[0].title).toBe('Art of the Fugue')
  expect(sortedAlbums[1].title).toBe('Goldberg Variations')
  expect(sortedAlbums[11].title).toBe('New World Symphony')
})

test('sorts by multiple properties using ascend and descend', () => {
  const sortedAlbums = sortWith([ascend(prop('score')), ascend(prop('title'))])(
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
```

</details>

<details>

<summary><strong>R.split</strong> source</summary>

```javascript
export function split(separator) {
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
  expect(splitEvery(3)([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6], [7]])
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
    const result = pipe(list, splitEvery(3))
    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

### symmetricDifference

```typescript

symmetricDifference<T>(x: T[]): <T>(y: T[]) => T[]
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
symmetricDifference<T>(x: T[]): <T>(y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.symmetricDifference</strong> source</summary>

```javascript
import { filter } from './filter.js'
import { includes } from './includes.js'

export function symmetricDifference(x) {
  return y => [
    ...filter(value => !includes(value)(y))(x),
    ...filter(value => !includes(value)(x))(y),
  ]
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
  expect(symmetricDifference([])([])).toEqual([])
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
...
...
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

  expect(take(1)(arr)).toEqual(['foo'])
  expect(arr).toEqual(['foo', 'bar', 'baz'])
  expect(take(2)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar'])
  expect(take(3)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(4)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(3)('rambda')).toBe('ram')
})

test('with negative index', () => {
  expect(take(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(take(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
})

test('with zero index', () => {
  expect(take(0)([1, 2, 3])).toEqual([])
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
...
...
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
  expect(takeLast(1)(['foo', 'bar', 'baz'])).toEqual(['baz'])
  expect(takeLast(2)(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz'])
  expect(takeLast(3)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(takeLast(4)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(takeLast(10)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
})

test('with strings', () => {
  expect(takeLast(3)('rambda')).toBe('bda')
  expect(takeLast(7)('rambda')).toBe('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(takeLast(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
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
    takeWhile((x, i) => i + x > 1),
  )
  result // $ExpectType number[]
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void): (input: T) => T
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
R.test(/^f/)('foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F)('foo')%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.test</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
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
  expect(testMethod(/^x/)('xyz')).toBeTruthy()
  expect(testMethod(/^y/)('xyz')).toBeFalsy()
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

### tryCatch

```typescript

tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U
```

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result.

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

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBeUndefined()
  expect(tryCatch(fn, false)({ x: 1 })).toBe(1)
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
      if (!includes(yInstance)(x)) {
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
  expect(union([1, 2])([2, 3])).toEqual([1, 2, 3])
})

test('with list of objects', () => {
  const list1 = [{ a: 1 }, { a: 2 }]
  const list2 = [{ a: 2 }, { a: 3 }]
  const result = union(list1)(list2)
  expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { union } from 'rambda'

describe('R.union', () => {
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

```typescript

uniqBy<T, U>(fn: (x: T) => U): (list: T[]) => T[]
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
uniqBy<T, U>(fn: (x: T) => U): (list: T[]) => T[];
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

uniqWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[]
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

const result = R.uniqWith(predicate)(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20predicate%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(predicate)(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.uniqWith</strong> example in Rambda REPL</a>

<details>

<summary>All TypeScript definitions</summary>

```typescript
uniqWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
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
import { uniqWith } from './uniqWith.js'

const list = [{ a: 1 }, { a: 1 }]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn)(list)
  expect(result).toEqual([{ a: 1 }])
})

test('with list of strings', () => {
  const fn = (x, y) => x.length === y.length
  const list = ['0', '11', '222', '33', '4', '55']
  const result = uniqWith(fn)(list)
  expect(result).toEqual(['0', '11', '222'])
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
  })(data)

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
      uniqWith((x, y) => x.a === y.a),
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
import { unless } from './unless.js'

test('happy', () => {
  expect(
    unless(
      x => x > 10,
      x => x + 1,
    )(20),
  ).toEqual(20)
  expect(
    unless(
      x => x > 10,
      x => x + 1,
    )(5),
  ).toEqual(6)
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { pipe, unless } from 'rambda'

const inc = (x: number) => x + 1

describe('R.unless', () => {
  it('happy', () => {
    const result = pipe(
      1,
      unless(x => x > 5, inc),
    )
    result // $ExpectType number
  })
  it('with two different types', () => {
    const result = pipe(
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
      ),
    )
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### unwind

```typescript

unwind<S extends string>(prop: S): <T extends Record<S, readonly any[]>>(obj: T) => Array<MergeTypes<Omit<T, S> & { [K in S]: T[S][number] }>>
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
unwind<S extends string>(prop: S): <T extends Record<S, readonly any[]>>(obj: T) => Array<MergeTypes<Omit<T, S> & { [K in S]: T[S][number] }>>;
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
    const [result] = unwind('b')(obj)
    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('inside pipe', () => {
    const [result] = pipe(obj, unwind('b'))
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

const list = [1, 2, 3]

test('happy', () => {
  const newValue = 8
  const index = 1
  const result = update(index, newValue)(list)

  const expected = [1, 8, 3]
  expect(result).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(index, newValue)(list)

  expect(result).toEqual(list)
})

test('with negative index', () => {
  expect(update(-1, 10)([1])).toEqual([10])
  expect(update(-1, 10)([])).toEqual([])
  expect(update(-1, 10)(list)).toEqual([1, 2, 10])
  expect(update(-2, 10)(list)).toEqual([1, 10, 3])
  expect(update(-3, 10)(list)).toEqual([10, 2, 3])
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### when

```typescript

when<T, U extends T>(predicate: (x: T) => x is U, whenTrueFn: (x: U) => T): (input: T) => T
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
when<T, U extends T>(predicate: (x: T) => x is U, whenTrueFn: (x: U) => T): (input: T) => T;
when<T>(predicate: (x: T) => boolean, whenTrueFn: (x: T) => T): (input: T) => T;
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (x: T) => U): (input: T) => T | U;
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
import { when } from './when.js'

const predicate = x => typeof x === 'number'

test('happy', () => {
  const fn = when(predicate, x => x + 1)
  expect(fn(11)).toBe(12)
  expect(fn('foo')).toBe('foo')
})
```

</details>

<details>

<summary><strong>TypeScript</strong> test</summary>

```typescript
import { head, pipe, tap, when } from 'rambda'

function notNull<T>(a: T | null | undefined): a is T {
  return a != null
}

describe('R.when', () => {
  it('happy', () => {
    const result = pipe(
      1,
      when(
        x => x > 2,
        x => x,
      ),
      tap(x => {
        x // $ExpectType number
      }),
      when(
        x => x > 2,
        x => String(x),
      ),
    )

    result // $ExpectType string | number
  })

	it('with assertion of type', () => {
    const result = pipe(
      [1, null, 2, 3],
      head,
      when(notNull, x => x + 1),
    )
    result // $ExpectType number | null
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
  const actual = zip(array1)(array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualA = zip([1, 2])(array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualB = zip(array1)(['A', 'B'])
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
    let a: Partial<any>
    const result = zip(array1)(array2)
    result[0][0] // $ExpectType number
    result[0][1] // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zip)

### zipWith

```typescript

zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
  list1: readonly T[],
): (list2: readonly U[]) => TResult[]
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
zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
  list1: readonly T[],
): (list2: readonly U[]) => TResult[];
```

</details>

<details>

<summary><strong>R.zipWith</strong> source</summary>

```javascript
import { take } from './take.js'

export function zipWith(fn, x) {
  return y =>
    take(x.length > y.length ? y.length : x.length)(x).map((xInstance, i) =>
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
import { pipe, zipWith } from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = pipe(
      list2,
      zipWith((x, y) => {
        x // $ExpectType number
        y // $ExpectType number
        return `${x}-${y}`
      }, list1),
    )

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipWith)

## ❯ CHANGELOG

10.0.1

- Fix issue with `R.unwind`/`R.pick` typings - [Issue #766](https://github.com/selfrefactor/rambda/issues/766)

10.0.0

This is major revamp of `Rambda` library:

- `R.pipe` is the recommended method for TypeScript chaining.

- All methods should be useful to work inside `R.pipe` chain. If method doesn't have clear use case inside `R.pipe`, it is removed as part of this revamp.

- There will be only one way to use each method. For example, `R.add` can be used only with `R.add(1)(2)`, i.e. it doesn't support `R.add(1, 2)`. This helps with testing and also with TypeScript definitions. This aligns with TypeScript focused approach of this library.

- Confusing methods are removed. For example, `R.cond` and `R.ifElse` are removed as their usage inside `R.piped` makes the whole chain less readable. Such logic should be part of your codebase, not part of external library.

- All methods that expect more than 1 input, will have to be called with `R.methodName(input1)(input2)` or `R.methodName(input1, input2)(input3)`. This is to make TypeScript definitions easier to maintain. 

- Optimize many methods to better work in TypeScript context with `R.pipe`. The focus was passing objects through the `R.pipe` chain.

- Add `R.pipe` supports up to 20 functions, i.e. chain can be 20 functions long.

- `R.chain` is renamed to `R.flatMap`
- `R.comparator` is renamed to `R.sortingFn`

- Remove following methods:

-- Lenses - `R.lens`, `R.lensProp`, `R.lensPath`, `R.view`, `R.set`, `R.over`
-- T, F
-- add
-- addIndex, addIndexRight
-- always
-- ap
-- applySpec
-- applyTo
-- assoc, assocPath, dissoc, dissocPath
-- binary
-- bind
-- call
-- collectBy
-- compose
-- composeWith
-- cond
-- converge
-- curry
-- difference, differenceWith
-- divide, multiply, subtract
-- endsWith/startsWith
-- flip
-- forEachObjIndexed
-- fromPairs
-- gte, lte, lt, gt
-- identical
-- ifElse
-- insert
-- juxt
-- length
-- mapObjIndexed
-- mergeAll, mergeLeft, mergeDeepLeft, mergeDeepRight
-- move
-- partitionIndexed
-- pickAll
-- pickBy
-- repeat
-- splitWhen
-- toLower/toUpper
-- unapply
-- unnest
-- update
-- without

- Add following methods:

-- R.pipeAsync
-- R.addProp
-- R.createObjectFromKeys
-- R.mapAsync
-- R.mapParallelAsync
-- R.ascend/R.descend
-- R.shuffle
-- R.permutations
-- R.compact
-- R.rejectObject
-- R.findNth
-- R.combinations
-- R.sortByPath
-- R.sortByPathDescending
-- R.sortByDescending
-- R.flattenObject
-- R.addPropToObjects

- Rename following methods:

-- modifyItemAtIndex -> adjust
-- checkObjectWithSpec -> where 
-- objectIncludes -> whereEq
-- modify -> modifyProp
-- chain -> flatMap
-- mapObjIndexed -> mapObject

_ Regarding using object as input with TypeScript in methods such as `R.map/filter` - this feature is no longer supported in TypeScript as it has multiple issues when using inside pipes. In JS, it still works as before. Following methods are affected:

-- R.map
-- R.mapIndexed
-- R.filter
-- R.reject

- Regarding using string as path input in `R.omit`, `R.pick` and `R.path` with TypeScript - now it require explicit definition of expected return type.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

- Remove use of `Dictionary` custom interface and use more appropriate `Record<PropertyType, ...>`

- Remove use of `Record<string, ...>` in favour of `Record<PropertyType, ...>`

- Add TypeScript definition to handle common case of `R.filter(Boolean)` that will turn `Array<T | undefined>` to `Array<T>`.

- Regarding using object with `R.forEach` in TypeScript - this is no longer supported. Again, JS version still works with objects.

- head/last - empty array as input will return `undefined`, but `never`
- assocPath - stop supporting curring of type `(x)(y)(z)`

- Stop support string inputs for some methods, since it was hard to correctly type them in TypeScript.

-- append/prepend

- Change `R.range` to work with descending order.

- Remove `rambda/immutable` as import option as it is hard to support in the new context.

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
-- mergeAll
-- modify
-- modifyPath
-- omit
-- partition
-- pluck
-- prepend
-- propEq
-- where
-- whereAny

- Sync with typing of `remeda`:

-- filter
-- reject
-- map
-- mapObject
-- toPairs
-- partition

- Publish to JSR registry - https://jsr.io/@rambda/rambda

- Replace Record<string> with Record<PropertyKey>

- Improve TypeScript definitions of:

-- objOf
-- pluck
-- mergeWith

- Change `Jest` with `Vitest`.

- Remove `Babel` dependency in `Rollup` build setup.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

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

- Fix bug with `R.differenceWith` when two arrays has same length - [Issue #757](https://github.com/selfrefactor/rambda/issues/757)

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
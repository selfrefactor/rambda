# Rambda

`Rambda` is TypeScript-focused utility library similar to `Remeda`, `Ramda` and `Radashi`. - [Documentation site](https://selfrefactor.github.io/rambda/#/)

![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/selfrefactor/rambda/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/selfrefactor/rambda.svg)](https://github.com/selfrefactor/rambda/graphs/contributors)

## {{bullet}} Example use

```javascript
import { pipe, filter, map } from 'rambda'

const result = pipe(
  [1, 2, 3, 4],
  filter(x => x > 2),
  map(x => x * 2),
)
//=> [6, 8]
```

You can test this example in <a href="https://rambda.now.sh/?const%20result%20%3D%20R.pipe(%0A%20%20%5B1%2C%202%2C%203%2C%204%5D%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%2C%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A)%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## {{bullet}} Rambda's features

## {{bullet}} Goals

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

:exclamation: IMPORTANT - all methods are tested to deliver correct types when they are part of `R.pipe/R.pipeAsync` chains.

In other words:

```typescript
R.filter(x => x > 1)([1,2,3])
```

might trigger TS error as it not the same as

```typescript

R.pipe([1,2,3], R.filter(x => x > 1)
```

### :exclamation: All methods are curried

There is one way to use `Rambda` methods and it is with currying, i.e. using `R.filter(fn, list)` will not work as it is inteded to be `R.filter(fn)(list)`.

The reason is that all methods are supposed to be used inside `R.pipe`. After all, building chains is the very base of functional programming. 

Of course, there is value in supporting the case where you can pass all inputs at once, but I find that the price in terms of maintainability is not worth it.

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

### Differences between Rambda and Ramda

Up until version `9.4.2`, the aim of Rambda was to match as much as possible the Ramda API.

You can find documentation site of **Rambda** version **9.4.2** is [here](https://selfrefactor.github.io/rambda-v9/).

From version `10.0.0` onwards, **Rambda** is no longer aiming to be drop-in replacement for *Ramda*.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-features)

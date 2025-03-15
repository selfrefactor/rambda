# Rambda

`Rambda` is TypeScript-focused utility library similar to `Remeda` and `Lodash`. 

Initially it started as faster alternative to functional programming library `Ramda`, but in order to address many TypeScript issues, now `Rambda` takes a separate path. - [Documentation](https://selfrefactor.github.io/rambda/#/)

![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/selfrefactor/rambda/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/selfrefactor/rambda.svg)](https://github.com/selfrefactor/rambda/graphs/contributors)

## {{bullet}} Example use

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

## {{bullet}} Rambda's features

### {{bullet}} TypeScript focused

Some generic methods such as `curry` and `assoc` is not easy to be expressed in TypeScript. For this reason `Rambda` omits such methods.

Mixing `Functional Programming` and `TypeScript` is not easy. `Remeda` and `Radashi` libraries are good examples of how this can be achieved.

### {{bullet}} Focus on `R.pipe`

All methods are meant to be used as part of `R.pipe` chain:

- This is the main purpose of functional programming, i.e. to pass data through a chain of functions.

- Having `R.pipe(input, ...fns)` helps TypeScript to infer the types of the input and the output.

### {{bullet}} One way to use each method

Because of the focus on `R.pipe`, there is only one way to use each method. For example, `R.map` can be used only with `R.map(fn)(list)`, i.e. it doesn't support `R.map(fn, list)`. This helps with testing and also with TypeScript definitions.

### {{bullet}} Keep only powerful methods

The idea is to give `TypeScript` users only the most useful methods and let them implement the rest. No magic logic methods that are hard to remember. You shouldn't need to read the documentation to understand what a method does. Its name and its signature should be enough.

- No `R.cond` or `R.ifElse` as they make the chain less readable.

- No `R.length` as it adds very little value.

- No `R.difference` as user must remember the order of the inputs, i.e. which is compared to and which is compared against.

### {{bullet}} Immutable TS definitions

You can use immutable version of Rambda definitions, which is linted with ESLint `functional/prefer-readonly-type` plugin.

```
import {add} from 'rambda/immutable'
```

### {{bullet}} Deno support 

```
import * as R from "https://deno.land/x/rambda/mod.ts";

R.add(1)('foo') // => will trigger warning in VSCode as it should
```

### {{bullet}} Dot notation for `R.path`

Standard usage of `R.path` is `R.path(['a', 'b'])({a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

Please note that since path input is turned into array, i.e. if you want `R.path(['a','1', 'b'], {a: {'1': {b: 2}}})` to return `2`, you will have to pass array path, not string path. If you pass `a.1.b`, it will turn path input to `['a', 1, 'b']`.

### {{bullet}} Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-features)

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try the above <strong>R.add</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
```

</details>

foo

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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.all</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.append(x%2C%20'cherry_')%2C%0A%20%20R.append(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'cherry_foo'%2C%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D%5D">Try the above <strong>R.append</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, listOrString: ReadonlyArray<T>): T[];
append<T>(x: T): <T>(listOrString: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20spec%20%3D%20%7B%0A%20%20name%3A%20R.path('deeply.nested.firstname')%0A%7D%0Aconst%20json%20%3D%20%7B%0A%20%20deeply%3A%20%7B%0A%20%20%20nested%3A%20%7B%0A%20%20%20%20%20%20firstname%3A%20'barry'%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Aconst%20result%20%3D%20R.applySpec(spec%2C%20json)%20%2F%2F%20%3D%3E%20%7B%20name%3A%20'barry'%20%7D%0A%0A%2F%2F%20Second%20example%0Aconst%20getMetrics%20%3D%20R.applySpec(%7B%0A%20%20sum%3A%20R.add%2C%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0A%7D)%3B%0AgetMetrics(2%2C%204)%3B%20%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D">Try the above <strong>R.applySpec</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
```

</details>

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20target%20%3D%20'-bar'%0A%0Aconst%20result%20%3D%20R.endsWith(target%2C%20str)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.endsWith</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, str: string): boolean;
endsWith(target: string): (str: string) => boolean;
```

</details>

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listOfPairs%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(listOfPairs)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.fromPairs</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };
```

</details>

foo

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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try the above <strong>R.groupWith</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.has('a'%2C%20obj)%2C%0A%20%20R.has('b'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.has</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A%201%7D%3B%0AR.identical(obj%2C%20obj)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try the above <strong>R.identical</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
identical<T>(a: T, b: T): boolean;
identical<T>(a: T): (b: T) => boolean;
```

</details>

foo

### identity




```typescript
identity<T>(input: T): T
```


It just passes back the supplied `input` argument.



```javascript
R.identity(7) // => 7
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try the above <strong>R.identity</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
identity<T>(input: T): T;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%3E10%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20%5B%20fn(8)%2C%20fn(18)%20%5D%0A%2F%2F%20%3D%3E%20%5B80%2C%2036%5D">Try the above <strong>R.ifElse</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
ifElse(condition: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;
```

</details>

foo

### inc




```typescript
inc(x: number): number
```


It increments a number.



```javascript
R.inc(1) // => 2
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try the above <strong>R.inc</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
inc(x: number): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%7Bid%3A%2010%7D%2C%20%7Bid%3A%2020%7D%20%5D%0A%0Aconst%20withFunction%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20list%0A)%0Aconst%20withString%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20list%0A)%0Aconst%20result%20%3D%20%5B%0A%20%20withFunction%2C%20%0A%20%20R.equals(withFunction%2C%20withString)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%7B%2010%3A%20%7Bid%3A%2010%7D%2C%2020%3A%20%7Bid%3A%2020%7D%20%7D%2C%20true%20%5D">Try the above <strong>R.indexBy</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: string, list: ReadonlyArray<T>): { [key: string]: T };
indexBy<T>(condition: (x: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
indexBy<T>(condition: string): (list: ReadonlyArray<T>) => { [key: string]: T };
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.indexOf(2%2C%20list)%2C%0A%20%20R.indexOf(0%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%20-1%5D">Try the above <strong>R.indexOf</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number;
indexOf<T>(valueToFind: T): (list: ReadonlyArray<T>) => number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.init(%5B1%2C%202%2C%203%5D)%20%2C%20%0A%20%20R.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try the above <strong>R.init</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
init<T>(listOrString: ReadonlyArray<T>): T[];
init(listOrString: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try the above <strong>R.intersection</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[];
intersection<T>(listA: ReadonlyArray<T>): (listB: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%20'%7C'%2C%201%2C%20'%7C'%2C%202%2C%20'%7C'%2C%203%5D">Try the above <strong>R.intersperse</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.is(String%2C%20'foo')%2C%20%20%0A%20%20R.is(Array%2C%201)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.is</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
is(targetPrototype: any, x: any): boolean;
is(targetPrototype: any): (x: any) => boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isEmpty('')%2C%0A%20%20R.isEmpty(%7B%20x%20%3A%200%20%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.isEmpty</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isNil(null)%2C%0A%20%20R.isNil(1)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.isNil</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
```

</details>

foo

### join




```typescript
join(x: string, xs: ReadonlyArray<any>): string
```


It returns a string representing `list` instances joined with `glue`.



```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try the above <strong>R.join</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
join(x: string, xs: ReadonlyArray<any>): string;
join(x: string): (xs: ReadonlyArray<any>) => string;
```

</details>

foo

### keys




```typescript
keys<T extends object>(x: T): (keyof T)[]
```


It applies `Object.keys` over `x` and returns its keys.



```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try the above <strong>R.keys</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
keys<T>(x: T): string[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.last(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.last('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20'o'%5D">Try the above <strong>R.last</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
last<T>(listOrString: T[]): T | undefined;
last(listOrString: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%0Aconst%20result%20%3D%20%5B%0A%20%20R.lastIndexOf(2%2C%20list)%2C%0A%20%20R.lastIndexOf(4%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%20-1%5D">Try the above <strong>R.lastIndexOf</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;
lastIndexOf<T>(target: T): (list: ReadonlyArray<T>) => number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.length(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20R.length('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%203%5D">Try the above <strong>R.length</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(listOrString: ReadonlyArray<T>): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lens(R.prop('x')%2C%20R.assoc('x'))%3B%0A%0AR.view(xLens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0AR.set(xLens%2C%204%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.over(xLens%2C%20R.negate%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try the above <strong>R.lens</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0Aconst%20headLens%20%3D%20R.lensIndex(0)%0A%0AR.view(headLens%2C%20list)%20%2F%2F%20%3D%3E%20'a'%0AR.set(headLens%2C%20'x'%2C%20list)%20%2F%2F%20%3D%3E%20%5B'x'%2C%20'b'%2C%20'c'%5D%0AR.over(headLens%2C%20R.toUpper%2C%20list)%20%2F%2F%20%3D%3E%20%5B'A'%2C%20'b'%2C%20'c'%5D">Try the above <strong>R.lensIndex</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lensPath%20%3D%20R.lensPath(%5B'x'%2C%200%2C%20'y'%5D)%0Aconst%20input%20%3D%20%7Bx%3A%20%5B%7By%3A%202%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.view(lensPath%2C%20input)%20%2F%2F%3D%3E%202%0A%0AR.set(lensPath%2C%201%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%201%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.over(xHeadYLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%3D%3E%20%7Bx%3A%20%5B%7By%3A%20-2%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D">Try the above <strong>R.lensPath</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
lensPath(path: RamdaPath): Lens;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20xLens%20%3D%20R.lensProp('x')%3B%0Aconst%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0A%0AR.view(xLens%2C%20input)%20%2F%2F%20%3D%3E%201%0A%0AR.set(xLens%2C%204%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0A%0AR.over(xLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try the above <strong>R.lensProp</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(prop: string): {
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(x%2C%20i)%20%3D%3E%20(x%20*%202)%20%2B%20i%0Aconst%20fnWhenObject%20%3D%20(val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20list%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%20%0A%20%20R.map(fn%2C%20list)%2C%0A%20%20R.map(fnWhenObject%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B2%2C%205%5D%2C%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D%5D">Try the above <strong>R.map</strong> example in Rambda REPL</a>



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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.match('a'%2C%20'foo')%2C%0A%20%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B%5D%2C%20%5B'ba'%2C%20'na'%2C%20'na'%5D%5D">Try the above <strong>R.match</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
match(regExpression: RegExp, str: string): any[];
match(regExpression: RegExp): (str: string) => any[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.max(5%2C%207)%2C%20%20%0A%20%20R.max('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B7%2C%20'foo'%5D">Try the above <strong>R.max</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
max<T extends Ord>(x: T, y: T): T;
max<T extends Ord>(x: T): (y: T) => T;
```

</details>

foo

### maxBy




```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```


It returns the greater value between `x` and `y` according to `compareFn` function.



```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try the above <strong>R.maxBy</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
maxBy<T>(compareFn: (input: T) => Ord): FToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

foo

### mean




```typescript
mean(list: ReadonlyArray<number>): number
```


It returns the mean value of `list` input.



```javascript
R.mean([ 2, 7 ])
// => 4.5
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mean(%5B%202%2C%207%20%5D)%0A%2F%2F%20%3D%3E%204.5">Try the above <strong>R.mean</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: ReadonlyArray<number>): number;
```

</details>

foo

### median




```typescript
median(list: ReadonlyArray<number>): number
```


It returns the median value of `list` input.



```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.median(%5B%207%2C%202%2C%2010%2C%209%20%5D)%20%2F%2F%20%3D%3E%208">Try the above <strong>R.median</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: ReadonlyArray<number>): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.merge(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try the above <strong>R.merge</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
merge<T1, T2>(target: T1, newProps: T2): Merge<T2, T1>;
merge<T1>(target: T1): <T2>(newProps: T2) => Merge<T2, T1>;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.min(5%2C%207)%2C%20%20%0A%20%20R.min('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%20'bar'%5D">Try the above <strong>R.min</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
min<T extends Ord>(x: T, y: T): T;
min<T extends Ord>(x: T): (y: T) => T;
```

</details>

foo

### minBy




```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T
```


It returns the lesser value between `x` and `y` according to `compareFn` function.



```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20compareFn%20%3D%20Math.abs%0A%0AR.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try the above <strong>R.minBy</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
minBy<T>(compareFn: (input: T) => Ord): FToolbelt.Curry<(x: T, y: T) => T>;
```

</details>

foo

### modulo




```typescript
modulo(x: number, y: number): number
```


Curried version of `x%y`.



```javascript
R.modulo(17, 3) // => 2
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modulo(17%2C%203)%20%2F%2F%20%3D%3E%202">Try the above <strong>R.modulo</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
modulo(x: number, y: number): number;
modulo(x: number): (y: number) => number;
```

</details>

foo

### multiply




```typescript
multiply(x: number, y: number): number
```


Curried version of `x*y`.



```javascript
R.multiply(2, 4) // => 8
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(2%2C%204)%20%2F%2F%20%3D%3E%208">Try the above <strong>R.multiply</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
multiply(x: number, y: number): number;
multiply(x: number): (y: number) => number;
```

</details>

foo

### negate




```typescript
negate(x: number): number
```



```javascript
R.negate(420)// => -420
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.negate(420)%2F%2F%20%3D%3E%20-420">Try the above <strong>R.negate</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
negate(x: number): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%206%0A%0Aconst%20result%20%3D%20R.none(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.none</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
none<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
```

</details>

foo

### not




```typescript
not(input: any): boolean
```


It returns a boolean negated version of `input`.



```javascript
R.not(false) // true
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.not(false)%20%2F%2F%20true">Try the above <strong>R.not</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
not(input: any): boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20str%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nth(2%2C%20list)%2C%0A%20%20R.nth(6%2C%20list)%2C%0A%20%20R.nth(0%2C%20str)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20undefined%2C%20'f'%5D">Try the above <strong>R.nth</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
nth<T>(index: number, list: ReadonlyArray<T>): T | undefined;
nth(index: number): <T>(list: ReadonlyArray<T>) => T | undefined;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20obj)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try the above <strong>R.omit</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;
```

</details>

foo

### over




```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```


It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.



```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20headLens%20%3D%20R.lensIndex(0)%0A%20%0AR.over(headLens%2C%20R.toUpper%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%3D%3E%20%5B'FOO'%2C%20'bar'%2C%20'baz'%5D">Try the above <strong>R.over</strong> example in Rambda REPL</a>



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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20(title%2C%20firstName%2C%20lastName)%20%3D%3E%20%7B%0A%20%20return%20title%20%2B%20'%20'%20%2B%20firstName%20%2B%20'%20'%20%2B%20lastName%20%2B%20'!'%0A%7D%0A%0Aconst%20canPassAnyNumberOfArguments%20%3D%20partial(fn%2C%20'Hello')%0Aconst%20finalFn%20%3D%20canPassAnyNumberOfArguments('Foo')%0A%0AfinalFn('Bar')%20%2F%2F%20%3D%3E%20%20'Hello%2C%20Foo%20Bar!'">Try the above <strong>R.partial</strong> example in Rambda REPL</a>



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

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%201%7D%7D%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.path(pathToSearch%2C%20obj)%2C%0A%20%20R.path(pathToSearchList%2C%20obj)%2C%0A%20%20R.path('a.b.c.d'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20undefined%5D">Try the above <strong>R.path</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
path<T>(pathToSearch: string | string[], obj: any): T | undefined;
path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%201%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearch%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearchList%2C%20obj)%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20'a.b.c'%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20'DEFAULT_VALUE'%5D">Try the above <strong>R.pathOr</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): FToolbelt.Curry<(a: Path, b: any) => T>;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%20%7B%0A%20%20%20%20%20%20c%20%3A%201%2C%0A%20%20%20%20%20%20d%20%3A%202%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.paths(%5B%0A%20%20'a.b.c'%2C%0A%20%20'a.b.c.d'%2C%0A%20%20'a.b.c.d.e'%2C%0A%5D%2C%20obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20undefined%5D">Try the above <strong>R.paths</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20obj)%2C%0A%20%20R.pick(propsToPickList%2C%20obj)%2C%0A%20%20R.pick('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pick('bar'%2C%20obj)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.pick</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo%2Cbar'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%2C%20'bar'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pickAll(propsToPick%2C%20obj)%2C%0A%20%20R.pickAll(propsToPickList%2C%20obj)%2C%0A%20%20R.pickAll('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pickAll('bar'%2C%20obj)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Bbar%3A%20undefined%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.pickAll</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: ReadonlyArray<string>, obj: T): U;
pickAll(propsToPick: ReadonlyArray<string>): <T, U>(obj: T) => U;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try the above <strong>R.pipe</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
pipe<T1>(fn0: () => T1): () => T1;
pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0AR.pluck(list%2C%20property)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.pluck</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<T>(property: number, list: ReadonlyArray<T>): T;
pluck<K extends keyof T, T>(property: K, list: ReadonlyArray<T>): T[K][];
pluck(property: number): <T>(list: ReadonlyArray<T>) => T;
pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.prepend(x%2C%20'_cherry')%2C%0A%20%20R.prepend(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'foo_cherry'%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D%5D">Try the above <strong>R.prepend</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[];
prepend<T>(x: T): (listOrString: ReadonlyArray<T>) => T[];
```

</details>

foo

### product




```typescript
product(list: ReadonlyArray<number>): number
```



```javascript
R.product([ 2, 3, 4 ])
// => 24)
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.product(%5B%202%2C%203%2C%204%20%5D)%0A%2F%2F%20%3D%3E%2024)">Try the above <strong>R.product</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: ReadonlyArray<number>): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20obj)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20secondObj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.propEq</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
propEq(propToFind: string | number): {
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A%20'foo'%7D%0Aconst%20property%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propIs(String%2C%20property%2C%20obj)%2C%0A%20%20R.propIs(Number%2C%20property%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.propIs</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
propIs<P extends keyof T, T>(target: any, property: P, obj: T): boolean;
propIs<P extends string>(target: any, property: P, obj): <T>(obj: Record<P, T>) => boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property%2C%20obj)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try the above <strong>R.propOr</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T, U, V>(defaultValue: T, property: string, obj: U): V;
propOr<T>(defaultValue: T, property: string): <U, V>(obj: U) => V;
propOr<T>(defaultValue: T): <U, V>(property: string, obj: U) => V;
```

</details>

foo

### range




```typescript
range(start: number, end: number): number[]
```


It returns list of numbers between `start`(inclusive) to `end`(exclusive) numbers.



```javascript
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%205)%0A%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try the above <strong>R.range</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
range(start: number, end: number): number[];
range(start: number): (end: number) => number[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20initialValue%20%3D%2010%0Aconst%20reducer%20%3D%20(prev%2C%20current)%20%3D%3E%20prev%20*%20current%0A%0Aconst%20result%20%3D%20R.reduce(reducer%2C%20initialValue%2C%20list)%0A%2F%2F%20%3D%3E%2060">Try the above <strong>R.reduce</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: ReadonlyArray<T>) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: ReadonlyArray<T>) => TResult;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.reject</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
reject<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
reject<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
reject<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

foo

### repeat




```typescript
repeat<T>(x: T, timesToRepeat: number): T[]
```


It returns a list of `x` input repeated `timesToRepeat` input.



```javascript
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%203)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%2C%20'foo'%5D">Try the above <strong>R.repeat</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
repeat<T>(x: T, timesToRepeat: number): T[];
repeat<T>(x: T): (timesToRepeat: number) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20strOrRegex%20%3D%20%2Fo%2Fg%0A%0Aconst%20result%20%3D%20R.replace(strOrRegex%2C%20'%7C0%7C'%2C%20'foo')%0A%2F%2F%20%3D%3E%20'f%7C0%7C%7C0%7C'">Try the above <strong>R.replace</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0Aconst%20xLens%20%3D%20R.lensProp('x')%0A%0AR.set(xLens%2C%204%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0AR.set(xLens%2C%208%2C%20input)%20%2F%2F%3D%3E%20%7Bx%3A%208%2C%20y%3A%202%7D">Try the above <strong>R.set</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T;
set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(replacer: U, obj: T) => T;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20str%20%3D%20'FOO_BAR'%0Aconst%20from%20%3D%201%0Aconst%20to%20%3D%204%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.slice(str%2C%20to%2C%20list)%2C%0A%20%20R.slice(from%2C%20to%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'OO_'%2C%20%5B1%2C%202%2C%203%5D%5D">Try the above <strong>R.slice</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
slice(from: number, to: number, list: string): string;
slice<T>(from: number, to: number, list: T[]): T[];
slice(frp,: number, to: number): {
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20(x%2C%20y)%20%3D%3E%20%7B%0A%20%20return%20x.a%20%3E%20y.a%20%3F%201%20%3A%20-1%0A%7D%0A%0Aconst%20result%20%3D%20R.sort(list%2C%20sortFn)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.sort</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20x%20%3D%3E%20x.a%0A%0Aconst%20result%20%3D%20R.sortBy(list%2C%20sortFn)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.sortBy</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo%7Cbar%7Cbaz'%0Aconst%20separator%20%3D%20%7C'%0Aconst%20result%20%3D%20R.split(separator%2C%20str))%0A%2F%2F%20%3D%3E%20%5B%20'foo'%2C%20'bar'%2C%20'baz'%20%5D">Try the above <strong>R.split</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];
split(separator: string | RegExp, str: string): string[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.startsWith('foo'%2C%20str)%2C%0A%20%20R.startsWith('bar'%2C%20str)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try the above <strong>R.startsWith</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sum(%5B1%2C%202%2C%203%2C%204%2C%205%5D)%20%0A%2F%2F%20%3D%3E%2015">Try the above <strong>R.sum</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: ReadonlyArray<number>): number;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20y%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20symmetricDifference(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%205%2C%206%20%5D">Try the above <strong>R.symmetricDifference</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
symmetricDifference<T>(x: ReadonlyArray<T>): <T>(y: ReadonlyArray<T>) => T[];
```

</details>

foo

### T




```typescript
T(): boolean
```



```javascript
R.T() 
// => true
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.T()%20%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.T</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
T(): boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.tail(%5B1%2C%202%2C%203%5D)%2C%20%20%0A%20%20R.tail('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'oo'%5D">Try the above <strong>R.tail</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
tail<T>(listOrString: ReadonlyArray<T>): T[];
tail(listOrString: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.take(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.take(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try the above <strong>R.take</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
take(howMany: number, listOrString: string): string;
take<T>(howMany: number): {
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.takeLast(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.takeLast(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'ar'%5D">Try the above <strong>R.takeLast</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
takeLast(howMany: number, listOrString: string): string;
takeLast<T>(howMany: number): {
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(list)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try the above <strong>R.tap</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
tap<T>(fn: (a: T) => any, x: T): T;
tap<T>(fn: (a: T) => any): (x: T) => T;
```

</details>

foo

### test




```typescript
test(regExpression: RegExp): (str: string) => boolean
```


It determines whether `str` matches `regExpression`.



```javascript
R.test(/^f/, 'foo')
// => true
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try the above <strong>R.test</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20howMany%20%3D%205%0A%0AR.times(fn%2C%20howMany)%0A%2F%2F%3D%3E%20%5B0%2C%202%2C%204%2C%206%2C%208%5D">Try the above <strong>R.times</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
```

</details>

foo

### toLower




```typescript
toLower(str: string): string
```



```javascript
R.toLower('FOO')
// => 'foo'
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%0A%2F%2F%20%3D%3E%20'foo'">Try the above <strong>R.toLower</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
toLower(str: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.toPairs</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];
```

</details>

foo

### toString




```typescript
toString<T>(x: T): string
```



```javascript
R.toString([1, 2]) 
// => '1,2'
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%0A%2F%2F%20%3D%3E%20'1%2C2'">Try the above <strong>R.toString</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
toString<T>(x: T): string;
```

</details>

foo

### toUpper




```typescript
toUpper(str: string): string
```



```javascript
R.toUpper('foo')
// => 'FOO'
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%0A%2F%2F%20%3D%3E%20'FOO'">Try the above <strong>R.toUpper</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
toUpper(str: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B10%2C%2011%5D%2C%20%5B20%5D%2C%20%5B%5D%2C%20%5B30%2C%2031%2C%2032%5D%5D%0Aconst%20expected%20%3D%20%5B%5B10%2C%2020%2C%2030%5D%2C%20%5B11%2C%2031%5D%2C%20%5B32%5D%5D%0A%0Aconst%20result%20%3D%20R.transpose(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.transpose</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: T[][]): T[][];
```

</details>

foo

### trim




```typescript
trim(str: string): string
```



```javascript
R.trim('  foo  ') 
// => 'foo'
```


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%0A%2F%2F%20%3D%3E%20'foo'">Try the above <strong>R.trim</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
trim(str: string): string;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20list%20%3D%20%5B1%2C%201%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A1%7D%5D%0A%0AR.uniq(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try the above <strong>R.uniq</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(list: ReadonlyArray<T>): T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20uniqFn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(uniqFn%2C%20list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try the above <strong>R.uniqWith</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20index%20%3D%202%0Aconst%20newValue%20%3D%2088%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A%0Aconst%20result%20%3D%20update(index%2C%20newValue%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%2088%2C%204%2C%205%5D">Try the above <strong>R.update</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[];
update<T>(index: number, newValue: T): (list: ReadonlyArray<T>) => T[];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A2%7D%0A%0AR.values(obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try the above <strong>R.values</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20lens%20%3D%20R.lensProp('x')%0A%0AR.view(lens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%201%0AR.view(lens%2C%20%7Bx%3A%204%2C%20y%3A%202%7D)%20%2F%2F%3D%3E%204">Try the above <strong>R.view</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (target: T) => U;
view<T, U>(lens: Lens, target: T): U;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20xor(true%2C%20true)%2C%0A%20%20xor(false%2C%20false)%2C%0A%20%20xor(false%2C%20true)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%5D">Try the above <strong>R.xor</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
xor(x: boolean, y: boolean): boolean;
xor(y: boolean): (y: boolean) => boolean;
```

</details>

foo

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


<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B...x%2C%203%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try the above <strong>R.zip</strong> example in Rambda REPL</a>



<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[];
zip<K>(x: ReadonlyArray<K>): <V>(y: ReadonlyArray<V>) => KeyValuePair<K, V>[];
```

</details>

foo

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
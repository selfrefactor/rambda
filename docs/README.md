[![Build Status](https://img.shields.io/travis/selfrefactor/rambda.svg)](https://travis-ci.org/selfrefactor/rambda)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)

# Rambda

Faster alternative to **Ramda** in just 10kB - [Documentation](https://selfrefactor.github.io/rambda/#/)

## Argumentation

I admire ***Ramda*** as it is great library in what it does, but I used only small part of what it offers.

I wanted to optimize the size of my bundle, but I had already developed Ramda habits.

This lead me to the idea to recreate the funtionality of some Ramda methods and export that as a library.

## Example use

```
const R = require("rambda")
const result = R.compose(
  R.filter(val => val>2),
  R.flatten,
)([ [1], [2], [3], 4])
console.log(result) // => [3,4]
```

## Install

- Use **npm i rambda** for Webpack and Node.js

- For browser usage include in your HTML

```
https://cdnjs.cloudflare.com/ajax/libs/rambda/0.7.0/webVersion.js
```

## Differences between Rambda and Ramda
Rambda shadows only small part of the Ramda's API.

A few things to note:

- Rambda's methods should be compatible with most of the basic Ramda's methods.
For more complex and Ramda specific methods(such as **R.__**), you should expect a mismatch.

- Rambda's **type** detect async functions. The returned value is `"Async"`

- Rambda's **map/filter** work only for arrays, while Ramda's **map/filter** accept also objects.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does.

- Rambda's **path** accepts both string and array as object path.

- **Rambda** is tested for compatability with **Ramda.flip**, as this method could be useful in some cases.

> If you need more **Ramda** methods, than what **Rambda** offers, you may check the extended version of Rambda - [Rambdax](https://github.com/selfrefactor/rambdax)

## API

#### add

> add(a: Number, b: Number): Number

```javascript
R.add(2, 3) //=>  5
```

#### adjust

> adjust(replaceFn: Function, i:Number, arr:Array): Array

- Replaces `i` index in `arr` with the result of `replaceFn(arr[i])`

```javascript
R.adjust(a => a + 1, 0, [0, 100]) //=> [1, 100]
```

#### any

> any(condition: Function, arr: Array): Boolean

- Returns true if at least one member of `arr` returns true, when passed to the `condition` function

```javascript
R.any(a => a * a > 8)([1, 2, 3]) //=> true
R.any(a => a * a > 10)([1, 2, 3]) //=> false
```

#### append

> append(valueToAppend: any, arr: Array): Array

```javascript
R.append('foo', ['bar', 'baz']) //=> ['foo', 'bar', 'baz']
```

#### compose

> compose(fn1: Function, ... , fnN: Function): any

Performs right-to-left function composition
```
const result = R.compose(
  R.map(a => a*2)
  R.filter(val => val>2),
)([1, 2, 3, 4])
console.log(result) // => [6, 8]
```

#### contains

> contains(valueToFind: any, arr: Array): Boolean

Returns true if `valueToFind` is part of `arr`

```javascript
R.contains(2, [1, 2]) //=> true
R.contains(3, [1, 2]) //=> false
```

#### curry

> curry(fn: Function): Function

Returns curried version of `fn`

```javascript
const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)
g(4) // => 10
```

#### defaultTo

> defaultTo(defaultArgument: T, inputArgument: any): T

Returns `defaultArgument` if `inputArgument` is `undefined` or the type of `inputArgument` is different of the type of `defaultArgument`.

Returns `inputArgument` in any other case.

```javascript
R.defaultTo('foo', undefined) //=> 'foo'
R.defaultTo('foo')('bar') //=> 'bar'
R.defaultTo('foo')(1) //=> 'foo'
```

#### drop

> drop(howManyToDrop: Number, arrOrStr: Array|String): Array|String

Returns `arrOrStr` with `howManyToDrop` items dropped from the left

```javascript
R.drop(1, ['foo', 'bar', 'baz']) //=> ['bar', 'baz']
R.drop(1, 'foo')  //=> 'oo'
```

#### dropLast

> dropLast(howManyToDrop: Number, arrOrStr: Array|String): Array|String

Returns `arrOrStr` with `howManyToDrop` items dropped from the right

```javascript
R.dropLast(1, ['foo', 'bar', 'baz']) //=> ['foo', 'bar']
R.dropLast(1, 'foo')  //=> 'fo'
```

#### equals

> equals(a: any, b: any): Boolean

- Returns equality match between `a` and `b`

Doesn't handles cyclical data structures

```javascript
R.equals(1, 1) //=> true
R.equals({}, {}) //=> false
R.equals([1, 2, 3], [1, 2, 3]) //=> true
```

#### filter

> filter(filterFn: Function, arr: Array): Array

Filters `arr` throw boolean returning `filterFn`

```javascript
const filterFn = a => a % 2 === 0

R.filter(filterFn, [1, 2, 3, 4]) //=> [2, 4]
```

#### find

> find(findFn: Function, arr: Array<T>): T|undefined

Returns `undefined` or the first element of `arr` satisfying `findFn`

```javascript
const findFn = a => R.type(a.foo) === "Number"
const arr = [{foo: "bar"}, {foo: 1}]
R.find(findFn, arr) //=> {foo: 1}
```

#### findIndex

> findIndex(findFn: Function, arr: Array): Number

Returns `-1` or the index of the first element of `arr` satisfying `findFn`

```javascript
const findFn = a => R.type(a.foo) === "Number"
const arr = [{foo: "bar"}, {foo: 1}]
R.find(findFn, arr) //=> 1
```

#### flatten

> flatten(arr: Array): Array

```javascript
R.flatten([ 1, [ 2, [ 3 ] ] ]
//=> [ 1, 2, 3 ]
```

#### has

> has(prop: String, obj: Object): Boolean

- Returns `true` if `obj` has property `prop`

```javascript
R.has("a", {a: 1}) //=> true
R.has("b", {a: 1}) //=> false
```

#### head

> head(arrOrStr: Array|String): any

- Returns the first element of `arrOrStr`

```javascript
R.head([1, 2, 3]) //=> 1
R.head('foo') //=> 'f'
```

#### indexOf

> indexOf(valueToFind: any, arr: Array): Number

Returns `-1` or the index of the first element of `arr` equal of `valueToFind`

```javascript
R.indexOf(1, [1, 2]) //=> 0
```

#### init

> init(arrOrStr: Array|String): Array|String

- Returns all but the last element of `arrOrStr`

```javascript
R.init([1, 2, 3])  //=> [1, 2]
R.init('foo')  //=> 'fo'
```

#### join

> join(separator: String, arr: Array): String

```javascript
R.join('-', [1, 2, 3])  //=> '1-2-3'
```

#### last

> last(arrOrStr: Array|String): any

- Returns the last element of `arrOrStr`

```javascript
R.last(['foo', 'bar', 'baz']) //=> 'baz'
R.last('foo') //=> 'o'
```

#### length

> length(arrOrStr: Array|String): Number

```javascript
R.length([1, 2, 3]) //=> 3
```

#### map

> map(mapFn: Function, arr: Array): Array

Returns the result of looping through `arr` with `mapFn`

```javascript
const mapFn = x => x * 2;
R.map(mapFn, [1, 2, 3]) //=> [2, 4, 6]
```

#### match

> map(regExpression: Regex, str: String): Array

```javascript
R.match(/([a-z]a)/g, 'bananas') //=> ['ba', 'na', 'na']
```

#### merge

> merge(a: Object, b: Object)

Returns result of `Object.assign({}, a, b)`

```javascript
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
//=> { 'foo': 7, 'bar': 1 }
```

#### omit

> omit(propsToOmit: Array<String>, obj: Object): Object

- Returns a partial copy of an `obj` with omitting `propsToOmit`

```javascript
R.omit(['a', 'd'], {a: 1, b: 2, c: 3}) //=> {b: 2, c: 3}
```

#### path

> path(pathToSearch: Array<String>|String, obj: Object): any

- Retrieve the value at `pathToSearch` in object `obj`

```javascript
R.path('a.b', {a: {b: 2}}) //=> 2
R.path(['a', 'b'], {a: {b: 2}}) //=> 2
R.path(['a', 'c'], {a: {b: 2}}) //=> undefined
```

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
curried({b: 3, c: 10}) //=> 16
```
- Note that `partialCurry` is method specific for **Rambda** and the method is not part of **Ramda**'s API

- You can read my argumentation for creating *partialCurry* [here](https://selfrefactor.gitbooks.io/blog/content/argumenting-rambdas-curry.html)

#### pick

> pick(propsToPick: Array<String>, obj: Object): Object

- Returns a partial copy of an `obj` containing only `propsToPick` properties

```
R.pick(['a', 'c'], {a: 1, b: 2}) //=> {a: 1}
```

#### pluck

> pluck(property: String, arr: Array): Array

- Returns list of the values of `property` taken from the objects in array of objects `arr`

```
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) //=> [1, 2]
```

#### prepend

> prepend(valueToPrepend: any, arr: Array): Array

```javascript
R.prepend('foo', ['bar', 'baz']) //=> ['foo', 'bar', 'baz']
```

#### prop

> prop(propToFind: String, obj: Object): any

Returns `undefined` or the value of property `propToFind` in `obj`

```javascript
R.prop('x', {x: 100}) //=> 100
R.prop('x', {a: 1}) //=> undefined
```

#### propEq

> propEq(propToFind: String, valueToMatch: any, obj: Object): Boolean

Returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`

```javascript
const propToFind = "foo"
const valueToMatch = 0
R.propEq(propToFind, valueToMatch)({foo: 0}) //=> true
R.propEq(propToFind, valueToMatch)({foo: 1}) //=> false
```

#### range

> range(start: Number, end: Number): Array<Number>

- Returns a array of numbers from `start`(inclusive) to `end`(exclusive)

```javascript
R.range(0, 2)   //=> [0, 1]
```

#### repeat

> repeat(valueToRepeat: T, num: Number): Array<T>

```javascript
R.repeat('foo', 2) //=> ['foo', 'foo']
```

#### replace

> replace(strOrRegex: String|Regex, replacer: String, str: String): String

Replace `strOrRegex` found in `str` with `replacer`

```javascript
R.replace('foo', 'bar', 'foo foo') //=> 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') //=> 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') //=> 'bar bar'
```

#### sort

> sort(sortFn: Function, arr: Array): Array

Returns copy of `arr` sorted by `sortFn`

`sortFn` must return `Number`

```javascript
const sortFn = (a, b) => a - b
R.sort(sortFn, [3, 1, 2]) //=> [1, 2, 3]
```

#### sortBy

> sortBy(sortFn: Function, arr: Array): Array

Returns copy of `arr` sorted by `sortFn`

`sortFn` must return value for comparison

```javascript
const sortFn = obj => obj.foo
R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])
//=> [{foo: 0}, {foo: 1}]
```

#### split

> split(separator: String, str: String): Array

```javascript
R.split('-', 'a-b-c') //=> ['a', 'b', 'c']
```

#### splitEvery

> splitEvery(sliceLength: Number, arrOrString: Array|String): Array

- Splits `arrOrStr` into slices of `sliceLength`

```javascript
R.splitEvery(2, [1, 2, 3]) //=> [[1, 2], [3]]
R.splitEvery(3, 'foobar') //=> ['foo', 'bar']
```

#### subtract

> subtract(a: Number, b: Number): Number

Returns `a` minus `b`

```javascript
R.subtract(3, 1) //=> 2
```

#### tail

> tail(arrOrStr: Array|String): Array|String

- Returns all but the first element of `arrOrStr`

```javascript
R.tail([1, 2, 3])  //=> [2, 3]
R.tail('foo')  //=> 'oo'
```

#### take

> take(num: Number, arrOrStr: Array|String): Array|String

- Returns the first `num` elements of `arrOrStr`

```javascript
R.take(1, ['foo', 'bar']) //=> ['foo']
R.take(2, ['foo']) //=> 'fo'
```

#### takeLast

> takeLast(num: Number, arrOrStr: Array|String): Array|String

- Returns the last `num` elements of `arrOrStr`

```javascript
R.takeLast(1, ['foo', 'bar']) //=> ['bar']
R.takeLast(2, ['foo']) //=> 'oo'
```

#### test

> test(regExpression: Regex, str: String): Boolean

- Determines whether `str` matches `regExpression`

```javascript
R.test(/^f/, 'foo') //=> true
R.test(/^f/, 'bar') //=> false
```

#### toLower

> toLower(str: String): String

```javascript
R.toLower('FOO') //=> 'foo'
```

#### toUpper

> toUpper(str: String): String

```javascript
R.toUpper('foo') //=> 'FOO'
```

#### trim

> trim(str: String): String
```javascript
R.trim('  foo  ') //=> 'foo'
```

#### type

> type(a: any): String

```javascript
R.type(() => {}) //=> "Function"
R.type(async () => {}) //=> "Async"
R.type([]) //=> "Array"
R.type({}) //=> "Object"
R.type('s') //=> "String"
R.type(1) //=> "Number"
R.type(false) //=> "Boolean"
R.type(null) //=> "Null"
R.type(/[A-z]/) //=> "RegExp"
```

#### uniq

> uniq(arr: Array): Array

- Returns a new array containing only one copy of each element in `arr`

```javascript
R.uniq([1, 1, 2, 1]) //=> [1, 2]
R.uniq([1, '1'])     //=> [1, '1']
```

#### update

> update(i: Number, replaceValue: any, arr: Array): Array

- Returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`

```javascript
R.update(0, "foo", ['bar', 'baz']) //=> ['foo', baz]
```

#### values

> values(obj: Object): Array

- Returns array with of all values in `obj`

```javascript
R.values({a: 1, b: 2}) //=> [1, 2]
```
---
## Benchmark

![Screen](https://cdn.rawgit.com/selfrefactor/rambda/7475b559/files/screen1.png)
![Screen](https://cdn.rawgit.com/selfrefactor/rambda/7475b559/files/screen2.png)

## Flowtype

I haven't tested it fully, but the partial test shows that [Ramda
definitions](https://github.com/flowtype/flow-typed/blob/master/definitions/npm/ramda_v0.21.x/flow_v0.28.x-v0.30.x/ramda_v0.21.x.js) can be used.

You need to replace `declare module ramda` with `declare module rambda` on line 10 and store the file as `rambda.js` in your *flow-typed* folder

## More info

> Changelog

- 0.7.0 Close [issue #5](https://github.com/selfrefactor/rambda/issues/5) - change name of `curry` to `partialCurry`; add new method `curry`, which works just like Ramda's `curry` 
- 0.6.2 Add separate documentation site via `docsify`

> Projects using Rambda

- [I Learn Smarter](https://github.com/selfrefactor/ils)

- [json-validity](https://www.npmjs.com/package/json-validity)

- [log-fn](https://www.npmjs.com/package/log-fn)

- [nightmare-helper](nightmare-helper)

- [string-fn](https://www.npmjs.com/package/string-fn)

- [watch-fn](https://www.npmjs.com/package/watch-fn)

> Articles about Rambda
- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)
- [Argumentation of Rambda's curry method](https://selfrefactor.gitbooks.io/blog/content/argumenting-rambdas-curry.html)

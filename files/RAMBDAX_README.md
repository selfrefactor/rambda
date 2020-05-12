#### allTrue

> allTrue(...inputs:  any|predicate[]): boolean

It returns `true` if all passed elements return `true` when passed to `Boolean`.
If argument is function, it will be evaluated.

```
const x = 2

const result = R.allTrue([1,2], x > 1, {}, () => true)
//=> true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/allTrue.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/allTrue.spec.js)

<a href="https://rambda.now.sh?const%20x%20%3D%202%0A%0Aconst%20result%20%3D%20R.allTrue(%5B1%2C2%5D%2C%20x%20%3E%201%2C%20%7B%7D%2C%20()%20%3D%3E%20true)%0A%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### allType

> allType(targetType: string): (...inputs: any[]) => boolean

It returns a function, which will return `true` if all passed elements has the same type as the `targetType`. The example below explains it better:

```
const result = R.allType('String')('foo','bar','baz')
//=> true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/allType.spec.js)

---
#### anyFalse

> anyFalse(...inputs: any|predicate[]): boolean

It returns `true` if any of the passed elements returns `false` when passed to `Boolean`.
If argument is function, it will be evaluated.

```
R.anyFalse(1, {a:1}, 'foo', () => false)
//=> true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/anyFalse.spec.js)

---
#### anyTrue

> anyTrue(...inputs:  any|predicate[]): boolean

It returns `true` if any of the passed elements returns `true` when passed to `Boolean`.
If argument is function, it will be evaluated.

```
R.anyTrue(0, {}, '', () => true)
//=> true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/anyTrue.spec.js)

---
#### anyType

> anyType(targetType: string): (...inputs: any[]) => boolean

It returns a function, which will return `true` if at least one of the passed elements has the same type as the `targetType`. The example below explains it better:

```
R.anyType('String')(1, {},'baz')
//=> true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/anyType.spec.js)

---
#### change

> change(origin: object, path: string, changeData: any): object

It helps changing object's properties if there are below 3 levels deep.

Explanation:

`path` provide way to specify which object's sub-branch you want to manipulate. Pass empty string if you target the whole `origin` object.

`changeData` can be a direct value. If it is a object, then this object is used to edit or add new properties to the selected sub-branch.

```
const simpleResult = change(
  { a: 1, b: { c: 2 } },
  'b.c',
  3
)
const expectedSimpleResult = {
  a: 1,
  b: { c: 3 }
}
// simpleResult === expectedSimpleResult

const origin = {
  a   : 0,
  foo : {
    bar : 1,
    bax : { nested : 2 },
  },
}
const changeData = {
  bar: 2,
  bay: 3,
  bax: { baq: 9 }
}
const result = change(
  origin,
  'foo',
  changeData
)

const expectedResult = {
  a   : 0,
  foo : {
    bar : 2,
    bay : 3,
    bax : {
      nested : 2,
      baq: 9
    },
  },
}
// result === expectedResult
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/change.spec.js)

---
#### composeAsync

> composeAsync(...fns: Array<Function|Async>)(startValue: any): Promise

It is same as `R.compose` but with support for asynchronous functions.

Note that it doesn't work with promises or function returning promises such as `const foo = input => new Promise(...)`.

```
const fn = async x => {
  await R.delay(500)
  return x+1
}
const fnSecond = async x => fn(x)

const result = R.composeAsync(
  fn,
  fnSecond
)(0)
// `result` resolves to `2`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/composeAsync.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/composeAsync.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20await%20R.delay(500)%0A%20%20return%20x%2B1%0A%7D%0Aconst%20fnSecond%20%3D%20async%20x%20%3D%3E%20fn(x)%0A%0Aconst%20result%20%3D%20R.composeAsync(%0A%20%20fn%2C%0A%20%20fnSecond%0A)(0)%0A%2F%2F%20%60result%60%20resolves%20to%20%602%60">Try in REPL</a>

---
#### composed

> composed(...fnList: any[]): any

It is basically `R.compose` but instead of passing the input argument as `(input)`, you pass it as the last argument. It is easier to understand with the following example:

```
const result = composed(
  R.map(x => x*10),
  R.filter(x => x > 1),
  [1,2,3]
)
// => [20, 30]
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/composed.spec.js)

---
#### debounce

> debounce(fn: Function, ms: number): any

Creates a debounced function that delays invoking `fn` until after wait milliseconds `ms` have elapsed since the last time the debounced function was invoked. (description is taken from `Lodash` docs)

```
let counter = 0
const inc = () => {
  counter++
}
const debouncedInc = R.debounce(inc, 900)

const result = async function(){
  debouncedInc()
  await R.delay(500)
  debouncedInc()
  await R.delay(800)
  console.log(counter) //=> 0

  await R.delay(1000)
  console.log(counter) //=> 1

  return counter
}
// `result` resolves to `1`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/debounce.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/debounce.spec.js)

<a href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20inc%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0Aconst%20debouncedInc%20%3D%20R.debounce(inc%2C%20900)%0A%0Aconst%20result%20%3D%20async%20function()%7B%0A%20%20debouncedInc()%0A%20%20await%20R.delay(500)%0A%20%20debouncedInc()%0A%20%20await%20R.delay(800)%0A%20%20console.log(counter)%20%2F%2F%3D%3E%200%0A%0A%20%20await%20R.delay(1000)%0A%20%20console.log(counter)%20%2F%2F%3D%3E%201%0A%0A%20%20return%20counter%0A%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try in REPL</a>

---
#### defaultToStrict

> defaultToStrict(defaultValue: T, ...inputArguments: any[]): T

It either returns `defaultValue`, if all of `inputArguments` are considered falsy.

Or it returns the first truthy `inputArguments` instance(from left to right).

It is similar to `R.defaultTo`, but its definition for truthy value is different. The requirement in `R.defaultTo` in any value different than `undefined`, `null` or `NaN`. With `R.defaultToStrict` the conditions are:

- Truthy with `Boolean`
- Has the same type as `defaultValue`(according to `R.type`)
- It is neither empty object or empty array

```
R.defaultToStrict('foo', undefined) // => 'foo'
R.defaultToStrict('foo', 1) // => 'foo'
R.defaultToStrict('foo', {}) // => 'foo'
R.defaultTo('foo', undefined, 1, [], {}) // => 'foo'
R.defaultTo('foo', undefined, 1, [], {}, 'bar') // => 'bar'
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/defaultToStrict.spec.js)

---
#### defaultToWhen

> defaultToWhen(fallback: any, fn: Function, ...inputArguments: any[]): any

It returns `fallback`, if there is none instance of `inputArguments` that satisfies the predicate `fn`.

If there is such instance, then it will be the end result of `R.defaultToWhen`
.

```
const fn = x => x > 2
const fallback = 10
const result = R.defaultToWhen(fallback, fn, 1,6,8,0 )
// result is 6
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/defaultToWhen.spec.js)

---
#### delay

> delay(ms: number): Promise

`setTimeout` as a promise that resolves to `R.DELAY` variable.

The value of `R.DELAY` is `'RAMBDAX_DELAY'`.

```
const result = R.delay(1000)
// `result` resolves to `'RAMBDAX_DELAY'`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/delay.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/delay.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.delay(1000)%0A%2F%2F%20%60result%60%20resolves%20to%20%60'RAMBDAX_DELAY'%60">Try in REPL</a>

---
#### filterAsync

> findAsync(predicate: Async, iterateOver: object|array): Promise

It will return object or array `iterateOver` filtered according to asynchronous function `predicate`

```
const predicate = async x => {
  await delay(100)
  return x%2 === 1
}
const result = await filterAsync(predicate, [ 1, 2, 3 ])
// => [ 1, 3 ]
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/filterAsync.spec.js)

---
#### findInObject

> findInObject(fn: Function, obj: object): object

It will return object with properties `prop` and `value` if predicate function returns `true` for a pair of property and value within `obj`.

If predicate cannot be satisfied, it returns `{fallback: true}`.

```
const fn = (x, key) => x > 1 && key.length > 1
const obj = {
  a   : 1,
  b   : 2,
  foo : 3,
}

const result = R.findInObject(fn, obj)
// => { prop  : 'foo',value : 3}
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/findInObject.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/findInObject.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20(x%2C%20key)%20%3D%3E%20x%20%3E%201%20%26%26%20key.length%20%3E%201%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20b%20%20%20%3A%202%2C%0A%20%20foo%20%3A%203%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.findInObject(fn%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20prop%20%20%3A%20'foo'%2Cvalue%20%3A%203%7D">Try in REPL</a>

---
#### setter

> setter(key: string|object, value?: any): void

It provides access to the cache object.

You either set individual key-value pairs with `R.setter(key, value)` or you pass directly object, which will be merged with the cache object

```
R.setter({a: 1,b: 'bar'})
R.getter('b')
// => 'bar'
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/setter.spec.js)

---
#### getter

> getter(key: undefined|string|string[]): any

It provides access to the cache object.

If `undefined` is used as a key, this method will return the whole cache object.

If `string` is passed, then it will return cache value for this key.

If array of `string` is passed, then it assume that this is array of keys and it will return the corresponding cache values for these keys.

```
R.setter('foo','bar')
R.setter('a', 1)
R.getter(['foo','a'])
// => {foo:'baz', a:1}
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/getter.spec.js)

---
#### reset

> reset(): void

It resets the cache object.

```
R.setter({a: 1,b: 'bar'})
R.getter('b') // => 'bar'
R.reset()
R.getter('b') // => undefined
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/reset.spec.js)

---
#### glue

> glue(input: string, glueString?: string): string

It transforms multiline string to single line by gluing together the separate lines with the `glueString` and removing the empty spaces. By default `glueString` is equal to single space, so if that is what you need, then you can just pass a single argument.

```
const result = R.glue(`
  foo
  bar
  baz
`)

const expectedResult = 'foo bar baz'
// result === expectedResult
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/glue.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/glue.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.glue(%60%0A%20%20foo%0A%20%20bar%0A%20%20baz%0A%60)%0A%0Aconst%20expectedResult%20%3D%20'foo%20bar%20baz'%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### hasPath

> hasPath(input: string|string[], input: object): boolean

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

```
const path = 'a.b'
const obj = {a: {b:[]}}

const result = hasPath(path,obj)

expect(result).toBe(true)
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/hasPath.spec.js)

---
#### headObject

> headObject(input: object): {prop: string, value: T}

It must be used with object that has only one key, i.e. `{foo:1}`.

It is build for the use case, when we want to pass object and its name.

```
const foo = x => x + 2
const bar = x => x * 8

[{foo}, {bar}]
  .map(method => {
    const {prop, value: fn} = R.headObject(method)
    console.log(prop, `result ${fn(1)}`)
  })
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/headObject.spec.js)

---
#### includesType

> includesType(targetType: string, list: any[]): boolean

It returns `true` if any member of `list` array has the same type as the `targetType`.

```
const result = R.includesType(
  'String',
  [1,2,'foo']
)
// => true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/includesType.spec.js)

---
#### inject

> inject(injection: string, marker: string, str: string, beforeFlag: boolean): string

```
const resultDefault = R.inject(
  ' INJECTION',
  'MARKER',
  'foo bar MARKER baz'
)
const expectedResultDefault = 'foo bar MARKER INJECTION baz'

const resultWithBeforeFlag = R.inject(
  'INJECTION ',
  'MARKER',
  'foo bar MARKER baz',
  true
)
const expectedResultWithBeforeFlag = 'foo bar INJECTION MARKER baz'

const result = [
  resultDefault,
  resultWithBeforeFlag
]
const expectedResult = [
  expectedResultDefault,
  expectedResultWithBeforeFlag
]
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/inject.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/inject.spec.js)

<a href="https://rambda.now.sh?const%20resultDefault%20%3D%20R.inject(%0A%20%20'%20INJECTION'%2C%0A%20%20'MARKER'%2C%0A%20%20'foo%20bar%20MARKER%20baz'%0A)%0Aconst%20expectedResultDefault%20%3D%20'foo%20bar%20MARKER%20INJECTION%20baz'%0A%0Aconst%20resultWithBeforeFlag%20%3D%20R.inject(%0A%20%20'INJECTION%20'%2C%0A%20%20'MARKER'%2C%0A%20%20'foo%20bar%20MARKER%20baz'%2C%0A%20%20true%0A)%0Aconst%20expectedResultWithBeforeFlag%20%3D%20'foo%20bar%20INJECTION%20MARKER%20baz'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20resultDefault%2C%0A%20%20resultWithBeforeFlag%0A%5D%0Aconst%20expectedResult%20%3D%20%5B%0A%20%20expectedResultDefault%2C%0A%20%20expectedResultWithBeforeFlag%0A%5D">Try in REPL</a>

---
#### isAttach

> isAttach(): boolean

It attaches `is` method to object-like variables. This `is` method acts like `R.pass`.

It returns `true` when it is called initially and it returns `false` for sequential calls.

```
R.isAttach()
const foo = [1,2,3]

const result = foo.is(['number'])
// => true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isAttach.spec.js)

---
#### isFalsy

> isFalsy(x: any): boolean

It returns `true` if `x` is falsy.

```
const result = R.map(
  R.isFalsy
)([null, '', [], {}])
// => [ true, true, true, true ]
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isFalsy.spec.js)

---
#### isFunction

> isFunction(x: any): boolean

It returns `true` if type of `x` is one among `Promise`, `Async` or `Function`.

```
const result = R.isFunction(
  x => x
)
// => true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isFunction.spec.js)

---
#### isNil

> isNil(x: any): boolean

It returns `true` is `x` is either `null` or `undefined`.

```
R.isNil(null)  // => true
R.isNil(1)  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/isNil.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isNil.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isNil(null)%20%20%2F%2F%20%3D%3E%20true%0AR.isNil(1)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isPromise

> isPromise(x: any): boolean

It returns true if `x` is either async function or unresolved promise.

```
R.isPromise(R.delay)
// => true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/isPromise.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isPromise.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isPromise(R.delay)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### isType

> isType(xType: string, x: any): boolean

It returns true if `x` matches the type returned from `R.type`.

```
R.isType('Async',async () => {})
// => true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/isType.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isType.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isType('Async'%2Casync%20()%20%3D%3E%20%7B%7D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### isValid

> isValid({ input: object: schema: object }): boolean

It checks if `input` is following `schema` specifications.

If validation fails, it returns `false`.

Please [check the detailed explanation](https://github.com/selfrefactor/rambdax/blob/master/files/isValid.md) as it is hard to write a short description of this method.

Independently, somebody else came with very similar idea called [superstruct](https://github.com/ianstormtaylor/superstruct)

```
const result = R.isValid({
  input:{ a: ['foo','bar'] },
  schema: {a: ['string'] }
})
// => true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/isValid.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/isValid.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isValid(%7B%0A%20%20input%3A%7B%20a%3A%20%5B'foo'%2C'bar'%5D%20%7D%2C%0A%20%20schema%3A%20%7Ba%3A%20%5B'string'%5D%20%7D%0A%7D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### maybe

> maybe<T>(ifRule: Boolean, whenIf: T, whenElse: T): T

It acts as ternary operator and it is helpful when we have nested ternaries.

```
const x = 4
const y = 8
const result = R.maybe(
  x > 2,
  y > 10 ? 3 : 7,
  5
)
// `result` is `7`
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/maybe.spec.js)

---
#### mapAsync

> mapAsync(fn: Async|Promise, arr: Array): Promise

Sequential asynchronous mapping with `fn` over members of `arr`.

```
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.composeAsync(
  R.mapAsync(fn),
  R.map(x => x*2)
)( [1, 2, 3] )

// `result` resolves after 3 seconds to `[3, 5, 7]`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/mapAsync.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/mapAsync.spec.js)

<a href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20R.composeAsync(%0A%20%20R.mapAsync(fn)%2C%0A%20%20R.map(x%20%3D%3E%20x*2)%0A)(%20%5B1%2C%202%2C%203%5D%20)%0A%0A%2F%2F%20%60result%60%20resolves%20after%203%20seconds%20to%20%60%5B3%2C%205%2C%207%5D%60">Try in REPL</a>

---
#### mapFastAsync

> mapFastAsync(fn: Async|Promise, arr: Array): Promise

Parrallel asynchronous mapping with `fn` over members of `arr`.

```
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.composeAsync(
  R.mapAsync(fn),
  R.map(x => x*2)
)( [1, 2, 3] )

// `result` resolves after 1 second to `[3, 5, 7]`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/mapFastAsync.js)


> mapAsyncLimit(iterable: Promise, limit: Number, list: Array): Promise

It is similar to `mapFastAsync` in that it uses `Promise.all` but not over the whole list, rathar than with only slice from `list` with length `limit`.

The result is a promise resolvable to an array of type matching the return type of `iterable`.


```
const limit = 3
const startTime = new Date().getTime()
const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const iterable = async x => {
  await delay(500)
  return x + 1
}
const result = await mapAsyncLimit(iterable, limit, list)
const endTime = new Date().getTime()
const diffTime = endTime - startTime

const startTime2 = new Date().getTime()
await mapAsync(iterable, list)
const endTime2 = new Date().getTime()
const diffTime2 = endTime2 - startTime2

const methodScale = toDecimal((diffTime2 - diffTime)/1000,0)
expect(result).toEqual([2,3,4,5,6,7,8,9,10])
expect(methodScale).toBe(limit)
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/mapAsyncLimit.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/mapFastAsync.spec.js)

<a href="https://rambda.now.sh?async%20function%20fn(x)%7B%0A%20%20await%20R.delay(1000)%0A%0A%20%20return%20x%2B1%0A%7D%0A%0Aconst%20result%20%3D%20R.composeAsync(%0A%20%20R.mapAsync(fn)%2C%0A%20%20R.map(x%20%3D%3E%20x*2)%0A)(%20%5B1%2C%202%2C%203%5D%20)%0A%0A%2F%2F%20%60result%60%20resolves%20after%201%20second%20to%20%60%5B3%2C%205%2C%207%5D%60">Try in REPL</a>

---
#### memoize

> memoize(fn: Function|Promise): any

When `fn` is called for a second time with the same input, then the cache result is returned instead of calling `fn`.

```
let counter = 0
const fn = (a,b) =>{
  counter++

  return a+b
}
const memoized = R.memoize(fn)
memoized(1,2)
memoized(1,2)
console.log(counter) //=> 1
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/memoize.spec.js)

---
#### mergeAll

> mergeAll(input: Object[]): Object

It merges all objects of `input` array sequentially and returns the result.

```
const arr = [
  {a:1},
  {b:2},
  {c:3}
]
const expectedResult = {
  a:1,
  b:2,
  c:3
}
const result = R.mergeAll(arr)
// result === expectedResult
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/mergeAll.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/mergeAll.spec.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7Bb%3A2%7D%2C%0A%20%20%7Bc%3A3%7D%0A%5D%0Aconst%20expectedResult%20%3D%20%7B%0A%20%20a%3A1%2C%0A%20%20b%3A2%2C%0A%20%20c%3A3%0A%7D%0Aconst%20result%20%3D%20R.mergeAll(arr)%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### mergeDeep

> mergeDeep(slave: object, master: object): object

It is best explained with the test example:

```
const slave = {
  name: 'evilMe',
  age: 10,
  contact: {
    a: 1,
    email: 'foo@example.com'
  }
}
const master = {
  age: 40,
  contact: { email: 'baz@example.com' },
}
const result = mergeDeep(slave,master)

const expected = {
  "age": 40,
  "name": "evilMe",
  "contact": {
    "a": 1,
    "email": "baz@example.com"
  },
}
expect(result).toEqual(expected)
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/mergeDeep.spec.js)

---
#### mergeRight

> mergeRight(master: object, slave:object)

Same as `R.merge` but in opposite direction.

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/mergeRight.spec.js)

---
#### nextIndex

> nextIndex(index: number, list: any[]): number

It returns the next index of the list, i.e. it increments unless we have reached the end of the list(in this case `0` is returned).

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/nextIndex.spec.js)

---
#### ok

> ok(...inputs: any[]): (schemas: any[]) => true | Error

It checks if `inputs` are following `schemas` specifications.

It uses underneath [R.isValid](#isvalid).

If validation fails, it throws. If you don't want that, then you can use `R.is`. It is the same as `R.ok` method, but it returns `false` upon failed validation.

```
const result = R.ok(
  1, [ 'foo', 'bar' ]
)('number', [ 'string' ])
// => true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/ok.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/ok.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.ok(%0A%20%201%2C%20%5B%20'foo'%2C%20'bar'%20%5D%0A)('number'%2C%20%5B%20'string'%20%5D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### once

> once(fn: Function): Function

It returns a function, which invokes only once`fn`.

```
const addOneOnce = R.once((a, b, c) => a + b + c)

console.log(addOneOnce(10, 20, 30)) //=> 60
console.log(addOneOnce(1, 2, 3)) //=> 60
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/once.spec.js)

---
#### opposite

> opposite(fn: Function): Function

Same as `R.complement`

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/opposite.spec.js)

---
#### otherwise

> otherwise(fallback: Function, toResolve: Promise): Promise

It is meant to be used inside **pipe** or **compose** methods. It allows to catch the error inside the incoming promise and perform `fallback` in case of error. If no error occurs, it will act as **identity**, i.e. pass the input as a result.

```
test('with promise', async () => {
  const fetch = x =>
    new Promise((res, rej) => rej(new Error('FOO_ERROR')))

  const getMemberName = pipe(
    email => ({ query : email }),
    fetch,
    R.otherwise(e => {
      expect(e.message).toBe('FOO_ERROR')

      return { firstName : 'BAR' }
    }),
    R.then(R.pick('firstName,lastName'))
  )

  const result = await getMemberName('FOO')

  expect(result).toEqual({ firstName : 'BAR' })
})
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/otherwise.spec.js)

---
#### pathEq

> pathEq(path:string|string[], target: any, obj: object): boolean

```
const result = R.pathEq(
  'a.b',
  1,
  {a: {b:1} }
)
// => true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/pathEq.spec.js)

---
#### pass

> pass(...inputs: any[]): (schemas: any[]) => boolean

It checks if `inputs` are following `schemas` specifications.

It uses underneath [R.isValid](#isvalid)

If validation fails, it returns `false`.

```
const result = R.pass(1,['foo','bar'])('number',['string'])
// => true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/pass.spec.js)

---
#### partition

> partition<T>(predicate: Function, input: Array|Object): [Array|Object, Array|Object]

It is similar to `R.filter` but it will return also the instances that are not passing the predicate function.

It works also with object as input. Please check the example below:

```
import { partition } from 'rambdax'

test('with object', () => {
  const predicate = (value, prop) => {
    expect(
      typeof prop
    ).toBe('string')

    return value > 2
  }
  const input = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }

  const result = partition(predicate, input)
  const expectedResult = [
    {
      c : 3,
      d : 4,
    },
    {
      a : 1,
      b : 2,
    },
  ]

  expect(
    result
  ).toEqual(expectedResult)
})

test('with array', () =>{
  const rule = (x, i) => {
    expect(
      typeof i
    ).toBe('number')

    return x > 2
  }
  const list = [1,2,3,4]

  const result = partition(rule,list)
  const expectedResult = [[3,4], [1,2]]

  expect(
    result
  ).toEqual(expectedResult)
})
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/partition.spec.js)

---
#### piped

> piped(...fnList: any[]): any

It is basically `R.pipe` but instead of passing the input argument as `(input)`, you pass it as the first argument. It is easier to understand with the following example:

```
const result = piped(
  [1,2,3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/piped.spec.js)

---
#### pipedAsync

> pipedAsync(input: any, ...fns: Array<Function|Async>): Promise

It accepts input as first argument and series of functions as next arguments. It is same as `R.pipe` but with support for asynchronous functions.
Also functions that returns `Promise` will be handled as regular function not asynchronous. Such example is `const foo = input => new Promise(...)`.

```
const result = await pipedAsync(
  100,
  async x => {
    await delay(100)
    return x + 2
  },
  add(2),
  async x => {
    const delayed = await delay(100)
    return delayed + x
  }
)
const expected = 'RAMBDAX_DELAY104'
// result === expected
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/pipedAsync.spec.js)

---
#### produce

> produce(conditions: Object, input: any): Promise|Object

It is very similar to [Ramda's 'applySpec' method](https://ramdajs.com/docs/#applySpec)

```
const conditions = {
  foo: a => a > 10,
  bar: a => ({baz:a})
}

const result = R.produce(conditions, 7)

const expectedResult = {
  foo: false,
  bar: {baz: 7}
}
// result === expectedResult
```

`conditions` is an object with sync or async functions as values.

The values of the returned object `returnValue` are the results of those functions when `input` is passed.
The properties of the returned object are equal to `input`.

If any of the `conditions` is a `Promise`, then the returned value is a `Promise` that resolves to `returnValue`.

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/produce.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/produce.spec.js)

<a href="https://rambda.now.sh?const%20conditions%20%3D%20%7B%0A%20%20foo%3A%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20bar%3A%20a%20%3D%3E%20(%7Bbaz%3Aa%7D)%0A%7D%0A%0Aconst%20result%20%3D%20R.produce(conditions%2C%207)%0A%0Aconst%20expectedResult%20%3D%20%7B%0A%20%20foo%3A%20false%2C%0A%20%20bar%3A%20%7Bbaz%3A%207%7D%0A%7D%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### promiseAllObject

> promiseAllObject(promises: Object): Promise

It acts as `Promise.all` for object with Promises.
It returns a promise that resolve to object.

```
const fn = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve(ms)
  }, ms)
})
const promises = {
  a : fn(1),
  b : fn(2),
}

const result = R.promiseAllObject(promises)
const expectedResult = { a:1, b:2 }
// `result` resolves to `expectedResult`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/promiseAllObject.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/promiseAllObject.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20resolve(ms)%0A%20%20%7D%2C%20ms)%0A%7D)%0Aconst%20promises%20%3D%20%7B%0A%20%20a%20%3A%20fn(1)%2C%0A%20%20b%20%3A%20fn(2)%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.promiseAllObject(promises)%0Aconst%20expectedResult%20%3D%20%7B%20a%3A1%2C%20b%3A2%20%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%60expectedResult%60">Try in REPL</a>

---
#### random

> random(min: number, max: number): number

It returns a random number between `min` inclusive and `max` inclusive.

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/random.spec.js)

---
#### remove

> remove(inputs: string|RegExp[], text: string): string

It will remove all inputs from `text` sequentially.

```
const result = remove(
  ['foo','bar'],
  'foo bar baz foo'
)
// => 'baz foo'
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/remove.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/remove.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20remove(%0A%20%20%5B'foo'%2C'bar'%5D%2C%0A%20%20'foo%20bar%20baz%20foo'%0A)%0A%2F%2F%20%3D%3E%20'baz%20foo'">Try in REPL</a>

---
#### renameProps

> renameProps(rules: Object, input: Object): Object

If property `prop` of `rules` is also a property in `input`, then rename `input` property to `rules[prop]`.

```
const rules = {
  f: "foo",
  b: "bar"
}
const input = {
  f:1,
  b:2
}
const result = R.renameProps(rules, input)
const expectedResult = {
  foo:1,
  bar:2
}
// result === expectedResult
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/renameProps.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/renameProps.spec.js)

<a href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20f%3A%20%22foo%22%2C%0A%20%20b%3A%20%22bar%22%0A%7D%0Aconst%20input%20%3D%20%7B%0A%20%20f%3A1%2C%0A%20%20b%3A2%0A%7D%0Aconst%20result%20%3D%20R.renameProps(rules%2C%20input)%0Aconst%20expectedResult%20%3D%20%7B%0A%20%20foo%3A1%2C%0A%20%20bar%3A2%0A%7D%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### resolve

> resolve(afterResolve: Function, toResolve: Promise): Promise

Its purpose is to be used with **pipe** or **compose** methods in order to turn the composition to asynchronous.

The example should explain it better:

```
const expected = {
  firstName : 'FIRST_NAME_FOO',
  lastName  : 'LAST_NAME_FOO',
}

const fetchMember = async x => {
  await R.delay(200)

  return {
    a         : 1,
    firstName : `FIRST_NAME_${ x.query }`,
    lastName  : `LAST_NAME_${ x.query }`,
  }
}

const getMemberName = pipe(
  email => ({ query : email }),
  fetchMember,
  resolve(pick('firstName,lastName'))
)
const result = await getMemberName('FOO')
// result === expected
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/resolve.spec.js)

---
#### s

> s(): undefined

Taken from `https://github.com/staltz/zii`
Chain function calls using a prototype function `s`

```
// To turn it on
R.s()

// Then
const result = 'foo'
  .s(R.toUpper)
  .s(R.take(2))
  .s(R.add('bar'))

const expectedResult = 'barFO'
// result === expectedResult
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/promiseAllSecure.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/s.spec.js)

<a href="https://rambda.now.sh?%2F%2F%20To%20turn%20it%20on%0AR.s()%0A%0A%2F%2F%20Then%0Aconst%20result%20%3D%20'foo'%0A%20%20.s(R.toUpper)%0A%20%20.s(R.take(2))%0A%20%20.s(R.add('bar'))%0A%0Aconst%20expectedResult%20%3D%20'barFO'%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### sortObject

> sortObject(predicate: Function, obj: Object): Object

It returns sorted version of an object.

```
const predicate = (propA, propB, valueA, valueB) => valueA > valueB ? -1 : 1

const sorted = R.sortObject(predicate, {a:1, b: 4, c: 2})
// => {b:4, c: 2, a:1}
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/sortObject.spec.js)

---
#### shuffle

> shuffle(arr: T[]): T[]

It returns randomized copy of array.

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/shuffle.spec.js)

---
#### switcher

Edited fork of [Switchem](https://github.com/planttheidea/switchem) library.

It is best explained with the following example:

```
const valueToMatch = {foo: 1}

const result = R.switcher(valueToMatch)
  .is('baz', 'is baz')
  .is( x => typeof x === 'boolean', 'is boolean')
  .is({foo: 1}, 'Property foo is 1')
  .default('is bar')

console.log(result) // => 'Property foo is 1'
```

As you can see `valueToMatch` is matched sequentially against various `is` conditions.
If none of them is appliable, then `default` value is returned as result.

Note that `default` must be the last condition and it is mandatory.

Rambda's `equals` is used as part of the comparison process.

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/switcher.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/switcher.spec.js)

<a href="https://rambda.now.sh?const%20valueToMatch%20%3D%20%7Bfoo%3A%201%7D%0A%0Aconst%20result%20%3D%20R.switcher(valueToMatch)%0A%20%20.is('baz'%2C%20'is%20baz')%0A%20%20.is(%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20'boolean'%2C%20'is%20boolean')%0A%20%20.is(%7Bfoo%3A%201%7D%2C%20'Property%20foo%20is%201')%0A%20%20.default('is%20bar')%0A%0Aconsole.log(result)%20%2F%2F%20%3D%3E%20'Property%20foo%20is%201'">Try in REPL</a>

---
#### tapAsync

> tapAsync(fn: Function|Async|Promise, inputArgument: T): T

It is `R.tap` that accept promise-like `fn` argument.

```
let counter = 0
const inc = () => {
  counter++
}

const throttledInc = R.throttle(inc, 800)

const replWrap = async x => {
  throttledInc()
  await R.delay(500)
  throttledInc()

  const a = await R.delay(1000)
  console.log(counter)
}

const result = R.tapAsync(replWrap, "foo")
// the console logs `foo`
// `result` is equal to 'foo'
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/tapAsync.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/tapAsync.spec.js)

<a href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20inc%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20throttledInc%20%3D%20R.throttle(inc%2C%20800)%0A%0Aconst%20replWrap%20%3D%20async%20x%20%3D%3E%20%7B%0A%20%20throttledInc()%0A%20%20await%20R.delay(500)%0A%20%20throttledInc()%0A%0A%20%20const%20a%20%3D%20await%20R.delay(1000)%0A%20%20console.log(counter)%0A%7D%0A%0Aconst%20result%20%3D%20R.tapAsync(replWrap%2C%20%22foo%22)%0A%2F%2F%20the%20console%20logs%20%60foo%60%0A%2F%2F%20%60result%60%20is%20equal%20to%20'foo'">Try in REPL</a>

---
#### template

> template(input: string, templateInput: object): string

It generages a new string from `input` by replacing all `{{foo}}` occurances with values provided by `templateInput.

```
const input = 'foo is {{bar}} even {{a}} more'
const templateInput = {"bar":"BAR", a: 1}

const result = R.template(input,templateInput)
const expectedResult = 'foo is BAR even 1 more'
// result === expectedResult
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/template.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/template.spec.js)

<a href="https://rambda.now.sh?const%20input%20%3D%20'foo%20is%20%7B%7Bbar%7D%7D%20even%20%7B%7Ba%7D%7D%20more'%0Aconst%20templateInput%20%3D%20%7B%22bar%22%3A%22BAR%22%2C%20a%3A%201%7D%0A%0Aconst%20result%20%3D%20R.template(input%2CtemplateInput)%0Aconst%20expectedResult%20%3D%20'foo%20is%20BAR%20even%201%20more'%0A%2F%2F%20result%20%3D%3D%3D%20expectedResult">Try in REPL</a>

---
#### toDecimal

> toDecimal(num: number, charsAfterDecimalPoint: number): number

```
R.toDecimal(2.45464,2) // => 2.45
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/toDecimal.spec.js)

---
#### throttle

> throttle(fn: Function, period: number): Function

It creates a throttled function that invokes `fn` maximum once for a `period` of milliseconds.

```
let counter = 0
const inc = () => {
  counter++
}

const throttledInc = R.throttle(inc, 800)

const result = async () => {
  throttledInc()
  await R.delay(500)
  throttledInc()

  return counter
}
// `result` resolves to `1`
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/throttle.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/throttle.spec.js)

<a href="https://rambda.now.sh?let%20counter%20%3D%200%0Aconst%20inc%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter%2B%2B%0A%7D%0A%0Aconst%20throttledInc%20%3D%20R.throttle(inc%2C%20800)%0A%0Aconst%20result%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20throttledInc()%0A%20%20await%20R.delay(500)%0A%20%20throttledInc()%0A%0A%20%20return%20counter%0A%7D%0A%2F%2F%20%60result%60%20resolves%20to%20%601%60">Try in REPL</a>

---
#### tryCatch

> tryCatch(fn: Async|Function, fallback: any): Function

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value, function or promise-like.

Please check the tests below in order to fully understand this method, as it doesn't match the behaviour of the same method in `Ramda`.

```
import { delay } from './delay'
import { prop } from './rambda/prop'
import { tryCatch } from './tryCatch'

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(
    () => tryCatch(fn, false)(null)
  ).toThrow(`R.tryCatch | fn 'foo'`)
})

test('when fallback is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)(null)).toBe(false)
})

test('when fallback is function', () => {
  const fn = prop('x')

  expect(tryCatch(fn, x => x)(null)).toBe(null)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBe(undefined)

  expect(tryCatch(fn, false)({ x: 1 })).toBe(1)
})

test('when async + fallback', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe('fallback')
  expect(called).toBe(true)
})

test('when async + fallback is function', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }

  expect(await tryCatch(fn, x => x + 1)(100)).toBe(101)
  expect(called).toBe(true)
})

test('when async + fallback is async', async () => {
  let called = false
  const fn = async input => {
    await delay(input)
    called = true

    return JSON.parse('{a:')
  }
  const fallback = async input => {
    return input + 1
  }

  expect(await tryCatch(fn, fallback)(100)).toBe(101)
  expect(called).toBe(true)
})

test('when async + fn', async () => {
  let called = false

  const fn = async input => {
    await delay(input)
    called = true

    return input + 1
  }

  expect(await tryCatch(fn, 'fallback')(100)).toBe(101)
  expect(called).toBe(true)
})
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/tryCatch.spec.js)

---
#### unless

> unless(rule: Function|boolean, whenFalse: Function|any): Function

The method returns function that will be called with argument `input`.

If `rule` with `input` as argument returns false, then the end result will be the outcome of `whenFalse` function with `input` as argument. In the other case, the final output will be the `input` itself.

Please note that unlike **Ramda**'s `unless`, this method accept also plain values as `rule`(boolean values) and `whenFalse`(any values) arguments.

```
const result = R.unless(
  R.isNil,
  R.inc
)(1)
// => 2
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/unless.spec.js)

---
#### wait

> wait(fn: Async): Promise<[any, Error]>

It provides `Golang`-like interface for handling promises.

```
void async function wait(){
  const [result, err] = await R.wait(R.delay(1000))
  // => err is undefined
  // => result is `RAMBDAX_DELAY`
}()
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/wait.spec.js)

---
#### waitFor

> waitFor(condition: any, ms: number): Promise

It returns `true`, if `condition` returns `true` within `ms` milisececonds time period.

Best description of this method are the actual tests:

```
import { waitFor } from './waitFor'

const howLong = 1000

test('true', async () => {
  let counter = 0
  const condition = x => {
    counter++
    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toEqual(true)
})

test('false', async () => {
  let counter = 0
  const condition = x => {
    counter++
    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toEqual(false)
})

test('async condition | true', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    return counter > x
  }

  const result = await waitFor(condition, howLong)(6)
  expect(result).toEqual(true)
})

test('async condition | false', async () => {
  let counter = 0
  const condition = async x => {
    counter++
    return counter > x
  }

  const result = await waitFor(condition, howLong)(12)
  expect(result).toEqual(false)
})

test('throws when fn is not function', () => {
  const fn = 'foo'

  expect(() => waitFor(fn, howLong)()).toThrow('R.waitFor')
})
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/waitFor.spec.js)

---
#### where

> where(conditions: object, input: object): boolean

Each property `prop` in `conditions` is a function.

This function is called with `input(prop)`. If all such function calls return `true`, then the final result is also `true`.

```
const condition = R.where({
  a : aProp => typeof aProp === "string",
  b : bProp => bProp === 4
})

const result = condition({
  a : "foo",
  b : 4,
  c : 11,
}) //=> true
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/where.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/where.spec.js)

<a href="https://rambda.now.sh?const%20condition%20%3D%20R.where(%7B%0A%20%20a%20%3A%20aProp%20%3D%3E%20typeof%20aProp%20%3D%3D%3D%20%22string%22%2C%0A%20%20b%20%3A%20bProp%20%3D%3E%20bProp%20%3D%3D%3D%204%0A%7D)%0A%0Aconst%20result%20%3D%20condition(%7B%0A%20%20a%20%3A%20%22foo%22%2C%0A%20%20b%20%3A%204%2C%0A%20%20c%20%3A%2011%2C%0A%7D)%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### whereEq

> whereEq(rule: object, input: any): boolean

It will return `true` if all of `input` object fully or partially include `rule` object.

The definition for `input` is `any` as the method perform type check on it and if it is not an object, it will return `false`. Note that **Ramda** will throw in this case.

```
const rule = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2,
}

const result = whereEq(rule, input)
//=> true
```

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/whereEq.spec.js)

---
#### when

> when(rule: Function|boolean, whenTrue: Function|any): Function

Note that unlike **Ramda**'s `when`, this method accept values as `whenTrue` argument.

```
const truncate = R.when(
  x => x.length > 5,
  R.compose(x => `${x}...`, R.take(5))
)

const result = truncate('12345678')
// => '12345...'
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/when.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/when.spec.js)

<a href="https://rambda.now.sh?const%20truncate%20%3D%20R.when(%0A%20%20x%20%3D%3E%20x.length%20%3E%205%2C%0A%20%20R.compose(x%20%3D%3E%20%60%24%7Bx%7D...%60%2C%20R.take(5))%0A)%0A%0Aconst%20result%20%3D%20truncate('12345678')%0A%2F%2F%20%3D%3E%20'12345...'">Try in REPL</a>

---
#### whenAsync

> whenAsync<T>(rule: condition: Async | Function | boolean, whenFn: Async | Function): Promise<T>

```
const replWrap = async input => {

  const wrapResult = await R.whenAsync(
    async x => {
      await R.delay(x*100)
      return x > 2
    },
    async x => {
      await R.delay(x*100)
      return x * 5
    }
  )(input)

  return wrapResult
}

const result = replWrap(5)
// => 25
```

[Source](https://github.com/selfrefactor/rambdax/tree/master/src/whenAsync.js)

[Test](https://github.com/selfrefactor/rambdax/blob/master/src/whenAsync.spec.js)

<a href="https://rambda.now.sh?const%20replWrap%20%3D%20async%20input%20%3D%3E%20%7B%0A%0A%20%20const%20wrapResult%20%3D%20await%20R.whenAsync(%0A%20%20%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20%20%20await%20R.delay(x*100)%0A%20%20%20%20%20%20return%20x%20%3E%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20async%20x%20%3D%3E%20%7B%0A%20%20%20%20%20%20await%20R.delay(x*100)%0A%20%20%20%20%20%20return%20x%20*%205%0A%20%20%20%20%7D%0A%20%20)(input)%0A%0A%20%20return%20wrapResult%0A%7D%0A%0Aconst%20result%20%3D%20replWrap(5)%0A%2F%2F%20%3D%3E%2025">Try in REPL</a>

---
#### add

> add(a: number, b: number): number

```
R.add(2, 3) // =>  5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/add.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/add.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try in REPL</a>

---
#### adjust

> adjust(i: number, replaceFn: Function, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/adjust.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/adjust.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try in REPL</a>

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/all.spec.js)

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
const result = R.allPass(rules)(input) // => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/allPass.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/allPass.spec.js)

<a href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(rules)(input)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### always

> always(x: any): Function

It returns function that always returns `x`.

```
const fn = R.always(7)

console.log(fn())// => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/always.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/always.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### and

Returns `true` if both arguments are `true`; `false` otherwise.

```
R.and(true, true); // => true
R.and(true, false); // => false
R.and(false, true); // => false
R.and(false, false); // => false
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/and.spec.js)

---
#### any

> any(condition: Function, arr: T[]): boolean

It returns `true`, if at least one member of `arr` returns true, when passed to the `condition` function.

```
R.any(a => a * a > 8)([1, 2, 3])
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/any.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/any.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.any(a%20%3D%3E%20a%20*%20a%20%3E%208)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### anyPass

> anyPass(predicates: Function[]): Function

It returns `true`, if any of `predicates` return `true` with `input` is their argument.

```
const isBig = a => a > 20
const isOdd = a => a % 2 === 1

const result = R.anyPass(
  [isBig, isOdd]
)(11)
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/anyPass.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/anyPass.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/append.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/assoc.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/both.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.both(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%3C%2020%0A)%0Aconsole.log(fn(15))%20%2F%2F%3D%3E%20true%0Aconsole.log(fn(30))%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### clamp

> clamp(min: number, max: number, input:number): number

Restrict a number `input` to be withing `min` and `max` limits.
If `input` is bigger than `max`, then result is `max`.
If `input` is smaller than `min`, then result is `min`.

```
R.clamp(0, 10, 5) //=> 5
R.clamp(0, 10, -1) //=> 0
R.clamp(0, 10, 11) //=> 10
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/clamp.spec.js)

---
#### clone

> clone(objOrArr: T|T[]): T|T[]

Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

```
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/clone.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/clone.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/compose.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/complement.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/concat.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try in REPL</a>

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/curry.spec.js)

<a href="https://rambda.now.sh?const%20addFourNumbers%20%3D%20(a%2C%20b%2C%20c%2C%20d)%20%3D%3E%20a%20%2B%20b%20%2B%20c%20%2B%20d%0Aconst%20curriedAddFourNumbers%20%3D%20R.curry(addFourNumbers)%0Aconst%20f%20%3D%20curriedAddFourNumbers(1%2C%202)%0Aconst%20g%20%3D%20f(3)%0Aconst%20result%20%3D%20g(4)%20%2F%2F%20%3D%3E%2010">Try in REPL</a>

---
#### dec

> dec(x: number): number

It decrements a number.

```
R.dec(2) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dec.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/dec.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/defaultTo.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/dissoc.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try in REPL</a>

---
#### divide

```
R.divide(71, 100) // => 0.71
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/divide.spec.js)

---
#### drop

> drop(howManyToDrop: number, arrOrStr: T[]|string): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the left.

```
R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']
R.drop(1, 'foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/drop.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/drop.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/dropLast.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/endsWith.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/either.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/equals.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### F

`R.F() // => false`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/F.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/F.spec.js)

---
#### filter

> filter(filterFn: Function, x: Array|Object): Array|Object

It filters `x` iterable over boolean returning `filterFn`.

```
const filterFn = a => a % 2 === 0

const result = R.filter(filterFn, [1, 2, 3, 4])
// => [2, 4]

const objResult = R.filter(filterFn, {a: 1, b: 2})
// => {b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/filter.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/filter.spec.js)

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A%0Aconst%20result%20%3D%20R.filter(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D%0A%0Aconst%20objResult%20%3D%20R.filter(filterFn%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/find.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/findIndex.spec.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### findLast

> findLast(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the last element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLast(findFn, arr)
// => {foo: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/find.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/findLast.spec.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findLastIndex

> findLastIndex(findFn: Function, arr: T[]): number

It returns `-1` or the last index of the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLastIndex(findFn, arr)
// => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/findIndex.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/findLastIndex.spec.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### flatten

> flatten(arr: any[]): any[]

```
R.flatten([ 1, [ 2, [ 3 ] ] ])
// => [ 1, 2, 3 ]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/flatten.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/flatten.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/flip.spec.js)

<a href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20subtractFlip(1%2C7)%0A%2F%2F%20%3D%3E%206">Try in REPL</a>

---
#### forEach

> forEach(fn: Function, x: Array|Object): Array|Object

It applies function `fn` over all members of iterable `x` and returns `x`.

```
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

console.log(sideEffect) //=> {foo1 : 1, foo2 : 2}
console.log(result) //=> [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/forEach.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/forEach.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/fromPairs.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/groupBy.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/groupWith.spec.js)

---
#### has

> has(prop: string, obj: Object): boolean

- It returns `true` if `obj` has property `prop`.

```
R.has('a', {a: 1}) // => true
R.has('b', {a: 1}) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/has.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/has.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/head.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/identical.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20o%20%3D%20%7B%7D%3B%0AR.identical(o%2C%20o)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### identity

> identity(x: T): T

It just passes back the supplied arguments.

```
R.identity(7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/identity.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/identity.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### ifElse

> ifElse(condition: Function|boolean, ifFn: Function, elseFn: Function): Function

It returns another function. When this new function is called with `input` argument, it will return either `ifFn(input)` or `elseFn(input)` depending on `condition(input)` evaluation.

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/ifElse.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%20%3E%2010%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20fn(8)%0A%2F%2F%20%3D%3E%2080">Try in REPL</a>

---
#### inc

> inc(x: number): number

It increments a number.

```
R.inc(1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/inc.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/inc.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### includes

> includes(valueToFind: T|string, input: T[]|string): boolean

If `input` is string, then this method work as native `includes`.
If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```
R.includes('oo', 'foo') // => true
R.includes({a: 1}, [{a: 1}]) // => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/includes.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/includes.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.includes('oo'%2C%20'foo')%20%2F%2F%20%3D%3E%20true%0AR.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### indexBy

> indexBy(condition: Function|String, arr: T[]): Object

Generates object with properties provided by `condition` and values provided by `arr`. If `condition` is a string, then it is passed to `R.path`.

```
const arr = [ {id: 1}, {id: 2} ]
const result = R.indexBy(
  x => x.id,
  arr
)
const pathResult = R.indexBy(
  'id',
  arr
)
// => { 1: {id: 1}, 2: {id: 2} }
// pathResult === result
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexBy.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/indexBy.spec.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%20%7Bid%3A%201%7D%2C%20%7Bid%3A%202%7D%20%5D%0Aconst%20result%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20arr%0A)%0Aconst%20pathResult%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20arr%0A)%0A%2F%2F%20%3D%3E%20%7B%201%3A%20%7Bid%3A%201%7D%2C%202%3A%20%7Bid%3A%202%7D%20%7D%0A%2F%2F%20pathResult%20%3D%3D%3D%20result">Try in REPL</a>

---
#### indexOf

> indexOf(valueToFind: any, arr: T[]): number

It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.

```
R.indexOf(1, [1, 2]) // => 0
R.indexOf(0, [1, 2]) // => -1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexOf.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/indexOf.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/init.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/is.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/isNil.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isNil(null)%20%20%2F%2F%20%3D%3E%20true%0AR.isNil(1)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isEmpty

> isEmpty(x: any): boolean

It returns `true` is `x` is `empty`.

```
R.isEmpty('')  // => true
R.isEmpty({ x : 0 })  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/isEmpty.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/isEmpty.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isEmpty('')%20%20%2F%2F%20%3D%3E%20true%0AR.isEmpty(%7B%20x%20%3A%200%20%7D)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### join

> join(separator: string, arr: T[]): string

```
R.join('-', [1, 2, 3])  // => '1-2-3'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/join.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/join.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try in REPL</a>

---
#### keys

> keys(x: Object): string[]

```
R.keys({a:1, b:2})  // => ['a', 'b']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/keys.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/keys.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try in REPL</a>

---
#### last

> last(arrOrStr: T[]|string): T|string

It returns the last element of `arrOrStr`.

```
R.last(['foo', 'bar', 'baz']) // => 'baz'
R.last('foo') // => 'o'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/last.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/last.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/lastIndexOf.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.lastIndexOf(1%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%203%0AR.lastIndexOf(10%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### length

> length(arrOrStr: Array|String): Number

```
R.length([1, 2, 3]) // => 3
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/length.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/length.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.length(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%203">Try in REPL</a>

---
#### lens

> lens(getter: Function, setter: Function): Lens

Returns a `lens` for the given `getter` and `setter` functions. 

The `getter` "gets" the value of the focus; the `setter` "sets" the value of the focus. 

The setter should not mutate the data structure.

```
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) //=> 1
R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) //=> {x: -1, y: 2}
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/lens.spec.js)

---
#### lensIndex

> lensIndex(index: Number): Lens

Returns a lens that focuses on the specified index

```
const headLens = R.lensIndex(0)

R.view(headLens, ['a', 'b', 'c']) //=> 'a'
R.set(headLens, 'x', ['a', 'b', 'c']) //=> ['x', 'b', 'c']
R.over(headLens, R.toUpper, ['a', 'b', 'c']) //=> ['A', 'b', 'c']
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/lensIndex.spec.js)

---
#### lensPath

> lensPath(path: Array|String): Lens

Returns a lens that focuses on the specified path

```
const xHeadYLens = R.lensPath(['x', 0, 'y'])

R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> 2
R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/lensPath.spec.js)

---
#### lensProp

> lensProp(prop: String): Lens

Returns a lens that focuses on the specified property

```
const xLens = R.lensProp('x');

R.view(xLens, {x: 1, y: 2}) //=> 1
R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) //=> {x: -1, y: 2}
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/lensProp.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/map.spec.js)

<a href="https://rambda.now.sh?const%20mapFn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20resultWithArray%20%3D%20R.map(mapFn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D%0A%0Aconst%20result%20%3D%20R.map((val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try in REPL</a>

---
#### match

> match(regExpression: Regex, str: string): string[]

```
R.match(/([a-z]a)/g, 'bananas') // => ['ba', 'na', 'na']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/match.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/match.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%20%2F%2F%20%3D%3E%20%5B'ba'%2C%20'na'%2C%20'na'%5D">Try in REPL</a>

---
#### max

> max(x: Number|String, y: Number|String): Number|String

```
R.max(5,7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/max.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/max.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### maxBy

> maxBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.maxBy(Math.abs, 5, -7) // => -7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/maxBy.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/maxBy.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/merge.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%2C%20%7B%20'foo'%3A%207%20%7D)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try in REPL</a>

---
#### min

> min(x: Number|String, y: Number|String): Number|String

```
R.min(5,7) // => 5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/min.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/min.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.min(5%2C7)%20%2F%2F%20%3D%3E%205">Try in REPL</a>

---
#### minBy

> minBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.minBy(Math.abs, -5, -7) // => -5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/minBy.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/minBy.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.minBy(Math.abs%2C%20-5%2C%20-7)%20%2F%2F%20%3D%3E%20-5">Try in REPL</a>

---
#### modulo

> modulo(a: number, b: number):numberNumber

It returns the remainder of operation `a/b`.

```
R.module(14, 3) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/modulo.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/modulo.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.module(14%2C%203)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### multiply

> multiply(a: number, b: number): number

It returns the result of operation `a*b`.

```
R.multiply(4, 3) // => 12
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/multiply.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/multiply.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/not.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.not(true)%20%2F%2F%3D%3E%20false%0AR.not(false)%20%2F%2F%3D%3E%20true%0AR.not(0)%20%2F%2F%3D%3E%20true%0AR.not(1)%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### omit

> omit(propsToOmit: string[]|string, obj: Object): Object

It returns a partial copy of an `obj` with omitting `propsToOmit`

```
R.omit('a,c,d', {a: 1, b: 2, c: 3}) // => {b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/omit.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/omit.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.omit('a%2Cc%2Cd'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%20%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### over

> over(lens: Lens, f: Function, target: Array|Object): Array|Object

Returns a copied `Object` or `Array` with the modified value resulting from the function applying to the lenses focus.

```
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/over.spec.js)

---
#### path

> path(pathToSearch: string[]|string, obj: Object): any

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

```
R.path('a.b', {a: {b: 1}}) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/path.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/path.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.path('a.b'%2C%20%7Ba%3A%20%7Bb%3A%201%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### paths

> paths(paths: string[][]|string[], obj: Object): Array

Similar to `R.path`, but for multiple object's path queries. 

```
const obj = {
  foo: {
    bar: [10,20],
    baz: '123'
  },
  a: 90
}
R.paths(['a.b', 'foo.bar.1', 'foo.baz'])
// => [ undefined, 20, 90]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/paths.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/paths.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20obj%20%3D%20%7B%0A%20%20foo%3A%20%7B%0A%20%20%20%20bar%3A%20%5B10%2C20%5D%2C%0A%20%20%20%20baz%3A%20'123'%0A%20%20%7D%2C%0A%20%20a%3A%2090%0A%7D%0AR.paths(%5B'a.b'%2C%20'foo.bar.1'%2C%20'foo.baz'%5D)%0A%2F%2F%20%3D%3E%20%5B%20undefined%2C%2020%2C%2090%5D">Try in REPL</a>

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/pathOr.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/partial.spec.js)

---
#### partialCurry

> partialCurry(fn: Function|Async, partialInput: Object, input: Object): Function|Promise

When called with function `fn` and first set of input `partialInput`, it will return a function.

This function will wait to be called with second set of input `input` and it will invoke `fn` with the merged object of `partialInput` over `input`.

`fn` can be asynchronous function. In that case a `Promise` holding the result of `fn` is returned.

```
const fn = ({a, b, c}) => {
  return (a * b) + c
}
const curried = R.partialCurry(fn, {a: 2})
const result = curried({b: 3, c: 10})
// => 16
```

- Note that `partialCurry` is method specific for **Rambda** and the method is not part of **Ramda**'s API

- You can read my argumentation for creating _partialCurry_ [here](https://ilearnsmarter.wordpress.com/2018/12/20/argumentation-of-rambdas-partialcurry-method/)

[Source](https://github.com/selfrefactor/rambda/tree/master/src/partialCurry.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/partialCurry.spec.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20(%7Ba%2C%20b%2C%20c%7D)%20%3D%3E%20%7B%0A%20%20return%20(a%20*%20b)%20%2B%20c%0A%7D%0Aconst%20curried%20%3D%20R.partialCurry(fn%2C%20%7Ba%3A%202%7D)%0Aconst%20result%20%3D%20curried(%7Bb%3A%203%2C%20c%3A%2010%7D)%0A%2F%2F%20%3D%3E%2016">Try in REPL</a>

---
#### pick

> pick(propsToPick: string[], obj: Object): Object

It returns a partial copy of an `obj` containing only `propsToPick` properties.

```
R.pick(['a', 'c'], {a: 1, b: 2}) // => {a: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pick.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/pick.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/pipe.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### pluck

> pluck(property: string, arr: Object[]): any[]

It returns list of the values of `property` taken from the objects in array of objects `arr`.

```
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) // => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pluck.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/pluck.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pluck('a')(%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### prepend

> prepend(x: T, arr: T[]): T[]

It adds `x` to the start of the array `arr`.

```
R.prepend('foo', ['bar', 'baz']) // => ['foo', 'bar', 'baz']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/prepend.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/prepend.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/prop.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/propEq.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/propIs.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/propOr.spec.js)

---
#### range

> range(start: number, end: number): number[]

It returns a array of numbers from `start`(inclusive) to `end`(exclusive).

```
R.range(0, 3)   // => [0, 1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/range.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/range.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/reduce.spec.js)

<a href="https://rambda.now.sh?const%20iteratorFn%20%3D%20(acc%2C%20val)%20%3D%3E%20acc%20%2B%20val%0Aconst%20result%20%3D%20R.reduce(iteratorFn%2C%201%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### reject

> reject(filterFn: Function, arr: T[]): T[]

It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `filterFn`.

```
const filterFn = x => x % 2 === 1

const result = R.reject(filterFn, [1, 2, 3, 4])
// => [2, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reject.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/reject.spec.js)

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.reject(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### repeat

> repeat(valueToRepeat: T, num: number): T[]

```
R.repeat('foo', 2) // => ['foo', 'foo']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/repeat.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/repeat.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/replace.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/reverse.spec.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B1%2C%202%5D%0A%0Aconst%20result%20%3D%20R.reverse(arr)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try in REPL</a>

---
#### set

> set(lens: Lens, x: any, target: Array|Object): Array|Object

Returns a copied `Object` or `Array` with the modified value resulting from the input value replacing that of the lenses focus.

```
const xLens = R.lensProp('x')

R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.set(xLens, 8, {x: 1, y: 2}) //=> {x: 8, y: 2}
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/set.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/slice.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/sort.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/sortBy.spec.js)

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20obj%20%3D%3E%20obj.foo%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20%5B%0A%20%20%7Bfoo%3A%201%7D%2C%0A%20%20%7Bfoo%3A%200%7D%0A%5D)%0A%0Aconst%20expectedResult%20%3D%20%5B%20%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%20%5D%0Aconsole.log(R.equals(result%2C%20expectedResult))%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### split

> split(separator: string, str: string): string[]

```
R.split('-', 'a-b-c') // => ['a', 'b', 'c']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/split.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/split.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.split('-'%2C%20'a-b-c')%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'c'%5D">Try in REPL</a>

---
#### splitEvery

> splitEvery(sliceLength: number, arrOrString: T[]|string): T[T[]]|string[]

It splits `arrOrStr` into slices of `sliceLength`.

```
R.splitEvery(2, [1, 2, 3]) // => [[1, 2], [3]]
R.splitEvery(3, 'foobar') // => ['foo', 'bar']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/splitEvery.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/splitEvery.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/startsWith.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.startsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.startsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### subtract

> subtract(a: number, b: number): number

```
R.subtract(3, 1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/subtract.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/subtract.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.subtract(3%2C%201)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### sum

> sum(listOfNumbers: number[]): number

```
R.sum([1,2,3,4,5]) // => 15
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/sum.spec.js)

---
#### T

`R.T() // => true`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/T.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/T.spec.js)

---
#### tail

> tail(arrOrStr: T[]|string): T[]|string

- It returns all but the first element of `arrOrStr`

```
R.tail([1, 2, 3])  // => [2, 3]
R.tail('foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tail.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/tail.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.tail(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B2%2C%203%5D%0AR.tail('foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### take

> take(num: number, arrOrStr: T[]|string): T[]|string

It returns the first `num` elements of `arrOrStr`.

```
R.take(1, ['foo', 'bar']) // => ['foo']
R.take(2, 'foo') // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/take.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/take.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.take(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.take(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### takeLast

> takeLast(num: number, arrOrStr: T[]|string): T[]|string

It returns the last `num` elements of `arrOrStr`.

```
R.takeLast(1, ['foo', 'bar']) // => ['bar']
R.takeLast(2, 'foo') // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/takeLast.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/takeLast.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.takeLast(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%5D%0AR.takeLast(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### tap

> tap(fn: Function, input: T): T

It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.

```
let a = 1
const sayX = x => (a = x)

const result = R.tap(sayX, 100)
// both `a` and `result` are `100`
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tap.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/tap.spec.js)

<a href="https://rambda.now.sh?let%20a%20%3D%201%0Aconst%20sayX%20%3D%20x%20%3D%3E%20(a%20%3D%20x)%0A%0Aconst%20result%20%3D%20R.tap(sayX%2C%20100)%0A%2F%2F%20both%20%60a%60%20and%20%60result%60%20are%20%60100%60">Try in REPL</a>

---
#### test

> test(regExpression: Regex, str: string): boolean

Determines whether `str` matches `regExpression`

```
R.test(/^f/, 'foo')
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/test.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/test.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/times.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.times(R.identity%2C%205)%0A%2F%2F%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try in REPL</a>

---
#### toLower

> toLower(str: string): string

```
R.toLower('FOO') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toLower.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/toLower.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/toPairs.spec.js)

<a href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### toString

> toString(x: any): string

```
R.toString([1, 2]) // => '1,2'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toString.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/toString.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20'1%2C2'">Try in REPL</a>

---
#### toUpper

> toUpper(str: string): string

```
R.toUpper('foo') // => 'FOO'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toUpper.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/toUpper.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%20%2F%2F%20%3D%3E%20'FOO'">Try in REPL</a>

---
#### transpose

> transpose(input: Array): Array

```
const input = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(input)
// result === expected
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/transpose.spec.js)

---
#### trim

> trim(str: string): string

```
R.trim('  foo  ') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/trim.js)

[Test](https://github.com/selfrefactor/rambda/blob/master/src/trim.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/type.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/uniq.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/uniqWith.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/update.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/values.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.values(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### view

> view(lens: Lens, target: Array|Object): any

Returns the value at the lenses focus on the target object.

```
const xLens = R.lensProp('x')

R.view(xLens, {x: 1, y: 2}) //=> 1
R.view(xLens, {x: 4, y: 2}) //=> 4
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/view.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/without.spec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.without(%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try in REPL</a>

---
#### xor

> xor(a: boolean, b: boolean): boolean

Logical xor function

```
R.xor(false, true)
// => true

R.xor(true, true)
// => false
```

[Test](https://github.com/selfrefactor/rambda/blob/master/src/xor.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/zip.spec.js)

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

[Test](https://github.com/selfrefactor/rambda/blob/master/src/zipObj.spec.js)


Ramda filter works with objects


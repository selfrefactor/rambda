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


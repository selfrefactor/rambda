
INTRO_FOO

## API

### add

> add(a: number, b: number): number

It adds `a` and `b`. It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
R.add(2, 3) // =>  5
```

> Note
It doesn't work with strings

### adjust

> adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[]

It replaces `index` in array `list` with the result of `replaceFn(arr[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```


<details>

<summary>

Rambda.adjust failed spec against **Ramda.adjust** 

> Reason for the failure: ramda accepts an array-like object

</summary>

var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('adjust', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.adjust(2, R.add(1), args(0, 1, 2, 3)), [0, 1, 3, 3]);
  });
});

<details>


### all

> all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(fn, arr)
// => true
```

### allPass

> allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean

### always

> always<T>(x: T): () => T

### and

> and<T extends { and?: ((...a: readonly any[]) => any)

### any

> any<T>(fn: (x: T, i: number) => boolean, arr: ReadonlyArray<T>): boolean

### anyPass

> anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>

### append

> append<T>(el: T, list: ReadonlyArray<T>): T[]

### applySpec

> applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
  obj: Obj
): (
    ...args: Parameters<ValueOfRecord<Obj>>
  ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> }

### assoc

> assoc<T, U, K extends string>(prop: K, value: T, obj: U): Record<K, T> & U

### assocPath

> assocPath<T, U>(path: Path, val: T, obj: U): U

### both

> both(pred1: Pred, pred2: Pred): Pred

### clamp

> clamp(min: number, max: number, input: number): number

### clone

> clone<T>(value: T): T

### complement

> complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean

### compose

> compose<T1>(fn0: () => T1): () => T1

### concat

> concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[]

### cond

> cond(fns: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any

### curry

> curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>

### dec

> dec(n: number): number

### defaultTo

> defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T

### difference

> difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### dissoc

> dissoc<T>(prop: string, obj: any): T

### divide

> divide(a: number, b: number): number

### drop

> drop<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[]

### dropLast

> dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[]

### either

> either(pred1: Pred, pred2: Pred): Pred

### endsWith

> endsWith(a: string, list: string): boolean

### equals

> equals<T>(a: T, b: T): boolean

### F

> F(): boolean

### filter

> filter<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[]

### find

> find<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined

### findIndex

> findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number

### flatten

> flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[]

### flip

> flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult

### forEach

> forEach<T>(fn: (x: T) => void, list: T[]): T[]

### fromPairs

> fromPairs<V>(pairs: KeyValuePair<string, V>[]): { [index: string]: V }

### groupBy

> groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }

### groupWith

> groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][]

### has

> has<T>(prop: string, obj: T): boolean

### head

> head<T>(arrOrStr: T[]): T | undefined

### identical

> identical<T>(a: T, b: T): boolean

### identity

> identity<T>(x: T): T

### ifElse

> ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn

### inc

> inc(n: number): number

### includes

> includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean

### indexBy

> indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T }

### indexOf

> indexOf<T>(target: T, arr: ReadonlyArray<T>): number

### init

> init<T>(arrOrStr: ReadonlyArray<T>): T[]

### intersection

> intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### intersperse

> intersperse<T>(separator: T, list: ReadonlyArray<T>): T[]

### is

> is(xPrototype: any, x: any): boolean

### isEmpty

> isEmpty<T>(input: T): boolean

### isNil

> isNil(x: any): x is null | undefined

### join

> join(x: string, xs: ReadonlyArray<any>): string

### keys

> keys<T extends object>(x: T): (keyof T)[]

### last

> last<T>(arrOrStr: T[]): T | undefined

### lastIndexOf

> lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number

### length

> length<T>(list: ReadonlyArray<T>): number

### lens

> lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens

### lensIndex

> lensIndex(n: number): Lens

### lensProp

> lensProp(str: string): {
  <T, U>(obj: T): U

### map

> map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>

### match

> match(regexp: RegExp, str: string): any[]

### max

> max<T extends Ord>(a: T, b: T): T

### maxBy

> maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T

### mean

> mean(list: ReadonlyArray<number>): number

### median

> median(list: ReadonlyArray<number>): number

### merge

> merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>

### min

> min<T extends Ord>(a: T, b: T): T

### minBy

> minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T

### modulo

> modulo(a: number, b: number): number

### multiply

> multiply(a: number, b: number): number

### negate

> negate(a: number): number

### none

> none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean

### not

> not(x: any): boolean

### nth

> nth<T>(n: number, list: ReadonlyArray<T>): T | undefined

### omit

> omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>

### over

> over<T>(lens: Lens, fn: Arity1Fn, value: T): T

### partial

> partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T

### path

> path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined

### pathOr

> pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T

### paths

> paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[]

### pick

> pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>

### pickAll

> pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U

### pipe

> pipe<T1>(fn0: () => T1): () => T1

### pluck

> pluck<T>(property: number, arr: ReadonlyArray<T>): T

### prepend

> prepend<T>(x: T, arr: ReadonlyArray<T>): T[]

### product

> product(list: ReadonlyArray<number>): number

### prop

> prop<P extends keyof T, T>(propToFind: P, obj: T): T[P]

### propEq

> propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean

### propIs

> propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean

### propOr

> propOr<T, U, V>(val: T, p: string, obj: U): V

### range

> range(start: number, end: number): number[]

### reduce

> reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult

### reject

> reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[]

### repeat

> repeat<T>(a: T, n: number): T[]

### replace

> replace(strOrRegex: RegExp | string, replacer: string, str: string): string

### reverse

> reverse<T>(list: ReadonlyArray<T>): T[]

### set

> set<T, U>(lens: Lens, a: U, obj: T): T

### slice

> slice(a: number, b: number, list: string): string

### sort

> sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[]

### sortBy

> sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[]

### split

> split(sep: string | RegExp): (str: string) => string[]

### splitEvery

> splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][]

### startsWith

> startsWith(a: string, list: string): boolean

### subtract

> subtract(a: number, b: number): number

### sum

> sum(list: ReadonlyArray<number>): number

### symmetricDifference

> symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### T

> T(): boolean

### tail

> tail<T>(arrOrStr: ReadonlyArray<T>): T[]

### take

> take<T>(num: number, arrOrStr: ReadonlyArray<T>): T[]

### takeLast

> takeLast<T>(num: number, arrOrStr: ReadonlyArray<T>): T[]

### tap

> tap<T>(fn: (a: T) => any, value: T): T

### test

> test(regExpression: RegExp): (str: string) => boolean

### times

> times<T>(fn: (i: number) => T, n: number): T[]

### toLower

> toLower(str: string): string

### toPairs

> toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][]

### toString

> toString<T>(val: T): string

### toUpper

> toUpper(str: string): string

### transpose

> transpose<T>(list: T[][]): T[][]

### trim

> trim(str: string): string

### type

> type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN"

### uniq

> uniq<T>(arr: ReadonlyArray<T>): T[]

### uniqWith

> uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[]

### update

> update<T>(index: number, value: T, list: ReadonlyArray<T>): T[]

### values

> values<T extends object, K extends keyof T>(obj: T): T[K][]

### view

> view<T, U>(lens: Lens): (obj: T) => U

### without

> without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[]

### xor

> xor(a: boolean, b: boolean): boolean

### zip

> zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[]

### zipObj

> zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T }


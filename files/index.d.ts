import { FToolbelt } from "../_ts-toolbelt/src/index";

type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise";

type FilterFunctionArray<T> = (x: T, index: number) => boolean;
type FilterFunctionObject<T> = (x: T, prop: string, inputObj: Dictionary<T>) => boolean;
type MapFunctionObject<T, U> = (x: T, prop: string, inputObj: Dictionary<T>) => U;
type MapFunctionArray<T, U> = (x: T, index: number) => U;

type SimplePredicate<T> = (x: T) => boolean;

type CommonKeys<T1, T2> = keyof T1 & keyof T2;

type Ord = number | string | boolean | Date;

type Path = string | ReadonlyArray<(number | string)>;
type RamdaPath = (number | string)[];

type ValueOfRecord<R> =
  R extends Record<any, infer T>
  ? T
  : never;

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}
interface Lens {
  <T, U>(obj: T): U;
  set<T, U>(str: string, obj: T): U;
}
type Arity1Fn = (a: any) => any;

type Arity2Fn = (a: any, b: any) => any;

type Pred = (...a: any[]) => boolean;
type Predicate<T> = (input: T) => boolean;
type SafePred<T> = (...a: T[]) => boolean;

interface Dictionary<T> {
  [index: string]: T;
}

type Merge<Primary, Secondary> = { [K in keyof Primary]: Primary[K] } & { [K in Exclude<keyof Secondary, CommonKeys<Primary, Secondary>>]: Secondary[K] };

// RAMBDAX INTERFACES
// ============================================
type Func<T> = (input: any) => T;
type Predicatex<T> = (input: T, index: number) => boolean;
type Fn<In, Out> = (x: In) => Out;
type FnTwo<In, Out> = (x: In, y: In) => Out;
type MapFn<In, Out> = (x: In, index: number) => Out;

type FilterFunction<T> = (x: T, prop?: string, inputObj?: object) => boolean;
type PartitionPredicate<T> = (x: T, prop?: string) => boolean;
type MapFunction<In, Out> = (x: In, prop?: string, inputObj?: object) => Out;
type SortObjectPredicate<T> = (aProp: string, bProp: string, aValue?: T, bValue?: T) => number;

interface MapInterface<T> {
  (list: T[]): T[];
  (obj: Dictionary<T>): Dictionary<T>;
}

interface HeadObject<T> {
  prop: string;
  value: T;
}

type IdentityFunction<T> = (x: T) => T;

interface Filter<T> {
  (list: T[]): T[];
  (obj: Dictionary<T>): Dictionary<T>;
}

type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;

type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;

type isfn<T> = (x: any, y: any) => T;

interface Switchem<T> {
  is: isfn<Switchem<T>>;
  default: IdentityFunction<T>;
}
interface HeadObject<T> {
  prop: string;
  value: T;
}
interface Reduced {
  [index: number]: any;
  [index: string]: any;
}

interface ObjectWithPromises {
  [key: string]: Promise<any>;
}

interface Schema {
  [key: string]: any;
}
interface SchemaAsync {
  [key: string]: Promise<boolean>;
}

interface IsValid {
  input: object;
  schema: Schema;
}

interface IsValidAsync {
  input: object;
  schema: Schema | SchemaAsync;
}

type Async<T> = (x: any) => Promise<T>;
type AsyncWithMap<T> = (x: any, i?: number) => Promise<T>;
type AsyncWithProp<T> = (x: any, prop?: string) => Promise<T>;

/*
Method: add

Explanation:

It adds `a` and `b`.

Example:

```
R.add(2, 3) // =>  5
```

Categories: Number

Notes: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

*/
// @SINGLE_MARKER
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

/*
Method: adjust

Explanation:

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

Example:

```
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[];
export function adjust<T>(index: number, replaceFn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

/*
Method: all

Explanation:

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

Example:

```
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(fn, arr)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/*
Method: allPass

Explanation: It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

Example:

```
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

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;

/*
Method: always

Explanation: It returns function that always returns `x`.

Example:

```
const fn = R.always(7)

console.log(fn())// => 7
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function always<T>(x: T): () => T;

/*
Method: and

Explanation: Returns `true` if both arguments are `true`. Otherwise, it returns `false`.

Example:

```
R.and(true, true); // => true
R.and(false, true); // => false
```  

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

/*
Method: any

Explanation: It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.

Example:

```
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
export function any<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/*
Method: anyPass

Explanation: It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

Example:

```
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = const result = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) // => true
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;

/*
Method: append

Explanation: It appends element `el` to a `list` array.

Example:

```
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function append<T>(el: T, list: ReadonlyArray<T>): T[];
export function append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

/*
Method: applySpec

Explanation: Returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.

Example:

```
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

Categories: Function

Notes: The currying in this function works best with functions with 4 arguments or less. (arity of 4)

*/
// @SINGLE_MARKER
export function applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
    ...args: Parameters<ValueOfRecord<Spec>>
  ) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
export function applySpec<T>(spec: any): (...args: readonly any[]) => T;

/*
Method: assoc

Explanation: It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

Example:

```
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

Categories: Object

Notes: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

*/
// @SINGLE_MARKER
export function assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;

/*
Method: assocPath

Explanation: It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

Example:

```
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

Categories:

Notes: Object

*/
// @SINGLE_MARKER
export function assocPath<T, U>(path: Path, newValue: T, obj: U): U;
export function assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): FToolbelt.Curry<(a: T, b: U) => U>;

/*
Method: both

Explanation: It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

Example:

```
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function both(pred1: Pred, pred2: Pred): Pred;
export function both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
export function both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
export function both(pred1: Pred): (pred2: Pred) => Pred;

/*
Method: clamp

Explanation: Restrict a number `input` to be withing `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

Example:

```
R.clamp(0, 10, 5) //=> 5
R.clamp(0, 10, -1) //=> 0
R.clamp(0, 10, 11) //=> 10
```

Categories: Other

Notes:

*/
// @SINGLE_MARKER
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number): (input: number) => number;

/*
Method:

Explanation: It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

Example:

```
const objects = [{a: 1}, {b: 2}];
const objectsClone = R.clone(objects);

const result = [
  R.equals(objects, objectsClone),
  R.equals(objects[0], objectsClone[0]),
] // => [ true, true ]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function clone<T>(input: T): T;
export function clone<T>(input: ReadonlyArray<T>): T[];

/*
Method: complement

Explanation: It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.


Example:

```
const origin = x => x > 5
const inverted = complement(origin)

const result = [
  origin(7),
  inverted(7)
] => [ true, false ]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

/*
Method: compose

Explanation: It performs right-to-left function composition.

Example:

```
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function compose<T1>(fn0: () => T1): () => T1;
export function compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export function compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

export function compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2;
export function compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
export function compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
export function compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

export function compose<T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T3;
export function compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
export function compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
export function compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

export function compose<T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T4;
export function compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
export function compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
export function compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

export function compose<T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T5;
export function compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
export function compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
export function compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

export function compose<T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T6;
export function compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
export function compose<V0, V1, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
export function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;

/*
Method: concat

Explanation: It returns a new string or array, which is the result of merging `x` and `y`.

Example:

```
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
export function concat(x: string, y: string): string;
export function concat(x: string): (y: string) => string;

/*
Method: cond

Explanation: It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.

Example:

```
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

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
export function cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;

/*
Method: converge

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;

/*
Method: curry

Explanation: It expects a function as input and returns its curried version.

Example:

```
const fn = (a, b, c) => a + b + c
const curried = R.curry(fn)
const sum = curried(1,2)

const result = sum(3) // => 6
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>;

/*
Method: curryN

Explanation: It returns a curried equivalent of the provided function, with the specified arity.

Example:

```

```

Categories:

Notes: Function

*/
// @SINGLE_MARKER
export function curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/*
Method: dec

Explanation: It decrements a number.



Example:

```

```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function dec(x: number): number;

/*
Method: defaultTo

Explanation:
It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

Example:

```
// With single input argument
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// With multiple input arguments
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'qux') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'quz') // => 'qux'
```

Categories: Logic

Notes: `Ramda` library works with a single input argument, while `Rambda` allows multiple arguments.

*/
// @SINGLE_MARKER
export function defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
export function defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
export function defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;

/*
Method: difference

Explanation: It returns the uniq set of all elements in the first list `a` not contained in the second list `b`. 

Example:

```
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = difference(a, b)
// => [ 1, 2 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
export function difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

/*
Method: dissoc

Explanation: It returns a new object that does not contain property `prop`.

Example:

```
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc(prop: string): <U>(obj: any) => U;

/*
Method: divide

Explanation:

Example:

```
R.divide(71, 100) // => 0.71
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

/*
Method: drop

Explanation: It returns `listOrString` with `howManyToDrop` items dropped from its beginning.

Example:

```
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
export function drop(howManyToDrop: number, listOrString: string): string;
export function drop<T>(howManyToDrop: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};

/*
Method: dropLast

Explanation: It returns `listOrString` with `howManyToDrop` items dropped from its end.

Example:

```
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
export function dropLast(howManyToDrop: number, listOrString: string): string;
export function dropLast<T>(howManyToDrop: number): {
  (listOrString: ReadonlyArray<T>): T[];
  (listOrString: string): string;
};

/*
Method:

Explanation: It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.

This `predicate` function will return `true`, if any of the two input predicates return `true`.

Example:

```
const firstPredicate = x => x > 10
const secondPredicate = x => x % 2 === 0
const predicate = R.either(firstPredicate, secondPredicate)

const result = [
  predicate(15),
  predicate(8),
  predicate(7),
]
//=> [true, true, false]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function either(firstPredicate: Pred, secondPredicate: Pred): Pred;
export function either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;

/*
Method: endsWith

Explanation: It returns `true` if `input` string ends with `suffix`.

Example:

```
const input = 'foo-bar'
const suffix = '-bar'

const result = R.endsWith(suffix, input)
// => true
```

Categories: String

Notes: It doesn't work with arrays.

*/
// @SINGLE_MARKER
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;

/*
Method: equals

Explanation: It deeply compares `a` and `b` and returns `true` if they are equal.

Example:

```
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

Categories: Logic

Notes: It doesn't handle cyclical data structures.

*/
// @SINGLE_MARKER
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;

/*
Method: F

Explanation:

Example:

```
F() // => false
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function F(): boolean;

/*
Method: filter

Explanation: It filters list or object `input` with `predicate`.

Example:

```
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

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
export function filter<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
export function filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

/*
Method: find

Explanation: It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate, list)
// => {foo: 1}
```

Categories: List

Notes: 

*/
// @SINGLE_MARKER
export function find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
export function find<T>(predicate: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;

/*
Method: findIndex

Explanation: It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate, list)
// => 1
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
export function findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;

/*
Method: findLast

Explanation: It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate, list)
// => {foo: 1}
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

/*
Method: findLastIndex

Explanation: It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate, list)
// => 1
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

/*
Method: flatten

Explanation: It deeply flattens an array.

Example:

```
const result = R.flatten([
  1, 
  2, 
  [3, 30, [300]], 
  [4]
])
// => [ 1, 2, 3, 30, 300, 4 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

/*
Method: flip

Explanation: It returns function which calls `fn` with exchanged first and second argument.

Example:

```
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.flip(1,6)
]  
// => [6, -6]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;

/*
Method: forEach

Explanation: It applies `iterable` function over all members of `list` and returns `list`.

Example:

```
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect //=> {foo1: 1, foo2: 2}
result //=> [1, 2]
```

Categories: List, Object

Notes: It works with objects, unlike `Ramda`.

*/
// @SINGLE_MARKER
export function forEach<T>(fn: (x: T) => void, list: T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
export function forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

/*
Method: fromPairs

Explanation: It transforms a `listOfPairs` to an object.

Example:

```
const listOfPairs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(listOfPairs)
// expected === result
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
export function fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };

/*
Method: groupBy

Explanation: It splits `list` according to a provided `groupFn` function and returns an object.

Example:

```
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
export function groupBy<T>(groupFn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

/*
Method: groupWith

Explanation: It returns separated version of `list`, where separation is done with equality `compareFn` function.

Example:

```
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];

/*
Method: has

Explanation: It returns `true` if `obj` has property `prop`.

Example:

```
const obj = {a: 1}

const result = [
  R.has('a', obj),
  R.has('b', obj)
]
// => [true, false]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;

/*
Method:

Explanation: It returns the first element of `listOrString`.

Example:

```
const result = [
  R.head([1, 2, 3]),
  R.head('foo') 
]
// => [1, 'f']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function head<T>(listOrString: T[]): T | undefined;
export function head(listOrString: string): string;

/*
Method: identical

Explanation: It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`. 

Example:

```
const obj = {a: 1};
R.identical(obj, obj); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

Categories: Logic

Notes: Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.

*/
// @SINGLE_MARKER
export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;

/*
Method: identity

Explanation: It just passes back the supplied `input` argument.

Example:

```
R.identity(7) // => 7
```

Categories:

Notes: Logic

*/
// @SINGLE_MARKER
export function identity<T>(input: T): T;

/*
Method: ifElse

Explanation: It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.

Example:

```
const fn = R.ifElse(
 x => x>10,
 x => x*2,
 x => x*10
)

const result = [ fn(8), fn(18) ]
// => [80, 36]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function ifElse(condition: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
export function ifElse(condition: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

/*
Method: inc

Explanation: It increments a number.

Example:

```
R.inc(1) // => 2
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function inc(x: number): number;

/*
Method:

Explanation: If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

Example:

```
const result = [
  R.includes('oo', 'foo'),
  R.includes({a: 1}, [{a: 1}])
]
// => [true, true ]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
export function includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
export function includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
export function includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;

/*
Method: indexBy

Explanation: It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.

Example:

```
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

Categories: List
 
Notes:

*/
// @SINGLE_MARKER
export function indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: string, list: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: (x: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
export function indexBy<T>(condition: string): (list: ReadonlyArray<T>) => { [key: string]: T };

/*
Method: indexOf

Explanation: It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

Example:

```
const list = [0, 1, 2, 3]

const result = [
  R.indexOf(2, list),
  R.indexOf(0, list)
]
// => [2, -1]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number;
export function indexOf<T>(valueToFind: T): (list: ReadonlyArray<T>) => number;

/*
Method: init

Explanation: It returns all but the last element of `listOrString`.

Example:

```
const result = [
  R.init([1, 2, 3]) , 
  R.init('foo')  // => 'fo'
]
// => [[1, 2], 'fo']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function init<T>(listOrString: ReadonlyArray<T>): T[];
export function init(listOrString: string): string;

/*
Method: intersection

Explanation: It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

Example:

```
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[];
export function intersection<T>(listA: ReadonlyArray<T>): (listB: ReadonlyArray<T>) => T[];

/*
Method: intersperse

Explanation: It adds a `separator` between members of `list`.

Example:

```
const list = [ 0, 1, 2, 3 ]
const separator = '|'
const result = intersperse(separator, list)
// => [0, '|', 1, '|', 2, '|', 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
export function intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

/*
Method: is

Explanation: It returns `true` is `x` is instance of `targetPrototype`.

Example:

```
const result = [
  R.is(String, 'foo'),  
  R.is(Array, 1)
]
// => [true, false]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function is(targetPrototype: any, x: any): boolean;
export function is(targetPrototype: any): (x: any) => boolean;

/*
Method: isEmpty

Explanation: It returns `true` is `x` is `empty`.

Example:

```
const result = [
  R.isEmpty(''),
  R.isEmpty({ x : 0 })
]
// => [true, false]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isEmpty<T>(x: T): boolean;

/*
Method: isNil

Explanation: It returns `true` is `x` is either `null` or `undefined`.

Example:

```
const result = [
  R.isNil(null),
  R.isNil(1),
]
// => [true, false]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isNil(x: any): x is null | undefined;

/*
Method: join

Explanation: It returns a string representing `list` instances joined with `glue`.

Example:

```
R.join('-', [1, 2, 3])  // => '1-2-3'
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function join(x: string, xs: ReadonlyArray<any>): string;
export function join(x: string): (xs: ReadonlyArray<any>) => string;

/*
Method: keys

Explanation: It applies `Object.keys` over `x` and returns its keys.

Example:

```
R.keys({a:1, b:2})  // => ['a', 'b']
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function keys<T extends object>(x: T): (keyof T)[];
export function keys<T>(x: T): string[];

/*
Method: last

Explanation: It returns the last element of `listOrString`.

Example:

```
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function last<T>(listOrString: T[]): T | undefined;
export function last(listOrString: string): string;

/*
Method: lastIndexOf

Explanation: It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.

Example:

```
const list = [1, 2, 3, 1, 2, 3]
const result = [
  R.lastIndexOf(2, list),
  R.lastIndexOf(4, list),
]
// => [4, -1]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;
export function lastIndexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function length<T>(list: ReadonlyArray<T>): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function lensIndex(n: number): Lens;
export function lensPath(path: RamdaPath): Lens;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function lensProp(str: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function set<T, U>(lens: Lens, a: U, obj: T): T;
export function set<U>(lens: Lens, a: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(a: U, obj: T) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function view<T, U>(lens: Lens): (obj: T) => U;
export function view<T, U>(lens: Lens, obj: T): U;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>;
export function map<T, U>(mapFn: MapFunctionArray<T, U>, x: T[]): U[];
export function map<T, U>(mapFn: MapFunctionArray<T, U>): (x: T[]) => U[];
export function map<T, U, S>(mapFn: MapFunctionObject<T, U>): (x: Dictionary<T>) => Dictionary<U>;
export function map<T>(mapFn: MapFunctionArray<T, T>): (x: T[]) => T[];
export function map<T>(mapFn: MapFunctionArray<T, T>, x: ReadonlyArray<T>): T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function match(regexp: RegExp, str: string): any[];
export function match(regexp: RegExp): (str: string) => any[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function max<T extends Ord>(a: T, b: T): T;
export function max<T extends Ord>(a: T): (b: T) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function maxBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mean(list: ReadonlyArray<number>): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function median(list: ReadonlyArray<number>): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
export function merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function min<T extends Ord>(a: T, b: T): T;
export function min<T extends Ord>(a: T): (b: T) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function minBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function modulo(a: number, b: number): number;
export function modulo(a: number): (b: number) => number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function negate(a: number): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function not(x: any): boolean;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
export function nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
export function omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;
export function partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
export function path<T>(pathToSearch: string | string[], obj: any): T | undefined;
export function path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
export function path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
export function paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
export function paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
export function paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): FToolbelt.Curry<(a: Path, b: any) => T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
export function pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
export function pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pipe<T1>(fn0: () => T1): () => T1;
export function pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export function pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

export function pipe<T1, T2>(fn0: () => T1, fn1: (x: T1) => T2): () => T2;
export function pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
export function pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
export function pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

export function pipe<T1, T2, T3>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): () => T3;
export function pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
export function pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
export function pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

export function pipe<T1, T2, T3, T4>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): () => T4;
export function pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
export function pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
export function pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

export function pipe<T1, T2, T3, T4, T5>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): () => T5;
export function pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
export function pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

export function pipe<T1, T2, T3, T4, T5, T6>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): () => T6;
export function pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn: (x: T6) => T7): () => T7;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn: (x: T6) => T7): (x: V0) => T7;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn: (x: T7) => T8): () => T8;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn: (x: T7) => T8): (x: V0) => T8;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): () => T9;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0) => T9;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: () => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): () => T10;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0) => T10;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6,
  fn6: (x: T6) => T7,
  fn7: (x: T7) => T8,
  fn8: (x: T8) => T9,
  fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pluck<T>(property: number, arr: ReadonlyArray<T>): T;
export function pluck<K extends keyof T, T>(property: K, arr: ReadonlyArray<T>): T[K][];
export function pluck(property: number): <T>(arr: ReadonlyArray<T>) => T;
export function pluck<P extends string>(property: P): <T>(arr: ReadonlyArray<Record<P, T>>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function prepend<T>(x: T, arr: ReadonlyArray<T>): T[];
export function prepend<T>(x: T): (arr: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function product(list: ReadonlyArray<number>): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
export function propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
export function propEq(propToFind: string | number): {
  <T>(valueToMatch: T, obj: any): boolean;
  <T>(valueToMatch: T): (obj: any) => boolean;
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
export function propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function propOr<T, U, V>(val: T, p: string, obj: U): V;
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function range(start: number, end: number): number[];
export function range(start: number): (end: number) => number[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
export function reject<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
export function reject<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function reject<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function repeat<T>(a: T, n: number): T[];
export function repeat<T>(a: T): (n: number) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
export function replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
export function replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function reverse<T>(list: ReadonlyArray<T>): T[];
export function reverse(str: string): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function slice(a: number, b: number, list: string): string;
export function slice<T>(a: number, b: number, list: T[]): T[];
export function slice(a: number, b: number): {
  (list: string): string;
  <T>(list: T[]): T[];
};
export function slice(a: number): {
  (b: number, list: string): string;
  <T>(b: number, list: T[]): T[];
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (arr: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(arr: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
export function splitEvery(a: number, list: string): string[];
export function splitEvery(a: number): {
  (list: string): string[];
  <T>(list: ReadonlyArray<T>): T[][];
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function startsWith(a: string, list: string): boolean;
export function startsWith(a: string): (list: string) => boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function sum(list: ReadonlyArray<number>): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function T(): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function tail<T>(listOrString: ReadonlyArray<T>): T[];
export function tail(listOrString: string): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function take<T>(num: number, listOrString: ReadonlyArray<T>): T[];
export function take(num: number, listOrString: string): string;
export function take<T>(num: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function takeLast<T>(num: number, listOrString: ReadonlyArray<T>): T[];
export function takeLast(num: number, listOrString: string): string;
export function takeLast(num: number): {
  <T>(listOrString: ReadonlyArray<T>): T[];
  (listOrString: string): string;
};

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function tap<T>(fn: (a: T) => any, value: T): T;
export function tap<T>(fn: (a: T) => any): (value: T) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function test(regExpression: RegExp): (str: string) => boolean;
export function test(regExpression: RegExp, str: string): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function transpose<T>(list: T[][]): T[][];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function toLower(str: string): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function toString<T>(val: T): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function toUpper(str: string): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function trim(str: string): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function uniq<T>(arr: ReadonlyArray<T>): T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[];
export function uniqWith<T, U>(fn: (x: T, y: T) => boolean): (arr: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
export function update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function values<T extends object, K extends keyof T>(obj: T): T[K][];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function xor(a: boolean, b: boolean): boolean;
export function xor(a: boolean): (b: boolean) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[];
export function zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => KeyValuePair<K, V>[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
export function zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };

// RAMBDAX_MARKER_START

/*
Method: allFalse

Explanation: It returns `true` if all `inputs` arguments return `false` when passed to `Boolean`.

Example:

```
R.allFalse(null, undefined, '', () => false)
//=> true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function allFalse(...inputs: any[]): boolean;

/*
Method: anyFalse

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function anyFalse(...input: any[]): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function allTrue(...input: any[]): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function anyTrue(...input: any[]): boolean;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function allType(targetType: RambdaTypes): (...input: any[]) => boolean;
export function anyType(targetType: RambdaTypes): (...input: any[]) => boolean;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function change<T>(
  origin: object,
  path: string,
  changeData: any
): T;

export function change<Input, Output>(
  origin: Input,
  path: string,
  changeData: any
): Output;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function compact<T>(x: any[]): T[];


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function composeAsync<Out>(
  ...fns: (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;
export function pipeAsync<Out>(
  ...fns: (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function count<T>(target: T, list: any[]): number;
export function count<T>(target: T): (list: any[]) => number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function debounce<T>(fn: T, ms: number): ReplaceReturnType<T, void>;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function defaultToStrict<T>(
  fallback: T,
  ...inputs: T[]
): T;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function delay(ms: number): Promise<'RAMBDAX_DELAY'>;

//  export const DELAY: 'RAMBDAX_DELAY'


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function glue(input: string, glueString?: string): string;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function getter<T>(keyOrKeys: string | string[] | undefined): T;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function setter(keyOrObject: string | object, value?: any): void;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function reset(): void;


/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function hasPath<T>(
  path: string | string[],
  input: object
): boolean;
export function hasPath<T>(
  path: string | string[]
): (input: object) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function ifElseAsync<T>(
  condition: Async<any> | Func<any>,
  ifFn: Async<any> | Func<any>,
  elseFn: Async<any> | Func<any>
): Async<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function includesType(
  targetType: RambdaTypes,
): (list: any[]) => boolean;
export function includesType(
  targetType: RambdaTypes,
  list: any[]
): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function isFalsy(input: any): boolean;
export function isType(targetType: RambdaTypes, input: any): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function isPromise(
  maybePromiseOrAsync: any
): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function isFunction(
  maybePromiseFunctionOrAsync: any
): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function maybe<T>(ifRule: any, whenIf: any, whenElse: any, maybeInput?: any): T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function filterAsync<T>(fn: (x: T) => Promise<boolean>, list: T[]): Promise<T[]>;
export function filterAsync<T>(fn: (x: T) => Promise<boolean>, obj: object): Promise<{
  [prop: string]: T
}>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mapAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>;
export function mapAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<T[]>;
export function mapAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<T[]>;
export function mapAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<T[]>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mapFastAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<T[]>;
export function mapFastAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<T[]>;
export function mapFastAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<T[]>;
export function mapFastAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<T[]>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mapAsyncLimit<T, U>(iterable: (x: T) => Promise<U>, limit: number, list: T[]): Promise<U[]>;
export function mapAsyncLimit<T, U>(iterable: (x: T) => Promise<U>, limit: number): (list: T[]) => Promise<U[]>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mapToObject<T, U>(fn: (input: T) => object, list: T[]): U;
export function mapToObject<T, U>(fn: (input: T) => object): (list: T[]) => U;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function memoize<T>(fn: Func<any> | Async<any>): T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mergeRight(x: object, y: object): object;
export function mergeRight(x: object): (y: object) => object;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mergeAll(input: object[]): object;
export function mergeDeep<T>(slave: object, master: object): T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function nextIndex(index: number, list: any[]): number;
export function nextIndex(index: number, list: number): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function prevIndex(index: number, list: any[]): number;
export function prevIndex(index: number, list: number): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function ok(...inputs: any[]): (...rules: any[]) => true | never;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pass(...inputs: any[]): (...rules: any[]) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function isValid(x: IsValid): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function isValidAsync(x: IsValidAsync): Promise<boolean>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function once(fn: Func<any>): Func<any>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function partition<T>(
  rule: PartitionPredicate<T>,
  input: { [key: string]: T }
): [object, object];
export function partition<T>(
  rule: PartitionPredicate<T>
): (input: { [key: string]: T }) => [object, object];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function partition<T>(
  rule: Predicatex<T>,
  input: T[]
): [T[], T[]];
export function partition<T>(
  rule: Predicatex<T>
): (input: T[]) => [T[], T[]];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pathEq(path: string | string[], target: any, obj: object): boolean;
export function pathEq(path: string | string[], target: any): (obj: object) => boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function piped<T>(input: any, ...fnList: Func<any>[]): T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pipedAsync<T>(
  input: any,
  ...fns: (Func<any> | Async<any>)[]
): Promise<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function produce<T>(
  conditions: any,
  input: any
): T;
export function produce<T>(
  conditions: any,
): (input: any) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function promiseAllObject<T>(
  input: ObjectWithPromises
): Promise<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function random(minInclusive: number, maxInclusive: number): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function remove(
  inputs: string | RegExp | (string | RegExp)[],
  text: string
): string;
export function remove(
  inputs: string | RegExp | (string | RegExp)[]
): (text: string) => string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function renameProps(fromKeyToProp: object, input: object): object;
export function renameProps(fromKeyToProp: object): (input: object) => object;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function s(): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function shuffle<T>(arr: T[]): T[];

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function sortObject<T>(predicate: SortObjectPredicate<T>, obj: { [key: string]: T }): { [keyOutput: string]: T };
export function sortObject<T>(predicate: SortObjectPredicate<T>): (obj: { [key: string]: T }) => { [keyOutput: string]: T };

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function switcher<T>(valueToMatch: any): Switchem<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T;
export function tapAsync<T>(fn: Func<any> | Promise<any>): (input: T) => T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function throttle<T>(fn: T, ms: number): ReplaceReturnType<T, void>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function toDecimal(num: number, charsAfterDecimalPoint?: number): number;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function template(inputWithTags: string, templateArguments: object): string;
export function template(inputWithTags: string): (templateArguments: object) => string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function tryCatch<T>(
  fn: any,
  fallback: any
): Async<T> | T;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function where(conditions: object, input: object): boolean;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function wait<T>(fn: Async<T>): Promise<[T, Error]>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function waitFor(
  waitForTrueCondition: () => any | Promise<any>,
  msHowLong: number
): (input?: any) => Promise<boolean>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function when<T>(
  rule: Func<boolean> | boolean, ruleTrue: any
): IdentityFunction<T>;
export function when<T>(
  rule: Func<boolean> | boolean
): (ruleTrue: any) => IdentityFunction<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function unless<T>(
  rule: Func<boolean> | boolean, ruleFalse: any
): IdentityFunction<T>;
export function unless<T>(
  ruleFalse: Func<boolean> | boolean
): (ruleTrue: any) => IdentityFunction<T>;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function randomString(length?: number, alphabetOnlyFlag?: boolean): string;

/*
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function whereEq(rule: object, input: any): boolean;
export function whereEq(rule: object): (input: any) => boolean;

// RAMBDAX_MARKER_END
// ============================================

export as namespace R

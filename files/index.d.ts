export type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise" | "Symbol";

export type IndexedIterator<T, U> = (x: T, i: number) => U;
export type Iterator<T, U> = (x: T) => U;
export type ObjectIterator<T, U> = (x: T, prop: string, inputObj: Dictionary<T>) => U;
type Ord = number | string | boolean | Date;
type Path = string | readonly (number | string)[];
type Predicate<T> = (x: T) => boolean;
export type IndexedPredicate<T> = (x: T, i: number) => boolean;
export type ObjectPredicate<T> = (x: T, prop: string, inputObj: Dictionary<T>) => boolean;
export type RamdaPath = readonly (number | string)[];

type ValueOfRecord<R> =
  R extends Record<any, infer T>
  ? T
  : never;

interface KeyValuePair<K, V> extends Array<K | V> {
  readonly 0: K;
  readonly 1: V;
}

export interface Lens {
  <T, U>(obj: T): U;
  set<T, U>(str: string, obj: T): U;
}

type Arity1Fn = (x: any) => any;
type Arity2Fn = (x: any, y: any) => any;

type Pred = (...x: readonly any[]) => boolean;
type SafePred<T> = (...x: readonly T[]) => boolean;

export interface Dictionary<T> {readonly [index: string]: T}
type Partial<T> = { readonly [P in keyof T]?: T[P]};

type Evolvable<E extends Evolver> = { readonly
  [P in keyof E]?: Evolved<E[P]>;
};

type Evolver<T extends Evolvable<any> = any> = { readonly
  [key in keyof Partial<T>]: ((value: T[key]) => T[key]) | (T[key] extends Evolvable<any> ? Evolver<T[key]> : never);
};

type Evolve<O extends Evolvable<E>, E extends Evolver> = { readonly
  [P in keyof O]: P extends keyof E
                  ? EvolveValue<O[P], E[P]>
                  : O[P];
};

type Evolved<A> =
    A extends (value: infer V) => any
    ? V
    : A extends Evolver
      ? Evolvable<A>
      : never;

type EvolveNestedValue<O, E extends Evolver> =
    O extends object
    ? O extends Evolvable<E>
      ? Evolve<O, E>
      : never
    : never;

type EvolveValue<V, E> =
    E extends (value: V) => any
    ? ReturnType<E>
    : E extends Evolver
      ? EvolveNestedValue<V, E>
      : never;

interface AssocPartialOne<K extends keyof any> {
  <T>(val: T): <U>(obj: U) => Record<K, T> & U;
  <T, U>(val: T, obj: U): Record<K, T> & U;
}

// RAMBDAX INTERFACES
// ============================================
type Func<T> = (input: any) => T;
type VoidInputFunc<T> = () => T;
type Fn<In, Out> = (x: In) => Out;
type SortObjectPredicate<T> = (aProp: string, bProp: string, aValue: T, bValue: T) => number;

type IdentityFunction<T> = (x: T) => T;

interface Filter<T> {
  (list: readonly T[]): readonly T[];
  (obj: Dictionary<T>): Dictionary<T>;
}

type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
type isfn<T> = (x: any, y: any) => T;

interface Switchem<T> {
  readonly is: isfn<Switchem<T>>;
  readonly default: IdentityFunction<T>;
}

interface Schema {
  readonly [key: string]: any;
}

interface SchemaAsync {
  readonly [key: string]: Promise<boolean>;
}

interface IsValid {
  readonly input: object;
  readonly schema: Schema;
}

interface IsValidAsync {
  readonly input: object;
  readonly schema: Schema | SchemaAsync;
}

type ProduceRules<Output,K extends keyof Output, Input> = { readonly
  [P in K]: (input: Input) => Output[P];
};
type ProduceAsyncRules<Output,K extends keyof Output, Input> = { readonly
  [P in K]: (input: Input) => Promise<Output[P]>;
};
type ProduceAsyncRule<Input> = (input: Input) => Promise<any>;
type Async<T> = (x: any) => Promise<T>;
type AsyncIterable<T, K> = (x: T) => Promise<K>;
type AsyncIterableIndexed<T, K> = (x: T, i: number) => Promise<K>;
type AsyncPredicate<T> = (x: T) => Promise<boolean>;
type AsyncPredicateIndexed<T> = (x: T, i: number) => Promise<boolean>;
type AsyncWithProp<T> = (x: any, prop?: string) => Promise<T>;

type ApplyDiffUpdate = {readonly op:'update', readonly path: string, readonly value: any};
type ApplyDiffAdd = {readonly op:'add', readonly path: string, readonly value: any};
type ApplyDiffRemove = {readonly op:'remove', readonly path: string};
type ApplyDiffRule = ApplyDiffUpdate | ApplyDiffAdd | ApplyDiffRemove;

// API_MARKER

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
export function adjust<T>(index: number, replaceFn: (x: T) => T, list: readonly T[]): readonly T[];
export function adjust<T>(index: number, replaceFn: (x: T) => T): (list: readonly T[]) => readonly T[];

/*
Method: all

Explanation: It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

Example:

```
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(predicate, list)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function all<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean;
export function all<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

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
export function allPass<T>(predicates: readonly ((x: T) => boolean)[]): (input: T) => boolean;

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

Explanation: Logical AND

Example:

```
R.and(true, true); // => true
R.and(false, true); // => false
R.and(true, 'foo'); // => 'foo'
```  

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function and<T, U>(x: T, y: U): T | U;
export function and<T>(x: T): <U>(y: U) => T | U;

/*
Method: or

Explanation: Logical OR

Example:

```
R.or(false, true); // => true
R.or(false, false); // => false
R.or(false, 'foo'); // => 'foo'
```  

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function or<T, U>(a: T, b: U): T | U;
export function or<T>(a: T): <U>(b: U) => T | U;

/*
Method: any

Explanation: It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.

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
export function any<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean;
export function any<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

/*
Method: anyPass

Explanation: It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

Example:

```
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) 
// => true
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function anyPass<T>(predicates: readonly SafePred<T>[]): SafePred<T>;

/*
Method: append

Explanation: It adds element `x` at the end of `list`.

Example:

```
const x = 'foo'

const result = R.append(x, ['bar', 'baz'])
// => ['bar', 'baz', 'foo']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function append<T>(x: T, list: readonly T[]): readonly T[];
export function append<T>(x: T): <T>(list: readonly T[]) => readonly T[];

/*
Method: applySpec

Explanation: 

Example:

```
const fn = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
})
const result = fn(2, 4) 
// => { sum: 6, nested: { mul: 8 } }
```

Categories: Function

Notes: The currying in this function works best with functions with 4 arguments or less. (arity of 4)

*/
// @SINGLE_MARKER
export function applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { readonly [Key in keyof Spec]: ReturnType<Spec[Key]> };
export function applySpec<T>(spec: any): (...args: readonly any[]) => T;

/*
Method: assoc

Explanation: It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

Example:

```
R.assoc('c', 3, {a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

Categories: Object

Notes: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

*/
// @SINGLE_MARKER
export function assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): AssocPartialOne<K>;

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

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function assocPath<Output>(path: Path, newValue: any, obj: object): Output;
export function assocPath<Output>(path: Path, newValue: any): (obj: object) => Output;
export function assocPath<Output>(path: Path): (newValue: any) => (obj: object) => Output;

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
Method: chain

Explanation:  The method is also known as `flatMap`. 

Example:

```
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = chain(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function chain<T, U>(fn: (n: T) => readonly U[], list: readonly T[]): readonly U[];
export function chain<T, U>(fn: (n: T) => readonly U[]): (list: readonly T[]) => readonly U[];
export function chain<X0, X1, R>(fn: (x0: X0, x1: X1) => R, fn1: (x1: X1) => X0): (x1: X1) => R;

/*
Method: clamp

Explanation: Restrict a number `input` to be within `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

Example:

```
const result = [
  R.clamp(0, 10, 5), 
  R.clamp(0, 10, -1),
  R.clamp(0, 10, 11)
]
// => [5, 0, 10]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number): (input: number) => number;

/*
Method: clone

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
export function clone<T>(input: readonly T[]): readonly T[];

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
export function complement<T extends readonly any[]>(pred: (...args: T) => boolean): (...args: T) => boolean;

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
export function concat<T>(x: readonly T[], y: readonly T[]): readonly T[];
export function concat<T>(x: readonly T[]): (y: readonly T[]) => readonly T[];
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
export function cond(conditions: readonly (readonly [Pred, (...a: readonly any[]) => any])[]): (...x: readonly any[]) => any;
export function cond<A, B>(conditions: readonly (readonly [SafePred<A>, (...a: readonly A[]) => B])[]): (...x: readonly A[]) => B;

/*
Method: converge

Explanation: Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

Example:

```
const result = R.converge(R.multiply)([ R.add(1), R.add(3) ])(2)
// => 15
```

Categories: Function

Notes: Explanation is taken from `Ramda` documentation

*/
// @SINGLE_MARKER
export function converge(after: ((...a: readonly any[]) => any), fns: ReadonlyArray<((...x: readonly any[]) => any)>): (...y: readonly any[]) => any;

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
export function curry(fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/*
Method: curryN

Explanation: It returns a curried equivalent of the provided function, with the specified arity.

Example:

```

```

Categories: Function

Notes:

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
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// Important - emtpy string is not falsy value(same as Ramda)
R.defaultTo('foo', '') // => 'foo'
```

Categories: Logic

Notes: Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

*/
// @SINGLE_MARKER
export function defaultTo<T>(defaultValue: T, input: T | null | undefined): T;
export function defaultTo<T>(defaultValue: T): (input: T | null | undefined) => T;

/*
Method: difference

Explanation: It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

`R.equals` is used to determine equality.

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
export function difference<T>(a: readonly T[], b: readonly T[]): readonly T[];
export function difference<T>(a: readonly T[]): (b: readonly T[]) => readonly T[];

/*
Method: dissoc

Explanation: It returns a new object that does not contain property `prop`.

Example:

```
R.dissoc('b', {a: 1, b: 2, c: 3})
// => {a: 1, c: 3}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc<T>(prop: string): (obj: any) => T;

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
export function divide(x: number, y: number): number;
export function divide(x: number): (y: number) => number;

/*
Method: drop

Explanation: It returns `howMany` items dropped from beginning of list or string `input`.

Example:

```
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function drop<T>(howMany: number, input: readonly T[]): readonly T[];
export function drop(howMany: number, input: string): string;
export function drop<T>(howMany: number): {
  <T>(input: readonly T[]): readonly T[];
  (input: string): string;
};

/*
Method: dropLast

Explanation: It returns `howMany` items dropped from the end of list or string `input`.

Example:

```
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLast<T>(howMany: number, input: readonly T[]): readonly T[];
export function dropLast(howMany: number, input: string): string;
export function dropLast<T>(howMany: number): {
  <T>(input: readonly T[]): readonly T[];
  (input: string): string;
};

/*
Method: either

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
// => [true, true, false]
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function either(firstPredicate: Pred, secondPredicate: Pred): Pred;
export function either<T>(firstPredicate: Predicate<T>, secondPredicate: Predicate<T>): Predicate<T>;
export function either<T>(firstPredicate: Predicate<T>): (secondPredicate: Predicate<T>) => Predicate<T>;
export function either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;

/*
Method: endsWith

Explanation: Curried version of `String.prototype.endsWith`

Example:

```
const str = 'foo-bar'
const target = '-bar'

const result = R.endsWith(target, str)
// => true
```

Categories: String

Notes: It doesn't work with arrays unlike its corresponding **Ramda** method.

*/
// @SINGLE_MARKER
export function endsWith(target: string, str: string): boolean;
export function endsWith(target: string): (str: string) => boolean;

/*
Method: equals

Explanation: It deeply compares `x` and `y` and returns `true` if they are equal.

Example:

```
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

Categories: Logic

Notes: It doesn't handle cyclical data structures and functions

*/
// @SINGLE_MARKER
export function equals<T>(x: T, y: T): boolean;
export function equals<T>(x: T): (y: T) => boolean;

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

Explanation: It filters list or object `input` using a `predicate` function.

Example:

```
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

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function filter<T>(predicate: Predicate<T>): (input: readonly T[]) => readonly T[];
export function filter<T>(predicate: Predicate<T>, input: readonly T[]): readonly T[];
export function filter<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;

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
export function find<T>(predicate: (x: T) => boolean, list: readonly T[]): T | undefined;
export function find<T>(predicate: (x: T) => boolean): (list: readonly T[]) => T | undefined;

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
export function findIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
export function findIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

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
export function findLast<T>(fn: (x: T) => boolean, list: readonly T[]): T | undefined;
export function findLast<T>(fn: (x: T) => boolean): (list: readonly T[]) => T | undefined;

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
export function findLastIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

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
export function flatten<T>(list: readonly any[]): readonly T[];

/*
Method: flip

Explanation: It returns function which calls `fn` with exchanged first and second argument.

Example:

```
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.subtract(1, 6)
]  
// => [6, -6]
```

Categories: Function

Notes: Rambda's **flip** will throw if the arity of the input function is greater or equal to 5.

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

sideEffect // => {foo1: 1, foo2: 2}
result // => [1, 2]
```

Categories: List, Object

Notes: It works with objects, unlike `Ramda`.

*/
// @SINGLE_MARKER
export function forEach<T>(fn: Iterator<T, void>, list: readonly T[]): readonly T[];
export function forEach<T>(fn: Iterator<T, void>): (list: readonly T[]) => readonly T[];
export function forEach<T>(fn: ObjectIterator<T, void>, list: Dictionary<T>): Dictionary<T>;
export function forEach<T, U>(fn: ObjectIterator<T, void>): (list: Dictionary<T>) => Dictionary<T>;

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
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function fromPairs<V>(listOfPairs: readonly (readonly [number, V])[]): { readonly [index: number]: V };
export function fromPairs<V>(listOfPairs: readonly (readonly [string, V])[]): { readonly [index: string]: V };

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
export function groupBy<T>(groupFn: (x: T) => string, list: readonly T[]): { readonly [index: string]: readonly T[] };
export function groupBy<T>(groupFn: (x: T) => string): (list: readonly T[]) => { readonly [index: string]: readonly T[] };

/*
Method: groupWith

Explanation: It returns separated version of list or string `input`, where separation is done with equality `compareFn` function.

Example:

```
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function groupWith<T>(compareFn: (x: T, y: T) => boolean): (input: readonly T[]) => readonly (readonly T[])[];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, input: readonly T[]): readonly (readonly T[])[];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, input: string): readonly string[];

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
Method: hasPath

Explanation: It will return true, if `input` object has truthy `path`(calculated with `R.path`).

Example:

```
const path = 'a.b'
const pathAsArray = ['a', 'b']
const obj = {a: {b: []}}

const result = [
  R.hasPath(path, obj),
  R.hasPath(pathAsArray, obj),
  R.hasPath('a.c', obj),
]
// => [true, true, false]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function hasPath<T>(
  path: string | readonly string[],
  input: object
): boolean;
export function hasPath<T>(
  path: string | readonly string[]
): (input: object) => boolean;

/*
Method: head

Explanation: It returns the first element of list or string `input`.

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
export function head<T>(input: readonly T[]): T | undefined;
export function head(input: string): string;

/*
Method: identical

Explanation: It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`. 

Example:

```
const obj = {a: 1};
R.identical(obj, obj); // => true
R.identical(1, 1); // => true
R.identical(1, '1'); // => false
R.identical([], []); // => false
R.identical(0, -0); // => false
R.identical(NaN, NaN); // => true
```

Categories: Logic

Notes: Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.

*/
// @SINGLE_MARKER
export function identical<T>(x: T, y: T): boolean;
export function identical<T>(x: T): (y: T) => boolean;

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
export function ifElse<T, U>(
  condition: (x: T) => boolean, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
): (x: T) => U;
export function ifElse<T, K, U>(
  condition: (x: T, y: K) => boolean, 
  onTrue: (x: T, y: K) => U, 
  onFalse: (x: T, y: K) => U, 
): (x: T, y: K) => U;

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
Method: includes

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
export function includes(valueToFind: string, input: readonly string[] | string): boolean;
export function includes(valueToFind: string): (input: readonly string[] | string) => boolean;
export function includes<T>(valueToFind: T, input: readonly T[]): boolean;
export function includes<T>(valueToFind: T): (input: readonly T[]) => boolean;

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
export function indexBy<T, K extends string | number = string>(condition: (key: T) => K, list: readonly T[]): { readonly [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K, list: readonly T[]): { readonly [key in NonNullable<K>]?: T };
export function indexBy<T, K extends string | number = string>(condition: (key: T) => K): (list: readonly T[]) => { readonly [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K | undefined): (list: readonly T[]) => { readonly [key in NonNullable<K>]?: T };
export function indexBy<T>(condition: string, list: readonly T[]): { readonly [key: string]: T };
export function indexBy<T>(condition: string): (list: readonly T[]) => { readonly [key: string]: T };

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
export function indexOf<T>(valueToFind: T, list: readonly T[]): number;
export function indexOf<T>(valueToFind: T): (list: readonly T[]) => number;

/*
Method: init

Explanation: It returns all but the last element of list or string `input`.

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
export function init<T>(input: readonly T[]): readonly T[];
export function init(input: string): string;

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

*/
// @SINGLE_MARKER
export function intersection<T>(listA: readonly T[], listB: readonly T[]): readonly T[];
export function intersection<T>(listA: readonly T[]): (listB: readonly T[]) => readonly T[];

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
export function intersperse<T>(separator: T, list: readonly T[]): readonly T[];
export function intersperse<T>(separator: T): (list: readonly T[]) => readonly T[];

/*
Method: is

Explanation: It returns `true` if `x` is instance of `targetPrototype`.

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

Explanation: It returns `true` if `x` is `empty`.

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

Explanation: It returns `true` if `x` is either `null` or `undefined`.

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

Explanation: It returns a string of all `list` instances joined with a `glue`.

Example:

```
R.join('-', [1, 2, 3])  // => '1-2-3'
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function join<T>(glue: string, list: readonly T[]): string;
export function join<T>(glue: string): (list: readonly T[]) => string;

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
export function keys<T extends object>(x: T): readonly (keyof T)[];
export function keys<T>(x: T): readonly string[];

/*
Method: last

Explanation: It returns the last element of `input`, as the `input` can be either a string or an array.

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
export function last(str: string): string;
export function last(emptyList: readonly []): undefined;
export function last<T extends any>(list: readonly T[]): T;

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
export function lastIndexOf<T>(target: T, list: readonly T[]): number;
export function lastIndexOf<T>(target: T): (list: readonly T[]) => number;

/*
Method: length

Explanation: It returns the `length` property of list or string `input`.

Example:

```
const result = [
  R.length([1, 2, 3, 4]),
  R.length('foo'),
]
// => [4, 3]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function length<T>(input: readonly T[]): number;

/*
Method: lens

Explanation: It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.

Example:

```
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) // => 1
R.set(xLens, 4, {x: 1, y: 2}) // => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) // => {x: -1, y: 2}
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

/*
Method: lensIndex

Explanation: It returns a lens that focuses on specified `index`.

Example:

```
const list = ['a', 'b', 'c']
const headLens = R.lensIndex(0)

R.view(headLens, list) // => 'a'
R.set(headLens, 'x', list) // => ['x', 'b', 'c']
R.over(headLens, R.toUpper, list) // => ['A', 'b', 'c']
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function lensIndex(index: number): Lens;

/*
Method: lensPath

Explanation: It returns a lens that focuses on specified `path`.

Example:

```
const lensPath = R.lensPath(['x', 0, 'y'])
const input = {x: [{y: 2, z: 3}, {y: 4, z: 5}]}

R.view(lensPath, input) // => 2

R.set(lensPath, 1, input) 
// => {x: [{y: 1, z: 3}, {y: 4, z: 5}]}

R.over(xHeadYLens, R.negate, input) 
// => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function lensPath(path: RamdaPath): Lens;
export function lensPath(path: string): Lens;

/*
Method: lensProp

Explanation: It returns a lens that focuses on specified property `prop`.

Example:

```
const xLens = R.lensProp('x');
const input = {x: 1, y: 2}

R.view(xLens, input) // => 1

R.set(xLens, 4, input) 
// => {x: 4, y: 2}

R.over(xLens, R.negate, input) 
// => {x: -1, y: 2}
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function lensProp(prop: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};

/*
Method: over

Explanation: It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

Example:

```
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) // => ['FOO', 'bar', 'baz']
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): readonly T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => readonly T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => readonly T[];

/*
Method: set

Explanation: It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.

Example:

```
const input = {x: 1, y: 2}
const xLens = R.lensProp('x')

R.set(xLens, 4, input) // => {x: 4, y: 2}
R.set(xLens, 8, input) // => {x: 8, y: 2}

```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function set<T, U>(lens: Lens, replacer: U, obj: T): T;
export function set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(replacer: U, obj: T) => T;

/*
Method: view

Explanation: It returns the value of `lens` focus over `target` object.

Example:

```
const lens = R.lensProp('x')

R.view(lens, {x: 1, y: 2}) // => 1
R.view(lens, {x: 4, y: 2}) // => 4
```

Categories: Lenses

Notes:

*/
// @SINGLE_MARKER
export function view<T, U>(lens: Lens): (target: T) => U;
export function view<T, U>(lens: Lens, target: T): U;

/*
Method: map

Explanation: It returns the result of looping through `iterable` with `fn`.

It works with both array and object. 

Example:

```
const fn = x => x * 2
const fnWhenObject = (val, prop)=>{
  return `${prop}-${val}`
}

const iterable = [1, 2]
const obj = {a: 1, b: 2}

const result = [ 
  R.map(fn, list),
  R.map(fnWhenObject, obj)
]
// => [ [1, 4], {a: 'a-1', b: 'b-2'}] 
```

Categories: List, Object

Notes: Unlike Ramda's `map`, here property and input object are passed as arguments to `fn`, when `iterable` is an object.

*/
// @SINGLE_MARKER
export function map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
export function map<T, U>(fn: Iterator<T, U>, iterable: readonly T[]): readonly U[];
export function map<T, U>(fn: Iterator<T, U>): (iterable: readonly T[]) => readonly U[];
export function map<T, U, S>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
export function map<T>(fn: Iterator<T, T>): (iterable: readonly T[]) => readonly T[];
export function map<T>(fn: Iterator<T, T>, iterable: readonly T[]): readonly T[];

/*
Method: match

Explanation: Curried version of `String.prototype.match` which returns empty array, when there is no match.

Example:

```
const result = [
  R.match('a', 'foo'),
  R.match(/([a-z]a)/g, 'bananas')
]
// => [[], ['ba', 'na', 'na']]
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function match(regExpression: RegExp, str: string): readonly string[];
export function match(regExpression: RegExp): (str: string) => readonly string[];

/*
Method: mathMod

Explanation: `R.mathMod` behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.

Example:

```
const result = [
  R.mathMod(-17, 5),
  R.mathMod(17, 5),
  R.mathMod(17, -5),  
  R.mathMod(17, 0)   
]
// => [3, 2, NaN, NaN]
```

Categories: Number

Notes: Explanation is taken from `Ramda` documentation site.

*/
// @SINGLE_MARKER
export function mathMod(x: number, y: number): number;
export function mathMod(x: number): (y: number) => number;

/*
Method: max

Explanation: It returns the greater value between `x` and `y`.

Example:

```
const result = [
  R.max(5, 7),  
  R.max('bar', 'foo'),  
]
// => [7, 'foo']
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function max<T extends Ord>(x: T, y: T): T;
export function max<T extends Ord>(x: T): (y: T) => T;

/*
Method: maxBy

Explanation: It returns the greater value between `x` and `y` according to `compareFn` function.

Example:

```
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
export function maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
export function maxBy<T>(compareFn: (input: T) => Ord): (x: T) => (y: T) => T;

/*
Method: mean

Explanation: It returns the mean value of `list` input.

Example:

```
R.mean([ 2, 7 ])
// => 4.5
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function mean(list: readonly number[]): number;

/*
Method: median

Explanation: It returns the median value of `list` input.

Example:

```
R.median([ 7, 2, 10, 9 ]) // => 8
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function median(list: readonly number[]): number;

/*
Method: merge

Explanation: It creates a copy of `target` object with overidden `newProps` properties. 

Example:

```
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.merge(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function merge<Output>(target: object, newProps: object): Output;
export function merge<Output>(target: object): (newProps: object) => Output;

/*
Method: mergeAll

Explanation: It merges all objects of `list` array sequentially and returns the result.

Example:

```
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

Categories:

Notes:

*/
// @SINGLE_MARKER
export function mergeAll<T>(list: readonly object[]): T;
export function mergeAll(list: readonly object[]): object;

/*
Method: mergeDeepRight

Explanation: Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

Example:

```
const x = { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
const y = { age: 40, contact: { email: 'baa@example.com' }}

const result = R.mergeDeepRight(x, y)
const expected = { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
// => `result` is equal to `expected`
```

Categories: Object

Notes: Explanation and example are taken from `Ramda` documentation.

*/
// @SINGLE_MARKER
export function mergeDeepRight<Output>(target: object, newProps: object): Output;
export function mergeDeepRight<Output>(target: object): (newProps: object) => Output;


/*
Method: mergeLeft

Explanation: Same as `R.merge`, but in opposite direction.

Example:

```
const result = R.mergeLeft(
  {a: 10},
  {a: 1, b: 2}
)
// => {a:10, b: 2}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function mergeLeft<Output>(newProps: object, target: object): Output;
export function mergeLeft<Output>(newProps: object): (target: object) => Output;

/*
Method: min

Explanation: It returns the lesser value between `x` and `y`.

Example:

```
const result = [
  R.min(5, 7),  
  R.min('bar', 'foo'),  
]
// => [5, 'bar']
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function min<T extends Ord>(x: T, y: T): T;
export function min<T extends Ord>(x: T): (y: T) => T;

/*
Method: minBy

Explanation: It returns the lesser value between `x` and `y` according to `compareFn` function.

Example:

```
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
export function minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
export function minBy<T>(compareFn: (input: T) => Ord): (x: T) => (y: T) => T;


/*
Method: modulo

Explanation: Curried version of `x%y`.

Example:

```
R.modulo(17, 3) // => 2
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function modulo(x: number, y: number): number;
export function modulo(x: number): (y: number) => number;

/*
Method: move

Explanation: It returns a copy of `list` with exchanged `fromIndex` and `toIndex` elements.

Example:

```
const list = [1, 2, 3]
const result = R.move(0, 1, list)
// => [2, 1, 3]
```

Categories: List

Notes: Rambda.move doesn't support negative indexes - it throws an error.

*/
// @SINGLE_MARKER
export function move<T>(fromIndex: number, toIndex: number, list: readonly T[]): readonly T[];
export function move(fromIndex: number, toIndex: number): <T>(list: readonly T[]) => readonly T[];
export function move(fromIndex: number): {
    <T>(toIndex: number, list: readonly T[]): readonly T[];
    (toIndex: number): <T>(list: readonly T[]) => readonly T[];
};

/*
Method: multiply

Explanation: Curried version of `x*y`.


Example:

```
R.multiply(2, 4) // => 8
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function multiply(x: number, y: number): number;
export function multiply(x: number): (y: number) => number;

/*
Method: negate

Explanation:

Example:

```
R.negate(420)// => -420
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function negate(x: number): number;

/*
Method: none

Explanation: It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

Example:

```
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate, arr)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function none<T>(predicate: (x: T) => boolean, list: readonly T[]): boolean;
export function none<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

/*
Method: not

Explanation: It returns a boolean negated version of `input`.

Example:

```
R.not(false) // true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function not(input: any): boolean;


/*
Method: nth

Explanation: Curried version of `list[index]`.

Example:

```
const list = [1, 2, 3]
const str = 'foo'

const result = [
  R.nth(2, list),
  R.nth(6, list),
  R.nth(0, str),
]
// => [3, undefined, 'f']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function nth<T>(index: number, list: readonly T[]): T | undefined;	
export function nth(index: number): <T>(list: readonly T[]) => T | undefined;

/*
Method: objOf

Explanation: It returns a new object with the provided key and value.

Example:

```
const result = [
  R.objOf('foo', 42),
  R.objOf(null, undefined),
]
// => [{foo: 42}, {null: undefined}]
```

Categories: Object
*/
// @SINGLE_MARKER
export function objOf<T, K extends string>(key: K, value: T): Record<K, T>;
export function objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;

/*
Method: once

Explanation: It returns a function, which invokes only once `fn` function.

Example:

```
let result = 0
const addOnce = R.once((x) => result = result + x)

addOnce(1)
addOnce(1)
// => 1
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function once<T extends (...args: readonly any[]) => any>(func: T): T;

/*
Method: omit

Explanation: It returns a partial copy of an `obj` without `propsToOmit` properties.

Example:

```
const obj = {a: 1, b: 2, c: 3}
const propsToOmit = 'a,c,d'
const propsToOmitList = ['a', 'c', 'd']

const result = [
  R.omit(propsToOmit, obj), 
  R.omit(propsToOmitList, obj) 
]
// => [{b: 2}, {b: 2}]
```

Categories: Object

Notes: When using this method with `TypeScript`, it is much easier to pass `propsToOmit` as an array. If passing a string, you will need to explicitly declare the output type. 

*/
// @SINGLE_MARKER
export function omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>;
export function omit<K extends string>(propsToOmit: readonly K[]): <T>(obj: T) => Omit<T, K>;
export function omit<T, U>(propsToOmit: string, obj: T): U;
export function omit<T, U>(propsToOmit: string): (obj: T) => U;
export function omit<T>(propsToOmit: string, obj: object): T;
export function omit<T>(propsToOmit: string): (obj: object) => T;

/*
Method: of

Explanation:

Example:

```
R.of(null); // => [null]
R.of([42]); // => [[42]]
```

Categories:

Notes: 

*/
// @SINGLE_MARKER
export function of<T>(x: T): readonly T[];

/*
Method: partial

Explanation: It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

Example:

```
const fn = (title, firstName, lastName) => {
  return title + ' ' + firstName + ' ' + lastName + '!'
}

const canPassAnyNumberOfArguments = R.partial(fn, 'Hello')
const ramdaStyle = R.partial(fn, ['Hello'])

const finalFn = canPassAnyNumberOfArguments('Foo')

finalFn('Bar') // =>  'Hello, Foo Bar!'
```

Categories: Logic

Notes: Rambda's partial doesn't need the input arguments to be wrapped as array.

*/
// @SINGLE_MARKER
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: readonly [V0]): (x1: V1) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: readonly [V0, V1]): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: readonly [V0]): (x1: V1, x2: V2) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: readonly [V0, V1, V2]): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: readonly [V0, V1]): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: readonly [V0]): (x1: V1, x2: V2, x3: V3) => T;
export function partial<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...x: readonly any[]) => T;

/*
Method: partition

Explanation: It will return array of two objects/arrays according to `predicate` function. The first member holds all instanses of `input` that pass the `predicate` function, while the second member - those who doesn't.

Example:

```
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

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function partition<T>(
  predicate: Predicate<T>,
  input: readonly T[]
): readonly [readonly T[], readonly T[]];
export function partition<T>(
  predicate: Predicate<T>
): (input: readonly T[]) => readonly [readonly T[], readonly T[]];
export function partition<T>(
  predicate: (x: T, prop?: string) => boolean,
  input: { readonly [key: string]: T}
): readonly [{ readonly [key: string]: T}, { readonly [key: string]: T}];
export function partition<T>(
  predicate: (x: T, prop?: string) => boolean
): (input: { readonly [key: string]: T}) => readonly [{ readonly [key: string]: T}, { readonly [key: string]: T}];

/*
Method: path

Explanation: If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

Example:

```
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

Categories: Object

Notes: String anotation of `pathToSearch` is one of the differences between `Rambda` and `Ramda`.

*/
// @SINGLE_MARKER
export function path<Input, T>(pathToSearch: Path, obj: Input): T | undefined;
export function path<T>(pathToSearch: Path, obj: any): T | undefined;
export function path<T>(pathToSearch: Path): (obj: any) => T | undefined;
export function path<Input, T>(pathToSearch: Path): (obj: Input) => T | undefined;

/*
Method: pathEq

Explanation: It returns `true` if `pathToSearch` of `input` object is equal to `target` value.

`pathToSearch` is passed to `R.path`, which means that it can be either a string or an array. Also equality between `target` and the found value is determined by `R.equals`.

Example:

```
const path = 'a.b'
const target = {c: 1}
const input = {a: {b: {c: 1}}}

const result = R.pathEq(
  path,
  target,
  input
)
// => true
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function pathEq(pathToSearch: Path, target: any, input: any): boolean;
export function pathEq(pathToSearch: Path, target: any): (input: any) => boolean;
export function pathEq(pathToSearch: Path): (target: any) => (input: any) => boolean;

/*
Method: paths

Explanation: It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.

Because it calls `R.path`, then `singlePath` can be either string or a list.

Example:

```
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

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function paths<Input, T>(pathsToSearch: readonly Path[], obj: Input): readonly (T | undefined)[];
export function paths<Input, T>(pathsToSearch: readonly Path[]): (obj: Input) => readonly (T | undefined)[];
export function paths<T>(pathsToSearch: readonly Path[], obj: any): readonly (T | undefined)[];
export function paths<T>(pathsToSearch: readonly Path[]): (obj: any) => readonly (T | undefined)[];

/*
Method: pathOr

Explanation: It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.

Example:

```
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

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): (pathToSearch: Path) => (obj: any) => T;

/*
Method: pick

Explanation: It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

Example:

```
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const list = [1, 2, 3, 4]
const propsToPick = 'a,foo'
const propsToPickList = ['a', 'foo']

const result = [
  R.pick(propsToPick, obj),
  R.pick(propsToPickList, obj),
  R.pick('a,bar', obj),
  R.pick('bar', obj),
  R.pick([0, 3], list),
  R.pick('0,3', list),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
  [1,4],
  [1,4]
]
// => `result` is equal to `expected`
```

Categories: Object, List

Notes:  When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.
*/
// @SINGLE_MARKER
export function pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<K extends string | number | symbol>(propsToPick: readonly K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<T, U>(propsToPick: string, input: T): U;
export function pick<T, U>(propsToPick: string): (input: T) => U;
export function pick<T>(propsToPick: string, input: object): T;
export function pick<T>(propsToPick: string): (input: object) => T;

/*
Method: pickAll

Explanation: Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`. 

Example:

```
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

Categories: Object

Notes:  When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.

*/
// @SINGLE_MARKER
export function pickAll<T, U>(propsToPick: readonly string[], input: T): U;
export function pickAll<T, U>(propsToPick: readonly string[]): (input: T) => U;
export function pickAll<T, U>(propsToPick: string, input: T): U;
export function pickAll<T, U>(propsToPick: string): (input: T) => U;

/*
Method: pipe

Explanation: It performs left-to-right function composition.

Example:

```
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

Categories: Function

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
Method: pluck

Explanation: It returns list of the values of `property` taken from the all objects inside `list`.

Example:

```
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

R.pluck(property, list) 
// => [1, 2]
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function pluck<K extends keyof T, T>(property: K, list: readonly T[]): ReadonlyArray<T[K]>;
export function pluck<T>(property: number, list: ReadonlyArray<{ readonly [k: number]: T }>): readonly T[];
export function pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => readonly T[];
export function pluck(property: number): <T>(list: ReadonlyArray<{ readonly [k: number]: T }>) => readonly T[];

/*
Method: prepend

Explanation: It adds element `x` at the beginning of `list`.

Example:

```
const result = R.prepend('foo', ['bar', 'baz'])
// => ['foo', 'bar', 'baz']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function prepend<T>(x: T, input: readonly T[]): readonly T[];
export function prepend<T>(x: T): (input: readonly T[]) => readonly T[];

/*
Method: product

Explanation:

Example:

```
R.product([ 2, 3, 4 ])
// => 24)
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function product(list: readonly number[]): number;

/*
Method: prop

Explanation: It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

Example:

```
const result = [
  R.prop('x', {x: 100}), 
  R.prop('x', {a: 1}) 
]
// => [100, undefined]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
export function prop<P extends string | number>(p: P): <T>(propToFind: Record<P, T>) => T;
export function prop<P extends keyof T, T>(p: P): (propToFind: Record<P, T>) => T;

/*
Method: propEq

Explanation: It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

Example:

```
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

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function propEq<K extends string | number>(propToFind: K, valueToMatch: any, obj: Record<K, any>): boolean;
export function propEq<K extends string | number>(propToFind: K, valueToMatch: any): (obj: Record<K, any>) => boolean;
export function propEq<K extends string | number>(propToFind: K): {
  (valueToMatch: any, obj: Record<K, any>): boolean;
  (valueToMatch: any): (obj: Record<K, any>) => boolean;
};

/*
Method: propIs

Explanation: It returns `true` if `property` of `obj` is from `target` type.

Example:

```
const obj = {a:1, b: 'foo'}
const property = 'foo'

const result = [
  R.propIs(String, property, obj),
  R.propIs(Number, property, obj)
]
// => [true, false]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function propIs(type: any, name: string, obj: any): boolean;
export function propIs(type: any, name: string): (obj: any) => boolean;
export function propIs(type: any): {
    (name: string, obj: any): boolean;
    (name: string): (obj: any) => boolean;
};

/*

Method: propOr

Explanation: It returns either `defaultValue` or the value of `property` in `obj`.

Example:

```
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property, obj),
  R.propOr(defaultValue, 'foo', obj)
]
// => [1, 'DEFAULT_VALUE']
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T;
export function propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>> | undefined) => T;
export function propOr<T>(defaultValue: T): {
  <P extends string>(property: P, obj: Partial<Record<P, T>> | undefined): T;
  <P extends string>(property: P): (obj: Partial<Record<P, T>> | undefined) => T;
}

/*
Method: range

Explanation: It returns list of numbers between `startInclusive` to `endExclusive` markers.

Example:

```
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function range(startInclusive: number, endExclusive: number): readonly number[];
export function range(startInclusive: number): (endExclusive: number) => readonly number[];

/*
Method: reduce

Explanation: 

Example:

```
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

Categories: List

Notes: It passes index of the list as third argument to `reducer` function.

*/
// @SINGLE_MARKER
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: readonly T[]): TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: readonly T[]): TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: readonly T[]) => TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: readonly T[]) => TResult;

/*
Method: reject

Explanation: It has the opposite effect of `R.filter`.

Example:

```
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list)
  R.reject(predicate, obj)
]
// => [[1, 2], {a: 1}]
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function reject<T>(predicate: Predicate<T>, list: readonly T[]): readonly T[];
export function reject<T>(predicate: Predicate<T>): (list: readonly T[]) => readonly T[];
export function reject<T>(predicate: Predicate<T>, obj: Dictionary<T>): Dictionary<T>;
export function reject<T, U>(predicate: Predicate<T>): (obj: Dictionary<T>) => Dictionary<T>;

/*
Method: repeat

Explanation: 

Example:

```
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function repeat<T>(x: T): (timesToRepeat: number) => readonly T[];
export function repeat<T>(x: T, timesToRepeat: number): readonly T[];

/*
Method: replace
 
Explanation: It replaces `strOrRegex` found in `str` with `replacer`.

Example:

```
const strOrRegex = /o/g

const result = R.replace(strOrRegex, '|0|', 'foo')
// => 'f|0||0|'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
export function replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
export function replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;

/*
Method: reverse

Explanation: It returns a reversed copy of list or string `input`. 

Example:

```
const result = [
  R.reverse('foo'),
  R.reverse([1, 2, 3])
]
// => ['oof', [3, 2, 1]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function reverse<T>(input: readonly T[]): readonly T[];
export function reverse(input: string): string;

/*
Method: slice

Explanation: 

Example:

```
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

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function slice(from: number, to: number, input: string): string;
export function slice<T>(from: number, to: number, input: readonly T[]): readonly T[];
export function slice(from: number, to: number): {
  (input: string): string;
  <T>(input: readonly T[]): readonly T[];
};
export function slice(from: number): {
  (to: number, input: string): string;
  <T>(to: number, input: readonly T[]): readonly T[];
};

/*
Method: sort

Explanation: It returns copy of `list` sorted by `sortFn` function.

Example:

```
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

Categories: List

Notes: `sortFn` function must return a number.

*/
// @SINGLE_MARKER
export function sort<T>(sortFn: (a: T, b: T) => number, list: readonly T[]): readonly T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (list: readonly T[]) => readonly T[];

/*
Method: sortBy

Explanation: It returns copy of `list` sorted by `sortFn` function.

Example:

```
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

Categories: List

Notes: `sortFn` function must return a value to compare.

*/
// @SINGLE_MARKER
export function sortBy<T>(sortFn: (a: T) => Ord, list: readonly T[]): readonly T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(list: readonly T[]) => readonly T[];

/*
Method: split

Explanation: Curried version of `String.prototype.split`

Example:

```
const str = 'foo|bar|baz'
const separator = |'
const result = R.split(separator, str))
// => [ 'foo', 'bar', 'baz' ]
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function split(separator: string | RegExp): (str: string) => readonly string[];
export function split(separator: string | RegExp, str: string): readonly string[];

/*
Method: splitEvery

Explanation: It splits `input` into slices of `sliceLength`.

Example:

```
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

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function splitEvery<T>(sliceLength: number, input: readonly T[]): readonly (readonly T[])[];
export function splitEvery(sliceLength: number, input: string): readonly string[];
export function splitEvery(sliceLength: number): {
  (input: string): readonly string[];
  <T>(input: readonly T[]): readonly (readonly T[])[];
};

/*
Method: startsWith

Explanation: Curried version of `String.prototype.startsWith`

Example:

```
const str = 'foo-bar'

const result = [
  R.startsWith('foo', str),
  R.startsWith('bar', str)
]
// => [true, false]
```

Categories: String

Notes: It doesn't work with arrays unlike its corresponding **Ramda** method.

*/
// @SINGLE_MARKER
export function startsWith(target: string, str: string): boolean;
export function startsWith(target: string): (str: string) => boolean;

/*
Method: subtract

Explanation: Curried version of `x - y`

Example:

```
const x = 3
const y = 1

R.subtract(x, y) 
// => 2
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function subtract(x: number, y: number): number;
export function subtract(x: number): (y: number) => number;

/*
Method: sum

Explanation:

Example:

```
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sum(list: readonly number[]): number;

/*
Method: symmetricDifference

Explanation: It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

Example:

```
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function symmetricDifference<T>(x: readonly T[], y: readonly T[]): readonly T[];
export function symmetricDifference<T>(x: readonly T[]): <T>(y: readonly T[]) => readonly T[];

/*
Method: T

Explanation:



Example:

```
R.T() 
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function T(): boolean;

/*
Method: tail

Explanation: It returns all but the first element of `input`.

Example:

```
const result = [
  R.tail([1, 2, 3]),  
  R.tail('foo') 
]
// => [[2, 3], 'oo']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function tail<T>(input: readonly T[]): readonly T[];
export function tail(input: string): string;

/*
Method: take

Explanation: It returns the first `howMany` elements of `input`.


Example:

```
const howMany = 2

const result = [
  R.take(howMany, [1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function take<T>(howMany: number, input: readonly T[]): readonly T[];
export function take(howMany: number, input: string): string;
export function take<T>(howMany: number): {
  <T>(input: readonly T[]): readonly T[];
  (input: string): string;
};

/*
Method: takeLast

Explanation: It returns the last `howMany` elements of `input`.

Example:

```
const howMany = 2

const result = [
  R.takeLast(howMany, [1, 2, 3]),
  R.takeLast(howMany, 'foobar'),
]
// => [[2, 3], 'ar']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function takeLast<T>(howMany: number, input: readonly T[]): readonly T[];
export function takeLast(howMany: number, input: string): string;
export function takeLast<T>(howMany: number): {
  <T>(input: readonly T[]): readonly T[];
  (input: string): string;
};

/*
Method: tap

Explanation: It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.


Example:

```
const list = [1, 2, 3]

R.compose(
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)(list)
// => `2` and `3` will be logged
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function tap<T>(fn: (x: T) => void, input: T): T;
export function tap<T>(fn: (x: T) => void): (input: T) => T;

/*
Method: test

Explanation: It determines whether `str` matches `regExpression`.

Example:

```
R.test(/^f/, 'foo')
// => true
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function test(regExpression: RegExp): (str: string) => boolean;
export function test(regExpression: RegExp, str: string): boolean;

/*
Method: times

Explanation: It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).

Example:

```
const fn = x => x * 2
const howMany = 5

R.times(fn, howMany)
// => [0, 2, 4, 6, 8]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function times<T>(fn: (i: number) => T, howMany: number): readonly T[];
export function times<T>(fn: (i: number) => T): (howMany: number) => readonly T[];

/*
Method: toLower

Explanation:

Example:

```
R.toLower('FOO')
// => 'foo'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function toLower(str: string): string;

/*
Method: toUpper

Explanation:

Example:

```
R.toUpper('foo')
// => 'FOO'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function toUpper(str: string): string;

/*
Method: toPairs

Explanation: It transforms an object to a list.


Example:

```
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// => `result` is equal to `expected`
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function toPairs<S>(obj: { readonly [k: string]: S } | { readonly [k: number]: S }): readonly (readonly [string, S])[];

/*
Method: toString

Explanation:

Example:

```
R.toString([1, 2]) 
// => '1,2'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function toString<T>(x: T): string;

/*
Method: transpose

Explanation:

Example:

```
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function transpose<T>(list: readonly (readonly T[])[]): readonly (readonly T[])[];

/*
Method: trim

Explanation:

Example:

```
R.trim('  foo  ') 
// => 'foo'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function trim(str: string): string;

/*
Method: tryCatch

Explanation: It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).

Example:

```
const fn = x => x.foo

const result = [
  R.tryCatch(fn, false)(null),
  R.tryCatch(fn, false)({foo: 'bar'})
]
// => [false, 'bar']
```

Categories: Function

Notes: Please check the tests of `R.tryCatch` to fully understand how this method works.

*/
// @SINGLE_MARKER
export function tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U;
export function tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: (input: T) => U
): (input: T) => U;
export function tryCatch<T>(
  fn: (input: any) => Promise<any>,
  fallback: T
): (input: any) => Promise<T>;
export function tryCatch<T>(
  fn: (input: any) => Promise<any>,
  fallback: (input: any) => Promise<any>,
): (input: any) => Promise<T>;

/*
Method: type

Explanation: It accepts any input and it returns its type.

Example:

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
R.type('foo'*1) // => 'NaN'

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

Categories: Logic

Notes: `NaN`, `Promise` and `Async` are types specific for **Rambda**.

*/
// @SINGLE_MARKER
export function type(x: any): RambdaTypes;

/*
Method: union

Explanation: It takes two lists and return a new list containing a merger of both list with removed duplicates. 

`R.equals` is used to compare for duplication.

Example:

```
const result = R.union([1,2,3], [3,4,5]);
// => [1, 2, 3, 4, 5]
```

Categories: List

Notes: 

*/
// @SINGLE_MARKER
export function union<T>(x: readonly T[], y: readonly T[]): readonly T[];
export function union<T>(x: readonly T[]): (y: readonly T[]) => readonly T[];

/*
Method: uniq

Explanation: It returns a new array containing only one copy of each element of `list`.

`R.equals` is used to determine equality.

Example:

```
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function uniq<T>(list: readonly T[]): readonly T[];

/*
Method: uniqWith

Explanation: It returns a new array containing only one copy of each element in `list` according to `predicate` function.

This predicate should return true, if two elements are equal.

Example:

```
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

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: readonly T[]): readonly T[];
export function uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => readonly T[];

/*
Method: unless

Explanation: The method returns function that will be called with argument `input`.

If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`.

In the other case, the final output will be the `input` itself.

Example:

```
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

Categories: Logic, Function

Notes:

*/
// @SINGLE_MARKER
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, obj: T): U;
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (obj: T) => U;

/*
Method: update

Explanation: It returns a copy of `list` with updated element at `index` with `newValue`.

Example:

```
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = R.update(index, newValue, list)
// => [1, 2, 88, 4, 5]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function update<T>(index: number, newValue: T, list: readonly T[]): readonly T[];
export function update<T>(index: number, newValue: T): (list: readonly T[]) => readonly T[];

/*
Method: values

Explanation: With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.

Example:

```
const obj = {a:1, b:2}

R.values(obj)
// => [1, 2]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function values<T extends object, K extends keyof T>(obj: T): readonly T[K][];

/*
Method: when

Explanation: It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`. 

If the `predicate` returns `false`, then it will simply return `input`.

```
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

Categories: Logic, Function

Notes:

*/
// @SINGLE_MARKER
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U;
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;
export function when<T, U>(predicate: (x: T) => boolean): ((whenTrueFn: (a: T) => U) => (input: T) => T | U);

/*
Method: where

Explanation: It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

`R.equals` is used to determine equality.

Example:

```
const condition = R.where({
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

Categories: Object, Logic

Notes:

*/
// @SINGLE_MARKER
export function where<T, U>(conditions: T, input: U): boolean;
export function where<T>(conditions: T): <U>(input: U) => boolean;
export function where<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
export function where<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;

/*
Method: whereEq

Explanation: It will return `true` if all of `input` object fully or partially include `rule` object.

`R.equals` is used to determine equality.

Example:

```
const condition = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = whereEq(condition, input)
// => true
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function whereEq<T, U>(condition: T, input: U): boolean;
export function whereEq<T>(condition: T): <U>(input: U) => boolean;

/*
Method: without

Explanation: It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.

`R.equals` is used to determine equality.

Example:

```
const source = [1, 2, 3, 4]
const matchAgainst = [2, 3]

const result = R.without(matchAgainst, source)
// => [1, 4]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function without<T>(matchAgainst: readonly T[], source: readonly T[]): readonly T[];
export function without<T>(matchAgainst: readonly T[]): (source: readonly T[]) => readonly T[];

/*
Method: xor

Explanation: Logical XOR

Example:

```
const result = [
  xor(true, true),
  xor(false, false),
  xor(false, true),
]
// => [false, false, true]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function xor(x: boolean, y: boolean): boolean;
export function xor(y: boolean): (y: boolean) => boolean;

/*
Method: zip

Explanation: It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

Example:

```
const x = [1, 2]
const y = ['A', 'B']
R.zip(x, y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zip<K, V>(x: readonly K[], y: readonly V[]): readonly KeyValuePair<K, V>[];
export function zip<K>(x: readonly K[]): <V>(y: readonly V[]) => readonly KeyValuePair<K, V>[];

/*
Method: zipObj

Explanation: It will return a new object with keys of `keys` array and values of `values` array.

Example:

```
const keys = ['a', 'b', 'c']

R.zipObj(keys, [1, 2, 3])
// => {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(keys, [1, 2])
// => {a: 1, b: 2}
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zipObj<T, K extends string>(keys: readonly K[], values: readonly T[]): { readonly [P in K]: T };
export function zipObj<K extends string>(keys: readonly K[]): <T>(values: readonly T[]) => { readonly [P in K]: T };
export function zipObj<T, K extends number>(keys: readonly K[], values: readonly T[]): { readonly [P in K]: T };
export function zipObj<K extends number>(keys: readonly K[]): <T>(values: readonly T[]) => { readonly [P in K]: T };

/*
Method: props

Explanation: It takes list with properties `propsToPick` and returns a list with property values in `obj`.

Example:

```
const result = [
  R.props(['a', 'b'], {a:1, c:3})
// => [1, undefined]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function props<P extends string, T>(propsToPick: readonly P[], obj: Record<P, T>): readonly T[];
export function props<P extends string>(propsToPick: readonly P[]): <T>(obj: Record<P, T>) => readonly T[];
export function props<P extends string, T>(propsToPick: readonly P[]): (obj: Record<P, T>) => readonly T[];

/*
Method: zipWith

Explanation:

Example:

```
const list1 = [ 10, 20, 30, 40 ]
const list2 = [ 100, 200 ]

const result = R.zipWith(
  R.add, list1, list2
)
// => [110, 220]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[], list2: readonly U[]): readonly TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => readonly TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: readonly T[], list2: readonly U[]) => readonly TResult[];

/*
Method: splitAt

Explanation: It splits string or array at a given index.

Example:

```
const list = [ 1, 2, 3 ]
const result = splitAt(2, list)
// => [[ 1, 2 ], [ 3 ]]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function splitAt<T>(index: number, input: readonly T[]): readonly [readonly T[], readonly T[]];
export function splitAt(index: number, input: string): readonly [string, string];
export function splitAt(index: number): {
    <T>(input: readonly T[]): readonly [readonly T[], readonly T[]];
    (input: string): readonly [string, string];
};

/*
Method: splitWhen

Explanation: It splits `list` to two arrays according to a `predicate` function. 

The first array contains all members of `list` before `predicate` returns `true`.

Example:

```
const list = [1, 2, 1, 2]
const result = R.splitWhen(R.equals(2), list)
// => [[1], [2, 1, 2]]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function splitWhen<T, U>(predicate: Predicate<T>, list: readonly U[]): readonly (readonly U[])[];
export function splitWhen<T>(predicate: Predicate<T>): <U>(list: readonly U[]) => readonly (readonly U[])[];

/*
Method: takeLastWhile

Explanation: 

Example:

```
const result = R.takeLastWhile(
  x => x > 2,
  [1, 2, 3, 4]
)
// => [3, 4]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function takeLastWhile(predicate: (x: string) => boolean, input: string): string;
export function takeLastWhile(predicate: (x: string) => boolean): (input: string) => string;
export function takeLastWhile<T>(predicate: (x: T) => boolean, input: readonly T[]): readonly T[];
export function takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: readonly T[]) => readonly T[];

/*
Method: evolve

Explanation: It takes object or array of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

Example:

```
const rules = {
  foo : add(1),
  bar : add(-1),
}
const input = {
  a   : 1,
  foo : 2,
  bar : 3,
}
const result = evolve(rules, input)
const expected = {
  a   : 1,
  foo : 3,
  bar : 2,
})
// => `result` is equal to `expected`
```

Categories: Object, List

Notes: Error handling of this method differs between Ramda and Rambda. Ramda for some wrong inputs returns result and for other - it returns one of the inputs. Rambda simply throws when inputs are not correct. Full details for this mismatch are listed in `source/_snapshots/evolve.spec.js.snap` file.

*/
// @SINGLE_MARKER
export function evolve<T, U>(rules: ReadonlyArray<(x: T) => U>, list: readonly T[]): readonly U[];
export function evolve<T, U>(rules: ReadonlyArray<(x: T) => U>) : (list: readonly T[]) => readonly U[];
export function evolve<E extends Evolver, V extends Evolvable<E>>(rules: E, obj: V): Evolve<V, E>;
export function evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;

/*
Method: dropLastWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate, list);
// => [1, 2]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLastWhile(predicate: (x: string) => boolean, iterable: string): string;
export function dropLastWhile(predicate: (x: string) => boolean): (iterable: string) => string;
export function dropLastWhile<T>(predicate: (x: T) => boolean, iterable: readonly T[]): readonly T[];
export function dropLastWhile<T>(predicate: (x: T) => boolean): <T>(iterable: readonly T[]) => readonly T[];

/*
Method: dropRepeats

Explanation: It removes any successive duplicates according to `R.equals`.

Example:

```
const result = R.dropRepeats([
  1, 
  1, 
  {a: 1}, 
  {a:1}, 
  1
])
// => [1, {a: 1}, 1]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function dropRepeats<T>(list: readonly T[]): readonly T[];

/*
Method: dropRepeatsWith

Explanation:

Example:

```
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'))

// => [{a:1,b:2}, {a:2, b:4}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean, list: readonly T[]): readonly T[];
export function dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => readonly T[];

/*
Method: dropWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate, list)
// => [3, 4]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropWhile(fn: Predicate<string>, iterable: string): string;
export function dropWhile(fn: Predicate<string>): (iterable: string) => string;
export function dropWhile<T>(fn: Predicate<T>, iterable: readonly T[]): readonly T[];
export function dropWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => readonly T[];

/*
Method: takeWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate, list)
// => [1, 2]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function takeWhile(fn: Predicate<string>, iterable: string): string;
export function takeWhile(fn: Predicate<string>): (iterable: string) => string;
export function takeWhile<T>(fn: Predicate<T>, iterable: readonly T[]): readonly T[];
export function takeWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => readonly T[];

/*
Method: eqProps

Explanation: It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

Example:

```
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1, obj2)
// => true 
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
export function eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

// RAMBDAX_MARKER_START

/*
Method: allFalse

Explanation: It returns `true` if all `inputs` arguments are falsy(empty objects and empty arrays are considered falsy).

Functions are valid inputs, but these functions cannot have their own arguments.

This method is very similar to `R.anyFalse`, `R.anyTrue` and `R.allTrue`

Example:

```
R.allFalse(0, null, [], {}, '', () => false)
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function allFalse(...inputs: readonly any[]): boolean;

/*
Method: anyFalse

Explanation: It returns `true` if any of `inputs` is falsy(empty objects and empty arrays are considered falsy).

Example:

```
R.anyFalse(1, {a: 1}, [1], () => false)
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function anyFalse(...input: readonly any[]): boolean;

/*
Method: allTrue

Explanation: It returns `true` if all `inputs` arguments are truthy(empty objects and empty arrays are considered falsy).

Example:

```
R.allTrue(1, true, {a: 1}, [1], 'foo', () => true)
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function allTrue(...input: readonly any[]): boolean;

/*
Method: anyTrue

Explanation: It returns `true` if any of `inputs` arguments are truthy(empty objects and empty arrays are considered falsy).

Example:

```
R.anyTrue(0, null, [], {}, '', () => true)
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function anyTrue(...input: readonly any[]): boolean;

/*
Method: allType

Explanation: It returns a function which will return `true` if all of its `inputs` arguments belong to `targetType`.

Example:

```
const targetType = 'String'

const result = R.allType(
  targetType
)('foo', 'bar', 'baz')
// => true
```

Categories: Logic

Notes: `targetType` is one of the possible returns of `R.type`

*/
// @SINGLE_MARKER
export function allType(targetType: RambdaTypes): (...input: readonly any[]) => boolean;

/*
Method: anyType

Explanation: It returns a function which will return `true` if at least one of its `inputs` arguments belongs to `targetType`.

`targetType` is one of the possible returns of `R.type`

Example:

```
const targetType = 'String'

const result = R.anyType(
  targetType
)(1, {}, 'foo')
// => true
```

Categories: Logic

Notes: `targetType` is one of the possible returns of `R.type`

*/
// @SINGLE_MARKER
export function anyType(targetType: RambdaTypes): (...input: readonly any[]) => boolean;

/*
Method: composeAsync

Explanation: Asynchronous version of `R.compose`

Example:

```
const add = async x => {
  await R.delay(100)
  return x + 1
}
const multiply = async x => {
  await R.delay(100)
  return x * 2 
}

const result = await R.composeAsync(
  add,
  multiply
)(1)
// `result` resolves to `3`
```

Categories: Function, Async

Notes: It doesn't work with promises or function returning promises such as `const foo = input => new Promise(...)`.

*/
// @SINGLE_MARKER
export function composeAsync<Out>(
  ...fns: readonly (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;
export function composeAsync<Out>(
  ...fns: readonly (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;

/*
Method: pipeAsync

Explanation: Asynchronous version of `R.pipe`

Example:

```
const add = async x => {
  await R.delay(100)
  return x + 1
}
const multiply = async x => {
  await R.delay(100)
  return x * 2 
}

const result = await R.pipeAsync(
  add,
  multiply
)(1)
// `result` resolves to `4`
```

Categories: Function, Async

Notes: It doesn't work with promises or function returning promises such as `const foo = input => new Promise(...)`.

*/
// @SINGLE_MARKER
export function pipeAsync<Out>(
  ...fns: readonly (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;
export function pipeAsync<Out>(
  ...fns: readonly (Async<any> | Func<any>)[]
): (input: any) => Promise<Out>;

/*
Method: count

Explanation: It counts how many times `searchFor` is within `list` according to `R.equals`.

Example:

```
const list = [1, {a:1}, 1, 'foo']
const searchFor = 1

const result = R.count(searchFor, list)
// => 2
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function count<T>(searchFor: T, list: readonly any[]): number;
export function count<T>(searchFor: T): (list: readonly any[]) => number;

/*
Method: debounce

Explanation: It creates a debounced function that delays invoking `fn` until after wait milliseconds `ms` have elapsed since the last time the debounced function was invoked.

Example:

```
let counter = 0
const increment = () => {
  counter++
}

const debounced = R.debounce(increment, 1000)

const result = async function(){
  debounced()
  await R.delay(500)
  debounced()
  await R.delay(800)
  console.log(counter) // => 0

  await R.delay(1200)
  console.log(counter) // => 1

  return counter
}
// `result` resolves to `1`
```

Categories: Function

Notes: Description is taken from `Lodash` docs

*/
// @SINGLE_MARKER
export function debounce<T, U>(fn: (input: T) => U, ms: number): (input: T) => U;
export function debounce<T, Q, U>(fn: (input1: T, input2: Q) => U, ms: number): (input1: T, input2: Q) => U;
export function debounce<T, Q, Z, U>(fn: (input1: T, input2: Q, input3: Z) => U, ms: number): (input1: T, input2: Q, input3: Z) => U;

/*
Method: delay

Explanation: `setTimeout` as a promise that resolves to `R.DELAY` variable after `ms` milliseconds.

Example:

```
const result = R.delay(1000)
// `result` resolves to `RAMBDAX_DELAY`
```

Categories: Async

Notes:

*/
// @SINGLE_MARKER
export function delay(ms: number): Promise<'RAMBDAX_DELAY'>;

/*
Method: filterAsync

Explanation: Asynchronous version of `R.filter`

Example:

```
const predicate = async x => {
  await R.delay(100)
  return x % 2 === 1
}
const result = await R.filterAsync(predicate, [ 1, 2, 3 ])
// => [ 1, 3 ]
```

Categories: List, Object, Async

Notes:

*/
// @SINGLE_MARKER
export function filterAsync<T>(fn: AsyncPredicate<T>, list: readonly T[]): Promise<readonly T[]>;
export function filterAsync<T>(fn: AsyncPredicateIndexed<T>, list: readonly T[]): Promise<readonly T[]>;
export function filterAsync<T>(fn: AsyncPredicate<T>) : ( list: readonly T[]) => Promise<readonly T[]>;
export function filterAsync<T>(fn: AsyncPredicateIndexed<T>) : ( list: readonly T[]) => Promise<readonly T[]>;

/*
Method: glue

Explanation: It transforms multiline string to single line by gluing together the separate lines with the `glueString` and removing the empty spaces. By default `glueString` is equal to single space, so if that is what you need, then you can just pass a single argument.

Example:

```
const result = R.glue(`
  foo
  bar
  baz
`)
// => 'foo bar baz'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function glue(input: string, glueString?: string): string;

/*
Method: getter

Explanation: The set of methods `R.setter`, `R.getter` and `R.reset` allow different parts of your logic to access comminicate indirectly via shared cache object. 

Usually these methods show that you might need to refactor to classes. Still, they can be helpful meanwhile.

`R.getter`: It provides access to the cache object. If `undefined` is used as a key, this method will return the whole cache object. If `string` is passed, then it will return cache value for this key. If array of `string` is passed, then it assume that this is array of keys and it will return the corresponding cache values for these keys.

`R.setter`: It allows cache object's keys to be changed. You can either set individual key-value pairs with `R.setter(key, value)` or you pass directly object, which will be merged with the cache object.

`R.reset`: It resets the cache object.

Example:

```
R.setter('foo','bar')
R.setter('a', 1)
R.getter(['foo','a']) // => {foo: 'bar', a: 1}

R.setter('a', 2)
R.getter('a') // => 2
R.reset()
R.getter('a') // => undefined
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function getter<T>(keyOrKeys: string | readonly string[] | undefined): T;

/*
Method: setter

Explanation:

Example:

```

```

Categories:

Notes: `R.getter` method contains explanations, tests and source information of `R.reset`, `R.setter` and `R.getter` methods.

*/
// @SINGLE_MARKER
export function setter(keyOrObject: string | object, value?: any): void;

/*
Method: reset

Explanation: 

Example:

```

```

Categories:

Notes: `R.getter` method contains explanations, tests and source information of `R.reset`, `R.setter` and `R.getter` methods.

*/
// @SINGLE_MARKER
export function reset(): void;

/*
Method: interpolate

Explanation: It generages a new string from `inputWithTags` by replacing all `{{x}}` occurances with values provided by `templateArguments`.

Example:

```
const inputWithTags = 'foo is {{bar}} even {{a}} more'
const templateArguments = {"bar":"BAR", a: 1}

const result = R.interpolate(inputWithTags, templateArguments)
const expected = 'foo is BAR even 1 more'
// => `result` is equal to `expected`
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function interpolate(inputWithTags: string, templateArguments: object): string;
export function interpolate(inputWithTags: string): (templateArguments: object) => string;

/*
Method: ifElseAsync

Explanation: Asynchronous version of `R.ifElse`. Any of `condition`, `ifFn` and `elseFn` can be either asynchronous or synchronous function.

Example:

```
const condition = async x => {
  await R.delay(100)
  return x > 1
}
const ifFn = async x => {
  await R.delay(100)
  return x + 1
}
const elseFn = async x => {
  await R.delay(100)
  return x - 1
}

const result = await R.ifElseAsync(
  condition,
  ifFn,
  elseFn  
)(1)
// => 0
```

Categories: Async, Logic

Notes:

*/
// @SINGLE_MARKER
export function ifElseAsync<T, U>(
  condition: (x: T) => Promise<boolean>, 
  onTrue: (x: T) => U, 
  onFalse: (x: T) => U, 
  ): (x: T) => Promise<U>;
export function ifElseAsync<T, U>(
  condition: (x: T) => boolean, 
  onTrue: (x: T) => Promise<U>, 
  onFalse: (x: T) => Promise<U>, 
): (x: T) => Promise<U>;
export function ifElseAsync<T, U>(
  condition: (x: T) => Promise<boolean>, 
  onTrue: (x: T) => Promise<U>, 
  onFalse: (x: T) => Promise<U>, 
): (x: T) => Promise<U>;
export function ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => Promise<boolean>, 
  onTrue: (x: T, y: K) => U, 
  onFalse: (x: T, y: K) => U, 
): (x: T, y: K) => Promise<U>;
export function ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => boolean, 
  onTrue: (x: T, y: K) => Promise<U>, 
  onFalse: (x: T, y: K) => Promise<U>, 
): (x: T, y: K) => Promise<U>;
export function ifElseAsync<T, K, U>(
  condition: (x: T, y: K) => Promise<boolean>, 
  onTrue: (x: T, y: K) => Promise<U>, 
  onFalse: (x: T, y: K) => Promise<U>, 
): (x: T, y: K) => Promise<U>;

/*
Method: isFunction

Explanation: It returns `true` if **R.type** of `input` is `Async` or `Function`.

Example:

```
const result = [
  R.isFunction(R.mapAsync),
  R.isFunction(R.add),
]
// => [true, true]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isFunction(input: any): boolean;

/*
Method:

Explanation: It returns true if `input` is either asynchronous function or unresolved promise.

Example:

```
R.isPromise(R.delay(1000))
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isPromise(input: any): boolean;

/*
Method: isType

Explanation: It returns true if `targetType` is equal to type of `input` according to `R.type`.

Example:

```
R.isType('Async',R.delay(1000))
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isType(targetType: RambdaTypes, input: any): boolean;
export function isType(targetType: RambdaTypes): (input: any) => boolean;

/*
Method: isValid

Explanation: It checks if `input` is following `schema` specifications.

If validation fails, it returns `false`.

Please [check the detailed explanation](https://github.com/selfrefactor/rambdax/blob/master/files/isValid.md) as it is hard to write a short description for this method.

Example:

```
const input = {a: ['foo', 'bar']}
const invalidInput = {a: ['foo', 'bar', 1]}
const schema = {a: [String]}
const result = [
  R.isValid({schema, input}),
  R.isValid({schema, input: invalidInput})
]
// => [true, false]
```

Categories: Logic

Notes: Independently, somebody else came with very similar idea called [superstruct](https://github.com/ianstormtaylor/superstruct)

*/
// @SINGLE_MARKER
export function isValid({input: object, schema: Schema}: IsValid): boolean;

/*
Method: isValidAsync

Explanation: Asynchronous version of `R.isValid`

Example:

```
const input = {a: 1, b: 2}
const invalidInput = {a: 1, b: 'foo'}
const schema = {a: Number, b: async x => {
  await R.delay(100)
  return typeof x === 'number'
}}

const result = await Promise.all([
  R.isValidAsync({schema, input}),
  R.isValidAsync({schema, input: invalidInput})
])
// => [true, false]
```

Categories: Logic, Async

Notes:

*/
// @SINGLE_MARKER
export function isValidAsync(x: IsValidAsync): Promise<boolean>;

/*
Method: mapAsync

Explanation: Sequential asynchronous mapping with `fn` over members of `list`.

Example:

```
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.mapAsync(fn, [1, 2, 3])
// `result` resolves after 3 seconds to `[2, 3, 4]`
```

Categories: Async, List

Notes:

*/
// @SINGLE_MARKER
export function mapAsync<T, K>(fn: AsyncIterable<T, K>, list: readonly T[]): Promise<readonly K[]>;
export function mapAsync<T, K>(fn: AsyncIterableIndexed<T, K>, list: readonly T[]): Promise<readonly K[]>;
export function mapAsync<T, K>(fn: AsyncIterable<T, K>) : ( list: readonly T[]) => Promise<readonly K[]>;
export function mapAsync<T, K>(fn: AsyncIterableIndexed<T, K>) : ( list: readonly T[]) => Promise<readonly K[]>;

/*
Method: mapFastAsync

Explanation: Parrallel asynchronous mapping with `fn` over members of `list`.

Example:

```
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = R.mapFastAsync(fn, [1, 2, 3])
// `result` resolves after 1 second to `[2, 3, 4]`
```

Categories: Async, List

Notes:

*/
// @SINGLE_MARKER
export function mapFastAsync<T, K>(fn: AsyncIterable<T, K>, list: readonly T[]): Promise<readonly K[]>;
export function mapFastAsync<T, K>(fn: AsyncIterableIndexed<T, K>, list: readonly T[]): Promise<readonly K[]>;
export function mapFastAsync<T, K>(fn: AsyncIterable<T, K>) : ( list: readonly T[]) => Promise<readonly K[]>;
export function mapFastAsync<T, K>(fn: AsyncIterableIndexed<T, K>) : ( list: readonly T[]) => Promise<readonly K[]>;

/*
Method: mapAsyncLimit

Explanation: It is similar to `R.mapFastAsync` in that it uses `Promise.all` but not over the whole list, rather than with only slice from `list` with length `limit`.

Example:

```

```

Categories: Async, List

Notes: For example usage, please check `R.mapAsyncLimit` tests.

*/
// @SINGLE_MARKER
export function mapAsyncLimit<T, K>(fn: AsyncIterable<T, K>, limit: number, list: readonly T[]): Promise<readonly K[]>;
export function mapAsyncLimit<T, K>(fn: AsyncIterable<T, K>, limit: number): (list: readonly T[]) => Promise<readonly K[]>;
export function mapAsyncLimit<T, K>(fn: AsyncIterableIndexed<T, K>, limit: number, list: readonly T[]): Promise<readonly K[]>;
export function mapAsyncLimit<T, K>(fn: AsyncIterableIndexed<T, K>, limit: number): (list: readonly T[]) => Promise<readonly K[]>;

/*
Method: mapToObject

Explanation: This method allows to generate an object from a list using input function `fn`.

This function must return either an object or `false` for every member of `list` input. 

If `false` is returned, then this element of `list` will be skipped in the calculation of the result.

All of returned objects will be merged to generate the final result.

Example:

```
const list = [1, 2, 3, 12]
const fn = x => {
  if(x > 10) return false
  return x % 2 ? {[x]: x + 1}: {[x]: x + 10}
}

const result = mapToObject(fn, list)
const expected = {'1': 2, '2': 12, '3': 4}
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function mapToObject<T, U>(fn: (input: T) => object|false, list: readonly T[]): U;
export function mapToObject<T, U>(fn: (input: T) => object|false): (list: readonly T[]) => U;

/*
Method: mapToObjectAsync

Explanation: Asynchronous version of `R.mapToObject`

Example:

```

```

Categories: List, Async

Notes:

*/
// @SINGLE_MARKER
export function mapToObjectAsync<T, U>(fn: (input: T) => Promise<object|false>, list: readonly T[]): Promise<U>;
export function mapToObjectAsync<T, U>(fn: (input: T) => Promise<object|false>): (list: readonly T[]) => Promise<U>;

/*
Method: mapKeys

Explanation: It takes an object and returns a new object with changed keys according to `changeKeyFn` function.

Example:

```
const obj = {a: 1, b: 2}
const changeKeyFn = prop => `{prop}_foo`
const result = R.mapKeys(changeKeyFn, obj)
// => {a_foo: 1, b_foo: 2}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function mapKeys<T, U>(changeKeyFn: (x: string) => string, obj: { readonly [key: string]: T}): U;
export function mapKeys<T, U>(changeKeyFn: (x: string) => string): (obj: { readonly [key: string]: T}) => U;

/*
Method: maybe

Explanation: It acts as ternary operator and it is helpful when we have nested ternaries. 

All of the inputs can be either direct values or anonymous functions. This is helpful if we don't want to evaluate certain paths as we can wrap this logic in a function.

Example:

```
const x = 4
const y = 8

const ifRule = x > 2
const whenIf = y > 10 ? 3 : 7
const whenElse = () => {
  // just to show that it won't be evaluated
  return JSON.parse('{a:')
}

const result = R.maybe(
  ifRule,
  whenIf,
  whenElse,
)
// `result` is `7`
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function maybe<T>(ifRule: boolean, whenIf: T | Func<T>, whenElse: T | Func<T>): T;
export function maybe<T>(ifRule: VoidInputFunc<boolean>, whenIf: T | Func<T>, whenElse: T | Func<T>): T;

/*
Method: memoize

Explanation: When `fn` is called for a second time with the same input, then the cache result is returned instead of calling again `fn`.

Example:

```
let result = 0
const fn = (a,b) =>{
  result++

  return a + b
}
const memoized = R.memoize(fn)
memoized(1, 2)
memoized(1, 2)

// => `result` is equal to `1`
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function memoize<T, K extends readonly any[]>(fn: (...inputs: K) => T): (...inputs: K) => T;

/*
Method: nextIndex

Explanation: It returns the next index of the list.

If we have reached the end of the list, then it will return `0`.

Example:

```
const list = [1, 2, 3]

const result = [
  R.nextIndex(0, list),
  R.nextIndex(1, list),
  R.nextIndex(2, list),
  R.nextIndex(10, list)
]
// => [1, 2, 0, 0]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function nextIndex(index: number, list: readonly any[]): number;

/*
Method: prevIndex

Explanation: It returns the next index of the list when the order is descending.

If we have reached the beginning of the list, then it will return the last index of the list.

Example:

```
const list = [1, 2, 3]

const result = [
  R.prevIndex(0, list),
  R.prevIndex(1, list),
  R.prevIndex(2, list),
]
// => [2, 0, 1]
```

Categories: List

Notes: Unlike `R.nextIndex`, which safeguards against index out of bounds, this method does not.

*/
// @SINGLE_MARKER
export function prevIndex(index: number, list: readonly any[]): number;

/*
Method: ok

Explanation: It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

If validation fails, it throws.

Example:

```
const result = R.ok(
  1,
  ['foo', 'bar']
)(
  Number,
  [String]
)
// => undefined
```

Categories:

Notes: It is same as `R.pass` but instead of returning `false`, it throws an error.

*/
// @SINGLE_MARKER
export function ok(...inputs: readonly any[]): (...schemas: readonly any[]) => void | never;

/*
Method: pass

Explanation: It checks if `inputs` are following `schemas` specifications according to `R.isValid`.

Example:

```
const result = R.pass(
  1,
  ['foo','bar']
)(
  Number,
  [String]
)
// => true
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function pass(...inputs: readonly any[]): (...rules: readonly any[]) => boolean;

/*
Method: partialCurry

Explanation: `R.partialCurry` is a curry helper designed specifically for functions accepting object as a single argument.

Initially the function knows only a part from the whole input object and then `R.partialCurry` helps in preparing the function for the second part, when it receives the rest of the input.

Example:

```
const fn = ({ a, b, c }) => a + b + c
const curried = partialCurry(fn, { a : 1 })
const result = curried({
  b : 2,
  c : 3,
})
// => 6
```

Categories: Function, Async

Notes: Curried function can be asynchronous

*/
// @SINGLE_MARKER
export function partialCurry<Input, PartialInput, Output>(
  fn: (input: Input) => Output, 
  partialInput: PartialInput,
): (input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>) => Output;

/*
Method: piped

Explanation: It is basically `R.pipe`, but instead of passing `input` argument as `R.pipe(...)(input)`, you pass it as the first argument.

Example:

```
const result = piped(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

Categories: Function

Notes: Independently, similar method is implemented in `Ramada` library, but there the name of the method is `pipe` - [Remeda.pipe](https://remedajs.com/docs#pipe)

*/
// @SINGLE_MARKER
export function piped<A, B>(input: A, fn0: (x: A) => B) : B;
export function piped<A, B, C>(input: A, fn0: (x: A) => B, fn1: (x: B) => C) : C;
export function piped<A, B, C, D>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D) : D;
export function piped<A, B, C, D, E>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E) : E;
export function piped<A, B, C, D, E, F>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F) : F;
export function piped<A, B, C, D, E, F, G>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G) : G;
export function piped<A, B, C, D, E, F, G, H>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G, fn6: (x: G) => H) : H;
export function piped<A, B, C, D, E, F, G, H, I>(input: A, fn0: (x: A) => B, fn1: (x: B) => C, fn2: (x: C) => D, fn3: (x: D) => E, fn4: (x: E) => F, fn5: (x: F) => G, fn6: (x: G) => H, fn7: (x: H) => I) : I;

/*
Method: pipedAsync

Explanation: It accepts input as first argument and series of functions as next arguments. It is same as `R.pipe` but with support for asynchronous functions.

Example:

```
const result = R.pipedAsync(
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
const expected = 'RAMBDAX_DELAY104'
// `result` resolves to `expected`
```

Categories: Async

Notes: Functions that return `Promise` will be handled as regular function not asynchronous. Such example is `const foo = input => new Promise(...)`.

*/
// @SINGLE_MARKER
export function pipedAsync<T>(
  input: any,
  ...fns: readonly (Func<any> | Async<any>)[]
): Promise<T>;

/*
Method: produce

Explanation: It returns an object created by applying each value of `rules` to `input` argument.

Example:

```
const rules = {
  foo: R.pipe(R.add(1), R.add(2)),
  a: {b: add(3)}
}
const input = i
const result = R.produce(rules, input)

const expected = {
  foo: 4,
  a: {b: 4}
}
// => `result` is equal to `expected`
```

Categories: Object

Notes: In Typescript context, `rules` functions can be only 1 level deep. In Javascript context, there is no such restriction.

*/
// @SINGLE_MARKER
export function produce<Input extends any, Output>(
  rules: ProduceRules<Output, keyof Output, Input>,
  input: Input
): Output;
export function produce<Input extends any, Output>(
  rules: ProduceRules<Output, keyof Output, Input>
): <Input>(
  input: Input
) => Output;

/*
Method: produceAsync

Explanation: It returns an object created by applying each value of `rules` to `input` argument.

`rules` input is an object with synchronous or asynchronous functions as values.

The return value is wrapped in a promise, even if all `rules` are synchronous functions.

Example:

```
const rules = {
  foo: async x => {
    await R.delay(100)
    return x > 1
  },
  bar: x => ({baz: x})
}
const input = 2
const result = await R.produceAsync(rules, input)

const expected = {
  foo: true,
  bar: {baz: 2}
}
// => `result` is equal to `expected`
```

Categories: Function, Async

Notes:

*/
// @SINGLE_MARKER
export function produceAsync<Input extends any, Output>(
  rules: ProduceAsyncRules<Output, keyof Output, Input>,
  input: Input
): Promise<Output>;
export function produceAsync<Input extends any, Output>(
  rules: ProduceAsyncRules<Output, keyof Output, Input>
): <Input>(
  input: Input
) => Promise<Output>;


/*
Method: random

Explanation: It returns a random number between `min` inclusive and `max` inclusive.

Example:

```

```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function random(minInclusive: number, maxInclusive: number): number;

/*
Method: remove

Explanation: It will remove all `toRemove` entries from `text` sequentially. 

`toRemove` argument can be either a list of strings/regular expressions or a single string/regular expression.

Example:

```
const result = remove(
  ['foo','bar'],
  'foo bar baz foo'
)
// => 'baz foo'
```

Categories: String

Notes: This is the only case where Rambdax exports clashes with Ramda API, as Ramda has `remove` method. If `Rambda.remove` is introduced, then this method will be renamed.

*/
// @SINGLE_MARKER
export function remove(
  toRemove: string | RegExp | readonly (string | RegExp)[],
  text: string
): string;
export function remove(
  toRemove: string | RegExp | readonly (string | RegExp)[]
): (text: string) => string;

/*
Method: renameProps

Explanation: If property `prop` of `rules` is also a property in `input`, then rename `input` property to `rules[prop]`.

Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function renameProps(rules: object, input: object): object;
export function renameProps(rules: object): (input: object) => object;
export function renameProps<Output>(rules: object, input: object): Output;
export function renameProps<Output>(rules: object): (input: object) => Output;


/*
Method: replaceAll
 
Explanation: Same as `R.replace` but it accepts array of string and regular expressions instead of a single value.

Example:

```
const replacer = '|'
const patterns = [ /foo/g, 'bar' ]
const input = 'foo bar baz foo bar'

const result = replaceAll(patterns, replacer, input)
// => '| | baz | bar'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function replaceAll(patterns: ReadonlyArray<RegExp | string>, replacer: string, input: string): string;
export function replaceAll(patterns: ReadonlyArray<RegExp | string>, replacer: string): (input: string) => string;
export function replaceAll(patterns: ReadonlyArray<RegExp | string>): (replacer: string) => (input: string) => string;

/*
Method: shuffle

Explanation: It returns a randomized copy of array.

Example:

```

```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function shuffle<T>(list: readonly T[]): readonly T[];

/*
Method: sortObject

Explanation: It returns a sorted version of `input` object.

Example:

```
const predicate = (propA, propB, valueA, valueB) => valueA > valueB ? -1 : 1

const result = R.sortObject(predicate, {a:1, b: 4, c: 2})
// => {b: 4, c: 2, a: 1}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function sortObject<T>(predicate: SortObjectPredicate<T>, input: { readonly [key: string]: T }): { readonly [keyOutput: string]: T };
export function sortObject<T>(predicate: SortObjectPredicate<T>): (input: { readonly [key: string]: T }) => { readonly [keyOutput: string]: T };

/*
Method: switcher

Explanation: Edited fork of [Switchem](https://github.com/planttheidea/switchem) library.

The method return a value if the matched option is a value.

If the matched option is a function, then `R.switcher` returns a function which expects input. Tests of the method explain it better than this short description.

`R.equals` is used to determine equality.

Example:

```
const valueToMatch = {foo: 1}

const result = R.switcher(valueToMatch)
  .is('baz', 'is baz')
  .is(x => typeof x === 'boolean', 'is boolean')
  .is({foo: 1}, 'Property foo is 1')
  .default('is bar')

// => 'Property foo is 1'
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function switcher<T>(valueToMatch: any): Switchem<T>;

/*
Method: tapAsync

Explanation: Asynchronous version of `R.tap`.

Example:

```

```

Categories: Async

Notes:

*/
// @SINGLE_MARKER
export function tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T;
export function tapAsync<T>(fn: Func<any> | Promise<any>): (input: T) => T;

/*
Method: throttle

Explanation: It creates a throttled function that invokes `fn` maximum once for a `period` of milliseconds.

Example:

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

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function throttle<T, U>(fn: (input: T) => U, ms: number): (input: T) => U;
export function throttle<T, Q, U>(fn: (input1: T, input2: Q) => U, ms: number): (input1: T, input2: Q) => U;
export function throttle<T, Q, Z, U>(fn: (input1: T, input2: Q, input3: Z) => U, ms: number): (input1: T, input2: Q, input3: Z) => U;

/*
Method: toDecimal

Explanation:

Example:

```
R.toDecimal(2.45464,2) // => 2.45
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function toDecimal(num: number, charsAfterDecimalPoint?: number): number;

/*
Method: wait

Explanation: It provides `Golang`-like interface for handling promises.

Example:

```
const [result, err] = await R.wait(R.delay(1000))
// => err is undefined
// => result is `RAMBDAX_DELAY`
```

Categories: Async

Notes:

*/
// @SINGLE_MARKER
export function wait<T>(fn: Promise<T>): Promise<readonly [T, Error|undefined]>;
export function wait<T>(fn: (x: any) => Promise<T>): Promise<readonly [T, Error|undefined]>;

/*
Method: waitFor

Explanation: It returns `true`, if `condition` returns `true` within `howLong` milisececonds time period.

The method accepts an optional third argument `loops`(default to 10), which is the number of times `waitForTrueCondition` will be evaluated for `howLong` period. Once this function returns a value different from `false`, this value will be the final result. 

Otherwise, `R.waitFor` will return `false`.

Example:

```
const howLong = 1000
let counter = 0
const waitForTrueCondition = async x => {
  await R.delay(100)
  counter = counter + x

  return counter > 10
}

const result = await R.waitFor(waitForTrueCondition, howLong)(2)
// => true
```

Categories: Async, Logic

Notes:

*/
// @SINGLE_MARKER
export function waitFor(
  waitForTrueCondition: () => boolean,
  howLong: number,
  loops?: number
): () => Promise<boolean>;
export function waitFor(
  waitForTrueCondition: () => Promise<boolean>,
  howLong: number,
  loops?: number
): () => Promise<boolean>;
export function waitFor<T>(
  waitForTrueCondition: (input: T) => Promise<boolean>,
  howLong: number,
  loops?: number
): (input: T) => Promise<boolean>;
export function waitFor<T>(
  waitForTrueCondition: (input: T) => boolean,
  howLong: number,
  loops?: number
): (input: T) => Promise<boolean>;

/*
Method: lensEq

Explanation: It returns `true` if data structure focused by the given lens equals to the `target` value.

`R.equals` is used to determine equality.

Example:

```
const list = [ 1, 2, 3 ]
const lens = R.lensIndex(0)
const result = R.lensEq(
  lens, 1, list
)
// => true
```

Categories: Lenses

Notes: Idea for this method comes from `ramda-adjunct` library

*/
// @SINGLE_MARKER
export function lensEq<T, U>(lens: Lens, target: T, input: U): boolean;
export function lensEq<T, U>(lens: Lens, target: T):  (input: U) => boolean;
export function lensEq<T>(lens: Lens, target: T, input: ReadonlyArray<T>): boolean;
export function lensEq<T>(lens: Lens, target: T): (input: ReadonlyArray<T>) => boolean;

/*
Method: lensSatisfies

Explanation: It returns `true` if data structure focused by the given lens satisfies the predicate.

Example:

```
const fn = R.lensSatisfies(x => x > 5, R.lensIndex(0))
const result = [
  fn([10, 20, 30]),
  fn([1, 2, 3]),
]
// => [true, false]
```

Categories: Lenses

Notes: Idea for this method comes from `ramda-adjunct` library

*/
// @SINGLE_MARKER
export function lensSatisfies<T, U>(predicate: (x: T) => boolean, lens: Lens, input: U): boolean;
export function lensSatisfies<T, U>(predicate: (x: T) => boolean, lens: Lens): (input: U) => boolean;
export function lensSatisfies<T>(predicate: (x: T) => boolean, lens: Lens, input: ReadonlyArray<T>): boolean;
export function lensSatisfies<T>(predicate: (x: T) => boolean, lens: Lens): (input: ReadonlyArray<T>) => boolean;

/*
Method: viewOr

Explanation: A combination between `R.defaultTo` and `R.view.

Example:

```
const lens = R.lensProp('a');
const input = {a: 'foo'}
const fallbackInput = {b: 'bar'}
const fallback = 'FALLBACK'

const result = [
  R.viewOr(fallback, lens, input),
  R.viewOr(fallback, lens, fallbackInput)
]
// => ['foo', 'FALLBACK']
```

Categories: Lenses

Notes: Idea for this method comes from `@meltwater/phi` library

*/
// @SINGLE_MARKER
export function viewOr<Input, Output>(fallback: Output, lens: Lens, input: Input): Output;
export function viewOr<Input, Output>(fallback: Output, lens: Lens): (input: Input) =>  Output;
export function viewOr<Input, Output>(fallback: Output): (lens: Lens) => (input: Input) =>  Output;

/*
Method: sortByPath

Explanation: It returns copy of `list` sorted by `sortPath` value. 

As `sortPath` is passed to `R.path`, it can be either a string or an array of strings.

Example:

```
const list = [
  {a: {b: 2}},
  {a: {b: 1}},
  {a: {b: 3}}
]
const result = R.sortByPath('a.b', list)
const expected = [
  {a: {b: 1}},
  {a: {b: 2}},
  {a: {b: 3}}
]
// => `result` is equal to `expected`
```

Categories: List

Notes: Idea for this method comes from `@meltwater/phi` library

*/
// @SINGLE_MARKER
export function sortByPath<T>(sortPath: Path, list: readonly T[]): readonly T[];
export function sortByPath(sortPath: Path): <T>(list: readonly T[]) => readonly T[];

/*
Method: sortByProps

Explanation: It returns sorted copy of `list` of objects.

Sorting is done using a list of strings, each representing a path. Two members `a` and `b` from `list` can be sorted if both return a value for a given path. If the value is equal, then the next member of `sortPaths`(if there is such) will be used in order to find difference between `a` and `b`.

Example:

```
const list = [
  {a: {b: 2}},
  {a: {b: 1}},
  {a: {b: 3}}
]
const result = R.sortByPath('a.b', list)
const expected = [
  {a: {b: 1}},
  {a: {b: 2}},
  {a: {b: 3}}
]
// => `result` is equal to `expected`
```

Categories: List

Notes: Idea for this method comes from `@meltwater/phi` library

*/
// @SINGLE_MARKER
export function sortByProps<T>(sortPaths: readonly string[], list: readonly T[]): readonly T[];
export function sortByProps(sortPaths: readonly string[]): <T>(list: readonly T[]) => readonly T[];

/*
Method: removeIndex

Explanation: It returns a copy of `list` input with removed `index`. 

Example:

```
const list = [1, 2, 3, 4]
const result = R.removeIndex(1, list)
// => [1, 3, 4]
```

Categories: List

Notes: 

*/
// @SINGLE_MARKER
export function removeIndex<T>(index: number, list: readonly T[]): readonly T[];
export function removeIndex(index: number): <T>(list: readonly T[]) => readonly T[];


/*
Method: excludes

Explanation: Opposite of `R.includes`

`R.equals` is used to determine equality.

Example:

```
const result = [
  R.excludes('ar', 'foo'),
  R.excludes({a: 2}, [{a: 1}])
]
// => [true, true ]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function excludes(valueToFind: string, input: readonly string[] | string): boolean;
export function excludes(valueToFind: string): (input: readonly string[] | string) => boolean;
export function excludes<T>(valueToFind: T, input: readonly T[]): boolean;
export function excludes<T>(valueToFind: T): (input: readonly T[]) => boolean;

/*
Method: updateObject

Explanation: Very similar to `R.assocPath` but it applies list of updates instead of only a single update.

It return a copy of `obj` input with changed properties according to `rules` input.

Each instance of `rules` is a tuple of object path and the new value for this path. If such object path does not exist, then such object path is created.

As it uses `R.path` underneath, object path can be either string or array of strings(in Typescript object path can be only a string).

Example:

```
const obj = {
  a: {b: 1},
  foo: {bar: 10},
}
const rules = [
  ['a.b', 2],
  ['foo.bar', 20],
  ['q.z', 300],
]
const result = R.updateObject(rules, obj)

const expected = {
  a: {b: 2},
  foo: {bar: 20},
  q: {z: 300},
}
// => `result` is equal to `expected`
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function updateObject<Output>(rules: readonly (readonly [string, any])[], input: object): Output;
export function updateObject<Output>(rules: readonly (readonly [string, any])[]): (input: object) => Output;

/*
Method: takeUntil

Explanation:

Example:

```
const list = [1, 2, 3, 4, 5]
const predicate = x => x > 3
const result = R.takeUntil(predicate, list)

// => [1, 2, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function takeUntil<T>(predicate: (x: T) => boolean, list: readonly T[]): readonly T[];
export function takeUntil<T>(predicate: (x: T) => boolean): (list: readonly T[]) => readonly T[];

/*
Method: applyDiff

Explanation: It changes paths in an object according to a list of operations. Valid operations are `add`, `update` and `delete`. Its use-case is while writing tests and you need to change the test data.

Note, that you cannot use `update` operation, if the object path is missing in the input object.
Also, you cannot use `add` operation, if the object path has a value.

Example:

```
const obj = {a: {b:1, c:2}}
const rules = [
  {op: 'remove', path: 'a.c'},
  {op: 'add', path: 'a.d', value: 4},
  {op: 'update', path: 'a.b', value: 2},
]
const result = R.applyDiff(rules, obj)
const expected = {a: {b: 2, d: 4}}

// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function applyDiff<Output>(rules: readonly ApplyDiffRule[], obj: object): Output;
export function applyDiff<Output>(rules: readonly ApplyDiffRule[]): ( obj: object) => Output;

/*
Method: mapIndexed

Explanation: Same as `R.map`, but it passes index as second argument to the iterator, when looping over arrays.

Example:

```
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function mapIndexed<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
export function mapIndexed<T, U>(fn: IndexedIterator<T, U>, iterable: readonly T[]): readonly U[];
export function mapIndexed<T, U>(fn: IndexedIterator<T, U>): (iterable: readonly T[]) => readonly U[];
export function mapIndexed<T, U, S>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
export function mapIndexed<T>(fn: IndexedIterator<T, T>): (iterable: readonly T[]) => readonly T[];
export function mapIndexed<T>(fn: IndexedIterator<T, T>, iterable: readonly T[]): readonly T[];

/*
Method: filterIndexed

Explanation: Same as `R.filter`, but it passes index as second argument to the predicate, when looping over arrays.

Example:

```
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function filterIndexed<T>(predicate: IndexedPredicate<T>): (x: readonly T[]) => readonly T[];
export function filterIndexed<T>(predicate: IndexedPredicate<T>, x: readonly T[]): readonly T[];
export function filterIndexed<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filterIndexed<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;

/*
Method: forEachIndexed

Explanation:

Example:

```
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function forEachIndexed<T>(fn: IndexedIterator<T, void>, list: readonly T[]): readonly T[];
export function forEachIndexed<T>(fn: IndexedIterator<T, void>): (list: readonly T[]) => readonly T[];
export function forEachIndexed<T>(fn: ObjectIterator<T, void>, list: Dictionary<T>): Dictionary<T>;
export function forEachIndexed<T, U>(fn: ObjectIterator<T, void>): (list: Dictionary<T>) => Dictionary<T>;

/*
Method: tryCatchAsync

Explanation: It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result.

Example:

```
const x = {foo: 1}
const fnFoo = async () => x.foo
const fnBar = async () => x.bar

const result = await Promise.all([
  R.tryCatchAsync (fnFoo, false)(),
  R.tryCatchAsync(fnBar, false)()
])
// => [1, false]
```

Categories: Async, Function

Notes:

*/
// @SINGLE_MARKER
export function tryCatchAsync<T>(
  fn: (input: any) => Promise<T>,
  fallback: T
): (input: any) => Promise<T>;
export function tryCatchAsync<T>(
  fn: (input: any) => Promise<T>,
  fallback: (input: any) => Promise<T>,
): (input: any) => Promise<T>;

export const DELAY: 'RAMBDAX_DELAY';

/*
Method: xnor

Explanation: Logical XNOR

Example:

```
const result = [
  R.xnor(1, 0),
  R.xnor(0, 1),
  R.xnor(0, 0),
  R.xnor(1, 1),
]
// => [true, false, false, true]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function xnor(x: boolean, y: boolean): boolean;
export function xnor(y: boolean): (y: boolean) => boolean;

// RAMBDAX_MARKER_END
// ============================================

export as namespace R

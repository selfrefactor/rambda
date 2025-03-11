export type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise" | "Symbol" | "Set" | "Error" | "Map" | "WeakMap" | "Generator" | "GeneratorFunction" | "BigInt" | "ArrayBuffer" | "Date"

export type EqualTypes<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

export type NonEmptyArray<T> = [T, ...T[]];
export type ReadonlyNonEmptyArray<T> = readonly [T, ...T[]];
export type IterableContainer<T = unknown> = ReadonlyArray<T> | readonly [];
export type Mapped<T extends IterableContainer, K> = {
  -readonly [P in keyof T]: K;
};

export type ElementOf<Type extends readonly any[]> = Type[number];
export type MergeTypes<T> = {[KeyType in keyof T]: T[KeyType]} & {};
export type Simplify<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type EntryForKey<T, Key extends keyof T> = Key extends number | string
  ? [key: `${Key}`, value: Required<T>[Key]]
  : never;

export type Entry<T> = MergeTypes<{ [P in keyof T]-?: EntryForKey<T, P> }[keyof T]>;

export type Ord = number | string | boolean | Date;
export type Ordering = -1 | 0 | 1;
type Path = Array<string> | string;
type Prop<T, P extends keyof never> = P extends keyof Exclude<T, undefined>
    ? T extends undefined ? undefined : T[Extract<P, keyof T>]
    : undefined;

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}
export type Functor<A> = { map: <B>(fn: (a: A) => B) => Functor<B>; [key: string]: any };
export type DeepModify<Keys extends readonly PropertyKey[], U, T> =
  Keys extends [infer K, ...infer Rest]
    ? K extends keyof U
      ? Rest extends readonly []
        ? Omit<U, K> & Record<K, T>
        : Rest extends readonly PropertyKey[]
          ? Omit<U, K> & Record<K, DeepModify<Rest, U[K], T>>
          : never
      : never
    : never;


export type Lens<S, A> = (functorFactory: (a: A) => Functor<A>) => (s: S) => Functor<S>;
type OptionalToRequired<T> = {
	[P in keyof T]-?: T[P]
}

export type PickStringToPickPath<T> = T extends `${infer Head},${infer Tail}` 		? [Head, ...PickStringToPickPath<Tail>]
	: T extends `${infer Head}` ? [Head]
	: [];


export type ObjPredicate<T = unknown> = (value: any, key: unknown extends T ? string : keyof T) => boolean;

export type Partial<T> = { [P in keyof T]?: T[P]};

type Evolvable<E extends Evolver> = {[P in keyof E]?: Evolved<E[P]>};

type Evolver<T extends Evolvable<any> = any> = {   [key in keyof Partial<T>]: ((value: T[key]) => T[key]) | (T[key] extends Evolvable<any> ? Evolver<T[key]> : never);
};

type Evolve<O extends Evolvable<E>, E extends Evolver> = {   [P in keyof O]: P extends keyof E
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

declare const emptyObjectSymbol: unique symbol;
type EmptyObject = {[emptyObjectSymbol]?: never};
type EnumerableStringKeyOf<T> =
Required<T> extends Record<infer K, unknown>
	? `${Exclude<K, symbol>}`
	: never;
type EnumerableStringKeyedValueOf<T> = ValuesOf<{
	[K in keyof T]-?: K extends symbol ? never : T[K];
}>;
type ValuesOf<T> =
	T extends EmptyObject
		? T[keyof T]
		: T extends Record<PropertyKey, infer V>
			? V
			: never;
type MappedValues<T extends object, Value> = MergeTypes<{
	-readonly [P in keyof T as `${P extends number | string ? P : never}`]: Value;
}>;
// API_MARKER

/*
Method: add

Explanation:

It adds `a` and `b`.

Example:

```
const result = R.pipe(
	2,
	R.add(3)
) // =>  5
```

Categories: Number

Notes: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

*/
// @SINGLE_MARKER
export function add(a: number): (b: number) => number;

/*
Method: replaceItemAtIndex

Explanation:

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

Example:

```
const result = R.pipe(
	[1, 2, 3],
	R.replaceItemAtIndex(1, R.add(1))
) // => [1, 3, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function replaceItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];

/*
Method: all

Explanation: It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

Example:

```
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.pipe(
	list,
	R.all(predicate)
) // => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;

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
export function any<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;

/*
Method: allPass

Explanation: It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

Example:

```
const list = [[1, 2, 3, 4], [3, 4, 5]]
const result = R.pipe(
	list,
	R.filter(R.allPass([R.includes(2), R.includes(3)]))
) // => [[1, 2, 3, 4]]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function allPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;

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

Categories: Logic

Notes: Function accepts only one input, but in Ramda it accepts indefinite number of arguments.

*/
// @SINGLE_MARKER
export function anyPass<T, TF1 extends T, TF2 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2],
): (a: T) => a is TF1 | TF2;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T>(
  predicates: [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3, (a: T) => a is TF4],
): (a: T) => a is TF1 | TF2 | TF3 | TF4;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T>(
  predicates: [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5,
    (a: T) => a is TF6
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5 | TF6;
export function anyPass<F extends (...args: any[]) => boolean>(predicates: readonly F[]): F;

/*
Method: append

Explanation: It adds element `x` at the end of `iterable`.

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
export function append<T>(el: T): (list: T[]) => T[];
export function append<T>(el: T): (list: readonly T[]) => T[];

/*
Method: assoc

Explanation: It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

Example:

```
R.assoc('c', 3)({a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

Categories: Object

Notes: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

*/
// @SINGLE_MARKER
export function assoc<T, K extends PropertyKey>(prop: K, val: T): <U>(obj: U) => U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;

/*
Method: assocPath

Explanation: It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

Example:

```
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

const result = R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

Categories: Object

Notes: pipe

*/
// @SINGLE_MARKER
export function assocPath<T>(path: Path, val: unknown): (obj: unknown) => T;

/*
Method: both

Explanation: It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

Example:

```
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(firstCondition, secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function both<T, RT1 extends T>(firstPredicate: (a: T) => a is RT1): <RT2 extends T>(secondPredicate: (a: T) => a is RT2) => (a: T) => a is RT1 & RT2;
export function both<Args extends any[]>(firstPredicate: (...args: Args) => boolean): (secondPredicate: (...args: Args) => boolean) => (...args: Args) => boolean;
export function both<T, RT1 extends T, RT2 extends T>(firstPredicate: (a: T) => a is RT1, secondPredicate: (a: T) => a is RT2): (a: T) => a is RT1 & RT2;
export function both<Args extends any[]>(firstPredicate: (...args: Args) => boolean, secondPredicate: (...args: Args) => boolean): (...args: Args) => boolean;

/*
Method: flatMap

Explanation: It combines `map` with `flatten` logic.

Example:

```
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = flatMap(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function flatMap<T, U>(fn: (n: T) => U[]): (list: T[]) => U[];

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

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function complement<T extends any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean;

/*
Method: concat

Explanation: It returns a new string or array, which is the result of merging `x` and `y`.

Example:

```
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function concat<T>(x: T[]): (y: T[]) => T[];
export function concat(x: string): (y: string) => string;

/*
Method: dec

Explanation: It decrements a number.

Example:

```
const result = R.dec(2) // => 1
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

Notes: pipe | Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

*/
// @SINGLE_MARKER
export function defaultTo<T>(defaultValue: T, input: T | null | undefined): T;
export function defaultTo<T>(defaultValue: T): <U>(input: U | null | undefined) => EqualTypes<U, T> extends true ? T : never

/*
Method: difference

Explanation: It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

`R.equals` is used to determine equality.

Example:

```
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = R.difference(a, b)
// => [ 1, 2 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function difference<T>(a: T[], b: T[]): T[];
export function difference<T extends unknown>(a: T[]): <U extends unknown>(b: U[]) => EqualTypes<U, T> extends true ? T[] : never

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
export function dissoc<K extends PropertyKey>(prop: K): <U extends { [P in K]?: any}>(obj: string extends keyof U ? U : undefined extends U[K] ? U : never) => U;
export function dissoc<U, K extends keyof U>(prop: string extends keyof U ? K : undefined extends U[K] ? K : never, obj: U): U;

/*
Method: dissocPath

Explanation:

Example:

```
const result = R.dissocPath(['a', 'b'])({a: {b: 1, c: 2}})
// => {a: {c: 2}}
```

Categories:

Notes: pipe

*/
// @SINGLE_MARKER
export function dissocPath<T>(path: Path): (obj: unknown) => T;

/*
Method: divide

Explanation:

Example:

```
R.divide(71)(100) // => 0.71
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
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
export function drop<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};

/*
Method: dropLast

Explanation: It returns `howMany` items dropped from  the end of list or string `input`.

Example:

```
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLast<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};

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
Method: filter

Explanation: It filters list or object `input` using a `predicate` function.

Example:

```
const predicate = x => x > 1
const list = [1, 2, 3]
const result = R.filter(predicate)(list)
// => [2, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function filter<T, S extends T>(
  predicate: (value: T) => value is S,
): (list: T[]) => S[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => NonNullable<T>[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: T[]) => NonNullable<T>[];
export function filter<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];

/*
Method: reject

Explanation: Same as `filter`, but it returns the elements that do not satisfy the `predicate`.

Example:

```
const predicate = x => x > 1
const list = [1, 2, 3]
const result = R.reject(predicate)(list)
// => [1]
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function reject<T, S extends T>(
  predicate: (value: T) => value is S,
): (list: T[]) => S[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => (null | undefined)[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: T[]) => (null | undefined)[];
export function filter<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];

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
export function find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined;
export function find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined;

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
export function findIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
export function findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;

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
export function findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;

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
export function findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;

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
export function flatten<T>(list: any[]): T[];

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
export function fromPairs<V>(listOfPairs: ([number, V])[]): { [index: number]: V };
export function fromPairs<V>(listOfPairs: ([string, V])[]): { [index: string]: V };

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
export function groupBy<T, K extends string = string>(fn: (a: T) => K): (list: T[]) => Partial<Record<K, T[]>>;

/*
Method: mergeTypes

Explanation: Helper to merge all calculated TypeScript definitions into one definition.
It returns its input and it is intended to be used as last method inside `R.pipe` chain.

Example:

```
```

Categories: 

Notes:

*/
// @SINGLE_MARKER
export function mergeTypes<T>(x: T): MergeTypes<T>;

/*
Method: head

Explanation: It returns the first element of list or string `input`. It returns `undefined` if array has length of 0.

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
export function head<T>(listOrString: T): T extends string ? string : 
	T extends [] ? undefined: 
		T extends readonly [infer F, ...infer R] ? F : 
			T extends readonly [infer F] ? F :
				T extends [infer F] ? F :
					T extends [infer F, ...infer R] ? F : 
						T extends unknown[] ? T[number] : 
							undefined;


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

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function ifElse<T, TFiltered extends T, TOnTrueResult, TOnFalseResult>(
  pred: (a: T) => a is TFiltered,
  onTrue: (a: TFiltered) => TOnTrueResult,
  onFalse: (a: Exclude<T, TFiltered>) => TOnFalseResult,
): (a: T) => TOnTrueResult | TOnFalseResult;
export function ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult;

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
export function includes<T extends string>(valueToFind: T): (input: string) => boolean;
export function includes<T>(valueToFind: T): (input: T[]) => boolean;

/*
Method: indexOf

Explanation: It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.

Example:

```
const result = [
  R.indexOf({a:1})([{a:1}, {a:2}]),
  R.indexOf(2)([1, 2, 3]),
]
// => [0, 1]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function indexOf<T>(valueToFind: T): (list: T[]) => number;

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
export function init<T extends unknown[]>(input: T): T extends readonly [...infer U, any] ? U : [...T];
export function init(input: string): string;

/*
Method: intersection

Explanation: It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.

Example:

```
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = R.intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

Categories: List

Notes: There is slight difference between Rambda and Ramda implementation. Ramda.intersection(['a', 'b', 'c'], ['c', 'b']) result is "[ 'c', 'b' ]", but Rambda result is "[ 'b', 'c' ]". 

*/
// @SINGLE_MARKER
export function intersection<T>(listA: T[], listB: T[]): T[];
export function intersection<T>(listA: T[]): (listB: T[]) => T[];

/*
Method: intersperse

Explanation: It adds a `separator` between members of `list`.

Example:

```
const list = [ 0, 1, 2, 3 ]
const separator = 10
const result = intersperse(separator, list)
// => [0, 10, 1, 10, 2, 10, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function intersperse<T>(separator: T, list: T[]): T[];
export function intersperse<T>(separator: T): (list: T[]) => T[];

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
export function join<T>(glue: string, list: T[]): string;
export function join<T>(glue: string): (list: T[]) => string;

/*
Method: last

Explanation: It returns the last element of `input`, as the `input` can be either a string or an array. It returns `undefined` if array has length of 0.

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
export function last<T>(listOrString: T): T extends string ? string : 
  T extends [] ? undefined : 
    T extends readonly [...infer R, infer L] ? L : 
      T extends readonly [infer L] ? L :
        T extends [infer L] ? L :
          T extends [...infer R, infer L] ? L : 
            T extends unknown[] ? T[number] : 
              undefined;

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
export function lastIndexOf<T>(target: T, list: T[]): number;
export function lastIndexOf<T>(target: T): (list: T[]) => number;

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
  R.map(fn, iterable),
  R.map(fnWhenObject, obj)
]
// => [ [2, 4], {a: 'a-1', b: 'b-2'}]
```

Categories: List, Object

Notes: Unlike Ramda's `map`, here property and input object are passed as arguments to `fn`, when `iterable` is an object.

*/
// @SINGLE_MARKER
export function map<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => U,
): (data: T) => Mapped<T, U>;
export function map<T extends IterableContainer, U>(
  fn: (value: T[number]) => U,
): (data: T) => Mapped<T, U>;
export function map<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => U,
	data: T
) : Mapped<T, U>;
export function map<T extends IterableContainer, U>(
  fn: (value: T[number]) => U,
	data: T
) : Mapped<T, U>;

/*
Method: mapObject

Explanation:

Example:

```
const fn = (val, prop) => `${prop}-${val}`
const obj = {a: 1, b: 2}

const result = R.mapObject(fn)(obj)
// => {a: 'a-1', b: 'b-2'}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function mapObject<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Value,
): (data: T) => MappedValues<T, Value>;

/*
Method: filterObject

Explanation: It loops over each property of `obj` and returns a new object with only those properties that satisfy the `predicate`.

Example:

```
const result = R.filterObject(
	(val, prop) => prop === 'a' || val > 1
)({a: 1, b: 2, c:3})
// => {a: 1, c: 3}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function filterObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;

/*
Method: rejectObject

Explanation: Same as `R.filterObject` but it returns the object with properties that do not satisfy the predicate function.

Example:

```
const result = R.rejectObject(
	(val, prop) => prop === 'a' || val > 1
)({a: 1, b: 2, c:3})
// => {b: 2}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function rejectObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;

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
export function match(regExpression: RegExp, str: string): string[];
export function match(regExpression: RegExp): (str: string) => string[];

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
export function mean(list: number[]): number;

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
export function median(list: number[]): number;

/*
Method: merge

Explanation: Same as `R.mergeRight`.

Example:

```
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function merge<A, B>(target: A, newProps: B): A & B
export function merge<Output>(target: any): (newProps: any) => Output;

/*
Method: mergeRight

Explanation: It creates a copy of `target` object with overwritten `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.

Example:

```
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.mergeRight(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function mergeRight<A, B>(target: A, newProps: B): A & B
export function mergeRight<Output>(target: any): (newProps: any) => Output;

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
export function mergeAll<T>(list: object[]): T;
export function mergeAll(list: object[]): object;

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
export function minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;

/*
Method: none

Explanation: It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

Example:

```
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate)(arr)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function none<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;

/*
Method: notEmpty

Explanation: 

Example:

```
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function isNotEmpty<T>(value: T[]): value is NonEmptyArray<T>;
export function isNotEmpty<T>(value: readonly T[]): value is ReadonlyNonEmptyArray<T>;
export function isNotEmpty(value: any): boolean;

/*
Method: objOf

Explanation: It creates an object with a single key-value pair.

Example:

```
const result = R.objOf('foo', 'bar')
// => {foo: 'bar'}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function objOf<T, K extends PropertyKey>(key: K): (value: T) => { [P in K]: T };

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

Notes:

*/
// @SINGLE_MARKER
export function omit<
	S extends string,
	Keys extends PickStringToPickPath<S>,
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
export function omit<const Keys extends PropertyKey[]>(propsToPick: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;

/*
Method: partition

Explanation: It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

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
export function partition<T, U extends T>(fn: (a: T) => a is U): <L extends T = T>(list: L[]) => [U[], Exclude<L, U>[]];
export function partition<T>(fn: (a: T) => boolean): <L extends T = T>(list: L[]) => [L[], L[]];

export function partition<T, U extends T>(fn: (a: T) => a is U, list: T[]): [U[], Exclude<T, U>[]];
export function partition<T>(fn: (a: T) => boolean, list: T[]): [T[], T[]];

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

Notes: String annotation of `pathToSearch` is one of the differences between `Rambda` and `Ramda`.

*/
// @SINGLE_MARKER
export function path<S, K0 extends keyof S>(path: [K0]): (obj: S) => S[K0];
export function path<S, K0 extends keyof S>(path: `${K0}`): (obj: S) => S[K0];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: [K0, K1]): (obj: S) => S[K0][K1];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: `${K0}.${K1}`): (obj: S) => S[K0][K1];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1]
>(path: [K0, K1, K2]): (obj: S) => S[K0][K1][K2];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1]
>(path: `${K0}.${K1}.${K2}`): (obj: S) => S[K0][K1][K2];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3]): (obj: S) => S[K0][K1][K2][K3];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2]
>(path: `${K0}.${K1}.${K2}.${K3}`): (obj: S) => S[K0][K1][K2][K3];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4]): (obj: S) => S[K0][K1][K2][K3][K4];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}`): (obj: S) => S[K0][K1][K2][K3][K4];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3]
>(path: [K0, K1, K2, K3, K4], obj: S): S[K0][K1][K2][K3][K4];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5]): (obj: S) => S[K0][K1][K2][K3][K4][K5];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`): (obj: S) => S[K0][K1][K2][K3][K4][K5];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: [K0, K1, K2, K3, K4, K5], obj: S): S[K0][K1][K2][K3][K4][K5];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: [K0, K1, K2, K3, K4, K5, K6]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: [K0, K1, K2, K3, K4, K5, K6], obj: S): S[K0][K1][K2][K3][K4][K5][K6];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
    K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5],
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
    K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];


/*
Method: modifyPath

Explanation: It changes a property of object on the base of provided path and transformer function.

Example:

```
const result = R.modifyPath('a.b.c', x=> x+1, {a:{b: {c:1}}})
// => {a:{b: {c:2}}}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function modifyPath<U, T>(path: [], fn: (value: U) => T): (obj: U) => T;
export function modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: [K0], fn: (value: U[K0]) => T): (obj: U) => DeepModify<[K0], U, T>;
export function modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: `${K0}`, fn: (value: U[K0]) => T): (obj: U) => DeepModify<[K0], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: [K0, K1], fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<[K0, K1], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: `${K0}.${K1}`, fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<[K0, K1], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: [K0, K1, K2], fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<[K0, K1, K2], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: `${K0}.${K1}.${K2}`, fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<[K0, K1, K2], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: [K0, K1, K2, K3], fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}`, fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: [K0, K1, K2, K3, K4], fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}`, fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5], fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`, fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  K6 extends keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: [K0, K1, K2, K3, K4, K5, K6], fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  K6 extends keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`, fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;
export function modifyPath<B, A = any>(path: Path, fn: (a: any) => any): (obj: A) => B;

/*
Method: pick

Explanation: It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

Example:

```
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
  {},
]
// => `result` is equal to `expected`
```

Categories: Object

Notes:  When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.
*/
// @SINGLE_MARKER
export function pick<K extends PropertyKey>(propsToPick: K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;
export function pick<
	S extends string,
	K extends PickStringToPickPath<K>
>(propsToPick: S): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;

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
export function pickAll<T, K extends keyof T>(propsToPicks: K[], input: T): Pick<T, K>;
export function pickAll<T, U>(propsToPicks: string[], input: T): U;
export function pickAll(propsToPicks: string[]): <T, U>(input: T) => U;
export function pickAll<T, U>(propsToPick: string, input: T): U;
export function pickAll<T, U>(propsToPick: string): (input: T) => U;

/*
Method: pipe

Explanation: It performs left-to-right function composition, where first argument is the input for the chain of functions.

This is huge difference from `Ramda.pipe` where input is passed like `R.pipe(...fns)(input)`.
Here we have `R.pipe(input, ...fns)`.

It has much better TypeScript support than `Ramda.pipe` and this is the reason why `Rambda` goes in this direction.

Example:

```
const result = R.pipe(
  [1, 2, 3],
  R.filter(x => x > 1),
  R.map(x => x*10),
)
// => [20, 30]
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function pipe<A, B>(value: A, op1: (input: A) => B): B;
export function pipe<A, B, C>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
): C;
export function pipe<A, B, C, D>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
): D;
export function pipe<A, B, C, D, E>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
): E;
export function pipe<A, B, C, D, E, F>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
): F;
export function pipe<A, B, C, D, E, F, G>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
): G;
export function pipe<A, B, C, D, E, F, G, H>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
  op9: (input: I) => J,
): J;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
): K;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
): L;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
): M;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
): N;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
): O;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
): P;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
): Q;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
): R;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
  op18: (input: R) => S,
): S;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  value: A,
  op01: (input: A) => B,
  op02: (input: B) => C,
  op03: (input: C) => D,
  op04: (input: D) => E,
  op05: (input: E) => F,
  op06: (input: F) => G,
  op07: (input: G) => H,
  op08: (input: H) => I,
  op09: (input: I) => J,
  op10: (input: J) => K,
  op11: (input: K) => L,
  op12: (input: L) => M,
  op13: (input: M) => N,
  op14: (input: N) => O,
  op15: (input: O) => P,
  op16: (input: P) => Q,
  op17: (input: Q) => R,
  op18: (input: R) => S,
  op19: (input: S) => T,
): T;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
	value: A,
	op01: (input: A) => B,
	op02: (input: B) => C,
	op03: (input: C) => D,
	op04: (input: D) => E,
	op05: (input: E) => F,
	op06: (input: F) => G,
	op07: (input: G) => H,
	op08: (input: H) => I,
	op09: (input: I) => J,
	op10: (input: J) => K,
	op11: (input: K) => L,
	op12: (input: L) => M,
	op13: (input: M) => N,
	op14: (input: N) => O,
	op15: (input: O) => P,
	op16: (input: P) => Q,
	op17: (input: Q) => R,
	op18: (input: R) => S,
	op19: (input: S) => T,
	op20: (input: T) => U,
): U;

/*
Method: pluck

Explanation: It returns list of the values of `property` taken from the all objects inside `list`.
Basically, this is `R.map(R.prop(property))`.

Example:

```
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

const result = R.pluck(property)(list) 
// => [1, 2]
```

Categories: List, Object

Notes: pipe

*/
// @SINGLE_MARKER
export function pluck<T, K extends keyof T>(property: K): (list: T[]) => T[K][];

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
export function prepend<T>(xToPrepend: T, iterable: T[]): T[];
export function prepend<T>(xToPrepend: T): (iterable: T[]) => T[];

/*
Method: prop

Explanation: It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

Example:

```
const result = [
  R.prop('x')({x: 100}), 
  R.prop('x')({a: 1}) 
]
// => [100, undefined]
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function prop<K extends PropertyKey>(prop: K): <U extends { [P in K]?: unknown }>(obj: U) => U[K];
export function prop<K extends keyof U, U>(prop: K, obj: U): U[K];

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
export function propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean;
  <K extends PropertyKey>(name: K, obj: Record<K, T>): boolean;
};
export function propEq<T, K extends PropertyKey>(val: T, name: K): (obj: Record<K, T>) => boolean;
export function propEq<K extends keyof U, U>(val: U[K], name: K, obj: U): boolean;

/*
Method: getPropertyOrDefault

Explanation: It returns either `defaultValue` or the value of `property` in `obj`.

Example:

```
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.getPropertyOrDefault(defaultValue, property)(obj),
  R.getPropertyOrDefault(defaultValue, 'foo')(obj)
]
// => [1, 'DEFAULT_VALUE']
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function getPropertyOrDefault<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T;

/*
Method: propSatisfies

Explanation: It returns `true` if the object property satisfies a given predicate.

Example:

```
const obj = {a: {b:1}}
const property = 'a'
const predicate = x => x?.b === 1

const result = R.propSatisfies(predicate, property, obj)
// => true
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function propSatisfies<T>(predicate: (x: T) => boolean, property: string): (obj: Record<PropertyKey, T>) => boolean;

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
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult): (list: T[]) => TResult;

/*
Method: reject

Explanation: It has the opposite effect of `R.filter`.

Example:

```
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list),
  R.reject(predicate, obj)
]
// => [[1], {a: 1}]
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function reject<T>(
	predicate: (value: T) => boolean,
  list: T[],
): T[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => ("" | null | undefined | false | 0)[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: T[]) => ("" | null | undefined | false | 0)[];
export function reject<T>(
	predicate: (value: T) => boolean,
): (list: T[]) => T[];

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
export function repeat<T>(x: T): (timesToRepeat: number) => T[];

/*
Method: replace
 
Explanation: It replaces `strOrRegex` found in `str` with `replacer`.

Example:

```
const result = [
	R.replace('o', '|1|')('foo'),
	R.replace(/o/g, '|1|')('foo'),
]
// => ['f|1|o', 'f|1||1|']
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function replace(strOrRegex: RegExp | string, replacer: RegExp | string): (str: string) => string;

/*
Method: sort

Explanation: It returns copy of `list` sorted by `sortFn` function, where `sortFn` needs to return only `-1`, `0` or `1`.

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

Notes:

*/
// @SINGLE_MARKER
export function sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[];

/*
Method: sortBy

Explanation: It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.

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

Notes:

*/
// @SINGLE_MARKER
export function sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[];
export function sortBy<T>(sortFn: (a: T) => Ord): (list: T[]) => T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(list: T[]) => T[];

/*
Method: sortWith

Explanation: 

Example:

```
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

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sortWith<T>(fns: Array<(a: T, b: T) => number>): (list: T[]) => T[];

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

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function splitEvery<T>(sliceLength: number): (input: T[]) => (T[])[];

/*
Method: subtract

Explanation: Curried version of `x - y`

Example:

```
const x = 3
const y = 1

const result = R.subtract(x, y) 
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
export function sum(list: number[]): number;

/*
Method: symmetricDifference

Explanation: It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

Example:

```
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = R.symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function symmetricDifference<T>(x: T[], y: T[]): T[];
export function symmetricDifference<T>(x: T[]): <T>(y: T[]) => T[];

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
export function tail<T extends unknown[]>(input: T): T extends [any, ...infer U] ? U : [...T];
export function tail(input: string): string;

/*
Method: take

Explanation: It returns the first `howMany` elements of `input`.


Example:

```
const howMany = 2

const result = [
  R.take(howMany)([1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function take<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};

/*
Method: takeLast

Explanation: It returns the last `howMany` elements of `input`.

Example:

```
const howMany = 2

const result = [
  R.takeLast(howMany)([1, 2, 3]),
  R.takeLast(howMany)('foobar'),
]
// => [[2, 3], 'ar']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function takeLast<T>(howMany: number): {
  (input: string): string;
  (input: T[]): T[];
  (input: readonly T[]): T[];
};

/*
Method: tap

Explanation: It applies function `fn` to input `x` and returns `x`. 

One use case is debugging in the middle of `R.pipe` chain.

Example:

```
const list = [1, 2, 3]

R.pipe(
	list,
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)
// => `2` and `3` will be logged
```

Categories: Logic

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
export function times<T>(fn: (i: number) => T, howMany: number): T[];
export function times<T>(fn: (i: number) => T): (howMany: number) => T[];

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

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U;

/*
Method: type

Explanation: It accepts any input and it returns its type.

Example:

```
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
export function union<T>(x: T[]): (y: T[]) => T[];

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
export function uniq<T>(list: T[]): T[];

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
export function uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];

/*
Method: when

Explanation: It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`. 
If the `predicate` returns `false`, then it will simply return `input`.

Example:
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

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function when<T>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => T): (input: T) => T;
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;

/*
Method: checkObjectWithSpec

Explanation: It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

Example:

```
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

Categories: Object, Logic

Notes:

*/
// @SINGLE_MARKER
export function checkObjectWithSpec<T>(spec: T): <U>(testObj: U) => boolean;

/*
Method: objectIncludes

Explanation: It will return `true` if `specification` object fully or partially include `obj` object.

`R.equals` is used to determine equality.

Example:

```
const specification = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = objectIncludes(specification)(input)
// => true
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function objectIncludes<T>(specification: T): <U>(obj: U) => boolean;

/*
Method: zip

Explanation: It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

Example:

```
const x = [1, 2]
const y = ['A', 'B']
R.zip(x)(y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3])(['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zip<K>(x: K[]): <V>(y: V[]) => KeyValuePair<K, V>[];

/*
Method: zipWith

Explanation:

Example:

```
const list1 = [ 10, 20, 30, 40 ]
const list2 = [ 100, 200 ]

const result = R.zipWith(R.add, list1)(list2)
// => [110, 220]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[];

/*
Method: takeLastWhile

Explanation: 

Example:

```
const result = R.takeLastWhile(x => x > 2)([1, 2, 3, 4])
// => [3, 4]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function takeLastWhile<T>(predicate: (x: T) => boolean): (input: T[]) => T[];
export function takeLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];

/*
Method: evolve

Explanation: It takes object of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

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
const result = R.evolve(rules)(input)
const expected = {
  a   : 1,
  foo : 3,
  bar : 2,
})
// => `result` is equal to `expected`
```

Categories: Object

Notes: 

*/
// @SINGLE_MARKER
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
export function dropLastWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
export function dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];

/*
Method: dropRepeatsWith

Explanation:

Example:

```
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'))(list)

// => [{a:1,b:2}, {a:2, b:4}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];

/*
Method: dropWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate)(list)
// => [3, 4]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropWhile<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
export function dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];


/*
Method: takeWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate)(list)
// => [1, 2]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function takeWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
export function takeWhile<T>(predicate: (x: T) => boolean): (input: T[]) => T[];


/*
Method: eqProps

Explanation: It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

Example:

```
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1)(obj2)
// => true 
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

/*
Method: count

Explanation: It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.

Example:

```
const list = [{a: 1}, 1, {a:2}]
const result = R.count(x => x.a !== undefined, list)
// => 2
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function count<T>(predicate: (x: T) => boolean): (list: T[]) => number;

/*
Method: countBy

Explanation: It counts elements in a list after each instance of the input list is passed through `transformFn` function.

Example:

```
const list = [ 'a', 'A', 'b', 'B', 'c', 'C' ]

const result = countBy(R.toLower, list)
const expected = { a: 2, b: 2, c: 2 }
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function countBy<T>(fn: (a: T) => string | number, list: T[]): { [index: string]: number };

/*
Method: unwind

Explanation: It takes an object and a property name. The method will return a list of objects, where each object is a shallow copy of the input object, but with the property array unwound.

Example:

```
const obj = {
  a: 1,
  b: [2, 3],
}
const result = R.unwind('b')(obj)
const expected = [{a:1, b:2}, {a:1, b:3}]
// => `result` is equal to `expected`
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function unwind<S extends string>(prop: S): <T>(obj: T) => Omit<T, S> & { [K in S]: T[S][number] };

/*
Method: uniqBy

Explanation:

It applies uniqueness to input list based on function that defines what to be used for comparison between elements.

`R.equals` is used to determine equality.

Example:

```
const list = [{a:1}, {a:2}, {a:1}]
const result = R.uniqBy(x => x, list)

// => [{a:1}, {a:2}]
```

Categories: List

Notes: 

*/
// @SINGLE_MARKER
export function uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];

/*
Method: modify

Explanation: It changes a property with the result of transformer function.

Example:

```
const person = {
  name : 'foo',
  age  : 20,
}
const result = R.modify('age', x => x + 1)(person) 
// => {name: 'foo', age: 21}
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function modify<K extends string, A, P>(
  prop: K,
  fn: (a: A) => P,
): <T extends Record<K, A>>(target: T) => Omit<T, K> & Record<K, P>;

/*
Method: differenceWith

Explanation:

Example:

```
const result = R.differenceWith(
  (a, b) => a.x === b.x,
  [{x: 1}, {x: 2}],
  [{x: 1}, {x: 3}]
)
// => [{x: 2}]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
  list2: T2[],
): T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: T1[], list2: T2[]) => T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];

/*
Method: dropRepeatsBy

Explanation:

Example:

```
const result = R.dropRepeatsBy(
  Math.abs,
  [1, -1, 2, 3, -3]
)
// => [1, 2, 3]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function dropRepeatsBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];

/*
Method: eqBy

Explanation:

Example:

```
const result = R.eqBy(Math.abs, 5)(-5)
// => true
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function eqBy<T>(fn: (x: T) => unknown, a: T): (b: T) => boolean;

/*
Method: innerJoin

Explanation: It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.

Example:

```
const list1 = [1, 2, 3, 4, 5]
const list2 = [4, 5, 6]
const predicate = (x, y) => x >= y
const result = R.innerJoin(predicate, list1)(list2)
// => [4, 5]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];

/*
Method: pickBy

Explanation:

Example:

```
const result = R.pickBy(
  x => x > 1,
  {a: 1, b: 2, c: 3}
)
// => {b: 2, c: 3}
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pickBy<T>(pred: ObjPredicate<T>): <U, V extends T>(obj: V) => U;

/*
Method: pathSatisfies

Explanation:

Example:

```
const result = R.pathSatisfies(
  x => x > 0,
  ['a', 'b', 'c'],
  {a: {b: {c: 1}}}
)
// => true
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: [K0]
): (obj: S) => S[K0];
export function pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: `${ K0 }`
): (obj: S) => S[K0];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: [K0, K1]
): (obj: S) => S[K0][K1];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: `${ K0 }.${ K1 }`
): (obj: S) => S[K0][K1];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0], K2 extends keyof S[K0][K1]>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: [K0, K1, K2]
): (obj: S) => S[K0][K1][K2];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0], K2 extends keyof S[K0][K1]>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: `${K0}.${K1}.${K2}`
): (obj: S) => S[K0][K1][K2];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: [K0, K1, K2, K3]
): (obj: S) => S[K0][K1][K2][K3];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}`
): (obj: S) => S[K0][K1][K2][K3];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: [K0, K1, K2, K3, K4]
): (obj: S) => S[K0][K1][K2][K3][K4];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}`
): (obj: S) => S[K0][K1][K2][K3][K4];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: [K0, K1, K2, K3, K4, K5]
): (obj: S) => S[K0][K1][K2][K3][K4][K5];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
export function pathSatisfies<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1],
  K3 extends keyof S[K0][K1][K2],
  K4 extends keyof S[K0][K1][K2][K3],
  K5 extends keyof S[K0][K1][K2][K3][K4],
  K6 extends keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`
): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];

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
export function update<T>(index: number, newValue: T): (list: T[]) => T[];

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

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U;
export function unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T): (x: T) => T;

/*
Method: split

Explanation: 

Example:

```
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function split(separator: string | RegExp): (str: string) => string[];

// API_MARKER_END
// ============================================

export as namespace R

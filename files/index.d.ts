export type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise" | "Symbol" | "Set" | "Error" | "Map" | "WeakMap" | "Generator" | "GeneratorFunction" | "BigInt" | "ArrayBuffer" | "Date";

export type EqualTypes<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

export type IterableContainer<T = unknown> = ReadonlyArray<T> | readonly [];

export type Mapped<T extends IterableContainer, K> = {
  -readonly [P in keyof T]: K;
};

export type ElementOf<Type extends readonly any[]> = Type[number];
export type MergeTypes<T> = {[KeyType in keyof T]: T[KeyType]} & {};
export type MergeTypesAlternative<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type EntryForKey<T, Key extends keyof T> = Key extends number | string
  ? [key: `${Key}`, value: Required<T>[Key]]
  : never;

export type Entry<T> = MergeTypes<{ [P in keyof T]-?: EntryForKey<T, P> }[keyof T]>;

export type Ord = number | string | boolean | Date;
export type Ordering = -1 | 0 | 1;

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}

export type Functor<A> = { map: <B>(fn: (x: A) => B) => Functor<B>; [key: string]: any };
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


export type PickStringToPickPath<T> = T extends `${infer Head},${infer Tail}` ? [Head, ...PickStringToPickPath<Tail>]
	: T extends `${infer Head}` ? [Head]
	: [];

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

type SimpleMerge<Destination, Source> = {
	[Key in keyof Destination as Key extends keyof Source ? never : Key]: Destination[Key];
} & Source;

type OmitIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? never
		: KeyType]: ObjectType[KeyType];
};

type PickIndexSignature<ObjectType> = {
	[KeyType in keyof ObjectType as {} extends Record<KeyType, unknown>
		? KeyType
		: never]: ObjectType[KeyType];
};

type Merge<Destination, Source> =
MergeTypes<
	SimpleMerge<PickIndexSignature<Destination>, PickIndexSignature<Source>>
	& SimpleMerge<OmitIndexSignature<Destination>, OmitIndexSignature<Source>>
>;

type StrictNonNullable<T> = Exclude<T, null | undefined>;

type ExcludeFalsy<T> = Exclude<T, null | undefined | false | true | 0 | "">;

type Flatten<T> = T extends object
	? T extends readonly any[]
		? T
		: {
				[K in keyof T]-?: NonNullable<T[K]> extends infer V
					? V extends object
						? V extends readonly any[]
							? never
							: Flatten<V>
						: V
					: never
			}
	: T;

export type FlattenObject<T extends object> = object extends T
  ? object
  : {
        [K in keyof T]-?: (
          x: NonNullable<T[K]> extends infer V
            ? V extends object
              ? V extends readonly any[]
                ? never
                : Flatten<V> extends infer FV
                  ? {
                      [P in keyof FV as `${Extract<K, string>}.${Extract<P, string>}`]: FV[P]
                    }
                  : never
              : Pick<T, K>
            : never
        ) => void
      } extends Record<keyof T, (y: infer O) => void>
    ? O
    : never;

type isfn<T, U> = (fn: (x: T) => boolean, y: T) => U;
type isfn2<T, V, U> = (fn: (x: T) => boolean, y: V) => U;

interface Switchem<T> {
  is: isfn<T, Switchem<T>>;
  default: (x: T) => T;
}
interface Switchem2<T, U> {
  is: isfn2<T, U, Switchem2<T, U>>;
  default: (x: U) => U;
}

// API_MARKER

/*
Method: modifyItemAtIndex

Explanation: It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

Example:

```
const result = R.pipe(
	[1, 2, 3],
	R.modifyItemAtIndex(1, x => x + 1)
) // => [1, 3, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function modifyItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];

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
R.any(predicate)(list)
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

Notes:

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
const result = R.append('foo')(['bar', 'baz'])
// => ['bar', 'baz', 'foo']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function append<T>(el: T): (list: readonly T[]) => T[];
export function append<T>(el: T): (list: T[]) => T[];

/*
Method: flatMap

Explanation: It maps `fn` over `list` and then flatten the result by one-level.

Example:

```
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = R.flatMap(duplicate)(list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function flatMap<T, U extends unknown>(transformFn: (x: T extends any[] ? T[number]: never) => U): (listOfLists: T[]) => U[];

/*
Method: complement

Explanation: It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

Example:

```
const fn = x => x > 5
const inverted = complement(fn)

const result = [
  fn(7),
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
Method: defaultTo

Explanation:
It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

Example:

```
R.defaultTo('foo')('bar') // => 'bar'
R.defaultTo('foo'))(undefined) // => 'foo'

// Important - emtpy string is not falsy value
R.defaultTo('foo')('') // => 'foo'
```

Categories: Logic

Notes: pipe

*/
// @SINGLE_MARKER
export function defaultTo<T>(defaultValue: T): (input: unknown) => T;

/*
Method: drop

Explanation: It returns `howMany` items dropped from beginning of list.

Example:

```
R.drop(2)(['foo', 'bar', 'baz']) // => ['baz']
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function drop<T>(howMany: number): (list: T[]) => T[];

/*
Method: dropLast

Explanation: It returns `howMany` items dropped from the end of list.

Example:

```
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLast<T>(howMany: number): (list: T[]) => T[];

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
): (list: readonly T[]) => ExcludeFalsy<T>[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: T[]) => ExcludeFalsy<T>[];
export function filter<T>(
	predicate: (value: T, index: number) => boolean,
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
): (list: T[]) => Exclude<T, S>[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => (null | undefined)[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: T[]) => (null | undefined)[];
export function reject<T>(
	predicate: (value: T, index: number) => boolean,
): (list: T[]) => T[];

/*
Method: find

Explanation: It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate)(list)
// => {foo: 1}
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined;

/*
Method: exists

Explanation: It returns `true` if there is at least one element in `list` that satisfy the `predicate`.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.exists(predicate)(list)
// => true
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function exists<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;

/*
Method: findNth

Explanation: It returns the `nth` element of `list` that satisfy the `predicate` function.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}, {foo: 2}, {foo: 3}]

const result = R.findNth(predicate, 2)(list)
// => {foo: 2}
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findNth<T>(predicate: (x: T) => boolean, nth: number): (list: T[]) => T | undefined;

/*
Method: findIndex

Explanation: It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate)(list)
// => 1
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;

/*
Method: findLast

Explanation: It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate)(list)
// => {foo: 1}
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;

/*
Method: findLastIndex

Explanation: It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

Example:

```
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate)(list)
// => 1
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;

/*
Method: flatten

Explanation: It deeply flattens an array.
You must pass expected output type as a type argument.

Example:

```
const result = R.flatten<number>([
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
export function groupBy<T, K extends string = string>(fn: (x: T) => K): (list: T[]) => Partial<Record<K, T[]>>;

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
Method: includes

Explanation: If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

Example:

```
const result = [
  R.includes('foo')('oo'),
  R.includes([{a: 1}])({a: 1})
]
// => [true, true ]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function includes<T>(list: readonly T[]): (target: T) => boolean;
export function includes(list: readonly string[] | string): (substringToFind: string) => boolean;

/*
Method: excludes

Explanation: Opposite of `R.includes`

`R.equals` is used to determine equality.

Example:

```
const result = [
  R.excludes('foo')('ar'),
  R.excludes([{a: 1}])({a: 2})
]
// => [true, true ]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function excludes(list: readonly string[] | string): (substringToFind: string) => boolean;
export function excludes<T>(list: readonly T[]): (target: T) => boolean;

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
export function init<T extends unknown>(input: T): T extends unknown[] ? 
	T['length'] extends 0 ? [] : T['length'] extends 1 ? [] : 
	T extends [...infer U, any] ? U : T : T extends string ? string : never;

/*
Method: intersection

Explanation: It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.

Example:

```
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = R.intersection(listA)(listB)
// => [{ id : 3 }, { id : 4 }]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function intersection<T>(listA: T[]): (listB: T[]) => T[];

/*
Method: intersperse

Explanation: It adds a `separator` between members of `list`.

Example:

```
const list = [ 0, 1, 2, 3 ]
const separator = 10
const result = R.intersperse(separator)(list)
// => [0, 10, 1, 10, 2, 10, 3]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
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
  R.lastIndexOf(2)(list),
  R.lastIndexOf(4)(list),
]
// => [4, -1]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function lastIndexOf<T>(target: T): (list: T[]) => number;

/*
Method: map

Explanation: It returns the result of looping through `iterable` with `fn`.

Example:

```
const result = R.pipe(
	[1, 2],
	R.map(x => x * 2)
)
// => [2, 4]
```

Categories: List

Notes: This function doesn't work with objects (use R.mapObject instead)

*/
// @SINGLE_MARKER
export function map<T extends IterableContainer, U>(
	fn: (value: T[number], index: number) => U,
): (data: T) => Mapped<T, U>;
export function map<T extends IterableContainer, U>(
	fn: (value: T[number]) => U,
): (data: T) => Mapped<T, U>;

/*
Method: mapChain

Explanation: Chained 2 or 3 `R.map` transformations as one.

Example:

```
const result = R.pipe(
	[1, 2],
	R.mapChain(
		x => x * 2,
		x => [x, x > 3],
	)
)
// => [[2, false], [4, true]]
```

Categories: List

Notes: 

*/
// @SINGLE_MARKER
export function mapChain<T extends IterableContainer, U, V>(
	fn1: (value: T[number], index: number) => U,
	fn2: (value: U, index: number) => V,
): (data: T) => Mapped<T, V>;
export function mapChain<T extends IterableContainer, U, V>(
	fn1: (value: T[number], index: number) => U,
	fn2: (value: U) => V,
): (data: T) => Mapped<T, V>;
export function mapChain<T extends IterableContainer, U, V>(
	fn1: (value: T[number]) => U,
	fn2: (value: U, index: number) => V,
): (data: T) => Mapped<T, V>;
export function mapChain<T extends IterableContainer, U, V>(
	fn1: (value: T[number]) => U,
	fn2: (value: U) => V,
): (data: T) => Mapped<T, V>;
export function mapChain<T extends IterableContainer, U, V, Y>(
	fn1: (value: T[number], index: number) => U,
	fn2: (value: U, index: number) => V,
	fn3: (value: V, index: number) => Y,
): (data: T) => Mapped<T, Y>;
export function mapChain<T extends IterableContainer, U, V, Y>(
	fn1: (value: T[number]) => U,
	fn2: (value: U) => V,
	fn3: (value: V) => Y,
): (data: T) => Mapped<T, Y>;

/*
Method: filterMap

Explanation: Same as `R.map` but it filters out `null/undefined` if returned from functor functions.

Example:

```
const result = R.pipe(
	[1, 2, 3],
	R.filterMap(x => x > 1 ? x : null)
)
// => [2, 3]
```

Categories: List

Notes: This function doesn't work with objects (use R.mapObject instead)

*/
// @SINGLE_MARKER
export function filterMap<T extends IterableContainer, U>(
	fn: (value: T[number], index: number) => U,
): (data: T) => Mapped<T, ExcludeFalsy<U>>;
export function filterMap<T extends IterableContainer, U>(
	fn: (value: T[number]) => U,
): (data: T) => Mapped<T, ExcludeFalsy<U>>;

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
Method: transformPropObject

Explanation:

Example:

```
const fn = (x) => x > 2
const obj = {a: 1, b: 2}

const result = R.transformPropObject(fn, 'a')(obj)
// => {a: false, b: 2}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function transformPropObject<T extends object, K extends keyof T, Value>(
  valueMapper: (value: T[K]) => Value,
  prop: K,
): (data: T) => MergeTypes<Omit<T, K> & { [P in K]: Value }>;

/*
Method: mapPropObject

Explanation: Convenience method, when one needs to maps over a object property that is a list.

Example:

```

const result = pipe(
	{ a: [1,2,3], b: 'foo' },
	mapPropObject('a',x => {
		return {
			a: x,
			flag: x > 2,
		}
	}),
)
// => { a: [{ a: 1, flag: false },{ a: 2, flag: false }, { a: 3, flag: true }], b: 'foo' }
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function mapPropObject<T extends object, K extends keyof T, Value extends unknown>(
	prop: K,
	valueMapper: (
		listItem: T[K] extends ReadonlyArray<infer ElementType> ? ElementType : never,
		list: T[K] extends ReadonlyArray<any> ? T[K] : never,
	) => Value,
): (data: T) => T[K] extends ReadonlyArray<any>
	? MergeTypes<Omit<T, K> & { [P in K]: Value[] }>
	: never;
export function mapPropObject<T extends object, K extends keyof T, Value extends unknown>(
	prop: K,
  valueMapper: (
    listItem: T[K] extends ReadonlyArray<infer ElementType> ? ElementType : never,
  ) => Value,
): (data: T) => T[K] extends ReadonlyArray<any>
  ? MergeTypes<Omit<T, K> & { [P in K]: Value[] }>
  : never;

/*
Method: addPropToObjects

Explanation: It receives list of objects and add new property to each item.

The value is based on result of `fn` function, which receives the current object as argument.

Example:

```
const result = R.pipe(
	[
		{a: 1, b: 2},
		{a: 3, b: 4},
	],
	R.addPropToObjects(
		'c',
		(x) => String(x.a + x.b),
	)
)
// => [{a: 1, b: 2, c: '3'}, {a: 3, b: 4, c: '7'}]
```

Categories: Object, List

Notes:

*/
// @SINGLE_MARKER
export function addPropToObjects<
  T extends object,
  K extends string,
  R
>(
	property: K,
  fn: (input: T) => R
): (list: T[]) => MergeTypes<T & { [P in K]: R }>[];

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
export function match(regExpression: RegExp): (str: string) => string[];

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
export function maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;

/*
Method: merge

Explanation: It creates a copy of `target` object with overwritten `newProps` properties.

Example:

```
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function merge<Source>(source: Source): <T>(data: T) => Merge<T, Source>;

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
Method: objOf

Explanation: It creates an object with a single key-value pair.

Example:

```
const result = R.objOf('foo')('bar')
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
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(
	obj: ElementOf<Keys> extends keyof U ? U : never
) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
export function omit<const Keys extends PropertyKey[]>(propsToPick: Keys): <
	U extends Partial<Record<ElementOf<Keys>, any>>
>(
	obj: ElementOf<Keys> extends keyof U ? U : never
) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;

/*
Method: createObjectFromKeys

Explanation:

Example:

```
const result = R.createObjectFromKeys(
	(x, index) => `${x}-${index}`
)(['a', 'b', 'c'])
// => {a: 'a-0', b: 'b-1', c: 'c-2'}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function createObjectFromKeys<const K extends readonly PropertyKey[], V>(
	fn: (key: K[number]) => V
): (keys: K) => { [P in K[number]]: V };
export function createObjectFromKeys<const K extends readonly PropertyKey[], V>(
	fn: (key: K[number], index: number) => V
): (keys: K) => { [P in K[number]]: V };

/*
Method: partition

Explanation: It will return array of two arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

Example:

```
const list = [1, 2, 3]
const predicate = x => x > 2

const result = R.partition(predicate)(list)

const expected = [[3], [1, 2]]
// `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function partition<T, S extends T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => value is S,
): (data: ReadonlyArray<T>) => [Array<S>, Array<Exclude<T, S>>];
export function partition<T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => boolean,
): (data: ReadonlyArray<T>) => [Array<T>, Array<T>];

/*
Method: partitionObject

Explanation: It returns an array containing two objects. The first object holds all properties of the input object for which the predicate returns true, while the second object holds those that do not.

Example:

```
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = R.partition(predicate)(obj)

const expected = [{c: 3},  {a: 1, b: 2}]
// `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function partitionObject<T extends unknown, S extends T>(
  predicate: (value: T, prop: string, obj: Record<string, T>) => value is S,
): (obj: Record<string, T>) => [Record<string, S>, Record<string, Exclude<T, S>>];
export function partitionObject<T extends unknown>(
  predicate: (value: T, prop: string, obj: Record<string, T>) => boolean,
): (obj: Record<string, T>) => [Record<string, T>, Record<string, T>];

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
export function path<S, K0 extends string & keyof S>(path: `${K0}`): (obj: S) => S[K0];
export function path<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(path: `${K0}.${K1}`): (obj: S) => S[K0][K1];
export function path<
  S,
  K0 extends keyof S,
  K1 extends keyof S[K0],
  K2 extends keyof S[K0][K1]
>(path: [K0, K1, K2]): (obj: S) => S[K0][K1][K2];
export function path<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
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
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
export function path<S, K0 extends keyof S>(path: [K0]): (obj: S) => S[K0];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: [K0, K1]): (obj: S) => S[K0][K1];
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
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2]
>(path: [K0, K1, K2, K3]): (obj: S) => S[K0][K1][K2][K3];
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
    K7 extends keyof S[K0][K1][K2][K3][K4][K5][K6],
    K8 extends keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];

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
  K0 extends string & keyof U,
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
  K2 extends string & keyof U[K0][K1],
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
  K2 extends string & keyof U[K0][K1],
  K3 extends string & keyof U[K0][K1][K2],
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
  K2 extends string & keyof U[K0][K1],
  K3 extends string & keyof U[K0][K1][K2],
  K4 extends string & keyof U[K0][K1][K2][K3],
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
  K2 extends string & keyof U[K0][K1],
  K3 extends string & keyof U[K0][K1][K2],
  K4 extends string & keyof U[K0][K1][K2][K3],
  K5 extends string & keyof U[K0][K1][K2][K3][K4],
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
  K0 extends string & keyof U,
  K1 extends string & keyof U[K0],
  K2 extends string & keyof U[K0][K1],
  K3 extends string & keyof U[K0][K1][K2],
  K4 extends string & keyof U[K0][K1][K2][K3],
  K5 extends string & keyof U[K0][K1][K2][K3][K4],
  K6 extends string & keyof U[K0][K1][K2][K3][K4][K5],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`, fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<[K0, K1, K2, K3, K4, K5, K6], U, T>;

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
  R.pick(propsToPick)(obj),
  R.pick(propsToPickList)(obj),
  R.pick('a,bar')(obj),
  R.pick('bar')(obj),
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

Notes: pipe
*/
// @SINGLE_MARKER
export function pick<K extends PropertyKey>(propsToPick: K[]): <T extends Partial<Record<K, any>>>(input: K extends keyof T ? T : never) => MergeTypes<Pick<T, K>>;
export function pick<S extends string, Keys extends PickStringToPickPath<S>>(propsToPick: S): <T extends Partial<Record<ElementOf<Keys>, any>>>(input: ElementOf<Keys> extends keyof T ? T : never) => ElementOf<Keys> extends keyof T ? MergeTypes<Pick<T, ElementOf<Keys>>> : never;

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
export function pluck<K extends PropertyKey>(prop: K): {
  <U extends O[keyof O], UK extends keyof U, O extends Record<string, any>>(obj: K extends UK ? O : never): { [OK in keyof O]: O[OK][K] };
  <U extends readonly unknown[] | Record<K, any>>(list: readonly U[]): U extends readonly (infer T)[] ? T[] : U extends Record<K, infer T> ? T[] : never;
};

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
  R.propEq(propToFind, valueToMatch)(obj),
  R.propEq(propToFind, valueToMatch)(secondObj)
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
Method: propOr

Explanation: It returns either `defaultValue` or the value of `property` in `obj`.

Example:

```
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property)(obj),
  R.propOr(defaultValue, 'foo')(obj)
]
// => [1, 'DEFAULT_VALUE']
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function propOr<T, P extends string>(property: P, defaultValue: T): (obj: Partial<Record<P, T>>) => T;

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
  R.reject(predicate)(list),
  R.reject(predicate)(obj)
]
// => [[1], {a: 1}]
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
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
Method: replaceAll

Explanation: Same as `R.replace` but it accepts array of string and regular expressions instead of a single value.

Example:

```
const result = [
	R.replaceAll(['o', /a/g], '|1|')('foa'),
]
// => 'f|1||1|'
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function replaceAll(patterns: (RegExp | string)[], replacer: string): (input: string) => string;

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

const result = R.sortBy(sortFn)(list)
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
export function sortBy<T>(sortFn: (x: T) => Ord): (list: T[]) => T[];

/*
Method: sortByDescending

Explanation:

Example:

```
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortByDescending(sortFn)(list)
const expected = [
  {a: 3},
  {a: 2},
  {a: 1}
]
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sortByDescending<T>(sortFn: (x: T) => Ord): (list: T[]) => T[];

/*
Method: sortByPath

Explanation: It sorts `list` by the value of `path` property.

Example:

```
const list = [
	{a: {b: 2}, id:1},
	{a: {b: 1}, id:2},
	{a: {b: 3}, id:3},
]
const result = R.sortByPath('a.b')(list)
const expected = [
	{a: {b: 1}, id:2},
	{a: {b: 2}, id:1},
	{a: {b: 3}, id:3}
]
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sortByPath<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[];
export function sortByPath<S, K0 extends string & keyof S>(
  path: `${K0}`
): (list: S[]) => S[];
export function sortByPath<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: [K0, K1]
): (list: S[]) => S[];
export function sortByPath<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: `${K0}.${K1}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  path: [K0, K1, K2]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  path: `${K0}.${K1}.${K2}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  path: [K0, K1, K2, K3]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  path: `${K0}.${K1}.${K2}.${K3}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  path: [K0, K1, K2, K3, K4]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  path: [K0, K1, K2, K3, K4, K5]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  path: [K0, K1, K2, K3, K4, K5, K6]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  path: [K0, K1, K2, K3, K4, K5, K6, K7]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]
): (list: S[]) => S[];
export function sortByPath<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`
): (list: S[]) => S[];

/*
Method: sortByPathDescending

Explanation:

Example:

```
const list = [
	{a: {b: 2}, id:1},
	{a: {b: 1}, id:2},
	{a: {b: 3}, id:3},
]
const result = R.sortByPathDescending('a.b')(list)
const expected = [
	{a: {b: 3}, id:3}
	{a: {b: 2}, id:1},
	{a: {b: 1}, id:2},
]
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sortByPathDescending<S, K0 extends string & keyof S>(
  path: [K0]
): (list: S[]) => S[];
export function sortByPathDescending<S, K0 extends string & keyof S>(
  path: `${K0}`
): (list: S[]) => S[];
export function sortByPathDescending<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: [K0, K1]
): (list: S[]) => S[];
export function sortByPathDescending<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  path: `${K0}.${K1}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  path: [K0, K1, K2]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  path: `${K0}.${K1}.${K2}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  path: [K0, K1, K2, K3]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  path: `${K0}.${K1}.${K2}.${K3}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  path: [K0, K1, K2, K3, K4]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  path: [K0, K1, K2, K3, K4, K5]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  path: [K0, K1, K2, K3, K4, K5, K6]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  path: [K0, K1, K2, K3, K4, K5, K6, K7]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]
): (list: S[]) => S[];
export function sortByPathDescending<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`
): (list: S[]) => S[];

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
  R.splitEvery(2)([1, 2, 3]),
  R.splitEvery(3)('foobar')
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
Method: difference

Explanation: It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

Example:

```
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = R.difference(x)(y)
// => [ 1, 2, 5, 6 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function difference<T>(x: T[]): (y: T[]) => T[];

/*
Method: symmetricDifference

Explanation: It returns all items that are in either of the lists, but not in both.

`R.equals` is used to determine equality.

Example:

```
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = R.symmetricDifference(x)(y)
// => [ 1, 2, 5, 6 ]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function symmetricDifference<T>(x: T[]): (y: T[]) => T[];

/*
Method: middle

Explanation: It returns all but the first and last element of `input`.

Example:

```
const result = [
  R.middle([1, 2, 3, 4]),
  R.middle('bar')
]
// => [[2, 3], 'a']
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function middle<T extends unknown>(input: T): T extends unknown[] ? 
	T['length'] extends 0 ? [] : T['length'] extends 1 ? [] : T['length'] extends 2 ? [] : 
	T extends [any, ...infer U, any] ? U : T : T extends string ? string : never;

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
export function tail<T extends unknown>(input: T): T extends unknown[] ? 
	T['length'] extends 0 ? [] : T['length'] extends 1 ? [] : 
	T extends [any, ...infer U] ? U : T : T extends string ? string : never;

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
  (input: readonly T[]): T[];
  (input: T[]): T[];
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
  (input: readonly T[]): T[];
  (input: T[]): T[];
};

/*
Method: tap

Explanation: It applies function `fn` to input `x` and returns `x`.

One use case is debugging in the middle of `R.pipe` chain.

Example:

```
const list = [1, 2, 3]

const result = R.pipe(
	list,
  R.filter(x => x > 1),
  R.tap(console.log),
  R.map(x => x * 2)
)
// => `2` and `3` will be logged
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function tap<T>(fn: (x: T) => void): (input: T) => T;

/*
Method: test

Explanation: It determines whether `str` matches `regExpression`.

Example:

```
R.test(/^f/)('foo')
// => true
```

Categories: String

Notes:

*/
// @SINGLE_MARKER
export function test(regExpression: RegExp): (str: string) => boolean;

/*
Method: tryCatch

Explanation: It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result.

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
const result = R.union([1,2,3])([3,4,5]);
// => [1, 2, 3, 4, 5]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function union<T>(x: T[]): (y: T[]) => T[];

/*
Method: unionWith

Explanation: 

Example:

```
const result = R.pipe(
	[{a: 1, b: 1}, {a: 2, b: 1}],
	R.unionWith((x, y) => x === y, [{a: 2, b: 2}, {a: 3, b: 2}]),
)
// => [{a: 1, b: 1}, {a: 2, b: 1}, {a: 3, b: 2}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function unionWith<T>(predicate: (x: T, y: T) => boolean, x: T[]): (y: T[]) => T[];

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

const result = R.uniqWith(predicate)(list)
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function uniqWith<T>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];

/*
Method: when

Explanation: It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`.
If the `predicate` returns `false`, then it will simply return `input`.

Example:
```
const predicate = x => typeof x === 'number'
const fn = R.when(predicate)(x => x + 1)

const positiveInput = 88
const negativeInput = 'foo'

const result = [
  fn(positiveInput),
  fn(negativeInput),
]

const expected = [
  89,
  'foo1',
]
// => `result` is equal to `expected`
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function when<T, U extends T>(predicate: (x: T) => x is U, whenTrueFn: (x: U) => T): (input: T) => T;
export function when<T>(predicate: (x: T) => boolean, whenTrueFn: (x: T) => T): (input: T) => T;
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (x: T) => U): (input: T) => T | U;

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
export function objectIncludes<T>(specification: T): (obj: Partial<T>) => boolean;

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

const result = R.zipWith((x, y) => x + y, list1)(list2)
// => [110, 220]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function zipWith<T, U, TResult>(
  fn: (x: T, y: U) => TResult,
  list1: readonly T[],
): (list2: readonly U[]) => TResult[];

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
It doesn't support nested rules, i.e rules are only one level deep.

Example:

```
const input = {
	foo: 2,
	baz: 'baz',
}
const result = R.pipe(
	input,
	R.evolve({
		foo: x => x + 1,
	})
)
// => result is { foo: 3, baz: 'baz' }
```

Categories: Object, Logic

Notes:

*/
// @SINGLE_MARKER
export function evolve<T>(rules: {
	[K in keyof T]?: (x: T[K]) => T[K]
}): (obj: T) => T;

/*
Method: dropLastWhile

Explanation:

Example:

```
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate)(list);
// => [1, 2]
```

Categories: List, String

Notes:

*/
// @SINGLE_MARKER
export function dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
export function dropLastWhile<T>(predicate: (x: T) => boolean): (list: T[]) => T[];

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
export function dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => T[];
export function dropWhile<T>(predicate: (x: T) => boolean): (list: T[]) => T[];

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
export function eqProps<T, K extends keyof T>(prop: K, obj1: T): (obj2: T) => boolean;

/*
Method: count

Explanation: It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.

Example:

```
const list = [{a: 1}, 1, {a:2}]
const result = R.count(x => x.a !== undefined)(list)
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

const result = countBy(x => x.toLowerCase())( list)
const expected = { a: 2, b: 2, c: 2 }
// => `result` is equal to `expected`
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function countBy<T>(fn: (x: T) => string | number): (list: T[]) => { [index: string]: number };

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
export function unwind<S extends string>(prop: S): <T extends Record<S, readonly any[]>>(obj: T) => Array<MergeTypes<Omit<T, S> & { [K in S]: T[S][number] }>>;

/*
Method: uniqBy

Explanation:

It applies uniqueness to input list based on function that defines what to be used for comparison between elements.

`R.equals` is used to determine equality.

Example:

```
const list = [{a:1}, {a:2}, {a:1}]
const result = R.uniqBy(x => x)(list)

// => [{a:1}, {a:2}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function uniqBy<T, U>(fn: (x: T) => U): (list: T[]) => T[];

/*
Method: duplicateBy

Explanation:

Example:

```
const list = [{a:1}, {a:2}, {a:1}]
const result = R.duplicateBy(x => x, list)

// => [{a:1}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function duplicateBy<T, U>(fn: (x: T) => U): (list: T[]) => T[];

/*
Method: modifyProp

Explanation: It changes a property with the result of transformer function.

Example:

```
const person = {
  name : 'foo',
  age  : 20,
}
const result = R.modifyProp('age', x => x + 1)(person)
// => {name: 'foo', age: 21}
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function modifyProp<T, K extends keyof T>(
  prop: K,
  fn: (x: T[K]) => T[K],
): (target: T) => T;

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
export function dropRepeatsBy<T, U>(fn: (x: T) => U): (list: T[]) => T[];

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
Method: intersectionWith

Explanation: It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.

Example:

```
const list1 = [1, 2, 3, 4, 5]
const list2 = [4, 5, 6]
const predicate = (x, y) => x >= y
const result = R.intersectionWith(predicate, list1)(list2)
// => [4, 5]
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function intersectionWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: T1[],
): (list2: T2[]) => T1[];

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
export function pathSatisfies<S, K0 extends string & keyof S>(
  predicate: (x: S[K0]) => boolean,
  path: [K0]
): (obj: S) => boolean;
export function pathSatisfies<S, K0 extends string & keyof S>(
  predicate: (x: S[K0]) => boolean,
  path: `${K0}`
): (obj: S) => boolean;
export function pathSatisfies<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  predicate: (x: S[K0][K1]) => boolean,
  path: [K0, K1]
): (obj: S) => boolean;
export function pathSatisfies<S, K0 extends string & keyof S, K1 extends string & keyof S[K0]>(
  predicate: (x: S[K0][K1]) => boolean,
  path: `${K0}.${K1}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: [K0, K1, K2]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1]
>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: `${K0}.${K1}.${K2}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: [K0, K1, K2, K3]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2]
>(
  predicate: (x: S[K0][K1][K2][K3]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: [K0, K1, K2, K3, K4]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3]
>(
  predicate: (x: S[K0][K1][K2][K3][K4]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: [K0, K1, K2, K3, K4, K5]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}`
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: [K0, K1, K2, K3, K4, K5, K6, K7, K8]
): (obj: S) => boolean;
export function pathSatisfies<
  S,
  K0 extends string & keyof S,
  K1 extends string & keyof S[K0],
  K2 extends string & keyof S[K0][K1],
  K3 extends string & keyof S[K0][K1][K2],
  K4 extends string & keyof S[K0][K1][K2][K3],
  K5 extends string & keyof S[K0][K1][K2][K3][K4],
  K6 extends string & keyof S[K0][K1][K2][K3][K4][K5],
  K7 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6],
  K8 extends string & keyof S[K0][K1][K2][K3][K4][K5][K6][K7]
>(
  predicate: (x: S[K0][K1][K2][K3][K4][K5][K6][K7][K8]) => boolean,
  path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}.${K7}.${K8}`
): (obj: S) => boolean;

/*
Method: update

Explanation: It returns a copy of `list` with updated element at `index` with `newValue`.

Example:

```
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = R.update(index, newValue)(list)
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

/*
Method: range

Explanation: It returns list of numbers between `startInclusive` to `endInclusive` markers.

Example:

```
[R.range(5), R.range(1, 5)]
// => [[0, 1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function range(endInclusive: number) : number[];
export function range(startInclusive: number, endInclusive: number) : number[];

/*
Method: rangeDescending

Explanation: It returns list of numbers between `endInclusive` to `startInclusive` markers.

Example:

```
```

Categories: Number

Notes:

*/
// @SINGLE_MARKER
export function rangeDescending(startInclusive: number, endInclusive: number) : number[];
export function rangeDescending(endInclusive: number) : number[];

/*
Method: pipeAsync

Explanation: It accepts input as first argument and series of functions as next arguments. It is same as `R.pipe` but with support for asynchronous functions.

Example:

```
const result = await R.pipeAsync(
  100,
  async x => {
    await R.delay(100)
    return x + 2
  },
  x => x +2,
  async x => {
    const delayed = await R.delay(100)
    return delayed + x
  }
)
// `result` resolves to `RAMBDAX_DELAY104`
```

Categories: Async

*/
// @SINGLE_MARKER
export function pipeAsync<A, B>(input: A, fn0: (x: Awaited<A>) => B) : B;
export function pipeAsync<A, B, C>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C) : C;
export function pipeAsync<A, B, C, D>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D) : D;
export function pipeAsync<A, B, C, D, E>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E) : E;
export function pipeAsync<A, B, C, D, E, F>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F) : F;
export function pipeAsync<A, B, C, D, E, F, G>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G) : G;
export function pipeAsync<A, B, C, D, E, F, G, H>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G, fn6: (x: Awaited<G>) => H) : H;
export function pipeAsync<A, B, C, D, E, F, G, H, I>(input: A, fn0: (x: Awaited<A>) => B, fn1: (x: Awaited<B>) => C, fn2: (x: Awaited<C>) => D, fn3: (x: Awaited<D>) => E, fn4: (x: Awaited<E>) => F, fn5: (x: Awaited<F>) => G, fn6: (x: Awaited<G>) => H, fn7: (x: Awaited<H>) => I) : I;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
) : J;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
): K;

export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
): L;

export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
): M;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
): N;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
): O;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
): P;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
  fn15: (x: Awaited<P>) => Q,
): Q;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
  fn15: (x: Awaited<P>) => Q,
  fn16: (x: Awaited<Q>) => R,
): R;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
  fn15: (x: Awaited<P>) => Q,
  fn16: (x: Awaited<Q>) => R,
  fn17: (x: Awaited<R>) => S,
): S;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
  fn15: (x: Awaited<P>) => Q,
  fn16: (x: Awaited<Q>) => R,
  fn17: (x: Awaited<R>) => S,
  fn18: (x: Awaited<S>) => T,
): T;
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
  input: A,
  fn0: (x: Awaited<A>) => B,
  fn1: (x: Awaited<B>) => C,
  fn2: (x: Awaited<C>) => D,
  fn3: (x: Awaited<D>) => E,
  fn4: (x: Awaited<E>) => F,
  fn5: (x: Awaited<F>) => G,
  fn6: (x: Awaited<G>) => H,
  fn7: (x: Awaited<H>) => I,
  fn8: (x: Awaited<I>) => J,
  fn9: (x: Awaited<J>) => K,
  fn10: (x: Awaited<K>) => L,
  fn11: (x: Awaited<L>) => M,
  fn12: (x: Awaited<M>) => N,
  fn13: (x: Awaited<N>) => O,
  fn14: (x: Awaited<O>) => P,
  fn15: (x: Awaited<P>) => Q,
  fn16: (x: Awaited<Q>) => R,
  fn17: (x: Awaited<R>) => S,
  fn18: (x: Awaited<S>) => T,
  fn19: (x: Awaited<T>) => U,
): U;

/*
Method: filterAsync

Explanation:

Example:

```
```

Categories: Async, List

Notes:

*/
// @SINGLE_MARKER
export function filterAsync<T>(
	predicate: (value: T) => Promise<boolean>,
): (list: T[]) => Promise<T[]>;

/*
Method: mapAsync

Explanation: Sequential asynchronous mapping with `fn` over members of `list`.

Example:

```
async function fn(x){
  await R.delay(1000)

  return x+1
}

const result = await R.mapAsync(fn)([1, 2, 3])
// `result` resolves after 3 seconds to `[2, 3, 4]`
```

Categories: Async, List

Notes:

*/
// @SINGLE_MARKER
export function mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number], index: number) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;
export function mapAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
): (data: T) => Promise<Mapped<T, U>>;

/*
Method: mapParallelAsync

Explanation: Wrapper around `Promise.all` for asynchronous mapping with `fn` over members of `list`.
There is optional `batchSize` parameter to allow parallel execution to run in batches. In this case, the whole batch must complete before the next batch starts.

Example:

```
```

Categories: Async, List

Notes:

*/
// @SINGLE_MARKER
export function mapParallelAsync<T extends IterableContainer, U>(
  fn: (value: T[number]) => Promise<U>,
	batchSize?: number,
): (data: T) => Promise<Mapped<T, U>>;

/*
Method: mapObjectAsync

Explanation:

Example:

```
```

Categories: Async, Object

Notes:

*/
// @SINGLE_MARKER
export function mapObjectAsync<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Promise<Value>,
): (data: T) => Promise<MappedValues<T, Value>>;

/*
Method: sortObject

Explanation: It returns a sorted version of `input` object.

Example:

```
const predicate = (propA, propB, valueA, valueB) => valueA > valueB ? -1 : 1

const result = R.sortObject(predicate)({a:1, b: 4, c: 2})
// => {b: 4, c: 2, a: 1}
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function sortObject<T, K extends string & keyof T>(predicate: (aProp: string, bProp: string, aValue: T[K], bValue: T[K]) => number): (obj: T) => T;
export function sortObject<T>(predicate: (aProp: string, bProp: string) => number): (obj: T) => T;

/*
Method: ascend

Explanation: Helper function to be used with `R.sort` to sort list in ascending order.


Example:

```
const result = R.pipe(
	[{a: 1}, {a: 2}, {a: 0}],
	R.sort(R.ascend(R.prop('a')))
)
// => [{a: 0}, {a: 1}, {a: 2}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function ascend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering;

/*
Method: descend

Explanation: Helper function to be used with `R.sort` to sort list in descending order.

Example:

```
const result = R.pipe(
	[{a: 1}, {a: 2}, {a: 0}],
	R.sort(R.descend(R.prop('a')))
)
// => [{a: 2}, {a: 1}, {a: 0}]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function descend<T>(fn: (obj: T) => Ord): (a: T, b: T)=> Ordering;

/*
Method: addProp

Explanation: It adds new key-value pair to the object.

Example:

```
const result = R.pipe(
	{ a: 1, b: 'foo' },
	R.addProp('c', 3)
)
// => { a: 1, b: 'foo', c: 3 }
```

Categories: Object

Notes:

*/
// @SINGLE_MARKER
export function addProp<T extends object, P extends PropertyKey, V extends unknown>(
	prop: P,
	value: V
): (obj: T) => MergeTypes<T & Record<P, V>>;

/*
Method: permutations

Explanation:

Example:

```
const result = R.permutations(
	[1, 2]
)
// => [[1, 2], [2, 1]]
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function permutations<T>(list: T[]): T[][];

/*
Method: mapKeys

Explanation: It returns a copy of `obj` with keys transformed by `fn`.

Example:

```
const result = R.mapKeys(
	(key, value) => key.toUpperCase()+value
	)(
	{ a: 1, b: 2 }
)
// => { A1: 1, B2: 2 }
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function mapKeys<T>(fn: (prop: string, value: T) => string): (obj: Record<string, T>) => Record<string, T>;

/*
Method: flattenObject

Explanation: It transforms object to object where each value is represented with its path.

Example:

```
const result = R.flattenObject(
	[1, 2, 3]
)
// => [3, 1, 2] or [2, 3, 1] or ...
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function flattenObject<T extends object>(obj: T): FlattenObject<T>;

/*
Method: shuffle

Explanation: It returns a randomized copy of array.

Example:

```
const result = R.shuffle(
	[1, 2, 3]
)
// => [3, 1, 2] or [2, 3, 1] or ...
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function shuffle<T>(list: T[]): T[];

/*
Method: compact

Explanation: It removes `null` and `undefined` members from list or object input.

Example:

```
const result = R.pipe(
	{
		a: [ undefined, '', 'a', 'b', 'c'],
		b: [1,2, null, 0, undefined, 3],
		c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
	},
	x => ({
		a: R.compact(x.a),
		b: R.compact(x.b),
		c: R.compact(x.c)
	})
)
// => { a: ['a', 'b', 'c'], b: [1, 2, 3], c: { a: 1, b: 2, c: 0, f: false } }
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function compact<T>(list: T[]): Array<StrictNonNullable<T>>;
export function compact<T extends object>(record: T): {
  [K in keyof T as Exclude<T[K], null | undefined> extends never
    ? never
    : K
  ]: Exclude<T[K], null | undefined>
};

/*
Method: convertToType

Explanation: It helps to convert a value to a specific type.
It is useful when you have to overcome TypeScript's type inference.

Example:

```
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function convertToType<T>(x: unknown) : T;

/*
Method: assertType

Explanation: It helps to make sure that input is from specific type. Similar to `R.convertToType`, but it actually checks the type of the input value. If `fn` input returns falsy value, then the function will throw an error.

Example:

```
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function assertType<T, U extends T>(fn: (x: T) => x is U) : (x: T) => U;

/*
Method: interpolate

Explanation: It generates a new string from `inputWithTags` by replacing all `{{x}}` occurrences with values provided by `templateArguments`.

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
export function interpolate(inputWithTags: string): (templateArguments: object) => string;

/*
Method: indexBy

Explanation: It transforms list of objects to object using specified property as the base for the returned object.

Example:

```
const result = R.indexBy(
	'id'
)([{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}])
// => {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
```

Categories: List, Object

Notes:

*/
// @SINGLE_MARKER
export function indexBy<T, K extends keyof T>(
  property: K
): (list: readonly T[]) => Record<string, T>;
export function indexBy<T, K extends keyof T>(
  property: K
): (list: T[]) => Record<string, T>;

/*
Method: sum

Explanation: 

Example:

```
const result = R.sum(
	[1,2,3]
)
// => 6
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function sum(list: number[]): number;

/*
Method: delay

Explanation: `setTimeout` as a promise that resolves to `RAMBDA_DELAY` string after `ms` milliseconds.

Example:

```
```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function delay(ms: number): Promise<'RAMBDA_DELAY'>;

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
export function shuffle<T>(list: T[]): T[];

/*
Method: random

Explanation: It returns a random number between `min` inclusive and `max` inclusive.

Example:

```
```

Categories: List

Notes:

*/
// @SINGLE_MARKER
export function random(minInclusive: number, maxInclusive: number): number;

/*
Method: switcher

Explanation: 

Example:

```
```

Categories: Logic

Notes:

*/
// @SINGLE_MARKER
export function switcher<T extends unknown>(valueToMatch: T): Switchem<T>;
export function switcher<T extends unknown, U extends unknown>(valueToMatch: T): Switchem2<T, U>;

// API_MARKER_END
// ============================================

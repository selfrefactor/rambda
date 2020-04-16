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
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function append<T>(el: T, list: ReadonlyArray<T>): T[];
export function append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

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
export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
  obj: Obj
): (
    ...args: Parameters<ValueOfRecord<Obj>>
  ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;

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
export function assoc<T, U, K extends string>(prop: K, value: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, value: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(value: T, obj: U) => Record<K, T> & U;

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
export function assocPath<T, U>(path: Path, val: T, obj: U): U;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): FToolbelt.Curry<(a: T, b: U) => U>;

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
export function both(pred1: Pred, pred2: Pred): Pred;
export function both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
export function both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
export function both(pred1: Pred): (pred2: Pred) => Pred;

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
export function either(pred1: Pred, pred2: Pred): Pred;
export function either(pred1: Pred): (pred2: Pred) => Pred;


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
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number): (input: number) => number;

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
export function clone<T>(value: T): T;
export function clone<T>(value: ReadonlyArray<T>): T[];

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
export function complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

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
Method:

Explanation:



Example:

```

```

Categories:

Notes:

*/
// @SINGLE_MARKER
export function concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
export function concat(x: string, y: string): string;
export function concat(x: string): (y: string) => string;

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
export function cond(fns: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
export function cond<A, B>(fns: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;

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
export function curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>;

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
export function dec(n: number): number;

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
export function defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
export function defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
export function defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;

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
export function difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

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
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc(prop: string): <U>(obj: any) => U;

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
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

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
export function drop<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
export function drop(howManyToDrop: number, arrOrStr: string): string;
export function drop<T>(howManyToDrop: number): {
  (arrOrStr: string): string;
  (arrOrStr: ReadonlyArray<T>): T[];
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
export function dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
export function dropLast(howManyToDrop: number, arrOrStr: string): string;
export function dropLast<T>(howManyToDrop: number): {
  (arrOrStr: ReadonlyArray<T>): T[];
  (arrOrStr: string): string;
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
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

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
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;


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
export function F(): boolean;

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
export function filter<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
export function filter<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
export function filter<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

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
export function find<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
export function find<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;

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
export function findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
export function findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;

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
export function findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

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
export function findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

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
export function flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

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
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;

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
export function forEach<T>(fn: (x: T) => void, list: T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
export function forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

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
export function fromPairs<V>(pairs: KeyValuePair<string, V>[]): { [index: string]: V };
export function fromPairs<V>(pairs: KeyValuePair<number, V>[]): { [index: number]: V };

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
export function groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
export function groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

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
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;

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
export function groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

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
export function head<T>(arrOrStr: T[]): T | undefined;
export function head(arrOrStr: string): string;

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
export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;

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
export function identity<T>(x: T): T;

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
export function ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
export function ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

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
export function inc(n: number): number;

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
export function includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
export function includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
export function includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
export function includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;

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
export function indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: (a: T) => string): (arr: ReadonlyArray<T>) => { [key: string]: T };
export function indexBy<T>(condition: string): (arr: ReadonlyArray<T>) => { [key: string]: T };

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
export function indexOf<T>(target: T, arr: ReadonlyArray<T>): number;
export function indexOf<T>(target: T): (arr: ReadonlyArray<T>) => number;

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
export function init<T>(arrOrStr: ReadonlyArray<T>): T[];
export function init(arrOrStr: string): string;

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
export function intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
export function intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

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
export function intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

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
export function is(xPrototype: any, x: any): boolean;
export function is(xPrototype: any): (x: any) => boolean;

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
export function isEmpty<T>(input: T): boolean;

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
export function isNil(x: any): x is null | undefined;

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
export function join(x: string, xs: ReadonlyArray<any>): string;
export function join(x: string): (xs: ReadonlyArray<any>) => string;

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
export function keys<T extends object>(x: T): (keyof T)[];
export function keys<T>(x: T): string[];

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
export function last<T>(arrOrStr: T[]): T | undefined;
export function last(arrOrStr: string): string;

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
export function lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number;

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
export function paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[];
export function paths<T>(pathsToSearch: (string | string[])[], obj: any): (T | undefined)[];
export function paths<T>(pathsToSearch: (string | string[])[]): (obj: any) => (T | undefined)[];
export function paths<Input, T>(pathsToSearch: (string | string[])[]): (obj: Input) => (T | undefined)[];

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
export function tail<T>(arrOrStr: ReadonlyArray<T>): T[];
export function tail(arrOrStr: string): string;

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
export function take<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
export function take(num: number, arrOrStr: string): string;
export function take<T>(num: number): {
  (arrOrStr: string): string;
  (arrOrStr: ReadonlyArray<T>): T[];
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
export function takeLast<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
export function takeLast(num: number, arrOrStr: string): string;
export function takeLast(num: number): {
  <T>(arrOrStr: ReadonlyArray<T>): T[];
  (arrOrStr: string): string;
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
// ============================================


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
export function allFalse(...input: any[]): boolean;

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
export function setter(keyOrobject: string | object, value?: any): void;

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

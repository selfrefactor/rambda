import { FToolbelt } from "./_ts-toolbelt/src/index";

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
	It adds `a` and `b`.
*/
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

/*
	It replaces `index` in array `list` with the result of `replaceFn(list[i])`.
*/
export function adjust<T>(index: number, replaceFn: (a: T) => T, list: ReadonlyArray<T>): T[];
export function adjust<T>(index: number, replaceFn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

/*
	It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.
*/
export function all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/*
	It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.
*/
export function allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;

/*
	It returns function that always returns `x`.
*/
export function always<T>(x: T): () => T;

/*
	Returns `true` if both arguments are `true`. Otherwise, it returns `false`.
*/
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

/*
	It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.
*/
export function any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
export function any<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/*
	It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.
*/
export function anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;

/*
	It appends element `el` to a `list` array.
*/
export function append<T>(el: T, list: ReadonlyArray<T>): T[];
export function append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

/*
	Returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.
*/
export function applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
    ...args: Parameters<ValueOfRecord<Spec>>
  ) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
export function applySpec<T>(spec: any): (...args: readonly any[]) => T;

/*
	It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.
*/
export function assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;

/*
	It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.
*/
export function assocPath<T, U>(path: Path, newValue: T, obj: U): U;
export function assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): FToolbelt.Curry<(a: T, b: U) => U>;

/*
	It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.
*/
export function both(pred1: Pred, pred2: Pred): Pred;
export function both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
export function both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
export function both(pred1: Pred): (pred2: Pred) => Pred;

/*
	Restrict a number `input` to be withing `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.
*/
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number): (input: number) => number;


export function clone<T>(input: T): T;
export function clone<T>(input: ReadonlyArray<T>): T[];

/*
	It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.
*/
export function complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

/*
	It performs right-to-left function composition.
*/
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
	It returns a new string or array, which is the result of merging `x` and `y`.
*/
export function concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
export function concat(x: string, y: string): string;
export function concat(x: string): (y: string) => string;

/*
	It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.
*/
export function cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
export function cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;

/*
	
*/
export function converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;

/*
	It expects a function as input and returns its curried version.
*/
export function curry<F extends (...args: any) => any>(f: F): FToolbelt.Curry<F>;

/*
	It expects a function as input and returns its curried version.
*/
export function curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/*
	It decrements a number.
*/
export function dec(x: number): number;

/*
	It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).
*/
export function defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
export function defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
export function defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;

/*
	It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.
*/
export function difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
export function difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

/*
	It returns a new object that does not contain property `prop`.
*/
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc(prop: string): <U>(obj: any) => U;

/*
	
*/
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

/*
	It returns `listOrString` with `howManyToDrop` items dropped from its beginning.
*/
export function drop<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
export function drop(howManyToDrop: number, listOrString: string): string;
export function drop<T>(howManyToDrop: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};

/*
	It returns `listOrString` with `howManyToDrop` items dropped from its beginning.
*/
export function dropLast<T>(howManyToDrop: number, listOrString: ReadonlyArray<T>): T[];
export function dropLast(howManyToDrop: number, listOrString: string): string;
export function dropLast<T>(howManyToDrop: number): {
  (listOrString: ReadonlyArray<T>): T[];
  (listOrString: string): string;
};


export function either(firstPredicate: Pred, secondPredicate: Pred): Pred;
export function either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;

/*
	It returns `true` if `input` string ends with `suffix`.
*/
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;

/*
	It deeply compares `a` and `b` and returns `true` if they are equal.
*/
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;

/*
	
*/
export function F(): boolean;

/*
	It filters list or object `input` with `predicate`.
*/
export function filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
export function filter<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
export function filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

/*
	It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.
*/
export function find<T>(predicate: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
export function find<T>(predicate: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;

/*
	It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.
*/
export function findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
export function findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;

/*
	It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.
*/
export function findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

/*
	It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.
*/
export function findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

/*
	It deeply flattens an array.
*/
export function flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

/*
	It returns function which calls `fn` with exchanged first and second argument.
*/
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;

/*
	It applies `iterable` function over all members of `list` and returns `list`.
*/
export function forEach<T>(fn: (x: T) => void, list: T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
export function forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

/*
	It transforms a `listOfPairs` to an object.
*/
export function fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
export function fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };

/*
	It splits `list` according to a provided `groupFn` function and returns an object.
*/
export function groupBy<T>(groupFn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
export function groupBy<T>(groupFn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

/*
	It returns separated version of `list`, where separation is done with equality `compareFn` function.
*/
export function groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];

/*
	It returns `true` if `obj` has property `prop`.
*/
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;


export function head<T>(listOrString: T[]): T | undefined;
export function head(listOrString: string): string;


export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;


export function identity<T>(x: T): T;


export function ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
export function ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;


export function inc(n: number): number;


export function includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
export function includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
export function includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
export function includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;


export function indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: (a: T) => string): (arr: ReadonlyArray<T>) => { [key: string]: T };
export function indexBy<T>(condition: string): (arr: ReadonlyArray<T>) => { [key: string]: T };


export function indexOf<T>(target: T, arr: ReadonlyArray<T>): number;
export function indexOf<T>(target: T): (arr: ReadonlyArray<T>) => number;


export function init<T>(listOrString: ReadonlyArray<T>): T[];
export function init(listOrString: string): string;


export function intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
export function intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];


export function intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];


export function is(xPrototype: any, x: any): boolean;
export function is(xPrototype: any): (x: any) => boolean;


export function isEmpty<T>(input: T): boolean;


export function isNil(x: any): x is null | undefined;


export function join(x: string, xs: ReadonlyArray<any>): string;
export function join(x: string): (xs: ReadonlyArray<any>) => string;


export function keys<T extends object>(x: T): (keyof T)[];
export function keys<T>(x: T): string[];


export function last<T>(listOrString: T[]): T | undefined;
export function last(listOrString: string): string;


export function lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number;


export function length<T>(list: ReadonlyArray<T>): number;


export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;


export function lensIndex(n: number): Lens;
export function lensPath(path: RamdaPath): Lens;


export function lensProp(str: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};


export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];


export function set<T, U>(lens: Lens, a: U, obj: T): T;
export function set<U>(lens: Lens, a: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(a: U, obj: T) => T;


export function view<T, U>(lens: Lens): (obj: T) => U;
export function view<T, U>(lens: Lens, obj: T): U;


export function map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>;
export function map<T, U>(mapFn: MapFunctionArray<T, U>, x: T[]): U[];
export function map<T, U>(mapFn: MapFunctionArray<T, U>): (x: T[]) => U[];
export function map<T, U, S>(mapFn: MapFunctionObject<T, U>): (x: Dictionary<T>) => Dictionary<U>;
export function map<T>(mapFn: MapFunctionArray<T, T>): (x: T[]) => T[];
export function map<T>(mapFn: MapFunctionArray<T, T>, x: ReadonlyArray<T>): T[];


export function match(regexp: RegExp, str: string): any[];
export function match(regexp: RegExp): (str: string) => any[];


export function max<T extends Ord>(a: T, b: T): T;
export function max<T extends Ord>(a: T): (b: T) => T;


export function maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function maxBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;


export function mean(list: ReadonlyArray<number>): number;


export function median(list: ReadonlyArray<number>): number;


export function merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
export function merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;


export function min<T extends Ord>(a: T, b: T): T;
export function min<T extends Ord>(a: T): (b: T) => T;


export function minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function minBy<T>(keyFn: (a: T) => Ord): FToolbelt.Curry<(a: T, b: T) => T>;


export function modulo(a: number, b: number): number;
export function modulo(a: number): (b: number) => number;


export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;


export function negate(a: number): number;


export function none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;


export function not(x: any): boolean;



export function nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
export function nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;


export function omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
export function omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;


export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;
export function partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;


export function path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
export function path<T>(pathToSearch: string | string[], obj: any): T | undefined;
export function path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
export function path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;


export function paths<Input, T>(pathsToSearch: (string | string[])[], obj: Input): (T | undefined)[];
export function paths<T>(pathsToSearch: (string | string[])[], obj: any): (T | undefined)[];
export function paths<T>(pathsToSearch: (string | string[])[]): (obj: any) => (T | undefined)[];
export function paths<Input, T>(pathsToSearch: (string | string[])[]): (obj: Input) => (T | undefined)[];


export function pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): FToolbelt.Curry<(a: Path, b: any) => T>;


export function pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
export function pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;


export function pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
export function pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;


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



export function pluck<T>(property: number, arr: ReadonlyArray<T>): T;
export function pluck<K extends keyof T, T>(property: K, arr: ReadonlyArray<T>): T[K][];
export function pluck(property: number): <T>(arr: ReadonlyArray<T>) => T;
export function pluck<P extends string>(property: P): <T>(arr: ReadonlyArray<Record<P, T>>) => T[];


export function prepend<T>(x: T, arr: ReadonlyArray<T>): T[];
export function prepend<T>(x: T): (arr: ReadonlyArray<T>) => T[];


export function product(list: ReadonlyArray<number>): number;


export function prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;


export function propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
export function propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
export function propEq(propToFind: string | number): {
  <T>(valueToMatch: T, obj: any): boolean;
  <T>(valueToMatch: T): (obj: any) => boolean;
};


export function propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
export function propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;


export function propOr<T, U, V>(val: T, p: string, obj: U): V;
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<T>(val: T): <U, V>(p: string, obj: U) => V;


export function range(start: number, end: number): number[];
export function range(start: number): (end: number) => number[];


export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;


export function reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
export function reject<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
export function reject<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function reject<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;


export function repeat<T>(a: T, n: number): T[];
export function repeat<T>(a: T): (n: number) => T[];


export function replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
export function replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
export function replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;


export function reverse<T>(list: ReadonlyArray<T>): T[];
export function reverse(str: string): string;


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


export function sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (arr: ReadonlyArray<T>) => T[];


export function sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(arr: ReadonlyArray<T>) => T[];


export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];


export function splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
export function splitEvery(a: number, list: string): string[];
export function splitEvery(a: number): {
  (list: string): string[];
  <T>(list: ReadonlyArray<T>): T[][];
};


export function startsWith(a: string, list: string): boolean;
export function startsWith(a: string): (list: string) => boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;


export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;


export function sum(list: ReadonlyArray<number>): number;


export function symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];


export function T(): boolean;


export function tail<T>(listOrString: ReadonlyArray<T>): T[];
export function tail(listOrString: string): string;


export function take<T>(num: number, listOrString: ReadonlyArray<T>): T[];
export function take(num: number, listOrString: string): string;
export function take<T>(num: number): {
  (listOrString: string): string;
  (listOrString: ReadonlyArray<T>): T[];
};


export function takeLast<T>(num: number, listOrString: ReadonlyArray<T>): T[];
export function takeLast(num: number, listOrString: string): string;
export function takeLast(num: number): {
  <T>(listOrString: ReadonlyArray<T>): T[];
  (listOrString: string): string;
};


export function tap<T>(fn: (a: T) => any, value: T): T;
export function tap<T>(fn: (a: T) => any): (value: T) => T;


export function test(regExpression: RegExp): (str: string) => boolean;
export function test(regExpression: RegExp, str: string): boolean;


export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];


export function transpose<T>(list: T[][]): T[][];


export function toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];


export function toLower(str: string): string;


export function toString<T>(val: T): string;


export function toUpper(str: string): string;


export function trim(str: string): string;


export function type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";


export function uniq<T>(arr: ReadonlyArray<T>): T[];


export function uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[];
export function uniqWith<T, U>(fn: (x: T, y: T) => boolean): (arr: ReadonlyArray<T>) => T[];


export function update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
export function update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];


export function values<T extends object, K extends keyof T>(obj: T): T[K][];


export function without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];


export function xor(a: boolean, b: boolean): boolean;
export function xor(a: boolean): (b: boolean) => boolean;


export function zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): KeyValuePair<K, V>[];
export function zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => KeyValuePair<K, V>[];


export function zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
export function zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
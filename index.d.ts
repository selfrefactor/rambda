import { FunctionToolbelt, ObjectToolbelt, ListToolbelt } from "./_ts-toolbelt/src/index";

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

type Merge<O1 extends object, O2 extends object, Depth extends 'flat' | 'deep'> = ObjectToolbelt.MergeUp<ListToolbelt.ObjectOf<O1>, ListToolbelt.ObjectOf<O2>, Depth, 1>;

// RAMBDAX INTERFACES
// ============================================
type Func<T> = (input: any) => T;
type VoidInputFunc<T> = () => T;
type Predicatex<T> = (input: T, index: number) => boolean;
type Fn<In, Out> = (x: In) => Out;
type FnTwo<In, Out> = (x: In, y: In) => Out;
type MapFn<In, Out> = (x: In, index: number) => Out;

type FilterFunction<T> = (x: T, prop?: string, inputObj?: object) => boolean;
type PartitionPredicate<T> = (x: T, prop?: string) => boolean;
type MapFunction<In, Out> = (x: In, prop?: string, inputObj?: object) => Out;
type SortObjectPredicate<T> = (aProp: string, bProp: string, aValue: T, bValue: T) => number;

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

type isfn<T> = (x: any, y: any) => T;

interface Switchem<T> {
  is: isfn<Switchem<T>>;
  default: IdentityFunction<T>;
}

interface Reduced {
  [index: number]: any;
  [index: string]: any;
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


type ProduceRules<Input> = {
  [key: string]: ProduceFunctionRule<Input> | ProduceAsyncRule<Input>
}
type ProduceFunctionRule<Input> = (input: Input) => any
type ProduceAsyncRule<Input> = (input: Input) => Promise<any>
type Async<T> = (x: any) => Promise<T>;
type AsyncIterable<T, K> = (x: T) => Promise<K>;
type AsyncIterableIndexed<T, K> = (x: T, i: number) => Promise<K>;
type AsyncPredicate<T> = (x: T) => Promise<boolean>;
type AsyncPredicateIndexed<T> = (x: T, i: number) => Promise<boolean>;
type AsyncWithProp<T> = (x: any, prop?: string) => Promise<T>;

export const DELAY: 'RAMBDAX_DELAY'


/**
 * It adds `a` and `b`.
 */
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

/**
 * It replaces `index` in array `list` with the result of `replaceFn(list[i])`.
 */
export function adjust<T>(index: number, replaceFn: (x: T) => T, list: ReadonlyArray<T>): T[];
export function adjust<T>(index: number, replaceFn: (x: T) => T): (list: ReadonlyArray<T>) => T[];

/**
 * It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.
 */
export function all<T>(predicate: (x: T, index: number) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(predicate: (x: T, index: number) => boolean): (list: ReadonlyArray<T>) => boolean;
export function all<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/**
 * It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.
 */
export function allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;

/**
 * It returns function that always returns `x`.
 */
export function always<T>(x: T): () => T;

/**
 * Returns `true` if both arguments are `true`. Otherwise, it returns `false`.
 */
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

/**
 * It returns `true`, if at least one member of `list` returns true, when passed to `predicate` function.
 */
export function any<T>(predicate: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(predicate: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
export function any<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/**
 * It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.
 */
export function anyPass<T>(predicates: ReadonlyArray<SafePred<T>>): SafePred<T>;

/**
 * It adds element `x` at the end of `listOrString`.
 */
export function append<T>(x: T, listOrString: ReadonlyArray<T>): T[];
export function append<T>(x: T): <T>(listOrString: ReadonlyArray<T>) => T[];

/**
 * It returns a curried function with the same arity as the longest function in the spec object.
 * Arguments will be applied to the spec methods recursively.
 */
export function applySpec<Spec extends Record<string, (...args: readonly any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
export function applySpec<T>(spec: any): (...args: readonly any[]) => T;

/**
 * It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.
 */
export function assoc<T, U, K extends string>(prop: K, newValue: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, newValue: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(newValue: T, obj: U) => Record<K, T> & U;

/**
 * It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.
 */
export function assocPath<T, U>(path: Path, newValue: T, obj: U): U;
export function assocPath<T, U>(path: Path, newValue: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): FunctionToolbelt.Curry<(newValue: T, obj: U) => U>;

/**
 * It returns a function with `input` argument.
 * 
 * This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.
 */
export function both(pred1: Pred, pred2: Pred): Pred;
export function both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
export function both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
export function both(pred1: Pred): (pred2: Pred) => Pred;

/**
 * The method is also known as `flatMap`.
 */
export function chain<T, U>(fn: (n: T) => readonly U[], list: readonly T[]): U[];
export function chain<T, U>(fn: (n: T) => readonly U[]): (list: readonly T[]) => U[];
export function chain<X0, X1, R>(fn: (x0: X0, x1: X1) => R, fn1: (x1: X1) => X0): (x1: X1) => R;

/**
 * Restrict a number `input` to be withing `min` and `max` limits.
 * 
 * If `input` is bigger than `max`, then the result is `max`.
 * 
 * If `input` is smaller than `min`, then the result is `min`.
 */
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number): (input: number) => number;

/**
 * It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
 */
export function clone<T>(input: T): T;
export function clone<T>(input: ReadonlyArray<T>): T[];

/**
 * It returns `inverted` version of `origin` function that accept `input` as argument.
 * 
 * The return value of `inverted` is the negative boolean value of `origin(input)`.
 */
export function complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

/**
 * It performs right-to-left function composition.
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

/**
 * It returns a new string or array, which is the result of merging `x` and `y`.
 */
export function concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
export function concat(x: string, y: string): string;
export function concat(x: string): (y: string) => string;

/**
 * It takes list with `conditions` and returns a new function `fn` that expects `input` as argument.
 * 
 * This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter).
 * 
 * The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.
 * 
 * If no winner is found, then `fn` returns `undefined`.
 */
export function cond(conditions: [Pred, (...a: readonly any[]) => any][]): (...a: readonly any[]) => any;
export function cond<A, B>(conditions: [SafePred<A>, (...a: readonly A[]) => B][]): (...a: readonly A[]) => B;

export function converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;

/**
 * It expects a function as input and returns its curried version.
 */
export function curry(fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/**
 * It returns a curried equivalent of the provided function, with the specified arity.
 */
export function curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/**
 * It decrements a number.
 */
export function dec(x: number): number;

/**
 * It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.
 * 
 * Else, it returns the first truthy `inputArguments` instance(from left to right).
 */
export function defaultTo<T>(defaultValue: T): (...inputArguments: (T | null | undefined)[]) => T;
export function defaultTo<T>(defaultValue: T, ...inputArguments: (T | null | undefined)[]): T;
export function defaultTo<T, U>(defaultValue: T | U, ...inputArguments: (T | U | null | undefined)[]): T | U;

/**
 * It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.
 */
export function difference<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
export function difference<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

/**
 * It returns a new object that does not contain property `prop`.
 */
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc<T>(prop: string): (obj: any) => T;

export function divide(x: number, y: number): number;
export function divide(x: number): (y: number) => number;

/**
 * It returns `listOrString` with `howMany` items dropped from its beginning.
 */
export function drop<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
export function drop(howMany: number, listOrString: string): string;
export function drop<T>(howMany: number): {
  <T>(listOrString: readonly T[]): T[];
  (listOrString: string): string;
};

/**
 * It returns `listOrString` with `howMany` items dropped from its end.
 */
export function dropLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
export function dropLast(howMany: number, listOrString: string): string;
export function dropLast<T>(howMany: number): {
  <T>(listOrString: readonly T[]): T[];
  (listOrString: string): string;
};

/**
 * It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.
 * 
 * This `predicate` function will return `true`, if any of the two input predicates return `true`.
 */
export function either(firstPredicate: Pred, secondPredicate: Pred): Pred;
export function either<T>(firstPredicate: Predicate<T>, secondPredicate: Predicate<T>): Predicate<T>;
export function either<T>(firstPredicate: Predicate<T>): (secondPredicate: Predicate<T>) => Predicate<T>;
export function either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;

/**
 * Curried version of `String.prototype.endsWith`
 */
export function endsWith(target: string, str: string): boolean;
export function endsWith(target: string): (str: string) => boolean;

/**
 * It deeply compares `x` and `y` and returns `true` if they are equal.
 */
export function equals<T>(x: T, y: T): boolean;
export function equals<T>(x: T): (y: T) => boolean;

export function F(): boolean;

/**
 * It filters list or object `input` with `predicate`.
 */
export function filter<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
export function filter<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
export function filter<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

/**
 * It returns the first element of `list` that satisfy the `predicate`.
 * 
 * If there is no such element, it returns `undefined`.
 */
export function find<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): T | undefined;
export function find<T>(predicate: (x: T, index: number) => boolean, list: ReadonlyArray<T>): T | undefined;
export function find<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;
export function find<T>(predicate: (x: T, index: number) => boolean): (list: ReadonlyArray<T>) => T | undefined;

/**
 * It returns the index of the first element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findIndex<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): number;
export function findIndex<T>(predicate: (x: T, index: number) => boolean, list: ReadonlyArray<T>): number;
export function findIndex<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => number;
export function findIndex<T>(predicate: (x: T, index: number) => boolean): (list: ReadonlyArray<T>) => number;

/**
 * It returns the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `undefined` is returned.
 */
export function findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (x: T, index: number) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;
export function findLast<T>(fn: (x: T, index: number) => boolean): (list: T[]) => T | undefined;

/**
 * It returns the index of the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
export function findLastIndex<T>(predicate: (x: T, index: number) => boolean, list: T[]): number;
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
export function findLastIndex<T>(predicate: (x: T, index: number) => boolean): (list: T[]) => number;

/**
 * It deeply flattens an array.
 */
export function flatten<T>(list: ReadonlyArray<any>): T[];

/**
 * It returns function which calls `fn` with exchanged first and second argument.
 */
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
export function flip<F extends (...args: any) => any, P extends FunctionToolbelt.Parameters<F>>(fn: F): FunctionToolbelt.Curry<(...args: ListToolbelt.Merge<[P[1], P[0]], P>) => FunctionToolbelt.Return<F>>;

/**
 * It applies `iterable` function over all members of `list` and returns `list`.
 */
export function forEach<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<T>;
export function forEach<T, U>(fn: MapFunctionArray<T, U>, list: T[]): T[];
export function forEach<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => T[];
export function forEach<T, U, S>(fn: MapFunctionObject<T, U>): (list: Dictionary<T>) => Dictionary<T>;
export function forEach<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
export function forEach<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];

/**
 * It transforms a `listOfPairs` to an object.
 */
export function fromPairs<V>(listOfPairs: KeyValuePair<string, V>[]): { [index: string]: V };
export function fromPairs<V>(listOfPairs: KeyValuePair<number, V>[]): { [index: number]: V };

/**
 * It splits `list` according to a provided `groupFn` function and returns an object.
 */
export function groupBy<T>(groupFn: (x: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
export function groupBy<T>(groupFn: (x: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

/**
 * It returns separated version of `list`, where separation is done with equality `compareFn` function.
 */
export function groupWith<T>(compareFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
export function groupWith<T>(compareFn: (x: T, y: T) => boolean, list: string): string[];

/**
 * It returns `true` if `obj` has property `prop`.
 */
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;

/**
 * It will return true, if `input` object has truthy `path`(calculated with `R.path`).
 */
export function hasPath<T>(
  path: string | string[],
  input: object
): boolean;
export function hasPath<T>(
  path: string | string[]
): (input: object) => boolean;

/**
 * It returns the first element of `listOrString`.
 */
export function head<T>(listOrString: T[]): T | undefined;
export function head(listOrString: string): string;

/**
 * It returns `true` if its arguments `a` and `b` are identical.
 * 
 * Otherwise, it returns `false`.
 */
export function identical<T>(x: T, y: T): boolean;
export function identical<T>(x: T): (y: T) => boolean;

/**
 * It just passes back the supplied `input` argument.
 */
export function identity<T>(input: T): T;

/**
 * It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`.
 * 
 * When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.
 */
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

/**
 * It increments a number.
 */
export function inc(x: number): number;

/**
 * If `input` is string, then this method work as native `String.includes`.
 * 
 * If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.
 */
export function includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
export function includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
export function includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
export function includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;

/**
 * It generates object with properties provided by `condition` and values provided by `list` array.
 * 
 * If `condition` is a function, then all list members are passed through it.
 * 
 * If `condition` is a string, then all list members are passed through `R.path(condition)`.
 */
export function indexBy<T>(condition: (x: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: string, list: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: (x: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
export function indexBy<T>(condition: string): (list: ReadonlyArray<T>) => { [key: string]: T };

/**
 * It returns the index of the first element of `list` equals to `valueToFind`.
 * 
 * If there is no such element, it returns `-1`.
 */
export function indexOf<T>(valueToFind: T, list: ReadonlyArray<T>): number;
export function indexOf<T>(valueToFind: T): (list: ReadonlyArray<T>) => number;

/**
 * It returns all but the last element of `listOrString`.
 */
export function init<T>(listOrString: ReadonlyArray<T>): T[];
export function init(listOrString: string): string;

/**
 * It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.
 */
export function intersection<T>(listA: ReadonlyArray<T>, listB: ReadonlyArray<T>): T[];
export function intersection<T>(listA: ReadonlyArray<T>): (listB: ReadonlyArray<T>) => T[];

/**
 * It adds a `separator` between members of `list`.
 */
export function intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
export function intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

/**
 * It returns `true` if `x` is instance of `targetPrototype`.
 */
export function is(targetPrototype: any, x: any): boolean;
export function is(targetPrototype: any): (x: any) => boolean;

/**
 * It returns `true` if `x` is `empty`.
 */
export function isEmpty<T>(x: T): boolean;

/**
 * It returns `true` if `x` is either `null` or `undefined`.
 */
export function isNil(x: any): x is null | undefined;

/**
 * It returns a string of all `list` instances joined with a `glue`.
 */
export function join<T>(glue: string, list: ReadonlyArray<T>): string;
export function join<T>(glue: string): (list: ReadonlyArray<T>) => string;

/**
 * It applies `Object.keys` over `x` and returns its keys.
 */
export function keys<T extends object>(x: T): (keyof T)[];
export function keys<T>(x: T): string[];

/**
 * It returns the last element of `input`, as the `input` can be either a string or an array.
 */
export function last(str: string): string;
export function last(emptyList: readonly []): undefined;
export function last<T extends any>(list: readonly T[]): T | undefined;

/**
 * It returns the last index of `target` in `list` array.
 * 
 * `R.equals` is used to determine equality between `target` and members of `list`.
 * 
 * If there is no such index, then `-1` is returned.
 */
export function lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;
export function lastIndexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

/**
 * It returns the `length` property of `listOrString`.
 */
export function length<T>(listOrString: ReadonlyArray<T>): number;

/**
 * It returns a `lens` for the given `getter` and `setter` functions.
 * 
 * The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus.
 * 
 * The setter should not mutate the data structure.
 */
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

/**
 * It returns a lens that focuses on specified `index`.
 */
export function lensIndex(index: number): Lens;

/**
 * It returns a lens that focuses on specified `path`.
 */
export function lensPath(path: RamdaPath): Lens;

/**
 * It returns a lens that focuses on specified property `prop`.
 */
export function lensProp(prop: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};

/**
 * It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.
 */
export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];

/**
 * It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.
 */
export function set<T, U>(lens: Lens, replacer: U, obj: T): T;
export function set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(replacer: U, obj: T) => T;

/**
 * It returns the value of `lens` focus over `target` object.
 */
export function view<T, U>(lens: Lens): (target: T) => U;
export function view<T, U>(lens: Lens, target: T): U;

/**
 * It returns the result of looping through `list` with `fn`.
 * 
 * It works with both array and object.
 */
export function map<T, U>(fn: MapFunctionObject<T, U>, list: Dictionary<T>): Dictionary<U>;
export function map<T, U>(fn: MapFunctionArray<T, U>, list: T[]): U[];
export function map<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => U[];
export function map<T, U, S>(fn: MapFunctionObject<T, U>): (list: Dictionary<T>) => Dictionary<U>;
export function map<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
export function map<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];

/**
 * Curried version of `String.prototype.match` which returns empty array, when there is no match.
 */
export function match(regExpression: RegExp, str: string): string[];
export function match(regExpression: RegExp): (str: string) => string[];

/**
 * `R.mathMod` behaves like the modulo operator should mathematically, unlike the % operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.
 */
export function mathMod(x: number, y: number): number;
export function mathMod(x: number): (y: number) => number;

/**
 * It returns the greater value between `x` and `y`.
 */
export function max<T extends Ord>(x: T, y: T): T;
export function max<T extends Ord>(x: T): (y: T) => T;

/**
 * It returns the greater value between `x` and `y` according to `compareFn` function.
 */
export function maxBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
export function maxBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
export function maxBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;

/**
 * It returns the mean value of `list` input.
 */
export function mean(list: ReadonlyArray<number>): number;

/**
 * It returns the median value of `list` input.
 */
export function median(list: ReadonlyArray<number>): number;

/**
 * It creates a copy of `target` object with overidden `newProps` properties.
 */
export function merge<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>;
export function merge<O1 extends object>(target: O1): <O2 extends object>(newProps: O2) => Merge<O2, O1, 'flat'>;

/**
 * It merges all objects of `list` array sequentially and returns the result.
 */
export function mergeAll<T>(list: object[]): T;
export function mergeAll(list: object[]): object;

/**
 * Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:
 * 
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 */
export function mergeDeepRight<O1 extends object, O2 extends object>(x: O1, y: O2): Merge<O2, O1, 'deep'>;
export function mergeDeepRight<O1 extends object>(x: O1): <O2 extends object>(y: O2) => Merge<O2, O1, 'deep'>;

/**
 * Same as `R.merge`, but in opposite direction.
 */
export function mergeLeft<O1 extends object, O2 extends object>(target: O1, newProps: O2): Merge<O2, O1, 'flat'>;
export function mergeLeft<O1 extends object>(target: O1): <O2 extends object>(newProps: O2) => Merge<O2, O1, 'flat'>;

/**
 * It returns the lesser value between `x` and `y`.
 */
export function min<T extends Ord>(x: T, y: T): T;
export function min<T extends Ord>(x: T): (y: T) => T;

/**
 * It returns the lesser value between `x` and `y` according to `compareFn` function.
 */
export function minBy<T>(compareFn: (input: T) => Ord, x: T, y: T): T;
export function minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;
export function minBy<T>(compareFn: (input: T) => Ord): FunctionToolbelt.Curry<(x: T, y: T) => T>;

/**
 * Curried version of `x%y`.
 */
export function modulo(x: number, y: number): number;
export function modulo(x: number): (y: number) => number;

/**
 * Curried version of `x*y`.
 */
export function multiply(x: number, y: number): number;
export function multiply(x: number): (y: number) => number;

export function negate(x: number): number;

/**
 * It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.
 */
export function none<T>(predicate: (x: T, index: number) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(predicate: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(predicate: (x: T, index: number) => boolean): (list: ReadonlyArray<T>) => boolean;
export function none<T>(predicate: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

/**
 * It returns a boolean negated version of `input`.
 */
export function not(input: any): boolean;

/**
 * Curried version of `list[index]`.
 */
export function nth<T>(index: number, list: ReadonlyArray<T>): T | undefined;	
export function nth(index: number): <T>(list: ReadonlyArray<T>) => T | undefined;

/**
 * It returns a partial copy of an `obj` without `propsToOmit` properties.
 */
export function omit<T, K extends string>(propsToOmit: readonly K[], obj: T): Omit<T, K>;
export function omit<K extends string>(propsToOmit: readonly K[]): <T>(obj: T) => Omit<T, K>;
export function omit<T, U>(propsToOmit: string, obj: T): U;
export function omit<T, U>(propsToOmit: string): (obj: T) => U;
export function omit<T>(propsToOmit: string, obj: object): T;
export function omit<T>(propsToOmit: string): (obj: object) => T;

/**
 * It returns a partial copy of an `obj` without `propsToOmit` properties.
 */
export function of<T>(x: T): T[];

/**
 * It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.
 * 
 * `R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
 * The name comes from the fact that you partially inject the inputs.
 */
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1, V2]): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1]): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0]): (x1: V1, x2: V2, x3: V3) => T;
export function partial<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;

/**
 * It will return array of two objects/arrays according to `predicate` function. The first member holds all instanses of `input` that pass the `predicate` function, while the second member - those who doesn't.
 * 
 * `input` can be either an object or an array unlike `Ramda` where only array is a valid input.
 */
export function partition<T>(
  predicate: Predicatex<T>,
  input: T[]
): [T[], T[]];
export function partition<T>(
  predicate: Predicatex<T>
): (input: T[]) => [T[], T[]];
export function partition<T>(
  predicate: (x: T, prop?: string) => boolean,
  input: { [key: string]: T}
): [{ [key: string]: T}, { [key: string]: T}];
export function partition<T>(
  predicate: (x: T, prop?: string) => boolean
): (input: { [key: string]: T}) => [{ [key: string]: T}, { [key: string]: T}];

/**
 * If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.
 * 
 * It will return `undefined`, if such path is not found.
 */
export function path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
export function path<T>(pathToSearch: string | string[], obj: any): T | undefined;
export function path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
export function path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;

/**
 * It returns `true` if `pathToSearch` of `input` object is equal to `target` value.
 * 
 * `pathToSearch` is passed to `R.path`, which means that it can be either a string or an array. Also equality between `target` and the found value is determined by `R.equals`.
 */
export function pathEq(pathToSearch: Path, target: any, input: any): boolean;
export function pathEq(pathToSearch: Path, target: any): (input: any) => boolean;
export function pathEq(pathToSearch: Path): FunctionToolbelt.Curry<(a: any, b: any) => boolean>;

/**
 * It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.
 * 
 * Because it calls `R.path`, then `singlePath` can be either string or a list.
 */
export function paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
export function paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
export function paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
export function paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];

/**
 * It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.
 */
export function pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): FunctionToolbelt.Curry<(a: Path, b: any) => T>;

/**
 * It returns a partial copy of an `input` containing only `propsToPick` properties.
 * 
 * `input` can be either an object or an array.
 * 
 * String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.
 */
export function pick<T, K extends string | number | symbol>(propsToPick: readonly K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<K extends string | number | symbol>(propsToPick: readonly K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<T, U>(propsToPick: string, input: T): U;
export function pick<T, U>(propsToPick: string): (input: T) => U;
export function pick<T>(propsToPick: string, input: object): T;
export function pick<T>(propsToPick: string): (input: object) => T;

/**
 * Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.
 */
export function pickAll<T, U>(propsToPick: readonly string[], input: T): U;
export function pickAll<T, U>(propsToPick: readonly string[]): (input: T) => U;
export function pickAll<T, U>(propsToPick: string, input: T): U;
export function pickAll<T, U>(propsToPick: string): (input: T) => U;

/**
 * It performs left-to-right function composition.
 */
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

/**
 * It returns list of the values of `property` taken from the all objects inside `list`.
 */
export function pluck<T>(property: number, list: ReadonlyArray<T>): T;
export function pluck<K extends keyof T, T>(property: K, list: ReadonlyArray<T>): T[K][];
export function pluck(property: number): <T>(list: ReadonlyArray<T>) => T;
export function pluck<P extends string>(property: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];

/**
 * It adds element `x` at the beginning of `listOrString`.
 */
export function prepend<T>(x: T, listOrString: ReadonlyArray<T>): T[];
export function prepend<T>(x: T): (listOrString: ReadonlyArray<T>) => T[];

export function product(list: ReadonlyArray<number>): number;

/**
 * It returns the value of property `propToFind` in `obj`.
 * 
 * If there is no such property, it returns `undefined`.
 */
export function prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;

/**
 * It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.
 */
export function propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K], obj: T): boolean;
export function propEq<T, K extends keyof T>(propToFind: K, valueToMatch: T[K]): (obj: T) => boolean;
export function propEq<T, K extends keyof T>(propToFind: K): {
   (valueToMatch: T[K], obj: T): boolean;
   (valueToMatch: T[K]): (obj: T) => boolean;
};

/**
 * It returns `true` if `property` of `obj` is from `target` type.
 */
export function propIs(type: any, name: string, obj: any): boolean;
export function propIs(type: any, name: string): (obj: any) => boolean;
export function propIs(type: any): {
    (name: string, obj: any): boolean;
    (name: string): (obj: any) => boolean;
};

/**
 * It returns either `defaultValue` or the value of `property` in `obj`.
 */
export function propOr<T>(defaultValue: T, property: string, obj: { [key: string]: T}): T;
export function propOr<T>(defaultValue: T, property: string): (obj: { [key: string]: T}) => T;
export function propOr<T>(defaultValue: T): FunctionToolbelt.Curry<(property: string, obj: { [key: string]: T}) => T>;

/**
 * It returns list of numbers between `start`(inclusive) to `end`(exclusive) numbers.
 */
export function range(start: number, end: number): number[];
export function range(start: number): (end: number) => number[];

export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: ReadonlyArray<T>) => TResult;
export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: ReadonlyArray<T>) => TResult;

/**
 * It has the opposite effect of `R.filter`.
 * 
 * It will return those members of `list` that return `false` when applied to `predicate` function.
 */
export function reject<T>(predicate: FilterFunctionArray<T>): (x: T[]) => T[];
export function reject<T>(predicate: FilterFunctionArray<T>, x: T[]): T[];
export function reject<T, U>(predicate: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function reject<T>(predicate: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

/**
 * It returns a list of `x` input repeated `timesToRepeat` input.
 */
export function repeat<T>(x: T): (timesToRepeat: number) => T[];
export function repeat<T>(x: T, timesToRepeat: number): T[];

/**
 * It replaces `strOrRegex` found in `str` with `replacer`.
 */
export function replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
export function replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
export function replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;

/**
 * It returns a reversed copy of `listOrString` input.
 */
export function reverse<T>(listOrString: ReadonlyArray<T>): T[];
export function reverse(listOrString: string): string;

/**
 * It returns `listOrString` between `from` and `to` indexes.
 */
export function slice(from: number, to: number, list: string): string;
export function slice<T>(from: number, to: number, list: T[]): T[];
export function slice(from: number, to: number): {
  (list: string): string;
  <T>(list: T[]): T[];
};
export function slice(from: number): {
  (to: number, list: string): string;
  <T>(to: number, list: T[]): T[];
};

/**
 * It returns copy of `list` sorted by `sortFn` function.
 */
export function sort<T>(sortFn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

/**
 * It returns copy of `list` sorted by `sortFn` function.
 */
export function sortBy<T>(sortFn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];

/**
 * Curried version of `String.prototype.split`
 */
export function split(separator: string | RegExp): (str: string) => string[];
export function split(separator: string | RegExp, str: string): string[];

/**
 * It splits `listOrString` into slices of `sliceLength`.
 */
export function splitEvery<T>(sliceLength: number, listOrString: ReadonlyArray<T>): T[][];
export function splitEvery(sliceLength: number, listOrString: string): string[];
export function splitEvery(sliceLength: number): {
  (listOrString: string): string[];
  <T>(listOrString: ReadonlyArray<T>): T[][];
};

/**
 * Curried version of `String.prototype.startsWith`
 */
export function startsWith(target: string, str: string): boolean;
export function startsWith(target: string): (str: string) => boolean;

/**
 * Curried version of `x - y`
 */
export function subtract(x: number, y: number): number;
export function subtract(x: number): (y: number) => number;

export function sum(list: ReadonlyArray<number>): number;

/**
 * It returns a merged list of `x` and `y` with all equal elements removed.
 */
export function symmetricDifference<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function symmetricDifference<T>(x: ReadonlyArray<T>): <T>(y: ReadonlyArray<T>) => T[];

export function T(): boolean;

/**
 * It returns all but the first element of `listOrString`.
 */
export function tail<T>(listOrString: ReadonlyArray<T>): T[];
export function tail(listOrString: string): string;

/**
 * It returns the first `howMany` elements of `listOrString`.
 */
export function take<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
export function take(howMany: number, listOrString: string): string;
export function take<T>(howMany: number): {
  <T>(listOrString: readonly T[]): T[];
  (listOrString: string): string;
};

/**
 * It returns the last `howMany` elements of `listOrString`.
 */
export function takeLast<T>(howMany: number, listOrString: ReadonlyArray<T>): T[];
export function takeLast(howMany: number, listOrString: string): string;
export function takeLast<T>(howMany: number): {
  <T>(listOrString: readonly T[]): T[];
  (listOrString: string): string;
};

/**
 * It applies function `fn` to input `x` and returns `x`.
 * 
 * One use case is debuging in the middle of `R.compose`.
 */
export function tap<T>(fn: (a: T) => any, x: T): T;
export function tap<T>(fn: (a: T) => any): (x: T) => T;

/**
 * It determines whether `str` matches `regExpression`.
 */
export function test(regExpression: RegExp): (str: string) => boolean;
export function test(regExpression: RegExp, str: string): boolean;

/**
 * It returns the result of applying function `fn` over members of range array.
 * 
 * The range array includes numbers between `0` and `howMany`(exclusive).
 */
export function times<T>(fn: (i: number) => T, howMany: number): T[];
export function times<T>(fn: (i: number) => T): (howMany: number) => T[];

export function toLower(str: string): string;

export function toUpper(str: string): string;

/**
 * It transforms an object to a list.
 */
export function toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): [string, S][];

export function toString<T>(x: T): string;

export function transpose<T>(list: T[][]): T[][];

export function trim(str: string): string;

/**
 * It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).
 * 
 * Please check the tests of `R.tryCatch` to fully understand how this method works.
 */
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

/**
 * It accepts any input and it returns its type.
 */
export function type(x: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

/**
 * It returns a new array containing only one copy of each element of `list`.
 */
export function uniq<T>(list: ReadonlyArray<T>): T[];

/**
 * It returns a new array containing only one copy of each element in `list` according to boolean returning function `uniqFn`.
 */
export function uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
export function uniqWith<T, U>(uniqFn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];

/**
 * The method returns function that will be called with argument `input`.
 * 
 * If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`.
 * 
 * In the other case, the final output will be the `input` itself.
 */
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, obj: T): U;
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (obj: T) => U;

/**
 * It returns a copy of `list` with updated element at `index` with `newValue`.
 */
export function update<T>(index: number, newValue: T, list: ReadonlyArray<T>): T[];
export function update<T>(index: number, newValue: T): (list: ReadonlyArray<T>) => T[];

/**
 * With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.
 */
export function values<T extends object, K extends keyof T>(obj: T): T[K][];

export function when<T>(
  rule: Func<boolean>, resultOrFunction: T | IdentityFunction<T>
): IdentityFunction<T>;
export function when<T>(
  rule: Func<boolean>
): (resultOrFunction: T | IdentityFunction<T>) => IdentityFunction<T>;

/**
 * It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.
 */
export function where<T, U>(conditions: T, input: U): boolean;
export function where<T>(conditions: T): <U>(input: U) => boolean;
export function where<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
export function where<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;

/**
 * It will return `true` if all of `input` object fully or partially include `rule` object.
 */
export function whereEq<T, U>(condition: T, input: U): boolean;
export function whereEq<T>(condition: T): <U>(input: U) => boolean;

/**
 * It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.
 */
export function without<T>(matchAgainst: ReadonlyArray<T>, source: ReadonlyArray<T>): T[];
export function without<T>(matchAgainst: ReadonlyArray<T>): (source: ReadonlyArray<T>) => T[];

export function xor(x: boolean, y: boolean): boolean;
export function xor(y: boolean): (y: boolean) => boolean;

/**
 * It will return a new array containing tuples of equally positions items from both `x` and `y` lists.
 * 
 * The returned list will be truncated to match the length of the shortest supplied list.
 */
export function zip<K, V>(x: ReadonlyArray<K>, y: ReadonlyArray<V>): KeyValuePair<K, V>[];
export function zip<K>(x: ReadonlyArray<K>): <V>(y: ReadonlyArray<V>) => KeyValuePair<K, V>[];

/**
 * It will return a new object with keys of `keys` array and values of `values` array.
 */
export function zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
export function zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };

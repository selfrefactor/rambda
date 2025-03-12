export type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise" | "Symbol" | "Set" | "Error" | "Map" | "WeakMap" | "Generator" | "GeneratorFunction" | "BigInt" | "ArrayBuffer" | "Date"

export type EqualTypes<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

export type NonEmptyArray<T> = readonly [T, ...readonly T[]];
export type ReadonlyNonEmptyArray<T> = readonly [T, ...readonly T[]];
export type IterableContainer<T = unknown> = ReadonlyArray<T> | readonly [];



export type Mapped<T extends IterableContainer, K> = { readonly
  -readonly [P in keyof T]: K;
};

export type ElementOf<Type extends readonly any[]> = Type[number];
export type MergeTypes<T> = { readonly[KeyType in keyof T]: T[KeyType]} & {};
export type Simplify<T> = T extends infer O ? { readonly [K in keyof O]: O[K] } : never;

export type EntryForKey<T, Key extends keyof T> = Key extends number | string
  ? readonly [key: `${Key}`, value: Required<T>[Key]]
  : never;

export type Entry<T> = MergeTypes<{ readonly [P in keyof T]-?: EntryForKey<T, P> }[keyof T]>;

export type Ord = number | string | boolean | Date;
export type Ordering = -1 | 0 | 1;
type Path = ReadonlyArray<string> | string;
type Prop<T, P extends keyof never> = P extends keyof Exclude<T, undefined>
    ? T extends undefined ? undefined : T[Extract<P, keyof T>]
    : undefined;

interface KeyValuePair<K, V> extends Array<K | V> {
  readonly 0: K;
  readonly 1: V;
}
export type Functor<A> = { readonly map: <B>(fn: (a: A) => B) => Functor<B>; readonly [key: string]: any };
export type DeepModify<Keys extends readonly PropertyKey[], U, T> =
  Keys extends readonly [infer K, ...infer Rest]
    ? K extends keyof U
      ? Rest extends readonly []
        ? Omit<U, K> & Record<K, T>
        : Rest extends readonly PropertyKey[]
          ? Omit<U, K> & Record<K, DeepModify<Rest, U[K], T>>
          : never
      : never
    : never;


export type Lens<S, A> = (functorFactory: (a: A) => Functor<A>) => (s: S) => Functor<S>;
type OptionalToRequired<T> = { readonly
	[P in keyof T]-?: T[P]
}

export type PickStringToPickPath<T> = T extends `${infer Head},${infer Tail}` 		? readonly [Head, ...PickStringToPickPath<Tail>]
	: T extends `${infer Head}` ? readonly [Head]
	: readonly [];


export type Partial<T> = { readonly [P in keyof T]?: T[P]};

type Evolvable<E extends Evolver> = { readonly[P in keyof E]?: Evolved<E[P]>};

type Evolver<T extends Evolvable<any> = any> = { readonly   [key in keyof Partial<T>]: ((value: T[key]) => T[key]) | (T[key] extends Evolvable<any> ? Evolver<T[key]> : never);
};

type Evolve<O extends Evolvable<E>, E extends Evolver> = { readonly   [P in keyof O]: P extends keyof E
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
type EmptyObject = {readonly [emptyObjectSymbol]?: never};
type EnumerableStringKeyOf<T> =
Required<T> extends Record<infer K, unknown>
	? `${Exclude<K, symbol>}`
	: never;
type EnumerableStringKeyedValueOf<T> = ValuesOf<{ readonly
	[K in keyof T]-?: K extends symbol ? never : T[K];
}>;
type ValuesOf<T> =
	T extends EmptyObject
		? T[keyof T]
		: T extends Record<PropertyKey, infer V>
			? V
			: never;
type MappedValues<T extends object, Value> = MergeTypes<{ readonly
	-readonly [P in keyof T as `${P extends number | string ? P : never}`]: Value;
}>;

export function T(): boolean;

/**
 * It adds `a` and `b`.
 */
export function add(a: number): (b: number) => number;

/**
 * It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.
 */
export function all<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

/**
 * It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.
 */
export function allPass<F extends (...args: readonly any[]) => boolean>(predicates: readonly F[]): F;

/**
 * It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.
 */
export function any<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

/**
 * It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.
 */
export function anyPass<T, TF1 extends T, TF2 extends T>(
  predicates: readonly [(a: T) => a is TF1, (a: T) => a is TF2],
): (a: T) => a is TF1 | TF2;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: readonly [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T>(
  predicates: readonly [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3],
): (a: T) => a is TF1 | TF2 | TF3;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T>(
  predicates: readonly [(a: T) => a is TF1, (a: T) => a is TF2, (a: T) => a is TF3, (a: T) => a is TF4],
): (a: T) => a is TF1 | TF2 | TF3 | TF4;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T>(
  predicates: readonly [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5;
export function anyPass<T, TF1 extends T, TF2 extends T, TF3 extends T, TF4 extends T, TF5 extends T, TF6 extends T>(
  predicates: readonly [
    (a: T) => a is TF1,
    (a: T) => a is TF2,
    (a: T) => a is TF3,
    (a: T) => a is TF4,
    (a: T) => a is TF5,
    (a: T) => a is TF6
  ],
): (a: T) => a is TF1 | TF2 | TF3 | TF4 | TF5 | TF6;
export function anyPass<F extends (...args: readonly any[]) => boolean>(predicates: readonly F[]): F;

/**
 * It adds element `x` at the end of `iterable`.
 */
export function append<T>(el: T): (list: readonly T[]) => readonly T[];
export function append<T>(el: T): (list: readonly T[]) => readonly T[];

/**
 * It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.
 */
export function checkObjectWithSpec<T>(spec: T): <U>(testObj: U) => boolean;

/**
 * It returns `inverted` version of `origin` function that accept `input` as argument.
 * 
 * The return value of `inverted` is the negative boolean value of `origin(input)`.
 */
export function complement<T extends readonly any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean;

/**
 * It returns a new string or array, which is the result of merging `x` and `y`.
 */
export function concat<T>(x: readonly T[]): (y: readonly T[]) => readonly T[];
export function concat(x: string): (y: string) => string;

/**
 * It counts how many times `predicate` function returns `true`, when supplied with iteration of `list`.
 */
export function count<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

/**
 * It counts elements in a list after each instance of the input list is passed through `transformFn` function.
 */
export function countBy<T>(fn: (a: T) => string | number, list: readonly T[]): { readonly [index: string]: number };

/**
 * It decrements a number.
 */
export function dec(x: number): number;

/**
 * It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.
 * 
 * Else, it returns the first truthy `inputArguments` instance(from left to right).
 */
export function defaultTo<T>(defaultValue: T, input: T | null | undefined): T;
export function defaultTo<T>(defaultValue: T): <U>(input: U | null | undefined) => EqualTypes<U, T> extends true ? T : never

/**
 * It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.
 * 
 * `R.equals` is used to determine equality.
 */
export function difference<T extends unknown>(a: readonly T[]): <U extends unknown>(b: readonly U[]) => EqualTypes<U, T> extends true ? readonly T[] : never;

export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
  list2: readonly T2[],
): readonly T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
): (list1: readonly T1[], list2: readonly T2[]) => readonly T1[];
export function differenceWith<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
): (list2: readonly T2[]) => readonly T1[];

/**
 * It returns `howMany` items dropped from beginning of list or string `input`.
 */
export function drop<T>(howMany: number): (list: readonly T[]) => readonly T[];

/**
 * It returns `howMany` items dropped from  the end of list or string `input`.
 */
export function dropLast<T>(howMany: number): (list: readonly T[]) => readonly T[];

export function dropLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: readonly T[]) => readonly T[];
export function dropLastWhile<T>(predicate: (x: T) => boolean): (list: readonly T[]) => readonly T[];

export function dropRepeatsBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => readonly T[];

export function dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => readonly T[];

export function dropWhile<T>(predicate: (x: T, index: number) => boolean): (list: readonly T[]) => readonly T[];
export function dropWhile<T>(predicate: (x: T) => boolean): (list: readonly T[]) => readonly T[];

export function eqBy<T>(fn: (x: T) => unknown, a: T): (b: T) => boolean;

/**
 * It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.
 */
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

/**
 * It deeply compares `x` and `y` and returns `true` if they are equal.
 */
export function equals<T>(x: T, y: T): boolean;
export function equals<T>(x: T): (y: T) => boolean;

/**
 * It takes object of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.
 */
export function evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;

/**
 * Opposite of `R.includes`
 * 
 * `R.equals` is used to determine equality.
 */
export function excludes<T extends string>(valueToFind: T): (input: string) => boolean;
export function excludes<T>(valueToFind: T): (input: readonly T[]) => boolean;

/**
 * It filters list or object `input` using a `predicate` function.
 */
export function filter<T, S extends T>(
  predicate: (value: T) => value is S,
): (list: readonly T[]) => readonly S[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => readonly NonNullable<T>[];
export function filter<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => readonly NonNullable<T>[];
export function filter<T>(
	predicate: (value: T) => boolean,
): (list: readonly T[]) => readonly T[];

/**
 * It loops over each property of `obj` and returns a new object with only those properties that satisfy the `predicate`.
 */
export function filterObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;

/**
 * It returns the first element of `list` that satisfy the `predicate`.
 * 
 * If there is no such element, it returns `undefined`.
 */
export function find<T>(predicate: (x: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * It returns the index of the first element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

/**
 * It returns the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `undefined` is returned.
 */
export function findLast<T>(fn: (x: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * It returns the index of the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

/**
 * It maps `fn` over `list` and then flatten the result by one-level.
 */
export function flatMap<T, U extends unknown>(transformFn: (x: T extends readonly any[] ? T[number]: never) => U): (listOfLists: readonly T[]) => readonly U[];

/**
 * It deeply flattens an array.
 */
export function flatten<T>(list: readonly any[]): readonly T[];

/**
 * It splits `list` according to a provided `groupFn` function and returns an object.
 */
export function groupBy<T, K extends string = string>(fn: (a: T) => K): (list: readonly T[]) => Partial<Record<K, readonly T[]>>;

/**
 * It returns the first element of list or string `input`. It returns `undefined` if array has length of 0.
 */
export function head<T>(listOrString: T): T extends string ? string : 
	T extends readonly [] ? undefined: 
		T extends readonly [infer F, ...infer R] ? F : 
			T extends readonly [infer F] ? F :
				T extends readonly [infer F] ? F :
					T extends readonly [infer F, ...infer R] ? F : 
						T extends readonly unknown[] ? T[number] : 
							undefined;

/**
 * It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`.
 * 
 * When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.
 */
export function ifElse<T, TFiltered extends T, TOnTrueResult, TOnFalseResult>(
  pred: (a: T) => a is TFiltered,
  onTrue: (a: TFiltered) => TOnTrueResult,
  onFalse: (a: Exclude<T, TFiltered>) => TOnFalseResult,
): (a: T) => TOnTrueResult | TOnFalseResult;
export function ifElse<TArgs extends readonly any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult;

/**
 * If `input` is string, then this method work as native `String.includes`.
 * 
 * If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.
 */
export function includes<T extends string>(valueToFind: T): (input: string) => boolean;
export function includes<T>(valueToFind: T): (input: readonly T[]) => boolean;

/**
 * It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.
 */
export function indexOf<T>(valueToFind: T): (list: readonly T[]) => number;

/**
 * It returns all but the last element of list or string `input`.
 */
export function init<T extends readonly unknown[]>(input: T): T extends readonly [...infer U, any] ? U : readonly [...T];
export function init(input: string): string;

/**
 * It returns a new list by applying a `predicate` function to all elements of `list1` and `list2` and keeping only these elements where `predicate` returns `true`.
 */
export function innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
): (list2: readonly T2[]) => readonly T1[];

/**
 * It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.
 */
export function intersection<T>(listA: readonly T[], listB: readonly T[]): readonly T[];
export function intersection<T>(listA: readonly T[]): (listB: readonly T[]) => readonly T[];

/**
 * It adds a `separator` between members of `list`.
 */
export function intersperse<T>(separator: T): (list: readonly T[]) => readonly T[];

export function isNotEmpty<T>(value: readonly T[]): value is NonEmptyArray<T>;
export function isNotEmpty<T>(value: readonly T[]): value is ReadonlyNonEmptyArray<T>;
export function isNotEmpty(value: any): boolean;

/**
 * It returns a string of all `list` instances joined with a `glue`.
 */
export function join<T>(glue: string, list: readonly T[]): string;
export function join<T>(glue: string): (list: readonly T[]) => string;

/**
 * It returns the last element of `input`, as the `input` can be either a string or an array. It returns `undefined` if array has length of 0.
 */
export function last<T>(listOrString: T): T extends string ? string : 
  T extends readonly [] ? undefined : 
    T extends readonly [...infer R, infer L] ? L : 
      T extends readonly [infer L] ? L :
        T extends readonly [infer L] ? L :
          T extends readonly [...infer R, infer L] ? L : 
            T extends readonly unknown[] ? T[number] : 
              undefined;

/**
 * It returns the last index of `target` in `list` array.
 * 
 * `R.equals` is used to determine equality between `target` and members of `list`.
 * 
 * If there is no such index, then `-1` is returned.
 */
export function lastIndexOf<T>(target: T, list: readonly T[]): number;
export function lastIndexOf<T>(target: T): (list: readonly T[]) => number;

/**
 * It returns the result of looping through `iterable` with `fn`.
 * 
 * It works with both array and object.
 */
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

export function mapObject<T extends object, Value>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => Value,
): (data: T) => MappedValues<T, Value>;

/**
 * Curried version of `String.prototype.match` which returns empty array, when there is no match.
 */
export function match(regExpression: RegExp, str: string): readonly string[];
export function match(regExpression: RegExp): (str: string) => readonly string[];

/**
 * `R.mathMod` behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.
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
export function maxBy<T>(compareFn: (input: T) => Ord): (x: T) => (y: T) => T;

/**
 * It returns the mean value of `list` input.
 */
export function mean(list: readonly number[]): number;

/**
 * It returns the median value of `list` input.
 */
export function median(list: readonly number[]): number;

/**
 * Same as `R.mergeRight`.
 */
export function merge<A, B>(target: A, newProps: B): A & B
export function merge<Output>(target: any): (newProps: any) => Output;

/**
 * It creates a copy of `target` object with overwritten `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.
 */
export function mergeRight<A, B>(target: A, newProps: B): A & B
export function mergeRight<Output>(target: any): (newProps: any) => Output;

/**
 * Helper to merge all calculated TypeScript definitions into one definition.
 * It returns its input and it is intended to be used as last method inside `R.pipe` chain.
 */
export function mergeTypes<T>(x: T): MergeTypes<T>;

/**
 * It returns the lesser value between `x` and `y`.
 */
export function min<T extends Ord>(x: T): (y: T) => T;

/**
 * It returns the lesser value between `x` and `y` according to `compareFn` function.
 */
export function minBy<T>(compareFn: (input: T) => Ord, x: T): (y: T) => T;

/**
 * It changes a property with the result of transformer function.
 */
export function modify<K extends string, A, P>(
  prop: K,
  fn: (a: A) => P,
): <T extends Record<K, A>>(target: T) => Omit<T, K> & Record<K, P>;

/**
 * It changes a property of object on the base of provided path and transformer function.
 */
export function modifyPath<U, T>(path: readonly [], fn: (value: U) => T): (obj: U) => T;
export function modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: readonly [K0], fn: (value: U[K0]) => T): (obj: U) => DeepModify<readonly [K0], U, T>;
export function modifyPath<
  K0 extends keyof U,
  U,
  T
>(path: `${K0}`, fn: (value: U[K0]) => T): (obj: U) => DeepModify<readonly [K0], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: readonly [K0, K1], fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<readonly [K0, K1], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  U,
  T
>(path: `${K0}.${K1}`, fn: (value: U[K0][K1]) => T): (obj: U) => DeepModify<readonly [K0, K1], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: readonly [K0, K1, K2], fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  U,
  T
>(path: `${K0}.${K1}.${K2}`, fn: (value: U[K0][K1][K2]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: readonly [K0, K1, K2, K3], fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}`, fn: (value: U[K0][K1][K2][K3]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: readonly [K0, K1, K2, K3, K4], fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}`, fn: (value: U[K0][K1][K2][K3][K4]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: readonly [K0, K1, K2, K3, K4, K5], fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4, K5], U, T>;
export function modifyPath<
  K0 extends keyof U,
  K1 extends keyof U[K0],
  K2 extends keyof U[K0][K1],
  K3 extends keyof U[K0][K1][K2],
  K4 extends keyof U[K0][K1][K2][K3],
  K5 extends keyof U[K0][K1][K2][K3][K4],
  U,
  T
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}`, fn: (value: U[K0][K1][K2][K3][K4][K5]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4, K5], U, T>;
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
>(path: readonly [K0, K1, K2, K3, K4, K5, K6], fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4, K5, K6], U, T>;
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
>(path: `${K0}.${K1}.${K2}.${K3}.${K4}.${K5}.${K6}`, fn: (value: U[K0][K1][K2][K3][K4][K5][K6]) => T): (obj: U) => DeepModify<readonly [K0, K1, K2, K3, K4, K5, K6], U, T>;
export function modifyPath<B, A = any>(path: Path, fn: (a: any) => any): (obj: A) => B;

/**
 * It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.
 */
export function none<T>(predicate: (x: T) => boolean): (list: readonly T[]) => boolean;

/**
 * It creates an object with a single key-value pair.
 */
export function objOf<T, K extends PropertyKey>(key: K): (value: T) => { readonly [P in K]: T };

/**
 * It will return `true` if `specification` object fully or partially include `obj` object.
 * 
 * `R.equals` is used to determine equality.
 */
export function objectIncludes<T>(specification: T): <U>(obj: U) => boolean;

/**
 * It returns a partial copy of an `obj` without `propsToOmit` properties.
 */
export function omit<
	S extends string,
	Keys extends PickStringToPickPath<S>,
>(propsToPick: S): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;
export function omit<const Keys extends readonly PropertyKey[]>(propsToPick: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? MergeTypes<Omit<U, ElementOf<Keys>>> : never;

/**
 * It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.
 */
export function partition<T, S extends T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => value is S,
): (data: ReadonlyArray<T>) => readonly [ReadonlyArray<S>, ReadonlyArray<Exclude<T, S>>];
export function partition<T>(
  predicate: (value: T, index: number, data: ReadonlyArray<T>) => boolean,
): (data: ReadonlyArray<T>) => readonly [ReadonlyArray<T>, ReadonlyArray<T>];

/**
 * If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.
 * 
 * It will return `undefined`, if such path is not found.
 */
export function path<S, K0 extends keyof S>(path: readonly [K0]): (obj: S) => S[K0];
export function path<S, K0 extends keyof S>(path: `${K0}`): (obj: S) => S[K0];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: readonly [K0, K1]): (obj: S) => S[K0][K1];
export function path<S, K0 extends keyof S, K1 extends keyof S[K0]>(path: `${K0}.${K1}`): (obj: S) => S[K0][K1];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1]
>(path: readonly [K0, K1, K2]): (obj: S) => S[K0][K1][K2];
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
>(path: readonly [K0, K1, K2, K3]): (obj: S) => S[K0][K1][K2][K3];
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
>(path: readonly [K0, K1, K2, K3, K4]): (obj: S) => S[K0][K1][K2][K3][K4];
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
>(path: readonly [K0, K1, K2, K3, K4], obj: S): S[K0][K1][K2][K3][K4];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4]
>(path: readonly [K0, K1, K2, K3, K4, K5]): (obj: S) => S[K0][K1][K2][K3][K4][K5];
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
>(path: readonly [K0, K1, K2, K3, K4, K5], obj: S): S[K0][K1][K2][K3][K4][K5];
export function path<
    S,
    K0 extends keyof S,
    K1 extends keyof S[K0],
    K2 extends keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4],
    K6 extends keyof S[K0][K1][K2][K3][K4][K5]
>(path: readonly [K0, K1, K2, K3, K4, K5, K6]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6];
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
>(path: readonly [K0, K1, K2, K3, K4, K5, K6], obj: S): S[K0][K1][K2][K3][K4][K5][K6];
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
>(path: readonly [K0, K1, K2, K3, K4, K5, K6, K7]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7];
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
>(path: readonly [K0, K1, K2, K3, K4, K5, K6, K7, K8]): (obj: S) => S[K0][K1][K2][K3][K4][K5][K6][K7][K8];
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

export function pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: readonly [K0]
): (obj: S) => S[K0];
export function pathSatisfies<S, K0 extends keyof S>(
	predicate: (x: S[K0]) => boolean,
	path: `${ K0 }`
): (obj: S) => S[K0];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: readonly [K0, K1]
): (obj: S) => S[K0][K1];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0]>(
	predicate: (x: S[K0][K1]) => boolean,
	path: `${ K0 }.${ K1 }`
): (obj: S) => S[K0][K1];
export function pathSatisfies<S, K0 extends keyof S, K1 extends keyof S[K0], K2 extends keyof S[K0][K1]>(
  predicate: (x: S[K0][K1][K2]) => boolean,
  path: readonly [K0, K1, K2]
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
  path: readonly [K0, K1, K2, K3]
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
  path: readonly [K0, K1, K2, K3, K4]
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
  path: readonly [K0, K1, K2, K3, K4, K5]
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
  path: readonly [K0, K1, K2, K3, K4, K5, K6]
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
  path: readonly [K0, K1, K2, K3, K4, K5, K6, K7]
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
  path: readonly [K0, K1, K2, K3, K4, K5, K6, K7, K8]
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

/**
 * It returns a partial copy of an `input` containing only `propsToPick` properties.
 * 
 * `input` can be either an object or an array.
 * 
 * String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.
 */
export function pick<K extends PropertyKey>(propsToPick: readonly K[]): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;
export function pick<
	S extends string,
	K extends PickStringToPickPath<K>
>(propsToPick: S): <T>(input: T) => MergeTypes<Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>>;

/**
 * It performs left-to-right function composition, where first argument is the input for the chain of functions.
 * 
 * This is huge difference from `Ramda.pipe` where input is passed like `R.pipe(...fns)(input)`.
 * Here we have `R.pipe(input, ...fns)`.
 * 
 * It has much better TypeScript support than `Ramda.pipe` and this is the reason why `Rambda` goes in this direction.
 */
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

/**
 * It returns list of the values of `property` taken from the all objects inside `list`.
 * Basically, this is `R.map(R.prop(property))`.
 */
export function pluck<T, K extends keyof T>(property: K): (list: readonly T[]) => readonly T[K][];

/**
 * It adds element `x` at the beginning of `list`.
 */
export function prepend<T>(xToPrepend: T, iterable: readonly T[]): readonly T[];
export function prepend<T>(xToPrepend: T): (iterable: readonly T[]) => readonly T[];

/**
 * It returns the value of property `propToFind` in `obj`.
 * 
 * If there is no such property, it returns `undefined`.
 */
export function prop<K extends PropertyKey>(prop: K): <U extends { readonly [P in K]?: unknown }>(obj: U) => U[K];
export function prop<K extends keyof U, U>(prop: K, obj: U): U[K];

/**
 * It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.
 */
export function propEq<T>(val: T): {
  <K extends PropertyKey>(name: K): (obj: Record<K, T>) => boolean;
  <K extends PropertyKey>(name: K, obj: Record<K, T>): boolean;
};
export function propEq<T, K extends PropertyKey>(val: T, name: K): (obj: Record<K, T>) => boolean;
export function propEq<K extends keyof U, U>(val: U[K], name: K, obj: U): boolean;

export function propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>>) => T;

/**
 * It returns `true` if the object property satisfies a given predicate.
 */
export function propSatisfies<T>(predicate: (x: T) => boolean, property: string): (obj: Record<PropertyKey, T>) => boolean;

/**
 * It returns list of numbers between `startInclusive` to `endExclusive` markers.
 */
export function range(startInclusive: number, endExclusive: number): readonly number[];
export function range(startInclusive: number): (endExclusive: number) => readonly number[];

// API_MARKER_END
// ============================================

export as namespace R

export function reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult): (list: readonly T[]) => TResult;

/**
 * It has the opposite effect of `R.filter`.
 */
export function reject<T>(
	predicate: (value: T) => boolean,
  list: readonly T[],
): readonly T[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => readonly ("" | null | undefined | false | 0)[];
export function reject<T>(
	predicate: BooleanConstructor,
): (list: readonly T[]) => readonly ("" | null | undefined | false | 0)[];
export function reject<T>(
	predicate: (value: T) => boolean,
): (list: readonly T[]) => readonly T[];

/**
 * Same as `R.filterObject` but it returns the object with properties that do not satisfy the predicate function.
 */
export function rejectObject<T extends object>(
  valueMapper: (
    value: EnumerableStringKeyedValueOf<T>,
    key: EnumerableStringKeyOf<T>,
    data: T,
  ) => boolean,
): <U extends T>(data: T) => U;

export function repeat<T>(x: T): (timesToRepeat: number) => readonly T[];

/**
 * It replaces `strOrRegex` found in `str` with `replacer`.
 */
export function replace(strOrRegex: RegExp | string, replacer: RegExp | string): (str: string) => string;

/**
 * It replaces `index` in array `list` with the result of `replaceFn(list[i])`.
 */
export function replaceItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: readonly T[]) => readonly T[];

/**
 * It returns copy of `list` sorted by `sortFn` function, where `sortFn` needs to return only `-1`, `0` or `1`.
 */
export function sort<T>(sortFn: (a: T, b: T) => number, list: readonly T[]): readonly T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (list: readonly T[]) => readonly T[];

/**
 * It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.
 */
export function sortBy<T>(sortFn: (a: T) => Ord, list: readonly T[]): readonly T[];
export function sortBy<T>(sortFn: (a: T) => Ord): (list: readonly T[]) => readonly T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(list: readonly T[]) => readonly T[];

export function sortWith<T>(fns: ReadonlyArray<(a: T, b: T) => number>): (list: readonly T[]) => readonly T[];

export function split(separator: string | RegExp): (str: string) => readonly string[];

/**
 * It splits `input` into slices of `sliceLength`.
 */
export function splitEvery<T>(sliceLength: number): (input: readonly T[]) => readonly ((readonly T[]))[];

/**
 * Curried version of `x - y`
 */
export function subtract(x: number, y: number): number;
export function subtract(x: number): (y: number) => number;

export function sum(list: readonly number[]): number;

/**
 * It returns a merged list of `x` and `y` with all equal elements removed.
 * 
 * `R.equals` is used to determine equality.
 */
export function symmetricDifference<T>(x: readonly T[]): <T>(y: readonly T[]) => readonly T[];

/**
 * It returns all but the first element of `input`.
 */
export function tail<T extends readonly unknown[]>(input: T): T extends readonly [any, ...infer U] ? U : readonly [...T];
export function tail(input: string): string;

/**
 * It returns the first `howMany` elements of `input`.
 */
export function take<T>(howMany: number): {
  (input: string): string;
  (input: readonly T[]): readonly T[];
  (input: readonly T[]): readonly T[];
};

/**
 * It returns the last `howMany` elements of `input`.
 */
export function takeLast<T>(howMany: number): {
  (input: string): string;
  (input: readonly T[]): readonly T[];
  (input: readonly T[]): readonly T[];
};

export function takeLastWhile<T>(predicate: (x: T) => boolean): (input: readonly T[]) => readonly T[];
export function takeLastWhile<T>(predicate: (x: T, index: number) => boolean): (list: readonly T[]) => readonly T[];

export function takeWhile<T>(predicate: (x: T, index: number) => boolean): (list: readonly T[]) => readonly T[];
export function takeWhile<T>(predicate: (x: T) => boolean): (input: readonly T[]) => readonly T[];

/**
 * It applies function `fn` to input `x` and returns `x`.
 * 
 * One use case is debugging in the middle of `R.pipe` chain.
 */
export function tap<T>(fn: (x: T) => void, input: T): T;
export function tap<T>(fn: (x: T) => void): (input: T) => T;

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
export function times<T>(fn: (i: number) => T, howMany: number): readonly T[];
export function times<T>(fn: (i: number) => T): (howMany: number) => readonly T[];

/**
 * It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).
 */
export function tryCatch<T, U>(
  fn: (input: T) => U,
  fallback: U
): (input: T) => U;

/**
 * It accepts any input and it returns its type.
 */
export function type(x: any): RambdaTypes;

/**
 * It takes two lists and return a new list containing a merger of both list with removed duplicates.
 * 
 * `R.equals` is used to compare for duplication.
 */
export function union<T>(x: readonly T[]): (y: readonly T[]) => readonly T[];

/**
 * It returns a new array containing only one copy of each element of `list`.
 * 
 * `R.equals` is used to determine equality.
 */
export function uniq<T>(list: readonly T[]): readonly T[];

/**
 * It applies uniqueness to input list based on function that defines what to be used for comparison between elements.
 * 
 * `R.equals` is used to determine equality.
 */
export function uniqBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => readonly T[];

/**
 * It returns a new array containing only one copy of each element in `list` according to `predicate` function.
 * 
 * This predicate should return true, if two elements are equal.
 */
export function uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => readonly T[];

/**
 * The method returns function that will be called with argument `input`.
 * 
 * If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`.
 * 
 * In the other case, the final output will be the `input` itself.
 */
export function unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U;
export function unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T): (x: T) => T;

/**
 * It takes an object and a property name. The method will return a list of objects, where each object is a shallow copy of the input object, but with the property array unwound.
 */
export function unwind<S extends string>(prop: S): <T>(obj: T) => Omit<T, S> & { readonly [K in S]: T[S][number] };

/**
 * It returns a copy of `list` with updated element at `index` with `newValue`.
 */
export function update<T>(index: number, newValue: T): (list: readonly T[]) => readonly T[];

/**
 * It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`.
 * If the `predicate` returns `false`, then it will simply return `input`.
 */
export function when<T>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => T): (input: T) => T;
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;

/**
 * It will return a new array containing tuples of equally positions items from both `x` and `y` lists.
 * 
 * The returned list will be truncated to match the length of the shortest supplied list.
 */
export function zip<K>(x: readonly K[]): <V>(y: readonly V[]) => readonly KeyValuePair<K, V>[];

export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => readonly TResult[];

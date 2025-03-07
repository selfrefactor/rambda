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
type Predicate<T> = (x: T) => boolean;
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

export type ObjPredicate<T = unknown> = (value: any, key: unknown extends T ? string : keyof T) => boolean;

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

type 
AnyFunction = (...args: readonly any[]) => unknown;
type AnyConstructor = new (...args: readonly any[]) => unknown;


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
 * It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.
 */
export function assoc<T, K extends PropertyKey>(prop: K, val: T): <U>(obj: U) => U extends Record<K, any> ? U[K] extends T ? U : Record<K, T> & Omit<U, K> : U & Record<K, T>;

/**
 * It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.
 */
export function assocPath<T>(path: Path, val: unknown): (obj: unknown) => T;

/**
 * It returns a function with `input` argument.
 * 
 * This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.
 */
export function both<T, RT1 extends T>(firstPredicate: (a: T) => a is RT1): <RT2 extends T>(secondPredicate: (a: T) => a is RT2) => (a: T) => a is RT1 & RT2;
export function both<Args extends readonly any[]>(firstPredicate: (...args: Args) => boolean): (secondPredicate: (...args: Args) => boolean) => (...args: Args) => boolean;
export function both<T, RT1 extends T, RT2 extends T>(firstPredicate: (a: T) => a is RT1, secondPredicate: (a: T) => a is RT2): (a: T) => a is RT1 & RT2;
export function both<Args extends readonly any[]>(firstPredicate: (...args: Args) => boolean, secondPredicate: (...args: Args) => boolean): (...args: Args) => boolean;

/**
 * It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.
 */
export function checkObjectWithSpec<T>(spec: T): <U>(testObj: U) => boolean;

/**
 * It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
 */
export function clone<T>(input: T): T;
export function clone<T>(input: readonly T[]): readonly T[];

/**
 * It returns `inverted` version of `origin` function that accept `input` as argument.
 * 
 * The return value of `inverted` is the negative boolean value of `origin(input)`.
 */
export function complement<T extends readonly any[]>(predicate: (...args: T) => unknown): (...args: T) => boolean;

/**
 * It performs right-to-left function composition.
 */
export function compose<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7, R8>(
  f8: (a: R7) => R8,
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R8;
export function compose<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7>(
  f7: (a: R6) => R7,
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R7;
export function compose<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6>(
  f6: (a: R5) => R6,
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R6;
export function compose<TArgs extends readonly any[], R1, R2, R3, R4, R5>(
  f5: (a: R4) => R5,
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R5;
export function compose<TArgs extends readonly any[], R1, R2, R3, R4>(
  f4: (a: R3) => R4,
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R4;
export function compose<TArgs extends readonly any[], R1, R2, R3>(
  f3: (a: R2) => R3,
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R3;
export function compose<TArgs extends readonly any[], R1, R2>(
  f2: (a: R1) => R2,
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R2;
export function compose<TArgs extends readonly any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;

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
export function difference<T>(a: readonly T[], b: readonly T[]): readonly T[];
export function difference<T extends unknown>(a: readonly T[]): <U extends unknown>(b: readonly U[]) => EqualTypes<U, T> extends true ? readonly T[] : never

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
 * It returns a new object that does not contain property `prop`.
 */
export function dissoc<K extends PropertyKey>(prop: K): <U extends { readonly [P in K]?: any}>(obj: string extends keyof U ? U : undefined extends U[K] ? U : never) => U;
export function dissoc<U, K extends keyof U>(prop: string extends keyof U ? K : undefined extends U[K] ? K : never, obj: U): U;

export function dissocPath<T>(path: Path): (obj: unknown) => T;

export function divide(x: number): (y: number) => number;

/**
 * It returns `howMany` items dropped from beginning of list or string `input`.
 */
export function drop<T>(howMany: number): {
  (input: string): string;
  (input: readonly T[]): readonly T[];
  (input: readonly T[]): readonly T[];
};
export function drop(howMany: number, input: string): string;
export function drop<T>(howMany: number, input: readonly T[]): readonly T[];
export function drop<T>(howMany: number, input: readonly T[]): readonly T[];

/**
 * It returns `howMany` items dropped from the end of list or string `input`.
 */
export function dropLast<T>(howMany: number): {
  (input: string): string;
  (input: readonly T[]): readonly T[];
  (input: readonly T[]): readonly T[];
};
export function dropLast(howMany: number, input: string): string;
export function dropLast<T>(howMany: number, input: readonly T[]): readonly T[];
export function dropLast<T>(howMany: number, input: readonly T[]): readonly T[];

export function dropLastWhile(predicate: (x: string) => boolean): (iterable: string) => string;
export function dropLastWhile<T>(predicate: (x: T) => boolean): <T>(iterable: readonly T[]) => readonly T[];

export function dropRepeatsBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => readonly T[];

export function dropRepeatsWith<T>(predicate: (x: T, y: T) => boolean): (list: readonly T[]) => readonly T[];

export function dropWhile(fn: Predicate<string>): (iterable: string) => string;
export function dropWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => readonly T[];

/**
 * When iterable is a string, then it behaves as `String.prototype.endsWith`.
 * When iterable is a list, then it uses R.equals to determine if the target list ends in the same way as the given target.
 */
export function endsWith<T extends string>(question: T, str: string): boolean;
export function endsWith<T extends string>(question: T): (str: string) => boolean;
export function endsWith<T>(question: readonly T[], list: readonly T[]): boolean;
export function endsWith<T>(question: readonly T[]): (list: readonly T[]) => boolean;

export function eqBy<T>(fn: (a: T) => unknown, a: T): (b: T) => boolean;

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
 * It filters list or object `input` using a `predicate` function.
 */
export function filter<T, S extends T>(
	predicate: (value: T) => value is S,
  list: readonly T[],
): readonly S[];
export function filter<T>(
	predicate: (value: T) => boolean,
  list: readonly T[],
): readonly T[];
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
 * It returns the first element of `list` that satisfy the `predicate`.
 * 
 * If there is no such element, it returns `undefined`.
 */
export function find<T>(predicate: (x: T) => boolean, list: readonly T[]): T | undefined;
export function find<T>(predicate: (x: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * It returns the index of the first element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
export function findIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

/**
 * It returns the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `undefined` is returned.
 */
export function findLast<T>(fn: (x: T) => boolean, list: readonly T[]): T | undefined;
export function findLast<T>(fn: (x: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * It returns the index of the last element of `list` satisfying the `predicate` function.
 * 
 * If there is no such element, then `-1` is returned.
 */
export function findLastIndex<T>(predicate: (x: T) => boolean, list: readonly T[]): number;
export function findLastIndex<T>(predicate: (x: T) => boolean): (list: readonly T[]) => number;

/**
 * It combines `map` with `flatten` logic.
 */
export function flatMap<T, U>(fn: (n: T) => readonly U[]): (list: readonly T[]) => readonly U[];

/**
 * It deeply flattens an array.
 */
export function flatten<T>(list: readonly any[]): readonly T[];

/**
 * It transforms a `listOfPairs` to an object.
 */
export function fromPairs<V>(listOfPairs: readonly ((readonly [number, V]))[]): { readonly [index: number]: V };
export function fromPairs<V>(listOfPairs: readonly ((readonly [string, V]))[]): { readonly [index: string]: V };

/**
 * It splits `list` according to a provided `groupFn` function and returns an object.
 */
export function groupBy<T, K extends string = string>(fn: (a: T) => K): (list: readonly T[]) => Partial<Record<K, readonly T[]>>;
export function groupBy<T, K extends string = string>(fn: (a: T) => K, list: readonly T[]): Partial<Record<K, readonly T[]>>;

/**
 * It returns `true` if `obj` has property `prop`.
 */
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;

export function hasIn(searchProperty: string): <T>(obj: T) => boolean;
export function hasIn<T>(searchProperty: string, obj: T): boolean;

/**
 * It will return true, if `input` object has truthy `path`(calculated with `R.path`).
 */
export function hasPath<T>(
  path: string | readonly string[]
): (input: object) => boolean;

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
 * It generates object with properties provided by `condition` and values provided by `list` array.
 * 
 * If `condition` is a function, then all list members are passed through it.
 * 
 * If `condition` is a string, then all list members are passed through `R.path(condition)`.
 */
export function indexBy<T, K extends string | number = string>(condition: (key: T) => K, list: readonly T[]): { readonly [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K, list: readonly T[]): { readonly [key in NonNullable<K>]?: T };
export function indexBy<T, K extends string | number = string>(condition: (key: T) => K): (list: readonly T[]) => { readonly [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(condition: (key: T) => K | undefined): (list: readonly T[]) => { readonly [key in NonNullable<K>]?: T };
export function indexBy<T>(condition: string, list: readonly T[]): { readonly [key: string]: T };
export function indexBy<T>(condition: string): (list: readonly T[]) => { readonly [key: string]: T };

/**
 * It returns the index of the first element of `list` equals to `valueToFind`.
 * 
 * If there is no such element, it returns `-1`.
 */
export function indexOf<T>(valueToFind: T, list: readonly T[]): number;
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
): (list1: readonly T1[], list2: readonly T2[]) => readonly T1[];
export function innerJoin<T1, T2>(
  pred: (a: T1, b: T2) => boolean,
  list1: readonly T1[],
): (list2: readonly T2[]) => readonly T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): readonly T1[];

export function insertAtIndex<T>(index: number, itemToInsert: T): (list: readonly T[]) => readonly T[];

/**
 * It loops through `listA` and `listB` and returns the intersection of the two according to `R.equals`.
 */
export function intersection<T>(listA: readonly T[], listB: readonly T[]): readonly T[];
export function intersection<T>(listA: readonly T[]): (listB: readonly T[]) => readonly T[];

/**
 * It adds a `separator` between members of `list`.
 */
export function intersperse<T>(separator: T, list: readonly T[]): readonly T[];
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
  fn: (value: T[number]) => U,
): (data: T) => Mapped<T, U>;
export function map<T extends IterableContainer, U>(
  fn: (value: T[number]) => U,
	data: T
) : Mapped<T, U>;

/**
 * It works the same way as `R.map` does for objects. It is added as Ramda also has this method.
 */
export function mapObject<T, TResult>(
	fn: (
		value: T,
		key: string,
		obj?: {
			readonly [key: string]: T;
		},
	) => TResult,
	obj: {
		readonly [key: string]: T;
	},
): {
	readonly [key: string]: TResult;
};

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
 * It merges all objects of `list` array sequentially and returns the result.
 */
export function mergeAll<T>(list: readonly object[]): T;
export function mergeAll(list: readonly object[]): object;

/**
 * It creates a copy of `target` object with overwritten `newProps` properties. Previously known as `R.merge` but renamed after Ramda did the same.
 */
export function mergeRight<A, B>(target: A, newProps: B): A & B
export function mergeRight<Output>(target: any): (newProps: any) => Output;

/**
 * Helper to merge all calculated TypeScript definitions into one definition.
 * It returns its input and it is intended to be used as last method inside `R.piped` chain.
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
export function omit<const Keys extends readonly PropertyKey[]>(names: Keys): <U extends Partial<Record<ElementOf<Keys>, any>>>(obj: ElementOf<Keys> extends keyof U ? U : never) => ElementOf<Keys> extends keyof U ? Omit<U, ElementOf<Keys>> : never;
export function omit<U, Keys extends keyof U>(names: readonly Keys[], obj: U): Omit<U, Keys>;
export function omit<T>(names: string): (obj: unknown) => T;
export function omit<T>(names: string, obj: unknown): T;

/**
 * It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.
 */
export function partition<T, U extends T>(fn: (a: T) => a is U): <L extends T = T>(list: readonly L[]) => readonly [readonly U[], readonly Exclude<L, U>[]];
export function partition<T>(fn: (a: T) => boolean): <L extends T = T>(list: readonly L[]) => readonly [readonly L[], readonly L[]];

export function partition<T, U extends T>(fn: (a: T) => a is U, list: readonly T[]): readonly [readonly U[], readonly Exclude<T, U>[]];
export function partition<T>(fn: (a: T) => boolean, list: readonly T[]): readonly [readonly T[], readonly T[]];

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

export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;

/**
 * It returns a partial copy of an `input` containing only `propsToPick` properties.
 * 
 * `input` can be either an object or an array.
 * 
 * String annotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.
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
export function pickAll<T, K extends keyof T>(propsToPicks: readonly K[], input: T): Pick<T, K>;
export function pickAll<T, U>(propsToPicks: readonly string[], input: T): U;
export function pickAll(propsToPicks: readonly string[]): <T, U>(input: T) => U;
export function pickAll<T, U>(propsToPick: string, input: T): U;
export function pickAll<T, U>(propsToPick: string): (input: T) => U;

export function pickBy<T>(pred: ObjPredicate<T>): <U, V extends T>(obj: V) => U;
export function pickBy<T, U>(pred: ObjPredicate<T>, obj: T): U;

/**
 * It performs left-to-right function composition.
 */
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  f8: (a: R7) => R8,
  f9: (a: R8) => R9,
  f10: (a: R9) => R10
): (...args: TArgs) => R10;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  f8: (a: R7) => R8,
  f9: (a: R8) => R9
): (...args: TArgs) => R9;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  f8: (a: R7) => R8
): (...args: TArgs) => R8;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6, R7>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (...args: TArgs) => R7;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5, R6>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (...args: TArgs) => R6;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4, R5>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (...args: TArgs) => R5;
export function pipe<TArgs extends readonly any[], R1, R2, R3, R4>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (...args: TArgs) => R4;
export function pipe<TArgs extends readonly any[], R1, R2, R3>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (...args: TArgs) => R3;
export function pipe<TArgs extends readonly any[], R1, R2>(
  f1: (...args: TArgs) => R1,
  f2: (a: R1) => R2
): (...args: TArgs) => R2;
export function pipe<TArgs extends readonly any[], R1>(
  f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;

/**
 * It is basically `R.pipe`, but instead of passing `input` argument as `R.pipe(...)(input)`, you pass it as the first argument. It has much better TypeScript support and it is recomended to use `R.piped` instead of `R.pipe`/`R.compose`.
 */
export function piped<A, B>(value: A, op1: (input: A) => B): B;
export function piped<A, B, C>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
): C;
export function piped<A, B, C, D>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
): D;
export function piped<A, B, C, D, E>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
): E;
export function piped<A, B, C, D, E, F>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
): F;
export function piped<A, B, C, D, E, F, G>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
): G;
export function piped<A, B, C, D, E, F, G, H>(
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
): H;
export function piped<A, B, C, D, E, F, G, H, I>(
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
export function piped<A, B, C, D, E, F, G, H, I, J>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
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
export function piped<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
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

// API_MARKER_END
// ============================================

export as namespace R

/**
 * It returns list of the values of `property` taken from the all objects inside `list`.
 */
export function pluck<T, K extends keyof T>(property: K): (list: readonly T[]) => readonly T[K][];
export function pluck<T, K extends keyof T>(property: K, list: readonly T[]): readonly T[K][];

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

/**
 * It returns either `defaultValue` or the value of `property` in `obj`.
 */
export function propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>> | undefined) => T;

/**
 * It returns `true` if the object property satisfies a given predicate.
 */
export function propSatisfies<T>(predicate: Predicate<T>, property: string, obj: Record<PropertyKey, T>): boolean;
export function propSatisfies<T>(predicate: Predicate<T>, property: string): (obj: Record<PropertyKey, T>) => boolean;

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
 * It returns a copy of `list` input with removed `index`.
 */
export function removeIndex(index: number): <T>(list: readonly T[]) => readonly T[];

export function repeat<T>(x: T): (timesToRepeat: number) => readonly T[];
export function repeat<T>(x: T, timesToRepeat: number): readonly T[];

/**
 * It replaces `strOrRegex` found in `str` with `replacer`.
 */
export function replace(strOrRegex: RegExp | string, replacer: RegExp | string): (str: string) => string;

/**
 * It replaces `index` in array `list` with the result of `replaceFn(list[i])`.
 */
export function replaceItemAtIndex<T>(index: number, replaceFn: (x: T) => T): (list: readonly T[]) => readonly T[];

/**
 * It returns a reversed copy of list or string `input`.
 */
export function reverse<T>(input: readonly T[]): readonly T[];
export function reverse(input: string): string;

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
export function sortWith<T>(fns: ReadonlyArray<(a: T, b: T) => number>, list: readonly T[]): readonly T[];

/**
 * Curried version of `String.prototype.split`
 */
export function split(separator: string | RegExp): (str: string) => readonly string[];
export function split(separator: string | RegExp, str: string): readonly string[];

/**
 * It splits `input` into slices of `sliceLength`.
 */
export function splitEvery<T>(sliceLength: number, input: readonly T[]): readonly ((readonly T[]))[];
export function splitEvery(sliceLength: number, input: string): readonly string[];
export function splitEvery(sliceLength: number): {
  (input: string): readonly string[];
  <T>(input: readonly T[]): readonly ((readonly T[]))[];
};

/**
 * It splits `list` to two arrays according to a `predicate` function.
 * 
 * The first array contains all members of `list` before `predicate` returns `true`.
 */
export function splitWhen<T>(predicate: Predicate<T>): <U>(list: readonly U[]) => readonly ((readonly U[]))[];

/**
 * When iterable is a string, then it behaves as `String.prototype.startsWith`.
 * When iterable is a list, then it uses R.equals to determine if the target list starts in the same way as the given target.
 */
export function startsWith<T extends string>(question: T, input: string): boolean;
export function startsWith<T extends string>(question: T): (input: string) => boolean;
export function startsWith<T>(question: readonly T[], input: readonly T[]): boolean;
export function startsWith<T>(question: readonly T[]): (input: readonly T[]) => boolean;

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
export function symmetricDifference<T>(x: readonly T[], y: readonly T[]): readonly T[];
export function symmetricDifference<T>(x: readonly T[]): <T>(y: readonly T[]) => readonly T[];

/**
 * It returns all but the first element of `input`.
 */
export function tail<T extends readonly unknown[]>(input: T): T extends readonly [any, ...infer U] ? U : readonly [...T];
export function tail(input: string): string;

/**
 * It returns the first `howMany` elements of `input`.
 */
export function take<T>(howMany: number, input: T): T extends string ? string : T;
export function take<T>(howMany: number) : (input: T) => T extends string ? string : T;

/**
 * It returns the last `howMany` elements of `input`.
 */
export function takeLast<T>(howMany: number, input: T): T extends string ? string : T;
export function takeLast<T>(howMany: number) : (input: T) => T extends string ? string : T;

export function takeLastWhile(predicate: (x: string) => boolean): (input: string) => string;
export function takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: readonly T[]) => readonly T[];

export function takeWhile(fn: Predicate<string>): (iterable: string) => string;
export function takeWhile<T>(fn: Predicate<T>): (iterable: readonly T[]) => readonly T[];

/**
 * It applies function `fn` to input `x` and returns `x`.
 * 
 * One use case is debugging in the middle of `R.piped` chain.
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
 * It transforms an object to a list.
 */
export function toPairs<T extends {}>(data: T): ReadonlyArray<Entry<T>>;

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
 * It takes an object and a property name. The method will return a list of objects, where each object is a shallow copy of the input object, but with the property array unwound.
 */
export function unwind<S extends string>(prop: S): <T>(obj: T) => Omit<T, S> & { readonly [K in S]: T[S][number] };

/**
 * It pass `input` to `predicate` function and if the result is `true`, it will return the result of `whenTrueFn(input)`.
 * If the `predicate` returns `false`, then it will simply return `input`.
 */
export function when<T>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => T): (input: T) => T;
export function when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;

/**
 * It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.
 * 
 * `R.equals` is used to determine equality.
 */
export function without<T>(matchAgainst: readonly T[]): (source: readonly T[]) => readonly T[];

/**
 * It will return a new array containing tuples of equally positions items from both `x` and `y` lists.
 * 
 * The returned list will be truncated to match the length of the shortest supplied list.
 */
export function zip<K>(x: readonly K[]): <V>(y: readonly V[]) => readonly KeyValuePair<K, V>[];

export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => readonly TResult[];

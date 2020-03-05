import { F } from "../_ts-toolbelt/src/index";

// INTERFACES_MARKER
type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise";

type FilterFunctionArray<T> = (x: T, index: number) => boolean;
type FilterFunctionObject<T> = (x: T, prop: string, inputObj: Dictionary<T>) => boolean;
type MapFunctionObject<T, U> = (x: T, prop: string, inputObj: Dictionary<T>) => U;
type MapFunctionArray<T, U> = (x: T, index: number) => U;

type SimplePredicate<T> = (x: T) => boolean;

type CommonKeys<T1, T2> = keyof T1 & keyof T2;

type Ord = number | string | boolean | Date;

type Path = string | ReadonlyArray<(number | string)>;
type RamdaPath = Array<(number | string)>;

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
type Merge<Primary, Seexport function condary> = { [K in keyof Primary]: Primary[K] } & { [K in Exclude<keyof Seexport function condary, CommonKeys<Primary, Seexport function condary>>]: Seexport function condary[K] };

// INTERFACES_MARKER_END
  
// SINGLE_MARKER
// TODO 
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

// SINGLE_MARKER
export function adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
export function adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function allPass<T>(predicates: Array<(x: T) => boolean>): (input: T) => boolean;

// SINGLE_MARKER
export function always<T>(x: T): () => T;

// SINGLE_MARKER
export function any<T>(fn: (x: T, i: number) => boolean, arr: ReadonlyArray<T>): boolean;
export function any<T>(fn: (x: T) => boolean, arr: ReadonlyArray<T>): boolean;
export function any<T>(fn: (x: T, i: number) => boolean): (arr: ReadonlyArray<T>) => boolean;
export function any<T>(fn: (x: T) => boolean): (arr: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;

// SINGLE_MARKER
export function append<T>(el: T, list: ReadonlyArray<T>): T[];
export function append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];
    
// SINGLE_MARKER
export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
      obj: Obj
    ): (
        ...args: Parameters<ValueOfRecord<Obj>>
    ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;
    
// SINGLE_MARKER
export function assoc<T, U, K extends string>(prop: K, value: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, value: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(value: T, obj: U) => Record<K, T> & U;

// SINGLE_MARKER
export function assocPath<T, U>(path: Path, val: T, obj: U): U;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): F.Curry<(a: T, b: U) => U>;


// SINGLE_MARKER
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

// SINGLE_MARKER
export function both(firstexport function Condition: Pred, seexport function condexport function Condition: Pred): Pred;
export function both<T>(firstexport function Condition: Predicate<T>, seexport function condexport function Condition: Predicate<T>): Predicate<T>;
export function both<T>(firstexport function Condition: Predicate<T>): (seexport function condexport function Condition: Predicate<T>) => Predicate<T>;
export function both(firstexport function Condition: Pred): (seexport function condexport function Condition: Pred) => Pred;

// SINGLE_MARKER
export function either(pred1: Pred, pred2: Pred): Pred;
export function either(pred1: Pred): (pred2: Pred) => Pred;


// SINGLE_MARKER
export function clamp(min: number, max: number, input: number): number;
export function clamp(min: number, max: number) : (input: number) => number;

// SINGLE_MARKER
export function clone<T>(value: T): T;
export function clone<T>(value: ReadonlyArray<T>): T[];

// SINGLE_MARKER
export function complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

// SINGLE_MARKER
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

// SINGLE_MARKER
export function concat<T>(x: ReadonlyArray<T>, y: ReadonlyArray<T>): T[];
export function concat<T>(x: ReadonlyArray<T>): (y: ReadonlyArray<T>) => T[];
export function concat(x: string, y: string): string;
export function concat(x: string): (y: string) => string;

// SINGLE_MARKER
export function cond(fns: Array<[Pred, (...a: readonly any[]) => any]>): (...a: readonly any[]) => any;
export function cond<A, B>(fns: Array<[SafePred<A>, (...a: readonly A[]) => B]>): (...a: readonly A[]) => B;

// SINGLE_MARKER
export function curry<F extends (...args: any) => any>(f: F): F.Curry<F>;

// SINGLE_MARKER
export function dec(n: number): number;

// SINGLE_MARKER
export function defaultTo<T>(defaultValue: T): (...inputArguments: Array<T | null | undefined>) => T;
export function defaultTo<T>(defaultValue: T, ...inputArguments: Array<T | null | undefined>): T;
export function defaultTo<T, U>(defaultValue: T | U, ...inputArguments: Array<T | U | null | undefined>): T | U;

// SINGLE_MARKER
export function difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc(prop: string): <U>(obj: any) => U;

// SINGLE_MARKER
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

// SINGLE_MARKER
export function drop<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
export function drop(howManyToDrop: number, arrOrStr: string): string;
export function drop<T>(howManyToDrop: number): {
  (arrOrStr: string): string;
  (arrOrStr: ReadonlyArray<T>): T[];
};

// SINGLE_MARKER
export function dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
export function dropLast(howManyToDrop: number, arrOrStr: string): string;
export function dropLast<T>(howManyToDrop: number): {
  (arrOrStr: ReadonlyArray<T>): T[];
  (arrOrStr: string): string;
};

// SINGLE_MARKER
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;


// SINGLE_MARKER
export function F(): boolean;

// SINGLE_MARKER
export function filter<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
export function filter<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
export function filter<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function filter<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

// SINGLE_MARKER
export function find<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
export function find<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;

// SINGLE_MARKER
export function findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
export function findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;

// SINGLE_MARKER
export function findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
export function findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

// SINGLE_MARKER
export function findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

// SINGLE_MARKER
export function flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

// SINGLE_MARKER
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;

// SINGLE_MARKER
export function forEach<T>(fn: (x: T) => void, list: T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
export function forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
export function forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

// SINGLE_MARKER
export function fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
export function fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

// SINGLE_MARKER
export function groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
export function groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

// SINGLE_MARKER
export function has<T>(prop: string, obj: T): boolean;
export function has(prop: string): <T>(obj: T) => boolean;

// SINGLE_MARKER
export function groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

// SINGLE_MARKER
export function head<T>(arrOrStr: Array<T>): T | undefined;
export function head(arrOrStr: string): string;

// SINGLE_MARKER
export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;

// SINGLE_MARKER
export function identity<T>(x: T): T;

// SINGLE_MARKER
export function ifElse(condition: Pred, ifFn: Arity1Fn, elseFn: Arity1Fn): Arity1Fn;
export function ifElse(condition: Pred, ifFn: Arity2Fn, elseFn: Arity2Fn): Arity2Fn;

// SINGLE_MARKER
export function inc(n: number): number;

// SINGLE_MARKER
export function includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
export function includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
export function includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
export function includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: string, arr: ReadonlyArray<T>): { [key: string]: T };
export function indexBy<T>(condition: (a: T) => string): (arr: ReadonlyArray<T>) => { [key: string]: T };
export function indexBy<T>(condition: string): (arr: ReadonlyArray<T>) => { [key: string]: T };

export as namespace R

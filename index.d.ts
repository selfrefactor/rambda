import { F } from "./_ts-toolbelt/src/index";

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
type Merge<Primary, Secondary> = { [K in keyof Primary]: Primary[K] } & { [K in Exclude<keyof Secondary, CommonKeys<Primary, Secondary>>]: Secondary[K] };

// INTERFACES_MARKER_END
  

// TODO 
export function add(a: number, b: number): number;
export function add(a: string, b: string): string;
export function add(a: number): (b: number) => number;
export function add(a: string): (b: string) => string;


export function adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
export function adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];


export function all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;


export function allPass<T>(predicates: Array<(x: T) => boolean>): (input: T) => boolean;


export function always<T>(x: T): () => T;


export function any<T>(fn: (x: T, i: number) => boolean, arr: ReadonlyArray<T>): boolean;
export function any<T>(fn: (x: T) => boolean, arr: ReadonlyArray<T>): boolean;
export function any<T>(fn: (x: T, i: number) => boolean): (arr: ReadonlyArray<T>) => boolean;
export function any<T>(fn: (x: T) => boolean): (arr: ReadonlyArray<T>) => boolean;


export function anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;


export function append<T>(el: T, list: ReadonlyArray<T>): T[];
export function append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];
    

export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
      obj: Obj
    ): (
        ...args: Parameters<ValueOfRecord<Obj>>
    ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;
    

export function assoc<T, U, K extends string>(prop: K, value: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, value: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): <T, U>(value: T, obj: U) => Record<K, T> & U;


export function assocPath<T, U>(path: Path, val: T, obj: U): U;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): F.Curry<(a: T, b: U) => U>;

export as namespace R
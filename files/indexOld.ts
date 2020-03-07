export function 
  



// SINGLE_MARKER
export function dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
export function dropLast(howManyToDrop: number, arrOrStr: string): string;
export function dropLast<T>(howManyToDrop: number): {
export function   (arrOrStr: ReadonlyArray<T>): T[];
export function   (arrOrStr: string): string;
export function };

// SINGLE_MARKER
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;

export function 
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

// SINGLE_MARKER
export function indexOf<T>(target: T, arr: ReadonlyArray<T>): number;
export function indexOf<T>(target: T): (arr: ReadonlyArray<T>) => number;

// SINGLE_MARKER
export function init<T>(arrOrStr: ReadonlyArray<T>): T[];
export function init(arrOrStr: string): string;

// SINGLE_MARKER
export function intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
export function intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

export function 
// SINGLE_MARKER
export function intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function is(xPrototype: any, x: any): boolean;
export function is(xPrototype: any): (x: any) => boolean;

// SINGLE_MARKER
export function isEmpty<T>(input: T): boolean;

// SINGLE_MARKER
export function isNil(x: any): x is null | undefined;

// SINGLE_MARKER
export function join(x: string, xs: ReadonlyArray<any>): string;
export function join(x: string): (xs: ReadonlyArray<any>) => string;

// SINGLE_MARKER
export function keys<T extends object>(x: T): Array<keyof T>;
export function keys<T>(x: T): string[];

// SINGLE_MARKER
export function last<T>(arrOrStr: Array<T>): T | undefined;
export function last(arrOrStr: string): string;

// SINGLE_MARKER
export function lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number;

// SINGLE_MARKER
export function length<T>(list: ReadonlyArray<T>): number;

// SINGLE_MARKER
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
export function 
// SINGLE_MARKER
export function lensIndex(n: number): Lens;
export function lensPath(path: RamdaPath): Lens;

// SINGLE_MARKER
export function lensProp(str: string): {
export function export function <T, U>(obj: T): U;
export function export function set<T, U, V>(val: T, obj: U): V;
export function };

// SINGLE_MARKER
export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];

// SINGLE_MARKER
export function set<T, U>(lens: Lens, a: U, obj: T): T;
export function set<U>(lens: Lens, a: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(a: U, obj: T) => T;
export function 
// SINGLE_MARKER
export function view<T, U>(lens: Lens): (obj: T) => U;
export function view<T, U>(lens: Lens, obj: T): U;

// SINGLE_MARKER
export function map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>;
export function map<T, U, S>(mapFn: MapFunctionObject<T, U>): (x: Dictionary<T>) => Dictionary<U>;
export function map<T, U>(mapFn: MapFunctionArray<T, U>, x: T[]): U[];
export function map<T, U>(mapFn: MapFunctionArray<T, U>): (x: T[]) => U[];
export function map<T>(mapFn: MapFunctionArray<T, T>): (x: T[]) => T[];
export function map<T>(mapFn: MapFunctionArray<T, T>, x: ReadonlyArray<T>): T[];

// SINGLE_MARKER
export function match(regexp: RegExp, str: string): any[];
export function match(regexp: RegExp): (str: string) => any[];

// SINGLE_MARKER
export function max<T extends Ord>(a: T, b: T): T;
export function max<T extends Ord>(a: T): (b: T) => T;

// SINGLE_MARKER
export function maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function maxBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

// SINGLE_MARKER
export function mean(list: ReadonlyArray<number>): number;

// SINGLE_MARKER
export function median(list: ReadonlyArray<number>): number;

// SINGLE_MARKER
export function merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
export function merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

// SINGLE_MARKER
export function min<T extends Ord>(a: T, b: T): T;
export function min<T extends Ord>(a: T): (b: T) => T;

// SINGLE_MARKER
export function minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function minBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

// SINGLE_MARKER
export function modulo(a: number, b: number): number;
export function modulo(a: number): (b: number) => number;

// SINGLE_MARKER
export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;

// SINGLE_MARKER
export function negate(a: number): number;

// SINGLE_MARKER
export function none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function not(x: any): boolean;

// SINGLE_MARKER
export function nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
export function nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

// SINGLE_MARKER
export function omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
export function omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;

// SINGLE_MARKER
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;

export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;

export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;

export function partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

// SINGLE_MARKER
export function partialCurry<Input, PartialInput, Output>(
export function   fn: (input: Input) => Output,
export function   partialInput: PartialInput,
export function ): (
export function export function input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>,
export function   ) => Output;


// SINGLE_MARKER
export function path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
export function path<T>(pathToSearch: string | string[], obj: any): T | undefined;
export function path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
export function path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
export function 
// SINGLE_MARKER
export function paths<Input, T>(pathsToSearch: Array<string | string[]>, obj: Input): Array<T | undefined>;
export function paths<T>(pathsToSearch: Array<string | string[]>, obj: any): Array<T | undefined>;
export function paths<T>(pathsToSearch: Array<string | string[]>): (obj: any) => Array<T | undefined>;
export function paths<Input, T>(pathsToSearch: Array<string | string[]>): (obj: Input) => Array<T | undefined>;

// SINGLE_MARKER
export function pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): F.Curry<(a: Path, b: any) => T>;

// SINGLE_MARKER
export function pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
export function pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
export function pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
export function pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;

// SINGLE_MARKER
export function pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
export function pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

// SINGLE_MARKER
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
export function   fn0: (x0: V0, x1: V1, x2: V2) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(
export function   fn0: () => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn: (x: T6) => T7): () => T7;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
export function   fn0: (x: V0) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn: (x: T6) => T7): (x: V0) => T7;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
export function   fn0: (x0: V0, x1: V1) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
export function   fn0: (x0: V0, x1: V1, x2: V2) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
export function   fn0: () => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn: (x: T7) => T8): () => T8;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
export function   fn0: (x: V0) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn: (x: T7) => T8): (x: V0) => T8;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
export function   fn0: (x0: V0, x1: V1) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
export function   fn0: (x0: V0, x1: V1, x2: V2) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
export function   fn0: () => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9): () => T9;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
export function   fn0: (x0: V0) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9): (x0: V0) => T9;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
export function   fn0: (x0: V0, x1: V1) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
export function   fn0: (x0: V0, x1: V1, x2: V2) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
export function   fn0: () => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9,
export function   fn9: (x: T9) => T10): () => T10;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
export function   fn0: (x0: V0) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9,
export function   fn9: (x: T9) => T10): (x0: V0) => T10;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
export function   fn0: (x0: V0, x1: V1) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9,
export function   fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
export function   fn0: (x0: V0, x1: V1, x2: V2) => T1,
export function   fn1: (x: T1) => T2,
export function   fn2: (x: T2) => T3,
export function   fn3: (x: T3) => T4,
export function   fn4: (x: T4) => T5,
export function   fn5: (x: T5) => T6,
export function   fn6: (x: T6) => T7,
export function   fn7: (x: T7) => T8,
export function   fn8: (x: T8) => T9,
export function   fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;

// SINGLE_MARKER
export function pluck<T>(property: number, arr: ReadonlyArray<T>): T;
export function pluck<K extends keyof T, T>(property: K, arr: ReadonlyArray<T>): Array<T[K]>;
export function pluck(property: number): <T>(arr: ReadonlyArray<T>) => T;
export function pluck<P extends string>(property: P): <T>(arr: ReadonlyArray<Record<P, T>>) => T[];

// SINGLE_MARKER
export function prepend<T>(x: T, arr: ReadonlyArray<T>): T[];
export function prepend<T>(x: T): (arr: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function product(list: ReadonlyArray<number>): number;

// SINGLE_MARKER
export function prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;

// SINGLE_MARKER
export function propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
export function propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
export function propEq(propToFind: string | number): {
export function   <T>(valueToMatch: T, obj: any): boolean;
export function   <T>(valueToMatch: T): (obj: any) => boolean;
export function };

// SINGLE_MARKER
export function propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
export function propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

// SINGLE_MARKER
export function propOr<T, U, V>(val: T, p: string, obj: U): V;
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

// SINGLE_MARKER
export function range(start: number, end: number): number[];
export function range(start: number): (end: number) => number[];

// SINGLE_MARKER
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

// SINGLE_MARKER
export function reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
export function reject<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
export function reject<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
export function reject<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

// SINGLE_MARKER
export function repeat<T>(a: T, n: number): T[];
export function repeat<T>(a: T): (n: number) => T[];

// SINGLE_MARKER
export function replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
export function replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
export function replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;

// SINGLE_MARKER
export function reverse<T>(list: ReadonlyArray<T>): T[];
export function reverse(str: string): string;

// SINGLE_MARKER
export function slice(a: number, b: number, list: string): string;
export function slice<T>(a: number, b: number, list: T[]): T[];
export function slice(a: number, b: number): {
export function export function (list: string): string;
export function export function <T>(list: T[]): T[];
export function };
export function slice(a: number): {
export function export function (b: number, list: string): string;
export function export function <T>(b: number, list: T[]): T[];
export function };

// SINGLE_MARKER
export function sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[];
export function sort<T>(sortFn: (a: T, b: T) => number): (arr: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[];
export function sortBy(sortFn: (a: any) => Ord): <T>(arr: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];

// SINGLE_MARKER
export function splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
export function splitEvery(a: number, list: string): string[];
export function splitEvery(a: number): {
export function   (list: string): string[];
export function   <T>(list: ReadonlyArray<T>): T[][];
export function };

// SINGLE_MARKER
export function startsWith(a: string, list: string): boolean;
export function startsWith(a: string): (list: string) => boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
export function startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

// SINGLE_MARKER
export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;

// SINGLE_MARKER
export function sum(list: ReadonlyArray<number>): number;

// SINGLE_MARKER
export function symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function T(): boolean;

// SINGLE_MARKER
export function tail<T>(arrOrStr: ReadonlyArray<T>): T[];
export function tail(arrOrStr: string): string;

// SINGLE_MARKER
export function take<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
export function take(num: number, arrOrStr: string): string;
export function take<T>(num: number): {
export function   (arrOrStr: string): string;
export function   (arrOrStr: ReadonlyArray<T>): T[];
export function };

// SINGLE_MARKER
export function takeLast<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
export function takeLast(num: number, arrOrStr: string): string;
export function takeLast(num: number): {
export function   <T>(arrOrStr: ReadonlyArray<T>): T[];
export function   (arrOrStr: string): string;
export function };

// SINGLE_MARKER
export function tap<T>(fn: (a: T) => any, value: T): T;
export function tap<T>(fn: (a: T) => any): (value: T) => T;

// SINGLE_MARKER
export function test(regExpression: RegExp): (str: string) => boolean;
export function test(regExpression: RegExp, str: string): boolean;

// SINGLE_MARKER
export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

// SINGLE_MARKER
export function transpose<T>(list: T[][]): T[][];

// SINGLE_MARKER
export function toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

// SINGLE_MARKER
export function toLower(str: string): string;

// SINGLE_MARKER
export function toString<T>(val: T): string;

// SINGLE_MARKER
export function toUpper(str: string): string;

// SINGLE_MARKER
export function trim(str: string): string;

// SINGLE_MARKER
export function type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

// SINGLE_MARKER
export function uniq<T>(arr: ReadonlyArray<T>): T[];

// SINGLE_MARKER
export function uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[];
export function uniqWith<T, U>(fn: (x: T, y: T) => boolean): (  arr: ReadonlyArray<T>) => T[];
export function 
// SINGLE_MARKER
export function update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
export function update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

// SINGLE_MARKER
export function values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

// SINGLE_MARKER
export function without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
export function without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
export function 
// SINGLE_MARKER
export function xor(a: boolean, b:boolean): boolean
export function xor(a: boolean): (b:boolean) => boolean

// SINGLE_MARKER
export function zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
export function zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

// SINGLE_MARKER
export function zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
export function zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
// SINGLE_MARKER
  }
}

export = R;
export as namespace R;

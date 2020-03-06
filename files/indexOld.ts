    
  

    // SINGLE_MARKER
    dissoc<T>(prop: string, obj: any): T;
    dissoc(prop: string): <U>(obj: any) => U;

    // SINGLE_MARKER
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    // SINGLE_MARKER
    drop<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
    drop(howManyToDrop: number, arrOrStr: string): string;
    drop<T>(howManyToDrop: number): {
      (arrOrStr: string): string;
      (arrOrStr: ReadonlyArray<T>): T[];
    };

    // SINGLE_MARKER
    dropLast<T>(howManyToDrop: number, arrOrStr: ReadonlyArray<T>): T[];
    dropLast(howManyToDrop: number, arrOrStr: string): string;
    dropLast<T>(howManyToDrop: number): {
      (arrOrStr: ReadonlyArray<T>): T[];
      (arrOrStr: string): string;
    };

    // SINGLE_MARKER
    endsWith(a: string, list: string): boolean;
    endsWith(a: string): (list: string) => boolean;
    endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    equals<T>(a: T, b: T): boolean;
    equals<T>(a: T): (b: T) => boolean;

    
    // SINGLE_MARKER
    F(): boolean;

    // SINGLE_MARKER
    filter<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
    filter<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
    filter<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
    filter<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

    // SINGLE_MARKER
    find<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): T | undefined;
    find<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => T | undefined;

    // SINGLE_MARKER
    findIndex<T>(findFn: (a: T) => boolean, arr: ReadonlyArray<T>): number;
    findIndex<T>(findFn: (a: T) => boolean): (arr: ReadonlyArray<T>) => number;

    // SINGLE_MARKER
    findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
    findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

    // SINGLE_MARKER
    findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
    findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

    // SINGLE_MARKER
    flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

    // SINGLE_MARKER
    flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;

    // SINGLE_MARKER
    forEach<T>(fn: (x: T) => void, list: T[]): T[];
    forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
    forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
    forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

    // SINGLE_MARKER
    fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
    fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

    // SINGLE_MARKER
    groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
    groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

    // SINGLE_MARKER
    has(prop: string): <T>(obj: T) => boolean;

    // SINGLE_MARKER
    groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

    // SINGLE_MARKER
    head<T>(arrOrStr: Array<T>): T | undefined;
    head(arrOrStr: string): string;

    // SINGLE_MARKER
    identical<T>(a: T, b: T): boolean;
    identical<T>(a: T): (b: T) => boolean;

    // SINGLE_MARKER
    identity<T>(x: T): T;

    // SINGLE_MARKER
    ifElse(condition: Pred, ifFn: Arity1Fn, elseFn: Arity1Fn): Arity1Fn;
    ifElse(condition: Pred, ifFn: Arity2Fn, elseFn: Arity2Fn): Arity2Fn;

    // SINGLE_MARKER
    inc(n: number): number;

    // SINGLE_MARKER
    includes(valueToFind: string, input: ReadonlyArray<string> | string): boolean;
    includes(valueToFind: string): (input: ReadonlyArray<string> | string) => boolean;
    includes<T>(valueToFind: T, input: ReadonlyArray<T>): boolean;
    includes<T>(valueToFind: T): (input: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    indexBy<T>(condition: (a: T) => string, arr: ReadonlyArray<T>): { [key: string]: T };
    indexBy<T>(condition: string, arr: ReadonlyArray<T>): { [key: string]: T };
    indexBy<T>(condition: (a: T) => string): (arr: ReadonlyArray<T>) => { [key: string]: T };
    indexBy<T>(condition: string): (arr: ReadonlyArray<T>) => { [key: string]: T };

    // SINGLE_MARKER
    indexOf<T>(target: T, arr: ReadonlyArray<T>): number;
    indexOf<T>(target: T): (arr: ReadonlyArray<T>) => number;

    // SINGLE_MARKER
    init<T>(arrOrStr: ReadonlyArray<T>): T[];
    init(arrOrStr: string): string;

    // SINGLE_MARKER
    intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
    intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

    
    // SINGLE_MARKER
    intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    is(xPrototype: any, x: any): boolean;
    is(xPrototype: any): (x: any) => boolean;

    // SINGLE_MARKER
    isEmpty<T>(input: T): boolean;

    // SINGLE_MARKER
    isNil(x: any): x is null | undefined;

    // SINGLE_MARKER
    join(x: string, xs: ReadonlyArray<any>): string;
    join(x: string): (xs: ReadonlyArray<any>) => string;

    // SINGLE_MARKER
    keys<T extends object>(x: T): Array<keyof T>;
    keys<T>(x: T): string[];

    // SINGLE_MARKER
    last<T>(arrOrStr: Array<T>): T | undefined;
    last(arrOrStr: string): string;

    // SINGLE_MARKER
    lastIndexOf<T>(x: T, arr: ReadonlyArray<T>): number;

    // SINGLE_MARKER
    length<T>(list: ReadonlyArray<T>): number;

    // SINGLE_MARKER
    lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
    lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
    
    // SINGLE_MARKER
    lensIndex(n: number): Lens;
    lensPath(path: RamdaPath): Lens;

    // SINGLE_MARKER
    lensProp(str: string): {
        <T, U>(obj: T): U;
        set<T, U, V>(val: T, obj: U): V;
    };

    // SINGLE_MARKER
    over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
    over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
    over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
    over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
    over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
    over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];

    // SINGLE_MARKER
    set<T, U>(lens: Lens, a: U, obj: T): T;
    set<U>(lens: Lens, a: U): <T>(obj: T) => T;
    set(lens: Lens): <T, U>(a: U, obj: T) => T;
    
    // SINGLE_MARKER
    view<T, U>(lens: Lens): (obj: T) => U;
    view<T, U>(lens: Lens, obj: T): U;

    // SINGLE_MARKER
    map<T, U>(mapFn: MapFunctionObject<T, U>, x: Dictionary<T>): Dictionary<U>;
    map<T, U, S>(mapFn: MapFunctionObject<T, U>): (x: Dictionary<T>) => Dictionary<U>;
    map<T, U>(mapFn: MapFunctionArray<T, U>, x: T[]): U[];
    map<T, U>(mapFn: MapFunctionArray<T, U>): (x: T[]) => U[];
    map<T>(mapFn: MapFunctionArray<T, T>): (x: T[]) => T[];
    map<T>(mapFn: MapFunctionArray<T, T>, x: ReadonlyArray<T>): T[];

    // SINGLE_MARKER
    match(regexp: RegExp, str: string): any[];
    match(regexp: RegExp): (str: string) => any[];

    // SINGLE_MARKER
    max<T extends Ord>(a: T, b: T): T;
    max<T extends Ord>(a: T): (b: T) => T;

    // SINGLE_MARKER
    maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    maxBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    // SINGLE_MARKER
    mean(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    median(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
    merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

    // SINGLE_MARKER
    min<T extends Ord>(a: T, b: T): T;
    min<T extends Ord>(a: T): (b: T) => T;

    // SINGLE_MARKER
    minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    minBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    // SINGLE_MARKER
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;

    // SINGLE_MARKER
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

    // SINGLE_MARKER
    negate(a: number): number;

    // SINGLE_MARKER
    none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    not(x: any): boolean;

    // SINGLE_MARKER
    nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
    nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

    // SINGLE_MARKER
    omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
    omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
    omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;

    // SINGLE_MARKER
    partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;

    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;

    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;

    partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

    // SINGLE_MARKER
    partialCurry<Input, PartialInput, Output>(
      fn: (input: Input) => Output,
      partialInput: PartialInput,
    ): (
        input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>,
      ) => Output;


    // SINGLE_MARKER
    path<Input, T>(pathToSearch: string | string[], obj: Input): T | undefined;
    path<T>(pathToSearch: string | string[], obj: any): T | undefined;
    path<T>(pathToSearch: string | string[]): (obj: any) => T | undefined;
    path<Input, T>(pathToSearch: string | string[]): (obj: Input) => T | undefined;
    
    // SINGLE_MARKER
    paths<Input, T>(pathsToSearch: Array<string | string[]>, obj: Input): Array<T | undefined>;
    paths<T>(pathsToSearch: Array<string | string[]>, obj: any): Array<T | undefined>;
    paths<T>(pathsToSearch: Array<string | string[]>): (obj: any) => Array<T | undefined>;
    paths<Input, T>(pathsToSearch: Array<string | string[]>): (obj: Input) => Array<T | undefined>;

    // SINGLE_MARKER
    pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
    pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
    pathOr<T>(defaultValue: T): F.Curry<(a: Path, b: any) => T>;

    // SINGLE_MARKER
    pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
    pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
    pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;

    // SINGLE_MARKER
    pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
    pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

    // SINGLE_MARKER
    pipe<T1>(fn0: () => T1): () => T1;
    pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
    pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
    pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    pipe<T1, T2>(fn0: () => T1, fn1: (x: T1) => T2): () => T2;
    pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
    pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
    pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

    pipe<T1, T2, T3>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): () => T3;
    pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
    pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
    pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

    pipe<T1, T2, T3, T4>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): () => T4;
    pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
    pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
    pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

    pipe<T1, T2, T3, T4, T5>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): () => T5;
    pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
    pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

    pipe<T1, T2, T3, T4, T5, T6>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): () => T6;
    pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

    pipe<T1, T2, T3, T4, T5, T6, T7>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn: (x: T6) => T7): () => T7;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn: (x: T6) => T7): (x: V0) => T7;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn: (x: T7) => T8): () => T8;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn: (x: T7) => T8): (x: V0) => T8;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): () => T9;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0) => T9;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
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
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
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
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
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
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
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

    // SINGLE_MARKER
    pluck<T>(property: number, arr: ReadonlyArray<T>): T;
    pluck<K extends keyof T, T>(property: K, arr: ReadonlyArray<T>): Array<T[K]>;
    pluck(property: number): <T>(arr: ReadonlyArray<T>) => T;
    pluck<P extends string>(property: P): <T>(arr: ReadonlyArray<Record<P, T>>) => T[];

    // SINGLE_MARKER
    prepend<T>(x: T, arr: ReadonlyArray<T>): T[];
    prepend<T>(x: T): (arr: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    product(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    prop<P extends keyof T, T>(propToFind: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(propToFind: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (propToFind: Record<P, T>) => T;

    // SINGLE_MARKER
    propEq<T>(propToFind: string | number, valueToMatch: T, obj: any): boolean;
    propEq<T>(propToFind: string | number, valueToMatch: T): (obj: any) => boolean;
    propEq(propToFind: string | number): {
      <T>(valueToMatch: T, obj: any): boolean;
      <T>(valueToMatch: T): (obj: any) => boolean;
    };

    // SINGLE_MARKER
    propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
    propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

    // SINGLE_MARKER
    propOr<T, U, V>(val: T, p: string, obj: U): V;
    propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
    propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

    // SINGLE_MARKER
    range(start: number, end: number): number[];
    range(start: number): (end: number) => number[];

    // SINGLE_MARKER
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

    // SINGLE_MARKER
    reject<T>(filterFn: FilterFunctionArray<T>): (x: T[]) => T[];
    reject<T>(filterFn: FilterFunctionArray<T>, x: T[]): T[];
    reject<T, U>(filterFn: FilterFunctionObject<T>): (x: Dictionary<T>) => Dictionary<T>;
    reject<T>(filterFn: FilterFunctionObject<T>, x: Dictionary<T>): Dictionary<T>;

    // SINGLE_MARKER
    repeat<T>(a: T, n: number): T[];
    repeat<T>(a: T): (n: number) => T[];

    // SINGLE_MARKER
    replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
    replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
    replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;

    // SINGLE_MARKER
    reverse<T>(list: ReadonlyArray<T>): T[];
    reverse(str: string): string;

    // SINGLE_MARKER
    slice(a: number, b: number, list: string): string;
    slice<T>(a: number, b: number, list: T[]): T[];
    slice(a: number, b: number): {
        (list: string): string;
        <T>(list: T[]): T[];
    };
    slice(a: number): {
        (b: number, list: string): string;
        <T>(b: number, list: T[]): T[];
    };

    // SINGLE_MARKER
    sort<T>(sortFn: (a: T, b: T) => number, arr: ReadonlyArray<T>): T[];
    sort<T>(sortFn: (a: T, b: T) => number): (arr: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    sortBy<T>(sortFn: (a: T) => Ord, arr: ReadonlyArray<T>): T[];
    sortBy(sortFn: (a: any) => Ord): <T>(arr: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    split(sep: string | RegExp): (str: string) => string[];
    split(sep: string | RegExp, str: string): string[];

    // SINGLE_MARKER
    splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
    splitEvery(a: number, list: string): string[];
    splitEvery(a: number): {
      (list: string): string[];
      <T>(list: ReadonlyArray<T>): T[][];
    };

    // SINGLE_MARKER
    startsWith(a: string, list: string): boolean;
    startsWith(a: string): (list: string) => boolean;
    startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    // SINGLE_MARKER
    sum(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    T(): boolean;

    // SINGLE_MARKER
    tail<T>(arrOrStr: ReadonlyArray<T>): T[];
    tail(arrOrStr: string): string;

    // SINGLE_MARKER
    take<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
    take(num: number, arrOrStr: string): string;
    take<T>(num: number): {
      (arrOrStr: string): string;
      (arrOrStr: ReadonlyArray<T>): T[];
    };

    // SINGLE_MARKER
    takeLast<T>(num: number, arrOrStr: ReadonlyArray<T>): T[];
    takeLast(num: number, arrOrStr: string): string;
    takeLast(num: number): {
      <T>(arrOrStr: ReadonlyArray<T>): T[];
      (arrOrStr: string): string;
    };

    // SINGLE_MARKER
    tap<T>(fn: (a: T) => any, value: T): T;
    tap<T>(fn: (a: T) => any): (value: T) => T;

    // SINGLE_MARKER
    test(regExpression: RegExp): (str: string) => boolean;
    test(regExpression: RegExp, str: string): boolean;

    // SINGLE_MARKER
    times<T>(fn: (i: number) => T, n: number): T[];
    times<T>(fn: (i: number) => T): (n: number) => T[];

    // SINGLE_MARKER
    transpose<T>(list: T[][]): T[][];

    // SINGLE_MARKER
    toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

    // SINGLE_MARKER
    toLower(str: string): string;

    // SINGLE_MARKER
    toString<T>(val: T): string;

    // SINGLE_MARKER
    toUpper(str: string): string;

    // SINGLE_MARKER
    trim(str: string): string;

    // SINGLE_MARKER
    type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

    // SINGLE_MARKER
    uniq<T>(arr: ReadonlyArray<T>): T[];

    // SINGLE_MARKER
    uniqWith<T, U>(fn: (x: T, y: T) => boolean, arr: ReadonlyArray<T>): T[];
    uniqWith<T, U>(fn: (x: T, y: T) => boolean): (  arr: ReadonlyArray<T>) => T[];
    
    // SINGLE_MARKER
    update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
    update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

    // SINGLE_MARKER
    without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    
    // SINGLE_MARKER
    xor(a: boolean, b:boolean): boolean
    xor(a: boolean): (b:boolean) => boolean

    // SINGLE_MARKER
    zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
    zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

    // SINGLE_MARKER
    zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
    zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
    // SINGLE_MARKER
  }
}

export = R;
export as namespace R;

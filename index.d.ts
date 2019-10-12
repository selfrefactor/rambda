import { F } from "./_ts-toolbelt/src/index";
declare let R: R.Static;

declare namespace R {
  type FilterFunctionArray<T> = (x: T, index: number) => boolean
  type FilterFunctionObject<T> = (x: T, prop: string, inputObj: Dictionary<T>) => boolean
  type MapFunctionObject<T, U> = (x: T, prop: string, inputObj: Dictionary<T>) => U
  type MapFunctionArray<T, U> = (x: T, index: number) => U

  type SimplePredicate<T> = (x: T) => boolean

  type CommonKeys<T1, T2> = keyof T1 & keyof T2;

  type Ord = number | string | boolean | Date;

  type Path = ReadonlyArray<(number | string)>;

  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
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

  interface Static {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number): (b: number) => number;
    add(a: string): (b: string) => string;

    adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
    adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

    all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    all<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;
    
    allPass<T>(predicates: Array<(x: T) => boolean>) : (input: T) => boolean

    always<T>(val: T): () => T;

    any<T>(fn: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
    any<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;

    append<T>(el: T, list: ReadonlyArray<T>): T[];
    append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

    /**
     * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
     */
    assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
    assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;

    /**
     * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
     * placing the specific value at the tail end of that path.
     */
    assocPath<T, U>(path: Path, val: T, obj: U): U;
    assocPath<T, U>(path: Path, val: T): (obj: U) => U;
    assocPath<T, U>(path: Path): F.Curry<(a: T, b: U) => U>;

    /*
      Creates new predicate from two predicates
    */
    both(pred1: Pred, pred2: Pred): Pred;
    both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
    both<T>(pred1: Predicate<T>) : (pred2: Predicate<T>) => Predicate<T>;
    both(pred1: Pred): (pred2: Pred) => Pred;

    either(pred1: Pred, pred2: Pred): Pred;
    either(pred1: Pred): (pred2: Pred) => Pred;

    clone<T>(value: T): T;
    clone<T>(value: ReadonlyArray<T>): T[];

    /*
      Creates a new function that returns opposite result of the given predicate
    */
    complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

    /**
     * Performs right-to-left function composition.
     */
    compose<T1>(fn0: () => T1): () => T1;
    compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
    compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
    compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2;
    compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
    compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
    compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

    compose<T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T3;
    compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
    compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
    compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

    compose<T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T4;
    compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
    compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
    compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

    compose<T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T5;
    compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
    compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
    compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

    compose<T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T6;
    compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
    compose<V0, V1, T1, T2, T3, T4, T5, T6>(
        fn5: (x: T5) => T6,
        fn4: (x: T4) => T5,
        fn3: (x: T3) => T4,
        fn2: (x: T2) => T3,
        fn1: (x: T1) => T2,
        fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
    compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
        fn5: (x: T5) => T6,
        fn4: (x: T4) => T5,
        fn3: (x: T3) => T4,
        fn2: (x: T2) => T3,
        fn1: (x: T1) => T2,
        fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;

    /**
     * Creates new list with elements of the first list 
     * followed by the elements of the second
     */
    concat<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    concat<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    concat(list1: string, list2: string): string;
    concat(list1: string): (list2: string) => string;

    /**
     * Returns a curried equivalent of the provided function.
     */
    curry<F extends (...args: any) => any>(f: F): F.Curry<F>;

    /**
     * Decrements its argument.
     */
    dec(n: number): number;

    defaultTo<T>(a: T): (...rest: Array<T | null | undefined>) => T;
    defaultTo<T>(a: T, ...rest: Array<T | null | undefined>): T;
    defaultTo<T,U>(a: T|U, ...rest: Array<T|U | null | undefined>): T|U;

    /**
     * Finds all elements(without duplicates)
     * in the first list not contained in the second list
     */
    difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    /*
     * Returns a new object that does not contain specified property
     */
    dissoc<T>(prop: string, obj: any): T;
    dissoc(prop: string): <U>(obj: any) => U;

    /**
     * Divides two numbers. Equivalent to a / b.
     */
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    /**
     * Returns a new list/string containing all but the first n elements of the given list/string
     */
    drop<T>(n: number, xs: ReadonlyArray<T>): T[];
    drop(n: number, xs: string): string;
    drop<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    /**
     * Returns a list containing all but the last n elements of the given list.
     */
    dropLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    dropLast(n: number, xs: string): string;
    dropLast<T>(n: number): {
      (xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    /**
     * Checks if a list ends with the provided values
     */
    endsWith(a: string, list: string): boolean;
    endsWith(a: string): (list: string) => boolean;
    endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    /**
     * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
     * Handles cyclical data structures.
     */
    equals<T>(a: T, b: T): boolean;
    equals<T>(a: T): (b: T) => boolean;

    /*
     * A function that always returns false. Any passed in parameters are ignored.
     */
    F(): boolean;

    filter<T>(fn: FilterFunctionArray<T>) : (list: T[]) => T[]
    filter<T>(fn: FilterFunctionArray<T>, list: T[]): T[]
    filter<T,U>(fn: FilterFunctionObject<T>): (obj: Dictionary<T>) =>Dictionary<T>
    filter<T>(fn: FilterFunctionObject<T>, obj: Dictionary<T>): Dictionary<T>

    /**
     * Returns the first element of the list which matches the predicate, or `undefined` if no
     * element matches.
     */
    find<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
    find<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

    /**
     * Returns the index of the first element of the list which matches the predicate, or `-1`
     * if no element matches.
     */
    findIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
    findIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

    /**
     * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
     * them in a new array, depth-first.
     */
    flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

    /**
     * Returns a new function much like the supplied one, except that the first two arguments'
     * order is reversed.
     */
    flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
    flip<T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult;

    /**
     * Iterate over an input list, calling a provided function fn for each element in the list.
     */
    forEach<T>(fn: (x: T) => void, list: T[]): T[];
    forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
    forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
    forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

    /**
     * Creates a new object out of a list key-value pairs.
     */
    fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
    fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

    /**
     * Splits a list into sublists stored in an object, based on the result of
     * calling a String-returning function
     * on each element, and grouping the results according to values returned.
     */
    groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
    groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

    /**
     * Returns whether or not an object has an own property with the specified name.
     */
    has<T>(s: string, obj: T): boolean;
    has(s: string): <T>(obj: T) => boolean;

    groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

    /**
     * Returns the first element in a list.
     * In some libraries this function is named `first`.
     */
    head<T extends Readonly<any> | string>(list: T): T extends string ? string : (T[0] | undefined);

    /**
     * Returns true if its arguments are identical, false otherwise. Values are
     * identical if they reference the same memory. `NaN` is identical to `NaN`;
     * `0` and `-0` are not identical.
     *
     * Note this is merely a curried version of ES6 `Object.is`.
     */
    identical<T>(a: T, b: T): boolean;
    identical<T>(a: T): (b: T) => boolean;

    /**
     * A function that does nothing but return the parameter supplied to it.
     */
    identity<T>(a: T): T;

    /**
     * Creates a function that will process either the onTrue or the onFalse function depending upon the result
     * of the condition predicate.
     */
    ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
    ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

    /**
     * Increments its argument.
     */
    inc(n: number): number;

    /**
     * Given a target, this function checks a list for the target and returns a boolean.
     * Given a string, this function checks for the string in another string or list and returns
     * a boolean.
     */
    includes(s: string, list: ReadonlyArray<string> | string): boolean;
    includes(s: string): (list: ReadonlyArray<string> | string)  => boolean;
    includes<T>(target: T, list: ReadonlyArray<T>): boolean;
    includes<T>(target: T): (list: ReadonlyArray<T>) => boolean;

    /**
     * Given a function that generates a key, turns a list of objects into an object indexing the objects
     * by the given key.
     */
    indexBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
    indexBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };

    /**
     * Returns the position of the first occurrence of an item in an array
     * (by strict equality),
     * or -1 if the item is not included in the array.
     */
    indexOf<T>(target: T, list: ReadonlyArray<T>): number;
    indexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

    /**
     * Returns all but the last element of a list or string.
     */
    init<T>(list: ReadonlyArray<T>): T[];
    init(list: string): string;

    /**
     * Creates a new list with the separator interposed between elements.
     */
    intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
    intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

    /*
     * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
     */
    intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];


    /**
     * See if an object (`val`) is an instance of the supplied constructor.
     * This function will check up the inheritance chain, if any.
     */
    is(ctor: any, val: any): boolean;
    is(ctor: any): (val: any) => boolean;

    /**
     * Reports whether the list has zero elements.
     */
    isEmpty(value: any): boolean;

    /**
     * Checks if the input value is null or undefined.
     */
    isNil(value: any): value is null | undefined;

    /**
     * Returns a string made by inserting the `separator` between each
     * element and concatenating all the elements into a single string.
     */
    join(x: string, xs: ReadonlyArray<any>): string;
    join(x: string): (xs: ReadonlyArray<any>) => string;

    /**
     * Returns a list containing the names of all the enumerable own
     * properties of the supplied object.
     */
    keys<T extends object>(x: T): Array<keyof T>;
    keys<T>(x: T): string[];

    /**
     * Returns the last element from a list.
     */
    last<T>(list: ReadonlyArray<T>): T | undefined;
    last(list: string): string;

    /**
     * Returns the position of the last occurrence of an item (by strict equality) in
     * an array, or -1 if the item is not included in the array.
     */
    lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;

    length<T>(list: ReadonlyArray<T>): number;

    map<T, U>(fn: MapFunctionObject<T,U>, obj: Dictionary<T>): Dictionary<U>;
    map<T, U, S>(fn: MapFunctionObject<T,U>): (obj: Dictionary<T>) => Dictionary<U>;
    
    map<T, U>(fn: MapFunctionArray<T,U>, list: Array<T>): U[];
    map<T, U>(fn: MapFunctionArray<T,U>) : (list: Array<T>) => U[];
    map<T>(fn: MapFunctionArray<T,T>) : (list: Array<T>) => T[];
    map<T>(fn: MapFunctionArray<T,T>, list: ReadonlyArray<T>): T[];
    /**
     * Tests a regular expression agains a String
     */
    match(regexp: RegExp, str: string): any[];
    match(regexp: RegExp): (str: string) => any[];

    /**
     * Returns the larger of its two arguments.
     */
    max<T extends Ord>(a: T, b: T): T;
    max<T extends Ord>(a: T): (b: T) => T;

    /**
     * Takes a function and two values, and returns whichever value produces
     * the larger result when passed to the provided function.
     */
    maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    maxBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    /**
     * Returns the mean of the given list of numbers.
     */
    mean(list: ReadonlyArray<number>): number;

    /**
     * Returns the median of the given list of numbers.
     */
    median(list: ReadonlyArray<number>): number;

    /**
     * Create a new object with the own properties of a
     * merged with the own properties of object b.
     * This function will *not* mutate passed-in objects.
     *
     * @deprecated since 0.26 in favor of mergeRight
     */
    merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
    merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

    /**
     * Returns the smaller of its two arguments.
     */
    min<T extends Ord>(a: T, b: T): T;
    min<T extends Ord>(a: T): (b: T) => T;

    /**
     * Takes a function and two values, and returns whichever value produces
     * the smaller result when passed to the provided function.
     */
    minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    minBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    /**
     * Divides the second parameter by the first and returns the remainder.
     * The flipped version (`moduloBy`) may be more useful curried.
     * Note that this functions preserves the JavaScript-style behavior for
     * modulo. For mathematical modulo see `mathMod`
     */
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;

    /**
     * Multiplies two numbers. Equivalent to a * b but curried.
     */
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

    /**
     * Negates its argument.
     */
    negate(a: number): number;

    /**
     * Returns true if no elements of the list match the predicate, false otherwise.
     */
    none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    /**
     * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
     * underlying function would return a false-y value, and `false` when it would return a truth-y one.
     */
    not(value: any): boolean;

    /**
     * Returns the nth element in a list.
     */
    nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
    nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

    /**
     * Returns a partial copy of an object omitting the keys specified.
     */
    omit<T>(propsToOmit: string|string[], obj: Dictionary<T>): Dictionary<T>;
    omit<T>(propsToOmit: string|string[]): (obj: Dictionary<T>) => Dictionary<T>;
    omit<T,U>(propsToOmit: string|string[], obj: Dictionary<T>): U;
    omit<T,U>(propsToOmit: string|string[]): (obj: Dictionary<T>) => U;
    
    /**
     * Takes a function `f` and a list of arguments, and returns a function `g`.
     * When applied, `g` returns the result of applying `f` to the arguments
     * provided initially followed by the arguments provided to `g`.
     */
    partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;

    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;

    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;

    partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

    /*
      It accept function(that accept object as input), partial arguments 
      and returns a new curried function
    */
    partialCurry<Input, PartialInput, Output>(
      fn: (input: Input) => Output,
      partialInput: PartialInput
    ) : (
      input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>
    ) => Output

    /**
     * Retrieve the value at a given path.
     */
    path<T>(path: Path, obj: any): T | undefined;
    path<T>(path: Path): (obj: any) => T | undefined;

    /**
     * If the given, non-null object has a value at the given path, returns the value at that path.
     * Otherwise returns the provided default value.
     */
    pathOr<T>(defaultValue: T, path: Path, obj: any): any;
    pathOr<T>(defaultValue: T, path: Path): (obj: any) => any;
    pathOr<T>(defaultValue: T): F.Curry<(a: Path, b: any) => any>;

    /**
     * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
     * property is ignored.
     */
    pick<T>(propsToPick: string|string[], obj: Dictionary<T>): Dictionary<T>;
    pick<T>(propsToPick: string|string[]): (obj: Dictionary<T>) => Dictionary<T>;
    pick<T,U>(propsToPick: string|string[], obj: Dictionary<T>): U;
    pick<T,U>(propsToPick: string|string[]): (obj: Dictionary<T>) => U;

    /**
     * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
     */
    pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
    pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

    /**
     * Creates a new function that runs each of the functions supplied as parameters in turn,
     * passing the return value of each function invocation to the next function invocation,
     * beginning with whatever arguments were passed to the initial invocation.
     */
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

    /**
     * Returns a new list by plucking the same named property off all objects in the list supplied.
     */
    pluck<K extends keyof T, T>(p: K, list: ReadonlyArray<T>): Array<T[K]>;
    pluck<T>(p: number, list: ReadonlyArray<{ [k: number]: T }>): T[];
    pluck<P extends string>(p: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
    pluck(p: number): <T>(list: ReadonlyArray<{ [k: number]: T }>) => T[];

    /**
     * Returns a new list with the given element at the front, followed by the contents of the
     * list.
     */
    prepend<T>(el: T, list: ReadonlyArray<T>): T[];
    prepend<T>(el: T): (list: ReadonlyArray<T>) => T[];

    /**
     * Multiplies together all the elements of a list.
     */
    product(list: ReadonlyArray<number>): number;

    /**
     * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
     */
    prop<P extends keyof T, T>(p: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

    /**
     * Determines whether the given property of an object has a specific
     * value according to strict equality (`===`).  Most likely used to
     * filter a list.
     */
    propEq<T>(name: string | number, val: T, obj: any): boolean;
    propEq<T>(name: string | number, val: T): (obj: any) => boolean;
    propEq(name: string | number): {
      <T>(val: T, obj: any): boolean;
      <T>(val: T): (obj: any) => boolean;
    };

    /**
     * Returns true if the specified object property is of the given type; false otherwise.
     */
    propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
    propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

    /**
     * If the given, non-null object has an own property with the specified name, returns the value of that property.
     * Otherwise returns the provided default value.
     */
    propOr<T, U, V>(val: T, p: string, obj: U): V;
    propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
    propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

    /**
     * Returns a list of numbers from `from` (inclusive) to `to`
     * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
     * the half-open interval `[a, b)`.
     */
    range(from: number, to: number): number[];
    range(from: number): (to: number) => number[];

    /**
     * Returns a single item by iterating through the list, successively calling the iterator
     * function and passing it an accumulator value and the current value from the array, and
     * then passing the result to the next call.
     */
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

    /**
     * Similar to `filter`, except that it keeps only values for which the given predicate
     * function returns falsy.
     */
    reject<T>(fn: FilterFunctionArray<T>) : (list: T[]) => T[]
    reject<T>(fn: FilterFunctionArray<T>, list: T[]): T[]

    /**
     * Returns a fixed list of size n containing a specified identical value.
     */
    repeat<T>(a: T, n: number): T[];
    repeat<T>(a: T): (n: number) => T[];

    /**
     * Replace a substring or regex match in a string with a replacement.
     */
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string), str: string): string;
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string)): (str: string) => string;
    replace(pattern: RegExp | string): (replacement: string | ((match: string, ...args: any[]) => string)) => (str: string) => string;

    /**
     * Returns a new list with the same elements as the original list, just in the reverse order.
     */
    reverse<T>(list: ReadonlyArray<T>): T[];
    /**
     * Returns a new string with the characters in reverse order.
     */
    reverse(str: string): string;

    /**
     * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
     * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
     * if they are equal.
     */
    sort<T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    sort<T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

    /**
     * Sorts the list according to a key generated by the supplied function.
     */
    sortBy<T>(fn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
    sortBy(fn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];

    /**
     * Splits a string into an array of strings based on the given
     * separator.
     */
    split(sep: string | RegExp): (str: string) => string[];
    split(sep: string | RegExp, str: string): string[];

    /**
     * Splits a collection into slices of the specified length.
     */
    splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
    splitEvery(a: number, list: string): string[];
    splitEvery(a: number): {
      (list: string): string[];
      <T>(list: ReadonlyArray<T>): T[][];
    };

    /**
     * Checks if a list starts with the provided values
     */
    startsWith(a: string, list: string): boolean;
    startsWith(a: string): (list: string) => boolean;
    startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    /**
     * Subtracts two numbers. Equivalent to `a - b` but curried.
     */
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    /**
     * Adds together all the elements of a list.
     */
    sum(list: ReadonlyArray<number>): number;

    /**
     * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
     */
    symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

    /**
     * A function that always returns true. Any passed in parameters are ignored.
     */
    T(): boolean;

    /**
     * Returns all but the first element of a list or string.
     */
    tail<T>(list: ReadonlyArray<T>): T[];
    tail(list: string): string;

    /**
     * Returns a new list containing the first `n` elements of the given list.  If
     * `n > * list.length`, returns a list of `list.length` elements.
     */
    take<T>(n: number, xs: ReadonlyArray<T>): T[];
    take(n: number, xs: string): string;
    take<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    /**
     * Returns a new list containing the last n elements of the given list. If n > list.length,
     * returns a list of list.length elements.
     */
    takeLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    takeLast(n: number, xs: string): string;
    takeLast(n: number): {
      <T>(xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    /**
     * The function to call with x. The return value of fn will be thrown away.
     */
    tap<T>(fn: (a: T) => any, value: T): T;
    tap<T>(fn: (a: T) => any): (value: T) => T;

    /**
     * Determines whether a given string matches a given regular expression.
     */
    test(regexp: RegExp): (str: string) => boolean;
    test(regexp: RegExp, str: string): boolean;

    /**
     * Calls an input function `n` times, returning an array containing the results of those
     * function calls.
     */
    times<T>(fn: (i: number) => T, n: number): T[];
    times<T>(fn: (i: number) => T): (n: number) => T[];

    /**
     * Converts an object into an array of key, value arrays.
     * Only the object's own properties are used.
     * Note that the order of the output array is not guaranteed to be
     * consistent across different JS platforms.
     */
    toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

    /**
     * The lower case version of a string.
     */
    toLower(str: string): string;

    /**
     * Returns the string representation of the given value. eval'ing the output should
     * result in a value equivalent to the input value. Many of the built-in toString
     * methods do not satisfy this requirement.
     *
     * If the given value is an [object Object] with a toString method other than
     * Object.prototype.toString, this method is invoked with no arguments to produce the
     * return value. This means user-defined constructor functions can provide a suitable
     * toString method.
     */
    toString<T>(val: T): string;

    /**
     * The upper case version of a string.
     */
    toUpper(str: string): string;

    /**
     * Removes (strips) whitespace from both ends of the string.
     */
    trim(str: string): string;

    /**
     * Gives a single-word string description of the (native) type of a value, returning such answers as 'Object',
     * 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them
     * all as 'Object'.
     */
    type(val: any): 'Object' | 'Number' | 'Boolean' | 'String' | 'Null' | 'Array' | 'RegExp' | 'Function' | 'Undefined' | 'Async' | 'Promise';

    /**
     * Returns a new list containing only one copy of each element in the original list.
     */
    uniq<T>(list: ReadonlyArray<T>): T[];

    /**
     * Returns a new list containing only one copy of each element in the original list, based upon the value
     * returned by applying the supplied predicate to two list elements.
     */
    uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
    uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Returns a new copy of the array with the element at the provided index replaced with the given value.
     */
    update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
    update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

    /**
     * Returns a list of all the enumerable own properties of the supplied object.
     * Note that the order of the output array is not guaranteed across
     * different JS platforms.
     */
    values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

    /**
     * Returns a new list without values in the first argument. R.equals is used to determine equality.
     * Acts as a transducer if a transformer is given in list position.
     */
    without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    /**
     * Creates a new list out of the two supplied by pairing up equally-positioned items from
     * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
     */
    zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
    zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

    /**
     * Creates a new object out of a list of keys and a list of values.
     */
    // TODO: Dictionary<T> as a return value is to specific, any seems to loose
    zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
    zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
  }
}

export = R;
export as namespace R;

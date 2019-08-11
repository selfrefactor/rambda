/// <reference path="./tools.d.ts" />
declare let R: R.Static;

declare namespace R {
  type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

  type CommonKeys<T1, T2> = keyof T1 & keyof T2;

  type Ord = number | string | boolean | Date;

  type Path = ReadonlyArray<(number | string)>;

  interface Functor<T> {
    map<U>(fn: (t: T) => U): Functor<U>;
  }

  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
  }

  type Arity1Fn = (a: any) => any;

  type Arity2Fn = (a: any, b: any) => any;

  type Pred = (...a: any[]) => boolean;
  type SafePred<T> = (...a: T[]) => boolean;

  interface Dictionary<T> {
    [index: string]: T;
  }

  interface Lens {
    <T, U>(obj: T): U;
    set<T, U>(str: string, obj: T): U;
  }

  interface Filter {
    <T>(fn: (value: T) => boolean): FilterOnceApplied<T>;
    <T, Kind extends 'array'>(fn: (value: T) => boolean): (list: ReadonlyArray<T>) => T[];
    <T, Kind extends 'object'>(fn: (value: T) => boolean): (list: Dictionary<T>) => Dictionary<T>;
    <T>(fn: (value: T) => boolean, list: ReadonlyArray<T>): T[];
    <T>(fn: (value: T) => boolean, obj: Dictionary<T>): Dictionary<T>;
  }

  interface FilterOnceApplied<T> {
    (list: ReadonlyArray<T>): T[];
    (obj: Dictionary<T>): Dictionary<T>;
  }

  type Evolve<O extends Evolvable<E>, E extends Evolver> = {
    [P in keyof O]: P extends keyof E ? EvolveValue<O[P], E[P]> : O[P];
  };

  type EvolveValue<V, E> =
      E extends (value: V) => any ? ReturnType<E> :
          E extends Evolver ? EvolveNestedValue<V, E> :
              never;

  type EvolveNestedValue<V, E extends Evolver> =
      V extends object ? (V extends Evolvable<E> ? Evolve<V, E> : never) : never;

  interface Evolver {
    [key: string]: ((value: any) => any) | Evolver;
  }

  // Represents all objects evolvable with Evolver E
  type Evolvable<E extends Evolver> = {
    [P in keyof E]?: Evolved<E[P]>;
  };

  type Evolved<T> =
      T extends (value: infer V) => any ? V :
          T extends Evolver ? Evolvable<T> :
              never;

  interface Placeholder { __isRamdaPlaceholder__: true; }

  interface Reduced<T> {
    '@@transducer/value': T;
    '@@transducer/reduced': true;
  }

  type Merge<Primary, Secondary> = { [K in keyof Primary]: Primary[K] } & { [K in Exclude<keyof Secondary, CommonKeys<Primary, Secondary>>]: Secondary[K] };

  interface Static {
    /**
     * Placeholder. When used with functions like curry, or op, the second argument is applied to the second
     * position, and it returns a function waiting for its first argument.
     */
    __: Placeholder; /* This is used in examples throughout the docs, but I it only seems to be directly explained here: https://ramdajs.com/0.9/docs/#op */

    /**
     * Adds two numbers (or strings). Equivalent to a + b but curried.
     */
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number): (b: number) => number;
    add(a: string): (b: string) => string;

    /**
     * Applies a function to the value at the given index of an array, returning a new copy of the array with the
     * element at the given index replaced with the result of the function application.
     */
    adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
    adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

    /**
     * Returns true if all elements of the list match the predicate, false if there are any that don't.
     */
    all<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    all<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    /**
     * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
     */
    allPass(preds: ReadonlyArray<Pred>): Pred;

    /**
     * Returns a function that always returns the given value.
     */
    always<T>(val: T): () => T;

    /**
     * Returns true if at least one of elements of the list match the predicate, false otherwise.
     */
    any<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    /**
     * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
     */
    anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;

    /**
     * Returns a new list containing the contents of the given list, followed by the given element.
     */
    append<T>(el: T, list: ReadonlyArray<T>): T[];
    append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

    /**
     * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
     */
    assoc<T, U>(__: Placeholder, val: T, obj: U): <K extends string>(prop: K) => Record<K, T> & U;
    assoc<U, K extends string>(prop: K, __: Placeholder, obj: U): <T>(val: T) => Record<K, T> & U;
    assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
    assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;

    /**
     * A function wrapping calls to the two functions in an && operation, returning the result of the first function
     * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
     * that the second function will not be invoked if the first returns a false-y value.
     */
    both(pred1: Pred, pred2: Pred): Pred;
    both(pred1: Pred): (pred2: Pred) => Pred;

    /**
     * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
     */
    clone<T>(value: T): T;
    clone<T>(value: ReadonlyArray<T>): T[];

    /**
     * Takes a function f and returns a function g such that:
     * - applying g to zero or more arguments will give true if applying the same arguments to f gives
     *   a logical false value; and
     * - applying g to zero or more arguments will give false if applying the same arguments to f gives
     *   a logical true value.
     */
    complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

    /**
     * Performs right-to-left function composition. The rightmost function may have any arity; the remaining
     * functions must be unary.
     */

    // generic rest parameters in TS 3.0 allows writing a single variant for any number of Vx
    // compose<V extends any[], T1>(fn0: (...args: V) => T1): (...args: V) => T1;
    // compose<V extends any[], T1, T2>(fn1: (x: T1) => T2, fn0: (...args: V) => T1): (...args: V) => T2;
    // but requiring TS>=3.0 sounds like a breaking change, so just leaving a comment for the future

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
     * Returns a new list consisting of the elements of the first list followed by the elements
     * of the second.
     */
    concat<T>(placeholder: Placeholder): (list2: ReadonlyArray<T>, list1: ReadonlyArray<T>) => T[];
    concat<T>(placeholder: Placeholder, list2: ReadonlyArray<T>): (list1: ReadonlyArray<T>) => T[];
    concat<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    concat<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    concat(list1: string, list2: string): string;
    concat(list1: string): (list2: string) => string;

    /**
     * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
     * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
     *
     * @deprecated since 0.26 in favor of includes
     */
    contains(__: Placeholder, list: string): (a: string) => boolean;
    contains<T>(__: Placeholder, list: T[]): (a: T) => boolean;
    contains(__: Placeholder): (list: string, a: string) => boolean;
    contains<T>(__: Placeholder): (list: T[], a: T) => boolean;
    contains(a: string, list: string): boolean;
    contains<T>(a: T, list: ReadonlyArray<T>): boolean;
    contains(a: string): (list: string) => boolean;
    contains<T>(a: T): (list: ReadonlyArray<T>) => boolean;

    /**
     * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities.
     * First, its arguments needn't be provided one at a time.
     */
    curry<F extends (...args: any) => any>(f: F): Curry.Curry<F>;

    /**
     * Decrements its argument.
     */
    dec(n: number): number;

    /**
     * Returns the second argument if it is not null or undefined. If it is null or undefined, the
     * first (default) argument is returned.
     */
    defaultTo<T, U>(a: T, b: U | null | undefined): T | U;
    defaultTo<T>(a: T): <U>(b: U | null | undefined) => T | U;

    /*
     * Returns a new object that does not contain a prop property.
     */
    // It seems impossible to infer the return type, so this may to be specified explicitely
    dissoc<T>(prop: string, obj: any): T;
    dissoc(prop: string): <U>(obj: any) => U;

    /**
     * Divides two numbers. Equivalent to a / b.
     */
    divide(__: Placeholder, b: number): (a: number) => number;
    divide(__: Placeholder): (b: number, a: number) => number;
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    /**
     * Returns a new list containing all but the first n elements of the given list.
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
     * A function wrapping calls to the two functions in an || operation, returning the result of the first
     * function if it is truth-y and the result of the second function otherwise. Note that this is
     * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
     */
    either(pred1: Pred, pred2: Pred): Pred;
    either(pred1: Pred): (pred2: Pred) => Pred;

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

    /**
     * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
     */
    filter: Filter;

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
    has<T>(__: Placeholder, obj: T): (s: string) => boolean;
    has<T>(__: Placeholder): (obj: T, s: string) => boolean;
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
     * A function that does nothing but return the parameter supplied to it. Good as a default
     * or placeholder function.
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

    /**
     * Returns the number of elements in the array by returning list.length.
     */
    length<T>(list: ReadonlyArray<T>): number;

    /**
     * Returns a lens for the given getter and setter functions. The getter
     * "gets" the value of the focus; the setter "sets" the value of the focus.
     * The setter should not mutate the data structure.
     */
    lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

    /**
     * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
     */
    map<T, U>(fn: (x: T) => U, list: ReadonlyArray<T>): U[];
    map<T, U>(fn: (x: T) => U): (list: ReadonlyArray<T>) => U[];
    map<T, U>(fn: (x: T[keyof T & keyof U]) => U[keyof T & keyof U], list: T): U;
    map<T, U>(fn: (x: T[keyof T & keyof U]) => U[keyof T & keyof U]): (list: T) => U;
    map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>; // used in functors
    map<T, U>(fn: (x: T) => U): (obj: Functor<T>) => Functor<U>; // used in functors
    map<T, U>(fn: (value: T, key: string, obj: { [key: string]: T }) => U, obj: { [key: string]: T }): { [key: string]: U };
    map<T, U>(fn: (value: T, key: string, obj: { [key: string]: T }) => U): (obj: { [key: string]: T }) => { [key: string]: U };

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
    maxBy<T>(keyFn: (a: T) => Ord): Curry.Curry<(a: T, b: T) => T>;

    /**
     * Create a new object with the own properties of a
     * merged with the own properties of object b.
     * This function will *not* mutate passed-in objects.
     *
     * @deprecated since 0.26 in favor of mergeRight
     */
    merge<T2>(__: Placeholder, b: T2): <T1>(a: T1) => Merge<T2, T1>;
    merge(__: Placeholder): <T1, T2>(b: T2, a: T1) => Merge<T2, T1>;
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
    minBy<T>(keyFn: (a: T) => Ord): Curry.Curry<(a: T, b: T) => T>;

    /**
     * Divides the second parameter by the first and returns the remainder.
     * The flipped version (`moduloBy`) may be more useful curried.
     * Note that this functions preserves the JavaScript-style behavior for
     * modulo. For mathematical modulo see `mathMod`
     */
    modulo(__: Placeholder, b: number): (a: number) => number;
    modulo(__: Placeholder): (b: number, a: number) => number;
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;

    /**
     * Multiplies two numbers. Equivalent to a * b but curried.
     */
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

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
     * Returns a partial copy of an object omitting the keys specified.
     */
    omit<T, K extends string>(names: ReadonlyArray<K>, obj: T): Omit<T, K>;
    omit<K extends string>(names: ReadonlyArray<K>): <T>(obj: T) => Omit<T, K>;

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
    pathOr<T>(defaultValue: T): Curry.Curry<(a: Path, b: any) => any>;

    /**
     * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
     * property is ignored.
     */
    pick<T, K extends string>(names: ReadonlyArray<K>, obj: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
    pick<K extends string>(names: ReadonlyArray<K>): <T>(obj: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;

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
     * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
     */
    prop<T>(__: Placeholder, obj: T): <P extends keyof T>(p: P) => T[P];
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
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult | Reduced<TResult>, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?:number) => TResult | Reduced<TResult>): (acc: TResult, list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?:number) => TResult | Reduced<TResult>, acc: TResult): (list: ReadonlyArray<T>) => TResult;

    /**
     * Similar to `filter`, except that it keeps only values for which the given predicate
     * function returns falsy.
     */
    reject: Filter;

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
    subtract(__: Placeholder, b: number): (a: number) => number;
    subtract(__: Placeholder): (b: number, a: number) => number;
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    sum(listOfNumbers: number[]): number

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
    test(regexp: RegExp, str: string): boolean;
    test(regexp: RegExp): (str: string) => boolean;

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
    type(val: any): 'Object' | 'Number' | 'Boolean' | 'String' | 'Null' | 'Array' | 'RegExp' | 'Function' | 'Undefined';

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

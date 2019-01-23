declare let R: R.Static

declare namespace R {
  // RAMBDA_START
  type RambdaTypes = "Async"
    | "Array"
    | "Boolean"
    | "Function"
    | "Null"
    | "Number"
    | "Object"
    | "Promise"
    | "RegExp"
    | "String"
    | "Undefined"

  type FilterFunction<T> = (x: T, prop?: string) => boolean
  type MapFunction<In, Out> = (x: In, prop?: string) => Out
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

  interface MapInterface<T> {
    (list: T[]): T[]
    (obj: Dictionary<T>): Dictionary<T>
  }

  type IdentityFunction<T> = (x: T) => T

  interface Filter<T> {
    (list: T[]): T[]
    (obj: Dictionary<T>): Dictionary<T>
  }

  interface Dictionary<T> {
    [index: string]: T
  }
  type Pred<T> = (input: T) => boolean
  type Predicate<T> = (input: T, index: number) => boolean
  type Fn<In, Out> = (x: In) => Out
  type FnTwo<In, Out> = (x: In, y: In) => Out
  type MapFn<In, Out> = (x: In, index: number) => Out
  // RAMBDA_END
  type Ord = number | string | boolean

  type Path = Array<(number | string)>

  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K
    1: V
  }

  type Arity1Fn = (a: any) => any

  interface CurriedTypeGuard2<T1, T2, R extends T2> {
    (t1: T1): (t2: T2) => t2 is R
    (t1: T1, t2: T2): t2 is R
  }

  interface CurriedTypeGuard3<T1, T2, T3, R extends T3> {
    (t1: T1): CurriedTypeGuard2<T2, T3, R>
    (t1: T1, t2: T2): (t3: T3) => t3 is R
    (t1: T1, t2: T2, t3: T3): t3 is R
  }

  interface CurriedTypeGuard4<T1, T2, T3, T4, R extends T4> {
    (t1: T1): CurriedTypeGuard3<T2, T3, T4, R>
    (t1: T1, t2: T2): CurriedTypeGuard2<T3, T4, R>
    (t1: T1, t2: T2, t3: T3): (t4: T4) => t4 is R
    (t1: T1, t2: T2, t3: T3, t4: T4): t4 is R
  }

  interface CurriedTypeGuard5<T1, T2, T3, T4, T5, R extends T5> {
    (t1: T1): CurriedTypeGuard4<T2, T3, T4, T5, R>
    (t1: T1, t2: T2): CurriedTypeGuard3<T3, T4, T5, R>
    (t1: T1, t2: T2, t3: T3): CurriedTypeGuard2<T4, T5, R>
    (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => t5 is R
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): t5 is R
  }

  interface CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, R extends T6> {
    (t1: T1): CurriedTypeGuard5<T2, T3, T4, T5, T6, R>
    (t1: T1, t2: T2): CurriedTypeGuard4<T3, T4, T5, T6, R>
    (t1: T1, t2: T2, t3: T3): CurriedTypeGuard3<T4, T5, T6, R>
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedTypeGuard2<T5, T6, R>
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => t6 is R
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): t6 is R
  }

  interface CurriedFunction2<T1, T2, R> {
    (t1: T1): (t2: T2) => R
    (t1: T1, t2: T2): R
  }

  interface CurriedFunction3<T1, T2, T3, R> {
    (t1: T1): CurriedFunction2<T2, T3, R>
    (t1: T1, t2: T2): (t3: T3) => R
    (t1: T1, t2: T2, t3: T3): R
  }

  interface CurriedFunction4<T1, T2, T3, T4, R> {
    (t1: T1): CurriedFunction3<T2, T3, T4, R>
    (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>
    (t1: T1, t2: T2, t3: T3): (t4: T4) => R
    (t1: T1, t2: T2, t3: T3, t4: T4): R
  }

  interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>
    (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>
    (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>
    (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R
  }

  interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>
    (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>
    (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R
  }

  interface Reduced {
    [index: number]: any
    [index: string]: any
  }

  interface Static {
    // RAMBDA_START_MARKER
    add(a: number, b: number): number
    add(first: string, second: string): string
    add(a: number): (b: number) => number
    add(first: string): (second: string) => string

    adjust<T>(fn: Fn<T, T>, index: number, list: T[]): T[]
    adjust<T>(fn: Fn<T, T>, index: number): (list: T[]) => T[]

    all<T>(predicate: Predicate<T>, list: T[]): boolean
    all<T>(predicate: Predicate<T>): (list: T[]) => boolean

    allPass<T>(
      predicates: Predicate<T>[],
      input: any
    ): boolean
    allPass<T>(
      predicates: Predicate<T>[]
    ): (input: any) => boolean

    always<T>(x: T): () => T

    any<T>(predicate: Predicate<T>, list: T[]): boolean
    any<T>(predicate: Predicate<T>): (list: T[]) => boolean

    anyPass<T>(
      predicates: Predicate<T>[],
      input: any
    ): boolean
    anyPass<T>(
      predicates: Predicate<T>[]
    ): (input: any) => boolean

    append<T>(lastToBe: T, list: T[]): T[]
    append<T>(lastToBe: T): <T>(list: T[]) => T[]

    assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;
    assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;

    both<T>(firstRule: Pred<T>, secondRule: Pred<T>): Pred<T>
    both<T>(firstRule: Pred<T>): (secondRule: Pred<T>) => Pred<T>

    complement<Out>(fn: Fn<any, Out>): Fn<any, Out>

    compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1
    compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1
    compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1

    compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2
    compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2
    compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2

    compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3
    compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3
    compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3

    compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4
    compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4
    compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4

    compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5
    compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5
    compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5

    compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6
    compose<V0, V1, T1, T2, T3, T4, T5, T6>(
      fn5: (x: T5) => T6,
      fn4: (x: T4) => T5,
      fn3: (x: T3) => T4,
      fn2: (x: T2) => T3,
      fn1: (x: T1) => T2,
      fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6
    compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn5: (x: T5) => T6,
      fn4: (x: T4) => T5,
      fn3: (x: T3) => T4,
      fn2: (x: T2) => T3,
      fn1: (x: T1) => T2,
      fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6

    concat<T>(first: T[], second: T[]): T[]
    concat<T>(first: T[]): (second: T[]) => T[]
    concat(first: string, second: string): string
    concat(first: string): (second: string) => string

    contains(target: string, list: string): boolean
    contains<T>(target: T, list: T[]): boolean
    contains(target: string): (list: string) => boolean
    contains<T>(target: T): (list: T[]) => boolean

    curry<T1, T2, TResult extends T2>(fn: (a: T1, b: T2) => b is TResult): CurriedTypeGuard2<T1, T2, TResult>
    curry<T1, T2, T3, TResult extends T3>(fn: (a: T1, b: T2, c: T3) => c is TResult): CurriedTypeGuard3<T1, T2, T3, TResult>
    curry<T1, T2, T3, T4, TResult extends T4>(fn: (a: T1, b: T2, c: T3, d: T4) => d is TResult): CurriedTypeGuard4<T1, T2, T3, T4, TResult>
    curry<T1, T2, T3, T4, T5, TResult extends T5>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => e is TResult): CurriedTypeGuard5<T1, T2, T3, T4, T5, TResult>
    curry<T1, T2, T3, T4, T5, T6, TResult extends T6>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => f is TResult): CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, TResult>
    curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>
    curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>
    curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>
    curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>
    curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>
    curry(fn: (...a: any[]) => any): (...a: any[]) => any

    dec(n: number): number

    defaultTo<T>(defaultValue: T, actualInput: null | undefined | T): T
    defaultTo<T>(defaultValue: T): (actualInput: null | undefined | T) => T
    defaultTo<T>(defaultValue: T, ...inputArguments: Array<null | undefined | T>): T
  
    dissoc<T>(prop: string, obj: any): T
    dissoc(prop: string): <U>(obj: any) => U

    divide(a: number, b: number): number
    divide(a: number): (b: number) => number

    drop(n: number, input: string): string
    drop<T>(n: number, input: T[]): T[]
    drop<T>(n: number): {
      (input: string): string
      (input: T[]): T[]
    }

    dropLast(n: number, input: string): string
    dropLast<T>(n: number, input: T[]): T[]
    dropLast<T>(n: number): {
      (input: T[]): T[]
      (input: string): string
    }

    either<T>(firstRule: Pred<T>, secondRule: Pred<T>): Pred<T>
    either<T>(firstRule: Pred<T>): (secondRule: Pred<T>) => Pred<T>

    endsWith(target: string, input: string): boolean
    endsWith(target: string): (input: string) => boolean

    equals<T>(a: T, b: T): boolean
    equals<T>(a: T): (b: T) => boolean

    F(): boolean

    filter<T>(fn: FilterFunction<T>): Filter<T>
    filter<T>(fn: FilterFunction<T>, list: T[]): T[]
    filter<T>(fn: FilterFunction<T>, obj: Dictionary<T>): Dictionary<T>

    find<T>(predicate: Pred<T>, list: T[]): T | undefined
    find<T>(predicate: Pred<T>): (list: T[]) => T | undefined

    findIndex<T>(predicate: Predicate<T>, list: T[]): number
    findIndex<T>(predicate: Predicate<T>): (list: T[]) => number

    flatten<T>(x: Array<T[]|T>): T[]

    flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult
    flip<T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult

    forEach<T>(fn: MapFn<T, any>, list: T[]): T[]
    forEach<T>(fn: MapFn<T, any>): (list: T[]) => T[]

    groupBy<T>(fn: (x: T) => string, list: T[]): { [index: string]: T[] }
    groupBy<T>(fn: (x: T) => string): (list: T[]) => { [index: string]: T[] }

    has<T>(prop: string, obj: T): boolean
    has(prop: string): <T>(obj: T) => boolean

    head<T>(list: T[]): T | undefined
    head(list: string): string

    identity<T>(x: T): T

    ifElse(
      fn: Pred<any> | boolean, 
      onTrue: Arity1Fn, 
      onFalse: Arity1Fn
    ): Arity1Fn

    inc(n: number): number

    includes(target: any, input: string|any[]): boolean
    includes(target: any) : (input: string|any[]) => boolean

    indexBy<T>(fn: (x: T) => string, list: T[]): { [key: string]: T }
    indexBy<T>(fn: (x: T) => string): (list: T[]) => { [key: string]: T }

    indexOf<T>(target: T, arr: T[]): number;
    indexOf<T>(target: T): (arr: T[]) => number;

    init<T>(list: T[]): T[]
    init(list: string): string

    is(inputPrototype: any, input: any): boolean
    is(inputPrototype: any): (input: any) => boolean

    isNil(value: any): value is null | undefined

    join(x: string, input: any[]): string
    join(x: string): (input: any[]) => string

    keys<T extends object>(x: T): Array<keyof T>
    keys<T>(x: T): string[]

    last<T>(list: T[]): T | undefined
    last(list: string): string

    lastIndexOf<T>(x: T, arr: T[]): number
    lastIndexOf<T>(x: T): (arr: T[]) => number

    length<T>(list: T[]): number

    map<In, Out>(fn: MapFunction<In, Out>): MapInterface<Out>
    map<In, Out>(fn: MapFunction<In, Out>, list: In[]): Out[]

    map<In, Out>(
      fn: MapFunction<In, Out>,
      obj: Dictionary<In>
    ): Dictionary<Out>

    match(regexp: RegExp, input: string): any[]
    match(regexp: RegExp): (input: string) => any[]

    merge<T1, T2>(obj: T1, higher: T2): T1 & T2
    merge<T1>(obj: T1): <T2>(higher: T2) => T1 & T2

    modulo(a: number, b: number): number
    modulo(a: number): (b: number) => number

    multiply(a: number, b: number): number
    multiply(a: number): (b: number) => number

    max<T>(a: T, b: T): T
    max<T>(a: T): (b: T) => T

    maxBy<T>(keyFn: Function, a: T, b: T): T
    maxBy<T>(keyFn: Function, a: T): (b: T) => T
    maxBy<T>(keyFn: Function): CurriedFunction2<T, T, T>

    min<T>(a: T, b: T): T
    min<T>(a: T): (b: T) => T

    minBy<T>(keyFn: Function, a: T, b: T): T
    minBy<T>(keyFn: Function, a: T): (b: T) => T
    minBy<T>(keyFn: Function): CurriedFunction2<T, T, T>

    none<T>(predicate: Pred<T>, list: T[]): boolean
    none<T>(predicate: Pred<T>): (list: T[]) => boolean

    not<T>(value: T): boolean
    nth<T>(n: number, list: T[]): T | undefined;
    nth(n: number): <T>(list: T[]) => T | undefined;

    omit<T, K extends Array<keyof T>>(names: K, obj: T): Omit<T, K[number]>
    omit<T, K extends keyof T>(name: K, obj: T): Omit<T, K>
    omit<T, K extends Array<keyof T>>(
      names: K
    ): (obj: T) => Omit<T, K[number]>
    
    omit<T, K extends keyof T>(name: K): (obj: T) => Omit<T, K>
    
    partialCurry<Out>(
      fn: (input: Dictionary<any>) => Out,
      input: Dictionary<any>
    ): (input: Dictionary<any>) => Out

    path<T>(path: Path | string, obj: any): T
    path<T>(path: Path | string): (obj: any) => T

    pathOr<T>(d: T, p: Path | string, obj: any): T | any
    pathOr<T>(d: T, p: Path | string): (obj: any) => T | any
    pathOr<T>(d: T): CurriedFunction2<Path | string, any, T | any>

    pick<T, K extends keyof T>(
      props: Array<K | string> | string,
      input: T
    ): Pick<T, K>
    pick(props: string[] | string): <T, U>(obj: T) => U

    pickAll<T, U>(props: string[], obj: T): U
    pickAll(props: string[]): <T, U>(obj: T) => U

    pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
    pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
    pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
    pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
    pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

    pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
    pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
    pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

    pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
    pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
    pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

    pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
    pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

    pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

    pluck<T>(propOrIndex: string, input: any[]): T[]
    pluck<T>(propOrIndex: number, input: T[][]): T[]
    pluck<T>(propOrIndex: string): (input: any[]) => T[]
    pluck<T>(propOrIndex: number): (input: T[][]) => T[]

    prepend<T>(firstToBe: T, list: T[]): T[]
    prepend<T>(firstToBe: T): (list: T[]) => T[]

    prop<P extends keyof T, T>(p: P, obj: T): T[P]
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T

    propEq<T>(name: string, val: T, obj: any): boolean
    propEq<T>(name: string, val: T): (obj: any) => boolean
    propEq(name: string): <T>(val: T, obj: any) => boolean

    range(fromInclusive: number, toExclusive: number): number[]
    range(fromInclusive: number): (toExclusive: number) => number[]

    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: T[]): TResult
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced): (acc: TResult, list: T[]) => TResult
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): (list: T[]) => TResult

    reject<T>(predicate: Predicate<T>): Filter<T>
    reject<T>(predicate: Predicate<T>, list: T[]): T[]
    reject<T>(predicate: Predicate<T>, obj: Dictionary<T>): Dictionary<T>

    repeat<T>(a: T, n: number): T[]
    repeat<T>(a: T): (n: number) => T[]

    replace(pattern: RegExp | string, replacement: string, str: string): string
    replace(pattern: RegExp | string, replacement: string): (str: string) => string
    replace(pattern: RegExp | string): (replacement: string) => (str: string) => string

    reverse<T>(list: T[]): T[]

    sort<T>(sortingRule: FnTwo<T,number>, list: T[]): T[]
    sort<T>(sortingRule: FnTwo<T,number>): (list: T[]) => T[]

    sortBy<T>(fn: (a: T) => Ord, list: T[]): T[]
    sortBy(fn: (a: any) => Ord): <T>(list: T[]) => T[]

    split(sep: string | RegExp): (str: string) => string[]
    split(sep: string | RegExp, str: string): string[]

    splitEvery<T>(a: number, list: T[]): T[][]
    splitEvery(a: number): <T>(list: T[]) => T[][]

    startsWith(x: string, str: string): boolean
    startsWith(x: string): (str: string) => boolean

    subtract(a: number, b: number): number
    subtract(a: number): (b: number) => number

    T(): boolean

    tail<T>(list: T[]): T[]
    tail(list: string): string

    take(n: number, input: string): string
    take<T>(n: number, input: T[]): T[]
    take<T>(n: number): {
      (input: string): string
      (input: T[]): T[]
    }

    takeLast(n: number, input: string): string
    takeLast<T>(n: number, input: T[]): T[]
    takeLast(n: number): {
      <T>(input: T[]): T[]
      (input: string): string
    }

    tap<T>(fn: (a: T) => any, value: T): T
    tap<T>(fn: (a: T) => any): (value: T) => T

    test(regexp: RegExp, input: string): boolean
    test(regexp: RegExp): (input: string) => boolean

    times<T>(fn: (i: number) => T, n: number): T[]
    times<T>(fn: (i: number) => T): (n: number) => T[]

    toLower(input: string): string
    toString<T>(input: T): string
    toUpper(input: string): string
    trim(input: string): string

    type(input: any): RambdaTypes

    uniq<T>(list: T[]): T[]

    uniqWith<T>(predicate:FnTwo<T, boolean>, list: T[]): T[];
    uniqWith<T>(predicate:FnTwo<T, boolean>): (list: T[]) => T[];

    update<T>(index: number, newValue: T, list: T[]): T[]
    update<T>(index: number, newValue: T): (list: T[]) => T[]

    values<T extends object, K extends keyof T>(obj: T): Array<T[K]>

    without<T>(listOfWithouts: T[], input: T[]): T[]
    without<T>(listOfWithouts: T[]): (input: T[]) => T[]

    zip<K, V>(list1: K[], list2: V[]): Array<KeyValuePair<K, V>>
    zip<K>(list1: K[]): <V>(list2: V[]) => Array<KeyValuePair<K, V>>

    zipObj<T>(keys: string[], values: T[]): { [index: string]: T }
    zipObj(keys: string[]): <T>(values: T[]) => { [index: string]: T }
    // RAMBDA_END_MARKER
  }
}

export = R

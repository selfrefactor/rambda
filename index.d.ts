declare let R: R.Static;

declare namespace R {
    type Ord = number | string | boolean;

    type Path = Array<(number | string)>;

    interface KeyValuePair<K, V> extends Array<K | V> {
        0: K;
        1: V;
    }


    type Arity1Fn = (a: any) => any;

    type Pred = (...a: any[]) => boolean;

    interface CurriedTypeGuard2<T1, T2, R extends T2> {
        (t1: T1): (t2: T2) => t2 is R;
        (t1: T1, t2: T2): t2 is R;
    }

    interface CurriedTypeGuard3<T1, T2, T3, R extends T3> {
        (t1: T1): CurriedTypeGuard2<T2, T3, R>;
        (t1: T1, t2: T2): (t3: T3) => t3 is R;
        (t1: T1, t2: T2, t3: T3): t3 is R;
    }

    interface CurriedTypeGuard4<T1, T2, T3, T4, R extends T4> {
        (t1: T1): CurriedTypeGuard3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedTypeGuard2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): (t4: T4) => t4 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4): t4 is R;
    }

    interface CurriedTypeGuard5<T1, T2, T3, T4, T5, R extends T5> {
        (t1: T1): CurriedTypeGuard4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedTypeGuard3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedTypeGuard2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => t5 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): t5 is R;
    }

    interface CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, R extends T6> {
        (t1: T1): CurriedTypeGuard5<T2, T3, T4, T5, T6, R>;
        (t1: T1, t2: T2): CurriedTypeGuard4<T3, T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3): CurriedTypeGuard3<T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedTypeGuard2<T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => t6 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): t6 is R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (t1: T1): (t2: T2) => R;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): (t3: T3) => R;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
        (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
        (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
    }

    interface Reduced {
        [index: number]: any;
        [index: string]: any;
    }

    interface Static {
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: number): (b: number) => number;
        add(a: string): (b: string) => string;

        addIndex<T, U>(fn: (f: (item: T) => U, list: T[]) => U[]): CurriedFunction2<(item: T, idx: number, list?: T[]) => U, T[], U[]>;

        adjust<T>(fn: (a: T) => T, index: number, list: T[]): T[];
        adjust<T>(fn: (a: T) => T, index: number): (list: T[]) => T[];

        all<T>(fn: (a: T) => boolean, list: T[]): boolean;
        all<T>(fn: (a: T) => boolean): (list: T[]) => boolean;

        allPass(preds: Pred[]): Pred;

        always<T>(val: T): () => T;

        any<T>(fn: (a: T) => boolean, list: T[]): boolean;
        any<T>(fn: (a: T) => boolean): (list: T[]) => boolean;

        anyPass(preds: Pred[]): Pred;

        append<T, U>(el: U, list: T[]): Array<(T & U)>;
        append<U>(el: U): <T>(list: T[]) => Array<(T & U)>;
        append<U>(el: U): <T>(list: T[]) => Array<(T & U)>;

        both(pred1: Pred, pred2: Pred): Pred;
        both(pred1: Pred): (pred2: Pred) => Pred;

        complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

        compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
        compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
        compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

        compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
        compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
        compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

        compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
        compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
        compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

        compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
        compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
        compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

        compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
        compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
        compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

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

        concat<T>(list1: T[], list2: T[]): T[];
        concat<T>(list1: T[]): (list2: T[]) => T[];
        concat(list1: string, list2: string): string;
        concat(list1: string): (list2: string) => string;

        contains(a: string, list: string): boolean;
        contains<T>(a: T, list: T[]): boolean;
        contains(a: string): (list: string) => boolean;
        contains<T>(a: T): (list: T[]) => boolean;

        curry<T1, T2, TResult extends T2>(fn: (a: T1, b: T2) => b is TResult): CurriedTypeGuard2<T1, T2, TResult>;
        curry<T1, T2, T3, TResult extends T3>(fn: (a: T1, b: T2, c: T3) => c is TResult): CurriedTypeGuard3<T1, T2, T3, TResult>;
        curry<T1, T2, T3, T4, TResult extends T4>(fn: (a: T1, b: T2, c: T3, d: T4) => d is TResult): CurriedTypeGuard4<T1, T2, T3, T4, TResult>;
        curry<T1, T2, T3, T4, T5, TResult extends T5>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => e is TResult): CurriedTypeGuard5<T1, T2, T3, T4, T5, TResult>;
        curry<T1, T2, T3, T4, T5, T6, TResult extends T6>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => f is TResult): CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, TResult>;
        curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
        curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
        curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
        curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
        curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
        curry(fn: (...a: any[]) => any): (...a: any[]) => any;

        dec(n: number): number;

        defaultTo<T, U>(a: T, b: U): T | U;
        defaultTo<T>(a: T): <U>(b: U) => T | U;

        divide(a: number, b: number): number;
        divide(a: number): (b: number) => number;

        drop<T>(n: number, xs: T[]): T[];
        drop(n: number, xs: string): string;
        drop<T>(n: number): {
            (xs: string): string;
            (xs: T[]): T[];
        };

        dropLast<T>(n: number, xs: T[]): T[];
        dropLast(n: number, xs: string): string;
        dropLast<T>(n: number): {
            (xs: T[]): T[];
            (xs: string): string;
        };

        either(pred1: Pred, pred2: Pred): Pred;
        either(pred1: Pred): (pred2: Pred) => Pred;

        endsWith(x: string, str: string): boolean;
        endsWith(x: string) :(str: string) => boolean;

        equals<T>(a: T, b: T): boolean;
        equals<T>(a: T): (b: T) => boolean;

        F(): boolean;

        filter<T>(fn: (value: T) => boolean): (list: T[]) => T[];
        filter<T>(fn: (value: T) => boolean, list: T[]): T[];

        find<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
        find<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

        findIndex<T>(fn: (a: T) => boolean, list: T[]): number;
        findIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

        flatten<T>(x: T[] | T[][]): T[];

        flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0: T) => TResult;

        has<T>(s: string, obj: T): boolean;
        has(s: string): <T>(obj: T) => boolean;

        head<T>(list: T[]): T;
        head(list: string): string;

        identity<T>(a: T): T;

        ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;

        init<T>(list: T[]): T[];
        init(list: string): string;

        isNil(value: any): value is null | undefined;

        join(x: string, xs: any[]): string;
        join(x: string): (xs: any[]) => string;

        last<T>(list: T[]): T;
        last(list: string): string;

        length(list: any[]): number;

        map<T, U>(fn: (x: T) => U, list: T[]): U[];
        map<T, U>(fn: (x: T) => U): (list: T[]) => U[];
        map<T extends object, U extends {[P in keyof T]: U[P]}>(fn: (x: T[keyof T]) => U[keyof T], obj: T): U;
        map<T extends object, U extends {[P in keyof T]: U[P]}>(fn: (x: T[keyof T]) => U[keyof T]): (obj: T) => U;

        match(regexp: RegExp, str: string): any[];
        match(regexp: RegExp): (str: string) => any[];

        merge<T1, T2>(a: T1, b: T2): T1 & T2;
        merge<T1>(a: T1): <T2>(b: T2) => T1 & T2;

        modulo(a: number, b: number): number;
        modulo(a: number): (b: number) => number;

        multiply(a: number, b: number): number;
        multiply(a: number): (b: number) => number;

        not(value: any): boolean;

        omit<T>(names: string[]|string, obj: T): T;
        omit(names: string[]|string): <T>(obj: T) => T;

        once(fn: (...a: any[]) => any): (...a: any[]) => any;

        partialCurry(fn: (input: object) => any,input: object): any

        path<T>(path: Path|string, obj: any): T;
        path<T>(path: Path|string): (obj: any) => T;

        pathOr<T>(d: T, p: Path, obj: any): T | any;
        pathOr<T>(d: T, p: Path): (obj: any) => T | any;
        pathOr<T>(d: T): CurriedFunction2<Path, any, T | any>;

        pick<T, K extends keyof T>(names: Array<K | string>|string, obj: T): Pick<T, K>;
        pick(names: string[]|string): <T, U>(obj: T) => U;

        pluck<T>(p: string | number, list: any[]): T[];
        pluck(p: string | number): <T>(list: any[]) => T[];

        prepend<T>(el: T, list: T[]): T[];
        prepend<T>(el: T): (list: T[]) => T[];

        prop<T>(p: string, obj: any): T;
        prop<T>(p: string): <T>(obj: any) => T;

        propEq<T>(name: string, val: T, obj: any): boolean;
        propEq<T>(name: string, val: T): (obj: any) => boolean;
        propEq(name: string): <T>(val: T, obj: any) => boolean;

        range(from: number, to: number): number[];
        range(from: number): (to: number) => number[];

        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: T[]): TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced): (acc: TResult, list: T[]) => TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): (list: T[]) => TResult;

        replace(pattern: RegExp | string, replacement: string, str: string): string;
        replace(pattern: RegExp | string, replacement: string): (str: string) => string;
        replace(pattern: RegExp | string): (replacement: string) => (str: string) => string;

        reverse<T>(list: T[]): T[];

        sort<T>(fn: (a: T, b: T) => number, list: T[]): T[];
        sort<T>(fn: (a: T, b: T) => number): (list: T[]) => T[];

        sortBy<T>(fn: (a: T) => Ord, list: T[]): T[];
        sortBy(fn: (a: any) => Ord): <T>(list: T[]) => T[];

        split(sep: string | RegExp): (str: string) => string[];
        split(sep: string | RegExp, str: string): string[];

        splitEvery<T>(a: number, list: T[]): T[][];
        splitEvery(a: number): <T>(list: T[]) => T[][];

        startsWith(x: string, str: string): boolean;
        startsWith(x: string) :(str: string) => boolean;

        subtract(a: number, b: number): number;
        subtract(a: number): (b: number) => number;

        tail<T>(list: T[]): T[];
        tail(list: string): string;

        take<T>(n: number, xs: T[]): T[];
        take(n: number, xs: string): string;
        take<T>(n: number): {
            (xs: string): string;
            (xs: T[]): T[];
        };

        takeLast<T>(n: number, xs: T[]): T[];
        takeLast(n: number, xs: string): string;
        takeLast(n: number): {
            <T>(xs: T[]): T[];
            (xs: string): string;
        };

        tap<T>(fn: (a: T) => any, value: T): T;
        tap<T>(fn: (a: T) => any): (value: T) => T;

        test(regexp: RegExp, str: string): boolean;
        test(regexp: RegExp): (str: string) => boolean;

        toLower(str: string): string;

        toString<T>(val: T): string;

        toUpper(str: string): string;

        trim(str: string): string;

        type(val: any): string;

        typedDefaultTo<T>(defaultValue: T, x: any): T
        typedDefaultTo<T>(defaultValue: T): (x: any) => T

        typedPathOr<T>(d: T, p: Path|string, obj: any): T;
        typedPathOr<T>(d: T, p: Path|string): (obj: any) => T;
        typedPathOr<T>(d: T): CurriedFunction2<Path|string, any, T>;

        uniq<T>(list: T[]): T[];

        update<T>(index: number, value: T, list: T[]): T[];
        update<T>(index: number, value: T): (list: T[]) => T[];

        values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;
    }
}

export = R;
export as namespace R;

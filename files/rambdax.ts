
/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function allFalse(...input: Array<any>): boolean
export function anyFalse(...input: Array<any>): boolean


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function allTrue(...input: Array<any>): boolean
export function anyTrue(...input: Array<any>): boolean


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function allType(targetType: RambdaTypes): (...input: Array<any>) => boolean
export function anyType(targetType: RambdaTypes): (...input: Array<any>) => boolean


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function change<T>(
  origin: object, 
  path: string, 
  changeData: any
): T

export function change<Input, Output>(
  origin: Input, 
  path: string, 
  changeData: any
): Output


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function compact<T>(x: any[]): T[]


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function composeAsync<Out>(
  ...fns: Array<Async<any> | Func<any>>
): (input: any) => Promise<Out>
export function pipeAsync<Out>(
  ...fns: Array<Async<any> | Func<any>>
): (input: any) => Promise<Out>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function count<T>(target: T, list: any[]): number
export function count<T>(target: T) : (list: any[]) => number

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function debounce<T>(fn: T, ms: number): ReplaceReturnType<T, void>


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function defaultToStrict<T>(
  fallback: T, 
  ...inputs: Array<T>
): T


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function  delay(ms: number): Promise<'RAMBDAX_DELAY'>

//  export const DELAY: 'RAMBDAX_DELAY'


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function glue(input: string, glueString?: string): string


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function getter<T>(keyOrKeys: string|string[]|undefined): T


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function setter(keyOrobject: string|object, value?: any): void

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function reset(): void


/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function hasPath<T>(
  path: string|string[], 
  input: object
): boolean  
export function hasPath<T>(
  path: string|string[]
) : (input: object) => boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER   
export function ifElseAsync<T>(
  condition: Async<any> | Func<any>,
  ifFn: Async<any> | Func<any>,
  elseFn: Async<any> | Func<any>
): Async<T>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function includesType(
  targetType: RambdaTypes, 
): (list: any[]) => boolean
export function includesType(
  targetType: RambdaTypes, 
  list: any[]
): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function isFalsy(input: any): boolean
export function isType(targetType: RambdaTypes, input: any): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function isPromise(
  maybePromiseOrAsync: any
): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function isFunction(
  maybePromiseFunctionOrAsync: any
): boolean
   
/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function maybe<T>(ifRule: any, whenIf: any, whenElse: any, maybeInput?: any): T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function filterAsync<T>(fn: (x: T) => Promise<boolean>, list: T[]): Promise<Array<T>>
export function filterAsync<T>(fn: (x: T) => Promise<boolean>, obj: object): Promise<{
  [prop: string]: T
}>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mapAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<Array<T>>
export function mapAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<Array<T>>
export function mapAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<Array<T>>
export function mapAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<Array<T>>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mapFastAsync<T>(fn: AsyncWithMap<any>, list: any[]): Promise<Array<T>>
export function mapFastAsync<T>(fn: AsyncWithProp<any>, obj: object): Promise<Array<T>>
export function mapFastAsync<T>(fn: AsyncWithMap<any>): (list: any[]) => Promise<Array<T>>
export function mapFastAsync<T>(fn: AsyncWithProp<any>): (obj: object) => Promise<Array<T>>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mapAsyncLimit<T, U>(iterable: (x: T) => Promise<U>, limit: number, list: Array<T>): Promise<Array<U>>
export function mapAsyncLimit<T, U>(iterable: (x: T) => Promise<U>, limit: number) : ( list: Array<T>) => Promise<Array<U>>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mapToObject<T, U>(fn: (input: T) => object, list: T[]): U  
export function mapToObject<T, U>(fn: (input: T) => object): (list: T[]) => U  

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function memoize<T>(fn: Func<any> | Async<any>): T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mergeRight(x: object, y: object): object
export function mergeRight(x: object): (y: object) => object
   
/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function mergeAll(input: object[]): object
export function mergeDeep<T>(slave: object, master: object): T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function nextIndex(index: number, list: any[]): number
export function nextIndex(index: number, list: number): number

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function prevIndex(index: number, list: any[]): number
export function prevIndex(index: number, list: number): number

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function ok(...inputs: any[]): (...rules: any[]) => true | never 

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function pass(...inputs: any[]): (...rules: any[]) => boolean 

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function isValid(x: IsValid): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER 
export function isValidAsync(x: IsValidAsync): Promise<boolean> 

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function once(fn: Func<any>): Func<any>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function partition<T>(
  rule: PartitionPredicate<T>,
  input: {[key: string]: T}
): [object, object]
export function partition<T>(
  rule: PartitionPredicate<T>
): (input: {[key: string]: T}) => [object, object]

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function partition<T>(
  rule: Predicatex<T>,
  input: Array<T>
): [Array<T>, Array<T>]
export function partition<T>(
  rule: Predicatex<T>
): (input: Array<T>) => [Array<T>, Array<T>]

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function pathEq(path:string|string[], target: any, obj: object): boolean
export function pathEq(path:string|string[], target: any): (obj: object) => boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function piped<T>(input: any, ...fnList: Array<Func<any>>): T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function pipedAsync<T>(
  input: any, 
  ...fns: Array< Func<any> | Async<any> >
): Promise<T>  

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function produce<T>(
  conditions: any,
  input: any
): T
export function produce<T>(
  conditions: any,
): (input: any) => T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function promiseAllObject<T>(
  input: ObjectWithPromises
): Promise<T>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function random(minInclusive: number, maxInclusive: number): number

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function remove(
  inputs: string|RegExp|Array<string|RegExp>,
  text: string
): string
export function remove(
  inputs: string|RegExp|Array<string|RegExp>
): (text: string) => string

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function renameProps(fromKeyToProp: object, input: object): object
export function renameProps(fromKeyToProp: object): (input: object) => object

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function s(): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function shuffle<T>(arr: T[]): T[]

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function sortObject<T>(predicate: SortObjectPredicate<T>, obj: { [key: string]: T}): { [keyOutput: string]: T}
export function sortObject<T>(predicate: SortObjectPredicate<T>): (obj : { [key: string] : T }) => { [keyOutput: string] : T }

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function switcher<T>(valueToMatch: any): Switchem<T>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function tapAsync<T>(fn: Func<any> | Promise<any>, input: T): T
export function tapAsync<T>(fn: Func<any> | Promise<any>): (input: T) => T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function throttle<T>(fn: T, ms: number): ReplaceReturnType<T, void>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER   
export function toDecimal(num: number, charsAfterDecimalPoint?: number): number    

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER   
export function template(inputWithTags: string, templateArguments: object): string
export function template(inputWithTags: string): (templateArguments: object) => string

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function tryCatch<T>(
  fn:  any, 
  fallback: any
): Async<T> | T

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER   
export function where(conditions: object, input: object): boolean

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function wait<T>(fn: Async<T>): Promise<[T, Error]>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function waitFor(
  waitForTrueCondition: () => any|Promise<any>, 
  msHowLong: number
): (input?: any) => Promise<boolean>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function when<T>(
  rule: Func<boolean> | boolean, ruleTrue: any
): IdentityFunction<T>
export function when<T>(
  rule: Func<boolean> | boolean
): (ruleTrue: any) => IdentityFunction<T>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER   
export function unless<T>(
  rule: Func<boolean> | boolean, ruleFalse: any
): IdentityFunction<T>
export function unless<T>(
  ruleFalse: Func<boolean> | boolean
): (ruleTrue: any) => IdentityFunction<T>

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function randomString(length?: number, alphabetOnlyFlag?: boolean): string;

/*
Method: 

Explanation:



Example:

```

```

Categories:

*/
// @SINGLE_MARKER
export function whereEq(rule: object, input: any): boolean  
export function whereEq(rule: object) : (input: any) => boolean  
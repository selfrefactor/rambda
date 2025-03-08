This is major revamp of `Rambda` library:

- `R.piped` is the recommended method for TypeScript chaining.
- All methods should be useful to work inside `R.piped` chain. If method doesn't have clear use case inside `R.piped`, it is removed as part of this revamp.
- There will be only one way to use each method. For example, `R.add` can be used only with `R.add(1)(2)`, i.e. it doesn't support `R.add(1, 2)`. This helps with testing and also with TypeScript definitions. This aligns with TypeScript focused approach of this library.
- Confusing methods are removed. For example, `R.cond` and `R.ifElse` are removed as their usage inside `R.piped` makes the whole chain less readable. Such logic should be part of your codebase, not part of external library.
- All methods that expect more than 1 input, will have to be called with `R.methodName(input1)(input2)` or `R.methodName(input1, input2)(input3)`. This is to make TypeScript definitions easier to maintain.

- Optimize many methods to better work in TypeScript context with `R.pipe/R.compose`. The focus was passing objects through the `pipe/compose` chain.

- Add `R.piped` method from `Rambdax` since it works better with TypeScript than `R.pipe` and `R.compose`. It supports up to 20 function inputs.

Here is one example why `R.piped` is better than `R.pipe`:

```ts
const list = [1, 2, 3];

it('within piped', () => {
	const result = piped(
		list,
		filter((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
	);
	result; // $ExpectType number[]
});
it('within pipe requires explicit type', () => {
	pipe(
		(x) => x,
		filter<number>((x) => {
			x; // $ExpectType number
			return x > 1;
		}),
		filter((x: number) => {
			x; // $ExpectType number
			return x > 1;
		}),
	)(list);
});
```

- Remove following methods:

-- gte, lte, lt, gt
-- always
-- ifElse
-- cond
-- flip
-- binary
-- bind
-- addIndex, addIndexRight
-- T, F
-- composeWith
-- mapObjIndexed ?
-- forEachObjIndexed ?
-- unnest
-- ap
-- length
-- call
-- converge
-- juxt
-- curry
-- applySpec
-- applyTo
-- unapply
-- update
-- insert

Rename:

-- replaceItemAtIndex -> adjust 
-- checkObjectWithSpec -> where 
-- getPropertyOrDefault -> propOr 

_ Regarding using object as input with TypeScript in methods such as `R.map/filter` - this feature is no longer supported in TypeScript as it has multiple issues when using inside pipes. In JS, it still works as before. Following methods are affected:

-- R.map
-- R.mapIndexed
-- R.filter
-- R.reject

- Regarding using string as path input in `R.omit`, `R.pick` and `R.path` with TypeScript - now it require explicit definition of expected return type.

- Revert adding stopper logic in `R.reduce` - https://github.com/selfrefactor/rambda/pull/630

- Remove use of `Dictionary` custom interface and use more appropriate `Record<PropertyType, ...>`

- Remove use of `Record<string, ...>` in favour of `Record<PropertyType, ...>`

- Add TypeScript definition to handle common case of `R.filter(Boolean)` that will turn `Array<T | undefined>` to `Array<T>`.

- Regarding using object with `R.forEach` in TypeScript - this is no longer supported. Again, JS version still works with objects.

- head/last - empty array as input will return `undefined`, but `never`
- assocPath - stop supporting curring of type `(x)(y)(z)`

- Require explicit output type(s) as it is very hard to pick up the correct type in many cases.

-- assocPath
-- dissocPath 

- Sync with typing of `@types/ramda`:

-- allPass
-- anyPass
-- append
-- both
-- countBy
-- drop
-- dropLast
-- dropRepeatsBy
-- either
-- filter
-- forEach
-- keys
-- map
-- mergeAll
-- modify
-- modifyPath
-- omit
-- partition
-- pluck
-- prepend
-- propEq
-- where
-- whereAny

- Sync with typing of `remeda`:

-- filter
-- reject
-- map
-- mapIndexed
-- toPairs

- Publish to JSR registry - https://jsr.io/@rambda/rambda

- Replace Record<string> with Record<PropertyKey>

- Improve TypeScript definitions of:

-- objOf
-- pluck
-- mergeWith

- Remove TypeScript tests for `R.pipe` and `R.compose`. From now on, `R.piped` is the recommended method for TypeScript chaining. Also, `R.piped` can be easily made to work just like `R.pipe`.

- Change `Jest` with `Vitest`.

- Remove `Babel` dependency in `Rollup` build setup.

- Renamed methods: 

-- `evolve` to `changeObjectValuesWith` ?
-- `chain` to `flatMap`
-- `mapObjIndexed` to `mapObject` ?
-- `collectBy` to `groupBy` ? remove

- All differences with Ramda are documented in [DIFFERENCES_WITH_RAMDA.md](./files/DIFFERENCES_WITH_RAMDA.md).
===
R.path with string path
  type SmartGet<T, S> = S extends `${infer F extends string}.${infer R extends string}` ?
    F extends keyof T ?
      SmartGet<T[F], R> :
      undefined : S extends keyof T ?T[S] :undefined
			
check naming in fp-ts, as evolve looks like magic. also why radashi uses remove not reject
https://github.com/toss/es-toolkit - another FP library
===
ABOVE IS DONE
===
new version of curry that works with custom function so it works with R.piped
===
partitionAsync
 is removed -

also mapToObjectAsync 

show how all these are not needed if used with pipedasync

move glue to string-fn

utils such as todecimal can be moved to R.util

ascend/descend 

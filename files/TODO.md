strip `readonly` from docs typings

search for TODO

doesn't work

// const challengeID = last(process.argv)

bring updated deps back to Hjson file

add tryCatchAsync and sync R.tryCatch. 

```
/**
 * It accepts input as first argument and series of functions as next arguments. It is same as `R.pipe` but with support for asynchronous functions.
 */
export function pipedAsync<T>(
  input: any,
  ...fns: (Func<any> | Async<any>)[]
): Promise<T>;

export function produce<T>(x: T): T;
```

`
export const DELAY: 'RAMBDAX_DELAY';
` is part of exported definitions

src/interals/testutils.js

https://github.com/DefinitelyTyped/DefinitelyTyped/commit/182dac81b18d1172f8783310a4e40301f3888e69#diff-4f74803fa83a81e47cb17a7d8a4e46a7e451f4d9e5ce2f1bd7a70a72d91f4bc1

Can R.switchem throw error in `.default` case.

Add marker for Rambdax methods that doesn't belong to Rambda

More usage of $ExpectError

Add R.mapToList which takes object and returns a list

Fix `this` issue explained in `rambda-docs`

Add explanation to missing Ramda methods

Improve R.produce typings

R.equals support for 'Function' as it makes sense in deep unit testing.

use .toThrowErrorMatchingInlineSnapshot
---

Fix `If you need more Ramda methods in Rambda, you may either submit a PR or check the extended version of Rambda - Rambdax. In case of the former, you may want to consult with Rambda contribution guidelines.` in Rambdax

---

Methods to add:  

- uniqBy
- propSatisfies
- pickBy
- pathSatisfies
- gte
- mapObjIndexed(types from @types/ramda)

https://github.com/smartprocure/futil-js#differentlast
https://github.com/smartprocure/futil-js#whentruthy
findApply
compactMap
compactJoin
flattenObject
simpleDiff
highlight
on
off
includeLens?
---

R.xnor

assert.isTrue(RA.xnor(true, true));
assert.isFalse(RA.xnor(false, true));
assert.isFalse(RA.xnor(true, false));
assert.isTrue(RA.xnor(false, false));

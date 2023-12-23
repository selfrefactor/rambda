- gt
- gte
- reduceBy
- hasIn

go to source definition in vscode works better for ramda than for rambda
---
in js project like niketa theme, go to source lead to readable code, is ramda the same?

what about ts react
---
add motivation

optimize above the fold
---
include new methods to method to skip list
---
issue with gh release
---
throttle should accept 0 arguments, i.e. no need to force unary function
---
wont do
include standut x methods to rambda

such as

sortObject
---
REFS:

- forEachObjIndexed should not contain source file nor test file
---




---
in js project like niketa theme, go to source lead to readable code, is ramda the same?

what about ts react
---

fix https://github.com/selfrefactor/rambdax/issues/93

---
group TS test for similar methods

---
- construct - it is class helper and classes are not very functional oriented
- constructN


- innerJoin
- insert
- insertAll
- into
- invert
- invertObj
- invoker
- isNotNil

- keysIn
- lift
- liftN
- lt
- lte
- mapAccum
- mapAccumRight
- memoizeWith
- mergeDeepLeft
- mergeDeepWith
- mergeDeepWithKey
- mergeWithKey

- nAry
- nthArg
- o
- otherwise
- pair
- partialRight
- pathSatisfies
- pickBy
- pipeWith
- project
- promap

- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- splitWhenever
- swap
- symmetricDifferenceWith

- andThen
- toPairsIn
- transduce
- traverse
- unary
- uncurryN
- unfold
- unionWith
- until
- useWith
- valuesIn
- xprod
- thunkify
- default
---
Double check

it('mixed', () => {
    const result = head(mixedList)
    result // $ExpectType string | number
  })
  
  and typing of `R.head` suggest that this issue could be on many more places
---
> Idea of this file is to store CHANGELOG changes until MR is ready to be opened.

differenceWith

---
apply to allPass
https://github.com/selfrefactor/rambda/pull/695/files
---
use todos and clear todos when this file is smaller
check again deno as dissocpath doesn't add js extension to imports
---
try omitPath as method instead of multiple paths
---
replace missing ramda methods with text that argument is missing
===
publish after march 2024

export function anyPass<T, U extends T[]>(predicates: { [K in keyof U]: (x: T) => x is U[K]; }): (input: T) => input is U[number];
- head/last handle of empty string

- fix - use number as property to omit - TODO - should be same for pick, etc., i.e. they use same createpath util

in js project like niketa theme, go to source lead to readable code, is ramda the same?

fix https://github.com/selfrefactor/rambdax/issues/93

release X
---
group TS test for similar methods

eventual create additional topic in methods - related methods, so it is easy to find tests as the first one alpabetically is the one containing all TS tests
---
- construct - it is class helper and classes are not very functional oriented
- constructN

- dropRepeatsBy
- empty
- eqBy
- forEachObjIndexed
- gt
- gte
- hasIn

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
- sortWith
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
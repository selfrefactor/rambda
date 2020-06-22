import {mergeLeft} from 'rambda'

describe('mergeLeft', () => {
  const result = mergeLeft({foo: 1}, {bar: 2})
  const curriedResult = mergeLeft({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})

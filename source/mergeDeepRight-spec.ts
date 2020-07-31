import {mergeDeepRight} from 'rambda'

describe('R.mergeDeepRight', () => {
  const result = mergeDeepRight({foo: {bar: 1}}, {foo: {bar: 2}})
  result.foo.bar // $ExpectType number
})

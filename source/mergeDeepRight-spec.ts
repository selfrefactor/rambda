import {mergeDeepRight} from 'rambda'

interface Output{
  foo: {
    bar: number
  }
}

describe('R.mergeDeepRight', () => {
  const result = mergeDeepRight<Output>({foo: {bar: 1}}, {foo: {bar: 2}})
  result.foo.bar // $ExpectType number
})

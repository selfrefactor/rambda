import {merge} from 'rambda'

interface Output{
  foo: number
  bar: number
}

describe('R.merge', () => {
  const result = merge<Output>({foo: 1}, {bar: 2})
  const curriedResult = merge<Output>({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})

import { mergeRight } from 'rambda'

interface Output {
  foo: number
  bar: number
}

describe('R.mergeRight', () => {
  const result = mergeRight({ foo: 1 }, { bar: 2 })
  const curriedResult = mergeRight<Output>({ foo: 1 })({ bar: 2 })

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})

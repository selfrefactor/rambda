import { piped, pluck } from 'rambda'

describe('R.pluck - with property key', () => {
  const input = [
    { a: 1, b: 'foo' },
    { a: 2, b: 'bar' },
  ]
  it('inside piped', () => {
    const result = piped(input, pluck('b'))
    result // $ExpectType string[]
  })
})

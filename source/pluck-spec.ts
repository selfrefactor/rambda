import { pipe, pluck } from 'rambda'

describe('R.pluck - with property key', () => {
  const input = [
    { a: 1, b: 'foo' },
    { a: 2, b: 'bar' },
  ]
  it('inside pipe', () => {
    const result = pipe(input, pluck('b'))
    result // $ExpectType string[]
  })
})

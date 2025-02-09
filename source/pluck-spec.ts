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
  it('without currying', () => {
    const resultA = pluck('a', input)
    resultA // $ExpectType number[]

    // @ts-expect-error
    pluck('b')(input)
  })
})

describe('R.pluck - with list index', () => {
  const input = [
    [1, 2],
    [3, 4],
  ]
  it('inside piped', () => {
    const result = piped(input, pluck(0))
    result // $ExpectType number[]
  })
  it('without currying', () => {
    const resultA = pluck(0, input)
    resultA // $ExpectType number[]

    // @ts-expect-error
    pluck(1)(input)
  })
})

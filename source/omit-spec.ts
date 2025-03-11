import { omit, pipe } from 'rambda'

const input = { a: 'foo', b: 2, c: 3 }

describe('R.omit', () => {
  it('with string as input', () => {
    const result = pipe(input, omit('a,b'))
    result.c // $ExpectType number
  })
  it('with array as input', () => {
    const result = pipe(input, omit(['a', 'b']))
    result.c // $ExpectType number
  })
})

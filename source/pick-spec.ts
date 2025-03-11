import { pick, piped } from 'rambda'

const input = { a: 'foo', c: 3 }

describe('R.pick', () => {
  it('with string as input', () => {
    const result = piped(input, pick('a,c,b,o'))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
  it('with array as input', () => {
    const result = piped(input, pick(['a', 'c']))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
})

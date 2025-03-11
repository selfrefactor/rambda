import { path, piped } from 'rambda'

const input = { a: { b: { c: true } } }

describe('R.path with string as path', () => {
  it('happy', () => {
    const result = piped(input, path(['a', 'b']))
    const resultStringInput = piped(input, path('a.b.c'))
    result // $ExpectType boolean
    resultStringInput // $ExpectType boolean
  })
  it('happy', () => {
    const result = piped([1, 2, 3], path([1]))
    result // $ExpectType number
  })
})

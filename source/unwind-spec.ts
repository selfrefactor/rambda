import { pipe, unwind } from 'rambda'

const obj = {
  a: 1,
  b: [2, 3],
}

describe('R.unwind', () => {
  it('happy', () => {
    const [result] = unwind('b')(obj)
    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('inside pipe', () => {
    const [result] = pipe(obj, unwind('b'))
    result.a // $ExpectType number
    result.b // $ExpectType number
  })
})

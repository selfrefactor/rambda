import { pipe, unwind } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const obj = {
  a: 1,
  b: [2, 3],
}

describe('R.unwind', () => {
  it('happy', () => {
    const [result] = unwind('b')(obj)
    expectTypeOf(result.a).toEqualTypeOf<number>()
    expectTypeOf(result.b).toEqualTypeOf<number>()
  })
  it('inside pipe', () => {
    const [result] = pipe(obj, unwind('b'))
    expectTypeOf(result.a).toEqualTypeOf<number>()
    expectTypeOf(result.b).toEqualTypeOf<number>()
  })
})

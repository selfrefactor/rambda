import { objectIncludes, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.objectIncludes', () => {
  it('happy', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ a: 2 }))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('nested', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ c: { d: 3 } }))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

import { type } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.type', () => {
  it('happy', () => {
    const result = type(4)

    expectTypeOf(result).toEqualTypeOf<RambdaTypes>()
  })
})

import { complement } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.complement', () => {
  it('happy', () => {
    const fn = complement((x: number) => x > 10)
    const result = fn(1)
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

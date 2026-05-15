import { uniq } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

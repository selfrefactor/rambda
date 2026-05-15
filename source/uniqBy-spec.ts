import { uniqBy } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.uniqBy', () => {
  it('happy', () => {
    const result = uniqBy(Math.abs)([-2, -1, 0])

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

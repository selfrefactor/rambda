import { range } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.range', () => {
  it('curried', () => {
    const result = [range(1, 4), range(1)]

    expectTypeOf(result).toEqualTypeOf<number[][]>()
  })
})

import { filterObject, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.filterObject', () => {
  it('require explicit type', () => {
    const result = pipe(
      { a: 1, b: 2 },
      filterObject<{ b: number }>(a => {
        expectTypeOf(a).toEqualTypeOf<number>()
        return a > 1
      }),
    )
    expectTypeOf(result.b).toEqualTypeOf<number>()
  })
})

import { pipe, sortBy } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.sortBy', () => {
  it('passing type to sort function and list', () => {
    const result = pipe(
      [{ a: 2 }, { a: 1 }, { a: 0 }],
      sortBy(x => {
        return x.a
      }),
    )

    expectTypeOf(result[0].a).toEqualTypeOf<number>()
  })
})

import { none, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.none', () => {
  it('happy', () => {
    const result = pipe(
      [1, 2, 3],
      none(x => x > 0),
    )
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

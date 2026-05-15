import * as R from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('all', () => {
  it('happy', () => {
    const result = R.pipe(
      [1, 2, 3],
      R.all(x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return x > 0
      }),
    )
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

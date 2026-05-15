import { pipe, propSatisfies } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const obj = { a: 1 }

describe('R.propSatisfies', () => {
  it('happy', () => {
    const result = pipe(
      obj,
      propSatisfies(x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return x > 0
      }, 'a'),
    )

    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

import { dropWhile, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

describe('R.dropWhile', () => {
  it('happy', () => {
    const result = pipe(
      list,
      dropWhile(x => x > 1),
    )

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
  it('with index', () => {
    const result = pipe(
      list,
      dropWhile((x, i) => {
        expectTypeOf(i).toEqualTypeOf<number>()
        return x + i > 2
      }),
    )

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

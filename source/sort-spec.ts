import { pipe, sort } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [3, 0, 5, 2, 1]

describe('R.sort', () => {
  it('happy', () => {
    const result = sort<number>((a, b) => {
      return a > b ? 1 : -1
    })(list)
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
  it('within pipe', () => {
    const result = pipe(
      list,
      sort((a, b) => {
        return a > b ? 1 : -1
      }),
    )
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

import { describe, expectTypeOf, it } from 'vitest'
import { pipe, zipWith } from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = pipe(
      list2,
      zipWith((x, y) => {
        expectTypeOf(x).toEqualTypeOf<number>()
        expectTypeOf(y).toEqualTypeOf<number>()
        return `${x}-${y}`
      }, list1),
    )

    expectTypeOf(result).toEqualTypeOf<string[]>()
  })
})

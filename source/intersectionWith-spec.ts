import { intersectionWith, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list1 = [1, 2, 3]
const list2 = [1, 3, 5]

describe('R.intersectionWith', () => {
  it('happy', () => {
    const result = pipe(
      list1,
      intersectionWith((x, y) => x === y, list2),
    )
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

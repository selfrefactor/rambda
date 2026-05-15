import { intersection } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list1 = [1, 2, 3]
const list2 = [1, 3, 5]

describe('R.intersection', () => {
  it('happy', () => {
    const result = intersection(list1)(list2)
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

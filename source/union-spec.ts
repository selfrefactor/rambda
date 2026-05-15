import { union } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.union', () => {
  it('happy', () => {
    const result = union([1, 2])([2, 3])

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
  it('with array of objects - case 1', () => {
    const list1 = [{ a: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3 }]
    const result = union(list1)(list2)
    expectTypeOf(result).toEqualTypeOf<{ a: number; }[]>()
  })
  it('with array of objects - case 2', () => {
    const list1 = [{ a: 1, b: 1 }, { a: 2 }]
    const list2 = [{ a: 2 }, { a: 3, b: 3 }]
    const result = union(list1)(list2)
    expectTypeOf(result[0].a).toEqualTypeOf<number>()
    expectTypeOf(result[0].b).toEqualTypeOf<number | undefined>()
  })
})

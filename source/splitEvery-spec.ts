import { pipe, splitEvery } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = pipe(list, splitEvery(3))
    expectTypeOf(result).toEqualTypeOf<number[][]>()
  })
})

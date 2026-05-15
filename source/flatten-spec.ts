import { flatten, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('flatten', () => {
  it('happy', () => {
    const result = pipe([1, 2, [3, [4]]], flatten<number>)
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

import { shuffle } from 'rambdax'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3, 4, 5]

describe('R.shuffle', () => {
  it('happy', () => {
    const result = shuffle(list)
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

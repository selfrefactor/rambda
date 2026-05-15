import { exists, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

describe('R.exists', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, exists(predicate))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

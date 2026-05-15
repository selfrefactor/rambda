import { lastIndexOf, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.lastIndexOf', () => {
  it('happy', () => {
    const result = pipe([{ a: 1 }, { a: 2 }, { a: 3 }], lastIndexOf({ a: 2 }))
    expectTypeOf(result).toEqualTypeOf<number>()
  })
})

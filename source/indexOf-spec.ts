import { indexOf } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.indexOf', () => {
  it('happy', () => {
    const list = [{ a: 1 }, { a: 2 }]
    const result = indexOf({ a: 1 })(list)
    expectTypeOf(result).toEqualTypeOf<number>()
  })
})

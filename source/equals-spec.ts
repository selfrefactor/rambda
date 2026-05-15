import { equals } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.equals', () => {
  it('happy', () => {
    const result = equals(4)(1)
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('with object', () => {
    const foo = { a: 1 }
    const bar = { a: 2 }
    const result = equals(foo)(bar)
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('curried', () => {
    const result = equals(4)(1)

    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})

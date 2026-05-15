import { map, pipe, prop } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.prop', () => {
  it('happy', () => {
    const result = pipe({ a: 1 }, prop('a'))

    expectTypeOf(result).toEqualTypeOf<number>()
  })
  it('alike R.pluck', () => {
    const result = pipe([{ a: 1 }, { a: 2 }], map(prop('a')))

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

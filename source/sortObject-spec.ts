import { sortObject, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const obj = {
  c: 1,
  a: 2,
  b: 3,
}

describe('R.sortObject', () => {
  it('predicate with all arguments', () => {
    const result = pipe(
      obj,
      sortObject((propA, propB, valueA, valueB) => {
        expectTypeOf(propA).toEqualTypeOf<string>()
        expectTypeOf(propB).toEqualTypeOf<string>()
        expectTypeOf(valueA).toEqualTypeOf<number>()
        expectTypeOf(valueB).toEqualTypeOf<number>()
        return propA > propB ? -1 : 1
      }),
    )

    expectTypeOf(result).toEqualTypeOf<{ c: number; a: number; b: number; }>()
  })

  it('predicate with only property arguments', () => {
    const result = pipe(
      obj,
      sortObject((propA, propB) => {
        expectTypeOf(propA).toEqualTypeOf<string>()
        expectTypeOf(propB).toEqualTypeOf<string>()
        return propA > propB ? -1 : 1
      }),
    )
    expectTypeOf(result).toEqualTypeOf<{ c: number; a: number; b: number; }>()
  })
})

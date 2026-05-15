import { pipe, unless } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const inc = (x: number) => x + 1

describe('R.unless', () => {
  it('happy', () => {
    const result = pipe(
      1,
      unless(x => x > 5, inc),
    )
    expectTypeOf(result).toEqualTypeOf<number>()
  })
  it('with two different types', () => {
    const result = pipe(
      1,
      unless(
        x => {
          expectTypeOf(x).toEqualTypeOf<number>()
          return x > 5
        },
        x => {
          expectTypeOf(x).toEqualTypeOf<number>()
          return `${x}-foo`
        },
      ),
    )
    expectTypeOf(result).toEqualTypeOf<string | number>()
  })
})

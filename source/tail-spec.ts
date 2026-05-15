import { map, pipe, tail } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.tail', () => {
  it('with string', () => {
    const result = tail('foo')

    expectTypeOf(result).toEqualTypeOf<string>()
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1] as const,
      map(x => x * 2),
      tail,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      tail,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3] as const,
      map(x => x * 2),
      tail,
    )
    expectTypeOf(result).toEqualTypeOf<[number, number]>()
  })
  it('with list - mixed types', () => {
    const result = tail(['foo', 'bar', 1, 2, 3])

    expectTypeOf(result).toEqualTypeOf<(string | number)[]>()
  })
})

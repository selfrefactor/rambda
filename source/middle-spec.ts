import { map, middle, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.middle', () => {
  it('with string', () => {
    const result = middle('foo')

    expectTypeOf(result).toEqualTypeOf<string>()
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1, 2] as const,
      map(x => x * 2),
      middle,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      middle,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3, 4] as const,
      map(x => x * 2),
      middle,
    )
    expectTypeOf(result).toEqualTypeOf<[number, number]>()
  })
  it('with list - mixed types', () => {
    const result = middle(['foo', 'bar', 1, 2, 3])

    expectTypeOf(result).toEqualTypeOf<(string | number)[]>()
  })
})

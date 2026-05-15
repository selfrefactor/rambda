import { map, pipe, init } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.init', () => {
  it('with string', () => {
    const result = init('foo')

    expectTypeOf(result).toEqualTypeOf<string>()
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1] as const,
      map(x => x * 2),
      init,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      init,
    )
    expectTypeOf(result).toEqualTypeOf<[]>()
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3] as const,
      map(x => x * 2),
      init,
    )
    expectTypeOf(result).toEqualTypeOf<[number, number]>()
  })
  it('with list - mixed types', () => {
    const result = init(['foo', 'bar', 1, 2, 3])

    expectTypeOf(result).toEqualTypeOf<(string | number)[]>()
  })
})

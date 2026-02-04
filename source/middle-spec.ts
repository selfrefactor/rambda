import { map, middle, pipe } from 'rambda'

describe('R.middle', () => {
  it('with string', () => {
    const result = middle('foo')

    result // $ExpectType string
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1, 2] as const,
      map(x => x * 2),
      middle,
    )
    result // $ExpectType []
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      middle,
    )
    result // $ExpectType number[]
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3, 4] as const,
      map(x => x * 2),
      middle,
    )
    result // $ExpectType [number, number]
  })
  it('with list - mixed types', () => {
    const result = middle(['foo', 'bar', 1, 2, 3])

    result // $ExpectType (string | number)[]
  })
})

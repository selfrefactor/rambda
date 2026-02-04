import { map, pipe, tail } from 'rambda'

describe('R.tail', () => {
  it('with string', () => {
    const result = tail('foo')

    result // $ExpectType string
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1] as const,
      map(x => x * 2),
      tail,
    )
    result // $ExpectType []
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      tail,
    )
    result // $ExpectType []
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3] as const,
      map(x => x * 2),
      tail,
    )
    result // $ExpectType [number, number]
  })
  it('with list - mixed types', () => {
    const result = tail(['foo', 'bar', 1, 2, 3])

    result // $ExpectType (string | number)[]
  })
})

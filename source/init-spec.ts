import { map, pipe, init } from 'rambda'

describe('R.init', () => {
  it('with string', () => {
    const result = init('foo')

    result // $ExpectType string
  })
  it('with list - using const on short array', () => {
    const result = pipe(
      [1] as const,
      map(x => x * 2),
      init,
    )
    result // $ExpectType []
  })
  it('with list - using const on empty array', () => {
    const result = pipe(
      [] as const,
      map(x => x * 2),
      init,
    )
    result // $ExpectType []
  })
  it('with list - using const', () => {
    const result = pipe(
      [1, 2, 3] as const,
      map(x => x * 2),
      init,
    )
    result // $ExpectType [number, number]
  })
  it('with list - mixed types', () => {
    const result = init(['foo', 'bar', 1, 2, 3])

    result // $ExpectType (string | number)[]
  })
})

import { filterObject, pipe } from 'rambda'

describe('R.filterObject', () => {
  it('require explicit type', () => {
    const result = pipe(
      { a: 1, b: 2 },
      filterObject<{ b: number }>(a => {
        a // $ExpectType number
        return a > 1
      }),
    )
    result.b // $ExpectType number
  })
})

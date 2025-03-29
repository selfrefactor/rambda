import { none, pipe } from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = pipe(
      [1, 2, 3],
      none(x => x > 0),
    )
    result // $ExpectType boolean
  })
})

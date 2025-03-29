import * as R from 'rambda'

describe('all', () => {
  it('happy', () => {
    const result = R.pipe(
      [1, 2, 3],
      R.all(x => {
        x // $ExpectType number
        return x > 0
      }),
    )
    result // $ExpectType boolean
  })
})

import { memoizeWith } from 'rambda'

describe('R.memoizeWith', () => {
  it('happy', () => {
    const result = memoizeWith(
      (x: number) => x,
      (n: number) => n,
    )

    result // $ExpectType (n: number) => number
  })
})

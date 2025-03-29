import * as R from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const list = [
      [1, 2, 3, 4],
      [3, 4, 5],
    ]
    const result = R.pipe(list, R.map(R.allPass([R.includes(3), R.includes(4)])))
    result // $ExpectType boolean[]
  })
})

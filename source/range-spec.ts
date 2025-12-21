import { range } from 'rambda'

describe('R.range', () => {
  it('curried', () => {
    const result = [range(1, 4), range(1)]

    result // $ExpectType number[][]
  })
})

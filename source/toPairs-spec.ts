import {toPairs} from 'rambda'

const obj = {
  a: 1,
  b: 2,
  c: [3, 4],
}

describe('R.toPairs', () => {
  it('happy', () => {
    const result = toPairs(obj)

    result // $ExpectType (["b", number] | ["a", number] | ["c", number[]])[]
  })
})

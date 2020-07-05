import {pickAll} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.pickAll', () => {
  it('happy', () => {
    const result = pickAll(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = pickAll(4)(1)

    result // $ExpectType number
  })
})

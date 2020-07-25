import {multiply} from 'rambda'

describe('R.multiply', () => {
  it('happy', () => {
    const result = multiply(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = multiply(4)(1)

    result // $ExpectType number
  })
})

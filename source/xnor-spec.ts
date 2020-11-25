import {xnor} from 'rambda'

describe('R.xnor', () => {
  it('happy', () => {
    const result = xnor(true, false)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = xnor(true)(true)

    result // $ExpectType boolean
  })
})

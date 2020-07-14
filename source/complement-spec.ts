import {complement, isNil} from 'rambda'

describe('R.add', () => {
  it('happy', () => {
    const fn = complement(isNil)
    const result = fn(null)
    result // $ExpectType boolean
  })
})

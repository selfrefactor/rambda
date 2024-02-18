import {gte} from 'rambda'

describe('R.gte', () => {
  it('happy', () => {
    const result = gte(1, 2)
    const curriedResult = gte(2)(3)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})

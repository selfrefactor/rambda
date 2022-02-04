import { flattenObject } from 'rambda'

describe('R.flattenObject', () => {
  it('happy', () => {
    const result = flattenObject()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = flattenObject()

    result // $ExpectType number
  })
})
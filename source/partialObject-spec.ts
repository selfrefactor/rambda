import { partialObject } from 'rambda'

describe('R.partialObject', () => {
  it('happy', () => {
    const result = partialObject()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = partialObject()

    result // $ExpectType number
  })
})
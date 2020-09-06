import { mapIndexed } from 'rambda'

describe('R.mapIndexed', () => {
  it('happy', () => {
    const result = mapIndexed()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = mapIndexed()

    result // $ExpectType number
  })
})
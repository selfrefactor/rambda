import { mapcat } from 'rambda'

describe('R.mapcat', () => {
  it('happy', () => {
    const result = mapcat()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = mapcat()

    result // $ExpectType number
  })
})
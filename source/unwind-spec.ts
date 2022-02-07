import { unwind } from 'rambda'

describe('R.unwind', () => {
  it('happy', () => {
    const result = unwind()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = unwind()

    result // $ExpectType number
  })
})
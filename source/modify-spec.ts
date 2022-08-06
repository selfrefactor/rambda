import { modify } from 'rambda'

describe('R.modify', () => {
  it('happy', () => {
    const result = modify()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = modify()

    result // $ExpectType number
  })
})
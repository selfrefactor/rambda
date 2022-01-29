import { juxt } from 'rambda'

describe('R.juxt', () => {
  it('happy', () => {
    const result = juxt()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = juxt()

    result // $ExpectType number
  })
})
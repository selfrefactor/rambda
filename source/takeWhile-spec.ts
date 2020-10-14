import { takeWhile } from 'rambda'

describe('R.takeWhile', () => {
  it('happy', () => {
    const result = takeWhile()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = takeWhile()

    result // $ExpectType number
  })
})
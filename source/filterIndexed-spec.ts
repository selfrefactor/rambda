import { filterIndexed } from 'rambda'

describe('R.filterIndexed', () => {
  it('happy', () => {
    const result = filterIndexed()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = filterIndexed()

    result // $ExpectType number
  })
})
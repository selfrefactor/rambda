import { list } from 'rambda'

describe('R.list', () => {
  it('happy', () => {
    const result = list()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = list()

    result // $ExpectType number
  })
})
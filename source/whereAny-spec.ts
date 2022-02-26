import { whereAny } from 'rambda'

describe('R.whereAny', () => {
  it('happy', () => {
    const result = whereAny()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = whereAny()

    result // $ExpectType number
  })
})
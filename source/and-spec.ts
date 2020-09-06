import {and} from 'rambda'

describe('R.and', () => {
  it('happy', () => {
    const result = and(true, false)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = and('foo')(1)
    result // $ExpectType string | 1
  })
})

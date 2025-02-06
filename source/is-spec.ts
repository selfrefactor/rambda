import { is } from 'rambda'

describe('R.is', () => {
  it('happy', () => {
    const result = is(String, 'foo')
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = is(Number)(1)
    result // $ExpectType boolean
  })
})

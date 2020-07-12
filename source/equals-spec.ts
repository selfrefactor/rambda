import {equals} from 'rambda'

describe('R.equals', () => {
  it('happy', () => {
    const result = equals(4, 1)
    result // $ExpectType boolnea
  })
  it('with object', () => {
    const foo = {a:1}
    const bar = {a:2}
    const result = equals(foo,bar)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = equals(4)(1)

    result // $ExpectType boolean
  })
})

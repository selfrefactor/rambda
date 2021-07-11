import {identical} from 'rambda'

describe('R.identical', () => {
  it('happy', () => {
    const result = identical(4, 1)
    const curriedResult = identical(4)(1)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
  it('with object', () => {
    const result = identical({a: 1}, {b: 2})
    result // $ExpectType boolean
  })
})

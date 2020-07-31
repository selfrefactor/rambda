import {always} from 'rambda'

describe('R.always', () => {
  it('happy', () => {
    const fn = always('foo')
    fn // $ExpectType () => string
    const result = fn()
    result // $ExpectType string
  })
})

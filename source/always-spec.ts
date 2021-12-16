import {always} from 'rambda'

describe('R.always', () => {
  it('happy', () => {
    const fn = always('foo')
    fn // $ExpectType (...args: unknown[]) => string
    const result = fn()
    result // $ExpectType string
  })
})

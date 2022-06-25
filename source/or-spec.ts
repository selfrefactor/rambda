import {or} from 'ramda'

describe('R.or', () => {
  it('happy', () => {
    const result = or(true, false)
    result // $ExpectType boolean
  })
  it('with falsy value as first input', () => {
    const result = or('', false)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = or(1)('foo')
    result // $ExpectType 1 | "foo"
  })
})

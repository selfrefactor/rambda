import {or} from 'ramda'

describe('R.or', () => {
  it('happy', () => {
    const result = or(true, false)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = or(1)('foo')
    result // $ExpectType number | "foo"
  })
})

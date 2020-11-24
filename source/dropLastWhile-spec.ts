import {dropLastWhile} from 'rambda'

const list = [1, 2, 3]
const str = 'FOO'

describe('R.dropLastWhile', () => {
  it('with array', () => {
    const result = dropLastWhile(x => x > 1, list)

    result // $ExpectType readonly number[]
  })
  it('with array - curried', () => {
    const result = dropLastWhile(x => x > 1, list)

    result // $ExpectType readonly number[]
  })
  it('with string', () => {
    const result = dropLastWhile(x => x !== 'F', str)

    result // $ExpectType string
  })
  it('with string - curried', () => {
    const result = dropLastWhile(x => x !== 'F')(str)

    result // $ExpectType string
  })
})

import {takeLastWhile} from 'rambda'

const list = [1, 2, 3]
const str = 'FOO'

describe('R.takeLastWhile', () => {
  it('with array', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType readonly number[]
  })
  it('with array - curried', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType readonly number[]
  })
  it('with string', () => {
    const result = takeLastWhile(x => x !== 'F', str)

    result // $ExpectType string
  })
  it('with string - curried', () => {
    const result = takeLastWhile(x => x !== 'F')(str)

    result // $ExpectType string
  })
})

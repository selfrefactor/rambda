import {init} from 'rambda'

describe('R.init', () => {
  it('with string', () => {
    const result = init('foo')

    result // $ExpectType string
  })
  it('with list', () => {
    const result = init([1, 2, 3])

    result // $ExpectType readonly number[]
  })
})

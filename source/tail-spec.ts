import {tail} from 'rambda'

describe('R.tail', () => {
  it('with string', () => {
    const result = tail('foo')

    result // $ExpectType string
  })
  it('with list', () => {
    const result = tail([1, 2, 3])

    result // $ExpectType readonly number[]
  })
})

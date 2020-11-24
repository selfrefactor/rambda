import {last} from 'rambda'

describe('R.last', () => {
  it('string', () => {
    const result = last('foo')
    result // $ExpectType string
  })

  it('array', () => {
    const result = last([1, 2, 3])
    result // $ExpectType number
  })

  it('empty array', () => {
    const result = last([])
    result // $ExpectType undefined
  })
})

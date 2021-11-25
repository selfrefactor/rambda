import {head} from 'rambda'

describe('R.head', () => {
  it('string', () => {
    const result = head('foo')
    result // $ExpectType string
  })
  it('array', () => {
    const result = head([1, 2, 3])
    result // $ExpectType number | undefined
  })
  it('empty array', () => {
    const result = head([])
    result // $ExpectType undefined
  })
})

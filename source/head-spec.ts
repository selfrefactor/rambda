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

  it('empty array - case 1', () => {
    const result = head([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'));
    const result = head(list)
    result // $ExpectType string | undefined
  })
})

import {last} from 'rambda'

describe('R.last', () => {
  it('string', () => {
    const result = last('foo')
    result // $ExpectType string
  })
  it('array', () => {
    const result = last<number>([1, 2, 3])
    result // $ExpectType number | undefined
  })
  it('mixed', () => {
    const result = last([1, 'foo'])
    result // $ExpectType string | number
  })
  it('empty array - case 1', () => {
    const result = last([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = last(list)
    result // $ExpectType string
  })
})


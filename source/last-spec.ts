import {mixedList, mixedListConst} from '_internals/typescriptTestUtils'
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
  it('mixed', () => {
    const result = last(mixedList)
    result // $ExpectType string | number
  })
  it('mixed const', () => {
    const result = last(mixedListConst)
    result // $ExpectType "bar"
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

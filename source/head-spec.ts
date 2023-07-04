import {mixedList, mixedListConst} from '_internals/typescriptTestUtils'
import {head} from 'rambda'

describe('R.head', () => {
  it('string', () => {
    const result = head('foo')
    result // $ExpectType string
  })
  it('array', () => {
    const result = head([1, 2, 3])
    result // $ExpectType number
  })
  it('mixed', () => {
    const result = head(mixedList)
    result // $ExpectType string | number
  })
  it('mixed const', () => {
    const result = head(mixedListConst)
    result // $ExpectType 1
  })
  it('empty array - case 1', () => {
    const result = head([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = head(list)
    result // $ExpectType string
  })
})

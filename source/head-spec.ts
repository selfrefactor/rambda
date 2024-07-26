import {
  emptyList,
  emptyString,
  mixedList,
  mixedListConst,
  numberList,
  numberListConst,
  string,
} from '_internals/typescriptTestUtils'
import {head, last} from 'rambda'

describe('R.head', () => {
  it('string', () => {
    head(string) // $ExpectType string
    last(string) // $ExpectType string
  })
  it('empty string', () => {
    head(emptyString) // $ExpectType undefined
    last(emptyString) // $ExpectType undefined
  })
  it('array', () => {
    head(numberList) // $ExpectType number
    head(numberListConst) // $ExpectType 1

    last(numberList) // $ExpectType number
    last(numberListConst) // $ExpectType 3
  })
  it('empty array', () => {
    const list = [] as const
    head(emptyList) // $ExpectType undefined
    head(list) // $ExpectType undefined
    last(emptyList) // $ExpectType undefined
    last(list) // $ExpectType undefined
  })

  it('mixed', () => {
    head(mixedList) // $ExpectType string | number
    head(mixedListConst) // $ExpectType 1
    last(mixedList) // $ExpectType string | number
    last(mixedListConst) // $ExpectType "bar"
  })
})

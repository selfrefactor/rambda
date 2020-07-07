import {split} from 'rambda'

const str = 'foo|bar|baz'
const splitChar = '|'

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = split(splitChar, str)

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = split(splitChar)(str)
  
    result // $ExpectType string[]
  })
})

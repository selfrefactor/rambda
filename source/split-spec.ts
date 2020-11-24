import {split} from 'rambda'

const str = 'foo|bar|baz'
const splitChar = '|'

describe('R.split', () => {
  it('happy', () => {
    const result = split(splitChar, str)

    result // $ExpectType readonly string[]
  })
  it('curried', () => {
    const result = split(splitChar)(str)

    result // $ExpectType readonly string[]
  })
})

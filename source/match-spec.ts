import {match} from 'rambda'

const str = 'foo bar'

describe('R.match', () => {
  it('happy', () => {
    const result = match(/foo/, str)
    result // $ExpectType readonly string[]
  })
  it('curried', () => {
    const result = match(/foo/)(str)
    result // $ExpectType readonly string[]
  })
})

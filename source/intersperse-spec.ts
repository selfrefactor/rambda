import {intersperse} from 'rambda'

describe('R.intersperse', () => {
  it('happy', () => {
    const result = intersperse(1, [1, 2, 3])
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    result // $ExpectType readonly string[]
  })
})

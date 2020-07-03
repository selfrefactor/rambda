import {intersperse} from 'rambda'

describe('R.intersperse', () => {
  it('happy', () => {
    const result = intersperse(1, [1,2,3])
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    result // $ExpectType string[]
  })
})

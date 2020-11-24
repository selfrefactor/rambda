import {filterIndexed} from 'rambda'

const list = [1, 2, 3]

describe('R.filterIndexed with array', () => {
  it('happy', () => {
    const result = filterIndexed(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType readonly number[]
  })
  it('curried require explicit type', () => {
    const result = filterIndexed<number>(x => {
      x // $ExpectType number
      return x > 1
    })(list)
    result // $ExpectType readonly number[]
  })
})

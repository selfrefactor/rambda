import {removeIndex} from 'rambda'

describe('R.removeIndex', () => {
  it('happy', () => {
    const result = removeIndex(1, [1, 2, 3])

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = removeIndex(1)([1, 2, 3])

    result // $ExpectType readonly number[]
  })
})

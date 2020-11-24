import {splitEvery} from 'rambda'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = splitEvery(3, list)

    result // $ExpectType readonly (readonly number[])[]
  })
  it('curried', () => {
    const result = splitEvery(3)(list)

    result // $ExpectType readonly (readonly number[])[]
  })
})

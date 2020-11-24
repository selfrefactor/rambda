import {concat} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

describe('R.concat', () => {
  it('happy', () => {
    const result = concat(list1, list2)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = concat(list1)(list2)

    result // $ExpectType readonly number[]
  })
})

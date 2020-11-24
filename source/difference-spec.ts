import {difference} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 2, 4]

describe('R.difference', () => {
  it('happy', () => {
    const result = difference(list1, list2)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = difference(list1)(list2)

    result // $ExpectType readonly number[]
  })
})

import {intersection} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 3, 5]

describe('R.intersection', () => {
  it('happy', () => {
    const result = intersection(list1, list2)
    result // $ExpectType readonly number[]

    const curriedResult = intersection(list1)(list2)
    curriedResult // $ExpectType readonly number[]
  })
})

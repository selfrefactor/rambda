import {intersection} from 'rambda'

describe('R.intersection', () => {
  it('happy', () => {
    const result = intersection([1, 2, 3], [1, 3, 5])
    const curriedResult = intersection([1, 2, 3])([1, 3, 5])
    result // $ExpectType number[]
    curriedResult // $ExpectType number[]
  })
})

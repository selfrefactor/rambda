import {indexOf} from 'rambda'

describe('R.indexOf', () => {
  it('happy', () => {
    const list = [1, 2, 3]
    const result = indexOf(1, list)
    const curriedResult = indexOf(1)(list)

    result // $ExpectType number
    curriedResult // $ExpectType number
  })
})

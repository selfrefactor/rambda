import { zip } from 'rambda'

describe('R.zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']
    let a: Partial<any>
    const result = zip(array1)(array2)
    result[0][0] // $ExpectType number
    result[0][1] // $ExpectType string
  })
})

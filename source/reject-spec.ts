import {reject} from 'rambda'

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number
        return x > 1
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = reject<number>(x => {
      x // $ExpectType number
      return x > 1
    })([1, 2, 3])
    result // $ExpectType number[]
  })
})

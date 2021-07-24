import {mapArray} from 'rambda'

describe('R.mapArray with arrays', () => {
  it('iterable returns the same type as the input', () => {
    const result = mapArray(
      (x) => {
        x // $ExpectType number
        return x + 2
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('iterable returns the same type as the input - curried', () => {
    const result = mapArray<number>((x) => {
      x // $ExpectType number
      return x + 2
    })([1, 2, 3])
    result // $ExpectType number[]
  })
  it('iterable returns different type as the input', () => {
    const result = mapArray(
      (x, i) => {
        x // $ExpectType number
        i // $ExpectType number
        return String(x)
      },
      [1, 2, 3]
    )
    result // $ExpectType string[]
  })
})

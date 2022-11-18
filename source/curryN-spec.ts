import {curryN} from 'rambda'

function source(a: number, b: number, c: number, d: number) {
  void d

  return a * b * c
}

describe('R.curryN', () => {
  it('happy', () => {
    const curried = curryN(3, source)

    const result1 = curried(1)(2)(3)
    const result2 = curried(1, 2)(3)
    const result3 = curried(1)(2, 3)
    const result4 = curried(1, 2, 3)

    result1 // $ExpectType any
    result2 // $ExpectType any
    result3 // $ExpectType any
    result4 // $ExpectType any
  })
})

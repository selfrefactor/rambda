import {allPass, filter} from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const x = allPass([
      (y: number) => {
        return typeof y === 'number'
      },
      (y: number) => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
  it('issue #642', () => {
    const isGreater = (num: number) => num > 5
    const pred = allPass([isGreater])
    const xs = [0, 1, 2, 3]

    const filtered1 = filter(pred)(xs)
    filtered1 // $ExpectType number[]
    const filtered2 = xs.filter(pred)
    filtered2 // $ExpectType number[]
  })
  it('issue #604', () => {
    const plusEq = function(w: number, x: number, y: number, z: number) {
      return w + x === y + z
    }
    const result = allPass([plusEq])(3, 3, 3, 3)

    result // $ExpectType boolean
  })
})

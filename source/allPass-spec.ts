import {allPass, filter} from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const x = allPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
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
})

import {anyPass, filter} from 'rambda'

describe('anyPass', () => {
  it('happy', () => {
    const x = anyPass<number>([
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
    const isGreater = (num: number) => num > 5;
    const pred = anyPass([isGreater]);
    const xs = [0, 1, 2, 3];
    
    const filtered1 = filter(pred)(xs); // $ExpectType unknown[]
    const filtered2 = xs.filter(pred); // $ExpectType number[]
  })
})

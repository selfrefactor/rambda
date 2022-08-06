import {minBy} from 'rambda'

const compareFn = (x: number) => x % 2 === 0 ? 1 : -1
const first = 1
const second = 2

describe('R.minBy', () => {
  it('happy', () => {
    const result = minBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
})

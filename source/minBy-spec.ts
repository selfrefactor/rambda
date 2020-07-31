import {minBy} from 'rambda'

const compareFn = (x: number) => x % 2 === 0 ? 1 : -1
const first = 1
const second = 2

describe('R.minBy', () => {
  it('happy', () => {
    const result = minBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
  it('curried 1', () => {
    const result = minBy(compareFn)(first, second)
    result // $ExpectType number
  })
  it('curried 2', () => {
    /*
      Than should be the case, but passing type is required for some reason
    */
    const result = minBy<number>(compareFn, first)(second)
    result // $ExpectType number
  })
  it('curried 3', () => {
    const result = minBy(compareFn)(first)(second)
    result // $ExpectType number
  })
})

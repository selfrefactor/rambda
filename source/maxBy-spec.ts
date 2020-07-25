import {maxBy} from 'rambda'

const compareFn = (x: number) => x % 2 === 0 ? 1 : -1 
const first = 1
const second = 2

describe('R.maxBy', () => {
  it('happy', () => {
    const result = maxBy(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
  it('curried 1', () => {
    const result = maxBy(compareFn)(first, second)
    result // $ExpectType number
  })
  it('curried 2', () => {
    const result = maxBy<number>(compareFn, first)(second)
    result // $ExpectType number
  })
  it('curried 3', () => {
    const result = maxBy(compareFn)(first)(second)
    result // $ExpectType number
  })
})

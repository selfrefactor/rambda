import {findLastIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findLastIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate)(list)
    result // $ExpectType number
  })
  it('pass index as second argument', () => {
    const predicate = (x: number, index: number) => {
      index // $ExpectType number
      return x > 2
    }
    const result = findLastIndex(predicate, list)
    result // $ExpectType number
  })
  it('pass index as second argument | curried', () => {
    const predicate = (x: number, index: number) => {
      index // $ExpectType number
      return x > 2
    }
    const result = findLastIndex(predicate)(list)
    result // $ExpectType number
  })
})


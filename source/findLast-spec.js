import { findLast } from 'rambda'

const list = [ 1, 2, 3 ]

describe('R.findLast', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate, list)
    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate)(list)
    result // $ExpectType number | undefined
  })
  it('pass index as second argument', () => {
    const predicate = (x: number, index: number) => {
      index // $ExpectType number

      return x > 2
    }
    const result = findLast(predicate, list)
    result // $ExpectType number | undefined
  })
  it('pass index as second argument | curried', () => {
    const predicate = (x: number, index: number) => {
      index // $ExpectType number

      return x > 2
    }
    const result = findLast(predicate)(list)
    result // $ExpectType number | undefined
  })
})

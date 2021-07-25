import {partitionIndexed} from 'rambda'

describe('R.partitionIndexed', () => {
  it('with array', () => {
    const predicate = (x: number, i: number) => {
      i // $ExpectType number
      return x > 2
    }
    const list = [1, 2, 3, 4]

    const result = partitionIndexed(predicate, list)
    const curriedResult = partitionIndexed(predicate)(list)
    result // $ExpectType [number[], number[]]
    curriedResult // $ExpectType [number[], number[]]
  })
})

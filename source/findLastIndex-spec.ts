import { findLastIndex, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.findLastIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, findLastIndex(predicate))
    result // $ExpectType number
  })
})

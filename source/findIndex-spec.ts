import {findIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate)(list)
    result // $ExpectType number
  })
})

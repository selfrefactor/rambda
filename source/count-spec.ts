import {count} from 'rambda'

const list = [1, 2, 3]
const predicate = (x: number) => x> 1

describe('R.count', () => {
  it('happy', () => {
    const result = count(predicate, list)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = count(predicate)(list)

    result // $ExpectType number
  })
})

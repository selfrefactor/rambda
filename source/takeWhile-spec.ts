import {takeWhile} from 'rambda'

const list = [1, 2, 3, 4]
const predicate = (x: number) => x > 3

describe('R.takeWhile', () => {
  it('happy', () => {
    const result = takeWhile(predicate, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = takeWhile(predicate)(list)

    result // $ExpectType number[]
  })
})

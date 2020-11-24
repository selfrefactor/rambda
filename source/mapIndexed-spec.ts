import {mapIndexed} from 'rambda'

const fn = (x: number, i: number) => {
  x // $ExpectType number
  i // $ExpectType number
  return x + 2
}
const list = [1, 2, 3]

describe('R.mapIndexed', () => {
  it('happy', () => {
    const result = mapIndexed<number>(fn, list)
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = mapIndexed<number>(fn)(list)
    result // $ExpectType readonly number[]
  })
})

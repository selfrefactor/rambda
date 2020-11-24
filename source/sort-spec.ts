import {sort} from 'rambda'

const list = [3, 0, 5, 2, 1]

function sortFn(a: number, b: number): number {
  return a > b ? 1 : -1
}

describe('R.sort', () => {
  it('happy', () => {
    const result = sort(sortFn, list)
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = sort(sortFn)(list)
    result // $ExpectType readonly number[]
  })
})

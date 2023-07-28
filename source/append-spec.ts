import {append} from 'rambda'

const list = [1, 2, 3]

describe('R.append', () => {
  it('happy', () => {
    const result = append(4, list)
    result // $ExpectType number[]
  })

  it('curried', () => {
    const curried = append(4)
    curried // $ExpectType (list: number[]) => number[]

    const result = curried(list)
    result // $ExpectType number[]
  })
})

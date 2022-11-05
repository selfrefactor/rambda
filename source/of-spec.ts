import {of} from 'rambda'

const list = [1, 2, 3]

describe('R.of', () => {
  it('happy', () => {
    const result = of(4)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = of(list)

    result // $ExpectType number[][]
  })
})

import {move} from 'rambda'

const list = [1, 2, 3]

describe('R.move', () => {
  it('happy', () => {
    const result = move(0, 1, list)

    result // $ExpectType readonly number[]
  })
  it('curried 1', () => {
    const result = move(0, 1)(list)

    result // $ExpectType readonly number[]
  })
  it('curried 2', () => {
    const result = move(0)(1)(list)

    result // $ExpectType readonly number[]
  })
})

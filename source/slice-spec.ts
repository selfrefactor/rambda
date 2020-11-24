import {slice} from 'rambda'

const list = [1, 2, 3, 4, 5]

describe('R.slice', () => {
  it('happy', () => {
    const result = slice(1, 3, list)
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = slice(1, 3)(list)
    result // $ExpectType readonly number[]
  })
})

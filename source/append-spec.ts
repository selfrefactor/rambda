import {append} from 'rambda'

const list = [1, 2, 3]

describe('R.append', () => {
  it('happy', () => {
    const result = append(4, list)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = append(4)(list)

    result // $ExpectType readonly number[]
  })
})

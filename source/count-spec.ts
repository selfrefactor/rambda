import {count} from 'rambda'

const list = [1, 2, 3]

describe('R.count', () => {
  it('happy', () => {
    const result = count(2, list)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = count(2)(list)

    result // $ExpectType number
  })
})

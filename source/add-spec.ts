import {add} from 'rambda'

describe('R.add', () => {
  it('happy', () => {
    const result = add(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = add(4)(1)

    result // $ExpectType number
  })
})

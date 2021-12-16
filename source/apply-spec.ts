import {apply, identity} from 'rambda'

describe('R.apply', () => {
  it('happy', () => {
    const result = apply<number>(identity, [1, 2, 3])

    result // $ExpectType number
  })
  it('curried', () => {
    const fn = apply<number>(identity)
    const result = fn([1, 2, 3])

    result // $ExpectType number
  })
})

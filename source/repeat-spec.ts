import {repeat} from 'rambda'

describe('R.repeat', () => {
  it('happy', () => {
    const result = repeat(4, 7)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = repeat(4)(7)

    result // $ExpectType readonly number[]
  })
})

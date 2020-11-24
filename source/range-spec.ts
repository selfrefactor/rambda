import {range} from 'rambda'

describe('R.range', () => {
  it('happy', () => {
    const result = range(1, 4)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = range(1)(4)

    result // $ExpectType readonly number[]
  })
})

import {none} from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = none(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = none<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})

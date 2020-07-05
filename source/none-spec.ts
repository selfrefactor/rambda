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
  it('pass index', () => {
    const result = none(
      (x, i) => {
        x // $ExpectType number
        i // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('pass index + curry', () => {
    const result = none<number>((x, i) => {
      x // $ExpectType number
      i // $ExpectType number
      return x > 0
    })([1, 2, 3])
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

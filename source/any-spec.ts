import {any} from 'rambda'

describe('any', () => {
  it('happy', () => {
    const result = any(
      (x) => {
        x // $ExpectType number
        return x > 2
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })

  it('when curried needs a type', () => {
    const result = any<number>(
      (x) => {
        x // $ExpectType number
        return x > 2
      })([1, 2, 3])
    result // $ExpectType boolean
  })
  it('pass index as second argument', () => {
    const result = any(
      (x, i) => {
        x // $ExpectType number
        i // $ExpectType number
        return x > 2
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('pass index as second argument when curried needs a type', () => {
    const result = any<number>(
      (x, i) => {
        x // $ExpectType number
        i // $ExpectType number
        return x > 2
      })([1, 2, 3])
    result // $ExpectType boolean
  })
})

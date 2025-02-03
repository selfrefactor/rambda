import {rejectIndexed} from 'rambda'

describe('R.rejectIndexed with array', () => {
  it('happy', () => {
    const result = rejectIndexed(
      (x, index) => {
        x // $ExpectType number
        index // $ExpectType number
        return x > 1
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = rejectIndexed<number>((x, index) => {
      x // $ExpectType number
      index // $ExpectType number
      return x > 1
    })([1, 2, 3])
    result // $ExpectType number[]
  })
})

describe('R.rejectIndexed with objects', () => {
  it('happy', () => {
    const result = rejectIndexed(
      (x, prop) => {
        x // $ExpectType number
        prop // $ExpectType string

        return x > 1
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Record<PropertyKey, number>
  })
  it('curried require dummy type', () => {
    const result = rejectIndexed<number, any>((x, prop) => {
      x // $ExpectType number
      prop // $ExpectType string
      return x > 1
    })({a: 1, b: 2})
    result // $ExpectType Record<PropertyKey, number>
  })
})

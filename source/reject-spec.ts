import {reject} from 'rambda'

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number
        return x > 1
      },
      [1, 2, 3]
    )
    result // $ExpectType readonly number[]
  })
  it('curried require explicit type', () => {
    const result = reject<number>(x => {
      x // $ExpectType number
      return x > 1
    })([1, 2, 3])
    result // $ExpectType readonly number[]
  })
})

describe('R.reject with objects', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number

        return x > 1
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('curried require dummy type', () => {
    const result = reject<number, any>(x => {
      return x > 1
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
})

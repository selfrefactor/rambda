import {map} from 'rambda'

describe('R.map with arrays', () => {
  it('iterable returns the same type as the input', () => {
    const result = map<number>(
      (x: number) => {
        x // $ExpectType number
        return x + 2
      },
      [1, 2, 3]
    )
    result // $ExpectType readonly number[]
  })
  it('iterable returns the same type as the input - curried', () => {
    const result = map<number>((x: number) => {
      x // $ExpectType number
      return x + 2
    })([1, 2, 3])
    result // $ExpectType readonly number[]
  })
})

describe('R.map with objects', () => {
  it('iterable with all three arguments - curried', () => {
    // It requires dummy third typing argument
    // in order to identify compared to curry typings for arrays
    // ============================================
    const result = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<string>
  })
  it('iterable with all three arguments', () => {
    const result = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with property argument', () => {
    const result = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with no property argument', () => {
    const result = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
})

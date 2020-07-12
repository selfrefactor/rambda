import {forEach} from 'rambda'

describe('R.forEach with arrays', () => {
  it('iterable returns the same type as the input', () => {
    const result = forEach<number>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return a + 2
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('iterable returns the same type as the input - curried', () => {
    const result = forEach<number>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return a + 2
    })([1, 2, 3])
    result // $ExpectType number[]
  })
  it('iterable with index argument', () => {
    const result = forEach<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return `${a}`
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('iterable with index argument - curried', () => {
    const result = forEach<number, string>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return `${a}`
    })([1, 2, 3])
    result // $ExpectType number[]
  })
})

describe('R.forEach with objects', () => {
  it('iterable with all three arguments - curried', () => {
    // It requires dummy third typing argument
    // in order to distinguish compared to curry typings for arrays
    // ============================================
    const result = forEach<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
  it('iterable with all three arguments', () => {
    const result = forEach<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('iterable with property argument', () => {
    const result = forEach<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('iterable with no property argument', () => {
    const result = forEach<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
})

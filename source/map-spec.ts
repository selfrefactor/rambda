import {map} from 'rambda'

describe('map with arrays', () => {
  it('only one type', () => {
    const x = map<number>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return a + 2
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('only one type + curry', () => {
    const x = map<number>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return a + 2
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('2 types', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType number
        return `${a}`
      },
      [1, 2, 3]
    )
    x // $ExpectType string[]
  })
  it('2 types + curry', () => {
    const x = map<number, string>((a, b) => {
      a // $ExpectType number
      b // $ExpectType number
      return `${a}`
    })([1, 2, 3])
    x // $ExpectType string[]
  })
})

describe('map with objects', () => {
  it('curry', () => {
    // It requires dummy third typing argument
    // in order to distinguish compared to curry typings for arrays
    // ============================================
    const x = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<string>
  })
  it('1', () => {
    const x = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('2', () => {
    const x = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
  it('3', () => {
    const x = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<string>
  })
})

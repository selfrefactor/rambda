import {filter} from 'rambda'

describe('filter with array', () => {
  it('1 curry', () => {
    const x = filter<number>(a => {
      a // $ExpectType number
      return a > 1
    })([1, 2, 3])
    x // $ExpectType number[]
  })
  it('1', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
  it('2', () => {
    const x = filter<number>(
      (a, b) => {
        a // $ExpectType number
        return a > 1
      },
      [1, 2, 3]
    )
    x // $ExpectType number[]
  })
})

describe('filter with objects', () => {
  it('curry', () => {
    const x = filter<number, number>((a, b, c) => {
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a: 1, b: 2})
    x // $ExpectType Dictionary<number>
  })

  it('object with three arguments predicate', () => {
    const x = filter<number>(
      (a, b, c) => {
        b // $ExpectType string
        c // $ExpectType Dictionary<number>

        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })

  it('object with two arguments predicate', () => {
    const x = filter<number>(
      (a, b) => {
        b // $ExpectType string
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
  it('object with one argument predicate', () => {
    const x = filter<number>(
      a => {
        a // $ExpectType number
        return a > 1
      },
      {a: 1, b: 2}
    )
    x // $ExpectType Dictionary<number>
  })
})

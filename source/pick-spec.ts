import {pick} from 'rambda'

describe('pick with string as props input', () => {
  it('one type', () => {
    const x = pick<number>('a,c', {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick<number>('a,c')({a: 1, b: 2, c: 3, d: 4})
    y // $ExpectType Dictionary<number>
  })
  it('two types', () => {
    interface Output {
      a: number,
      c: number,
    }

    const x = pick<string | number, Output>('a,c', {
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    x // $ExpectType Output
    x.a // $ExpectType number
    const y = pick<string | number, Output>('a,c')({
      a: 1,
      b: '2',
      c: 3,
      d: 4,
    })
    y // $ExpectType Output
    y.a // $ExpectType number
  })

  it('infered input type', () => {
    const x = pick('a,c', {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick('a,c', {a: 1, b: '1', c: 3, d: 4}) 
    y // $ExpectType Dictionary<string | number>
    const q = pick('a,c')({a: 1, b: 1, c: 3, d: 4}) 
    q // $ExpectType Dictionary<unknown>
  })
})

describe('pick with array as props input', () => {
  it('one type', () => {
    const x = pick<number>(['a,c'], {a: 1, b: 2, c: 3, d: 4})
    x // $ExpectType Dictionary<number>
    const y = pick<number>(['a,c'])({a: 1, b: 2, c: 3, d: 4})
    y // $ExpectType Dictionary<number>
  })
})

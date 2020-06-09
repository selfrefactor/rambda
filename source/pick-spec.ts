import {pick} from 'rambda'

describe('pick with array as props input', () => {
  interface Input {
    a: string,
    b: number,
    c: number,
    d: number,
  }

  it('need to declare the types of input and props to pick - string as prop', () => {
    const input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = pick<Input, string>(['a,c'], input)
    result // $ExpectType Pick<Input, "a" | "b" | "c" | "d">
    result.a // $ExpectType string
    result.b // $ExpectType number

    const curriedResult = pick<Input, string>(['a,c'], input)
    curriedResult // $ExpectType Pick<Input, "a" | "b" | "c" | "d">
  })

  it('need to declare the types of input and props to pick - number as prop', () => {
    const result = pick<string[], number>([1, 2], ['a', 'b', 'c', 'd'])
    result[1] // $ExpectType string
    result[2] // $ExpectType string
    result[3] // should not be possible but it is
  })

  it('need to declare the types of input and props to pick - symbol as prop', () => {
    const symbolProp = Symbol('s')
    const result = pick([symbolProp], {[symbolProp]: 'a'})

    result // $ExpectType Pick<{ [symbolProp]: string; }, typeof symbolProp>
  })
})

describe('R.pick with string as props input', () => {
  interface Output {
    a: number,
    c: number,
  }

  it('explicitly declare output', () => {
    const result = pick<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.a // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    interface Input {
      a: number,
      b: number,
      c: number,
      d: number,
    }
    const result = pick<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Input, Output>('a,c')({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    })

    curriedResult.a // $ExpectType number
  })

  it('without passing type', () => {
    const result = pick('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})

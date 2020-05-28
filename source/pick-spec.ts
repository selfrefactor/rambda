import {pick} from 'rambda'

describe('pick with string as props input', () => {
  type Output = {
    a: number
    c: number
  }

  it('explicitly declare output', () => {
    const result = pick<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.a // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    type Input = {
      a: number
      b: number
      c: number
      d: number
    }
    const result = pick<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.a // $ExpectType number

    const curriedResult = pick<Input, Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.a // $ExpectType number
  })

  it('without passing type', () => {
    const result = pick('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})

describe('pick with array as props input', () => {
  type Foo = {
    a: string
    b: number
    c: number
    d: number
  }
  it('one type', () => {
    const input: Foo = {a: 'foo', b: 2, c: 3, d: 4}
    const result = pick<Foo, string>(['a,c'], input)
    result // $ExpectType Pick<Foo, "a" | "b" | "c" | "d">
    result.a // $ExpectType string
    result.b // $ExpectType number

    const curriedResult = pick<Foo, string>(['a,c'], input)
    curriedResult // $ExpectType Pick<Foo, "a" | "b" | "c" | "d">
  })
})

describe('R.pick bug', () => {
  type MyObject = {
    id?: number;
    type: string;
    value: string;
  }
  const myObj: MyObject = { id: 0, type: 'classA', value: 'foo' };

  it('happy', () => {
    const result = pick<MyObject, string>(['type', 'value'], myObj);
    result // $ExpectType Pick<MyObject, "type" | "value" | "id">
    result.id // $ExpectType number | undefined
    result.type // $ExpectType string
  })
})

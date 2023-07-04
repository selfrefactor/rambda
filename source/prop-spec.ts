import {prop} from 'rambda'

describe('R.prop', () => {
  interface Foo {
    a: number,
    b: string,
    c?: number,
  }
  const obj: Foo = {a: 1, b: 'foo'}

  it('issue #553', () => {
    const result = {
      a: prop('a', obj),
      b: prop('b', obj),
      c: prop('c', obj),
    }
    const curriedResult = {
      a: prop('a')(obj),
      b: prop('b')(obj),
      c: prop('c')(obj),
    }

    result // $ExpectType { a: number; b: string; c: number | undefined; }
    curriedResult // $ExpectType { a: number; b: string; c: number | undefined; }
  })
})

describe('with number as prop', () => {
  const list = [1, 2, 3]
  const index = 1
  it('happy', () => {
    const result = prop(index, list)

    result // $ExpectType number
  })
  it('curried require explicit type', () => {
    const result = prop<number>(index)(list)

    result // $ExpectType number
  })
})

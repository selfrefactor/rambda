import {paths} from 'rambda'

interface Input {
  a: number,
  b: number,
  c: number,
}

const input: Input = {a: 1, b: 2, c: 3}

describe('R.paths', () => {
  it('with dot notation', () => {
    const result = paths<number>(['a.b.c', 'foo.bar'], input)
    result // $ExpectType readonly (number | undefined)[]
  })

  it('without type', () => {
    const result = paths(['a.b.c', 'foo.bar'], input)
    result // $ExpectType readonly unknown[]
  })

  it('with array as path', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']], input)
    result // $ExpectType readonly (number | undefined)[]
  })

  it('curried', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']])(input)
    result // $ExpectType readonly (number | undefined)[]
  })
})

import { paths } from 'rambda'

interface Input{
  a: number,
  b: number,
  c: number,
}

const input: Input = { a: 1, b: 2, c: 3 }

describe('paths', () => {
  it('with dot notation', () => {
    const result = paths<number>(['a.b.c', 'foo.bar'], input)
    result // $ExpectType (number | undefined)[]
  });

  it('without type', () => {
    const result = paths(['a.b.c', 'foo.bar'], input)
    result // $ExpectType unknown[]
  });

  it('with array as path', () => {
    const result = paths<number>([['a','b','c'], ['foo.bar']], input)
    result // $ExpectType (number | undefined)[]
  });
  
  it('with curry', () => {
    const result = paths<number>([['a','b','c'], ['foo.bar']])(input)
    result // $ExpectType (number | undefined)[]
  });
});

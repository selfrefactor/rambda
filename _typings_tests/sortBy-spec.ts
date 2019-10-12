import { sortBy } from 'rambda'

describe('sortBy', () => {
  it('happy', () => {
    interface Input {a: number}

    function fn(x: Input): number{
      return x.a
    }

    const input: Array<Input> = [ { a : 2 }, { a : 1 }, { a : 0 } ]
    const result =  sortBy(fn, input)

    result // $ExpectType Input[]
    result[0].a // $ExpectType number
  });
});

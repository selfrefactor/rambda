import { sortBy } from 'rambda'

interface Input {
  a: number
}

describe('R.sortBy', () => {
  it('passing type to sort function and list', () => {
    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{ a: 2 }, { a: 1 }, { a: 0 }]
    const result = sortBy(fn)(input)

    result // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
})

import { flatMap, pipe } from 'rambda'

describe('R.flatMap', () => {
  it('happy', () => {
    const listOfLists: string[][] = [
      ['f', 'bar'],
      ['baz', 'b'],
    ]
    const result = pipe(
      listOfLists,
      x => x,
      flatMap(x => {
        x // $ExpectType string
        return Number(x) + 1
      }),
    )
    result // $ExpectType number[]
  })
})

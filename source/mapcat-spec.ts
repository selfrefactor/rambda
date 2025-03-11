import { mapcat, pipe } from 'rambda'

describe('R.mapcat', () => {
  it('happy', () => {
    const listOfLists: string[][] = [
      ['f', 'bar'],
      ['baz', 'b'],
    ]
    const result = pipe(
      listOfLists,
			x => x,
      mapcat(x => {
        x // $ExpectType string
        return Number(x)+1
      }),
    )
    result // $ExpectType number[]
  })
})

import { mapcat, pipe } from 'rambdax'

describe('R.mapcat', () => {
  it('happy', () => {
    const listOfLists = [
      ['f', 'bar'],
      ['baz', 'b'],
    ]
    const result = pipe(
      listOfLists,
      mapcat(x => {
        x // $ExpectType string
        return x.length
      }),
    )
    result // $ExpectType number[]
  })
})

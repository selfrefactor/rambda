import { mapcat, piped } from 'rambda'

describe('R.mapcat', () => {
  it('happy', () => {
    const listOfLists = [
      ['f', 'bar'],
      ['baz', 'b'],
    ]
    const result = piped(
      listOfLists,
      mapcat(x => {
        x // $ExpectType string
        return x.length
      }),
    )
    result // $ExpectType number[]
  })
})

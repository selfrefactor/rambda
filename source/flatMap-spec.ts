import { flatMap, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

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
        expectTypeOf(x).toEqualTypeOf<string>()
        return Number(x) + 1
      }),
    )
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

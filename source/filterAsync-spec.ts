import { filterAsync, pipeAsync } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('within pipe', async () => {
    const result = await pipeAsync(
      list,
      filterAsync(async x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return x > 1
      }),
    )
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

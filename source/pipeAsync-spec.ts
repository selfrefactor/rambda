import { pipeAsync } from 'rambda'
import { delay } from 'rambdax'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.pipeAsync', () => {
  it('happy', async () => {
    const result = await pipeAsync(
      4,
      async x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        await delay(100)
        return x + 1
      },
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return Promise.resolve([x])
      },
    )

    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
})

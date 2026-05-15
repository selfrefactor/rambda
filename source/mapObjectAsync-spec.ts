import { mapObjectAsync, pipeAsync } from 'rambda'
import { delay } from 'rambdax'
import { expectTypeOf, it } from 'vitest'

it('R.mapObjectAsync', async () => {
  const result = await pipeAsync(
    { a: 'foo', b: 'bar' },
    mapObjectAsync(async x => {
      await delay(100)
      expectTypeOf(x).toEqualTypeOf<string>()
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
    mapObjectAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<number>()
})

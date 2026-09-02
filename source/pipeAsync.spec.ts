import { delay } from './delay'
import { pipeAsync } from './pipeAsync'


test('happy', async () => {
  const result = await pipeAsync(
    4,
    async x => {
      await delay(100)
      return x + 1
    },
    x => Promise.resolve([x]),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([5])
})

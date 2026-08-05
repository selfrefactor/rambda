import { delay } from './delay'
import { mapObjectAsync } from './mapObjectAsync'
import { pipeAsync } from './pipeAsync'

test('happy', async () => {
  const indexes: string[] = []
  const result = await pipeAsync(
    { a: 1, b: 2 },
    mapObjectAsync(async (x, i) => {
      await delay(100)
      indexes.push(i)
      return x + 1
    }),
  )
  expect(indexes).toEqual(['a', 'b'])
  expect(result).toEqual({ a: 2, b: 3 })
	expectTypeOf(result).toEqualTypeOf<{ a: number; b: number }>()
})

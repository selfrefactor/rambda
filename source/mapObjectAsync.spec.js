import { delay } from './delay.js'
import { mapObjectAsync } from './mapObjectAsync.js'
import { pipeAsync } from './pipeAsync.js'

test('happy', async () => {
  const indexes = []
  const result = await pipeAsync(
    { a: 1, b: 2 },
    mapObjectAsync(async (x, i) => {
      await delay(100)
      indexes.push(i)
      return x + 1
    }),
  )
  expect(indexes).toEqual(['a', 'b'])
  expect(result).toEqual({
    a: 2,
    b: 3,
  })
})

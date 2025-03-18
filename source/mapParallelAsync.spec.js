import { pipeAsync } from './pipeAsync.js'
import { delay } from './delay.js'
import { mapParallelAsync } from './mapParallelAsync.js'

test('happy', async () => {
  const fn = async (x, i) => {
    await delay(100)

    return x + i
  }
  const result = await mapParallelAsync(fn)([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3, 5 ])
})

test('pipeAsync', async () => {
  const result = await pipeAsync(
		[1, 2, 3],
    mapParallelAsync(async x => {
      await delay(100)

      return x + 1
    })
	)
  expect(result).toEqual([ 2,3,4 ])
})

import { willFailAssertion } from './_internals/testUtils.js'
import { delay } from './delay.js'
import { map } from './map.js'
import { mapParallelAsync } from './mapParallelAsync.js'
import { pipeAsync } from './pipeAsync.js'

test('happy', async () => {
  const fn = async x => {
    await delay(100)

    return x + 10
  }
  const result = await mapParallelAsync(fn, [1, 2, 3])
  expect(result).toEqual([11, 12, 13])
})

test('pipeAsync', async () => {
  const result = await pipeAsync(
    [1, 2, 3],
    mapParallelAsync(async x => {
      await delay(100)

      return x + 1
    }),
    mapParallelAsync(async x => {
      await delay(100)

      return x + 10
    }),
    map(x => x * 10),
  )
  expect(result).toEqual([120, 130, 140])
})

test('error', async () => {
  try {
    const fn = async () => {
      JSON.parse('{:')
    }
    await mapParallelAsync(fn, [1, 2, 3])
    willFailAssertion()
  } catch (err) {
    expect(err.message).toBeTruthy()
  }
})

test('pass index as second argument', async () => {
  await mapParallelAsync(
    (x, i) => {
      expect(x % 10).toBe(0)
      expect(typeof i).toBe('number')
    },
    [10, 20, 30],
  )
})

import { delay } from './delay.js'
import { map } from './map.js'
import { mapAsync } from './mapAsync.js'
import { pipeAsync } from './pipeAsync.js'

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy', async () => {
  const indexes = []
  const fn = async (x, prop) => {
    await delay(100)
    indexes.push(prop)
    return x + 1
  }
  const result = await mapAsync(fn)([1, 2, 3])
  expect(result).toEqual([2, 3, 4])
  expect(indexes).toEqual([0, 1, 2])
})

test('with R.pipeAsync', async () => {
	const fn = async x => x + 1
  const result = await pipeAsync(
    [1, 2, 3],
    map(x => x + 1),
    mapAsync(async x => {
      delay(x)

      return x
    }),
		mapAsync(fn),
    map(x => x * 10),
  )
  expect(result).toEqual([30, 40, 50])
})

test('error', async () => {
  try {
    await mapAsync(rejectDelay)([1, 2, 3])
  } catch (err) {
    expect(err).toBe(21)
  }
})

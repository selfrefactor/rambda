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
  const fn = async (x, prop) => {
    await delay(100)
    expect(typeof prop).toBe('number')

    return x + 1
  }
  const result = await mapAsync(fn, [1, 2, 3])
  expect(result).toEqual([2, 3, 4])
})

test('with object', async () => {
  const fn = async (x, prop) => {
    expect(typeof prop).toBe('string')

    return x + 1
  }
  const result = await mapAsync(fn, {
    a: 1,
    b: 2,
  })
  expect(result).toEqual({
    a: 2,
    b: 3,
  })
})

test('with R.pipeAsync', async () => {
  const result = await pipeAsync(
    [1, 2, 3],
    map(x => x + 1),
    mapAsync(async x => {
      delay(x)

      return x
    }),
    map(x => x * 10),
  )
  expect(result).toEqual([20, 30, 40])
})

test('error', async () => {
  try {
    await mapAsync(rejectDelay)([1, 2, 3])
  } catch (err) {
    expect(err).toBe(21)
  }
})

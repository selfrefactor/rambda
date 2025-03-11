import { delay } from './delay.js'
import { mapAsync } from './mapAsync.js'
import { mapParallelAsyncWithLimit } from './mapParallelAsyncWithLimit.js'
// import { pipeAsync } from './pipeAsync.js'
import { toDecimal } from './toDecimal.js'

jest.setTimeout(30000)

test('happy', async () => {
  const limit = 3
  const startTime = new Date().getTime()
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const iterable = async x => {
    await delay(500)

    return x + 1
  }
  const result = await mapParallelAsyncWithLimit(iterable, limit, list)
  const endTime = new Date().getTime()
  const diffTime = endTime - startTime

  const startTime2 = new Date().getTime()
  await mapAsync(iterable, list)
  const endTime2 = new Date().getTime()
  const diffTime2 = endTime2 - startTime2

  const methodScale = toDecimal((diffTime2 - diffTime) / 1000, 0)
  expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(methodScale).toBe(limit)
})

const fn = async x => {
  await delay(100)

  return x + 1
}

// test('with R.composeAsync', async () => {
//   const result = await pipeAsync(, x =>
//     x.map(xx => xx + 1), mapParallelAsyncWithLimit(fn, 2),
//   )([1, 2, 3, 4, 5, 6])
//   expect(result).toEqual([3, 4, 5, 6, 7, 8])
// })

test('fallback to R.mapFastAsync', async () => {
  const result = await mapParallelAsyncWithLimit(fn, 4, [1, 2, 3])
  expect(result).toEqual([2, 3, 4])
})

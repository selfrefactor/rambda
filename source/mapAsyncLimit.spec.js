import isCI from 'is-ci'

import { composeAsync } from './composeAsync'
import { delay } from './delay'
import { mapAsync } from './mapAsync'
import { mapAsyncLimit } from './mapAsyncLimit'
import { toDecimal } from './toDecimal'

jest.setTimeout(30000)

test('happy', async () => {
  const limit = 3
  const startTime = new Date().getTime()
  const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  const iterable = async x => {
    await delay(500)

    return x + 1
  }
  const result = await mapAsyncLimit(
    iterable, limit, list
  )
  const endTime = new Date().getTime()
  const diffTime = endTime - startTime

  const startTime2 = new Date().getTime()
  await mapAsync(iterable, list)
  const endTime2 = new Date().getTime()
  const diffTime2 = endTime2 - startTime2

  const methodScale = toDecimal((diffTime2 - diffTime) / 1000, 0)
  expect(result).toEqual([ 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  if (!isCI) expect(methodScale).toBe(limit)
})

const fn = async x => {
  await delay(100)

  return x + 1
}

test('with R.composeAsync', async () => {
  const result = await composeAsync(mapAsyncLimit(fn, 2), x =>
    x.map(xx => xx + 1))([ 1, 2, 3, 4, 5, 6 ])
  expect(result).toEqual([ 3, 4, 5, 6, 7, 8 ])
})

test('fallback to R.mapFastAsync', async () => {
  const result = await mapAsyncLimit(
    fn, 4, [ 1, 2, 3 ]
  )
  expect(result).toEqual([ 2, 3, 4 ])
})

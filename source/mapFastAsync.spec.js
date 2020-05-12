import { composeAsync } from './composeAsync'
import { map } from './map'
import { mapFastAsync } from './mapFastAsync'

const delay = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a + 20)
    }, 100)
  })

const tap = a =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(a)
    }, 100)
  })

const rejectDelay = a =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy path', async () => {
  const result = await mapFastAsync(delay, [ 1, 2, 3 ])
  expect(result).toEqual([ 21, 22, 23 ])
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapFastAsync(async a => delay(a)),
    mapFastAsync(delay),
    map(a => a * 10)
  )(await tap([ 1, 2, 3 ]))
  expect(result).toEqual([ 50, 60, 70 ])
})

test('error', async () => {
  try {
    const result = await mapFastAsync(rejectDelay)([ 1, 2, 3 ])
  } catch (err){
    expect(err).toBe(21)
  }
})

test('with array', async () => {
  await mapFastAsync((x, i) => {
    expect(x % 10).toBe(0)
    expect(typeof i).toBe('number')
  },
  [ 10, 20, 30 ])
})

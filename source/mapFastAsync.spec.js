import { composeAsync } from './composeAsync.js'
import { delay } from './delay.js'
import { map } from './map.js'
import { mapFastAsync } from './mapFastAsync.js'

test('happy', async () => {
  const fn = async x => {
    await delay(100)

    return x + 10
  }
  const result = await mapFastAsync(fn, [ 1, 2, 3 ])
  const curriedResult = await mapFastAsync(fn)([ 1, 2, 3 ])
  expect(result).toEqual([ 11, 12, 13 ])
  expect(curriedResult).toEqual([ 11, 12, 13 ])
})

test('composeAsync', async () => {
  const result = await composeAsync(
    mapFastAsync(async x => {
      await delay(100)

      return x + 1
    }),
    mapFastAsync(async x => {
      await delay(100)

      return x + 10
    }),
    map(x => x * 10)
  )([ 1, 2, 3 ])
  expect(result).toEqual([ 21, 31, 41 ])
})

test('error', async () => {
  try {
    const fn = async x => {
      JSON.parse('{:')
    }
    const result = await mapFastAsync(fn, [ 1, 2, 3 ])
  } catch (err){
    expect(err.message).toBe('Unexpected token : in JSON at position 1')
  }
})

test('pass index as second argument', async () => {
  await mapFastAsync((x, i) => {
    expect(x % 10).toBe(0)
    expect(typeof i).toBe('number')
  },
  [ 10, 20, 30 ])
})

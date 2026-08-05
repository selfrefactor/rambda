import { delay } from './delay'
import { map } from './map'
import { mapAsync } from './mapAsync'
import { pipeAsync } from './pipeAsync'

const rejectDelay = (a: number) =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(a + 20)
    }, 100)
  })

test('happy', async () => {
  const indexes: number[] = []
  const fn = async (x: number, prop: number) => {
    await delay(100)
    indexes.push(prop)
    return x + 1
  }
  const result = await mapAsync<number[], number>(fn)([1, 2, 3])
  expect(result).toEqual([2, 3, 4])
  expect(indexes).toEqual([0, 1, 2])
})

test('with R.pipeAsync', async () => {
  const fn = async (x: number) => x + 1
  const result = await pipeAsync(
    [1, 2, 3],
    map(x => x + 1),
    mapAsync(async x => {
      await delay(x)
      return x
    }),
    mapAsync(fn),
    map(x => x * 10),
  )
  expect(result).toEqual([30, 40, 50])
})

test('error', async () => {
  try {
    await mapAsync<number[], unknown>(rejectDelay)([1, 2, 3])
  } catch (err) {
    expect(err).toBe(21)
  }
})

test('happy', async () => {
  const list = ['a', 'bc', 'def']
  const result = await pipeAsync(
    list,
    mapAsync(async x => {
      await delay(100)
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
    map(x => x + 1),
    mapAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([4, 14, 6])
})

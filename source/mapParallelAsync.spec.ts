import { delay } from './delay'
import { mapParallelAsync } from './mapParallelAsync'

test('happy', async () => {
  const fn = async (x: number, i: number) => {
    await delay(100)
    return x + i
  }
  const result = await mapParallelAsync<number[], number>(fn)([1, 2, 3])
	expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 3, 5])
})

test('with batchSize', async () => {
  const fn = async (x: number, i: number) => {
    await delay(100)
    return `${x}:${i}`
  }
  const result = await mapParallelAsync<number[], string>(fn, 2)([1, 2, 3, 4, 5])
  expect(result).toEqual(['1:0', '2:1', '3:2', '4:3', '5:4'])
})


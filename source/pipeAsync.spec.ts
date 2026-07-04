import { delay } from './delay'
import { pipeAsync } from './pipeAsync'

const fn1 = (x: number) => Promise.resolve(x + 2)
const fn2 = async (x: number) => {
  await delay(1)
  return x + 3
}

test('happy', async () => {
  const result = await pipeAsync(1, fn1, x => x + 2, fn2)
  expect(result).toBe(8)
})

test('type test', async () => {
  const result = await pipeAsync(
    4,
    async x => {
      await delay(100)
      return x + 1
    },
    x => Promise.resolve([x]),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([5])
})

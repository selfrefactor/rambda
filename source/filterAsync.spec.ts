import { filterAsync } from './filterAsync'
import { pipeAsync } from './pipeAsync'

test('happy', async () => {
  const isEven = async (n: number) => n % 2 === 0
  expect(await filterAsync(isEven)([1, 2, 3, 4])).toEqual([2, 4])
})

test('within pipe', async () => {
  const result = await pipeAsync(
    [1, 2, 3],
    filterAsync(async (x: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return x > 1
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([2, 3])
})

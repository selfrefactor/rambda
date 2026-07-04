import { delay } from './delay'
import { mapObjectAsync } from './mapObjectAsync'
import { pipeAsync } from './pipeAsync'

test('happy', async () => {
  const indexes: string[] = []
  const result = await pipeAsync(
    { a: 1, b: 2 },
    mapObjectAsync(async (x, i) => {
      await delay(100)
      indexes.push(i)
      return x + 1
    }),
  )
  expect(indexes).toEqual(['a', 'b'])
  expect(result).toEqual({ a: 2, b: 3 })
})

test('type test', async () => {
  const result = await pipeAsync(
    { a: 'foo', b: 'bar' },
    mapObjectAsync(async x => {
      await delay(100)
      return x.length % 2 ? x.length + 1 : x.length + 10
    }),
    x => x,
    mapObjectAsync(async x => {
      await delay(100)
      return x + 1
    }),
  )
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 5, b: 5 })
})

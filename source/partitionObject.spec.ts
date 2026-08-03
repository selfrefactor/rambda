import { partitionObject } from './partitionObject'
import { pipe } from './pipe'

test('type test', () => {
  const result = pipe({ a: 1, b: 2 }, partitionObject((x, prop) => x > 1 || prop === 'c'))
  expectTypeOf(result).toEqualTypeOf<[Record<string, number>, Record<string, number>]>()
  expect(result).toEqual([{ b: 2 }, { a: 1 }])
})

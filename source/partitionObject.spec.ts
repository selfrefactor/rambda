import { partitionObject } from './partitionObject'
import { pipe } from './pipe'

test('happy', () => {
  const predicate = (value: number) => value > 2
  const hash = { a: 1, b: 2, c: 3, d: 4 }
  const result = partitionObject(predicate)(hash)
  expect(result).toEqual([{ c: 3, d: 4 }, { a: 1, b: 2 }])
})

test('type test', () => {
  const result = pipe({ a: 1, b: 2 }, partitionObject((x, prop) => x > 1 || prop === 'c'))
  expectTypeOf(result).toEqualTypeOf<[Record<string, number>, Record<string, number>]>()
  expect(result).toEqual([{ b: 2 }, { a: 1 }])
})

import { flatten } from './flatten'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe([1, 2, [3, [4]]], flatten<number>)
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 2, 3, 4])
})

import { takeWhile } from './takeWhile'
import { pipe } from './pipe'

test('always true', () => {
  const result = takeWhile(x => true)([1, 2, 3, 4, 5])
  expect(result).toEqual([1, 2, 3, 4, 5])
})

test('always false', () => {
  const result = takeWhile(x => false)([1, 2, 3, 4, 5])
  expect(result).toEqual([])
})

test('type test', () => {
  const result = takeWhile((x: number) => x > 1)([2, 3, 1])
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([2, 3])
})

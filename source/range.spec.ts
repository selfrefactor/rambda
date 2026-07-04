import { range } from './range'

test('happy', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4, 5])
  expect(range(3, 5)).toEqual([3, 4, 5])
  expect(range(5, 3)).toEqual([])
  expect(range(5, 5)).toEqual([5])
  expect(range(0)).toEqual([0])
  expect(range(1)).toEqual([0, 1])
  expect(range(2)).toEqual([0, 1, 2])
})

test('type test', () => {
  const result = [range(1, 4), range(1)]
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result[0]).toEqual([1, 2, 3, 4])
  expect(result[1]).toEqual([0, 1])
})

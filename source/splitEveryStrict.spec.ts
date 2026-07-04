import { splitEveryStrict } from './splitEveryStrict'

test('happy', () => {
  expect(splitEveryStrict(3)([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6]])
})

test('type test', () => {
  const result = splitEveryStrict(3)([1, 2, 3, 4, 5, 6, 7])
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result).toEqual([[1, 2, 3], [4, 5, 6]])
})

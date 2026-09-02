import { splitEveryStrict } from './splitEveryStrict'

test('happy', () => {
  const result = splitEveryStrict(3)([1, 2, 3, 4, 5, 6, 7])
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result).toEqual([[1, 2, 3], [4, 5, 6]])
})

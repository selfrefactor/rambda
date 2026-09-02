import { shuffle } from './shuffle'

test('happy', () => {
  const list = [1, 2, 3, 4, 5]
  const result = shuffle(list)
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toHaveLength(5)
  expect(result.sort()).toEqual([1, 2, 3, 4, 5])
})

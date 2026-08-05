import { modifyItemAtIndex } from './modifyItemAtIndex'

const add10 = (x: number) => x + 10

test('happy', () => {
  const result = modifyItemAtIndex(1, add10)([0, 1, 2])
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([0, 11, 2])
})

test('with negative index', () => {
  expect(modifyItemAtIndex(-2, add10)([0, 1, 2])).toEqual([0, 11, 2])
})

test('when index is out of bounds', () => {
  expect(modifyItemAtIndex(4, add10)([0, 1, 2, 3])).toEqual([0, 1, 2, 3])
  expect(modifyItemAtIndex(-5, add10)([0, 1, 2, 3])).toEqual([0, 1, 2, 3])
})

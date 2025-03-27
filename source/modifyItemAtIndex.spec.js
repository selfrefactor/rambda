import { modifyItemAtIndex } from './modifyItemAtIndex.js'

const add10 = x => x + 10

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {
  expect(modifyItemAtIndex(1, add10)(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(modifyItemAtIndex(-2, add10)(list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(modifyItemAtIndex(4, add10)(list)).toEqual(list)
  expect(modifyItemAtIndex(-5, add10)(list)).toEqual(list)
})

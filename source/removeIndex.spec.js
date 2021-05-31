import {removeIndex} from './removeIndex'

const list = [1, 2, 3, 4]

test('first or before first index', () => {
  expect(removeIndex(-2, list)).toEqual([2, 3, 4])
  expect(removeIndex(-2)(list)).toEqual([2, 3, 4])
})

test('last or after last index', () => {
  expect(removeIndex(4, list)).toEqual([1, 2, 3])
  expect(removeIndex(10, list)).toEqual([1, 2, 3])
})

test('middle index', () => {
  expect(removeIndex(1, list)).toEqual([1, 3, 4])
  expect(removeIndex(2, list)).toEqual([1, 2, 4])
})

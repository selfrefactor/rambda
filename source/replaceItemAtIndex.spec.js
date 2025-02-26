import { add } from './add.js'
import { replaceItemAtIndex } from './replaceItemAtIndex.js'

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {
  expect(replaceItemAtIndex(1, add(10))(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(replaceItemAtIndex(-2, add(10))(list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(replaceItemAtIndex(4, add(1))(list)).toEqual(list)
  expect(replaceItemAtIndex(-5, add(1))(list)).toEqual(list)
})

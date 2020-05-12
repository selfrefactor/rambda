import { prevIndex } from './prevIndex'

const list = [ 1, 2, 3, 4 ]

test('happy path 1', () => {
  expect(prevIndex(2, list)).toEqual(1)
})

test('happy path 2', () => {
  expect(prevIndex(0, list)).toEqual(3)
})

test('with number as second input', () => {
  expect(prevIndex(3, 5)).toEqual(2)
  expect(prevIndex(4, 5)).toEqual(3)
  expect(prevIndex(0, 4)).toEqual(3)
})

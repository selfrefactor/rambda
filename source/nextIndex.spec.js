import { nextIndex } from './nextIndex'

const list = [ 1, 2, 3, 4 ]

test('happy path', () => {
  expect(nextIndex(2, list)).toEqual(3)
})

test('go back to the start', () => {
  expect(nextIndex(3, list)).toEqual(0)
})

test('current index is too big', () => {
  expect(nextIndex(32, list)).toEqual(0)
})

test('with number as second input', () => {
  expect(nextIndex(3, 5)).toEqual(4)
  expect(nextIndex(4, 5)).toEqual(0)
})

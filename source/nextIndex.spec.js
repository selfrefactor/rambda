import { nextIndex } from './nextIndex.js'

const list = [ 1, 2, 3, 4 ]

test('happy path', () => {
  expect(nextIndex(2, list)).toBe(3)
})

test('go back to the start', () => {
  expect(nextIndex(3, list)).toBe(0)
})

test('current index is too big', () => {
  expect(nextIndex(32, list)).toBe(0)
})

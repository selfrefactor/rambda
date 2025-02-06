import { prevIndex } from './prevIndex.js'

const list = [1, 2, 3, 4]

test('happy path 1', () => {
  expect(prevIndex(2, list)).toBe(1)
})

test('happy path 2', () => {
  expect(prevIndex(0, list)).toBe(3)
})

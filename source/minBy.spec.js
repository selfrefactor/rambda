import { minBy } from './minBy.js'

test('happy', () => {
  expect(minBy(Math.abs, -5, 2)).toBe(2)
})

test('curried', () => {
  expect(minBy(Math.abs)(2, -5)).toBe(2)
  expect(minBy(Math.abs)(2)(-5)).toBe(2)
})

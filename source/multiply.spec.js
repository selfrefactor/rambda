import { multiply } from './multiply.js'

test('happy', () => {
  expect(multiply(2, 4)).toBe(8)
  expect(multiply(2)(4)).toBe(8)
})

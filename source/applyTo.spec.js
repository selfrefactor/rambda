import { applyTo } from './applyTo.js'
import { multiply } from './multiply.js'

test('happy', () => {
  expect(applyTo(21, multiply(2))).toBe(42)
})

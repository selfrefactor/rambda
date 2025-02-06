import { isInteger } from './isInteger.js'

test('internal isInteger', () => {
  expect(isInteger(1)).toBeTrue()
  expect(isInteger(0.3)).toBeFalse()
})

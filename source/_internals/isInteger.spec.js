import { isInteger } from './isInteger.js'

test('internal isInteger', () => {
  expect(isInteger(1)).toBeTruthy()
  expect(isInteger(0.3)).toBeFalsy()
})

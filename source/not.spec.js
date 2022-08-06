import { not } from './not.js'

test('not', () => {
  expect(not(false)).toBeTrue()
  expect(not(true)).toBeFalse()
  expect(not(0)).toBeTrue()
  expect(not(1)).toBeFalse()
})

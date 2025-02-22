import { not } from './not.js'

test('not', () => {
  expect(not(false)).toBeTruthy()
  expect(not(true)).toBeFalsy()
  expect(not(0)).toBeTruthy()
  expect(not(1)).toBeFalsy()
})

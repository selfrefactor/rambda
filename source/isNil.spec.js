import { isNil } from './isNil.js'

test('happy', () => {
  expect(isNil(null)).toBeTruthy()

  expect(isNil(undefined)).toBeTruthy()

  expect(isNil([])).toBeFalsy()
})

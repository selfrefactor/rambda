import { isNil } from './isNil'

test('', () => {
  expect(isNil(null)).toBeTruthy()

  expect(isNil(undefined)).toBeTruthy()

  expect(isNil([])).toBeFalsy()
})

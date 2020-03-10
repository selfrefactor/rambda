import { isNil } from './isNil'

test('happy', () => {
  expect(isNil(null)).toBeTruthy()

  expect(isNil(undefined)).toBeTruthy()

  expect(isNil([])).toBeFalsy()
})

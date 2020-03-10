import { isNil } from './isNil'

test('happy', () => {
  expect(isNil(null)).toBeTrue()

  expect(isNil(undefined)).toBeTrue()

  expect(isNil([])).toBeFalse()
})

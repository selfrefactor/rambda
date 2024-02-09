import { isNotNil } from './isNotNil'

test('tests a value for `null` or `undefined`', () => {
  expect(isNotNil(void 0)).toBe(false)
  expect(isNotNil(undefined)).toBe(false)
  expect(isNotNil(null)).toBe(false)
  expect(isNotNil([])).toBe(true)
  expect(isNotNil({})).toBe(true)
  expect(isNotNil(0)).toBe(true)
  expect(isNotNil('')).toBe(true)
})
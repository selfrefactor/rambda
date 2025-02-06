import { isNotEmpty } from './isNotEmpty.js'

test('happy', () => {
  expect(isNotEmpty(undefined)).toBeTrue()
  expect(isNotEmpty('')).toBeFalse()
  expect(isNotEmpty(null)).toBeTrue()
  expect(isNotEmpty(' ')).toBeTrue()
  expect(isNotEmpty(/(?:)/)).toBeTrue()
  expect(isNotEmpty([])).toBeFalse()
  expect(isNotEmpty([[]])).toBeTrue()
  expect(isNotEmpty({})).toBeFalse()
  expect(isNotEmpty({ x: 0 })).toBeTrue()
  expect(isNotEmpty(0)).toBeTrue()
  expect(isNotEmpty(Number.NaN)).toBeTrue()
  expect(isNotEmpty([''])).toBeTrue()
})

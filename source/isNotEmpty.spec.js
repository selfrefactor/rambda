import { isNotEmpty } from './isNotEmpty.js'

test('happy', () => {
  expect(isNotEmpty(undefined)).toBeTruthy()
  expect(isNotEmpty('')).toBeFalsy()
  expect(isNotEmpty(null)).toBeTruthy()
  expect(isNotEmpty(' ')).toBeTruthy()
  expect(isNotEmpty(/(?:)/)).toBeTruthy()
  expect(isNotEmpty([])).toBeFalsy()
  expect(isNotEmpty([[]])).toBeTruthy()
  expect(isNotEmpty({})).toBeFalsy()
  expect(isNotEmpty({ x: 0 })).toBeTruthy()
  expect(isNotEmpty(0)).toBeTruthy()
  expect(isNotEmpty(Number.NaN)).toBeTruthy()
  expect(isNotEmpty([''])).toBeTruthy()
})

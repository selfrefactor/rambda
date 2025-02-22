import { isEmpty } from './isEmpty.js'

test('happy', () => {
  expect(isEmpty(0n)).toBeTruthy()
  expect(isEmpty(1n)).toBeFalsy()
  expect(isEmpty(undefined)).toBeFalsy()
  expect(isEmpty('')).toBeTruthy()
  expect(isEmpty(null)).toBeFalsy()
  expect(isEmpty(' ')).toBeFalsy()
  expect(isEmpty(/(?:)/)).toBeFalsy()
  expect(isEmpty([])).toBeTruthy()
  expect(isEmpty([[]])).toBeFalsy()
  expect(isEmpty({})).toBeTruthy()
  expect(isEmpty({ x: 0 })).toBeFalsy()
  expect(isEmpty(0)).toBeFalsy()
  expect(isEmpty(Number.NaN)).toBeFalsy()
  expect(isEmpty([''])).toBeFalsy()
})

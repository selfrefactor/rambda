import { isFalsy } from './isFalsy'

test('when function', () => {
  expect(isFalsy(() => {})).toBeFalsy()
})

test('when empty string', () => {
  expect(isFalsy('')).toBeTruthy()
})

test('when empty object', () => {
  expect(isFalsy({})).toBeTruthy()
})

test('when null', () => {
  expect(isFalsy(null)).toBeTruthy
})

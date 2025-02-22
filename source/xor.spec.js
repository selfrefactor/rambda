import { xor } from './xor.js'

test('compares two values with exclusive or', () => {
  expect(xor(true, true)).toBeFalsy()
  expect(xor(true, false)).toBeTruthy()
  expect(xor(false, true)).toBeTruthy()
  expect(xor(false, false)).toBeFalsy()
})

test('when both values are truthy, it should return false', () => {
  expect(xor(true, 'foo')).toBeFalsy()
  expect(xor(42, true)).toBeFalsy()
  expect(xor('foo', 42)).toBeFalsy()
  expect(xor({}, true)).toBeFalsy()
  expect(xor(true, [])).toBeFalsy()
  expect(xor([], {})).toBeFalsy()
  expect(xor(new Date(), true)).toBeFalsy()
  expect(xor(true, Number.POSITIVE_INFINITY)).toBeFalsy()
  expect(xor(Number.POSITIVE_INFINITY, new Date())).toBeFalsy()
})

test('when both values are falsy, it should return false', () => {
  expect(xor(null, false)).toBeFalsy()
  expect(xor(false, undefined)).toBeFalsy()
  expect(xor(undefined, null)).toBeFalsy()
  expect(xor(0, false)).toBeFalsy()
  expect(xor(false, Number.NaN)).toBeFalsy()
  expect(xor(Number.NaN, 0)).toBeFalsy()
  expect(xor('', false)).toBeFalsy()
})

test('when one argument is truthy and the other is falsy, it should return true', () => {
  expect(xor('foo', null)).toBeTruthy()
  expect(xor(null, 'foo')).toBeTruthy()
  expect(xor(undefined, 42)).toBeTruthy()
  expect(xor(42, undefined)).toBeTruthy()
  expect(xor(Number.POSITIVE_INFINITY, Number.NaN)).toBeTruthy()
  expect(xor(Number.NaN, Number.POSITIVE_INFINITY)).toBeTruthy()
  expect(xor({}, '')).toBeTruthy()
  expect(xor('', {})).toBeTruthy()
  expect(xor(new Date(), 0)).toBeTruthy()
  expect(xor(0, new Date())).toBeTruthy()
  expect(xor([], null)).toBeTruthy()
  expect(xor(undefined, [])).toBeTruthy()
})

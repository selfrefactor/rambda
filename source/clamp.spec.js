import { clamp } from './clamp.js'

test('when min is greater than max', () => {
  expect(() => clamp(
    -5, -10, 5
  )).toThrowWithMessage(Error,
    'min must not be greater than max in clamp(min, max, value)')
})

test('rambda specs', () => {
  expect(clamp(
    1, 10, 0
  )).toBe(1)
  expect(clamp(
    3, 12, 1
  )).toBe(3)
  expect(clamp(
    -15, 3, -100
  )).toEqual(-15)
  expect(clamp(
    1, 10, 20
  )).toBe(10)
  expect(clamp(
    3, 12, 23
  )).toBe(12)
  expect(clamp(
    -15, 3, 16
  )).toBe(3)
  expect(clamp(
    1, 10, 4
  )).toBe(4)
  expect(clamp(
    3, 12, 6
  )).toBe(6)
  expect(clamp(
    -15, 3, 0
  )).toBe(0)
})

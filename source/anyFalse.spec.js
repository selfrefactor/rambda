import { anyFalse } from './anyFalse.js'

test('when true', () => {
  expect(anyFalse(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyFalse(true, true)).toBeFalsy()
})

test('supports function', () => {
  expect(anyFalse(
    true,
    () => true,
    () => false
  )).toBeTruthy()
})

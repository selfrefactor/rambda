import { anyTrue } from './anyTrue.js'

test('when true', () => {
  expect(anyTrue(true, true, false)).toBeTruthy()
})

test('when false', () => {
  expect(anyTrue(false, false, false)).toBeFalsy()
})

test('supports function', () => {
  expect(
    anyTrue(
      false,
      false,
      false,
      () => false,
      () => true,
    ),
  ).toBeTruthy()
})

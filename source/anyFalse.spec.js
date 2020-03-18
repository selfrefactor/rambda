import { anyFalse } from './anyFalse'

test('when true', () => {
  expect(anyFalse(
    true, true, false
  )).toBeTruthy()
})

test('when false', () => {
  expect(anyFalse(
    true, true, true
  )).toBeFalsy()
})

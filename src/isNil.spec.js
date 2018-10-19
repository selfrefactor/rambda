import { isNil } from 'path'

test('', () => {
  expect(isNil(null)).toBeTruthy()

  expect(isNil(undefined)).toBeTruthy()

  expect(isNil([])).toBeFalsy()
})

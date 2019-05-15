import { isEmpty } from './isEmpty'

test('empty values', () => {
  expect(isEmpty(null)).toBeTruthy()

  expect(isEmpty(undefined)).toBeTruthy()

  expect(isEmpty('')).toBeTruthy()

  expect(isEmpty([])).toBeTruthy()

  expect(isEmpty({})).toBeTruthy()
})

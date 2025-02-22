import { objectIs } from './objectIs.js'

test('internal objectIs', () => {
  expect(objectIs(1, 1)).toBeTruthy()
  expect(objectIs(Number.NaN, Number.NaN)).toBeTruthy()
})

import { objectIs } from './objectIs.js'

test('internal objectIs', () => {
  expect(objectIs(1, 1)).toBeTrue()
  expect(objectIs(NaN, NaN)).toBeTrue()
})

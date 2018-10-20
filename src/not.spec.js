import { not } from './not'

test('not', () => {
  expect(not(false)).toEqual(true)
  expect(not(true)).toEqual(false)
  expect(not(0)).toEqual(true)
  expect(not(1)).toEqual(false)
})

import { not } from './not'

test('not', () => {
  expect(not(false)).toStrictEqual(true)
  expect(not(true)).toStrictEqual(false)
  expect(not(0)).toStrictEqual(true)
  expect(not(1)).toStrictEqual(false)
})

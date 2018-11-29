import { has } from './has'

test('has', () => {
  expect(has('a')({ a : 1 })).toBeTruthy()
  expect(has('b', { a : 1 })).toBeFalsy()
})

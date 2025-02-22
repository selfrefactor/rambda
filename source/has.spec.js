import { has } from './has.js'

test('happy', () => {
  expect(has('a')({ a: 1 })).toBeTruthy()
  expect(has('b', { a: 1 })).toBeFalsy()
})

test('with non-object', () => {
  expect(has('a', undefined)).toBeFalsy()
  expect(has('a', null)).toBeFalsy()
  expect(has('a', true)).toBeFalsy()
  expect(has('a', '')).toBeFalsy()
  expect(has('a', /a/)).toBeFalsy()
})

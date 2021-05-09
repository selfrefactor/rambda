import {uniq} from './uniq'

test('happy', () => {
  expect(uniq([1, 2, 3, 3, 3, 1, 2, 0])).toEqual([1, 2, 3, 0])
})

test('with nested array', () => {
  expect(uniq([[42], [42]])).toEqual([[42]])
})

test('with falsy values', () => {
  expect(uniq([undefined, null])).toEqual([undefined, null])
})

test('can distinct between string and number', () => {
  expect(uniq([1, '1'])).toEqual([1, '1'])
})

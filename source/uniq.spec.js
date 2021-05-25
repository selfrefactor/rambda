import {uniq} from './uniq'

test('happy', () => {
  const list = [1, 2, 3, 3, 3, 1, 2, 0]
  expect(uniq(list)).toEqual([1, 2, 3, 0])
})

test('with object', () => {
  const list = [{a: 1}, {a: 2}, {a: 1}]
  expect(uniq(list)).toEqual([{a: 1}, {a: 2}])
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

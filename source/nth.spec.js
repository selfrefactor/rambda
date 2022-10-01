import { nth } from './nth.js'

test('happy', () => {
  expect(nth(2, [ 1, 2, 3, 4 ])).toBe(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toBe(3)
})

test('with string and correct index', () => {
  expect(nth(2)('foo')).toBe('o')
})

test('with string and invalid index', () => {
  expect(nth(20)('foo')).toBe('')
})

test('with negative index', () => {
  expect(nth(-3)([ 1, 2, 3, 4 ])).toBe(2)
})

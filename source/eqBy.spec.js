import { eqByFn } from './eqBy.js'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqByFn(
    Math.abs, 5, 5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, 5, -5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, -5, 5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, -5, -5
  )).toBe(true)
  expect(eqByFn(
    Math.abs, 42, 99
  )).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqByFn(
    Math.abs, NaN, NaN
  )).toBe(true)
  expect(eqByFn(
    Math.abs, [ 42 ], [ 42 ]
  )).toBe(true)
  expect(eqByFn(
    x => x, { a : 1 }, { a : 1 }
  )).toBe(true)
  expect(eqByFn(
    x => x, { a : 1 }, { a : 2 }
  )).toBe(false)
})

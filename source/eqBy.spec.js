import { eqBy } from './eqBy.js'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqBy(Math.abs, 5)(5)).toBe(true)
  expect(eqBy(Math.abs, 5)(-5)).toBe(true)
  expect(eqBy(Math.abs, -5)(5)).toBe(true)
  expect(eqBy(Math.abs, -5)(-5)).toBe(true)
  expect(eqBy(Math.abs, 42)(99)).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqBy(Math.abs, Number.NaN)(Number.NaN)).toBe(true)
  expect(eqBy(Math.abs, [42])([42])).toBe(true)
  expect(eqBy(x => x, { a: 1 })({ a: 1 })).toBe(true)
  expect(eqBy(x => x, { a: 1 })({ a: 2 })).toBe(false)
})

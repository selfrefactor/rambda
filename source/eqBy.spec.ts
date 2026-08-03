import { eqBy } from './eqBy'

test('deteremines whether two values map to the same value in the codomain', () => {
  expect(eqBy<number>(Math.abs, 5)(5)).toBe(true)
  expect(eqBy<number>(Math.abs, 5)(-5)).toBe(true)
  expect(eqBy<number>(Math.abs, -5)(5)).toBe(true)
  expect(eqBy<number>(Math.abs, -5)(-5)).toBe(true)
  expect(eqBy<number>(Math.abs, 42)(99)).toBe(false)
})

test('has R.equals semantics', () => {
  expect(eqBy(Math.abs, Number.NaN)(Number.NaN)).toBe(true)
  expect(eqBy((x: number[]) => x.length, [42])([42])).toBe(true)
  expect(eqBy((x: any) => x, { a: 1 })({ a: 1 })).toBe(true)
  expect(eqBy((x: any) => x, { a: 1 })({ a: 2 })).toBe(false)
})

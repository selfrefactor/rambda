import { pathSatisfies } from './pathSatisfies'
import { pipe } from './pipe'

const isPositive = (n: number) => n > 0

test('returns true if the specified object path satisfies the given predicate', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { y: 1 } })).toBe(true)
})

test('returns false if the specified path does not exist', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { z: 42 } })).toBe(false)
  expect(pathSatisfies(isPositive, 'x.y')({ x: { z: 42 } })).toBe(false)
})

test('returns false otherwise', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'])({ x: { y: 0 } })).toBe(false)
})

test('type test', () => {
  const input = { a: { b: { c: 'bar' } } }
  const result = pipe(input, pathSatisfies(x => x !== 'foo', ['a', 'b', 'c']))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeTruthy()
})

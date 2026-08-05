import { pathSatisfies } from './pathSatisfies'
import { pipe } from './pipe'

const isPositive = (n: number) => n > 0

test('returns true if the specified object path satisfies the given predicate', () => {
	const result = pipe({ x: { y: 1 } },pathSatisfies(isPositive, ['x', 'y']))
  expect(result).toBe(true)
	expectTypeOf(result).toEqualTypeOf<boolean>()
})

test('returns false if the specified path does not exist', () => {
	// @ts-expect-error
  expect(pipe({ x: { z: 42 } }, pathSatisfies(isPositive, ['x', 'y']))).toBe(false)
	// @ts-expect-error
  expect(pipe({ x: { z: 42 } }, pathSatisfies(isPositive, 'x.y'))).toBe(false)
})

test('returns false otherwise', () => {
  expect(pipe({ x: { y: 0 } }, pathSatisfies(isPositive, ['x', 'y']))).toBe(false)
})


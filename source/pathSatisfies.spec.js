import { pathSatisfies } from './pathSatisfies'

const isPositive = n => n > 0

it('returns true if the specified object path satisfies the given predicate', () => {
  expect(
    pathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] }),
  ).toBe(true)
  expect(pathSatisfies(isPositive, 'x.1.y', { x: [{ y: -1 }, { y: 1 }] })).toBe(true)
})

it('returns false if the specified path does not exist', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'], { x: { z: 42 } })).toBe(false)
  expect(pathSatisfies(isPositive, 'x.y', { x: { z: 42 } })).toBe(false)
})

it('throws on empty paths', () => {
  expect(() => pathSatisfies(Object.is, [], { x: { z: 42 } })).toThrow()
})

it('returns false otherwise', () => {
  expect(pathSatisfies(isPositive, ['x', 'y'], { x: { y: 0 } })).toBe(false)
})

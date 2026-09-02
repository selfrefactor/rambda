import { concat } from './concat'
import { reduce } from './reduce'
import { pipe } from './pipe'

const reducer = (prev: number, current: number, i: number) => {
  return prev + current
}
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  const result = pipe([1, 2, 3], reduce((acc, val) => acc + val, 10))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(16)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0)({} as any)).toThrow(ERROR)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(concat as any, [])(null as any)).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(concat as any, [])(undefined as any)).toEqual([])
})

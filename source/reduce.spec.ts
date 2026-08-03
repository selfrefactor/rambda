import { concat } from './concat'
import { reduce } from './reduce'
import { pipe } from './pipe'

const reducer = (prev: number, current: number, i: number) => {
  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(reducer, initialValue)(list)).toBe(7)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0)({} as any)).toThrowError(ERROR)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(concat as any, [])(null as any)).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(concat as any, [])(undefined as any)).toEqual([])
})

test('type test', () => {
  const result = pipe([1, 2, 3], reduce((acc, val) => acc + val, 10))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(16)
})

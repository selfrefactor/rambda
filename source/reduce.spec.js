import { concat } from './concat.js'
import { reduce } from './reduce.js'

const reducer = (prev, current, i) => {
  expect(typeof i).toBe('number')

  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(reducer, initialValue)(list)).toBe(7)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0)({})).toThrowError(ERROR)
})

test('returns the accumulator for a null list', () => {
  expect(reduce(concat, [])(null)).toEqual([])
})

test('returns the accumulator for an undefined list', () => {
  expect(reduce(concat, [])(undefined)).toEqual([])
})

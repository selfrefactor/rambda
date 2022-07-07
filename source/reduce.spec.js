import { reduce, reduceStopper } from './reduce.js'

const reducer = (
  prev, current, i
) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [ 1, 2, 3 ]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(
    reducer, initialValue, list
  )).toBe(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(
      reducer, initialValue, {
        a : 1,
        b : 2,
      }
    )).toThrowWithMessage(TypeError, ERROR)
})

test('with undefined as iterable', () => {
  expect(() => reduce(
    reducer, 0, null
  )).toThrowWithMessage(TypeError, ERROR)
})

test('with reduceStopper', () => {
  let maxIndex
  const reducer = (
    prev, current, i
  ) => {
    maxIndex = i

    return current === 2 ? reduceStopper(current) : prev
  }
  expect(reduce(
    reducer, initialValue, list
  )).toBe(2)
  expect(maxIndex).toBe(1)
})

import { reduce } from './reduce'

const reducer = (
  prev, current, i
) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [ 1, 2, 3 ]

test('happy', () => {
  expect(reduce(
    reducer, initialValue, list
  )).toEqual(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(
      reducer, initialValue, {
        a : 1,
        b : 2,
      }
    )).toThrowWithMessage(TypeError, 'reduce: list must be array or iterable')
})

test('with undefined as iterable', () => {
  expect(() => reduce(
    reducer, initialValue, undefined
  )).toThrowWithMessage(TypeError,
    'reduce: list must be array or iterable')
})

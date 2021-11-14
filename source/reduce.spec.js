import {reduce} from './reduce'
import {concat} from './concat'
import {add} from './add'

const reducer = (prev, current, i) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]

test('happy', () => {
  expect(reduce(reducer, initialValue, list)).toEqual(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(reducer, initialValue, {
      a: 1,
      b: 2,
    })
  ).toThrowWithMessage(TypeError, 'reduce: list must be array or iterable')
})

test('with falsy iterables', () => {
  expect(reduce(add, 0, null)).toBe(0)
  expect(reduce(concat, [], null)).toEqual([])
  expect(reduce(add, 0, undefined)).toBe(0)
  expect(reduce(concat, [], undefined)).toEqual([])
})

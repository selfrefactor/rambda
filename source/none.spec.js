import {none} from './none'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [1, 3, 5, 7])).toBeTrue()
})

test('when false curried', () => {
  expect(none(isOdd)([1, 3, 5, 8])).toBeFalse()
})

test('bug', () => {
  expect(none((input) => input > 1, [1, 2, 3])).toBe(false)
})

import { none } from './none.js'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [1, 3, 5, 7])).toBeTrue()
})

test('when false curried', () => {
  expect(none(input => input > 1, [1, 2, 3])).toBeFalse()
})

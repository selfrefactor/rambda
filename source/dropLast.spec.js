import { dropLast } from './dropLast.js'

test('with array', () => {
  expect(dropLast(2)(['foo', 'bar', 'baz'])).toEqual(['foo'])
  expect(dropLast(3)(['foo', 'bar', 'baz'])).toEqual([])
  expect(dropLast(4)(['foo', 'bar', 'baz'])).toEqual([])
})

test('with non-positive count', () => {
  expect(dropLast(0)([1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
})

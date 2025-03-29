import { drop } from './drop.js'

test('with array', () => {
  expect(drop(2)(['foo', 'bar', 'baz'])).toEqual(['baz'])
  expect(drop(3, ['foo', 'bar', 'baz'])).toEqual([])
  expect(drop(4, ['foo', 'bar', 'baz'])).toEqual([])
})

test('with non-positive count', () => {
  expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3])
})


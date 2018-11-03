import { sort } from './sort'

test('sort', () => {
  expect(sort((a, b) => a > b)(['foo', 'bar', 'baz'])).toEqual([
    'bar',
    'baz',
    'foo',
  ])

  expect(sort((a, b) => a - b)([2, 3, 1])).toEqual([1, 2, 3])
})

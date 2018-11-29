import { sort } from './sort'

test('sort', () => {
  expect(sort((a, b) => a > b)([ 'foo', 'bar', 'baz' ])).toEqual([
    'bar',
    'baz',
    'foo',
  ])

  expect(sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
})

test('it doesn\'t mutate', () => {
  const list = [ 'foo', 'bar', 'baz' ]
  expect(sort((a, b) => a > b, list)).toEqual([
    'bar',
    'baz',
    'foo',
  ])

  expect(list[ 0 ]).toBe('foo')
  expect(list[ 1 ]).toBe('bar')
  expect(list[ 2 ]).toBe('baz')
})

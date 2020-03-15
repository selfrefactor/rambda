import { transpose } from './transpose'

test('happy', () => {
  const input = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

  expect(transpose(input)).toEqual([ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ])
})

test('when rows are shorter', () => {
  const actual = transpose([ [ 10, 11 ], [ 20 ], [], [ 30, 31, 32 ] ])
  const expected = [ [ 10, 20, 30 ], [ 11, 31 ], [ 32 ] ]
  expect(actual).toEqual(expected)
})

test('with empty array', () => {
  expect(transpose([])).toEqual([])
})

test('array with falsy values', () => {
  const actual = transpose([ [ true, false, undefined, null ], [ null, undefined, false, true ] ])
  const expected = [ [ true, null ], [ false, undefined ], [ undefined, false ], [ null, true ] ]
  expect(actual).toEqual(expected)
})

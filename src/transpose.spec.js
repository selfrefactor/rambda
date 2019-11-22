import { transpose } from './transpose'

test('happy', () => {
  var input = [['a', 1], ['b', 2], ['c', 3]];

  expect(transpose(input)).toEqual(
  [['a', 'b', 'c'], [1, 2, 3]]
  )
})

test('when rows are shorter', () => {
  var actual = transpose([[10, 11], [20], [], [30, 31, 32]]);
var expected = [[10, 20, 30], [11, 31], [32]];
expect(actual).toEqual(expected)
})

test('with empty array', () => {
  expect(transpose([])).toEqual([])
})

test('array with falsy values', () => {
  var actual = transpose([[true, false, undefined, null], [null, undefined, false, true]]);
var expected = [[true, null], [false, undefined], [undefined, false], [null, true]];
expect(actual).toEqual(expected)
})
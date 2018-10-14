const R = require('../../rambda')

test('zipObj', () => {
  expect(
    R.zipObj(['a', 'b', 'c'], [1, 2, 3])
  ).toEqual({a: 1, b: 2, c: 3})
})

test('0', () => {
  expect(
    R.zipObj(['a', 'b'])([1, 2, 3])
  ).toEqual({a: 1, b: 2})
})

test('1', () => {
  expect(
    R.zipObj(['a', 'b','c'])([1, 2])
  ).toEqual({a: 1, b: 2})
})

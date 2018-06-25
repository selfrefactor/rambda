const R = require('../../rambda')

test('zipObj', () => {
  expect(
    R.zipObj(['a', 'b', 'c'], [1, 2, 3])
  ).toEqual({a: 1, b: 2, c: 3})

  expect(
    R.zipObj(['a', 'b', 'c'])([1, 2, 3])
  ).toEqual({a: 1, b: 2, c: 3})
})

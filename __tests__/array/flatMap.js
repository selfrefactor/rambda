const R = require('../../rambda')

test('maps then flattens one level', () => {
  const duplicate = n => [n, n]
  expect(R.flatMap(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(R.flatMap(nest, [1, 2, 3])).toEqual([[1], [2], [3]])
})

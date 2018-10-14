const R = require('../rambda')
const Ramda = require('ramda')

test('', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = R.uniqWith(fn, input)
  //const result = R.uniqWith(Ramda.eqBy(Ramda.prop('title')), input)

  expect(
    result
  ).toEqual(expectedResult)
})

test('uniq', () => {
  expect(R.uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])).toEqual([ 1, 2, 3, 0 ])
  expect(R.uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
  expect([ 1, '1' ]).toEqual([ 1, '1' ])
  expect(R.uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
})

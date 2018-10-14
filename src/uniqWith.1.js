const R = require('../rambda')

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
  const curriedResult = R.uniqWith(fn)(input)

  expect(
    result
  ).toEqual(expectedResult)

  expect(
    curriedResult
  ).toEqual(expectedResult)
})


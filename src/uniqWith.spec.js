import { uniqWith } from './uniqWith'

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

  const result = uniqWith(fn, input)
  const curriedResult = uniqWith(fn)(input)

  expect(result).toStrictEqual(expectedResult)

  expect(curriedResult).toStrictEqual(expectedResult)
})

test('uniqWith', () => {
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

  const result = uniqWith(fn, input)
  //const result = uniqWith(Ramda.eqBy(Ramda.prop('title')), input)

  expect(result).toStrictEqual(expectedResult)
})

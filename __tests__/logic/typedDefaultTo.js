const R = require('../../rambda')

test('', () => {
  expect(
    R.typedDefaultTo('foo')(undefined)
  ).toEqual('foo')

  expect(
    R.typedDefaultTo('foo', undefined)
  ).toEqual('foo')

  expect(
    R.typedDefaultTo('foo', 1)
  ).toEqual('foo')

  expect(
    R.typedDefaultTo('foo', 'bar')
  ).toEqual('bar')

  expect(
    R.typedDefaultTo(undefined, 'bar')
  ).toEqual(undefined)
})

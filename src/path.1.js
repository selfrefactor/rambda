const R = require('../../rambda')

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(R.path('a.b.c.d.f', obj)).toEqual(undefined)
  expect(R.path('foo.bar.baz', undefined)).toEqual(undefined)
  expect(R.path('foo.bar.baz')(undefined)).toEqual(undefined)
})

test('works with string instead of array', () => {
  expect(R.path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')
})

test('R.path', () => {
  expect(R.path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')

  expect(R.path([ 'foo', 'bar', 'baz' ])(null)).toEqual(undefined)

  expect(R.path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })).toEqual(undefined)
})

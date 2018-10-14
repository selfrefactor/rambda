const R = require('../../rambda')

test('with undefined', () => {
  expect(R.defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(R.defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(R.defaultTo('foo')(NaN)).toEqual('foo')
})

test('when inputArgument passes initial check', () => {
  expect(R.defaultTo('foo', 'bar')).toEqual('bar')
})

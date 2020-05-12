import { defaultToStrict } from './defaultToStrict'

test('with undefined', () => {
  expect(defaultToStrict('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultToStrict('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultToStrict('foo')(NaN)).toEqual('foo')
})

test('with empty string', () => {
  expect(defaultToStrict('foo')('')).toEqual('foo')
})

test('with false', () => {
  expect(defaultToStrict('foo')(false)).toEqual('foo')
})

test('when inputArgument passes initial check', () => {
  expect(defaultToStrict('foo', 'bar')).toEqual('bar')
})

test('inputArgument must have the same type as default', () => {
  expect(defaultToStrict('foo', [ 'bar' ])).toEqual('foo')
})

test('when inputArgument is empty array', () => {
  expect(defaultToStrict([ 'foo' ], [])).toEqual([ 'foo' ])
})

test('when inputArgument is non-empty array', () => {
  expect(defaultToStrict([ 'foo' ], [ 1 ])).toEqual([ 1 ])
})

test('when inputArgument is empty object', () => {
  expect(defaultToStrict({ a : 1 }, {})).toEqual({ a : 1 })
})

test('when inputArgument is non-empty object', () => {
  expect(defaultToStrict({ a : 1 }, { b : 2 })).toEqual({ b : 2 })
})

test('with multiple inputs - case 1', () => {
  expect(defaultToStrict(
    { a : 1 }, null, { b : 2 }
  )).toEqual({ b : 2 })
})

test('with multiple inputs - case 2', () => {
  expect(defaultToStrict(
    { a : 1 }, null, false
  )).toEqual({ a : 1 })
})

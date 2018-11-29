import { defaultTo } from './defaultTo'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toEqual('foo')
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})

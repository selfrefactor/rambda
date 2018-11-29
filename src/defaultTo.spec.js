import { defaultTo } from './defaultTo'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toStrictEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toStrictEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toStrictEqual('foo')
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toStrictEqual('bar')
})

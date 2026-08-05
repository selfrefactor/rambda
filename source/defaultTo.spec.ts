import { defaultTo } from './defaultTo'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe('bar' as unknown, defaultTo('foo'))
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar')
})

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toBe('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toBe('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(Number.NaN)).toBe('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo')('')).toBe('')
})

test('with false', () => {
  expect(defaultTo('foo')(false)).toBeFalsy()
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo')('bar')).toBe('bar')
})

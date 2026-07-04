import { path } from './path'
import { pipe } from './pipe'

test('with array inside object', () => {
  const obj = { a: { b: [1, { c: 1 }] } }
  expect(path('a.b.1.c')(obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a: { b: { c: 1 } } }
  expect(path('a.b.c.d.f')(obj)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({ foo: { bar: { baz: 'yes' } } })).toBe('yes')
})

test('path', () => {
  expect(path(['foo', 'bar', 'baz'])({ foo: { bar: { baz: 'yes' } } })).toBe('yes')
  expect(path(['foo', 'bar', 'baz'])(null)).toBeUndefined()
})

test('with number string in between', () => {
  expect(path(['a', '1', 'b'])({ a: [{ b: 1 }, { b: 2 }] })).toBe(2)
})

test('null is not a valid path', () => {
  expect(path('audio_tracks')({ a: 1, audio_tracks: null })).toBeUndefined()
})

test('type test', () => {
  const input = { a: { b: { c: true } } }
  const result = pipe(input, path(['a', 'b']))
  expectTypeOf(result.c).toEqualTypeOf<boolean>()
  expect(result).toEqual({ c: true })
})

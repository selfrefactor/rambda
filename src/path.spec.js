import { path } from './path'

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(path('a.b.c.d.f', obj)).toEqual(undefined)
  expect(path('foo.babaz', undefined)).toEqual(undefined)
  expect(path('foo.babaz')(undefined)).toEqual(undefined)
})

test('works with string instead of array', () => {
  expect(
    path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })
  ).toEqual('yes')
})

test('path', () => {
  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })
  ).toEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toEqual(undefined)

  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })
  ).toEqual(undefined)
})

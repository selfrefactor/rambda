import { path } from './path'

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(path('a.b.c.d.f', obj)).toStrictEqual(undefined)
  expect(path('foo.babaz', undefined)).toStrictEqual(undefined)
  expect(path('foo.babaz')(undefined)).toStrictEqual(undefined)
})

test('works with string instead of array', () => {
  expect(
    path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })
  ).toStrictEqual('yes')
})

test('path', () => {
  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })
  ).toStrictEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toStrictEqual(undefined)

  expect(
    path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })
  ).toStrictEqual(undefined)
})

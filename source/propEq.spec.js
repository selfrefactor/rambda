import { propEq } from './propEq.js'

test('happy', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTrue()
  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalse()
  expect(propEq(
    'foo', 'bar', null
  )).toBeFalse()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq(
    'name', 'Abby', null
  )).toBeFalse()
  expect(propEq(
    'name', 'Abby', undefined
  )).toBeFalse()
})

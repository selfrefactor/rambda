import { propEq } from './propEq'

test('propEq', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTrue()

  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalse()

  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalse()
})

test('happy', () => {
  expect(propEq(
    'name', 'Abby', null
  )).toEqual(false)
// expect(propEq('name', 'Abby', undefined)).toEqual(false)
})

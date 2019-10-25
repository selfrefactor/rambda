import { propEq } from './propEq'

test('propEq', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTruthy()

  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalsy()

  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalsy()
})

test('happy', () => {
  expect(propEq('name', 'Abby', null)).toEqual(false)
// expect(propEq('name', 'Abby', undefined)).toEqual(false)
})

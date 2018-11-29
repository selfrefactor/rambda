import { propEq } from './propEq'

test('propEq', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTruthy()

  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalsy()

  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalsy()
})

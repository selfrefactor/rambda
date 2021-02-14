import { objOf } from './objOf'

test('creates an object containing a single key:value pair', function () {
  expect(objOf('foo', 42)).toEqual({ foo: 42 })
  expect(objOf('foo')(42)).toEqual({ foo: 42 })
})

import { prop } from './prop'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toStrictEqual('baz')

  expect(prop('bar')({ foo : 'baz' })).toStrictEqual(undefined)
})

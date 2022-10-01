import { prop } from './prop.js'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toBe('baz')

  expect(prop('bar')({ foo : 'baz' })).toBeUndefined()

  expect(prop('bar')(null)).toBeUndefined()
})

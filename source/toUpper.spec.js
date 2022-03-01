import { toUpper } from './toUpper.js'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})

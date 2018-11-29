import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})

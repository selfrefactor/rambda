import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toStrictEqual('foo|bar|baz')
})

import { join } from './join'

test('curry', () => {
  expect(join('|')([ 'foo', 'bar', 'baz' ])).toStrictEqual('foo|bar|baz')

  expect(join('|', [ 1, 2, 3 ])).toStrictEqual('1|2|3')

  const spacer = join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toStrictEqual('a 2 3.4')
})

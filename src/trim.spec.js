import { trim } from './trim'
test('trim', () => {
  expect(trim(' foo ')).toStrictEqual('foo')
})

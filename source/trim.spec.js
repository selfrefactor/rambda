import { trim } from './trim.js'

test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})

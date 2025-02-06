import { trim } from './trim.js'

test('trim', () => {
  expect(trim(' foo ')).toBe('foo')
})

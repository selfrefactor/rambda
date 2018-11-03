import { startsWith } from './startsWith'

test('true', () => {
  const result = startsWith('foo', 'foo-bar')

  expect(result).toBeTruthy()
})

test('false', () => {
  const result = startsWith('baz')('foo-bar')

  expect(result).toBeFalsy()
})

import { startsWith } from './startsWith.js'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTruthy()
  expect(startsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(startsWith({ a: 1 }, list)).toBeFalsy()
  expect(startsWith([{ a: 1 }], list)).toBeTruthy()
  expect(startsWith([{ a: 1 }, { a: 2 }], list)).toBeTruthy()
  expect(startsWith(list, list)).toBeTruthy()
  expect(startsWith([{ a: 2 }], list)).toBeFalsy()
})

import { endsWith } from './endsWith.js'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTruthy()
  expect(endsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(endsWith({ a: 3 }, list)).toBeFalsy(),
    expect(endsWith([{ a: 3 }], list)).toBeTruthy()
  expect(endsWith([{ a: 2 }, { a: 3 }], list)).toBeTruthy()
  expect(endsWith(list, list)).toBeTruthy()
  expect(endsWith([{ a: 1 }], list)).toBeFalsy()
})

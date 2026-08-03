import { propOr } from './propOr'

test('propOr', () => {
  const obj = { a: 1 }
  expect(propOr('a', 'default')(obj as any)).toBe(1)
  expect(propOr('notExist', 'default')(obj as any)).toBe('default')
  expect(propOr('notExist', 'default')(null as any)).toBe('default')
})

test('type test', () => {
  const obj = { foo: 'bar' }
  const result = propOr('foo', 'fallback')(obj)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar')
})

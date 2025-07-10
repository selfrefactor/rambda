import { modifyPath } from './modifyPath.js'

test('happy', () => {
  const result = modifyPath('a.b.c', x => x + 1)({ a: { b: { c: 1 } } })
  expect(result).toEqual({ a: { b: { c: 2 } } })
})

test('works only on existing paths', () => {
  const result = modifyPath('a.b.d', x => x + 1)({ a: { b: { c: 1 } } })
  expect(result).toEqual({ a: { b: { c: 1 } } })
})

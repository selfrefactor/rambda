import { modifyPath } from './modifyPath.js'

const obj = { a: { b: { c: 1 } } }

test('happy', () => {
  const result = modifyPath('a.b.c', x => x + 1)(obj)
  expect(result).toEqual({ a: { b: { c: 2 } } })
})

test('works only on existing paths', () => {
  const result = modifyPath('a.b.d', x => x + 1)(obj)
  expect(result).toEqual(obj)
})

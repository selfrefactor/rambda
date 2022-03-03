import { modifyPath } from './modifyPath.js'

test('happy', () => {
  const result = modifyPath(
    'a.b.c', x => x + 1, { a : { b : { c : 1 } } }
  )
  expect(result).toEqual({ a : { b : { c : 2 } } })
})

test('with array', () => {
  const input = {foo: [{ bar: '123' }]}
  const result = modifyPath('foo.0.bar', x => x + 'foo', input)
  expect(result).toEqual({ foo: { '0': { bar: '123foo' } } })
})

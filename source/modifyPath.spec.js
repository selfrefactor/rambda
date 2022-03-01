import { modifyPath } from './modifyPath.js'

test('happy', () => {
  const result = modifyPath(
    'a.b.c', x => x + 1, { a : { b : { c : 1 } } }
  )
  expect(result).toEqual({ a : { b : { c : 2 } } })
})

test('with array', () => {
  const list = [ 1, 2, 3 ]

  expect(modifyPath(
    1, x => x + 1, list
  )).toEqual(list)
})

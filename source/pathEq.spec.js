import { pathEq } from './pathEq'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : 1 } }
  const target = 1

  expect(pathEq(
    path, target, obj
  )).toBe(true)
})

test('when false', () => {
  const path = 'a.b'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(path, target)(obj)).toBe(false)
})

test('when wrong path', () => {
  const path = 'foo.bar'
  const obj = { a : { b : 1 } }
  const target = 2

  expect(pathEq(
    path, target, obj
  )).toBe(false)
})

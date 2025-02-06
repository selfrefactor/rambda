import { propOr } from './propOr.js'

test('propOr (result)', () => {
  const obj = { a: 1 }
  expect(propOr('default', 'a', obj)).toBe(1)
  expect(propOr('default', 'notExist', obj)).toBe('default')
  expect(propOr('default', 'notExist', null)).toBe('default')
})

test('propOr (currying)', () => {
  const obj = { a: 1 }
  expect(propOr('default')('a', obj)).toBe(1)
  expect(propOr('default', 'a')(obj)).toBe(1)
  expect(propOr('default')('notExist', obj)).toBe('default')
  expect(propOr('default', 'notExist')(obj)).toBe('default')
})

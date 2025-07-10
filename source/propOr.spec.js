import { propOr } from './propOr.js'

test('propOr', () => {
  const obj = { a: 1 }
  expect(propOr('a', 'default', )(obj)).toBe(1)
  expect(propOr('notExist', 'default')(obj)).toBe('default')
  expect(propOr('notExist', 'default')(null)).toBe('default')
})

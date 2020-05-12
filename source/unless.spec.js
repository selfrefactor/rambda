import { inc } from './inc'
import { isNil } from './isNil'
import { unless } from './unless'

test('whenFalse can be other than function', () => {
  const result = unless(isNil, 2)('foo')

  expect(result).toBe(2)
})

test('use boolean', () => {
  const safeInc = unless(isNil)(inc)

  expect(safeInc(null)).toBe(null)
  expect(safeInc(1)).toBe(2)
})

test('rule can be plain boolean', () => {
  const safeInc = unless(false)(inc)

  expect(safeInc(1)).toBe(2)
})

test('rule and whenFalse are plain values', () => {
  expect(unless(false, 'foo')(1)).toBe('foo')
  expect(unless(true, 'foo')(1)).toBe(1)
})

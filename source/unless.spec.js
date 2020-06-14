import { inc } from './inc'
import { isNil } from './isNil'
import { unless } from './unless'

const safeInc = unless(isNil, inc)

test('happy', () => {
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

test('curried', () => {
  const safeIncCurried = unless(isNil)(inc)
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

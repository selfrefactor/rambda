import { IS_WALLABY } from './constants'
import { show } from './testUtils'

test('happy', () => {
  // This is potention Wallaby issue
  // ============================================
  if (IS_WALLABY) return
  expect(show([ 1, { a : 1 } ])).toBe('[1, {"a":1}]')
})

import { subtract } from './subtract.js'

test('happy', () => {
  expect(subtract(2, 1)).toBe(1)
  expect(subtract(2)(1)).toBe(1)
})

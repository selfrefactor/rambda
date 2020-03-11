import { subtract } from './subtract'

test('happy', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})

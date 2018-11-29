import { subtract } from './subtract'

test('', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})

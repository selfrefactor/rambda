import { subtract } from './subtract'

test('', () => {
  expect(subtract(2, 1)).toStrictEqual(1)
  expect(subtract(2)(1)).toStrictEqual(1)
})

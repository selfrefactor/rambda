import { flip } from './flip'
import { subtract } from './subtract'

test('flip', () => {
  const fn = flip(subtract)

  expect(fn(1)(7)).toStrictEqual(6)
  expect(fn(1, 7)).toStrictEqual(6)
  expect(fn(1, 7, 9)).toStrictEqual(undefined)
})

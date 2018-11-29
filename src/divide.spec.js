import { divide } from './divide'

test('', () => {
  expect(divide(71, 100)).toStrictEqual(0.71)
  expect(divide(71)(100)).toStrictEqual(0.71)
})

import { toDecimal } from './toDecimal'

test('happy', () => {
  expect(toDecimal(2.2789, 1)).toBe(2.3)
  expect(toDecimal(2.2789, 3)).toBe(2.279)
  expect(toDecimal(2, 3)).toBe(2)
  expect(toDecimal(2.2789)).toBe(2.28)
  expect(toDecimal(2.45464)).toBe(2.45)
})

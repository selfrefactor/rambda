import { min } from './min'

test('', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(2)(1)).toBe(1)
})

import { toString } from './toString.js'

test('happy', () => {
  expect(toString([1, 2, 3])).toBe('1,2,3')
})

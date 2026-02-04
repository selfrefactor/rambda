import { middle } from './middle'

test('middle', () => {
  expect(middle([1, 2, 3])).toEqual([2])
  expect(middle([1, 2])).toEqual([])
  expect(middle([1])).toEqual([])
  expect(middle([])).toEqual([])

  expect(middle('abc')).toBe('b')
  expect(middle('ab')).toBe('')
  expect(middle('a')).toBe('')
  expect(middle('')).toBe('')
})

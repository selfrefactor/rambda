import { filter } from './filter.js'

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven)([1, 2, 3, 4])).toEqual([2, 4])
})

test('using Boolean', () => {
  expect(filter(Boolean)([null, 0, 1, 2])).toEqual([1,2])
})

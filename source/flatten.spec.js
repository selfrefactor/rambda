import { flatten } from './flatten.js'

test('happy', () => {
  expect(flatten([1, 2, 3, [[[[[4]]]]]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[3]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[[3]]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])
})

test('readme example', () => {
  const result = flatten([1, 2, [3, 30, [300]], [4]])
  expect(result).toEqual([1, 2, 3, 30, 300, 4])
})

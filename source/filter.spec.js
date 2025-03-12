import { filter } from './filter.js'

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven)([1, 2, 3, 4])).toEqual([2, 4])
  expect(
    filter(isEven)({
      a: 1,
      b: 2,
      d: 3,
    }),
  ).toEqual({ b: 2 })
})


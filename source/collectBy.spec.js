import { collectBy } from './collectBy.js'

test('happy', () => {
  const result = collectBy(x => x % 2, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(result).toEqual([
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8],
  ])
})

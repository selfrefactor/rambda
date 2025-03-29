import { partition } from './partition.js'

test('happy', () => {
  const list = [1, 2, 3]
  const predicate = x => x > 2

  const result = partition(predicate)(list)
  expect(result).toEqual([[3], [1, 2]])
})

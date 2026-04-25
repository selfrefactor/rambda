import { splitEveryStrict } from './splitEveryStrict.js'

test('happy', () => {
  expect(splitEveryStrict(3)([1, 2, 3, 4, 5, 6, 7])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ])
})

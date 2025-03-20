import { partition } from './partition.js'

test('happy', () => {
  const list = [1, 2, 3]
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const predicate = x => x > 2

  const result = [partition(predicate)(list), partition(predicate)(obj)]
  const expected = [
    [[3], [1, 2]],
    [
      { c: 3 },
      {
        a: 1,
        b: 2,
      },
    ],
  ]
  expect(result).toEqual(expected)
})

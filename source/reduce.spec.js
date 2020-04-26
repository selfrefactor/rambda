import { reduce } from './reduce'

test('happy', () => {
  const result = reduce((
    acc, val, i
  ) => {
    expect(typeof i).toBe('number')

    return acc + val
  })(1)([ 1, 2, 3 ])

  expect(result).toEqual(7)
})

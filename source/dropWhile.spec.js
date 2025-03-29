import { dropWhile } from './dropWhile.js'

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = (x, i) => {
    expect(typeof i).toBe('number')
    return x < 3
  }
  const result = dropWhile(predicate)(list)
  expect(result).toEqual([3, 4])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
})

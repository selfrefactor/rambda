import { takeWhile } from './takeWhile.js'

const list = [1, 2, 3, 4, 5]

test('happy', () => {
  const result = takeWhile(x => x < 3)(list)
  expect(result).toEqual([1, 2])
})

test('always true', () => {
  const result = takeWhile(x => true)(list)
  expect(result).toEqual(list)
})

test('always false', () => {
  const result = takeWhile(x => 0)(list)
  expect(result).toEqual([])
})

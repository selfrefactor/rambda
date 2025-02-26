import { dropWhile } from './dropWhile.js'

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = x => x < 3
  const result = dropWhile(predicate, list)
  expect(result).toEqual([3, 4])
})

test('always true', () => {
  const predicate = () => true
  const result = dropWhileRamda(predicate, list)
  expect(result).toEqual([])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('works with string as iterable', () => {
  const iterable = 'foobar'
  const predicate = x => x !== 'b'
  const result = dropWhile(predicate, iterable)
  expect(result).toBe('bar')
})
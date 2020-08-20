import { takeWhile } from './takeWhile'

const list = [ 1, 2, 3, 4, 5, 6 ]

test('happy', () => {
  const result = takeWhile(x => x < 4, list)
  expect(result).toEqual([ 1, 2, 3 ])
})

test('predicate always returns true', () => {
  const result = takeWhile(x => x < 10, list)
  expect(result).toEqual(list)
})

test('predicate alwats returns false', () => {
  const result = takeWhile(x => x > 10, list)
  expect(result).toEqual([])
})

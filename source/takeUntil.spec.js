import { takeUntil } from './takeUntil'

const list = [ 1, 2, 3, 4, 5, 6 ]

test('happy', () => {
  const result = takeUntil(x => x > 3, list)
  expect(result).toEqual([ 1, 2, 3 ])
})

test('predicate always returns true', () => {
  const result = takeUntil(x => x < 10, list)
  expect(result).toEqual([])
})

test('predicate always returns false', () => {
  const result = takeUntil(x => x > 10, list)
  expect(result).toEqual(list)
})

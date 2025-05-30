import { duplicateBy } from './duplicateBy.js'

test('happy', () => {
  expect(duplicateBy(Math.abs)([-2, -1, 0, 1, 2])).toEqual([1,2])
})

test('returns an empty array for an empty array', () => {
  expect(duplicateBy(Math.abs)([])).toEqual([])
})

test('uses R.uniq', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 1 }]
  const expected = [{ a: 1 }]
  expect(duplicateBy(x => x)(list)).toEqual(expected)
})

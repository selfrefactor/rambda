import { uniqBy } from './uniqBy'


test('happy', () => {
  const result = uniqBy(Math.abs)([-2, -1, 0])

  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([-2, -1, 0])
})

test('returns an empty array for an empty array', () => {
  expect(uniqBy(Math.abs)([])).toEqual([])
})

test('uses R.uniq', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 1 }]
  const expected = [{ a: 1 }, { a: 2 }]
  expect(uniqBy(x => x)(list)).toEqual(expected)
})

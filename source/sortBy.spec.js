import { sortBy } from './sortBy.js'

test('happy', () => {
  const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

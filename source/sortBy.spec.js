import { sortBy } from './sortBy.js'

const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]

test('happy', () => {
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with non-existing path', () => {
	expect(sortBy(x => x.b)(input)).toEqual(input)
})

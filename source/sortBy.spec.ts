import { sortBy } from './sortBy'
import { pipe } from './pipe'

const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]

test('happy', () => {
  const expected = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }]
  const result = sortBy((x: { a: number }) => x.a)(input)
  expect(result).toEqual(expected)
})

test('with non-existing path', () => {
  expect(sortBy((x: any) => x.b)(input)).toEqual(input)
})

test('type test', () => {
  const result = pipe(
    [{ a: 2 }, { a: 1 }, { a: 0 }],
    sortBy(x => x.a),
  )
  expectTypeOf(result[0].a).toEqualTypeOf<number>()
  expect(result[0].a).toBe(0)
})

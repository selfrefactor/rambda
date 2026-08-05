import { sortBy } from './sortBy'
import { pipe } from './pipe'

const input = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 3 }]

test('happy', () => {
  const result = pipe(
    [{ a: 2 }, { a: 1 }, { a: 0 }],
    sortBy(x => x.a),
  )
  expectTypeOf(result[0].a).toEqualTypeOf<number>()
  expect(result[0].a).toBe(0)
})

test('with non-existing path', () => {
	// @ts-expect-error
  expect(pipe(input, sortBy((x) => x.b))).toEqual(input)
})

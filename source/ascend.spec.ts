import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'
import { pipe } from './pipe.js'

test('ascend', () => {
  const result = sort(
    ascend((x: { a: number }) => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:1}, {a:2}, {a:3}])
})

test('descend', () => {
  const result = sort(
    descend((x: { a: number }) => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:3}, {a:2}, {a:1}])
})

test('type test', () => {
  const result = pipe(
    [{a:1}, {a:2}],
    sort(ascend((x: { a: number }) => x.a))
  )
  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
  expect(result).toEqual([{a:1}, {a:2}])
})

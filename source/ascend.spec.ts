import { ascend } from './ascend'
import { descend } from './descend'
import { sort } from './sort'

test('ascend', () => {
  const result = sort(
    ascend((x: { a: number }) => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
  expect(result).toEqual([{a:1}, {a:2}, {a:3}])
})

test('descend', () => {
  const result = sort(
    descend((x: { a: number }) => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:3}, {a:2}, {a:1}])
})

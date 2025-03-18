import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'

test('ascend', () => {
  const result = sort(
    ascend(x => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:1}, {a:2}, {a:3}])
})

test('descend', () => {
  const result = sort(
    descend(x => x.a))(
    [{a:1}, {a:3}, {a:2}],
  )
  expect(result).toEqual([{a:3}, {a:2}, {a:1}])
})


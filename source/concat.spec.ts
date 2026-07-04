import { concat } from './concat'
import { pipe } from './pipe'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

test('R.concat', () => {
  const result = pipe(list1, concat(list2))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([4, 5, 6, 1, 2, 3])
  const resultString = pipe('foo', concat('list2'))
  expectTypeOf(resultString).toEqualTypeOf<string>()
  expect(resultString).toBe('list2foo')
})

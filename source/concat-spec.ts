import { concat, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

it('R.concat', () => {
  const result = pipe(list1, concat(list2))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  const resultString = pipe('foo', concat('list2'))
  expectTypeOf(resultString).toEqualTypeOf<string>()
})

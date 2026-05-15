import { count, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]
const predicate = (x: number) => x > 1

it('R.count', () => {
  const result = pipe(list, count(predicate))
  expectTypeOf(result).toEqualTypeOf<number>()
})

import { filterMap, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

it('R.filterMap - within pipe', () => {
  const result = pipe(
    list,
    x => x,
    filterMap(x => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return Math.random() > 0.5 ? String(x) : null
    }),
    filterMap(x => {
      expectTypeOf(x).toEqualTypeOf<string>()
      return Math.random() > 0.5 ? Number(x) : ''
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
})

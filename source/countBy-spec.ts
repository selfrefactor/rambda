import { countBy, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

it('R.countBy', () => {
  const result = pipe(
    list,
    countBy(x => x.toLowerCase()),
  )
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result).toEqualTypeOf<{ [index: string]: number; }>()
})

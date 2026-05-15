import { maxBy, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const first = 1
const second = 2

it('R.maxBy', () => {
  const result = pipe(
    second,
    maxBy(x => (x % 2 === 0 ? 1 : -1), first),
  )
  expectTypeOf(result).toEqualTypeOf<number>()
})

import { pipe, takeWhile } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

it('R.takeWhile', () => {
  const result = pipe(
    list,
    takeWhile(x => x > 1),
    takeWhile((x, i) => i + x > 1),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
})

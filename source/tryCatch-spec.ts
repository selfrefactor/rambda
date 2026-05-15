import { map, pipe, tryCatch } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.tryCatch', () => {
  it('happy', () => {
    const result = pipe(
      ['{a:1', '{"b": 2}'],
      map(
        tryCatch(x => {
          return JSON.parse(x) as string
        }, null),
      ),
    )

    expectTypeOf(result).toEqualTypeOf<(string | null)[]>()
  })
})

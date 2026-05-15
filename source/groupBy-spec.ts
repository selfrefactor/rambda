import { groupBy, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'bar']

    const result = pipe(list, groupBy(groupByFn))
    expectTypeOf(result).toEqualTypeOf<Partial<Record<string, string[]>>>()
  })
})

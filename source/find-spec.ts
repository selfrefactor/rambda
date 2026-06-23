import { find, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

describe('R.find', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, find(predicate))
    expectTypeOf(result).toEqualTypeOf<number | undefined>()
  })

	 it('has type guard narrowing', () => {
    const items = ['hello', 'world', 42] as (string | number)[]

    const result = pipe(
      items,
      find((x): x is string => typeof x === 'string'),
    )
    expectTypeOf(result).toEqualTypeOf<string | undefined>()
  })
})

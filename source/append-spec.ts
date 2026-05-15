import { append, pipe, prepend } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const listOfNumbers = [1, 2, 3]

describe('R.append/R.prepend', () => {
  it('happy', () => {
    const result = pipe(listOfNumbers, append(4), prepend(0))
    expectTypeOf(result).toEqualTypeOf<number[]>()
  })
  it('with object', () => {
    const result = pipe([{ a: 1 }], append({ a: 10 }), prepend({ a: 20 }))
    expectTypeOf(result).toEqualTypeOf<{ a: number; }[]>()
  })
})

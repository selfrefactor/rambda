import { zip } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']
    let a: Partial<any>
    const result = zip(array1)(array2)
    expectTypeOf(result[0][0]).toEqualTypeOf<number>()
    expectTypeOf(result[0][1]).toEqualTypeOf<string>()
  })
})

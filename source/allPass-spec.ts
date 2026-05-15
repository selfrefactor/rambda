import * as R from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('allPass', () => {
  it('happy', () => {
    const list = [
      [1, 2, 3, 4],
      [3, 4, 5],
    ]
    const result = R.pipe(list, R.map(R.allPass([
			(x) => x.length > 2,
			(x) => x.includes(3)
		])))
    expectTypeOf(result).toEqualTypeOf<boolean[]>()
  })
})

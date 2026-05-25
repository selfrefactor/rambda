import { flatMap, pipe, shuffle, splitEvery } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = pipe(list, splitEvery(3))
    expectTypeOf(result).toEqualTypeOf<number[][]>()
  })
  it('async', async () => {
    const data = Array.from({ length: 100 }, (_, i) => i + 1)
    const result = await pipe(
      data,
			shuffle<number>, // NEEDS EXPLICIT TYPE ANNOTATION
			// (list) => shuffle(list), // THIS ALSO WORKS
      // shuffle, THIS IS NOT WORKING `TypeScript cannot infer types backward and forward at the exact same time`
      splitEvery(10),
      flatMap(String),
    )

		expectTypeOf(result).toEqualTypeOf<string[]>()
  })
})

import { filterObject } from './filterObject'
import { pipe } from './pipe'

test('happy', () => {
  const testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
    testInput,
    filterObject((x: number, prop: string, obj: typeof testInput) => {
      expect(prop).toBeOneOf(['a', 'b', 'c'])
      expect(obj).toBe(testInput)
      return x > 1
    })
  )
  expect(result).toEqual({ b: 2, c: 3 })
})

test('require explicit type', () => {
  const result = pipe(
    { a: 1, b: 2 },
    filterObject<{ b: number }>((a: number) => {
      expectTypeOf(a).toEqualTypeOf<number>()
      return a > 1
    }),
  )
  expectTypeOf(result.b).toEqualTypeOf<number>()
  expect(result).toEqual({ b: 2 })
})

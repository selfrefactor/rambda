import { countBy } from './countBy'
import { pipe } from './pipe'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

test('happy', () => {
  const result = countBy((x: string) => x.toLowerCase())(list)
  expect(result).toEqual({
    a: 2,
    b: 2,
    c: 2,
  })
})

test('type test', () => {
  const result = pipe(
    list,
    countBy((x: string) => x.toLowerCase()),
  )
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result).toEqualTypeOf<{ [index: string]: number }>()
  expect(result).toEqual({ a: 2, b: 2, c: 2 })
})

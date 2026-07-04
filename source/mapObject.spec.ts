import { mapObject } from './mapObject'
import { pipe } from './pipe'

const double = (x: number) => x * 2

test('happy', () => {
  expect(mapObject(double)({ a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 4, c: 6 })
})

test('type test', () => {
  const result = pipe({ a: 1 }, mapObject(a => `${a}`))
  expectTypeOf(result).toEqualTypeOf<{ a: string }>()
  expect(result).toEqual({ a: '1' })
})

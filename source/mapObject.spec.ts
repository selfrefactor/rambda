import { mapObject } from './mapObject'
import { pipe } from './pipe'


test('happy', () => {
  const result = pipe({ a: 1 }, mapObject(a => `${a}`))
  expectTypeOf(result).toEqualTypeOf<{ a: string }>()
  expect(result).toEqual({ a: '1' })
})

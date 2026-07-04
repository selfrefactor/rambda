import { mapKeys } from './mapKeys'
import { pipe } from './pipe'

test('happy', () => {
  const result = mapKeys((prop: string, x: number) => `${prop}-${x}`)({ a: 1, b: 2 })
  const expected = { 'a-1': 1, 'b-2': 2 }
  expect(result).toEqual(expected)
})

test('type test', () => {
  const result = pipe(
    { a: 1, b: 2 },
    mapKeys((prop, x) => `${prop}-${x}`),
    mapKeys(prop => `${prop}-${prop}`),
  )
  expectTypeOf(result).toEqualTypeOf<Record<string, number>>()
  expect(result).toEqual({ 'a-1-a-1': 1, 'b-2-b-2': 2 })
})

import { pluck } from './pluck'
import { pipe } from './pipe'

test('happy', () => {
  const input = [{ a: 1, b: 'foo' }, { a: 2, b: 'bar' }]
  const result = pipe(input, pluck('b'))
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['foo', 'bar'])
})

test('with undefined', () => {
  expect(pluck(undefined as any)([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([])
})

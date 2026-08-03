import { pluck } from './pluck'
import { pipe } from './pipe'

test('happy', () => {
  expect(pluck('a')([{ a: 1 }, { a: 2 }, { b: 1 }] as Array<Record<string, number>>)).toEqual([1, 2])
})

test('with undefined', () => {
  expect(pluck(undefined as never)([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([])
})

test('type test', () => {
  const input = [{ a: 1, b: 'foo' }, { a: 2, b: 'bar' }]
  const result = pipe(input, pluck('b'))
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['foo', 'bar'])
})

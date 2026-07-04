import { compact } from './compact'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe(
    {
      a: [ undefined, 'a', 'b', 'c'],
      b: [1,2, null, 0, undefined, 3],
      c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
    },
    (x: { a: (string | undefined)[]; b: (number | null | undefined)[]; c: Record<string, any> }) => ({
      a: compact(x.a),
      b: compact(x.b),
      c: compact(x.c),
    })
  )
  expect(result.a).toEqual(['a', 'b', 'c'])
  expect(result.b).toEqual([1,2,0,3])
  expect(result.c).toEqual({ a: 1, b: 2, c: 0, f: false })
})

test('type test', () => {
  const result = pipe(
    {
      a: [ undefined, '', 'a', 'b', 'c', null ],
      b: [1,2, null, 0, undefined, 3],
      c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
    },
    (x: { a: (string | undefined | null)[]; b: (number | null | undefined)[]; c: Record<string, any> }) => ({
      a: compact(x.a),
      b: compact(x.b),
      c: compact(x.c),
    })
  )
  expectTypeOf(result.a).toEqualTypeOf<string[]>()
  expectTypeOf(result.b).toEqualTypeOf<number[]>()
  expectTypeOf(result.c).toEqualTypeOf<{ a: number; b: number; c: number; f: boolean }>()
  expect(result.a).toEqual(['', 'a', 'b', 'c'])
  expect(result.b).toEqual([1,2,0,3])
  expect(result.c).toEqual({ a: 1, b: 2, c: 0, f: false })
})

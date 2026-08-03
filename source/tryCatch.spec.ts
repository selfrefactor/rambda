import { prop } from './prop'
import { tryCatch } from './tryCatch'
import { pipe } from './pipe'
import { map } from './map'

test('happy', () => {
  const fn = () => {
    throw new Error('foo')
  }
  const result = tryCatch(fn, () => true)()
  expect(result).toBeTruthy()
})

test('when fallback is used', () => {
  const fn = (x: any) => x.x
  expect(tryCatch(fn, false)(null)).toBeFalsy()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a: 1 }))
  const bad = () => JSON.parse('a{a')
  expect(tryCatch(good, 1)()).toEqual({ a: 1 })
  expect(tryCatch(bad, 1)()).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')
  expect(tryCatch(fn as (input: unknown) => unknown, false)({})).toBeUndefined()
  expect(tryCatch(fn as (input: unknown) => unknown, false)({ x: 1 })).toBe(1)
})

test('type test', () => {
  const result = pipe(
    ['{a:1', '{"b": 2}'],
    map(
      tryCatch((x: string) => {
        return JSON.parse(x) as string
      }, null),
    ),
  )

  expectTypeOf(result).toEqualTypeOf<(string | null)[]>()
  expect(result).toEqual([null, { b: 2 }])
})

import { complement } from './complement'

test('happy', () => {
  const fn = complement((x: string) => x.length === 0)
  expect(fn([1, 2, 3] as any)).toBeTruthy()
})

test('with multiple parameters', () => {
  const between = (a: number, b: number, c: number) => a < b && b < c
  const f = complement(between)
  expect(f(4, 5, 11)).toBeFalsy()
  expect(f(12, 2, 6)).toBeTruthy()
})

test('type test', () => {
  const fn = complement((x: number) => x > 10)
  const result = fn(1)
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})

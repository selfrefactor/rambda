import { complement } from './complement.js'

test('happy', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([1, 2, 3])).toBeTrue()
})

test('with multiple parameters', () => {
  const between = (a, b, c) => a < b && b < c
  const f = complement(between)
  expect(f(4, 5, 11)).toBeFalse()
  expect(f(12, 2, 6)).toBeTrue()
})

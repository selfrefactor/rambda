import { complement } from './complement'

test('', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTruthy()
})

test('with multiple parameters', () => {
  const between = function(a, b, c){ return a < b && b < c }
  const f = complement(between)
  expect(f(4, 5, 11)).toEqual(false)
  expect(f(12, 2, 6)).toEqual(true)
})

import { F, T } from '../rambda.js'
import { identical } from './identical.js'

test('r.F and R.T', () => {
  expect(F()).toBeFalse()
  expect(T()).toBeTrue()
})

test('identical', () => {
  const a = { a : 1 }
  const b = { a : 1 }
  const c = {
    a : 1,
    b : 2,
  }

  expect(identical(100)(100)).toBeTrue()
  expect(identical(100, '100')).toBeFalse()
  expect(identical('string', 'string')).toBeTrue()
  expect(identical([], [])).toBeFalse()
  expect(identical(a, a)).toBeTrue()
  expect(identical(a, b)).toBeFalse()
  expect(identical(a, c)).toBeFalse()
  expect(identical(undefined, undefined)).toBeTrue()
  expect(identical(null, undefined)).toBeFalse()
})

import { F, T } from '../rambda.js'
import { identical } from './identical.js'

test('r.F and R.T', () => {
  expect(F()).toBeFalsy()
  expect(T()).toBeTruthy()
})

test('identical', () => {
  const a = { a: 1 }
  const b = { a: 1 }
  const c = {
    a: 1,
    b: 2,
  }

  expect(identical(100)(100)).toBeTruthy()
  expect(identical(100, '100')).toBeFalsy()
  expect(identical('string', 'string')).toBeTruthy()
  expect(identical([], [])).toBeFalsy()
  expect(identical(a, a)).toBeTruthy()
  expect(identical(a, b)).toBeFalsy()
  expect(identical(a, c)).toBeFalsy()
  expect(identical(undefined, undefined)).toBeTruthy()
  expect(identical(null, undefined)).toBeFalsy()
})

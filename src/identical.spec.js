import { identical } from './identical'
import { _isInteger } from './internal/_isInteger'
import { _objectIs } from './internal/_objectIs'
import { F } from './F'
import { T } from './T'

test('small', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('is integer internal', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('object is internal', () => {
  expect(_objectIs(1, 1)).toBe(true)
  expect(_objectIs(NaN, NaN)).toBe(true)
})

test('identical', () => {
  const a = {}

  expect(identical(100)(100)).toEqual(true)
  expect(identical(100, '100')).toEqual(false)
  expect(identical('string', 'string')).toEqual(true)
  expect(identical([], [])).toEqual(false)
  expect(identical(a, a)).toEqual(true)
  expect(identical(undefined, undefined)).toEqual(true)
  expect(identical(null, undefined)).toEqual(false)
})

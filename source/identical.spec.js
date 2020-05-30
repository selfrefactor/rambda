import { F, T } from '../rambda'
import { _isInteger } from './_internals/_isInteger'
import { _objectIs } from './_internals/_objectIs'
import { identical } from './identical'

test('with boolean', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('internal objectIs', () => {
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

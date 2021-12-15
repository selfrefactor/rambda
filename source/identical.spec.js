import {F, T} from '../rambda'
import {_isInteger} from './_internals/_isInteger'
import {_objectIs} from './_internals/_objectIs'
import {identical} from './identical'

test('R.F and R.T', () => {
  expect(F()).toBeFalse()
  expect(T()).toBeTrue()
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBeTrue()
  expect(_isInteger(0.3)).toBeFalse()
})

test('internal objectIs', () => {
  expect(_objectIs(1, 1)).toBeTrue()
  expect(_objectIs(NaN, NaN)).toBeTrue()
})

test('identical', () => {
  const a = {a:1}
  const b = {a:1}
  const c = {a:1, b:2}

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

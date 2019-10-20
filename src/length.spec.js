import { length } from './length'
import { identical } from './identical.js'

test('happy', () => {
  expect(length('foo')).toEqual(3)
  expect(length([ 1, 2, 3 ])).toEqual(3)
  expect(length([])).toEqual(0)
})

test('with bad input', () => {
  expect(identical(NaN, length(0))).toEqual(true)
  expect(identical(NaN, length({}))).toEqual(true)
  expect(identical(NaN, length(null))).toEqual(true)
  expect(identical(NaN, length(undefined))).toEqual(true)
})

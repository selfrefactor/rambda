import { T, always } from 'rambda'
import { pickBy } from './pickBy.js'

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

it('creates a copy of the object', () => {
  expect(pickBy(always(true), obj)).not.toBe(obj)
})

it('when returning truthy, keeps the key', () => {
  expect(pickBy(T, obj)).toEqual(obj)
  expect(pickBy(always({}), obj)).toEqual(obj)
  expect(pickBy(always(1), obj)).toEqual(obj)
})

it('when returning falsy, keeps the key', () => {
  expect(pickBy(always(false), obj)).toEqual({})
  expect(pickBy(always(0), obj)).toEqual({})
  expect(pickBy(always(null), obj)).toEqual({})
})

it('is called with (val,key,obj)', () => {
  expect(
    pickBy((val, key, _obj) => {
      expect(_obj).toBe(obj)
      return key === 'd' && val === 4
    }, obj),
  ).toEqual({ d: 4 })
})

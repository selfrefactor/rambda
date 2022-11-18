import { map as mapRamda } from 'ramda'

import { map } from './map.js'

const double = x => x * 2

describe('with array', () => {
  it('happy', () => {
    expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
  })

  it('curried', () => {
    expect(map(double)([ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
  })
})

describe('with object', () => {
  const obj = {
    a : 1,
    b : 2,
  }

  it('happy', () => {
    expect(map(double, obj)).toEqual({
      a : 2,
      b : 4,
    })
  })

  it('property as second and input object as third argument', () => {
    const obj = {
      a : 1,
      b : 2,
    }
    const iterator = (
      val, prop, inputObject
    ) => {
      expect(prop).toBeString()
      expect(inputObject).toEqual(obj)

      return val * 2
    }

    expect(map(iterator)(obj)).toEqual({
      a : 2,
      b : 4,
    })
  })
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => map(double, null)).toThrowErrorMatchingInlineSnapshot('"Incorrect iterable input"')
  expect(() => map(double)(undefined)).toThrowErrorMatchingInlineSnapshot('"Incorrect iterable input"')
  expect(() => mapRamda(double, null)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of null (reading \'fantasy-land/map\')"')
  expect(() =>
    mapRamda(double, undefined)).toThrowErrorMatchingInlineSnapshot('"Cannot read properties of undefined (reading \'fantasy-land/map\')"')
})

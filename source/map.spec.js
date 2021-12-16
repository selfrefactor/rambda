import {map} from './map'
import {map as mapRamda} from 'ramda'

const double = x => x * 2

describe(`with array`, () => {
  test('happy', () => {
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6])
  })

  test('curried', () => {
    expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
  })
})

describe(`with object`, () => {
  const obj = {
    a: 1,
    b: 2,
  }

  test('happy', () => {
    expect(map(double, obj)).toEqual({
      a: 2,
      b: 4,
    })
  })
  test('property as second and input object as third argument', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    const iterator = (val, prop, inputObject) => {
      expect(prop).toBeString()
      expect(inputObject).toEqual(obj)

      return val * 2
    }

    expect(map(iterator)(obj)).toEqual({
      a: 2,
      b: 4,
    })
  })
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => map(double, null)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => map(double)(undefined)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => mapRamda(double, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'fantasy-land/map')`
  )
  expect(() => mapRamda(double, undefined)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of undefined (reading 'fantasy-land/map')`
  )
})

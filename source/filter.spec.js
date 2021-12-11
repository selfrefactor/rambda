import {T} from './T'
import {filter} from './filter'
import {filter as filterRamda} from 'ramda'

const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
  expect(
    filter(isEven, {
      a: 1,
      b: 2,
      d: 3,
    })
  ).toEqual({b: 2})
})

test('predicate when input is object', () => {
  const obj = {
    a: 1,
    b: 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toEqual('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({a: 1})
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b: 2,
    d: 4,
  }

  expect(result).toEqual(expectedResult)
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => filter(T, null)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => filter(T)(undefined)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => filterRamda(T, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'filter')`
  )
  expect(() => filterRamda(T, undefined)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of undefined (reading 'filter')`
  )
})

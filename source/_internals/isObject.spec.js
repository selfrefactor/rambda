import {_isObject} from './isObject'

test('happy', () => {
  expect(_isObject({})).toBeTruthy()
})

test('with array', () => {
  expect(_isObject([])).toBeFalsy()
})

test('with object-alike boolean', () => {
  expect(_isObject(new Boolean(true))).toBeFalsy()
})

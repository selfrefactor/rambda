import { compose } from './compose.js'
import { identity } from './identity.js'
import { inc } from './inc.js'
import { lensProp } from './lensProp.js'
import { over } from './over.js'
import { set } from './set.js'
import { view } from './view.js'

const testObj = {
  a: 1,
  b: 2,
  c: 3,
}

test('focuses object the specified object property', () => {
  expect(view(lensProp('a'), testObj)).toBe(1)
})

test('returns undefined if the specified property does not exist', () => {
  expect(view(lensProp('X'), testObj)).toBeUndefined()
})

test('sets the value of the object property specified', () => {
  expect(set(lensProp('a'), 0, testObj)).toEqual({
    a: 0,
    b: 2,
    c: 3,
  })
})

test("adds the property to the object if it doesn't exist", () => {
  expect(set(lensProp('d'), 4, testObj)).toEqual({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  })
})

test('applies function to the value of the specified object property', () => {
  expect(over(lensProp('a'), inc, testObj)).toEqual({
    a: 2,
    b: 2,
    c: 3,
  })
})

test("applies function to undefined and adds the property if it doesn't exist", () => {
  expect(over(lensProp('X'), identity, testObj)).toEqual({
    a: 1,
    b: 2,
    c: 3,
    X: undefined,
  })
})

test('can be composed', () => {
  const nestedObj = {
    a: { b: 1 },
    c: 2,
  }
  const composedLens = compose(lensProp('a'), lensProp('b'))

  expect(view(composedLens, nestedObj)).toBe(1)
})

test('set s (get s) === s', () => {
  expect(set(lensProp('a'), view(lensProp('a'), testObj), testObj)).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensProp('a'), set(lensProp('a'), 0, testObj))).toBe(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(
    view(lensProp('a'), set(lensProp('a'), 11, set(lensProp('a'), 10, testObj))),
  ).toBe(11)
})

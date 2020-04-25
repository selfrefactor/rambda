import { add } from './add'
import { getter, reset, setter } from './getter'

afterEach(() => {
  reset()
})

test('', () => {
  const key = 'foo'
  setter(key, 1)

  expect(getter(key)).toBe(1)
})

test('when array is key in getter', () => {
  setter({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(getter([ 'a', 'b' ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('getter with undefined as key returns all', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)

  expect(getter()).toEqual(data)
})

test('function as setter value', () => {
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }

  setter(data)
  setter('a', add(10))

  expect(getter()).toEqual({
    a : 11,
    b : 2,
    c : 3,
  })
})

test('setter fallbacks to undefined', () => {
  expect(setter()).toBeUndefined
})

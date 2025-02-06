import { add } from './add.js'
import { getter, reset, setter } from './getter.js'

afterEach(() => {
  reset()
})

test('happy', () => {
  const key = 'foo'
  setter(key, 1)

  expect(getter(key)).toBe(1)
})

test('docs example', () => {
  setter('foo', 'bar')
  setter('a', 1)
  expect(getter(['foo', 'a'])).toEqual({
    foo: 'bar',
    a: 1,
  })

  setter('a', 2)
  expect(getter('a')).toBe(2)
  reset()
  expect(getter('a')).toBeUndefined()
})

test('when array is key in getter', () => {
  setter({
    a: 1,
    b: 2,
    c: 3,
  })

  expect(getter(['a', 'b'])).toEqual({
    a: 1,
    b: 2,
  })
})

test('getter with undefined as key returns all', () => {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  }

  setter(data)

  expect(getter()).toEqual(data)
})

test('function as setter value', () => {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  }

  setter(data)
  setter('a', add(10))

  expect(getter()).toEqual({
    a: 11,
    b: 2,
    c: 3,
  })
})

test('setter fallbacks to undefined', () => {
  expect(setter()).toBeUndefined
})

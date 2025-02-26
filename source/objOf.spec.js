import { objOf } from './objOf.js'

test('happy', () => {
  expect(objOf('foo', 42)).toEqual({ foo: 42 })
})

test('with bad inputs', () => {
  expect(objOf(null, undefined)).toEqual({ null: undefined })
})

test('curried', () => {
  expect(objOf('foo')(42)).toEqual({ foo: 42 })
})

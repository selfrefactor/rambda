import * as R from 'ramda'
import { always } from './always.js'
import { has } from './has.js'
import { identity } from './identity.js'
import { ifElse } from './ifElse.js'
import { prop } from './prop.js'

const condition = has('foo')
const v = a => typeof a === 'number'
const t = a => a + 1
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo: 'bar' })).toBe(3)
  expect(fn({ fo: 'bar' })).toBeFalsy()
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toBe(16)
  expect(ifIsNumber(t, identity)('hello')).toBe('hello')
})

test('pass all arguments', () => {
  const identity = a => a
  const v = () => true
  const onTrue = (a, b) => {
    expect(a).toBe(123)
    expect(b).toBe('abc')
  }
  ifElse(v, onTrue, identity)(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toBeTruthy()
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(false, always(true), always(false))

  expect(fn()).toBeFalsy()
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo: 'bar' })).toBe(3)
  expect(fn({ fo: 'bar' })).toBeFalsy()
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo: 'bar' })).toBe(3)
  expect(fn({ fo: 'bar' })).toBeFalsy()
})

test('simple arity of 1', () => {
  const condition = x => x > 5
  const onTrue = x => x + 1
  const onFalse = x => x + 10
  const result = ifElse(condition, onTrue, onFalse)(1)
  expect(result).toBe(11)
})

test('simple arity of 2', () => {
  const condition = (x, y) => x + y > 5
  const onTrue = (x, y) => x + y + 1
  const onFalse = (x, y) => x + y + 10
  const result = ifElse(condition, onTrue, onFalse)(1, 10)
  expect(result).toBe(12)
})

test('bug 750', () => {
  const value = 34

  const result = ifElse(R.identity, R.always('true'), R.always('false'))(value)
  expect(result).toBe('true')
})

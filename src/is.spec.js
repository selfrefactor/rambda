import { is } from './is'

test('works with built-in types', () => {
  expect(is(Array, undefined)).toBeFalsy()
  expect(is(Array)([])).toBeTruthy()
  expect(is(Boolean, new Boolean(false))).toBeTruthy()
  expect(is(Date, new Date())).toBeTruthy()
  expect(is(Function, () => {})).toBeTruthy()
  expect(is(Number, new Number(0))).toBeTruthy()
  expect(is(Object, {})).toBeTruthy()
  expect(is(RegExp, /(?:)/)).toBeTruthy()
  expect(is(String, new String(''))).toBeTruthy()
})

test('works with user-defined types', () => {
  function Foo(){}
  function Bar(){}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(is(Foo, foo)).toBeTruthy()
  expect(is(Bar, bar)).toBeTruthy()
  expect(is(Foo, bar)).toBeTruthy()
  expect(is(Bar, foo)).toBeFalsy()
})

test('does not coerce', () => {
  expect(is(Boolean, 1)).toBeFalsy()
  expect(is(Number, '1')).toBeFalsy()
  expect(is(Number, false)).toBeFalsy()
})

test('recognizes primitives as their object equivalents', () => {
  expect(is(Boolean, false)).toBeTruthy()
  expect(is(Number, 0)).toBeTruthy()
  expect(is(String, '')).toBeTruthy()
})

test('does not consider primitives to be instances of Object', () => {
  expect(is(Object, false)).toBeFalsy()
  expect(is(Object, 0)).toBeFalsy()
  expect(is(Object, '')).toBeFalsy()
})

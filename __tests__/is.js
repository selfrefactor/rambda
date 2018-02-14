const R = require('../rambda')

test('works with built-in types', () => {
  expect(R.is(Array)([])).toBeTruthy()
  expect(R.is(Boolean, new Boolean(false))).toBeTruthy()
  expect(R.is(Date, new Date())).toBeTruthy()
  expect(R.is(Function, () => {})).toBeTruthy()
  expect(R.is(Number, new Number(0))).toBeTruthy()
  expect(R.is(Object, {})).toBeTruthy()
  expect(R.is(RegExp, /(?:)/)).toBeTruthy()
  expect(R.is(String, new String(''))).toBeTruthy()
})

test('works with user-defined types', () => {
  function Foo () {}
  function Bar () {}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(R.is(Foo, foo)).toBeTruthy()
  expect(R.is(Bar, bar)).toBeTruthy()
  expect(R.is(Foo, bar)).toBeTruthy()
  expect(R.is(Bar, foo)).toBeFalsy()
})

test('does not coerce', () => {
  expect(R.is(Boolean, 1)).toBeFalsy()
  expect(R.is(Number, '1')).toBeFalsy()
  expect(R.is(Number, false)).toBeFalsy()
})

test('recognizes primitives as their object equivalents', () => {
  expect(R.is(Boolean, false)).toBeTruthy()
  expect(R.is(Number, 0)).toBeTruthy()
  expect(R.is(String, '')).toBeTruthy()
})

test('does not consider primitives to be instances of Object', () => {
  expect(R.is(Object, false)).toBeFalsy()
  expect(R.is(Object, 0)).toBeFalsy()
  expect(R.is(Object, '')).toBeFalsy()
})

import { bind } from './bind.js'

function Foo(x) {
  this.x = x
}
function add(x) {
  return this.x + x
}
function Bar(x, y) {
  this.x = x
  this.y = y
}
Bar.prototype = new Foo()
Bar.prototype.getX = () => 'prototype getX'

test('returns a function', () => {
  expect(typeof bind(add)(Foo)).toBe('function')
})

test('returns a function bound to the specified context object', () => {
  const f = new Foo(12)
  function isFoo() {
    return this instanceof Foo
  }
  const isFooBound = bind(isFoo, f)
  expect(isFoo()).toBeFalse()
  expect(isFooBound()).toBeTrue()
})

test('works with built-in types', () => {
  const abc = bind(String.prototype.toLowerCase, 'ABCDEFG')
  expect(typeof abc).toBe('function')
  expect(abc()).toBe('abcdefg')
})

test('works with user-defined types', () => {
  const f = new Foo(12)
  function getX() {
    return this.x
  }
  const getXFooBound = bind(getX, f)
  expect(getXFooBound()).toBe(12)
})

test('works with plain objects', () => {
  const pojso = { x: 100 }
  function incThis() {
    return this.x + 1
  }
  const incPojso = bind(incThis, pojso)
  expect(typeof incPojso).toBe('function')
  expect(incPojso()).toBe(101)
})

test('does not interfere with existing object methods', () => {
  const b = new Bar('a', 'b')
  function getX() {
    return this.x
  }
  const getXBarBound = bind(getX, b)
  expect(b.getX()).toBe('prototype getX')
  expect(getXBarBound()).toBe('a')
})

test('preserves arity', () => {
  const f0 = () => 0
  const f1 = a => a
  const f2 = (a, b) => a + b
  const f3 = (a, b, c) => a + b + c

  expect(bind(f0, {})).toHaveLength(0)
  expect(bind(f1, {})).toHaveLength(1)
  expect(bind(f2, {})).toHaveLength(2)
  expect(bind(f3, {})).toHaveLength(3)
})

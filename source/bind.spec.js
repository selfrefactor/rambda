import {bind} from './bind.js'

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
Bar.prototype.getX = function () {
  return 'prototype getX'
}

test('returns a function', () => {
  expect(typeof bind(add)(Foo)).toEqual('function')
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
  expect(typeof abc).toEqual('function')
  expect(abc()).toEqual('abcdefg')
})

test('works with user-defined types', () => {
  const f = new Foo(12)
  function getX() {
    return this.x
  }
  const getXFooBound = bind(getX, f)
  expect(getXFooBound()).toEqual(12)
})

test('works with plain objects', () => {
  const pojso = {x: 100}
  function incThis() {
    return this.x + 1
  }
  const incPojso = bind(incThis, pojso)
  expect(typeof incPojso).toEqual('function')
  expect(incPojso()).toEqual(101)
})

test('does not interfere with existing object methods', () => {
  const b = new Bar('a', 'b')
  function getX() {
    return this.x
  }
  const getXBarBound = bind(getX, b)
  expect(b.getX()).toEqual('prototype getX')
  expect(getXBarBound()).toEqual('a')
})

test('preserves arity', () => {
  const f0 = function () {
    return 0
  }
  const f1 = function (a) {
    return a
  }
  const f2 = function (a, b) {
    return a + b
  }
  const f3 = function (a, b, c) {
    return a + b + c
  }

  expect(bind(f0, {}).length).toEqual(0)
  expect(bind(f1, {}).length).toEqual(1)
  expect(bind(f2, {}).length).toEqual(2)
  expect(bind(f3, {}).length).toEqual(3)
})

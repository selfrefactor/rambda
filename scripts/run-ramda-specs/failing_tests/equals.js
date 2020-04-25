/* global Map, Set, WeakMap, WeakSet */

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('equals', () => {
  const a = []
  const b = a
  it('never considers Boolean primitive equal to Boolean object', () => {
    eq(R.equals(true, new Boolean(true)), false)
    eq(R.equals(new Boolean(true), true), false)
    eq(R.equals(false, new Boolean(false)), false)
    eq(R.equals(new Boolean(false), false), false)
  })
  it('never considers number primitive equal to Number object', () => {
    eq(R.equals(0, new Number(0)), false)
    eq(R.equals(new Number(0), 0), false)
  })
  it('never considers string primitive equal to String object', () => {
    eq(R.equals('', new String('')), false)
    eq(R.equals(new String(''), ''), false)
    eq(R.equals('x', new String('x')), false)
    eq(R.equals(new String('x'), 'x'), false)
  })
  let supportsSticky = false
  try {
    RegExp('', 'y')
    supportsSticky = true
  } catch (e){}
  let supportsUnicode = false
  try {
    RegExp('', 'u')
    supportsUnicode = true
  } catch (e){}
  const listA = [ 1, 2, 3 ]
  const listB = [ 1, 3, 2 ]
  const c = {}
  c.v = c
  const d = {}
  d.v = d
  const e = []
  e.push(e)
  const f = []
  f.push(f)
  const nestA = {
    a : [ 1, 2, { c : 1 } ],
    b : 1,
  }
  const nestB = {
    a : [ 1, 2, { c : 1 } ],
    b : 1,
  }
  const nestC = {
    a : [ 1, 2, { c : 2 } ],
    b : 1,
  }
  it('handles recursive data structures', () => {
    eq(R.equals(c, d), true)
    eq(R.equals(e, f), true)
    eq(R.equals(nestA, nestB), true)
    eq(R.equals(nestA, nestC), false)
  })
  it('requires that both objects have the same enumerable properties with the same values', () => {
    const a1 = []
    const a2 = []
    a2.x = 0
    const b1 = new Boolean(false)
    const b2 = new Boolean(false)
    b2.x = 0
    const d1 = new Date(0)
    const d2 = new Date(0)
    d2.x = 0
    const n1 = new Number(0)
    const n2 = new Number(0)
    n2.x = 0
    const r1 = /(?:)/
    const r2 = /(?:)/
    r2.x = 0
    const s1 = new String('')
    const s2 = new String('')
    s2.x = 0
    eq(R.equals(a1, a2), false)
    eq(R.equals(b1, b2), false)
    eq(R.equals(d1, d2), false)
    eq(R.equals(n1, n2), false)
    eq(R.equals(r1, r2), false)
    eq(R.equals(s1, s2), false)
  })
  if (
    typeof ArrayBuffer !== 'undefined' &&
    typeof Int8Array !== 'undefined'
  ){
    const typArr1 = new ArrayBuffer(10)
    typArr1[ 0 ] = 1
    const typArr2 = new ArrayBuffer(10)
    typArr2[ 0 ] = 1
    const typArr3 = new ArrayBuffer(10)
    const intTypArr = new Int8Array(typArr1)
    typArr3[ 0 ] = 0
    it('handles typed arrays', () => {
      eq(R.equals(typArr1, typArr2), true)
      eq(R.equals(typArr1, typArr3), false)
      eq(R.equals(typArr1, intTypArr), false)
    })
  }
  if (typeof Promise !== 'undefined'){
    it('compares Promise objects by identity', () => {
      const p = Promise.resolve(42)
      const q = Promise.resolve(42)
      eq(R.equals(p, p), true)
      eq(R.equals(p, q), false)
    })
  }
  if (typeof Map !== 'undefined'){
    it('compares Map objects by value', () => {
      eq(R.equals(new Map([]), new Map([])), true)
      eq(R.equals(new Map([]), new Map([ [ 1, 'a' ] ])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 1, 'a' ] ])), true)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, 'b' ],
      ]),
      new Map([
        [ 2, 'b' ],
        [ 1, 'a' ],
      ])),
      true)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 2, 'a' ] ])), false)
      eq(R.equals(new Map([ [ 1, 'a' ] ]), new Map([ [ 1, 'b' ] ])), false)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ]),
      new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ])),
      true)
      eq(R.equals(new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'c' ] ]) ],
      ]),
      new Map([
        [ 1, 'a' ],
        [ 2, new Map([ [ 3, 'd' ] ]) ],
      ])),
      false)
      eq(R.equals(new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ]),
      new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ])),
      true)
      eq(R.equals(new Map([
        [
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
        ],
      ]),
      new Map([
        [
          [ 1, 2, 3 ],
          [ 7, 8, 9 ],
        ],
      ])),
      false)
    })
    it('dispatches to `equals` method recursively in Set', () => {
      const a = new Map()
      const b = new Map()
      a.set(a, a)
      eq(R.equals(a, b), false)
      a.set(b, b)
      b.set(b, b)
      b.set(a, a)
      eq(R.equals(a, b), true)
    })
  }
  if (typeof Set !== 'undefined'){
    it('compares Set objects by value', () => {
      eq(R.equals(new Set([]), new Set([])), true)
      eq(R.equals(new Set([]), new Set([ 1 ])), false)
      eq(R.equals(new Set([ 1 ]), new Set([])), false)
      eq(R.equals(new Set([ 1, 2 ]), new Set([ 2, 1 ])), true)
      eq(R.equals(new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ]),
        new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ])),
      true)
      eq(R.equals(new Set([ 1, new Set([ 2, new Set([ 3 ]) ]) ]),
        new Set([ 1, new Set([ 2, new Set([ 4 ]) ]) ])),
      false)
      eq(R.equals(new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ]),
      new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ])),
      true)
      eq(R.equals(new Set([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
      ]),
      new Set([
        [ 1, 2, 3 ],
        [ 7, 8, 9 ],
      ])),
      false)
    })
    it('dispatches to `equals` method recursively in Set', () => {
      const a = new Set()
      const b = new Set()
      a.add(a)
      eq(R.equals(a, b), false)
      a.add(b)
      b.add(b)
      b.add(a)
      eq(R.equals(a, b), true)
    })
  }
  if (typeof WeakMap !== 'undefined'){
    it('compares WeakMap objects by identity', () => {
      const m = new WeakMap([])
      eq(R.equals(m, m), true)
      eq(R.equals(m, new WeakMap([])), false)
    })
  }
  if (typeof WeakSet !== 'undefined'){
    it('compares WeakSet objects by identity', () => {
      const s = new WeakSet([])
      eq(R.equals(s, s), true)
      eq(R.equals(s, new WeakSet([])), false)
    })
  }
  it('dispatches to `equals` method recursively', () => {
    function Left(x){
      this.value = x
    }
    Left.prototype.equals = function (x){
      return x instanceof Left && R.equals(x.value, this.value)
    }
    function Right(x){
      this.value = x
    }
    Right.prototype.equals = function (x){
      return x instanceof Right && R.equals(x.value, this.value)
    }
    eq(R.equals(new Left([ 42 ]), new Left([ 42 ])), true)
    eq(R.equals(new Left([ 42 ]), new Left([ 43 ])), false)
    eq(R.equals(new Left(42), { value : 42 }), false)
    eq(R.equals({ value : 42 }, new Left(42)), false)
    eq(R.equals(new Left(42), new Right(42)), false)
    eq(R.equals(new Right(42), new Left(42)), false)
    eq(R.equals([ new Left(42) ], [ new Left(42) ]), true)
    eq(R.equals([ new Left(42) ], [ new Right(42) ]), false)
    eq(R.equals([ new Right(42) ], [ new Left(42) ]), false)
    eq(R.equals([ new Right(42) ], [ new Right(42) ]), true)
  })
})

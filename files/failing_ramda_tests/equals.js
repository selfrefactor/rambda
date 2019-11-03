/* global Map, Set, WeakMap, WeakSet */

const eq = require('./shared/eq')
const R = require('rambda')
describe('equals', () => {
  const a = []
  const b = a
  it('never considers Boolean primitive equal to Boolean object', () => {
    eq(R.equals(true, new Boolean(true)), false)
    eq(R.equals(new Boolean(true), true), false)
    eq(R.equals(false, new Boolean(false)), false)
    eq(R.equals(new Boolean(false), false), false)
  })
  it('considers equal number primitives equal', () => {
    eq(R.equals(0, 0), true)
    eq(R.equals(0, 1), false)
    eq(R.equals(1, 0), false)
  })
  it('considers equivalent Number objects equal', () => {
    eq(R.equals(new Number(0), new Number(0)), true)
    eq(R.equals(new Number(0), new Number(1)), false)
    eq(R.equals(new Number(1), new Number(0)), false)
  })
  it('never considers number primitive equal to Number object', () => {
    eq(R.equals(0, new Number(0)), false)
    eq(R.equals(new Number(0), 0), false)
  })
  it('considers equal string primitives equal', () => {
    eq(R.equals('', ''), true)
    eq(R.equals('', 'x'), false)
    eq(R.equals('x', ''), false)
    eq(R.equals('foo', 'foo'), true)
    eq(R.equals('foo', 'bar'), false)
    eq(R.equals('bar', 'foo'), false)
  })
  it('considers equivalent String objects equal', () => {
    eq(R.equals(new String(''), new String('')), true)
    eq(R.equals(new String(''), new String('x')), false)
    eq(R.equals(new String('x'), new String('')), false)
    eq(R.equals(new String('foo'), new String('foo')), true)
    eq(R.equals(new String('foo'), new String('bar')), false)
    eq(R.equals(new String('bar'), new String('foo')), false)
  })
  it('never considers string primitive equal to String object', () => {
    eq(R.equals('', new String('')), false)
    eq(R.equals(new String(''), ''), false)
    eq(R.equals('x', new String('x')), false)
    eq(R.equals(new String('x'), 'x'), false)
  })
  it('handles objects', () => {
    eq(R.equals({}, {}), true)
    eq(R.equals({
      a : 1,
      b : 2,
    }, {
      a : 1,
      b : 2,
    }), true)
    eq(R.equals({
      a : 2,
      b : 3,
    }, {
      b : 3,
      a : 2,
    }), true)
    eq(R.equals({
      a : 2,
      b : 3,
    }, {
      a : 3,
      b : 3,
    }), false)
    eq(R.equals({
      a : 2,
      b : 3,
      c : 1,
    }, {
      a : 2,
      b : 3,
    }), false)
  })
  it('considers equivalent Arguments objects equal', () => {
    const a = (function(){ return arguments }())
    const b = (function(){ return arguments }())
    const c = (function(){ return arguments }(1, 2, 3))
    const d = (function(){ return arguments }(1, 2, 3))
    eq(R.equals(a, b), true)
    eq(R.equals(b, a), true)
    eq(R.equals(c, d), true)
    eq(R.equals(d, c), true)
    eq(R.equals(a, c), false)
    eq(R.equals(c, a), false)
  })
  it('considers equivalent Error objects equal', () => {
    eq(R.equals(new Error('XXX'), new Error('XXX')), true)
    eq(R.equals(new Error('XXX'), new Error('YYY')), false)
    eq(R.equals(new Error('XXX'), new TypeError('XXX')), false)
    eq(R.equals(new Error('XXX'), new TypeError('YYY')), false)
  })
  let supportsSticky = false
  try { RegExp('', 'y'); supportsSticky = true } catch (e){}
  let supportsUnicode = false
  try { RegExp('', 'u'); supportsUnicode = true } catch (e){}
  it('handles regex', () => {
    eq(R.equals(/\s/, /\s/), true)
    eq(R.equals(/\s/, /\d/), false)
    eq(R.equals(/a/gi, /a/ig), true)
    eq(R.equals(/a/mgi, /a/img), true)
    eq(R.equals(/a/gi, /a/i), false)
    if (supportsSticky){
      // eq(R.equals(/\s/y, /\s/y), true);
      // eq(R.equals(/a/mygi, /a/imgy), true);
    }
    if (supportsUnicode){
      // eq(R.equals(/\s/u, /\s/u), true);
      // eq(R.equals(/a/mugi, /a/imgu), true);
    }
  })
  const listA = [ 1, 2, 3 ]
  const listB = [ 1, 3, 2 ]
  it('handles lists', () => {
    eq(R.equals([], {}), false)
    eq(R.equals(listA, listB), false)
  })
  const c = {}; c.v = c
  const d = {}; d.v = d
  const e = []; e.push(e)
  const f = []; f.push(f)
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
  it('handles dates', () => {
    eq(R.equals(new Date(0), new Date(0)), true)
    eq(R.equals(new Date(1), new Date(1)), true)
    eq(R.equals(new Date(0), new Date(1)), false)
    eq(R.equals(new Date(1), new Date(0)), false)
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
  it('is commutative', () => {
    function Point(x, y){
      this.x = x
      this.y = y
    }
    Point.prototype.equals = function(point){
      return point instanceof Point &&
             this.x === point.x && this.y === point.y
    }
    function ColorPoint(x, y, color){
      this.x = x
      this.y = y
      this.color = color
    }
    ColorPoint.prototype = new Point(0, 0)
    ColorPoint.prototype.equals = function(point){
      return point instanceof ColorPoint &&
             this.x === point.x && this.y === point.y &&
             this.color === point.color
    }
    eq(R.equals(new Point(2, 2), new ColorPoint(2, 2, 'red')), false)
    eq(R.equals(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false)
  })
})

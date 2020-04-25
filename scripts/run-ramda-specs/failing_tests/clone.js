const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('deep clone integers, strings and booleans', () => {
  it('clones integers', () => {
    eq(R.clone(-4), -4)
    eq(R.clone(9007199254740991), 9007199254740991)
  })
  it('clones floats', () => {
    eq(R.clone(-4.5), -4.5)
    eq(R.clone(0.0), 0.0)
  })
  it('clones strings', () => {
    eq(R.clone('ramda'), 'ramda')
  })
  it('clones booleans', () => {
    eq(R.clone(true), true)
  })
})
describe('deep clone objects', () => {
  it('clones objects with circular references', () => {
    const x = { c : null }
    const y = { a : x }
    const z = { b : y }
    x.c = z
    const clone = R.clone(x)
    assert.notStrictEqual(x, clone)
    assert.notStrictEqual(x.c, clone.c)
    assert.notStrictEqual(x.c.b, clone.c.b)
    assert.notStrictEqual(x.c.b.a, clone.c.b.a)
    assert.notStrictEqual(x.c.b.a.c, clone.c.b.a.c)
    eq(R.keys(clone), R.keys(x))
    eq(R.keys(clone.c), R.keys(x.c))
    eq(R.keys(clone.c.b), R.keys(x.c.b))
    eq(R.keys(clone.c.b.a), R.keys(x.c.b.a))
    eq(R.keys(clone.c.b.a.c), R.keys(x.c.b.a.c))
    x.c.b = 1
    assert.notDeepEqual(clone.c.b, x.c.b)
  })
})
describe('deep clone arrays', () => {})
describe('deep clone functions', () => {})
describe('built-in types', () => {
  it('clones RegExp object', () => {
    R.forEach(pattern => {
      const clone = R.clone(pattern)
      assert.notStrictEqual(clone, pattern)
      eq(clone.constructor, RegExp)
      eq(clone.source, pattern.source)
      eq(clone.global, pattern.global)
      eq(clone.ignoreCase, pattern.ignoreCase)
      eq(clone.multiline, pattern.multiline)
    },
    [ /x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim ])
  })
})
describe('deep clone deep nested mixed objects', () => {
  it('clones array with mutual ref object', () => {
    const obj = { a : 1 }
    const list = [ { b : obj }, { b : obj } ]
    const clone = R.clone(list)
    assert.strictEqual(list[ 0 ].b, list[ 1 ].b)
    assert.strictEqual(clone[ 0 ].b, clone[ 1 ].b)
    assert.notStrictEqual(clone[ 0 ].b, list[ 0 ].b)
    assert.notStrictEqual(clone[ 1 ].b, list[ 1 ].b)
    eq(clone[ 0 ].b, { a : 1 })
    eq(clone[ 1 ].b, { a : 1 })
    obj.a = 2
    eq(clone[ 0 ].b, { a : 1 })
    eq(clone[ 1 ].b, { a : 1 })
  })
})
describe('deep clone edge cases', () => {
  it('nulls, undefineds and empty objects and arrays', () => {
    eq(R.clone(null), null)
    eq(R.clone(undefined), undefined)
    assert.notStrictEqual(R.clone(undefined), null)
    const obj = {}
    assert.notStrictEqual(R.clone(obj), obj)
    const list = []
    assert.notStrictEqual(R.clone(list), list)
  })
})
describe('Let `R.clone` use an arbitrary user defined `clone` method', () => {
  it('dispatches to `clone` method if present', () => {
    function ArbitraryClone(x){
      this.value = x
    }
    ArbitraryClone.prototype.clone = function (){
      return new ArbitraryClone(this.value)
    }
    const obj = new ArbitraryClone(42)
    const arbitraryClonedObj = R.clone(obj)
    eq(arbitraryClonedObj, new ArbitraryClone(42))
    eq(arbitraryClonedObj instanceof ArbitraryClone, true)
  })
})

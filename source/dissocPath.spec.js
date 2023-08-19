const assert = require('assert')
import { dissocPath as dissocPathRamda } from 'ramda'

import { dissocPath } from './dissocPath.js'

const testInput = {
  a : {
    b : 1,
    c : 2,
    d : { e : 3 },
  },
  f : [
    { g : 4 },
    {
      h : 5,
      i : 6,
      j : {
        k : 7,
        l : 8,
      },
    },
  ],
  m : 9,
}

test('happy', () => {
  const expected = {
    a : {
      b : 1,
      c : 2,
      d : { e : 3 },
    },
    f : [
      { g : 4 },
      {
        h : 5,
        j : {
          k : 7,
          l : 8,
        },
      },
    ],
    m : 9,
  }
  const result = dissocPath('f.1.i', testInput)
  expect(result).toEqual(expected)
})

/*

var R = require('../source/index.js');
var eq = require('./shared/eq.js');

describe('dissocPath', function() {

  it('does not try to omit inner properties that do not exist', function() {
    var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
    var obj2 = R.dissocPath(['x', 0, 'z'], obj1);
    eq(obj2, {a: 1, b: {c: 2, d: 3}, e: 4, f: 5});
    // Note: reference equality below!
    assert.strictEqual(obj2.a, obj1.a);
    assert.strictEqual(obj2.b, obj1.b);
    assert.strictEqual(obj2.f, obj1.f);
  });

  it('leaves an empty object when all properties omitted', function() {
    var obj1 = {a: 1, b: {c: 2}, d: 3};
    var obj2 = R.dissocPath(['b', 'c'], obj1);
    eq(obj2,
      {a: 1, b: {}, d: 3}
    );
  });

  it('leaves an empty array when all indexes are omitted', function() {
    var obj1 = {a: 1, b: [2], d: 3};
    var obj2 = R.dissocPath(['b', 0], obj1);
    eq(obj2,
      {a: 1, b: [], d: 3}
    );
  });

  it('flattens properties from prototype', function() {
    var F = function() {};
    F.prototype.a = 1;
    var obj1 = new F();
    obj1.b = {c: 2, d: 3};
    var obj2 = R.dissocPath(['b', 'c'], obj1);
    eq(obj2,
      {a: 1, b: {d: 3}}
    );
  });

  it('accepts empty path', function() {
    eq(R.dissocPath([], {a: 1, b: 2}), {a: 1, b: 2});
  });

  it('allow integer to be used as key for object', function() {
    eq(R.dissocPath([42], {a: 1, b: 2, 42: 3}), {a: 1, b: 2});
  });

  it('support remove null/undefined value path', function() {
    eq(R.dissocPath(['c', 'd'], {a: 1, b: 2, c: null}), {a: 1, b: 2, c: null});
    eq(R.dissocPath(['c', 'd'], {a: 1, b: 2, c: undefined}), {a: 1, b: 2, c: undefined});

    var obj1 = {a: 1, b: 2};
    var obj2 = R.dissocPath(['c', 'd'], obj1);

    eq(obj2, obj1);

    // Note: reference equality below!
    assert.notStrictEqual(obj2, obj1);
  });

});

*/

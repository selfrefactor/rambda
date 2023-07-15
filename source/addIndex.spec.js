import { addIndex } from './addIndex.js'
import { map } from './map.js'

test('happy', () => {
  function mapFn(fn, list){
    const willReturn = []
    list.forEach(item => {
      willReturn.push(fn(item))
    })

    return willReturn
  }
  const mapIndexed = addIndex(mapFn)
  const fn2 = (val, idx) => {
    console.log({
      val,
      idx,
    })

    return val + idx + 5
  }
  const result = mapIndexed(fn2, [ 1, 2, 3 ])
  expect(result).toEqual([ 6, 8, 10 ])
})

describe('unary functions like `map`', () => {
  const times2 = function (x){
    return x * 2
  }
  const addIndexParam = function (x, idx){
    return x + idx
  }
  const squareEnds = function (
    x, idx, list
  ){
    return idx === 0 || idx === list.length - 1 ? x * x : x
  }
  const mapIndexed = addIndex(map)

  it('works just like a normal map', () => {
    expect(mapIndexed(times2, [ 1, 2, 3, 4 ])).toEqual([ 2, 4, 6, 8 ])
  })

  it('passes the index as a second parameter to the callback', () => {
    expect(mapIndexed(addIndexParam, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      8, 7, 9, 8, 7, 5, 15,
    ])
  })

  it('passes the entire list as a third parameter to the callback', () => {
    expect(mapIndexed(squareEnds, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })

  it('acts as a curried function', () => {
    const makeSquareEnds = mapIndexed(squareEnds)
    expect(makeSquareEnds([ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })
})
/*
var R = require('../source/index.js');
var eq = require('./shared/eq.js');

describe('addIndex', function() {

  describe('binary functions like `reduce`', function() {
    var reduceIndexed = R.addIndex(R.reduce);
    var timesIndexed = function(tot, num, idx) {return tot + (num * idx);};
    var objectify = function(acc, elem, idx) { acc[elem] = idx; return acc;};

    test('passes the index as a third parameter to the predicate', function() {
      eq(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5]), 40);
      eq(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e']), {a: 0, b: 1, c: 2, d: 3, e: 4});
    });

    test('passes the entire list as a fourth parameter to the predicate', function() {
      var list = [1, 2, 3];
      reduceIndexed(function(acc, x, idx, ls) {
        eq(ls, list);
        return acc;
      }, 0, list);
    });

  });

  describe('works with functions like `all` that do not typically have index applied', function() {
    var allIndexed = R.addIndex(R.all);
    var superDiagonal = allIndexed(R.gt);
    test('passes the index as a second parameter', function() {
      eq(superDiagonal([8, 6, 5, 4, 9]), true); // 8 > 0, 6 > 1, 5 > 2, 4 > 3, 9 > 5
      eq(superDiagonal([8, 6, 1, 3, 9]), false); //  1 !> 2, 3 !> 3
    });

  });

  describe('works with arbitrary user-defined functions', function() {
    var mapFilter = function(m, f, list) {
      return R.filter(R.compose(f, m), list);
    };
    var mapFilterIndexed = R.addIndex(mapFilter);
    test('passes the index as an additional parameter', function() {
      eq(mapFilterIndexed(
        R.multiply,
        R.gt(R.__, 13),
        [8, 6, 7, 5, 3, 0, 9]
      ), [7, 5, 9]); // 2 * 7 > 13, 3 * 5 > 13, 6 * 9 > 13
    });

  });

});

*/

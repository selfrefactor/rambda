import { comparator } from './comparator'
import { comparator as comparatorRamda } from 'ramda'

test('happy', () => {
  const result = comparator()
  console.log(result)
})

/*
var R = require('../source/index.js');
var eq = require('./shared/eq.js');


describe('comparator', function() {
  it('builds a comparator function for sorting out of a simple predicate that reports whether the first param is smaller', function() {
    eq([3, 1, 8, 1, 2, 5].sort(R.comparator(function(a, b) {return a < b;})), [1, 1, 2, 3, 5, 8]);
  });

});

*/
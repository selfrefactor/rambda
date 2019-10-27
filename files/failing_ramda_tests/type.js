var R = require('rambda');
var eq = require('./shared/eq');

describe('type', function() {
  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });
  it('"Number" if given the NaN value', function() {
    eq(R.type(NaN), 'Number');
  });
  it('"String" if given a String literal', function() {
    eq(R.type('Gooooodd Mornning Ramda!!'), 'String');
  });
  it('"String" if given a String object', function() {
    eq(R.type(new String('I am a String object')), 'String');
  });
  it('"Null" if given the null value', function() {
    eq(R.type(null), 'Null');
  });
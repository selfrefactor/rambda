var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('has', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};
  it('does not check properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};
    var bob = new Person();
    eq(R.has('age', bob), false);
  });
});
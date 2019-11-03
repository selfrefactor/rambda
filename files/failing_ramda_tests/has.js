const eq = require('./shared/eq')
const R = require('rambda')

describe('has', () => {
  const fred = {
    name : 'Fred',
    age  : 23,
  }
  const anon = { age : 99 }
  it('does not check properties from the prototype chain', () => {
    const Person = function(){}
    Person.prototype.age = function(){}
    const bob = new Person()
    eq(R.has('age', bob), false)
  })
  it('returns false for non-objects', () => {
    eq(R.has('a', undefined), false)
    eq(R.has('a', null), false)
    eq(R.has('a', true), false)
    eq(R.has('a', ''), false)
    eq(R.has('a', /a/), false)
  })
  it('tests currying', () => {
    eq(R.has('a')({ a : { b : 1 } }), true)
  })
})

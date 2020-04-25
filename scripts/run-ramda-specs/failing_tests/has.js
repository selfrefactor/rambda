const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('has', () => {
  const fred = {
    name : 'Fred',
    age  : 23,
  }
  const anon = { age : 99 }
  it('does not check properties from the prototype chain', () => {
    const Person = function (){}
    Person.prototype.age = function (){}
    const bob = new Person()
    eq(R.has('age', bob), false)
  })
})

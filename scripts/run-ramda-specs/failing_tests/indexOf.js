const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('indexOf', () => {
  const input = [ 1, 2, 3, 4, 5 ]
  const list = [ 1, 2, 3 ]
  list[ -2 ] = 4 // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', () => {
    function Just(x){
      this.value = x
    }
    Just.prototype.equals = function (x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.indexOf(0, [ -0 ]), -1)
    eq(R.indexOf(-0, [ 0 ]), -1)
    eq(R.indexOf(NaN, [ NaN ]), 0)
    eq(R.indexOf(new Just([ 42 ]), [ new Just([ 42 ]) ]), 0)
  })
  it('dispatches to `indexOf` method', () => {
    function Empty(){}
    Empty.prototype.indexOf = R.always(-1)
    function List(head, tail){
      this.head = head
      this.tail = tail
    }
    List.prototype.indexOf = function (x){
      const idx = this.tail.indexOf(x)

      return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1
    }
    const list = new List('b',
      new List('a',
        new List('n',
          new List('a', new List('n', new List('a', new Empty()))))))
    eq(R.indexOf('a', 'banana'), 1)
    eq(R.indexOf('x', 'banana'), -1)
    eq(R.indexOf('a', list), 1)
    eq(R.indexOf('x', list), -1)
  })
})

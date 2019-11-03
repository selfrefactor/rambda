const eq = require('./shared/eq')
const R = require('rambda')

describe('lastIndexOf', () => {
  const input = [ 1, 2, 3, 4, 5, 1 ]
  const list = [ 'a', 1, 'a' ]
  list[ -2 ] = 'a' // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', () => {
    function Just(x){ this.value = x }
    Just.prototype.equals = function(x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.lastIndexOf(0, [ -0 ]), -1)
    eq(R.lastIndexOf(-0, [ 0 ]), -1)
    eq(R.lastIndexOf(NaN, [ NaN ]), 0)
    eq(R.lastIndexOf(new Just([ 42 ]), [ new Just([ 42 ]) ]), 0)
  })
  it('dispatches to `lastIndexOf` method', () => {
    function Empty(){}
    Empty.prototype.lastIndexOf = R.always(-1)
    function List(head, tail){
      this.head = head
      this.tail = tail
    }
    List.prototype.lastIndexOf = function(x){
      const idx = this.tail.lastIndexOf(x)

      return idx >= 0 ? 1 + idx : this.head === x ? 0 : -1
    }
    const list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    )
    eq(R.lastIndexOf('a', 'banana'), 5)
    eq(R.lastIndexOf('x', 'banana'), -1)
    eq(R.lastIndexOf('a', list), 5)
    eq(R.lastIndexOf('x', list), -1)
  })
  it('finds function, compared by identity', () => {
    const f = function(){}
    const g = function(){}
    const list = [ g, f, g, f ]
    eq(R.lastIndexOf(f, list), 3)
  })
  it('does not find function, compared by identity', () => {
    const f = function(){}
    const g = function(){}
    const h = function(){}
    const list = [ g, f ]
    eq(R.lastIndexOf(h, list), -1)
  })
})

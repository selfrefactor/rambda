const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('reduce', () => {
  const add = function (a, b){
    return a + b
  }
  const mult = function (a, b){
    return a * b
  }
  it('Prefers the use of the iterator of an object over reduce (and handles short-circuits)', () => {
    const symIterator =
      typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'
    function Reducible(arr){
      this.arr = arr
    }
    Reducible.prototype.reduce = function (f, init){
      let acc = init
      for (let i = 0; i < this.arr.length; i += 1){
        acc = f(acc, this.arr[ i ])
      }

      return acc
    }
    Reducible.prototype[ symIterator ] = function (){
      const a = this.arr

      return {
        _pos : 0,
        next : function (){
          if (this._pos < a.length){
            const v = a[ this._pos ]
            this._pos += 1

            return {
              value : v,
              done  : false,
            }
          }

          return { done : true }

        },
      }
    }
    const xf = R.take(2)
    const apendingT = {}
    apendingT[ '@@transducer/result' ] = R.identity
    apendingT[ '@@transducer/step' ] = R.flip(R.append)
    const rfn = xf(apendingT)
    const list = new Reducible([ 1, 2, 3, 4, 5, 6 ])
    eq(R.reduce(
      rfn, [], list
    ), [ 1, 2 ])
  })
  it('short circuits with reduced', () => {
    const addWithMaxOf10 = function (acc, val){
      return acc + val > 10 ? R.reduced(acc) : acc + val
    }
    eq(R.reduce(
      addWithMaxOf10, 0, [ 1, 2, 3, 4 ]
    ), 10)
    eq(R.reduce(
      addWithMaxOf10, 0, [ 2, 4, 6, 8 ]
    ), 6)
  })
})

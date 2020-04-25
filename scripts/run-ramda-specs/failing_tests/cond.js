const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('cond', () => {
  it('forwards all arguments to predicates and to transformers', () => {
    const fn = R.cond([
      [
        function (_, x){
          return x === 42
        },
        function (){
          return arguments.length
        },
      ],
    ])
    eq(fn(
      21, 42, 84
    ), 3)
  })
  it('retains highest predicate arity', () => {
    const fn = R.cond([
      [ R.nAry(2, R.T), R.T ],
      [ R.nAry(3, R.T), R.T ],
      [ R.nAry(1, R.T), R.T ],
    ])
    eq(fn.length, 3)
  })
})

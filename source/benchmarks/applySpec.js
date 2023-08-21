const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const curryN = [
  {
    fn : () => {
      const data = {
        a : {
          b : { c : 1 },
          d : 2,
        },
      }
      const spec = {
        c : R.path([ 'a', 'b', 'c' ]),
        d : R.path([ 'a', 'd' ]),
      }
      R.applySpec(spec, data)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      const data = {
        a : {
          b : { c : 1 },
          d : 2,
        },
      }
      const spec = {
        c : Ramda.path([ 'a', 'b', 'c' ]),
        d : Ramda.path([ 'a', 'd' ]),
      }
      Ramda.applySpec(spec, data)
    },
    label : 'Ramda',
  },
]

module.exports = curryN

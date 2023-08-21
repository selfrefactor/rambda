const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const list = [ 0, 1, 2 ]
const fn = x => x + 1
const index = 1

const adjust = [
  {
    fn : () => {
      R.adjust(
        index, fn, list
      )
      R.adjust(index, fn)(list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.adjust(
        index, fn, list
      )
      Ramda.adjust(index, fn)(list)
    },
    label : 'Ramda',
  },
]

module.exports = adjust

const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 0, 1, 2 ]
const index = 1
const replacer = 7

const update = [
  {
    fn : () => {
      R.update(
        replacer, index, list
      )
      R.update(replacer, index)(list)
      R.update(replacer)(index)(list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.update(
        replacer, index, list
      )
      Ramda.update(replacer, index)(list)
      Ramda.update(replacer)(index)(list)
    },
    label : 'Ramda',
  },
]

module.exports = update

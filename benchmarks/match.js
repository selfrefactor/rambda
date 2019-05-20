const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 'foo bar baz'
const pattern = /a./g

suite
  .add('Rambda.match', () => {
    R.match(pattern)(input)
  })
  .add('Ramda.match', () => {
    Ramda.match(pattern)(input)
  })

module.exports = suite

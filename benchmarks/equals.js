const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const suite = new Benchmark.Suite();

suite.add("Rambda.equals", () => {
  R.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
})
.add("Ramda", () => {
  Ramda.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
})
.add("Lodash.isEqual", () => {
  _.isEqual({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
})

module.exports = suite;
const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const suite = new Benchmark.Suite();

suite.add("Rambda.last", () => {
  R.last(holder)
})
.add("Ramda", () => {
  Ramda.last(holder)
})
.add("Lodash", () => {
  _.last(holder)
})
module.exports = suite;
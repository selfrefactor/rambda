const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const holder = 10
const a = 0

const suite = new Benchmark.Suite();

suite.add("Rambda#range", () => {
  R.range(a,holder)
})
.add("Ramda", () => {
  Ramda.range(a,holder)
})
.add("Lodash", () => {
  _.range(a,holder)
})
module.exports = suite;
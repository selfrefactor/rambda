const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const holder = "foo"

const suite = new Benchmark.Suite();

suite.add("Rambda.init when string", () => {
  R.init(holder)
})
.add("Ramda", () => {
  Ramda.init(holder)
})
module.exports = suite;
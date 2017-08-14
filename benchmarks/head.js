const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")


const suite = new Benchmark.Suite();

suite.add("Rambda.head", () => {
  R.head(holder)
})
.add("Ramda", () => {
  Ramda.head(holder)
})
.add("Lodash", () => {
  _.head(holder)
})
module.exports = suite;
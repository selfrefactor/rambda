const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const holder = [1,2,3,4]
const a = 4

const suite = new Benchmark.Suite();

suite.add("Rambda.indexOf", () => {
  R.indexOf(a,holder)
})
.add("Ramda", () => {
  Ramda.indexOf(a,holder)
})
.add("Lodash", () => {
  _.indexOf(holder, a)
})
module.exports = suite;
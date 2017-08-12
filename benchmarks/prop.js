const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const holder = {a:"foo",b:"bar",c:"baz"}
const a = "c"

const suite = new Benchmark.Suite();

suite.add("Rambda#prop", () => {
  R.prop(a)(holder)
})
.add("Ramda", () => {
  Ramda.prop(a)(holder)
})
module.exports = suite;
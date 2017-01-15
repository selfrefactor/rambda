const R = require("./")
const Ramda = require("ramda")

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;
const benchmarks = require('beautify-benchmark')

suite.add('Rambda#add', function() {
  R.add(1)(1)
})
.add('R.add', function() {
  Ramda.add(1)(1)
})
.on('cycle', function(event) {
  benchmarks.add(event.target)
})
.on('complete', function() {
  benchmarks.log()
})
.run({ 'async': false });

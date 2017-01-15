const R = require("./")
const Ramda = require("ramda")
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')

add = new Benchmark.Suite

add.add('Rambda#add', ()=>{
  R.add(1)(1)
})
.add('R.add', () => {
  Ramda.add(1)(1)
})
.on('cycle', event => {
  benchmarks.add(event.target)
})
.on('complete', ()=>{
  benchmarks.log()
})
.run()

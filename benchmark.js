const R = require("./rambda")
const Ramda = require("ramda")
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')

//const add = new Benchmark.Suite
const update = new Benchmark.Suite

// add.add('Rambda#add', ()=>{
//   R.add(1)(1)
// })
// .add('R.add', () => {
//   Ramda.add(1)(1)
// })
// .on('cycle', event => {
//   benchmarks.add(event.target)
// })
// .on('complete', ()=>{
//   benchmarks.log()
// })
// .run()

update.add('Rambda#update', ()=>{
  R.update(3,1,[1,2,3])
})
.add('R.update', () => {
  Ramda.update(3,1,[1,2,3])
})
.on('cycle', event => {
  benchmarks.add(event.target)
})
.on('complete', ()=>{
  benchmarks.log()
})
.run()

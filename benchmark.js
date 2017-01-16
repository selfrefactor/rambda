const R = require("./rambda")
const Ramda = require("ramda")
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')

const add = new Benchmark.Suite
const equals = new Benchmark.Suite
const type = new Benchmark.Suite
const update = new Benchmark.Suite

const options = {
  add: false,
  equals: false,
  type: false,
  update: false,
  first: true,
  test: false
}

if(options.test){
  add.add('1', ()=>{
    const a = []
    const b = a instanceof Array
  })
  .add('2', () => {
    const a = []
    const b = a.splice !==undefined
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}

if(options.first){
  add.add('Rambda', ()=>{
    R.compose(
        R.dropLast(2),
        R.flatten,
        R.flatten,
        R.filter(val => val > 1),
        R.flatten
      )([ [ 1 ], [ 2 ], [ 3 ], 4 ])
  })
  .add('Ramda', () => {
    Ramda.compose(
        Ramda.dropLast(2),
        Ramda.flatten,
        Ramda.flatten,
        Ramda.filter(val => val > 1),
        Ramda.flatten
      )([ [ 1 ], [ 2 ], [ 3 ], 4 ])
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}

if(options.add){
  add.add('Rambda#add', ()=>{
    R.add(1)(1)
  })
  .add('Ramda', () => {
    Ramda.add(1)(1)
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}

if(options.equals){

  add.add('Rambda#equals', ()=>{
    R.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
  })
  .add('Ramda', () => {
    Ramda.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}

if(options.update){

  update.add('Rambda#update', ()=>{
    R.update(3,1,[1,2,3])
  })
  .add('Ramda', () => {
    Ramda.update(3,1,[1,2,3])
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}
if(options.type){

  type.add('Rambda#type', ()=>{
    R.type([1,2,3])
  })
  .add('Ramda', () => {
    Ramda.type([1,2,3])
  })
  .on('cycle', event => {
    benchmarks.add(event.target)
  })
  .on('complete', ()=>{
    benchmarks.log()
  })
  .run()
}

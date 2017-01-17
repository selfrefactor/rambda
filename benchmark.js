const R = require("./rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const add = new Benchmark.Suite
const adjust = new Benchmark.Suite
const any = new Benchmark.Suite
const flatten = new Benchmark.Suite
const filter = new Benchmark.Suite
const compose = new Benchmark.Suite
const contains = new Benchmark.Suite
const equals = new Benchmark.Suite
const find = new Benchmark.Suite
const type = new Benchmark.Suite
const update = new Benchmark.Suite

const firstExample = new Benchmark.Suite
const secondExample = new Benchmark.Suite

const options = {
  add: true,
  adjust: true,
  any: true,
  compose: true,
  equals: true,
  filter: true,
  find: true,
  first: false,
  flatten: true,
  second: false,
  type: true,
  update: true,
}

if (options.add) {
  add.add("Rambda#add", () => {
    R.add(1, 1)
  })
  .add("Ramda", () => {
    Ramda.add(1, 1)
  })
  .add("Lodash", () => {
    _.add(1, 1)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.adjust) {
  adjust.add("Rambda#adjust", () => {
    R.adjust(val => val + 1, 0)
  })
  .add("Ramda", () => {
    Ramda.adjust(val => val + 1, 0)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.any) {
  any.add("Rambda#any", () => {
    R.any(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Ramda", () => {
    Ramda.any(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Lodash.some", () => {
    _.some([ 1, 2, 3, 4 ], val => val > 2)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.equals) {
  equals.add("Rambda#equals", () => {
    R.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
  })
  .add("Ramda", () => {
    Ramda.equals({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
  })
  .add("Lodash.isEqual", () => {
    _.isEqual({ a:{ b:{ c:1 } } }, { a:{ b:{ c:1 } } })
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.filter) {
  filter.add("Rambda#filter", () => {
    R.filter(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Ramda", () => {
    Ramda.filter(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Lodash", () => {
    _.filter([ 1, 2, 3, 4 ], val => val > 2)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.find) {
  find.add("Rambda#find", () => {
    R.find(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Ramda", () => {
    Ramda.find(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add("Lodash", () => {
    _.find([ 1, 2, 3, 4 ], val => val > 2)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.flatten) {
  flatten.add("Rambda#flatten", () => {
    R.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
  })
  .add("Ramda", () => {
    Ramda.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
  })
  .add("Lodash", () => {
    _.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.compose) {
  compose.add("Rambda#compose", () => {
    R.compose(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
  })
  .add("Ramda", () => {
    Ramda.compose(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
  })
  .add("Lodash.flowRight", () => {
    _.flowRight(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.update) {
  update.add("Rambda#update", () => {
    R.update(3, 1, [ 1, 2, 3 ])
  })
  .add("Ramda", () => {
    Ramda.update(3, 1, [ 1, 2, 3 ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.type) {
  type.add("Rambda#type", () => {
    R.type([ 1, 2, 3 ])
  })
  .add("Ramda", () => {
    Ramda.type([ 1, 2, 3 ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.first) {
  firstExample.add("Rambda#firstExample", () => {
    R.compose(
        R.join("|"),
        R.dropLast(2),
        R.flatten,
        R.filter(val => val > 1),
        R.flatten
      )([ [ 1 ], [ 2 ], [ 3 ], 4 ])
  })
  .add("Ramda#firstExample", () => {
    Ramda.compose(
        Ramda.join("|"),
        Ramda.dropLast(2),
        Ramda.flatten,
        Ramda.filter(val => val > 1),
        Ramda.flatten
      )([ [ 1 ], [ 2 ], [ 3 ], 4 ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

if (options.second) {
  secondExample.add("Rambda#secondExample", () => {
    R.compose(
        R.last,
        R.map(R.subtract(10)),
        R.adjust(R.add(1), 0)
      )([ 0, 2, 3, 4, 5, 6, 7, 8, 9 ])
  })
  .add("Ramda#secondExample", () => {
    Ramda.compose(
        Ramda.last,
        Ramda.map(Ramda.subtract(10)),
        Ramda.adjust(Ramda.add(1), 0)
      )([ 0, 2, 3, 4, 5, 6, 7, 8, 9 ])
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

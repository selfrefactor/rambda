const R = require("./rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const add = new Benchmark.Suite
const adjust = new Benchmark.Suite
const append = new Benchmark.Suite
const any = new Benchmark.Suite
const flatten = new Benchmark.Suite
const filter = new Benchmark.Suite
const compose = new Benchmark.Suite
const equals = new Benchmark.Suite
const find = new Benchmark.Suite
const type = new Benchmark.Suite
const update = new Benchmark.Suite

const firstExample = new Benchmark.Suite
const secondExample = new Benchmark.Suite

const options = {
  add: false,
  adjust: false,
  append: false,
  any: false,
  compose: false,
  equals: false,
  filter: false,
  find: false,
  first: false,
  flatten: false,
  second: false,
  type: false,
  update: false,
}

if(0){
  firstExample.add("1", () => {
    const a = ""
    const b = typeof a === "string"
  })
  .add("2", () => {
    const a = ""
    const b = a.bold !== undefined
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
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

if (options.append) {
  append.add("Rambda#append", () => {
    R.append(0)([ 1, 2, 3, 4 ])
  })
  .add("Ramda", () => {
    Ramda.append(0)([ 1, 2, 3, 4 ])
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

const contains = new Benchmark.Suite
options.contains = false

if (options.contains) {
  const holder = [1,2,3,4]
  const a = 2
  contains.add("Rambda#contains", () => {
    R.contains(a)(holder)
  })
  .add("Ramda", () => {
    Ramda.contains(a)(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const drop = new Benchmark.Suite
options.drop = false

if (options.drop) {
  const holder = [1,2,3,4]
  const a = 3
  drop.add("Rambda#drop", () => {
    R.drop(a)(holder)
  })
  .add("Ramda", () => {
    Ramda.drop(a)(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const dropLast = new Benchmark.Suite
options.dropLast = false

if (options.dropLast) {
  const holder = [1,2,3,4]
  const a = 3
  dropLast.add("Rambda#dropLast", () => {
    R.dropLast(a)(holder)
  })
  .add("Ramda", () => {
    Ramda.dropLast(a)(holder)
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

const findIndex = new Benchmark.Suite
options.findIndex = false

if (options.findIndex) {
  const holder = [1,2,3,4]
  const a = val => val === 3
  append.add("Rambda#findIndex", () => {
    R.findIndex(a,holder)
  })
  .add("Ramda", () => {
    Ramda.findIndex(a,holder)
  })
  .add("Lodash", () => {
    _.findIndex(holder, a)
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

const head = new Benchmark.Suite
options.head = false

if (options.head) {
  const holder = [1,2,3,4]
  head.add("Rambda#head", () => {
    R.head(holder)
  })
  .add("Ramda", () => {
    Ramda.head(holder)
  })
  .add("Lodash", () => {
    _.head(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const headString = new Benchmark.Suite
options.headString = false

if (options.headString) {
  const holder = ""
  headString.add("Rambda#head when string", () => {
    R.head(holder)
  })
  .add("Ramda", () => {
    Ramda.head(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const indexOf = new Benchmark.Suite
options.indexOf = false

if (options.indexOf) {
  const holder = [1,2,3,4]
  const a = 4
  indexOf.add("Rambda#indexOf", () => {
    R.indexOf(a,holder)
  })
  .add("Ramda", () => {
    Ramda.indexOf(a,holder)
  })
  .add("Lodash", () => {
    _.indexOf(holder, a)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const init = new Benchmark.Suite
options.init = false

if (options.init) {
  const holder = [1,2,3,4]
  init.add("Rambda#init", () => {
    R.init(holder)
  })
  .add("Ramda", () => {
    Ramda.init(holder)
  })
  .add("Lodash", () => {
    _.initial(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const initString = new Benchmark.Suite
options.initString = false

if (options.initString) {
  const holder = "foo"
  initString.add("Rambda#init when string", () => {
    R.init(holder)
  })
  .add("Ramda", () => {
    Ramda.init(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const last = new Benchmark.Suite
options.last = false

if (options.last) {
  const holder = [1,2,3,4]
  last.add("Rambda#last", () => {
    R.last(holder)
  })
  .add("Ramda", () => {
    Ramda.last(holder)
  })
  .add("Lodash", () => {
    _.last(holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const map = new Benchmark.Suite
options.map = false

if (options.map) {
  const holder = [1,2,3,4]
  const a = val => val +2
  map.add("Rambda#map", () => {
    R.map(a,holder)
  })
  .add("Ramda", () => {
    Ramda.map(a,holder)
  })
  .add("Lodash", () => {
    _.map(holder, a)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const match = new Benchmark.Suite
options.match = false

if (options.match) {
  match.add("Rambda#match", () => {
    R.match(
      /a./g
    )("foo bar baz")
  })
  .add("Ramda", () => {
    Ramda.match(
      /a./g
    )("foo bar baz")
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const merge = new Benchmark.Suite
options.merge = false

if (options.merge) {
  const holder = {bar:"yes"}
  const a = {foo:"bar",bar:"baz"}
  merge.add("Rambda#merge", () => {
    R.merge(a,holder)
  })
  .add("Ramda", () => {
    Ramda.merge(a,holder)
  })
  .add("Lodash", () => {
    _.merge(a, holder)
  })
  .on("cycle", event => {
    benchmarks.add(event.target)
  })
  .on("complete", () => {
    benchmarks.log()
  })
  .run()
}

const omit = new Benchmark.Suite
options.omit = true

if (options.omit) {
  const holder = { a:"foo", b:"bar", c:"baz" }
  const a = ["a","c"]
  omit.add("Rambda#omit", () => {
    R.omit(a,holder)
  })
  .add("Ramda", () => {
    Ramda.omit(a,holder)
  })
  .add("Lodash", () => {
    _.omit(holder, a)
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

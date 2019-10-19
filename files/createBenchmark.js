const bench = require('benny')
const {ok, maybe, headObject} = require('rambdax')
const {snakeCase, constantCase} = require('string-fn')

const folderFallback = 'benchmark_results'

function createBenchmark(input){
  const {prop: suiteLabel,value: tests} = headObject(input)
  ok(tests, suiteLabel)([{label: String, fn: Function}], String)

  const benches = tests.map(
    ({label,fn}) => bench.add(label, fn),
  )
  const folder = maybe(
    input.folder,
    input.folder,
    process.env.BENCHMARK_FOLDER ? process.env.BENCHMARK_FOLDER : folderFallback
  )

  bench.suite(
    constantCase(suiteLabel),
    ...benches,  
    bench.cycle(),
    bench.complete(),
    bench.save({
      file : snakeCase(suiteLabel),
      folder,
    })
  )
}

exports.createBenchmark = createBenchmark
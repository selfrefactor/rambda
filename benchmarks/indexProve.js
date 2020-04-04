process.env.BENCHMARK_FOLDER = 'benchmarks/benchmark_results'
const fs = require('fs')
const path = require('path')
const { createBenchmark } = require('helpers-fn')
const { mapAsync, filter, dropLast } = require('rambdax')

async function runBenchmarks(singleMethod){
  const allBenchmarksList = filter(
    x => ![ 'indexProve.js', 'benchmark_results' ].includes(x),
    fs.readdirSync(__dirname)
  ).map(dropLast(3))

  const allBenchmarks = singleMethod ? [ singleMethod ] : allBenchmarksList

  await mapAsync(async singleBenchmark => {
    const required = require(path.join(__dirname, `${ singleBenchmark }.js`))
    console.log(singleBenchmark)
    createBenchmark({ [ singleBenchmark ] : required })
  })(allBenchmarks)
}

runBenchmarks('converge')

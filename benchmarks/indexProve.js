process.env.BENCHMARK_FOLDER = 'benchmarks/benchmark_results'
const fs = require('fs')
const path = require('path')
const { exec, createBenchmark } = require('helpers')
const { filter } = require('../dist/rambda.js')
const { mapAsync } = require('rambdax')

async function runBenchmarks(){
  const allBenchmarksxx = filter(x => x !== 'index.js', fs.readdirSync(__dirname))

  const allBenchmarks = [
    'add',
    'all',
    'adjust',
    'any',
    'append',
    'assoc',
    'compose',
  ]
  const allBenchmarksx = [ 'all' ] 
  await mapAsync(
    async singleBenchmark => {
      const required = require(path.join(__dirname, `${singleBenchmark}.js`))
      console.log(singleBenchmark)
      createBenchmark({ [ singleBenchmark ] : required })
    }
  )(allBenchmarks)
}

runBenchmarks()

process.env.BENCHMARK_FOLDER = 'benchmarks/benchmark_results'
const fs = require('fs')
const path = require('path')
const {exec, createBenchmark} = require('helpers')
const {filter} = require('../dist/rambda.js')
const {mapAsync} = require('rambdax')

async function runBenchmarks(){
  // const allBenchmarks =  filter(x => x !== 'index.js', fs.readdirSync(__dirname))

  const allBenchmarks =  ['add', 'adjust', 'any', 'append']

  await mapAsync(
    async singleBenchmark => {
      const required = require(path.join(__dirname, 'add.js'))
      console.log(singleBenchmark)
      createBenchmark({[singleBenchmark]: required})
    }
  )(allBenchmarks)
}
 
runBenchmarks()
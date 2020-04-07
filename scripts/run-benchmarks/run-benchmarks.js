process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_results'
import fdir from 'fdir'
import { createBenchmark } from 'helpers-fn'
import { parse } from 'path'
import { mapAsync } from 'rambdax'

async function getAllBenchmarks(){
  const methods = []
  const allBenchmarksRaw = await fdir.async(`${ __dirname }/benchmarks`)
  const allBenchmarks = allBenchmarksRaw.filter(filePath => {
    if (filePath.includes('benchmark_results')) return false
    methods.push(parse(filePath).name)
  })

  return {
    filePaths : allBenchmarks,
    methods,
  }
}

export async function runSingleBenchmark(singleMethod){
  const { methods } = await getAllBenchmarks()
  if (!methods.includes(singleMethod))
    throw new Error('this method has no benchmark')

  const required = require(`${ __dirname }/benchmarks/${ singleMethod }.js`)
  createBenchmark({ [ singleMethod ] : required })
}

export async function runBenchmarks(){
  const { filePaths } = await getAllBenchmarks()

  // await mapAsync(async singleBenchmark => {
  //   const required = require(path.join(__dirname, `${ singleBenchmark }.js`))
  //   console.log(singleBenchmark)
  //   createBenchmark({ [ singleBenchmark ] : required })
  // })(allBenchmarks)
}

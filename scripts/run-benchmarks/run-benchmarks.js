process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_results'
import fdir from 'fdir'
import { createBenchmark } from 'helpers-fn'
import { parse } from 'path'
import { mapAsyncLimit } from 'rambdax'

async function getAllBenchmarks(){
  const files = await fdir.async(`${ __dirname }/benchmarks`)

  return files
    .filter(filePath => !filePath.includes('benchmark_results'))
    .map(filePath => parse(filePath).name)
}

export async function runSingleBenchmark(singleMethod){
  const methodsWithBenchmarks = await getAllBenchmarks()
  if (!methodsWithBenchmarks.includes(singleMethod)){
    throw new Error('this method has no benchmark')
  }

  const required = require(`${ __dirname }/benchmarks/${ singleMethod }.js`)
  createBenchmark({ [ singleMethod ] : required })
}

export async function runAllBenchmarks(){
  console.time('run.all.benchmarks')
  const methodsWithBenchmarks = await getAllBenchmarks()
  const iterable = async singleMethod => {
    const required = require(`${ __dirname }/benchmarks/${ singleMethod }.js`)
    createBenchmark({ [ singleMethod ] : required })
  }

  await mapAsyncLimit(
    iterable, 5, methodsWithBenchmarks
  )
  console.timeEnd('run.all.benchmarks')
}

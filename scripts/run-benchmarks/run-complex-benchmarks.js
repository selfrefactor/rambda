process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_complex_results'
import { createComplexBenchmark, scanFolder } from 'helpers-fn'
import { parse, resolve } from 'path'
import { mapAsync } from 'rambdax'

const benchmarksDir = resolve(__dirname, '../../source/complex_benchmarks')

async function getAllBenchmarks(){
  const files = await scanFolder({ folder : benchmarksDir })

  return files
    .filter(filePath => !filePath.includes('benchmark_results'))
    .map(filePath => parse(filePath).name)
}

export async function runSingleComplexBenchmark(singleMethod){
  const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
  createComplexBenchmark(required)
}

export async function runAllComplexBenchmarks(){
  const methodsWithBenchmarks = await getAllBenchmarks()

  await mapAsync(runSingleComplexBenchmark, methodsWithBenchmarks)
}

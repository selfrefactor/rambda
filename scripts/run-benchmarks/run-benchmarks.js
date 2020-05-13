process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_results'
import dayjs from 'dayjs'
import fdir from 'fdir'
import { outputJson } from 'fs-extra'
import { createBenchmark } from 'helpers-fn'
import { parse, resolve } from 'path'
import { mapAsyncLimit } from 'rambdax'

const benchmarksDir = resolve(__dirname, '../../source/benchmarks')

async function getAllBenchmarks(){
  const files = await fdir.async(benchmarksDir)

  return files
    .filter(filePath => !filePath.includes('benchmark_results'))
    .map(filePath => parse(filePath).name)
}

export async function runSingleBenchmark(singleMethod){
  const methodsWithBenchmarks = await getAllBenchmarks()
  if (!methodsWithBenchmarks.includes(singleMethod)){
    throw new Error('this method has no benchmark')
  }

  const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
  createBenchmark({ [ singleMethod ] : required })
}

function benchmarkTime(){
  return dayjs().format('dddd, MMMM D YYYY')
}

export async function runAllBenchmarks(){
  console.time('run.all.benchmarks')
  const methodsWithBenchmarks = await getAllBenchmarks()
  const iterable = async singleMethod => {
    const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
    createBenchmark({ [ singleMethod ] : required })
  }

  await mapAsyncLimit(
    iterable, 5, methodsWithBenchmarks
  )
  console.timeEnd('run.all.benchmarks')

  await outputJson(`${ __dirname }/time.json`, { benchmarkTime : benchmarkTime() })
}

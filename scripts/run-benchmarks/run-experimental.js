process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/experimental_results'
import { createBenchmark, scanFolder } from 'helpers-fn'
import { parse, resolve } from 'path'
import { mapAsyncLimit } from 'rambdax'

const benchmarksDir = `${__dirname}/experimental`

async function getAllBenchmarks(){
  const files = await scanFolder({ folder : benchmarksDir })

  return files
    .filter(filePath => !filePath.includes('benchmark_results'))
    .map(filePath => parse(filePath).name)
}

export async function runSingleBenchmark(singleMethod){
  console.time(`run.${ singleMethod }.benchmark`)
  const methodsWithBenchmarks = await getAllBenchmarks()
  if (!methodsWithBenchmarks.includes(singleMethod)){
    throw new Error('this method has no benchmark')
  }

  const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
  await createBenchmark({ [ singleMethod ] : required })
  console.timeEnd(`run.${ singleMethod }.benchmark`)
}

export async function runExperimental(){
  const methodsWithBenchmarks = await getAllBenchmarks()
  const iterable = async singleMethod => {
    const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
    createBenchmark({ [ singleMethod ] : required })
  }

  await mapAsyncLimit(
    iterable, 5, methodsWithBenchmarks
  )
}

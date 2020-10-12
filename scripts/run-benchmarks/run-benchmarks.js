process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_results'
import { existsSync } from 'fs'
import { readJson } from 'fs-extra'
import { createBenchmark, log, scanFolder } from 'helpers-fn'
import { parse, resolve } from 'path'
import { mapAsyncLimit, paths } from 'rambdax'
import { snakeCase } from 'string-fn'

const benchmarksDir = resolve(__dirname, '../../source/benchmarks')

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
  const { winner: prevWinner, loser: prevLoser } = await getPreviousBenchmark(singleMethod)

  const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
  const result = await createBenchmark({ [ singleMethod ] : required })

  const { winner: currentWinner, loser: currentLoser } = extractWinnerLoser(result)

  console.timeEnd(`run.${ singleMethod }.benchmark`)
  if (prevWinner === undefined)
    return console.log(`No previous benchmark "${ singleMethod }"`)
  if (prevWinner !== currentWinner){
    log({
      method : singleMethod,
      prevWinner,
      prevLoser,
      currentLoser,
      currentWinner,
    },
    'obj')
  }
}

async function getPreviousBenchmark(singleMethod){
  const resultPath = `${ __dirname }/benchmarks/benchmark_results/${ snakeCase(singleMethod) }.json`
  if (!existsSync(resultPath)) return {}

  const result = await readJson(resultPath)

  return extractWinnerLoser(result)
}

function extractWinnerLoser(input){
  const [ winner, loser ] = paths([ 'fastest.name', 'slowest.name' ])(input)

  return {
    winner,
    loser,
  }
}

export async function runAllBenchmarks(){
  console.time('run.all.benchmarks')
  const methodsWithBenchmarks = await getAllBenchmarks()
  const winnerChanged = []
  const iterable = async singleMethod => {
    const { winner: prevWinner } = await getPreviousBenchmark(singleMethod)

    const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
    const result = await createBenchmark({ [ singleMethod ] : required })
    const { winner: currentWinner } = extractWinnerLoser(result)

    if (prevWinner === undefined)
      return console.log(`No previous benchmark "${ singleMethod }"`)
    if (prevWinner !== currentWinner){
      winnerChanged.push(singleMethod)
    }
    log(`Same winner - ${ currentWinner }`, 'box')
  }

  await mapAsyncLimit(
    iterable, 5, methodsWithBenchmarks
  )
  console.timeEnd('run.all.benchmarks')
  console.log(winnerChanged)
}

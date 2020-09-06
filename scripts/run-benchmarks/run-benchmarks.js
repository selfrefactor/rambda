process.env.BENCHMARK_FOLDER =
  'scripts/run-benchmarks/benchmarks/benchmark_results'
import { createBenchmark, scanFolder } from 'helpers-fn'
import { parse, resolve } from 'path'
import { existsSync } from 'fs'
import { readJson } from 'fs-extra'
import { mapAsyncLimit, paths } from 'rambdax'

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
  const {winner: prevWinner, loser: prevLoser} = await getPreviousBenchmark(singleMethod)

  const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
  const result = await createBenchmark({ [ singleMethod ] : required })

  const {winner: currentWinner, loser: currentLoser} = extractWinnerLoser(result)

  console.timeEnd(`run.${ singleMethod }.benchmark`)
  if(prevWinner === undefined) return console.log(`No previous benchmark "${singleMethod}"`)
  if(prevWinner !== currentWinner){
    console.log({
      method: singleMethod,
      prevWinner, prevLoser, currentLoser, currentWinner
    });
  }
}

async function getPreviousBenchmark(singleMethod){
  const resultPath = `${__dirname}/benchmarks/benchmark_results/${singleMethod }.json`
  console.log({resultPath, e: existsSync(resultPath)})
  if(!existsSync(resultPath)) return {}

  const result = await readJson(resultPath)
  return extractWinnerLoser(result)
}

function extractWinnerLoser(input){
  const [winner, loser] = paths([
    'fastest.name',
    'slowest.name',
  ])(input)

  return {winner, loser}
}

export async function runAllBenchmarks(){
  console.time('run.all.benchmarks')
  const methodsWithBenchmarks = await getAllBenchmarks()
  const iterable = async singleMethod => {
    const {winner: prevWinner, loser: prevLoser} = await getPreviousBenchmark(singleMethod)
    
    const required = require(`${ benchmarksDir }/${ singleMethod }.js`)
    const result = await createBenchmark({ [ singleMethod ] : required })
    const {winner: currentWinner, loser: currentLoser} = extractWinnerLoser(result)

    if(prevWinner === undefined) return console.log(`No previous benchmark "${singleMethod}"`)
    if(prevWinner !== currentWinner) {
      return console.log({
        method: singleMethod,
        prevWinner, prevLoser, currentLoser, currentWinner
      });
    }
  }

  await mapAsyncLimit(
    iterable, 5, methodsWithBenchmarks
  )
  console.timeEnd('run.all.benchmarks')
}

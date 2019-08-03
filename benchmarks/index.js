const fs = require('fs')
const path = require('path')
const R = require('../dist/rambda.js')

const benchmarks = require('beautify-benchmark')
const BEAUTIFY = process.env.SKIP_BEAUTIFY !== 'ON'

const { argv } = process

const getBenchmarksToRun = () => {
  const allFiles = fs.readdirSync(__dirname)

  if (argv.includes('--all') || argv.includes('all')){
    return R.filter(x => x !== 'index.js', allFiles)
  }

  return R.compose(
    R.filter(x => allFiles.includes(x)),
    R.map(x => `${ x }.js`)
  )(argv.slice(2, argv.length))
}

async function main (){
  const benchmarksToRun = getBenchmarksToRun()

  for (const filePath of benchmarksToRun){
    console.log(`Running ${ filePath }`)
    await runBenchmark(filePath)
  }
}

async function runBenchmark (filePath){
  try {
    require(path.join(__dirname, filePath))
      .on('cycle', event => {
        if (BEAUTIFY){
          benchmarks.add(event.target)
        } else {
          console.log(String(event.target))
        }
      })
      .on('complete', () => {
        if (BEAUTIFY){
          benchmarks.log()
        }
      })
      .run()
  } catch (err){
    console.log(err)
    process.exit()
  }
}

main()
  .then(console.log)
  .catch(console.log)

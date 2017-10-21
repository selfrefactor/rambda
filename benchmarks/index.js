const fs = require('fs')
const path = require('path')

const _ = require('lodash')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const benchmarks = require('beautify-benchmark')

const { argv } = process

const getBenchmarksToRun = () => {
  const allFiles = fs.readdirSync(__dirname)

  if (argv.includes('--all') || argv.includes('all')) {
    return R.filter(x => x !== 'index.js', allFiles)
  }

  return R.compose(
    R.filter(x => allFiles.includes(x)),
    R.map(x => `${ x }.js`)
  )(argv.slice(2, argv.length))
}

async function main () {
  const benchmarksToRun = getBenchmarksToRun()

  for (const filePath of benchmarksToRun) {
    console.log(`Running ${ filePath }`)
    await runBenchmark(filePath)
  }
}

async function runBenchmark (filePath) {
  try {
    require(path.join(__dirname, filePath))
      .on('cycle', event => {
        benchmarks.add(event.target)
      })
      .on('complete', () => {
        benchmarks.log()
      })
      .run()
  } catch (err) {
    console.log(err)
    process.exit()
  }
}

main()
  .then(console.log)
  .catch(console.log)

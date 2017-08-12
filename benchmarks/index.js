const path = require('path')
const fs = require('fs');

const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")

const benchmarks = require("beautify-benchmark")

const { argv } = process

function filesToBenchmark() {
  let files = argv.slice(2, argv.length)

  if (files.includes('--all')) {
    files = fs.readdirSync(__dirname)
    const mainFileIndex = files.indexOf('index.js')
    files.splice(mainFileIndex, 1);
  }

  return files.map(name => name.replace('.js', ''))
}

function singleBenchMark(file) {
  const modulePath = path.join(__dirname, `${file}.js`)

  try {
    require(modulePath)
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run();
  } catch (e) {
    throw Error(
      `Failed to benchmark: ${file}
       Error: ${e.toString}`
    );
  }
}

filesToBenchmark()
  .map(singleBenchMark);
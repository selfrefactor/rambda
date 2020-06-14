const {scanFolder} = require('helpers-fn')
const {resolve} = require('path')
const {lintFn} = require('lint-fn')
const {copy} = require('fs-extra')
const {parse} = require('path')
const {mapAsyncLimit} = require('rambdax')

const filterFn = x => x.endsWith('-spec.ts')

const lintSingleFile = async filePath => {
  const {name} = parse(filePath)
  const dist = `${__dirname}/assets/${name}.ts`
  await copy(filePath, dist)
  await lintFn(dist, 'outer', __dirname)
  await copy(dist, filePath)
}

void (async function lintTypingsTests() {
  const srcPath = resolve(__dirname, '../../source')
  const allFiles = await scanFolder({folder: srcPath, filterFn})

  await mapAsyncLimit(lintSingleFile, 5, allFiles)
})()

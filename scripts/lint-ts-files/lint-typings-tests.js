const fdir = require('fdir')
const {resolve} = require('path')
const {lintFn} = require('lint-fn')
const {copy} = require('fs-extra')
const {parse} = require('path')
const {mapAsyncLimit} = require('rambdax')

const lintSingleFile = async filePath => {
  const {name} = parse(filePath)
  const dist = `${__dirname}/assets/${name}.ts`
  await copy(filePath, dist)
  await lintFn(dist, 'outer', __dirname)
  await copy(dist, filePath)
}

async function lintTypingsTests(singleMethod) {
  const srcPath = resolve(__dirname, '../../source')
  const allFiles = await fdir.async(srcPath)
  const allTests = allFiles
    .filter(filePath => filePath.endsWith('-spec.ts'))
    .filter(filePath =>
      singleMethod === undefined
        ? true
        : filePath.endsWith(`${singleMethod}-spec.ts`)
    )

  await mapAsyncLimit(lintSingleFile, 5, allTests)
}

async function lintRambdaDefinitions() {
  const filePath = resolve(__dirname, '../../index.d.ts')
  await lintSingleFile(filePath)
}

lintTypingsTests('add')
lintRambdaDefinitions()

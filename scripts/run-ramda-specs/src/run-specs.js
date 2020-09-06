const allDifferences = require('../allDifferences.json')
import { readFileSync, unlinkSync } from 'fs'
import { exec, log } from 'helpers-fn'
import { resolve } from 'path'
import { glue, map, mapAsync } from 'rambdax'

const baseDir = resolve(__dirname, '../outputs')
const ramdaDir = resolve(__dirname, '../ramda')

const getOutputPath = x => `${ baseDir }/${ x }.txt`

const getCommand = x => {
  const outputPath = getOutputPath(x)
  const command = glue(`
  BABEL_ENV=cjs
  node 
  node_modules/mocha/bin/mocha
  --require 
  @babel/register 
  --reporter
  spec 
  test/${ x }.js
  > ${ outputPath } 2>&1
  `)

  return {
    command,
    outputPath,
  }
}

const KNOWN_FAILING_TESTS = map(({ count }) => count)(allDifferences)

function getNumberFailing(testOutput){
  const [ line ] = testOutput.split('\n').filter(x => x.includes('failing'))
  const [ numberFailing ] = line.split('failing')

  return Number(numberFailing.trim())
}

export async function runSingleSpec(method){
  console.log({ methodToRun : method })
  const { command, outputPath } = getCommand(method)

  await exec({
    cwd   : ramdaDir,
    onLog : () => {},
    command,
  })

  const testOutput = readFileSync(outputPath).toString()
  if (!testOutput.includes('failing')){
    return log(`All tests are passing for method 'R.${ method }'`, 'success')
  }

  const numberFailing = getNumberFailing(testOutput)
  console.log({
    numberFailing,
    declared : KNOWN_FAILING_TESTS[ method ],
  })

  if (
    !KNOWN_FAILING_TESTS[ method ] ||
    numberFailing > KNOWN_FAILING_TESTS[ method ]
  ){
    throw new Error(`'${ method }' has '${ numberFailing }' tests`)
  }
}

export async function runSpecs(methodsWithSpecs){
  await mapAsync(async method => runSingleSpec(method))(methodsWithSpecs)
}

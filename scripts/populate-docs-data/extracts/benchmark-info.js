import { existsSync, readFile } from 'fs-extra'
import { resolve } from 'path'
import { remove } from 'rambdax'

import { mapToObjectAsync } from '../../../source/mapToObjectAsync'
import { getMethods } from '../extract-from-typings/get-methods'

const clean = remove([
  'const _ = require(\'lodash\')',
  'const R = require(\'../../../dist/rambda.js\')',
  'const Ramda = require(\'ramda\')',
  /module\.exports =.+/,
])

const cleanSummary = remove(' slower')

const FASTEST = '🚀 Fastest'

function getMethodSummary(method, benchmarkSummary){
  const line = benchmarkSummary
    .split('\n')
    .find(x => x.trim().startsWith(`*${ method }*`))
  if (!line) return ''

  const [ , thisLibrary, ramda, lodash ] = line
    .split('|')
    .map(x => x.trim())
    .map(cleanSummary)

  if (lodash === '🔳'){
    if (thisLibrary === FASTEST){
      return `Rambda is faster than Ramda with ${ ramda }`
    }

    return `Rambda is slower than Ramda with ${ thisLibrary }`
  }
  if (thisLibrary === FASTEST){
    return `Rambda is fastest. Ramda is ${ ramda } slower and Lodash is ${ lodash } slower`
  }
  if (ramda === FASTEST){
    return `Ramda is fastest. Rambda is ${ thisLibrary } slower and Lodash is ${ lodash } slower`
  }

  return `Lodash is fastest. Rambda is ${ thisLibrary } slower and Ramda is ${ ramda } slower`
}

export async function benchmarkInfo(){
  const benchmarkSummary = (
    await readFile(resolve(__dirname, '../../read-benchmarks/summary.txt'))
  ).toString()

  return mapToObjectAsync(async method => {
    const filePath = resolve(__dirname,
      `../../../source/benchmarks/${ method }.js`)
    const okExists = existsSync(filePath)
    if (!okExists) return false
    const benchmarkContentRaw = await readFile(filePath)
    const benchmarkContent = clean(benchmarkContentRaw.toString().trim())
    const methodSummary = getMethodSummary(method, benchmarkSummary)

    return {
      [ method ] : {
        benchmarkContent,
        methodSummary,
      },
    }
  }, getMethods())
}

const { camelCase } = require('string-fn')
const { readdirSync } = require('fs')
const { readJsonSync, outputFile } = require('fs-extra')
const { remove } = require('rambdax')
const { resolve } = require('path')
const resultsDir = resolve(__dirname,
  '../run-benchmarks/benchmarks/benchmark_results')

function parseMethodName(input){
  if (!input.endsWith('Curried')) return input

  const methodName = remove('Curried', input)

  return `${ methodName } (curried)`
}

export async function benchmarkSummary(){
  const allResults = readdirSync(resultsDir)

  const tableRows = allResults.map(file => {
    const { results, name } = readJsonSync(`${ resultsDir }/${ file }`)
    const methodName = camelCase(name)
    let rambda
    let ramda
    let lodash

    results.forEach(result => {
      if (result.name === 'Rambda') rambda = result
      if (result.name === 'Ramda') ramda = result
      if (result.name.includes('Lodash')) lodash = result
    })

    const columns = [ rambda, ramda, lodash ]
      .map(x => {
        if (!x) return '🔳'

        return x.percentSlower === 0 ?
          '🚀 Fastest' :
          `${ x.percentSlower }% slower`
      })
      .join(' | ')

    return ` *${ parseMethodName(methodName) }* | ${ columns }`
  })

  const toSave = tableRows.join('\n')

  await outputFile(`${ __dirname }/summary.txt`, toSave)
}

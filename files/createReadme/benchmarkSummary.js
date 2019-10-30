const { camelCase } = require('string-fn')
const { readdirSync } = require('fs')
const { readJsonSync } = require('fs-extra')
const { resolve } = require('path')
const resultsDir = resolve(__dirname, '../../benchmarks/benchmark_results')

function benchmarkSummary(){
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

    const columns = [ rambda, ramda, lodash ].map(
      x => {
        if (!x) return 'x'

        return x.percentSlower === 0 ? 'Fastest' : `${ x.percentSlower } slower`
      }
    ).join(' | ')

    return ` *${ methodName }* | ${ columns }`
  })

  return tableRows.join('\n')
}

exports.benchmarkSummary = benchmarkSummary

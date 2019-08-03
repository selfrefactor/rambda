const toc = require('markdown-toc')
const {
  all,
  remove,
  replace,
} = require('rambdax')
const { cleanTOC } = require('./_helpers/cleanTOC')
const { rambdaREPL } = require('./rambdaREPL')
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

const MARKER_SOURCE = '[Source]'
const MARKER_CODE = '```'
const MARKER_METHOD = '#### '
const MARKER_METHOD_LINE = `---
#### `

function getCodeExample(input){
  const [ , code, ..._ ] = input.split(MARKER_CODE)

  return code.trim()
}

function getContentWithREPL(input){
  const codeExample = getCodeExample(input)
  const replLink = rambdaREPL(codeExample)
  const markdownLink = `<a href="${ replLink }">Try in REPL</a>`

  return `${ input.trim() }\n\n${ markdownLink }\n\n`
}

void function createReadme(){
  const outputPath = resolve(
    __dirname,
    '../README.md'
  )

  const content = readFileSync(`${ __dirname }/README.md`).toString()
  const missingRamdaMethods = readFileSync(`${ __dirname }/ramdaMissing.md`).toString()
  const benchmarkResults = readFileSync(`${ __dirname }/benchmarkResults.md`).toString()

  const contentWithREPL = content.split(MARKER_METHOD).map(singleMethod => {
    const flag = all(
      marker => singleMethod.includes(marker)
    )([ MARKER_CODE, MARKER_SOURCE ])

    if (flag){
      return getContentWithREPL(singleMethod)
    }

    return singleMethod

  })

  const joined = contentWithREPL.join(MARKER_METHOD_LINE)

  const tocContentRaw = toc(
    joined,
    { maxdepth : 2 }
  ).content

  const tocContent = cleanTOC(tocContentRaw) + '\n'

  const withTableOfContent = replace(
    '## Rambda\'s advantages',
    `${ tocContent }\n## Rambda's advantages`,
    joined
  )
  const withMissingRamdaMethods = replace(
    '## Browse by category',
    `${ missingRamdaMethods }\n## Browse by category`,
    withTableOfContent
  )
  const withBenchmarkResults = replace(
    'MARKER_BENCHMARK_RESULTS',
    benchmarkResults,
    withMissingRamdaMethods
  )
  const final = remove(
    '\n* [Example use](#example-use)\n',
    withBenchmarkResults
  )
  writeFileSync(outputPath, final)
}()

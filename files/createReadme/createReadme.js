const toc = require('markdown-toc')
const {
  all,
  remove,
  inject,
  replace,
} = require('rambdax')
const { addToggleDetails } = require('./addToggleDetails.js')
const { cleanTOC } = require('./cleanTOC')
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

  return `${ addToggleDetails(input.trim()) }\n\n${ markdownLink }\n\n`
}

const outputPath = resolve(
  __dirname,
  '../../README.md'
)
const changelogSourcePath = resolve(
  __dirname,
  '../../CHANGELOG.md'
)
const contentPath = resolve(
  __dirname,
  '../README.md'
)
const missingRamdaMethodsPath = resolve(
  __dirname,
  '../ramdaMissing.md'
)
// const benchmarkResultsPath = resolve(
//   __dirname,
//   '../benchmarkResults.md'
// )

const failingTestsSummaryPath = resolve(
  __dirname,
  '../failing_ramda_tests/_SUMMARY.md'
)

void function createReadme(){
  const content = readFileSync(contentPath).toString()
  const missingRamdaMethods = readFileSync(missingRamdaMethodsPath).toString()
  // const benchmarkResults = readFileSync(benchmarkResultsPath).toString()
  const failingTestsSummary = readFileSync(failingTestsSummaryPath).toString()
  const changelog = readFileSync(changelogSourcePath).toString()

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
  const withFailingTestsResults = replace(
    'MARKER_FAILING_TESTS_SUMMARY',
    failingTestsSummary,
    withMissingRamdaMethods
  )
  const withChangelog = inject(
    changelog,
    '## Changelog\n\n',
    withFailingTestsResults
  )
  const final = remove(
    '\n* [Example use](#example-use)\n',
    withChangelog
  )
  writeFileSync(outputPath, final)
}()

const {
  all,
  replace,
  multiline,
  match,
  remove,
} = require('rambdax')
const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')

const SOURCE = resolve(
  __dirname,
  '../README.md'
)

const OUTPUT = resolve(
  __dirname,
  './_helpers/README.md'
)
const TITLE = '# Rambda - lightweight functional JS library'

void function createReadmex() {
  const content = readFileSync(SOURCE).toString()
  const [apiRaw] = match(/## API(.|\n)+## Benchmark/g, content)
  const [links] = match(/## Browse by category(.|\n)+/g, content)
  const api = remove('## Benchmark', apiRaw).trim()

  const docsify = `${TITLE}\n\n${api}\n\n${links}`

  writeFileSync(OUTPUT, docsify)
}()
const {
  match,
  init,
  all,
  replace,
  dropLast,
} = require('rambda')
const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')
const {rambdaREPL} = require('rambda-repl')

const MARKER_SOURCE = '[Source]'
const MARKER_CODE = '```'
const MARKER_METHOD = '#### '
const MARKER_METHOD_LINE = `---
#### `

function getCodeExample(input){
  const [,code, ..._] = input.split(MARKER_CODE)
  return code.trim()
}

function getMethod(sourceLink){
  const baseURL = '(https://github.com/selfrefactor/rambda/tree/master/modules/'
  const rambdaxBaseURL = '(https://github.com/selfrefactor/rambdax/tree/master/modules/'
  
  const fileNameRaw = replace(
    baseURL,
    '',
    sourceLink
  )
  
  const fileName = replace(
    rambdaxBaseURL,
    '',
    fileNameRaw
  )

  // 4 because we need to remove `.js)`
  return dropLast(4, fileName.trim())
}

function getContentWithREPL(input){
  const [,sourceLink] = input.split(MARKER_SOURCE)
  const method = getMethod(sourceLink)
  const codeExample = getCodeExample(input)
  const replLink = rambdaREPL(codeExample)
  const markdownLink = `<a href="${replLink}">Try in REPL</a>`

  return `${input.trim()}\n\n${markdownLink}\n\n`
}

void function createReadme() {
  const outputPath = resolve(
    __dirname,
    '../README.md'
  )

  const content = readFileSync(`${__dirname}/README.md`).toString()

  const contentWithREPL = content.split(MARKER_METHOD).map(singleMethod => {
    const flag = all(
      marker => singleMethod.includes(marker)
    )([MARKER_CODE, MARKER_SOURCE])

    if(flag){
      return getContentWithREPL(singleMethod)
    }else{
      return singleMethod
    }
  })

  const newReadme = contentWithREPL.join(MARKER_METHOD_LINE)
  
  writeFileSync(outputPath, newReadme)
}()
const { existsSync, readFileSync } = require('fs')
const { replace } = require('rambdax')
const { resolve } = require('path')

function getFileContent(methodName){
  const methodPath = resolve(__dirname, `../../src/${ methodName }.js`)
  if (!existsSync(methodPath)) return ''
  const rawContent = readFileSync(methodPath).toString()
  if(methodName.endsWith('.spec')) return rawContent
  
  const content = replace(
    /\/\*(.|\n)+export/gm,
    'export',
    rawContent,
  )

  return content
}

exports.getFileContent = getFileContent

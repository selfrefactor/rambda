const { existsSync, readFileSync } = require('fs')
const { replace } = require('rambdax')
const { resolve } = require('path')

function getTestContent(methodName){
  const methodPath = resolve(__dirname, `../../src/${ methodName }.js`)
  if (!existsSync(methodPath)) return ''
  const rawContent = readFileSync(methodPath).toString()
  const content = replace(
    /\/\*(.|\n)+export/gm,
    'export',
    rawContent,
  )

  return content
}

exports.getTestContent = getTestContent

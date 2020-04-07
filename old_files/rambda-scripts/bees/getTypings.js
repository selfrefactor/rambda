const R = require('rambda')
const { match, remove, take } = require('rambdax')
const { readFileSync } = require('fs')
const { resolve } = require('path')

function getData(){
  const path = resolve(__dirname, '../../rambda/files/index.d.ts')
  const content = readFileSync(path).toString()
  const [ , ...rest ] = content.split('// SINGLE_MARKER')

  return R.init(rest)
}

function getTypings(){
  const toReturn = {}
  const rambdaKeys = Object.keys(R)
  const data = getData()

  data.forEach(x => {
    const matched = match(/export function [^;]+;/, x)
    if (!matched) return
    const methodTyping = remove([ 'export function ', ';' ], matched[ 0 ])

    const parantesisIndex = methodTyping.indexOf('(')
    const angleBracketIndex = methodTyping.indexOf('<')
    const endOfMethodNameIndex = Math.min(...[ parantesisIndex, angleBracketIndex ].filter(x => x !== -1))

    const methodName = take(endOfMethodNameIndex, methodTyping).trim()
    if (!rambdaKeys.includes(methodName)) return

    toReturn[ methodName ] = methodTyping
  })

  return toReturn
}

exports.getTypings = getTypings

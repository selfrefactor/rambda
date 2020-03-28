const R = require('rambda')
const { readFileSync } = require('fs')
const { resolve } = require('path')

function getTypings(){
  const toReturn = {}
  const keys = Object.keys(R)
  const path = resolve(__dirname, '../../rambda/files/index.d.ts')
  const content = readFileSync(path).toString()
  const [ , ...rest ] = content.split('// SINGLE_MARKER')
  const sk = R.init(rest)

  sk.forEach(x => {
    const [ firstMaybe ] = x.split('(')
    const [ secondMaybe ] = x.split('<')
    const winner = firstMaybe.length > secondMaybe.length ? secondMaybe.trim() : firstMaybe.trim()

    if (keys.includes(winner)) toReturn[ winner ] = x
  })

  return toReturn
}

exports.getTypings = getTypings

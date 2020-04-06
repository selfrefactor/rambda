const allDifferences = require('./allDifferences.json')
const R = require('rambda')
const { emptyDirSync, copySync } = require('fs-extra')
const { findFailingTests } = require('./findFailingTests.js')
const { getIndent, indent } = require('string-fn')
const { readFileSync, writeFileSync, existsSync } = require('fs')
const { remove, replace, take, map, filter, piped } = require('rambdax')
const { resolve } = require('path')
const BASE = resolve(__dirname, '../')

const getOutputPath = x => `${ BASE }/outputs/${ x }.txt`
const getTestPath = x => `${ BASE }/ramda/test/${ x }.js`

function withSingleMethod(method){
  const outputPath = getOutputPath(method)
  if (!existsSync(outputPath)) return

  const content = readFileSync(outputPath).toString()
  const testContent = readFileSync(getTestPath(method)).toString()

  const [ sk ] = content.split('passing')
  const goodTests = sk
    .split('\n')
    .filter(line => line.includes('✓'))
    .map(line => remove('✓', line).trim())

  const badTests = piped(
    content.split('passing'),
    ([ first ]) => first,
    x => x.split('\n'),
    filter(x => x.includes(')')),
    map(x => x.split(')')[ 1 ].trim())
  )

  let flag = false
  let flagBad = false
  let counter = 0
  let badCounter = 0
  let indentCount = 0
  const holder = []

  testContent.split('\n').forEach(line => {
    // if(line.includes(`it('`)) console.log({counter, badCounter, line, target: goodTests[counter]})
    if (badTests[ badCounter ] && line.includes(badTests[ badCounter ])){
      indentCount = getIndent(line)

      holder.push(line)
      flagBad = true

      return flag = false
    }

    if (goodTests[ counter ] && line.includes(goodTests[ counter ])){
      indentCount = getIndent(line)

      return flag = true
    }

    if (line === `${ indent('});', indentCount) }` && !flagBad){
      counter++
      flagBad = false

      return flag = false
    }

    if (line === `${ indent('});', indentCount) }` && flagBad){
      if (!flag) holder.push(line)

      badCounter++
      flagBad = false

      return flag = false
    }

    if (!flag){
      const lineToPush = line.includes('../source') ?
        replace('../source', 'rambda', line) :
        line

      holder.push(lineToPush)
    }
  })
  let skipFirstEmptyLine = true

  const toReturn = holder.filter(x => {
    if (!x && skipFirstEmptyLine){
      skipFirstEmptyLine = false

      return true
    }

    return x
  })

  writeFileSync(
    `${ __dirname }/failing_tests/${ method }.js`,
    toReturn.join('\n')
  )

  const differencePayload = allDifferences[ method ] ?
    { diffReason : allDifferences[ method ].reason } :
    {}

  return {
    ...differencePayload,
    method,
    content : toReturn.join('\n'),
  }
}

async function recordFailingTests(){
  const dir = `${ __dirname }/failing_tests`
  // emptyDirSync(dir)
  // await findFailingTests(true)

  const allMethods = Object.keys(R).filter(x => x !== 'partialCurry')

  const allFailingTests = allMethods
    .map(method => withSingleMethod(method))
    .filter(Boolean)
  let summary = ''

  allFailingTests.forEach(({ content, method, diffReason }) => {
    const reasoning = diffReason ?
      `\nReason for failing:  ${ diffReason }\n` :
      ''

    const toAdd = `> ${ method }\n${ reasoning }\n\`\`\`javascript\n${ content }\n\`\`\`\n\n`

    summary += toAdd
  })
  writeFileSync(`${ dir }/_SUMMARY.md`, summary)

  const ramdaDir = resolve(
    __dirname,
    '../../../../rambda/files/failing_ramda_tests'
  )
  copySync(dir, ramdaDir)
}

recordFailingTests()

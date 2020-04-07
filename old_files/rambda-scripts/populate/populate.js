const {
  filter,
  init,
  match,
  take,
  mapToObject,
  replace,
  s,
  remove,
  tail,
  forEach,
  defaultTo,
  trim,
} = require('rambdax')
const { fixToolbelt } = require('../_methods/fixToolbelt')
const { getTypings } = require('../_methods/getTypings')
const { readFileSync, writeFileSync, existsSync } = require('fs')
const { resolve } = require('path')
s()

const MARKER_CODE = '```'
const MARKER_METHOD = '#### '

const contentPath = resolve(__dirname, '../../rambda/files/README.md')

const getMethodName = input => {
  const [ methodName ] = input.split('>').map(trim)

  return methodName
}

function getExample(input){
  if (!input.includes(MARKER_CODE)) return ''

  const [ , code ] = input.split(MARKER_CODE)

  return code.trim()
}

function getCode(methodName){
  const file = methodName === 'test' ? 'testMethod' : methodName

  const path = resolve(__dirname, `../../rambda/src/${ file }.js`)
  if (!existsSync(path)) return ''

  return readFileSync(path)
    .toString()
    .trim()
}

function getSpec(methodName){
  const file = methodName === 'test' ? 'testMethod' : methodName

  const path = resolve(__dirname, `../../rambda/src/${ file }.spec.js`)
  if (!existsSync(path)) return ''

  return readFileSync(path).toString()
}

function getTypingSpec(methodName){
  const path = resolve(__dirname, `../../rambda/_typings_tests/${ methodName }-spec.ts`)
  if (!existsSync(path)) return ''

  return readFileSync(path).toString()
}

function getBenchmark(methodName){
  const path = resolve(__dirname, `../../rambda/benchmarks/${ methodName }.js`)
  const resultPath = resolve(__dirname,
    `../../rambda/benchmarks/benchmark_results/${ methodName }.json`)
  if (!existsSync(path) || !existsSync(resultPath)) return {}

  return {
    result : JSON.parse(readFileSync(resultPath).toString()),
    spec   : readFileSync(path).toString(),
  }
}

function getRamdaDiff(methodName){
  const path = resolve(__dirname, `../../rambda/files/failing_ramda_tests/${ methodName }.js`)
  if (!existsSync(path)) return ''

  return readFileSync(path).toString()
}

function getExplanation(input, example){
  const [ found ] = match(/>(\n|.)+```/, input)
  if (!found) return ''

  const toReturn = remove([ example, /```/g, />.+/ ], found)

  return toReturn
}

function parse(input, typingsData){
  const methodName = getMethodName(input)
  const example = getExample(input)
  const code = getCode(methodName)
  const spec = getSpec(methodName)
  const typingSpec = getTypingSpec(methodName)
  const benchmark = getBenchmark(methodName)
  const typing = defaultTo('', typingsData[ methodName ])
  const ramdaDiff = getRamdaDiff(methodName)
  const explanation = getExplanation(input, example)

  return {
    explanation,
    ramdaDiff,
    typing,
    benchmark,
    typingSpec,
    methodName,
    example,
    code,
    spec,
  }
}

function attachDescriptions(sk){
  const content = readFileSync(resolve(__dirname, '../../rambda/files/index.d.ts')).toString()

  let toReturn = fixToolbelt(content)

  forEach(x => {
    if (!x.explanation) return
    if (!x.typing) return

    const a = replace(
      x.typing, `/*\n\t\t\t${ x.explanation }\t\n\t\t*/\t${ x.typing }`, toReturn
    )
    toReturn = a
  })(sk)

  return remove(/\/\/\sSINGLE_MARKER/g, toReturn)
}

function writeJson(json, path){
  writeFileSync(path, JSON.stringify(
    json, null, 2
  ))
}

function populate(){
  const typingsData = getTypings()

  const content = readFileSync(contentPath).toString()
  const finalResult = content
    .s(x => x.split(MARKER_METHOD))
    .s(tail)
    .s(init)
    .s(x => x.map(y => parse(y, typingsData)))
    .s(filter(x => x.code))
    .s(mapToObject(x => ({ [ x.methodName ] : x })))

  const ramdaTypings = attachDescriptions(finalResult)

  writeFileSync(resolve(__dirname, '../../rambda/index.d.ts'), ramdaTypings)
  writeJson(finalResult, `${ __dirname }/populated.json`)

  return finalResult
}

exports.populate = populate

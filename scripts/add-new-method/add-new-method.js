const R = require('ramda')
const Rambda = require('rambda')
const {interpolate, replace} = require('rambdax')
const { camelCase } = require("string-fn");
const { log } = require("helpers-fn");
const { resolve } = require("path");
const { existsSync } = require("fs");
const { readFile, outputFile } = require("fs-extra");

const RAMBDA_MARKER = '// RAMBDAX_MARKER_START'
const RAMBDAX_MARKER = '// RAMBDAX_MARKER_END'

const methodTemplate = `
export function {{name}}(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => {{name}}(foo, _bar);
  }

  return
}
`.trim()

const testTemplate = `
import { {{name}} } from './{{name}}'

test('happy', () => {
  const result = {{name}}()
  console.log(result)
})
`.trim()

const testTemplateWithComment = `
import { {{name}} } from './{{name}}'

test('happy', () => {
  const result = {{name}}()
  console.log(result)
})

/*
{{ramdaSpecs}}
*/
`.trim()


const typescriptTestTemplate = `
import { {{name}} } from 'rambda'

describe('R.{{name}}', () => {
  it('happy', () => {
    const result = {{name}}()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = {{name}}()

    result // $ExpectType number
  })
})
`.trim()

const descriptionTemplate = `
/*
Method: {{name}}

Explanation:

Example:

\`\`\`
\`\`\`

Categories:

Notes:

*/
// @SINGLE_MARKER
export function {{name}}<T>(x: T): T;
`.trim()

function attachDescription({methodName, allDescriptions, isRambdax}){
  const description = interpolate(descriptionTemplate, {name: methodName})
  const marker = isRambdax ? RAMBDAX_MARKER : RAMBDA_MARKER

  return replace(
    marker,
    `${description}\n\n${marker}\n`,
    allDescriptions
    )
}

async function createMethodFile(methodName){
  const methodPath = resolve(__dirname, `../../source/${methodName}.js`)
  const content = interpolate(methodTemplate, {name: methodName})
  await outputFile(methodPath, content)
}

async function createTestFile(methodName, ramdaSpecs){
  const testPath = resolve(__dirname, `../../source/${methodName}.spec.js`)
  const content = ramdaSpecs ? 
  interpolate(testTemplateWithComment, {name: methodName, ramdaSpecs}) :
  interpolate(testTemplate, {name: methodName})

  await outputFile(testPath, content)
}

async function createTypescriptTestFile(methodName){
  const typescriptTestPath = resolve(__dirname, `../../source/${methodName}-spec.ts`)
  const content = interpolate(typescriptTestTemplate, {name: methodName})
  await outputFile(typescriptTestPath, content)
}

async function addNewMethod(methodName){
  if(Object.keys(Rambda).includes(methodName)){
    return log(`${methodName} already exists`,'error')
  }
  const isRambdax = Object.keys(R).includes(methodName) === false
  const ramdaSpecPath = resolve(__dirname,`../run-ramda-specs/ramda/test/${methodName}.js`)
  const ramdaSpecs = existsSync(resolve(__dirname, ramdaSpecPath)) ?
    (await readFile(ramdaSpecPath)).toString() :
    false

  const descriptionPath = resolve(__dirname, '../../files/index.d.ts')
  const descriptions = (await readFile(descriptionPath)).toString()
  const newDescriptions = attachDescription({allDescriptions: descriptions, isRambdax, methodName})

  await createMethodFile(methodName)
  await createTestFile(methodName, ramdaSpecs)
  await createTypescriptTestFile(methodName)
  await outputFile(descriptionPath, newDescriptions)
  log(`${methodName} is created`, 'success');
}

void async function cli(){
  if(process.argv.length !== 3){
    throw new Error('Missing method name or too many arguments')
  }
  await addNewMethod(camelCase(process.argv[2]))
}()
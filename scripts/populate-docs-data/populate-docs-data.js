import { outputJSON } from 'fs-extra'
import { map, mapToObject, pick, piped, pluck } from 'rambdax'

import { extractDefinition } from './extract-from-typings/extract-definition'
import { extractExample } from './extract-from-typings/extract-example'
import { extractExplanation } from './extract-from-typings/extract-explanation'
import { extractNotes } from './extract-from-typings/extract-notes'
import { failedRamdaTests } from './extracts/failed-ramda-tests'
import { failedTestsReasons } from './extracts/failed-tests-reasons'
import { rambdaSpecs as rambdaSpecsMethod } from './extracts/rambda-specs.js'
import { typingsTests as typingsTestsMethod } from './extracts/typings-tests'

function initiateData(definitions, key){
  return map(x => ({ [ key ] : x }))(definitions)
}

function appendData({ input, prop, hash }){
  return map((x, methodName) => {
    if (!hash[ methodName ]) return x

    return {
      ...x,
      [ prop ] : hash[ methodName ],
    }
  })(input)
}

export async function populateDocsData(){
  const definitions = extractDefinition()
  const rambdaSpecs = await rambdaSpecsMethod()
  const typingsTests = await typingsTestsMethod()
  const examples = extractExample()
  const explanations = extractExplanation()
  const notes = extractNotes()
  const failedRamdaSpecs = failedRamdaTests()
  const failedSpecsReasons = failedTestsReasons()

  const toSave = piped(
    initiateData(definitions, 'typing'),
    input => appendData({
      input,
      prop : 'notes',
      hash : notes,
    }),
    input => appendData({
      input,
      prop : 'rambdaSpecs',
      hash : rambdaSpecs,
    }),
    input => appendData({
      input,
      prop : 'explanation',
      hash : explanations,
    }),
    input => appendData({
      input,
      prop : 'example',
      hash : examples,
    }),
    input =>
      appendData({
        input,
        prop : 'typescriptDefinitionTest',
        hash : typingsTests,
      }),
    input =>
      appendData({
        input,
        prop : 'failedRamdaSpecs',
        hash : failedRamdaSpecs,
      }),
    input =>
      appendData({
        input,
        prop : 'failedSpecsReasons',
        hash : failedSpecsReasons,
      })
  )

  await outputJSON(
    `${ __dirname }/data.json`, toSave, { spaces : 2 }
  )

  return toSave
}

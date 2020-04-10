import { outputJSON } from 'fs-extra'
import { map, piped } from 'rambdax'

import { createExportedTypings } from './create-exported-typings'
import { extractDefinition } from './extract-from-typings/extract-definition'
import { extractExample } from './extract-from-typings/extract-example'
import { extractExplanation } from './extract-from-typings/extract-explanation'
import { extractNotes } from './extract-from-typings/extract-notes'
import { benchmarkInfo as benchmarkInfoMethod } from './extracts/benchmark-info'
import { failedRamdaTests } from './extracts/failed-ramda-tests'
import { failedTestsReasons } from './extracts/failed-tests-reasons'
import { rambdaSource as rambdaSourceMethod } from './extracts/rambda-source'
import { rambdaSpecs as rambdaSpecsMethod } from './extracts/rambda-specs'
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
  await createExportedTypings()

  const definitions = extractDefinition()
  const rambdaSource = await rambdaSourceMethod()
  const rambdaSpecs = await rambdaSpecsMethod()
  const typingsTests = await typingsTestsMethod()
  const benchmarkInfo = await benchmarkInfoMethod()
  const examples = extractExample()
  const explanations = extractExplanation()
  const notes = extractNotes()
  const failedRamdaSpecs = failedRamdaTests()
  const failedSpecsReasons = failedTestsReasons()

  const toSave = piped(
    initiateData(definitions, 'typing'),
    input =>
      appendData({
        input,
        prop : 'notes',
        hash : notes,
      }),
    input =>
      appendData({
        input,
        prop : 'rambdaSource',
        hash : rambdaSource,
      }),
    input =>
      appendData({
        input,
        prop : 'rambdaSpecs',
        hash : rambdaSpecs,
      }),
    input =>
      appendData({
        input,
        prop : 'benchmarkInfo',
        hash : benchmarkInfo,
      }),
    input =>
      appendData({
        input,
        prop : 'explanation',
        hash : explanations,
      }),
    input =>
      appendData({
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

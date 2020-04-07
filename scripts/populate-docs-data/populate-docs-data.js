import { map, mapToObject, pick, pluck } from 'rambdax'

import { extractDefinition } from './extract-from-typings/extract-definition'
import { extractExample } from './extract-from-typings/extract-example'
import { extractExplanation } from './extract-from-typings/extract-explanation'
import { extractNotes } from './extract-from-typings/extract-notes'
import { failedRamdaTests } from './extracts/failed-ramda-tests'

function mergeObjects(
  source, newSourceKey, objectOfObjects
){
  const keys = Object.keys(objectOfObjects)
  const listOfObjects = Object.values(objectOfObjects)

  return map((sourceValue, sourceProp) => {
    const withMergedProps = mapToObject(() => {
      const plucked = pluck(sourceProp, listOfObjects)
      const toReturn = {}
      plucked.forEach((x, i) => {
        toReturn[ keys[ i ] ] = x
      })

      return toReturn
    })(keys)

    return {
      ...withMergedProps,
      [ newSourceKey ] : sourceValue,
    }
  })(source)
}

export function populateDocsData(){
  const definitions = extractDefinition()
  const examples = extractExample()
  const explanations = extractExplanation()
  const notes = extractNotes()
  const failedRamdaSpecs = failedRamdaTests()

  // const dataToInject = {
  //   example: pick('pipe,add,adjust')(examples),
  //   note: pick('pipe,add,adjust')(notes),
  //   explanation: pick('pipe,add,adjust')(explanations),
  // }

  const dataToInject = {
    example     : examples,
    note        : notes,
    explanation : explanations,
    failedRamdaSpecs,
  }

  return mergeObjects(
    definitions, 'typing', dataToInject
  )
}

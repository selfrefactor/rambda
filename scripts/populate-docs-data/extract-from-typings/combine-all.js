import { map, mapToObject, pluck, pick } from 'rambdax'

import { extractDefinition } from './extract-definition'
import { extractExample } from './extract-example'
import { extractExplanation } from './extract-explanation'
import { extractNotes } from './extract-notes'

function mergeObjects(
  source, newSourceKey, objectOfObjects
){
  const keys = Object.keys(objectOfObjects)
  const listOfObjects = Object.values(objectOfObjects)

  return map((sourceValue, sourceProp) => {
    const withMergedProps = mapToObject(() => {
      const plucked = pluck(sourceProp, listOfObjects)
      const toReturn = {}
      plucked.forEach((x,i) => {
        toReturn[keys[i]] = x
      })
      return toReturn
    })(keys)

    return {
      ...withMergedProps,
      [ newSourceKey ] : sourceValue,
    }
  })(source)
}

export function combineAll(){
  const definitions = extractDefinition()
  const examples = extractExample()
  const explanations = extractExplanation()
  const notes = extractNotes()
  // const dataToInject = {
  //   example: pick('pipe,add,adjust')(examples),
  //   note: pick('pipe,add,adjust')(notes),
  //   explanation: pick('pipe,add,adjust')(explanations),
  // }
  const dataToInject = {
    example: examples,
    note: notes,
    explanation: explanations,
  }

  return mergeObjects(
    definitions, 'typing', dataToInject
    // pick('pipe,add,adjust')(definitions), 'typing', dataToInject
  )
}

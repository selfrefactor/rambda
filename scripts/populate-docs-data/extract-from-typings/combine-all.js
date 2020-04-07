import { map, mapToObject, pluck } from 'rambdax'

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
    const withMergedProps = mapToObject(singleKey => {
      const plucked = pluck(sourceProp, listOfObjects)

      return mapToObject(singlePlucked => ({ [ singleKey ] : singlePlucked }))(plucked)
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

  return mergeObjects(
    definitions, 'typing', {
      examples,
      explanations,
    }
  )
}

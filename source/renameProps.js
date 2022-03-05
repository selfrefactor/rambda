import { mergeRight } from './mergeRight.js'
import { omit } from './omit.js'

export function renameProps(conditions, inputObject){
  if (arguments.length === 1){
    return inputObjectHolder => renameProps(conditions, inputObjectHolder)
  }
  const renamed = {}
  Object.keys(conditions).forEach(condition => {
    if (Object.keys(inputObject).includes(condition)){
      renamed[ conditions[ condition ] ] = inputObject[ condition ]
    }
  })

  return mergeRight(renamed, omit(Object.keys(conditions), inputObject))
}

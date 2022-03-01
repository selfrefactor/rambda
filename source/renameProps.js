import { merge } from './merge.js'
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

  return merge(renamed, omit(Object.keys(conditions), inputObject))
}

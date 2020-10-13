import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function dropRepeats(list){
  if (!_isArray(list)){
    throw new Error(`${ list } is not a list`)
  }

  const toReturn = []

  list.reduce((prev, current) => {
    if (!equals(prev, current)){
      toReturn.push(current)
    }

    return current
  }, undefined)

  return toReturn
}

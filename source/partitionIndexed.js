import { isArray } from './_internals/isArray.js'
import { partitionArray, partitionObject } from './partition.js'

export function partitionIndexed(predicate, iterable){
  if (arguments.length === 1){
    return listHolder => partitionIndexed(predicate, listHolder)
  }
  if (!isArray(iterable)) return partitionObject(predicate, iterable)

  return partitionArray(
    predicate, iterable, true
  )
}

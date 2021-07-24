import { partitionObject, partitionArray } from './partition'
import { _isArray } from './_internals/_isArray'

export function partitionIndexed(predicate, iterable){
  if (arguments.length === 1){
    return listHolder => partitionIndexed(predicate, listHolder)
  }
  if (!_isArray(iterable)) return partitionObject(predicate, iterable)

  return partitionArray(predicate, iterable, true)
}

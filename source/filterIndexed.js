import { isArray } from './_internals/isArray.js'
import { filterArray, filterObject } from './filter.js'

export function filterIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => filterIndexed(predicate, _iterable)
  if (!iterable) return []
  if (isArray(iterable)) return filterArray(
    predicate, iterable, true
  )

  return filterObject(predicate, iterable)
}

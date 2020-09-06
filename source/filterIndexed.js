import { _isArray } from './_internals/_isArray'
import { filterArray, filterObject } from './filter'

export function filterIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => filterIndexed(predicate, _iterable)
  if (!iterable) return []
  if (_isArray(iterable)) return filterArray(
    predicate, iterable, true
  )

  return filterObject(predicate, iterable)
}

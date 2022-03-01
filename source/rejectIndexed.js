import { _isArray } from './_internals/_isArray.js'
import { filterArray, filterObject } from './filter.js'

export function rejectIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => rejectIndexed(predicate, _iterable)

  if (!iterable) throw new Error(`"${ iterable }" is not iterable`)
  if (_isArray(iterable))
    return filterArray(
      (x, i) => !predicate(x, i), iterable, true
    )

  return filterObject(
    (x, prop) => !predicate(x, prop), iterable, true
  )
}

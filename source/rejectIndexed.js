import { isArray } from './_internals/isArray.js'
import { filterArray, filterObject } from './filter.js'

export function rejectIndexed(predicate, iterable){
  if (arguments.length === 1)
    return _iterable => rejectIndexed(predicate, _iterable)

  if (!iterable) throw new Error(`"${ iterable }" is not iterable`)
  if (isArray(iterable))
    return filterArray(
      (x, i) => !predicate(x, i), iterable, true
    )

  return filterObject(
    (x, prop) => !predicate(x, prop), iterable, true
  )
}

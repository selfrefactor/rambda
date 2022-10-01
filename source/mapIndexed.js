import { isArray } from './_internals/isArray.js'
import { mapArray, mapObject } from './map.js'

export function mapIndexed(fn, iterable){
  if (arguments.length === 1){
    return _iterable => mapIndexed(fn, _iterable)
  }
  if (iterable === undefined) return []
  if (isArray(iterable)) return mapArray(
    fn, iterable, true
  )

  return mapObject(fn, iterable)
}

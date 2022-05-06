import { mapIndexed } from './mapIndexed.js'

export function forEachIndexed(fn, iterable){
  if (arguments.length === 1){
    return _iterable => forEachIndexed(fn, _iterable)
  }

  mapIndexed(fn, iterable)

  return iterable
}

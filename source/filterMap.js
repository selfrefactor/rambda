import {mapFn} from './map.js'

export function filterMap(fn) {
  return list => mapFn(fn, list).filter(Boolean)
}

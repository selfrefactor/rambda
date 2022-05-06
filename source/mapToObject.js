import { map } from './map.js'
import { mergeAll } from './mergeAll.js'
import { ok } from './ok.js'
import { type } from './type.js'

export function mapToObject(fn, list){
  if (arguments.length === 1){
    return listHolder => mapToObject(fn, listHolder)
  }
  ok(type(fn), type(list))('Function', 'Array')

  return mergeAll(map(fn, list))
}

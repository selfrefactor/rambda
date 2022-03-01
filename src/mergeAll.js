import { map } from './map.js'
import { merge } from './merge.js'

export function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}

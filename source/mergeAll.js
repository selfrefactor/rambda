import { map } from './map'
import { merge } from './merge'

export function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}

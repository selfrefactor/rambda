import { merge } from './merge.js'

export function mergeLeft(x, y){
  if (arguments.length === 1) return _y => mergeLeft(x, _y)

  return merge(y, x)
}

import { merge } from './merge'

export function mergeRight(x, y){
  return merge(y, x)
}

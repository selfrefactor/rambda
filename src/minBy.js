import { curry } from './curry'

function minByRaw(fn, x, y){
  return fn(y) < fn(x) ? y : x
}

export const minBy = curry(minByRaw)

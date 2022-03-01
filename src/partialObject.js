import { mergeDeepRight } from './mergeDeepRight.js'

export function partialObject(fn, a){
  if (arguments.length === 1){
    return _a => partialObject(fn, _a)
  }

  return b => fn(mergeDeepRight(a, b))
}

import { type } from '../type'

export function isFalsy(x){
  if (Array.isArray(x)){
    return x.length === 0
  }
  if (type(x) === 'Object'){
    return Object.keys(x).length === 0
  }

  return !x
}

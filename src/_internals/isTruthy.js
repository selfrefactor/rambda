import { type } from '../type'
import { _isArray } from './_isArray'

export function isTruthy(x){
  if (_isArray(x)){
    return x.length > 0
  }
  if (type(x) === 'Object'){
    return Object.keys(x).length > 0
  }

  return Boolean(x)
}

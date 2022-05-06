import { type } from '../type.js'

export function _isObject(input){
  return type(input) === 'Object'
}

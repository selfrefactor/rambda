import {type} from '../type'

export function _isIterable(input) {
  return ['Object', 'Array'].includes(type(input))
}
